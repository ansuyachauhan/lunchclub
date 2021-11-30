const testMap = new Map();
const arr= ["ansuya", "jigar", "hridyan", "aaryav","ansuya"];

function insertMap(map, key, value) {
    map.set(key, value);
    return map;
  }

  for(let i =0;i<arr.length;i++)
   { 
    insertMap(testMap, arr[i], 1);
    }

    console.log(testMap.get("ansuya"));