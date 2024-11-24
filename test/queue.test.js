const Queue = require('../src/queue'); // Adjust the path to where your Queue class is located

describe('Queue Class', () => {

    let queue;

    beforeEach(() => {
        queue = new Queue();
    });

    test('enqueue - add items to the queue', () => {
        expect(queue.enqueue(10)).toBe('10 inserted');
        expect(queue.enqueue(20)).toBe('20 inserted');
        expect(queue.printQueue).toEqual({ 0: 10, 1: 20 });
    });

    test('dequeue - remove items from the queue', () => {
        queue.enqueue(10);
        queue.enqueue(20);
        queue.enqueue(30);

        expect(queue.dequeue()).toBe(10);
        expect(queue.dequeue()).toBe(20);
        expect(queue.printQueue).toEqual({ 2: 30 });
    });

    test('dequeue - should return undefined for an empty queue', () => {
        expect(queue.dequeue()).toBeUndefined();
    });

    test('peek - should return the first element without removing it', () => {
        queue.enqueue(10);
        queue.enqueue(20);

        expect(queue.peek()).toBe(10);
        expect(queue.printQueue).toEqual({ 0: 10, 1: 20 });
    });

    test('peek - should return undefined for an empty queue', () => {
        expect(queue.peek()).toBeUndefined();
    });

    test('enqueue and dequeue in sequence', () => {
        queue.enqueue(10);
        queue.enqueue(20);
        queue.enqueue(30);

        expect(queue.dequeue()).toBe(10);
        expect(queue.dequeue()).toBe(20);
        expect(queue.printQueue).toEqual({ 2: 30 });
    });

    test('printQueue - should return the current queue state', () => {
        queue.enqueue(10);
        queue.enqueue(20);

        expect(queue.printQueue).toEqual({ 0: 10, 1: 20 });
    });

    test('enqueue and dequeue multiple times', () => {
        queue.enqueue(10);
        queue.enqueue(20);
        queue.enqueue(30);
        
        expect(queue.dequeue()).toBe(10);
        expect(queue.dequeue()).toBe(20);
        expect(queue.enqueue(40)).toBe('40 inserted');
        expect(queue.printQueue).toEqual({ 2: 30, 3: 40 });
    });
});
