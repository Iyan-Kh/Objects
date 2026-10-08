// You are given this movie object. Write code below to:
//   1. Print the title
//   2. Print the director
//   3. Print true/false: is the runtime over 120 minutes?
//   4. Add a new property `watched` set to true
//   5. Print each key-value pair using console.log("Title:", movie.title) style

// const movie = {
//   title: "Interstellar",
//   year: 2014,
//   director: "Christopher Nolan",
//   rating: "PG-13",
//   runtime: 169,
//   watched: true
// };

// TODO 1: Print the movie title
// console.log(...)

// TODO 2: Print the director's name
// console.log(...)

// TODO 3: Print true/false — is runtime over 120?
// console.log(...)

// TODO 4: Add a `watched` property set to true
// movie.??? = ???

// console.log("Title:", movie.title)
// console.log("Year:", movie.director)
// console.log("Runtime:", movie.runtime > 120)
// console.log("Watched:", movie.watched)

// console.log("Title:", movie.title)
// console.log("Year:", movie.year)
// console.log("Director:", movie.director)
// console.log("Rating:", movie.rating)
// console.log("Runtime:", movie.runtime)
// console.log("Watched:", movie.watched)

// TODO 5: Print each key-value pair
// console.log("Title:", ...)
// console.log("Year:", ...)
// console.log("Director:", ...)
// console.log("Rating:", ...)
// console.log("Runtime:", ...)
// console.log("Watched:", ...)

// PROBLEM 2 — Build Your Own Object
// =================================================================
// Write a function createStudent(name, grade, gpa) that:
//   - Returns an object with those three properties
//   - Also includes isHonors: true if gpa >= 3.5, false otherwise
//
// Expected output:
//   createStudent("Alex", 11, 3.7)  → { name: "Alex", grade: 11, gpa: 3.7, isHonors: true }
//   createStudent("Sam",  10, 2.9)  → { name: "Sam",  grade: 10, gpa: 2.9, isHonors: false }

// function createStudent(name, grade, gpa) {
 //  return{
  //   name: name,
 //    grade: grade,
//     gpa: gpa,
 //    IsHonors: gpa >= 3.5 ? true : false
//   }

  // TODO: return an object with name, grade, gpa, and isHonors
// }

// console.log(createStudent("Alex", 11, 3.5));
// console.log(createStudent("Sam", 10, 2.9));
// console.log(createStudent("Aaron Lu", 10, 3.6));


// Test your function — uncomment when ready:
// console.log("\n--- Problem 2 ---");
// console.log(createStudent("Alex", 11, 3.7));
// console.log(createStudent("Sam", 10, 2.9));

// ====================================================================
// PROBLEM 3 — Searching an Array of Objects
// =================================================================
// Write a function findByName(students, targetName) that:
//   - Uses .find() to return the student object with that name
//   - Returns null if no match is found
//
// Expected output:
//   findByName(students, "ChenZee") → { name: "ChenZee", grade: 12, gpa: 3.5, isHonors: false }
//   findByName(students, "Marcus")  → null

function findByName(students, targetName) {
  const students ={
    name: "Aaron",
    name: "noraA",
   name: "Christopher Nolan",
   name: "Stephen Spielberg",
   name: "Ridley Scott",
   name: "Christopher Claremont"
  }
  // TODO: use .find() to search by name
  // Hint: .find() returns undefined if nothing matches — convert that to null using || (or) operator
}

// Test your function — uncomment when ready:
// console.log("\n--- Problem 3 ---");
console.log(findByName(students, "Christopher Claremont"));
// console.log(findByName(students, "Jane"));
// console.log(findByName(students, "Marcus"));