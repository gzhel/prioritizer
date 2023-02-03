// working for array of numbers, strings, boolean

function prioritize(items) {
  const hashMap = {};
  
  for (let item of items) {
    if (item in hashMap) {
      hashMap[item] += 1;
    } else {
      hashMap[item] = 1;
    }
  }
  
  return hashMap;
}

module.exports = { prioritize };