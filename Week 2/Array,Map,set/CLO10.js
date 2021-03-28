let student = {name:'John Masson'}
let adjunct = {name:'Dave Larson'}
let people = new Map()

people.set(student, "Student")
people.set(adjunct, "Adjunct")

console.log(people)

/*
Map(2) {{name: 'Jo…on'} => Student, {name: 'Da…on'} => Adjunct}
size (get):ƒ size()
2
[[Entries]]:Array(2)
0:{Object => "Student"}
key:{name: 'John Masson'}
value:'Student'
1:{Object => "Adjunct"}
key:{name: 'Dave Larson'}
value:'Adjunct'
length:2
__proto__:Object
__proto__:Map
*/