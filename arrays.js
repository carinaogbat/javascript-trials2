'use strict';

// 1. printIndices
function printIndices(items) {
  let count = 0
  for (const item of items) {
    console.log(`${count} ${item}`);
    count += 1;
   
 
  }
}

// 2. everyOtherItem
// function everyOtherItem(items) {
//   const everyOtherList = [];
//   for (const item in items){
//     if (item % 2 === 0) {
//     everyOtherList.push(items[item]);
//     }

//   console.log(everyOtherList);
//   }
// }

function everyOtherItem(items) {
  const resultItems = [];

  for (const i in items) {
    if (i % 2 === 0) {
      resultItems.push(items[i]);
    }
  }
}

//   console.log(resultItems);
// }


// 3. smallestNItems
function smallestNItems(items, n) {
  const sortedItems = items.sort((a, b) => a-b).slice(0, n);

  sortedItems.reverse()
  console.log(sortedItems);

}


const nums = [1, 30, 4, 21, 1000]
nums.sort((a, b) => a - b);
console.log(smallestNItems(nums, 3))