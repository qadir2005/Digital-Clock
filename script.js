function clock() {
    let hour = document.querySelector(".display_hours");
    let min = document.querySelector(".display_min");
    let sec = document.querySelector(".display_sec");
    let h = new Date().getHours() % 12;// reminder se ham ne 13 hour ko dobara se 1 se shuru krne kelye lagaya hai
    
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    
    hour.innerHTML = h;
    min.innerHTML = m;
    sec.innerHTML = s;

    if( h < 10){
        hour.innerHTML = "0" + h;
        
    }
    
    if( m < 10){
        min.innerHTML = "0" + m;
    }
    if( s < 10){
        sec.innerHTML = "0" + s;
    }


        
    
}
// clock()
setInterval(clock,1000)