(()=>{"use strict";var n={890:(n,e,t)=>{t.d(e,{Z:()=>i});var o=t(645),r=t.n(o)()((function(n){return n[1]}));r.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap);"]),r.push([n.id,"@import url(https://fonts.googleapis.com/icon?family=Material+Icons);"]),r.push([n.id,"* {\n  box-sizing: border-box;\n  margin: 0;\n  font-family: 'Quicksand', sans-serif;\n  color: rgb(180, 120, 63);\n}\n\nbody {\n  background-color: rgb(240, 226, 214);\n  padding: 20px;\n}\n\n/*  MAIN  */\n#div-main {\n  display: flex;\n  flex-direction: column;\n  width: fit-content;\n  position: absolute;\n  top: 40px;\n  left: 50px;\n}\n#div-main-top {\n  display: flex;\n  flex-direction: row;\n}\n#span-main-temp {\n  font-size: 10vw;\n}\n#span-main-unit {\n  font-size: 5vw;\n}\n#div-maxmin-temp {\n  font-size: 1vw;\n  margin-left: 15px;\n  margin-top: 25px;\n}\n.span-maxmin-unit {\n  font-size: 15px;\n}\n\n#input-location {\n  font-size: 30px;\n  background-color: transparent;\n  border: none;\n}\n#input-location:focus {\n  border: none;\n  outline: none;\n  text-decoration: underline;\n  text-decoration-color: rgb(209, 172, 137);\n}\n\n/*  EXTRA  */\n#div-extra {\n  display: flex;\n  flex-direction: row;\n  position: absolute;\n  bottom: 3vh;\n  left: 50px;\n}\n.div-inner-extra {\n  display: flex;\n  flex-direction: row;\n  margin-right: 15px;\n}\n.extra-icon {\n  font-size: 7vw;\n}\n.div-extra-text h2 {\n  font-size: 2vw;\n}\n\n/*  TOGGLE  */\n#div-toggle {\n  position: absolute;\n  top: 40px;\n  right: 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n/*  ICON  */\n#div-icon {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  bottom: 20px;\n  right: 1%;\n  z-index: -1;\n}\n#img-icon {\n  width: 900px;\n}\n\n#div-gif {\n  position: absolute;\n  top: 45%;\n  left: 40px;\n  z-index: -2;\n}\n\n#img-gif {\n  width: 300px;\n  border-radius: 10%;\n}\n",""]);const i=r},658:(n,e,t)=>{t.d(e,{Z:()=>i});var o=t(645),r=t.n(o)()((function(n){return n[1]}));r.push([n.id,"/* TAKEN FROM W3SCHOOLS*/\n\n/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: '';\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: rgb(209, 172, 137);\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px rgb(209, 172, 137);\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n",""]);const i=r},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);o&&r[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},379:(n,e,t)=>{var o,r=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function a(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function c(n,e){for(var t={},o=[],r=0;r<n.length;r++){var c=n[r],s=e.base?c[0]+e.base:c[0],l=t[s]||0,d="".concat(s," ").concat(l);t[s]=l+1;var u=a(d),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:d,updater:h(p,e),references:1}),o.push(d)}return o}function s(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var i=t.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var a=r(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var l,d=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function u(n,e,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=d(e,r);else{var i=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function p(n,e,t){var o=t.css,r=t.media,i=t.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var f=null,m=0;function h(n,e){var t,o,r;if(e.singleton){var i=m++;t=f||(f=s(e)),o=u.bind(null,t,i,!1),r=u.bind(null,t,i,!0)}else t=s(e),o=p.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var t=c(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<t.length;o++){var r=a(t[o]);i[r].references--}for(var s=c(n,e),l=0;l<t.length;l++){var d=a(t[l]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}t=s}}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),o=t(890);e()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;var r=t(658);e()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;const i=async(n,e="")=>{try{let t="";if(""===e?t=await fetch(` https://api.openweathermap.org/data/2.5/weather?q=${n}&APPID=2f6cc1ec688d89ab8cca0c9955d6b931`,{mode:"cors"}):(console.log("entered city and country"),t=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${n},${e}&APPID=2f6cc1ec688d89ab8cca0c9955d6b931`,{mode:"cors"})),!t.ok)throw new Error("wrong city or country");return await t.json()}catch(n){return void alert("Please follow the guidelines and enter a correct city.")}},a=async n=>{try{let e="";if(e=await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=VV2ZktXnKvbr0LCFPwSwybxfb12cPYz5&s=${n}`,{mode:"cors"}),!e.ok)throw new Error("wrong city or country");return await e.json()}catch{return void alert("Please follow the guidelines and enter a correct city.")}},c=(n,e)=>1===e?(5/9*(n-32)).toFixed(2):(1.8*n+32).toFixed(2),s=n=>(1.8*(n-273.15)+32).toFixed(2),l=(()=>{const n=document.querySelector("#span-main-temp"),e=document.querySelector("#span-max-temp"),t=document.querySelector("#span-min-temp"),o=document.querySelector("#span-date"),r=document.querySelector("#span-humidity"),l=document.querySelector("#span-wind"),d=document.querySelector("#span-cloud"),u=document.querySelector("#span-feels"),p=document.querySelector("#span-temp-unit"),f=[...document.querySelectorAll(".chosen-unit")],m=document.querySelector("#span-weather-desc"),h=document.querySelector("#img-icon"),x=document.querySelector("#img-gif"),g=document.querySelector("#input-location"),v=document.querySelector("#unit-selector");let b=0;const y=()=>{n.textContent=c(n.textContent,b),e.textContent=c(e.textContent,b),t.textContent=c(t.textContent,b),u.textContent=c(u.textContent,b)},w=i=>{void 0!==i&&(i=>{var c;n.textContent=s(i.main.temp),e.textContent=s(i.main.temp_max),t.textContent=s(i.main.temp_min),o.textContent=(n=>{const e=new Date(Date(n));return`${String(e.getDate())} / ${String(e.getMonth()+1)} / ${String(e.getFullYear())}`})(i.dt),r.textContent=i.main.humidity,l.textContent=i.wind.speed,d.textContent=i.clouds.all,u.textContent=s(i.main.feels_like),h.src=`https://openweathermap.org/img/wn/${i.weather[0].icon}@2x.png`,c=i.weather[0].description,a(c).then((n=>{x.src=n.data.images.original.url})),m.textContent=i.weather[0].description,1===b&&y()})(i)};return v.addEventListener("click",(()=>{b=b=0===b?1:0,y(),0===b?(p.textContent="Farenheit",f.forEach((n=>{n.innerHTML="&#8457;"}))):(p.textContent="Celsius",f.forEach((n=>{n.innerHTML="&#8451;"})))})),g.addEventListener("keyup",(n=>{13===n.keyCode&&(()=>{let n=g.value;n=n.split(",");const e=n[0].trim();let t="";2===n.length&&(t=n[1].trim()),i(e,t).then((n=>{w(n)}))})()})),{updateDisplayAgree:w}})();console.log("Updated"),i("London").then((n=>{console.log("console JSON: ",n),l.updateDisplayAgree(n)}))})()})();