var studentName = "James Moore"
var dob = "02/02/2002"
var studentInfo = {
    studentName,
    dob,
    [ "ageOf Student"] : function( ) {
        var today = new Date()
        var dobDate = new Date(this.dob)
        var timeDiff = today.getTime() - dobDate.getTime()
        var days = timeDiff/(1000*3600*24*365)
        return Math.round(days)
    }
}

var result = studentInfo[ "ageOf Student"]

console.log(studentInfo) //studentName: 'James Moore', dob: '02/02/2002', ageOf Student: ƒ