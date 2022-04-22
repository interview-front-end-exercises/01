const search = (nums) => {

    nums.sort((a, b) => {
        return a - b;
    })

    let binaryFind  = [];
    
    binaryFind = nums.reduce((prev, curr, idx, arr) => {
        const high = nums[nums.length - 1];
        const low = nums[0];
        const middleVal = (low + high) / 2;
        const middleIndex = arr.length / 2;
        console.log(middleIndex);
        
    }, [])


    // console.log(low, middle, high);
}

console.log(search([3,4,99,86,1,23,9,11]))