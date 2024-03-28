// How much hands move (degrees)

// 1. hour handle
/*
12hr = 360 deg   // we know in 12 hr , handle needs 360 deg to move
1 hr = 360/12 deg = 30 deg
h hr = 30 deg


// how much minute handle makes hr handle to move (ignore second handle)
1 hr = 30 deg  // from above above
60 min = 30 deg
m min = 1/2m degees 

Thus, 
=> h hr = (30h + m/2 ) degree   // for h hours, move 30h degrees + m/2 degress (bcz of minute handle) -> second handle have neglegible movement to hr handle




// 2. minute handle
60 min = 360 deg // we know 
1 min = 360/60 deg = 6 deg
=> m min = 6m degrees       // for m min , move min handle 6m degrees



// 3. second handle
60 sec = 360 degree // we know for 60 sec, handle has to move 360 deg
=> s sec = 6s degrees

*/


let hrHandle = document.querySelector("#hour");
let minHandle = document.querySelector("#min");
let secHandle = document.querySelector("#sec");

// js code for clock rotation
function rotateHandles(){
    let date = new Date();    // gives hr,min,sec,day,date,yr currently set on system etc

    // getting hr,min and sec from date
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    // ROTATION CALCULATED ABOVE - as above h,m,s changes , handles change accordingly
    let hRotation = 30*h + m/2;
    let mRotation = 6*m;
    let sRotation = 6*s; 


    // make actual handles(fetched above) to rotate as per calculation
    hrHandle.style.transform = `rotate( ${hRotation}deg )`;
    minHandle.style.transform = `rotate( ${mRotation}deg)`;
    secHandle.style.transform = `rotate( ${sRotation}deg)`;

}

/*
setInterval (func , time) :-  method calls a function at specified intervals (in milliseconds).
The setInterval() method continues calling the function until clearInterval() is called, or the window is closed.
*/
setInterval(rotateHandles, 1000);   // 1000ms = 1 sec interval to move handle