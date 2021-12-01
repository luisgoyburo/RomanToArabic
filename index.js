

const romans = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };

function roman2arabic(nums){
    const numsArr = nums.split('');
    const recursion = (arr, index, sum) => {
        const current =  arr[index];
        const prev = arr[index + 1] || null;

        if(prev && romans[current] < romans[prev]){
            sum -= romans[current];  // add
        } else {
            sum += romans[current];  // substract
        }

        if(index === 0) return sum; // final result

        return recursion(arr, index - 1, sum);
    }

    return recursion(numsArr, numsArr.length - 1, 0);
};


module.exports = roman2arabic;
