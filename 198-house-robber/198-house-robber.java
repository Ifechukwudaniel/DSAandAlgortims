import java.util.Arrays;

class Solution {
    public int rob(int[] nums) {
        if(nums.length ==1) return nums[0];
       if(nums.length <=2) {
           return Math.max(nums[0], nums[1]);
       }
        int[] table = new int[nums.length];
        Arrays.fill(table,0);
        table[0] = nums[0];
        table[1] = nums[1];
        
        for(int i=2; i<table.length; i++){
            int ta=0;
            int tb=0;
            if((i-2) >=0) ta = nums[i]+table[i-2];    
            if((i-3) >=0) tb = nums[i]+table[i-3];
            table[i] = Math.max(ta,tb);
        }
        return Math.max(table[table.length-2], table[table.length-1]);
    }
}