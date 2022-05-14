class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        complement = {}
        for i in range(len(nums)): 
            if(complement.get(nums[i]) != None):
                return [complement.get(nums[i]), i]
            else:
             comp = target - nums[i]
             complement[comp] = i
        return []