function requiredReading (pagesOfTheBook, pagesPerHour, days){
    let totalTime = pagesOfTheBook / pagesPerHour; 
    let requiredHours = totalTime / days ;
    console.log(requiredHours);

}
requiredReading (212,20 ,2)