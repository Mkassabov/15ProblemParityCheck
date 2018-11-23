//This is O(n) and requires n amount of space in memory
//There might be ways that take less space but this is pretty good

//16 is empty space
let trueSet =  [04, 13, 16, 05,
                12, 08, 02, 15,
                11, 09, 06, 03,
                01, 07, 10, 14];
                
let falseSet = [01, 02, 03, 04,
                05, 06, 07, 08,
                09, 10, 11, 15,
                13, 14, 12, 16];

function checkParitySign(arr) {
  var n = arr.length;
  var pos16 = 15;
  var swapsMade = 0;
  var seen = new Array(n).fill(false); //might be better to create a bitArray object, but I'm lazy
  
  
  for(var i = 0; i < n; i++) {
    if(arr[i] === 16) {pos16 = i;}
    if(seen[i]) {continue;}
    seen[i] = true;
    for(var j = arr[i]; !seen[j - 1]; j = arr[j - 1]) {
      seen[j] = true;
      swapsMade++
    }
  }
  
  var holeX = pos16 % 4;
  var holeY = Math.trunc(pos16 / 4);
   
  return (((holeY + holeX + swapsMade) & 1) ? -1 : 1);
  
}

console.log(trueSet);
console.log(checkParitySign(trueSet));
console.log();
console.log(falseSet);
console.log(checkParitySign(falseSet));