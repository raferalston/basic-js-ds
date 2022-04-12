const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(value=null) {
    this.left = null
    this.right = null
    this.data = value
  }

  root() {
    if (this.data) {
      return this
    }
    return null
  }

  add(data) {
    if (!this.data) {
      this.data = data
      return null
    }
    if (this.data === data) {
      return null
    }
    if (this.data > data) {
      if (this.left) {
        this.left.add(data)
        return null
      }
      this.left = new BinarySearchTree(data)
      return null
    }
    if (this.right) {
      this.right.add(data)
      return null
    }
    this.right = new BinarySearchTree(data)
  }

  has(data) {
    if (data === this.data) {
      return true
    }

    if (data < this.data) {
      if (this.left === null) {
        return false
      }
      return this.left.has(data)
    }

    if (this.right === null) {
      return false
    }
    return this.right.has(data)
  }

  find(data) {
    if (data === this.data) {
      return this
    }
    if (data < this.data) {
      if (this.left === null) {
        return null
      }
      return this.left.find(data)
    }

    if (this.right === null) {
      return null
    }
    return this.right.find(data)
  }

  remove(data) {
    if (data < this.data) {
      if (this.left) {
        this.left = this.left.remove(data)
      }
      return this
    }
    if (data > this.data) {
      if (this.right) {
        this.right = this.right.remove(data)
      }
      return this
    }
    if (this.right === null) {
      return this.left
    }
    if (this.left === null) {
      return this.right
    }
    
    let maxMinNode = this.right
    while (maxMinNode.left) {
      maxMinNode = maxMinNode.left
    }
    this.data = maxMinNode.data
    this.right = this.right.remove(maxMinNode.data)
    return this
  }

  min() {
    let that = this
    while (that.left) {
      that = that.left
    }
    return that.data
  }

  max() {
    let that = this
    while (that.right) {
      that = that.right
    }
    return that.data
  }
}

module.exports = {
  BinarySearchTree
};