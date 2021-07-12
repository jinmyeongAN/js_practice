const setClock = document.querySelector("h2#clock");

function show_clock(){
    const myDate = new Date();
    let Hour = String(myDate.getHours()).padStart(2,"0");
    let Minute = String(myDate.getMinutes()).padStart(2,"0");
    let Second = String(myDate.getSeconds()).padStart(2,"0");
    setClock.innerText = (`${Hour}:${Minute}:${Second}`);
}

//show the clock
show_clock()
setInterval(show_clock, 1000);