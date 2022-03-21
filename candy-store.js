
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
        console.log("This " + candyName + " costs $1.00")
        break;
    case 'medium':
        console.log("This " + candyName + " costs $1.75")
        break;
    case 'large':
        console.log("This " + candyName +  " costs $2.50")
        break;
    case 'jumbo':
        console.log("This " + candyName + " costs $4.75")
        break;
    default: 
        console.log("Associate please look up price and check if valid.")
}

