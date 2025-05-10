class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.back = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  push(data) {
    const node = new Node(data);

    if (this.head === null) {
      this.head = node;
      this.back = node;
    } else {
      node.prev = this.back;
      this.back.next = node;
      this.back = this.back.next;
    }

    this.size++;
  }

  pop() {
    let oldValue;
    if (this.isEmpty()) {
      throw new Error("List is empty");
    } else if (this.size === 1) {
      oldValue = this.head.data;
      this.head = null;
      this.back = null;
    } else {
      oldValue = this.back.data;
      this.back = this.back.prev;
      this.back.next = null;
    }
    this.size--;
    return oldValue;
  }

  contains(data) {
    //verifica si contiene cierto valor === search
    if (this.isEmpty()) {
      throw new Error("List is empty");
    }

    let pointer = this.head;

    while (data !== pointer.data && pointer.next !== null) {
      pointer = pointer.next;
    }

    return pointer.data === data;
  }
}

const dll = new DoublyLinkedList();
dll.push("sdf");
dll.push("banana");
dll.push("naranjita");
dll.push("fresita");

console.log(dll.pop());
console.log(dll.contains("naranjota"));
console.log(dll);
