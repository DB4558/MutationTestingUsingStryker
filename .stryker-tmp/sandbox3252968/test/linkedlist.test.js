// @ts-nocheck
const {
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
} = require('../src/linkedlist'); // Adjust the import based on your file structure

describe('Linked List Operations', () => {

    // Test for insertAtFront
    test('insertAtFront - insert into empty list', () => {
        let head = null;
        head = insertAtFront(head, 10);
        expect(display(head)).toEqual([10]);
    });

    test('insertAtFront - insert at front of non-empty list', () => {
        let head = new Node(20);
        head = insertAtFront(head, 10);
        expect(display(head)).toEqual([10, 20]);
    });

    // Test for append
    test('append - append to empty list', () => {
        let head = null;
        head = append(head, 10);
        expect(display(head)).toEqual([10]);
    });

    test('append - append to non-empty list', () => {
        let head = new Node(10);
        head = append(head, 20);
        expect(display(head)).toEqual([10, 20]);
    });

    // Test for deleteHead
    test('deleteHead - delete head of list', () => {
        let head = new Node(10);
        head = append(head, 20);
        head = deleteHead(head);
        expect(display(head)).toEqual([20]);
    });

    test('deleteHead - delete head of empty list', () => {
        let head = null;
        head = deleteHead(head);
        expect(display(head)).toEqual([]);
    });

    // Test for removeLastNode
    test('removeLastNode - remove from list with multiple nodes', () => {
        let head = new Node(10);
        head = append(head, 20);
        head = append(head, 30);
        head = removeLastNode(head);
        expect(display(head)).toEqual([10, 20]);
    });

    test('removeLastNode - remove last from list with single node', () => {
        let head = new Node(10);
        head = removeLastNode(head);
        expect(display(head)).toEqual([]);
    });

    test('removeLastNode - empty list', () => {
        let head = null;
        head = removeLastNode(head);
        expect(display(head)).toEqual([]);
    });
    test('removeLastNode - remove last node from list with two nodes', () => {
        let head = new Node(10);
        head = append(head, 20);
        head = removeLastNode(head); // Should remove the last node (20)
        expect(display(head)).toEqual([10]); // Expected result: [10]
    });
    
   
                
 
    // Test for insertAtPosition
    test('insertAtPosition - insert at position 1', () => {
        let head = new Node(10);
        head = insertAtPosition(head, 1, 20);
        expect(display(head)).toEqual([20, 10]);
    });

    test('insertAtPosition - insert at invalid position', () => {
        let head = new Node(10);
        head = insertAtPosition(head, 5, 20);  // Invalid position
        expect(display(head)).toEqual([10]);
    });

    test('insertAtPosition - correct insertion after mutant modifies count to --', () => {
        let head = new Node(10);
        head = append(head, 20);
        head = insertAtPosition(head, 2, 30); // Insert at position 2
        
        // This should fail if the mutant is introduced, as the count will never reach position-1 properly.
        expect(display(head)).toEqual([10, 30, 20]); // Expecting [10, 30, 20] at position 2
    });
  
    test('insertAtPosition - insert at the end', () => {
        let head = new Node(10);
        head = append(head, 20);
        head = insertAtPosition(head, 3, 30); // Insert at position 3 (end)
        expect(display(head)).toEqual([10, 20, 30]); // Expected result: [10, 20, 30]
    });
    
    test('insertAtPosition - insert into empty list', () => {
        let head = null;
        head = insertAtPosition(head, 1, 10); // Insert at position 1
        expect(display(head)).toEqual([10]); // Expected result: [10]
    });
    
    test('insertAtPosition - insert at invalid position (negative index)', () => {
        let head = new Node(10);
        head = append(head, 20);
        head = insertAtPosition(head, -1, 30); // Invalid position
        expect(display(head)).toEqual([10, 20]); // Expected result: [10, 20]
    });
    
     

    // Test for deleteAtPosition
    test('deleteAtPosition - delete from position 1', () => {
        let head = new Node(10);
        head = append(head, 20);
        head = deleteAtPosition(head, 1);
        expect(display(head)).toEqual([20]);
    });

    test('deleteAtPosition - delete from position 2', () => {
        let head = new Node(10);
        head = append(head, 20);
        head = deleteAtPosition(head, 2);
        expect(display(head)).toEqual([10]);
    });

    test('deleteAtPosition - invalid position', () => {
        let head = new Node(10);
        head = append(head, 20);
        head = deleteAtPosition(head, 3);  // Invalid position
        expect(display(head)).toEqual([10, 20]);
    });
    test('deleteAtPosition - delete from empty list', () => {
        let head = null;
        head = deleteAtPosition(head, 1);  // Trying to delete from an empty list
        expect(display(head)).toEqual([]);  // Expected: empty list, as there is nothing to delete
    });
    test('deleteAtPosition - delete from position 1 in multi-node list', () => {
        let head = new Node(10);
        head = append(head, 20);
        head = append(head, 30);
        head = deleteAtPosition(head, 1);  // Should delete the node at position 1 (10)
        expect(display(head)).toEqual([20, 30]);  // Expected result: [20, 30]
    });
    test('deleteAtPosition - delete from last position in multi-node list', () => {
        let head = new Node(10);
        head = append(head, 20);
        head = append(head, 30);
        head = deleteAtPosition(head, 3);  // Should delete the node at position 3 (30)
        expect(display(head)).toEqual([10, 20]);  // Expected result: [10, 20]
    });
    
    test('countNodes - count nodes in an empty list', () => {
        let head = null;  // Empty list
        let count = countNodes(head);
        expect(count).toBe(0);  // Expected: 0
    });
    test('countNodes - count nodes in a list with one node', () => {
        let head = new Node(10);  // List with one node
        let count = countNodes(head);
        expect(count).toBe(1);  // Expected: 1
    });
    
    

 
    test('reverseList - reverse list with single node', () => {
        let head = new Node(10);
        head = reverseList(head);
        expect(display(head)).toEqual([10]);
    });

    test('reverseList - reverse empty list', () => {
        let head = null;
        head = reverseList(head);
        expect(display(head)).toEqual([]);
    });

 

    test('rotate - rotate by 0', () => {
        let head = new Node(10);
        head = append(head, 20);
        head = append(head, 30);
        head = rotate(head, 0);  // No change
        expect(display(head)).toEqual([10, 20, 30]);
    });

    test('rotate - rotate by length of list', () => {
        let head = new Node(10);
        head = append(head, 20);
        head = append(head, 30);
        head = rotate(head, 3);  // No change
        expect(display(head)).toEqual([10, 20, 30]);
    });

    test('rotate - no rotation when k is 0', () => {
        let head = new Node(10);
        head = append(head, 20);
        head = append(head, 30); // List: [10, 20, 30]
        let result = rotate(head, 0);
        expect(display(result)).toEqual([10, 20, 30]); // No change expected
    });
    test('rotate - k equals list length', () => {
        let head = new Node(10);
        head = append(head, 20);
        head = append(head, 30); // List: [10, 20, 30]
        let result = rotate(head, 3); // Effective k = 3 % 3 = 0
        expect(display(result)).toEqual([10, 20, 30]); // No change expected
    });
    //look in this
    test('rotate - empty list', () => {
        let head = null; // Empty list
        let result = rotate(head, 2);
        expect(display(result)).toEqual([]); // No change expected
    });
    test('rotate - large k with multiple rotations', () => {
        let head = new Node(10);
        head = append(head, 20);
        head = append(head, 30);
        head = append(head, 40); // List: [10, 20, 30, 40]
        let result = rotate(head, 10); // Effective k = 10 % 4 = 2
        expect(display(result)).toEqual([30, 40, 10, 20]); // Expected rotation
    });
        
    

    // Test for segregateEvenOdd
    test('segregateEvenOdd - segregate even and odd nodes', () => {
        let head = new Node(10);
        head = append(head, 15);
        head = append(head, 20);
        head = append(head, 25);
        head = segregateEvenOdd(head);
        expect(display(head)).toEqual([10, 20, 15, 25]);
    });

    test('segregateEvenOdd - no even nodes', () => {
        let head = new Node(15);
        head = append(head, 25);
        head = segregateEvenOdd(head);
        expect(display(head)).toEqual([15, 25]);
    });

    test('segregateEvenOdd - no odd nodes', () => {
        let head = new Node(10);
        head = append(head, 20);
        head = segregateEvenOdd(head);
        expect(display(head)).toEqual([10, 20]);
    });
});
