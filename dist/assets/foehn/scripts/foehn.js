!function(t){function n(e){if(i[e])return i[e].exports;var o=i[e]={exports:{},id:e,loaded:!1};return t[e].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var i={};return n.m=t,n.c=i,n.p="",n(0)}([function(t,n,i){"use strict";var e=i(2);e.load({custom:{families:["MetaSerifWeb:n4,i4,n7,i7","MetaWeb:n4,i4,n7,i7"]}})},,function(t,n,i){var e;!function(){function o(t,n,i){return t.call.apply(t.bind,arguments)}function s(t,n,i){if(!t)throw Error();if(2<arguments.length){var e=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,e),t.apply(n,i)}}return function(){return t.apply(n,arguments)}}function a(t,n,i){return a=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?o:s,a.apply(null,arguments)}function r(t,n){this.a=t,this.m=n||t,this.c=this.m.document}function c(t,n,i,e){if(n=t.c.createElement(n),i)for(var o in i)i.hasOwnProperty(o)&&("style"==o?n.style.cssText=i[o]:n.setAttribute(o,i[o]));return e&&n.appendChild(t.c.createTextNode(e)),n}function f(t,n,i){t=t.c.getElementsByTagName(n)[0],t||(t=document.documentElement),t.insertBefore(i,t.lastChild)}function h(t){t.parentNode&&t.parentNode.removeChild(t)}function l(t,n,i){n=n||[],i=i||[];for(var e=t.className.split(/\s+/),o=0;o<n.length;o+=1){for(var s=!1,a=0;a<e.length;a+=1)if(n[o]===e[a]){s=!0;break}s||e.push(n[o])}for(n=[],o=0;o<e.length;o+=1){for(s=!1,a=0;a<i.length;a+=1)if(e[o]===i[a]){s=!0;break}s||n.push(e[o])}t.className=n.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function u(t,n){for(var i=t.className.split(/\s+/),e=0,o=i.length;o>e;e++)if(i[e]==n)return!0;return!1}function p(t){if("string"==typeof t.f)return t.f;var n=t.m.location.protocol;return"about:"==n&&(n=t.a.location.protocol),"https:"==n?"https:":"http:"}function g(t){return t.m.location.hostname||t.a.location.hostname}function d(t,n,i){function e(){r&&o&&s&&(r(a),r=null)}n=c(t,"link",{rel:"stylesheet",href:n,media:"all"});var o=!1,s=!0,a=null,r=i||null;rt?(n.onload=function(){o=!0,e()},n.onerror=function(){o=!0,a=Error("Stylesheet failed to load"),e()}):setTimeout(function(){o=!0,e()},0),f(t,"head",n)}function v(t,n,i,e){var o=t.c.getElementsByTagName("head")[0];if(o){var s=c(t,"script",{src:n}),a=!1;return s.onload=s.onreadystatechange=function(){a||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(a=!0,i&&i(null),s.onload=s.onreadystatechange=null,"HEAD"==s.parentNode.tagName&&o.removeChild(s))},o.appendChild(s),setTimeout(function(){a||(a=!0,i&&i(Error("Script load timeout")))},e||5e3),s}return null}function m(){this.a=0,this.c=null}function w(t){return t.a++,function(){t.a--,b(t)}}function y(t,n){t.c=n,b(t)}function b(t){0==t.a&&t.c&&(t.c(),t.c=null)}function x(t){this.a=t||"-"}function j(t,n){this.c=t,this.f=4,this.a="n";var i=(n||"n4").match(/^([nio])([1-9])$/i);i&&(this.a=i[1],this.f=parseInt(i[2],10))}function k(t){return S(t)+" "+(t.f+"00")+" 300px "+_(t.c)}function _(t){var n=[];t=t.split(/,\s*/);for(var i=0;i<t.length;i++){var e=t[i].replace(/['"]/g,"");-1!=e.indexOf(" ")||/^\d/.test(e)?n.push("'"+e+"'"):n.push(e)}return n.join(",")}function T(t){return t.a+t.f}function S(t){var n="normal";return"o"===t.a?n="oblique":"i"===t.a&&(n="italic"),n}function N(t){var n=4,i="n",e=null;return t&&((e=t.match(/(normal|oblique|italic)/i))&&e[1]&&(i=e[1].substr(0,1).toLowerCase()),(e=t.match(/([1-9]00|normal|bold)/i))&&e[1]&&(/bold/i.test(e[1])?n=7:/[1-9]00/.test(e[1])&&(n=parseInt(e[1].substr(0,1),10)))),i+n}function A(t,n){this.c=t,this.f=t.m.document.documentElement,this.h=n,this.a=new x("-"),this.j=!1!==n.events,this.g=!1!==n.classes}function C(t){t.g&&l(t.f,[t.a.c("wf","loading")]),W(t,"loading")}function E(t){if(t.g){var n=u(t.f,t.a.c("wf","active")),i=[],e=[t.a.c("wf","loading")];n||i.push(t.a.c("wf","inactive")),l(t.f,i,e)}W(t,"inactive")}function W(t,n,i){t.j&&t.h[n]&&(i?t.h[n](i.c,T(i)):t.h[n]())}function I(){this.c={}}function P(t,n,i){var e,o=[];for(e in n)if(n.hasOwnProperty(e)){var s=t.c[e];s&&o.push(s(n[e],i))}return o}function B(t,n){this.c=t,this.f=n,this.a=c(this.c,"span",{"aria-hidden":"true"},this.f)}function F(t){f(t.c,"body",t.a)}function O(t){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+_(t.c)+";"+("font-style:"+S(t)+";font-weight:"+(t.f+"00")+";")}function L(t,n,i,e,o,s){this.g=t,this.j=n,this.a=e,this.c=i,this.f=o||3e3,this.h=s||void 0}function D(t,n,i,e,o,s,a){this.v=t,this.B=n,this.c=i,this.a=e,this.s=a||"BESbswy",this.f={},this.w=o||3e3,this.u=s||null,this.o=this.j=this.h=this.g=null,this.g=new B(this.c,this.s),this.h=new B(this.c,this.s),this.j=new B(this.c,this.s),this.o=new B(this.c,this.s),t=new j(this.a.c+",serif",T(this.a)),t=O(t),this.g.a.style.cssText=t,t=new j(this.a.c+",sans-serif",T(this.a)),t=O(t),this.h.a.style.cssText=t,t=new j("serif",T(this.a)),t=O(t),this.j.a.style.cssText=t,t=new j("sans-serif",T(this.a)),t=O(t),this.o.a.style.cssText=t,F(this.g),F(this.h),F(this.j),F(this.o)}function $(){if(null===ft){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);ft=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))}return ft}function M(t,n,i){for(var e in ct)if(ct.hasOwnProperty(e)&&n===t.f[ct[e]]&&i===t.f[ct[e]])return!0;return!1}function q(t){var n,i=t.g.a.offsetWidth,e=t.h.a.offsetWidth;(n=i===t.f.serif&&e===t.f["sans-serif"])||(n=$()&&M(t,i,e)),n?at()-t.A>=t.w?$()&&M(t,i,e)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?z(t,t.v):z(t,t.B):H(t):z(t,t.v)}function H(t){setTimeout(a(function(){q(this)},t),50)}function z(t,n){setTimeout(a(function(){h(this.g.a),h(this.h.a),h(this.j.a),h(this.o.a),n(this.a)},t),0)}function G(t,n,i){this.c=t,this.a=n,this.f=0,this.o=this.j=!1,this.s=i}function K(t){0==--t.f&&t.j&&(t.o?(t=t.a,t.g&&l(t.f,[t.a.c("wf","active")],[t.a.c("wf","loading"),t.a.c("wf","inactive")]),W(t,"active")):E(t.a))}function R(t){this.j=t,this.a=new I,this.h=0,this.f=this.g=!0}function U(t,n,i,e,o){var s=0==--t.h;(t.f||t.g)&&setTimeout(function(){var t=o||null,r=e||null||{};if(0===i.length&&s)E(n.a);else{n.f+=i.length,s&&(n.j=s);var c,f=[];for(c=0;c<i.length;c++){var h=i[c],u=r[h.c],p=n.a,g=h;p.g&&l(p.f,[p.a.c("wf",g.c,T(g).toString(),"loading")]),W(p,"fontloading",g),p=null,null===ht&&(ht=window.FontFace?(g=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent))?42<parseInt(g[1],10):!0:!1),p=ht?new L(a(n.g,n),a(n.h,n),n.c,h,n.s,u):new D(a(n.g,n),a(n.h,n),n.c,h,n.s,t,u),f.push(p)}for(c=0;c<f.length;c++)f[c].start()}},0)}function J(t,n,i){var e=[],o=i.timeout;C(n);var e=P(t.a,i,t.c),s=new G(t.c,n,o);for(t.h=e.length,n=0,i=e.length;i>n;n++)e[n].load(function(n,i,e){U(t,s,n,i,e)})}function Q(t,n){this.c=t,this.a=n}function V(t,n,i){var e=p(t.c);return t=(t.a.api||"fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/,""),e+"//"+t+"/"+n+".js"+(i?"?v="+i:"")}function X(t,n){this.c=t,this.a=n}function Y(t,n,i){t?this.c=t:this.c=n+lt,this.a=[],this.f=[],this.g=i||""}function Z(t,n){for(var i=n.length,e=0;i>e;e++){var o=n[e].split(":");3==o.length&&t.f.push(o.pop());var s="";2==o.length&&""!=o[1]&&(s=":"),t.a.push(o.join(s))}}function tt(t){if(0==t.a.length)throw Error("No fonts to load!");if(-1!=t.c.indexOf("kit="))return t.c;for(var n=t.a.length,i=[],e=0;n>e;e++)i.push(t.a[e].replace(/ /g,"+"));return n=t.c+"?family="+i.join("%7C"),0<t.f.length&&(n+="&subset="+t.f.join(",")),0<t.g.length&&(n+="&text="+encodeURIComponent(t.g)),n}function nt(t){this.f=t,this.a=[],this.c={}}function it(t){for(var n=t.f.length,i=0;n>i;i++){var e=t.f[i].split(":"),o=e[0].replace(/\+/g," "),s=["n4"];if(2<=e.length){var a,r=e[1];if(a=[],r)for(var r=r.split(","),c=r.length,f=0;c>f;f++){var h;if(h=r[f],h.match(/^[\w-]+$/)){var l=dt.exec(h.toLowerCase());if(null==l)h="";else{if(h=l[2],h=null==h||""==h?"n":gt[h],l=l[1],null==l||""==l)l="4";else var u=pt[l],l=u?u:isNaN(l)?"4":l.substr(0,1);h=[h,l].join("")}}else h="";h&&a.push(h)}0<a.length&&(s=a),3==e.length&&(e=e[2],a=[],e=e?e.split(","):a,0<e.length&&(e=ut[e[0]])&&(t.c[o]=e))}for(t.c[o]||(e=ut[o])&&(t.c[o]=e),e=0;e<s.length;e+=1)t.a.push(new j(o,s[e]))}}function et(t,n){this.c=t,this.a=n}function ot(t,n){this.c=t,this.a=n}function st(t,n){this.c=t,this.f=n,this.a=[]}var at=Date.now||function(){return+new Date},rt=!!window.FontFace;x.prototype.c=function(t){for(var n=[],i=0;i<arguments.length;i++)n.push(arguments[i].replace(/[\W_]+/g,"").toLowerCase());return n.join(this.a)},L.prototype.start=function(){var t=this.c.m.document,n=this,i=at(),e=new Promise(function(e,o){function s(){at()-i>=n.f?o():t.fonts.load(k(n.a),n.h).then(function(t){1<=t.length?e():setTimeout(s,25)},function(){o()})}s()}),o=new Promise(function(t,i){setTimeout(i,n.f)});Promise.race([o,e]).then(function(){n.g(n.a)},function(){n.j(n.a)})};var ct={D:"serif",C:"sans-serif"},ft=null;D.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.o.a.offsetWidth,this.A=at(),q(this)};var ht=null;G.prototype.g=function(t){var n=this.a;n.g&&l(n.f,[n.a.c("wf",t.c,T(t).toString(),"active")],[n.a.c("wf",t.c,T(t).toString(),"loading"),n.a.c("wf",t.c,T(t).toString(),"inactive")]),W(n,"fontactive",t),this.o=!0,K(this)},G.prototype.h=function(t){var n=this.a;if(n.g){var i=u(n.f,n.a.c("wf",t.c,T(t).toString(),"active")),e=[],o=[n.a.c("wf",t.c,T(t).toString(),"loading")];i||e.push(n.a.c("wf",t.c,T(t).toString(),"inactive")),l(n.f,e,o)}W(n,"fontinactive",t),K(this)},R.prototype.load=function(t){this.c=new r(this.j,t.context||this.j),this.g=!1!==t.events,this.f=!1!==t.classes,J(this,new A(this.c,t),t)},Q.prototype.load=function(t){function n(){if(o["__mti_fntLst"+i]){var e,s=o["__mti_fntLst"+i](),a=[];if(s)for(var r=0;r<s.length;r++){var c=s[r].fontfamily;void 0!=s[r].fontStyle&&void 0!=s[r].fontWeight?(e=s[r].fontStyle+s[r].fontWeight,a.push(new j(c,e))):a.push(new j(c))}t(a)}else setTimeout(function(){n()},50)}var i=this.a.projectId,e=this.a.version;if(i){var o=this.c.m;v(this.c,V(this,i,e),function(i){i?t([]):n()}).id="__MonotypeAPIScript__"+i}else t([])},X.prototype.load=function(t){var n,i,e=this.a.urls||[],o=this.a.families||[],s=this.a.testStrings||{},a=new m;for(n=0,i=e.length;i>n;n++)d(this.c,e[n],w(a));var r=[];for(n=0,i=o.length;i>n;n++)if(e=o[n].split(":"),e[1])for(var c=e[1].split(","),f=0;f<c.length;f+=1)r.push(new j(e[0],c[f]));else r.push(new j(e[0]));y(a,function(){t(r,s)})};var lt="//fonts.googleapis.com/css",ut={latin:"BESbswy",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},pt={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},gt={i:"i",italic:"i",n:"n",normal:"n"},dt=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/,vt={Arimo:!0,Cousine:!0,Tinos:!0};et.prototype.load=function(t){var n=new m,i=this.c,e=new Y(this.a.api,p(i),this.a.text),o=this.a.families;Z(e,o);var s=new nt(o);it(s),d(i,tt(e),w(n)),y(n,function(){t(s.a,s.c,vt)})},ot.prototype.load=function(t){var n=this.a.id,i=this.c.m;n?v(this.c,(this.a.api||"https://use.typekit.net")+"/"+n+".js",function(n){if(n)t([]);else if(i.Typekit&&i.Typekit.config&&i.Typekit.config.fn){n=i.Typekit.config.fn;for(var e=[],o=0;o<n.length;o+=2)for(var s=n[o],a=n[o+1],r=0;r<a.length;r++)e.push(new j(s,a[r]));try{i.Typekit.load({events:!1,classes:!1,async:!0})}catch(c){}t(e)}},2e3):t([])},st.prototype.load=function(t){var n=this.f.id,i=this.c.m,e=this;n?(i.__webfontfontdeckmodule__||(i.__webfontfontdeckmodule__={}),i.__webfontfontdeckmodule__[n]=function(n,i){for(var o=0,s=i.fonts.length;s>o;++o){var a=i.fonts[o];e.a.push(new j(a.name,N("font-weight:"+a.weight+";font-style:"+a.style)))}t(e.a)},v(this.c,p(this.c)+(this.f.api||"//f.fontdeck.com/s/css/js/")+g(this.c)+"/"+n+".js",function(n){n&&t([])})):t([])};var mt=new R(window);mt.a.c.custom=function(t,n){return new X(n,t)},mt.a.c.fontdeck=function(t,n){return new st(n,t)},mt.a.c.monotype=function(t,n){return new Q(n,t)},mt.a.c.typekit=function(t,n){return new ot(n,t)},mt.a.c.google=function(t,n){return new et(n,t)};var wt={load:a(mt.load,mt)};e=function(){return wt}.call(n,i,n,t),!(void 0!==e&&(t.exports=e))}()}]);