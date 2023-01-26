// working for array of numbers, strings, boolean

function prioritize(items) {  
  const hashMap = {};
  
  for (let item of items) {
    if (item in hashMap) {
      hashMap[item] = hashMap[item] + 1;
    } else {
      hashMap[item] = 1;
    }
  }
  
  return hashMap;
}
