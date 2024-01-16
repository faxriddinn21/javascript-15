// Map va WeakMap ga doir misollar

// 1-misol

// Map.prototype.deleteMany = function(...keys) {
//     keys.forEach(key => {
//       this.delete(key);
//     });
//   };
  
//   let obj = new Map([
//     ['a', 1],
//     ['b', 2],
//     ['c', 3],
//     ['d', 4]
//   ]);
  
//   obj.deleteMany('a', 'c');
  
//   console.log(obj);




//   2-misol

// function mapSum(obj) {
//     let sum = 0;
  
//     obj.forEach(value => {
//       sum += value;
//     });
  
//     return sum;
//   }
  
//   let obj = new Map([
//     ['a', 2],
//     ['b', 5],
//     ['c', 3]
//   ]);
  
//   let result = mapSum(obj);
//   console.log(result); 



//   3-misol

// function getMapIntersection(map1, map2) {
//     let intersection = new Map();
  
//     map1.forEach((value, key) => {
//       if (map2.has(key)) {
//         intersection.set(key, map2.get(key));
//       }
//     });
  
//     return intersection;
//   }
  
//   let map1 = new Map([
//     ['apple', 1],
//     ['banana', 2],
//     ['orange', 3]
//   ]);
  
//   let map2 = new Map([
//     ['apple', 4],
//     ['orange', 5],
//     ['grape', 6]
//   ]);
  
//   let result = getMapIntersection(map1, map2);
//   console.log(result);
  




// 4-misol

// class SizeableWeakMap extends WeakMap {
//     get size() {
//       let count = 0;
  
//       this.forEach(() => {
//         count++;
//       });
  
//       return count;
//     }
//   }
  
//   let obj = new SizeableWeakMap([
//     [{ id: 1 }, 'John'],
//     [{ id: 2 }, 'Jane'],
//     [{ id: 3 }, 'Alice']
//   ]);
  
//   console.log(obj.size); 





// Set va WeakSet ga doir misollar

// 5-misol

// function setUnion(set1, set2) {
//     let unionSet = new Set([...set1, ...set2]);
//     return unionSet;
//   }
  
//   let set1 = new Set([1, 2, 3]);
//   let set2 = new Set([2, 3, 4]);
  
//   let result = setUnion(set1, set2);
//   console.log(result);




// 6-misol

// function setIntersection(set1, set2) {
//     let intersectionSet = new Set([...set1].filter(value => set2.has(value)));
//     return intersectionSet;
//   }
  
//   let set1 = new Set([1, 2, 3]);
//   let set2 = new Set([2, 3, 4]);
  
//   let result = setIntersection(set1, set2);
//   console.log(result);
  
  
  

//   7-misol

// function checkSetSubset(set1, set2) {
//     return [...set1].every(value => set2.has(value));
//   }
  
//   let set1 = new Set([1, 2]);
//   let set2 = new Set([1, 2, 3, 4]);
  
//   let result = checkSetSubset(set1, set2);
//   console.log(result); 
  




// Spread operatoriga oid misollar

// 8-misol

// function removeDuplicates(arr) {
//     return [...new Set(arr)];
//   }
  
//   let arr = [1, 2, 2, 3, 4, 4, 5];
//   let result = removeDuplicates(arr);
//   console.log(result);
  



// 9-misol

// function mergeArr(arr1, arr2) {
//     return [...arr1, ...arr2];
//   }
  
//   let arr1 = [1, 5, 8];
//   let arr2 = [7, 9, 10];
  
//   let result = mergeArr(arr1, arr2);
//   console.log(result);
  



// 10-misol

function concatArrays(...arrays) {
    return [].concat(...arrays);
  }
  
  let result = concatArrays([1, 2], [3, 4], [5, 6]);
  console.log(result);
  