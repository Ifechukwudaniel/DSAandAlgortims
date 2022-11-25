use std::collections::HashMap;
impl Solution {
    pub fn contains_duplicate(nums: Vec<i32>) -> bool {
        let mut seenHash: HashMap<i32, bool> = HashMap::new();
        for elem in nums {
            if seenHash.get(&elem) != None {
                return true;
            }
            seenHash.insert(elem, true);
        }
        false
    }
}