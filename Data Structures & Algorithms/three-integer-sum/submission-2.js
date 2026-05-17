class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */

    twoSum(array, target) {
        let left = 0, right = array.length - 1;

        while(left < right) {
            const sum = array[left] + array[right];
            if(sum === target) {
                return [array[left], array[right]];
            }

            if (array[left] === array[left + 1]) {
                left++;
            }

            if (array[right] === array[right - 1]) {
                right--;
            }

            if (sum < target) {
                left++;
            } else {
                right--;
            }
        }

        return null;
    }
    threeSum(nums) {
        const sortedNum = nums.sort((a,b) => a - b);
        const result = [];
        const resultSet = new Set();
        // [-4, -1, -1, 0, 1,2];
        // const result = [];
        for(let index = 0; index < sortedNum.length; index++) {
            const element = sortedNum[index];
            if (index > 0 &&  element === sortedNum[index - 1]) {
                continue;
            }
            
            let left = index + 1, right = sortedNum.length - 1;
            while (left < right) {
                const threeSum = element + sortedNum[left] + sortedNum[right];

                if (threeSum > 0) {
                    right--;
                } else if(threeSum < 0) {
                    left++;
                } else {
                    result.push([element,sortedNum[left], sortedNum[right]]);
                    left++;
                    while(sortedNum[left] === sortedNum[left + 1] && left < right) {
                        left++;
                    }
                }
            }
        }

        return result;

    }
}
