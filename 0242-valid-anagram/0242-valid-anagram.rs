impl Solution {
    pub fn hash(str: String) -> String {
        let mut hash_array = vec![0; 26];
        str.chars().for_each(|char| {
            let hash_index = char as usize - 97;
            hash_array[hash_index] += 1;
        });
        hash_array.into_iter().map(|x| x.to_string()).collect()
    }

    pub fn is_anagram(s: String, t: String) -> bool {
        Self::hash(s) == Self::hash(t)
    }
}