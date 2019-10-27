// -------------------------------

// function scope vs block scope

console.log(secret);

if(5 > 4) {
    let secret = '12345';
}

console.log(secret);