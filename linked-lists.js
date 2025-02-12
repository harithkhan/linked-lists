class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.nextNode !== null) {
                current = current.nextNode;
            }
            current.nextNode = newNode;
        }
    }

    prepend(value) {
        this.head = new Node(value, this.head);
    }

    size() {
        let counter = 0;
        let current = this.head;
        while (current !== null) {
            counter++;
            current = current.nextNode;
        }
        return counter;
    }

    getHead() {
        return this.head;
    }

    getTail() {
        let current = this.head;
        if (current.nextNode === null) {
            return current;
        } else {
            while (current.nextNode !== null) {
                current = current.nextNode;
            }
        }
        return current;
    }

    at(index) {
        if (index < 0) return null;
        let current = this.head;
        let count = 0;
        while (current !== null) {
            if (count === index) return current;
            current = current.nextNode;
            count++;
        }
        return null;
    }


}

const testLinkedList = new LinkedList();
testLinkedList.append("cat");
testLinkedList.append("dog");
testLinkedList.append("chicken");
testLinkedList.prepend("crocodile");
testLinkedList.prepend("goat");
console.log(JSON.stringify(testLinkedList, null, 2));
console.log(testLinkedList.at(4));