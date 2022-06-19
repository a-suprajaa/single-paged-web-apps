const days = document.getElementById("days");
const hrs = document.getElementById("hours");
const min = document.getElementById("mins");
const tt = document.getElementById("seconds");

const newyear = "1 jan 2023"

function countdown()
{
    const newdate = new Date(newyear);
    const todate  = new Date();
    console.log(newdate);
    console.log(todate);
    const y = newdate - todate ;
    console.log(y);

    const tot= (y/1000);
    console.log(tot);
    const nodays =Math.floor( ((tot/3600))/24);
    
    days.innerText = nodays;
   
    const hour = ((tot/3600))%24;
    console.log((hour));
    
    hrs.innerText = Math.floor(hour);

    const minutes = (tot/60)%60;
    console.log(minutes);

    min.innerText =Math.floor(minutes);

    const t = tot%60;
    console.log(t);
   
    tt.innerText =Math.floor(t);

    
 }
countdown();



setInterval(countdown, 1000)