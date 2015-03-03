// ==UserScript==
// @name        YouTube iframes
// @namespace   YouTube_iframes
// @include     *
// @version     0.2
// @grant       none
// ==/UserScript==

function updateframes(){
var i, frames;
frames = document.getElementsByTagName("iframe");
for (i = 0; i < frames.length; ++i)
  {
    if (frames[i].src.indexOf('youtube.com/')!=-1) {
     var ytplayer=document.createElement('div');
     var ytwidth=frames[i].getAttribute('width');
     var ytheight=frames[i].getAttribute('height');
     var ytsrc=frames[i].src.replace('/embed/','/v/');
     if (ytwidth.indexOf('%')!=-1) {ytwidth='537px';} else {ytwidth=ytwidth+'px';}
     if (ytheight.indexOf('%')!=-1) {ytheight='302px';} else {ytheight=ytheight+'px';}
     if (ytsrc.indexOf('?')!=-1) {ytsrc=ytsrc.substr(0,ytsrc.indexOf('?')); ytsrc=ytsrc+'?autoplay=0';} else {ytsrc=ytsrc+'?autoplay=0';}
     ytplayer.innerHTML='<object type="application/x-shockwave-flash" style="width:'+ytwidth+'; height:'+ytheight+';" data="'+ytsrc+'">'+"\r\n"+'<param name="movie" value="'+frames[i].src.replace('/embed/','/v/')+'" />'+"\r\n"+'<param name="allowFullScreen" value="true" />'+"\r\n"+'<param name="allowscriptaccess" value="always" />'+"\r\n"+'</object>';
     frames[i].parentNode.appendChild(ytplayer);
     frames[i].parentNode.removeChild(frames[i]);
    }
  }
 }

updateframes();
window.onscroll = function() {updateframes();}