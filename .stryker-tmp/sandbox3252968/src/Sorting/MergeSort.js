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
class MergeSort {
  // Merge function that merges two sorted halves
  merge(arr, left, mid, right) {
    if (stryMutAct_9fa48("760")) {
      {}
    } else {
      stryCov_9fa48("760");
      const n1 = stryMutAct_9fa48("761") ? mid - left - 1 : (stryCov_9fa48("761"), (stryMutAct_9fa48("762") ? mid + left : (stryCov_9fa48("762"), mid - left)) + 1);
      const n2 = stryMutAct_9fa48("763") ? right + mid : (stryCov_9fa48("763"), right - mid);

      // Create temporary arrays
      const leftArray = stryMutAct_9fa48("764") ? new Array() : (stryCov_9fa48("764"), new Array(n1));
      const rightArray = stryMutAct_9fa48("765") ? new Array() : (stryCov_9fa48("765"), new Array(n2));

      // Copy data to temporary arrays leftArray[] and rightArray[]
      for (let i = 0; stryMutAct_9fa48("768") ? i >= n1 : stryMutAct_9fa48("767") ? i <= n1 : stryMutAct_9fa48("766") ? false : (stryCov_9fa48("766", "767", "768"), i < n1); stryMutAct_9fa48("769") ? i-- : (stryCov_9fa48("769"), i++)) {
        if (stryMutAct_9fa48("770")) {
          {}
        } else {
          stryCov_9fa48("770");
          leftArray[i] = arr[stryMutAct_9fa48("771") ? left - i : (stryCov_9fa48("771"), left + i)];
        }
      }
      for (let j = 0; stryMutAct_9fa48("774") ? j >= n2 : stryMutAct_9fa48("773") ? j <= n2 : stryMutAct_9fa48("772") ? false : (stryCov_9fa48("772", "773", "774"), j < n2); stryMutAct_9fa48("775") ? j-- : (stryCov_9fa48("775"), j++)) {
        if (stryMutAct_9fa48("776")) {
          {}
        } else {
          stryCov_9fa48("776");
          rightArray[j] = arr[stryMutAct_9fa48("777") ? mid + 1 - j : (stryCov_9fa48("777"), (stryMutAct_9fa48("778") ? mid - 1 : (stryCov_9fa48("778"), mid + 1)) + j)];
        }
      }
      let i = 0; // Initial index for leftArray
      let j = 0; // Initial index for rightArray
      let k = left; // Initial index for the merged array

      // Merge the temp arrays back into arr[left..right]
      while (stryMutAct_9fa48("780") ? i < n1 || j < n2 : stryMutAct_9fa48("779") ? false : (stryCov_9fa48("779", "780"), (stryMutAct_9fa48("783") ? i >= n1 : stryMutAct_9fa48("782") ? i <= n1 : stryMutAct_9fa48("781") ? true : (stryCov_9fa48("781", "782", "783"), i < n1)) && (stryMutAct_9fa48("786") ? j >= n2 : stryMutAct_9fa48("785") ? j <= n2 : stryMutAct_9fa48("784") ? true : (stryCov_9fa48("784", "785", "786"), j < n2)))) {
        if (stryMutAct_9fa48("787")) {
          {}
        } else {
          stryCov_9fa48("787");
          if (stryMutAct_9fa48("791") ? leftArray[i] > rightArray[j] : stryMutAct_9fa48("790") ? leftArray[i] < rightArray[j] : stryMutAct_9fa48("789") ? false : stryMutAct_9fa48("788") ? true : (stryCov_9fa48("788", "789", "790", "791"), leftArray[i] <= rightArray[j])) {
            if (stryMutAct_9fa48("792")) {
              {}
            } else {
              stryCov_9fa48("792");
              arr[stryMutAct_9fa48("793") ? k-- : (stryCov_9fa48("793"), k++)] = leftArray[stryMutAct_9fa48("794") ? i-- : (stryCov_9fa48("794"), i++)];
            }
          } else {
            if (stryMutAct_9fa48("795")) {
              {}
            } else {
              stryCov_9fa48("795");
              arr[stryMutAct_9fa48("796") ? k-- : (stryCov_9fa48("796"), k++)] = rightArray[stryMutAct_9fa48("797") ? j-- : (stryCov_9fa48("797"), j++)];
            }
          }
        }
      }

      // Copy the remaining elements of leftArray[], if any
      while (stryMutAct_9fa48("800") ? i >= n1 : stryMutAct_9fa48("799") ? i <= n1 : stryMutAct_9fa48("798") ? false : (stryCov_9fa48("798", "799", "800"), i < n1)) {
        if (stryMutAct_9fa48("801")) {
          {}
        } else {
          stryCov_9fa48("801");
          arr[stryMutAct_9fa48("802") ? k-- : (stryCov_9fa48("802"), k++)] = leftArray[stryMutAct_9fa48("803") ? i-- : (stryCov_9fa48("803"), i++)];
        }
      }

      // Copy the remaining elements of rightArray[], if any
      while (stryMutAct_9fa48("806") ? j >= n2 : stryMutAct_9fa48("805") ? j <= n2 : stryMutAct_9fa48("804") ? false : (stryCov_9fa48("804", "805", "806"), j < n2)) {
        if (stryMutAct_9fa48("807")) {
          {}
        } else {
          stryCov_9fa48("807");
          arr[stryMutAct_9fa48("808") ? k-- : (stryCov_9fa48("808"), k++)] = rightArray[stryMutAct_9fa48("809") ? j-- : (stryCov_9fa48("809"), j++)];
        }
      }
    }
  }

  // Merge Sort function that recursively splits the array
  mergeSort(arr, left, right) {
    if (stryMutAct_9fa48("810")) {
      {}
    } else {
      stryCov_9fa48("810");
      if (stryMutAct_9fa48("814") ? left >= right : stryMutAct_9fa48("813") ? left <= right : stryMutAct_9fa48("812") ? false : stryMutAct_9fa48("811") ? true : (stryCov_9fa48("811", "812", "813", "814"), left < right)) {
        if (stryMutAct_9fa48("815")) {
          {}
        } else {
          stryCov_9fa48("815");
          const mid = Math.floor(stryMutAct_9fa48("816") ? (left + right) * 2 : (stryCov_9fa48("816"), (stryMutAct_9fa48("817") ? left - right : (stryCov_9fa48("817"), left + right)) / 2));

          // Recursively divide the array into two halves
          this.mergeSort(arr, left, mid);
          this.mergeSort(arr, stryMutAct_9fa48("818") ? mid - 1 : (stryCov_9fa48("818"), mid + 1), right);

          // Merge the sorted halves
          this.merge(arr, left, mid, right);
        }
      }
    }
  }
}
module.exports = MergeSort;