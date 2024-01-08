function birthdayCakeCandles(candles) {
  
        // let max = candles.reduce((acc,current)=>Math.max(acc,current),0);
      // let tallest=0;
      // let  max=0;
      //   for(let item of candles ){
      //     if(item > max){
      //       max=item;
      //       document.write(max)
      //     tallest=1;
      //     }
      //     else if(item===max){
      //       tallest++;
      //     }
      //     }
      //     document.write(tallest)
      
      let max=0;
      let tallest=0;
      for(let i of candles){
        if(i>max){
          max=i;
          tallest=1
        }else if(i===max){
          tallest++;
          
        }
      }
        
        document.write(tallest);
      
        
        // sameNum= candles.filter((item)=>max==item);
        // document.write(sameNum.length);
}

let candles = [4, 4,1,3,4,4,5,7,7,7,5,6,7,'7'];
birthdayCakeCandles(candles);



function solveMeFirst(a, b) {
  // Hint: Type return a+b below 
  let sum = 0;
  sum=a+b; 
  console.log(sum);
  return sum;
  
}
solveMeFirst(2, 3);

function simpleArraySum(ar) {
 let sum = 0;
 let arLength=ar.length;
 for(let i =0;i<arLength;i++){
     sum+=ar[i];
 }
 return sum;
}
let arrSum = [4, 4, 1, 3, 4, 4, 5, 7, 7, 7, 5, 6, 7]
simpleArraySum(arrSum);

// compareTriplets
function compareTriplets(a, b) {
    let alice = 0;
    let bob = 0;

    for (let i = 0; i < 3; i++) {
        if (a[i] > b[i]) {
            alice++;
        } else if (a[i] < b[i]) {
            bob++;
        }
    }

    return [alice, bob];
}


const a = [1, 2, 3];
const b = [3, 2, 1];

compareTriplets(a, b);
