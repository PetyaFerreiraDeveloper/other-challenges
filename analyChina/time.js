// compare the hours from both numbers to see which comes first


function findDiff(time1, time2) {
    let date1Str = 'March 2, ' + time1;
    let date2Str = 'March 2, ' + time2;
    let date1 = new Date(date1Str);
    let date2 = new Date(date2Str);
    let newTime1 = date1.getTime();
    let newTime2 = date2.getTime();
    let hourDiff = (newTime2 - newTime1) / 1000 ;
    console.log(hourDiff / 60);
}

findDiff('14:01:57', '16:54:58');