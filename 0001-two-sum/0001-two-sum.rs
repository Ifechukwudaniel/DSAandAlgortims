impl Solution {
         pub fn two_sum(nums: Vec<i32>, target: i32) ->Vec<i32> {
        if (nums.len() < 2 || nums.len() > 10_0000) || (target < -1000_000_000 || target > 1000_000_000){
            panic!("Wrong input data");
        }
        for &val in nums.iter() {
            if val < -100_0000_000 || val > 1000_000_000{
                panic!("Too large or too small value in vec");
            }
        }
            
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