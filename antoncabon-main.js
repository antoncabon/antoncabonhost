function cdClear() {
    var wtarea = document.getElementById('codes');
    wtarea.value = '';
    wtarea.focus();
    document.getElementById('cvrt').disabled = false;
}
function cdConvert() {
    var ctarea = document.getElementById('codes'),
        cv = ctarea.value,
        opt1 = document.getElementById('opt1'),
        opt2 = document.getElementById('opt2'),
        opt3 = document.getElementById('opt3'),
        opt4 = document.getElementById('opt4'),
        opt5 = document.getElementById('opt5');
    cv = cv.replace(/\t/g, "    ");
    if (opt1.checked) cv = cv.replace(/&/g, "&amp;");
    if (opt2.checked) cv = cv.replace(/'/g, "&#039;");
    if (opt3.checked) cv = cv.replace(/"/g, "&quot;");
    if (opt4.checked) cv = cv.replace(/</g, "&lt;");
    if (opt5.checked) cv = cv.replace(/>/g, "&gt;");
    if (cv.lastIndexOf('\n') != -1 || cv.length > 40) {
        cv = cv.replace(/^/, "<i rel=\"pre\">");
    } else {
        cv = cv.replace(/^/, "<i rel=\"code\">");
    }
    cv = cv.replace(/$/, "</i>");
    ctarea.value = cv;
    ctarea.focus();
    ctarea.select();
};
var randomRelatedIndex,showRelatedPost;(function(n,m,k){var d={widgetTitle:"<h4>Artikel Terkait:</h4>",widgetStyle:1,homePage:"http://www.dte.web.id",numPosts:7,summaryLength:370,titleLength:"auto",thumbnailSize:72,noImage:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAA3NCSVQICAjb4U/gAAAADElEQVQImWOor68HAAL+AX7vOF2TAAAAAElFTkSuQmCC",containerId:"related-post",newTabLink:false,moreText:"Baca Selengkapnya",callBack:function(){}};for(var f in relatedPostConfig){d[f]=(relatedPostConfig[f]=="undefined")?d[f]:relatedPostConfig[f]}var j=function(a){var b=m.createElement("script");b.type="text/javascript";b.src=a;k.appendChild(b)},o=function(b,a){return Math.floor(Math.random()*(a-b+1))+b},l=function(a){var p=a.length,c,b;if(p===0){return false}while(--p){c=Math.floor(Math.random()*(p+1));b=a[p];a[p]=a[c];a[c]=b}return a},e=(typeof labelArray=="object"&&labelArray.length>0)?"/-/"+l(labelArray)[0]:"",h=function(b){var c=b.feed.openSearch$totalResults.$t-d.numPosts,a=o(1,(c>0?c:1));j(d.homePage.replace(/\/$/,"")+"/feeds/posts/summary"+e+"?alt=json-in-script&orderby=updated&start-index="+a+"&max-results="+d.numPosts+"&callback=showRelatedPost")},g=function(z){var s=document.getElementById(d.containerId),x=l(z.feed.entry),A=d.widgetStyle,c=d.widgetTitle+'<ul class="related-post-style-'+A+'">',b=d.newTabLink?' target="_blank"':"",y='<span style="display:block;clear:both;"></span>',v,t,w,r,u;if(!s){return}for(var q=0;q<d.numPosts;q++){if(q==x.length){break}t=x[q].title.$t;w=(d.titleLength!=="auto"&&d.titleLength<t.length)?t.substring(0,d.titleLength)+"&hellip;":t;r=("media$thumbnail"in x[q]&&d.thumbnailSize!==false)?x[q].media$thumbnail.url.replace(/\/s[0-9]+(\-c)?/,"/s"+d.thumbnailSize+"-c"):d.noImage;u=("summary"in x[q]&&d.summaryLength>0)?x[q].summary.$t.replace(/<br ?\/?>/g," ").replace(/<.*?>/g,"").replace(/[<>]/g,"").substring(0,d.summaryLength)+"&hellip;":"";for(var p=0,a=x[q].link.length;p<a;p++){v=(x[q].link[p].rel=="alternate")?x[q].link[p].href:"#"}if(A==2){c+='<li><img alt="" class="related-post-item-thumbnail" src="'+r+'" width="'+d.thumbnailSize+'" height="'+d.thumbnailSize+'"><a class="related-post-item-title" title="'+t+'" href="'+v+'"'+b+">"+w+'</a><span class="related-post-item-summary"><span class="related-post-item-summary-text">'+u+'</span> <a href="'+v+'" class="related-post-item-more"'+b+">"+d.moreText+"</a></span>"+y+"</li>"}else{if(A==3||A==4){c+='<li class="related-post-item" tabindex="0"><a class="related-post-item-title" href="'+v+'"'+b+'><img alt="" class="related-post-item-thumbnail" src="'+r+'" width="'+d.thumbnailSize+'" height="'+d.thumbnailSize+'"></a><div class="related-post-item-tooltip"><a class="related-post-item-title" title="'+t+'" href="'+v+'"'+b+">"+w+"</a></div>"+y+"</li>"}else{if(A==5){c+='<li class="related-post-item" tabindex="0"><a class="related-post-item-wrapper" href="'+v+'" title="'+t+'"'+b+'><img alt="" class="related-post-item-thumbnail" src="'+r+'" width="'+d.thumbnailSize+'" height="'+d.thumbnailSize+'"><span class="related-post-item-tooltip">'+w+"</span></a>"+y+"</li>"}else{if(A==6){c+='<li><a class="related-post-item-title" title="'+t+'" href="'+v+'"'+b+">"+w+'</a><div class="related-post-item-tooltip"><img alt="" class="related-post-item-thumbnail" src="'+r+'" width="'+d.thumbnailSize+'" height="'+d.thumbnailSize+'"><span class="related-post-item-summary"><span class="related-post-item-summary-text">'+u+"</span></span>"+y+"</div></li>"}else{c+='<li><a title="'+t+'" href="'+v+'"'+b+">"+w+"</a></li>"}}}}}s.innerHTML=c+="</ul>"+y;d.callBack()};randomRelatedIndex=h;showRelatedPost=g;j(d.homePage.replace(/\/$/,"")+"/feeds/posts/summary"+e+"?alt=json-in-script&orderby=updated&max-results=0&callback=randomRelatedIndex")})(window,document,document.getElementsByTagName("head")[0]);
// Mag Layout
$(".widget-content").each(function(){var e=$(this).text();if(e.match("recentcomments")){$.ajax({url:"/feeds/comments/default?alt=json-in-script&max-results=5",type:"get",dataType:"jsonp",success:function(e){var t="";var n='<ul class="recomments">';for(var r=0;r<e.feed.entry.length;r++){if(r==e.feed.entry.length)break;for(var i=0;i<e.feed.entry[r].link.length;i++){if(e.feed.entry[r].link[i].rel=="alternate"){t=e.feed.entry[r].link[i].href;break}}if("content"in e.feed.entry[r]){var s=e.feed.entry[r].content.$t}else if("summary"in b_rc){var s=e.feed.entry[r].summary.$t}else var s="";var o=/<\S[^>]*>/g;s=s.replace(o,"");if(s.length>90){s=""+s.substring(0,70)+"..."}var u=e.feed.entry[r].title.$t;var a=e.feed.entry[r].author[0].name.$t;var f=e.feed.entry[r].author[0].gd$image.src;if(f.match("http://img1.blogblog.com/img/blank.gif")){var l='<img class="rc-img" src="http://img1.blogblog.com/img/anon36.png"/>'}else{if(f.match("http://img2.blogblog.com/img/b16-rounded.gif")){var l='<img class="rc-img" src="http://img1.blogblog.com/img/anon36.png"/>'}else{var l='<div class="avatarImg avatarcomments"><img class="avatarcomments" src="'+f+'"/></div>'}}n+="<li>"+l+'<a href="'+t+'">'+a+'</a><span>"'+s+'"</span></li>'}n+='</ul><div class="clear"/>';$(".widget-content").each(function(){if($(this).text().match("recentcomments")){$(this).html(n);$("p.trans").each(function(){var e=$(this).text();var t=$(this).attr("data-tran");$("#pages-wrapper *").replaceText(e,t)})}})}})}if(e.match("randomposts")){$.ajax({url:"/feeds/posts/default?alt=json-in-script",type:"get",dataType:"jsonp",success:function(e){var t=e.feed.entry.length;var n=0;var r=t-5;var i=Math.floor(Math.random()*(r-n+1))+n;$.ajax({url:"/feeds/posts/default?alt=json-in-script&start-index="+i+"&max-results=5",type:"get",dataType:"jsonp",success:function(e){var t="";var n='<ul class="recpost">';for(var r=0;r<e.feed.entry.length;r++){for(var i=0;i<e.feed.entry[r].link.length;i++){if(e.feed.entry[r].link[i].rel=="alternate"){t=e.feed.entry[r].link[i].href;break}}var s=e.feed.entry[r].title.$t;var o=e.feed.entry[r].author[0].name.$t;var u=e.feed.entry[r].published.$t.substring(0,10);var a=e.feed.entry[r].category[0].term;var f=e.feed.entry[r].content.$t;var l=$("<div>").html(f);var c=l.find("img:first").attr("src");var h=e.feed.entry[r].media$thumbnail.url;if(c===undefined){var p='<a class="arl-tmb" href="'+t+'" style="background:url('+h+') no-repeat center center;background-size: cover"/>'}else{var p='<a class="arl-tmb" href="'+t+'" style="background:url('+c+') no-repeat center center;background-size: cover"/>'}n+="<li>"+p+'<div class="post-panel"><h3 class="rcp-title"><a href="'+t+'">'+s+'</a></h3><span class="recent-date">'+u+'</span><span class="recent-author">'+o+"</span></div></li>"}n+='</ul><div class="clear"/>';$(".widget-content").each(function(){if($(this).text().match("randomposts")){$(this).html(n);$(this).find(".arl-tmb").each(function(){$(this).attr("style",function(e,t){return t.replace("/default.jpg","/mqdefault.jpg")}).attr("style",function(e,t){return t.replace("s72-c","s1600")})});$("p.trans").each(function(){var e=$(this).text();var t=$(this).attr("data-tran");$("#pages-wrapper *").replaceText(e,t)})}})}})}})}if(e.match("recentposts")){$.ajax({url:"/feeds/posts/default?alt=json-in-script",type:"get",dataType:"jsonp",success:function(e){$.ajax({url:"/feeds/posts/default?alt=json-in-script&max-results=5",type:"get",dataType:"jsonp",success:function(e){var t="";var n='<ul class="recpost">';for(var r=0;r<e.feed.entry.length;r++){for(var i=0;i<e.feed.entry[r].link.length;i++){if(e.feed.entry[r].link[i].rel=="alternate"){t=e.feed.entry[r].link[i].href;break}}var s=e.feed.entry[r].title.$t;var o=e.feed.entry[r].author[0].name.$t;var u=e.feed.entry[r].published.$t.substring(0,10);var a=e.feed.entry[r].category[0].term;var f=e.feed.entry[r].content.$t;var l=$("<div>").html(f);var c=l.find("img:first").attr("src");var h=e.feed.entry[r].media$thumbnail.url;if(c===undefined){var p='<a class="arl-tmb" href="'+t+'" style="background:url('+h+') no-repeat center center;background-size: cover"/>'}else{var p='<a class="arl-tmb" href="'+t+'" style="background:url('+c+') no-repeat center center;background-size: cover"/>'}n+="<li>"+p+'<div class="post-panel"><h3 class="rcp-title"><a href="'+t+'">'+s+'</a></h3><span class="recent-date">'+u+'</span><span class="recent-author">'+o+"</span></div></li>"}n+='</ul><div class="clear"/>';$(".widget-content").each(function(){if($(this).text().match("recentposts")){$(this).html(n);$(this).find(".arl-tmb").each(function(){$(this).attr("style",function(e,t){return t.replace("/default.jpg","/mqdefault.jpg")}).attr("style",function(e,t){return t.replace("s72-c","s1600")})});$("p.trans").each(function(){var e=$(this).text();var t=$(this).attr("data-tran");$("#pages-wrapper *").replaceText(e,t)})}})}})}})}})
$(document).ready(function(){var e=$("#resp-menu");var t=$(".menu");$(e).on("click",function(e){e.preventDefault();t.slideToggle()});$(window).resize(function(){var e=$(window).width();if(e>767&&t.is(":hidden")){t.removeAttr("style")}})})
!function(a){"use strict";var b=function(b,c){var d=this;d.element=b,d.$element=a(b),d.tabs=d.$element.children(),d.options=a.extend({},a.fn.mtabs.defaults,c),d.current_tab=0,d.init()};b.prototype={init:function(){var a=this;a.tabs.length&&(a.build(),a.buildTabMenu())},build:function(){var b=this,c=b.options,d=c.tab_text_el,e=c.container_class;b.tab_names=[],b.$wrapper=b.$element.wrapInner('<div class="'+e+'" />').find("."+e),b.tabs.wrapAll('<div class="'+c.tabs_container_class+'" />'),b.tabs.each(function(c,e){var f,g=a(e),h=d;f=g.find(h).filter(":first").hide().text(),b.tab_names.push(f)}),a.isFunction(c.onReady)&&c.onReady.call(b.element)},buildTabMenu:function(){for(var b,c=this,d=c.options,e=d.tabsmenu_el,f=c.tab_names,g="<"+e+' class="'+d.tabsmenu_class+'">',h=0,i=f.length,j=function(){var a=arguments;return d.tmpl.tabsmenu_tab.replace(/\{[0-9]\}/g,function(b){var c=Number(b.replace(/\D/g,""));return a[c]||""})};i>h;h++)g+=j(h+1,f[h]);g+="</"+e+">",c.$tabs_menu=a(g).prependTo(c.$wrapper),b=c.$tabs_menu.find(":first")[0].nodeName.toLowerCase(),c.$tabs_menu.on("click",b,function(b){var d=a(this),e=d.index();c.show(e),b.preventDefault()}).find(":first").trigger("click")},show:function(b){var c=this,d=c.options,e=d.active_tab_class;c.tabs.hide().filter(":eq("+b+")").show(),c.$tabs_menu.children().removeClass(e).filter(":eq("+b+")").addClass(e),a.isFunction(d.onTabSelect)&&b!==c.current_tab&&d.onTabSelect.call(c.element,b),c.current_tab=b},destroy:function(){var a=this,b=a.options.tab_text_el;a.$tabs_menu.remove(),a.tabs.unwrap().unwrap(),a.tabs.removeAttr("style"),a.tabs.children(b+":first").removeAttr("style"),a.$element.removeData("mtabs")}},a.fn.mtabs=function(c,d){return this.each(function(){var e,f=a(this),g=f.data("mtabs");e="object"==typeof c&&c,g||f.data("mtabs",g=new b(this,e)),"string"==typeof c&&g[c](d)})},a.fn.mtabs.defaults={container_class:"tabs",tabs_container_class:"tabs-content",active_tab_class:"active-tab",tab_text_el:"h1, h2, h3, h4, h5, h6",tabsmenu_class:"tabs-menu",tabsmenu_el:"ul",tmpl:{tabsmenu_tab:'<li class="tab-{0}"><span>{1}</span></li>'},onTabSelect:null}}(window.jQuery,window,document);
$(function(){$(".searchbutton").on("click",function(){$("#search").addClass("active").find(".search").focus()});$("#search").on("click",function(){$(this).find(".search").focus()});$("#close").on("click",function(){$("#search").removeClass("active")})});
(function(a){a.fn.lightBox=function(p){p=jQuery.extend({overlayBgColor:"#151515",overlayOpacity:0.6,fixedNavigation:true,imageLoading:"http://3.bp.blogspot.com/-BbfO2TakpeI/VBpAarxCJeI/AAAAAAAAGYc/K2aLB_DuOvI/s1600/loading.gif",imageBtnPrev:"http://3.bp.blogspot.com/-JGND9bP-lUw/VBpAbJXYN1I/AAAAAAAAGYU/ToXBXPcWAXA/s1600/next-image2.png",imageBtnNext:"http://3.bp.blogspot.com/-mRqZHLP6DmQ/VBpAah779LI/AAAAAAAAGYM/UJUWudqQ45E/s1600/next-image1.png",imageBtnClose:"http://1.bp.blogspot.com/-5D4Z1sJCL8Y/VBpAaU61ckI/AAAAAAAAGYI/XzoT9CvqWI0/s1600/close-imagewhite.png",imageBlank:"http://3.bp.blogspot.com/-1ju4NhcwXZY/VAIMANGR1uI/AAAAAAAABPc/iLik6Vso6pg/s1600/blank.gif",containerBorderSize:10,containerResizeSpeed:300,txtImage:"Image",txtOf:"of",keyToClose:"c",keyToPrev:"p",keyToNext:"n",imageArray:[],activeImage:0},p);var i=this;function r(){o(this,i);return false}function o(v,u){a("embed, object, select").css({visibility:"hidden"});c();p.imageArray.length=0;p.activeImage=0;if(u.length==1){p.imageArray.push(new Array(v.getAttribute("href"),v.getAttribute("title")))}else{for(var t=0;t<u.length;t++){p.imageArray.push(new Array(u[t].getAttribute("href"),u[t].getAttribute("title")))}}while(p.imageArray[p.activeImage][0]!=v.getAttribute("href")){p.activeImage++}l()}function c(){a("body").append('<div id="jquery-overlay"></div><div id="jquery-lightbox"><div id="lightbox-container-image-box"><div id="lightbox-container-image"><img id="lightbox-image"><div style="" id="lightbox-nav"><a href="#" id="lightbox-nav-btnPrev"></a><a href="#" id="lightbox-nav-btnNext"></a></div><div id="lightbox-loading"><a href="#" id="lightbox-loading-link"><img src="'+p.imageLoading+'"></a></div></div></div><div id="lightbox-container-image-data-box"><div id="lightbox-container-image-data"><div id="lightbox-image-details"><span id="lightbox-image-details-caption"></span><span id="lightbox-image-details-currentNumber"></span></div><div id="lightbox-secNav"><a href="#" id="lightbox-secNav-btnClose"><img src="'+p.imageBtnClose+'"></a></div></div></div></div>');var t=f();a("#jquery-overlay").css({backgroundColor:p.overlayBgColor,opacity:p.overlayOpacity,width:t[0],height:t[1]}).fadeIn();var u=h();a("#jquery-lightbox").css({top:u[1]+(t[3]/10),left:u[0]}).show();a("#jquery-overlay,#jquery-lightbox").click(function(){b()});a("#lightbox-loading-link,#lightbox-secNav-btnClose").click(function(){b();return false});a(window).resize(function(){var v=f();a("#jquery-overlay").css({width:v[0],height:v[1]});var w=h();a("#jquery-lightbox").css({top:w[1]+(v[3]/10),left:w[0]})})}function l(){a("#lightbox-loading").show();if(p.fixedNavigation){a("#lightbox-image,#lightbox-container-image-data-box,#lightbox-image-details-currentNumber").hide()}else{a("#lightbox-image,#lightbox-nav,#lightbox-nav-btnPrev,#lightbox-nav-btnNext,#lightbox-container-image-data-box,#lightbox-image-details-currentNumber").hide()}var t=new Image();t.onload=function(){a("#lightbox-image").attr("src",p.imageArray[p.activeImage][0]);j(t.width,t.height);t.onload=function(){}};t.src=p.imageArray[p.activeImage][0]}function j(w,z){var t=a("#lightbox-container-image-box").width();var y=a("#lightbox-container-image-box").height();var x=(w+(p.containerBorderSize*2));var v=(z+(p.containerBorderSize*2));var u=t-x;var A=y-v;a("#lightbox-container-image-box").animate({width:x,height:v},p.containerResizeSpeed,function(){g()});if((u==0)&&(A==0)){if(a.browser.msie){n(250)}else{n(100)}}a("#lightbox-container-image-data-box").css({width:w});a("#lightbox-nav-btnPrev,#lightbox-nav-btnNext").css({height:z+(p.containerBorderSize*2)})}function g(){a("#lightbox-loading").hide();a("#lightbox-image").fadeIn(function(){k();s()});q()}function k(){a("#lightbox-container-image-data-box").slideDown("fast");a("#lightbox-image-details-caption").hide();if(p.imageArray[p.activeImage][1]){a("#lightbox-image-details-caption").html(p.imageArray[p.activeImage][1]).show()}if(p.imageArray.length>1){a("#lightbox-image-details-currentNumber").html(p.txtImage+" "+(p.activeImage+1)+" "+p.txtOf+" "+p.imageArray.length).show()}}function s(){a("#lightbox-nav").show();a("#lightbox-nav-btnPrev,#lightbox-nav-btnNext").css({background:"transparent url("+p.imageBlank+") no-repeat"});if(p.activeImage!=0){if(p.fixedNavigation){a("#lightbox-nav-btnPrev").css({background:"url("+p.imageBtnPrev+") left 15% no-repeat"}).unbind().bind("click",function(){p.activeImage=p.activeImage-1;l();return false})}else{a("#lightbox-nav-btnPrev").unbind().hover(function(){a(this).css({background:"url("+p.imageBtnPrev+") left 15% no-repeat"})},function(){a(this).css({background:"transparent url("+p.imageBlank+") no-repeat"})}).show().bind("click",function(){p.activeImage=p.activeImage-1;l();return false})}}if(p.activeImage!=(p.imageArray.length-1)){if(p.fixedNavigation){a("#lightbox-nav-btnNext").css({background:"url("+p.imageBtnNext+") right 15% no-repeat"}).unbind().bind("click",function(){p.activeImage=p.activeImage+1;l();return false})}else{a("#lightbox-nav-btnNext").unbind().hover(function(){a(this).css({background:"url("+p.imageBtnNext+") right 15% no-repeat"})},function(){a(this).css({background:"transparent url("+p.imageBlank+") no-repeat"})}).show().bind("click",function(){p.activeImage=p.activeImage+1;l();return false})}}m()}function m(){a(document).keydown(function(t){d(t)})}function e(){a(document).unbind()}function d(t){if(t==null){keycode=event.keyCode;escapeKey=27}else{keycode=t.keyCode;escapeKey=t.DOM_VK_ESCAPE}key=String.fromCharCode(keycode).toLowerCase();if((key==p.keyToClose)||(key=="x")||(keycode==escapeKey)){b()}if((key==p.keyToPrev)||(keycode==37)){if(p.activeImage!=0){p.activeImage=p.activeImage-1;l();e()}}if((key==p.keyToNext)||(keycode==39)){if(p.activeImage!=(p.imageArray.length-1)){p.activeImage=p.activeImage+1;l();e()}}}function q(){if((p.imageArray.length-1)>p.activeImage){objNext=new Image();objNext.src=p.imageArray[p.activeImage+1][0]}if(p.activeImage>0){objPrev=new Image();objPrev.src=p.imageArray[p.activeImage-1][0]}}function b(){a("#jquery-lightbox").remove();a("#jquery-overlay").fadeOut(function(){a("#jquery-overlay").remove()});a("embed, object, select").css({visibility:"visible"})}function f(){var v,t;if(window.innerHeight&&window.scrollMaxY){v=window.innerWidth+window.scrollMaxX;t=window.innerHeight+window.scrollMaxY}else{if(document.body.scrollHeight>document.body.offsetHeight){v=document.body.scrollWidth;t=document.body.scrollHeight}else{v=document.body.offsetWidth;t=document.body.offsetHeight}}var u,w;if(self.innerHeight){if(document.documentElement.clientWidth){u=document.documentElement.clientWidth}else{u=self.innerWidth}w=self.innerHeight}else{if(document.documentElement&&document.documentElement.clientHeight){u=document.documentElement.clientWidth;w=document.documentElement.clientHeight}else{if(document.body){u=document.body.clientWidth;w=document.body.clientHeight}}}if(t<w){pageHeight=w}else{pageHeight=t}if(v<u){pageWidth=v}else{pageWidth=u}arrayPageSize=new Array(pageWidth,pageHeight,u,w);return arrayPageSize}function h(){var u,t;if(self.pageYOffset){t=self.pageYOffset;u=self.pageXOffset}else{if(document.documentElement&&document.documentElement.scrollTop){t=document.documentElement.scrollTop;u=document.documentElement.scrollLeft}else{if(document.body){t=document.body.scrollTop;u=document.body.scrollLeft}}}arrayPageScroll=new Array(u,t);return arrayPageScroll}function n(v){var u=new Date();t=null;do{var t=new Date()}while(t-u<v)}return this.unbind("click").click(r)}})(jQuery);
$(document).ready(function(){
$('a[href$=jpg]:has(img)').lightBox();
$('a[href$=jpeg]:has(img)').lightBox();
$('a[href$=png]:has(img)').lightBox();
$('a[href$=gif]:has(img)').lightBox();
$('a[href$=bmp]:has(img)').lightBox();
});

/**
 * Timeago is a jQuery plugin that makes it easy to support automatically
 * updating fuzzy timestamps (e.g. "4 minutes ago" or "about 1 day ago").
 *
 * @name timeago
 * @version 1.4.1
 * @requires jQuery v1.2.3+
 * @author Ryan McGeary
 * @license MIT License - http://www.opensource.org/licenses/mit-license.php
 *
 * For usage and examples, visit:
 * http://timeago.yarp.com/
 *
 * Copyright (c) 2008-2015, Ryan McGeary (ryan -[at]- mcgeary [*dot*] org)
 */

(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function ($) {
  $.timeago = function(timestamp) {
    if (timestamp instanceof Date) {
      return inWords(timestamp);
    } else if (typeof timestamp === "string") {
      return inWords($.timeago.parse(timestamp));
    } else if (typeof timestamp === "number") {
      return inWords(new Date(timestamp));
    } else {
      return inWords($.timeago.datetime(timestamp));
    }
  };
  var $t = $.timeago;

  $.extend($.timeago, {
    settings: {
      refreshMillis: 60000,
      allowPast: true,
      allowFuture: false,
      localeTitle: false,
      cutoff: 0,
      strings: {
        prefixAgo: null,
        prefixFromNow: null,
        suffixAgo: "ago",
        suffixFromNow: "from now",
        inPast: 'any moment now',
        seconds: "less than a minute",
        minute: "about a minute",
        minutes: "%d minutes",
        hour: "about an hour",
        hours: "about %d hours",
        day: "a day",
        days: "%d days",
        month: "about a month",
        months: "%d months",
        year: "about a year",
        years: "%d years",
        wordSeparator: " ",
        numbers: []
      }
    },

    inWords: function(distanceMillis) {
      if(!this.settings.allowPast && ! this.settings.allowFuture) {
          throw 'timeago allowPast and allowFuture settings can not both be set to false.';
      }

      var $l = this.settings.strings;
      var prefix = $l.prefixAgo;
      var suffix = $l.suffixAgo;
      if (this.settings.allowFuture) {
        if (distanceMillis < 0) {
          prefix = $l.prefixFromNow;
          suffix = $l.suffixFromNow;
        }
      }

      if(!this.settings.allowPast && distanceMillis >= 0) {
        return this.settings.strings.inPast;
      }

      var seconds = Math.abs(distanceMillis) / 1000;
      var minutes = seconds / 60;
      var hours = minutes / 60;
      var days = hours / 24;
      var years = days / 365;

      function substitute(stringOrFunction, number) {
        var string = $.isFunction(stringOrFunction) ? stringOrFunction(number, distanceMillis) : stringOrFunction;
        var value = ($l.numbers && $l.numbers[number]) || number;
        return string.replace(/%d/i, value);
      }

      var words = seconds < 45 && substitute($l.seconds, Math.round(seconds)) ||
        seconds < 90 && substitute($l.minute, 1) ||
        minutes < 45 && substitute($l.minutes, Math.round(minutes)) ||
        minutes < 90 && substitute($l.hour, 1) ||
        hours < 24 && substitute($l.hours, Math.round(hours)) ||
        hours < 42 && substitute($l.day, 1) ||
        days < 30 && substitute($l.days, Math.round(days)) ||
        days < 45 && substitute($l.month, 1) ||
        days < 365 && substitute($l.months, Math.round(days / 30)) ||
        years < 1.5 && substitute($l.year, 1) ||
        substitute($l.years, Math.round(years));

      var separator = $l.wordSeparator || "";
      if ($l.wordSeparator === undefined) { separator = " "; }
      return $.trim([prefix, words, suffix].join(separator));
    },

    parse: function(iso8601) {
      var s = $.trim(iso8601);
      s = s.replace(/\.\d+/,""); // remove milliseconds
      s = s.replace(/-/,"/").replace(/-/,"/");
      s = s.replace(/T/," ").replace(/Z/," UTC");
      s = s.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"); // -04:00 -> -0400
      s = s.replace(/([\+\-]\d\d)$/," $100"); // +09 -> +0900
      return new Date(s);
    },
    datetime: function(elem) {
      var iso8601 = $t.isTime(elem) ? $(elem).attr("datetime") : $(elem).attr("title");
      return $t.parse(iso8601);
    },
    isTime: function(elem) {
      // jQuery's `is()` doesn't play well with HTML5 in IE
      return $(elem).get(0).tagName.toLowerCase() === "time"; // $(elem).is("time");
    }
  });

  // functions that can be called via $(el).timeago('action')
  // init is default when no action is given
  // functions are called with context of a single element
  var functions = {
    init: function(){
      var refresh_el = $.proxy(refresh, this);
      refresh_el();
      var $s = $t.settings;
      if ($s.refreshMillis > 0) {
        this._timeagoInterval = setInterval(refresh_el, $s.refreshMillis);
      }
    },
    update: function(time){
      var parsedTime = $t.parse(time);
      $(this).data('timeago', { datetime: parsedTime });
      if($t.settings.localeTitle) $(this).attr("title", parsedTime.toLocaleString());
      refresh.apply(this);
    },
    updateFromDOM: function(){
      $(this).data('timeago', { datetime: $t.parse( $t.isTime(this) ? $(this).attr("datetime") : $(this).attr("title") ) });
      refresh.apply(this);
    },
    dispose: function () {
      if (this._timeagoInterval) {
        window.clearInterval(this._timeagoInterval);
        this._timeagoInterval = null;
      }
    }
  };

  $.fn.timeago = function(action, options) {
    var fn = action ? functions[action] : functions.init;
    if(!fn){
      throw new Error("Unknown function name '"+ action +"' for timeago");
    }
    // each over objects here and call the requested function
    this.each(function(){
      fn.call(this, options);
    });
    return this;
  };

  function refresh() {
    //check if it's still visible
    if(!$.contains(document.documentElement,this)){
      //stop if it has been removed
      $(this).timeago("dispose");
      return this;
    }

    var data = prepareData(this);
    var $s = $t.settings;

    if (!isNaN(data.datetime)) {
      if ( $s.cutoff == 0 || Math.abs(distance(data.datetime)) < $s.cutoff) {
        $(this).text(inWords(data.datetime));
      }
    }
    return this;
  }

  function prepareData(element) {
    element = $(element);
    if (!element.data("timeago")) {
      element.data("timeago", { datetime: $t.datetime(element) });
      var text = $.trim(element.text());
      if ($t.settings.localeTitle) {
        element.attr("title", element.data('timeago').datetime.toLocaleString());
      } else if (text.length > 0 && !($t.isTime(element) && element.attr("title"))) {
        element.attr("title", text);
      }
    }
    return element.data("timeago");
  }

  function inWords(date) {
    return $t.inWords(distance(date));
  }

  function distance(date) {
    return (new Date().getTime() - date.getTime());
  }

  // fix for IE6 suckage
  document.createElement("abbr");
  document.createElement("time");
}));

