setInterval(() => {
    d = new Date;
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();

    hrRotation = 30*hr + 0.5*min;
    minRotation = 6*min;
    secRotation = 6*sec;

    hrs.style.transform = `rotate(${hrRotation}deg)`;
    mins.style.transform = `rotate(${minRotation}deg)`;
    secs.style.transform = `rotate(${secRotation}deg)`;

},0);

function setBackground(){
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let body = document.body;

    if(hrs >= 5 && hrs<=9){
        body.style.background = "linear-gradient(to right, #56ccf2, #2f80ed)";
    }
    else if(hrs >= 10 && hrs <= 16){
        body.style.background = "linear-gradient(to right, #f3696e, #f8a902 50%, #22c1c3 )";
    }

    else if(hrs >= 17 && hrs <= 18){
        body.style.background = "linear-gradient(to left , #22c1c3, #fdbb2d)";;
    }

    else{
        body.style.background = "linear-gradient(98deg, rgba(36,32,32,1) 20%, rgba(23,4,24,1) 100%)";
    }
}

setBackground();

setInterval(setBackground , 600);