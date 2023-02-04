let n = 10;
function testfunction(a) {
    console.log(a);
}
function demofunction() {
    let b = n+10;
    testfunction(b);
}
demofunction();

/*demo.js
 |
 demofunction
 |
 testfunction*/