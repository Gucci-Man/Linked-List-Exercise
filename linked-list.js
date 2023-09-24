/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (this.head === null) this.head = newNode;

    if (this.tail !== null) this.tail.next = newNode;

    this.tail = newNode;
    this.length += 1;

  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    
    if(!this.head){ // if there is no head, then list is empty
      this.head = newNode;
      this.tail = newNode;
    }

    newNode.next = this.head;
    this.head = newNode;

    this.length += 1;

  }

  /** pop(): return & remove last item. */

  pop() {
    let lastNode = this.tail;
    
    if(this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== this.tail){
        currentNode = currentNOde.next;
      }

      currentNode.next = null;
      this.tail = currentNode;
    }

    this.length--;
    return lastNode.val;
    
  }

  /** shift(): return & remove first item. */

  shift() {
    let firstNode = this.head;
    this.head = this.head.next;

    if (this.head === null) {
      this.tail = null;
    }

    this.length--;
    return firstNode.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let idx_count = 0;
    let currentNode = this.head;

    while(currentNode){
      if(idx === idx_count){
        return currentNode.val
      }
      currentNode = currentNode.next;
      idx_count++;
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let idx_count = 0;
    let currentNode = this.head;

    while(currentNode){
      if(idx === idx_count){
        currentNode.val = val
      }
      currentNode = currentNode.next;
      idx_count++;
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let newNode = new Node(val);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return undefined;
    }

    if(idx === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else if (idx === this.length){
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      let currentNode = this.head;
      for (let i = 0; i < idx - 1; i++) {
        currentNode = currentNode.next;
      }

      newNode.next = currentNode.next;
      currentNode.next = newNode;
    }

    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let currentNode = this.head;
    let previousNode = null;

    if (idx === 0){
      this.head = this.head.next;
      if (this.head === null) {
        this.tail = null;
      }
    } else if (idx === this.length - 1) {
      while(currentNode.next !== null) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = null;
      this.tail = previousNode;
    } else {
      for (let i = 0; i < idx; i++) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
    }

    this.length--;
    return currentNode.val;
  }

  /** average(): return an average of all values in the list */

  average() {
    let sum = 0;
    let currentNode = this.head;

    while (currentNode !== null) {
      sum += currentNode.val;
      currentNode = currentNode.next;
    }

    if(sum === 0) return sum;

    let avg = sum/this.length;
    return avg;
  }
}

module.exports = LinkedList;
