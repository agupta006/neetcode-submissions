class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";
        strs.forEach((string) => {
            const length = string.length;
            result += `${length}#${string}`;
        });

        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let index = 0;
        const result = [];

        while(index < str.length) {
            let j = index;
            while(str[j] !== "#") {
                j++;
            }
            const lengthStr = parseInt(str.slice(index, j));
            const string = str.slice(j+1, j+1+lengthStr);
            result.push(string);
            index = j+lengthStr+1;
        }
        return result;
    }
}
