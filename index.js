const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

function returnFirstTwoDrivers(){
    let newArray = [];
    for (let i=0; i<2; i++){
        newArray.push(drivers[i]);
    }
    return newArray;
}

function returnLastTwoDrivers(){
    let newArray2 = [];
    for (let i=2; i < drivers.length; i++){
        newArray2.push(drivers[i]);
    }
    return newArray2;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(a){
    return function(b){
        return b*a;
    }
}

function fareDoubler(c){
    return c*2;
}

function fareTripler(d){
    return d*3;
}

function selectDifferentDrivers(arr, func){
    let x = func();
    return x;
}