// ==UserScript==
// @name        YouTube iframes
// @namespace   YouTube_iframes
// @include     *
// @version     0.1
// @grant       none
// ==/UserScript==

function updateframes(){
var i, frames;
frames = document.getElementsByTagName("iframe");
for (i = 0; i < frames.length; ++i)
  {
    if (frames[i].src.indexOf('youtube.com/')!=-1) {
     var ytplayer=document.createElement('div');
     ytplayer.innerHTML='<object type="application/x-shockwave-flash" style="width:537px; height:302px;" data="'+frames[i].src.replace('/embed/','/v/')+'">'+"\r\n"+'<param name="movie" value="'+frames[i].src.replace('/embed/','/v/')+'" />'+"\r\n"+'<param name="allowFullScreen" value="true" />'+"\r\n"+'<param name="allowscriptaccess" value="always" />'+"\r\n"+'</object>';
     frames[i].parentNode.appendChild(ytplayer);
     frames[i].parentNode.removeChild(frames[i]);
    }
  }
 }

updateframes();

window.onscroll = function() {updateframes();}