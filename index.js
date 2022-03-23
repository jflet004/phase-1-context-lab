/* Your Code Here */

function createEmployeeRecord(array) {
    const employeeObj = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: [],
    };

    return employeeObj;
}

function createEmployeeRecords(arrays) {
    const newArray = arrays.map(createEmployeeRecord);
    return newArray;
}

function createTimeInEvent(date) {
    const timeInObj = {
        type: "TimeIn",
        hour: parseInt(date.slice(11, 16), 10),
        date: date.slice(0, 10)
    };
    this.timeInEvents.push(timeInObj);
    return this;
}

function createTimeOutEvent(date) {
    const timeOutObj = {
        type: "TimeOut",
        hour: parseInt(date.slice(11, 16), 10),
        date: date.slice(0, 10)
    };
    this.timeOutEvents.push(timeOutObj);

    return this;
}

function hoursWorkedOnDate(date) {
    const getDateIn = this.timeInEvents.find((key) => key.date === date);
    const getDateOut = this.timeOutEvents.find((key) => key.date === date);

    return (getDateOut.hour - getDateIn.hour) / 100;
}

function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour;
}

function calculatePayroll(arrayOfRecords) {
    return arrayOfRecords.reduce((acc, record) => acc + allWagesFor.call(record), 0)
}

function findEmployeeByFirstName(arrayOfRecords, firstNameString) {
    return arrayOfRecords.find(key => key.firstName === firstNameString); 
}


// // TESTS

let src = [
    ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
    ["Natalia", "Romanov", "CEO", 150]
]
let loki = findEmployeeByFirstName(src, 'Loki');
let natalia = findEmployeeByFirstName(src, 'Natalia');


// console.log('\n', 'Expect Loki\'s matching record: ')
// console.log('=>', findEmployeeByFirstName(src, 'Loki'));
// console.log('Expect (loki.familyName) to equal ("Laufeysson-Odinsson")', '\n')
// console.log('=>', `loki.familyName = ${loki.familyName}`, '\n');
// console.log('\n', 'Expect Natalia\'s matching record: ')
// console.log('=>', findEmployeeByFirstName(src, 'Natalia'));
// console.log('Expect (natalia.familyName) to equal ("Romanov")', '\n')
// console.log('=>', `natalia.familyName = ${natalia.familyName}`, '\n');




// /*
// We're giving you this function. Take a look at it, you might see some usage
// that's new and different. That's because we're avoiding a well-known, but
// sneaky bug that we'll cover in the next few lessons!

//  As a result, the lessons for this function will pass *and* it will be available
//  for you to use if you need it!
//  */


const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}