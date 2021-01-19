// 5
function urlifyString(string) {
  string = string.trim();
  let output = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      output += "%20";
    } else {
      output += string[i];
    }
  }
  return output;
}
// O(n)

// 6
function filterArr(n) {
  let newArray = [];
  for (let i = 0; i < n.length; i++) {
    if (n[i] >= 5) {
      newArray.push(n[i]);
    }
  }
  return newArray;
}

const arr = [10, 11, 1, 2, 12, 33, 444, 5, 4, 0];
console.log(filterArr(arr));
// O(n)

// 7
function largestSum(n) {
  let maxSum = 0;
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    sum = 0;
    sum = arr[i];
    for (let j = i + 1; j < n.length; j++) {
      sum += arr[j];
      if (sum > maxSum) {
        maxSum = sum;
      }
    }
  }
  return maxSum;
}
// O(n ^ k)

// 8
function mergeArr(arr1, arr2) {
  const newArr = arr1.concat(arr2);
  newArr.sort((a, b) => a - b);
  return newArr;
}

console.log(mergeArr([1, 2, 3, 4], [2, 3, 6, 7]));
// O(1)

// 9
// delete given characters from a string

function deleteChars(string, chars) {
  let output = "";
  for (let i = 0; i < string.length; i++) {
    let contained = true;
    for (let j = 0; j < chars.length; j++) {
      if (string[i] === chars[j]) {
        contained = false;
      }
    }
    if (contained) {
      output += string[i];
    }
  }
  return output;
}

console.log(deleteChars("Oh Hi Mark", "aeiou"));
// O(n ^ k)

// 10
function products(arr) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    let product = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        product *= arr[j];
      }
    }
    output.push(product);
  }
  return output;
}
// O(n ^ k)

// 11

function twoDArr(arr) {
  let output = [];
  let rowCheck = [];
  let columnCheck = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] === 0) {
        rowCheck[i] = true;
        columnCheck[j] = true;
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (!output[i]) {
      output[i] = [];
    }
    for (let j = 0; j < arr[0].length; j++) {
      if (rowCheck[i] || columnCheck[j]) {
        output[i][j] = 0;
      } else {
        output[i][j] = 1;
      }
    }
  }
  return output;
}
// O(n ^ k)

// 12
function stringRotation(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let doublestr1 = str1 + str1;

  if (doublestr1.indexOf(str2) === -1) {
    return false;
  } else {
    return true;
  }
}
// O(n)
