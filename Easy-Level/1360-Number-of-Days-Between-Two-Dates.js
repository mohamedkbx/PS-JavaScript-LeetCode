/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function(date1, date2) {
     const millisecondsInADay = 1000*60*60*24;    
    return Math.abs((new Date(date1).getTime() - new Date(date2).getTime()) / millisecondsInADay);

//     var daysBetweenDates = function(date1, date2) {
//     // Convert the date strings into Date objects
//     const d1 = new Date(date1);
//     const d2 = new Date(date2);
    
//     // Calculate the difference in time between the two dates (in milliseconds)
//     const differenceInTime = Math.abs(d2 - d1);
    
//     // Convert the difference in time to days
//     const differenceInDays = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));
    
//     return differenceInDays;
// };

};