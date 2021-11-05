// Code your solution here

function findMatching(drivers, name) {
     const newDrivers = drivers.filter(person => person.toLowerCase() === name.toLowerCase());
     return newDrivers;
}
// const result = words.filter(word => word.length > 6);

// function fuzzyMatch(drivers, letters) {
//     let newLetters = drivers.filter(firstLetter => {
//      firstLetter.indexOf(letters) === 0
//     });
//     return newLetters;
// }

function fuzzyMatch(drivers, string) {
    let correctLetters = drivers.filter(driver => driver.slice(0, string.length) === string)
    return correctLetters
}

function matchName(object, string) {
return object.filter(driver => driver.name === string);
}