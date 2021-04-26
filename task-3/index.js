
let nums = [ -1,0,1, 2, 3, 4, 5,10,11.12,13,14,15,16,17,18,19,20];


let totalSum = 0;
for(let i in nums) {
    totalSum += nums[i];
}


let numsCnt = nums.length;

let average = totalSum / numsCnt;

alert('Average is: ' + average);
