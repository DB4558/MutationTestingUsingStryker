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
const TargetSum = stryMutAct_9fa48("410") ? {} : (stryCov_9fa48("410"), {
  findTargetSumWays: function (nums, target) {
    if (stryMutAct_9fa48("411")) {
      {}
    } else {
      stryCov_9fa48("411");
      let sum = 0;
      for (let num of nums) {
        if (stryMutAct_9fa48("412")) {
          {}
        } else {
          stryCov_9fa48("412");
          stryMutAct_9fa48("413") ? sum -= num : (stryCov_9fa48("413"), sum += num);
        }
      }
      if (stryMutAct_9fa48("416") ? (target + sum) % 2 !== 0 && target + sum < 0 : stryMutAct_9fa48("415") ? false : stryMutAct_9fa48("414") ? true : (stryCov_9fa48("414", "415", "416"), (stryMutAct_9fa48("418") ? (target + sum) % 2 === 0 : stryMutAct_9fa48("417") ? false : (stryCov_9fa48("417", "418"), (stryMutAct_9fa48("419") ? (target + sum) * 2 : (stryCov_9fa48("419"), (stryMutAct_9fa48("420") ? target - sum : (stryCov_9fa48("420"), target + sum)) % 2)) !== 0)) || (stryMutAct_9fa48("423") ? target + sum >= 0 : stryMutAct_9fa48("422") ? target + sum <= 0 : stryMutAct_9fa48("421") ? false : (stryCov_9fa48("421", "422", "423"), (stryMutAct_9fa48("424") ? target - sum : (stryCov_9fa48("424"), target + sum)) < 0)))) {
        if (stryMutAct_9fa48("425")) {
          {}
        } else {
          stryCov_9fa48("425");
          return 0;
        }
      }
      const diff = stryMutAct_9fa48("426") ? (target + sum) * 2 : (stryCov_9fa48("426"), (stryMutAct_9fa48("427") ? target - sum : (stryCov_9fa48("427"), target + sum)) / 2);
      const dp = (stryMutAct_9fa48("428") ? new Array() : (stryCov_9fa48("428"), new Array(stryMutAct_9fa48("429") ? diff - 1 : (stryCov_9fa48("429"), diff + 1)))).fill(0);
      dp[0] = 1;
      for (let num of nums) {
        if (stryMutAct_9fa48("430")) {
          {}
        } else {
          stryCov_9fa48("430");
          for (let j = diff; stryMutAct_9fa48("433") ? j < num : stryMutAct_9fa48("432") ? j > num : stryMutAct_9fa48("431") ? false : (stryCov_9fa48("431", "432", "433"), j >= num); stryMutAct_9fa48("434") ? j++ : (stryCov_9fa48("434"), j--)) {
            if (stryMutAct_9fa48("435")) {
              {}
            } else {
              stryCov_9fa48("435");
              stryMutAct_9fa48("436") ? dp[j] -= dp[j - num] : (stryCov_9fa48("436"), dp[j] += dp[stryMutAct_9fa48("437") ? j + num : (stryCov_9fa48("437"), j - num)]);
            }
          }
        }
      }
      return dp[diff];
    }
  }
});
module.exports = TargetSum;