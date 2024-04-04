let speed= prompt('ENTER SPEED:')

// This function calculates demerit points for a car speed based in excess of the prescribed speed limit by 5 km/h.
function calculateDemeritePoints() {
const speedLimit =70;
const kmPerDemerit =5;
const maxpoints = 12;

//Check if the speed limit is less or equal to the desired speed limit
if (speed <= speedLimit) {
    return 'Okay';
}
    else{
        //calculate demerit points
        const excessSpeed = speed - speedLimit;
        const intervalcount = Math.floor(excessSpeed / kmPerDemerit);
        const demeritPoints = intervalcount * maxpoints;
        // Check if the license should be suspended
        if (demeritPoints > 12) {
            return 'License suspended';
        }
        else {
            return 'Points:' + demeritPoints;
        }
    }
}

//Exampleusage
console.log(calculateDemeritePoints(speed));
