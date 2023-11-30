// purpose of an object 

// let firstName = 'Ntokozo'
// let lastName ='Sithebe'

// const person = {
//     firstName,
//     lastName
// }
// console.log(person);


// destructuring
//to retrive a value or a property from a dynamic or reference object

// let data = ['Ntokozo', 'Sithebe']
// let [firstName, lastName] = data       // displays the value that you want -- reads from left to write
// console.log(firstName);
// console.log(lastName);
//console.log(`My name is ${firstName} and last name is ${lastName}`);

//myown example below
// let pets = ['Dog', 'Cat', 'Mouse']
// let[pet1, pet2, pet3] = pets

// console.log(pets);
// console.log(`i only like ${pet1}'s compared to ${pet2} and ${pet3}`);



// let products = [ {
//     id: 1,
//     name: 'table',
//     amount: 700
// },
// {
//     id: 2,
//     name: 'mobile',
//     amount: 10000
// }
// ]

// let [product1, product2] = products    // used square brackets because its an array
// console.log(product1);


// OBJECT
//  let person = {
//     firstName: 'Peter',
//     lastName: 'Shawn',
//     age: 28
//  }

//  const{firstName, lastName, age} = person    // destructuring --- used curly brackets to access the properties inside the object --- objects use {}
//  console.log(`My name is ${person.firstName}${person.lastName}, I am ${person.age}years old`);

  // or

//  console.log(`My name is ${firstName} ${lastName}, and I am ${age} years old.`);

// REMEBER THAT DECONSTRUCTOR RETRIEVES

//let [first, second,  ...remaining] =[23, 5, 9, 11, 23, 33]   // takes the first, second element and then spread operator retrieves the remaining elements
//console.log(first, second, remaining); 

//MY OWN EXAMPLE

// let[ ...remaining] = ['Ntokozo', 'Nonhlanhla', 'Sithebe']

// console.log( ...remaining);

// Other array methods that you should know:
// =================================
// some(), every(), find():, findIndex(), and indexOf(), findOne()
// 
// some(), every() does return a boolean
// console.log(numbers.some( n => n == 8));
// find() : return value or undefined

// let numbers = [3, 1, 5, 9, 7]
//  let findResult = numbers.find( n=> n == 22)
//  console.log( findResult != undefined ? findResult : 'Value was not found' );

// let firstNames = ['Ntokozo', 'Nonhlanhla']
// let results = firstNames.includes('N')

// console.log(results != inaccurate ? results : 'Nahh famo');


// Count duplicate values: forEach(), reduce(), map() and filter()
// Exception handling using try .. and catch
// function division(fOp) {
//     try{                                         // defines the code --inside the try
//         let result = fOp / sOp                   //firstOperan
//         console.log(result);
//     }catch(e) {                                 // e is for error--- handles the error -- what we will display to the user
//         console.log("Please try again next time");        providing our own message instead of ---- | (e.message) to see why there was an error
//     }
// }
// division(4)
/*
When to use an exception handling:
- Retrieving a value from an input element
- Handling arguments
- Accessing a file
- Accessing data from a table (in a database)
- Etc..
*/

// Make use of throw            
                                            // when theres is a string it should throw an error -- we only was numbers
                                            // args return an array
// function addition(...args) {
//     let totalOfNumbs = 0    
//     args.forEach( item=> {               // forEach to loop through each element --item is basically the elements in the array 
//         if(typeof item != 'number') 
//             throw new Error(`${item} is not a number`)  //if statement checks that the output/return is a number
//     })
//         else totalOfNumbs += item            // returns the sum of all they arrays
//     return totalOfNumbs
// }
// try{
//     console.log(addition(4, 8, 'Joel', 9));
// }catch(e) {
//     console.log(e.message);
// }

// Getter and setter


/* Local storage
- .getItem(key)
- .setItem(key, value : string)
- .removeItem(key): Remove the key
- .clear(): Remove all the keys
*/

// Explain promise

 //let myPromise = new Promise((resolve, reject)=> {       // constructor function - takes a call back function when passing a function as an argument                              // the pending 
//     let numb1 = 12 
//      let numb2 = 2                                    
// //     // For division
//     if(numb2 > 0 ) 
//         resolve(`Result is: ${numb1 / numb2}`) 
//     reject(`You can't divide ${numb1} by ${numb2}`)   // the "else"
//  })

// myPromise.then(                                                  // retrieves the value of resolve -------- 
//     (correct)=>{                                           
//         console.log(correct);  // correct is like a placeholder 
//     },                                                        
//     (denied)=> {                      // displays the message 
//         console.log(denied);
//     }
// )

// Fetch API
// let cardContainer = document.querySelector('[data-cards]') 
// fetch('https://randomuser.me/api?results=50')
// .then(data=> data.json())
// .then(result=> {
//     let {results} = result 
//     results.forEach( people =>{
//         console.log(people);
//         cardContainer.innerHTML += 
//         `
//         <div class="card" style="width: 18rem;">
//             <img src="${people.picture.large}" class="card-img-top img-fluid" alt="${people.name.first}">
//             <div class="card-body">
//             <h5 class="card-title">${people.name.title}. ${people.name.first} ${people.name.last}</h5>
//             <p class="card-text">Age: ${people.registered.age}</p>
//         </div>
//         `
//     })
// })

// Asynchronous function 
// async function getData() {
//     let data = await fetch('https://randomuser.me/api?results=50')
//     return data.json()
//  }
// async function display() {
//     let cardContainer = document.querySelector('[data-cards]') 
//     cardContainer.innerHTML = ''
//     let {results} = await getData()
//     results.forEach( people => {
//         cardContainer.innerHTML += `
//         <div class="card" style="width: 18rem;">
//             <img src="${people.picture.large}" class="card-img-top img-fluid" alt="${people.name.first}">
//             <div class="card-body">
//             <h5 class="card-title">${people.name.title}. ${people.name.first} ${people.name.last}</h5>
//             <p class="card-text">Age: ${people.registered.age}</p>
//         </div>
//         `
//     })
// }
// display()

// Host JSON file to GitHub


// On Thursday, students need to start working on the Todo List

