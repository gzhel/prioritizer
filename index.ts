// type PrioritizeType = 'string' | 'number' | 'boolean' | 'object' | 'nestedObject';

function prioritize(arr, type = 'string') {  
  return arr.reduce((acc: , cur) => {
    if (!Object.keys(acc).includes(cur)) {
      return {...acc, [cur]: 1};
    }
    return {...acc, [cur]: acc[cur] + 1};
  }, {});
}
