let student = {name:'John Masson'}
let adjunct = {name:'Dave Larson'}
let people = new Map()

people.set(student, "Student")
people.set(adjunct, "Adjunct")

people.delete(student)

console.log(people)

/* Map(1) {{name: 'Da…on'} => Adjunct}
size (get):ƒ size()
[[Entries]]:Array(1)
__proto__:Map */