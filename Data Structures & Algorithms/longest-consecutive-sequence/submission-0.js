class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const map = new Set(nums);
        let longestCount = 0;
        
        for(let i=0; i<nums.length; i++) {
            let increamentIndex = 1;
            while(map.has(nums[i] + increamentIndex)) {
                increamentIndex++;
            }
            longestCount = Math.max(longestCount, increamentIndex);
        }

        return longestCount;
    }
}
