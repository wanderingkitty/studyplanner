
// TODO: write unit tests for this function, and finish it
// Function to split todos into days
function splitTodosIntoDays(todos) {
    return {
        mo: todos.filter(t => t.day === 'mo'),
        ti: todos.filter(t => t.day === 'ti'),
        on: todos.filter(t => t.day === 'on'),
        to: todos.filter(t => t.day === 'to'),
        fr: todos.filter(t => t.day === 'fr'),
        lö: todos.filter(t => t.day === 'lö'),
        sö: todos.filter(t => t.day === 'sö')
    };
}



// Tips! Du kan få användning för funktioner som:
// + kopierar en lista och byter plats på två element (snooze)
// + lägger till ett element på en viss plats i en lista
// https://www.w3schools.com/jsref/jsref_splice.asp
// https://www.freecodecamp.org/news/javascript-splice-how-to-use-the-splice-js-array-method/

export { splitTodosIntoDays }
