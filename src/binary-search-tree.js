const { NotImplementedError } = require('../lib');

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    const newNode = new Node(data);
    if (this._root === null) {
      this._root = newNode;
      return;
    }

    let current = this._root;
    while (true) {
      if (data < current.data) {
        if (current.left === null) {
          current.left = newNode;
          break;
        }
        current = current.left;
      } else if (data > current.data) {
        if (current.right === null) {
          current.right = newNode;
          break;
        }
        current = current.right;
      } else {
        // Если значение уже есть в дереве, ничего не делаем (или можно обновить)
        break;
      }
    }
  }

  find(data) {
    let current = this._root;
    while (current !== null) {
      if (data === current.data) {
        return current;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null;
  }

  has(data) {
    return this.find(data) !== null;
  }

  remove(data) {
    this._root = this._removeNode(this._root, data);
  }

  _removeNode(node, data) {
    if (node === null) {
      return null;
    }

    if (data < node.data) {
      node.left = this._removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this._removeNode(node.right, data);
      return node;
    } else {
      // Нашли узел, который нужно удалить
      
      // Случай 1: Нет детей (лист)
      if (node.left === null && node.right === null) {
        return null;
      }
      
      // Случай 2: Один ребенок
      if (node.left === null) {
        return node.right;
      }
      if (node.right === null) {
        return node.left;
      }
      
      // Случай 3: Два ребенка
      // Находим минимальный узел в правом поддереве
      let minRight = node.right;
      while (minRight.left !== null) {
        minRight = minRight.left;
      }
      
      // Заменяем данные текущего узла на минимальный из правого поддерева
      node.data = minRight.data;
      
      // Удаляем этот минимальный узел из правого поддерева
      node.right = this._removeNode(node.right, minRight.data);
      
      return node;
    }
  }

  min() {
    if (this._root === null) return null;
    let current = this._root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    if (this._root === null) return null;
    let current = this._root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};