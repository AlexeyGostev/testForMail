function contains(storeObj, targetObj) {
  for (let key in storeObj) {
    // console.log(`storeObj: ${storeObj}, key: ${key}, storeObj[key]: ${storeObj[key]}, target: ${targetObj}`);
    if (storeObj[key] === targetObj) {
      return true;
    }
    if (typeof storeObj[key] === 'object' && contains(storeObj[key], targetObj)) {
      return true;
    }
  }
  return false;
}

const target = {
  prop1: 'test',
}

const store = {
  prop1: { prop1: 1 },
  prop2: function() {},
  prop3: {
    prop1: {
      prop1: {
        prop1: [0, 1, { prop1: "Привет" }],
        prop2: target,
        prop3: {
          prop1: Math.random,
        },
      },
    },
  },
}

console.log(contains(store, target)) // true
console.log(contains(store, 'Привет')) // true
console.log(contains(store, Object)) // false