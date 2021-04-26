let num = parseInt(prompt('Enter  number ')) || 0  ;


let val = num ;

function narcissistic( value ) {
   let valStr = '' + value;
    let valLength = valStr.length;
   let result = 0;  
    for (var i in valStr) {
      result += Math.pow((+valStr[i]), valLength);
    }
      return result === value;
  };


 if (narcissistic(num) === true ) {
    alert(`Narcissistic Number`);
}else{
    alert(`Not Narcissistic`);
}
