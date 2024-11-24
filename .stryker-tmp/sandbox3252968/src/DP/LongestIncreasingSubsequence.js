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
class LongestIncreasingSubsequence {
  static upperBound(arr, l, r, key) {
    if (stryMutAct_9fa48("75")) {
      {}
    } else {
      stryCov_9fa48("75");
      while (stryMutAct_9fa48("78") ? l >= r - 1 : stryMutAct_9fa48("77") ? l <= r - 1 : stryMutAct_9fa48("76") ? false : (stryCov_9fa48("76", "77", "78"), l < (stryMutAct_9fa48("79") ? r + 1 : (stryCov_9fa48("79"), r - 1)))) {
        if (stryMutAct_9fa48("80")) {
          {}
        } else {
          stryCov_9fa48("80");
          const m = Math.floor(stryMutAct_9fa48("81") ? (l + r) * 2 : (stryCov_9fa48("81"), (stryMutAct_9fa48("82") ? l - r : (stryCov_9fa48("82"), l + r)) / 2));
          if (stryMutAct_9fa48("86") ? arr[m] < key : stryMutAct_9fa48("85") ? arr[m] > key : stryMutAct_9fa48("84") ? false : stryMutAct_9fa48("83") ? true : (stryCov_9fa48("83", "84", "85", "86"), arr[m] >= key)) {
            if (stryMutAct_9fa48("87")) {
              {}
            } else {
              stryCov_9fa48("87");
              r = m;
            }
          } else {
            if (stryMutAct_9fa48("88")) {
              {}
            } else {
              stryCov_9fa48("88");
              l = m;
            }
          }
        }
      }
      return r;
    }
  }
  static LIS(array) {
    if (stryMutAct_9fa48("89")) {
      {}
    } else {
      stryCov_9fa48("89");
      const N = array.length;
      if (stryMutAct_9fa48("92") ? N !== 0 : stryMutAct_9fa48("91") ? false : stryMutAct_9fa48("90") ? true : (stryCov_9fa48("90", "91", "92"), N === 0)) {
        if (stryMutAct_9fa48("93")) {
          {}
        } else {
          stryCov_9fa48("93");
          return 0;
        }
      }
      const tail = stryMutAct_9fa48("94") ? new Array() : (stryCov_9fa48("94"), new Array(N));
      let length = 1;
      tail[0] = array[0];
      for (let i = 1; stryMutAct_9fa48("97") ? i >= N : stryMutAct_9fa48("96") ? i <= N : stryMutAct_9fa48("95") ? false : (stryCov_9fa48("95", "96", "97"), i < N); stryMutAct_9fa48("98") ? i-- : (stryCov_9fa48("98"), i++)) {
        if (stryMutAct_9fa48("99")) {
          {}
        } else {
          stryCov_9fa48("99");
          if (stryMutAct_9fa48("103") ? array[i] >= tail[0] : stryMutAct_9fa48("102") ? array[i] <= tail[0] : stryMutAct_9fa48("101") ? false : stryMutAct_9fa48("100") ? true : (stryCov_9fa48("100", "101", "102", "103"), array[i] < tail[0])) {
            if (stryMutAct_9fa48("104")) {
              {}
            } else {
              stryCov_9fa48("104");
              tail[0] = array[i];
            }
          } else if (stryMutAct_9fa48("108") ? array[i] <= tail[length - 1] : stryMutAct_9fa48("107") ? array[i] >= tail[length - 1] : stryMutAct_9fa48("106") ? false : stryMutAct_9fa48("105") ? true : (stryCov_9fa48("105", "106", "107", "108"), array[i] > tail[stryMutAct_9fa48("109") ? length + 1 : (stryCov_9fa48("109"), length - 1)])) {
            if (stryMutAct_9fa48("110")) {
              {}
            } else {
              stryCov_9fa48("110");
              tail[stryMutAct_9fa48("111") ? length-- : (stryCov_9fa48("111"), length++)] = array[i];
            }
          } else {
            if (stryMutAct_9fa48("112")) {
              {}
            } else {
              stryCov_9fa48("112");
              tail[LongestIncreasingSubsequence.upperBound(tail, stryMutAct_9fa48("113") ? +1 : (stryCov_9fa48("113"), -1), stryMutAct_9fa48("114") ? length + 1 : (stryCov_9fa48("114"), length - 1), array[i])] = array[i];
            }
          }
        }
      }
      return length;
    }
  }
  static findLISLen(a) {
    if (stryMutAct_9fa48("115")) {
      {}
    } else {
      stryCov_9fa48("115");
      const size = a.length;
      const arr = stryMutAct_9fa48("116") ? new Array() : (stryCov_9fa48("116"), new Array(size));
      arr[0] = a[0];
      let lis = 1;
      for (let i = 1; stryMutAct_9fa48("119") ? i >= size : stryMutAct_9fa48("118") ? i <= size : stryMutAct_9fa48("117") ? false : (stryCov_9fa48("117", "118", "119"), i < size); stryMutAct_9fa48("120") ? i-- : (stryCov_9fa48("120"), i++)) {
        if (stryMutAct_9fa48("121")) {
          {}
        } else {
          stryCov_9fa48("121");
          const index = LongestIncreasingSubsequence.binarySearchBetween(arr, lis, a[i]);
          arr[index] = a[i];
          if (stryMutAct_9fa48("125") ? index <= lis : stryMutAct_9fa48("124") ? index >= lis : stryMutAct_9fa48("123") ? false : stryMutAct_9fa48("122") ? true : (stryCov_9fa48("122", "123", "124", "125"), index > lis)) {
            if (stryMutAct_9fa48("126")) {
              {}
            } else {
              stryCov_9fa48("126");
              stryMutAct_9fa48("127") ? lis-- : (stryCov_9fa48("127"), lis++);
            }
          }
        }
      }
      return lis;
    }
  }
  static binarySearchBetween(t, end, key) {
    if (stryMutAct_9fa48("128")) {
      {}
    } else {
      stryCov_9fa48("128");
      let left = 0;
      let right = end;
      if (stryMutAct_9fa48("132") ? key >= t[0] : stryMutAct_9fa48("131") ? key <= t[0] : stryMutAct_9fa48("130") ? false : stryMutAct_9fa48("129") ? true : (stryCov_9fa48("129", "130", "131", "132"), key < t[0])) {
        if (stryMutAct_9fa48("133")) {
          {}
        } else {
          stryCov_9fa48("133");
          return 0;
        }
      }
      if (stryMutAct_9fa48("137") ? key <= t[end] : stryMutAct_9fa48("136") ? key >= t[end] : stryMutAct_9fa48("135") ? false : stryMutAct_9fa48("134") ? true : (stryCov_9fa48("134", "135", "136", "137"), key > t[end])) {
        if (stryMutAct_9fa48("138")) {
          {}
        } else {
          stryCov_9fa48("138");
          return stryMutAct_9fa48("139") ? end - 1 : (stryCov_9fa48("139"), end + 1);
        }
      }
      while (stryMutAct_9fa48("142") ? left >= right - 1 : stryMutAct_9fa48("141") ? left <= right - 1 : stryMutAct_9fa48("140") ? false : (stryCov_9fa48("140", "141", "142"), left < (stryMutAct_9fa48("143") ? right + 1 : (stryCov_9fa48("143"), right - 1)))) {
        if (stryMutAct_9fa48("144")) {
          {}
        } else {
          stryCov_9fa48("144");
          const middle = Math.floor(stryMutAct_9fa48("145") ? (left + right) * 2 : (stryCov_9fa48("145"), (stryMutAct_9fa48("146") ? left - right : (stryCov_9fa48("146"), left + right)) / 2));
          if (stryMutAct_9fa48("150") ? t[middle] >= key : stryMutAct_9fa48("149") ? t[middle] <= key : stryMutAct_9fa48("148") ? false : stryMutAct_9fa48("147") ? true : (stryCov_9fa48("147", "148", "149", "150"), t[middle] < key)) {
            if (stryMutAct_9fa48("151")) {
              {}
            } else {
              stryCov_9fa48("151");
              left = middle;
            }
          } else {
            if (stryMutAct_9fa48("152")) {
              {}
            } else {
              stryCov_9fa48("152");
              right = middle;
            }
          }
        }
      }
      return right;
    }
  }
}
module.exports = LongestIncreasingSubsequence;