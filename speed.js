function speedDetection(speed) {

//prompts the user to input speed and converts the values to a number
let speed = Number(prompt('Enter the speed: '));

    if (speed < 70) { //if the value is less than 70 it will output okay
        console.log('OK');
    }else { //if the value is more than 70 it will calculate the demerit points that is 5 above 70 is equal to 1 demerit
        const demeritPoints = Math.floor((speed - 70) / 5);

        if (demeritPoints > 12) { //if demerits are above 12 the output is that the license is suspended
            console.log('License suspended');
        } else {
            console.log(`Points: ${demeritPoints}`);
        }
    }


}
speedDetection(); //calling the function