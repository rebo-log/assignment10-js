let arr = [2, 5, 4, 6, 8, 12,14 ,20,];

function even(a) {
  var ar = [];

  for (let i = 0; i < a.length; i++) {
    if(i % 2 === 0) { 
        ar.push(a[i]);
    }
}
  return ar;
  
}

alert(even(arr))
