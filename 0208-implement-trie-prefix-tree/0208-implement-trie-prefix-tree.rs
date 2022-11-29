use std::collections::HashMap;

struct TrieNode {
    children: HashMap<char, TrieNode>,
    is_word: bool,
}
impl TrieNode {
    fn new() -> Self {
        TrieNode {
            children: HashMap::new(),
            is_word: false,
        }
    }
}

struct Trie {
    root: TrieNode,
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl Trie {
    fn new() -> Self {
        Self {
            root: TrieNode::new(),
        }
    }

    fn insert(&mut self, word: String) {
        let mut curr_node = &mut self.root;

        for c in word.chars() {
            let next_node = curr_node.children.entry(c).or_insert(TrieNode::new());
            curr_node = next_node
        }

        curr_node.is_word = true
    }

    fn search(&self, word: String) -> bool {
        let mut curr_node = &self.root;
        match Self::contain_prefix(word, &mut curr_node) {
            true => curr_node.is_word,
            false => false,
        }
    }

    fn starts_with(&self, prefix: String) -> bool {
        let mut curr_node = &self.root;
        Self::contain_prefix(prefix, &mut curr_node)
    }

    fn contain_prefix(prefix: String, curr_node: &mut &TrieNode) -> bool {
        for c in prefix.chars() {
            match (*curr_node).children.get(&c) {
                Some(next_node) => *curr_node = next_node,
                None => return false,
            }
        }
        true
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * let obj = Trie::new();
 * obj.insert(word);
 * let ret_2: bool = obj.search(word);
 * let ret_3: bool = obj.starts_with(prefix);
 */