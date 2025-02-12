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
}



const testLinkedList = new LinkedList;
testLinkedList.append("cat");
testLinkedList.append("dog");
testLinkedList.append("chicken");
console.log(JSON.stringify(testLinkedList, null, 2));