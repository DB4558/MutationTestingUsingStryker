class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function insertAtFront(head, newData) {
    const newNode = new Node(newData);
    newNode.next = head;
    return newNode;
}

function append(head, newData) {
    const newNode = new Node(newData);
    if (head === null) {
        return newNode;
    }
    let last = head;
    while (last.next !== null) {
        last = last.next;
    }
    last.next = newNode;
    return head;
}


// Function to delete the head node and return the new head
function deleteHead(head) {
    if (head === null) {
        return null;
    }

    const temp = head;
    head = head.next;
    temp.next = null;  // Help garbage collection
    return head;
}

// Function to remove the last node from the list
function removeLastNode(head) {
    if (head === null || head.next === null) {
        return null;
    }

    let secondLast = head;
    while (secondLast.next !== null && secondLast.next.next !== null) {
        secondLast = secondLast.next;
    }

    secondLast.next = null;
    return head;
}

// Function to insert a node at a specific position
function insertAtPosition(head, position, newData) {
    if (position < 1) return head;

    const newNode = new Node(newData);

    if (position === 1) {
        newNode.next = head;
        return newNode;
    }

    let current = head;
    let count = 1;

    while (current !== null && count < position - 1) {
        current = current.next;
        count++;
    }

    if (current === null) {
        return head;
    }

    newNode.next = current.next;
    current.next = newNode;
    return head;
}

// Function to delete a node at a given position
function deleteAtPosition(head, position) {
    if (head === null) return head;

    if (position === 1) {
        head = head.next;
        return head;
    }

    let current = head;
    let count = 1;

    while (current !== null && count < position - 1) {
        current = current.next;
        count++;
    }

    if (current === null || current.next === null) {
        return head;
    }

    current.next = current.next.next;
    return head;
}

// Function to reverse the linked list
function reverseList(head) {
    let prev = null;
    let current = head;
    let next = null;

    while (current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
}

// Function to count the number of nodes in the list
function countNodes(head) {
    let count = 0;
    let current = head;

    while (current !== null) {
        count++;
        current = current.next;
    }

    return count;
}

// Function to rotate the linked list left by k nodes
function rotate(head, k) {
    if (k === 0 || head === null) return head;

    let length = countNodes(head);
    k = k % length; // Handle k greater than list length

    if (k === 0) return head;

    let current = head;
    let count = 1;

    // Traverse to the kth node
    while (count < k && current !== null) {
        current = current.next;
        count++;
    }

    if (current === null) return head;

    let kthNode = current;
    let lastNode = head;
    while (lastNode.next !== null) {
        lastNode = lastNode.next;
    }

    // Rotate the list
    lastNode.next = head;
    head = kthNode.next;
    kthNode.next = null;

    return head;
}

// Function to segregate even and odd nodes and return the new head
function segregateEvenOdd(head) {
    let resStart = null, resEnd = null;
    let curr = head, prev = null;

    while (curr !== null) {
        if (curr.data % 2 === 0) {
            if (prev !== null) {
                prev.next = curr.next;
            } else {
                head = curr.next;
            }

            if (resStart === null) {
                resStart = curr;
                resEnd = resStart;
            } else {
                resEnd.next = curr;
                resEnd = resEnd.next;
            }

            curr = curr.next;
        } else {
            prev = curr;
            curr = curr.next;
        }
    }

    if (resStart === null) return head;

    resEnd.next = head;
    return resStart;
}

// Helper function to display the linked list as an array (for testing)
function display(head) {
    let result = [];
    let current = head;

    while (current !== null) {
        result.push(current.data);
        current = current.next;
    }

    return result;
}
// Export all functions and Node class
module.exports = {
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
};