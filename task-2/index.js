let conf = confirm("Press a button!") ;

while (conf === true ){
  conf = confirm("Press a button!") ;
  if ( conf === false) break;
}