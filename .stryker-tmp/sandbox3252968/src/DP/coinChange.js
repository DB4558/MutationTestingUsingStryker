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
class CoinChange {
  // Function to count the number of combinations
  static coinchange(coins, amount) {
    if (stryMutAct_9fa48("453")) {
      {}
    } else {
      stryCov_9fa48("453");
      const combinations = (stryMutAct_9fa48("454") ? new Array() : (stryCov_9fa48("454"), new Array(stryMutAct_9fa48("455") ? amount - 1 : (stryCov_9fa48("455"), amount + 1)))).fill(0);
      combinations[0] = 1;
      for (let coin of coins) {
        if (stryMutAct_9fa48("456")) {
          {}
        } else {
          stryCov_9fa48("456");
          for (let i = coin; stryMutAct_9fa48("459") ? i > amount : stryMutAct_9fa48("458") ? i < amount : stryMutAct_9fa48("457") ? false : (stryCov_9fa48("457", "458", "459"), i <= amount); stryMutAct_9fa48("460") ? i-- : (stryCov_9fa48("460"), i++)) {
            if (stryMutAct_9fa48("461")) {
              {}
            } else {
              stryCov_9fa48("461");
              stryMutAct_9fa48("462") ? combinations[i] -= combinations[i - coin] : (stryCov_9fa48("462"), combinations[i] += combinations[stryMutAct_9fa48("463") ? i + coin : (stryCov_9fa48("463"), i - coin)]);
            }
          }
        }
      }
      return combinations[amount];
    }
  }

  // Function to find the minimum number of coins
  static minimumCoins(coins, amount) {
    if (stryMutAct_9fa48("464")) {
      {}
    } else {
      stryCov_9fa48("464");
      const minimumCoins = (stryMutAct_9fa48("465") ? new Array() : (stryCov_9fa48("465"), new Array(stryMutAct_9fa48("466") ? amount - 1 : (stryCov_9fa48("466"), amount + 1)))).fill(Infinity);
      minimumCoins[0] = 0;
      for (let i = 1; stryMutAct_9fa48("469") ? i > amount : stryMutAct_9fa48("468") ? i < amount : stryMutAct_9fa48("467") ? false : (stryCov_9fa48("467", "468", "469"), i <= amount); stryMutAct_9fa48("470") ? i-- : (stryCov_9fa48("470"), i++)) {
        if (stryMutAct_9fa48("471")) {
          {}
        } else {
          stryCov_9fa48("471");
          for (let coin of coins) {
            if (stryMutAct_9fa48("472")) {
              {}
            } else {
              stryCov_9fa48("472");
              if (stryMutAct_9fa48("476") ? coin > i : stryMutAct_9fa48("475") ? coin < i : stryMutAct_9fa48("474") ? false : stryMutAct_9fa48("473") ? true : (stryCov_9fa48("473", "474", "475", "476"), coin <= i)) {
                if (stryMutAct_9fa48("477")) {
                  {}
                } else {
                  stryCov_9fa48("477");
                  const sub_res = minimumCoins[stryMutAct_9fa48("478") ? i + coin : (stryCov_9fa48("478"), i - coin)];
                  if (stryMutAct_9fa48("481") ? sub_res !== Infinity || sub_res + 1 < minimumCoins[i] : stryMutAct_9fa48("480") ? false : stryMutAct_9fa48("479") ? true : (stryCov_9fa48("479", "480", "481"), (stryMutAct_9fa48("483") ? sub_res === Infinity : stryMutAct_9fa48("482") ? true : (stryCov_9fa48("482", "483"), sub_res !== Infinity)) && (stryMutAct_9fa48("486") ? sub_res + 1 >= minimumCoins[i] : stryMutAct_9fa48("485") ? sub_res + 1 <= minimumCoins[i] : stryMutAct_9fa48("484") ? true : (stryCov_9fa48("484", "485", "486"), (stryMutAct_9fa48("487") ? sub_res - 1 : (stryCov_9fa48("487"), sub_res + 1)) < minimumCoins[i])))) {
                    if (stryMutAct_9fa48("488")) {
                      {}
                    } else {
                      stryCov_9fa48("488");
                      minimumCoins[i] = stryMutAct_9fa48("489") ? sub_res - 1 : (stryCov_9fa48("489"), sub_res + 1);
                    }
                  }
                }
              }
            }
          }
        }
      }
      return (stryMutAct_9fa48("492") ? minimumCoins[amount] !== Infinity : stryMutAct_9fa48("491") ? false : stryMutAct_9fa48("490") ? true : (stryCov_9fa48("490", "491", "492"), minimumCoins[amount] === Infinity)) ? stryMutAct_9fa48("493") ? +1 : (stryCov_9fa48("493"), -1) : minimumCoins[amount];
    }
  }
}
module.exports = CoinChange;