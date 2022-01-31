// 1. Destructure the name and password

var {name, password} = {  name: 'masai', password: 'admin@123', hostname:'masaischool', client: 'chrome' };

console.log(name + " - " + password);

// 2. Destructure the pincode and rename to pin

var { address : { pincode : pin } } = {  name: 'masai', address: {  pincode: 560095 }  };

console.log(pin);

// 3. Destructure the first value and second value of the array

var [first, second] = [ 100, 200, 500, 600 ];
console.log(first, second);

// 4. Destructure to get the value 50 from this array

var [first, [fifty] ] = [ 100, [  50, 60, 70  ]   ];
console.log(fifty);

// 5. Destructure to get the value 2,3 into a new array

var [first, { arr : [, two, three] }] = [  1, {  
    arr: [ 1, 2, 3 ]
  }
] 


console.log(two, three);