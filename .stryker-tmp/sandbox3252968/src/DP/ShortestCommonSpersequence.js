// @ts-nocheck
function stryNS_9fa48() {
  var g = typeof globalThis === 'object' && globalThis && globalThis.Math === Math && globalThis || new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});
  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }
  function retrieveNS() {
    return ns;
  }
  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}
stryNS_9fa48();
function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });
  function cover() {
    var c = cov.static;
    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }
    var a = arguments;
    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }
  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}
function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();
  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }
      return true;
    }
    return false;
  }
  stryMutAct_9fa48 = isActive;
  return isActive(id);
}
class ShortestCommonSupersequence {
  static shortestCommonSupersequence(str1, str2) {
    if (stryMutAct_9fa48("303")) {
      {}
    } else {
      stryCov_9fa48("303");
      const n = str1.length;
      const m = str2.length;
      return this.solve(n, m, str1, str2);
    }
  }
  static solve(n, m, s1, s2) {
    if (stryMutAct_9fa48("304")) {
      {}
    } else {
      stryCov_9fa48("304");
      const dp = Array.from(stryMutAct_9fa48("305") ? {} : (stryCov_9fa48("305"), {
        length: stryMutAct_9fa48("306") ? n - 1 : (stryCov_9fa48("306"), n + 1)
      }), stryMutAct_9fa48("307") ? () => undefined : (stryCov_9fa48("307"), () => (stryMutAct_9fa48("308") ? new Array() : (stryCov_9fa48("308"), new Array(stryMutAct_9fa48("309") ? m - 1 : (stryCov_9fa48("309"), m + 1)))).fill(0)));

      // Build the DP table
      for (let i = 1; stryMutAct_9fa48("312") ? i > n : stryMutAct_9fa48("311") ? i < n : stryMutAct_9fa48("310") ? false : (stryCov_9fa48("310", "311", "312"), i <= n); stryMutAct_9fa48("313") ? i-- : (stryCov_9fa48("313"), i++)) {
        if (stryMutAct_9fa48("314")) {
          {}
        } else {
          stryCov_9fa48("314");
          for (let j = 1; stryMutAct_9fa48("317") ? j > m : stryMutAct_9fa48("316") ? j < m : stryMutAct_9fa48("315") ? false : (stryCov_9fa48("315", "316", "317"), j <= m); stryMutAct_9fa48("318") ? j-- : (stryCov_9fa48("318"), j++)) {
            if (stryMutAct_9fa48("319")) {
              {}
            } else {
              stryCov_9fa48("319");
              if (stryMutAct_9fa48("322") ? s1[i - 1] !== s2[j - 1] : stryMutAct_9fa48("321") ? false : stryMutAct_9fa48("320") ? true : (stryCov_9fa48("320", "321", "322"), s1[stryMutAct_9fa48("323") ? i + 1 : (stryCov_9fa48("323"), i - 1)] === s2[stryMutAct_9fa48("324") ? j + 1 : (stryCov_9fa48("324"), j - 1)])) {
                if (stryMutAct_9fa48("325")) {
                  {}
                } else {
                  stryCov_9fa48("325");
                  dp[i][j] = stryMutAct_9fa48("326") ? 1 - dp[i - 1][j - 1] : (stryCov_9fa48("326"), 1 + dp[stryMutAct_9fa48("327") ? i + 1 : (stryCov_9fa48("327"), i - 1)][stryMutAct_9fa48("328") ? j + 1 : (stryCov_9fa48("328"), j - 1)]);
                }
              } else {
                if (stryMutAct_9fa48("329")) {
                  {}
                } else {
                  stryCov_9fa48("329");
                  dp[i][j] = stryMutAct_9fa48("330") ? Math.min(dp[i - 1][j], dp[i][j - 1]) : (stryCov_9fa48("330"), Math.max(dp[stryMutAct_9fa48("331") ? i + 1 : (stryCov_9fa48("331"), i - 1)][j], dp[i][stryMutAct_9fa48("332") ? j + 1 : (stryCov_9fa48("332"), j - 1)]));
                }
              }
            }
          }
        }
      }

      // Trace back the shortest common supersequence
      let i = n,
        j = m;
      const result = stryMutAct_9fa48("333") ? ["Stryker was here"] : (stryCov_9fa48("333"), []);
      while (stryMutAct_9fa48("335") ? i > 0 || j > 0 : stryMutAct_9fa48("334") ? false : (stryCov_9fa48("334", "335"), (stryMutAct_9fa48("338") ? i <= 0 : stryMutAct_9fa48("337") ? i >= 0 : stryMutAct_9fa48("336") ? true : (stryCov_9fa48("336", "337", "338"), i > 0)) && (stryMutAct_9fa48("341") ? j <= 0 : stryMutAct_9fa48("340") ? j >= 0 : stryMutAct_9fa48("339") ? true : (stryCov_9fa48("339", "340", "341"), j > 0)))) {
        if (stryMutAct_9fa48("342")) {
          {}
        } else {
          stryCov_9fa48("342");
          if (stryMutAct_9fa48("345") ? s1[i - 1] !== s2[j - 1] : stryMutAct_9fa48("344") ? false : stryMutAct_9fa48("343") ? true : (stryCov_9fa48("343", "344", "345"), s1[stryMutAct_9fa48("346") ? i + 1 : (stryCov_9fa48("346"), i - 1)] === s2[stryMutAct_9fa48("347") ? j + 1 : (stryCov_9fa48("347"), j - 1)])) {
            if (stryMutAct_9fa48("348")) {
              {}
            } else {
              stryCov_9fa48("348");
              result.push(s1[stryMutAct_9fa48("349") ? i + 1 : (stryCov_9fa48("349"), i - 1)]);
              stryMutAct_9fa48("350") ? i++ : (stryCov_9fa48("350"), i--);
              stryMutAct_9fa48("351") ? j++ : (stryCov_9fa48("351"), j--);
            }
          } else if (stryMutAct_9fa48("355") ? dp[i - 1][j] <= dp[i][j - 1] : stryMutAct_9fa48("354") ? dp[i - 1][j] >= dp[i][j - 1] : stryMutAct_9fa48("353") ? false : stryMutAct_9fa48("352") ? true : (stryCov_9fa48("352", "353", "354", "355"), dp[stryMutAct_9fa48("356") ? i + 1 : (stryCov_9fa48("356"), i - 1)][j] > dp[i][stryMutAct_9fa48("357") ? j + 1 : (stryCov_9fa48("357"), j - 1)])) {
            if (stryMutAct_9fa48("358")) {
              {}
            } else {
              stryCov_9fa48("358");
              result.push(s1[stryMutAct_9fa48("359") ? i + 1 : (stryCov_9fa48("359"), i - 1)]);
              stryMutAct_9fa48("360") ? i++ : (stryCov_9fa48("360"), i--);
            }
          } else {
            if (stryMutAct_9fa48("361")) {
              {}
            } else {
              stryCov_9fa48("361");
              result.push(s2[stryMutAct_9fa48("362") ? j + 1 : (stryCov_9fa48("362"), j - 1)]);
              stryMutAct_9fa48("363") ? j++ : (stryCov_9fa48("363"), j--);
            }
          }
        }
      }

      // Append remaining characters of s1 and s2
      while (stryMutAct_9fa48("366") ? i <= 0 : stryMutAct_9fa48("365") ? i >= 0 : stryMutAct_9fa48("364") ? false : (stryCov_9fa48("364", "365", "366"), i > 0)) {
        if (stryMutAct_9fa48("367")) {
          {}
        } else {
          stryCov_9fa48("367");
          result.push(s1[stryMutAct_9fa48("368") ? i + 1 : (stryCov_9fa48("368"), i - 1)]);
          stryMutAct_9fa48("369") ? i++ : (stryCov_9fa48("369"), i--);
        }
      }
      while (stryMutAct_9fa48("372") ? j <= 0 : stryMutAct_9fa48("371") ? j >= 0 : stryMutAct_9fa48("370") ? false : (stryCov_9fa48("370", "371", "372"), j > 0)) {
        if (stryMutAct_9fa48("373")) {
          {}
        } else {
          stryCov_9fa48("373");
          result.push(s2[stryMutAct_9fa48("374") ? j + 1 : (stryCov_9fa48("374"), j - 1)]);
          stryMutAct_9fa48("375") ? j++ : (stryCov_9fa48("375"), j--);
        }
      }
      return stryMutAct_9fa48("376") ? result.join('') : (stryCov_9fa48("376"), result.reverse().join(stryMutAct_9fa48("377") ? "Stryker was here!" : (stryCov_9fa48("377"), '')));
    }
  }
}
module.exports = ShortestCommonSupersequence;