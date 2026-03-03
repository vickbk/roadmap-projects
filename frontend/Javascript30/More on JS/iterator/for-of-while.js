// for (var num of nums) {
//    console.log(num);
// }

const nums = [10, 20, 30];

const iter = nums[Symbol.iterator]();
let { done, value } = iter.next();
while (!done) {
  console.log(value);
  ({ done, value } = iter.next());
}
