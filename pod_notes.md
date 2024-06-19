### Power function:

#### Goal Have recursive Math.pow(a, b) function.

```
function power(a, b){
    if(b === 0){
        return 1;
    }
    if(b < 0){
        return 1/power(a, -b);
    }
    return a * power(a, b - 1);
}


function highestCommonDivisor(a, b){ //find highest common divisor 
  for(let i = Math.min(a, b); i > 0; i++){
    if(a % i === 0 && b % i === 0){
      return i;
    }
  }
}

function highestCommonDivisor(a, b){
  if(b === 0){
    return a;
  }
  return highestCommonDivisor(b, a % b);
}
const a = 200;
const b = 150;
highestCommonDivisor(a, b) // 50

console.log(power(a, b)===Math.pow(a, b), "| for begative power: ", power(a, -b) === Math.pow(a, -b));
```
