const arr = [1, 23, 15, 45, -6, -8];


console.log(arr);
// const deleted = arr.splice(1, 2, 1, 3, 5, -9);
// console.log('deleted', deleted);
console.log(arr.splice());
const a = arr;
a.push(99);
console.log(a);
 const mappedArray = arr.map((curr, index, arr) => curr * index)
const filteredArray = arr.filter((curr, index, arr) => curr > 0)
console.log(mappedArray);
console.log(filteredArray);

// create a reduce function that will return an object with two arrays, positives and negatives
 const reduce = (acc, item) => {
      if (item > 0) {
            acc.positives.push(item);
      } else {
            acc.negatives.push(item);
      }
      return acc;
 }
// use a reduce function to get the multiplication of all the positive numbers in the array
const sum = arr.reduce(reduce, {positives: [1, 23, 15, 45], negatives: [-6, -8]});
console.log(sum.positives.reduce((acc, item) => acc * item, 0));
console.log(sum.negatives.reduce((acc, item) => acc * item, 0));
