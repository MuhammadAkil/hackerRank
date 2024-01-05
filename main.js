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

