//This function prompts the user to input student marks and returns the corresponding grade.

let mark = prompt('Enter student marks(0-100:');

function generateStudentgrade(marks){
    //Get user input for student marks
    // let marks = prompt('Enter student marks(0-100:');
    //validate the input

    let grade 

    if(isNaN(marks) || marks < 0 || marks > 100){
        return"Invalid marks. Please enter a number between 0 and 100.";
    }
    //Determine grade
    
    else if (marks > 79) {
        // return "Grade:A";
        grade="A"
        console.log("your grade is A")
    }
    else if (marks >= 60) {
        // return "Grade:B";
        grade="B"
        console.log("your grade is B")
    }
    else if (marks >= 50) {
        // return "Grade:C";
        grade="C"
        console.log("your grade is C")
    
    }
    else if (marks >= 40) {
        // return "Grade:D";
        grade="D"
        console.log("your grade is D")
    }
    else {
        // return "Grade:E";
        grade="E"
        console.log("your grade is E")
    }

    // return grade
}

//Exampleusage
console.log(generateStudentgrade(mark));