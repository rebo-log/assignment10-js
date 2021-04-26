function getEvenNumbers() {
       let arr = [1, 2, 3, 4, 5, 6,7,8,0,-1,];

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                console.log((arr[i] +  `is even`));
            } else if ( arr[i] % 2 <= 0   ) {
                console.log((arr[i] +  `is odd`)); 
            }else  {
                console.log((arr[i] +  ` is odd`)); 
            }
        

        }
        

    }

    getEvenNumbers();
