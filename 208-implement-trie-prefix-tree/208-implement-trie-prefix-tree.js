class TrieNode {
  constructor() {
    this.key = {};
    this.end = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  insert(word, node = this.root) {
    if (word.length === 0) {
      node.end = true;
      return;
    }

    if (!node.key[word[0]]) {
      node.key[word[0]] = new TrieNode();
      this.insert(word.substring(1), node.key[word[0]]);
      return;
    }

    this.insert(word.substring(1), node.key[word[0]]);
    return;
  }

  search(word, node = this.root) {
    if (word.length == 0 && node.end == true) {
      return true;
    }

    if (word.length == 0) {
      return false;
    }

    if (!node.key[word[0]]) {
      return false;
    }
    let foundNode = node.key[word[0]];
    return this.search(word.substring(1), foundNode);
  }

  startsWith(word, node = this.root) {
    if (word.length == 0) return true;

    if (!node.key[word[0]]) return false;

    let foundNode = node.key[word[0]];
    return this.startsWith(word.substring(1), foundNode);
  }
}
