/**
 * Created by User on 30.09.2016.
 */
start.addEventListener("click",start_click);
pause.addEventListener("click",pause_click);
stp.addEventListener("click",stp_click);

var obj={
    s: "start",
    p: "pause",
    st: "stop"
};

var count=0, timerId, go=false, str;

function start_click(){
    document.querySelector('#start').style.display = 'none';
    document.querySelector('.btn-info').style.display = 'inline-block';
    for_text.innerHTML="Start";
    if (go==false){
        timerId = setInterval(function() {
            count++;
            var msek=count%100;

            if (msek<10) {msek = "0"+msek;}
            if ((msek>=10)&&(msek<100)) {msek = ""+msek;}

            var sek=Math.floor(count/100)%60;
            if (sek<10) {sek = "0"+sek;}

            var min = Math.floor(count/6000)%60;
            if (min<10) {min = "0"+min;}

            var hours = Math.floor(count/360000)%24;
            if (hours<10) {hours = "0"+hours;}

            str = hours+":"+min+":"+sek+":"+msek;
            for_count.innerHTML=str;
        }, 10);
        go=true;
    }
}

function pause_click(){
    document.querySelector('#start').style.display = 'inline-block';
    document.querySelector('.btn-info').style.display = 'none';
    clearInterval(timerId);
    go=false;
    for_text.innerHTML="Pause";

}

function stp_click(){
    document.querySelector('#start').style.display = 'inline-block';
    document.querySelector('.btn-info').style.display = 'none';
    clearInterval(timerId);
    go=false;
    count = 0;
    for_count.innerHTML='00:00:00:00';
    for_text.innerHTML="Stop";

}