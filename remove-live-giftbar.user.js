// ==UserScript==
// @name         B站直播去除礼物条
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  去除B站直播间礼物条
// @author       OnlyCharacters
// @match        https://live.bilibili.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function deleteGiftBar() {
        //$('iframe')[1].contentDocument.getElementById("gift-control-vm-new").remove();
        document.getElementById('gift-control-vm-new').remove()
    }
    setInterval(deleteGiftBar, 3000);
    //setTimeout(deleteGiftBar, 5000);
    // Your code here...
})();
