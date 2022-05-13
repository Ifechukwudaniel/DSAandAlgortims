
var TrieNode = function() {
    this.key= {}
    this.end = false
}

var Trie = function() {
    this.root = new TrieNode()
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word, node = this.root) {
    if(word.length == 0){
        node.end = true
        return
    }
    
    if(!node.key[word[0]]){
        node.key[word[0]] =  new TrieNode()
        let curentNode = node.key[word[0]]
        this.insert(word.substring(1) ,curentNode)
        return;
    }
    this.insert(word.substring(1),node.key[word[0]])
    return
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word, node= this.root) {
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
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(word, node= this.root) {
    if(word.length == 0 ){
        return  true  
    } 
    if(!node.key[word[0]]) {
        return false
    }
    let currentNode = node.key[word[0]]
    return this.startsWith(word.substring(1),currentNode)   
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */