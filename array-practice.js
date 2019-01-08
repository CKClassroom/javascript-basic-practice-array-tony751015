var people = ['Greg', 'Mary', 'Devon', 'James'];

// 1. Using a loop, iterate through this array and console.log all of the people.
// people.forEach(function(item,array){
//     console.log(item);
// });
people.forEach((item)=> console.log(item));
// 2. Write the command to remove "Greg" from the array.
// var GregBye = people.indexOf('Greg');
// var removeGreg = people.splice(GregBye,1);
// console.log(people);
var removeGreg = people.shift();
console.log(people);
// 3. Write the command to remove "James" from the array.
// var JamesBye = people.indexOf('James');
// var removeJames = people.splice(JamesBye,1);
// console.log(people);
var removeJames = people.pop();
console.log(people);
// 4. Write the command to add "Matt" to the front of the array.
var addFirstMatt = people.unshift('Matt');
console.log(people);
// 5. Write the command to add your name to the end of the array.
var newLenthTony = people.push('Tony');
console.log(people);
// 6. Using a loop, iterate through this array and after console.log-ing "Mary", exit from the loop.
// var MaryBreak = false;
// people.forEach(function(item,array){
//     if (MaryBreak === true) {
//         return false;
//     };

//     if (item === 'Mary') {
//         MaryBreak = true;
//     };
    
//     console.log(item);
// });
for (let i = 0; i < people.length; i++) {
    console.log(people[i])
    if (people[i] === 'Mary'){
        break;
    }
}
// 7. Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".
var newPeople = people.slice(1,4);
console.log(newPeople);
// 8. Write the command that gives the indexOf where "Mary" is located.
console.log(people.indexOf('Mary'));
// 9. Write the command that gives the indexOf where "Foo" is located (this should return -1).
console.log(people.indexOf('Foo'));
// 10. Redefine the people variable with the value you started with. Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie". Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Artie", "James"].
var people = ['Greg', 'Mary', 'Devon', 'James'];
var DevonBye = people.indexOf('Devon');
var removeDevon = people.splice(DevonBye,1,'Elizabeth','Artie');
console.log(people);