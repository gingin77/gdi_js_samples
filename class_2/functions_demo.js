var first = "Ginnie"

var last = "Hench"

var fullname = first + " " + last
fullName

// Another option, template literals
`${first} ${last}`


function addOne(inputNumber){
	    var newNumber = inputNumber + 1;
	    console.log('You now have ' + newNumber);
	}

let inputNumber = 2
addOne(inputNumber)

let outputNumber = 3

addOne(outputNumber)
outputNumber = addOne(outputNumber)

What happens when we pass a string?
addOne("inputNumber")
