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
class EditDistance {
  minDistance(word1, word2) {
    if (stryMutAct_9fa48("0")) {
      {}
    } else {
      stryCov_9fa48("0");
      const len1 = word1.length;
      const len2 = word2.length;
      const dp = Array.from(stryMutAct_9fa48("1") ? {} : (stryCov_9fa48("1"), {
        length: stryMutAct_9fa48("2") ? len1 - 1 : (stryCov_9fa48("2"), len1 + 1)
      }), stryMutAct_9fa48("3") ? () => undefined : (stryCov_9fa48("3"), () => stryMutAct_9fa48("4") ? Array().fill(0) : (stryCov_9fa48("4"), Array(stryMutAct_9fa48("5") ? len2 - 1 : (stryCov_9fa48("5"), len2 + 1)).fill(0))));

      // Initialize base cases
      for (let i = 0; stryMutAct_9fa48("8") ? i > len1 : stryMutAct_9fa48("7") ? i < len1 : stryMutAct_9fa48("6") ? false : (stryCov_9fa48("6", "7", "8"), i <= len1); stryMutAct_9fa48("9") ? i-- : (stryCov_9fa48("9"), i++)) {
        if (stryMutAct_9fa48("10")) {
          {}
        } else {
          stryCov_9fa48("10");
          dp[i][0] = i; // Deleting all characters of word1
        }
      }
      for (let j = 0; stryMutAct_9fa48("13") ? j > len2 : stryMutAct_9fa48("12") ? j < len2 : stryMutAct_9fa48("11") ? false : (stryCov_9fa48("11", "12", "13"), j <= len2); stryMutAct_9fa48("14") ? j-- : (stryCov_9fa48("14"), j++)) {
        if (stryMutAct_9fa48("15")) {
          {}
        } else {
          stryCov_9fa48("15");
          dp[0][j] = j; // Inserting all characters of word2
        }
      }

      // Fill the dp table
      for (let i = 0; stryMutAct_9fa48("18") ? i >= len1 : stryMutAct_9fa48("17") ? i <= len1 : stryMutAct_9fa48("16") ? false : (stryCov_9fa48("16", "17", "18"), i < len1); stryMutAct_9fa48("19") ? i-- : (stryCov_9fa48("19"), i++)) {
        if (stryMutAct_9fa48("20")) {
          {}
        } else {
          stryCov_9fa48("20");
          const c1 = stryMutAct_9fa48("21") ? word1 : (stryCov_9fa48("21"), word1.charAt(i));
          for (let j = 0; stryMutAct_9fa48("24") ? j >= len2 : stryMutAct_9fa48("23") ? j <= len2 : stryMutAct_9fa48("22") ? false : (stryCov_9fa48("22", "23", "24"), j < len2); stryMutAct_9fa48("25") ? j-- : (stryCov_9fa48("25"), j++)) {
            if (stryMutAct_9fa48("26")) {
              {}
            } else {
              stryCov_9fa48("26");
              const c2 = stryMutAct_9fa48("27") ? word2 : (stryCov_9fa48("27"), word2.charAt(j));
              if (stryMutAct_9fa48("30") ? c1 !== c2 : stryMutAct_9fa48("29") ? false : stryMutAct_9fa48("28") ? true : (stryCov_9fa48("28", "29", "30"), c1 === c2)) {
                if (stryMutAct_9fa48("31")) {
                  {}
                } else {
                  stryCov_9fa48("31");
                  dp[stryMutAct_9fa48("32") ? i - 1 : (stryCov_9fa48("32"), i + 1)][stryMutAct_9fa48("33") ? j - 1 : (stryCov_9fa48("33"), j + 1)] = dp[i][j]; // Characters match
                }
              } else {
                if (stryMutAct_9fa48("34")) {
                  {}
                } else {
                  stryCov_9fa48("34");
                  // Calculate the minimum of insert, delete, and replace
                  const replace = stryMutAct_9fa48("35") ? dp[i][j] - 1 : (stryCov_9fa48("35"), dp[i][j] + 1);
                  const insert = stryMutAct_9fa48("36") ? dp[i][j + 1] - 1 : (stryCov_9fa48("36"), dp[i][stryMutAct_9fa48("37") ? j - 1 : (stryCov_9fa48("37"), j + 1)] + 1);
                  const deletescript = stryMutAct_9fa48("38") ? dp[i + 1][j] - 1 : (stryCov_9fa48("38"), dp[stryMutAct_9fa48("39") ? i - 1 : (stryCov_9fa48("39"), i + 1)][j] + 1);
                  dp[stryMutAct_9fa48("40") ? i - 1 : (stryCov_9fa48("40"), i + 1)][stryMutAct_9fa48("41") ? j - 1 : (stryCov_9fa48("41"), j + 1)] = stryMutAct_9fa48("42") ? Math.max(replace, Math.min(insert, deletescript)) : (stryCov_9fa48("42"), Math.min(replace, stryMutAct_9fa48("43") ? Math.max(insert, deletescript) : (stryCov_9fa48("43"), Math.min(insert, deletescript))));
                }
              }
            }
          }
        }
      }
      return dp[len1][len2];
    }
  }
}
module.exports = EditDistance;