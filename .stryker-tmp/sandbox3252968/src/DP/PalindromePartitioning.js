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
class PalindromePartitioning {
  static minimalPartitions(word) {
    if (stryMutAct_9fa48("220")) {
      {}
    } else {
      stryCov_9fa48("220");
      const len = word.length;
      const minCuts = (stryMutAct_9fa48("221") ? new Array() : (stryCov_9fa48("221"), new Array(len))).fill(0);
      const isPalindrome = Array.from(stryMutAct_9fa48("222") ? {} : (stryCov_9fa48("222"), {
        length: len
      }), stryMutAct_9fa48("223") ? () => undefined : (stryCov_9fa48("223"), () => (stryMutAct_9fa48("224") ? new Array() : (stryCov_9fa48("224"), new Array(len))).fill(stryMutAct_9fa48("225") ? true : (stryCov_9fa48("225"), false))));

      // Single character substrings are palindromes
      for (let i = 0; stryMutAct_9fa48("228") ? i >= len : stryMutAct_9fa48("227") ? i <= len : stryMutAct_9fa48("226") ? false : (stryCov_9fa48("226", "227", "228"), i < len); stryMutAct_9fa48("229") ? i-- : (stryCov_9fa48("229"), i++)) {
        if (stryMutAct_9fa48("230")) {
          {}
        } else {
          stryCov_9fa48("230");
          isPalindrome[i][i] = stryMutAct_9fa48("231") ? false : (stryCov_9fa48("231"), true);
        }
      }

      // Build the solution in a bottom-up manner
      for (let L = 2; stryMutAct_9fa48("234") ? L > len : stryMutAct_9fa48("233") ? L < len : stryMutAct_9fa48("232") ? false : (stryCov_9fa48("232", "233", "234"), L <= len); stryMutAct_9fa48("235") ? L-- : (stryCov_9fa48("235"), L++)) {
        if (stryMutAct_9fa48("236")) {
          {}
        } else {
          stryCov_9fa48("236");
          for (let i = 0; stryMutAct_9fa48("239") ? i >= len - L + 1 : stryMutAct_9fa48("238") ? i <= len - L + 1 : stryMutAct_9fa48("237") ? false : (stryCov_9fa48("237", "238", "239"), i < (stryMutAct_9fa48("240") ? len - L - 1 : (stryCov_9fa48("240"), (stryMutAct_9fa48("241") ? len + L : (stryCov_9fa48("241"), len - L)) + 1))); stryMutAct_9fa48("242") ? i-- : (stryCov_9fa48("242"), i++)) {
            if (stryMutAct_9fa48("243")) {
              {}
            } else {
              stryCov_9fa48("243");
              const j = stryMutAct_9fa48("244") ? i + L + 1 : (stryCov_9fa48("244"), (stryMutAct_9fa48("245") ? i - L : (stryCov_9fa48("245"), i + L)) - 1);
              if (stryMutAct_9fa48("248") ? L !== 2 : stryMutAct_9fa48("247") ? false : stryMutAct_9fa48("246") ? true : (stryCov_9fa48("246", "247", "248"), L === 2)) {
                if (stryMutAct_9fa48("249")) {
                  {}
                } else {
                  stryCov_9fa48("249");
                  isPalindrome[i][j] = stryMutAct_9fa48("252") ? word[i] !== word[j] : stryMutAct_9fa48("251") ? false : stryMutAct_9fa48("250") ? true : (stryCov_9fa48("250", "251", "252"), word[i] === word[j]);
                }
              } else {
                if (stryMutAct_9fa48("253")) {
                  {}
                } else {
                  stryCov_9fa48("253");
                  isPalindrome[i][j] = stryMutAct_9fa48("256") ? word[i] === word[j] || isPalindrome[i + 1][j - 1] : stryMutAct_9fa48("255") ? false : stryMutAct_9fa48("254") ? true : (stryCov_9fa48("254", "255", "256"), (stryMutAct_9fa48("258") ? word[i] !== word[j] : stryMutAct_9fa48("257") ? true : (stryCov_9fa48("257", "258"), word[i] === word[j])) && isPalindrome[stryMutAct_9fa48("259") ? i - 1 : (stryCov_9fa48("259"), i + 1)][stryMutAct_9fa48("260") ? j + 1 : (stryCov_9fa48("260"), j - 1)]);
                }
              }
            }
          }
        }
      }
      for (let i = 0; stryMutAct_9fa48("263") ? i >= len : stryMutAct_9fa48("262") ? i <= len : stryMutAct_9fa48("261") ? false : (stryCov_9fa48("261", "262", "263"), i < len); stryMutAct_9fa48("264") ? i-- : (stryCov_9fa48("264"), i++)) {
        if (stryMutAct_9fa48("265")) {
          {}
        } else {
          stryCov_9fa48("265");
          if (stryMutAct_9fa48("267") ? false : stryMutAct_9fa48("266") ? true : (stryCov_9fa48("266", "267"), isPalindrome[0][i])) {
            if (stryMutAct_9fa48("268")) {
              {}
            } else {
              stryCov_9fa48("268");
              minCuts[i] = 0;
            }
          } else {
            if (stryMutAct_9fa48("269")) {
              {}
            } else {
              stryCov_9fa48("269");
              minCuts[i] = Infinity;
              for (let j = 0; stryMutAct_9fa48("272") ? j >= i : stryMutAct_9fa48("271") ? j <= i : stryMutAct_9fa48("270") ? false : (stryCov_9fa48("270", "271", "272"), j < i); stryMutAct_9fa48("273") ? j-- : (stryCov_9fa48("273"), j++)) {
                if (stryMutAct_9fa48("274")) {
                  {}
                } else {
                  stryCov_9fa48("274");
                  if (stryMutAct_9fa48("277") ? isPalindrome[j + 1][i] || 1 + minCuts[j] < minCuts[i] : stryMutAct_9fa48("276") ? false : stryMutAct_9fa48("275") ? true : (stryCov_9fa48("275", "276", "277"), isPalindrome[stryMutAct_9fa48("278") ? j - 1 : (stryCov_9fa48("278"), j + 1)][i] && (stryMutAct_9fa48("281") ? 1 + minCuts[j] >= minCuts[i] : stryMutAct_9fa48("280") ? 1 + minCuts[j] <= minCuts[i] : stryMutAct_9fa48("279") ? true : (stryCov_9fa48("279", "280", "281"), (stryMutAct_9fa48("282") ? 1 - minCuts[j] : (stryCov_9fa48("282"), 1 + minCuts[j])) < minCuts[i])))) {
                    if (stryMutAct_9fa48("283")) {
                      {}
                    } else {
                      stryCov_9fa48("283");
                      minCuts[i] = stryMutAct_9fa48("284") ? 1 - minCuts[j] : (stryCov_9fa48("284"), 1 + minCuts[j]);
                    }
                  }
                }
              }
            }
          }
        }
      }
      return minCuts[stryMutAct_9fa48("285") ? len + 1 : (stryCov_9fa48("285"), len - 1)];
    }
  }
}
module.exports = PalindromePartitioning;