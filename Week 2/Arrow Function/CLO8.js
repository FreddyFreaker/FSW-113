var person =  {

    name : 'David Smith',

    age : 56,

    details: function ( ){

          console.log(this)

    }

}

person.details( )

/*"C:\Program Files\nodejs\node.exe" ".\Week 2\Arrow Function\CLO8.js"
{name: 'David Smith', age: 56, details: ƒ}
age: 56
details: ƒ ( ){\r\n\r\n          console.log(this)\r\n\r\n    }
name: 'David Smith'
__proto__: Object
 */