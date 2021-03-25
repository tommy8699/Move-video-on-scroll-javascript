let video = document.getElementById('video');
setInterval(function (){ // setInterval vola funkciu s casovym oneskorenim
    // currentTime určuje aktuálny čas prehrávania v sekundách
    video.currentTime = window.pageYOffset/1000; // pafeOffset lebo pouzivame scrollovanie na osy Y
},100);