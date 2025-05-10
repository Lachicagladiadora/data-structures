class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  push(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let pointer = this.head;

      while (pointer.next !== null) {
        pointer = pointer.next;
      }
      pointer.next = newNode;
    }

    this.size++;
  }

  search(index) {
    let pointer = this.head;

    for (let i = 0; i < index; i++) {
      pointer = pointer.next;
    }

    return pointer;
  }

  pop() {
    if (this.size === 0) return;

    if (this.size === 1) {
      this.head === null;
      this.size--;
      return;
    }

    let pointer = this.head;

    for (let i = 0; i < this.size - 2; i++) {
      pointer = pointer.next;
    }

    pointer.next = null;
    this.size--;
  }
}
// stack: pila que saca y pone en el ultimo
const list = new SinglyLinkedList();

list.push(4);
list.push(3);
list.push(5);
list.push(7);

console.log(list.search(2));
console.log(list);
list.pop();
list.pop();
console.log(list);
list.pop();
console.log(list);
