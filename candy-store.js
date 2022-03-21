
var candySize;
var candyName;

// candySize = 'small';
// candyName = 'Choco Chunks';

// candySize = 'large';
// candyName = 'Crackle Crisps';

// candySize = 'jumbo';
// candyName = 'All My Toffee';

// candySize = 'lArGe';
// candyName = 'Mint Chip Supreme';

// candySize = 'snack';
// candyName = 'Darkest Cocoa';

switch (candySize) {
    case 'small':
        console.log("This " + candyName + " costs $1.00");
        break;
    case 'medium':
        console.log("This " + candyName + " costs $1.75");
        break;
    case 'large':
        console.log("This " + candyName +  " costs $2.50");
        break;
    case 'jumbo':
        console.log("This " + candyName + " costs $4.75");
        break;
    default: 
        console.log("Associate please look up price and check if valid.");
}


//AS A FUNCTION

function candyStore(candyName, candySize){
    switch (candySize) {
        case 'small':
            return("This " + candyName + " costs $1.00");
        case 'medium':
            return("This " + candyName + " costs $1.75");
        case 'large':
            return("This " + candyName +  " costs $2.50");
        case 'jumbo':
            return("This " + candyName + " costs $4.75");
        default: 
            return("Associate please look up price and check if valid.")
    }
}

console.log(candyStore('Choco Chunks', 'small'));
console.log(candyStore('Crackle Crisps','large'));
console.log(candyStore('All My Toffee', 'jumbo'));
console.log(candyStore('Mint Chip Supreme', 'lArGe'));
console.log(candyStore('Darkest Cocoa', 'snack'));