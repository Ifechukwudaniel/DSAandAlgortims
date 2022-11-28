impl Solution {
    pub fn top_k_frequent(nums: Vec<i32>, k: i32) -> Vec<i32> {
        let mut map = std::collections::HashMap::new();
        nums.into_iter()
            .for_each(|n| *map.entry(n).or_insert(0) += 1);
        let mut v: Vec<(i32, i32)> = map.into_iter().collect();
        v.sort_by(|a, b| b.1.cmp(&a.1));
        v.into_iter().map(|e| e.0).take(k as usize).collect()
    }
}