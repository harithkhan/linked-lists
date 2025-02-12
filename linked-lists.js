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
            this.nodes = [];
            this.nodes.push(newNode);
        } else {
            this.nodes[this.nodes.length - 1].nextNode = newNode;
            this.nodes.push(newNode);
        }
    }
}



const testLinkedList = new LinkedList;
testLinkedList.append("cat");
testLinkedList.append("dog");
testLinkedList.append("chicken");
console.log(testLinkedList);
console.log(testLinkedList.nodes[2])