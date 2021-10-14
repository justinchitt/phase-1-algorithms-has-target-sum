function hasTargetSum(array, target) {
  // Write your algorithm here
  let newArry = []
  for (index of array){
    for (number of array) {
      if (index !== number) {
      let sum = index + number
      newArry.push(sum)
      }
    }
  }
  let final = newArry.find((element) => pleaseWork(element, target))
  if (final === target) {
    return true
  } else {
    return false
  }
}

function pleaseWork(element, target) {
  return element === target
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([2, 2, 3, 3], 4));
}

module.exports = hasTargetSum;
