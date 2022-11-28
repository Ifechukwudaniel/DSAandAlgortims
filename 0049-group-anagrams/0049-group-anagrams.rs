
use std::collections::HashMap;
impl Solution {
    pub fn group_anagrams(strs: Vec<String>) -> Vec<Vec<String>> {
        let mut map: HashMap<String, Vec<String>> = HashMap::new();
        let mut answer: Vec<Vec<String>> = Vec::new();

        for str in strs.iter() {
            let mut key = String::new();
            let mut sorted_string: Vec<char> = str.chars().collect();
            sorted_string.sort();
            for i in sorted_string {
                key.push(i);
                key.push('#');
            }

            if map.get(&key) == None {
                map.insert(key, vec![str.to_string()]);
            } else {
                map.entry(key)
                    .and_modify(|values| values.push(str.to_string()));
            }
        }
        map.values().for_each(|value| answer.push(value.clone()));
        answer
    }
}