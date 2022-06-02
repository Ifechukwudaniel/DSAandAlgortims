
class Solution {
    public int rob(int[] nums) {
       if(nums.length ==1) return nums[0];
       if(nums.length <=2) {
           return Math.max(nums[0], nums[1]);
       }
        int rob1=0;
        int rob2 =0;
        for(int n : nums){
            int temp = Math.max(n+rob1, rob2);
            rob1= rob2;
            rob2= temp;
        }
        return rob2;

    }
}