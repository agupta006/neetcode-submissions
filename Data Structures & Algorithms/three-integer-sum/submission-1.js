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
        for(let index = 0; index < sortedNum.length - 2; index++) {
            let firstElem = sortedNum[index];
            const remainingTarget = 0 - firstElem;
            const twoSumFuncVal = this.twoSum(sortedNum.slice(index + 1), remainingTarget);
            if (twoSumFuncVal) {
                const newKey = `${sortedNum[index]}${twoSumFuncVal[0]}${twoSumFuncVal[1]}`;
                if (!resultSet.has(newKey)) {
                    result.push([sortedNum[index], ...twoSumFuncVal]);
                    resultSet.add(newKey);
                }
            }
        }

        return result;

    }
}
