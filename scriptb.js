let month = 1;
let day = 14;
let year = 2024;
let hour;
let minute;
let second = 0;
let date = document.getElementById('time');
date = {month,  day,  year};

setInterval(function(){
    second++;
}, 1000)
 second = document.getElementById('time')