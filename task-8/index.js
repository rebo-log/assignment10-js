let ar_1 = [-1,-1,1,1,0,0,2,2,3,3,'s', 'b', 's', 'c', 'b'];

let uniqueChars = [];
ar_1.forEach((c) => {
    if (!uniqueChars.includes(c)) {
        uniqueChars.push(c);
    }
});

console.log(uniqueChars);