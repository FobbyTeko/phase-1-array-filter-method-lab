// Code your solution here
function findMatching(array, string) {
    const filteredDrivers = array.filter(function (driver){
        if (driver.toLowerCase() === string.toLowerCase()){
            return driver
        }
    });
    return filteredDrivers
}


function fuzzyMatch(array, string) {
    const filteredDrivers = array.filter(function (driver){
        if (driver[0, 1] === string[0, 1]){
            return driver
        }
    });
    return filteredDrivers
}

function matchName (array, string) {
    const filteredDrivers = array.filter(function (driver){
        if (driver.name === string){
            return driver
        }
    });
    return filteredDrivers
}

