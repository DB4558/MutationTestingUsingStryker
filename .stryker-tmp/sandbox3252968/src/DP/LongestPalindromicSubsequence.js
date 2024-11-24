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
class LongestPalindromicSubsequence {
  static LPS(original) {
    if (stryMutAct_9fa48("153")) {
      {}
    } else {
      stryCov_9fa48("153");
      if (stryMutAct_9fa48("156") ? false : stryMutAct_9fa48("155") ? true : stryMutAct_9fa48("154") ? original : (stryCov_9fa48("154", "155", "156"), !original)) {
        if (stryMutAct_9fa48("157")) {
          {}
        } else {
          stryCov_9fa48("157");
          throw new Error(stryMutAct_9fa48("158") ? "" : (stryCov_9fa48("158"), "Input string cannot be null or undefined"));
        }
      }
      let reverse = stryMutAct_9fa48("159") ? original.split("").join("") : (stryCov_9fa48("159"), original.split(stryMutAct_9fa48("160") ? "Stryker was here!" : (stryCov_9fa48("160"), "")).reverse().join(stryMutAct_9fa48("161") ? "Stryker was here!" : (stryCov_9fa48("161"), "")));
      return this.recursiveLPS(original, reverse);
    }
  }
  static recursiveLPS(original, reverse) {
    if (stryMutAct_9fa48("162")) {
      {}
    } else {
      stryCov_9fa48("162");
      if (stryMutAct_9fa48("165") ? original.length === 0 && reverse.length === 0 : stryMutAct_9fa48("164") ? false : stryMutAct_9fa48("163") ? true : (stryCov_9fa48("163", "164", "165"), (stryMutAct_9fa48("167") ? original.length !== 0 : stryMutAct_9fa48("166") ? false : (stryCov_9fa48("166", "167"), original.length === 0)) || (stryMutAct_9fa48("169") ? reverse.length !== 0 : stryMutAct_9fa48("168") ? false : (stryCov_9fa48("168", "169"), reverse.length === 0)))) {
        if (stryMutAct_9fa48("170")) {
          {}
        } else {
          stryCov_9fa48("170");
          return stryMutAct_9fa48("171") ? "Stryker was here!" : (stryCov_9fa48("171"), "");
        }
      }
      if (stryMutAct_9fa48("174") ? original[original.length - 1] !== reverse[reverse.length - 1] : stryMutAct_9fa48("173") ? false : stryMutAct_9fa48("172") ? true : (stryCov_9fa48("172", "173", "174"), original[stryMutAct_9fa48("175") ? original.length + 1 : (stryCov_9fa48("175"), original.length - 1)] === reverse[stryMutAct_9fa48("176") ? reverse.length + 1 : (stryCov_9fa48("176"), reverse.length - 1)])) {
        if (stryMutAct_9fa48("177")) {
          {}
        } else {
          stryCov_9fa48("177");
          const bestSubResult = this.recursiveLPS(stryMutAct_9fa48("178") ? original : (stryCov_9fa48("178"), original.slice(0, stryMutAct_9fa48("179") ? +1 : (stryCov_9fa48("179"), -1))), stryMutAct_9fa48("180") ? reverse : (stryCov_9fa48("180"), reverse.slice(0, stryMutAct_9fa48("181") ? +1 : (stryCov_9fa48("181"), -1))));
          return stryMutAct_9fa48("182") ? reverse[reverse.length - 1] - bestSubResult : (stryCov_9fa48("182"), reverse[stryMutAct_9fa48("183") ? reverse.length + 1 : (stryCov_9fa48("183"), reverse.length - 1)] + bestSubResult);
        }
      } else {
        if (stryMutAct_9fa48("184")) {
          {}
        } else {
          stryCov_9fa48("184");
          const bestSubResult1 = this.recursiveLPS(original, stryMutAct_9fa48("185") ? reverse : (stryCov_9fa48("185"), reverse.slice(0, stryMutAct_9fa48("186") ? +1 : (stryCov_9fa48("186"), -1))));
          const bestSubResult2 = this.recursiveLPS(stryMutAct_9fa48("187") ? original : (stryCov_9fa48("187"), original.slice(0, stryMutAct_9fa48("188") ? +1 : (stryCov_9fa48("188"), -1))), reverse);
          return (stryMutAct_9fa48("192") ? bestSubResult1.length <= bestSubResult2.length : stryMutAct_9fa48("191") ? bestSubResult1.length >= bestSubResult2.length : stryMutAct_9fa48("190") ? false : stryMutAct_9fa48("189") ? true : (stryCov_9fa48("189", "190", "191", "192"), bestSubResult1.length > bestSubResult2.length)) ? bestSubResult1 : bestSubResult2;
        }
      }
    }
  }
}
module.exports = LongestPalindromicSubsequence;