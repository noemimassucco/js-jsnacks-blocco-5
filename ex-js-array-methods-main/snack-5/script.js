const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
const evenNums = nums.filter(num => num % 2 === 0 );
console.log(evenNums);
// Risultato: [2, 8, 4, 12]

const nums1 = [2, 8, 4, 7, 12, 87];
const evenNums1 = nums1.filter(num => num >= 5)
console.log(evenNums1);

const nums2 = [2, 8, 4, 7, 12, 87];
const evenNums2 = nums2.filter(num => num >= 5)
console.log(evenNums2);