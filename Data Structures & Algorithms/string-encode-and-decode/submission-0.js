class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = '';

        strs.forEach((str) => {
            res += str.length + "#" + str;
        });

        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        let i=0;
        while(i < str.length) {
            let j = i;
            while( str[j] !== '#') {
                j++;
            }

            let length = parseInt(str.substring(i, j));
            i = j+1;
            j = i + length;
            result.push(str.substring(i, j));
            i = j;
        }
        return result;
    }
}
