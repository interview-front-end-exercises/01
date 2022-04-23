// const search = (nums, term) => {

//     nums.sort((a, b) => {
//         return a - b;
//     })

//     let binaryFind = 0;
    
//     binaryFind = nums.reduce((prev, curr, idx, arr) => {
//         const high = nums[nums.length - 1];
//         const low = nums[0];
//        // const middleVal = Math.floor((low + high) / 2);
//         // prev = arr;
//         const middleIndex = Math.floor((low + high) / 2);
//         // console.log(middleIndex, prev);

//         if (prev[middleIndex] === term) {
//             return term;
//         }

//         // prev.splice(0, middleIndex);
//         // debugger
//         // if (arr.length === 1) {
//         //     return arr[idx];
//         // }
//         return prev;
        
//     },[])


//     // console.log(low, middle, high);
// }

const binaryFindWithRecursion = (nums, term) => {
    
    nums.sort((a, b) => {
        return a - b;
    });

    const middleIndex = Math.floor((nums.length - 1));

    if (nums[middleIndex] === term) {
        return `number ${term} found`;

    } else if (nums.length === 1 && nums[0] !== term) {
        return `number ${term} not found`;

    } else if (nums[middleIndex] > term) {

        return binaryFindWithRecursion(nums.splice(0, middleIndex), term);
    } else if (nums[middleIndex] < term) {
        
        return binaryFindWithRecursion(nums.splice(middleIndex), term);
    }
}

const arr = [3,4,99,86,1,23,9,11];

console.log('binary find,', binaryFindWithRecursion(arr, 23))