let seconds = 0;
let running = false;
function stoptime()
{
    if(running == true)
    {
        seconds++;
    }
    let h = Math.trunc(seconds / 3600);
    let m = Math.trunc((seconds % 3600) / 60);
    let s = seconds % 60;
    let mlen = m.toString();
    let hlen = h.toString();
    let slen = s.toString();
    if(slen.length==1){
        document.getElementById("sec").innerHTML ="0"+s;
    }
    else
    {
        document.getElementById("sec").innerHTML =s;
    }
    if(mlen.length==1){
        document.getElementById("min").innerHTML ="0"+m;
    }
    else
    {
        document.getElementById("min").innerHTML =m;
    }
    if(hlen.length==1){
        document.getElementById("hr").innerHTML ="0"+h;
    }
    else
    {
        document.getElementById("hr").innerHTML = h;
    }
}
setInterval(stoptime,17);

function start()
{
    running = true;
}
function stop()
{
    running = false;
}
function reset()
{
    seconds = 0;
    running = false;
}