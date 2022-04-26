var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function(){function h(a){this.t={};this.tick=function(a,c,d){d=d?d:(new Date).getTime();this.t[a]=[d,c]};this.tick("start",null,a)}var k=new h;window.GA_jstiming={Timer:h,load:k};if(window.GA_jstiming){window.GA_jstiming.d={};window.GA_jstiming.i=1;var m=function(a,b,c){var d=a.t[b],e=a.t.start;if(d&&(e||c))return d=a.t[b][0],e=void 0!=c?c:e[0],d-e};window.GA_jstiming.report=function(a,b,c){var d="";a.h&&(d+="&"+a.h);var e=a.t,f=e.start,l=[],n=[],g;for(g in e)if("start"!=g&&0!=g.indexOf("_")){var p=e[g][1];p?e[p]&&n.push(g+"."+m(a,g,e[p][0])):f&&l.push(g+"."+m(a,g))}delete e.start;if(b)for(var x in b)d+="&"+x+"="+b[x];a=[c?c:"{{SCHEME}}//csi.gstatic.com/csi","?v=3","&s="+
(window.GA_jstiming.sn||"gam")+"&action=",a.name,n.length?"&it="+n.join(","):"","",d,"&rt=",l.join(",")].join("");b=new Image;var y=window.GA_jstiming.i++;window.GA_jstiming.d[y]=b;b.onload=b.onerror=function(){delete window.GA_jstiming.d[y]};b.src=a;b=null;return a}};var q=this,r=function(a,b){var c,d=b,e=a.split(".");c=c||q;e[0]in c||!c.execScript||c.execScript("var "+e[0]);for(var f;e.length&&(f=e.shift());)e.length||void 0===d?c=c[f]?c[f]:c[f]={}:c[f]=d},s=function(a,b){function c(){}c.prototype=b.prototype;a.l=b.prototype;a.prototype=new c;a.k=function(a,c,f){var l=Array.prototype.slice.call(arguments,2);return b.prototype[c].apply(a,l)}};var t=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,u=function(a,b){if(!a)return b;var c=a.match(t);return c?c[0]:b};var v,w="false",z=!1,A=v=/^true$/.test(w)?!0:/^false$/.test(w)?!1:z;var B=function(){return u("","pubads.g.doubleclick.net")};var C=function(a,b){var c,d;for(d in a)Object.prototype.hasOwnProperty.call(a,d)&&b.call(c,a[d],d,a)};var D=function(a){this.c=[];this.b={};for(var b=0,c=arguments.length;b<c;++b)this.b[arguments[b]]=""};D.prototype.j=function(a){return this.b.hasOwnProperty(a)?this.b[a]:""};var E=function(a){var b=[],c=function(a){""!=a&&b.push(a)};C(a.b,c);return 0<a.c.length&&0<b.length?a.c.join()+","+b.join():a.c.join()+b.join()};var F=function(a){D.apply(this,arguments)};s(F,D);F.prototype.geil=F.prototype.j;function G(a){var b="adsense";if(a&&"string"==typeof a&&0<a.length&&null!=b){var c=window.GS_googleServiceIds_[b];null==c&&(c="adsense"==b?new H:new I,window.GS_googleServiceIds_[b]=c);t:{for(b=0;b<c.a.length;b++)if(a==c.a[b])break t;c.a[c.a.length]=a}a=c}else a=null;return a}r("GS_googleAddAdSenseService",G);function J(){for(var a in window.GS_googleServiceIds_){var b=window.GS_googleServiceIds_[a];"function"!=typeof b&&b.enable()}}r("GS_googleEnableAllServices",J);
function K(){window.GS_googleServiceIds_={}}r("GS_googleResetAllServices",K);function L(){var a;a="adsense";a=null==a?null:window.GS_googleServiceIds_[a];return a=null==a?"":a.a.join()}r("GS_googleGetIdsForAdSenseService",L);function M(a){return N(a)}r("GS_googleFindService",M);function O(){var a=N("adsense");return a?E(a.g):""}r("GS_googleGetExpIdsForAdSense",O);function P(a){this.f=a;this.a=[];this.g=new F}
P.prototype.toString=function(){for(var a="["+this.f+" ids: ",b=0;b<this.a.length;b++)0<b&&(a+=","),a+=this.a[b];return a+="]"};var N=function(a){return a=null==a?null:window.GS_googleServiceIds_[a]};function I(){P.call(this,"unknown")}s(I,P);I.prototype.enable=function(){};function H(){P.call(this,"adsense");this.e=!1}s(H,P);
H.prototype.enable=function(){if(!this.e){var a;a=(a=document.URL)&&(0<a.indexOf("?google_debug")||0<a.indexOf("&google_debug"))?"google_ads_dbg.js":"google_ads.js";var b="http://"+u("","partner.googleadservices.com");A&&(b="https://"+u("","securepubads.g.doubleclick.net"));var c="",d;d=B();(d="pubads.g.doubleclick.net"==d)||(c="?prodhost="+B());a=b+"/gampad/"+a+c;document.write('<script src="'+a+'">\x3c/script>');this.e=!0;window.GA_jstiming&&window.GA_jstiming.Timer&&
(window.GA_jstiming.load.name="load",window.GA_jstiming.load.tick("start"))}};window.GS_googleServiceIds_||(window.GS_googleServiceIds_={});})()


}
/*
     FILE ARCHIVED ON 15:06:57 Dec 04, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:37:38 Apr 26, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.227
  exclusion.robots.policy: 0.209
  cdx.remote: 0.184
  esindex: 0.012
  LoadShardBlock: 265.74 (6)
  PetaboxLoader3.datanode: 267.604 (8)
  CDXLines.iter: 114.399 (3)
  load_resource: 93.192 (2)
  PetaboxLoader3.resolve: 43.474 (2)
*/