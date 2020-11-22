

(function(){
 const second=1000,
 minute=second *60,
 hour=minute*60,
 day=hour*24;
 let coming="Dec 19, 2020 00:00:00",
 countDown = new Date(coming).getTime(),
 i = setInterval(function(){
     let now=new Date().getTime(),
     distance = countDown - now;
     document.getElementById("days").innerText=Math.floor(distance/(day)),
     document.getElementById("hours").innerText=Math.floor((distance%(day))/(hour)),
     document.getElementById("minutes").innerText=Math.floor((distance%(hour))/(minute)),
     document.getElementById("seconds").innerText=Math.floor((distance%(minute))/(second));
    },0)


}());
