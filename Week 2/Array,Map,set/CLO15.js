let student = {name:'John Masson'}
let adjunct = {name:'Dave Larson'}
let people = new Map()

people.set(student, "Student")
people.set(adjunct, "Adjunct")

let result = people.values(student);

console.log(result)

/* MapIterator {Student, Adjunct}
[[Entries]]:Array(2)
0:"Student"
value:'Student'
1:"Adjunct"
value:'Adjunct'
length:2
__proto__:Object
[[IteratorHasMore]]:true
[[IteratorIndex]]:0
[[IteratorKind]]:'values'
__proto__:Map Iterator */