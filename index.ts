// working for array of numbers, strings, boolean

type Item = string | number;

function prioritize(items: Item[]) {  
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
