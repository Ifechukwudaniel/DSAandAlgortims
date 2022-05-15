
var TrieNode = function(){
    this.keys = {}
    this.end = false 
}

class WordDictionary {
    constructor(){
        this.root =  new TrieNode()
    }
    
    addWord(word, node= this.root){
        // console.log(this.root)
        if(word.length == 0) {
            node.end = true
            return 
        }
        if(!node.keys[word[0]]){
            node.keys[word[0]] = new TrieNode()
            let currentNode = node.keys[word[0]]
            this.addWord(word.substring(1), currentNode)
            return
        }
        this.addWord(word.substring(1),  node.keys[word[0]])
        return
    }
    search(word, node = this.root){
        if(word.length == 0 && node.end == true)  return true
        // console.log(node, word[0])
        if(word[0] === "."){
            for( let key  in node.keys){
               if(this.search(word.substring(1),node.keys[key])) return true
            }
        }
        if(node.keys[word[0]]){
            // console.log("jjd")
           return this.search(word.substring(1),node.keys[word[0]])  
        }
        
        return false
    }
}
/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */