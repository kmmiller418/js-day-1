var weekend;
var holiday;
var time;

// time = 17
// weekend = false;
// holiday = false;

if (weekend || holiday) {
    console.log("The store is closed");
} else {
    if (time < 18) {
        console.log("The store is open for business.");
    } else {
        console.log("The store is closed.");
    }
}

//AS FUNCTION

function storeOpen(weekend, holiday, time){
    if (weekend || holiday) {
        return("The store is closed");
    } else {
        if (time < 18) {
            return("The store is open for business.");
        } else {
            return("The store is closed.");
        }
    }
}

//BONUS HELPER FUNCTION
function isWeekend(day){
    if (day == 'Saturday' || day == 'Sunday') {
        return true;
    } else {
        return false;
    }
}