impl Solution {
         pub fn two_sum(nums: Vec<i32>, target: i32) ->Vec<i32> { 
        for (i, val_i) in nums.iter().enumerate() {
            for j in i+1..nums.len() {
                if val_i + nums[j] == target {
                    return vec![i as i32, j as i32];
                }
            }
        }   
        panic!("Not found");
    }
}