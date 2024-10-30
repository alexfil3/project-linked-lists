import Node from './Node.js';

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    append(value) {
        const node = new Node(value);

        if (!this.head) {
            this.head = node;
        } else {
            let current = this.head;
            while(current.nextNode) {
                current = current.nextNode;
            }

            current.nextNode = node;
        }

        this.length++;
    }

    prepend(value) {
        const node = new Node(value);
        
        if (!this.head) {
            this.head = node;
        } else {
            node.nextNode = this.head;
            this.head = node;
        }

        this.length++;
    }

    size() {
        return this.length;
    }

    getHead() {
        return this.head;
    }

    tail() {
        if (!this.head) return null;

        let current = this.head;

        while(current.nextNode) {
            current = current.nextNode;
        }

        return current;
    }

    at(index) {
        if (index < 0 || index >= this.length) return null;

        let current = this.head;
        let currentIndex = 0;

        while(currentIndex !== index) {
            current = current.nextNode;
            currentIndex++;
        }

        return current;
    }

    pop() {
        if (!this.head) return null;

        let current = this.head;

        while(current.nextNode) {
            if (current.nextNode.nextNode === null) {
                current.nextNode = null;
            } else {
                current = current.nextNode;
            }
        }

        this.length--;
    }

    contains(value) {
        if (!this.head) return null;

        let current = this.head;
        let index = 0;

        while(index <= this.length - 1) {
            if (current.value === value) {
                return true
            } else {
                current = current.nextNode;
                index++;
            }
        }

        return false;
    }

    find(value) {
        if (!this.head) return null;

        let current = this.head;
        let index = 0;

        while(index <= this.length - 1) {
            if (current.value === value) {
                return index;
            } else {
                current = current.nextNode;
                index++;
            }
        }

        return null;
    }

    toString() {
        if (!this.head) return null;

        let current = this.head;
        let index = 0;
        let str = '';

        while (index <= this.length - 1) {
            if (index === this.length - 1) {
                str += `( ${current.value} ) -> null`;
                index++;
            } else {
                str += `( ${current.value} ) -> `;
                current = current.nextNode;
                index++;
            }
        }

        return str;
    }

    insertAt(value, index) {
        if (index < 0 || index > this.length) {
            throw new Error('index is out of range');
        }
    
        const node = new Node(value);
    
        if (index === 0) {
            node.nextNode = this.head;
            this.head = node;
        } else {
            let current = this.head;
            let currentIndex = 0;
    
            while (currentIndex < index - 1) {
                current = current.nextNode;
                currentIndex++;
            }
    
            node.nextNode = current.nextNode;
            current.nextNode = node;
        }
    
        this.length++;
    }

    removeAt(index) {
        if (!this.head) return null;
        if (index < 0 || index >= this.length) throw new Error('index is out of range');
    
        if (index === 0) {
            this.head = this.head.nextNode;
        } else {
            let current = this.head;
            let currentIndex = 0;
    
            while (currentIndex < index - 1) {
                current = current.nextNode;
                currentIndex++;
            }
    
            current.nextNode = current.nextNode.nextNode;
        }
    
        this.length--;
    }
}

export default LinkedList;