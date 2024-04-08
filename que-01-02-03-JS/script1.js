let series = [];
let lengthVal=0;
let largestNumber;
for (i = 1; i < 1000000; i++) {
  series=[];
  let num = i;
  
  while (num != 1) {
    if (num % 2 == 0) {
      num = num / 2;
      series.push(num);

    }
    else {
      num = (num * 3) + 1;
      series.push(num);
  
    }
  }
  if(series.length>lengthVal){
    lengthVal=series.length;
    largestNumber=i;
  }
}
console.log(largestNumber);