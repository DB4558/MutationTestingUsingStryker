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
class Stack {
  constructor(size) {
    if (stryMutAct_9fa48("998")) {
      {}
    } else {
      stryCov_9fa48("998");
      this.maxSize = size;
      this.stackArray = stryMutAct_9fa48("999") ? ["Stryker was here"] : (stryCov_9fa48("999"), []);
      this.topIndex = stryMutAct_9fa48("1000") ? +1 : (stryCov_9fa48("1000"), -1); // Changed `top` to `topIndex` to avoid name conflict
    }
  }

  // Method to push an element onto the stack
  push(value) {
    if (stryMutAct_9fa48("1001")) {
      {}
    } else {
      stryCov_9fa48("1001");
      if (stryMutAct_9fa48("1004") ? this.topIndex !== this.maxSize - 1 : stryMutAct_9fa48("1003") ? false : stryMutAct_9fa48("1002") ? true : (stryCov_9fa48("1002", "1003", "1004"), this.topIndex === (stryMutAct_9fa48("1005") ? this.maxSize + 1 : (stryCov_9fa48("1005"), this.maxSize - 1)))) {
        if (stryMutAct_9fa48("1006")) {
          {}
        } else {
          stryCov_9fa48("1006");
          console.log(stryMutAct_9fa48("1007") ? "" : (stryCov_9fa48("1007"), "Stack overflow"));
          return;
        }
      }
      this.stackArray[stryMutAct_9fa48("1008") ? --this.topIndex : (stryCov_9fa48("1008"), ++this.topIndex)] = value;
      //console.log(value + " pushed into the stack");
    }
  }

  // Method to pop an element from the stack
  pop() {
    if (stryMutAct_9fa48("1009")) {
      {}
    } else {
      stryCov_9fa48("1009");
      if (stryMutAct_9fa48("1012") ? this.topIndex !== -1 : stryMutAct_9fa48("1011") ? false : stryMutAct_9fa48("1010") ? true : (stryCov_9fa48("1010", "1011", "1012"), this.topIndex === (stryMutAct_9fa48("1013") ? +1 : (stryCov_9fa48("1013"), -1)))) {
        if (stryMutAct_9fa48("1014")) {
          {}
        } else {
          stryCov_9fa48("1014");
          console.log(stryMutAct_9fa48("1015") ? "" : (stryCov_9fa48("1015"), "Stack underflow"));
          return stryMutAct_9fa48("1016") ? +1 : (stryCov_9fa48("1016"), -1);
        }
      }
      const poppedElement = this.stackArray[stryMutAct_9fa48("1017") ? this.topIndex++ : (stryCov_9fa48("1017"), this.topIndex--)];
      // console.log(poppedElement + " popped from the stack");
      return poppedElement;
    }
  }

  // Method to peek the top element of the stack
  peek() {
    if (stryMutAct_9fa48("1018")) {
      {}
    } else {
      stryCov_9fa48("1018");
      // Renamed from `top` to `peek`
      if (stryMutAct_9fa48("1021") ? this.topIndex !== -1 : stryMutAct_9fa48("1020") ? false : stryMutAct_9fa48("1019") ? true : (stryCov_9fa48("1019", "1020", "1021"), this.topIndex === (stryMutAct_9fa48("1022") ? +1 : (stryCov_9fa48("1022"), -1)))) {
        if (stryMutAct_9fa48("1023")) {
          {}
        } else {
          stryCov_9fa48("1023");
          console.log(stryMutAct_9fa48("1024") ? "" : (stryCov_9fa48("1024"), "Stack is empty"));
          return stryMutAct_9fa48("1025") ? +1 : (stryCov_9fa48("1025"), -1);
        }
      }
      return this.stackArray[this.topIndex];
    }
  }

  // Method to check if the stack is empty
  isEmpty() {
    if (stryMutAct_9fa48("1026")) {
      {}
    } else {
      stryCov_9fa48("1026");
      return stryMutAct_9fa48("1029") ? this.topIndex !== -1 : stryMutAct_9fa48("1028") ? false : stryMutAct_9fa48("1027") ? true : (stryCov_9fa48("1027", "1028", "1029"), this.topIndex === (stryMutAct_9fa48("1030") ? +1 : (stryCov_9fa48("1030"), -1)));
    }
  }
}
module.exports = Stack;