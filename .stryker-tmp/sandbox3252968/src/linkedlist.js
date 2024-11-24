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
class Node {
  constructor(data) {
    if (stryMutAct_9fa48("845")) {
      {}
    } else {
      stryCov_9fa48("845");
      this.data = data;
      this.next = null;
    }
  }
}
function insertAtFront(head, newData) {
  if (stryMutAct_9fa48("846")) {
    {}
  } else {
    stryCov_9fa48("846");
    const newNode = new Node(newData);
    newNode.next = head;
    return newNode;
  }
}
function append(head, newData) {
  if (stryMutAct_9fa48("847")) {
    {}
  } else {
    stryCov_9fa48("847");
    const newNode = new Node(newData);
    if (stryMutAct_9fa48("850") ? head !== null : stryMutAct_9fa48("849") ? false : stryMutAct_9fa48("848") ? true : (stryCov_9fa48("848", "849", "850"), head === null)) {
      if (stryMutAct_9fa48("851")) {
        {}
      } else {
        stryCov_9fa48("851");
        return newNode;
      }
    }
    let last = head;
    while (stryMutAct_9fa48("853") ? last.next === null : stryMutAct_9fa48("852") ? false : (stryCov_9fa48("852", "853"), last.next !== null)) {
      if (stryMutAct_9fa48("854")) {
        {}
      } else {
        stryCov_9fa48("854");
        last = last.next;
      }
    }
    last.next = newNode;
    return head;
  }
}

// Function to delete the head node and return the new head
function deleteHead(head) {
  if (stryMutAct_9fa48("855")) {
    {}
  } else {
    stryCov_9fa48("855");
    if (stryMutAct_9fa48("858") ? head !== null : stryMutAct_9fa48("857") ? false : stryMutAct_9fa48("856") ? true : (stryCov_9fa48("856", "857", "858"), head === null)) {
      if (stryMutAct_9fa48("859")) {
        {}
      } else {
        stryCov_9fa48("859");
        return null;
      }
    }
    const temp = head;
    head = head.next;
    temp.next = null; // Help garbage collection
    return head;
  }
}

// Function to remove the last node from the list
function removeLastNode(head) {
  if (stryMutAct_9fa48("860")) {
    {}
  } else {
    stryCov_9fa48("860");
    if (stryMutAct_9fa48("863") ? head === null && head.next === null : stryMutAct_9fa48("862") ? false : stryMutAct_9fa48("861") ? true : (stryCov_9fa48("861", "862", "863"), (stryMutAct_9fa48("865") ? head !== null : stryMutAct_9fa48("864") ? false : (stryCov_9fa48("864", "865"), head === null)) || (stryMutAct_9fa48("867") ? head.next !== null : stryMutAct_9fa48("866") ? false : (stryCov_9fa48("866", "867"), head.next === null)))) {
      if (stryMutAct_9fa48("868")) {
        {}
      } else {
        stryCov_9fa48("868");
        return null;
      }
    }
    let secondLast = head;
    while (stryMutAct_9fa48("870") ? secondLast.next !== null || secondLast.next.next !== null : stryMutAct_9fa48("869") ? false : (stryCov_9fa48("869", "870"), (stryMutAct_9fa48("872") ? secondLast.next === null : stryMutAct_9fa48("871") ? true : (stryCov_9fa48("871", "872"), secondLast.next !== null)) && (stryMutAct_9fa48("874") ? secondLast.next.next === null : stryMutAct_9fa48("873") ? true : (stryCov_9fa48("873", "874"), secondLast.next.next !== null)))) {
      if (stryMutAct_9fa48("875")) {
        {}
      } else {
        stryCov_9fa48("875");
        secondLast = secondLast.next;
      }
    }
    secondLast.next = null;
    return head;
  }
}

// Function to insert a node at a specific position
function insertAtPosition(head, position, newData) {
  if (stryMutAct_9fa48("876")) {
    {}
  } else {
    stryCov_9fa48("876");
    if (stryMutAct_9fa48("880") ? position >= 1 : stryMutAct_9fa48("879") ? position <= 1 : stryMutAct_9fa48("878") ? false : stryMutAct_9fa48("877") ? true : (stryCov_9fa48("877", "878", "879", "880"), position < 1)) return head;
    const newNode = new Node(newData);
    if (stryMutAct_9fa48("883") ? position !== 1 : stryMutAct_9fa48("882") ? false : stryMutAct_9fa48("881") ? true : (stryCov_9fa48("881", "882", "883"), position === 1)) {
      if (stryMutAct_9fa48("884")) {
        {}
      } else {
        stryCov_9fa48("884");
        newNode.next = head;
        return newNode;
      }
    }
    let current = head;
    let count = 1;
    while (stryMutAct_9fa48("886") ? current !== null || count < position - 1 : stryMutAct_9fa48("885") ? false : (stryCov_9fa48("885", "886"), (stryMutAct_9fa48("888") ? current === null : stryMutAct_9fa48("887") ? true : (stryCov_9fa48("887", "888"), current !== null)) && (stryMutAct_9fa48("891") ? count >= position - 1 : stryMutAct_9fa48("890") ? count <= position - 1 : stryMutAct_9fa48("889") ? true : (stryCov_9fa48("889", "890", "891"), count < (stryMutAct_9fa48("892") ? position + 1 : (stryCov_9fa48("892"), position - 1)))))) {
      if (stryMutAct_9fa48("893")) {
        {}
      } else {
        stryCov_9fa48("893");
        current = current.next;
        stryMutAct_9fa48("894") ? count-- : (stryCov_9fa48("894"), count++);
      }
    }
    if (stryMutAct_9fa48("897") ? current !== null : stryMutAct_9fa48("896") ? false : stryMutAct_9fa48("895") ? true : (stryCov_9fa48("895", "896", "897"), current === null)) {
      if (stryMutAct_9fa48("898")) {
        {}
      } else {
        stryCov_9fa48("898");
        return head;
      }
    }
    newNode.next = current.next;
    current.next = newNode;
    return head;
  }
}

// Function to delete a node at a given position
function deleteAtPosition(head, position) {
  if (stryMutAct_9fa48("899")) {
    {}
  } else {
    stryCov_9fa48("899");
    if (stryMutAct_9fa48("902") ? head !== null : stryMutAct_9fa48("901") ? false : stryMutAct_9fa48("900") ? true : (stryCov_9fa48("900", "901", "902"), head === null)) return head;
    if (stryMutAct_9fa48("905") ? position !== 1 : stryMutAct_9fa48("904") ? false : stryMutAct_9fa48("903") ? true : (stryCov_9fa48("903", "904", "905"), position === 1)) {
      if (stryMutAct_9fa48("906")) {
        {}
      } else {
        stryCov_9fa48("906");
        head = head.next;
        return head;
      }
    }
    let current = head;
    let count = 1;
    while (stryMutAct_9fa48("908") ? current !== null || count < position - 1 : stryMutAct_9fa48("907") ? false : (stryCov_9fa48("907", "908"), (stryMutAct_9fa48("910") ? current === null : stryMutAct_9fa48("909") ? true : (stryCov_9fa48("909", "910"), current !== null)) && (stryMutAct_9fa48("913") ? count >= position - 1 : stryMutAct_9fa48("912") ? count <= position - 1 : stryMutAct_9fa48("911") ? true : (stryCov_9fa48("911", "912", "913"), count < (stryMutAct_9fa48("914") ? position + 1 : (stryCov_9fa48("914"), position - 1)))))) {
      if (stryMutAct_9fa48("915")) {
        {}
      } else {
        stryCov_9fa48("915");
        current = current.next;
        stryMutAct_9fa48("916") ? count-- : (stryCov_9fa48("916"), count++);
      }
    }
    if (stryMutAct_9fa48("919") ? current === null && current.next === null : stryMutAct_9fa48("918") ? false : stryMutAct_9fa48("917") ? true : (stryCov_9fa48("917", "918", "919"), (stryMutAct_9fa48("921") ? current !== null : stryMutAct_9fa48("920") ? false : (stryCov_9fa48("920", "921"), current === null)) || (stryMutAct_9fa48("923") ? current.next !== null : stryMutAct_9fa48("922") ? false : (stryCov_9fa48("922", "923"), current.next === null)))) {
      if (stryMutAct_9fa48("924")) {
        {}
      } else {
        stryCov_9fa48("924");
        return head;
      }
    }
    current.next = current.next.next;
    return head;
  }
}

// Function to reverse the linked list
function reverseList(head) {
  if (stryMutAct_9fa48("925")) {
    {}
  } else {
    stryCov_9fa48("925");
    let prev = null;
    let current = head;
    let next = null;
    while (stryMutAct_9fa48("927") ? current === null : stryMutAct_9fa48("926") ? false : (stryCov_9fa48("926", "927"), current !== null)) {
      if (stryMutAct_9fa48("928")) {
        {}
      } else {
        stryCov_9fa48("928");
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
      }
    }
    return prev;
  }
}

// Function to count the number of nodes in the list
function countNodes(head) {
  if (stryMutAct_9fa48("929")) {
    {}
  } else {
    stryCov_9fa48("929");
    let count = 0;
    let current = head;
    while (stryMutAct_9fa48("931") ? current === null : stryMutAct_9fa48("930") ? false : (stryCov_9fa48("930", "931"), current !== null)) {
      if (stryMutAct_9fa48("932")) {
        {}
      } else {
        stryCov_9fa48("932");
        stryMutAct_9fa48("933") ? count-- : (stryCov_9fa48("933"), count++);
        current = current.next;
      }
    }
    return count;
  }
}

// Function to rotate the linked list left by k nodes
function rotate(head, k) {
  if (stryMutAct_9fa48("934")) {
    {}
  } else {
    stryCov_9fa48("934");
    if (stryMutAct_9fa48("937") ? k === 0 && head === null : stryMutAct_9fa48("936") ? false : stryMutAct_9fa48("935") ? true : (stryCov_9fa48("935", "936", "937"), (stryMutAct_9fa48("939") ? k !== 0 : stryMutAct_9fa48("938") ? false : (stryCov_9fa48("938", "939"), k === 0)) || (stryMutAct_9fa48("941") ? head !== null : stryMutAct_9fa48("940") ? false : (stryCov_9fa48("940", "941"), head === null)))) return head;
    let length = countNodes(head);
    k = stryMutAct_9fa48("942") ? k * length : (stryCov_9fa48("942"), k % length); // Handle k greater than list length

    if (stryMutAct_9fa48("945") ? k !== 0 : stryMutAct_9fa48("944") ? false : stryMutAct_9fa48("943") ? true : (stryCov_9fa48("943", "944", "945"), k === 0)) return head;
    let current = head;
    let count = 1;

    // Traverse to the kth node
    while (stryMutAct_9fa48("947") ? count < k || current !== null : stryMutAct_9fa48("946") ? false : (stryCov_9fa48("946", "947"), (stryMutAct_9fa48("950") ? count >= k : stryMutAct_9fa48("949") ? count <= k : stryMutAct_9fa48("948") ? true : (stryCov_9fa48("948", "949", "950"), count < k)) && (stryMutAct_9fa48("952") ? current === null : stryMutAct_9fa48("951") ? true : (stryCov_9fa48("951", "952"), current !== null)))) {
      if (stryMutAct_9fa48("953")) {
        {}
      } else {
        stryCov_9fa48("953");
        current = current.next;
        stryMutAct_9fa48("954") ? count-- : (stryCov_9fa48("954"), count++);
      }
    }
    if (stryMutAct_9fa48("957") ? current !== null : stryMutAct_9fa48("956") ? false : stryMutAct_9fa48("955") ? true : (stryCov_9fa48("955", "956", "957"), current === null)) return head;
    let kthNode = current;
    let lastNode = head;
    while (stryMutAct_9fa48("959") ? lastNode.next === null : stryMutAct_9fa48("958") ? false : (stryCov_9fa48("958", "959"), lastNode.next !== null)) {
      if (stryMutAct_9fa48("960")) {
        {}
      } else {
        stryCov_9fa48("960");
        lastNode = lastNode.next;
      }
    }

    // Rotate the list
    lastNode.next = head;
    head = kthNode.next;
    kthNode.next = null;
    return head;
  }
}

// Function to segregate even and odd nodes and return the new head
function segregateEvenOdd(head) {
  if (stryMutAct_9fa48("961")) {
    {}
  } else {
    stryCov_9fa48("961");
    let resStart = null,
      resEnd = null;
    let curr = head,
      prev = null;
    while (stryMutAct_9fa48("963") ? curr === null : stryMutAct_9fa48("962") ? false : (stryCov_9fa48("962", "963"), curr !== null)) {
      if (stryMutAct_9fa48("964")) {
        {}
      } else {
        stryCov_9fa48("964");
        if (stryMutAct_9fa48("967") ? curr.data % 2 !== 0 : stryMutAct_9fa48("966") ? false : stryMutAct_9fa48("965") ? true : (stryCov_9fa48("965", "966", "967"), (stryMutAct_9fa48("968") ? curr.data * 2 : (stryCov_9fa48("968"), curr.data % 2)) === 0)) {
          if (stryMutAct_9fa48("969")) {
            {}
          } else {
            stryCov_9fa48("969");
            if (stryMutAct_9fa48("972") ? prev === null : stryMutAct_9fa48("971") ? false : stryMutAct_9fa48("970") ? true : (stryCov_9fa48("970", "971", "972"), prev !== null)) {
              if (stryMutAct_9fa48("973")) {
                {}
              } else {
                stryCov_9fa48("973");
                prev.next = curr.next;
              }
            } else {
              if (stryMutAct_9fa48("974")) {
                {}
              } else {
                stryCov_9fa48("974");
                head = curr.next;
              }
            }
            if (stryMutAct_9fa48("977") ? resStart !== null : stryMutAct_9fa48("976") ? false : stryMutAct_9fa48("975") ? true : (stryCov_9fa48("975", "976", "977"), resStart === null)) {
              if (stryMutAct_9fa48("978")) {
                {}
              } else {
                stryCov_9fa48("978");
                resStart = curr;
                resEnd = resStart;
              }
            } else {
              if (stryMutAct_9fa48("979")) {
                {}
              } else {
                stryCov_9fa48("979");
                resEnd.next = curr;
                resEnd = resEnd.next;
              }
            }
            curr = curr.next;
          }
        } else {
          if (stryMutAct_9fa48("980")) {
            {}
          } else {
            stryCov_9fa48("980");
            prev = curr;
            curr = curr.next;
          }
        }
      }
    }
    if (stryMutAct_9fa48("983") ? resStart !== null : stryMutAct_9fa48("982") ? false : stryMutAct_9fa48("981") ? true : (stryCov_9fa48("981", "982", "983"), resStart === null)) return head;
    resEnd.next = head;
    return resStart;
  }
}

// Helper function to display the linked list as an array (for testing)
function display(head) {
  if (stryMutAct_9fa48("984")) {
    {}
  } else {
    stryCov_9fa48("984");
    let result = stryMutAct_9fa48("985") ? ["Stryker was here"] : (stryCov_9fa48("985"), []);
    let current = head;
    while (stryMutAct_9fa48("987") ? current === null : stryMutAct_9fa48("986") ? false : (stryCov_9fa48("986", "987"), current !== null)) {
      if (stryMutAct_9fa48("988")) {
        {}
      } else {
        stryCov_9fa48("988");
        result.push(current.data);
        current = current.next;
      }
    }
    return result;
  }
}
// Export all functions and Node class
module.exports = stryMutAct_9fa48("989") ? {} : (stryCov_9fa48("989"), {
  Node,
  insertAtFront,
  append,
  deleteHead,
  removeLastNode,
  insertAtPosition,
  deleteAtPosition,
  reverseList,
  countNodes,
  rotate,
  segregateEvenOdd,
  display
});