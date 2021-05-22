var iab;

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    openSite();
}

function openSite() {
    let url = "https://trnt.lgbt/forum.php";
    let target = "_blank";
    let options = "hidden=no,clearcache=no,clearsessioncache=no,footer=no,hardwareback=yes,hidenavigationbuttons=yes,hideurlbar=yes,zoom=no,mediaPlaybackRequiresUserAction=no,shouldPauseOnSuspend=yes,useWideViewPort=yes,fullscreen=yes,location=no";
    iab = cordova.InAppBrowser.open(url, target, options);
    //replace window.open()
    window.open = cordova.InAppBrowser.open;
}

function insertScript(){
    ref.addEventListener('loadstop', function() {
        //ref.executeScript({file: "myscript.js"});
    });
}

function insertStyle(){
    ref.addEventListener('loadstop', function() {
        //ref.insertCSS({file: "mystyles.css"});
    });
}