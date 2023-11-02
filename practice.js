//================================================
//                JavaScript Reps
//=================================================
////////////////////////////////
// Easy Going
////////////////////////////////
for(let i =0; i<=20; i++){
  // console.log(i)
}

////////////////////////////////
// Get Even
////////////////////////////////
for(let i = 0; i <=200; i= i+2){
  // console.log(i)
}

////////////////////////////////
// Fizz Buzz
////////////////////////////////
for(let i= 1; i<=100; i++){
  if(i % 3===0); //console.log("Fizz");
  if(i % 5 ===0); //console.log("Buzz")
  // if(i % 3 ===0 && i % 5 === 0) console.log("Fuzz'Buzz");
  // else console.log(i);
}

////////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
// 1.Plantee just had her birthday; change Plantee's array to reflect her being a year older.

plantee[2] ++
// console.log(plantee[2])

// 2.Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
wolfy[3] = "Gotham City"
// console.log(wolfy[3])

//3.Give D'Art a second hometown by adding "Hawkins"
dart.push("HAWKINS")
// console.log(dart)

// 4.Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfyarray and replace it with "Gameboy".
wolfy[0] = "GAMEBOY"
// console.log(wolfy[0])


////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
//1.Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)

const ninjaturtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']

// 2.Use a for of loop(not a typo - try it out! Try a for ofloop) to call toUpperCase()on each of them and print out the result.



for(const ninjaturtle of ninjaturtles) {
  
  // console.log(ninjaturtle.toUpperCase());


}
 
////////////////////////////////
// Methods, Revisited
////////////////////////////////

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Taken', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

//-- Console log: the index of Titanic

// console.log(favMovies[8]);

//1. use the .sortmethod Thought question: what did this do to the array? Did it permanently alter it? Yes it altered the whole array. It mixed the array of favMovies. 

// console.log(favMovies.sort());

// 2.Use the method pop
// returns last element 

// console.log(favMovies.pop());

// 3.push"Guardians of the Galaxy"
// adds element at end of array
favMovies.push('Guardians of the Galaxy');

// console.log(favMovies);

// 4.Reverse the array

// console.log(favMovies.reverse());

// 5.Use the shiftmethod
// removes the first element from an array and returns that removed element. 

// console.log(favMovies.shift());

// 6.unshift- what does it return?
// just returning unshift I get a value I don't understand yet. 
favMovies.unshift('Dodgeball')
// console.log(favMovies);

// returns a value of 21 I'm not sure about 
// console.log(favMovies.unshift());

// 7. splice"Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?
favMovies.splice(4,1, 'Avatar');
// console.log(favMovies);

// 8.slice the last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array? -- Yes It sliced the top portion of the array.
// returns a shallow copy of a portion of an array, into a new array object selected from start to end. Start and end represent the index of items in that array.

// console.log(favMovies.slice(0,9));

// 9.store the value of your slice in a variable - Thought question: what is going on here? Its the top half of the inital array list. 

const favMovies2 = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian']

// 10.console.log your final results

// console.log(favMovies2)

// 11.After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, what value do we get when we look for the index of something that is not in the array?
// the value we would get from something that is not in a array is 'undefined'. 

// console.log(favMovies2[10]);

// 12.Thought question: that we declared the variable favMovies with const, and yet, we were allowed to change the array. Weird? Should we have used let?
// elements within an array declared with keyword const, remain mutable. Meaning that we can change the contents of a const array, but cannot reassign a new array or different value. 

////////////////////////////////
// Where is Waldo
////////////////////////////////
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

// Remove Eggbert (hint look at the slice/splice method(s))

// console.log(whereIsWaldo.slice(0,1,2))

// Change "Neff" to "No One"
// come back to this NEEDS WORK
whereIsWaldo.splice(3,-1, "No One")
// console.log(whereIsWaldo),
// whereIsWaldo.slice(0,3,2)
// whereIsWaldo.pop(3,2)
// console.log(whereIsWaldo)

         // NEEDS WORK
////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////