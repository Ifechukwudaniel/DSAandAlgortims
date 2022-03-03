/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
	let result = []
	for (let i = 0; i < l.length; i++) {
		let min = nums[l[i]]
		let max = nums[l[i]]
		let count = 0
		let sum = 0
		let set = []
		for (let j = l[i]; j <= r[i]; j++) {
			count++;
			sum += nums[j]
			min = min > nums[j] ? nums[j] : min;
			max = max > nums[j] ? max: nums[j];
			set.push(nums[j])
		}
		let d = (max - min)/(count - 1);
		let possible = true;
		for (let z = 1; z < set.length; z++) {
			if (!set.includes(min + z*d)) {
				possible = false;
				break;
			}
		}
		result.push(possible)
	}
	return result;
};