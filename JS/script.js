function clock() {
    a = new Date();
    const info = {weekday: 'long', year: 'numeric', month: 'long', day:'numeric'};
    let time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    let date = a.toLocaleDateString(undefined , info);
    document.getElementById('time').innerHTML = time + ' <br> on ' + date;
}

setInterval(clock, 1);