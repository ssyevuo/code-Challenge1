function studentGrading() {
    //prompts user for marks and converts input to a number
    const marks = Number(prompt('Enter your marks (0 - 100): '));

    if (marks >= 80 && marks <= 100) { //marks from 80 to 100 equals an A
        return 'A';
    } else if (marks >= 60 && marks <= 79) { //marks from 60 to 79 equals a B
        return 'B';
    }else if (marks >= 49 && marks < 60) { //marks from 49 to 59 equals a C
        return 'C';
    }else if (marks <= 40 && marks < 49) { //marks from 40 and less than 49 equals a D
        return 'D';
    } else if (marks < 40) { //marks less than 40 equals an E
        return 'E';
    } else { //invalid inputs bring about this error
        return 'input a valid score';
    }
} 
studentGrading(); //calling the function
