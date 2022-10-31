use std::collections::HashMap;

impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) ->Vec<i32> { 
      let mut map: HashMap<i32, i32> = HashMap::new();
        for (i, n) in nums.iter().enumerate() {
            let currentTarget =  target -n;
            match map.get(&currentTarget) {
                Some(j) => {
                    return vec![ i as i32,*j];
                }
                None => map.insert(*n, i as i32),
            };
        }
        return vec![];
    }
}