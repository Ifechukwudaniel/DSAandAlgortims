impl Solution {
    pub fn count_bits(n: i32) -> Vec<i32> {
        let mut answer: Vec<i32> = Vec::new();
        for i in 0..n + 1 {
            answer.push(i.count_ones() as i32)
        }
        answer
    }
}