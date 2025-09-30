/*! jQuery v1.8.3 jquery.com | jquery.org/license */
(function(e,t){function _(e){var t=M[e]={};return v.each(e.split(y),function(e,n){t[n]=!0}),t}function H(e,n,r){if(r===t&&e.nodeType===1){var i="data-"+n.replace(P,"-$1").toLowerCase();r=e.getAttribute(i);if(typeof r=="string"){try{r=r==="true"?!0:r==="false"?!1:r==="null"?null:+r+""===r?+r:D.test(r)?v.parseJSON(r):r}catch(s){}v.data(e,n,r)}else r=t}return r}function B(e){var t;for(t in e){if(t==="data"&&v.isEmptyObject(e[t]))continue;if(t!=="toJSON")return!1}return!0}function et(){return!1}function tt(){return!0}function ut(e){return!e||!e.parentNode||e.parentNode.nodeType===11}function at(e,t){do e=e[t];while(e&&e.nodeType!==1);return e}function ft(e,t,n){t=t||0;if(v.isFunction(t))return v.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return v.grep(e,function(e,r){return e===t===n});if(typeof t=="string"){var r=v.grep(e,function(e){return e.nodeType===1});if(it.test(t))return v.filter(t,r,!n);t=v.filter(t,r)}return v.grep(e,function(e,r){return v.inArray(e,t)>=0===n})}function lt(e){var t=ct.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function At(e,t){if(t.nodeType!==1||!v.hasData(e))return;var n,r,i,s=v._data(e),o=v._data(t,s),u=s.events;if(u){delete o.handle,o.events={};for(n in u)for(r=0,i=u[n].length;r<i;r++)v.event.add(t,n,u[n][r])}o.data&&(o.data=v.extend({},o.data))}function Ot(e,t){var n;if(t.nodeType!==1)return;t.clearAttributes&&t.clearAttributes(),t.mergeAttributes&&t.mergeAttributes(e),n=t.nodeName.toLowerCase(),n==="object"?(t.parentNode&&(t.outerHTML=e.outerHTML),v.support.html5Clone&&e.innerHTML&&!v.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):n==="input"&&Et.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):n==="option"?t.selected=e.defaultSelected:n==="input"||n==="textarea"?t.defaultValue=e.defaultValue:n==="script"&&t.text!==e.text&&(t.text=e.text),t.removeAttribute(v.expando)}function Mt(e){return typeof e.getElementsByTagName!="undefined"?e.getElementsByTagName("*"):typeof e.querySelectorAll!="undefined"?e.querySelectorAll("*"):[]}function _t(e){Et.test(e.type)&&(e.defaultChecked=e.checked)}function Qt(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Jt.length;while(i--){t=Jt[i]+n;if(t in e)return t}return r}function Gt(e,t){return e=t||e,v.css(e,"display")==="none"||!v.contains(e.ownerDocument,e)}function Yt(e,t){var n,r,i=[],s=0,o=e.length;for(;s<o;s++){n=e[s];if(!n.style)continue;i[s]=v._data(n,"olddisplay"),t?(!i[s]&&n.style.display==="none"&&(n.style.display=""),n.style.display===""&&Gt(n)&&(i[s]=v._data(n,"olddisplay",nn(n.nodeName)))):(r=Dt(n,"display"),!i[s]&&r!=="none"&&v._data(n,"olddisplay",r))}for(s=0;s<o;s++){n=e[s];if(!n.style)continue;if(!t||n.style.display==="none"||n.style.display==="")n.style.display=t?i[s]||"":"none"}return e}function Zt(e,t,n){var r=Rt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function en(e,t,n,r){var i=n===(r?"border":"content")?4:t==="width"?1:0,s=0;for(;i<4;i+=2)n==="margin"&&(s+=v.css(e,n+$t[i],!0)),r?(n==="content"&&(s-=parseFloat(Dt(e,"padding"+$t[i]))||0),n!=="margin"&&(s-=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0)):(s+=parseFloat(Dt(e,"padding"+$t[i]))||0,n!=="padding"&&(s+=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0));return s}function tn(e,t,n){var r=t==="width"?e.offsetWidth:e.offsetHeight,i=!0,s=v.support.boxSizing&&v.css(e,"boxSizing")==="border-box";if(r<=0||r==null){r=Dt(e,t);if(r<0||r==null)r=e.style[t];if(Ut.test(r))return r;i=s&&(v.support.boxSizingReliable||r===e.style[t]),r=parseFloat(r)||0}return r+en(e,t,n||(s?"border":"content"),i)+"px"}function nn(e){if(Wt[e])return Wt[e];var t=v("<"+e+">").appendTo(i.body),n=t.css("display");t.remove();if(n==="none"||n===""){Pt=i.body.appendChild(Pt||v.extend(i.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!Ht||!Pt.createElement)Ht=(Pt.contentWindow||Pt.contentDocument).document,Ht.write("<!doctype html><html><body>"),Ht.close();t=Ht.body.appendChild(Ht.createElement(e)),n=Dt(t,"display"),i.body.removeChild(Pt)}return Wt[e]=n,n}function fn(e,t,n,r){var i;if(v.isArray(t))v.each(t,function(t,i){n||sn.test(e)?r(e,i):fn(e+"["+(typeof i=="object"?t:"")+"]",i,n,r)});else if(!n&&v.type(t)==="object")for(i in t)fn(e+"["+i+"]",t[i],n,r);else r(e,t)}function Cn(e){return function(t,n){typeof t!="string"&&(n=t,t="*");var r,i,s,o=t.toLowerCase().split(y),u=0,a=o.length;if(v.isFunction(n))for(;u<a;u++)r=o[u],s=/^\+/.test(r),s&&(r=r.substr(1)||"*"),i=e[r]=e[r]||[],i[s?"unshift":"push"](n)}}function kn(e,n,r,i,s,o){s=s||n.dataTypes[0],o=o||{},o[s]=!0;var u,a=e[s],f=0,l=a?a.length:0,c=e===Sn;for(;f<l&&(c||!u);f++)u=a[f](n,r,i),typeof u=="string"&&(!c||o[u]?u=t:(n.dataTypes.unshift(u),u=kn(e,n,r,i,u,o)));return(c||!u)&&!o["*"]&&(u=kn(e,n,r,i,"*",o)),u}function Ln(e,n){var r,i,s=v.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((s[r]?e:i||(i={}))[r]=n[r]);i&&v.extend(!0,e,i)}function An(e,n,r){var i,s,o,u,a=e.contents,f=e.dataTypes,l=e.responseFields;for(s in l)s in r&&(n[l[s]]=r[s]);while(f[0]==="*")f.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("content-type"));if(i)for(s in a)if(a[s]&&a[s].test(i)){f.unshift(s);break}if(f[0]in r)o=f[0];else{for(s in r){if(!f[0]||e.converters[s+" "+f[0]]){o=s;break}u||(u=s)}o=o||u}if(o)return o!==f[0]&&f.unshift(o),r[o]}function On(e,t){var n,r,i,s,o=e.dataTypes.slice(),u=o[0],a={},f=0;e.dataFilter&&(t=e.dataFilter(t,e.dataType));if(o[1])for(n in e.converters)a[n.toLowerCase()]=e.converters[n];for(;i=o[++f];)if(i!=="*"){if(u!=="*"&&u!==i){n=a[u+" "+i]||a["* "+i];if(!n)for(r in a){s=r.split(" ");if(s[1]===i){n=a[u+" "+s[0]]||a["* "+s[0]];if(n){n===!0?n=a[r]:a[r]!==!0&&(i=s[0],o.splice(f--,0,i));break}}}if(n!==!0)if(n&&e["throws"])t=n(t);else try{t=n(t)}catch(l){return{state:"parsererror",error:n?l:"No conversion from "+u+" to "+i}}}u=i}return{state:"success",data:t}}function Fn(){try{return new e.XMLHttpRequest}catch(t){}}function In(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function $n(){return setTimeout(function(){qn=t},0),qn=v.now()}function Jn(e,t){v.each(t,function(t,n){var r=(Vn[t]||[]).concat(Vn["*"]),i=0,s=r.length;for(;i<s;i++)if(r[i].call(e,t,n))return})}function Kn(e,t,n){var r,i=0,s=0,o=Xn.length,u=v.Deferred().always(function(){delete a.elem}),a=function(){var t=qn||$n(),n=Math.max(0,f.startTime+f.duration-t),r=n/f.duration||0,i=1-r,s=0,o=f.tweens.length;for(;s<o;s++)f.tweens[s].run(i);return u.notifyWith(e,[f,i,n]),i<1&&o?n:(u.resolveWith(e,[f]),!1)},f=u.promise({elem:e,props:v.extend({},t),opts:v.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:qn||$n(),duration:n.duration,tweens:[],createTween:function(t,n,r){var i=v.Tween(e,f.opts,t,n,f.opts.specialEasing[t]||f.opts.easing);return f.tweens.push(i),i},stop:function(t){var n=0,r=t?f.tweens.length:0;for(;n<r;n++)f.tweens[n].run(1);return t?u.resolveWith(e,[f,t]):u.rejectWith(e,[f,t]),this}}),l=f.props;Qn(l,f.opts.specialEasing);for(;i<o;i++){r=Xn[i].call(f,e,l,f.opts);if(r)return r}return Jn(f,l),v.isFunction(f.opts.start)&&f.opts.start.call(e,f),v.fx.timer(v.extend(a,{anim:f,queue:f.opts.queue,elem:e})),f.progress(f.opts.progress).done(f.opts.done,f.opts.complete).fail(f.opts.fail).always(f.opts.always)}function Qn(e,t){var n,r,i,s,o;for(n in e){r=v.camelCase(n),i=t[r],s=e[n],v.isArray(s)&&(i=s[1],s=e[n]=s[0]),n!==r&&(e[r]=s,delete e[n]),o=v.cssHooks[r];if(o&&"expand"in o){s=o.expand(s),delete e[r];for(n in s)n in e||(e[n]=s[n],t[n]=i)}else t[r]=i}}function Gn(e,t,n){var r,i,s,o,u,a,f,l,c,h=this,p=e.style,d={},m=[],g=e.nodeType&&Gt(e);n.queue||(l=v._queueHooks(e,"fx"),l.unqueued==null&&(l.unqueued=0,c=l.empty.fire,l.empty.fire=function(){l.unqueued||c()}),l.unqueued++,h.always(function(){h.always(function(){l.unqueued--,v.queue(e,"fx").length||l.empty.fire()})})),e.nodeType===1&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],v.css(e,"display")==="inline"&&v.css(e,"float")==="none"&&(!v.support.inlineBlockNeedsLayout||nn(e.nodeName)==="inline"?p.display="inline-block":p.zoom=1)),n.overflow&&(p.overflow="hidden",v.support.shrinkWrapBlocks||h.done(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t){s=t[r];if(Un.exec(s)){delete t[r],a=a||s==="toggle";if(s===(g?"hide":"show"))continue;m.push(r)}}o=m.length;if(o){u=v._data(e,"fxshow")||v._data(e,"fxshow",{}),"hidden"in u&&(g=u.hidden),a&&(u.hidden=!g),g?v(e).show():h.done(function(){v(e).hide()}),h.done(function(){var t;v.removeData(e,"fxshow",!0);for(t in d)v.style(e,t,d[t])});for(r=0;r<o;r++)i=m[r],f=h.createTween(i,g?u[i]:0),d[i]=u[i]||v.style(e,i),i in u||(u[i]=f.start,g&&(f.end=f.start,f.start=i==="width"||i==="height"?1:0))}}function Yn(e,t,n,r,i){return new Yn.prototype.init(e,t,n,r,i)}function Zn(e,t){var n,r={height:e},i=0;t=t?1:0;for(;i<4;i+=2-t)n=$t[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function tr(e){return v.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:!1}var n,r,i=e.document,s=e.location,o=e.navigator,u=e.jQuery,a=e.$,f=Array.prototype.push,l=Array.prototype.slice,c=Array.prototype.indexOf,h=Object.prototype.toString,p=Object.prototype.hasOwnProperty,d=String.prototype.trim,v=function(e,t){return new v.fn.init(e,t,n)},m=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,g=/\S/,y=/\s+/,b=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,w=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,E=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,S=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,T=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,N=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,C=/^-ms-/,k=/-([\da-z])/gi,L=function(e,t){return(t+"").toUpperCase()},A=function(){i.addEventListener?(i.removeEventListener("DOMContentLoaded",A,!1),v.ready()):i.readyState==="complete"&&(i.detachEvent("onreadystatechange",A),v.ready())},O={};v.fn=v.prototype={constructor:v,init:function(e,n,r){var s,o,u,a;if(!e)return this;if(e.nodeType)return this.context=this[0]=e,this.length=1,this;if(typeof e=="string"){e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3?s=[null,e,null]:s=w.exec(e);if(s&&(s[1]||!n)){if(s[1])return n=n instanceof v?n[0]:n,a=n&&n.nodeType?n.ownerDocument||n:i,e=v.parseHTML(s[1],a,!0),E.test(s[1])&&v.isPlainObject(n)&&this.attr.call(e,n,!0),v.merge(this,e);o=i.getElementById(s[2]);if(o&&o.parentNode){if(o.id!==s[2])return r.find(e);this.length=1,this[0]=o}return this.context=i,this.selector=e,this}return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e)}return v.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),v.makeArray(e,this))},selector:"",jquery:"1.8.3",length:0,size:function(){return this.length},toArray:function(){return l.call(this)},get:function(e){return e==null?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e,t,n){var r=v.merge(this.constructor(),e);return r.prevObject=this,r.context=this.context,t==="find"?r.selector=this.selector+(this.selector?" ":"")+n:t&&(r.selector=this.selector+"."+t+"("+n+")"),r},each:function(e,t){return v.each(this,e,t)},ready:function(e){return v.ready.promise().done(e),this},eq:function(e){return e=+e,e===-1?this.slice(e):this.slice(e,e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(l.apply(this,arguments),"slice",l.call(arguments).join(","))},map:function(e){return this.pushStack(v.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:[].sort,splice:[].splice},v.fn.init.prototype=v.fn,v.extend=v.fn.extend=function(){var e,n,r,i,s,o,u=arguments[0]||{},a=1,f=arguments.length,l=!1;typeof u=="boolean"&&(l=u,u=arguments[1]||{},a=2),typeof u!="object"&&!v.isFunction(u)&&(u={}),f===a&&(u=this,--a);for(;a<f;a++)if((e=arguments[a])!=null)for(n in e){r=u[n],i=e[n];if(u===i)continue;l&&i&&(v.isPlainObject(i)||(s=v.isArray(i)))?(s?(s=!1,o=r&&v.isArray(r)?r:[]):o=r&&v.isPlainObject(r)?r:{},u[n]=v.extend(l,o,i)):i!==t&&(u[n]=i)}return u},v.extend({noConflict:function(t){return e.$===v&&(e.$=a),t&&e.jQuery===v&&(e.jQuery=u),v},isReady:!1,readyWait:1,holdReady:function(e){e?v.readyWait++:v.ready(!0)},ready:function(e){if(e===!0?--v.readyWait:v.isReady)return;if(!i.body)return setTimeout(v.ready,1);v.isReady=!0;if(e!==!0&&--v.readyWait>0)return;r.resolveWith(i,[v]),v.fn.trigger&&v(i).trigger("ready").off("ready")},isFunction:function(e){return v.type(e)==="function"},isArray:Array.isArray||function(e){return v.type(e)==="array"},isWindow:function(e){return e!=null&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return e==null?String(e):O[h.call(e)]||"object"},isPlainObject:function(e){if(!e||v.type(e)!=="object"||e.nodeType||v.isWindow(e))return!1;try{if(e.constructor&&!p.call(e,"constructor")&&!p.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||p.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){var r;return!e||typeof e!="string"?null:(typeof t=="boolean"&&(n=t,t=0),t=t||i,(r=E.exec(e))?[t.createElement(r[1])]:(r=v.buildFragment([e],t,n?null:[]),v.merge([],(r.cacheable?v.clone(r.fragment):r.fragment).childNodes)))},parseJSON:function(t){if(!t||typeof t!="string")return null;t=v.trim(t);if(e.JSON&&e.JSON.parse)return e.JSON.parse(t);if(S.test(t.replace(T,"@").replace(N,"]").replace(x,"")))return(new Function("return "+t))();v.error("Invalid JSON: "+t)},parseXML:function(n){var r,i;if(!n||typeof n!="string")return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(s){r=t}return(!r||!r.documentElement||r.getElementsByTagName("parsererror").length)&&v.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&g.test(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(C,"ms-").replace(k,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,n,r){var i,s=0,o=e.length,u=o===t||v.isFunction(e);if(r){if(u){for(i in e)if(n.apply(e[i],r)===!1)break}else for(;s<o;)if(n.apply(e[s++],r)===!1)break}else if(u){for(i in e)if(n.call(e[i],i,e[i])===!1)break}else for(;s<o;)if(n.call(e[s],s,e[s++])===!1)break;return e},trim:d&&!d.call("\ufeff\u00a0")?function(e){return e==null?"":d.call(e)}:function(e){return e==null?"":(e+"").replace(b,"")},makeArray:function(e,t){var n,r=t||[];return e!=null&&(n=v.type(e),e.length==null||n==="string"||n==="function"||n==="regexp"||v.isWindow(e)?f.call(r,e):v.merge(r,e)),r},inArray:function(e,t,n){var r;if(t){if(c)return c.call(t,e,n);r=t.length,n=n?n<0?Math.max(0,r+n):n:0;for(;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,s=0;if(typeof r=="number")for(;s<r;s++)e[i++]=n[s];else while(n[s]!==t)e[i++]=n[s++];return e.length=i,e},grep:function(e,t,n){var r,i=[],s=0,o=e.length;n=!!n;for(;s<o;s++)r=!!t(e[s],s),n!==r&&i.push(e[s]);return i},map:function(e,n,r){var i,s,o=[],u=0,a=e.length,f=e instanceof v||a!==t&&typeof a=="number"&&(a>0&&e[0]&&e[a-1]||a===0||v.isArray(e));if(f)for(;u<a;u++)i=n(e[u],u,r),i!=null&&(o[o.length]=i);else for(s in e)i=n(e[s],s,r),i!=null&&(o[o.length]=i);return o.concat.apply([],o)},guid:1,proxy:function(e,n){var r,i,s;return typeof n=="string"&&(r=e[n],n=e,e=r),v.isFunction(e)?(i=l.call(arguments,2),s=function(){return e.apply(n,i.concat(l.call(arguments)))},s.guid=e.guid=e.guid||v.guid++,s):t},access:function(e,n,r,i,s,o,u){var a,f=r==null,l=0,c=e.length;if(r&&typeof r=="object"){for(l in r)v.access(e,n,l,r[l],1,o,i);s=1}else if(i!==t){a=u===t&&v.isFunction(i),f&&(a?(a=n,n=function(e,t,n){return a.call(v(e),n)}):(n.call(e,i),n=null));if(n)for(;l<c;l++)n(e[l],r,a?i.call(e[l],l,n(e[l],r)):i,u);s=1}return s?e:f?n.call(e):c?n(e[0],r):o},now:function(){return(new Date).getTime()}}),v.ready.promise=function(t){if(!r){r=v.Deferred();if(i.readyState==="complete")setTimeout(v.ready,1);else if(i.addEventListener)i.addEventListener("DOMContentLoaded",A,!1),e.addEventListener("load",v.ready,!1);else{i.attachEvent("onreadystatechange",A),e.attachEvent("onload",v.ready);var n=!1;try{n=e.frameElement==null&&i.documentElement}catch(s){}n&&n.doScroll&&function o(){if(!v.isReady){try{n.doScroll("left")}catch(e){return setTimeout(o,50)}v.ready()}}()}}return r.promise(t)},v.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,t){O["[object "+t+"]"]=t.toLowerCase()}),n=v(i);var M={};v.Callbacks=function(e){e=typeof e=="string"?M[e]||_(e):v.extend({},e);var n,r,i,s,o,u,a=[],f=!e.once&&[],l=function(t){n=e.memory&&t,r=!0,u=s||0,s=0,o=a.length,i=!0;for(;a&&u<o;u++)if(a[u].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}i=!1,a&&(f?f.length&&l(f.shift()):n?a=[]:c.disable())},c={add:function(){if(a){var t=a.length;(function r(t){v.each(t,function(t,n){var i=v.type(n);i==="function"?(!e.unique||!c.has(n))&&a.push(n):n&&n.length&&i!=="string"&&r(n)})})(arguments),i?o=a.length:n&&(s=t,l(n))}return this},remove:function(){return a&&v.each(arguments,function(e,t){var n;while((n=v.inArray(t,a,n))>-1)a.splice(n,1),i&&(n<=o&&o--,n<=u&&u--)}),this},has:function(e){return v.inArray(e,a)>-1},empty:function(){return a=[],this},disable:function(){return a=f=n=t,this},disabled:function(){return!a},lock:function(){return f=t,n||c.disable(),this},locked:function(){return!f},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],a&&(!r||f)&&(i?f.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},v.extend({Deferred:function(e){var t=[["resolve","done",v.Callbacks("once memory"),"resolved"],["reject","fail",v.Callbacks("once memory"),"rejected"],["notify","progress",v.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return v.Deferred(function(n){v.each(t,function(t,r){var s=r[0],o=e[t];i[r[1]](v.isFunction(o)?function(){var e=o.apply(this,arguments);e&&v.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===i?n:this,[e])}:n[s])}),e=null}).promise()},promise:function(e){return e!=null?v.extend(e,r):r}},i={};return r.pipe=r.then,v.each(t,function(e,s){var o=s[2],u=s[3];r[s[1]]=o.add,u&&o.add(function(){n=u},t[e^1][2].disable,t[2][2].lock),i[s[0]]=o.fire,i[s[0]+"With"]=o.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=l.call(arguments),r=n.length,i=r!==1||e&&v.isFunction(e.promise)?r:0,s=i===1?e:v.Deferred(),o=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?l.call(arguments):r,n===u?s.notifyWith(t,n):--i||s.resolveWith(t,n)}},u,a,f;if(r>1){u=new Array(r),a=new Array(r),f=new Array(r);for(;t<r;t++)n[t]&&v.isFunction(n[t].promise)?n[t].promise().done(o(t,f,n)).fail(s.reject).progress(o(t,a,u)):--i}return i||s.resolveWith(f,n),s.promise()}}),v.support=function(){var t,n,r,s,o,u,a,f,l,c,h,p=i.createElement("div");p.setAttribute("className","t"),p.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=p.getElementsByTagName("*"),r=p.getElementsByTagName("a")[0];if(!n||!r||!n.length)return{};s=i.createElement("select"),o=s.appendChild(i.createElement("option")),u=p.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:r.getAttribute("href")==="/a",opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:u.value==="on",optSelected:o.selected,getSetAttribute:p.className!=="t",enctype:!!i.createElement("form").enctype,html5Clone:i.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:i.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},u.checked=!0,t.noCloneChecked=u.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!o.disabled;try{delete p.test}catch(d){t.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",h=function(){t.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick"),p.detachEvent("onclick",h)),u=i.createElement("input"),u.value="t",u.setAttribute("type","radio"),t.radioValue=u.value==="t",u.setAttribute("checked","checked"),u.setAttribute("name","t"),p.appendChild(u),a=i.createDocumentFragment(),a.appendChild(p.lastChild),t.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,t.appendChecked=u.checked,a.removeChild(u),a.appendChild(p);if(p.attachEvent)for(l in{submit:!0,change:!0,focusin:!0})f="on"+l,c=f in p,c||(p.setAttribute(f,"return;"),c=typeof p[f]=="function"),t[l+"Bubbles"]=c;return v(function(){var n,r,s,o,u="padding:0;margin:0;border:0;display:block;overflow:hidden;",a=i.getElementsByTagName("body")[0];if(!a)return;n=i.createElement("div"),n.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",a.insertBefore(n,a.firstChild),r=i.createElement("div"),n.appendChild(r),r.innerHTML="<table><tr><td></td><td>t</td></tr></table>",s=r.getElementsByTagName("td"),s[0].style.cssText="padding:0;margin:0;border:0;display:none",c=s[0].offsetHeight===0,s[0].style.display="",s[1].style.display="none",t.reliableHiddenOffsets=c&&s[0].offsetHeight===0,r.innerHTML="",r.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=r.offsetWidth===4,t.doesNotIncludeMarginInBodyOffset=a.offsetTop!==1,e.getComputedStyle&&(t.pixelPosition=(e.getComputedStyle(r,null)||{}).top!=="1%",t.boxSizingReliable=(e.getComputedStyle(r,null)||{width:"4px"}).width==="4px",o=i.createElement("div"),o.style.cssText=r.style.cssText=u,o.style.marginRight=o.style.width="0",r.style.width="1px",r.appendChild(o),t.reliableMarginRight=!parseFloat((e.getComputedStyle(o,null)||{}).marginRight)),typeof r.style.zoom!="undefined"&&(r.innerHTML="",r.style.cssText=u+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=r.offsetWidth===3,r.style.display="block",r.style.overflow="visible",r.innerHTML="<div></div>",r.firstChild.style.width="5px",t.shrinkWrapBlocks=r.offsetWidth!==3,n.style.zoom=1),a.removeChild(n),n=r=s=o=null}),a.removeChild(p),n=r=s=o=u=a=p=null,t}();var D=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;v.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(v.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?v.cache[e[v.expando]]:e[v.expando],!!e&&!B(e)},data:function(e,n,r,i){if(!v.acceptData(e))return;var s,o,u=v.expando,a=typeof n=="string",f=e.nodeType,l=f?v.cache:e,c=f?e[u]:e[u]&&u;if((!c||!l[c]||!i&&!l[c].data)&&a&&r===t)return;c||(f?e[u]=c=v.deletedIds.pop()||v.guid++:c=u),l[c]||(l[c]={},f||(l[c].toJSON=v.noop));if(typeof n=="object"||typeof n=="function")i?l[c]=v.extend(l[c],n):l[c].data=v.extend(l[c].data,n);return s=l[c],i||(s.data||(s.data={}),s=s.data),r!==t&&(s[v.camelCase(n)]=r),a?(o=s[n],o==null&&(o=s[v.camelCase(n)])):o=s,o},removeData:function(e,t,n){if(!v.acceptData(e))return;var r,i,s,o=e.nodeType,u=o?v.cache:e,a=o?e[v.expando]:v.expando;if(!u[a])return;if(t){r=n?u[a]:u[a].data;if(r){v.isArray(t)||(t in r?t=[t]:(t=v.camelCase(t),t in r?t=[t]:t=t.split(" ")));for(i=0,s=t.length;i<s;i++)delete r[t[i]];if(!(n?B:v.isEmptyObject)(r))return}}if(!n){delete u[a].data;if(!B(u[a]))return}o?v.cleanData([e],!0):v.support.deleteExpando||u!=u.window?delete u[a]:u[a]=null},_data:function(e,t,n){return v.data(e,t,n,!0)},acceptData:function(e){var t=e.nodeName&&v.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),v.fn.extend({data:function(e,n){var r,i,s,o,u,a=this[0],f=0,l=null;if(e===t){if(this.length){l=v.data(a);if(a.nodeType===1&&!v._data(a,"parsedAttrs")){s=a.attributes;for(u=s.length;f<u;f++)o=s[f].name,o.indexOf("data-")||(o=v.camelCase(o.substring(5)),H(a,o,l[o]));v._data(a,"parsedAttrs",!0)}}return l}return typeof e=="object"?this.each(function(){v.data(this,e)}):(r=e.split(".",2),r[1]=r[1]?"."+r[1]:"",i=r[1]+"!",v.access(this,function(n){if(n===t)return l=this.triggerHandler("getData"+i,[r[0]]),l===t&&a&&(l=v.data(a,e),l=H(a,e,l)),l===t&&r[1]?this.data(r[0]):l;r[1]=n,this.each(function(){var t=v(this);t.triggerHandler("setData"+i,r),v.data(this,e,n),t.triggerHandler("changeData"+i,r)})},null,n,arguments.length>1,null,!1))},removeData:function(e){return this.each(function(){v.removeData(this,e)})}}),v.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=v._data(e,t),n&&(!r||v.isArray(n)?r=v._data(e,t,v.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=v.queue(e,t),r=n.length,i=n.shift(),s=v._queueHooks(e,t),o=function(){v.dequeue(e,t)};i==="inprogress"&&(i=n.shift(),r--),i&&(t==="fx"&&n.unshift("inprogress"),delete s.stop,i.call(e,o,s)),!r&&s&&s.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return v._data(e,n)||v._data(e,n,{empty:v.Callbacks("once memory").add(function(){v.removeData(e,t+"queue",!0),v.removeData(e,n,!0)})})}}),v.fn.extend({queue:function(e,n){var r=2;return typeof e!="string"&&(n=e,e="fx",r--),arguments.length<r?v.queue(this[0],e):n===t?this:this.each(function(){var t=v.queue(this,e,n);v._queueHooks(this,e),e==="fx"&&t[0]!=="inprogress"&&v.dequeue(this,e)})},dequeue:function(e){return this.each(function(){v.dequeue(this,e)})},delay:function(e,t){return e=v.fx?v.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,s=v.Deferred(),o=this,u=this.length,a=function(){--i||s.resolveWith(o,[o])};typeof e!="string"&&(n=e,e=t),e=e||"fx";while(u--)r=v._data(o[u],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(a));return a(),s.promise(n)}});var j,F,I,q=/[\t\r\n]/g,R=/\r/g,U=/^(?:button|input)$/i,z=/^(?:button|input|object|select|textarea)$/i,W=/^a(?:rea|)$/i,X=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,V=v.support.getSetAttribute;v.fn.extend({attr:function(e,t){return v.access(this,v.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){v.removeAttr(this,e)})},prop:function(e,t){return v.access(this,v.prop,e,t,arguments.length>1)},removeProp:function(e){return e=v.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,s,o,u;if(v.isFunction(e))return this.each(function(t){v(this).addClass(e.call(this,t,this.className))});if(e&&typeof e=="string"){t=e.split(y);for(n=0,r=this.length;n<r;n++){i=this[n];if(i.nodeType===1)if(!i.className&&t.length===1)i.className=e;else{s=" "+i.className+" ";for(o=0,u=t.length;o<u;o++)s.indexOf(" "+t[o]+" ")<0&&(s+=t[o]+" ");i.className=v.trim(s)}}}return this},removeClass:function(e){var n,r,i,s,o,u,a;if(v.isFunction(e))return this.each(function(t){v(this).removeClass(e.call(this,t,this.className))});if(e&&typeof e=="string"||e===t){n=(e||"").split(y);for(u=0,a=this.length;u<a;u++){i=this[u];if(i.nodeType===1&&i.className){r=(" "+i.className+" ").replace(q," ");for(s=0,o=n.length;s<o;s++)while(r.indexOf(" "+n[s]+" ")>=0)r=r.replace(" "+n[s]+" "," ");i.className=e?v.trim(r):""}}}return this},toggleClass:function(e,t){var n=typeof e,r=typeof t=="boolean";return v.isFunction(e)?this.each(function(n){v(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if(n==="string"){var i,s=0,o=v(this),u=t,a=e.split(y);while(i=a[s++])u=r?u:!o.hasClass(i),o[u?"addClass":"removeClass"](i)}else if(n==="undefined"||n==="boolean")this.className&&v._data(this,"__className__",this.className),this.className=this.className||e===!1?"":v._data(this,"__className__")||""})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;n<r;n++)if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(q," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,s=this[0];if(!arguments.length){if(s)return n=v.valHooks[s.type]||v.valHooks[s.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(s,"value"))!==t?r:(r=s.value,typeof r=="string"?r.replace(R,""):r==null?"":r);return}return i=v.isFunction(e),this.each(function(r){var s,o=v(this);if(this.nodeType!==1)return;i?s=e.call(this,r,o.val()):s=e,s==null?s="":typeof s=="number"?s+="":v.isArray(s)&&(s=v.map(s,function(e){return e==null?"":e+""})),n=v.valHooks[this.type]||v.valHooks[this.nodeName.toLowerCase()];if(!n||!("set"in n)||n.set(this,s,"value")===t)this.value=s})}}),v.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,s=e.type==="select-one"||i<0,o=s?null:[],u=s?i+1:r.length,a=i<0?u:s?i:0;for(;a<u;a++){n=r[a];if((n.selected||a===i)&&(v.support.optDisabled?!n.disabled:n.getAttribute("disabled")===null)&&(!n.parentNode.disabled||!v.nodeName(n.parentNode,"optgroup"))){t=v(n).val();if(s)return t;o.push(t)}}return o},set:function(e,t){var n=v.makeArray(t);return v(e).find("option").each(function(){this.selected=v.inArray(v(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attrFn:{},attr:function(e,n,r,i){var s,o,u,a=e.nodeType;if(!e||a===3||a===8||a===2)return;if(i&&v.isFunction(v.fn[n]))return v(e)[n](r);if(typeof e.getAttribute=="undefined")return v.prop(e,n,r);u=a!==1||!v.isXMLDoc(e),u&&(n=n.toLowerCase(),o=v.attrHooks[n]||(X.test(n)?F:j));if(r!==t){if(r===null){v.removeAttr(e,n);return}return o&&"set"in o&&u&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r)}return o&&"get"in o&&u&&(s=o.get(e,n))!==null?s:(s=e.getAttribute(n),s===null?t:s)},removeAttr:function(e,t){var n,r,i,s,o=0;if(t&&e.nodeType===1){r=t.split(y);for(;o<r.length;o++)i=r[o],i&&(n=v.propFix[i]||i,s=X.test(i),s||v.attr(e,i,""),e.removeAttribute(V?i:n),s&&n in e&&(e[n]=!1))}},attrHooks:{type:{set:function(e,t){if(U.test(e.nodeName)&&e.parentNode)v.error("type property can't be changed");else if(!v.support.radioValue&&t==="radio"&&v.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}},value:{get:function(e,t){return j&&v.nodeName(e,"button")?j.get(e,t):t in e?e.value:null},set:function(e,t,n){if(j&&v.nodeName(e,"button"))return j.set(e,t,n);e.value=t}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,s,o,u=e.nodeType;if(!e||u===3||u===8||u===2)return;return o=u!==1||!v.isXMLDoc(e),o&&(n=v.propFix[n]||n,s=v.propHooks[n]),r!==t?s&&"set"in s&&(i=s.set(e,r,n))!==t?i:e[n]=r:s&&"get"in s&&(i=s.get(e,n))!==null?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):z.test(e.nodeName)||W.test(e.nodeName)&&e.href?0:t}}}}),F={get:function(e,n){var r,i=v.prop(e,n);return i===!0||typeof i!="boolean"&&(r=e.getAttributeNode(n))&&r.nodeValue!==!1?n.toLowerCase():t},set:function(e,t,n){var r;return t===!1?v.removeAttr(e,n):(r=v.propFix[n]||n,r in e&&(e[r]=!0),e.setAttribute(n,n.toLowerCase())),n}},V||(I={name:!0,id:!0,coords:!0},j=v.valHooks.button={get:function(e,n){var r;return r=e.getAttributeNode(n),r&&(I[n]?r.value!=="":r.specified)?r.value:t},set:function(e,t,n){var r=e.getAttributeNode(n);return r||(r=i.createAttribute(n),e.setAttributeNode(r)),r.value=t+""}},v.each(["width","height"],function(e,t){v.attrHooks[t]=v.extend(v.attrHooks[t],{set:function(e,n){if(n==="")return e.setAttribute(t,"auto"),n}})}),v.attrHooks.contenteditable={get:j.get,set:function(e,t,n){t===""&&(t="false"),j.set(e,t,n)}}),v.support.hrefNormalized||v.each(["href","src","width","height"],function(e,n){v.attrHooks[n]=v.extend(v.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return r===null?t:r}})}),v.support.style||(v.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||t},set:function(e,t){return e.style.cssText=t+""}}),v.support.optSelected||(v.propHooks.selected=v.extend(v.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),v.support.enctype||(v.propFix.enctype="encoding"),v.support.checkOn||v.each(["radio","checkbox"],function(){v.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value}}}),v.each(["radio","checkbox"],function(){v.valHooks[this]=v.extend(v.valHooks[this],{set:function(e,t){if(v.isArray(t))return e.checked=v.inArray(v(e).val(),t)>=0}})});var $=/^(?:textarea|input|select)$/i,J=/^([^\.]*|)(?:\.(.+)|)$/,K=/(?:^|\s)hover(\.\S+|)\b/,Q=/^key/,G=/^(?:mouse|contextmenu)|click/,Y=/^(?:focusinfocus|focusoutblur)$/,Z=function(e){return v.event.special.hover?e:e.replace(K,"mouseenter$1 mouseleave$1")};v.event={add:function(e,n,r,i,s){var o,u,a,f,l,c,h,p,d,m,g;if(e.nodeType===3||e.nodeType===8||!n||!r||!(o=v._data(e)))return;r.handler&&(d=r,r=d.handler,s=d.selector),r.guid||(r.guid=v.guid++),a=o.events,a||(o.events=a={}),u=o.handle,u||(o.handle=u=function(e){return typeof v=="undefined"||!!e&&v.event.triggered===e.type?t:v.event.dispatch.apply(u.elem,arguments)},u.elem=e),n=v.trim(Z(n)).split(" ");for(f=0;f<n.length;f++){l=J.exec(n[f])||[],c=l[1],h=(l[2]||"").split(".").sort(),g=v.event.special[c]||{},c=(s?g.delegateType:g.bindType)||c,g=v.event.special[c]||{},p=v.extend({type:c,origType:l[1],data:i,handler:r,guid:r.guid,selector:s,needsContext:s&&v.expr.match.needsContext.test(s),namespace:h.join(".")},d),m=a[c];if(!m){m=a[c]=[],m.delegateCount=0;if(!g.setup||g.setup.call(e,i,h,u)===!1)e.addEventListener?e.addEventListener(c,u,!1):e.attachEvent&&e.attachEvent("on"+c,u)}g.add&&(g.add.call(e,p),p.handler.guid||(p.handler.guid=r.guid)),s?m.splice(m.delegateCount++,0,p):m.push(p),v.event.global[c]=!0}e=null},global:{},remove:function(e,t,n,r,i){var s,o,u,a,f,l,c,h,p,d,m,g=v.hasData(e)&&v._data(e);if(!g||!(h=g.events))return;t=v.trim(Z(t||"")).split(" ");for(s=0;s<t.length;s++){o=J.exec(t[s])||[],u=a=o[1],f=o[2];if(!u){for(u in h)v.event.remove(e,u+t[s],n,r,!0);continue}p=v.event.special[u]||{},u=(r?p.delegateType:p.bindType)||u,d=h[u]||[],l=d.length,f=f?new RegExp("(^|\\.)"+f.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(c=0;c<d.length;c++)m=d[c],(i||a===m.origType)&&(!n||n.guid===m.guid)&&(!f||f.test(m.namespace))&&(!r||r===m.selector||r==="**"&&m.selector)&&(d.splice(c--,1),m.selector&&d.delegateCount--,p.remove&&p.remove.call(e,m));d.length===0&&l!==d.length&&((!p.teardown||p.teardown.call(e,f,g.handle)===!1)&&v.removeEvent(e,u,g.handle),delete h[u])}v.isEmptyObject(h)&&(delete g.handle,v.removeData(e,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(n,r,s,o){if(!s||s.nodeType!==3&&s.nodeType!==8){var u,a,f,l,c,h,p,d,m,g,y=n.type||n,b=[];if(Y.test(y+v.event.triggered))return;y.indexOf("!")>=0&&(y=y.slice(0,-1),a=!0),y.indexOf(".")>=0&&(b=y.split("."),y=b.shift(),b.sort());if((!s||v.event.customEvent[y])&&!v.event.global[y])return;n=typeof n=="object"?n[v.expando]?n:new v.Event(y,n):new v.Event(y),n.type=y,n.isTrigger=!0,n.exclusive=a,n.namespace=b.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,h=y.indexOf(":")<0?"on"+y:"";if(!s){u=v.cache;for(f in u)u[f].events&&u[f].events[y]&&v.event.trigger(n,r,u[f].handle.elem,!0);return}n.result=t,n.target||(n.target=s),r=r!=null?v.makeArray(r):[],r.unshift(n),p=v.event.special[y]||{};if(p.trigger&&p.trigger.apply(s,r)===!1)return;m=[[s,p.bindType||y]];if(!o&&!p.noBubble&&!v.isWindow(s)){g=p.delegateType||y,l=Y.test(g+y)?s:s.parentNode;for(c=s;l;l=l.parentNode)m.push([l,g]),c=l;c===(s.ownerDocument||i)&&m.push([c.defaultView||c.parentWindow||e,g])}for(f=0;f<m.length&&!n.isPropagationStopped();f++)l=m[f][0],n.type=m[f][1],d=(v._data(l,"events")||{})[n.type]&&v._data(l,"handle"),d&&d.apply(l,r),d=h&&l[h],d&&v.acceptData(l)&&d.apply&&d.apply(l,r)===!1&&n.preventDefault();return n.type=y,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(s.ownerDocument,r)===!1)&&(y!=="click"||!v.nodeName(s,"a"))&&v.acceptData(s)&&h&&s[y]&&(y!=="focus"&&y!=="blur"||n.target.offsetWidth!==0)&&!v.isWindow(s)&&(c=s[h],c&&(s[h]=null),v.event.triggered=y,s[y](),v.event.triggered=t,c&&(s[h]=c)),n.result}return},dispatch:function(n){n=v.event.fix(n||e.event);var r,i,s,o,u,a,f,c,h,p,d=(v._data(this,"events")||{})[n.type]||[],m=d.delegateCount,g=l.call(arguments),y=!n.exclusive&&!n.namespace,b=v.event.special[n.type]||{},w=[];g[0]=n,n.delegateTarget=this;if(b.preDispatch&&b.preDispatch.call(this,n)===!1)return;if(m&&(!n.button||n.type!=="click"))for(s=n.target;s!=this;s=s.parentNode||this)if(s.disabled!==!0||n.type!=="click"){u={},f=[];for(r=0;r<m;r++)c=d[r],h=c.selector,u[h]===t&&(u[h]=c.needsContext?v(h,this).index(s)>=0:v.find(h,this,null,[s]).length),u[h]&&f.push(c);f.length&&w.push({elem:s,matches:f})}d.length>m&&w.push({elem:this,matches:d.slice(m)});for(r=0;r<w.length&&!n.isPropagationStopped();r++){a=w[r],n.currentTarget=a.elem;for(i=0;i<a.matches.length&&!n.isImmediatePropagationStopped();i++){c=a.matches[i];if(y||!n.namespace&&!c.namespace||n.namespace_re&&n.namespace_re.test(c.namespace))n.data=c.data,n.handleObj=c,o=((v.event.special[c.origType]||{}).handle||c.handler).apply(a.elem,g),o!==t&&(n.result=o,o===!1&&(n.preventDefault(),n.stopPropagation()))}}return b.postDispatch&&b.postDispatch.call(this,n),n.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return e.which==null&&(e.which=t.charCode!=null?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,s,o,u=n.button,a=n.fromElement;return e.pageX==null&&n.clientX!=null&&(r=e.target.ownerDocument||i,s=r.documentElement,o=r.body,e.pageX=n.clientX+(s&&s.scrollLeft||o&&o.scrollLeft||0)-(s&&s.clientLeft||o&&o.clientLeft||0),e.pageY=n.clientY+(s&&s.scrollTop||o&&o.scrollTop||0)-(s&&s.clientTop||o&&o.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?n.toElement:a),!e.which&&u!==t&&(e.which=u&1?1:u&2?3:u&4?2:0),e}},fix:function(e){if(e[v.expando])return e;var t,n,r=e,s=v.event.fixHooks[e.type]||{},o=s.props?this.props.concat(s.props):this.props;e=v.Event(r);for(t=o.length;t;)n=o[--t],e[n]=r[n];return e.target||(e.target=r.srcElement||i),e.target.nodeType===3&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,r):e},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(e,t,n){v.isWindow(this)&&(this.onbeforeunload=n)},teardown:function(e,t){this.onbeforeunload===t&&(this.onbeforeunload=null)}}},simulate:function(e,t,n,r){var i=v.extend(new v.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?v.event.trigger(i,null,t):v.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},v.event.handle=v.event.dispatch,v.removeEvent=i.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]=="undefined"&&(e[r]=null),e.detachEvent(r,n))},v.Event=function(e,t){if(!(this instanceof v.Event))return new v.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?tt:et):this.type=e,t&&v.extend(this,t),this.timeStamp=e&&e.timeStamp||v.now(),this[v.expando]=!0},v.Event.prototype={preventDefault:function(){this.isDefaultPrevented=tt;var e=this.originalEvent;if(!e)return;e.preventDefault?e.preventDefault():e.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=tt;var e=this.originalEvent;if(!e)return;e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=tt,this.stopPropagation()},isDefaultPrevented:et,isPropagationStopped:et,isImmediatePropagationStopped:et},v.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){v.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,s=e.handleObj,o=s.selector;if(!i||i!==r&&!v.contains(r,i))e.type=s.origType,n=s.handler.apply(this,arguments),e.type=t;return n}}}),v.support.submitBubbles||(v.event.special.submit={setup:function(){if(v.nodeName(this,"form"))return!1;v.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=v.nodeName(n,"input")||v.nodeName(n,"button")?n.form:t;r&&!v._data(r,"_submit_attached")&&(v.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),v._data(r,"_submit_attached",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&v.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){if(v.nodeName(this,"form"))return!1;v.event.remove(this,"._submit")}}),v.support.changeBubbles||(v.event.special.change={setup:function(){if($.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")v.event.add(this,"propertychange._change",function(e){e.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),v.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),v.event.simulate("change",this,e,!0)});return!1}v.event.add(this,"beforeactivate._change",function(e){var t=e.target;$.test(t.nodeName)&&!v._data(t,"_change_attached")&&(v.event.add(t,"change._change",function(e){this.parentNode&&!e.isSimulated&&!e.isTrigger&&v.event.simulate("change",this.parentNode,e,!0)}),v._data(t,"_change_attached",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||t.type!=="radio"&&t.type!=="checkbox")return e.handleObj.handler.apply(this,arguments)},teardown:function(){return v.event.remove(this,"._change"),!$.test(this.nodeName)}}),v.support.focusinBubbles||v.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){v.event.simulate(t,e.target,v.event.fix(e),!0)};v.event.special[t]={setup:function(){n++===0&&i.addEventListener(e,r,!0)},teardown:function(){--n===0&&i.removeEventListener(e,r,!0)}}}),v.fn.extend({on:function(e,n,r,i,s){var o,u;if(typeof e=="object"){typeof n!="string"&&(r=r||n,n=t);for(u in e)this.on(u,n,r,e[u],s);return this}r==null&&i==null?(i=n,r=n=t):i==null&&(typeof n=="string"?(i=r,r=t):(i=r,r=n,n=t));if(i===!1)i=et;else if(!i)return this;return s===1&&(o=i,i=function(e){return v().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=v.guid++)),this.each(function(){v.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,s;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,v(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if(typeof e=="object"){for(s in e)this.off(s,n,e[s]);return this}if(n===!1||typeof n=="function")r=n,n=t;return r===!1&&(r=et),this.each(function(){v.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},live:function(e,t,n){return v(this.context).on(e,this.selector,t,n),this},die:function(e,t){return v(this.context).off(e,this.selector||"**",t),this},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){v.event.trigger(e,t,this)})},triggerHandler:function(e,t){if(this[0])return v.event.trigger(e,t,this[0],!0)},toggle:function(e){var t=arguments,n=e.guid||v.guid++,r=0,i=function(n){var i=(v._data(this,"lastToggle"+e.guid)||0)%r;return v._data(this,"lastToggle"+e.guid,i+1),n.preventDefault(),t[i].apply(this,arguments)||!1};i.guid=n;while(r<t.length)t[r++].guid=n;return this.click(i)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){v.fn[t]=function(e,n){return n==null&&(n=e,e=null),arguments.length>0?this.on(t,null,e,n):this.trigger(t)},Q.test(t)&&(v.event.fixHooks[t]=v.event.keyHooks),G.test(t)&&(v.event.fixHooks[t]=v.event.mouseHooks)}),function(e,t){function nt(e,t,n,r){n=n||[],t=t||g;var i,s,a,f,l=t.nodeType;if(!e||typeof e!="string")return n;if(l!==1&&l!==9)return[];a=o(t);if(!a&&!r)if(i=R.exec(e))if(f=i[1]){if(l===9){s=t.getElementById(f);if(!s||!s.parentNode)return n;if(s.id===f)return n.push(s),n}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(f))&&u(t,s)&&s.id===f)return n.push(s),n}else{if(i[2])return S.apply(n,x.call(t.getElementsByTagName(e),0)),n;if((f=i[3])&&Z&&t.getElementsByClassName)return S.apply(n,x.call(t.getElementsByClassName(f),0)),n}return vt(e.replace(j,"$1"),t,n,r,a)}function rt(e){return function(t){var n=t.nodeName.toLowerCase();return n==="input"&&t.type===e}}function it(e){return function(t){var n=t.nodeName.toLowerCase();return(n==="input"||n==="button")&&t.type===e}}function st(e){return N(function(t){return t=+t,N(function(n,r){var i,s=e([],n.length,t),o=s.length;while(o--)n[i=s[o]]&&(n[i]=!(r[i]=n[i]))})})}function ot(e,t,n){if(e===t)return n;var r=e.nextSibling;while(r){if(r===t)return-1;r=r.nextSibling}return 1}function ut(e,t){var n,r,s,o,u,a,f,l=L[d][e+" "];if(l)return t?0:l.slice(0);u=e,a=[],f=i.preFilter;while(u){if(!n||(r=F.exec(u)))r&&(u=u.slice(r[0].length)||u),a.push(s=[]);n=!1;if(r=I.exec(u))s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=r[0].replace(j," ");for(o in i.filter)(r=J[o].exec(u))&&(!f[o]||(r=f[o](r)))&&(s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=o,n.matches=r);if(!n)break}return t?u.length:u?nt.error(e):L(e,a).slice(0)}function at(e,t,r){var i=t.dir,s=r&&t.dir==="parentNode",o=w++;return t.first?function(t,n,r){while(t=t[i])if(s||t.nodeType===1)return e(t,n,r)}:function(t,r,u){if(!u){var a,f=b+" "+o+" ",l=f+n;while(t=t[i])if(s||t.nodeType===1){if((a=t[d])===l)return t.sizset;if(typeof a=="string"&&a.indexOf(f)===0){if(t.sizset)return t}else{t[d]=l;if(e(t,r,u))return t.sizset=!0,t;t.sizset=!1}}}else while(t=t[i])if(s||t.nodeType===1)if(e(t,r,u))return t}}function ft(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function lt(e,t,n,r,i){var s,o=[],u=0,a=e.length,f=t!=null;for(;u<a;u++)if(s=e[u])if(!n||n(s,r,i))o.push(s),f&&t.push(u);return o}function ct(e,t,n,r,i,s){return r&&!r[d]&&(r=ct(r)),i&&!i[d]&&(i=ct(i,s)),N(function(s,o,u,a){var f,l,c,h=[],p=[],d=o.length,v=s||dt(t||"*",u.nodeType?[u]:u,[]),m=e&&(s||!t)?lt(v,h,e,u,a):v,g=n?i||(s?e:d||r)?[]:o:m;n&&n(m,g,u,a);if(r){f=lt(g,p),r(f,[],u,a),l=f.length;while(l--)if(c=f[l])g[p[l]]=!(m[p[l]]=c)}if(s){if(i||e){if(i){f=[],l=g.length;while(l--)(c=g[l])&&f.push(m[l]=c);i(null,g=[],f,a)}l=g.length;while(l--)(c=g[l])&&(f=i?T.call(s,c):h[l])>-1&&(s[f]=!(o[f]=c))}}else g=lt(g===o?g.splice(d,g.length):g),i?i(null,o,g,a):S.apply(o,g)})}function ht(e){var t,n,r,s=e.length,o=i.relative[e[0].type],u=o||i.relative[" "],a=o?1:0,f=at(function(e){return e===t},u,!0),l=at(function(e){return T.call(t,e)>-1},u,!0),h=[function(e,n,r){return!o&&(r||n!==c)||((t=n).nodeType?f(e,n,r):l(e,n,r))}];for(;a<s;a++)if(n=i.relative[e[a].type])h=[at(ft(h),n)];else{n=i.filter[e[a].type].apply(null,e[a].matches);if(n[d]){r=++a;for(;r<s;r++)if(i.relative[e[r].type])break;return ct(a>1&&ft(h),a>1&&e.slice(0,a-1).join("").replace(j,"$1"),n,a<r&&ht(e.slice(a,r)),r<s&&ht(e=e.slice(r)),r<s&&e.join(""))}h.push(n)}return ft(h)}function pt(e,t){var r=t.length>0,s=e.length>0,o=function(u,a,f,l,h){var p,d,v,m=[],y=0,w="0",x=u&&[],T=h!=null,N=c,C=u||s&&i.find.TAG("*",h&&a.parentNode||a),k=b+=N==null?1:Math.E;T&&(c=a!==g&&a,n=o.el);for(;(p=C[w])!=null;w++){if(s&&p){for(d=0;v=e[d];d++)if(v(p,a,f)){l.push(p);break}T&&(b=k,n=++o.el)}r&&((p=!v&&p)&&y--,u&&x.push(p))}y+=w;if(r&&w!==y){for(d=0;v=t[d];d++)v(x,m,a,f);if(u){if(y>0)while(w--)!x[w]&&!m[w]&&(m[w]=E.call(l));m=lt(m)}S.apply(l,m),T&&!u&&m.length>0&&y+t.length>1&&nt.uniqueSort(l)}return T&&(b=k,c=N),x};return o.el=0,r?N(o):o}function dt(e,t,n){var r=0,i=t.length;for(;r<i;r++)nt(e,t[r],n);return n}function vt(e,t,n,r,s){var o,u,f,l,c,h=ut(e),p=h.length;if(!r&&h.length===1){u=h[0]=h[0].slice(0);if(u.length>2&&(f=u[0]).type==="ID"&&t.nodeType===9&&!s&&i.relative[u[1].type]){t=i.find.ID(f.matches[0].replace($,""),t,s)[0];if(!t)return n;e=e.slice(u.shift().length)}for(o=J.POS.test(e)?-1:u.length-1;o>=0;o--){f=u[o];if(i.relative[l=f.type])break;if(c=i.find[l])if(r=c(f.matches[0].replace($,""),z.test(u[0].type)&&t.parentNode||t,s)){u.splice(o,1),e=r.length&&u.join("");if(!e)return S.apply(n,x.call(r,0)),n;break}}}return a(e,h)(r,t,s,n,z.test(e)),n}function mt(){}var n,r,i,s,o,u,a,f,l,c,h=!0,p="undefined",d=("sizcache"+Math.random()).replace(".",""),m=String,g=e.document,y=g.documentElement,b=0,w=0,E=[].pop,S=[].push,x=[].slice,T=[].indexOf||function(e){var t=0,n=this.length;for(;t<n;t++)if(this[t]===e)return t;return-1},N=function(e,t){return e[d]=t==null||t,e},C=function(){var e={},t=[];return N(function(n,r){return t.push(n)>i.cacheLength&&delete e[t.shift()],e[n+" "]=r},e)},k=C(),L=C(),A=C(),O="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",_=M.replace("w","w#"),D="([*^$|!~]?=)",P="\\["+O+"*("+M+")"+O+"*(?:"+D+O+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+_+")|)|)"+O+"*\\]",H=":("+M+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+P+")|[^:]|\\\\.)*|.*))\\)|)",B=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+O+"*((?:-\\d)?\\d*)"+O+"*\\)|)(?=[^-]|$)",j=new RegExp("^"+O+"+|((?:^|[^\\\\])(?:\\\\.)*)"+O+"+$","g"),F=new RegExp("^"+O+"*,"+O+"*"),I=new RegExp("^"+O+"*([\\x20\\t\\r\\n\\f>+~])"+O+"*"),q=new RegExp(H),R=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,U=/^:not/,z=/[\x20\t\r\n\f]*[+~]/,W=/:not\($/,X=/h\d/i,V=/input|select|textarea|button/i,$=/\\(?!\\)/g,J={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),NAME:new RegExp("^\\[name=['\"]?("+M+")['\"]?\\]"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+H),POS:new RegExp(B,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+O+"*(even|odd|(([+-]|)(\\d*)n|)"+O+"*(?:([+-]|)"+O+"*(\\d+)|))"+O+"*\\)|)","i"),needsContext:new RegExp("^"+O+"*[>+~]|"+B,"i")},K=function(e){var t=g.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}},Q=K(function(e){return e.appendChild(g.createComment("")),!e.getElementsByTagName("*").length}),G=K(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==p&&e.firstChild.getAttribute("href")==="#"}),Y=K(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return t!=="boolean"&&t!=="string"}),Z=K(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!e.getElementsByClassName||!e.getElementsByClassName("e").length?!1:(e.lastChild.className="e",e.getElementsByClassName("e").length===2)}),et=K(function(e){e.id=d+0,e.innerHTML="<a name='"+d+"'></a><div name='"+d+"'></div>",y.insertBefore(e,y.firstChild);var t=g.getElementsByName&&g.getElementsByName(d).length===2+g.getElementsByName(d+0).length;return r=!g.getElementById(d),y.removeChild(e),t});try{x.call(y.childNodes,0)[0].nodeType}catch(tt){x=function(e){var t,n=[];for(;t=this[e];e++)n.push(t);return n}}nt.matches=function(e,t){return nt(e,null,null,t)},nt.matchesSelector=function(e,t){return nt(t,null,null,[e]).length>0},s=nt.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(i===1||i===9||i===11){if(typeof e.textContent=="string")return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=s(e)}else if(i===3||i===4)return e.nodeValue}else for(;t=e[r];r++)n+=s(t);return n},o=nt.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?t.nodeName!=="HTML":!1},u=nt.contains=y.contains?function(e,t){var n=e.nodeType===9?e.documentElement:e,r=t&&t.parentNode;return e===r||!!(r&&r.nodeType===1&&n.contains&&n.contains(r))}:y.compareDocumentPosition?function(e,t){return t&&!!(e.compareDocumentPosition(t)&16)}:function(e,t){while(t=t.parentNode)if(t===e)return!0;return!1},nt.attr=function(e,t){var n,r=o(e);return r||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):r||Y?e.getAttribute(t):(n=e.getAttributeNode(t),n?typeof e[t]=="boolean"?e[t]?t:null:n.specified?n.value:null:null)},i=nt.selectors={cacheLength:50,createPseudo:N,match:J,attrHandle:G?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},find:{ID:r?function(e,t,n){if(typeof t.getElementById!==p&&!n){var r=t.getElementById(e);return r&&r.parentNode?[r]:[]}}:function(e,n,r){if(typeof n.getElementById!==p&&!r){var i=n.getElementById(e);return i?i.id===e||typeof i.getAttributeNode!==p&&i.getAttributeNode("id").value===e?[i]:t:[]}},TAG:Q?function(e,t){if(typeof t.getElementsByTagName!==p)return t.getElementsByTagName(e)}:function(e,t){var n=t.getElementsByTagName(e);if(e==="*"){var r,i=[],s=0;for(;r=n[s];s++)r.nodeType===1&&i.push(r);return i}return n},NAME:et&&function(e,t){if(typeof t.getElementsByName!==p)return t.getElementsByName(name)},CLASS:Z&&function(e,t,n){if(typeof t.getElementsByClassName!==p&&!n)return t.getElementsByClassName(e)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace($,""),e[3]=(e[4]||e[5]||"").replace($,""),e[2]==="~="&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),e[1]==="nth"?(e[2]||nt.error(e[0]),e[3]=+(e[3]?e[4]+(e[5]||1):2*(e[2]==="even"||e[2]==="odd")),e[4]=+(e[6]+e[7]||e[2]==="odd")):e[2]&&nt.error(e[0]),e},PSEUDO:function(e){var t,n;if(J.CHILD.test(e[0]))return null;if(e[3])e[2]=e[3];else if(t=e[4])q.test(t)&&(n=ut(t,!0))&&(n=t.indexOf(")",t.length-n)-t.length)&&(t=t.slice(0,n),e[0]=e[0].slice(0,n)),e[2]=t;return e.slice(0,3)}},filter:{ID:r?function(e){return e=e.replace($,""),function(t){return t.getAttribute("id")===e}}:function(e){return e=e.replace($,""),function(t){var n=typeof t.getAttributeNode!==p&&t.getAttributeNode("id");return n&&n.value===e}},TAG:function(e){return e==="*"?function(){return!0}:(e=e.replace($,"").toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[d][e+" "];return t||(t=new RegExp("(^|"+O+")"+e+"("+O+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==p&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r,i){var s=nt.attr(r,e);return s==null?t==="!=":t?(s+="",t==="="?s===n:t==="!="?s!==n:t==="^="?n&&s.indexOf(n)===0:t==="*="?n&&s.indexOf(n)>-1:t==="$="?n&&s.substr(s.length-n.length)===n:t==="~="?(" "+s+" ").indexOf(n)>-1:t==="|="?s===n||s.substr(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r){return e==="nth"?function(e){var t,i,s=e.parentNode;if(n===1&&r===0)return!0;if(s){i=0;for(t=s.firstChild;t;t=t.nextSibling)if(t.nodeType===1){i++;if(e===t)break}}return i-=r,i===n||i%n===0&&i/n>=0}:function(t){var n=t;switch(e){case"only":case"first":while(n=n.previousSibling)if(n.nodeType===1)return!1;if(e==="first")return!0;n=t;case"last":while(n=n.nextSibling)if(n.nodeType===1)return!1;return!0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||nt.error("unsupported pseudo: "+e);return r[d]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?N(function(e,n){var i,s=r(e,t),o=s.length;while(o--)i=T.call(e,s[o]),e[i]=!(n[i]=s[o])}):function(e){return r(e,0,n)}):r}},pseudos:{not:N(function(e){var t=[],n=[],r=a(e.replace(j,"$1"));return r[d]?N(function(e,t,n,i){var s,o=r(e,null,i,[]),u=e.length;while(u--)if(s=o[u])e[u]=!(t[u]=s)}):function(e,i,s){return t[0]=e,r(t,null,s,n),!n.pop()}}),has:N(function(e){return function(t){return nt(e,t).length>0}}),contains:N(function(e){return function(t){return(t.textContent||t.innerText||s(t)).indexOf(e)>-1}}),enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&!!e.checked||t==="option"&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},parent:function(e){return!i.pseudos.empty(e)},empty:function(e){var t;e=e.firstChild;while(e){if(e.nodeName>"@"||(t=e.nodeType)===3||t===4)return!1;e=e.nextSibling}return!0},header:function(e){return X.test(e.nodeName)},text:function(e){var t,n;return e.nodeName.toLowerCase()==="input"&&(t=e.type)==="text"&&((n=e.getAttribute("type"))==null||n.toLowerCase()===t)},radio:rt("radio"),checkbox:rt("checkbox"),file:rt("file"),password:rt("password"),image:rt("image"),submit:it("submit"),reset:it("reset"),button:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&e.type==="button"||t==="button"},input:function(e){return V.test(e.nodeName)},focus:function(e){var t=e.ownerDocument;return e===t.activeElement&&(!t.hasFocus||t.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},active:function(e){return e===e.ownerDocument.activeElement},first:st(function(){return[0]}),last:st(function(e,t){return[t-1]}),eq:st(function(e,t,n){return[n<0?n+t:n]}),even:st(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:st(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:st(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:st(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},f=y.compareDocumentPosition?function(e,t){return e===t?(l=!0,0):(!e.compareDocumentPosition||!t.compareDocumentPosition?e.compareDocumentPosition:e.compareDocumentPosition(t)&4)?-1:1}:function(e,t){if(e===t)return l=!0,0;if(e.sourceIndex&&t.sourceIndex)return e.sourceIndex-t.sourceIndex;var n,r,i=[],s=[],o=e.parentNode,u=t.parentNode,a=o;if(o===u)return ot(e,t);if(!o)return-1;if(!u)return 1;while(a)i.unshift(a),a=a.parentNode;a=u;while(a)s.unshift(a),a=a.parentNode;n=i.length,r=s.length;for(var f=0;f<n&&f<r;f++)if(i[f]!==s[f])return ot(i[f],s[f]);return f===n?ot(e,s[f],-1):ot(i[f],t,1)},[0,0].sort(f),h=!l,nt.uniqueSort=function(e){var t,n=[],r=1,i=0;l=h,e.sort(f);if(l){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e},nt.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},a=nt.compile=function(e,t){var n,r=[],i=[],s=A[d][e+" "];if(!s){t||(t=ut(e)),n=t.length;while(n--)s=ht(t[n]),s[d]?r.push(s):i.push(s);s=A(e,pt(i,r))}return s},g.querySelectorAll&&function(){var e,t=vt,n=/'|\\/g,r=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,i=[":focus"],s=[":active"],u=y.matchesSelector||y.mozMatchesSelector||y.webkitMatchesSelector||y.oMatchesSelector||y.msMatchesSelector;K(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||i.push("\\["+O+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||i.push(":checked")}),K(function(e){e.innerHTML="<p test=''></p>",e.querySelectorAll("[test^='']").length&&i.push("[*^$]="+O+"*(?:\"\"|'')"),e.innerHTML="<input type='hidden'/>",e.querySelectorAll(":enabled").length||i.push(":enabled",":disabled")}),i=new RegExp(i.join("|")),vt=function(e,r,s,o,u){if(!o&&!u&&!i.test(e)){var a,f,l=!0,c=d,h=r,p=r.nodeType===9&&e;if(r.nodeType===1&&r.nodeName.toLowerCase()!=="object"){a=ut(e),(l=r.getAttribute("id"))?c=l.replace(n,"\\$&"):r.setAttribute("id",c),c="[id='"+c+"'] ",f=a.length;while(f--)a[f]=c+a[f].join("");h=z.test(e)&&r.parentNode||r,p=a.join(",")}if(p)try{return S.apply(s,x.call(h.querySelectorAll(p),0)),s}catch(v){}finally{l||r.removeAttribute("id")}}return t(e,r,s,o,u)},u&&(K(function(t){e=u.call(t,"div");try{u.call(t,"[test!='']:sizzle"),s.push("!=",H)}catch(n){}}),s=new RegExp(s.join("|")),nt.matchesSelector=function(t,n){n=n.replace(r,"='$1']");if(!o(t)&&!s.test(n)&&!i.test(n))try{var a=u.call(t,n);if(a||e||t.document&&t.document.nodeType!==11)return a}catch(f){}return nt(n,null,null,[t]).length>0})}(),i.pseudos.nth=i.pseudos.eq,i.filters=mt.prototype=i.pseudos,i.setFilters=new mt,nt.attr=v.attr,v.find=nt,v.expr=nt.selectors,v.expr[":"]=v.expr.pseudos,v.unique=nt.uniqueSort,v.text=nt.getText,v.isXMLDoc=nt.isXML,v.contains=nt.contains}(e);var nt=/Until$/,rt=/^(?:parents|prev(?:Until|All))/,it=/^.[^:#\[\.,]*$/,st=v.expr.match.needsContext,ot={children:!0,contents:!0,next:!0,prev:!0};v.fn.extend({find:function(e){var t,n,r,i,s,o,u=this;if(typeof e!="string")return v(e).filter(function(){for(t=0,n=u.length;t<n;t++)if(v.contains(u[t],this))return!0});o=this.pushStack("","find",e);for(t=0,n=this.length;t<n;t++){r=o.length,v.find(e,this[t],o);if(t>0)for(i=r;i<o.length;i++)for(s=0;s<r;s++)if(o[s]===o[i]){o.splice(i--,1);break}}return o},has:function(e){var t,n=v(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++)if(v.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1),"not",e)},filter:function(e){return this.pushStack(ft(this,e,!0),"filter",e)},is:function(e){return!!e&&(typeof e=="string"?st.test(e)?v(e,this.context).index(this[0])>=0:v.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,s=[],o=st.test(e)||typeof e!="string"?v(e,t||this.context):0;for(;r<i;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&n.nodeType!==11){if(o?o.index(n)>-1:v.find.matchesSelector(n,e)){s.push(n);break}n=n.parentNode}}return s=s.length>1?v.unique(s):s,this.pushStack(s,"closest",e)},index:function(e){return e?typeof e=="string"?v.inArray(this[0],v(e)):v.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(e,t){var n=typeof e=="string"?v(e,t):v.makeArray(e&&e.nodeType?[e]:e),r=v.merge(this.get(),n);return this.pushStack(ut(n[0])||ut(r[0])?r:v.unique(r))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}}),v.fn.andSelf=v.fn.addBack,v.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return v.dir(e,"parentNode")},parentsUntil:function(e,t,n){return v.dir(e,"parentNode",n)},next:function(e){return at(e,"nextSibling")},prev:function(e){return at(e,"previousSibling")},nextAll:function(e){return v.dir(e,"nextSibling")},prevAll:function(e){return v.dir(e,"previousSibling")},nextUntil:function(e,t,n){return v.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return v.dir(e,"previousSibling",n)},siblings:function(e){return v.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return v.sibling(e.firstChild)},contents:function(e){return v.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:v.merge([],e.childNodes)}},function(e,t){v.fn[e]=function(n,r){var i=v.map(this,t,n);return nt.test(e)||(r=n),r&&typeof r=="string"&&(i=v.filter(r,i)),i=this.length>1&&!ot[e]?v.unique(i):i,this.length>1&&rt.test(e)&&(i=i.reverse()),this.pushStack(i,e,l.call(arguments).join(","))}}),v.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),t.length===1?v.find.matchesSelector(t[0],e)?[t[0]]:[]:v.find.matches(e,t)},dir:function(e,n,r){var i=[],s=e[n];while(s&&s.nodeType!==9&&(r===t||s.nodeType!==1||!v(s).is(r)))s.nodeType===1&&i.push(s),s=s[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);return n}});var ct="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",ht=/ jQuery\d+="(?:null|\d+)"/g,pt=/^\s+/,dt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,vt=/<([\w:]+)/,mt=/<tbody/i,gt=/<|&#?\w+;/,yt=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,wt=new RegExp("<(?:"+ct+")[\\s/>]","i"),Et=/^(?:checkbox|radio)$/,St=/checked\s*(?:[^=]|=\s*.checked.)/i,xt=/\/(java|ecma)script/i,Tt=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,Nt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},Ct=lt(i),kt=Ct.appendChild(i.createElement("div"));Nt.optgroup=Nt.option,Nt.tbody=Nt.tfoot=Nt.colgroup=Nt.caption=Nt.thead,Nt.th=Nt.td,v.support.htmlSerialize||(Nt._default=[1,"X<div>","</div>"]),v.fn.extend({text:function(e){return v.access(this,function(e){return e===t?v.text(this):this.empty().append((this[0]&&this[0].ownerDocument||i).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(v.isFunction(e))return this.each(function(t){v(this).wrapAll(e.call(this,t))});if(this[0]){var t=v(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&e.firstChild.nodeType===1)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return v.isFunction(e)?this.each(function(t){v(this).wrapInner(e.call(this,t))}):this.each(function(){var t=v(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=v.isFunction(e);return this.each(function(n){v(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){v.nodeName(this,"body")||v(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(e,this.firstChild)})},before:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(e,this),"before",this.selector)}},after:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this.nextSibling)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(this,e),"after",this.selector)}},remove:function(e,t){var n,r=0;for(;(n=this[r])!=null;r++)if(!e||v.filter(e,[n]).length)!t&&n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),v.cleanData([n])),n.parentNode&&n.parentNode.removeChild(n);return this},empty:function(){var e,t=0;for(;(e=this[t])!=null;t++){e.nodeType===1&&v.cleanData(e.getElementsByTagName("*"));while(e.firstChild)e.removeChild(e.firstChild)}return this},clone:function(e,t){return e=e==null?!1:e,t=t==null?e:t,this.map(function(){return v.clone(this,e,t)})},html:function(e){return v.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return n.nodeType===1?n.innerHTML.replace(ht,""):t;if(typeof e=="string"&&!yt.test(e)&&(v.support.htmlSerialize||!wt.test(e))&&(v.support.leadingWhitespace||!pt.test(e))&&!Nt[(vt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(dt,"<$1></$2>");try{for(;r<i;r++)n=this[r]||{},n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),n.innerHTML=e);n=0}catch(s){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){return ut(this[0])?this.length?this.pushStack(v(v.isFunction(e)?e():e),"replaceWith",e):this:v.isFunction(e)?this.each(function(t){var n=v(this),r=n.html();n.replaceWith(e.call(this,t,r))}):(typeof e!="string"&&(e=v(e).detach()),this.each(function(){var t=this.nextSibling,n=this.parentNode;v(this).remove(),t?v(t).before(e):v(n).append(e)}))},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=[].concat.apply([],e);var i,s,o,u,a=0,f=e[0],l=[],c=this.length;if(!v.support.checkClone&&c>1&&typeof f=="string"&&St.test(f))return this.each(function(){v(this).domManip(e,n,r)});if(v.isFunction(f))return this.each(function(i){var s=v(this);e[0]=f.call(this,i,n?s.html():t),s.domManip(e,n,r)});if(this[0]){i=v.buildFragment(e,this,l),o=i.fragment,s=o.firstChild,o.childNodes.length===1&&(o=s);if(s){n=n&&v.nodeName(s,"tr");for(u=i.cacheable||c-1;a<c;a++)r.call(n&&v.nodeName(this[a],"table")?Lt(this[a],"tbody"):this[a],a===u?o:v.clone(o,!0,!0))}o=s=null,l.length&&v.each(l,function(e,t){t.src?v.ajax?v.ajax({url:t.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):v.error("no ajax"):v.globalEval((t.text||t.textContent||t.innerHTML||"").replace(Tt,"")),t.parentNode&&t.parentNode.removeChild(t)})}return this}}),v.buildFragment=function(e,n,r){var s,o,u,a=e[0];return n=n||i,n=!n.nodeType&&n[0]||n,n=n.ownerDocument||n,e.length===1&&typeof a=="string"&&a.length<512&&n===i&&a.charAt(0)==="<"&&!bt.test(a)&&(v.support.checkClone||!St.test(a))&&(v.support.html5Clone||!wt.test(a))&&(o=!0,s=v.fragments[a],u=s!==t),s||(s=n.createDocumentFragment(),v.clean(e,n,s,r),o&&(v.fragments[a]=u&&s)),{fragment:s,cacheable:o}},v.fragments={},v.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){v.fn[e]=function(n){var r,i=0,s=[],o=v(n),u=o.length,a=this.length===1&&this[0].parentNode;if((a==null||a&&a.nodeType===11&&a.childNodes.length===1)&&u===1)return o[t](this[0]),this;for(;i<u;i++)r=(i>0?this.clone(!0):this).get(),v(o[i])[t](r),s=s.concat(r);return this.pushStack(s,e,o.selector)}}),v.extend({clone:function(e,t,n){var r,i,s,o;v.support.html5Clone||v.isXMLDoc(e)||!wt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(kt.innerHTML=e.outerHTML,kt.removeChild(o=kt.firstChild));if((!v.support.noCloneEvent||!v.support.noCloneChecked)&&(e.nodeType===1||e.nodeType===11)&&!v.isXMLDoc(e)){Ot(e,o),r=Mt(e),i=Mt(o);for(s=0;r[s];++s)i[s]&&Ot(r[s],i[s])}if(t){At(e,o);if(n){r=Mt(e),i=Mt(o);for(s=0;r[s];++s)At(r[s],i[s])}}return r=i=null,o},clean:function(e,t,n,r){var s,o,u,a,f,l,c,h,p,d,m,g,y=t===i&&Ct,b=[];if(!t||typeof t.createDocumentFragment=="undefined")t=i;for(s=0;(u=e[s])!=null;s++){typeof u=="number"&&(u+="");if(!u)continue;if(typeof u=="string")if(!gt.test(u))u=t.createTextNode(u);else{y=y||lt(t),c=t.createElement("div"),y.appendChild(c),u=u.replace(dt,"<$1></$2>"),a=(vt.exec(u)||["",""])[1].toLowerCase(),f=Nt[a]||Nt._default,l=f[0],c.innerHTML=f[1]+u+f[2];while(l--)c=c.lastChild;if(!v.support.tbody){h=mt.test(u),p=a==="table"&&!h?c.firstChild&&c.firstChild.childNodes:f[1]==="<table>"&&!h?c.childNodes:[];for(o=p.length-1;o>=0;--o)v.nodeName(p[o],"tbody")&&!p[o].childNodes.length&&p[o].parentNode.removeChild(p[o])}!v.support.leadingWhitespace&&pt.test(u)&&c.insertBefore(t.createTextNode(pt.exec(u)[0]),c.firstChild),u=c.childNodes,c.parentNode.removeChild(c)}u.nodeType?b.push(u):v.merge(b,u)}c&&(u=c=y=null);if(!v.support.appendChecked)for(s=0;(u=b[s])!=null;s++)v.nodeName(u,"input")?_t(u):typeof u.getElementsByTagName!="undefined"&&v.grep(u.getElementsByTagName("input"),_t);if(n){m=function(e){if(!e.type||xt.test(e.type))return r?r.push(e.parentNode?e.parentNode.removeChild(e):e):n.appendChild(e)};for(s=0;(u=b[s])!=null;s++)if(!v.nodeName(u,"script")||!m(u))n.appendChild(u),typeof u.getElementsByTagName!="undefined"&&(g=v.grep(v.merge([],u.getElementsByTagName("script")),m),b.splice.apply(b,[s+1,0].concat(g)),s+=g.length)}return b},cleanData:function(e,t){var n,r,i,s,o=0,u=v.expando,a=v.cache,f=v.support.deleteExpando,l=v.event.special;for(;(i=e[o])!=null;o++)if(t||v.acceptData(i)){r=i[u],n=r&&a[r];if(n){if(n.events)for(s in n.events)l[s]?v.event.remove(i,s):v.removeEvent(i,s,n.handle);a[r]&&(delete a[r],f?delete i[u]:i.removeAttribute?i.removeAttribute(u):i[u]=null,v.deletedIds.push(r))}}}}),function(){var e,t;v.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e=v.uaMatch(o.userAgent),t={},e.browser&&(t[e.browser]=!0,t.version=e.version),t.chrome?t.webkit=!0:t.webkit&&(t.safari=!0),v.browser=t,v.sub=function(){function e(t,n){return new e.fn.init(t,n)}v.extend(!0,e,this),e.superclass=this,e.fn=e.prototype=this(),e.fn.constructor=e,e.sub=this.sub,e.fn.init=function(r,i){return i&&i instanceof v&&!(i instanceof e)&&(i=e(i)),v.fn.init.call(this,r,i,t)},e.fn.init.prototype=e.fn;var t=e(i);return e}}();var Dt,Pt,Ht,Bt=/alpha\([^)]*\)/i,jt=/opacity=([^)]*)/,Ft=/^(top|right|bottom|left)$/,It=/^(none|table(?!-c[ea]).+)/,qt=/^margin/,Rt=new RegExp("^("+m+")(.*)$","i"),Ut=new RegExp("^("+m+")(?!px)[a-z%]+$","i"),zt=new RegExp("^([-+])=("+m+")","i"),Wt={BODY:"block"},Xt={position:"absolute",visibility:"hidden",display:"block"},Vt={letterSpacing:0,fontWeight:400},$t=["Top","Right","Bottom","Left"],Jt=["Webkit","O","Moz","ms"],Kt=v.fn.toggle;v.fn.extend({css:function(e,n){return v.access(this,function(e,n,r){return r!==t?v.style(e,n,r):v.css(e,n)},e,n,arguments.length>1)},show:function(){return Yt(this,!0)},hide:function(){return Yt(this)},toggle:function(e,t){var n=typeof e=="boolean";return v.isFunction(e)&&v.isFunction(t)?Kt.apply(this,arguments):this.each(function(){(n?e:Gt(this))?v(this).show():v(this).hide()})}}),v.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Dt(e,"opacity");return n===""?"1":n}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":v.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(!e||e.nodeType===3||e.nodeType===8||!e.style)return;var s,o,u,a=v.camelCase(n),f=e.style;n=v.cssProps[a]||(v.cssProps[a]=Qt(f,a)),u=v.cssHooks[n]||v.cssHooks[a];if(r===t)return u&&"get"in u&&(s=u.get(e,!1,i))!==t?s:f[n];o=typeof r,o==="string"&&(s=zt.exec(r))&&(r=(s[1]+1)*s[2]+parseFloat(v.css(e,n)),o="number");if(r==null||o==="number"&&isNaN(r))return;o==="number"&&!v.cssNumber[a]&&(r+="px");if(!u||!("set"in u)||(r=u.set(e,r,i))!==t)try{f[n]=r}catch(l){}},css:function(e,n,r,i){var s,o,u,a=v.camelCase(n);return n=v.cssProps[a]||(v.cssProps[a]=Qt(e.style,a)),u=v.cssHooks[n]||v.cssHooks[a],u&&"get"in u&&(s=u.get(e,!0,i)),s===t&&(s=Dt(e,n)),s==="normal"&&n in Vt&&(s=Vt[n]),r||i!==t?(o=parseFloat(s),r||v.isNumeric(o)?o||0:s):s},swap:function(e,t,n){var r,i,s={};for(i in t)s[i]=e.style[i],e.style[i]=t[i];r=n.call(e);for(i in t)e.style[i]=s[i];return r}}),e.getComputedStyle?Dt=function(t,n){var r,i,s,o,u=e.getComputedStyle(t,null),a=t.style;return u&&(r=u.getPropertyValue(n)||u[n],r===""&&!v.contains(t.ownerDocument,t)&&(r=v.style(t,n)),Ut.test(r)&&qt.test(n)&&(i=a.width,s=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=r,r=u.width,a.width=i,a.minWidth=s,a.maxWidth=o)),r}:i.documentElement.currentStyle&&(Dt=function(e,t){var n,r,i=e.currentStyle&&e.currentStyle[t],s=e.style;return i==null&&s&&s[t]&&(i=s[t]),Ut.test(i)&&!Ft.test(t)&&(n=s.left,r=e.runtimeStyle&&e.runtimeStyle.left,r&&(e.runtimeStyle.left=e.currentStyle.left),s.left=t==="fontSize"?"1em":i,i=s.pixelLeft+"px",s.left=n,r&&(e.runtimeStyle.left=r)),i===""?"auto":i}),v.each(["height","width"],function(e,t){v.cssHooks[t]={get:function(e,n,r){if(n)return e.offsetWidth===0&&It.test(Dt(e,"display"))?v.swap(e,Xt,function(){return tn(e,t,r)}):tn(e,t,r)},set:function(e,n,r){return Zt(e,n,r?en(e,t,r,v.support.boxSizing&&v.css(e,"boxSizing")==="border-box"):0)}}}),v.support.opacity||(v.cssHooks.opacity={get:function(e,t){return jt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=v.isNumeric(t)?"alpha(opacity="+t*100+")":"",s=r&&r.filter||n.filter||"";n.zoom=1;if(t>=1&&v.trim(s.replace(Bt,""))===""&&n.removeAttribute){n.removeAttribute("filter");if(r&&!r.filter)return}n.filter=Bt.test(s)?s.replace(Bt,i):s+" "+i}}),v(function(){v.support.reliableMarginRight||(v.cssHooks.marginRight={get:function(e,t){return v.swap(e,{display:"inline-block"},function(){if(t)return Dt(e,"marginRight")})}}),!v.support.pixelPosition&&v.fn.position&&v.each(["top","left"],function(e,t){v.cssHooks[t]={get:function(e,n){if(n){var r=Dt(e,t);return Ut.test(r)?v(e).position()[t]+"px":r}}}})}),v.expr&&v.expr.filters&&(v.expr.filters.hidden=function(e){return e.offsetWidth===0&&e.offsetHeight===0||!v.support.reliableHiddenOffsets&&(e.style&&e.style.display||Dt(e,"display"))==="none"},v.expr.filters.visible=function(e){return!v.expr.filters.hidden(e)}),v.each({margin:"",padding:"",border:"Width"},function(e,t){v.cssHooks[e+t]={expand:function(n){var r,i=typeof n=="string"?n.split(" "):[n],s={};for(r=0;r<4;r++)s[e+$t[r]+t]=i[r]||i[r-2]||i[0];return s}},qt.test(e)||(v.cssHooks[e+t].set=Zt)});var rn=/%20/g,sn=/\[\]$/,on=/\r?\n/g,un=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,an=/^(?:select|textarea)/i;v.fn.extend({serialize:function(){return v.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?v.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||an.test(this.nodeName)||un.test(this.type))}).map(function(e,t){var n=v(this).val();return n==null?null:v.isArray(n)?v.map(n,function(e,n){return{name:t.name,value:e.replace(on,"\r\n")}}):{name:t.name,value:n.replace(on,"\r\n")}}).get()}}),v.param=function(e,n){var r,i=[],s=function(e,t){t=v.isFunction(t)?t():t==null?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};n===t&&(n=v.ajaxSettings&&v.ajaxSettings.traditional);if(v.isArray(e)||e.jquery&&!v.isPlainObject(e))v.each(e,function(){s(this.name,this.value)});else for(r in e)fn(r,e[r],n,s);return i.join("&").replace(rn,"+")};var ln,cn,hn=/#.*$/,pn=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,dn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,vn=/^(?:GET|HEAD)$/,mn=/^\/\//,gn=/\?/,yn=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bn=/([?&])_=[^&]*/,wn=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,En=v.fn.load,Sn={},xn={},Tn=["*/"]+["*"];try{cn=s.href}catch(Nn){cn=i.createElement("a"),cn.href="",cn=cn.href}ln=wn.exec(cn.toLowerCase())||[],v.fn.load=function(e,n,r){if(typeof e!="string"&&En)return En.apply(this,arguments);if(!this.length)return this;var i,s,o,u=this,a=e.indexOf(" ");return a>=0&&(i=e.slice(a,e.length),e=e.slice(0,a)),v.isFunction(n)?(r=n,n=t):n&&typeof n=="object"&&(s="POST"),v.ajax({url:e,type:s,dataType:"html",data:n,complete:function(e,t){r&&u.each(r,o||[e.responseText,t,e])}}).done(function(e){o=arguments,u.html(i?v("<div>").append(e.replace(yn,"")).find(i):e)}),this},v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,t){v.fn[t]=function(e){return this.on(t,e)}}),v.each(["get","post"],function(e,n){v[n]=function(e,r,i,s){return v.isFunction(r)&&(s=s||i,i=r,r=t),v.ajax({type:n,url:e,data:r,success:i,dataType:s})}}),v.extend({getScript:function(e,n){return v.get(e,t,n,"script")},getJSON:function(e,t,n){return v.get(e,t,n,"json")},ajaxSetup:function(e,t){return t?Ln(e,v.ajaxSettings):(t=e,e=v.ajaxSettings),Ln(e,t),e},ajaxSettings:{url:cn,isLocal:dn.test(ln[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":Tn},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":v.parseJSON,"text xml":v.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:Cn(Sn),ajaxTransport:Cn(xn),ajax:function(e,n){function T(e,n,s,a){var l,y,b,w,S,T=n;if(E===2)return;E=2,u&&clearTimeout(u),o=t,i=a||"",x.readyState=e>0?4:0,s&&(w=An(c,x,s));if(e>=200&&e<300||e===304)c.ifModified&&(S=x.getResponseHeader("Last-Modified"),S&&(v.lastModified[r]=S),S=x.getResponseHeader("Etag"),S&&(v.etag[r]=S)),e===304?(T="notmodified",l=!0):(l=On(c,w),T=l.state,y=l.data,b=l.error,l=!b);else{b=T;if(!T||e)T="error",e<0&&(e=0)}x.status=e,x.statusText=(n||T)+"",l?d.resolveWith(h,[y,T,x]):d.rejectWith(h,[x,T,b]),x.statusCode(g),g=t,f&&p.trigger("ajax"+(l?"Success":"Error"),[x,c,l?y:b]),m.fireWith(h,[x,T]),f&&(p.trigger("ajaxComplete",[x,c]),--v.active||v.event.trigger("ajaxStop"))}typeof e=="object"&&(n=e,e=t),n=n||{};var r,i,s,o,u,a,f,l,c=v.ajaxSetup({},n),h=c.context||c,p=h!==c&&(h.nodeType||h instanceof v)?v(h):v.event,d=v.Deferred(),m=v.Callbacks("once memory"),g=c.statusCode||{},b={},w={},E=0,S="canceled",x={readyState:0,setRequestHeader:function(e,t){if(!E){var n=e.toLowerCase();e=w[n]=w[n]||e,b[e]=t}return this},getAllResponseHeaders:function(){return E===2?i:null},getResponseHeader:function(e){var n;if(E===2){if(!s){s={};while(n=pn.exec(i))s[n[1].toLowerCase()]=n[2]}n=s[e.toLowerCase()]}return n===t?null:n},overrideMimeType:function(e){return E||(c.mimeType=e),this},abort:function(e){return e=e||S,o&&o.abort(e),T(0,e),this}};d.promise(x),x.success=x.done,x.error=x.fail,x.complete=m.add,x.statusCode=function(e){if(e){var t;if(E<2)for(t in e)g[t]=[g[t],e[t]];else t=e[x.status],x.always(t)}return this},c.url=((e||c.url)+"").replace(hn,"").replace(mn,ln[1]+"//"),c.dataTypes=v.trim(c.dataType||"*").toLowerCase().split(y),c.crossDomain==null&&(a=wn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===ln[1]&&a[2]===ln[2]&&(a[3]||(a[1]==="http:"?80:443))==(ln[3]||(ln[1]==="http:"?80:443)))),c.data&&c.processData&&typeof c.data!="string"&&(c.data=v.param(c.data,c.traditional)),kn(Sn,c,n,x);if(E===2)return x;f=c.global,c.type=c.type.toUpperCase(),c.hasContent=!vn.test(c.type),f&&v.active++===0&&v.event.trigger("ajaxStart");if(!c.hasContent){c.data&&(c.url+=(gn.test(c.url)?"&":"?")+c.data,delete c.data),r=c.url;if(c.cache===!1){var N=v.now(),C=c.url.replace(bn,"$1_="+N);c.url=C+(C===c.url?(gn.test(c.url)?"&":"?")+"_="+N:"")}}(c.data&&c.hasContent&&c.contentType!==!1||n.contentType)&&x.setRequestHeader("Content-Type",c.contentType),c.ifModified&&(r=r||c.url,v.lastModified[r]&&x.setRequestHeader("If-Modified-Since",v.lastModified[r]),v.etag[r]&&x.setRequestHeader("If-None-Match",v.etag[r])),x.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+(c.dataTypes[0]!=="*"?", "+Tn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)x.setRequestHeader(l,c.headers[l]);if(!c.beforeSend||c.beforeSend.call(h,x,c)!==!1&&E!==2){S="abort";for(l in{success:1,error:1,complete:1})x[l](c[l]);o=kn(xn,c,n,x);if(!o)T(-1,"No Transport");else{x.readyState=1,f&&p.trigger("ajaxSend",[x,c]),c.async&&c.timeout>0&&(u=setTimeout(function(){x.abort("timeout")},c.timeout));try{E=1,o.send(b,T)}catch(k){if(!(E<2))throw k;T(-1,k)}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var Mn=[],_n=/\?/,Dn=/(=)\?(?=&|$)|\?\?/,Pn=v.now();v.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Mn.pop()||v.expando+"_"+Pn++;return this[e]=!0,e}}),v.ajaxPrefilter("json jsonp",function(n,r,i){var s,o,u,a=n.data,f=n.url,l=n.jsonp!==!1,c=l&&Dn.test(f),h=l&&!c&&typeof a=="string"&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Dn.test(a);if(n.dataTypes[0]==="jsonp"||c||h)return s=n.jsonpCallback=v.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,o=e[s],c?n.url=f.replace(Dn,"$1"+s):h?n.data=a.replace(Dn,"$1"+s):l&&(n.url+=(_n.test(f)?"&":"?")+n.jsonp+"="+s),n.converters["script json"]=function(){return u||v.error(s+" was not called"),u[0]},n.dataTypes[0]="json",e[s]=function(){u=arguments},i.always(function(){e[s]=o,n[s]&&(n.jsonpCallback=r.jsonpCallback,Mn.push(s)),u&&v.isFunction(o)&&o(u[0]),u=o=t}),"script"}),v.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){return v.globalEval(e),e}}}),v.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),v.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=i.head||i.getElementsByTagName("head")[0]||i.documentElement;return{send:function(s,o){n=i.createElement("script"),n.async="async",e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,i){if(i||!n.readyState||/loaded|complete/.test(n.readyState))n.onload=n.onreadystatechange=null,r&&n.parentNode&&r.removeChild(n),n=t,i||o(200,"success")},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(0,1)}}}});var Hn,Bn=e.ActiveXObject?function(){for(var e in Hn)Hn[e](0,1)}:!1,jn=0;v.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&Fn()||In()}:Fn,function(e){v.extend(v.support,{ajax:!!e,cors:!!e&&"withCredentials"in e})}(v.ajaxSettings.xhr()),v.support.ajax&&v.ajaxTransport(function(n){if(!n.crossDomain||v.support.cors){var r;return{send:function(i,s){var o,u,a=n.xhr();n.username?a.open(n.type,n.url,n.async,n.username,n.password):a.open(n.type,n.url,n.async);if(n.xhrFields)for(u in n.xhrFields)a[u]=n.xhrFields[u];n.mimeType&&a.overrideMimeType&&a.overrideMimeType(n.mimeType),!n.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");try{for(u in i)a.setRequestHeader(u,i[u])}catch(f){}a.send(n.hasContent&&n.data||null),r=function(e,i){var u,f,l,c,h;try{if(r&&(i||a.readyState===4)){r=t,o&&(a.onreadystatechange=v.noop,Bn&&delete Hn[o]);if(i)a.readyState!==4&&a.abort();else{u=a.status,l=a.getAllResponseHeaders(),c={},h=a.responseXML,h&&h.documentElement&&(c.xml=h);try{c.text=a.responseText}catch(p){}try{f=a.statusText}catch(p){f=""}!u&&n.isLocal&&!n.crossDomain?u=c.text?200:404:u===1223&&(u=204)}}}catch(d){i||s(-1,d)}c&&s(u,f,c,l)},n.async?a.readyState===4?setTimeout(r,0):(o=++jn,Bn&&(Hn||(Hn={},v(e).unload(Bn)),Hn[o]=r),a.onreadystatechange=r):r()},abort:function(){r&&r(0,1)}}}});var qn,Rn,Un=/^(?:toggle|show|hide)$/,zn=new RegExp("^(?:([-+])=|)("+m+")([a-z%]*)$","i"),Wn=/queueHooks$/,Xn=[Gn],Vn={"*":[function(e,t){var n,r,i=this.createTween(e,t),s=zn.exec(t),o=i.cur(),u=+o||0,a=1,f=20;if(s){n=+s[2],r=s[3]||(v.cssNumber[e]?"":"px");if(r!=="px"&&u){u=v.css(i.elem,e,!0)||n||1;do a=a||".5",u/=a,v.style(i.elem,e,u+r);while(a!==(a=i.cur()/o)&&a!==1&&--f)}i.unit=r,i.start=u,i.end=s[1]?u+(s[1]+1)*n:n}return i}]};v.Animation=v.extend(Kn,{tweener:function(e,t){v.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;r<i;r++)n=e[r],Vn[n]=Vn[n]||[],Vn[n].unshift(t)},prefilter:function(e,t){t?Xn.unshift(e):Xn.push(e)}}),v.Tween=Yn,Yn.prototype={constructor:Yn,init:function(e,t,n,r,i,s){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=s||(v.cssNumber[n]?"":"px")},cur:function(){var e=Yn.propHooks[this.prop];return e&&e.get?e.get(this):Yn.propHooks._default.get(this)},run:function(e){var t,n=Yn.propHooks[this.prop];return this.options.duration?this.pos=t=v.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Yn.propHooks._default.set(this),this}},Yn.prototype.init.prototype=Yn.prototype,Yn.propHooks={_default:{get:function(e){var t;return e.elem[e.prop]==null||!!e.elem.style&&e.elem.style[e.prop]!=null?(t=v.css(e.elem,e.prop,!1,""),!t||t==="auto"?0:t):e.elem[e.prop]},set:function(e){v.fx.step[e.prop]?v.fx.step[e.prop](e):e.elem.style&&(e.elem.style[v.cssProps[e.prop]]!=null||v.cssHooks[e.prop])?v.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Yn.propHooks.scrollTop=Yn.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},v.each(["toggle","show","hide"],function(e,t){var n=v.fn[t];v.fn[t]=function(r,i,s){return r==null||typeof r=="boolean"||!e&&v.isFunction(r)&&v.isFunction(i)?n.apply(this,arguments):this.animate(Zn(t,!0),r,i,s)}}),v.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Gt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=v.isEmptyObject(e),s=v.speed(t,n,r),o=function(){var t=Kn(this,v.extend({},e),s);i&&t.stop(!0)};return i||s.queue===!1?this.each(o):this.queue(s.queue,o)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return typeof e!="string"&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=e!=null&&e+"queueHooks",s=v.timers,o=v._data(this);if(n)o[n]&&o[n].stop&&i(o[n]);else for(n in o)o[n]&&o[n].stop&&Wn.test(n)&&i(o[n]);for(n=s.length;n--;)s[n].elem===this&&(e==null||s[n].queue===e)&&(s[n].anim.stop(r),t=!1,s.splice(n,1));(t||!r)&&v.dequeue(this,e)})}}),v.each({slideDown:Zn("show"),slideUp:Zn("hide"),slideToggle:Zn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){v.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),v.speed=function(e,t,n){var r=e&&typeof e=="object"?v.extend({},e):{complete:n||!n&&t||v.isFunction(e)&&e,duration:e,easing:n&&t||t&&!v.isFunction(t)&&t};r.duration=v.fx.off?0:typeof r.duration=="number"?r.duration:r.duration in v.fx.speeds?v.fx.speeds[r.duration]:v.fx.speeds._default;if(r.queue==null||r.queue===!0)r.queue="fx";return r.old=r.complete,r.complete=function(){v.isFunction(r.old)&&r.old.call(this),r.queue&&v.dequeue(this,r.queue)},r},v.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},v.timers=[],v.fx=Yn.prototype.init,v.fx.tick=function(){var e,n=v.timers,r=0;qn=v.now();for(;r<n.length;r++)e=n[r],!e()&&n[r]===e&&n.splice(r--,1);n.length||v.fx.stop(),qn=t},v.fx.timer=function(e){e()&&v.timers.push(e)&&!Rn&&(Rn=setInterval(v.fx.tick,v.fx.interval))},v.fx.interval=13,v.fx.stop=function(){clearInterval(Rn),Rn=null},v.fx.speeds={slow:600,fast:200,_default:400},v.fx.step={},v.expr&&v.expr.filters&&(v.expr.filters.animated=function(e){return v.grep(v.timers,function(t){return e===t.elem}).length});var er=/^(?:body|html)$/i;v.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){v.offset.setOffset(this,e,t)});var n,r,i,s,o,u,a,f={top:0,left:0},l=this[0],c=l&&l.ownerDocument;if(!c)return;return(r=c.body)===l?v.offset.bodyOffset(l):(n=c.documentElement,v.contains(n,l)?(typeof l.getBoundingClientRect!="undefined"&&(f=l.getBoundingClientRect()),i=tr(c),s=n.clientTop||r.clientTop||0,o=n.clientLeft||r.clientLeft||0,u=i.pageYOffset||n.scrollTop,a=i.pageXOffset||n.scrollLeft,{top:f.top+u-s,left:f.left+a-o}):f)},v.offset={bodyOffset:function(e){var t=e.offsetTop,n=e.offsetLeft;return v.support.doesNotIncludeMarginInBodyOffset&&(t+=parseFloat(v.css(e,"marginTop"))||0,n+=parseFloat(v.css(e,"marginLeft"))||0),{top:t,left:n}},setOffset:function(e,t,n){var r=v.css(e,"position");r==="static"&&(e.style.position="relative");var i=v(e),s=i.offset(),o=v.css(e,"top"),u=v.css(e,"left"),a=(r==="absolute"||r==="fixed")&&v.inArray("auto",[o,u])>-1,f={},l={},c,h;a?(l=i.position(),c=l.top,h=l.left):(c=parseFloat(o)||0,h=parseFloat(u)||0),v.isFunction(t)&&(t=t.call(e,n,s)),t.top!=null&&(f.top=t.top-s.top+c),t.left!=null&&(f.left=t.left-s.left+h),"using"in t?t.using.call(e,f):i.css(f)}},v.fn.extend({position:function(){if(!this[0])return;var e=this[0],t=this.offsetParent(),n=this.offset(),r=er.test(t[0].nodeName)?{top:0,left:0}:t.offset();return n.top-=parseFloat(v.css(e,"marginTop"))||0,n.left-=parseFloat(v.css(e,"marginLeft"))||0,r.top+=parseFloat(v.css(t[0],"borderTopWidth"))||0,r.left+=parseFloat(v.css(t[0],"borderLeftWidth"))||0,{top:n.top-r.top,left:n.left-r.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||i.body;while(e&&!er.test(e.nodeName)&&v.css(e,"position")==="static")e=e.offsetParent;return e||i.body})}}),v.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);v.fn[e]=function(i){return v.access(this,function(e,i,s){var o=tr(e);if(s===t)return o?n in o?o[n]:o.document.documentElement[i]:e[i];o?o.scrollTo(r?v(o).scrollLeft():s,r?s:v(o).scrollTop()):e[i]=s},e,i,arguments.length,null)}}),v.each({Height:"height",Width:"width"},function(e,n){v.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){v.fn[i]=function(i,s){var o=arguments.length&&(r||typeof i!="boolean"),u=r||(i===!0||s===!0?"margin":"border");return v.access(this,function(n,r,i){var s;return v.isWindow(n)?n.document.documentElement["client"+e]:n.nodeType===9?(s=n.documentElement,Math.max(n.body["scroll"+e],s["scroll"+e],n.body["offset"+e],s["offset"+e],s["client"+e])):i===t?v.css(n,r,i,u):v.style(n,r,i,u)},n,o?i:t,o,null)}})}),e.jQuery=e.$=v,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return v})})(window);(function(g){var h={xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",html:"http://www.w3.org/1999/xhtml/"};var n={};for(var c in h){n[h[c]]=c}g.extend({xmlns:g.extend({},h,{"":"*"})});var i=[];g.fn.extend({xmlns:function(q,r){if(typeof q=="string"){q={"":q}}if(q){i.push(g.xmlns);g.xmlns=g.extend({},g.xmlns,q);if(r!==undefined){if(typeof r=="string"){return this.find(r).xmlns(undefined)}else{var p=this;try{p=r.call(this);if(!p){p=this}}finally{p.xmlns(undefined)}return p}}else{return this}}else{g.xmlns=(i?i.pop():{});return this}}});var l=function(q){if(!q){return g.xmlns[""]}q=q.substr(0,q.length-1);if(q==""||q=="*"){return q}var p=g.xmlns[q];if(typeof(p)=="undefined"){throw"Syntax error, undefined namespace prefix '"+q+"'"}return p};var e=function(p,q){g.expr.match[p]=new RegExp(q.source+/(?![^\[]*\])(?![^\(]*\))/.source);if(g.expr.leftMatch){g.expr.leftMatch[p]=new RegExp(/(^(?:.|\r|\n)*?)/.source+g.expr.match[p].source.replace(/\\(\d+)/g,function(s,r){return"\\"+(r-0+1)}))}};e("TAG",/^((?:((?:[\w\u00c0-\uFFFF\*_-]*\|)?)((?:[\w\u00c0-\uFFFF\*_-]|\\.)+)))/);var a=document.createElement("div");var b=false;a.appendChild(document.createComment(""));if(a.getElementsByTagName("*").length>0){b=true}var o=true;if(a.localName&&a.localName=="div"){o=false}a=null;g.expr.find.TAG=function(s,p,x){var v=l(s[2]);var t=s[3];var u;if(typeof p.getElementsByTagNameNS!="undefined"){u=p.getElementsByTagNameNS(v,t)}else{if(typeof p.selectNodes!="undefined"){if(p.ownerDocument){p.ownerDocument.setProperty("SelectionLanguage","XPath")}else{p.setProperty("SelectionLanguage","XPath")}var w="";if(v!="*"){if(t!="*"){w="namespace-uri()='"+v+"' and local-name()='"+t+"'"}else{w="namespace-uri()='"+v+"'"}}else{if(t!="*"){w="local-name()='"+t+"'"}}if(w){u=p.selectNodes("descendant-or-self::*["+w+"]")}else{u=p.selectNodes("descendant-or-self::*")}}else{u=p.getElementsByTagName(t);if(b&&t=="*"){var r=[];for(var q=0;u[q];q++){if(u[q].nodeType==1){r.push(u[q])}}u=r}if(u&&v!="*"){var r=[];for(var q=0;u[q];q++){if(u[q].namespaceURI==v||u[q].tagUrn==v){r.push(u[q])}}u=r}}}return u};var m=function(p){return p.nodeType===9&&p.documentElement.nodeName!=="HTML"||!!p.ownerDocument&&p.ownerDocument.documentElement.nodeName!=="HTML"};g.expr.preFilter.TAG=function(s,q,r,p,u,v){var t=s[3];if(!v){if(o){t=t.toUpperCase()}else{t=t.toLowerCase()}}return[s[0],l(s[2]),t]};g.expr.filter.TAG=function(u,p){var s=p[1];var t=p[2];var q=u.namespaceURI?u.namespaceURI:u.tagUrn;var r=u.localName?u.localName:u.tagName;if(s=="*"||q==s||(s==""&&!q)){return((t=="*"&&u.nodeType==1)||r==t)}return false};e("ATTR",/\[\s*((?:((?:[\w\u00c0-\uFFFF\*_-]*\|)?)((?:[\w\u00c0-\uFFFF_-]|\\.)+)))\s*(?:(\S?=)\s*(['"]*)(.*?)\5|)\s*\]/);g.expr.preFilter.ATTR=function(t,q,r,p,u,v){var s=t[3].replace(/\\/g,"");if(!v&&g.expr.attrMap[s]){t[3]=g.expr.attrMap[s]}if(t[4]=="~="){t[6]=" "+t[6]+" "}if(!t[2]||t[2]=="|"){t[2]=""}else{t[2]=l(t[2])}return t};var f=function(p,r,q){var s=p+"";return p==null?r==="!=":r==="="?s===q:r==="*="?s.indexOf(q)>=0:r==="~="?(" "+s+" ").indexOf(q)>=0:!q?s&&p!==false:r==="!="?s!=q:r==="^="?s.indexOf(q)===0:r==="$="?s.substr(s.length-q.length)===q:r==="|="?s===q||s.substr(0,q.length+1)===q+"-":false};g.expr.filter.ATTR=function(r,t){var w=t[2];var p=t[3];var v=t[4];var q=t[6];var z;if(w==""){z=g.expr.attrHandle[p]?g.expr.attrHandle[p](r):r[p]!=null?r[p]:r.getAttribute(p);return f(z,v,q)}if(w!="*"&&typeof r.getAttributeNS!="undefined"){return f(r.getAttributeNS(w,p),v,q)}var y=r.attributes;for(var s=0;y[s];s++){var u=y[s].localName;if(!u){u=y[s].nodeName;var x=u.indexOf(":");if(x>=0){u=u.substr(x+1)}}if(u==p){z=y[s].nodeValue;if(w=="*"||y[s].namespaceURI==w){if(f(z,v,q)){return true}}if(y[s].namespaceURI===""&&y[s].prefix){if(y[s].prefix==n[w]){if(f(z,v,q)){return true}}}}}return false}})(jQuery);(function($){var escape=/["\\\x00-\x1f\x7f-\x9f]/g,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},hasOwn=Object.prototype.hasOwnProperty;$.toJSON=typeof JSON==="object"&&JSON.stringify?JSON.stringify:function(o){if(o===null){return"null"}var pairs,k,name,val,type=$.type(o);if(type==="undefined"){return undefined}if(type==="number"||type==="boolean"){return String(o)}if(type==="string"){return $.quoteString(o)}if(typeof o.toJSON==="function"){return $.toJSON(o.toJSON())}if(type==="date"){var month=o.getUTCMonth()+1,day=o.getUTCDate(),year=o.getUTCFullYear(),hours=o.getUTCHours(),minutes=o.getUTCMinutes(),seconds=o.getUTCSeconds(),milli=o.getUTCMilliseconds();if(month<10){month="0"+month}if(day<10){day="0"+day}if(hours<10){hours="0"+hours}if(minutes<10){minutes="0"+minutes}if(seconds<10){seconds="0"+seconds}if(milli<100){milli="0"+milli}if(milli<10){milli="0"+milli}return'"'+year+"-"+month+"-"+day+"T"+hours+":"+minutes+":"+seconds+"."+milli+'Z"'}pairs=[];if($.isArray(o)){for(k=0;k<o.length;k++){pairs.push($.toJSON(o[k])||"null")}return"["+pairs.join(",")+"]"}if(typeof o==="object"){for(k in o){if(hasOwn.call(o,k)){type=typeof k;if(type==="number"){name='"'+k+'"'}else{if(type==="string"){name=$.quoteString(k)}else{continue}}type=typeof o[k];if(type!=="function"&&type!=="undefined"){val=$.toJSON(o[k]);pairs.push(name+":"+val)}}}return"{"+pairs.join(",")+"}"}};$.evalJSON=typeof JSON==="object"&&JSON.parse?JSON.parse:function(str){return eval("("+str+")")};$.secureEvalJSON=typeof JSON==="object"&&JSON.parse?JSON.parse:function(str){var filtered=str.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"");if(/^[\],:{}\s]*$/.test(filtered)){return eval("("+str+")")}throw new SyntaxError("Error parsing JSON, source is not valid.")};$.quoteString=function(str){if(str.match(escape)){return'"'+str.replace(escape,function(a){var c=meta[a];if(typeof c==="string"){return c}c=a.charCodeAt();return"\\u00"+Math.floor(c/16).toString(16)+(c%16).toString(16)})+'"'}return'"'+str+'"'}}(jQuery));(function(m,p,v,r,n){var t=v.createElement("div"),h=t.style,c="Transform",C=["O"+c,"ms"+c,"Webkit"+c,"Moz"+c],z=C.length,a,l,G="Float32Array" in p,J,w,F=/Matrix([^)]*)/,q=/^\s*matrix\(\s*1\s*,\s*0\s*,\s*0\s*,\s*1\s*(?:,\s*0(?:px)?\s*){2}\)\s*$/,I="transform",K="transformOrigin",H="translate",f="rotate",s="scale",B="skew",b="matrix";while(z--){if(C[z] in h){m.support[I]=a=C[z];m.support[K]=a+"Origin";continue}}if(!a){m.support.matrixFilter=l=h.filter===""}m.cssNumber[I]=m.cssNumber[K]=true;if(a&&a!=I){m.cssProps[I]=a;m.cssProps[K]=a+"Origin";if(a=="Moz"+c){J={get:function(L,i){return(i?m.css(L,a).split("px").join(""):L.style[a])},set:function(i,L){i.style[a]=/matrix\([^)p]*\)/.test(L)?L.replace(/matrix((?:[^,]*,){4})([^,]*),([^)]*)/,b+"$1$2px,$3px"):L}}}else{if(/^1\.[0-5](?:\.|$)/.test(m.fn.jquery)){J={get:function(L,i){return(i?m.css(L,a.replace(/^ms/,"Ms")):L.style[a])}}}}}else{if(l){J={get:function(O,N,i){var M=(N&&O.currentStyle?O.currentStyle:O.style),L,P;if(M&&F.test(M.filter)){L=RegExp.$1.split(",");L=[L[0].split("=")[1],L[2].split("=")[1],L[1].split("=")[1],L[3].split("=")[1]]}else{L=[1,0,0,1]}if(!m.cssHooks[K]){L[4]=M?parseInt(M.left,10)||0:0;L[5]=M?parseInt(M.top,10)||0:0}else{P=m._data(O,"transformTranslate",n);L[4]=P?P[0]:0;L[5]=P?P[1]:0}return i?L:b+"("+L+")"},set:function(Q,R,M){var L=Q.style,N,i,P,O;if(!M){L.zoom=1}R=y(R);i=["Matrix(M11="+R[0],"M12="+R[2],"M21="+R[1],"M22="+R[3],"SizingMethod='auto expand'"].join();P=(N=Q.currentStyle)&&N.filter||L.filter||"";L.filter=F.test(P)?P.replace(F,i):P+" progid:DXImageTransform.Microsoft."+i+")";if(!m.cssHooks[K]){if((O=m.transform.centerOrigin)){L[O=="margin"?"marginLeft":"left"]=-(Q.offsetWidth/2)+(Q.clientWidth/2)+"px";L[O=="margin"?"marginTop":"top"]=-(Q.offsetHeight/2)+(Q.clientHeight/2)+"px"}L.left=R[4]+"px";L.top=R[5]+"px"}else{m.cssHooks[K].set(Q,R)}}}}}if(J){m.cssHooks[I]=J}w=J&&J.get||m.css;m.fx.step.transform=function(P){var O=P.elem,M=P.start,Q=P.end,U=P.pos,N="",S=100000,R,L,T,V;if(!M||typeof M==="string"){if(!M){M=w(O,a)}if(l){O.style.zoom=1}Q=Q.split("+=").join(M);m.extend(P,e(M,Q));M=P.start;Q=P.end}R=M.length;while(R--){L=M[R];T=Q[R];V=+false;switch(L[0]){case H:V="px";case s:V||(V="");N=L[0]+"("+r.round((L[1][0]+(T[1][0]-L[1][0])*U)*S)/S+V+","+r.round((L[1][1]+(T[1][1]-L[1][1])*U)*S)/S+V+")"+N;break;case B+"X":case B+"Y":case f:N=L[0]+"("+r.round((L[1]+(T[1]-L[1])*U)*S)/S+"rad)"+N;break}}P.origin&&(N=P.origin+N);J&&J.set?J.set(O,N,+true):O.style[a]=N};function y(N){N=N.split(")");var O=m.trim,R=-1,Q=N.length-1,T,L,M,P=G?new Float32Array(6):[],U=G?new Float32Array(6):[],S=G?new Float32Array(6):[1,0,0,1,0,0];P[0]=P[3]=S[0]=S[3]=1;P[1]=P[2]=P[4]=P[5]=0;while(++R<Q){T=N[R].split("(");L=O(T[0]);M=T[1];U[0]=U[3]=1;U[1]=U[2]=U[4]=U[5]=0;switch(L){case H+"X":U[4]=parseInt(M,10);break;case H+"Y":U[5]=parseInt(M,10);break;case H:M=M.split(",");U[4]=parseInt(M[0],10);U[5]=parseInt(M[1]||0,10);break;case f:M=g(M);U[0]=r.cos(M);U[1]=r.sin(M);U[2]=-r.sin(M);U[3]=r.cos(M);break;case s+"X":U[0]=+M;break;case s+"Y":U[3]=M;break;case s:M=M.split(",");U[0]=M[0];U[3]=M.length>1?M[1]:M[0];break;case B+"X":U[2]=r.tan(g(M));break;case B+"Y":U[1]=r.tan(g(M));break;case b:M=M.split(",");U[0]=M[0];U[1]=M[1];U[2]=M[2];U[3]=M[3];U[4]=parseInt(M[4],10);U[5]=parseInt(M[5],10);break}S[0]=P[0]*U[0]+P[2]*U[1];S[1]=P[1]*U[0]+P[3]*U[1];S[2]=P[0]*U[2]+P[2]*U[3];S[3]=P[1]*U[2]+P[3]*U[3];S[4]=P[0]*U[4]+P[2]*U[5]+P[4];S[5]=P[1]*U[4]+P[3]*U[5]+P[5];P=[S[0],S[1],S[2],S[3],S[4],S[5]]}return S}function u(N){var O,M,L,i=N[0],R=N[1],Q=N[2],P=N[3];if(i*P-R*Q){O=r.sqrt(i*i+R*R);i/=O;R/=O;L=i*Q+R*P;Q-=i*L;P-=R*L;M=r.sqrt(Q*Q+P*P);Q/=M;P/=M;L/=M;if(i*P<R*Q){i=-i;R=-R;L=-L;O=-O}}else{O=M=L=0}return[[H,[+N[4],+N[5]]],[f,r.atan2(R,i)],[B+"X",r.atan(L)],[s,[O,M]]]}function e(S,M){var P={start:[],end:[]},N=-1,L,O,Q,R;(S=="none"||E(S))&&(S="");(M=="none"||E(M))&&(M="");if(S&&M&&!M.indexOf("matrix")&&x(S).join()==x(M.split(")")[0]).join()){P.origin=S;S="";M=M.slice(M.indexOf(")")+1)}if(!S&&!M){return}if(!S||!M||A(S)==A(M)){S&&(S=S.split(")"))&&(L=S.length);M&&(M=M.split(")"))&&(L=M.length);while(++N<L-1){S[N]&&(O=S[N].split("("));M[N]&&(Q=M[N].split("("));R=m.trim((O||Q)[0]);D(P.start,o(R,O?O[1]:0));D(P.end,o(R,Q?Q[1]:0))}}else{P.start=u(y(S));P.end=u(y(M))}return P}function o(N,O){var L=+(!N.indexOf(s)),M,i=N.replace(/e[XY]/,"e");switch(N){case H+"Y":case s+"Y":O=[L,O?parseFloat(O):L];break;case H+"X":case H:case s+"X":M=1;case s:O=O?(O=O.split(","))&&[parseFloat(O[0]),parseFloat(O.length>1?O[1]:N==s?M||O[0]:L+"")]:[L,L];break;case B+"X":case B+"Y":case f:O=O?g(O):0;break;case b:return u(O?x(O):[1,0,0,1,0,0]);break}return[[i,O]]}function E(i){return q.test(i)}function A(i){return i.replace(/(?:\([^)]*\))|\s/g,"")}function D(L,i,M){while(M=i.shift()){L.push(M)}}function g(i){return ~i.indexOf("deg")?parseInt(i,10)*(r.PI*2/360):~i.indexOf("grad")?parseInt(i,10)*(r.PI/200):parseFloat(i)}function x(i){i=/([^,]*),([^,]*),([^,]*),([^,]*),([^,p]*)(?:px)?,([^)p]*)(?:px)?/.exec(i);return[i[1],i[2],i[3],i[4],i[5],i[6]]}m.transform={centerOrigin:"margin"}})(jQuery,window,document,Math);(function(e){var r=e.extend,m="mousedown",s="mousemove",n="mouseup",q="touchstart",i="touchmove",t="touchend",g="touchcancel";function f(z,x,y){if(x.substr(0,5)!=="touch"){return e(z).unbind(x,y)}var A,w;for(w=0;w<v._binds.length;w++){if(v._binds[w].elem===z&&v._binds[w].type===x&&v._binds[w].func===y){if(document.addEventListener){z.removeEventListener(x,v._binds[w].fnc,false)}else{z.detachEvent("on"+x,v._binds[w].fnc)}v._binds.splice(w--,1)}}}function v(A,x,z,y){if(x.substr(0,5)!=="touch"){return e(A).bind(x,y,z)}var B,w;if(v[x]){return v[x].bind(A,x,z,y)}B=function(C){if(!C){C=window.event}if(!C.stopPropagation){C.stopPropagation=function(){this.cancelBubble=true}}C.data=y;z.call(A,C)};if(document.addEventListener){A.addEventListener(x,B,false)}else{A.attachEvent("on"+x,B)}v._binds.push({elem:A,type:x,func:z,fnc:B})}function h(x,w){var y={move:{x:0,y:0},offset:{x:0,y:0},position:{x:0,y:0},start:{x:0,y:0},affects:document.documentElement,stopPropagation:false,preventDefault:true,touch:true};r(y,w);y.element=x;v(x,m,u,y);if(y.touch){v(x,q,a,y)}}function l(w){f(w,m,m)}function u(w){w.data.position.x=w.pageX;w.data.position.y=w.pageY;w.data.start.x=w.pageX;w.data.start.y=w.pageY;w.data.event=w;if(w.data.onstart&&w.data.onstart.call(w.data.element,w.data)){return}if(w.preventDefault&&w.data.preventDefault){w.preventDefault()}if(w.stopPropagation&&w.data.stopPropagation){w.stopPropagation()}v(w.data.affects,s,b,w.data);v(w.data.affects,n,p,w.data)}function b(w){if(w.preventDefault&&w.data.preventDefault){w.preventDefault()}if(w.stopPropagation&&w.data.preventDefault){w.stopPropagation()}w.data.move.x=w.pageX-w.data.position.x;w.data.move.y=w.pageY-w.data.position.y;w.data.position.x=w.pageX;w.data.position.y=w.pageY;w.data.offset.x=w.pageX-w.data.start.x;w.data.offset.y=w.pageY-w.data.start.y;w.data.event=w;if(w.data.onmove){w.data.onmove.call(w.data.element,w.data)}}function p(w){if(w.preventDefault&&w.data.preventDefault){w.preventDefault()}if(w.stopPropagation&&w.data.stopPropagation){w.stopPropagation()}f(w.data.affects,s,b);f(w.data.affects,n,p);w.data.event=w;if(w.data.onfinish){w.data.onfinish.call(w.data.element,w.data)}}function a(w){w.data.position.x=w.touches[0].pageX;w.data.position.y=w.touches[0].pageY;w.data.start.x=w.touches[0].pageX;w.data.start.y=w.touches[0].pageY;w.data.event=w;if(w.data.onstart&&w.data.onstart.call(w.data.element,w.data)){return}if(w.preventDefault&&w.data.preventDefault){w.preventDefault()}if(w.stopPropagation&&w.data.stopPropagation){w.stopPropagation()}v(w.data.affects,i,o,w.data);v(w.data.affects,t,c,w.data)}function o(w){if(w.preventDefault&&w.data.preventDefault){w.preventDefault()}if(w.stopPropagation&&w.data.stopPropagation){w.stopPropagation()}w.data.move.x=w.touches[0].pageX-w.data.position.x;w.data.move.y=w.touches[0].pageY-w.data.position.y;w.data.position.x=w.touches[0].pageX;w.data.position.y=w.touches[0].pageY;w.data.offset.x=w.touches[0].pageX-w.data.start.x;w.data.offset.y=w.touches[0].pageY-w.data.start.y;w.data.event=w;if(w.data.onmove){w.data.onmove.call(w.data.elem,w.data)}}function c(w){if(w.preventDefault&&w.data.preventDefault){w.preventDefault()}if(w.stopPropagation&&w.data.stopPropagation){w.stopPropagation()}f(w.data.affects,i,o);f(w.data.affects,t,c);w.data.event=w;if(w.data.onfinish){w.data.onfinish.call(w.data.element,w.data)}}v._binds=[];e.fn.grab=function(x,w){return this.each(function(){return h(this,x,w)})};e.fn.ungrab=function(w){return this.each(function(){return l(this,w)})}})(jQuery);PureCSSMatrix=(function(){var b=/deg$/;var f=/([0-9.\-e]+)/g;var g=/([a-zA-Z]+)\(([^\)]+)\)/g;function c(i){if(i&&i!==null&&i!="none"){if(i instanceof Matrix){this.setMatrix(i)}else{this.setMatrixValue(i)}}else{this.m=Matrix.I(3)}}c.prototype.setMatrix=function(i){this.m=i};function e(l){var i=parseFloat(h(l));if(l.match(b)){i=(2*Math.PI)*i/360}return i}c.prototype.setMatrixValue=function(n){var i=Matrix.I(3);var l;while((l=g.exec(n))!==null){var o=l[1].toLowerCase();var q=l[2].split(",");var m;if(o=="matrix"){m=Matrix.create([[parseFloat(q[0]),parseFloat(q[2]),parseFloat(h(q[4]))],[parseFloat(q[1]),parseFloat(q[3]),parseFloat(h(q[5]))],[0,0,1]])}else{if(o=="translate"){m=Matrix.I(3);m.elements[0][2]=parseFloat(h(q[0]));m.elements[1][2]=parseFloat(h(q[1]))}else{if(o=="scale"){var r=parseFloat(q[0]);var p;if(q.length>1){p=parseFloat(q[1])}else{p=r}m=Matrix.create([[r,0,0],[0,p,0],[0,0,1]])}else{if(o=="rotate"){m=Matrix.RotationZ(e(q[0]))}else{if(o=="skew"||o=="skewx"){m=Matrix.I(3);m.elements[0][1]=Math.tan(e(q[0]))}else{if(o=="skewy"){m=Matrix.I(3);m.elements[1][0]=Math.tan(e(q[0]))}else{console.log("Problem with setMatrixValue",o,q)}}}}}}i=i.multiply(m)}this.m=i};c.prototype.multiply=function(i){return new c(this.m.multiply(i.m))};c.prototype.inverse=function(){if(Math.abs(this.m.elements[0][0])<0.000001){this.m.elements[0][0]=0}return new c(this.m.inverse())};c.prototype.translate=function(i,m){var l=Matrix.I(3);l.elements[0][2]=i;l.elements[1][2]=m;return new c(this.m.multiply(l))};c.prototype.scale=function(m,l){var i=Matrix.create([[m,0,0],[0,l,0],[0,0,1]]);return new c(this.m.multiply(i))};c.prototype.rotate=function(i){var l=Matrix.RotationZ(i);return new c(this.m.multiply(l))};c.prototype.toString=function(){var l=this.m.elements;var i="";if($.browser.mozilla||$.browser.opera){i="px"}return"matrix("+a(l[0][0])+", "+a(l[1][0])+", "+a(l[0][1])+", "+a(l[1][1])+", "+a(l[0][2])+i+", "+a(l[1][2])+i+")"};c.prototype.elements=function(){var i=this.m.elements;return{a:i[0][0],b:i[1][0],c:i[0][1],d:i[1][1],e:i[0][2],f:i[1][2]}};function h(i){return i.match(f)}function a(i){return Number(i).toFixed(6)}return c})();if(!$.zoomooz){$.zoomooz={}}$.zoomooz.helpers=(function(c,b){var a=["-moz-","-webkit-","-o-","-ms-"];b.forEachPrefix=function(f,g){for(var e=0;e<a.length;e++){f(a[e])}if(g){f("")}};b.getElementTransform=function(e){var f;b.forEachPrefix(function(g){f=f||c(e).css(g+"transform")},true);return f};return b})(jQuery,{});(function(e){var p;var y;var h=/([0-9.\-e]+)/g;var b=/([a-z]+)\(([^\)]+)\)/g;var t=/deg$/;var r=e.zoomooz.helpers;var q={duration:450,easing:"ease",nativeanimation:false};var n;jQuery.cssHooks.MsTransform={set:function(B,C){B.style.msTransform=C}};jQuery.cssHooks.MsTransformOrigin={set:function(B,C){B.style.msTransformOrigin=C}};e.fn.animateTransformation=function(C,B,F,D){B=jQuery.extend({},q,B);var E=(e.browser.webkit&&B.nativeanimation);if(n){clearTimeout(n);n=null}if(E&&F){n=setTimeout(F,B.duration)}this.each(function(){var G=e(this);if(!C){C=new PureCSSMatrix()}var H=x(G);var I=i(H,z(C));if(E){G.css(l(A(I),B.duration,B.easing));if(D){D()}}else{a(G,H,I,B,F,D)}})};e.fn.setTransformation=function(B){this.each(function(){var C=e(this);var D=x(C);var E=i(D,z(B));C.css(l(A(E)))})};function l(B,D,G){var F={};r.forEachPrefix(function(H){F[H+"transform"]=B},true);if(D){var C=m(D/1000,6)+"s";F["-webkit-transition-duration"]=C;F["-o-transition-duration"]=C;F["-moz-transition-duration"]=C}if(G){var E=w(G);F["-webkit-transition-timing-function"]=E;F["-o-transition-timing-function"]=E;F["-moz-transition-timing-function"]=C}return F}function a(B,C,F,D,G,E){if(!C){C=z(new PureCSSMatrix())}p=(new Date()).getTime();if(y){clearInterval(y);y=null}if(D.easing){D.easingfunction=u(D.easing,D.duration)}s(B,C,F,D,G);if(E){E()}y=setInterval(function(){s(B,C,F,D,G)},1)}function s(B,H,E,D,G){var F=(new Date()).getTime()-p;var C;if(D.easingfunction){C=D.easingfunction(F/D.duration)}else{C=F/D.duration}B.css(l(A(f(H,E,C))));if(F>D.duration){clearInterval(y);y=null;C=1;if(G){G()}}}function z(N){var C=N.elements();var O=C.a,L=C.b,J=C.c,I=C.d,H=C.e,G=C.f;if(Math.abs(O*I-L*J)<0.01){console.log("fail!");return}var F=H,E=G;var M=Math.sqrt(O*O+L*L);O=O/M;L=L/M;var D=O*J+L*I;J-=O*D;I-=L*D;var K=Math.sqrt(J*J+I*I);J=J/K;I=I/K;D=D/K;if((O*I-L*J)<0){O=-O;L=-L;J=-J;I=-I;M=-M;K=-K}var B=Math.atan2(L,O);return{tx:F,ty:E,r:B,k:Math.atan(D),sx:M,sy:K}}function A(B){var C="";C+="translate("+m(B.tx,6)+"px,"+m(B.ty,6)+"px) ";C+="rotate("+m(B.r,6)+"rad) skewX("+m(B.k,6)+"rad) ";C+="scale("+m(B.sx,6)+","+m(B.sy,6)+")";return C}function w(B){if((B instanceof Array)){return"cubic-bezier("+m(B[0],6)+","+m(B[1],6)+","+m(B[2],6)+","+m(B[3],6)+")"}else{return B}}function u(C,D){var E=[];if((C instanceof Array)){E=C}else{switch(C){case"linear":E=[0,0,1,1];break;case"ease":E=[0.25,0.1,0.25,1];break;case"ease-in":E=[0.42,0,1,1];break;case"ease-out":E=[0,0,0.58,1];break;case"ease-in-out":E=[0.42,0,0.58,1];break}}var B=function(F){return c(F,E[0],E[1],E[2],E[3],D)};return B}function g(E,G,F,C,I){var B,H,D=((1-E)*(1-E)*(1-E));B=G*(3*E*E*(1-E))+C*(3*E*(1-E)*(1-E))+D;H=F*(3*E*E*(1-E))+I*(3*E*(1-E)*(1-E))+D;return{x:Math.abs(B),y:Math.abs(H)}}function c(P,D,C,L,K,B){var O=0,S=0,F=0,M=0,Q=0,E=0;function J(T){return((O*T+S)*T+F)*T}function I(T){return((M*T+Q)*T+E)*T}function R(T){return(3*O*T+2*S)*T+F}function N(T){return 1/(200*T)}function H(T,U){return I(G(T,U))}function G(aa,ab){var Z,Y,X,U,T,W;function V(ac){if(ac>=0){return ac}else{return 0-ac}}for(X=aa,W=0;W<8;W++){U=J(X)-aa;if(V(U)<ab){return X}T=R(X);if(V(T)<0.000001){break}X=X-U/T}Z=0;Y=1;X=aa;if(X<Z){return Z}if(X>Y){return Y}while(Z<Y){U=J(X);if(V(U-aa)<ab){return X}if(aa>U){Z=X}else{Y=X}X=(Y-Z)*0.5+Z}return X}F=3*D;S=3*(L-D)-F;O=1-F-S;E=3*C;Q=3*(K-C)-E;M=1-E-Q;return H(P,N(B))}function x(D){var C=r.getElementTransform(D);var E;if(!C){E=new PureCSSMatrix()}else{E=new PureCSSMatrix(C)}var B=z(E);B.r=o(C);return B}function o(F){var E=0;var C;while((C=b.exec(F))!==null){var G=C[1].toLowerCase();var H=C[2].split(",");if(G=="matrix"){var I=G+"("+C[2]+")";E+=z(new PureCSSMatrix(I)).r}else{if(G=="rotate"){var D=H[0];var B=parseFloat(v(D));if(D.match(t)){B=(2*Math.PI)*B/360}E+=B}}}return E}function i(B,C){if(Math.abs(B.r-C.r)>Math.PI){if(C.r<B.r){while(Math.abs(B.r-C.r)>Math.PI){C.r+=(2*Math.PI)}}else{while(Math.abs(B.r-C.r)>Math.PI){C.r-=(2*Math.PI)}}}return C}function f(B,E,F){var D={};for(var C in B){if(B.hasOwnProperty(C)){D[C]=B[C]+(E[C]-B[C])*F}}return D}function m(D,B){B=Math.abs(parseInt(B,10))||0;var C=Math.pow(10,B);return Math.round(D*C)/C}function v(B){return B.match(h)}})(jQuery);(function(i){var g=i.zoomooz.helpers;var n=["duration","easing","nativeanimation"];l();if(!i.zoomooz){i.zoomooz={}}i.zoomooz.setup=function(t){i.zoomooz.defaultSettings=jQuery.extend(o(),t)};i.fn.zoomSettings=function(t){var u;this.each(function(){var v=i(this);u=r(v,t)});return u};i.fn.zoomTo=function(u,t){this.each(function(){var v=i(this);if(!t){u=v.zoomSettings(u)}h(v,u);if(u.debug){if(i("#debug").length===0){i(u.root).append('<div id="debug"><div>')}else{i("#debug").html("")}q(v,u)}else{if(i("#debug").length!==0){i("#debug").html("")}}});return this};function r(u,z){var y=jQuery.extend({},z);if(!i.zoomooz.defaultSettings){i.zoomooz.setup()}var x=i.zoomooz.defaultSettings;var t=jQuery.extend({},y);for(var w in x){if(x.hasOwnProperty(w)&&!t[w]){t[w]=u.data(w)}}for(var v=0;v<n.length;v++){var w=n[v];if(!t[w]){t[w]=u.data(w)}}return jQuery.extend({},x,t)}function l(){var u=document.createElement("style");u.type="text/css";var t="";g.forEachPrefix(function(v){t+=v+"transform-origin: 0 0;"},true);u.innerHTML="html {height:100%;}.noScroll{overflow:hidden !important;}body.noScroll,html.noScroll body{margin-right:15px;}* {"+t+"}";document.getElementsByTagName("head")[0].appendChild(u)}function o(){return{targetsize:0.9,scalemode:"both",root:i(document.body),debug:false,animationendcallback:null,closeclick:false}}function h(x,v){var z=b(x,v);var w;var y=null;f(v.root);if(x[0]!==v.root[0]){var t=e(x,v.root).inverse();w=c(x,t,v);if(v.animationendcallback){y=function(){v.animationendcallback.call(x[0])}}}else{w=(new PureCSSMatrix()).translate(-z.x,-z.y);y=function(){var B=i(v.root);var A=z.elem;A.removeClass("noScroll");B.setTransformation(new PureCSSMatrix());B.data("original-scroll",null);i(document).off("touchmove");if(A[0]==document.body||A[0]==window){window.scrollTo(z.x,z.y)}else{A.scrollLeft(z.x);A.scrollTop(z.y)}if(v.animationendcallback){v.animationendcallback.call(x[0])}}}var u=null;if(z&&z.animationstartedcallback){u=z.animationstartedcallback}i(v.root).animateTransformation(w,v,y,u)}function b(v,u){var z=u.root;var t=z.parent();if(v[0]===z[0]){var y=z.data("original-scroll");if(y){return y}else{return{elem:t,x:0,"y:":0}}}else{if(!z.data("original-scroll")){var x=z.scrollTop();var A=z.scrollLeft();var v=z;if(!x){x=t.scrollTop();A=t.scrollLeft();v=t}var y={elem:v,x:A,y:x};z.data("original-scroll",y);i(document).on("touchmove",function(B){B.preventDefault()});var w="translate(-"+A+"px,-"+x+"px)";g.forEachPrefix(function(B){z.css(B+"transform",w)});v.addClass("noScroll");y.animationstartedcallback=function(){if(v[0]==document.body||v[0]==document){window.scrollTo(0,0)}else{v.scrollLeft(0);v.scrollTop(0)}};return y}}}function f(y){var z=i(y).parent();var v=z.width();var x=z.height();var t=v/2;var u=x/2;var w=p(t)+"px "+p(u)+"px";g.forEachPrefix(function(A){y.css(A+"transform-origin",w)})}function c(G,C,F){var K=F.targetsize;var J=F.scalemode;var t=F.root;var H=i(t).parent();var B=H.width();var D=H.height();var u=B/G.outerWidth();var w=D/G.outerHeight();var L;if(J=="width"){L=K*u}else{if(J=="height"){L=K*w}else{if(J=="both"){L=K*Math.min(u,w)}else{if(J=="scale"){L=K}else{console.log("wrong zoommode");return}}}}var A=(B-G.outerWidth()*L)/2;var x=(D-G.outerHeight()*L)/2;var E=B/2;var v=D/2;var y=-parseFloat(t.css("margin-left"))||0;var I=-parseFloat(t.css("margin-top"))||0;var z=(new PureCSSMatrix()).translate(y,I).translate(-E,-v).translate(A,x).scale(L,L).multiply(C).translate(E,v);return z}function s(u,t,v){return[u.a*t+u.c*v+u.e,u.b*t+u.d*v+u.f]}function q(u,t){var v=e(u,t.root).elements();m(s(v,0,0));m(s(v,0,u.outerHeight()));m(s(v,u.outerWidth(),u.outerHeight()));m(s(v,u.outerWidth(),0))}function m(v){var t="width:4px;height:4px;background-color:red;position:absolute;margin-left:-2px;margin-top:-2px;";t+="left:"+v[0]+"px;top:"+v[1]+"px;";var u='<div class="debuglabel" style="'+t+'"></div>';i("#debug").append(u)}function e(B,F){var I=B[0];if(!I||!I.ownerDocument){return null}var H=new PureCSSMatrix();var u;if(I===I.ownerDocument.body){var K=jQuery.offset.bodyOffset(I);u=new PureCSSMatrix();u=u.translate(K.left,K.top);H=H.multiply(u);return H}var z;if(jQuery.offset.initialize){jQuery.offset.initialize();z={fixedPosition:jQuery.offset.supportsFixedPosition,doesNotAddBorder:jQuery.offset.doesNotAddBorder,doesAddBorderForTableAndCells:jQuery.support.doesAddBorderForTableAndCells,subtractsBorderForOverflowNotVisible:jQuery.offset.subtractsBorderForOverflowNotVisible}}else{z=jQuery.support}var t=I.offsetParent;var L=I.ownerDocument;var x;var J=L.documentElement;var A=L.body;var G=F[0];var E=L.defaultView;var w;if(E){w=E.getComputedStyle(I,null)}else{w=I.currentStyle}var C=I.offsetTop;var v=I.offsetLeft;var y=a().translate(v,C);y=y.multiply(a(I));H=y.multiply((H));while((I=I.parentNode)&&I!==G){C=0;v=0;if(z.fixedPosition&&w.position==="fixed"){break}x=E?E.getComputedStyle(I,null):I.currentStyle;C-=I.scrollTop;v-=I.scrollLeft;if(I===t){C+=I.offsetTop;v+=I.offsetLeft;if(z.doesNotAddBorder&&!(z.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(I.nodeName))){C+=parseFloat(x.borderTopWidth)||0;v+=parseFloat(x.borderLeftWidth)||0}t=I.offsetParent}if(z.subtractsBorderForOverflowNotVisible&&x.overflow!=="visible"){C+=parseFloat(x.borderTopWidth)||0;v+=parseFloat(x.borderLeftWidth)||0}w=x;if(I.offsetParent==G){C-=parseFloat(i(I.offsetParent).css("margin-top"))||0;v-=parseFloat(i(I.offsetParent).css("margin-left"))||0}y=a().translate(v,C);y=y.multiply(a(I));H=y.multiply(H)}C=0;v=0;if(w.position==="relative"||w.position==="static"){C+=A.offsetTop;v+=A.offsetLeft}if(z.fixedPosition&&w.position==="fixed"){C+=Math.max(J.scrollTop,A.scrollTop);v+=Math.max(J.scrollLeft,A.scrollLeft)}var D=(new PureCSSMatrix()).translate(v,C);H=H.multiply(D);return H}function p(t){return Number(t).toFixed(6)}function a(u){var t=g.getElementTransform(u);if(!t){return new PureCSSMatrix()}else{return new PureCSSMatrix(t)}}})(jQuery);(function(b){if(!b.zoomooz){b.zoomooz={}}var a=b.zoomooz.helpers;b.fn.zoomTarget=function(f){this.each(function(){var g=b(this).zoomSettings(f);c(b(this),b(this),g)})};function c(f,m,g){f.addClass("zoomTarget");if(!g.animationendcallback){if(!g.closeclick){g.animationendcallback=function(){b(".selectedZoomTarget").removeClass("selectedZoomTarget zoomNotClickable");f.addClass("selectedZoomTarget zoomNotClickable")}}else{g.animationendcallback=function(){b(".selectedZoomTarget").removeClass("selectedZoomTarget zoomNotClickable");f.addClass("selectedZoomTarget")}}}var l=m.closest(".zoomContainer");if(l.length!=0){g.root=l}var h=g.root;if(!h.hasClass("zoomTarget")){var i=h.zoomSettings({});i.animationendcallback=function(){var n=b(this);b(".selectedZoomTarget").removeClass("selectedZoomTarget zoomNotClickable");n.addClass("selectedZoomTarget zoomNotClickable");n.parent().addClass("selectedZoomTarget zoomNotClickable")};c(h,h,i);c(h.parent(),h,i);h.click()}f.on("click",function(n){if(g.closeclick&&m.hasClass("selectedZoomTarget")){g.root.click()}else{m.zoomTo(g)}n.stopPropagation()})}function e(){var f=document.createElement("style");f.type="text/css";function g(h){var i="-webkit-touch-callout: "+(h?"default":"none")+";";a.forEachPrefix(function(l){i+=l+"user-select:"+(h?"text":"none")+";"},true);return i}f.innerHTML=".zoomTarget{"+g(false)+"}.zoomTarget:hover{cursor:pointer!important;}.zoomNotClickable{"+g(true)+"}.zoomNotClickable:hover{cursor:auto!important;}.zoomContainer{position:relative;padding:1px;margin:-1px;}";document.getElementsByTagName("head")[0].appendChild(f)}e();b(document).ready(function(){b(".zoomTarget").zoomTarget()})})(jQuery);(function(a){if(!a.zoomooz){a.zoomooz={}}a.fn.zoomContainer=function(b){};a(document).ready(function(){a(".zoomContainer").zoomContainer()})})(jQuery);var Sylvester={version:"0.1.3",precision:0.000001};function Matrix(){}Matrix.prototype={dup:function(){return Matrix.create(this.elements)},canMultiplyFromLeft:function(a){var b=a.elements||a;if(typeof(b[0][0])=="undefined"){b=Matrix.create(b).elements}return(this.elements[0].length==b.length)},multiply:function(s){var l=s.modulus?true:false;var p=s.elements||s;if(typeof(p[0][0])=="undefined"){p=Matrix.create(p).elements}if(!this.canMultiplyFromLeft(p)){return null}var f=this.elements.length,g=f,n,b,e=p[0].length,h;var r=this.elements[0].length,a=[],o,m,q;do{n=g-f;a[n]=[];b=e;do{h=e-b;o=0;m=r;do{q=r-m;o+=this.elements[n][q]*p[q][h]}while(--m);a[n][h]=o}while(--b)}while(--f);var p=Matrix.create(a);return l?p.col(1):p},isSquare:function(){return(this.elements.length==this.elements[0].length)},toRightTriangular:function(){var g=this.dup(),e;var b=this.elements.length,c=b,f,h,l=this.elements[0].length,a;do{f=c-b;if(g.elements[f][f]==0){for(j=f+1;j<c;j++){if(g.elements[j][f]!=0){e=[];h=l;do{a=l-h;e.push(g.elements[f][a]+g.elements[j][a])}while(--h);g.elements[f]=e;break}}}if(g.elements[f][f]!=0){for(j=f+1;j<c;j++){var m=g.elements[j][f]/g.elements[f][f];e=[];h=l;do{a=l-h;e.push(a<=f?0:g.elements[j][a]-g.elements[f][a]*m)}while(--h);g.elements[j]=e}}}while(--b);return g},determinant:function(){if(!this.isSquare()){return null}var f=this.toRightTriangular();var c=f.elements[0][0],e=f.elements.length-1,a=e,b;do{b=a-e+1;c=c*f.elements[b][b]}while(--e);return c},isSingular:function(){return(this.isSquare()&&this.determinant()===0)},augment:function(n){var l=n.elements||n;if(typeof(l[0][0])=="undefined"){l=Matrix.create(l).elements}var f=this.dup(),m=f.elements[0].length;var c=f.elements.length,e=c,h,a,b=l[0].length,g;if(c!=l.length){return null}do{h=e-c;a=b;do{g=b-a;f.elements[h][m+g]=l[h][g]}while(--a)}while(--c);return f},inverse:function(){if(!this.isSquare()||this.isSingular()){return null}var c=this.elements.length,e=c,l,h;var m=this.augment(Matrix.I(c)).toRightTriangular();var n,o=m.elements[0].length,a,g,b;var q=[],f;do{l=c-1;g=[];n=o;q[l]=[];b=m.elements[l][l];do{a=o-n;f=m.elements[l][a]/b;g.push(f);if(a>=e){q[l].push(f)}}while(--n);m.elements[l]=g;for(h=0;h<l;h++){g=[];n=o;do{a=o-n;g.push(m.elements[h][a]-m.elements[l][a]*m.elements[h][l])}while(--n);m.elements[h]=g}}while(--c);return Matrix.create(q)},setElements:function(l){var o,a=l.elements||l;if(typeof(a[0][0])!="undefined"){var e=a.length,g=e,b,c,m;this.elements=[];do{o=g-e;b=a[o].length;c=b;this.elements[o]=[];do{m=c-b;this.elements[o][m]=a[o][m]}while(--b)}while(--e);return this}var f=a.length,h=f;this.elements=[];do{o=h-f;this.elements.push([a[o]])}while(--f);return this}};Matrix.create=function(a){var b=new Matrix();return b.setElements(a)};Matrix.I=function(g){var f=[],a=g,e,c,b;do{e=a-g;f[e]=[];c=a;do{b=a-c;f[e][b]=(e==b)?1:0}while(--c)}while(--g);return Matrix.create(f)};(function(f,h,l,m,b){var i={init:function(){this.browser=this.searchString(this.dataBrowser)||"An unknown browser";this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||"an unknown version";this.OS=this.searchString(this.dataOS)||"an unknown OS"},searchString:function(r){for(var o=0;o<r.length;o++){var p=r[o].string;var q=r[o].prop;this.versionSearchString=r[o].versionSearch||r[o].identity;if(p){if(p.indexOf(r[o].subString)!=-1){return r[o].identity}}else{if(q){return r[o].identity}}}},searchVersion:function(p){var o=p.indexOf(this.versionSearchString);if(o==-1){return}return parseFloat(p.substring(o+this.versionSearchString.length+1))},dataBrowser:[{string:navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:h.opera,identity:"Opera",versionSearch:"Version"},{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:navigator.userAgent,subString:"MSIE",identity:"Explorer",versionSearch:"MSIE"}],dataOS:[{string:navigator.platform,subString:"Win",identity:"Windows"},{string:navigator.platform,subString:"Mac",identity:"Mac"},{string:navigator.platform,subString:"Linux",identity:"Linux"}]};i.init();var n={MSIE:{Windows:{ctrlKey:false,altKey:false,metaKey:false,shiftKey:false,which:122,string:"F11",alt:"F11"}},Firefox:{Windows:{ctrlKey:false,altKey:false,metaKey:false,shiftKey:false,which:122,string:"F11",alt:"F11"},Linux:{ctrlKey:false,altKey:false,metaKey:false,shiftKey:false,which:122,string:"F11",alt:"F11"},Mac:{ctrlKey:false,altKey:false,metaKey:true,shiftKey:true,which:70,string:"&#x21E7;&#x2318;F",alt:"Shift+Command+F"}},Chrome:{Windows:{ctrlKey:false,altKey:false,metaKey:false,shiftKey:false,which:122,string:"F11",alt:"F11"},Linux:{ctrlKey:false,altKey:false,metaKey:false,shiftKey:false,which:122,string:"F11",alt:"F11"},Mac:{ctrlKey:false,altKey:false,metaKey:true,shiftKey:true,which:70,string:"&#x21E7;&#x2318;F",alt:"Shift+Command+F"}},Safari:{Mac:{ctrlKey:true,altKey:false,metaKey:false,shiftKey:true,which:70,string:"^&#x2318;F",alt:"Control+Command+F"}},Opera:{Windows:{ctrlKey:false,altKey:false,metaKey:false,shiftKey:false,which:122,string:"F11",alt:"F11"},Linux:{ctrlKey:false,altKey:false,metaKey:false,shiftKey:false,which:122,string:"F11",alt:"F11"},Mac:{ctrlKey:false,altKey:false,metaKey:true,shiftKey:true,which:70,string:"&#x21E7;&#x2318;F",alt:"Shift+Command+F"}},};var g=function(){return(l.clientHeight==m&&l.clientWidth==b)||h.fullScreen||(h.outerHeight==m&&h.outerWidth==b)||(i.browser=="Safari"&&h.outerHeight==(m-40)&&h.outerWidth==b)},c=f(h);var a=n[i.browser][i.OS];var e={shortcut:a.string,longform:a.alt};c.data("fullscreen-state",g()).data("fullscreen-key",e).resize(function(){var o=g();if(c.data("fullscreen-state")&&!o){c.data("fullscreen-state",o).trigger("fullscreen-toggle",[false]).trigger("fullscreen-off")}else{if(!c.data("fullscreen-state")&&o){c.data("fullscreen-state",o).trigger("fullscreen-toggle",[true]).trigger("fullscreen-on")}}}).keydown(function(o){if(a&&o.ctrlKey==a.ctrlKey&&o.altKey==a.altKey&&o.metaKey==a.metaKey&&o.shiftKey==a.shiftKey&&o.which==a.which){c.trigger("fullscreen-key",[a.string,a.alt])}})})(jQuery,this,document.documentElement,screen.height,screen.width);(function(l){var f="0.4.2",m="hasOwnProperty",b=/[\.\/]/,a="*",h=function(){},g=function(p,o){return p-o},e,i,n={n:{}},c=function(o,E){o=String(o);var x=n,u=i,y=Array.prototype.slice.call(arguments,2),B=c.listeners(o),A=0,w=false,r,q=[],v={},s=[],p=e,C=[];e=o;i=0;for(var t=0,D=B.length;t<D;t++){if("zIndex" in B[t]){q.push(B[t].zIndex);if(B[t].zIndex<0){v[B[t].zIndex]=B[t]}}}q.sort(g);while(q[A]<0){r=v[q[A++]];s.push(r.apply(E,y));if(i){i=u;return s}}for(t=0;t<D;t++){r=B[t];if("zIndex" in r){if(r.zIndex==q[A]){s.push(r.apply(E,y));if(i){break}do{A++;r=v[q[A]];r&&s.push(r.apply(E,y));if(i){break}}while(r)}else{v[r.zIndex]=r}}else{s.push(r.apply(E,y));if(i){break}}}i=u;e=p;return s.length?s:null};c._events=n;c.listeners=function(o){var w=o.split(b),u=n,A,v,p,s,z,r,t,x,y=[u],q=[];for(s=0,z=w.length;s<z;s++){x=[];for(r=0,t=y.length;r<t;r++){u=y[r].n;v=[u[w[s]],u[a]];p=2;while(p--){A=v[p];if(A){x.push(A);q=q.concat(A.f||[])}}}y=x}return q};c.on=function(o,r){o=String(o);if(typeof r!="function"){return function(){}}var t=o.split(b),s=n;for(var p=0,q=t.length;p<q;p++){s=s.n;s=s.hasOwnProperty(t[p])&&s[t[p]]||(s[t[p]]={n:{}})}s.f=s.f||[];for(p=0,q=s.f.length;p<q;p++){if(s.f[p]==r){return h}}s.f.push(r);return function(u){if(+u==+u){r.zIndex=+u}}};c.f=function(p){var o=[].slice.call(arguments,1);return function(){c.apply(null,[p,null].concat(o).concat([].slice.call(arguments,0)))}};c.stop=function(){i=1};c.nt=function(o){if(o){return new RegExp("(?:\\.|\\/|^)"+o+"(?:\\.|\\/|$)").test(e)}return e};c.nts=function(){return e.split(b)};c.off=c.unbind=function(p,u){if(!p){c._events=n={n:{}};return}var w=p.split(b),v,y,q,s,z,r,t,x=[n];for(s=0,z=w.length;s<z;s++){for(r=0;r<x.length;r+=q.length-2){q=[r,1];v=x[r].n;if(w[s]!=a){if(v[w[s]]){q.push(v[w[s]])}}else{for(y in v){if(v[m](y)){q.push(v[y])}}}x.splice.apply(x,q)}}for(s=0,z=x.length;s<z;s++){v=x[s];while(v.n){if(u){if(v.f){for(r=0,t=v.f.length;r<t;r++){if(v.f[r]==u){v.f.splice(r,1);break}}!v.f.length&&delete v.f}for(y in v.n){if(v.n[m](y)&&v.n[y].f){var o=v.n[y].f;for(r=0,t=o.length;r<t;r++){if(o[r]==u){o.splice(r,1);break}}!o.length&&delete v.n[y].f}}}else{delete v.f;for(y in v.n){if(v.n[m](y)&&v.n[y].f){delete v.n[y].f}}}v=v.n}}};c.once=function(o,p){var q=function(){c.unbind(o,q);return p.apply(this,arguments)};return c.on(o,q)};c.version=f;c.toString=function(){return"You are running Eve "+f};(typeof module!="undefined"&&module.exports)?(module.exports=c):(typeof define!="undefined"?(define("eve",[],function(){return c})):(l.eve=c))})(this);(function(){function aT(i){if(aT.is(i,"function")){return aq?i():eve.on("raphael.DOMload",i)}else{if(aT.is(i,bf)){return aT._engine.create[bI](aT,i.splice(0,3+aT.is(i[0],aN))).add(i)}else{var b=Array.prototype.slice.call(arguments,0);if(aT.is(b[b.length-1],"function")){var g=b.pop();return aq?g.call(aT._engine.create[bI](aT,b)):eve.on("raphael.DOMload",function(){g.call(aT._engine.create[bI](aT,b))})}else{return aT._engine.create[bI](aT,arguments)}}}}aT.version="2.1.0";aT.eve=eve;var aq,a=/[, ]+/,by={circle:1,rect:1,path:1,ellipse:1,text:1,image:1},bt=/\{(\d+)\}/g,bL="prototype",am="hasOwnProperty",aC={doc:document,win:window},u={was:Object.prototype[am].call(aC.win,"Raphael"),is:aC.win.Raphael},bH=function(){this.ca=this.customAttributes={}},a6,bq="appendChild",bI="apply",bG="concat",ab="createTouch" in aC.doc,aZ="",aS=" ",bJ=String,H="split",U="click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[H](aS),bz={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},bM=bJ.prototype.toLowerCase,aw=Math,o=aw.max,bo=aw.min,ay=aw.abs,br=aw.pow,aX=aw.PI,aN="number",al="string",bf="array",a7="toString",bb="fill",a3=Object.prototype.toString,bB={},l="push",f=aT._ISURL=/^url\(['"]?([^\)]+?)['"]?\)$/i,C=/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i,ax={"NaN":1,"Infinity":1,"-Infinity":1},c=/^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,aj=aw.round,B="setAttribute",ap=parseFloat,W=parseInt,bv=bJ.prototype.toUpperCase,t=aT._availableAttrs={"arrow-end":"none","arrow-start":"none",blur:0,"clip-rect":"0 0 1e9 1e9",cursor:"default",cx:0,cy:0,fill:"#fff","fill-opacity":1,font:'10px "Arial"',"font-family":'"Arial"',"font-size":"10","font-style":"normal","font-weight":400,gradient:0,height:0,href:"http://raphaeljs.com/","letter-spacing":0,opacity:1,path:"M0,0",r:0,rx:0,ry:0,src:"",stroke:"#000","stroke-dasharray":"","stroke-linecap":"butt","stroke-linejoin":"butt","stroke-miterlimit":0,"stroke-opacity":1,"stroke-width":1,target:"_blank","text-anchor":"middle",title:"Raphael",transform:"",width:0,x:0,y:0},au=aT._availableAnimAttrs={blur:aN,"clip-rect":"csv",cx:aN,cy:aN,fill:"colour","fill-opacity":aN,"font-size":aN,height:aN,opacity:aN,path:"path",r:aN,rx:aN,ry:aN,stroke:"colour","stroke-opacity":aN,"stroke-width":aN,transform:"transform",width:aN,x:aN,y:aN},ae=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]/g,bk=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,p={hs:1,rg:1},bi=/,?([achlmqrstvxz]),?/gi,a2=/([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig,ak=/([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig,aR=/(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/ig,aY=aT._radial_gradient=/^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/,aW={},bs=function(i,g){return i.key-g.key},w=function(i,g){return ap(i)-ap(g)},K=function(){},bD=function(b){return b},aB=aT._rectPath=function(b,R,g,i,E){if(E){return[["M",b+E,R],["l",g-E*2,0],["a",E,E,0,0,1,E,E],["l",0,i-E*2],["a",E,E,0,0,1,-E,E],["l",E*2-g,0],["a",E,E,0,0,1,-E,-E],["l",0,E*2-i],["a",E,E,0,0,1,E,-E],["z"]]}return[["M",b,R],["l",g,0],["l",0,i],["l",-g,0],["z"]]},M=function(b,E,i,g){if(g==null){g=i}return[["M",b,E],["m",0,-g],["a",i,g,0,1,1,0,2*g],["a",i,g,0,1,1,0,-2*g],["z"]]},P=aT._getPath={path:function(b){return b.attr("path")},circle:function(g){var b=g.attrs;return M(b.cx,b.cy,b.r)},ellipse:function(g){var b=g.attrs;return M(b.cx,b.cy,b.rx,b.ry)},rect:function(g){var b=g.attrs;return aB(b.x,b.y,b.width,b.height,b.r)},image:function(g){var b=g.attrs;return aB(b.x,b.y,b.width,b.height)},text:function(b){var g=b._getBBox();return aB(g.x,g.y,g.width,g.height)},set:function(b){var g=b._getBBox();return aB(g.x,g.y,g.width,g.height)}},N=aT.mapPath=function(bQ,bN){if(!bN){return bQ}var bO,S,E,b,bP,R,g;bQ=Y(bQ);for(E=0,bP=bQ.length;E<bP;E++){g=bQ[E];for(b=1,R=g.length;b<R;b+=2){bO=bN.x(g[b],g[b+1]);S=bN.y(g[b],g[b+1]);g[b]=bO;g[b+1]=S}}return bQ};aT._g=aC;aT.type=(aC.win.SVGAngle||aC.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")?"SVG":"VML");if(aT.type=="VML"){var aG=aC.doc.createElement("div"),aJ;aG.innerHTML='<v:shape adj="1"/>';aJ=aG.firstChild;aJ.style.behavior="url(#default#VML)";if(!(aJ&&typeof aJ.adj=="object")){return(aT.type=aZ)}aG=null}aT.svg=!(aT.vml=aT.type=="VML");aT._Paper=bH;aT.fn=a6=bH.prototype=aT.prototype;aT._id=0;aT._oid=0;aT.is=function(g,b){b=bM.call(b);if(b=="finite"){return !ax[am](+g)}if(b=="array"){return g instanceof Array}return(b=="null"&&g===null)||(b==typeof g&&g!==null)||(b=="object"&&g===Object(g))||(b=="array"&&Array.isArray&&Array.isArray(g))||a3.call(g).slice(8,-1).toLowerCase()==b};function Z(i){if(Object(i)!==i){return i}var g=new i.constructor;for(var b in i){if(i[am](b)){g[b]=Z(i[b])}}return g}aT.angle=function(R,bN,i,S,g,E){if(g==null){var b=R-i,bO=bN-S;if(!b&&!bO){return 0}return(180+aw.atan2(-bO,-b)*180/aX+360)%360}else{return aT.angle(R,bN,g,E)-aT.angle(i,S,g,E)}};aT.rad=function(b){return b%360*aX/180};aT.deg=function(b){return b*180/aX%360};aT.snapTo=function(g,R,b){b=aT.is(b,"finite")?b:10;if(aT.is(g,bf)){var E=g.length;while(E--){if(ay(g[E]-R)<=b){return g[E]}}}else{g=+g;var S=R%g;if(S<b){return R-S}if(S>g-b){return R-S+g}}return R};var h=aT.createUUID=(function(b,g){return function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(b,g).toUpperCase()}})(/[xy]/g,function(i){var g=aw.random()*16|0,b=i=="x"?g:(g&3|8);return b.toString(16)});aT.setWindow=function(b){eve("raphael.setWindow",aT,aC.win,b);aC.win=b;aC.doc=aC.win.document;if(aT._engine.initWin){aT._engine.initWin(aC.win)}};var bh=function(E){if(aT.vml){var b=/^\s+|\s+$/g;var S;try{var bN=new ActiveXObject("htmlfile");bN.write("<body>");bN.close();S=bN.body}catch(bO){S=createPopup().document.body}var g=S.createTextRange();bh=aI(function(i){try{S.style.color=bJ(i).replace(b,aZ);var bP=g.queryCommandValue("ForeColor");bP=((bP&255)<<16)|(bP&65280)|((bP&16711680)>>>16);return"#"+("000000"+bP.toString(16)).slice(-6)}catch(bQ){return"none"}})}else{var R=aC.doc.createElement("i");R.title="Rapha\xebl Colour Picker";R.style.display="none";aC.doc.body.appendChild(R);bh=aI(function(i){R.style.color=i;return aC.doc.defaultView.getComputedStyle(R,aZ).getPropertyValue("color")})}return bh(E)},aK=function(){return"hsb("+[this.h,this.s,this.b]+")"},O=function(){return"hsl("+[this.h,this.s,this.l]+")"},z=function(){return this.hex},a0=function(S,R,i){if(R==null&&aT.is(S,"object")&&"r" in S&&"g" in S&&"b" in S){i=S.b;R=S.g;S=S.r}if(R==null&&aT.is(S,al)){var E=aT.getRGB(S);S=E.r;R=E.g;i=E.b}if(S>1||R>1||i>1){S/=255;R/=255;i/=255}return[S,R,i]},a4=function(S,R,i,bN){S*=255;R*=255;i*=255;var E={r:S,g:R,b:i,hex:aT.rgb(S,R,i),toString:z};aT.is(bN,"finite")&&(E.opacity=bN);return E};aT.color=function(b){var g;if(aT.is(b,"object")&&"h" in b&&"s" in b&&"b" in b){g=aT.hsb2rgb(b);b.r=g.r;b.g=g.g;b.b=g.b;b.hex=g.hex}else{if(aT.is(b,"object")&&"h" in b&&"s" in b&&"l" in b){g=aT.hsl2rgb(b);b.r=g.r;b.g=g.g;b.b=g.b;b.hex=g.hex}else{if(aT.is(b,"string")){b=aT.getRGB(b)}if(aT.is(b,"object")&&"r" in b&&"g" in b&&"b" in b){g=aT.rgb2hsl(b);b.h=g.h;b.s=g.s;b.l=g.l;g=aT.rgb2hsb(b);b.v=g.b}else{b={hex:"none"};b.r=b.g=b.b=b.h=b.s=b.v=b.l=-1}}}b.toString=z;return b};aT.hsb2rgb=function(bN,bQ,bO,E){if(this.is(bN,"object")&&"h" in bN&&"s" in bN&&"b" in bN){bO=bN.b;bQ=bN.s;bN=bN.h;E=bN.o}bN*=360;var S,bP,g,i,b;bN=(bN%360)/60;b=bO*bQ;i=b*(1-ay(bN%2-1));S=bP=g=bO-b;bN=~~bN;S+=[b,i,0,0,i,b][bN];bP+=[i,b,b,i,0,0][bN];g+=[0,0,i,b,b,i][bN];return a4(S,bP,g,E)};aT.hsl2rgb=function(bO,bQ,S,E){if(this.is(bO,"object")&&"h" in bO&&"s" in bO&&"l" in bO){S=bO.l;bQ=bO.s;bO=bO.h}if(bO>1||bQ>1||S>1){bO/=360;bQ/=100;S/=100}bO*=360;var bN,bP,g,i,b;bO=(bO%360)/60;b=2*bQ*(S<0.5?S:1-S);i=b*(1-ay(bO%2-1));bN=bP=g=S-b/2;bO=~~bO;bN+=[b,i,0,0,i,b][bO];bP+=[i,b,b,i,0,0][bO];g+=[0,0,i,b,b,i][bO];return a4(bN,bP,g,E)};aT.rgb2hsb=function(bP,bO,i){i=a0(bP,bO,i);bP=i[0];bO=i[1];i=i[2];var bN,R,E,bQ;E=o(bP,bO,i);bQ=E-bo(bP,bO,i);bN=(bQ==0?null:E==bP?(bO-i)/bQ:E==bO?(i-bP)/bQ+2:(bP-bO)/bQ+4);bN=((bN+360)%6)*60/360;R=bQ==0?0:bQ/E;return{h:bN,s:R,b:E,toString:aK}};aT.rgb2hsl=function(i,bO,bR){bR=a0(i,bO,bR);i=bR[0];bO=bR[1];bR=bR[2];var bS,bN,bQ,bP,R,E;bP=o(i,bO,bR);R=bo(i,bO,bR);E=bP-R;bS=(E==0?null:bP==i?(bO-bR)/E:bP==bO?(bR-i)/E+2:(i-bO)/E+4);bS=((bS+360)%6)*60/360;bQ=(bP+R)/2;bN=(E==0?0:bQ<0.5?E/(2*bQ):E/(2-2*bQ));return{h:bS,s:bN,l:bQ,toString:O}};aT._path2string=function(){return this.join(",").replace(bi,"$1")};function bm(R,E){for(var b=0,g=R.length;b<g;b++){if(R[b]===E){return R.push(R.splice(b,1)[0])}}}function aI(E,g,b){function i(){var R=Array.prototype.slice.call(arguments,0),bN=R.join("\u2400"),S=i.cache=i.cache||{},bO=i.count=i.count||[];if(S[am](bN)){bm(bO,bN);return b?b(S[bN]):S[bN]}bO.length>=1000&&delete S[bO.shift()];bO.push(bN);S[bN]=E[bI](g,R);return b?b(S[bN]):S[bN]}return i}var bx=aT._preload=function(i,g){var b=aC.doc.createElement("img");b.style.cssText="position:absolute;left:-9999em;top:-9999em";b.onload=function(){g.call(this);this.onload=null;aC.doc.body.removeChild(this)};b.onerror=function(){aC.doc.body.removeChild(this)};aC.doc.body.appendChild(b);b.src=i};function at(){return this.hex}aT.getRGB=aI(function(b){if(!b||!!((b=bJ(b)).indexOf("-")+1)){return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:at}}if(b=="none"){return{r:-1,g:-1,b:-1,hex:"none",toString:at}}!(p[am](b.toLowerCase().substring(0,2))||b.charAt()=="#")&&(b=bh(b));var R,g,i,bN,E,bP,bO,S=b.match(C);if(S){if(S[2]){bN=W(S[2].substring(5),16);i=W(S[2].substring(3,5),16);g=W(S[2].substring(1,3),16)}if(S[3]){bN=W((bP=S[3].charAt(3))+bP,16);i=W((bP=S[3].charAt(2))+bP,16);g=W((bP=S[3].charAt(1))+bP,16)}if(S[4]){bO=S[4][H](bk);g=ap(bO[0]);bO[0].slice(-1)=="%"&&(g*=2.55);i=ap(bO[1]);bO[1].slice(-1)=="%"&&(i*=2.55);bN=ap(bO[2]);bO[2].slice(-1)=="%"&&(bN*=2.55);S[1].toLowerCase().slice(0,4)=="rgba"&&(E=ap(bO[3]));bO[3]&&bO[3].slice(-1)=="%"&&(E/=100)}if(S[5]){bO=S[5][H](bk);g=ap(bO[0]);bO[0].slice(-1)=="%"&&(g*=2.55);i=ap(bO[1]);bO[1].slice(-1)=="%"&&(i*=2.55);bN=ap(bO[2]);bO[2].slice(-1)=="%"&&(bN*=2.55);(bO[0].slice(-3)=="deg"||bO[0].slice(-1)=="\xb0")&&(g/=360);S[1].toLowerCase().slice(0,4)=="hsba"&&(E=ap(bO[3]));bO[3]&&bO[3].slice(-1)=="%"&&(E/=100);return aT.hsb2rgb(g,i,bN,E)}if(S[6]){bO=S[6][H](bk);g=ap(bO[0]);bO[0].slice(-1)=="%"&&(g*=2.55);i=ap(bO[1]);bO[1].slice(-1)=="%"&&(i*=2.55);bN=ap(bO[2]);bO[2].slice(-1)=="%"&&(bN*=2.55);(bO[0].slice(-3)=="deg"||bO[0].slice(-1)=="\xb0")&&(g/=360);S[1].toLowerCase().slice(0,4)=="hsla"&&(E=ap(bO[3]));bO[3]&&bO[3].slice(-1)=="%"&&(E/=100);return aT.hsl2rgb(g,i,bN,E)}S={r:g,g:i,b:bN,toString:at};S.hex="#"+(16777216|bN|(i<<8)|(g<<16)).toString(16).slice(1);aT.is(E,"finite")&&(S.opacity=E);return S}return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:at}},aT);aT.hsb=aI(function(E,i,g){return aT.hsb2rgb(E,i,g).hex});aT.hsl=aI(function(i,g,b){return aT.hsl2rgb(i,g,b).hex});aT.rgb=aI(function(R,E,i){return"#"+(16777216|i|(E<<8)|(R<<16)).toString(16).slice(1)});aT.getColor=function(g){var i=this.getColor.start=this.getColor.start||{h:0,s:1,b:g||0.75},b=this.hsb2rgb(i.h,i.s,i.b);i.h+=0.075;if(i.h>1){i.h=0;i.s-=0.2;i.s<=0&&(this.getColor.start={h:0,s:1,b:i.b})}return b.hex};aT.getColor.reset=function(){delete this.start};function bd(E,bN){var S=[];for(var g=0,b=E.length;b-2*!bN>g;g+=2){var R=[{x:+E[g-2],y:+E[g-1]},{x:+E[g],y:+E[g+1]},{x:+E[g+2],y:+E[g+3]},{x:+E[g+4],y:+E[g+5]}];if(bN){if(!g){R[0]={x:+E[b-2],y:+E[b-1]}}else{if(b-4==g){R[3]={x:+E[0],y:+E[1]}}else{if(b-2==g){R[2]={x:+E[0],y:+E[1]};R[3]={x:+E[2],y:+E[3]}}}}}else{if(b-4==g){R[3]=R[2]}else{if(!g){R[0]={x:+E[g],y:+E[g+1]}}}}S.push(["C",(-R[0].x+6*R[1].x+R[2].x)/6,(-R[0].y+6*R[1].y+R[2].y)/6,(R[1].x+6*R[2].x-R[3].x)/6,(R[1].y+6*R[2].y-R[3].y)/6,R[2].x,R[2].y])}return S}aT.parsePathString=function(b){if(!b){return null}var i=aa(b);if(i.arr){return a1(i.arr)}var E={a:7,c:6,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,z:0},g=[];if(aT.is(b,bf)&&aT.is(b[0],bf)){g=a1(b)}if(!g.length){bJ(b).replace(a2,function(S,R,bP){var bO=[],bN=R.toLowerCase();bP.replace(aR,function(bR,bQ){bQ&&bO.push(+bQ)});if(bN=="m"&&bO.length>2){g.push([R][bG](bO.splice(0,2)));bN="l";R=R=="m"?"l":"L"}if(bN=="r"){g.push([R][bG](bO))}else{while(bO.length>=E[bN]){g.push([R][bG](bO.splice(0,E[bN])));if(!E[bN]){break}}}})}g.toString=aT._path2string;i.arr=a1(g);return g};aT.parseTransformString=aI(function(g){if(!g){return null}var i={r:3,s:4,t:2,m:6},b=[];if(aT.is(g,bf)&&aT.is(g[0],bf)){b=a1(g)}if(!b.length){bJ(g).replace(ak,function(R,E,bO){var bN=[],S=bM.call(E);bO.replace(aR,function(bQ,bP){bP&&bN.push(+bP)});b.push([E][bG](bN))})}b.toString=aT._path2string;return b});var aa=function(g){var b=aa.ps=aa.ps||{};if(b[g]){b[g].sleep=100}else{b[g]={sleep:100}}setTimeout(function(){for(var i in b){if(b[am](i)&&i!=g){b[i].sleep--;!b[i].sleep&&delete b[i]}}});return b[g]};aT.findDotsAtSegment=function(g,b,b5,b3,bN,R,bQ,bO,bY){var bV=1-bY,b0=br(bV,3),b1=br(bV,2),bS=bY*bY,bP=bS*bY,bU=b0*g+b1*3*bY*b5+bV*3*bY*bY*bN+bP*bQ,bR=b0*b+b1*3*bY*b3+bV*3*bY*bY*R+bP*bO,bZ=g+2*bY*(b5-g)+bS*(bN-2*b5+g),bX=b+2*bY*(b3-b)+bS*(R-2*b3+b),b4=b5+2*bY*(bN-b5)+bS*(bQ-2*bN+b5),b2=b3+2*bY*(R-b3)+bS*(bO-2*R+b3),bW=bV*g+bY*b5,bT=bV*b+bY*b3,E=bV*bN+bY*bQ,i=bV*R+bY*bO,S=(90-aw.atan2(bZ-b4,bX-b2)*180/aX);(bZ>b4||bX<b2)&&(S+=180);return{x:bU,y:bR,m:{x:bZ,y:bX},n:{x:b4,y:b2},start:{x:bW,y:bT},end:{x:E,y:i},alpha:S}};aT.bezierBBox=function(g,b,E,i,bP,bN,S,R){if(!aT.is(g,"array")){g=[g,b,E,i,bP,bN,S,R]}var bO=bc.apply(null,g);return{x:bO.min.x,y:bO.min.y,x2:bO.max.x,y2:bO.max.y,width:bO.max.x-bO.min.x,height:bO.max.y-bO.min.y}};aT.isPointInsideBBox=function(g,b,i){return b>=g.x&&b<=g.x2&&i>=g.y&&i<=g.y2};aT.isBBoxIntersect=function(E,g){var b=aT.isPointInsideBBox;return b(g,E.x,E.y)||b(g,E.x2,E.y)||b(g,E.x,E.y2)||b(g,E.x2,E.y2)||b(E,g.x,g.y)||b(E,g.x2,g.y)||b(E,g.x,g.y2)||b(E,g.x2,g.y2)||(E.x<g.x2&&E.x>g.x||g.x<E.x2&&g.x>E.x)&&(E.y<g.y2&&E.y>g.y||g.y<E.y2&&g.y>E.y)};function bl(b,bN,S,R,E){var i=-3*bN+9*S-9*R+3*E,g=b*i+6*bN-12*S+6*R;return b*g-3*bN+3*S}function s(bZ,S,bY,E,bX,g,bU,b,bR){if(bR==null){bR=1}bR=bR>1?1:bR<0?0:bR;var bS=bR/2,bT=12,bO=[-0.1252,0.1252,-0.3678,0.3678,-0.5873,0.5873,-0.7699,0.7699,-0.9041,0.9041,-0.9816,0.9816],bW=[0.2491,0.2491,0.2335,0.2335,0.2032,0.2032,0.1601,0.1601,0.1069,0.1069,0.0472,0.0472],R=0;for(var bV=0;bV<bT;bV++){var bP=bS*bO[bV]+bS,bQ=bl(bP,bZ,bY,bX,bU),b0=bl(bP,S,E,g,b),bN=bQ*bQ+b0*b0;R+=bW[bV]*aw.sqrt(bN)}return bS*R}function F(i,bS,g,bR,b,bP,bU,bO,bQ){if(bQ<0||s(i,bS,g,bR,b,bP,bU,bO)<bQ){return}var bT=1,E=bT/2,S=bT-E,R,bN=0.01;R=s(i,bS,g,bR,b,bP,bU,bO,S);while(ay(R-bQ)>bN){E/=2;S+=(R<bQ?1:-1)*E;R=s(i,bS,g,bR,b,bP,bU,bO,S)}return S}function Q(E,bT,i,bR,b,bQ,bV,bP){if(o(E,i)<bo(b,bV)||bo(E,i)>o(b,bV)||o(bT,bR)<bo(bQ,bP)||bo(bT,bR)>o(bQ,bP)){return}var bO=(E*bR-bT*i)*(b-bV)-(E-i)*(b*bP-bQ*bV),bN=(E*bR-bT*i)*(bQ-bP)-(bT-bR)*(b*bP-bQ*bV),R=(E-i)*(bQ-bP)-(bT-bR)*(b-bV);if(!R){return}var bU=bO/R,bS=bN/R,S=+bU.toFixed(2),g=+bS.toFixed(2);if(S<+bo(E,i).toFixed(2)||S>+o(E,i).toFixed(2)||S<+bo(b,bV).toFixed(2)||S>+o(b,bV).toFixed(2)||g<+bo(bT,bR).toFixed(2)||g>+o(bT,bR).toFixed(2)||g<+bo(bQ,bP).toFixed(2)||g>+o(bQ,bP).toFixed(2)){return}return{x:bU,y:bS}}function aA(g,b){return ah(g,b)}function v(g,b){return ah(g,b,1)}function ah(b5,b4,b3){var R=aT.bezierBBox(b5),g=aT.bezierBBox(b4);if(!aT.isBBoxIntersect(R,g)){return b3?0:[]}var bY=s.apply(0,b5),bX=s.apply(0,b4),bP=~~(bY/5),bO=~~(bX/5),bV=[],bU=[],E={},b6=b3?0:[];for(var b0=0;b0<bP+1;b0++){var bW=aT.findDotsAtSegment.apply(aT,b5.concat(b0/bP));bV.push({x:bW.x,y:bW.y,t:b0/bP})}for(b0=0;b0<bO+1;b0++){bW=aT.findDotsAtSegment.apply(aT,b4.concat(b0/bO));bU.push({x:bW.x,y:bW.y,t:b0/bO})}for(b0=0;b0<bP;b0++){for(var bZ=0;bZ<bO;bZ++){var b2=bV[b0],b=bV[b0+1],b1=bU[bZ],bN=bU[bZ+1],bT=ay(b.x-b2.x)<0.001?"y":"x",bS=ay(bN.x-b1.x)<0.001?"y":"x",S=Q(b2.x,b2.y,b.x,b.y,b1.x,b1.y,bN.x,bN.y);if(S){if(E[S.x.toFixed(4)]==S.y.toFixed(4)){continue}E[S.x.toFixed(4)]=S.y.toFixed(4);var bR=b2.t+ay((S[bT]-b2[bT])/(b[bT]-b2[bT]))*(b.t-b2.t),bQ=b1.t+ay((S[bS]-b1[bS])/(bN[bS]-b1[bS]))*(bN.t-b1.t);if(bR>=0&&bR<=1&&bQ>=0&&bQ<=1){if(b3){b6++}else{b6.push({x:S.x,y:S.y,t1:bR,t2:bQ})}}}}}return b6}aT.pathIntersection=function(g,b){return G(g,b)};aT.pathIntersectionNumber=function(g,b){return G(g,b,1)};function G(E,b,bZ){E=aT._path2curve(E);b=aT._path2curve(b);var bX,bN,bW,R,bU,bO,g,bR,b3,b2,b4=bZ?0:[];for(var bV=0,bP=E.length;bV<bP;bV++){var b1=E[bV];if(b1[0]=="M"){bX=bU=b1[1];bN=bO=b1[2]}else{if(b1[0]=="C"){b3=[bX,bN].concat(b1.slice(1));bX=b3[6];bN=b3[7]}else{b3=[bX,bN,bX,bN,bU,bO,bU,bO];bX=bU;bN=bO}for(var bT=0,bY=b.length;bT<bY;bT++){var b0=b[bT];if(b0[0]=="M"){bW=g=b0[1];R=bR=b0[2]}else{if(b0[0]=="C"){b2=[bW,R].concat(b0.slice(1));bW=b2[6];R=b2[7]}else{b2=[bW,R,bW,R,g,bR,g,bR];bW=g;R=bR}var bQ=ah(b3,b2,bZ);if(bZ){b4+=bQ}else{for(var bS=0,S=bQ.length;bS<S;bS++){bQ[bS].segment1=bV;bQ[bS].segment2=bT;bQ[bS].bez1=b3;bQ[bS].bez2=b2}b4=b4.concat(bQ)}}}}}return b4}aT.isPointInsidePath=function(g,b,E){var i=aT.pathBBox(g);return aT.isPointInsideBBox(i,b,E)&&G(g,[["M",b,E],["H",i.x2+10]],1)%2==1};aT._removedFactory=function(b){return function(){eve("raphael.log",null,"Rapha\xebl: you are calling to method \u201c"+b+"\u201d of removed object",b)}};var ao=aT.pathBBox=function(bW){var bQ=aa(bW);if(bQ.bbox){return Z(bQ.bbox)}if(!bW){return{x:0,y:0,width:0,height:0,x2:0,y2:0}}bW=Y(bW);var bT=0,bS=0,S=[],g=[],E;for(var bO=0,bV=bW.length;bO<bV;bO++){E=bW[bO];if(E[0]=="M"){bT=E[1];bS=E[2];S.push(bT);g.push(bS)}else{var bP=bc(bT,bS,E[1],E[2],E[3],E[4],E[5],E[6]);S=S[bG](bP.min.x,bP.max.x);g=g[bG](bP.min.y,bP.max.y);bT=E[5];bS=E[6]}}var b=bo[bI](0,S),bU=bo[bI](0,g),bN=o[bI](0,S),R=o[bI](0,g),bR={x:b,y:bU,x2:bN,y2:R,width:bN-b,height:R-bU};bQ.bbox=Z(bR);return bR},a1=function(g){var b=Z(g);b.toString=aT._path2string;return b},aE=aT._pathToRelative=function(R){var bP=aa(R);if(bP.rel){return a1(bP.rel)}if(!aT.is(R,bf)||!aT.is(R&&R[0],bf)){R=aT.parsePathString(R)}var bS=[],bU=0,bT=0,bX=0,bW=0,E=0;if(R[0][0]=="M"){bU=R[0][1];bT=R[0][2];bX=bU;bW=bT;E++;bS.push(["M",bU,bT])}for(var bO=E,bY=R.length;bO<bY;bO++){var b=bS[bO]=[],bV=R[bO];if(bV[0]!=bM.call(bV[0])){b[0]=bM.call(bV[0]);switch(b[0]){case"a":b[1]=bV[1];b[2]=bV[2];b[3]=bV[3];b[4]=bV[4];b[5]=bV[5];b[6]=+(bV[6]-bU).toFixed(3);b[7]=+(bV[7]-bT).toFixed(3);break;case"v":b[1]=+(bV[1]-bT).toFixed(3);break;case"m":bX=bV[1];bW=bV[2];default:for(var bN=1,bQ=bV.length;bN<bQ;bN++){b[bN]=+(bV[bN]-((bN%2)?bU:bT)).toFixed(3)}}}else{b=bS[bO]=[];if(bV[0]=="m"){bX=bV[1]+bU;bW=bV[2]+bT}for(var S=0,g=bV.length;S<g;S++){bS[bO][S]=bV[S]}}var bR=bS[bO].length;switch(bS[bO][0]){case"z":bU=bX;bT=bW;break;case"h":bU+=+bS[bO][bR-1];break;case"v":bT+=+bS[bO][bR-1];break;default:bU+=+bS[bO][bR-2];bT+=+bS[bO][bR-1]}}bS.toString=aT._path2string;bP.rel=a1(bS);return bS},y=aT._pathToAbsolute=function(bT){var E=aa(bT);if(E.abs){return a1(E.abs)}if(!aT.is(bT,bf)||!aT.is(bT&&bT[0],bf)){bT=aT.parsePathString(bT)}if(!bT||!bT.length){return[["M",0,0]]}var bZ=[],bO=0,bN=0,bR=0,bQ=0,R=0;if(bT[0][0]=="M"){bO=+bT[0][1];bN=+bT[0][2];bR=bO;bQ=bN;R++;bZ[0]=["M",bO,bN]}var bY=bT.length==3&&bT[0][0]=="M"&&bT[1][0].toUpperCase()=="R"&&bT[2][0].toUpperCase()=="Z";for(var bS,b,bW=R,bP=bT.length;bW<bP;bW++){bZ.push(bS=[]);b=bT[bW];if(b[0]!=bv.call(b[0])){bS[0]=bv.call(b[0]);switch(bS[0]){case"A":bS[1]=b[1];bS[2]=b[2];bS[3]=b[3];bS[4]=b[4];bS[5]=b[5];bS[6]=+(b[6]+bO);bS[7]=+(b[7]+bN);break;case"V":bS[1]=+b[1]+bN;break;case"H":bS[1]=+b[1]+bO;break;case"R":var S=[bO,bN][bG](b.slice(1));for(var bV=2,bX=S.length;bV<bX;bV++){S[bV]=+S[bV]+bO;S[++bV]=+S[bV]+bN}bZ.pop();bZ=bZ[bG](bd(S,bY));break;case"M":bR=+b[1]+bO;bQ=+b[2]+bN;default:for(bV=1,bX=b.length;bV<bX;bV++){bS[bV]=+b[bV]+((bV%2)?bO:bN)}}}else{if(b[0]=="R"){S=[bO,bN][bG](b.slice(1));bZ.pop();bZ=bZ[bG](bd(S,bY));bS=["R"][bG](b.slice(-2))}else{for(var bU=0,g=b.length;bU<g;bU++){bS[bU]=b[bU]}}}switch(bS[0]){case"Z":bO=bR;bN=bQ;break;case"H":bO=bS[1];break;case"V":bN=bS[1];break;case"M":bR=bS[bS.length-2];bQ=bS[bS.length-1];default:bO=bS[bS.length-2];bN=bS[bS.length-1]}}bZ.toString=aT._path2string;E.abs=a1(bZ);return bZ},bK=function(g,E,b,i){return[g,E,b,i,b,i]},bp=function(g,E,bN,R,b,i){var S=1/3,bO=2/3;return[S*g+bO*bN,S*E+bO*R,S*b+bO*bN,S*i+bO*R,b,i]},ag=function(bV,cq,b4,b2,bW,bQ,R,bU,cp,bX){var b1=aX*120/180,b=aX/180*(+bW||0),b8=[],b5,cm=aI(function(cr,cu,i){var ct=cr*aw.cos(i)-cu*aw.sin(i),cs=cr*aw.sin(i)+cu*aw.cos(i);return{x:ct,y:cs}});if(!bX){b5=cm(bV,cq,-b);bV=b5.x;cq=b5.y;b5=cm(bU,cp,-b);bU=b5.x;cp=b5.y;var g=aw.cos(aX/180*bW),bS=aw.sin(aX/180*bW),ca=(bV-bU)/2,b9=(cq-cp)/2;var ck=(ca*ca)/(b4*b4)+(b9*b9)/(b2*b2);if(ck>1){ck=aw.sqrt(ck);b4=ck*b4;b2=ck*b2}var E=b4*b4,cd=b2*b2,cf=(bQ==R?-1:1)*aw.sqrt(ay((E*cd-E*b9*b9-cd*ca*ca)/(E*b9*b9+cd*ca*ca))),bZ=cf*b4*b9/b2+(bV+bU)/2,bY=cf*-b2*ca/b4+(cq+cp)/2,bP=aw.asin(((cq-bY)/b2).toFixed(9)),bO=aw.asin(((cp-bY)/b2).toFixed(9));bP=bV<bZ?aX-bP:bP;bO=bU<bZ?aX-bO:bO;bP<0&&(bP=aX*2+bP);bO<0&&(bO=aX*2+bO);if(R&&bP>bO){bP=bP-aX*2}if(!R&&bO>bP){bO=bO-aX*2}}else{bP=bX[0];bO=bX[1];bZ=bX[2];bY=bX[3]}var bT=bO-bP;if(ay(bT)>b1){var b0=bO,b3=bU,bR=cp;bO=bP+b1*(R&&bO>bP?1:-1);bU=bZ+b4*aw.cos(bO);cp=bY+b2*aw.sin(bO);b8=ag(bU,cp,b4,b2,bW,0,R,b3,bR,[bO,b0,bZ,bY])}bT=bO-bP;var bN=aw.cos(bP),co=aw.sin(bP),S=aw.cos(bO),cn=aw.sin(bO),cb=aw.tan(bT/4),ce=4/3*b4*cb,cc=4/3*b2*cb,cl=[bV,cq],cj=[bV+ce*co,cq-cc*bN],ci=[bU+ce*cn,cp-cc*S],cg=[bU,cp];cj[0]=2*cl[0]-cj[0];cj[1]=2*cl[1]-cj[1];if(bX){return[cj,ci,cg][bG](b8)}else{b8=[cj,ci,cg][bG](b8).join()[H](",");var b6=[];for(var ch=0,b7=b8.length;ch<b7;ch++){b6[ch]=ch%2?cm(b8[ch-1],b8[ch],b).y:cm(b8[ch],b8[ch+1],b).x}return b6}},ai=function(g,b,E,i,bP,bO,bN,S,bQ){var R=1-bQ;return{x:br(R,3)*g+br(R,2)*3*bQ*E+R*3*bQ*bQ*bP+br(bQ,3)*bN,y:br(R,3)*b+br(R,2)*3*bQ*i+R*3*bQ*bQ*bO+br(bQ,3)*S}},bc=aI(function(E,g,S,R,bX,bW,bT,bQ){var bV=(bX-2*S+E)-(bT-2*bX+S),bS=2*(S-E)-2*(bX-S),bP=E-S,bO=(-bS+aw.sqrt(bS*bS-4*bV*bP))/2/bV,bN=(-bS-aw.sqrt(bS*bS-4*bV*bP))/2/bV,bR=[g,bQ],bU=[E,bT],i;ay(bO)>"1e12"&&(bO=0.5);ay(bN)>"1e12"&&(bN=0.5);if(bO>0&&bO<1){i=ai(E,g,S,R,bX,bW,bT,bQ,bO);bU.push(i.x);bR.push(i.y)}if(bN>0&&bN<1){i=ai(E,g,S,R,bX,bW,bT,bQ,bN);bU.push(i.x);bR.push(i.y)}bV=(bW-2*R+g)-(bQ-2*bW+R);bS=2*(R-g)-2*(bW-R);bP=g-R;bO=(-bS+aw.sqrt(bS*bS-4*bV*bP))/2/bV;bN=(-bS-aw.sqrt(bS*bS-4*bV*bP))/2/bV;ay(bO)>"1e12"&&(bO=0.5);ay(bN)>"1e12"&&(bN=0.5);if(bO>0&&bO<1){i=ai(E,g,S,R,bX,bW,bT,bQ,bO);bU.push(i.x);bR.push(i.y)}if(bN>0&&bN<1){i=ai(E,g,S,R,bX,bW,bT,bQ,bN);bU.push(i.x);bR.push(i.y)}return{min:{x:bo[bI](0,bU),y:bo[bI](0,bR)},max:{x:o[bI](0,bU),y:o[bI](0,bR)}}}),Y=aT._path2curve=aI(function(bX,bS){var bQ=!bS&&aa(bX);if(!bS&&bQ.curve){return a1(bQ.curve)}var R=y(bX),bT=bS&&y(bS),bU={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},g={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},bN=function(bY,bZ){var i,b0;if(!bY){return["C",bZ.x,bZ.y,bZ.x,bZ.y,bZ.x,bZ.y]}!(bY[0] in {T:1,Q:1})&&(bZ.qx=bZ.qy=null);switch(bY[0]){case"M":bZ.X=bY[1];bZ.Y=bY[2];break;case"A":bY=["C"][bG](ag[bI](0,[bZ.x,bZ.y][bG](bY.slice(1))));break;case"S":i=bZ.x+(bZ.x-(bZ.bx||bZ.x));b0=bZ.y+(bZ.y-(bZ.by||bZ.y));bY=["C",i,b0][bG](bY.slice(1));break;case"T":bZ.qx=bZ.x+(bZ.x-(bZ.qx||bZ.x));bZ.qy=bZ.y+(bZ.y-(bZ.qy||bZ.y));bY=["C"][bG](bp(bZ.x,bZ.y,bZ.qx,bZ.qy,bY[1],bY[2]));break;case"Q":bZ.qx=bY[1];bZ.qy=bY[2];bY=["C"][bG](bp(bZ.x,bZ.y,bY[1],bY[2],bY[3],bY[4]));break;case"L":bY=["C"][bG](bK(bZ.x,bZ.y,bY[1],bY[2]));break;case"H":bY=["C"][bG](bK(bZ.x,bZ.y,bY[1],bZ.y));break;case"V":bY=["C"][bG](bK(bZ.x,bZ.y,bZ.x,bY[1]));break;case"Z":bY=["C"][bG](bK(bZ.x,bZ.y,bZ.X,bZ.Y));break}return bY},b=function(bY,bZ){if(bY[bZ].length>7){bY[bZ].shift();var b0=bY[bZ];while(b0.length){bY.splice(bZ++,0,["C"][bG](b0.splice(0,6)))}bY.splice(bZ,1);bV=o(R.length,bT&&bT.length||0)}},E=function(b2,b1,bZ,bY,b0){if(b2&&b1&&b2[b0][0]=="M"&&b1[b0][0]!="M"){b1.splice(b0,0,["M",bY.x,bY.y]);bZ.bx=0;bZ.by=0;bZ.x=b2[b0][1];bZ.y=b2[b0][2];bV=o(R.length,bT&&bT.length||0)}};for(var bP=0,bV=o(R.length,bT&&bT.length||0);bP<bV;bP++){R[bP]=bN(R[bP],bU);b(R,bP);bT&&(bT[bP]=bN(bT[bP],g));bT&&b(bT,bP);E(R,bT,bU,g,bP);E(bT,R,g,bU,bP);var bO=R[bP],bW=bT&&bT[bP],S=bO.length,bR=bT&&bW.length;bU.x=bO[S-2];bU.y=bO[S-1];bU.bx=ap(bO[S-4])||bU.x;bU.by=ap(bO[S-3])||bU.y;g.bx=bT&&(ap(bW[bR-4])||g.x);g.by=bT&&(ap(bW[bR-3])||g.y);g.x=bT&&bW[bR-2];g.y=bT&&bW[bR-1]}if(!bT){bQ.curve=a1(R)}return bT?[R,bT]:R},null,a1),x=aT._parseDots=aI(function(bQ){var bP=[];for(var S=0,bR=bQ.length;S<bR;S++){var b={},bO=bQ[S].match(/^([^:]*):?([\d\.]*)/);b.color=aT.getRGB(bO[1]);if(b.color.error){return null}b.color=b.color.hex;bO[2]&&(b.offset=bO[2]+"%");bP.push(b)}for(S=1,bR=bP.length-1;S<bR;S++){if(!bP[S].offset){var g=ap(bP[S-1].offset||0),E=0;for(var R=S+1;R<bR;R++){if(bP[R].offset){E=bP[R].offset;break}}if(!E){E=100;R=bR}E=ap(E);var bN=(E-g)/(R-S+1);for(;S<R;S++){g+=bN;bP[S].offset=g+"%"}}}return bP}),aM=aT._tear=function(b,g){b==g.top&&(g.top=b.prev);b==g.bottom&&(g.bottom=b.next);b.next&&(b.next.prev=b.prev);b.prev&&(b.prev.next=b.next)},ar=aT._tofront=function(b,g){if(g.top===b){return}aM(b,g);b.next=null;b.prev=g.top;g.top.next=b;g.top=b},r=aT._toback=function(b,g){if(g.bottom===b){return}aM(b,g);b.next=g.bottom;b.prev=null;g.bottom.prev=b;g.bottom=b},I=aT._insertafter=function(g,b,i){aM(g,i);b==i.top&&(i.top=g);b.next&&(b.next.prev=g);g.next=b.next;g.prev=b;b.next=g},aV=aT._insertbefore=function(g,b,i){aM(g,i);b==i.bottom&&(i.bottom=g);b.prev&&(b.prev.next=g);g.prev=b.prev;b.prev=g;g.next=b},bn=aT.toMatrix=function(i,b){var E=ao(i),g={_:{transform:aZ},getBBox:function(){return E}};aQ(g,b);return g.matrix},V=aT.transformPath=function(g,b){return N(g,bn(g,b))},aQ=aT._extractTransform=function(g,b2){if(b2==null){return g._.transform}b2=bJ(b2).replace(/\.{3}|\u2026/g,g._.transform||aZ);var bU=aT.parseTransformString(b2),bS=0,bQ=0,bP=0,bW=1,bV=1,b3=g._,bX=new aH;b3.transform=bU||[];if(bU){for(var bY=0,bR=bU.length;bY<bR;bY++){var bT=bU[bY],b=bT.length,S=bJ(bT[0]).toLowerCase(),b1=bT[0]!=S,bO=b1?bX.invert():0,b0,R,bZ,E,bN;if(S=="t"&&b==3){if(b1){b0=bO.x(0,0);R=bO.y(0,0);bZ=bO.x(bT[1],bT[2]);E=bO.y(bT[1],bT[2]);bX.translate(bZ-b0,E-R)}else{bX.translate(bT[1],bT[2])}}else{if(S=="r"){if(b==2){bN=bN||g.getBBox(1);bX.rotate(bT[1],bN.x+bN.width/2,bN.y+bN.height/2);bS+=bT[1]}else{if(b==4){if(b1){bZ=bO.x(bT[2],bT[3]);E=bO.y(bT[2],bT[3]);bX.rotate(bT[1],bZ,E)}else{bX.rotate(bT[1],bT[2],bT[3])}bS+=bT[1]}}}else{if(S=="s"){if(b==2||b==3){bN=bN||g.getBBox(1);bX.scale(bT[1],bT[b-1],bN.x+bN.width/2,bN.y+bN.height/2);bW*=bT[1];bV*=bT[b-1]}else{if(b==5){if(b1){bZ=bO.x(bT[3],bT[4]);E=bO.y(bT[3],bT[4]);bX.scale(bT[1],bT[2],bZ,E)}else{bX.scale(bT[1],bT[2],bT[3],bT[4])}bW*=bT[1];bV*=bT[2]}}}else{if(S=="m"&&b==7){bX.add(bT[1],bT[2],bT[3],bT[4],bT[5],bT[6])}}}}b3.dirtyT=1;g.matrix=bX}}g.matrix=bX;b3.sx=bW;b3.sy=bV;b3.deg=bS;b3.dx=bQ=bX.e;b3.dy=bP=bX.f;if(bW==1&&bV==1&&!bS&&b3.bbox){b3.bbox.x+=+bQ;b3.bbox.y+=+bP}else{b3.dirtyT=1}},n=function(g){var b=g[0];switch(b.toLowerCase()){case"t":return[b,0,0];case"m":return[b,1,0,0,1,0,0];case"r":if(g.length==4){return[b,0,g[2],g[3]]}else{return[b,0]}case"s":if(g.length==5){return[b,1,1,g[3],g[4]]}else{if(g.length==3){return[b,1,1]}else{return[b,1]}}}},aD=aT._equaliseTransform=function(S,R){R=bJ(R).replace(/\.{3}|\u2026/g,S);S=aT.parseTransformString(S)||[];R=aT.parseTransformString(R)||[];var b=o(S.length,R.length),bQ=[],bR=[],E=0,g,bN,bP,bO;for(;E<b;E++){bP=S[E]||n(R[E]);bO=R[E]||n(bP);if((bP[0]!=bO[0])||(bP[0].toLowerCase()=="r"&&(bP[2]!=bO[2]||bP[3]!=bO[3]))||(bP[0].toLowerCase()=="s"&&(bP[3]!=bO[3]||bP[4]!=bO[4]))){return}bQ[E]=[];bR[E]=[];for(g=0,bN=o(bP.length,bO.length);g<bN;g++){g in bP&&(bQ[E][g]=bP[g]);g in bO&&(bR[E][g]=bO[g])}}return{from:bQ,to:bR}};aT._getContainer=function(b,R,i,E){var g;g=E==null&&!aT.is(b,"object")?aC.doc.getElementById(b):b;if(g==null){return}if(g.tagName){if(R==null){return{container:g,width:g.style.pixelWidth||g.offsetWidth,height:g.style.pixelHeight||g.offsetHeight}}else{return{container:g,width:R,height:i}}}return{container:1,x:b,y:R,width:i,height:E}};aT.pathToRelative=aE;aT._engine={};aT.path2curve=Y;aT.matrix=function(i,g,bN,S,R,E){return new aH(i,g,bN,S,R,E)};function aH(i,g,bN,S,R,E){if(i!=null){this.a=+i;this.b=+g;this.c=+bN;this.d=+S;this.e=+R;this.f=+E}else{this.a=1;this.b=0;this.c=0;this.d=1;this.e=0;this.f=0}}(function(i){i.add=function(bW,bT,bR,bP,bN,S){var R=[[],[],[]],E=[[this.a,this.c,this.e],[this.b,this.d,this.f],[0,0,1]],bV=[[bW,bR,bN],[bT,bP,S],[0,0,1]],bU,bS,bQ,bO;if(bW&&bW instanceof aH){bV=[[bW.a,bW.c,bW.e],[bW.b,bW.d,bW.f],[0,0,1]]}for(bU=0;bU<3;bU++){for(bS=0;bS<3;bS++){bO=0;for(bQ=0;bQ<3;bQ++){bO+=E[bU][bQ]*bV[bQ][bS]}R[bU][bS]=bO}}this.a=R[0][0];this.b=R[1][0];this.c=R[0][1];this.d=R[1][1];this.e=R[0][2];this.f=R[1][2]};i.invert=function(){var R=this,E=R.a*R.d-R.b*R.c;return new aH(R.d/E,-R.b/E,-R.c/E,R.a/E,(R.c*R.f-R.d*R.e)/E,(R.b*R.e-R.a*R.f)/E)};i.clone=function(){return new aH(this.a,this.b,this.c,this.d,this.e,this.f)};i.translate=function(E,R){this.add(1,0,0,1,E,R)};i.scale=function(R,bN,E,S){bN==null&&(bN=R);(E||S)&&this.add(1,0,0,1,E,S);this.add(R,0,0,bN,0,0);(E||S)&&this.add(1,0,0,1,-E,-S)};i.rotate=function(R,E,bO){R=aT.rad(R);E=E||0;bO=bO||0;var bN=+aw.cos(R).toFixed(9),S=+aw.sin(R).toFixed(9);this.add(bN,S,-S,bN,E,bO);this.add(1,0,0,1,-E,-bO)};i.x=function(E,R){return E*this.a+R*this.c+this.e};i.y=function(E,R){return E*this.b+R*this.d+this.f};i.get=function(E){return +this[bJ.fromCharCode(97+E)].toFixed(4)};i.toString=function(){return aT.svg?"matrix("+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)].join()+")":[this.get(0),this.get(2),this.get(1),this.get(3),0,0].join()};i.toFilter=function(){return"progid:DXImageTransform.Microsoft.Matrix(M11="+this.get(0)+", M12="+this.get(2)+", M21="+this.get(1)+", M22="+this.get(3)+", Dx="+this.get(4)+", Dy="+this.get(5)+", sizingmethod='auto expand')"};i.offset=function(){return[this.e.toFixed(4),this.f.toFixed(4)]};function g(E){return E[0]*E[0]+E[1]*E[1]}function b(E){var R=aw.sqrt(g(E));E[0]&&(E[0]/=R);E[1]&&(E[1]/=R)}i.split=function(){var R={};R.dx=this.e;R.dy=this.f;var bN=[[this.a,this.c],[this.b,this.d]];R.scalex=aw.sqrt(g(bN[0]));b(bN[0]);R.shear=bN[0][0]*bN[1][0]+bN[0][1]*bN[1][1];bN[1]=[bN[1][0]-bN[0][0]*R.shear,bN[1][1]-bN[0][1]*R.shear];R.scaley=aw.sqrt(g(bN[1]));b(bN[1]);R.shear/=R.scaley;var E=-bN[0][1],S=bN[1][1];if(S<0){R.rotate=aT.deg(aw.acos(S));if(E<0){R.rotate=360-R.rotate}}else{R.rotate=aT.deg(aw.asin(E))}R.isSimple=!+R.shear.toFixed(9)&&(R.scalex.toFixed(9)==R.scaley.toFixed(9)||!R.rotate);R.isSuperSimple=!+R.shear.toFixed(9)&&R.scalex.toFixed(9)==R.scaley.toFixed(9)&&!R.rotate;R.noRotation=!+R.shear.toFixed(9)&&!R.rotate;return R};i.toTransformString=function(E){var R=E||this[H]();if(R.isSimple){R.scalex=+R.scalex.toFixed(4);R.scaley=+R.scaley.toFixed(4);R.rotate=+R.rotate.toFixed(4);return(R.dx||R.dy?"t"+[R.dx,R.dy]:aZ)+(R.scalex!=1||R.scaley!=1?"s"+[R.scalex,R.scaley,0,0]:aZ)+(R.rotate?"r"+[R.rotate,0,0]:aZ)}else{return"m"+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)]}}})(aH.prototype);var X=navigator.userAgent.match(/Version\/(.*?)\s/)||navigator.userAgent.match(/Chrome\/(\d+)/);if((navigator.vendor=="Apple Computer, Inc.")&&(X&&X[1]<4||navigator.platform.slice(0,2)=="iP")||(navigator.vendor=="Google Inc."&&X&&X[1]<8)){a6.safari=function(){var b=this.rect(-99,-99,this.width+99,this.height+99).attr({stroke:"none"});setTimeout(function(){b.remove()})}}else{a6.safari=K}var T=function(){this.returnValue=false},bF=function(){return this.originalEvent.preventDefault()},ba=function(){this.cancelBubble=true},aL=function(){return this.originalEvent.stopPropagation()},aF=(function(){if(aC.doc.addEventListener){return function(S,E,i,g){var b=ab&&bz[E]?bz[E]:E,R=function(bS){var bR=aC.doc.documentElement.scrollTop||aC.doc.body.scrollTop,bT=aC.doc.documentElement.scrollLeft||aC.doc.body.scrollLeft,bN=bS.clientX+bT,bU=bS.clientY+bR;if(ab&&bz[am](E)){for(var bP=0,bQ=bS.targetTouches&&bS.targetTouches.length;bP<bQ;bP++){if(bS.targetTouches[bP].target==S){var bO=bS;bS=bS.targetTouches[bP];bS.originalEvent=bO;bS.preventDefault=bF;bS.stopPropagation=aL;break}}}return i.call(g,bS,bN,bU)};S.addEventListener(b,R,false);return function(){S.removeEventListener(b,R,false);return true}}}else{if(aC.doc.attachEvent){return function(S,E,i,g){var R=function(bP){bP=bP||aC.win.event;var bO=aC.doc.documentElement.scrollTop||aC.doc.body.scrollTop,bQ=aC.doc.documentElement.scrollLeft||aC.doc.body.scrollLeft,bN=bP.clientX+bQ,bR=bP.clientY+bO;bP.preventDefault=bP.preventDefault||T;bP.stopPropagation=bP.stopPropagation||ba;return i.call(g,bP,bN,bR)};S.attachEvent("on"+E,R);var b=function(){S.detachEvent("on"+E,R);return true};return b}}}})(),bg=[],bA=function(bP){var bS=bP.clientX,bR=bP.clientY,bU=aC.doc.documentElement.scrollTop||aC.doc.body.scrollTop,bV=aC.doc.documentElement.scrollLeft||aC.doc.body.scrollLeft,E,R=bg.length;while(R--){E=bg[R];if(ab){var bN=bP.touches.length,S;while(bN--){S=bP.touches[bN];if(S.identifier==E.el._drag.id){bS=S.clientX;bR=S.clientY;(bP.originalEvent?bP.originalEvent:bP).preventDefault();break}}}else{bP.preventDefault()}var g=E.el.node,b,bO=g.nextSibling,bT=g.parentNode,bQ=g.style.display;aC.win.opera&&bT.removeChild(g);g.style.display="none";b=E.el.paper.getElementByPoint(bS,bR);g.style.display=bQ;aC.win.opera&&(bO?bT.insertBefore(g,bO):bT.appendChild(g));b&&eve("raphael.drag.over."+E.el.id,E.el,b);bS+=bV;bR+=bU;eve("raphael.drag.move."+E.el.id,E.move_scope||E.el,bS-E.el._drag.x,bR-E.el._drag.y,bS,bR,bP)}},e=function(E){aT.unmousemove(bA).unmouseup(e);var g=bg.length,b;while(g--){b=bg[g];b.el._drag={};eve("raphael.drag.end."+b.el.id,b.end_scope||b.start_scope||b.move_scope||b.el,E)}bg=[]},bj=aT.el={};for(var az=U.length;az--;){(function(b){aT[b]=bj[b]=function(i,g){if(aT.is(i,"function")){this.events=this.events||[];this.events.push({name:b,f:i,unbind:aF(this.shape||this.node||aC.doc,b,i,g||this)})}return this};aT["un"+b]=bj["un"+b]=function(E){var i=this.events||[],g=i.length;while(g--){if(i[g].name==b&&i[g].f==E){i[g].unbind();i.splice(g,1);!i.length&&delete this.events;return this}}return this}})(U[az])}bj.data=function(g,R){var E=aW[this.id]=aW[this.id]||{};if(arguments.length==1){if(aT.is(g,"object")){for(var b in g){if(g[am](b)){this.data(b,g[b])}}return this}eve("raphael.data.get."+this.id,this,E[g],g);return E[g]}E[g]=R;eve("raphael.data.set."+this.id,this,R,g);return this};bj.removeData=function(b){if(b==null){aW[this.id]={}}else{aW[this.id]&&delete aW[this.id][b]}return this};bj.hover=function(E,b,i,g){return this.mouseover(E,i).mouseout(b,g||i)};bj.unhover=function(g,b){return this.unmouseover(g).unmouseout(b)};var bw=[];bj.drag=function(g,S,R,b,i,E){function bN(bP){(bP.originalEvent||bP).preventDefault();var bO=aC.doc.documentElement.scrollTop||aC.doc.body.scrollTop,bQ=aC.doc.documentElement.scrollLeft||aC.doc.body.scrollLeft;this._drag.x=bP.clientX+bQ;this._drag.y=bP.clientY+bO;this._drag.id=bP.identifier;!bg.length&&aT.mousemove(bA).mouseup(e);bg.push({el:this,move_scope:b,start_scope:i,end_scope:E});S&&eve.on("raphael.drag.start."+this.id,S);g&&eve.on("raphael.drag.move."+this.id,g);R&&eve.on("raphael.drag.end."+this.id,R);eve("raphael.drag.start."+this.id,i||b||this,bP.clientX+bQ,bP.clientY+bO,bP)}this._drag={};bw.push({el:this,start:bN});this.mousedown(bN);return this};bj.onDragOver=function(b){b?eve.on("raphael.drag.over."+this.id,b):eve.unbind("raphael.drag.over."+this.id)};bj.undrag=function(){var b=bw.length;while(b--){if(bw[b].el==this){this.unmousedown(bw[b].start);bw.splice(b,1);eve.unbind("raphael.drag.*."+this.id)}}!bw.length&&aT.unmousemove(bA).unmouseup(e)};a6.circle=function(b,E,i){var g=aT._engine.circle(this,b||0,E||0,i||0);this.__set__&&this.__set__.push(g);return g};a6.rect=function(b,S,g,E,R){var i=aT._engine.rect(this,b||0,S||0,g||0,E||0,R||0);this.__set__&&this.__set__.push(i);return i};a6.ellipse=function(b,R,E,i){var g=aT._engine.ellipse(this,b||0,R||0,E||0,i||0);this.__set__&&this.__set__.push(g);return g};a6.path=function(b){b&&!aT.is(b,al)&&!aT.is(b[0],bf)&&(b+=aZ);var g=aT._engine.path(aT.format[bI](aT,arguments),this);this.__set__&&this.__set__.push(g);return g};a6.image=function(R,b,S,g,E){var i=aT._engine.image(this,R||"about:blank",b||0,S||0,g||0,E||0);this.__set__&&this.__set__.push(i);return i};a6.text=function(b,E,i){var g=aT._engine.text(this,b||0,E||0,bJ(i));this.__set__&&this.__set__.push(g);return g};a6.set=function(g){!aT.is(g,"array")&&(g=Array.prototype.splice.call(arguments,0,arguments.length));var b=new an(g);this.__set__&&this.__set__.push(b);b.paper=this;b.type="set";return b};a6.setStart=function(b){this.__set__=b||this.set()};a6.setFinish=function(g){var b=this.__set__;delete this.__set__;return b};a6.setSize=function(g,b){return aT._engine.setSize.call(this,g,b)};a6.setViewBox=function(b,R,g,E,i){return aT._engine.setViewBox.call(this,b,R,g,E,i)};a6.top=a6.bottom=null;a6.raphael=aT;var bu=function(i){var R=i.getBoundingClientRect(),bP=i.ownerDocument,S=bP.body,b=bP.documentElement,E=b.clientTop||S.clientTop||0,bN=b.clientLeft||S.clientLeft||0,bO=R.top+(aC.win.pageYOffset||b.scrollTop||S.scrollTop)-E,g=R.left+(aC.win.pageXOffset||b.scrollLeft||S.scrollLeft)-bN;return{y:bO,x:g}};a6.getElementByPoint=function(g,bO){var bN=this,i=bN.canvas,S=aC.doc.elementFromPoint(g,bO);if(aC.win.opera&&S.tagName=="svg"){var R=bu(i),E=i.createSVGRect();E.x=g-R.x;E.y=bO-R.y;E.width=E.height=1;var b=i.getIntersectionList(E,null);if(b.length){S=b[b.length-1]}}if(!S){return null}while(S.parentNode&&S!=i.parentNode&&!S.raphael){S=S.parentNode}S==bN.canvas.parentNode&&(S=i);S=S&&S.raphael?bN.getById(S.raphaelid):null;return S};a6.getById=function(g){var b=this.bottom;while(b){if(b.id==g){return b}b=b.next}return null};a6.forEach=function(i,b){var g=this.bottom;while(g){if(i.call(b,g)===false){return this}g=g.next}return this};a6.getElementsByPoint=function(b,i){var g=this.set();this.forEach(function(E){if(E.isPointInside(b,i)){g.push(E)}});return g};function A(){return this.x+aS+this.y}function av(){return this.x+aS+this.y+aS+this.width+" \xd7 "+this.height}bj.isPointInside=function(b,i){var g=this.realPath=this.realPath||P[this.type](this);return aT.isPointInsidePath(g,b,i)};bj.getBBox=function(g){if(this.removed){return{}}var b=this._;if(g){if(b.dirty||!b.bboxwt){this.realPath=P[this.type](this);b.bboxwt=ao(this.realPath);b.bboxwt.toString=av;b.dirty=0}return b.bboxwt}if(b.dirty||b.dirtyT||!b.bbox){if(b.dirty||!this.realPath){b.bboxwt=0;this.realPath=P[this.type](this)}b.bbox=ao(N(this.realPath,this.matrix));b.bbox.toString=av;b.dirty=b.dirtyT=0}return b.bbox};bj.clone=function(){if(this.removed){return null}var b=this.paper[this.type]().attr(this.attr());this.__set__&&this.__set__.push(b);return b};bj.glow=function(bO){if(this.type=="text"){return null}bO=bO||{};var E={width:(bO.width||10)+(+this.attr("stroke-width")||1),fill:bO.fill||false,opacity:bO.opacity||0.5,offsetx:bO.offsetx||0,offsety:bO.offsety||0,color:bO.color||"#000"},bN=E.width/2,R=this.paper,b=R.set(),S=this.realPath||P[this.type](this);S=this.matrix?N(S,this.matrix):S;for(var g=1;g<bN+1;g++){b.push(R.path(S).attr({stroke:E.color,fill:E.fill?E.color:"none","stroke-linejoin":"round","stroke-linecap":"round","stroke-width":+(E.width/bN*g).toFixed(3),opacity:+(E.opacity/bN).toFixed(3)}))}return b.insertBefore(this).translate(E.offsetx,E.offsety)};var a9={},m=function(g,b,R,E,bP,bO,bN,S,i){if(i==null){return s(g,b,R,E,bP,bO,bN,S)}else{return aT.findDotsAtSegment(g,b,R,E,bP,bO,bN,S,F(g,b,R,E,bP,bO,bN,S,i))}},a8=function(b,g){return function(bW,S,bN){bW=Y(bW);var bS,bR,E,bO,R="",bV={},bT,bQ=0;for(var bP=0,bU=bW.length;bP<bU;bP++){E=bW[bP];if(E[0]=="M"){bS=+E[1];bR=+E[2]}else{bO=m(bS,bR,E[1],E[2],E[3],E[4],E[5],E[6]);if(bQ+bO>S){if(g&&!bV.start){bT=m(bS,bR,E[1],E[2],E[3],E[4],E[5],E[6],S-bQ);R+=["C"+bT.start.x,bT.start.y,bT.m.x,bT.m.y,bT.x,bT.y];if(bN){return R}bV.start=R;R=["M"+bT.x,bT.y+"C"+bT.n.x,bT.n.y,bT.end.x,bT.end.y,E[5],E[6]].join();bQ+=bO;bS=+E[5];bR=+E[6];continue}if(!b&&!g){bT=m(bS,bR,E[1],E[2],E[3],E[4],E[5],E[6],S-bQ);return{x:bT.x,y:bT.y,alpha:bT.alpha}}}bQ+=bO;bS=+E[5];bR=+E[6]}R+=E.shift()+E}bV.end=R;bT=b?bQ:g?bV:aT.findDotsAtSegment(bS,bR,E[0],E[1],E[2],E[3],E[4],E[5],1);bT.alpha&&(bT={x:bT.x,y:bT.y,alpha:bT.alpha});return bT}};var aU=a8(1),L=a8(),af=a8(0,1);aT.getTotalLength=aU;aT.getPointAtLength=L;aT.getSubpath=function(g,E,i){if(this.getTotalLength(g)-i<0.000001){return af(g,E).end}var b=af(g,i,1);return E?af(b,E).end:b};bj.getTotalLength=function(){if(this.type!="path"){return}if(this.node.getTotalLength){return this.node.getTotalLength()}return aU(this.attrs.path)};bj.getPointAtLength=function(b){if(this.type!="path"){return}return L(this.attrs.path,b)};bj.getSubpath=function(g,b){if(this.type!="path"){return}return aT.getSubpath(this.attrs.path,g,b)};var q=aT.easing_formulas={linear:function(b){return b},"<":function(b){return br(b,1.7)},">":function(b){return br(b,0.48)},"<>":function(bO){var E=0.48-bO/1.04,i=aw.sqrt(0.1734+E*E),b=i-E,bN=br(ay(b),1/3)*(b<0?-1:1),S=-i-E,R=br(ay(S),1/3)*(S<0?-1:1),g=bN+R+0.5;return(1-g)*3*g*g+g*g*g},backIn:function(g){var b=1.70158;return g*g*((b+1)*g-b)},backOut:function(g){g=g-1;var b=1.70158;return g*g*((b+1)*g+b)+1},elastic:function(b){if(b==!!b){return b}return br(2,-10*b)*aw.sin((b-0.075)*(2*aX)/0.3)+1},bounce:function(E){var g=7.5625,i=2.75,b;if(E<(1/i)){b=g*E*E}else{if(E<(2/i)){E-=(1.5/i);b=g*E*E+0.75}else{if(E<(2.5/i)){E-=(2.25/i);b=g*E*E+0.9375}else{E-=(2.625/i);b=g*E*E+0.984375}}}return b}};q.easeIn=q["ease-in"]=q["<"];q.easeOut=q["ease-out"]=q[">"];q.easeInOut=q["ease-in-out"]=q["<>"];q["back-in"]=q.backIn;q["back-out"]=q.backOut;var ad=[],aP=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(b){setTimeout(b,16)},bE=function(){var bO=+new Date,bW=0;for(;bW<ad.length;bW++){var b2=ad[bW];if(b2.el.removed||b2.paused){continue}var R=bO-b2.start,bU=b2.ms,bT=b2.easing,bX=b2.from,bR=b2.diff,g=b2.to,bQ=b2.t,bN=b2.el,bS={},b,b0={},b4;if(b2.initstatus){R=(b2.initstatus*b2.anim.top-b2.prev)/(b2.percent-b2.prev)*bU;b2.status=b2.initstatus;delete b2.initstatus;b2.stop&&ad.splice(bW--,1)}else{b2.status=(b2.prev+(b2.percent-b2.prev)*(R/bU))/b2.anim.top}if(R<0){continue}if(R<bU){var E=bT(R/bU);for(var bV in bX){if(bX[am](bV)){switch(au[bV]){case aN:b=+bX[bV]+E*bU*bR[bV];break;case"colour":b="rgb("+[J(aj(bX[bV].r+E*bU*bR[bV].r)),J(aj(bX[bV].g+E*bU*bR[bV].g)),J(aj(bX[bV].b+E*bU*bR[bV].b))].join(",")+")";break;case"path":b=[];for(var bZ=0,bP=bX[bV].length;bZ<bP;bZ++){b[bZ]=[bX[bV][bZ][0]];for(var bY=1,b1=bX[bV][bZ].length;bY<b1;bY++){b[bZ][bY]=+bX[bV][bZ][bY]+E*bU*bR[bV][bZ][bY]}b[bZ]=b[bZ].join(aS)}b=b.join(aS);break;case"transform":if(bR[bV].real){b=[];for(bZ=0,bP=bX[bV].length;bZ<bP;bZ++){b[bZ]=[bX[bV][bZ][0]];for(bY=1,b1=bX[bV][bZ].length;bY<b1;bY++){b[bZ][bY]=bX[bV][bZ][bY]+E*bU*bR[bV][bZ][bY]}}}else{var b3=function(b5){return +bX[bV][b5]+E*bU*bR[bV][b5]};b=[["m",b3(0),b3(1),b3(2),b3(3),b3(4),b3(5)]]}break;case"csv":if(bV=="clip-rect"){b=[];bZ=4;while(bZ--){b[bZ]=+bX[bV][bZ]+E*bU*bR[bV][bZ]}}break;default:var S=[][bG](bX[bV]);b=[];bZ=bN.paper.customAttributes[bV].length;while(bZ--){b[bZ]=+S[bZ]+E*bU*bR[bV][bZ]}break}bS[bV]=b}}bN.attr(bS);(function(b6,i,b5){setTimeout(function(){eve("raphael.anim.frame."+b6,i,b5)})})(bN.id,bN,b2.anim)}else{(function(b6,b5,i){setTimeout(function(){eve("raphael.anim.frame."+b5.id,b5,i);eve("raphael.anim.finish."+b5.id,b5,i);aT.is(b6,"function")&&b6.call(b5)})})(b2.callback,bN,b2.anim);bN.attr(g);ad.splice(bW--,1);if(b2.repeat>1&&!b2.next){for(b4 in g){if(g[am](b4)){b0[b4]=b2.totalOrigin[b4]}}b2.el.attr(b0);aO(b2.anim,b2.el,b2.anim.percents[0],null,b2.totalOrigin,b2.repeat-1)}if(b2.next&&!b2.stop){aO(b2.anim,b2.el,b2.next,null,b2.totalOrigin,b2.repeat)}}}aT.svg&&bN&&bN.paper&&bN.paper.safari();ad.length&&aP(bE)},J=function(b){return b>255?255:b<0?0:b};bj.animateWith=function(g,R,E,b,bO,bT){var bN=this;if(bN.removed){bT&&bT.call(bN);return bN}var bR=E instanceof bC?E:aT.animation(E,b,bO,bT),bQ,bP;aO(bR,bN,bR.percents[0],null,bN.attr());for(var S=0,bS=ad.length;S<bS;S++){if(ad[S].anim==R&&ad[S].el==g){ad[bS-1].start=ad[S].start;break}}return bN};function a5(bU,E,g,bT,bS,bO){var bP=3*E,bR=3*(bT-E)-bP,b=1-bP-bR,bN=3*g,bQ=3*(bS-g)-bN,bV=1-bN-bQ;function S(bW){return((b*bW+bR)*bW+bP)*bW}function i(bW,bY){var bX=R(bW,bY);return((bV*bX+bQ)*bX+bN)*bX}function R(bW,b3){var b2,b1,bZ,bX,b0,bY;for(bZ=bW,bY=0;bY<8;bY++){bX=S(bZ)-bW;if(ay(bX)<b3){return bZ}b0=(3*b*bZ+2*bR)*bZ+bP;if(ay(b0)<0.000001){break}bZ=bZ-bX/b0}b2=0;b1=1;bZ=bW;if(bZ<b2){return b2}if(bZ>b1){return b1}while(b2<b1){bX=S(bZ);if(ay(bX-bW)<b3){return bZ}if(bW>bX){b2=bZ}else{b1=bZ}bZ=(b1-b2)/2+b2}return bZ}return i(bU,1/(200*bO))}bj.onAnimation=function(b){b?eve.on("raphael.anim.frame."+this.id,b):eve.unbind("raphael.anim.frame."+this.id);return this};function bC(R,i){var g=[],E={};this.ms=i;this.times=1;if(R){for(var b in R){if(R[am](b)){E[ap(b)]=R[b];g.push(ap(b))}}g.sort(w)}this.anim=E;this.top=g[g.length-1];this.percents=g}bC.prototype.delay=function(g){var b=new bC(this.anim,this.ms);b.times=this.times;b.del=+g||0;return b};bC.prototype.repeat=function(g){var b=new bC(this.anim,this.ms);b.del=this.del;b.times=aw.floor(o(g,0))||1;return b};function aO(b6,E,b,b4,bO,bS){b=ap(b);var cd,bN,bR,ce=[],bY,bX,S,b0=b6.ms,b5={},R={},bU={};if(b4){for(b9=0,bT=ad.length;b9<bT;b9++){var cb=ad[b9];if(cb.el.id==E.id&&cb.anim==b6){if(cb.percent!=b){ad.splice(b9,1);bR=1}else{bN=cb}E.attr(cb.totalOrigin);break}}}else{b4=+R}for(var b9=0,bT=b6.percents.length;b9<bT;b9++){if(b6.percents[b9]==b||b6.percents[b9]>b4*b6.top){b=b6.percents[b9];bX=b6.percents[b9-1]||0;b0=b0/b6.top*(b-bX);bY=b6.percents[b9+1];cd=b6.anim[b];break}else{if(b4){E.attr(b6.anim[b6.percents[b9]])}}}if(!cd){return}if(!bN){for(var b2 in cd){if(cd[am](b2)){if(au[am](b2)||E.paper.customAttributes[am](b2)){b5[b2]=E.attr(b2);(b5[b2]==null)&&(b5[b2]=t[b2]);R[b2]=cd[b2];switch(au[b2]){case aN:bU[b2]=(R[b2]-b5[b2])/b0;break;case"colour":b5[b2]=aT.getRGB(b5[b2]);var b3=aT.getRGB(R[b2]);bU[b2]={r:(b3.r-b5[b2].r)/b0,g:(b3.g-b5[b2].g)/b0,b:(b3.b-b5[b2].b)/b0};break;case"path":var bP=Y(b5[b2],R[b2]),bW=bP[1];b5[b2]=bP[0];bU[b2]=[];for(b9=0,bT=b5[b2].length;b9<bT;b9++){bU[b2][b9]=[0];for(var b8=1,ca=b5[b2][b9].length;b8<ca;b8++){bU[b2][b9][b8]=(bW[b9][b8]-b5[b2][b9][b8])/b0}}break;case"transform":var cg=E._,cf=aD(cg[b2],R[b2]);if(cf){b5[b2]=cf.from;R[b2]=cf.to;bU[b2]=[];bU[b2].real=true;for(b9=0,bT=b5[b2].length;b9<bT;b9++){bU[b2][b9]=[b5[b2][b9][0]];for(b8=1,ca=b5[b2][b9].length;b8<ca;b8++){bU[b2][b9][b8]=(R[b2][b9][b8]-b5[b2][b9][b8])/b0}}}else{var b1=(E.matrix||new aH),cc={_:{transform:cg.transform},getBBox:function(){return E.getBBox(1)}};b5[b2]=[b1.a,b1.b,b1.c,b1.d,b1.e,b1.f];aQ(cc,R[b2]);R[b2]=cc._.transform;bU[b2]=[(cc.matrix.a-b1.a)/b0,(cc.matrix.b-b1.b)/b0,(cc.matrix.c-b1.c)/b0,(cc.matrix.d-b1.d)/b0,(cc.matrix.e-b1.e)/b0,(cc.matrix.f-b1.f)/b0]}break;case"csv":var g=bJ(cd[b2])[H](a),bQ=bJ(b5[b2])[H](a);if(b2=="clip-rect"){b5[b2]=bQ;bU[b2]=[];b9=bQ.length;while(b9--){bU[b2][b9]=(g[b9]-b5[b2][b9])/b0}}R[b2]=g;break;default:g=[][bG](cd[b2]);bQ=[][bG](b5[b2]);bU[b2]=[];b9=E.paper.customAttributes[b2].length;while(b9--){bU[b2][b9]=((g[b9]||0)-(bQ[b9]||0))/b0}break}}}}var bZ=cd.easing,b7=aT.easing_formulas[bZ];if(!b7){b7=bJ(bZ).match(c);if(b7&&b7.length==5){var bV=b7;b7=function(i){return a5(i,+bV[1],+bV[2],+bV[3],+bV[4],b0)}}else{b7=bD}}S=cd.start||b6.start||+new Date;cb={anim:b6,percent:b,timestamp:S,start:S+(b6.del||0),status:0,initstatus:b4||0,stop:false,ms:b0,easing:b7,from:b5,diff:bU,to:R,el:E,callback:cd.callback,prev:bX,next:bY,repeat:bS||b6.times,origin:E.attr(),totalOrigin:bO};ad.push(cb);if(b4&&!bN&&!bR){cb.stop=true;cb.start=new Date-b0*b4;if(ad.length==1){return bE()}}if(bR){cb.start=new Date-cb.ms*b4}ad.length==1&&aP(bE)}else{bN.initstatus=b4;bN.start=new Date-bN.ms*b4}eve("raphael.anim.start."+E.id,E,b6)}aT.animation=function(R,g,bN,S){if(R instanceof bC){return R}if(aT.is(bN,"function")||!bN){S=S||bN||null;bN=null}R=Object(R);g=+g||0;var E={},i,b;for(b in R){if(R[am](b)&&ap(b)!=b&&ap(b)+"%"!=b){i=true;E[b]=R[b]}}if(!i){return new bC(R,g)}else{bN&&(E.easing=bN);S&&(E.callback=S);return new bC({100:E},g)}};bj.animate=function(E,b,S,R){var g=this;if(g.removed){R&&R.call(g);return g}var i=E instanceof bC?E:aT.animation(E,b,S,R);aO(i,g,i.percents[0],null,g.attr());return g};bj.setTime=function(g,b){if(g&&b!=null){this.status(g,bo(b,g.ms)/g.ms)}return this};bj.status=function(S,R){var g=[],E=0,b,bN;if(R!=null){aO(S,this,-1,bo(R,1));return this}else{b=ad.length;for(;E<b;E++){bN=ad[E];if(bN.el.id==this.id&&(!S||bN.anim==S)){if(S){return bN.status}g.push({anim:bN.anim,status:bN.status})}}if(S){return 0}return g}};bj.pause=function(g){for(var b=0;b<ad.length;b++){if(ad[b].el.id==this.id&&(!g||ad[b].anim==g)){if(eve("raphael.anim.pause."+this.id,this,ad[b].anim)!==false){ad[b].paused=true}}}return this};bj.resume=function(g){for(var b=0;b<ad.length;b++){if(ad[b].el.id==this.id&&(!g||ad[b].anim==g)){var E=ad[b];if(eve("raphael.anim.resume."+this.id,this,E.anim)!==false){delete E.paused;this.status(E.anim,E.status)}}}return this};bj.stop=function(g){for(var b=0;b<ad.length;b++){if(ad[b].el.id==this.id&&(!g||ad[b].anim==g)){if(eve("raphael.anim.stop."+this.id,this,ad[b].anim)!==false){ad.splice(b--,1)}}}return this};function ac(g){for(var b=0;b<ad.length;b++){if(ad[b].el.paper==g){ad.splice(b--,1)}}}eve.on("raphael.remove",ac);eve.on("raphael.clear",ac);bj.toString=function(){return"Rapha\xebl\u2019s object"};var an=function(b){this.items=[];this.length=0;this.type="set";if(b){for(var g=0,E=b.length;g<E;g++){if(b[g]&&(b[g].constructor==bj.constructor||b[g].constructor==an)){this[this.items.length]=this.items[this.items.length]=b[g];this.length++}}}},be=an.prototype;be.push=function(){var R,b;for(var g=0,E=arguments.length;g<E;g++){R=arguments[g];if(R&&(R.constructor==bj.constructor||R.constructor==an)){b=this.items.length;this[b]=this.items[b]=R;this.length++}}return this};be.pop=function(){this.length&&delete this[this.length--];return this.items.pop()};be.forEach=function(R,b){for(var g=0,E=this.items.length;g<E;g++){if(R.call(b,this.items[g],g)===false){return this}}return this};for(var D in bj){if(bj[am](D)){be[D]=(function(b){return function(){var g=arguments;return this.forEach(function(i){i[b][bI](i,g)})}})(D)}}be.attr=function(g,bN){if(g&&aT.is(g,bf)&&aT.is(g[0],"object")){for(var b=0,S=g.length;b<S;b++){this.items[b].attr(g[b])}}else{for(var E=0,R=this.items.length;E<R;E++){this.items[E].attr(g,bN)}}return this};be.clear=function(){while(this.length){this.pop()}};be.splice=function(R,bO,bP){R=R<0?o(this.length+R,0):R;bO=o(0,bo(this.length-R,bO));var E=[],b=[],g=[],S;for(S=2;S<arguments.length;S++){g.push(arguments[S])}for(S=0;S<bO;S++){b.push(this[R+S])}for(;S<this.length-R;S++){E.push(this[R+S])}var bN=g.length;for(S=0;S<bN+E.length;S++){this.items[R+S]=this[R+S]=S<bN?g[S]:E[S-bN]}S=this.items.length=this.length-=bO-bN;while(this[S]){delete this[S++]}return new an(b)};be.exclude=function(E){for(var b=0,g=this.length;b<g;b++){if(this[b]==E){this.splice(b,1);return true}}};be.animate=function(E,b,bO,bQ){(aT.is(bO,"function")||!bO)&&(bQ=bO||null);var bN=this.items.length,R=bN,bR,bP=this,S;if(!bN){return this}bQ&&(S=function(){!--bN&&bQ.call(bP)});bO=aT.is(bO,al)?bO:S;var g=aT.animation(E,b,bO,S);bR=this.items[--R].animate(g);while(R--){this.items[R]&&!this.items[R].removed&&this.items[R].animateWith(bR,g,g)}return this};be.insertAfter=function(g){var b=this.items.length;while(b--){this.items[b].insertAfter(g)}return this};be.getBBox=function(){var b=[],bN=[],g=[],R=[];for(var E=this.items.length;E--;){if(!this.items[E].removed){var S=this.items[E].getBBox();b.push(S.x);bN.push(S.y);g.push(S.x+S.width);R.push(S.y+S.height)}}b=bo[bI](0,b);bN=bo[bI](0,bN);g=o[bI](0,g);R=o[bI](0,R);return{x:b,y:bN,x2:g,y2:R,width:g-b,height:R-bN}};be.clone=function(E){E=this.paper.set();for(var b=0,g=this.items.length;b<g;b++){E.push(this.items[b].clone())}return E};be.toString=function(){return"Rapha\xebl\u2018s set"};aT.registerFont=function(g){if(!g.face){return g}this.fonts=this.fonts||{};var E={w:g.w,face:{},glyphs:{}},i=g.face["font-family"];for(var bN in g.face){if(g.face[am](bN)){E.face[bN]=g.face[bN]}}if(this.fonts[i]){this.fonts[i].push(E)}else{this.fonts[i]=[E]}if(!g.svg){E.face["units-per-em"]=W(g.face["units-per-em"],10);for(var R in g.glyphs){if(g.glyphs[am](R)){var S=g.glyphs[R];E.glyphs[R]={w:S.w,k:{},d:S.d&&"M"+S.d.replace(/[mlcxtrv]/g,function(bO){return{l:"L",c:"C",x:"z",t:"m",r:"l",v:"c"}[bO]||"M"})+"z"};if(S.k){for(var b in S.k){if(S[am](b)){E.glyphs[R].k[b]=S.k[b]}}}}}}return g};a6.getFont=function(bP,bQ,g,R){R=R||"normal";g=g||"normal";bQ=+bQ||{normal:400,bold:700,lighter:300,bolder:800}[bQ]||400;if(!aT.fonts){return}var S=aT.fonts[bP];if(!S){var E=new RegExp("(^|\\s)"+bP.replace(/[^\w\d\s+!~.:_-]/g,aZ)+"(\\s|$)","i");for(var b in aT.fonts){if(aT.fonts[am](b)){if(E.test(b)){S=aT.fonts[b];break}}}}var bN;if(S){for(var bO=0,bR=S.length;bO<bR;bO++){bN=S[bO];if(bN.face["font-weight"]==bQ&&(bN.face["font-style"]==g||!bN.face["font-style"])&&bN.face["font-stretch"]==R){break}}}return bN};a6.print=function(bO,bN,b,bR,bS,b1,g){b1=b1||"middle";g=o(bo(g||0,1),-1);var b0=bJ(b)[H](aZ),bX=0,bZ=0,bV=aZ,b2;aT.is(bR,b)&&(bR=this.getFont(bR));if(bR){b2=(bS||16)/bR.face["units-per-em"];var R=bR.face.bbox[H](a),bQ=+R[0],E=R[3]-R[1],S=0,bT=+R[1]+(b1=="baseline"?E+(+bR.face.descent):E/2);for(var bW=0,bP=b0.length;bW<bP;bW++){if(b0[bW]=="\n"){bX=0;bY=0;bZ=0;S+=E}else{var bU=bZ&&bR.glyphs[b0[bW-1]]||{},bY=bR.glyphs[b0[bW]];bX+=bZ?(bU.w||bR.w)+(bU.k&&bU.k[b0[bW]]||0)+(bR.w*g):0;bZ=1}if(bY&&bY.d){bV+=aT.transformPath(bY.d,["t",bX*b2,S*b2,"s",b2,b2,bQ,bT,"t",(bO-bQ)/b2,(bN-bT)/b2])}}}return this.path(bV).attr({fill:"#000",stroke:"none"})};a6.add=function(R){if(aT.is(R,"array")){var E=this.set(),g=0,S=R.length,b;for(;g<S;g++){b=R[g]||{};by[am](b.type)&&E.push(this[b.type]().attr(b))}}return E};aT.format=function(g,i){var b=aT.is(i,bf)?[0][bG](i):arguments;g&&aT.is(g,al)&&b.length-1&&(g=g.replace(bt,function(R,E){return b[++E]==null?aZ:b[E]}));return g||aZ};aT.fullfill=(function(){var i=/\{([^\}]+)\}/g,b=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,g=function(S,R,bN){var E=bN;R.replace(b,function(bQ,bP,bO,bS,bR){bP=bP||bS;if(E){if(bP in E){E=E[bP]}typeof E=="function"&&bR&&(E=E())}});E=(E==null||E==bN?S:E)+"";return E};return function(R,E){return String(R).replace(i,function(bN,S){return g(bN,S,E)})}})();aT.ninja=function(){u.was?(aC.win.Raphael=u.is):delete Raphael;return aT};aT.st=be;(function(E,g,i){if(E.readyState==null&&E.addEventListener){E.addEventListener(g,i=function(){E.removeEventListener(g,i,false);E.readyState="complete"},false);E.readyState="loading"}function b(){(/in/).test(E.readyState)?setTimeout(b,9):aT.eve("raphael.DOMload")}b()})(document,"DOMContentLoaded");u.was?(aC.win.Raphael=aT):(Raphael=aT);eve.on("raphael.DOMload",function(){aq=true})})();window.Raphael.svg&&function(o){var e="hasOwnProperty",F=String,q=parseFloat,t=parseInt,g=Math,G=g.max,v=g.abs,i=g.pow,h=/[, ]+/,C=o.eve,u="",m=" ";var r="http://www.w3.org/1999/xlink",B={block:"M5,0 0,2.5 5,5z",classic:"M5,0 0,2.5 5,5 3.5,3 3.5,2z",diamond:"M2.5,0 5,2.5 2.5,5 0,2.5z",open:"M6,1 1,3.5 6,6",oval:"M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"},x={};o.toString=function(){return"Your browser supports SVG.\nYou are running Rapha\xebl "+this.version};var l=function(I,E){if(E){if(typeof I=="string"){I=l(I)}for(var H in E){if(E[e](H)){if(H.substring(0,6)=="xlink:"){I.setAttributeNS(r,H.substring(6),F(E[H]))}else{I.setAttribute(H,F(E[H]))}}}}else{I=o._g.doc.createElementNS("http://www.w3.org/2000/svg",I);I.style&&(I.style.webkitTapHighlightColor="rgba(0,0,0,0)")}return I},a=function(P,T){var R="linear",H=P.id+T,N=0.5,L=0.5,J=P.node,E=P.paper,V=J.style,I=o._g.doc.getElementById(H);if(!I){T=F(T).replace(o._radial_gradient,function(Y,W,Z){R="radial";if(W&&Z){N=q(W);L=q(Z);var X=((L>0.5)*2-1);i(N-0.5,2)+i(L-0.5,2)>0.25&&(L=g.sqrt(0.25-i(N-0.5,2))*X+0.5)&&L!=0.5&&(L=L.toFixed(5)-0.00001*X)}return u});T=T.split(/\s*\-\s*/);if(R=="linear"){var M=T.shift();M=-q(M);if(isNaN(M)){return null}var K=[0,0,g.cos(o.rad(M)),g.sin(o.rad(M))],S=1/(G(v(K[2]),v(K[3]))||1);K[2]*=S;K[3]*=S;if(K[2]<0){K[0]=-K[2];K[2]=0}if(K[3]<0){K[1]=-K[3];K[3]=0}}var Q=o._parseDots(T);if(!Q){return null}H=H.replace(/[\(\)\s,\xb0#]/g,"_");if(P.gradient&&H!=P.gradient.id){E.defs.removeChild(P.gradient);delete P.gradient}if(!P.gradient){I=l(R+"Gradient",{id:H});P.gradient=I;l(I,R=="radial"?{fx:N,fy:L}:{x1:K[0],y1:K[1],x2:K[2],y2:K[3],gradientTransform:P.matrix.invert()});E.defs.appendChild(I);for(var O=0,U=Q.length;O<U;O++){I.appendChild(l("stop",{offset:Q[O].offset?Q[O].offset:O?"100%":"0%","stop-color":Q[O].color||"#fff"}))}}}l(J,{fill:"url(#"+H+")",opacity:1,"fill-opacity":1});V.fill=u;V.opacity=1;V.fillOpacity=1;return 1},b=function(H){var E=H.getBBox(1);l(H.pattern,{patternTransform:H.matrix.invert()+" translate("+E.x+","+E.y+")"})},c=function(R,T,M){if(R.type=="path"){var E=F(T).toLowerCase().split("-"),Q=R.paper,ae=M?"end":"start",V=R.node,S=R.attrs,L=S["stroke-width"],Z=E.length,J="classic",Y,I,O,W,U,N=3,aa=3,P=5;while(Z--){switch(E[Z]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":J=E[Z];break;case"wide":aa=5;break;case"narrow":aa=2;break;case"long":N=5;break;case"short":N=2;break}}if(J=="open"){N+=2;aa+=2;P+=2;O=1;W=M?4:1;U={fill:"none",stroke:S.stroke}}else{W=O=N/2;U={fill:S.stroke,stroke:"none"}}if(R._.arrows){if(M){R._.arrows.endPath&&x[R._.arrows.endPath]--;R._.arrows.endMarker&&x[R._.arrows.endMarker]--}else{R._.arrows.startPath&&x[R._.arrows.startPath]--;R._.arrows.startMarker&&x[R._.arrows.startMarker]--}}else{R._.arrows={}}if(J!="none"){var H="raphael-marker-"+J,ad="raphael-marker-"+ae+J+N+aa;if(!o._g.doc.getElementById(H)){Q.defs.appendChild(l(l("path"),{"stroke-linecap":"round",d:B[J],id:H}));x[H]=1}else{x[H]++}var K=o._g.doc.getElementById(ad),X;if(!K){K=l(l("marker"),{id:ad,markerHeight:aa,markerWidth:N,orient:"auto",refX:W,refY:aa/2});X=l(l("use"),{"xlink:href":"#"+H,transform:(M?"rotate(180 "+N/2+" "+aa/2+") ":u)+"scale("+N/P+","+aa/P+")","stroke-width":(1/((N/P+aa/P)/2)).toFixed(4)});K.appendChild(X);Q.defs.appendChild(K);x[ad]=1}else{x[ad]++;X=K.getElementsByTagName("use")[0]}l(X,U);var ac=O*(J!="diamond"&&J!="oval");if(M){Y=R._.arrows.startdx*L||0;I=o.getTotalLength(S.path)-ac*L}else{Y=ac*L;I=o.getTotalLength(S.path)-(R._.arrows.enddx*L||0)}U={};U["marker-"+ae]="url(#"+ad+")";if(I||Y){U.d=Raphael.getSubpath(S.path,Y,I)}l(V,U);R._.arrows[ae+"Path"]=H;R._.arrows[ae+"Marker"]=ad;R._.arrows[ae+"dx"]=ac;R._.arrows[ae+"Type"]=J;R._.arrows[ae+"String"]=T}else{if(M){Y=R._.arrows.startdx*L||0;I=o.getTotalLength(S.path)-Y}else{Y=0;I=o.getTotalLength(S.path)-(R._.arrows.enddx*L||0)}R._.arrows[ae+"Path"]&&l(V,{d:Raphael.getSubpath(S.path,Y,I)});delete R._.arrows[ae+"Path"];delete R._.arrows[ae+"Marker"];delete R._.arrows[ae+"dx"];delete R._.arrows[ae+"Type"];delete R._.arrows[ae+"String"]}for(U in x){if(x[e](U)&&!x[U]){var ab=o._g.doc.getElementById(U);ab&&ab.parentNode.removeChild(ab)}}}},y={"":[0],none:[0],"-":[3,1],".":[1,1],"-.":[3,1,1,1],"-..":[3,1,1,1,1,1],". ":[1,3],"- ":[4,3],"--":[8,3],"- .":[4,3,1,3],"--.":[8,3,1,3],"--..":[8,3,1,3,1,3]},n=function(M,K,L){K=y[F(K).toLowerCase()];if(K){var I=M.attrs["stroke-width"]||"1",E={round:I,square:I,butt:0}[M.attrs["stroke-linecap"]||L["stroke-linecap"]]||0,J=[],H=K.length;while(H--){J[H]=K[H]*I+((H%2)?1:-1)*E}l(M.node,{"stroke-dasharray":J.join(",")})}},z=function(R,Z){var V=R.node,S=R.attrs,P=V.style.visibility;V.style.visibility="hidden";for(var U in Z){if(Z[e](U)){if(!o._availableAttrs[e](U)){continue}var T=Z[U];S[U]=T;switch(U){case"blur":R.blur(T);break;case"href":case"title":case"target":var X=V.parentNode;if(X.tagName.toLowerCase()!="a"){var K=l("a");X.insertBefore(K,V);K.appendChild(V);X=K}if(U=="target"){X.setAttributeNS(r,"show",T=="blank"?"new":T)}else{X.setAttributeNS(r,U,T)}break;case"cursor":V.style.cursor=T;break;case"transform":R.transform(T);break;case"arrow-start":c(R,T);break;case"arrow-end":c(R,T,1);break;case"clip-rect":var H=F(T).split(h);if(H.length==4){R.clip&&R.clip.parentNode.parentNode.removeChild(R.clip.parentNode);var I=l("clipPath"),W=l("rect");I.id=o.createUUID();l(W,{x:H[0],y:H[1],width:H[2],height:H[3]});I.appendChild(W);R.paper.defs.appendChild(I);l(V,{"clip-path":"url(#"+I.id+")"});R.clip=W}if(!T){var Q=V.getAttribute("clip-path");if(Q){var Y=o._g.doc.getElementById(Q.replace(/(^url\(#|\)$)/g,u));Y&&Y.parentNode.removeChild(Y);l(V,{"clip-path":u});delete R.clip}}break;case"path":if(R.type=="path"){l(V,{d:T?S.path=o._pathToAbsolute(T):"M0,0"});R._.dirty=1;if(R._.arrows){"startString" in R._.arrows&&c(R,R._.arrows.startString);"endString" in R._.arrows&&c(R,R._.arrows.endString,1)}}break;case"width":V.setAttribute(U,T);R._.dirty=1;if(S.fx){U="x";T=S.x}else{break}case"x":if(S.fx){T=-S.x-(S.width||0)}case"rx":if(U=="rx"&&R.type=="rect"){break}case"cx":V.setAttribute(U,T);R.pattern&&b(R);R._.dirty=1;break;case"height":V.setAttribute(U,T);R._.dirty=1;if(S.fy){U="y";T=S.y}else{break}case"y":if(S.fy){T=-S.y-(S.height||0)}case"ry":if(U=="ry"&&R.type=="rect"){break}case"cy":V.setAttribute(U,T);R.pattern&&b(R);R._.dirty=1;break;case"r":if(R.type=="rect"){l(V,{rx:T,ry:T})}else{V.setAttribute(U,T)}R._.dirty=1;break;case"src":if(R.type=="image"){V.setAttributeNS(r,"href",T)}break;case"stroke-width":if(R._.sx!=1||R._.sy!=1){T/=G(v(R._.sx),v(R._.sy))||1}if(R.paper._vbSize){T*=R.paper._vbSize}V.setAttribute(U,T);if(S["stroke-dasharray"]){n(R,S["stroke-dasharray"],Z)}if(R._.arrows){"startString" in R._.arrows&&c(R,R._.arrows.startString);"endString" in R._.arrows&&c(R,R._.arrows.endString,1)}break;case"stroke-dasharray":n(R,T,Z);break;case"fill":var L=F(T).match(o._ISURL);if(L){I=l("pattern");var O=l("image");I.id=o.createUUID();l(I,{x:0,y:0,patternUnits:"userSpaceOnUse",height:1,width:1});l(O,{x:0,y:0,"xlink:href":L[1]});I.appendChild(O);(function(aa){o._preload(L[1],function(){var ab=this.offsetWidth,ac=this.offsetHeight;l(aa,{width:ab,height:ac});l(O,{width:ab,height:ac});R.paper.safari()})})(I);R.paper.defs.appendChild(I);l(V,{fill:"url(#"+I.id+")"});R.pattern=I;R.pattern&&b(R);break}var J=o.getRGB(T);if(!J.error){delete Z.gradient;delete S.gradient;!o.is(S.opacity,"undefined")&&o.is(Z.opacity,"undefined")&&l(V,{opacity:S.opacity});!o.is(S["fill-opacity"],"undefined")&&o.is(Z["fill-opacity"],"undefined")&&l(V,{"fill-opacity":S["fill-opacity"]})}else{if((R.type=="circle"||R.type=="ellipse"||F(T).charAt()!="r")&&a(R,T)){if("opacity" in S||"fill-opacity" in S){var E=o._g.doc.getElementById(V.getAttribute("fill").replace(/^url\(#|\)$/g,u));if(E){var M=E.getElementsByTagName("stop");l(M[M.length-1],{"stop-opacity":("opacity" in S?S.opacity:1)*("fill-opacity" in S?S["fill-opacity"]:1)})}}S.gradient=T;S.fill="none";break}}J[e]("opacity")&&l(V,{"fill-opacity":J.opacity>1?J.opacity/100:J.opacity});case"stroke":J=o.getRGB(T);V.setAttribute(U,J.hex);U=="stroke"&&J[e]("opacity")&&l(V,{"stroke-opacity":J.opacity>1?J.opacity/100:J.opacity});if(U=="stroke"&&R._.arrows){"startString" in R._.arrows&&c(R,R._.arrows.startString);"endString" in R._.arrows&&c(R,R._.arrows.endString,1)}break;case"gradient":(R.type=="circle"||R.type=="ellipse"||F(T).charAt()!="r")&&a(R,T);break;case"opacity":if(S.gradient&&!S[e]("stroke-opacity")){l(V,{"stroke-opacity":T>1?T/100:T})}case"fill-opacity":if(S.gradient){E=o._g.doc.getElementById(V.getAttribute("fill").replace(/^url\(#|\)$/g,u));if(E){M=E.getElementsByTagName("stop");l(M[M.length-1],{"stop-opacity":T})}break}default:U=="font-size"&&(T=t(T,10)+"px");var N=U.replace(/(\-.)/g,function(aa){return aa.substring(1).toUpperCase()});V.style[N]=T;R._.dirty=1;V.setAttribute(U,T);break}}}s(R,Z);V.style.visibility=P},D=1.2,s=function(E,K){if(E.type!="text"||!(K[e]("text")||K[e]("font")||K[e]("font-size")||K[e]("x")||K[e]("y"))){return}var P=E.attrs,I=E.node,R=I.firstChild?t(o._g.doc.defaultView.getComputedStyle(I.firstChild,u).getPropertyValue("font-size"),10):10;if(K[e]("text")){P.text=K.text;while(I.firstChild){I.removeChild(I.firstChild)}var J=F(K.text).split("\n"),H=[],N;for(var L=0,Q=J.length;L<Q;L++){N=l("tspan");L&&l(N,{dy:R*D,x:P.x});N.appendChild(o._g.doc.createTextNode(J[L]));I.appendChild(N);H[L]=N}}else{H=I.getElementsByTagName("tspan");for(L=0,Q=H.length;L<Q;L++){if(L){l(H[L],{dy:R*D,x:P.x})}else{l(H[0],{dy:0})}}}l(I,{x:P.x,y:P.y});E._.dirty=1;var M=E._getBBox(),O=P.y-(M.y+M.height/2);O&&o.is(O,"finite")&&l(H[0],{dy:O})},w=function(H,E){var J=0,I=0;this[0]=this.node=H;H.raphael=true;this.id=o._oid++;H.raphaelid=this.id;this.matrix=o.matrix();this.realPath=null;this.paper=E;this.attrs=this.attrs||{};this._={transform:[],sx:1,sy:1,deg:0,dx:0,dy:0,dirty:1};!E.bottom&&(E.bottom=this);this.prev=E.top;E.top&&(E.top.next=this);E.top=this;this.next=null},p=o.el;w.prototype=p;p.constructor=w;o._engine.path=function(E,J){var H=l("path");J.canvas&&J.canvas.appendChild(H);var I=new w(H,J);I.type="path";z(I,{fill:"none",stroke:"#000",path:E});return I};p.rotate=function(H,E,J){if(this.removed){return this}H=F(H).split(h);if(H.length-1){E=q(H[1]);J=q(H[2])}H=q(H[0]);(J==null)&&(E=J);if(E==null||J==null){var I=this.getBBox(1);E=I.x+I.width/2;J=I.y+I.height/2}this.transform(this._.transform.concat([["r",H,E,J]]));return this};p.scale=function(K,I,E,J){if(this.removed){return this}K=F(K).split(h);if(K.length-1){I=q(K[1]);E=q(K[2]);J=q(K[3])}K=q(K[0]);(I==null)&&(I=K);(J==null)&&(E=J);if(E==null||J==null){var H=this.getBBox(1)}E=E==null?H.x+H.width/2:E;J=J==null?H.y+H.height/2:J;this.transform(this._.transform.concat([["s",K,I,E,J]]));return this};p.translate=function(H,E){if(this.removed){return this}H=F(H).split(h);if(H.length-1){E=q(H[1])}H=q(H[0])||0;E=+E||0;this.transform(this._.transform.concat([["t",H,E]]));return this};p.transform=function(H){var I=this._;if(H==null){return I.transform}o._extractTransform(this,H);this.clip&&l(this.clip,{transform:this.matrix.invert()});this.pattern&&b(this);this.node&&l(this.node,{transform:this.matrix});if(I.sx!=1||I.sy!=1){var E=this.attrs[e]("stroke-width")?this.attrs["stroke-width"]:1;this.attr({"stroke-width":E})}return this};p.hide=function(){!this.removed&&this.paper.safari(this.node.style.display="none");return this};p.show=function(){!this.removed&&this.paper.safari(this.node.style.display="");return this};p.remove=function(){if(this.removed||!this.node.parentNode){return}var H=this.paper;H.__set__&&H.__set__.exclude(this);C.unbind("raphael.*.*."+this.id);if(this.gradient){H.defs.removeChild(this.gradient)}o._tear(this,H);if(this.node.parentNode.tagName.toLowerCase()=="a"){this.node.parentNode.parentNode.removeChild(this.node.parentNode)}else{this.node.parentNode.removeChild(this.node)}for(var E in this){this[E]=typeof this[E]=="function"?o._removedFactory(E):null}this.removed=true};p._getBBox=function(){if(this.node.style.display=="none"){this.show();var E=true}var I={};try{I=this.node.getBBox()}catch(H){}finally{I=I||{}}E&&this.hide();return I};p.attr=function(E,P){if(this.removed){return this}if(E==null){var M={};for(var O in this.attrs){if(this.attrs[e](O)){M[O]=this.attrs[O]}}M.gradient&&M.fill=="none"&&(M.fill=M.gradient)&&delete M.gradient;M.transform=this._.transform;return M}if(P==null&&o.is(E,"string")){if(E=="fill"&&this.attrs.fill=="none"&&this.attrs.gradient){return this.attrs.gradient}if(E=="transform"){return this._.transform}var N=E.split(h),J={};for(var K=0,R=N.length;K<R;K++){E=N[K];if(E in this.attrs){J[E]=this.attrs[E]}else{if(o.is(this.paper.customAttributes[E],"function")){J[E]=this.paper.customAttributes[E].def}else{J[E]=o._availableAttrs[E]}}}return R-1?J:J[N[0]]}if(P==null&&o.is(E,"array")){J={};for(K=0,R=E.length;K<R;K++){J[E[K]]=this.attr(E[K])}return J}if(P!=null){var H={};H[E]=P}else{if(E!=null&&o.is(E,"object")){H=E}}for(var Q in H){C("raphael.attr."+Q+"."+this.id,this,H[Q])}for(Q in this.paper.customAttributes){if(this.paper.customAttributes[e](Q)&&H[e](Q)&&o.is(this.paper.customAttributes[Q],"function")){var L=this.paper.customAttributes[Q].apply(this,[].concat(H[Q]));this.attrs[Q]=H[Q];for(var I in L){if(L[e](I)){H[I]=L[I]}}}}z(this,H);return this};p.toFront=function(){if(this.removed){return this}if(this.node.parentNode.tagName.toLowerCase()=="a"){this.node.parentNode.parentNode.appendChild(this.node.parentNode)}else{this.node.parentNode.appendChild(this.node)}var E=this.paper;E.top!=this&&o._tofront(this,E);return this};p.toBack=function(){if(this.removed){return this}var H=this.node.parentNode;if(H.tagName.toLowerCase()=="a"){H.parentNode.insertBefore(this.node.parentNode,this.node.parentNode.parentNode.firstChild)}else{if(H.firstChild!=this.node){H.insertBefore(this.node,this.node.parentNode.firstChild)}}o._toback(this,this.paper);var E=this.paper;return this};p.insertAfter=function(E){if(this.removed){return this}var H=E.node||E[E.length-1].node;if(H.nextSibling){H.parentNode.insertBefore(this.node,H.nextSibling)}else{H.parentNode.appendChild(this.node)}o._insertafter(this,E,this.paper);return this};p.insertBefore=function(E){if(this.removed){return this}var H=E.node||E[0].node;H.parentNode.insertBefore(this.node,H);o._insertbefore(this,E,this.paper);return this};p.blur=function(H){var E=this;if(+H!==0){var I=l("filter"),J=l("feGaussianBlur");E.attrs.blur=H;I.id=o.createUUID();l(J,{stdDeviation:+H||1.5});I.appendChild(J);E.paper.defs.appendChild(I);E._blur=I;l(E.node,{filter:"url(#"+I.id+")"})}else{if(E._blur){E._blur.parentNode.removeChild(E._blur);delete E._blur;delete E.attrs.blur}E.node.removeAttribute("filter")}};o._engine.circle=function(H,E,L,K){var J=l("circle");H.canvas&&H.canvas.appendChild(J);var I=new w(J,H);I.attrs={cx:E,cy:L,r:K,fill:"none",stroke:"#000"};I.type="circle";l(J,I.attrs);return I};o._engine.rect=function(I,E,N,H,L,M){var K=l("rect");I.canvas&&I.canvas.appendChild(K);var J=new w(K,I);J.attrs={x:E,y:N,width:H,height:L,r:M||0,rx:M||0,ry:M||0,fill:"none",stroke:"#000"};J.type="rect";l(K,J.attrs);return J};o._engine.ellipse=function(H,E,M,L,K){var J=l("ellipse");H.canvas&&H.canvas.appendChild(J);var I=new w(J,H);I.attrs={cx:E,cy:M,rx:L,ry:K,fill:"none",stroke:"#000"};I.type="ellipse";l(J,I.attrs);return I};o._engine.image=function(I,M,E,N,H,L){var K=l("image");l(K,{x:E,y:N,width:H,height:L,preserveAspectRatio:"none"});K.setAttributeNS(r,"href",M);I.canvas&&I.canvas.appendChild(K);var J=new w(K,I);J.attrs={x:E,y:N,width:H,height:L,src:M};J.type="image";return J};o._engine.text=function(H,E,L,K){var J=l("text");H.canvas&&H.canvas.appendChild(J);var I=new w(J,H);I.attrs={x:E,y:L,"text-anchor":"middle",text:K,font:o._availableAttrs.font,stroke:"none",fill:"#000"};I.type="text";z(I,I.attrs);return I};o._engine.setSize=function(H,E){this.width=H||this.width;this.height=E||this.height;this.canvas.setAttribute("width",this.width);this.canvas.setAttribute("height",this.height);if(this._viewBox){this.setViewBox.apply(this,this._viewBox)}return this};o._engine.create=function(){var J=o._getContainer.apply(0,arguments),H=J&&J.container,N=J.x,M=J.y,I=J.width,O=J.height;if(!H){throw new Error("SVG container not found.")}var E=l("svg"),L="overflow:hidden;",K;N=N||0;M=M||0;I=I||512;O=O||342;l(E,{height:O,version:1.1,width:I,xmlns:"http://www.w3.org/2000/svg"});if(H==1){E.style.cssText=L+"position:absolute;left:"+N+"px;top:"+M+"px";o._g.doc.body.appendChild(E);K=1}else{E.style.cssText=L+"position:relative";if(H.firstChild){H.insertBefore(E,H.firstChild)}else{H.appendChild(E)}}H=new o._Paper;H.width=I;H.height=O;H.canvas=E;H.clear();H._left=H._top=0;K&&(H.renderfix=function(){});H.renderfix();return H};o._engine.setViewBox=function(L,J,N,E,H){C("raphael.setViewBox",this,this._viewBox,[L,J,N,E,H]);var P=G(N/this.width,E/this.height),K=this.top,O=H?"meet":"xMinYMin",I,M;if(L==null){if(this._vbSize){P=1}delete this._vbSize;I="0 0 "+this.width+m+this.height}else{this._vbSize=P;I=L+m+J+m+N+m+E}l(this.canvas,{viewBox:I,preserveAspectRatio:O});while(P&&K){M="stroke-width" in K.attrs?K.attrs["stroke-width"]:1;K.attr({"stroke-width":M});K._.dirty=1;K._.dirtyT=1;K=K.prev}this._viewBox=[L,J,N,E,!!H];return this};o.prototype.renderfix=function(){var L=this.canvas,E=L.style,K;try{K=L.getScreenCTM()||L.createSVGMatrix()}catch(J){K=L.createSVGMatrix()}var I=-K.e%1,H=-K.f%1;if(I||H){if(I){this._left=(this._left+I)%1;E.left=this._left+"px"}if(H){this._top=(this._top+H)%1;E.top=this._top+"px"}}};o.prototype.clear=function(){o.eve("raphael.clear",this);var E=this.canvas;while(E.firstChild){E.removeChild(E.firstChild)}this.bottom=this.top=null;(this.desc=l("desc")).appendChild(o._g.doc.createTextNode("Created with Rapha\xebl "+o.version));E.appendChild(this.desc);E.appendChild(this.defs=l("defs"))};o.prototype.remove=function(){C("raphael.remove",this);this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas);for(var E in this){this[E]=typeof this[E]=="function"?o._removedFactory(E):null}};var A=o.st;for(var f in p){if(p[e](f)&&!A[e](f)){A[f]=(function(E){return function(){var H=arguments;return this.forEach(function(I){I[E].apply(I,H)})}})(f)}}}(window.Raphael);window.Raphael.vml&&function(o){var f="hasOwnProperty",I=String,q=parseFloat,i=Math,F=i.round,L=i.max,G=i.min,v=i.abs,y="fill",l=/[, ]+/,D=o.eve,z=" progid:DXImageTransform.Microsoft",n=" ",t="",H={M:"m",L:"l",C:"c",Z:"x",m:"t",l:"r",c:"v",z:"x"},m=/([clmz]),?([^clmz]*)/gi,w=/ progid:\S+Blur\([^\)]+\)/g,K=/-?[^,\s-]+/g,e="position:absolute;left:0;top:0;width:1px;height:1px",b=21600,C={path:1,rect:1,image:1},u={circle:1,ellipse:1},g=function(V){var S=/[ahqstv]/ig,N=o._pathToAbsolute;I(V).match(S)&&(N=o._path2curve);S=/[clmz]/g;if(N==o._pathToAbsolute&&!I(V).match(S)){var R=I(V).replace(m,function(Z,ab,X){var aa=[],W=ab.toLowerCase()=="m",Y=H[ab];X.replace(K,function(ac){if(W&&aa.length==2){Y+=aa+H[ab=="m"?"l":"L"];aa=[]}aa.push(F(ac*b))});return Y+aa});return R}var T=N(V),M,E;R=[];for(var P=0,U=T.length;P<U;P++){M=T[P];E=T[P][0].toLowerCase();E=="z"&&(E="x");for(var O=1,Q=M.length;O<Q;O++){E+=F(M[O]*b)+(O!=Q-1?",":t)}R.push(E)}return R.join(n)},r=function(O,N,M){var E=o.matrix();E.rotate(-O,0.5,0.5);return{dx:E.x(N,M),dy:E.y(N,M)}},s=function(U,T,S,P,O,Q){var ac=U._,W=U.matrix,E=ac.fillpos,V=U.node,R=V.style,N=1,M="",Y,aa=b/T,Z=b/S;R.visibility="hidden";if(!T||!S){return}V.coordsize=v(aa)+n+v(Z);R.rotation=Q*(T*S<0?-1:1);if(Q){var ab=r(Q,P,O);P=ab.dx;O=ab.dy}T<0&&(M+="x");S<0&&(M+=" y")&&(N=-1);R.flip=M;V.coordorigin=(P*-aa)+n+(O*-Z);if(E||ac.fillsize){var X=V.getElementsByTagName(y);X=X&&X[0];V.removeChild(X);if(E){ab=r(Q,W.x(E[0],E[1]),W.y(E[0],E[1]));X.position=ab.dx*N+n+ab.dy*N}if(ac.fillsize){X.size=ac.fillsize[0]*v(T)+n+ac.fillsize[1]*v(S)}V.appendChild(X)}R.visibility="visible"};o.toString=function(){return"Your browser doesn\u2019t support SVG. Falling down to VML.\nYou are running Rapha\xebl "+this.version};var c=function(E,R,M){var T=I(R).toLowerCase().split("-"),P=M?"end":"start",N=T.length,Q="classic",S="medium",O="medium";while(N--){switch(T[N]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":Q=T[N];break;case"wide":case"narrow":O=T[N];break;case"long":case"short":S=T[N];break}}var U=E.node.getElementsByTagName("stroke")[0];U[P+"arrow"]=Q;U[P+"arrowlength"]=S;U[P+"arrowwidth"]=O},A=function(ac,am){ac.attrs=ac.attrs||{};var ah=ac.node,aq=ac.attrs,Y=ah.style,U,ak=C[ac.type]&&(am.x!=aq.x||am.y!=aq.y||am.width!=aq.width||am.height!=aq.height||am.cx!=aq.cx||am.cy!=aq.cy||am.rx!=aq.rx||am.ry!=aq.ry||am.r!=aq.r),ab=u[ac.type]&&(aq.cx!=am.cx||aq.cy!=am.cy||aq.r!=am.r||aq.rx!=am.rx||aq.ry!=am.ry),au=ac;for(var Z in am){if(am[f](Z)){aq[Z]=am[Z]}}if(ak){aq.path=o._getPath[ac.type](ac);ac._.dirty=1}am.href&&(ah.href=am.href);am.title&&(ah.title=am.title);am.target&&(ah.target=am.target);am.cursor&&(Y.cursor=am.cursor);"blur" in am&&ac.blur(am.blur);if(am.path&&ac.type=="path"||ak){ah.path=g(~I(aq.path).toLowerCase().indexOf("r")?o._pathToAbsolute(aq.path):aq.path);if(ac.type=="image"){ac._.fillpos=[aq.x,aq.y];ac._.fillsize=[aq.width,aq.height];s(ac,1,1,0,0,0)}}"transform" in am&&ac.transform(am.transform);if(ab){var P=+aq.cx,N=+aq.cy,T=+aq.rx||+aq.r||0,S=+aq.ry||+aq.r||0;ah.path=o.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x",F((P-T)*b),F((N-S)*b),F((P+T)*b),F((N+S)*b),F(P*b))}if("clip-rect" in am){var M=I(am["clip-rect"]).split(l);if(M.length==4){M[2]=+M[2]+(+M[0]);M[3]=+M[3]+(+M[1]);var aa=ah.clipRect||o._g.doc.createElement("div"),at=aa.style;at.clip=o.format("rect({1}px {2}px {3}px {0}px)",M);if(!ah.clipRect){at.position="absolute";at.top=0;at.left=0;at.width=ac.paper.width+"px";at.height=ac.paper.height+"px";ah.parentNode.insertBefore(aa,ah);aa.appendChild(ah);ah.clipRect=aa}}if(!am["clip-rect"]){ah.clipRect&&(ah.clipRect.style.clip="auto")}}if(ac.textpath){var ao=ac.textpath.style;am.font&&(ao.font=am.font);am["font-family"]&&(ao.fontFamily='"'+am["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g,t)+'"');am["font-size"]&&(ao.fontSize=am["font-size"]);am["font-weight"]&&(ao.fontWeight=am["font-weight"]);am["font-style"]&&(ao.fontStyle=am["font-style"])}if("arrow-start" in am){c(au,am["arrow-start"])}if("arrow-end" in am){c(au,am["arrow-end"],1)}if(am.opacity!=null||am["stroke-width"]!=null||am.fill!=null||am.src!=null||am.stroke!=null||am["stroke-width"]!=null||am["stroke-opacity"]!=null||am["fill-opacity"]!=null||am["stroke-dasharray"]!=null||am["stroke-miterlimit"]!=null||am["stroke-linejoin"]!=null||am["stroke-linecap"]!=null){var ai=ah.getElementsByTagName(y),ap=false;ai=ai&&ai[0];!ai&&(ap=ai=J(y));if(ac.type=="image"&&am.src){ai.src=am.src}am.fill&&(ai.on=true);if(ai.on==null||am.fill=="none"||am.fill===null){ai.on=false}if(ai.on&&am.fill){var R=I(am.fill).match(o._ISURL);if(R){ai.parentNode==ah&&ah.removeChild(ai);ai.rotate=true;ai.src=R[1];ai.type="tile";var E=ac.getBBox(1);ai.position=E.x+n+E.y;ac._.fillpos=[E.x,E.y];o._preload(R[1],function(){ac._.fillsize=[this.offsetWidth,this.offsetHeight]})}else{ai.color=o.getRGB(am.fill).hex;ai.src=t;ai.type="solid";if(o.getRGB(am.fill).error&&(au.type in {circle:1,ellipse:1}||I(am.fill).charAt()!="r")&&a(au,am.fill,ai)){aq.fill="none";aq.gradient=am.fill;ai.rotate=false}}}if("fill-opacity" in am||"opacity" in am){var Q=((+aq["fill-opacity"]+1||2)-1)*((+aq.opacity+1||2)-1)*((+o.getRGB(am.fill).o+1||2)-1);Q=G(L(Q,0),1);ai.opacity=Q;if(ai.src){ai.color="none"}}ah.appendChild(ai);var V=(ah.getElementsByTagName("stroke")&&ah.getElementsByTagName("stroke")[0]),ar=false;!V&&(ar=V=J("stroke"));if((am.stroke&&am.stroke!="none")||am["stroke-width"]||am["stroke-opacity"]!=null||am["stroke-dasharray"]||am["stroke-miterlimit"]||am["stroke-linejoin"]||am["stroke-linecap"]){V.on=true}(am.stroke=="none"||am.stroke===null||V.on==null||am.stroke==0||am["stroke-width"]==0)&&(V.on=false);var ag=o.getRGB(am.stroke);V.on&&am.stroke&&(V.color=ag.hex);Q=((+aq["stroke-opacity"]+1||2)-1)*((+aq.opacity+1||2)-1)*((+ag.o+1||2)-1);var ad=(q(am["stroke-width"])||1)*0.75;Q=G(L(Q,0),1);am["stroke-width"]==null&&(ad=aq["stroke-width"]);am["stroke-width"]&&(V.weight=ad);ad&&ad<1&&(Q*=ad)&&(V.weight=1);V.opacity=Q;am["stroke-linejoin"]&&(V.joinstyle=am["stroke-linejoin"]||"miter");V.miterlimit=am["stroke-miterlimit"]||8;am["stroke-linecap"]&&(V.endcap=am["stroke-linecap"]=="butt"?"flat":am["stroke-linecap"]=="square"?"square":"round");if(am["stroke-dasharray"]){var af={"-":"shortdash",".":"shortdot","-.":"shortdashdot","-..":"shortdashdotdot",". ":"dot","- ":"dash","--":"longdash","- .":"dashdot","--.":"longdashdot","--..":"longdashdotdot"};V.dashstyle=af[f](am["stroke-dasharray"])?af[am["stroke-dasharray"]]:t}ar&&ah.appendChild(V)}if(au.type=="text"){au.paper.canvas.style.display=t;var aj=au.paper.span,ae=100,O=aq.font&&aq.font.match(/\d+(?:\.\d*)?(?=px)/);Y=aj.style;aq.font&&(Y.font=aq.font);aq["font-family"]&&(Y.fontFamily=aq["font-family"]);aq["font-weight"]&&(Y.fontWeight=aq["font-weight"]);aq["font-style"]&&(Y.fontStyle=aq["font-style"]);O=q(aq["font-size"]||O&&O[0])||10;Y.fontSize=O*ae+"px";au.textpath.string&&(aj.innerHTML=I(au.textpath.string).replace(/</g,"&#60;").replace(/&/g,"&#38;").replace(/\n/g,"<br>"));var X=aj.getBoundingClientRect();au.W=aq.w=(X.right-X.left)/ae;au.H=aq.h=(X.bottom-X.top)/ae;au.X=aq.x;au.Y=aq.y+au.H/2;("x" in am||"y" in am)&&(au.path.v=o.format("m{0},{1}l{2},{1}",F(aq.x*b),F(aq.y*b),F(aq.x*b)+1));var W=["x","y","text","font","font-family","font-weight","font-style","font-size"];for(var al=0,an=W.length;al<an;al++){if(W[al] in am){au._.dirty=1;break}}switch(aq["text-anchor"]){case"start":au.textpath.style["v-text-align"]="left";au.bbx=au.W/2;break;case"end":au.textpath.style["v-text-align"]="right";au.bbx=-au.W/2;break;default:au.textpath.style["v-text-align"]="center";au.bbx=0;break}au.textpath.style["v-text-kern"]=true}},a=function(E,U,X){E.attrs=E.attrs||{};var V=E.attrs,O=Math.pow,P,Q,S="linear",T=".5 .5";E.attrs.gradient=U;U=I(U).replace(o._radial_gradient,function(aa,ab,Z){S="radial";if(ab&&Z){ab=q(ab);Z=q(Z);O(ab-0.5,2)+O(Z-0.5,2)>0.25&&(Z=i.sqrt(0.25-O(ab-0.5,2))*((Z>0.5)*2-1)+0.5);T=ab+n+Z}return t});U=U.split(/\s*\-\s*/);if(S=="linear"){var M=U.shift();M=-q(M);if(isNaN(M)){return null}}var R=o._parseDots(U);if(!R){return null}E=E.shape||E.node;if(R.length){E.removeChild(X);X.on=true;X.method="none";X.color=R[0].color;X.color2=R[R.length-1].color;var Y=[];for(var N=0,W=R.length;N<W;N++){R[N].offset&&Y.push(R[N].offset+n+R[N].color)}X.colors=Y.length?Y.join():"0% "+X.color;if(S=="radial"){X.type="gradientTitle";X.focus="100%";X.focussize="0 0";X.focusposition=T;X.angle=0}else{X.type="gradient";X.angle=(270-M)%360}E.appendChild(X)}return 1},x=function(M,E){this[0]=this.node=M;M.raphael=true;this.id=o._oid++;M.raphaelid=this.id;this.X=0;this.Y=0;this.attrs={};this.paper=E;this.matrix=o.matrix();this._={transform:[],sx:1,sy:1,dx:0,dy:0,deg:0,dirty:1,dirtyT:1};!E.bottom&&(E.bottom=this);this.prev=E.top;E.top&&(E.top.next=this);E.top=this;this.next=null};var p=o.el;x.prototype=p;p.constructor=x;p.transform=function(P){if(P==null){return this._.transform}var R=this.paper._viewBoxShift,Q=R?"s"+[R.scale,R.scale]+"-1-1t"+[R.dx,R.dy]:t,U;if(R){U=P=I(P).replace(/\.{3}|\u2026/g,this._.transform||t)}o._extractTransform(this,Q+P);var V=this.matrix.clone(),X=this.skew,N=this.node,T,O=~I(this.attrs.fill).indexOf("-"),E=!I(this.attrs.fill).indexOf("url(");V.translate(-0.5,-0.5);if(E||O||this.type=="image"){X.matrix="1 0 0 1";X.offset="0 0";T=V.split();if((O&&T.noRotation)||!T.isSimple){N.style.filter=V.toFilter();var S=this.getBBox(),M=this.getBBox(1),Y=S.x-M.x,W=S.y-M.y;N.coordorigin=(Y*-b)+n+(W*-b);s(this,1,1,Y,W,0)}else{N.style.filter=t;s(this,T.scalex,T.scaley,T.dx,T.dy,T.rotate)}}else{N.style.filter=t;X.matrix=I(V);X.offset=V.offset()}U&&(this._.transform=U);return this};p.rotate=function(M,E,O){if(this.removed){return this}if(M==null){return}M=I(M).split(l);if(M.length-1){E=q(M[1]);O=q(M[2])}M=q(M[0]);(O==null)&&(E=O);if(E==null||O==null){var N=this.getBBox(1);E=N.x+N.width/2;O=N.y+N.height/2}this._.dirtyT=1;this.transform(this._.transform.concat([["r",M,E,O]]));return this};p.translate=function(M,E){if(this.removed){return this}M=I(M).split(l);if(M.length-1){E=q(M[1])}M=q(M[0])||0;E=+E||0;if(this._.bbox){this._.bbox.x+=M;this._.bbox.y+=E}this.transform(this._.transform.concat([["t",M,E]]));return this};p.scale=function(P,N,E,O){if(this.removed){return this}P=I(P).split(l);if(P.length-1){N=q(P[1]);E=q(P[2]);O=q(P[3]);isNaN(E)&&(E=null);isNaN(O)&&(O=null)}P=q(P[0]);(N==null)&&(N=P);(O==null)&&(E=O);if(E==null||O==null){var M=this.getBBox(1)}E=E==null?M.x+M.width/2:E;O=O==null?M.y+M.height/2:O;this.transform(this._.transform.concat([["s",P,N,E,O]]));this._.dirtyT=1;return this};p.hide=function(){!this.removed&&(this.node.style.display="none");return this};p.show=function(){!this.removed&&(this.node.style.display=t);return this};p._getBBox=function(){if(this.removed){return{}}return{x:this.X+(this.bbx||0)-this.W/2,y:this.Y-this.H,width:this.W,height:this.H}};p.remove=function(){if(this.removed||!this.node.parentNode){return}this.paper.__set__&&this.paper.__set__.exclude(this);o.eve.unbind("raphael.*.*."+this.id);o._tear(this,this.paper);this.node.parentNode.removeChild(this.node);this.shape&&this.shape.parentNode.removeChild(this.shape);for(var E in this){this[E]=typeof this[E]=="function"?o._removedFactory(E):null}this.removed=true};p.attr=function(E,U){if(this.removed){return this}if(E==null){var R={};for(var T in this.attrs){if(this.attrs[f](T)){R[T]=this.attrs[T]}}R.gradient&&R.fill=="none"&&(R.fill=R.gradient)&&delete R.gradient;R.transform=this._.transform;return R}if(U==null&&o.is(E,"string")){if(E==y&&this.attrs.fill=="none"&&this.attrs.gradient){return this.attrs.gradient}var S=E.split(l),O={};for(var P=0,W=S.length;P<W;P++){E=S[P];if(E in this.attrs){O[E]=this.attrs[E]}else{if(o.is(this.paper.customAttributes[E],"function")){O[E]=this.paper.customAttributes[E].def}else{O[E]=o._availableAttrs[E]}}}return W-1?O:O[S[0]]}if(this.attrs&&U==null&&o.is(E,"array")){O={};for(P=0,W=E.length;P<W;P++){O[E[P]]=this.attr(E[P])}return O}var M;if(U!=null){M={};M[E]=U}U==null&&o.is(E,"object")&&(M=E);for(var V in M){D("raphael.attr."+V+"."+this.id,this,M[V])}if(M){for(V in this.paper.customAttributes){if(this.paper.customAttributes[f](V)&&M[f](V)&&o.is(this.paper.customAttributes[V],"function")){var Q=this.paper.customAttributes[V].apply(this,[].concat(M[V]));this.attrs[V]=M[V];for(var N in Q){if(Q[f](N)){M[N]=Q[N]}}}}if(M.text&&this.type=="text"){this.textpath.string=M.text}A(this,M)}return this};p.toFront=function(){!this.removed&&this.node.parentNode.appendChild(this.node);this.paper&&this.paper.top!=this&&o._tofront(this,this.paper);return this};p.toBack=function(){if(this.removed){return this}if(this.node.parentNode.firstChild!=this.node){this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild);o._toback(this,this.paper)}return this};p.insertAfter=function(E){if(this.removed){return this}if(E.constructor==o.st.constructor){E=E[E.length-1]}if(E.node.nextSibling){E.node.parentNode.insertBefore(this.node,E.node.nextSibling)}else{E.node.parentNode.appendChild(this.node)}o._insertafter(this,E,this.paper);return this};p.insertBefore=function(E){if(this.removed){return this}if(E.constructor==o.st.constructor){E=E[0]}E.node.parentNode.insertBefore(this.node,E.node);o._insertbefore(this,E,this.paper);return this};p.blur=function(E){var M=this.node.runtimeStyle,N=M.filter;N=N.replace(w,t);if(+E!==0){this.attrs.blur=E;M.filter=N+n+z+".Blur(pixelradius="+(+E||1.5)+")";M.margin=o.format("-{0}px 0 0 -{0}px",F(+E||1.5))}else{M.filter=N;M.margin=0;delete this.attrs.blur}};o._engine.path=function(O,M){var P=J("shape");P.style.cssText=e;P.coordsize=b+n+b;P.coordorigin=M.coordorigin;var Q=new x(P,M),E={fill:"none",stroke:"#000"};O&&(E.path=O);Q.type="path";Q.path=[];Q.Path=t;A(Q,E);M.canvas.appendChild(P);var N=J("skew");N.on=true;P.appendChild(N);Q.skew=N;Q.transform(t);return Q};o._engine.rect=function(M,R,P,S,N,E){var T=o._rectPath(R,P,S,N,E),O=M.path(T),Q=O.attrs;O.X=Q.x=R;O.Y=Q.y=P;O.W=Q.width=S;O.H=Q.height=N;Q.r=E;Q.path=T;O.type="rect";return O};o._engine.ellipse=function(M,E,R,Q,P){var O=M.path(),N=O.attrs;O.X=E-Q;O.Y=R-P;O.W=Q*2;O.H=P*2;O.type="ellipse";A(O,{cx:E,cy:R,rx:Q,ry:P});return O};o._engine.circle=function(M,E,Q,P){var O=M.path(),N=O.attrs;O.X=E-P;O.Y=Q-P;O.W=O.H=P*2;O.type="circle";A(O,{cx:E,cy:Q,r:P});return O};o._engine.image=function(M,E,S,Q,T,O){var V=o._rectPath(S,Q,T,O),P=M.path(V).attr({stroke:"none"}),R=P.attrs,N=P.node,U=N.getElementsByTagName(y)[0];R.src=E;P.X=R.x=S;P.Y=R.y=Q;P.W=R.width=T;P.H=R.height=O;R.path=V;P.type="image";U.parentNode==N&&N.removeChild(U);U.rotate=true;U.src=E;U.type="tile";P._.fillpos=[S,Q];P._.fillsize=[T,O];N.appendChild(U);s(P,1,1,0,0,0);return P};o._engine.text=function(E,R,Q,S){var O=J("shape"),U=J("path"),N=J("textpath");R=R||0;Q=Q||0;S=S||"";U.v=o.format("m{0},{1}l{2},{1}",F(R*b),F(Q*b),F(R*b)+1);U.textpathok=true;N.string=I(S);N.on=true;O.style.cssText=e;O.coordsize=b+n+b;O.coordorigin="0 0";var M=new x(O,E),P={fill:"#000",stroke:"none",font:o._availableAttrs.font,text:S};M.shape=O;M.path=U;M.textpath=N;M.type="text";M.attrs.text=I(S);M.attrs.x=R;M.attrs.y=Q;M.attrs.w=1;M.attrs.h=1;A(M,P);O.appendChild(N);O.appendChild(U);E.canvas.appendChild(O);var T=J("skew");T.on=true;O.appendChild(T);M.skew=T;M.transform(t);return M};o._engine.setSize=function(N,E){var M=this.canvas.style;this.width=N;this.height=E;N==+N&&(N+="px");E==+E&&(E+="px");M.width=N;M.height=E;M.clip="rect(0 "+N+" "+E+" 0)";if(this._viewBox){o._engine.setViewBox.apply(this,this._viewBox)}return this};o._engine.setViewBox=function(Q,P,R,N,O){o.eve("raphael.setViewBox",this,this._viewBox,[Q,P,R,N,O]);var E=this.width,T=this.height,U=1/L(R/E,N/T),S,M;if(O){S=T/N;M=E/R;if(R*S<E){Q-=(E-R*S)/2/S}if(N*M<T){P-=(T-N*M)/2/M}}this._viewBox=[Q,P,R,N,!!O];this._viewBoxShift={dx:-Q,dy:-P,scale:U};this.forEach(function(V){V.transform("...")});return this};var J;o._engine.initWin=function(N){var M=N.document;M.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)");try{!M.namespaces.rvml&&M.namespaces.add("rvml","urn:schemas-microsoft-com:vml");J=function(O){return M.createElement("<rvml:"+O+' class="rvml">')}}catch(E){J=function(O){return M.createElement("<"+O+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}};o._engine.initWin(o._g.win);o._engine.create=function(){var N=o._getContainer.apply(0,arguments),E=N.container,T=N.height,U,M=N.width,S=N.x,R=N.y;if(!E){throw new Error("VML container not found.")}var P=new o._Paper,Q=P.canvas=o._g.doc.createElement("div"),O=Q.style;S=S||0;R=R||0;M=M||512;T=T||342;P.width=M;P.height=T;M==+M&&(M+="px");T==+T&&(T+="px");P.coordsize=b*1000+n+b*1000;P.coordorigin="0 0";P.span=o._g.doc.createElement("span");P.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;";Q.appendChild(P.span);O.cssText=o.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",M,T);if(E==1){o._g.doc.body.appendChild(Q);O.left=S+"px";O.top=R+"px";O.position="absolute"}else{if(E.firstChild){E.insertBefore(Q,E.firstChild)}else{E.appendChild(Q)}}P.renderfix=function(){};return P};o.prototype.clear=function(){o.eve("raphael.clear",this);this.canvas.innerHTML=t;this.span=o._g.doc.createElement("span");this.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;";this.canvas.appendChild(this.span);this.bottom=this.top=null};o.prototype.remove=function(){o.eve("raphael.remove",this);this.canvas.parentNode.removeChild(this.canvas);for(var E in this){this[E]=typeof this[E]=="function"?o._removedFactory(E):null}return true};var B=o.st;for(var h in p){if(p[f](h)&&!B[f](h)){B[h]=(function(E){return function(){var M=arguments;return this.forEach(function(N){N[E].apply(N,M)})}})(h)}}}(window.Raphael);(function(){window.ScaleRaphael=function(c,f,b){var h=(typeof c=="string")?document.getElementById(c):c;if(!h.style.position){h.style.position="relative"}h.style.width=f+"px";h.style.height=b+"px";h.style.overflow="hidden";var e;if(Raphael.type=="VML"){h.innerHTML="<rvml:group style='position : absolute; width: 1000px; height: 1000px; top: 0px; left: 0px' coordsize='1000,1000' class='rvml' id='vmlgroup'></rvml:group>";e=document.getElementById("vmlgroup")}else{h.innerHTML="<div id='svggroup'></div>";e=document.getElementById("svggroup")}var g=new Raphael(e,f,b);var a;if(Raphael.type=="SVG"){g.canvas.setAttribute("viewBox","0 0 "+f+" "+b)}else{a=h.getElementsByTagName("div")[0]}g.changeSize=function(y,t,m,n){n=!n;var v=y/f;var p=t/b;var o=v<p?v:p;var l=parseInt(b*o);var s=parseInt(f*o);if(Raphael.type=="VML"){var r=document.getElementsByTagName("textpath");for(var q in r){var z=r[q];if(z.style){if(!z._fontSize){var x=z.style.font.split("px");z._fontSize=parseInt(x[0]);z._font=x[1]}z.style.font=z._fontSize*o+"px"+z._font}}var u;if(s<l){u=s*1000/f}else{u=l*1000/b}u=parseInt(u);e.style.width=u+"px";e.style.height=u+"px";if(n){e.style.left=parseInt((y-s)/2)+"px";e.style.top=parseInt((t-l)/2)+"px"}a.style.overflow="visible"}if(n){s=y;l=t}h.style.width=s+"px";h.style.height=l+"px";g.setSize(s,l);if(m){h.style.position="absolute";h.style.left=parseInt((y-s)/2)+"px";h.style.top=parseInt((t-l)/2)+"px"}};g.scaleAll=function(i){g.changeSize(f*i,b*i)};g.changeSize(f,b);g.w=f;g.h=b;return g}})();(function(c,b){var a={};if(typeof a==="undefined"){a={}}if(typeof b!=="function"){b=function(e){return a}}(function(){var H=function(aF){var aH=arguments[0],aE=1,aG=arguments[aE];while(aG){aH=aH.slice(0,-1)+aG.slice(1);aG=arguments[++aE]}return aH},x=function(aE){return"(?:"+aE+")"},g="[A-Za-z]",O="[\\x0D]",l="[0-9]",ah="[\\x22]",av=H(l,"[A-Fa-f]"),ak="[\\x0A]",ae="[\\x20]",am=x("%"+av+av),aw="[\\:\\/\\?\\#\\[\\]\\@]",an="[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]",L=H(aw,an),S=H(g,l,"[\\-\\.\\_\\~]"),h=x(g+H(g,l,"[\\+\\-\\.]")+"*"),r=x(x(am+"|"+H(S,an,"[\\:]"))+"*"),W=x(x("25[0-5]")+"|"+x("2[0-4]"+l)+"|"+x("1"+l+l)+"|"+x("[1-9]"+l)+"|"+l),au=x(W+"\\."+W+"\\."+W+"\\."+W),N=x(av+"{1,4}"),ay=x(x(N+"\\:"+N)+"|"+au),ar=x(H(S,an,"[\\:]")+"+"),T=x("v"+av+"+\\."+H(S,an,"[\\:]")+"+"),at=x("\\["+x(ar+"|"+T)+"\\]"),aD=x(x(am+"|"+H(S,an))+"*"),i=x(at+"|"+au+"|"+aD),aa=x(l+"*"),n=x(x(r+"@")+"?"+i+x("\\:"+aa)+"?"),t=x(am+"|"+H(S,an,"[\\:\\@]")),Y=x(t+"*"),al=x(t+"+"),aj=x(x(am+"|"+H(S,an,"[\\@]"))+"+"),e=x(x("\\/"+Y)+"*"),s=x("\\/"+x(al+e)+"?"),az=x(aj+e),aC=x(al+e),f=x(""),o=x(e+"|"+s+"|"+az+"|"+aC+"|"+f),u=x(x(t+"|[\\/\\?]")+"*"),Z=x(x(t+"|[\\/\\?]")+"*"),ax=x(x("\\/\\/"+n+e)+"|"+s+"|"+aC+"|"+f),ac=x(h+"\\:"+ax+x("\\?"+u)+"?"+x("\\#"+Z)+"?"),R=x(x("\\/\\/"+n+e)+"|"+s+"|"+az+"|"+f),w=x(R+x("\\?"+u)+"?"+x("\\#"+Z)+"?"),y=x(ac+"|"+w),aA=x(h+"\\:"+ax+x("\\?"+u)+"?"),v=new RegExp("^"+x("("+ac+")|("+w+")")+"$"),aq=new RegExp("^("+h+")\\:"+x(x("\\/\\/("+x("("+r+")@")+"?("+i+")"+x("\\:("+aa+")")+"?)")+"?("+e+"|"+s+"|"+aC+"|"+f+")")+x("\\?("+u+")")+"?"+x("\\#("+Z+")")+"?$"),P=new RegExp("^(){0}"+x(x("\\/\\/("+x("("+r+")@")+"?("+i+")"+x("\\:("+aa+")")+"?)")+"?("+e+"|"+s+"|"+az+"|"+f+")")+x("\\?("+u+")")+"?"+x("\\#("+Z+")")+"?$"),I=new RegExp("^("+h+")\\:"+x(x("\\/\\/("+x("("+r+")@")+"?("+i+")"+x("\\:("+aa+")")+"?)")+"?("+e+"|"+s+"|"+aC+"|"+f+")")+x("\\?("+u+")")+"?$"),Q=new RegExp("^"+x("\\#("+Z+")")+"?$"),J=new RegExp("^"+x("("+r+")@")+"?("+i+")"+x("\\:("+aa+")")+"?$"),ao=new RegExp(H("[^]",g,l,"[\\+\\-\\.]"),"g"),ad=new RegExp(H("[^\\%\\:]",S,an),"g"),aB=new RegExp(H("[^\\%]",S,an),"g"),U=new RegExp(H("[^\\%\\/\\:\\@]",S,an),"g"),ab=new RegExp(H("[^\\%\\/\\@]",S,an),"g"),E=new RegExp(H("[^\\%]",S,an,"[\\:\\@\\/\\?]"),"g"),M=E,X=new RegExp(H("[^]",S,an),"g"),K=new RegExp(S,"g"),z=new RegExp(H("[^\\%]",S,L),"g"),V=new RegExp(am+"+","g"),q=/^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?([^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/i,G=/^\.\.?\//,F=/^\/\.(\/|$)/,D=/^\/\.\.(\/|$)/,B=/^\.\.?$/,A=/^\/?.*?(?=\/|$)/,C=("").match(/(){0}/)[1]===undefined,p=function(aE){var aF=aE.charCodeAt(0);if(aF<128){return"%"+aF.toString(16).toUpperCase()}else{if((aF>127)&&(aF<2048)){return"%"+((aF>>6)|192).toString(16).toUpperCase()+"%"+((aF&63)|128).toString(16).toUpperCase()}else{return"%"+((aF>>12)|224).toString(16).toUpperCase()+"%"+(((aF>>6)&63)|128).toString(16).toUpperCase()+"%"+((aF&63)|128).toString(16).toUpperCase()}}},ap=function(aH){var aE="",aF=0,aI,aG;while(aF<aH.length){aI=parseInt(aH.substr(aF+1,2),16);if(aI<128){aG=String.fromCharCode(aI);if(aG.match(K)){aE+=aG}else{aE+=aH.substr(aF,3)}aF+=3}else{if((aI>191)&&(aI<224)){aE+=aH.substr(aF,6);aF+=6}else{aE+=aH.substr(aF,9);aF+=9}}}return aE},m=function(aI){var aF="",aH=0,aJ,aG,aE;while(aH<aI.length){aJ=parseInt(aI.substr(aH+1,2),16);if(aJ<128){aF+=String.fromCharCode(aJ);aH+=3}else{if((aJ>191)&&(aJ<224)){aG=parseInt(aI.substr(aH+4,2),16);aF+=String.fromCharCode(((aJ&31)<<6)|(aG&63));aH+=6}else{aG=parseInt(aI.substr(aH+4,2),16);aE=parseInt(aI.substr(aH+7,2),16);aF+=String.fromCharCode(((aJ&15)<<12)|((aG&63)<<6)|(aE&63));aH+=9}}}return aF},ag=function(aE){return aE===undefined?"undefined":(aE===null?"null":Object.prototype.toString.call(aE).split(" ").pop().split("]").shift().toLowerCase())},ai=function(){this.errors=[]},af={};ai.prototype={scheme:undefined,authority:undefined,userinfo:undefined,host:undefined,port:undefined,path:undefined,query:undefined,fragment:undefined,reference:undefined,errors:undefined};af.SCHEMES={};af.parse=function(aI,aE){var aH,aG=new ai(),aF;aI=aI?aI.toString():"";aE=aE||{};if(aE.reference==="suffix"){aI=(aE.scheme?aE.scheme+":":"")+"//"+aI}aH=aI.match(v);if(aH){if(aH[1]){aH=aI.match(aq)}else{aH=aI.match(P)}}if(!aH){if(!aE.tolerant){aG.errors.push("URI is not strictly valid.")}aH=aI.match(q)}if(aH){if(C){aG.scheme=aH[1];aG.authority=aH[2];aG.userinfo=aH[3];aG.host=aH[4];aG.port=parseInt(aH[5],10);aG.path=aH[6]||"";aG.query=aH[7];aG.fragment=aH[8];if(isNaN(aG.port)){aG.port=aH[5]}}else{aG.scheme=aH[1]||undefined;aG.authority=(aI.indexOf("//")!==-1?aH[2]:undefined);aG.userinfo=(aI.indexOf("@")!==-1?aH[3]:undefined);aG.host=(aI.indexOf("//")!==-1?aH[4]:undefined);aG.port=parseInt(aH[5],10);aG.path=aH[6]||"";aG.query=(aI.indexOf("?")!==-1?aH[7]:undefined);aG.fragment=(aI.indexOf("#")!==-1?aH[8]:undefined);if(isNaN(aG.port)){aG.port=(aI.match(/\/\/.*\:(?:\/|\?|\#|$)/)?aH[4]:undefined)}}if(!aG.scheme&&!aG.authority&&!aG.path&&!aG.query){aG.reference="same-document"}else{if(!aG.scheme){aG.reference="relative"}else{if(!aG.fragment){aG.reference="absolute"}else{aG.reference="uri"}}}if(aE.reference&&aE.reference!=="suffix"&&aE.reference!==aG.reference){aG.errors.push("URI is not a "+aE.reference+" reference.")}aF=af.SCHEMES[aG.scheme||aE.scheme];if(aF&&aF.parse){aF.parse(aG,aE)}}else{aG.errors.push("URI can not be parsed.")}return aG};af._recomposeAuthority=function(aF){var aE=[];if(aF.userinfo!==undefined||aF.host!==undefined||typeof aF.port==="number"){if(aF.userinfo!==undefined){aE.push(aF.userinfo.toString().replace(ad,p));aE.push("@")}if(aF.host!==undefined){aE.push(aF.host.toString().toLowerCase().replace(aB,p))}if(typeof aF.port==="number"){aE.push(":");aE.push(aF.port.toString(10))}}return aE.length?aE.join(""):undefined};af.removeDotSegments=function(aF){var aE=[],aG;while(aF.length){if(aF.match(G)){aF=aF.replace(G,"")}else{if(aF.match(F)){aF=aF.replace(F,"/")}else{if(aF.match(D)){aF=aF.replace(D,"/");aE.pop()}else{if(aF==="."||aF===".."){aF=""}else{aG=aF.match(A)[0];aF=aF.slice(aG.length);aE.push(aG)}}}}}return aE.join("")};af.serialize=function(aI,aE){var aG=[],aF,aH;aE=aE||{};aF=af.SCHEMES[aI.scheme||aE.scheme];if(aF&&aF.serialize){aF.serialize(aI,aE)}if(aE.reference!=="suffix"&&aI.scheme){aG.push(aI.scheme.toString().toLowerCase().replace(ao,""));aG.push(":")}aI.authority=af._recomposeAuthority(aI);if(aI.authority!==undefined){if(aE.reference!=="suffix"){aG.push("//")}aG.push(aI.authority);if(aI.path&&aI.path.charAt(0)!=="/"){aG.push("/")}}if(aI.path){aH=af.removeDotSegments(aI.path.toString().replace(/%2E/ig,"."));if(aI.scheme){aH=aH.replace(U,p)}else{aH=aH.replace(ab,p)}if(aI.authority===undefined){aH=aH.replace(/^\/\//,"/%2F")}aG.push(aH)}if(aI.query){aG.push("?");aG.push(aI.query.toString().replace(E,p))}if(aI.fragment){aG.push("#");aG.push(aI.fragment.toString().replace(M,p))}return aG.join("").replace(V,ap).replace(/%[0-9A-Fa-f]{2}/g,function(aJ){return aJ.toUpperCase()})};af.resolveComponents=function(aG,aF,aE,aI){var aH=new ai();if(!aI){aG=af.parse(af.serialize(aG,aE),aE);aF=af.parse(af.serialize(aF,aE),aE)}aE=aE||{};if(!aE.tolerant&&aF.scheme){aH.scheme=aF.scheme;aH.authority=aF.authority;aH.userinfo=aF.userinfo;aH.host=aF.host;aH.port=aF.port;aH.path=af.removeDotSegments(aF.path);aH.query=aF.query}else{if(aF.authority!==undefined){aH.authority=aF.authority;aH.userinfo=aF.userinfo;aH.host=aF.host;aH.port=aF.port;aH.path=af.removeDotSegments(aF.path);aH.query=aF.query}else{if(!aF.path){aH.path=aG.path;if(aF.query!==undefined){aH.query=aF.query}else{aH.query=aG.query}}else{if(aF.path.charAt(0)==="/"){aH.path=af.removeDotSegments(aF.path)}else{if(aG.authority!==undefined&&!aG.path){aH.path="/"+aF.path}else{if(!aG.path){aH.path=aF.path}else{aH.path=aG.path.slice(0,aG.path.lastIndexOf("/")+1)+aF.path}}aH.path=af.removeDotSegments(aH.path)}aH.query=aF.query}aH.authority=aG.authority;aH.userinfo=aG.userinfo;aH.host=aG.host;aH.port=aG.port}aH.scheme=aG.scheme}aH.fragment=aF.fragment;return aH};af.resolve=function(aG,aF,aE){return af.serialize(af.resolveComponents(af.parse(aG,aE),af.parse(aF,aE),aE,true),aE)};af.normalize=function(aF,aE){if(typeof aF==="string"){return af.serialize(af.parse(aF,aE),aE)}else{if(ag(aF)==="object"){return af.parse(af.serialize(aF,aE),aE)}}return aF};af.equal=function(aG,aF,aE){if(typeof aG==="string"){aG=af.serialize(af.parse(aG,aE),aE)}else{if(ag(aG)==="object"){aG=af.serialize(aG,aE)}}if(typeof aF==="string"){aF=af.serialize(af.parse(aF,aE),aE)}else{if(ag(aF)==="object"){aF=af.serialize(aF,aE)}}return aG===aF};af.escapeComponent=function(aE){return aE&&aE.toString().replace(X,p)};af.unescapeComponent=function(aE){return aE&&aE.toString().replace(V,m)};a.Components=ai;a.URI=af;a.URI={SCHEMES:af.SCHEMES,parse:af.parse,removeDotSegments:af.removeDotSegments,serialize:af.serialize,resolveComponents:af.resolveComponents,resolve:af.resolve,normalize:af.normalize,equal:af.equal,escapeComponent:af.escapeComponent,unescapeComponent:af.unescapeComponent}}());var a=a||this,b=b||function(){return a};(function(){var m=b("./uri/uri").URI,h={},D="0123456789abcdef".split(""),o,s,C,l;function g(E){return E===undefined?"undefined":(E===null?"null":Object.prototype.toString.call(E).split(" ").pop().split("]").shift().toLowerCase())}function p(){}function w(E){p.prototype=E||{};return new p()}function f(I,H,G){var E={},F;for(F in I){if(I[F]!==h[F]){E[F]=H.call(G,I[F],F,I)}}return E}o=function(F,I,H){var E=0,J=F.length,G=new Array(J);for(;E<J;++E){G[E]=I.call(H,F[E],E,F)}return G};if(Array.prototype.map){o=function(E,G,F){return Array.prototype.map.call(E,G,F)}}s=function(F,I,H){var E=0,J=F.length,G=[];for(;E<J;++E){if(I.call(H,F[E],E,F)){G[G.length]=F[E]}}return G};if(Array.prototype.filter){s=function(E,G,F){return Array.prototype.filter.call(E,G,F)}}C=function(F,G){var E=0,H=F.length;for(;E<H;++E){if(F[E]===G){return E}}return -1};if(Array.prototype.indexOf){C=function(E,F){return Array.prototype.indexOf.call(E,F)}}function y(E){return E!==undefined&&E!==null?(E instanceof Array&&!E.callee?E:(typeof E.length!=="number"||E.split||E.setInterval||E.call?[E]:Array.prototype.slice.call(E))):[]}function r(G){var E=[],F;switch(g(G)){case"object":for(F in G){if(G[F]!==h[F]){E[E.length]=F}}break;case"array":for(F=G.length-1;F>=0;--F){E[F]=F}break}return E}function i(E,F){if(C(E,F)===-1){E.push(F)}return E}function t(E,G){var F=C(E,G);if(F>-1){E.splice(F,1)}return E}function x(){return[D[Math.floor(Math.random()*16)],D[Math.floor(Math.random()*16)],D[Math.floor(Math.random()*16)],D[Math.floor(Math.random()*16)],D[Math.floor(Math.random()*16)],D[Math.floor(Math.random()*16)],D[Math.floor(Math.random()*16)],D[Math.floor(Math.random()*16)],"-",D[Math.floor(Math.random()*16)],D[Math.floor(Math.random()*16)],D[Math.floor(Math.random()*16)],D[Math.floor(Math.random()*16)],"-4",D[Math.floor(Math.random()*16)],D[Math.floor(Math.random()*16)],D[Math.floor(Math.random()*16)],"-",D[(Math.floor(Math.random()*16)&3)|8],D[Math.floor(Math.random()*16)],D[Math.floor(Math.random()*16)],D[Math.floor(Math.random()*16)],"-",D[Math.floor(Math.random()*16)],D[Math.floor(Math.random()*16)],D[Math.floor(Math.random()*16)],D[Math.floor(Math.random()*16)],D[Math.floor(Math.random()*16)],D[Math.floor(Math.random()*16)],D[Math.floor(Math.random()*16)],D[Math.floor(Math.random()*16)],D[Math.floor(Math.random()*16)],D[Math.floor(Math.random()*16)],D[Math.floor(Math.random()*16)],D[Math.floor(Math.random()*16)]].join("")}function A(E){return encodeURIComponent(E).replace(/!/g,"%21").replace(/'/g,"%27").replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/\*/g,"%2A")}function e(E){if(typeof E==="string"&&E.indexOf("#")===-1){E+="#"}return E}function u(){this.errors=[];this.validated={}}u.prototype.addError=function(F,I,E,H,G){this.errors.push({uri:F instanceof z?F.getURI():F,schemaUri:I instanceof z?I.getURI():I,attribute:E,message:H,details:G})};u.prototype.registerValidation=function(F,E){if(!this.validated[F]){this.validated[F]=[E]}else{this.validated[F].push(E)}};u.prototype.isValidatedBy=function(F,E){return !!this.validated[F]&&C(this.validated[F],E)!==-1};function z(G,F,H,E){if(F instanceof z){if(typeof E!=="string"){E=F._fd}if(typeof H!=="string"){H=F._uri}F=F._value}if(typeof H!=="string"){H="urn:uuid:"+x()+"#"}else{if(H.indexOf(":")===-1){H=e(m.resolve("urn:uuid:"+x()+"#",H))}}this._env=G;this._value=F;this._uri=H;this._fd=E||this._env._options.defaultFragmentDelimiter}z.prototype.getEnvironment=function(){return this._env};z.prototype.getType=function(){return g(this._value)};z.prototype.getValue=function(){return this._value};z.prototype.getURI=function(){return this._uri};z.prototype.resolveURI=function(E){return e(m.resolve(this._uri,E))};z.prototype.getPropertyNames=function(){return r(this._value)};z.prototype.getProperty=function(E){var F=this._value?this._value[E]:undefined;if(F instanceof z){return F}return new z(this._env,F,this._uri+this._fd+A(E),this._fd)};z.prototype.getProperties=function(){var F=g(this._value),E=this;if(F==="object"){return f(this._value,function(H,G){if(H instanceof z){return H}return new z(E._env,H,E._uri+E._fd+A(G),E._fd)})}else{if(F==="array"){return o(this._value,function(H,G){if(H instanceof z){return H}return new z(E._env,H,E._uri+E._fd+A(G),E._fd)})}}};z.prototype.getValueOfProperty=function(E){if(this._value){if(this._value[E] instanceof z){return this._value[E]._value}return this._value[E]}};z.prototype.equals=function(E){if(E instanceof z){return this._value===E._value}return this._value===E};function B(H,F){var G,E;if(H instanceof z){H=H.getValue()}switch(g(H)){case"object":if(F){G={};for(E in H){if(H[E]!==h[E]){G[E]=B(H[E],F)}}return G}else{return w(H)}break;case"array":if(F){G=new Array(H.length);E=H.length;while(--E>=0){G[E]=B(H[E],F)}return G}else{return Array.prototype.slice.call(H)}break;default:return H}}function v(G,F,I,H){var E;z.call(this,G,F,I);if(H===true){this._schema=this}else{if(F instanceof v&&!(H instanceof v)){this._schema=F._schema}else{this._schema=H instanceof v?H:this._env.getDefaultSchema()||v.createEmptySchema(this._env)}}E=this._schema.getValueOfProperty("fragmentResolution");if(E==="dot-delimited"){this._fd="."}else{if(E==="slash-delimited"){this._fd="/"}}}v.prototype=w(z.prototype);v.createEmptySchema=function(E){var F=w(v.prototype);z.call(F,E,{},undefined,undefined);F._schema=F;return F};v.prototype.getSchema=function(){return this._schema};v.prototype.getAttribute=function(H,G){var F,J,I,E;if(!G&&this._attributes&&this._attributes.hasOwnProperty(H)){return this._attributes[H]}F=this._schema.getProperty("properties").getProperty(H);J=F.getValueOfProperty("parser");I=this.getProperty(H);if(typeof J==="function"){E=J(I,F,G);if(!G&&this._attributes){this._attributes[H]=E}return E}return I.getValue()};v.prototype.getAttributes=function(){var G,H,F,E,I;if(!this._attributes&&this.getType()==="object"){G=this.getProperties();H=this._schema.getProperty("properties");this._attributes={};for(F in G){if(G[F]!==h[F]){E=H&&H.getProperty(F);I=E&&E.getValueOfProperty("parser");if(typeof I==="function"){this._attributes[F]=I(G[F],E)}else{this._attributes[F]=G[F].getValue()}}}}return B(this._attributes,false)};v.prototype.getLink=function(F,E){var G=this.getAttribute("links",[F,E]);if(G&&G.length&&G[G.length-1]){return G[G.length-1]}};v.prototype.validate=function(E,F,I,J,G){var H=this._schema.getValueOfProperty("validator");if(!(E instanceof z)){E=this.getEnvironment().createInstance(E)}if(!(F instanceof u)){F=new u()}if(typeof H==="function"&&!F.isValidatedBy(E.getURI(),this.getURI())){F.registerValidation(E.getURI(),this.getURI());H(E,this,this._schema,F,I,J,G)}return F};function n(I,F,K){var H=g(I),G=g(F),J,E;if(G==="undefined"){return B(I,true)}else{if(H==="undefined"||G!==H){return B(F,true)}else{if(G==="object"){if(I instanceof v){I=I.getAttributes()}if(F instanceof v){F=F.getAttributes();if(F["extends"]&&K&&F["extends"] instanceof v){F["extends"]=[F["extends"]]}}J=B(I,true);for(E in F){if(F[E]!==h[E]){J[E]=n(I[E],F[E],K)}}return J}else{return B(F,true)}}}}function q(){this._id=x();this._schemas={};this._options={}}q.prototype.clone=function(){var E=new q();E._schemas=w(this._schemas);E._options=w(this._options);return E};q.prototype.createInstance=function(G,F){var E;F=e(F);if(G instanceof z&&(!F||G.getURI()===F)){return G}E=new z(this,G,F);return E};q.prototype.createSchema=function(I,H,G){var E,F;G=e(G);if(I instanceof v&&(!G||I._uri===G)&&(!H||I._schema.equals(H))){return I}E=new v(this,I,G,H);F=E.getSchema().getValueOfProperty("initializer");if(typeof F==="function"){E=F(E)}this._schemas[E._uri]=E;this._schemas[G]=E;E.getAttributes();return E};q.prototype.createEmptySchema=function(){var E=v.createEmptySchema(this);this._schemas[E._uri]=E;return E};q.prototype.findSchema=function(E){return this._schemas[e(E)]};q.prototype.setOption=function(E,F){this._options[E]=F};q.prototype.getOption=function(E){return this._options[E]};q.prototype.setDefaultFragmentDelimiter=function(E){if(typeof E==="string"&&E.length>0){this._options.defaultFragmentDelimiter=E}};q.prototype.getDefaultFragmentDelimiter=function(){return this._options.defaultFragmentDelimiter};q.prototype.setDefaultSchemaURI=function(E){if(typeof E==="string"){this._options.defaultSchemaURI=e(E)}};q.prototype.getDefaultSchema=function(){return this.findSchema(this._options.defaultSchemaURI)};q.prototype.validate=function(K,J){var E,H,G,F=new u();try{E=this.createInstance(K);F.instance=E}catch(I){F.addError(I.uri,I.schemaUri,I.attribute,I.message,I.details)}try{H=this.createSchema(J);F.schema=H;G=H.getSchema();F.schemaSchema=G}catch(I){F.addError(I.uri,I.schemaUri,I.attribute,I.message,I.details)}if(G){G.validate(H,F)}if(F.errors.length){return F}return H.validate(E,F)};q.prototype._checkForInvalidInstances=function(L,G){var O=[],J=[[G,this._schemas[G]]],E=0,N,F,M,H,I,K;while(E++<L&&J.length){N=J.shift();F=N[0];M=N[1];if(M instanceof v){if(this._schemas[M._uri]!==M){O.push("Instance "+F+" does not match "+M._uri)}else{I=M.getAttributes();for(K in I){if(I[K]!==h[K]){J.push([F+"/"+A(K),I[K]])}}}}else{if(g(M)==="object"){I=M;for(K in I){if(I.hasOwnProperty(K)){J.push([F+"/"+A(K),I[K]])}}}else{if(g(M)==="array"){I=M;for(K=0;K<I.length;++K){J.push([F+"/"+A(K),I[K]])}}}}}return O.length?O:E};l={_environments:{},_defaultEnvironmentID:"",isJSONInstance:function(E){return E instanceof z},isJSONSchema:function(E){return E instanceof v},createEnvironment:function(E){E=E||this._defaultEnvironmentID;if(!this._environments[E]){throw new Error("Unknown Environment ID")}return this._environments[E].clone()},Environment:q,registerEnvironment:function(F,E){F=F||(E||0)._id;if(F&&!this._environments[F]&&E instanceof q){E._id=F;this._environments[F]=E}},setDefaultEnvironmentID:function(E){if(typeof E==="string"){if(!this._environments[E]){throw new Error("Unknown Environment ID")}this._defaultEnvironmentID=E}},getDefaultEnvironmentID:function(){return this._defaultEnvironmentID},typeOf:g,createObject:w,mapObject:f,mapArray:o,filterArray:s,searchArray:C,toArray:y,keys:r,pushUnique:i,popFirst:t,clone:B,randomUUID:x,escapeURIComponent:A,formatURI:e,inherits:n};this.JSV=l;a.JSV=l;b("./environments")}());(function(){var q={},s=b("./jsv").JSV,n,J,z,o,D,p,i,g,C,r,E,t,h,f,B,u,G,v,e,I,y,w,l,A,H,F,x;n=function n(L,O,K,N,M){Error.call(this,N);this.uri=L.getURI();this.schemaUri=O.getURI();this.attribute=K;this.message=N;this.description=N;this.details=M};n.prototype=new Error();n.prototype.constructor=n;n.prototype.name="InitializationError";J={string:function(K,L){return K.getType()==="string"},number:function(K,L){return K.getType()==="number"},integer:function(K,L){return K.getType()==="number"&&K.getValue()%1===0},"boolean":function(K,L){return K.getType()==="boolean"},object:function(K,L){return K.getType()==="object"},array:function(K,L){return K.getType()==="array"},"null":function(K,L){return K.getType()==="null"},any:function(K,L){return true}};z=new s.Environment();z.setOption("strict",false);z.setOption("validateReferences",false);o={"$schema":"http://json-schema.org/draft-00/hyper-schema#",id:"http://json-schema.org/draft-00/schema#",type:"object",properties:{type:{type:["string","array"],items:{type:["string",{"$ref":"#"}]},optional:true,uniqueItems:true,"default":"any",parser:function(K,L){var M;if(K.getType()==="string"){return K.getValue()}else{if(K.getType()==="object"){return K.getEnvironment().createSchema(K,L.getEnvironment().findSchema(L.resolveURI("#")))}else{if(K.getType()==="array"){M=L.getValueOfProperty("parser");return s.mapArray(K.getProperties(),function(N){return M(N,L)})}}}return"any"},validator:function(U,N,V,P,T,W,K){var L=s.toArray(N.getAttribute("type")),S,Q,R,O,M;if(U.getType()!=="undefined"&&L&&L.length){M=V.getValueOfProperty("typeValidators")||{};for(S=0,Q=L.length;S<Q;++S){R=L[S];if(s.isJSONSchema(R)){O=s.createObject(P);O.errors=[];O.validated=s.clone(P.validated);if(R.validate(U,O,T,W,K).errors.length===0){return true}}else{if(M[R]!==q[R]&&typeof M[R]==="function"){if(M[R](U,P)){return true}}else{return true}}}P.addError(U,N,"type","Instance is not a required type",L);return false}return true},typeValidators:J},properties:{type:"object",additionalProperties:{"$ref":"#"},optional:true,"default":{},parser:function(L,M,K){var N=L.getEnvironment(),O=M.getEnvironment();if(L.getType()==="object"){if(K){return N.createSchema(L.getProperty(K),O.findSchema(M.resolveURI("#")))}else{return s.mapObject(L.getProperties(),function(P){return N.createSchema(P,O.findSchema(M.resolveURI("#")))})}}return{}},validator:function(Q,M,R,N,O,S,K){var L,P;if(Q.getType()==="object"){L=M.getAttribute("properties");for(P in L){if(L[P]!==q[P]&&L[P]){L[P].validate(Q.getProperty(P),N,Q,M,P)}}}}},items:{type:[{"$ref":"#"},"array"],items:{"$ref":"#"},optional:true,"default":{},parser:function(K,L){if(K.getType()==="object"){return K.getEnvironment().createSchema(K,L.getEnvironment().findSchema(L.resolveURI("#")))}else{if(K.getType()==="array"){return s.mapArray(K.getProperties(),function(M){return M.getEnvironment().createSchema(M,L.getEnvironment().findSchema(L.resolveURI("#")))})}}return K.getEnvironment().createEmptySchema()},validator:function(U,L,V,M,T,W,K){var Q,P,S,N,R,O;if(U.getType()==="array"){Q=U.getProperties();P=L.getAttribute("items");O=L.getAttribute("additionalProperties");if(s.typeOf(P)==="array"){for(S=0,N=Q.length;S<N;++S){R=P[S]||O;if(R!==false){R.validate(Q[S],M,U,L,S)}else{M.addError(U,L,"additionalProperties","Additional items are not allowed",R)}}}else{R=P||O;for(S=0,N=Q.length;S<N;++S){R.validate(Q[S],M,U,L,S)}}}}},optional:{type:"boolean",optional:true,"default":false,parser:function(K,L){return !!K.getValue()},validator:function(K,P,M,L,O,Q,N){if(K.getType()==="undefined"&&!P.getAttribute("optional")){L.addError(K,P,"optional","Property is required",false)}},validationRequired:true},additionalProperties:{type:[{"$ref":"#"},"boolean"],optional:true,"default":{},parser:function(K,L){if(K.getType()==="object"){return K.getEnvironment().createSchema(K,L.getEnvironment().findSchema(L.resolveURI("#")))}else{if(K.getType()==="boolean"&&K.getValue()===false){return false}}return K.getEnvironment().createEmptySchema()},validator:function(S,M,T,N,Q,U,K){var O,L,P,R;if(S.getType()==="object"){O=M.getAttribute("additionalProperties");L=M.getAttribute("properties")||{};P=S.getProperties();for(R in P){if(P[R]!==q[R]&&P[R]&&L[R]===q[R]){if(s.isJSONSchema(O)){O.validate(P[R],N,S,M,R)}else{if(O===false){N.addError(S,M,"additionalProperties","Additional properties are not allowed",O)}}}}}}},requires:{type:["string",{"$ref":"#"}],optional:true,parser:function(K,L){if(K.getType()==="string"){return K.getValue()}else{if(K.getType()==="object"){return K.getEnvironment().createSchema(K,L.getEnvironment().findSchema(L.resolveURI("#")))}}},validator:function(K,Q,M,L,P,R,N){var O;if(K.getType()!=="undefined"&&P&&P.getType()!=="undefined"){O=Q.getAttribute("requires");if(typeof O==="string"){if(P.getProperty(O).getType()==="undefined"){L.addError(K,Q,"requires",'Property requires sibling property "'+O+'"',O)}}else{if(s.isJSONSchema(O)){O.validate(P,L)}}}}},minimum:{type:"number",optional:true,parser:function(K,L){if(K.getType()==="number"){return K.getValue()}},validator:function(Q,L,R,M,O,S,K){var N,P;if(Q.getType()==="number"){N=L.getAttribute("minimum");P=L.getAttribute("minimumCanEqual");if(typeof N==="number"&&(Q.getValue()<N||(P===false&&Q.getValue()===N))){M.addError(Q,L,"minimum","Number is less then the required minimum value",N)}}}},maximum:{type:"number",optional:true,parser:function(K,L){if(K.getType()==="number"){return K.getValue()}},validator:function(Q,M,R,O,P,S,K){var L,N;if(Q.getType()==="number"){L=M.getAttribute("maximum");N=M.getAttribute("maximumCanEqual");if(typeof L==="number"&&(Q.getValue()>L||(N===false&&Q.getValue()===L))){O.addError(Q,M,"maximum","Number is greater then the required maximum value",L)}}}},minimumCanEqual:{type:"boolean",optional:true,requires:"minimum","default":true,parser:function(K,L){if(K.getType()==="boolean"){return K.getValue()}return true}},maximumCanEqual:{type:"boolean",optional:true,requires:"maximum","default":true,parser:function(K,L){if(K.getType()==="boolean"){return K.getValue()}return true}},minItems:{type:"integer",optional:true,minimum:0,"default":0,parser:function(K,L){if(K.getType()==="number"){return K.getValue()}return 0},validator:function(K,Q,N,L,P,R,O){var M;if(K.getType()==="array"){M=Q.getAttribute("minItems");if(typeof M==="number"&&K.getProperties().length<M){L.addError(K,Q,"minItems","The number of items is less then the required minimum",M)}}}},maxItems:{type:"integer",optional:true,minimum:0,parser:function(K,L){if(K.getType()==="number"){return K.getValue()}},validator:function(K,Q,M,L,P,R,O){var N;if(K.getType()==="array"){N=Q.getAttribute("maxItems");if(typeof N==="number"&&K.getProperties().length>N){L.addError(K,Q,"maxItems","The number of items is greater then the required maximum",N)}}}},pattern:{type:"string",optional:true,format:"regex",parser:function(K,L){if(K.getType()==="string"){try{return new RegExp(K.getValue())}catch(M){return M}}},validator:function(Q,L,R,M,P,S,K){var O;try{O=L.getAttribute("pattern");if(O instanceof Error){M.addError(L,R,"pattern","Invalid pattern",L.getValueOfProperty("pattern"))}else{if(Q.getType()==="string"&&O&&!O.test(Q.getValue())){M.addError(Q,L,"pattern","String does not match pattern",O.toString())}}}catch(N){M.addError(L,R,"pattern","Invalid pattern",L.getValueOfProperty("pattern"))}}},minLength:{type:"integer",optional:true,minimum:0,"default":0,parser:function(K,L){if(K.getType()==="number"){return K.getValue()}return 0},validator:function(K,Q,N,L,P,R,O){var M;if(K.getType()==="string"){M=Q.getAttribute("minLength");if(typeof M==="number"&&K.getValue().length<M){L.addError(K,Q,"minLength","String is less then the required minimum length",M)}}}},maxLength:{type:"integer",optional:true,parser:function(K,L){if(K.getType()==="number"){return K.getValue()}},validator:function(K,Q,N,M,P,R,O){var L;if(K.getType()==="string"){L=Q.getAttribute("maxLength");if(typeof L==="number"&&K.getValue().length>L){M.addError(K,Q,"maxLength","String is greater then the required maximum length",L)}}}},"enum":{type:"array",optional:true,minItems:1,uniqueItems:true,parser:function(K,L){if(K.getType()==="array"){return K.getValue()}},validator:function(R,M,S,N,Q,T,L){var K,P,O;if(R.getType()!=="undefined"){K=M.getAttribute("enum");if(K){for(P=0,O=K.length;P<O;++P){if(R.equals(K[P])){return true}}N.addError(R,M,"enum","Instance is not one of the possible values",K)}}}},title:{type:"string",optional:true},description:{type:"string",optional:true},format:{type:"string",optional:true,parser:function(K,L){if(K.getType()==="string"){return K.getValue()}},validator:function(Q,L,R,M,O,S,K){var N,P;if(Q.getType()==="string"){N=L.getAttribute("format");P=R.getValueOfProperty("formatValidators");if(typeof N==="string"&&P[N]!==q[N]&&typeof P[N]==="function"&&!P[N].call(this,Q,M)){M.addError(Q,L,"format","String is not in the required format",N)}}},formatValidators:{}},contentEncoding:{type:"string",optional:true},"default":{type:"any",optional:true},maxDecimal:{type:"integer",optional:true,minimum:0,parser:function(K,L){if(K.getType()==="number"){return K.getValue()}},validator:function(Q,M,R,O,P,S,K){var N,L;if(Q.getType()==="number"){N=M.getAttribute("maxDecimal");if(typeof N==="number"){L=Q.getValue().toString(10).split(".")[1];if(L&&L.length>N){O.addError(Q,M,"maxDecimal","The number of decimal places is greater then the allowed maximum",N)}}}}},disallow:{type:["string","array"],items:{type:"string"},optional:true,uniqueItems:true,parser:function(K,L){if(K.getType()==="string"||K.getType()==="array"){return K.getValue()}},validator:function(U,M,V,O,S,W,K){var Q=s.toArray(M.getAttribute("disallow")),R,P,T,L,N;if(U.getType()!=="undefined"&&Q&&Q.length){L=V.getValueOfProperty("typeValidators")||{};for(R=0,P=Q.length;R<P;++R){T=Q[R];if(s.isJSONSchema(T)){N=s.createObject(O);N.errors=[];N.validated=s.clone(O.validated);if(T.validate(U,N,S,W,K).errors.length===0){O.addError(U,M,"disallow","Instance is a disallowed type",Q);return false}}else{if(L[T]!==q[T]&&typeof L[T]==="function"){if(L[T](U,O)){O.addError(U,M,"disallow","Instance is a disallowed type",Q);return false}}}}return true}return true},typeValidators:J},"extends":{type:[{"$ref":"#"},"array"],items:{"$ref":"#"},optional:true,"default":{},parser:function(K,L){if(K.getType()==="object"){return K.getEnvironment().createSchema(K,L.getEnvironment().findSchema(L.resolveURI("#")))}else{if(K.getType()==="array"){return s.mapArray(K.getProperties(),function(M){return M.getEnvironment().createSchema(M,L.getEnvironment().findSchema(L.resolveURI("#")))})}}},validator:function(R,L,S,M,Q,T,K){var O=L.getAttribute("extends"),P,N;if(O){if(s.isJSONSchema(O)){O.validate(R,M,Q,T,K)}else{if(s.typeOf(O)==="array"){for(P=0,N=O.length;P<N;++P){O[P].validate(R,M,Q,T,K)}}}}}}},optional:true,"default":{},fragmentResolution:"dot-delimited",parser:function(K,L){if(K.getType()==="object"){return K.getEnvironment().createSchema(K,L)}},validator:function(T,M,U,N,S,V,L){var W=M.getPropertyNames(),R,O,P=U.getAttribute("properties"),Q=T.getEnvironment().getOption("strict"),K;for(R in P){if(P[R]!==q[R]){if(P[R].getValueOfProperty("validationRequired")){s.pushUnique(W,R)}if(Q&&P[R].getValueOfProperty("deprecated")){s.popFirst(W,R)}}}for(R=0,O=W.length;R<O;++R){if(P[W[R]]!==q[W[R]]){K=P[W[R]].getValueOfProperty("validator");if(typeof K==="function"){K(T,M,P[W[R]],N,S,V,L)}}}}};D={"$schema":"http://json-schema.org/draft-00/hyper-schema#",id:"http://json-schema.org/draft-00/hyper-schema#",properties:{links:{type:"array",items:{"$ref":"links#"},optional:true,parser:function(N,Q,M){var P,L=Q.getValueOfProperty("items")["$ref"],R=Q.getEnvironment().findSchema(L),K=R&&R.getValueOfProperty("parser"),O;M=s.toArray(M);if(typeof K==="function"){P=s.mapArray(N.getProperties(),function(S){return K(S,R)})}else{P=s.toArray(N.getValue())}if(M[0]){P=s.filterArray(P,function(S){return S.rel===M[0]})}if(M[1]){O=Q.getValueOfProperty("selfReferenceVariable");P=s.mapArray(P,function(U){var S=M[1],T=U.href;T=T.replace(/\{(.+)\}/g,function(Z,Y,X,V){var W;if(Y===O){W=S.getValue()}else{W=S.getValueOfProperty(Y)}return W!==undefined?String(W):""});return T?s.formatURI(S.resolveURI(T)):T})}return P},selfReferenceVariable:"-this"},fragmentResolution:{type:"string",optional:true,"default":"dot-delimited"},root:{type:"boolean",optional:true,"default":false},readonly:{type:"boolean",optional:true,"default":false},pathStart:{type:"string",optional:true,format:"uri",validator:function(K,P,M,L,O,R,N){var Q;if(K.getType()!=="undefined"){Q=P.getAttribute("pathStart");if(typeof Q==="string"){if(K.getURI().indexOf(Q)!==0){L.addError(K,P,"pathStart","Instance's URI does not start with "+Q,Q)}}}}},mediaType:{type:"string",optional:true,format:"media-type"},alternate:{type:"array",items:{"$ref":"#"},optional:true}},links:[{href:"{$ref}",rel:"full"},{href:"{$schema}",rel:"describedby"},{href:"{id}",rel:"self"}],initializer:function(L){var M,N,K;M=L._schema.getLink("describedby",L);if(M&&L._schema._uri!==M){if(L._env._schemas[M]){L._schema=L._env._schemas[M];initializer=L._schema.getValueOfProperty("initializer");if(typeof initializer==="function"){return initializer(L)}else{return L}}else{if(L._env._options.validateReferences){throw new n(L,L._schema,"{link:describedby}","Unknown schema reference",M)}}}M=L._schema.getLink("full",L);if(M&&L._uri!==M){if(L._env._schemas[M]){L=L._env._schemas[M];return L}else{if(L._env._options.validateReferences){throw new n(L,L._schema,"{link:full}","Unknown schema reference",M)}}}N=L.getAttribute("extends");if(s.isJSONSchema(N)){K=s.inherits(N,L,true);L=L._env.createSchema(K,L._schema,L._uri)}M=L._schema.getLink("self",L);if(s.typeOf(M)==="string"){L._uri=s.formatURI(M)}return L}};p={"$schema":"http://json-schema.org/draft-00/hyper-schema#",id:"http://json-schema.org/draft-00/links#",type:"object",properties:{href:{type:"string"},rel:{type:"string"},method:{type:"string","default":"GET",optional:true},enctype:{type:"string",requires:"method",optional:true},properties:{type:"object",additionalProperties:{"$ref":"hyper-schema#"},optional:true,parser:function(M,N,L){var O=M.getEnvironment(),P=N.getEnvironment(),K=N.getValueOfProperty("additionalProperties")["$ref"];if(M.getType()==="object"){if(L){return O.createSchema(M.getProperty(L),P.findSchema(N.resolveURI(K)))}else{return s.mapObject(M.getProperties(),function(Q){return O.createSchema(Q,P.findSchema(N.resolveURI(K)))})}}}}},parser:function(K,M){var L=M.getProperty("properties");if(K.getType()==="object"){return s.mapObject(K.getProperties(),function(P,O){var N=L.getProperty(O),Q=N&&N.getValueOfProperty("parser");if(typeof Q==="function"){return Q(P,N)}return P.getValue()})}return K.getValue()}};z.setOption("defaultFragmentDelimiter",".");z.setOption("defaultSchemaURI","http://json-schema.org/draft-00/schema#");i=z.createSchema(o,true,"http://json-schema.org/draft-00/schema#");g=z.createSchema(s.inherits(i,z.createSchema(D,true,"http://json-schema.org/draft-00/hyper-schema#"),true),true,"http://json-schema.org/draft-00/hyper-schema#");z.setOption("defaultSchemaURI","http://json-schema.org/draft-00/hyper-schema#");C=z.createSchema(p,g,"http://json-schema.org/draft-00/links#");i=z.createSchema(i.getValue(),g,"http://json-schema.org/draft-00/schema#");g=z.createSchema(g.getValue(),g,"http://json-schema.org/draft-00/hyper-schema#");C=z.createSchema(C.getValue(),g,"http://json-schema.org/draft-00/links#");r=s.inherits(o,{"$schema":"http://json-schema.org/draft-01/hyper-schema#",id:"http://json-schema.org/draft-01/schema#"});E=s.inherits(D,{"$schema":"http://json-schema.org/draft-01/hyper-schema#",id:"http://json-schema.org/draft-01/hyper-schema#"});t=s.inherits(p,{"$schema":"http://json-schema.org/draft-01/hyper-schema#",id:"http://json-schema.org/draft-01/links#"});z.setOption("defaultSchemaURI","http://json-schema.org/draft-01/schema#");h=z.createSchema(r,true,"http://json-schema.org/draft-01/schema#");f=z.createSchema(s.inherits(h,z.createSchema(E,true,"http://json-schema.org/draft-01/hyper-schema#"),true),true,"http://json-schema.org/draft-01/hyper-schema#");z.setOption("defaultSchemaURI","http://json-schema.org/draft-01/hyper-schema#");B=z.createSchema(t,f,"http://json-schema.org/draft-01/links#");h=z.createSchema(h.getValue(),f,"http://json-schema.org/draft-01/schema#");f=z.createSchema(f.getValue(),f,"http://json-schema.org/draft-01/hyper-schema#");B=z.createSchema(B.getValue(),f,"http://json-schema.org/draft-01/links#");u=s.inherits(r,{"$schema":"http://json-schema.org/draft-02/hyper-schema#",id:"http://json-schema.org/draft-02/schema#",properties:{uniqueItems:{type:"boolean",optional:true,"default":false,parser:function(K,L){return !!K.getValue()},validator:function(T,M,U,N,S,V,K){var R,Q,O,P,L;if(T.getType()==="array"&&M.getAttribute("uniqueItems")){R=T.getProperties();for(Q=0,O=R.length-1;Q<O;++Q){for(P=Q+1,L=R.length;P<L;++P){if(R[Q].equals(R[P])){N.addError(T,M,"uniqueItems","Array can only contain unique items",{x:Q,y:P})}}}}}},maxDecimal:{deprecated:true},divisibleBy:{type:"number",minimum:0,minimumCanEqual:false,optional:true,parser:function(K,L){if(K.getType()==="number"){return K.getValue()}},validator:function(K,P,M,L,O,R,N){var Q;if(K.getType()==="number"){Q=P.getAttribute("divisibleBy");if(Q===0){L.addError(K,P,"divisibleBy","Nothing is divisible by 0",Q)}else{if(Q!==1&&((K.getValue()/Q)%1)!==0){L.addError(K,P,"divisibleBy","Number is not divisible by "+Q,Q)}}}}}},fragmentResolution:"slash-delimited"});G=s.inherits(E,{id:"http://json-schema.org/draft-02/hyper-schema#",properties:{fragmentResolution:{"default":"slash-delimited"}}});v=s.inherits(t,{"$schema":"http://json-schema.org/draft-02/hyper-schema#",id:"http://json-schema.org/draft-02/links#",properties:{targetSchema:{"$ref":"hyper-schema#",parser:f.getAttribute("parser")}}});z.setOption("defaultFragmentDelimiter","/");z.setOption("defaultSchemaURI","http://json-schema.org/draft-02/schema#");e=z.createSchema(u,true,"http://json-schema.org/draft-02/schema#");I=z.createSchema(s.inherits(e,z.createSchema(G,true,"http://json-schema.org/draft-02/hyper-schema#"),true),true,"http://json-schema.org/draft-02/hyper-schema#");z.setOption("defaultSchemaURI","http://json-schema.org/draft-02/hyper-schema#");y=z.createSchema(v,I,"http://json-schema.org/draft-02/links#");e=z.createSchema(e.getValue(),I,"http://json-schema.org/draft-02/schema#");I=z.createSchema(I.getValue(),I,"http://json-schema.org/draft-02/hyper-schema#");y=z.createSchema(y.getValue(),I,"http://json-schema.org/draft-02/links#");function m(T,K,L,U){var M={},R,P,Q,O,S;if(T.getType()==="object"){R=K.getAttribute("patternProperties");O=T.getProperties();for(P in R){if(R[P]!==q[P]){Q=null;try{Q=new RegExp(P)}catch(N){if(L){L.addError(K,U,"patternProperties","Invalid pattern",P)}}if(Q){for(S in O){if(O[S]!==q[S]&&Q.test(S)){M[S]=M[S]?s.pushUnique(M[S],R[P]):[R[P]]}}}}}}return M}w=s.inherits(u,{"$schema":"http://json-schema.org/draft-03/schema#",id:"http://json-schema.org/draft-03/schema#",properties:{patternProperties:{type:"object",additionalProperties:{"$ref":"#"},"default":{},parser:e.getValueOfProperty("properties")["properties"]["parser"],validator:function(R,L,S,M,P,T,K){var N,Q,O;if(R.getType()==="object"){N=m(R,L,M,S);for(Q in N){if(N[Q]!==q[Q]){O=N[Q].length;while(O--){N[Q][O].validate(R.getProperty(Q),M,R,L,Q)}}}}}},additionalProperties:{validator:function(T,M,U,N,R,V,K){var P,L,Q,O,S;if(T.getType()==="object"){P=M.getAttribute("additionalProperties");L=M.getAttribute("properties")||{};Q=T.getProperties();O=m(T,M);for(S in Q){if(Q[S]!==q[S]&&Q[S]&&L[S]===q[S]&&O[S]===q[S]){if(s.isJSONSchema(P)){P.validate(Q[S],N,T,M,S)}else{if(P===false){N.addError(T,M,"additionalProperties","Additional properties are not allowed",P)}}}}}}},items:{validator:function(U,M,V,N,T,W,L){var Q,P,S,O,R,K;if(U.getType()==="array"){Q=U.getProperties();P=M.getAttribute("items");K=M.getAttribute("additionalItems");if(s.typeOf(P)==="array"){for(S=0,O=Q.length;S<O;++S){R=P[S]||K;if(R!==false){R.validate(Q[S],N,U,M,S)}else{N.addError(U,M,"additionalItems","Additional items are not allowed",R)}}}else{R=P||K;for(S=0,O=Q.length;S<O;++S){R.validate(Q[S],N,U,M,S)}}}}},additionalItems:{type:[{"$ref":"#"},"boolean"],"default":{},parser:e.getValueOfProperty("properties")["additionalProperties"]["parser"],validator:function(S,M,T,N,R,U,L){var K,P,Q,O;if(S.getType()==="array"&&M.getProperty("items").getType()==="undefined"){K=M.getAttribute("additionalItems");P=S.getProperties();if(K!==false){for(Q=0,O=P.length;Q<O;++Q){K.validate(P[Q],N,S,M,Q)}}else{if(P.length){N.addError(S,M,"additionalItems","Additional items are not allowed",K)}}}}},optional:{validationRequired:false,deprecated:true},required:{type:"boolean","default":false,parser:function(K,L){return !!K.getValue()},validator:function(K,P,M,L,O,Q,N){if(K.getType()==="undefined"&&P.getAttribute("required")){L.addError(K,P,"required","Property is required",true)}}},requires:{deprecated:true},dependencies:{type:"object",additionalProperties:{type:["string","array",{"$ref":"#"}],items:{type:"string"}},"default":{},parser:function(L,M,K){function N(P){var O=P.getType();if(O==="string"||O==="array"){return P.getValue()}else{if(O==="object"){return P.getEnvironment().createSchema(P,M.getEnvironment().findSchema(M.resolveURI("#")))}}}if(L.getType()==="object"){if(K){return N(L.getProperty(K))}else{return s.mapObject(L.getProperties(),N)}}return{}},validator:function(U,M,V,N,S,W,K){var P,T,L,Q,R,O;if(U.getType()==="object"){P=M.getAttribute("dependencies");for(T in P){if(P[T]!==q[T]&&U.getProperty(T).getType()!=="undefined"){L=P[T];Q=s.typeOf(L);if(Q==="string"){if(U.getProperty(L).getType()==="undefined"){N.addError(U,M,"dependencies",'Property "'+T+'" requires sibling property "'+L+'"',P)}}else{if(Q==="array"){for(R=0,O=L.length;R<O;++R){if(U.getProperty(L[R]).getType()==="undefined"){N.addError(U,M,"dependencies",'Property "'+T+'" requires sibling property "'+L[R]+'"',P)}}}else{if(s.isJSONSchema(L)){L.validate(U,N)}}}}}}}},minimumCanEqual:{deprecated:true},maximumCanEqual:{deprecated:true},exclusiveMinimum:{type:"boolean","default":false,parser:function(K,L){return !!K.getValue()}},exclusiveMaximum:{type:"boolean","default":false,parser:function(K,L){return !!K.getValue()}},minimum:{validator:function(Q,L,R,M,P,S,K){var N,O;if(Q.getType()==="number"){N=L.getAttribute("minimum");O=L.getAttribute("exclusiveMinimum")||(!Q.getEnvironment().getOption("strict")&&!L.getAttribute("minimumCanEqual"));if(typeof N==="number"&&(Q.getValue()<N||(O===true&&Q.getValue()===N))){M.addError(Q,L,"minimum","Number is less then the required minimum value",N)}}}},maximum:{validator:function(Q,M,R,N,P,S,K){var L,O;if(Q.getType()==="number"){L=M.getAttribute("maximum");O=M.getAttribute("exclusiveMaximum")||(!Q.getEnvironment().getOption("strict")&&!M.getAttribute("maximumCanEqual"));if(typeof L==="number"&&(Q.getValue()>L||(O===true&&Q.getValue()===L))){N.addError(Q,M,"maximum","Number is greater then the required maximum value",L)}}}},contentEncoding:{deprecated:true},divisibleBy:{exclusiveMinimum:true},disallow:{items:{type:["string",{"$ref":"#"}]},parser:u.properties["type"]["parser"]},id:{type:"string",format:"uri"},"$ref":{type:"string",format:"uri"},"$schema":{type:"string",format:"uri"}},dependencies:{exclusiveMinimum:"minimum",exclusiveMaximum:"maximum"},initializer:function(L){var P,Q,K,N=L.getValueOfProperty("$schema"),M=L.getValueOfProperty("$ref"),O=L.getValueOfProperty("id");if(N){P=L.resolveURI(N);if(P&&L._schema._uri!==P){if(L._env._schemas[P]){L._schema=L._env._schemas[P];initializer=L._schema.getValueOfProperty("initializer");if(typeof initializer==="function"){return initializer(L)}else{return L}}else{if(L._env._options.validateReferences){throw new n(L,L._schema,"$schema","Unknown schema reference",P)}}}}if(M){P=L.resolveURI(M);if(P&&L._uri!==P){if(L._env._schemas[P]){L=L._env._schemas[P];return L}else{if(L._env._options.validateReferences){throw new n(L,L._schema,"$ref","Unknown schema reference",P)}}}}Q=L.getAttribute("extends");if(s.isJSONSchema(Q)){K=s.inherits(Q,L,true);L=L._env.createSchema(K,L._schema,L._uri)}if(O){P=L.resolveURI(O);if(s.typeOf(P)==="string"){L._uri=s.formatURI(P)}}return L}});l=s.inherits(G,{"$schema":"http://json-schema.org/draft-03/hyper-schema#",id:"http://json-schema.org/draft-03/hyper-schema#",properties:{links:{selfReferenceVariable:"@"},root:{deprecated:true},contentEncoding:{deprecated:false},alternate:{deprecated:true}}});A=s.inherits(v,{"$schema":"http://json-schema.org/draft-03/hyper-schema#",id:"http://json-schema.org/draft-03/links#",properties:{href:{required:true,format:"link-description-object-template"},rel:{required:true},properties:{deprecated:true},schema:{"$ref":"http://json-schema.org/draft-03/hyper-schema#"}}});z.setOption("validateReferences",true);z.setOption("defaultSchemaURI","http://json-schema.org/draft-03/schema#");z.createSchema({},true,"http://json-schema.org/draft-03/schema#");z.createSchema({},true,"http://json-schema.org/draft-03/hyper-schema#");z.createSchema({},true,"http://json-schema.org/draft-03/links#");H=z.createSchema(w,true,"http://json-schema.org/draft-03/schema#");F=z.createSchema(s.inherits(H,z.createSchema(l,true,"http://json-schema.org/draft-03/hyper-schema#"),true),true,"http://json-schema.org/draft-03/hyper-schema#");x=z.createSchema(A,true,"http://json-schema.org/draft-03/links#");z.setOption("defaultSchemaURI","http://json-schema.org/draft-03/hyper-schema#");F=z.createSchema(F.getValue(),F,"http://json-schema.org/draft-03/hyper-schema#");z.setOption("latestJSONSchemaSchemaURI","http://json-schema.org/draft-03/schema#");z.setOption("latestJSONSchemaHyperSchemaURI","http://json-schema.org/draft-03/hyper-schema#");z.setOption("latestJSONSchemaLinksURI","http://json-schema.org/draft-03/links#");z._schemas["http://json-schema.org/schema#"]=H;z._schemas["http://json-schema.org/hyper-schema#"]=F;z._schemas["http://json-schema.org/links#"]=x;s.registerEnvironment("json-schema-draft-03",z);if(!s.getDefaultEnvironmentID()||s.getDefaultEnvironmentID()==="json-schema-draft-01"||s.getDefaultEnvironmentID()==="json-schema-draft-02"){s.setDefaultEnvironmentID("json-schema-draft-03")}}());c.JSONFormValidator=a.JSV})(this,false);(function(g){var o,B="",v=Math.PI,i=v/2,m="ontouchstart" in window,c=(m)?{start:"touchstart",move:"touchmove",end:"touchend"}:{start:"mousedown",move:"mousemove",end:"mouseup"},w={backward:["bl","tl"],forward:["br","tr"],all:["tl","bl","tr","br"]},l=["single","double"],f={page:1,gradients:true,duration:600,acceleration:true,display:"double",when:null},a={folding:null,corners:"forward",cornerSize:100,gradients:true,duration:600,acceleration:true},A=6,u={0:{top:0,left:0,right:"auto",bottom:"auto"},1:{top:0,right:0,left:"auto",bottom:"auto"}},s=function(F,E,G,D){return{css:{position:"absolute",top:F,left:E,overflow:D||"hidden","z-index":G||"auto"}}},q=function(J,I,H,G,F){var D=1-F,E=D*D*D,K=F*F*F;return h(Math.round(E*J.x+3*F*D*D*I.x+3*F*F*D*H.x+K*G.x),Math.round(E*J.y+3*F*D*D*I.y+3*F*F*D*H.y+K*G.y))},C=function(D){return D/180*v},r=function(D){return D/v*180},h=function(D,E){return{x:D,y:E}},p=function(D,F,E){return(o&&E)?" translate3d("+D+"px,"+F+"px, 0px) ":" translate("+D+"px, "+F+"px) "},y=function(D){return" rotate("+D+"deg) "},e=function(E,D){return Object.prototype.hasOwnProperty.call(D,E)},t=function(){var E=["Moz","Webkit","Khtml","O","ms"],D=E.length,F="";while(D--){if((E[D]+"Transform") in document.body.style){F="-"+E[D].toLowerCase()+"-"}}return F},b=function(P,F,E,K,Q){var T,N=[];if(B=="-webkit-"){for(T=0;T<Q;T++){N.push("color-stop("+K[T][0]+", "+K[T][1]+")")}P.css({"background-image":"-webkit-gradient(linear, "+F.x+"% "+F.y+"%,  "+E.x+"% "+E.y+"%, "+N.join(",")+" )"})}else{F={x:F.x/100*P.width(),y:F.y/100*P.height()};E={x:E.x/100*P.width(),y:E.y/100*P.height()};var O=E.x-F.x,M=E.y-F.y,U=Math.atan2(M,O),G=U-Math.PI/2,S=Math.abs(P.width()*Math.sin(G))+Math.abs(P.height()*Math.cos(G)),D=Math.sqrt(M*M+O*O),I=h((E.x<F.x)?P.width():0,(E.y<F.y)?P.height():0),J=Math.tan(U),H=-1/J,L=(H*I.x-I.y-J*F.x+F.y)/(H-J),V={x:L,y:H*L-H*I.x+I.y},R=(Math.sqrt(Math.pow(V.x-F.x,2)+Math.pow(V.y-F.y,2)));for(T=0;T<Q;T++){N.push(" "+K[T][1]+" "+((R+D*K[T][0])*100/S)+"%")}P.css({"background-image":B+"linear-gradient("+(-U)+"rad,"+N.join(",")+")"})}},z={init:function(F){if(o===undefined){o="WebKitCSSMatrix" in window||"MozPerspective" in document.body.style;B=t()}var D,G=this.data(),E=this.children();F=g.extend({width:this.width(),height:this.height()},f,F);G.opts=F;G.pageObjs={};G.pages={};G.pageWrap={};G.pagePlace={};G.pageMv=[];G.totalPages=F.pages||0;if(F.when){for(D in F.when){if(e(D,F.when)){this.bind(D,F.when[D])}}}this.css({position:"relative",width:F.width,height:F.height});this.turn("display",F.display);if(o&&!m&&F.acceleration){this.transform(p(0,0,true))}for(D=0;D<E.length;D++){this.turn("addPage",E[D],D+1)}this.turn("page",F.page);w=g.extend({},w,F.corners);g(this).bind(c.start,function(I){for(var H in G.pages){if(e(H,G.pages)&&x._eventStart.call(G.pages[H],I)===false){return false}}});g(document).bind(c.move,function(I){for(var H in G.pages){if(e(H,G.pages)){x._eventMove.call(G.pages[H],I)}}}).bind(c.end,function(I){for(var H in G.pages){if(e(H,G.pages)){x._eventEnd.call(G.pages[H],I)}}});G.done=true;return this},addPage:function(D,H){var E=false,G=this.data(),F=G.totalPages+1;if(H){if(H==F){H=F;E=true}else{if(H>F){throw new Error('It is impossible to add the page "'+H+'", the maximum value is: "'+F+'"')}}}else{H=F;E=true}if(H>=1&&H<=F){if(G.done){this.turn("stop")}if(H in G.pageObjs){z._movePages.call(this,H,1)}if(E){G.totalPages=F}G.pageObjs[H]=g(D).addClass("turn-page p"+H);z._addPage.call(this,H);if(G.done){this.turn("update")}z._removeFromDOM.call(this)}return this},_addPage:function(H){var G=this.data(),E=G.pageObjs[H];if(E){if(z._necessPage.call(this,H)){if(!G.pageWrap[H]){var D=(G.display=="double")?this.width()/2:this.width(),F=this.height();E.css({width:D,height:F});G.pagePlace[H]=H;G.pageWrap[H]=g("<div/>",{"class":"turn-page-wrapper",page:H,css:{position:"absolute",overflow:"hidden",width:D,height:F}}).css(u[(G.display=="double")?H%2:0]);this.append(G.pageWrap[H]);G.pageWrap[H].prepend(G.pageObjs[H])}if(!H||z._setPageLoc.call(this,H)==1){z._makeFlip.call(this,H)}}else{G.pagePlace[H]=0;if(G.pageObjs[H]){G.pageObjs[H].remove()}}}},hasPage:function(D){return D in this.data().pageObjs},_makeFlip:function(E){var D=this.data();if(!D.pages[E]&&D.pagePlace[E]==E){var G=D.display=="single",F=E%2;D.pages[E]=D.pageObjs[E].css({width:(G)?this.width():this.width()/2,height:this.height()}).flip({page:E,next:(G&&E===D.totalPages)?E-1:((F||G)?E+1:E-1),turn:this,duration:D.opts.duration,acceleration:D.opts.acceleration,corners:(G)?"all":((F)?"forward":"backward"),backGradient:D.opts.gradients,frontGradient:D.opts.gradients}).flip("disable",D.disabled).bind("pressed",z._pressed).bind("released",z._released).bind("start",z._start).bind("end",z._end).bind("flip",z._flip)}return D.pages[E]},_makeRange:function(){var F,E=this.data(),D=this.turn("range");for(F=D[0];F<=D[1];F++){z._addPage.call(this,F)}},range:function(H){var D,I,F,G=this.data();H=H||G.tpage||G.page;var E=z._view.call(this,H);if(H<1||H>G.totalPages){throw new Error('"'+H+'" is not a page for range')}E[1]=E[1]||E[0];if(E[0]>=1&&E[1]<=G.totalPages){D=Math.floor((A-2)/2);if(G.totalPages-E[1]>E[0]){I=Math.min(E[0]-1,D);F=2*D-I}else{F=Math.min(G.totalPages-E[1],D);I=2*D-F}}else{I=A-1;F=A-1}return[Math.max(1,E[0]-I),Math.min(G.totalPages,E[1]+F)]},_necessPage:function(E){if(E===0){return true}var D=this.turn("range");return E>=D[0]&&E<=D[1]},_removeFromDOM:function(){var E,D=this.data();for(E in D.pageWrap){if(e(E,D.pageWrap)&&!z._necessPage.call(this,E)){z._removePageFromDOM.call(this,E)}}},_removePageFromDOM:function(F){var E=this.data();if(E.pages[F]){var D=E.pages[F].data();if(D.f&&D.f.fwrapper){D.f.fwrapper.remove()}E.pages[F].remove();delete E.pages[F]}if(E.pageObjs[F]){E.pageObjs[F].remove()}if(E.pageWrap[F]){E.pageWrap[F].remove();delete E.pageWrap[F]}delete E.pagePlace[F]},removePage:function(E){var D=this.data();if(D.pageObjs[E]){this.turn("stop");z._removePageFromDOM.call(this,E);delete D.pageObjs[E];z._movePages.call(this,E,-1);D.totalPages=D.totalPages-1;z._makeRange.call(this);if(D.page>D.totalPages){this.turn("page",D.totalPages)}}return this},_movePages:function(I,H){var F,E=this.data(),G=E.display=="single",D=function(L){var J=L+H,K=J%2;if(E.pageObjs[L]){E.pageObjs[J]=E.pageObjs[L].removeClass("page"+L).addClass("page"+J)}if(E.pagePlace[L]&&E.pageWrap[L]){E.pagePlace[J]=J;E.pageWrap[J]=E.pageWrap[L].css(u[(G)?0:K]).attr("page",J);if(E.pages[L]){E.pages[J]=E.pages[L].flip("options",{page:J,next:(G||K)?J+1:J-1,corners:(G)?"all":((K)?"forward":"backward")})}if(H){delete E.pages[L];delete E.pagePlace[L];delete E.pageObjs[L];delete E.pageWrap[L];delete E.pageObjs[L]}}};if(H>0){for(F=E.totalPages;F>=I;F--){D(F)}}else{for(F=I;F<=E.totalPages;F++){D(F)}}},display:function(F){var E=this.data(),G=E.display;if(F){if(g.inArray(F,l)==-1){throw new Error('"'+F+'" is not a value for display')}if(F=="single"){if(!E.pageObjs[0]){this.turn("stop").css({overflow:"hidden"});E.pageObjs[0]=g("<div />",{"class":"turn-page p-temporal"}).css({width:this.width(),height:this.height()}).appendTo(this)}}else{if(E.pageObjs[0]){this.turn("stop").css({overflow:""});E.pageObjs[0].remove();delete E.pageObjs[0]}}E.display=F;if(G){var D=this.turn("size");z._movePages.call(this,1,0);this.turn("size",D.width,D.height).turn("update")}return this}else{return G}},animating:function(){return this.data().pageMv.length>0},disable:function(E){var G,F=this.data(),D=this.turn("view");F.disabled=E===undefined||E===true;for(G in F.pages){if(e(G,F.pages)){F.pages[G].flip("disable",E?g.inArray(G,D):false)}}return this},size:function(F,D){if(F&&D){var H=this.data(),E=(H.display=="double")?F/2:F,G;this.css({width:F,height:D});if(H.pageObjs[0]){H.pageObjs[0].css({width:E,height:D})}for(G in H.pageWrap){if(!e(G,H.pageWrap)){continue}H.pageObjs[G].css({width:E,height:D});H.pageWrap[G].css({width:E,height:D});if(H.pages[G]){H.pages[G].css({width:E,height:D})}}this.turn("resize");return this}else{return{width:this.width(),height:this.height()}}},resize:function(){var E,D=this.data();if(D.pages[0]){D.pageWrap[0].css({left:-this.width()});D.pages[0].flip("resize",true)}for(E=1;E<=D.totalPages;E++){if(D.pages[E]){D.pages[E].flip("resize",true)}}},_removeMv:function(F){var D,E=this.data();for(D=0;D<E.pageMv.length;D++){if(E.pageMv[D]==F){E.pageMv.splice(D,1);return true}}return false},_addMv:function(E){var D=this.data();z._removeMv.call(this,E);D.pageMv.push(E)},_view:function(E){var D=this.data();E=E||D.page;if(D.display=="double"){return(E%2)?[E-1,E]:[E,E+1]}else{return[E]}},view:function(F){var E=this.data(),D=z._view.call(this,F);return(E.display=="double")?[(D[0]>0)?D[0]:0,(D[1]<=E.totalPages)?D[1]:0]:[(D[0]>0&&D[0]<=E.totalPages)?D[0]:0]},stop:function(F){var E,G,H=this.data(),D=H.pageMv;H.pageMv=[];if(H.tpage){H.page=H.tpage;delete H.tpage}for(E in D){if(!e(E,D)){continue}G=H.pages[D[E]].data().f.opts;x._moveFoldingPage.call(H.pages[D[E]],null);H.pages[D[E]].flip("hideFoldedPage");H.pagePlace[G.next]=G.next;if(G.force){G.next=(G.page%2===0)?G.page-1:G.page+1;delete G.force}}this.turn("update");return this},pages:function(D){var F=this.data();if(D){if(D<F.totalPages){for(var E=D+1;E<=F.totalPages;E++){this.turn("removePage",E)}if(this.turn("page")>D){this.turn("page",D)}}F.totalPages=D;return this}else{return F.totalPages}},_fitPage:function(F,D){var E=this.data(),G=this.turn("view",F);if(E.page!=F){this.trigger("turning",[F,G]);if(g.inArray(1,G)!=-1){this.trigger("first")}if(g.inArray(E.totalPages,G)!=-1){this.trigger("last")}}if(!E.pageObjs[F]){return}E.tpage=F;this.turn("stop",D);z._removeFromDOM.call(this);z._makeRange.call(this);this.trigger("turned",[F,G])},_turnPage:function(H){var I,E,G=this.data(),D=this.turn("view"),J=this.turn("view",H);if(G.page!=H){this.trigger("turning",[H,J]);if(g.inArray(1,J)!=-1){this.trigger("first")}if(g.inArray(G.totalPages,J)!=-1){this.trigger("last")}}if(!G.pageObjs[H]){return}G.tpage=H;this.turn("stop");z._makeRange.call(this);if(G.display=="single"){I=D[0];E=J[0]}else{if(D[1]&&H>D[1]){I=D[1];E=J[0]}else{if(D[0]&&H<D[0]){I=D[0];E=J[1]}}}if(G.pages[I]){var F=G.pages[I].data().f.opts;G.tpage=E;if(F.next!=E){F.next=E;G.pagePlace[E]=F.page;F.force=true}if(G.display=="single"){G.pages[I].flip("turnPage",(J[0]>D[0])?"br":"bl")}else{G.pages[I].flip("turnPage")}}},page:function(E){E=parseInt(E,10);var D=this.data();if(E>0&&E<=D.totalPages){if(!D.done||g.inArray(E,this.turn("view"))!=-1){z._fitPage.call(this,E)}else{z._turnPage.call(this,E)}return this}else{return D.page}},next:function(){var D=this.data();return this.turn("page",z._view.call(this,D.page).pop()+1)},previous:function(){var D=this.data();return this.turn("page",z._view.call(this,D.page).shift()-1)},_addMotionPage:function(){var F=g(this).data().f.opts,E=F.turn,D=E.data();F.pageMv=F.page;z._addMv.call(E,F.pageMv);D.pagePlace[F.next]=F.page;E.turn("update")},_start:function(I,F,E){var G=F.turn.data(),D=g.Event("start");I.stopPropagation();F.turn.trigger(D,[F,E]);if(D.isDefaultPrevented()){I.preventDefault();return}if(G.display=="single"){var H=E.charAt(1)=="l";if((F.page==1&&H)||(F.page==G.totalPages&&!H)){I.preventDefault()}else{if(H){F.next=(F.next<F.page)?F.next:F.page-1;F.force=true}else{F.next=(F.next>F.page)?F.next:F.page+1}}}z._addMotionPage.call(this)},_end:function(J,H){var G=g(this),I=G.data().f,F=I.opts,E=F.turn,D=E.data();J.stopPropagation();if(H||D.tpage){if(D.tpage==F.next||D.tpage==F.page){delete D.tpage;z._fitPage.call(E,D.tpage||F.next,true)}}else{z._removeMv.call(E,F.pageMv);E.turn("update")}},_pressed:function(){var H,F=g(this),G=F.data().f,E=G.opts.turn,D=E.data().pages;for(H in D){if(H!=G.opts.page){D[H].flip("disable",true)}}return G.time=new Date().getTime()},_released:function(G,D){var E=g(this),F=E.data().f;G.stopPropagation();if((new Date().getTime())-F.time<200||D.x<0||D.x>g(this).width()){G.preventDefault();F.opts.turn.data().tpage=F.opts.next;F.opts.turn.turn("update");g(E).flip("turnPage")}},_flip:function(){var D=g(this).data().f.opts;D.turn.trigger("turn",[D.next])},calculateZ:function(O){var G,J,M,E,N,I=this,F=this.data(),L=this.turn("view"),H=L[0]||L[1],D={pageZ:{},partZ:{},pageV:{}},K=function(Q){var P=I.turn("view",Q);if(P[0]){D.pageV[P[0]]=true}if(P[1]){D.pageV[P[1]]=true}};for(G=0;G<O.length;G++){J=O[G];M=F.pages[J].data().f.opts.next;E=F.pagePlace[J];K(J);K(M);N=(F.pagePlace[M]==M)?M:J;D.pageZ[N]=F.totalPages-Math.abs(H-N);D.partZ[E]=F.totalPages*2+Math.abs(H-N)}return D},update:function(){var H,G=this.data();if(G.pageMv.length&&G.pageMv[0]!==0){var F,I=this.turn("calculateZ",G.pageMv),E=this.turn("view",G.tpage);if(G.pagePlace[E[0]]==E[0]){F=E[0]}else{if(G.pagePlace[E[1]]==E[1]){F=E[1]}}for(H in G.pageWrap){if(!e(H,G.pageWrap)){continue}G.pageWrap[H].css({display:(I.pageV[H])?"":"none","z-index":I.pageZ[H]||0});if(G.pages[H]){G.pages[H].flip("z",I.partZ[H]||null);if(I.pageV[H]){G.pages[H].flip("resize")}if(G.tpage){G.pages[H].flip("disable",true)}}}}else{for(H in G.pageWrap){if(!e(H,G.pageWrap)){continue}var D=z._setPageLoc.call(this,H);if(G.pages[H]){G.pages[H].flip("disable",G.disabled||D!=1).flip("z",null)}}}},_setPageLoc:function(F){var E=this.data(),D=this.turn("view");if(F==D[0]||F==D[1]){E.pageWrap[F].css({"z-index":E.totalPages,display:""});return 1}else{if((E.display=="single"&&F==D[0]+1)||(E.display=="double"&&F==D[0]-2||F==D[1]+2)){E.pageWrap[F].css({"z-index":E.totalPages-1,display:""});return 2}else{E.pageWrap[F].css({"z-index":0,display:"none"});return 0}}}},x={init:function(D){if(D.gradients){D.frontGradient=true;D.backGradient=true}this.data({f:{}});this.flip("options",D);x._addPageWrapper.call(this);return this},setData:function(E){var D=this.data();D.f=g.extend(D.f,E);return this},options:function(D){var E=this.data().f;if(D){x.setData.call(this,{opts:g.extend({},E.opts||a,D)});return this}else{return E.opts}},z:function(E){var D=this.data().f;D.opts["z-index"]=E;D.fwrapper.css({"z-index":E||parseInt(D.parent.css("z-index"),10)||0});return this},_cAllowed:function(){return w[this.data().f.opts.corners]||this.data().f.opts.corners},_cornerActivated:function(I){if(I.originalEvent===undefined){return false}I=(m)?I.originalEvent.touches:[I];var G=this.data().f,K=G.parent.offset(),F=this.width(),E=this.height(),J={x:Math.max(0,I[0].pageX-K.left),y:Math.max(0,I[0].pageY-K.top)},H=G.opts.cornerSize,D=x._cAllowed.call(this);if(J.x<=0||J.y<=0||J.x>=F||J.y>=E){return false}if(J.y<H){J.corner="t"}else{if(J.y>=E-H){J.corner="b"}else{return false}}if(J.x<=H){J.corner+="l"}else{if(J.x>=F-H){J.corner+="r"}else{return false}}return(g.inArray(J.corner,D)==-1)?false:J},_c:function(E,D){D=D||0;return({tl:h(D,D),tr:h(this.width()-D,D),bl:h(D,this.height()-D),br:h(this.width()-D,this.height()-D)})[E]},_c2:function(D){return{tl:h(this.width()*2,0),tr:h(-this.width(),0),bl:h(this.width()*2,this.height()),br:h(-this.width(),this.height())}[D]},_foldingPage:function(E){var D=this.data().f.opts;if(D.folding){return D.folding}else{if(D.turn){var F=D.turn.data();if(F.display=="single"){return(F.pageObjs[D.next])?F.pageObjs[0]:null}else{return F.pageObjs[D.next]}}}},_backGradient:function(){var E=this.data().f,D=E.opts.turn,F=E.opts.backGradient&&(!D||D.data().display=="single"||(E.opts.page!=2&&E.opts.page!=D.data().totalPages-1));if(F&&!E.bshadow){E.bshadow=g("<div/>",s(0,0,1)).css({position:"",width:this.width(),height:this.height()}).appendTo(E.parent)}return F},resize:function(F){var H=this.data().f,G=this.width(),D=this.height(),E=Math.round(Math.sqrt(Math.pow(G,2)+Math.pow(D,2)));if(F){H.wrapper.css({width:E,height:E});H.fwrapper.css({width:E,height:E}).children(":first-child").css({width:G,height:D});H.fpage.css({width:D,height:G});if(H.opts.frontGradient){H.ashadow.css({width:D,height:G})}if(x._backGradient.call(this)){H.bshadow.css({width:G,height:D})}}if(H.parent.is(":visible")){H.fwrapper.css({top:H.parent.offset().top,left:H.parent.offset().left});if(H.opts.turn){H.fparent.css({top:-H.opts.turn.offset().top,left:-H.opts.turn.offset().left})}}this.flip("z",H.opts["z-index"])},_addPageWrapper:function(){var H,G=this.data().f,J=this.parent();if(!G.wrapper){var F=this.css("left"),I=this.css("top"),E=this.width(),K=this.height(),L=Math.round(Math.sqrt(Math.pow(E,2)+Math.pow(K,2)));G.parent=J;G.fparent=(G.opts.turn)?G.opts.turn.data().fparent:g("#turn-fwrappers");if(!G.fparent){var D=g("<div/>",{css:{"pointer-events":"none"}}).hide();D.data().flips=0;if(G.opts.turn){D.css(s(-G.opts.turn.offset().top,-G.opts.turn.offset().left,"auto","visible").css).appendTo(G.opts.turn);G.opts.turn.data().fparent=D}else{D.css(s(0,0,"auto","visible").css).attr("id","turn-fwrappers").appendTo(g("body"))}G.fparent=D}this.css({position:"absolute",top:0,left:0,bottom:"auto",right:"auto"});G.wrapper=g("<div/>",s(0,0,this.css("z-index"))).appendTo(J).prepend(this);G.fwrapper=g("<div/>",s(J.offset().top,J.offset().left)).hide().appendTo(G.fparent);G.fpage=g("<div/>",{css:{cursor:"default"}}).appendTo(g("<div/>",s(0,0,0,"visible")).appendTo(G.fwrapper));if(G.opts.frontGradient){G.ashadow=g("<div/>",s(0,0,1)).appendTo(G.fpage)}x.setData.call(this,G);x.resize.call(this,true)}},_fold:function(T){var K=this,ab=0,I=0,Y,N,H,F,E,Q,J,O=h(0,0),X=h(0,0),D=h(0,0),S=this.width(),P=this.height(),aa=x._foldingPage.call(this),W=Math.tan(I),ac=this.data().f,Z=ac.opts.acceleration,V=ac.wrapper.height(),R=x._c.call(this,T.corner),M=T.corner.substr(0,1)=="t",G=T.corner.substr(1,1)=="l",U=function(){var an=h((R.x)?R.x-T.x:T.x,(R.y)?R.y-T.y:T.y),ak=(Math.atan2(an.y,an.x)),ao;I=i-ak;ab=r(I);ao=h((G)?S-an.x/2:T.x+an.x/2,an.y/2);var af=I-Math.atan2(ao.y,ao.x),ae=Math.max(0,Math.sin(af)*Math.sqrt(Math.pow(ao.x,2)+Math.pow(ao.y,2)));D=h(ae*Math.sin(I),ae*Math.cos(I));if(I>i){D.x=D.x+Math.abs(D.y*Math.tan(ak));D.y=0;if(Math.round(D.x*Math.tan(v-I))<P){T.y=Math.sqrt(Math.pow(P,2)+2*ao.x*an.x);if(M){T.y=P-T.y}return U()}}if(I>i){var al=v-I,am=V-P/Math.sin(al);O=h(Math.round(am*Math.cos(al)),Math.round(am*Math.sin(al)));if(G){O.x=-O.x}if(M){O.y=-O.y}}N=Math.round(D.y/Math.tan(I)+D.x);var aj=S-N,ah=aj*Math.cos(I*2),ag=aj*Math.sin(I*2);X=h(Math.round((G?aj-ah:N+ah)),Math.round((M)?ag:P-ag));Q=aj*Math.sin(I);var ad=x._c2.call(K,T.corner),ai=Math.sqrt(Math.pow(ad.x-T.x,2)+Math.pow(ad.y-T.y,2));J=(ai<S)?ai/S:1;if(ac.opts.frontGradient){E=Q>100?(Q-100)/Q:0;H=h(Q*Math.sin(i-I)/P*100,Q*Math.cos(i-I)/S*100);if(M){H.y=100-H.y}if(G){H.x=100-H.x}}if(x._backGradient.call(K)){F=h(Q*Math.sin(I)/S*100,Q*Math.cos(I)/P*100);if(!G){F.x=100-F.x}if(!M){F.y=100-F.y}}D.x=Math.round(D.x);D.y=Math.round(D.y);return true},L=function(ah,ag,aj,ai){var af=["0","auto"],ak=(S-V)*aj[0]/100,ae=(P-V)*aj[1]/100,al={left:af[ag[0]],top:af[ag[1]],right:af[ag[2]],bottom:af[ag[3]]},ad=(ai!=90&&ai!=-90)?(G?-1:1):0;aj=aj[0]+"% "+aj[1]+"%";K.css(al).transform(y(ai)+p(ah.x+ad,ah.y,Z),aj);ac.fpage.parent().css(al);ac.wrapper.transform(p(-ah.x+ak-ad,-ah.y+ae,Z)+y(-ai),aj);ac.fwrapper.transform(p(-ah.x+O.x+ak,-ah.y+O.y+ae,Z)+y(-ai),aj);ac.fpage.parent().transform(y(ai)+p(ah.x+X.x-O.x,ah.y+X.y-O.y,Z),aj);if(ac.opts.frontGradient){b(ac.ashadow,h(G?100:0,M?100:0),h(H.x,H.y),[[E,"rgba(0,0,0,0)"],[((1-E)*0.8)+E,"rgba(0,0,0,"+(0.2*J)+")"],[1,"rgba(255,255,255,"+(0.2*J)+")"]],3,I)}if(x._backGradient.call(K)){b(ac.bshadow,h(G?0:100,M?0:100),h(F.x,F.y),[[0.8,"rgba(0,0,0,0)"],[1,"rgba(0,0,0,"+(0.3*J)+")"],[1,"rgba(0,0,0,0)"]],3)}};switch(T.corner){case"tl":T.x=Math.max(T.x,1);U();L(D,[1,0,0,1],[100,0],ab);ac.fpage.transform(p(-P,-S,Z)+y(90-ab*2),"100% 100%");aa.transform(y(90)+p(0,-P,Z),"0% 0%");break;case"tr":T.x=Math.min(T.x,S-1);U();L(h(-D.x,D.y),[0,0,0,1],[0,0],-ab);ac.fpage.transform(p(0,-S,Z)+y(-90+ab*2),"0% 100%");aa.transform(y(270)+p(-S,0,Z),"0% 0%");break;case"bl":T.x=Math.max(T.x,1);U();L(h(D.x,-D.y),[1,1,0,0],[100,100],-ab);ac.fpage.transform(p(-P,0,Z)+y(-90+ab*2),"100% 0%");aa.transform(y(270)+p(-S,0,Z),"0% 0%");break;case"br":T.x=Math.min(T.x,S-1);U();L(h(-D.x,-D.y),[0,1,1,0],[0,100],ab);ac.fpage.transform(y(90-ab*2),"0% 0%");aa.transform(y(90)+p(0,-P,Z),"0% 0%");break}ac.point=T},_moveFoldingPage:function(D){var F=this.data().f,E=x._foldingPage.call(this);if(E){if(D){if(!F.fpage.children()[F.ashadow?"1":"0"]){x.setData.call(this,{backParent:E.parent()});F.fpage.prepend(E)}}else{if(F.backParent){F.backParent.prepend(E)}}}},_showFoldedPage:function(K,F){var G=x._foldingPage.call(this),E=this.data(),J=E.f;if(!J.point||J.point.corner!=K.corner){var I=g.Event("start");this.trigger(I,[J.opts,K.corner]);if(I.isDefaultPrevented()){return false}}if(G){if(F){var H=this,D=(J.point&&J.point.corner==K.corner)?J.point:x._c.call(this,K.corner,1);this.animatef({from:[D.x,D.y],to:[K.x,K.y],duration:500,frame:function(L){K.x=Math.round(L[0]);K.y=Math.round(L[1]);x._fold.call(H,K)}})}else{x._fold.call(this,K);if(E.effect&&!E.effect.turning){this.animatef(false)}}if(!J.fwrapper.is(":visible")){J.fparent.show().data().flips++;x._moveFoldingPage.call(this,true);J.fwrapper.show();if(J.bshadow){J.bshadow.show()}}return true}return false},hide:function(){var E=this.data().f,D=x._foldingPage.call(this);if((--E.fparent.data().flips)===0){E.fparent.hide()}this.css({left:0,top:0,right:"auto",bottom:"auto"}).transform("","0% 100%");E.wrapper.transform("","0% 100%");E.fwrapper.hide();if(E.bshadow){E.bshadow.hide()}D.transform("","0% 0%");return this},hideFoldedPage:function(D){var E=this.data().f;if(!E.point){return}var G=this,M=E.point,F=function(){E.point=null;G.flip("hide");G.trigger("end",[false])};if(D){var I=x._c.call(this,M.corner),H=(M.corner.substr(0,1)=="t"),L=(H)?Math.min(0,M.y-I.y)/2:Math.max(0,M.y-I.y)/2,K=h(M.x,M.y+L),J=h(I.x,I.y-L);this.animatef({from:0,to:1,frame:function(N){var O=q(M,K,J,I,N);M.x=O.x;M.y=O.y;x._fold.call(G,M)},complete:F,duration:800,hiding:true})}else{this.animatef(false);F()}},turnPage:function(F){var E=this,G=this.data().f;F={corner:(G.corner)?G.corner.corner:F||x._cAllowed.call(this)[0]};var H=G.point||x._c.call(this,F.corner,(G.opts.turn)?G.opts.turn.data().opts.elevation:0),D=x._c2.call(this,F.corner);this.trigger("flip").animatef({from:0,to:1,frame:function(I){var J=q(H,H,D,D,I);F.x=J.x;F.y=J.y;x._showFoldedPage.call(E,F)},complete:function(){E.trigger("end",[true])},duration:G.opts.duration,turning:true});G.corner=null},moving:function(){return"effect" in this.data()},isTurning:function(){return this.flip("moving")&&this.data().effect.turning},_eventStart:function(E){var D=this.data().f;if(!D.disabled&&!this.flip("isTurning")){D.corner=x._cornerActivated.call(this,E);if(D.corner&&x._foldingPage.call(this,D.corner)){x._moveFoldingPage.call(this,true);this.trigger("pressed",[D.point]);return false}else{D.corner=null}}},_eventMove:function(G){var F=this.data().f;if(!F.disabled){G=(m)?G.originalEvent.touches:[G];if(F.corner){var H=F.parent.offset();F.corner.x=G[0].pageX-H.left;F.corner.y=G[0].pageY-H.top;x._showFoldedPage.call(this,F.corner)}else{if(!this.data().effect&&this.is(":visible")){var E=x._cornerActivated.call(this,G[0]);if(E){var D=x._c.call(this,E.corner,F.opts.cornerSize/2);E.x=D.x;E.y=D.y;x._showFoldedPage.call(this,E,true)}else{x.hideFoldedPage.call(this,true)}}}}},_eventEnd:function(){var E=this.data().f;if(!E.disabled&&E.point){var D=g.Event("released");this.trigger(D,[E.point]);if(!D.isDefaultPrevented()){x.hideFoldedPage.call(this,true)}}E.corner=null},disable:function(D){x.setData.call(this,{disabled:D});return this}},n=function(F,D,E){if(!E[0]||typeof(E[0])=="object"){return D.init.apply(F,E)}else{if(D[E[0]]&&E[0].toString().substr(0,1)!="_"){return D[E[0]].apply(F,Array.prototype.slice.call(E,1))}else{throw E[0]+" is an invalid value"}}};g.extend(g.fn,{flip:function(E,D){return n(this,x,arguments)},turn:function(D){return n(this,z,arguments)},transform:function(E,D){var F={};if(D){F[B+"transform-origin"]=D}F[B+"transform"]=E;return this.css(F)},animatef:function(L){var G=this.data();if(G.effect){clearInterval(G.effect.handle)}if(L){if(!L.to.length){L.to=[L.to]}if(!L.from.length){L.from=[L.from]}if(!L.easing){L.easing=function(N,O,M,Q,P){return Q*Math.sqrt(1-(O=O/P-1)*O)+M}}var F,K=[],J=L.to.length,I=this,D=L.fps||30,E=-D,H=function(){var N,M=[];E=Math.min(L.duration,E+D);for(N=0;N<J;N++){M.push(L.easing(1,E,L.from[N],K[N],L.duration))}L.frame((J==1)?M[0]:M);if(E==L.duration){clearInterval(G.effect.handle);delete G.effect;I.data(G);if(L.complete){L.complete()}}};for(F=0;F<J;F++){K.push(L.to[F]-L.from[F])}G.effect=L;G.effect.handle=setInterval(H,D);this.data(G);H()}else{delete G.effect}}});g.isTouch=m})(jQuery);Array.prototype.contains=function(b){var a=this.length;while(a--){if(this[a]===b){return true}}return false};Array.prototype.clear=function(){var a=this.length;while(a--){this[a]=0}};var timeDiff={start:function(){d=new Date();time=d.getTime()},end:function(){d=new Date();return(d.getTime()-time)}};function Sudoku(){this.matrix=new Array(81);this.matrix.clear();this.level=0;this.shuffle=function(q){for(var m=0;m<9;m++){for(var g=0;g<9;g++){q[m*9+g]=(m*3+Math.floor(m/3)+g)%9+1}}for(var m=0;m<42;m++){var o=Math.ceil(Math.random()*9);var n;do{n=Math.ceil(Math.random()*9)}while(o==n);for(var v=0;v<9;v++){for(var e=0;e<e;k++){if(q[v*9+e]==o){q[v*9+e]=n}else{if(q[v*9+e]==n){q[v*9+e]=o}}}}}for(var p=0;p<42;p++){var t=Math.floor(Math.random()*3);var r=Math.floor(Math.random()*3);for(var v=0;v<9;v++){var l=this.matrix[v*9+(t*3+p%3)];this.matrix[v*9+(t*3+p%3)]=this.matrix[v*9+(r*3+p%3)];this.matrix[v*9+(r*3+p%3)]=l}}for(var u=0;u<42;u++){var h=Math.floor(Math.random()*3);var f=Math.floor(Math.random()*3);for(var v=0;v<9;v++){var l=this.matrix[v*9+(u%3*3+h)];this.matrix[v*9+(u%3*3+h)]=this.matrix[v*9+(u%3*3+f)];this.matrix[v*9+(u%3*3+f)]=l}}for(var u=0;u<42;u++){var b=Math.floor(Math.random()*3);var a=Math.floor(Math.random()*3);for(var e=0;e<9;e++){var l=this.matrix[(u%3*3+b)*9+e];this.matrix[(u%3*3+b)*9+e]=this.matrix[(u%3*3+a)*9+e];this.matrix[(u%3*3+a)*9+e]=l}}};this.maskBoardEasy=function(e,a){var g,f,b;for(g=0;g<81;g++){a[g]=e[g]}for(var g=0;g<3;g++){for(var f=0;f<3;f++){for(var b=0;b<5;b++){var h;do{h=Math.floor(Math.random()*9)}while(a[(g*3+Math.floor(h/3))*9+f*3+h%3]==0);a[(g*3+Math.floor(h/3))*9+f*3+h%3]=0}}}};this.getAvailable=function(m,n,h){var f,e,o,b,a,l;var g=new Array(9);g.clear();o=Math.floor(n/9);b=n%9;for(f=0;f<9;f++){e=o*9+f;if(m[e]>0){g[m[e]-1]=1}}for(f=0;f<9;f++){e=f*9+b;if(m[e]>0){g[m[e]-1]=1}}a=o-o%3;l=b-b%3;for(f=a;f<a+3;f++){for(e=l;e<l+3;e++){if(m[f*9+e]>0){g[m[f*9+e]-1]=1}}}e=0;if(h!=null){for(f=0;f<9;f++){if(g[f]==0){h[e++]=f+1}}}else{for(f=0;f<9;f++){if(g[f]==0){e++}}return e}if(e==0){return 0}for(f=0;f<18;f++){a=Math.floor(Math.random()*e);l=Math.floor(Math.random()*e);o=h[a];h[a]=h[l];h[l]=o}return e};this.getCell=function(b){var a=-1,g=10,e,c;var f=new Array(9);f.clear();for(e=0;e<81;e++){if(b[e]==0){c=this.getAvailable(b,e,null);if(c<g){g=c;a=e}if(g==1){break}}}return a};this.solve=function(b){var f,e,c=0;var a=this.getCell(b);if(a==-1){return 1}var g=new Array(9);g.clear();e=this.getAvailable(b,a,g);for(f=0;f<e;f++){b[a]=g[f];if(this.solve(b)==1){return 1}}b[a]=0;return 0};this.enumSolutions=function(b){var f,e,c=0;var a=this.getCell(b);if(a==-1){return 1}var g=new Array(9);g.clear();e=this.getAvailable(b,a,g);for(f=0;f<e;f++){b[a]=g[f];c+=this.enumSolutions(b);if(c>1){break}}b[a]=0;return c};this.maskBoard=function(q,w){var x,s,p,l,y,m=0,A,o=0,b,B;var h=new Array(9);h.clear();var z=new Array(81);z.clear();w.clear();do{do{b=Math.floor(Math.random()*81)}while((w[b]!=0)||(z[b]!=0));B=q[b];x=this.getAvailable(w,b,null);if(x>1){var u,f=Math.floor(b/9),e=b%9;u=0;for(x=0;x<9;x++){if(x==e){continue}s=f*9+x;if(w[s]>0){continue}A=this.getAvailable(w,s,h);for(s=0;s<A;s++){if(h[s]==B){u++;break}h[s]=0}}if(u>0){u=0;for(x=0;x<9;x++){if(x==f){continue}s=x*9+e;if(w[s]>0){continue}A=this.getAvailable(w,s,h);for(s=0;s<A;s++){if(h[s]==B){u++;break}h[s]=0}}if(u>0){u=0;l=f-f%3;y=e-e%3;for(x=l;x<l+3;x++){for(s=y;s<y+3;s++){if((x==f)&&(s==e)){continue}p=x*9+s;if(w[p]>0){continue}A=this.getAvailable(w,p,h);for(p=0;p<A;p++){if(h[p]==B){u++;break}h[p]=0}}}if(u>0){w[b]=B;o++}}}}z[b]=1;m++}while(m<81);do{do{b=Math.floor(Math.random()*81)}while((w[b]==0)||(z[b]==0));B=w[b];var g=this;var v=0;w[b]=0;v=this.enumSolutions(w);if(v>1){w[b]=B}z[b]=0;o--}while(o>0)};this._checkVal=function(a,l,e,h){var f,b,g,m;for(f=0;f<9;f++){if((f!=e)&&(a[l*9+f]==h)){return false}}for(f=0;f<9;f++){if((f!=l)&&(a[f*9+e]==h)){return false}}g=l-l%3;m=e-e%3;for(f=g;f<g+3;f++){for(b=m;b<m+3;b++){if(((f!=l)||(b!=e))&&(a[f*9+b]==h)){return false}}}return true};this.checkVal=function(c,a,b){return this._checkVal(this.matrix,c,a,b)};this.setVal=function(c,a,b){this.matrix[c*9+a]=b};this.getVal=function(b,a){return this.matrix[b*9+a]};this._newGame=function(){var c,e=0;var b=new Array(81);this.matrix.clear();this.solve(this.matrix);if(this.level==0){this.maskBoardEasy(this.matrix,b)}else{this.maskBoard(this.matrix,b);if(this.level==1){for(c=0;c<4;c++){do{var a=Math.floor(Math.random()*81)}while(b[a]!=0);b[a]=this.matrix[a]}}}this.save=this.matrix;this.matrix=b;timeDiff.start()};this.done;this._doHints=function(e,b,c,g){if(g>0){do{cell=Math.floor(Math.random()*81)}while((b[cell]==0)||(c[cell]==0));val=b[cell];var f=this;var a=0;b[cell]=0;a=this.enumSolutions(b);if(a>1){b[cell]=val}c[cell]=0;g--;var f=this;setTimeout(function(){f._doHints(e,b,c,g)},50)}else{this.save=this.matrix;this.matrix=b;this.done()}};this._doMask=function(q,v){var w,s,p,l,x,m=0,z,o=0,b,A;var h=new Array(9);h.clear();var y=new Array(81);y.clear();v.clear();do{do{b=Math.floor(Math.random()*81)}while((v[b]!=0)||(y[b]!=0));A=q[b];w=this.getAvailable(v,b,null);if(w>1){var u,f=Math.floor(b/9),e=b%9;u=0;for(w=0;w<9;w++){if(w==e){continue}s=f*9+w;if(v[s]>0){continue}z=this.getAvailable(v,s,h);for(s=0;s<z;s++){if(h[s]==A){u++;break}h[s]=0}}if(u>0){u=0;for(w=0;w<9;w++){if(w==f){continue}s=w*9+e;if(v[s]>0){continue}z=this.getAvailable(v,s,h);for(s=0;s<z;s++){if(h[s]==A){u++;break}h[s]=0}}if(u>0){u=0;l=f-f%3;x=e-e%3;for(w=l;w<l+3;w++){for(s=x;s<x+3;s++){if((w==f)&&(s==e)){continue}p=w*9+s;if(v[p]>0){continue}z=this.getAvailable(v,p,h);for(p=0;p<z;p++){if(h[p]==A){u++;break}h[p]=0}}}if(u>0){v[b]=A;o++}}}}y[b]=1;m++}while(m<81);var g=this;setTimeout(function(){g._doHints(q,v,y,o)},50)};this.newGame=function(){var c,e=0;var b=new Array(81);this.matrix.clear();this.solve(this.matrix);if(this.level==0){this.maskBoardEasy(this.matrix,b);this.save=this.matrix;this.matrix=b;timeDiff.start();this.done()}else{this._doMask(this.matrix,b);if(this.level==1){for(c=0;c<4;c++){do{var a=Math.floor(Math.random()*81)}while(b[a]!=0);b[a]=this.matrix[a]}}}};this.solveGame=function(){this.matrix=this.save};this.gameFinished=function(){for(var b=0;b<9;b++){for(var a=0;a<9;a++){var c=this.matrix[b*9+a];if((c==0)||(this._checkVal(this.matrix,b,a,c)==false)){return 0}}}return timeDiff.end()}};/*!
 * jQuery Cookie Plugin v1.3.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd && define.amd.jQuery) {
		// AMD. Register as anonymous module.
		define(['jquery'], factory);
	} else {
		// Browser globals.
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function raw(s) {
		return s;
	}

	function decoded(s) {
		return decodeURIComponent(s.replace(pluses, ' '));
	}

	function converted(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}
		try {
			return config.json ? JSON.parse(s) : s;
		} catch(er) {}
	}

	var config = $.cookie = function (key, value, options) {

		// write
		if (value !== undefined) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setDate(t.getDate() + days);
			}

			value = config.json ? JSON.stringify(value) : String(value);

			return (document.cookie = [
				encodeURIComponent(key), '=', config.raw ? value : encodeURIComponent(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// read
		var decode = config.raw ? raw : decoded;
		var cookies = document.cookie.split('; ');
		var result = key ? undefined : {};
		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = decode(parts.join('='));

			if (key && key === name) {
				result = converted(cookie);
				break;
			}

			if (!key) {
				result[name] = converted(cookie);
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) !== undefined) {
			$.cookie(key, '', $.extend(options, { expires: -1 }));
			return true;
		}
		return false;
	};

}));
/*!
 * jQuery resize event - v1.1 - 3/14/2010
 * http://benalman.com/projects/jquery-resize-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */

// Script: jQuery resize event
//
// *Version: 1.1, Last updated: 3/14/2010*
// 
// Project Home - http://benalman.com/projects/jquery-resize-plugin/
// GitHub       - http://github.com/cowboy/jquery-resize/
// Source       - http://github.com/cowboy/jquery-resize/raw/master/jquery.ba-resize.js
// (Minified)   - http://github.com/cowboy/jquery-resize/raw/master/jquery.ba-resize.min.js (1.0kb)
// 
// About: License
// 
// Copyright (c) 2010 "Cowboy" Ben Alman,
// Dual licensed under the MIT and GPL licenses.
// http://benalman.com/about/license/
// 
// About: Examples
// 
// This working example, complete with fully commented code, illustrates a few
// ways in which this plugin can be used.
// 
// resize event - http://benalman.com/code/projects/jquery-resize/examples/resize/
// 
// About: Support and Testing
// 
// Information about what version or versions of jQuery this plugin has been
// tested with, what browsers it has been tested in, and where the unit tests
// reside (so you can test it yourself).
// 
// jQuery Versions - 1.3.2, 1.4.1, 1.4.2
// Browsers Tested - Internet Explorer 6-8, Firefox 2-3.6, Safari 3-4, Chrome, Opera 9.6-10.1.
// Unit Tests      - http://benalman.com/code/projects/jquery-resize/unit/
// 
// About: Release History
// 
// 1.1 - (3/14/2010) Fixed a minor bug that was causing the event to trigger
//       immediately after bind in some circumstances. Also changed $.fn.data
//       to $.data to improve performance.
// 1.0 - (2/10/2010) Initial release

(function($,window,undefined){
  '$:nomunge'; // Used by YUI compressor.
  
  // A jQuery object containing all non-window elements to which the resize
  // event is bound.
  var elems = $([]),
    
    // Extend $.resize if it already exists, otherwise create it.
    jq_resize = $.resize = $.extend( $.resize, {} ),
    
    timeout_id,
    
    // Reused strings.
    str_setTimeout = 'setTimeout',
    str_resize = 'resize',
    str_data = str_resize + '-special-event',
    str_delay = 'delay',
    str_throttle = 'throttleWindow';
  
  // Property: jQuery.resize.delay
  // 
  // The numeric interval (in milliseconds) at which the resize event polling
  // loop executes. Defaults to 250.
  
  jq_resize[ str_delay ] = 250;
  
  // Property: jQuery.resize.throttleWindow
  // 
  // Throttle the native window object resize event to fire no more than once
  // every <jQuery.resize.delay> milliseconds. Defaults to true.
  // 
  // Because the window object has its own resize event, it doesn't need to be
  // provided by this plugin, and its execution can be left entirely up to the
  // browser. However, since certain browsers fire the resize event continuously
  // while others do not, enabling this will throttle the window resize event,
  // making event behavior consistent across all elements in all browsers.
  // 
  // While setting this property to false will disable window object resize
  // event throttling, please note that this property must be changed before any
  // window object resize event callbacks are bound.
  
  jq_resize[ str_throttle ] = true;
  
  // Event: resize event
  // 
  // Fired when an element's width or height changes. Because browsers only
  // provide this event for the window element, for other elements a polling
  // loop is initialized, running every <jQuery.resize.delay> milliseconds
  // to see if elements' dimensions have changed. You may bind with either
  // .resize( fn ) or .bind( "resize", fn ), and unbind with .unbind( "resize" ).
  // 
  // Usage:
  // 
  // > jQuery('selector').bind( 'resize', function(e) {
  // >   // element's width or height has changed!
  // >   ...
  // > });
  // 
  // Additional Notes:
  // 
  // * The polling loop is not created until at least one callback is actually
  //   bound to the 'resize' event, and this single polling loop is shared
  //   across all elements.
  // 
  // Double firing issue in jQuery 1.3.2:
  // 
  // While this plugin works in jQuery 1.3.2, if an element's event callbacks
  // are manually triggered via .trigger( 'resize' ) or .resize() those
  // callbacks may double-fire, due to limitations in the jQuery 1.3.2 special
  // events system. This is not an issue when using jQuery 1.4+.
  // 
  // > // While this works in jQuery 1.4+
  // > $(elem).css({ width: new_w, height: new_h }).resize();
  // > 
  // > // In jQuery 1.3.2, you need to do this:
  // > var elem = $(elem);
  // > elem.css({ width: new_w, height: new_h });
  // > elem.data( 'resize-special-event', { width: elem.width(), height: elem.height() } );
  // > elem.resize();
      
  $.event.special[ str_resize ] = {
    
    // Called only when the first 'resize' event callback is bound per element.
    setup: function() {
      // Since window has its own native 'resize' event, return false so that
      // jQuery will bind the event using DOM methods. Since only 'window'
      // objects have a .setTimeout method, this should be a sufficient test.
      // Unless, of course, we're throttling the 'resize' event for window.
      if ( !jq_resize[ str_throttle ] && this[ str_setTimeout ] ) { return false; }
      
      var elem = $(this);
      
      // Add this element to the list of internal elements to monitor.
      elems = elems.add( elem );
      
      // Initialize data store on the element.
      $.data( this, str_data, { w: elem.width(), h: elem.height() } );
      
      // If this is the first element added, start the polling loop.
      if ( elems.length === 1 ) {
        loopy();
      }
    },
    
    // Called only when the last 'resize' event callback is unbound per element.
    teardown: function() {
      // Since window has its own native 'resize' event, return false so that
      // jQuery will unbind the event using DOM methods. Since only 'window'
      // objects have a .setTimeout method, this should be a sufficient test.
      // Unless, of course, we're throttling the 'resize' event for window.
      if ( !jq_resize[ str_throttle ] && this[ str_setTimeout ] ) { return false; }
      
      var elem = $(this);
      
      // Remove this element from the list of internal elements to monitor.
      elems = elems.not( elem );
      
      // Remove any data stored on the element.
      elem.removeData( str_data );
      
      // If this is the last element removed, stop the polling loop.
      if ( !elems.length ) {
        clearTimeout( timeout_id );
      }
    },
    
    // Called every time a 'resize' event callback is bound per element (new in
    // jQuery 1.4).
    add: function( handleObj ) {
      // Since window has its own native 'resize' event, return false so that
      // jQuery doesn't modify the event object. Unless, of course, we're
      // throttling the 'resize' event for window.
      if ( !jq_resize[ str_throttle ] && this[ str_setTimeout ] ) { return false; }
      
      var old_handler;
      
      // The new_handler function is executed every time the event is triggered.
      // This is used to update the internal element data store with the width
      // and height when the event is triggered manually, to avoid double-firing
      // of the event callback. See the "Double firing issue in jQuery 1.3.2"
      // comments above for more information.
      
      function new_handler( e, w, h ) {
        var elem = $(this),
          data = $.data( this, str_data );
        
        // If called from the polling loop, w and h will be passed in as
        // arguments. If called manually, via .trigger( 'resize' ) or .resize(),
        // those values will need to be computed.
        data.w = w !== undefined ? w : elem.width();
        data.h = h !== undefined ? h : elem.height();
        
        old_handler.apply( this, arguments );
      };
      
      // This may seem a little complicated, but it normalizes the special event
      // .add method between jQuery 1.4/1.4.1 and 1.4.2+
      if ( $.isFunction( handleObj ) ) {
        // 1.4, 1.4.1
        old_handler = handleObj;
        return new_handler;
      } else {
        // 1.4.2+
        old_handler = handleObj.handler;
        handleObj.handler = new_handler;
      }
    }
    
  };
  
  function loopy() {
    
    // Start the polling loop, asynchronously.
    timeout_id = window[ str_setTimeout ](function(){
      
      // Iterate over all elements to which the 'resize' event is bound.
      elems.each(function(){
        var elem = $(this),
          width = elem.width(),
          height = elem.height(),
          data = $.data( this, str_data );
        
        // If element size has changed since the last time, update the element
        // data store and trigger the 'resize' event.
        if ( width !== data.w || height !== data.h ) {
          elem.trigger( str_resize, [ data.w = width, data.h = height ] );
        }
        
      });
      
      // Loop.
      loopy();
      
    }, jq_resize[ str_delay ] );
    
  };
  
})(jQuery,this);
/*!
 * jQuery Transit - CSS3 transitions and transformations
 * (c) 2011-2012 Rico Sta. Cruz <rico@ricostacruz.com>
 * MIT Licensed.
 *
 * http://ricostacruz.com/jquery.transit
 * http://github.com/rstacruz/jquery.transit
 */

(function($) {
  $.transit = {
    version: "0.9.9",

    // Map of $.css() keys to values for 'transitionProperty'.
    // See https://developer.mozilla.org/en/CSS/CSS_transitions#Properties_that_can_be_animated
    propertyMap: {
      marginLeft    : 'margin',
      marginRight   : 'margin',
      marginBottom  : 'margin',
      marginTop     : 'margin',
      paddingLeft   : 'padding',
      paddingRight  : 'padding',
      paddingBottom : 'padding',
      paddingTop    : 'padding'
    },

    // Will simply transition "instantly" if false
    enabled: true,

    // Set this to false if you don't want to use the transition end property.
    useTransitionEnd: false
  };

  var div = document.createElement('div');
  var support = {};

  // Helper function to get the proper vendor property name.
  // (`transition` => `WebkitTransition`)
  function getVendorPropertyName(prop) {
    // Handle unprefixed versions (FF16+, for example)
    if (prop in div.style) return prop;

    var prefixes = ['Moz', 'Webkit', 'O', 'ms'];
    var prop_ = prop.charAt(0).toUpperCase() + prop.substr(1);

    if (prop in div.style) { return prop; }

    for (var i=0; i<prefixes.length; ++i) {
      var vendorProp = prefixes[i] + prop_;
      if (vendorProp in div.style) { return vendorProp; }
    }
  }

  // Helper function to check if transform3D is supported.
  // Should return true for Webkits and Firefox 10+.
  function checkTransform3dSupport() {
    div.style[support.transform] = '';
    div.style[support.transform] = 'rotateY(90deg)';
    return div.style[support.transform] !== '';
  }

  var isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;

  // Check for the browser's transitions support.
  support.transition      = getVendorPropertyName('transition');
  support.transitionDelay = getVendorPropertyName('transitionDelay');
  support.transform       = getVendorPropertyName('transform');
  support.transformOrigin = getVendorPropertyName('transformOrigin');
  support.transform3d     = checkTransform3dSupport();

  var eventNames = {
    'transition':       'transitionEnd',
    'MozTransition':    'transitionend',
    'OTransition':      'oTransitionEnd',
    'WebkitTransition': 'webkitTransitionEnd',
    'msTransition':     'MSTransitionEnd'
  };

  // Detect the 'transitionend' event needed.
  var transitionEnd = support.transitionEnd = eventNames[support.transition] || null;

  // Populate jQuery's `$.support` with the vendor prefixes we know.
  // As per [jQuery's cssHooks documentation](http://api.jquery.com/jQuery.cssHooks/),
  // we set $.support.transition to a string of the actual property name used.
  for (var key in support) {
    if (support.hasOwnProperty(key) && typeof $.support[key] === 'undefined') {
      $.support[key] = support[key];
    }
  }

  // Avoid memory leak in IE.
  div = null;

  // ## $.cssEase
  // List of easing aliases that you can use with `$.fn.transition`.
  $.cssEase = {
    '_default':       'ease',
    'in':             'ease-in',
    'out':            'ease-out',
    'in-out':         'ease-in-out',
    'snap':           'cubic-bezier(0,1,.5,1)',
    // Penner equations
    'easeOutCubic':   'cubic-bezier(.215,.61,.355,1)',
    'easeInOutCubic': 'cubic-bezier(.645,.045,.355,1)',
    'easeInCirc':     'cubic-bezier(.6,.04,.98,.335)',
    'easeOutCirc':    'cubic-bezier(.075,.82,.165,1)',
    'easeInOutCirc':  'cubic-bezier(.785,.135,.15,.86)',
    'easeInExpo':     'cubic-bezier(.95,.05,.795,.035)',
    'easeOutExpo':    'cubic-bezier(.19,1,.22,1)',
    'easeInOutExpo':  'cubic-bezier(1,0,0,1)',
    'easeInQuad':     'cubic-bezier(.55,.085,.68,.53)',
    'easeOutQuad':    'cubic-bezier(.25,.46,.45,.94)',
    'easeInOutQuad':  'cubic-bezier(.455,.03,.515,.955)',
    'easeInQuart':    'cubic-bezier(.895,.03,.685,.22)',
    'easeOutQuart':   'cubic-bezier(.165,.84,.44,1)',
    'easeInOutQuart': 'cubic-bezier(.77,0,.175,1)',
    'easeInQuint':    'cubic-bezier(.755,.05,.855,.06)',
    'easeOutQuint':   'cubic-bezier(.23,1,.32,1)',
    'easeInOutQuint': 'cubic-bezier(.86,0,.07,1)',
    'easeInSine':     'cubic-bezier(.47,0,.745,.715)',
    'easeOutSine':    'cubic-bezier(.39,.575,.565,1)',
    'easeInOutSine':  'cubic-bezier(.445,.05,.55,.95)',
    'easeInBack':     'cubic-bezier(.6,-.28,.735,.045)',
    'easeOutBack':    'cubic-bezier(.175, .885,.32,1.275)',
    'easeInOutBack':  'cubic-bezier(.68,-.55,.265,1.55)'
  };

  // ## 'transform' CSS hook
  // Allows you to use the `transform` property in CSS.
  //
  //     $("#hello").css({ transform: "rotate(90deg)" });
  //
  //     $("#hello").css('transform');
  //     //=> { rotate: '90deg' }
  //
  $.cssHooks['transit:transform'] = {
    // The getter returns a `Transform` object.
    get: function(elem) {
      return $(elem).data('transform') || new Transform();
    },

    // The setter accepts a `Transform` object or a string.
    set: function(elem, v) {
      var value = v;

      if (!(value instanceof Transform)) {
        value = new Transform(value);
      }

      // We've seen the 3D version of Scale() not work in Chrome when the
      // element being scaled extends outside of the viewport.  Thus, we're
      // forcing Chrome to not use the 3d transforms as well.  Not sure if
      // translate is affectede, but not risking it.  Detection code from
      // http://davidwalsh.name/detecting-google-chrome-javascript
      if (support.transform === 'WebkitTransform' && !isChrome) {
        elem.style[support.transform] = value.toString(true);
      } else {
        elem.style[support.transform] = value.toString();
      }

      $(elem).data('transform', value);
    }
  };

  // Add a CSS hook for `.css({ transform: '...' })`.
  // In jQuery 1.8+, this will intentionally override the default `transform`
  // CSS hook so it'll play well with Transit. (see issue #62)
  $.cssHooks.transform = {
    set: $.cssHooks['transit:transform'].set
  };

  // jQuery 1.8+ supports prefix-free transitions, so these polyfills will not
  // be necessary.
  if ($.fn.jquery < "1.8") {
    // ## 'transformOrigin' CSS hook
    // Allows the use for `transformOrigin` to define where scaling and rotation
    // is pivoted.
    //
    //     $("#hello").css({ transformOrigin: '0 0' });
    //
    $.cssHooks.transformOrigin = {
      get: function(elem) {
        return elem.style[support.transformOrigin];
      },
      set: function(elem, value) {
        elem.style[support.transformOrigin] = value;
      }
    };

    // ## 'transition' CSS hook
    // Allows you to use the `transition` property in CSS.
    //
    //     $("#hello").css({ transition: 'all 0 ease 0' });
    //
    $.cssHooks.transition = {
      get: function(elem) {
        return elem.style[support.transition];
      },
      set: function(elem, value) {
        elem.style[support.transition] = value;
      }
    };
  }

  // ## Other CSS hooks
  // Allows you to rotate, scale and translate.
  registerCssHook('scale');
  registerCssHook('translate');
  registerCssHook('rotate');
  registerCssHook('rotateX');
  registerCssHook('rotateY');
  registerCssHook('rotate3d');
  registerCssHook('perspective');
  registerCssHook('skewX');
  registerCssHook('skewY');
  registerCssHook('x', true);
  registerCssHook('y', true);

  // ## Transform class
  // This is the main class of a transformation property that powers
  // `$.fn.css({ transform: '...' })`.
  //
  // This is, in essence, a dictionary object with key/values as `-transform`
  // properties.
  //
  //     var t = new Transform("rotate(90) scale(4)");
  //
  //     t.rotate             //=> "90deg"
  //     t.scale              //=> "4,4"
  //
  // Setters are accounted for.
  //
  //     t.set('rotate', 4)
  //     t.rotate             //=> "4deg"
  //
  // Convert it to a CSS string using the `toString()` and `toString(true)` (for WebKit)
  // functions.
  //
  //     t.toString()         //=> "rotate(90deg) scale(4,4)"
  //     t.toString(true)     //=> "rotate(90deg) scale3d(4,4,0)" (WebKit version)
  //
  function Transform(str) {
    if (typeof str === 'string') { this.parse(str); }
    return this;
  }

  Transform.prototype = {
    // ### setFromString()
    // Sets a property from a string.
    //
    //     t.setFromString('scale', '2,4');
    //     // Same as set('scale', '2', '4');
    //
    setFromString: function(prop, val) {
      var args =
        (typeof val === 'string')  ? val.split(',') :
        (val.constructor === Array) ? val :
        [ val ];

      args.unshift(prop);

      Transform.prototype.set.apply(this, args);
    },

    // ### set()
    // Sets a property.
    //
    //     t.set('scale', 2, 4);
    //
    set: function(prop) {
      var args = Array.prototype.slice.apply(arguments, [1]);
      if (this.setter[prop]) {
        this.setter[prop].apply(this, args);
      } else {
        this[prop] = args.join(',');
      }
    },

    get: function(prop) {
      if (this.getter[prop]) {
        return this.getter[prop].apply(this);
      } else {
        return this[prop] || 0;
      }
    },

    setter: {
      // ### rotate
      //
      //     .css({ rotate: 30 })
      //     .css({ rotate: "30" })
      //     .css({ rotate: "30deg" })
      //     .css({ rotate: "30deg" })
      //
      rotate: function(theta) {
        this.rotate = unit(theta, 'deg');
      },

      rotateX: function(theta) {
        this.rotateX = unit(theta, 'deg');
      },

      rotateY: function(theta) {
        this.rotateY = unit(theta, 'deg');
      },

      // ### scale
      //
      //     .css({ scale: 9 })      //=> "scale(9,9)"
      //     .css({ scale: '3,2' })  //=> "scale(3,2)"
      //
      scale: function(x, y) {
        if (y === undefined) { y = x; }
        this.scale = x + "," + y;
      },

      // ### skewX + skewY
      skewX: function(x) {
        this.skewX = unit(x, 'deg');
      },

      skewY: function(y) {
        this.skewY = unit(y, 'deg');
      },

      // ### perspectvie
      perspective: function(dist) {
        this.perspective = unit(dist, 'px');
      },

      // ### x / y
      // Translations. Notice how this keeps the other value.
      //
      //     .css({ x: 4 })       //=> "translate(4px, 0)"
      //     .css({ y: 10 })      //=> "translate(4px, 10px)"
      //
      x: function(x) {
        this.set('translate', x, null);
      },

      y: function(y) {
        this.set('translate', null, y);
      },

      // ### translate
      // Notice how this keeps the other value.
      //
      //     .css({ translate: '2, 5' })    //=> "translate(2px, 5px)"
      //
      translate: function(x, y) {
        if (this._translateX === undefined) { this._translateX = 0; }
        if (this._translateY === undefined) { this._translateY = 0; }

        if (x !== null && x !== undefined) { this._translateX = unit(x, 'px'); }
        if (y !== null && y !== undefined) { this._translateY = unit(y, 'px'); }

        this.translate = this._translateX + "," + this._translateY;
      }
    },

    getter: {
      x: function() {
        return this._translateX || 0;
      },

      y: function() {
        return this._translateY || 0;
      },

      scale: function() {
        var s = (this.scale || "1,1").split(',');
        if (s[0]) { s[0] = parseFloat(s[0]); }
        if (s[1]) { s[1] = parseFloat(s[1]); }

        // "2.5,2.5" => 2.5
        // "2.5,1" => [2.5,1]
        return (s[0] === s[1]) ? s[0] : s;
      },

      rotate3d: function() {
        var s = (this.rotate3d || "0,0,0,0deg").split(',');
        for (var i=0; i<=3; ++i) {
          if (s[i]) { s[i] = parseFloat(s[i]); }
        }
        if (s[3]) { s[3] = unit(s[3], 'deg'); }

        return s;
      }
    },

    // ### parse()
    // Parses from a string. Called on constructor.
    parse: function(str) {
      var self = this;
      str.replace(/([a-zA-Z0-9]+)\((.*?)\)/g, function(x, prop, val) {
        self.setFromString(prop, val);
      });
    },

    // ### toString()
    // Converts to a `transition` CSS property string. If `use3d` is given,
    // it converts to a `-webkit-transition` CSS property string instead.
    toString: function(use3d) {
      var re = [];

      for (var i in this) {
        if (this.hasOwnProperty(i)) {
          // Don't use 3D transformations if the browser can't support it.
          if ((!support.transform3d) && (
            (i === 'rotateX') ||
            (i === 'rotateY') ||
            (i === 'perspective') ||
            (i === 'transformOrigin'))) { continue; }

          if (i[0] !== '_') {
            if (use3d && (i === 'scale')) {
              re.push(i + "3d(" + this[i] + ",1)");
            } else if (use3d && (i === 'translate')) {
              re.push(i + "3d(" + this[i] + ",0)");
            } else {
              re.push(i + "(" + this[i] + ")");
            }
          }
        }
      }

      return re.join(" ");
    }
  };

  function callOrQueue(self, queue, fn) {
    if (queue === true) {
      self.queue(fn);
    } else if (queue) {
      self.queue(queue, fn);
    } else {
      fn();
    }
  }

  // ### getProperties(dict)
  // Returns properties (for `transition-property`) for dictionary `props`. The
  // value of `props` is what you would expect in `$.css(...)`.
  function getProperties(props) {
    var re = [];

    $.each(props, function(key) {
      key = $.camelCase(key); // Convert "text-align" => "textAlign"
      key = $.transit.propertyMap[key] || $.cssProps[key] || key;
      key = uncamel(key); // Convert back to dasherized

      if ($.inArray(key, re) === -1) { re.push(key); }
    });

    return re;
  }

  // ### getTransition()
  // Returns the transition string to be used for the `transition` CSS property.
  //
  // Example:
  //
  //     getTransition({ opacity: 1, rotate: 30 }, 500, 'ease');
  //     //=> 'opacity 500ms ease, -webkit-transform 500ms ease'
  //
  function getTransition(properties, duration, easing, delay) {
    // Get the CSS properties needed.
    var props = getProperties(properties);

    // Account for aliases (`in` => `ease-in`).
    if ($.cssEase[easing]) { easing = $.cssEase[easing]; }

    // Build the duration/easing/delay attributes for it.
    var attribs = '' + toMS(duration) + ' ' + easing;
    if (parseInt(delay, 10) > 0) { attribs += ' ' + toMS(delay); }

    // For more properties, add them this way:
    // "margin 200ms ease, padding 200ms ease, ..."
    var transitions = [];
    $.each(props, function(i, name) {
      transitions.push(name + ' ' + attribs);
    });

    return transitions.join(', ');
  }

  // ## $.fn.transition
  // Works like $.fn.animate(), but uses CSS transitions.
  //
  //     $("...").transition({ opacity: 0.1, scale: 0.3 });
  //
  //     // Specific duration
  //     $("...").transition({ opacity: 0.1, scale: 0.3 }, 500);
  //
  //     // With duration and easing
  //     $("...").transition({ opacity: 0.1, scale: 0.3 }, 500, 'in');
  //
  //     // With callback
  //     $("...").transition({ opacity: 0.1, scale: 0.3 }, function() { ... });
  //
  //     // With everything
  //     $("...").transition({ opacity: 0.1, scale: 0.3 }, 500, 'in', function() { ... });
  //
  //     // Alternate syntax
  //     $("...").transition({
  //       opacity: 0.1,
  //       duration: 200,
  //       delay: 40,
  //       easing: 'in',
  //       complete: function() { /* ... */ }
  //      });
  //
  $.fn.transition = $.fn.transit = function(properties, duration, easing, callback) {
    var self  = this;
    var delay = 0;
    var queue = true;

    // Account for `.transition(properties, callback)`.
    if (typeof duration === 'function') {
      callback = duration;
      duration = undefined;
    }

    // Account for `.transition(properties, duration, callback)`.
    if (typeof easing === 'function') {
      callback = easing;
      easing = undefined;
    }

    // Alternate syntax.
    if (typeof properties.easing !== 'undefined') {
      easing = properties.easing;
      delete properties.easing;
    }

    if (typeof properties.duration !== 'undefined') {
      duration = properties.duration;
      delete properties.duration;
    }

    if (typeof properties.complete !== 'undefined') {
      callback = properties.complete;
      delete properties.complete;
    }

    if (typeof properties.queue !== 'undefined') {
      queue = properties.queue;
      delete properties.queue;
    }

    if (typeof properties.delay !== 'undefined') {
      delay = properties.delay;
      delete properties.delay;
    }

    // Set defaults. (`400` duration, `ease` easing)
    if (typeof duration === 'undefined') { duration = $.fx.speeds._default; }
    if (typeof easing === 'undefined')   { easing = $.cssEase._default; }

    duration = toMS(duration);

    // Build the `transition` property.
    var transitionValue = getTransition(properties, duration, easing, delay);

    // Compute delay until callback.
    // If this becomes 0, don't bother setting the transition property.
    var work = $.transit.enabled && support.transition;
    var i = work ? (parseInt(duration, 10) + parseInt(delay, 10)) : 0;

    // If there's nothing to do...
    if (i === 0) {
      var fn = function(next) {
        self.css(properties);
        if (callback) { callback.apply(self); }
        if (next) { next(); }
      };

      callOrQueue(self, queue, fn);
      return self;
    }

    // Save the old transitions of each element so we can restore it later.
    var oldTransitions = {};

    var run = function(nextCall) {
      var bound = false;

      // Prepare the callback.
      var cb = function() {
        if (bound) { self.unbind(transitionEnd, cb); }

        if (i > 0) {
          self.each(function() {
            this.style[support.transition] = (oldTransitions[this] || null);
          });
        }

        if (typeof callback === 'function') { callback.apply(self); }
        if (typeof nextCall === 'function') { nextCall(); }
      };

      if ((i > 0) && (transitionEnd) && ($.transit.useTransitionEnd)) {
        // Use the 'transitionend' event if it's available.
        bound = true;
        self.bind(transitionEnd, cb);
      } else {
        // Fallback to timers if the 'transitionend' event isn't supported.
        window.setTimeout(cb, i);
      }

      // Apply transitions.
      self.each(function() {
        if (i > 0) {
          this.style[support.transition] = transitionValue;
        }
        $(this).css(properties);
      });
    };

    // Defer running. This allows the browser to paint any pending CSS it hasn't
    // painted yet before doing the transitions.
    var deferredRun = function(next) {
        this.offsetWidth; // force a repaint
        run(next);
    };

    // Use jQuery's fx queue.
    callOrQueue(self, queue, deferredRun);

    // Chainability.
    return this;
  };

  function registerCssHook(prop, isPixels) {
    // For certain properties, the 'px' should not be implied.
    if (!isPixels) { $.cssNumber[prop] = true; }

    $.transit.propertyMap[prop] = support.transform;

    $.cssHooks[prop] = {
      get: function(elem) {
        var t = $(elem).css('transit:transform');
        return t.get(prop);
      },

      set: function(elem, value) {
        var t = $(elem).css('transit:transform');
        t.setFromString(prop, value);

        $(elem).css({ 'transit:transform': t });
      }
    };

  }

  // ### uncamel(str)
  // Converts a camelcase string to a dasherized string.
  // (`marginLeft` => `margin-left`)
  function uncamel(str) {
    return str.replace(/([A-Z])/g, function(letter) { return '-' + letter.toLowerCase(); });
  }

  // ### unit(number, unit)
  // Ensures that number `number` has a unit. If no unit is found, assume the
  // default is `unit`.
  //
  //     unit(2, 'px')          //=> "2px"
  //     unit("30deg", 'rad')   //=> "30deg"
  //
  function unit(i, units) {
    if ((typeof i === "string") && (!i.match(/^[\-0-9\.]+$/))) {
      return i;
    } else {
      return "" + i + units;
    }
  }

  // ### toMS(duration)
  // Converts given `duration` to a millisecond string.
  //
  //     toMS('fast')   //=> '400ms'
  //     toMS(10)       //=> '10ms'
  //
  function toMS(duration) {
    var i = duration;

    // Allow for string durations like 'fast'.
    if ($.fx.speeds[i]) { i = $.fx.speeds[i]; }

    return unit(i, 'ms');
  }

  // Export some functions for testable-ness.
  $.transit.getTransitionValue = getTransition;
})(jQuery);
/*! JsRender v1.0pre: http://github.com/BorisMoore/jsrender */
/*
* Optimized version of jQuery Templates, for rendering to string.
* Does not require jQuery, or HTML DOM
* Integrates with JsViews (http://github.com/BorisMoore/jsviews)
* Copyright 2012, Boris Moore
* Released under the MIT License.
*/
// informal pre beta commit counter: 22

(function(global, jQuery, undefined) {
	// global is the this object, which is window when running in the usual browser environment.
	"use strict";

	if (jQuery && jQuery.views || global.jsviews) { return; } // JsRender is already loaded

	//========================== Top-level vars ==========================

	var versionNumber = "v1.0pre",

		$, jsvStoreName, rTag, rTmplString,
//TODO	tmplFnsCache = {},
		delimOpenChar0 = "{", delimOpenChar1 = "{", delimCloseChar0 = "}", delimCloseChar1 = "}", linkChar = "^",
		FALSE = false, TRUE = true,

		rPath = /^(?:null|true|false|\d[\d.]*|([\w$]+|\.|~([\w$]+)|#(view|([\w$]+))?)([\w$.^]*?)(?:[.[^]([\w$]+)\]?)?)$/g,
		//                                     object     helper    view  viewProperty pathTokens      leafToken

		rParams = /(\()(?=|\s*\()|(?:([([])\s*)?(?:([#~]?[\w$.^]+)?\s*((\+\+|--)|\+|-|&&|\|\||===|!==|==|!=|<=|>=|[<>%*!:?\/]|(=))\s*|([#~]?[\w$.^]+)([([])?)|(,\s*)|(\(?)\\?(?:(')|("))|(?:\s*([)\]])([([]?))|(\s+)/g,
		//          lftPrn        lftPrn2                 path    operator err                                                eq          path2       prn    comma   lftPrn2   apos quot        rtPrn   prn2   space
		// (left paren? followed by (path? followed by operator) or (path followed by paren?)) or comma or apos or quot or right paren or space

		rNewLine = /\r?\n/g,
		rUnescapeQuotes = /\\(['"])/g,
		// escape quotes and \ character
		rEscapeQuotes = /([\\'"])/g,
		rBuildHash = /\x08(~)?([^\x08]+)\x08/g,
		rTestElseIf = /^if\s/,
		rFirstElem = /<(\w+)[>\s]/,
		rPrevElem = /<(\w+)[^>\/]*>[^>]*$/,
		autoTmplName = 0,
		viewId = 0,
		escapeMapForHtml = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;"
		},
        attrEncodeChars = /[<"'&]/g,
		htmlEncodeChars = /[\x00<>"'&]/g,
		tmplAttr = "data-jsv-tmpl",
		fnDeclStr = "var j=j||" + (jQuery ? "jQuery." : "js") + "views,",
		slice = [].slice,

		$render = {},
		jsvStores = {
			template: {
				compile: compileTmpl
			},
			tag: {
				compile: compileTag
			},
			helper: {},
			converter: {}
		},

		// jsviews object ($.views if jQuery is loaded)
		$views = {
			jsviews: versionNumber,
			render: $render,
			View: View,
			settings: {
				delimiters: $viewsDelimiters,
				debugMode: TRUE
			},
			sub: {
				// subscription, e.g. JsViews integration
				Error: JsViewsError,
				tmplFn: tmplFn,
				parse: parseParams,
				extend: $extend,
				error: error
//TODO			invoke: $invoke
			},
			_cnvt: convertVal,
			_tag: renderTag,

			// TODO provide better debug experience - e.g. support $.views.onError callback
			_err: function(e) {
				// Place a breakpoint here to intercept template rendering errors
				return $viewsSettings.debugMode ? ("Error: " + (e.message || e)) + ". " : '';
			}
		};

		function JsViewsError(message, object) {
			// Error exception type for JsViews/JsRender
			// Override of $.views.sub.Error is possible
			if (object && object.onError) {
				if (object.onError(message) === FALSE) {
					return;
				}
			}
			this.name = "JsRender Error";
			this.message = message || "JsRender error";
		}

		function $extend(target, source) {
			var name;
			target = target || {};
			for (name in source) {
				target[name] = source[name];
			}
			return target;
		}

//TODO		function $invoke() {
//			try {
//				return arguments[1].apply(arguments[0], arguments[2]);
//			}
//			catch(e) {
//				throw new $views.sub.Error(e, arguments[0]);
//			}
//		}

		(JsViewsError.prototype = new Error()).constructor = JsViewsError;

	//========================== Top-level functions ==========================

	//===================
	// jsviews.delimiters
	//===================

	function $viewsDelimiters(openChars, closeChars, link) {
		// Set the tag opening and closing delimiters and 'link' character. Default is "{{", "}}" and "^"
		// openChars, closeChars: opening and closing strings, each with two characters

		if (!$views.rTag || arguments.length) {
			delimOpenChar0 = openChars ? openChars.charAt(0) : delimOpenChar0; // Escape the characters - since they could be regex special characters
			delimOpenChar1 = openChars ? openChars.charAt(1) : delimOpenChar1;
			delimCloseChar0 = closeChars ? closeChars.charAt(0) : delimCloseChar0;
			delimCloseChar1 = closeChars ? closeChars.charAt(1) : delimCloseChar1;
			linkChar = link || linkChar;
			openChars = "\\" + delimOpenChar0 + "(\\" + linkChar + ")?\\" + delimOpenChar1;  // Default is "{^{"
			closeChars = "\\" + delimCloseChar0 + "\\" + delimCloseChar1;                   // Default is "}}"
			// Build regex with new delimiters
			//          tag    (followed by / space or })   or cvtr+colon or html or code
			rTag = "(?:(?:(\\w+(?=[\\/\\s\\" + delimCloseChar0 + "]))|(?:(\\w+)?(:)|(>)|!--((?:[^-]|-(?!-))*)--|(\\*)))"
				+ "\\s*((?:[^\\" + delimCloseChar0 + "]|\\" + delimCloseChar0 + "(?!\\" + delimCloseChar1 + "))*?)";

			// make rTag available to JsViews (or other components) for parsing binding expressions
			$views.rTag = rTag + ")";

			rTag = new RegExp(openChars + rTag + "(\\/)?|(?:\\/(\\w+)))" + closeChars, "g");

			// Default:    bind           tag       converter colon html     comment            code      params            slash   closeBlock
			//           /{(\^)?{(?:(?:(\w+(?=[\/\s}]))|(?:(\w+)?(:)|(>)|!--((?:[^-]|-(?!-))*)--|(\*)))\s*((?:[^}]|}(?!}))*?)(\/)?|(?:\/(\w+)))}}/g

			rTmplString = new RegExp("<.*>|([^\\\\]|^)[{}]|" + openChars + ".*" + closeChars);
			// rTmplString looks for html tags or { or } char not preceded by \\, or JsRender tags {{xxx}}. Each of these strings are considered NOT to be jQuery selectors
		}
		return [delimOpenChar0, delimOpenChar1, delimCloseChar0, delimCloseChar1, linkChar];
	}

	//=========
	// View.get
	//=========

	function getView(type) {
		// TODO complete/test/provide samples for this
		// If type is undefined, returns root view (view under top view).
		var view = this,
			root = !type || type === "root";
		while (root && view.parent.parent || view && view.type !== type) {
			view = view.parent;
		}
		return view;
	}

	//==========
	// View._hlp
	//==========

	function getHelper(helper) {
		// Helper method called as view._hlp(key) from compiled template, for helper functions or template parameters ~foo
		var wrapped,
			view = this,
			viewCtx = view.ctx ||{},
			tmplHelpers = view.tmpl.helpers || {};

		helper = (
			viewCtx[helper] !== undefined
				? viewCtx
				: tmplHelpers[helper] !== undefined
					? tmplHelpers
					: $helpers[helper] !== undefined
						? $helpers
						: {}
		)[helper];

		if (helper) {
			if (typeof helper === "function") {
				wrapped = function() {
						// If it is of type function, we will wrap it so it gets called with view as 'this' context.
						// If the helper ~foo() was in a data-link expression, the view will have a 'temporary' linkCtx property too.
						// However note that helper functions on deeper paths will not have access to view and tagCtx.
						// For example, ~util.foo() will have the ~util object as 'this' pointer
						var i,
							args = arguments;

						for (i in args) {
							if (typeof args[i] === "function") {
								args[i] = args[i].call(view.data);
							}
						}
						return helper.apply(view, args);
					};
				wrapped.depends = helper.depends;
			}
		}
		return wrapped || helper;
	}

	//==============
	// jsviews._cnvt
	//==============

	function convertVal(converter, view, self, tagCtx, bindingPaths, text) {
		// self is template object or linkCtx object
		if (converter || bindingPaths) {
			var tmplConverter,
				linkCtx = !self.markup && self,
				tag = {
					tagName:  converter + ":",
					tagCtx: tagCtx
				},
				args = tagCtx.args = slice.call(arguments, 5);

			tagCtx.view = view;
			tagCtx.bind = !!(linkCtx || bindingPaths);

			if (linkCtx) {
				linkCtx.tag = tag;
				tag.linkCtx = linkCtx;
				tagCtx.ctx = extendCtx(tagCtx.ctx, linkCtx.view.ctx);
			}
			tag.ctx = tagCtx.ctx || {};
			delete tagCtx.ctx;

			if (converter) {
				// A call to {{cnvt: ... }} or {^{cnvt: ... }} or data-link="{cnvt: ... }"
				tmplConverter = view.tmpl.converters;
				tmplConverter = tmplConverter && tmplConverter[converter] || $converters[converter];
				if (tmplConverter || error("Unknown converter: {{"+ converter + ":")) {
					text = tmplConverter.apply(tag, args);
				}
			}
			if (bindingPaths) {
				// A call to {^{: ... }} or {^{cnvt: ... }}
				bindingPaths = view.tmpl.bnds[bindingPaths-1];
				linkCtx.paths = bindingPaths;
				// Consider being able to switch off binding if parent view is not currently bound.
				view._.tag = tag; // Provide this tag on view, for markerNode on bound tags, and for getting the tagCtx and linkCtx during rendering.
				// Provide this tag on view, for addMarkerNode on bound tags to add the tag to view._.bnds, associated with the tag id,
				// and so when rendering subsequent {{else}}, will be associated with this tag
				//TODO does this work with nested elses and with {^{foo:...}} which also adds tag to view, for markerNodes.
				text = view._.onRender(text, view, TRUE);
	//Example:  text = '<script type="jsv123"></script>' + text + '<script type="jsv123/"></script>';
			}
		}
		return text;
	}

	//=============
	// jsviews._tag
	//=============

	function renderTag(tagName, parentView, self, content, tagCtx, bind) {
		// Called from within compiled template function, to render a template tag
		// Returns the rendered tag

		var ret, render, ctx, elses, tag, tags,
			tmpl = self.markup && self,
			// self is either a template object (if rendering a tag) or a linkCtx object (if linking using a link tag)
			linkCtx = !tmpl && self,
			parentView_ = parentView._,
			parentTmpl = tmpl || parentView.tmpl,
			tmplTags = parentTmpl.tags,
			childTemplates = parentTmpl.templates,
			tagDef = tmplTags && tmplTags[tagName] || $tags[tagName],
			args = tagCtx.args = arguments.length > 6 ? slice.call(arguments, 6) : [],
			props = tagCtx.props || {};

		tagCtx.view = parentView;
		tagCtx.ctx = extendCtx(tagCtx.ctx, parentView.ctx); // Extend parentView.ctx
		ctx = tagCtx.ctx || {};
		delete tagCtx.ctx;

		if (!tagDef) {
			error("Unknown tag: {{"+ tagName + "}}");
			return "";
		}
		tmpl = props.tmpl;

		// Set the tmpl property to the content of the block tag, unless set as an override property on the tag
		content = content && parentTmpl.tmpls[content - 1];
		tmpl = tmpl || content || tagDef.template || undefined;
		tmpl = "" + tmpl === tmpl // if a string
			? childTemplates && childTemplates[tmpl] || $templates[tmpl] || $templates(tmpl)
			: tmpl;

		if (tagName === "else") {
			tag = parentView._.tag;
			// Switch current tagCtx of tag instance to this {{else ...}}
			elses = tag._elses = tag._elses || [];
			elses.push(tmpl);
			tagCtx.isElse = elses.length;
			render = tag.render;
		}
		if (tagDef.init) {
			// init is the constructor for the tag/control instance

			// tags hash: tag.ctx.tags, merged with parentView.ctx.tags,
			tags = ctx.tags = parentView.ctx && extendCtx(ctx.tags, parentView.ctx.tags) || {};

			tag = tag || linkCtx.tag;
			if (tag) {
				// tag has already been instantiated, so keep it, but attach the current context, which may have changed
				// Add tag to tags hash
				tags[tagName] = tag;
			} else {
				// If the tag has not already been instantiated, we will create a new instance and add to the tags hash,
				// so ~tags.tagName will access the tag, even within the rendering of the template content of this tag
//	TODO provide error handling owned by the tag - using tag.onError
//			try {
					tag = tags[tagName] = new tagDef.init(tagCtx, linkCtx, ctx);
//				}
//				catch(e) {
//					tagDef.onError(e);
//				}
				tag.tmpl = tmpl;

				if (linkCtx) {
					tag.attr =
						// Setting attr on tag so renderContent knows whether to include script node markers.
						linkCtx.attr =
							// Setting attr on self to ensure outputting to the correct target attribute.
							linkCtx.attr || tagDef.attr || "";
				}
			}
			ctx.tag = tag;
		} else {
			// This is a simple tag declared as a function. We won't instantiate a specific tag constructor - just a standard instance object.
			tag = tag || {
				// tag instance object if no init constructor
				render: tagDef.render,
				renderContent: renderContent,
				tmpl: tmpl,
				tagName: tagName
			};
		}

		// Provide tagCtx, linkCtx and ctx access from tag
		tag.tagCtx = tagCtx;
		tag.ctx = ctx;
		if (linkCtx) {
			linkCtx.tag = tag;
			tag.linkCtx = linkCtx;
		}

		tag._is = "tag";
		tag._done = tagCtx.isElse ? tag._done : FALSE; // If not an {{else}} this is a new
		tmpl = tmpl || tag.tmpl;
		elses = tag._elses;

//TODO The above works for initial rendering, but when refreshing {^{foo}} need also to associate with {{else}} tags. Use compilation to bind else content templates and expressions with the primary tag template and expression.

		parentView_.tag = tag;
		// Provide this tag on view, for addMarkerNode on bound tags to add the tag to view._.bnds, associated with the tag id,
		// for getting the tagCtx and linkCtx during rendering, and so when rendering subsequent {{else}}, will be associated with this tag
		//TODO does this work with nested elses and with {^{foo:...}} which also adds tag to view, for markerNodes.

//		while (tmpl) {
			// If tagDef has a 'render' function, call it.
			// If the return result is undefined, return "", or, if a template (or content) is provided,
			// return the rendered template(using the current data or the first parameter as data);
			if (render = render || tag.render) {
				ret = render.apply(tag, args);

//	TODO		ret = $invoke(tag, render, args);
			}
			ret = ret !== undefined
				? ret    // Return result of render function unless it is undefined, in which case return rendered template
				: tmpl
					// render template on args[0] if defined, or otherwise on the current data item
					? tag.renderContent(tagCtx.data !== undefined ? tagCtx.data : parentView.data, undefined, parentView)
					: ""; // No return value from render, and no template defined, so return ::

//			tmpl = (tag !== "else" && elses) ? (tagCtx.isElse = tagCtx.isElse || 0, elses[tagCtx.isElse++]) : undefined;
//}

		// If bind, for {^{tag ... }}, insert script marker nodes
		return bind ? parentView_.onRender(ret, parentView, bind) : ret;
	}

	//=================
	// View constructor
	//=================

	function View(context, type, parentView, data, template, key, onRender) {
		// Constructor for view object in view hierarchy. (Augmented by JsViews if JsViews is loaded)
		var views, parentView_,
			isArray = type === "array",
			self_ = {
				key: 0,
				useKey: isArray ? 0 : 1,
				id: "" + viewId++,
				onRender: onRender,
				bnd: {}
			},
			self = {
				data: data,
				tmpl: template,
				views: isArray ? [] : {},
				parent: parentView,
				ctx: context,
				type: type,
				// If the data is an array, this is an 'array view' with a views array for each child 'item view'
				// If the data is not an array, this is an 'item view' with a views 'map' object for any child nested views
				// _useKey is non zero if is not an 'array view' (owning a data array). Uuse this as next key for adding to child views map
				get: getView,
				_hlp: getHelper,
				_: self_
		};

		if (parentView) {
			views = parentView.views;
			parentView_ = parentView._;
			if (parentView_.useKey) {
				// Parent is an 'item view'. Add this view to its views object
				// self._key = is the key in the parent view map
				views[self_.key = "_" + parentView_.useKey++] = self;
			} else {
				// Parent is an 'array view'. Add this view to its views array
				views.splice(
					// self._.key = self.index - the index in the parent view array
					self_.key = self.index =
						key !== undefined
							? key
							: views.length,
				0, self);
			}
			// If no context was passed in, use parent context
			// If context was passed in, it should have been merged already with parent context
			self.ctx = context || parentView.ctx;
		}
		return self;
	}

	//=============
	// Registration
	//=============

	function compileChildResources(parentTmpl) {
		var storeName, resources, resourceName, settings, compile;
		for (storeName in jsvStores) {
			settings = jsvStores[storeName];
			if ((compile = settings.compile) && (resources = parentTmpl[storeName + "s"])) {
				for (resourceName in resources) {
					// compile child resource declarations (templates, tags, converters or helpers)
					resources[resourceName] = compile(resourceName, resources[resourceName], parentTmpl, storeName, settings);
				}
			}
		}
	}

	function compileTag(name, item, parentTmpl) {
		var init, tmpl;
		if (typeof item === "function") {
			// Simple tag declared as function. No presenter instantation.
			item = {
				tagName: name,
				render: item,
				depends: item.depends
			};
		} else {
			// Tag declared as object, used as the prototype for tag instantiation (control/presenter)
			item.tagName = name;
			if (tmpl = item.template) {
				item.template = "" + tmpl === tmpl ? ($templates[tmpl] || $templates(tmpl)) : tmpl;
			}
			if (item.init !== FALSE) {
				init = item.init = item.init || function(tagCtx) {};
				init.prototype = item;
				(init.prototype = item).constructor = init;
			}
		}
		item.renderContent = renderContent;
		item.attr = "html";
		if (parentTmpl) {
			item._parentTmpl = parentTmpl;
		}
//TODO	item.onError = function(e) {
//			var error;
//			if (error = this.prototype.onError) {
//				error.call(this, e);
//			} else {
//				throw e;
//			}
//		}
		return item;
	}

	function compileTmpl(name, tmpl, parentTmpl, storeName, storeSettings, options) {
		// tmpl is either a template object, a selector for a template script block, the name of a compiled template, or a template object

		//==== nested functions ====
		function tmplOrMarkupFromStr(value) {
			// If value is of type string - treat as selector, or name of compiled template
			// Return the template object, if already compiled, or the markup string

			if (("" + value === value) || value.nodeType > 0) {
				try {
					elem = value.nodeType > 0
					? value
					: !rTmplString.test(value)
					// If value is a string and does not contain HTML or tag content, then test as selector
						&& jQuery && jQuery(value)[0];
					// If selector is valid and returns at least one element, get first element
					// If invalid, jQuery will throw. We will stay with the original string.
				} catch (e) { }

				if (elem) {
					// Generally this is a script element.
					// However we allow it to be any element, so you can for example take the content of a div,
					// use it as a template, and replace it by the same content rendered against data.
					// e.g. for linking the content of a div to a container, and using the initial content as template:
					// $.link("#content", model, {tmpl: "#content"});

					// Create a name for compiled template if none provided
					value = $templates[elem.getAttribute(tmplAttr)];
					if (!value) {
						// Not already compiled and cached, so compile and cache the name
						name = name || "_" + autoTmplName++;
						elem.setAttribute(tmplAttr, name);
						$templates[name] = value = compileTmpl(name, elem.innerHTML, parentTmpl, storeName, storeSettings, options); // Use tmpl as options
					}
				}
				return value;
			}
			// If value is not a string, return undefined
		}

		var tmplOrMarkup, elem;

		//==== Compile the template ====
		tmpl = tmpl || "";
		tmplOrMarkup = tmplOrMarkupFromStr(tmpl);

		// If options, then this was already compiled from a (script) element template declaration.
		// If not, then if tmpl is a template object, use it for options
		options = options || (tmpl.markup ? tmpl : {});
		options.tmplName = name;
		if (parentTmpl) {
			options._parentTmpl = parentTmpl;
		}
		// If tmpl is not a markup string or a selector string, then it must be a template object
		// In that case, get it from the markup property of the object
		if (!tmplOrMarkup && tmpl.markup && (tmplOrMarkup = tmplOrMarkupFromStr(tmpl.markup))) {
			if (tmplOrMarkup.fn && (tmplOrMarkup.debug !== tmpl.debug || tmplOrMarkup.allowCode !== tmpl.allowCode)) {
				// if the string references a compiled template object, but the debug or allowCode props are different, need to recompile
				tmplOrMarkup = tmplOrMarkup.markup;
			}
		}
		if (tmplOrMarkup !== undefined) {
			if (name && !parentTmpl) {
				$render[name] = function() {
					return tmpl.render.apply(tmpl, arguments);
				};
			}
			if (tmplOrMarkup.fn || tmpl.fn) {
				// tmpl is already compiled, so use it, or if different name is provided, clone it
				if (tmplOrMarkup.fn) {
					if (name && name !== tmplOrMarkup.name) {
						tmpl = extendCtx(options, tmplOrMarkup);
					} else {
						tmpl = tmplOrMarkup;
					}
				}
			} else {
				// tmplOrMarkup is a markup string, not a compiled template
				// Create template object
				tmpl = TmplObject(tmplOrMarkup, options);
				// Compile to AST and then to compiled function
				tmplFn(tmplOrMarkup, tmpl);
			}
			compileChildResources(options);
			return tmpl;
		}
	}
	//==== /end of function compile ====

	function TmplObject(markup, options) {
		// Template object constructor
		var htmlTag,
			wrapMap = $viewsSettings.wrapMap || {},
			tmpl = $extend(
				{
					markup: markup,
					tmpls: [],
					links: {},
					bnds: [],
					render: renderContent
				},
				options
			);

		if (!options.htmlTag) {
			// Set tmpl.tag to the top-level HTML tag used in the template, if any...
			htmlTag = rFirstElem.exec(markup);
			tmpl.htmlTag = htmlTag ? htmlTag[1].toLowerCase() : "";
		}
		htmlTag = wrapMap[tmpl.htmlTag];
		if (htmlTag && htmlTag !== wrapMap.div) {
			// When using JsViews, we trim templates which are inserted into HTML contexts where text nodes are not rendered (i.e. not 'Phrasing Content').
			tmpl.markup = $.trim(tmpl.markup);
			tmpl._elCnt = TRUE; // element content model (no rendered text nodes), not phrasing content model
		}

		return tmpl;
	}

	function registerStore(storeName, storeSettings) {

		function theStore(name, item, parentTmpl) {
			// The store is also the function used to add items to the store. e.g. $.templates, or $.views.tags

			// For store of name 'thing', Call as:
			//    $.views.things(items[, parentTmpl]),
			// or $.views.things(name, item[, parentTmpl])

			var onStore, compile, items, itemName, childTemplates, childTemplate, thisStore, childStoreName;

			if (name && "" + name !== name && !name.nodeType && !name.markup) {
				// Call to $.views.things(items[, parentTmpl]),

				// Adding items to the store
				// If name is a map, then item is parentTmpl. Iterate over map and call store for key.
				for (itemName in name) {
					theStore(itemName, name[itemName], item);
				}
				return $views;
			}
			thisStore = parentTmpl ? parentTmpl[storeNames] = parentTmpl[storeNames] || {} : theStore;

			// Adding a single unnamed item to the store
			if (item === undefined) {
				item = name;
				name = undefined;
			}
			compile = storeSettings.compile;
			if (onStore = $viewsSub.onBeforeStoreItem) {
				// e.g. provide an external compiler or preprocess the item.
				compile = onStore(thisStore, name, item, compile) || compile;
			}
			if (!name) {
				item = compile(undefined, item);
			} else if ("" + name === name) { // name must be a string
				if (item === null) {
					// If item is null, delete this entry
					delete thisStore[name];
				} else {
					thisStore[name] = compile ? (item = compile(name, item, parentTmpl, storeName, storeSettings)) : item;
					if (storeName === "template" && (childTemplates = thisStore[name].templates)) {
						// This is a template which has child templates defined. We will copy child items of parent template to each
						// child template, since items registered with the parent templates must also be accessible from the child template
						for (childStoreName in jsvStores) {
							// Find child items registered for this parent template
							childStoreName += "s";
							if (items = item[childStoreName]) {
								// Copy these items to each child template
								for (childTemplate in childTemplates ) {
									childTemplate = childTemplates[childTemplate];
									// Copy parent items except if overridden by item of same name in child template
									childTemplate[childStoreName] = extendCtx(childTemplate[childStoreName], items);
								}
							}
						}
					}
				}
			}
			if (item) {
				item._is = storeName;
			}
			if (onStore = $viewsSub.onStoreItem) {
				// e.g. JsViews integration
				onStore(thisStore, name, item, compile);
			}
			return item;
		}

		var storeNames = storeName + "s";

		$views[storeNames] = theStore;
		jsvStores[storeName] = storeSettings;
	}

	//==============
	// renderContent
	//==============

	function renderContent(data, context, parentView, key, isLayout, onRender) {
		// Render template against data as a tree of subviews (nested rendered template instances), or as a string (top-level template).
		// If the data is the parent view, treat as layout template, re-render with the same data context.
		var i, l, dataItem, newView, childView, itemResult, parentContext, props, swapContent, tagCtx, isTag, outerOnRender,
			self = this,
			tmpl = self,
			allowDataLink = self.attr === undefined || self.attr === "html",
			result = "";

		if (key === TRUE) {
			swapContent = TRUE;
			key = 0;
		}
		if (isTag = self._is === "tag") {
			tagCtx = self.tagCtx;
			// This is a call from renderTag
			tmpl = tagCtx.isElse ? self._elses[tagCtx.isElse-1] : self.tmpl;
			context = extendCtx(context, self.ctx);
			props = tagCtx.props || {};
			if ( props.link === FALSE ) {
				// link=false setting on block tag
				// We will override inherited value of link by the explicit setting link=false taken from props
				// The child views of an unlinked view are also unlinked. So setting child back to true will not have any effect.
				context =  context || {};
				context.link = FALSE;
			}
			parentView = parentView || tagCtx.view;
		} else {
			tmpl = self.jquery && (self[0] || error('Unknown template: "' + self.selector + '"')) // This is a call from $(selector).render
				|| self;
		}
		if (tmpl) {
			if (parentView) {
				onRender = onRender || parentView._.onRender;
				parentContext = parentView.ctx;
				if (data === parentView) {
					// Inherit the data from the parent view.
					// This may be the contents of an {{if}} block
					// Set isLayout = true so we don't iterate the if block if the data is an array.
					data = parentView.data;
					isLayout = TRUE;
				}
			}

			// Set additional context on views created here, (as modified context inherited from the parent, and to be inherited by child views)
			// Note: If no jQuery, $extend does not support chained copies - so limit extend() to two parameters
			context = extendCtx(context, parentContext);

			if (!tmpl.fn) {
				tmpl = $templates[tmpl] || $templates(tmpl);
			}

			if (tmpl) {
				onRender = (context && context.link) !== FALSE && allowDataLink && onRender;
				// If link===false, do not call onRender, so no data-linking marker nodes
				outerOnRender = onRender;
				if (onRender === TRUE) {
					// Used by view.refresh(). Don't create a new wrapper view.
					outerOnRender = undefined;
					onRender = parentView._.onRender;
				}
				if ($.isArray(data) && !isLayout) {
					// Create a view for the array, whose child views correspond to each data item.
					// (Note: if key and parentView are passed in along with parent view, treat as
					// insert -e.g. from view.addViews - so parentView is already the view item for array)
					newView = swapContent ? parentView : (key !== undefined && parentView) || View(context, "array", parentView, data, tmpl, key, onRender);
					for (i = 0, l = data.length; i < l; i++) {
						// Create a view for each data item.
						dataItem = data[i];
						childView = View(context, "item", newView, dataItem, tmpl, (key || 0) + i, onRender);
						itemResult = tmpl.fn(dataItem, childView, $views);
						result += newView._.onRender ? newView._.onRender(itemResult, childView) : itemResult;
					}
				} else {
					// Create a view for singleton data object.
					newView = swapContent ? parentView : View(context, "data", parentView, data, tmpl, key, onRender);
					result += tmpl.fn(data, newView, $views);
				}
				return outerOnRender ? outerOnRender(result, newView) : result;
			}
		}
		return "";
	}

	//===========================
	// Build and compile template
	//===========================

	// Generate a reusable function that will serve to render a template against data
	// (Compile AST then build template function)

	function error(message) {
		if ($viewsSettings.debugMode) {
			throw new $views.sub.Error(message);
		}
	}

	function syntaxError(message) {
		error("Syntax error\n" + message);
	}

	function tmplFn(markup, tmpl, isLinkExpression) {
		// Compile markup to AST (abtract syntax tree) then build the template function code from the AST nodes
		// Used for compiling templates, and also by JsViews to build functions for data link expressions


		//==== nested functions ====
		function pushprecedingContent(shift) {
			shift -= loc;
			if (shift) {
				content.push(markup.substr(loc, shift).replace(rNewLine, "\\n"));
			}
		}

		function blockTagCheck(tagName) {
			tagName && syntaxError('Unmatched or missing tag: "{{/' + tagName + '}}" in template:\n' + markup);
		}

		function parseTag(all, bind, tagName, converter, colon, html, comment, codeTag, params, slash, closeBlock, index) {

			//    bind         tag        converter colon html     comment            code      params            slash   closeBlock
			// /{(\^)?{(?:(?:(\w+(?=[\/\s}]))|(?:(\w+)?(:)|(>)|!--((?:[^-]|-(?!-))*)--|(\*)))\s*((?:[^}]|}(?!}))*?)(\/)?|(?:\/(\w+)))}}/g

			// Build abstract syntax tree (AST): [ tagName, converter, params, content, hash, bindings, contentMarkup ]
			if (html) {
				colon = ":";
				converter = "html";
			}
			var current0,
				pathBindings = [],
				code = "",
				hash = "",
				passedCtx = "",
				// Block tag if not self-closing and not {{:}} or {{>}} (special case) and not a data-link expression
				block = !slash && !colon && !comment && !isLinkExpression;

			//==== nested helper function ====
			tagName = tagName || colon;
			pushprecedingContent(index);
			loc = index + all.length; // location marker - parsed up to here
			if (codeTag) {
				if (allowCode) {
					content.push(["*", "\n" + params.replace(rUnescapeQuotes, "$1") + "\n"]);
				}
			} else if (tagName) {
				if (tagName === "else") {
					if (rTestElseIf.test(params)) {
						syntaxError('for "{{else if expr}}" use "{{else expr}}"');
					}
					current[6] = markup.substring(current[6], index); // contentMarkup for block tag
					current = stack.pop();
					content = current[3];
					block = TRUE;
				}
				if (params) {
					code = parseParams(params, pathBindings)
						.replace(rBuildHash, function(all, isCtx, keyValue) {
							if (isCtx) {
								passedCtx += keyValue + ",";
							} else {
								hash += keyValue + ",";
							}
							return "";
						});
				}
				hash = hash.slice(0, -1);
				code = code.slice(0, -1);
				newNode = [
						tagName,
						converter || "",
						code,
						block && [],
						"{" + (hash ? ("props:{" + hash + "},") : "") + 'params:"' + params + '"' + (passedCtx ? ",ctx:{" + passedCtx.slice(0, -1) + "}" : "") + "},",
						bind && pathBindings || 0
					];
				content.push(newNode);
				if (block) {
					stack.push(current);
					current = newNode;
					current[6] = loc; // Store current location of open tag, to be able to add contentMarkup when we reach closing tag
				}
			} else if (closeBlock) {
				current0 = current[0];
				blockTagCheck(closeBlock !== current0 && current0 && current0 !== "else");
				current[6] = markup.substring(current[6], index); // contentMarkup for block tag
				current = stack.pop();
			}
			blockTagCheck(!current && closeBlock);
			content = current[3];
		}
		//==== /end of nested functions ====

		var newNode,
			allowCode = tmpl && tmpl.allowCode,
			astTop = [],
			loc = 0,
			stack = [],
			content = astTop,
			current = [, , , astTop];

		markup = markup.replace(rEscapeQuotes, "\\$1");

//TODO	result = tmplFnsCache[markup];  // Only cache if template is not named and markup length < ..., and there are no bindings or subtemplates?? Consider standard optimization for data-link="a.b.c"
//		if (result) {
//			tmpl.fn = result;
//		} else {

//		result = markup;

		blockTagCheck(stack[0] && stack[0][3].pop()[0]);

		// Build the AST (abstract syntax tree) under astTop
		markup.replace(rTag, parseTag);

		pushprecedingContent(markup.length);

		if (loc = astTop[astTop.length-1]) {
			blockTagCheck("" + loc !== loc && (+loc[6] === loc[6]) && loc[0]);
		}
//			result = tmplFnsCache[markup] = buildCode(astTop, tmpl);
//		}
		return buildCode(astTop, tmpl);
	}

	function buildCode(ast, tmpl) {
		// Build the template function code from the AST nodes, and set as property on the passed-in template object
		// Used for compiling templates, and also by JsViews to build functions for data link expressions
		var i, node, hasTag, hasEncoder, getsValue, hasConverter, hasViewPath, tagName, converter, params, hash, bindings, bindingPaths, nestedTmpls, nestedTmpl, allowCode, content, markup,
			code = "",
			tmplOptions = {},
			l = ast.length;

		if (tmpl) {
			if (allowCode = tmpl.allowCode) {
				tmplOptions.allowCode = TRUE;
			}
			if (tmpl.debug) {
				tmplOptions.debug = TRUE;
			}
			bindings = tmpl.bnds;
			nestedTmpls = tmpl.tmpls;
		}

		for (i = 0; i < l; i++) {
			// AST nodes: [ tagName, converter, params, content, hash, bindings, contentMarkup, link ]
			node = ast[i];

			// Add newline for each callout to t() c() etc. and each markup string
			//TODO consider changing to ret += t()...; so debug break points can be inserted on each callout.
			code += "\nret+=";
			if ("" + node === node) {
				// a markup string to be inserted
				code += '"' + node + '";';
			} else {
				// a compiled tag expression to be inserted
				tagName = node[0];
				if (tagName === "*") {
					// If this {{* }} tag is at the beginning of the template, start with var ret="";
					// Otherwise remove the last "+\n" characters and replace with ";" to complete the ret += ...; statement, prior to inserted user code,
					code = (i ? code.slice(0, -5) : "") + node[1];
				} else {
					converter = node[1];
					params = node[2];
					content = node[3];
					hash = node[4];
					bindingPaths = node[5];
					markup = node[6];

					if (content) {
						// Create template object for nested template
						nestedTmpl = TmplObject(markup, tmplOptions);
						// Compile to AST and then to compiled function
						buildCode(content, nestedTmpl);
						nestedTmpls.push(nestedTmpl);
					}
					if (bindingPaths) {
						// Add leaf binding paths to template
						bindings.push(bindingPaths);
						bindingPaths = bindings.length;
					}
					hasViewPath = hasViewPath || hash.indexOf("view") > -1;
					// Add newline for each callout to t() c() etc.

					//TODO consider changing to ret += t()...; so debug break points can be inserted on each callout. At the same time, pass in ret to c() and t()
					// so they can look at the previous ret, and detect whether this is a jsrender tag within an HTML element tag. If so, don't insert marker nodes,
					// and make the databinding trigger view refresh on parent view... No need for people to set link=false.
					code += tagName === ":"
					? (converter === "html" && !bindingPaths
						? (hasEncoder = TRUE, "h(" + params+ ");")
						: converter || bindingPaths // Call _cnvt if there is a converter, or binding: {{cnvt: ... }}, {^{: ... }} or {^{cnvt: ... }}
							? (hasConverter = TRUE, 'c("' + converter + '",view,this,' + hash + bindingPaths + "," + params + ");")
							: (getsValue = TRUE, "(v=" + params + ')!=u?v:"";')
					)
					: (hasTag = TRUE, 't("' + tagName + '",view,this,'
						+ (content ? nestedTmpls.length : '""') // For block tags, pass in the key (nestedTmpls.length) to the nested content template
						+ "," + hash + bindingPaths + (params ? "," : "") + params) + ");";
				}
			}
		}

		// Include only the var references that are needed in the code
		code = fnDeclStr
		+ (getsValue ? "v," : "")
		+ (hasTag ? "t=j._tag," : "")
		+ (hasConverter ? "c=j._cnvt," : "")
		+ (hasEncoder ? "h=j.converters.html," : "")
		+ 'ret=""; try{\n'
		+ (tmplOptions.debug ? "debugger;" : "")
		+ code + "\nreturn ret;\n\n}catch(e){return j._err(e);}";

		try {
			code = new Function("data, view, j, u", code);
		} catch (e) {
			syntaxError("Compiled template code:\n\n" + code, e);
		}

		if (tmpl) {
			tmpl.fn = code;
		}
		return code;
	}

	function parseParams(params, bindings) {

		function parseTokens(all, lftPrn0, lftPrn, path, operator, err, eq, path2, prn, comma, lftPrn2, apos, quot, rtPrn, prn2, space) {
			// rParams = /(\()(?=|\s*\()|(?:([([])\s*)?(?:([#~]?[\w$^.]+)?\s*((\+\+|--)|\+|-|&&|\|\||===|!==|==|!=|<=|>=|[<>%*!:?\/]|(=))\s*|([#~]?[\w$^.]+)([([])?)|(,\s*)|(\(?)\\?(?:(')|("))|(?:\s*([)\]])([([]?))|(\s+)
			//          lftPrn0-flwed by (- lftPrn               path    operator err                                                eq         path2       prn    comma   lftPrn3   apos quot        rtPrn   prn2   space
			// (left paren? followed by (path? followed by operator) or (path followed by paren?)) or comma or apos or quot or right paren or space
			operator = operator || "";
			lftPrn = lftPrn || lftPrn0 || lftPrn2;
			path = path || path2;
			prn = prn || prn2 || "";

			function parsePath(all, object, helper, view, viewProperty, pathTokens, leafToken) {
				// rPath = /^(?:null|true|false|\d[\d.]*|([\w$]+|~([\w$]+)|#(view|([\w$]+))?)([\w$.^]*?)(?:[.[^]([\w$]+)\]?)?)$/g,
				//                                        object   helper    view  viewProperty pathTokens       leafToken

				if (object) {
					bindings.push(path);
					if (object !== ".") {
						var leaf,
							ret = (helper
								? 'view._hlp("' + helper + '")'
								: view
									? "view"
									: "data")
							+ (leafToken
								? (viewProperty
									? "." + viewProperty
									: helper
										? ""
										: (view ? "" : "." + object)
									) + (pathTokens || "")
								: (leafToken = helper ? "" : view ? viewProperty || "" : object, ""));

						leaf = (leafToken ? "." + leafToken : "");
						ret = ret + leaf;
						ret = ret.slice(0, 9) === "view.data"
						? ret.slice(5) // convert #view.data... to data...
						: ret;
						return ret;
					}
				}
				return all;
			}

			if (err) {
				syntaxError(params);
			} else {
				return (aposed
					// within single-quoted string
					? (aposed = !apos, (aposed ? all : '"'))
					: quoted
					// within double-quoted string
						? (quoted = !quot, (quoted ? all : '"'))
						:
					(
						(lftPrn
								? (parenDepth++, lftPrn)
								: "")
						+ (space
							? (parenDepth
								? ""
								: named
									? (named = FALSE, "\b")
									: ","
							)
							: eq
					// named param
								? (parenDepth && syntaxError(params), named = TRUE, '\b' + path + ':')
								: path
					// path
									? (path.split("^").join(".").replace(rPath, parsePath)
										+ (prn
											? (fnCall[++parenDepth] = TRUE, prn)
											: operator)
									)
									: operator
										? operator
										: rtPrn
					// function
											? ((fnCall[parenDepth--] = FALSE, rtPrn)
												+ (prn
													? (fnCall[++parenDepth] = TRUE, prn)
													: "")
											)
											: comma
												? (fnCall[parenDepth] || syntaxError(params), ",") // We don't allow top-level literal arrays or objects
												: lftPrn0
													? ""
													: (aposed = apos, quoted = quot, '"')
					))
				);
			}
		}
		var named,
			fnCall = {},
			parenDepth = 0,
			quoted = FALSE, // boolean for string content in double quotes
			aposed = FALSE; // or in single quotes

		bindings.expr = params.replace(rUnescapeQuotes, "$1");
		return (params + " ").replace(rParams, parseTokens);
	}

	//==========
	// Utilities
	//==========

	// HTML encoding helper
	function replacerForHtml(ch) {
		// Original code from Mike Samuel <msamuel@google.com>
		return escapeMapForHtml[ch]
			// Intentional assignment that caches the result of encoding ch.
			|| (escapeMapForHtml[ch] = "&#" + ch.charCodeAt(0) + ";");
	}

	// Merge objects, in particular contexts which inherit from parent contexts
	function extendCtx(context, parentContext) {
		// Return copy of parentContext, unless context is defined and is different, in which case return a new merged context
		// If neither context nor parentContext are undefined, return undefined
		return context && context !== parentContext
			? (parentContext
				? $extend($extend({}, parentContext), context)
				: context)
			: parentContext && $extend({}, parentContext);
	}

	//========================== Initialize ==========================

	for (jsvStoreName in jsvStores) {
		registerStore(jsvStoreName, jsvStores[jsvStoreName]);
	}

	var $templates = $views.templates,
		$converters = $views.converters,
		$helpers = $views.helpers,
		$tags = $views.tags,
		$viewsSub = $views.sub,
		$viewsSettings = $views.settings;

	if (jQuery) {
		////////////////////////////////////////////////////////////////////////////////////////////////
		// jQuery is loaded, so make $ the jQuery object
		$ = jQuery;
		$.render = $render;
		$.views = $views;
		$.templates = $templates = $views.templates;
		$.fn.render = renderContent;

	} else {
		////////////////////////////////////////////////////////////////////////////////////////////////
		// jQuery is not loaded.

		$ = global.jsviews = $views;

		$.isArray = Array && Array.isArray || function(obj) {
			return Object.prototype.toString.call(obj) === "[object Array]";
		};
	}

	//========================== Register tags ==========================

	$tags({
		"if": function(val) {
			var self = this;
				// If not done and val is truey, set done=true on tag instance and render content. Otherwise return ""
				// On else will call this function again on the same tag instance.
			return (self._done || arguments.length && !val)
				? ""
				: (self._done = true,
					// Test is satisfied, so render content on current context. Rather than return undefined
					// (which will render the tmpl/content on the current context but will iterate if it is an array),
					// we pass in the view. This ensures treating as a layout template - with no iteration
					self.renderContent(self.tagCtx.view));
		},
// Temporary fix for binding to {{if}}
//	"if": {
//		render: function(val) {
//			var self = this;
//			return (self._done || arguments.length && !val) ? "" : (self._done = true, self.renderContent(self.tagCtx.view));
//		}
//	},
		"else": function() {}, // Does nothing but ensures {{else}} tags are recognized as valid
		"for": function() {
			var i, arg, undef,
				self = this,
				tagCtx = self.tagCtx,
				result = "",
				args = arguments,
				done = 0,
				l = args.length;

			if (!l) {
				return tagCtx.done
					? ""
					: (tagCtx.done = TRUE,
						// Test is satisfied, so render content on current context. Rather than return undefined
						// (which will render the tmpl/content on the current context but will iterate if it is an array),
						// we pass in the view. This ensures treating as a layout template - with no iteration
						self.renderContent(tagCtx.view));
			}
			for (i = 0; i < l; i++) {
				arg = args[i];
				undef = arg === undefined;
				if (!undef) {
					done += $.isArray(arg) ? arg.length : 1;
					result += self.renderContent(arg);
				} else {
					return "";
				}
			}
			tagCtx.done = done;
			return result;
		},
		"*": function(value) {
			return value;
		}
	});

	//========================== Register global helpers ==========================

	//	$helpers({ // Global helper functions
	//		// TODO add any useful built-in helper functions
	//	});

	//========================== Register converters ==========================

	$converters({
		html: function(text) {
			// HTML encoding helper: Replace < > & and ' and " by corresponding entities.
			return text != undefined ? String(text).replace(htmlEncodeChars, replacerForHtml) : "";
		},
		attr: function(text) {
			// Attribute encoding helper: Replace < & ' and " by corresponding entities.
			return text != undefined ? String(text).replace(attrEncodeChars, replacerForHtml) : "";
		},
		url: function(text) {
			// TODO - support chaining {{attr|url:....}} to protect against injection attacks from url parameters containing " or '.
			// URL encoding helper.
			return text != undefined ? encodeURI(String(text)) : "";
		}
	});

	//========================== Define default delimiters ==========================
	$viewsDelimiters();

})(this, this.jQuery);