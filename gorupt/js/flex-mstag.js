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

(function(){if(mstag.enabled)return;var version="1003102000";if(mstag.version!=version)return;if(!mstag.time)mstag.time=(new Date).getTime();if(!mstag.page)mstag.page={};if(!mstag.page.properties)mstag.page.properties={};var now=mstag.time?new Date(mstag.time):new Date,sec=Math.round(now.getTime()/1000),tzn=now.getTimezoneOffset(),tzw=(new Date(now.getFullYear(),11,21)).getTimezoneOffset(),tzs=(new Date(now.getFullYear(),5,21)).getTimezoneOffset(),tzo,tzd,dst;if(tzw>tzs){tzo=tzw;tzd=tzs}else{tzo=tzs;tzd=tzw}dst=tzn==tzo?0:1;var brn="",brf="",brv="",brp="",br,m,ua=navigator.userAgent,pl=navigator.platform,rem=function(a,b){return a.match(new RegExp(b,"i"))},brlist=[["ie",".*msie[\\s/]([0-9]+)\\.([0-9]+).*aolbuild","a"],["ch",".*chrome/([0-9]+)\\.([0-9]+)"],["nn",".*navigator[^/]*([0-9]+)\\.([0-9]+)"],["op",".*opera.*version/([0-9]+)\\.([0-9]+)"],["op",".*operas*/*s*([0-9]+)\\.([0-9]+)"],["sf",".*version/([0-9]+)\\.([0-9]+)\\.?[0-9]*\\ssafari"],["ff",".*firefox[\\s/]*([0-9]+)\\.([0-9]+)"],["ff",".*minefield[\\s/]*([0-9]+)\\.([0-9]+)","m"],["ie",".*msie[\\s/]([0-9]+)\\.([0-9]+).*windows live messenger","m"],["ie",".*msie[\\s/]([0-9]+)\\.([0-9]+)"]];for(var i=0;i<brlist.length;i++){br=brlist[i];m=rem(ua,br[1]);if(m){brn=br[0];brv=m[1]+"."+m[2];if(br.length>2)brf=br[2];break}}if(rem(pl,"^win"))brp="w";else if(rem(pl,"^mac"))brp="m";else if(rem(pl,"^linux"))brp="l";mstag.properties={a1:mstag.version,a2:mstag.site.version,a3:0,a4:0,a5:0,a6:escape(location.hostname),a7:escape(location.pathname),a8:escape(document.title),a9:escape(location.href),aa:escape(document.referrer),ab:screen.width+"x"+screen.height+"x"+screen.colorDepth,ac:document.body.clientWidth+"x"+document.body.clientHeight,ad:navigator.language?navigator.language:navigator.userLanguage?navigator.userLanguage:"",ae:document.characterSet?document.characterSet:document.charset?document.charset:"",af:navigator.javaEnabled()?1:0,ag:sec,ah:tzo,ai:tzd,aj:dst,ak:function(){var f="",p=navigator.plugins,s="Shockwave Flash";if(p&&p[s]&&p[s].description)f=p[s].description.split(s+" ")[1].split(" ")[0];else try{var f=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"),v=f.GetVariable("$version");if(v){v=v.split(" ")[1].split(",");f=v[0]+"."+v[1]}}catch(ex){f=""}return f}(),al:function(){var s="",p=navigator.plugins,t="Silverlight Plug-In";if(p&&p[t]&&p[t].description){s=p[t].description;s=s.split(".");s=s[0]+"."+s[1]}else try{var s=new ActiveXObject("AgControl.AgControl");if(s)for(var i=20;i>1;i--)if(s.IsVersionSupported(i+".0")){s=i+".0";break}}catch(ex){s=""}return s}(),am:brn,an:brf,ao:brv,ap:brp,a0:mstag.site.siteId};if(!mstag._write)mstag._write=function(s){document.write(s)};mstag._writescript=function(ext,x){mstag._write("<script type='text/javascript'"+(ext?" src='"+x+"'>":">"+x)+"</scr"+"ipt>")};mstag._write_script=function(u){mstag._writescript(1,u)};mstag._write_script_inline=function(c){mstag._writescript(0,c)};mstag._addscript=function(ext,x){var e=document.createElement("script");e.type="text/javascript";if(ext)e.src=x;else e.text=x;document.getElementsByTagName("head")[0].appendChild(e)};mstag._add_script_inline=function(c){mstag._addscript(0,c)};mstag._add_script=function(u){mstag._addscript(1,u)};if(!mstag._add_img)mstag._add_img=function(u){var img=new Image;img.src=u;mstag._imgs.push(img)};mstag.addBeacon=function(u){mstag._add_img(u)};mstag.getPropertySet=function(list){var result={},propSets=[],verify=function(a,o){if(o&&o.properties&&typeof o.properties=="object")a.push(o.properties)};verify(propSets,mstag.tag);verify(propSets,mstag.page);verify(propSets,mstag.site);verify(propSets,mstag);var props=list.split(",");for(var i=0;i<props.length;i++){var prop=props[i].split(":"),oname=prop[0],nname=prop.length==2?prop[1]:oname;for(var j=0;j<propSets.length;j++){var propSet=propSets[j],type=typeof propSet[oname];if(type=="string"||type=="number"){result[nname]=propSet[oname];break}}}return result};mstag.getProperties=function(list,maxlen){if(!maxlen)maxlen=2048;var result="",amp="",propSet=mstag.getPropertySet(list);for(var prop in propSet){var pair=amp+prop+"="+propSet[prop];amp="&";if(result.length+pair.length<=maxlen)result+=pair}return result};mstag.addPayload=function(content){mstag.payload();mstag._add_script_inline(content)};mstag.writePayload=function(content){mstag.payload();mstag._write_script_inline(content)};mstag.payload=function(){if(mstag.tag.t0){mstag.properties.a4++;mstag.properties.a5+=(new Date).getTime()-mstag.tag.t0;delete mstag.tag.t0}};mstag.loadTag=function(l,h,o){if(typeof l!="string"||h&&(o&&(typeof h!="string"||typeof o!="object")||!o&&typeof h!="string"&&typeof h!="object"))return;if(h&&typeof h=="object"){o=h;h=""}if(!h)if(mstag.page.hierarchy)h=mstag.page.hierarchy;else h="";mstag.tag={hierarchy:h,location:l,properties:o,t0:(new Date).getTime()};if(mstag.site.loadTag&&mstag.site.loadTag(l,h,o))return 1;h=h?"/"+h:"";var u=mstag.prefix+"/tag/"+mstag.site.siteId+h+"/"+l+".js?ver="+mstag.site.version;mstag._write_script(u);return 1};mstag._imgs=[];mstag.enabled=1;mstag.properties.a3=(new Date).getTime()-mstag.time})()

}
/*
     FILE ARCHIVED ON 02:02:39 Dec 04, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:46:36 Apr 26, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 95.188
  exclusion.robots: 0.172
  exclusion.robots.policy: 0.165
  RedisCDXSource: 0.616
  esindex: 0.009
  LoadShardBlock: 74.605 (3)
  PetaboxLoader3.datanode: 54.186 (4)
  CDXLines.iter: 15.78 (3)
  load_resource: 100.508
  PetaboxLoader3.resolve: 85.437
*/