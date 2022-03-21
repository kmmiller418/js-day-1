var weekend;
var holiday;
var time;

// time = 17
// weekend = false;
// holiday = false;

if (weekend || holiday) {
    console.log("The store is closed")
} else {
    if (time < 18) {
        console.log("The store is open for business.")
    } else {
        console.log("The store is closed.")
    }
}