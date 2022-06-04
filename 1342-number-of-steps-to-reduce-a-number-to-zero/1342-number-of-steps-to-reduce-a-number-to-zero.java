class Solution {
    public int numberOfSteps(int num) {
        int count =0;
        while(num>0){
            if((num&1)== 1){
                num--;
                count++;
                continue;
            }
            num = num >> 1;
            count++;
        }
        return count;
    }
}