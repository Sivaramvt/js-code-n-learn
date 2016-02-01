/* Map and Set objects contain elements which are iterable in the order of insertion.*/

var sampleMap = new Map();
sampleMap.set("1", "one");
sampleMap.set("2", "Two");
console.log(sampleMap.size);

/* itertion using for of statement */
/*for(var [key, value] of sampleMap){
  console.log("key - " + key + ", value - " = value);
}*/

/* GC friendly week map also available */


/* Set */
var sampleSet = new Set();
sampleSet.add("1");
sampleMap.add("2");
console.log(sampleSet.size);
/* Week set also available */
