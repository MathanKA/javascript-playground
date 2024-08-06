let var1;
let var2 = null;

let object = {
  a: 1,
  b: undefined
};

function test(arg1, arg2) {
  console.log(arg1);  // undefined: not provided
  console.log(arg2);  // null: provided as such
}

function clearProperty(prop) {
    console.log(object[prop])
  delete object[prop];
}

console.log(var1);     // undefined
console.log(var2);     // null
console.log(object.a); // 1
console.log(object.b); // undefined
console.log(object.c); // undefined

test();               // Both arguments are undefined
test(1, null);        // arg1 is 1, arg2 is null

clearProperty('c');  // Removes property 'b' from object
console.log(object.b); // undefined: Property 'b' was removed, not set to null

console.log("test commit");
console.log("test signed commit");