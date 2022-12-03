impl Solution {
    pub fn frequency_sort(s: String) -> String {
          let mut map = std::collections::HashMap::new();
    for char in s.chars() {
        map.entry(char).and_modify(|e| *e += 1).or_insert(1);
    }
    let mut vector: Vec<(char, u32)> = map.iter().map(|(c, f)| (*c, *f)).collect();
    vector.sort_by(|a, b| b.1.cmp(&a.1));
    let mut newString = String::new();
    for (key, count) in &vector {
        for _ in 0..*count {
            newString.push(*key);
        }
    }
    newString
    }
}