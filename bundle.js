(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var c=e.g.document;if(!t&&c&&(c.currentScript&&(t=c.currentScript.src),!t)){var r=c.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"1c1520127aab08bdfaf4576f5309becd.png",c=e.p+"16b5d43db1364b56cdb1841a40d51429.png";var r=document.querySelector(".checkmark"),s=document.querySelector(".temp");r.addEventListener("click",(function(){s.classList.toggle("isActive")}));for(var l=document.querySelectorAll(".select__body"),n=document.querySelectorAll(".select__item"),o=document.querySelectorAll(".select__icon"),i=document.querySelectorAll(".select__header"),u=function(e){o[e].src=c,i[e].addEventListener("click",(function(){l[e].classList.toggle("isActive"),l[e].classList.contains("isActive")?o[e].src=t:o[e].src=c}))},a=0;a<o.length;a++)u(a);for(var d=function(e){n[e].addEventListener("click",(function(){n[e].closest(".select").querySelector(".select__current").innerText=n[e].innerText,n[e].closest(".select").querySelector(".select__body").classList.toggle("isActive"),n[e].closest(".select").querySelector(".select__icon").src=c,n[e].closest(".select").querySelector(".select__current").classList.remove("select__current_gray")}))},g=0;g<n.length;g++)d(g)})();