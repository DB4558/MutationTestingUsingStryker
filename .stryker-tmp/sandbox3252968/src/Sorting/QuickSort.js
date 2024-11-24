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
class QuickSort {
  static partition(arr, low, high) {
    if (stryMutAct_9fa48("819")) {
      {}
    } else {
      stryCov_9fa48("819");
      const pivot = arr[high];
      let i = stryMutAct_9fa48("820") ? low + 1 : (stryCov_9fa48("820"), low - 1);
      for (let j = low; stryMutAct_9fa48("823") ? j >= high : stryMutAct_9fa48("822") ? j <= high : stryMutAct_9fa48("821") ? false : (stryCov_9fa48("821", "822", "823"), j < high); stryMutAct_9fa48("824") ? j-- : (stryCov_9fa48("824"), j++)) {
        if (stryMutAct_9fa48("825")) {
          {}
        } else {
          stryCov_9fa48("825");
          if (stryMutAct_9fa48("829") ? arr[j] >= pivot : stryMutAct_9fa48("828") ? arr[j] <= pivot : stryMutAct_9fa48("827") ? false : stryMutAct_9fa48("826") ? true : (stryCov_9fa48("826", "827", "828", "829"), arr[j] < pivot)) {
            if (stryMutAct_9fa48("830")) {
              {}
            } else {
              stryCov_9fa48("830");
              stryMutAct_9fa48("831") ? i-- : (stryCov_9fa48("831"), i++);
              [arr[i], arr[j]] = stryMutAct_9fa48("832") ? [] : (stryCov_9fa48("832"), [arr[j], arr[i]]);
            }
          }
        }
      }
      [arr[stryMutAct_9fa48("833") ? i - 1 : (stryCov_9fa48("833"), i + 1)], arr[high]] = stryMutAct_9fa48("834") ? [] : (stryCov_9fa48("834"), [arr[high], arr[stryMutAct_9fa48("835") ? i - 1 : (stryCov_9fa48("835"), i + 1)]]);
      return stryMutAct_9fa48("836") ? i - 1 : (stryCov_9fa48("836"), i + 1);
    }
  }
  static quickSort(arr, low, high) {
    if (stryMutAct_9fa48("837")) {
      {}
    } else {
      stryCov_9fa48("837");
      if (stryMutAct_9fa48("841") ? low >= high : stryMutAct_9fa48("840") ? low <= high : stryMutAct_9fa48("839") ? false : stryMutAct_9fa48("838") ? true : (stryCov_9fa48("838", "839", "840", "841"), low < high)) {
        if (stryMutAct_9fa48("842")) {
          {}
        } else {
          stryCov_9fa48("842");
          const pivotIndex = QuickSort.partition(arr, low, high);
          QuickSort.quickSort(arr, low, stryMutAct_9fa48("843") ? pivotIndex + 1 : (stryCov_9fa48("843"), pivotIndex - 1));
          QuickSort.quickSort(arr, stryMutAct_9fa48("844") ? pivotIndex - 1 : (stryCov_9fa48("844"), pivotIndex + 1), high);
        }
      }
    }
  }
}
module.exports = QuickSort;