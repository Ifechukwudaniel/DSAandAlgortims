impl Solution {
    pub fn hammingWeight (x: u32) -> i32 {
     let mut n = x;
    let mut count = 0;
    while n > 0 {
        if n & 1 == 1 {
            count += 1;
        }
        n = n >> 1
    }
    count
    }
}