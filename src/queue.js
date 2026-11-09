class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    // Создаем обычный объект, а не экземпляр класса
    const newNode = { value: value, next: null };
    
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    if (this.head === null) {
      return undefined;
    }
    const removedValue = this.head.value;
    this.head = this.head.next;
    
    if (this.head === null) {
      this.tail = null;
    }
    
    return removedValue;
  }
}

module.exports = {
  Queue
};