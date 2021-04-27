let num = parseInt(prompt('Enter  number ')) || 0  ;


function narcissistic( value ) {
   let valStr = '' + value;
    let valLength = valStr.length;
   let result = 0;  
    for (var i in valStr) {
      result += Math.pow((+valStr[i]), valLength);
    }
      return result === value;
      
  };
  

 if (narcissistic(num)) {
    alert(`Narcissistic Number`);
}else{
    alert(`Not Narcissistic`);
}