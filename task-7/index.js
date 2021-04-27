
let arr1=[3, 'num1', 'num1', 'num1', 2, 3, 'num1', 3, 'num1', 2, 4, 9, 3];
let mf = 1;
let m = 0;
let item;
for (let i=0; i<arr1.length; i++)
{
        for (let j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 m++;
                if (mf<m)
                {
                  mf=m; 
                  item = arr1[i];
                }console.log(m[i]);
        }
        m=0;
}
alert(item+" ( " +mf +" times ) ") ;

if (arr1[0] >= arr1[1] ) {
        alert("zzz")
}