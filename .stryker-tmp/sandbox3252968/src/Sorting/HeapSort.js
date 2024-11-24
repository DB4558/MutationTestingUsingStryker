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
class HeapSort {
  static heapify(arr, n, i) {
    if (stryMutAct_9fa48("696")) {
      {}
    } else {
      stryCov_9fa48("696");
      let largest = i;
      const left = stryMutAct_9fa48("697") ? 2 * i - 1 : (stryCov_9fa48("697"), (stryMutAct_9fa48("698") ? 2 / i : (stryCov_9fa48("698"), 2 * i)) + 1);
      const right = stryMutAct_9fa48("699") ? 2 * i - 2 : (stryCov_9fa48("699"), (stryMutAct_9fa48("700") ? 2 / i : (stryCov_9fa48("700"), 2 * i)) + 2);
      if (stryMutAct_9fa48("703") ? left < n || arr[left] > arr[largest] : stryMutAct_9fa48("702") ? false : stryMutAct_9fa48("701") ? true : (stryCov_9fa48("701", "702", "703"), (stryMutAct_9fa48("706") ? left >= n : stryMutAct_9fa48("705") ? left <= n : stryMutAct_9fa48("704") ? true : (stryCov_9fa48("704", "705", "706"), left < n)) && (stryMutAct_9fa48("709") ? arr[left] <= arr[largest] : stryMutAct_9fa48("708") ? arr[left] >= arr[largest] : stryMutAct_9fa48("707") ? true : (stryCov_9fa48("707", "708", "709"), arr[left] > arr[largest])))) {
        if (stryMutAct_9fa48("710")) {
          {}
        } else {
          stryCov_9fa48("710");
          largest = left;
        }
      }
      if (stryMutAct_9fa48("713") ? right < n || arr[right] > arr[largest] : stryMutAct_9fa48("712") ? false : stryMutAct_9fa48("711") ? true : (stryCov_9fa48("711", "712", "713"), (stryMutAct_9fa48("716") ? right >= n : stryMutAct_9fa48("715") ? right <= n : stryMutAct_9fa48("714") ? true : (stryCov_9fa48("714", "715", "716"), right < n)) && (stryMutAct_9fa48("719") ? arr[right] <= arr[largest] : stryMutAct_9fa48("718") ? arr[right] >= arr[largest] : stryMutAct_9fa48("717") ? true : (stryCov_9fa48("717", "718", "719"), arr[right] > arr[largest])))) {
        if (stryMutAct_9fa48("720")) {
          {}
        } else {
          stryCov_9fa48("720");
          largest = right;
        }
      }
      if (stryMutAct_9fa48("723") ? largest === i : stryMutAct_9fa48("722") ? false : stryMutAct_9fa48("721") ? true : (stryCov_9fa48("721", "722", "723"), largest !== i)) {
        if (stryMutAct_9fa48("724")) {
          {}
        } else {
          stryCov_9fa48("724");
          [arr[i], arr[largest]] = stryMutAct_9fa48("725") ? [] : (stryCov_9fa48("725"), [arr[largest], arr[i]]);
          HeapSort.heapify(arr, n, largest);
        }
      }
    }
  }
  static heapSort(arr) {
    if (stryMutAct_9fa48("726")) {
      {}
    } else {
      stryCov_9fa48("726");
      const n = arr.length;
      for (let i = stryMutAct_9fa48("727") ? Math.floor(n / 2) + 1 : (stryCov_9fa48("727"), Math.floor(stryMutAct_9fa48("728") ? n * 2 : (stryCov_9fa48("728"), n / 2)) - 1); stryMutAct_9fa48("731") ? i < 0 : stryMutAct_9fa48("730") ? i > 0 : stryMutAct_9fa48("729") ? false : (stryCov_9fa48("729", "730", "731"), i >= 0); stryMutAct_9fa48("732") ? i++ : (stryCov_9fa48("732"), i--)) {
        if (stryMutAct_9fa48("733")) {
          {}
        } else {
          stryCov_9fa48("733");
          HeapSort.heapify(arr, n, i);
        }
      }
      for (let i = stryMutAct_9fa48("734") ? n + 1 : (stryCov_9fa48("734"), n - 1); stryMutAct_9fa48("737") ? i <= 0 : stryMutAct_9fa48("736") ? i >= 0 : stryMutAct_9fa48("735") ? false : (stryCov_9fa48("735", "736", "737"), i > 0); stryMutAct_9fa48("738") ? i++ : (stryCov_9fa48("738"), i--)) {
        if (stryMutAct_9fa48("739")) {
          {}
        } else {
          stryCov_9fa48("739");
          [arr[0], arr[i]] = stryMutAct_9fa48("740") ? [] : (stryCov_9fa48("740"), [arr[i], arr[0]]);
          HeapSort.heapify(arr, i, 0);
        }
      }
    }
  }
}
module.exports = HeapSort;