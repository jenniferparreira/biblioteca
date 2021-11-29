const books = require('./database')
const readline = require('readline-sync')

const buscar = readline.question('buscar livro? s/n ')
console.table(books)

const autor = readline.question('qual é o autor? s/n ')
