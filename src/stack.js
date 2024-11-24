class Stack {
    constructor(size) {
        this.maxSize = size;
        this.stackArray = [];
        this.topIndex = -1;  // Changed `top` to `topIndex` to avoid name conflict
    }

    // Method to push an element onto the stack
    push(value) {
        if (this.topIndex === this.maxSize - 1) {
            console.log("Stack overflow");
            return;
        }
        this.stackArray[++this.topIndex] = value;
        //console.log(value + " pushed into the stack");
    }

    // Method to pop an element from the stack
    pop() {
        if (this.topIndex === -1) {
            console.log("Stack underflow");
            return -1;
        }
        const poppedElement = this.stackArray[this.topIndex--];
       // console.log(poppedElement + " popped from the stack");
        return poppedElement;
    }

    // Method to peek the top element of the stack
    peek() {  // Renamed from `top` to `peek`
        if (this.topIndex === -1) {
            console.log("Stack is empty");
            return -1;
        }
        return this.stackArray[this.topIndex];
    }

    // Method to check if the stack is empty
    isEmpty() {
        return this.topIndex === -1;
    }
}

module.exports = Stack;
