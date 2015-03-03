// ==UserScript==
// @name           Youtube Plus
// @namespace      Youtube Plus
// @description    Remove ads and tweaks
// @version        0.4.3
// @author         https://github.com/r57zone/Youtube-Plus
// @grant          none
// @include        http://www.youtube.com/*
// @include        https://www.youtube.com/*
// ==/UserScript==

//Добавление кнопок в ленту подписок
if (document.location.href=='http://www.youtube.com/feed/subscriptions' || document.location.href=='https://www.youtube.com/feed/subscriptions') {

function addlinktofeed(){
var videos_youtube=document.getElementsByClassName('yt-fluid-thumb-link');
for (var i=videos_youtube.length-1, node, a; i>-1; i--) {
node=videos_youtube[i].parentNode;
if (node.parentNode.parentNode.parentNode.childNodes[1].innerHTML.indexOf('http://convert2mp3.net/addon_call.php?url=')==-1)
node.parentNode.parentNode.parentNode.childNodes[1].innerHTML=node.parentNode.parentNode.parentNode.childNodes[1].innerHTML+'<div style="margin-top:3px;"><a target="_blank" href="http://convert2mp3.net/addon_call.php?url='+node.childNodes[0].href+'&format=mp3">Скачать аудио</a> <a target="_blank" href="http://ru.savefrom.net/#url='+node.childNodes[0].href+'">Скачать видео</a></div>';
}}
addlinktofeed(); 

window.onscroll = function() {addlinktofeed();}}

//Перенаправление с главной страницы на ленту подписок
if (document.location.href=='http://www.youtube.com/') document.location.href='http://www.youtube.com/feed/subscriptions';
if (document.location.href=='https://www.youtube.com/') document.location.href='https://www.youtube.com/feed/subscriptions';


if (document.location.href.indexOf('/watch?')!=-1) {
	
//Удаление плейлистов
if (document.location.href.indexOf('list=')!=-1) {
var video_id=window.location.search.split('v=')[1];
document.location.href='https://www.youtube.com/watch?v='+video_id.substring(0, video_id.indexOf('&'));
}	
	
//Включение Flash вместо Html5	
document.createElement("video").constructor.prototype.canPlayType = function(type){return ""};	
	
//Удаление рекламы
(function (fn) {
if (document.readyState == "loading") {
addEventListener("DOMContentLoaded", fn, false);
}else{fn();}
})(function () {
try {
var o = yt.playerConfig.args;
for (var i in o) {
if (o.hasOwnProperty(i) && /^(afv_)?ad/.test(i)) {
delete o[i];}}
} catch (e) {}
var player = document.getElementById("movie_player");
var clean_player = player.cloneNode(true);
	
var flash_vars = player.getAttribute("flashvars");
flash_vars = flash_vars.replace(/&ad[^&]+/g, "");
flash_vars = flash_vars.replace("iv3_module=1", ""); //Удаление аннотации
clean_player.setAttribute("flashvars", flash_vars);
player.parentNode.replaceChild(clean_player, player);
});
	

//Добавление кнопок
document.getElementById('watch-uploader-info').innerHTML='<button onclick="javascript:document.location=\'http://convert2mp3.net/addon_call.php?url=\'+document.location.href+\'&format=mp3\'" style="margin-bottom:8px;" role="button" type="submit" class="under-movie-div-button yt-uix-button yt-uix-button-text yt-uix-tooltip"><span>Скачать аудио</span></button><button onclick="javascript:window.location=\'http://ru.savefrom.net/#url='+document.URL+'\';" style="margin-bottom:8px;" role="button" class="under-movie-div-button yt-uix-button yt-uix-button-text yt-uix-tooltip"><span>Скачать видео</span></button><div style="float:none;"></div>'+document.getElementById('watch-uploader-info').innerHTML;
//document.getElementById('watch-uploader-info').innerHTML='<form action="http://www.listentoyoutube.com/process.php" method="post" style="padding:0;float:left;"><input style="display:none;" type="text" name="url" value='+document.location.href+'><button style="margin-bottom:8px;" role="button" type="submit" class="under-movie-div-button yt-uix-button yt-uix-button-text yt-uix-tooltip"><span>Скачать аудио</span></button></form><button onclick="javascript:window.location=\'http://ru.savefrom.net/#url='+document.URL+'\';" style="margin-bottom:8px;" role="button" class="under-movie-div-button yt-uix-button yt-uix-button-text yt-uix-tooltip"><span>Скачать видео</span></button><div style="float:none;"></div>'+document.getElementById('watch-uploader-info').innerHTML;
//document.getElementById('watch-uploader-info').innerHTML='<form action="http://www.vidtomp3.com/process.php" method="post" style="padding:0;float:left;"><input style="display:none;" type="text" name="url" value='+document.location.href+'><button style="margin-bottom:8px;" role="button" type="submit" class="under-movie-div-button yt-uix-button yt-uix-button-text yt-uix-tooltip"><span>Скачать аудио</span></button></form><button onclick="javascript:window.location=\'http://ru.savefrom.net/#url='+document.URL+'\';" style="margin-bottom:8px;" role="button" class="under-movie-div-button yt-uix-button yt-uix-button-text yt-uix-tooltip"><span>Скачать видео</span></button><div style="float:none;"></div>'+document.getElementById('watch-uploader-info').innerHTML; 
}

//При смене страницы
var f_url=document.location.href;

function PageChanged() {
if (document.location.href!=f_url) {
f_url=document.location.href;
document.location.href=document.location.href;
}}

setInterval(PageChanged, 70);