const Stack = require('../src/stack');  // Adjust the import path as needed

describe('Stack Class Tests', () => {

    let stack;

    beforeEach(() => {
        stack = new Stack(3);  // Create a stack with max size 3 for testing
    });

    test('push - add item to stack', () => {
        stack.push(10);
        expect(stack.peek()).toBe(10);  // The top element should be 10 (using peek instead of top)
    });

    test('push - stack overflow', () => {
        stack.push(10);
        stack.push(20);
        stack.push(30);
        console.log = jest.fn();  // Mock console.log to avoid cluttering test output
        stack.push(40);  // Stack overflow
        expect(console.log).toHaveBeenCalledWith('Stack overflow');
    });

    test('pop - remove item from stack', () => {
        stack.push(10);
        stack.push(20);
        const poppedElement = stack.pop();
        expect(poppedElement).toBe(20);  // Popped element should be 20
        expect(stack.peek()).toBe(10);  // After popping, top should be 10 (using peek)
    });

    test('pop - stack underflow', () => {
        console.log = jest.fn();  // Mock console.log to avoid cluttering test output
        const poppedElement = stack.pop();  // Pop from empty stack
        expect(poppedElement).toBe(-1);  // Stack underflow should return -1
        expect(console.log).toHaveBeenCalledWith('Stack underflow');
    });

    test('peek - peek top element', () => {
        stack.push(10);
        stack.push(20);
        expect(stack.peek()).toBe(20);  // Top element should be 20 (using peek instead of top)
    });

    test('peek - empty stack', () => {
        console.log = jest.fn();  // Mock console.log to avoid cluttering test output
        expect(stack.peek()).toBe(-1);  // Should return -1 for empty stack
        expect(console.log).toHaveBeenCalledWith('Stack is empty');
    });

    test('isEmpty - check if stack is empty', () => {
        expect(stack.isEmpty()).toBe(true);  // Stack should be empty
        stack.push(10);
        expect(stack.isEmpty()).toBe(false);  // Stack should not be empty after push
        stack.pop();
        expect(stack.isEmpty()).toBe(true);  // Stack should be empty again
    });

    test('push and pop sequence', () => {
        stack.push(10);
        stack.push(20);
        stack.push(30);
        expect(stack.peek()).toBe(30);  // Top element should be 30 (using peek)

        stack.pop();  // Pop 30
        expect(stack.peek()).toBe(20);  // Top element should now be 20

        stack.pop();  // Pop 20
        expect(stack.peek()).toBe(10);  // Top element should now be 10

        stack.pop();  // Pop 10
        expect(stack.isEmpty()).toBe(true);  // Stack should be empty
    });

    test('push beyond max size', () => {
        stack.push(10);
        stack.push(20);
        stack.push(30);
        stack.push(40);  // This should trigger a stack overflow
        expect(stack.peek()).toBe(30);  // Top should still be 30
    });

});
