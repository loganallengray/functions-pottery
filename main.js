/*
    using my minions to make pottery

    Buy a big lump of clay
    Use a pottery wheel to turn the clay into a bowl
    Put the bowl into a kiln for a bisque firing
    Apply glaze to bowl
    Put glazed bowl in kiln for final firing
    💰💰💰 (haha, yeah right)

    define a function for each step

*/

const buyClay = () => {
    // creates object
    const newClay = {}

    return newClay;
}

const makePottery = (clay) => {
    // shapes clay
    clay.shape = "Bowl";

    return clay;
}

const bisqueFiring = (clay) => {
    // gets clay ready for glazing
    clay.readyForGlazing = true;

    return clay;
}

const glazeFiring = (clay) => {
    // checks if ready for glaze
    if (clay.readyForGlazing === true) {
        // glazes clay
        clay.glazing = "Midnight Blue";
    } else {
        // failure
        console.log("Make sure you bisque fire the pottery before you glaze it.");
    }

    return clay;
}

const finalFiring = (clay, temp) => {
    // checks temp
    if (temp > 1200) {
        // cracks clay
        clay.cracked = true;
    } else {
        // doesnt crack
        clay.cracked = false;
    }

    return clay;
}

boughtClay = buyClay();
shapedClay = makePottery(boughtClay);
bisqueFiredClay = bisqueFiring(shapedClay);
glazedClay = glazeFiring(bisqueFiredClay);

finalFiredClay1400 = finalFiring(glazedClay, 1400)
console.log(finalFiredClay1400);

finalFiredClay1100 = finalFiring(glazedClay, 1100)
console.log(finalFiredClay1100);