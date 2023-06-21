var D=Object.defineProperty,T=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var F=(a,r,c)=>r in a?D(a,r,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[r]=c,y=(a,r)=>{for(var c in r||(r={}))_.call(r,c)&&F(a,c,r[c]);if(E)for(var c of E(r))P.call(r,c)&&F(a,c,r[c]);return a},A=(a,r)=>T(a,C(r));var VueCountUp=function(a){"use strict";var r=function(){return r=Object.assign||function(o){for(var n,i=1,e=arguments.length;i<e;i++)for(var t in n=arguments[i])Object.prototype.hasOwnProperty.call(n,t)&&(o[t]=n[t]);return o},r.apply(this,arguments)},c=function(){function o(n,i,e){var t=this;this.endVal=i,this.options=e,this.version="2.6.2",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(s){t.startTime||(t.startTime=s);var l=s-t.startTime;t.remaining=t.duration-l,t.useEasing?t.countDown?t.frameVal=t.startVal-t.easingFn(l,0,t.startVal-t.endVal,t.duration):t.frameVal=t.easingFn(l,t.startVal,t.endVal-t.startVal,t.duration):t.frameVal=t.startVal+(t.endVal-t.startVal)*(l/t.duration);var u=t.countDown?t.frameVal<t.endVal:t.frameVal>t.endVal;t.frameVal=u?t.endVal:t.frameVal,t.frameVal=Number(t.frameVal.toFixed(t.options.decimalPlaces)),t.printValue(t.frameVal),l<t.duration?t.rAF=requestAnimationFrame(t.count):t.finalEndVal!==null?t.update(t.finalEndVal):t.options.onCompleteCallback&&t.options.onCompleteCallback()},this.formatNumber=function(s){var l,u,h,d,g=s<0?"-":"";l=Math.abs(s).toFixed(t.options.decimalPlaces);var V=(l+="").split(".");if(u=V[0],h=V.length>1?t.options.decimal+V[1]:"",t.options.useGrouping){d="";for(var p=3,f=0,m=0,w=u.length;m<w;++m)t.options.useIndianSeparators&&m===4&&(p=2,f=1),m!==0&&f%p==0&&(d=t.options.separator+d),f++,d=u[w-m-1]+d;u=d}return t.options.numerals&&t.options.numerals.length&&(u=u.replace(/[0-9]/g,function(v){return t.options.numerals[+v]}),h=h.replace(/[0-9]/g,function(v){return t.options.numerals[+v]})),g+t.options.prefix+u+h+t.options.suffix},this.easeOutExpo=function(s,l,u,h){return u*(1-Math.pow(2,-10*s/h))*1024/1023+l},this.options=r(r({},this.defaults),e),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(i),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,this.options.separator===""&&(this.options.useGrouping=!1),this.el=typeof n=="string"?document.getElementById(n):n,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined",typeof window!="undefined"&&this.options.enableScrollSpy&&(this.error?console.error(this.error,n):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return t.handleScroll(t)}),window.onscroll=function(){window.onScrollFns.forEach(function(s){return s()})},this.handleScroll(this)))}return o.prototype.handleScroll=function(n){if(n&&window&&!n.once){var i=window.innerHeight+window.scrollY,e=n.el.getBoundingClientRect(),t=e.top+window.pageYOffset,s=e.top+e.height+window.pageYOffset;s<i&&s>window.scrollY&&n.paused?(n.paused=!1,setTimeout(function(){return n.start()},n.options.scrollSpyDelay),n.options.scrollSpyOnce&&(n.once=!0)):(window.scrollY>s||t>i)&&!n.paused&&n.reset()}},o.prototype.determineDirectionAndSmartEasing=function(){var n=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>n;var i=n-this.startVal;if(Math.abs(i)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=n;var e=this.countDown?1:-1;this.endVal=n+e*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=n,this.finalEndVal=null;this.finalEndVal!==null?this.useEasing=!1:this.useEasing=this.options.useEasing},o.prototype.start=function(n){this.error||(n&&(this.options.onCompleteCallback=n),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},o.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},o.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},o.prototype.update=function(n){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(n),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal==null&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},o.prototype.printValue=function(n){var i;if(this.el){var e=this.formattingFn(n);!((i=this.options.plugin)===null||i===void 0)&&i.render?this.options.plugin.render(this.el,e):this.el.tagName==="INPUT"?this.el.value=e:this.el.tagName==="text"||this.el.tagName==="tspan"?this.el.textContent=e:this.el.innerHTML=e}},o.prototype.ensureNumber=function(n){return typeof n=="number"&&!isNaN(n)},o.prototype.validateValue=function(n){var i=Number(n);return this.ensureNumber(i)?i:(this.error="[CountUp] invalid start or end value: ".concat(n),null)},o.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},o}();function S(o,n=1){const i=a.ref(-1);let e;function t(l){e||(e=l),l-e<n*1e3?i.value=requestAnimationFrame(t):o()}i.value=requestAnimationFrame(t);function s(){window.cancelAnimationFrame(i.value)}return{cancel:s}}const b={class:"countup-wrap"},N={name:"CountUp"};return a.defineComponent(A(y({},N),{props:{endVal:null,startVal:{default:0},duration:{default:2.5},decimalPlaces:{default:0},autoplay:{type:Boolean,default:!0},loop:{type:[Boolean,Number],default:!1},delay:{default:0},options:{default:void 0}},emits:["init","finished"],setup(o,{expose:n,emit:i}){const e=o;let t=a.ref(),s=a.ref(),l=0;const u=a.ref(!1);let h;function d(){if(!t.value){console.warn("[vue-countup-v3]","elRef can't found");return}l=0,u.value=!1;const p=Number(e.startVal),f=Number(e.endVal),m=Number(e.duration);if(s.value=new c(t.value,f,y({startVal:p,duration:m,decimalPlaces:e.decimalPlaces},e.options)),s.value.error){console.error("[vue-countup-v3]",s.value.error);return}i("init",s.value)}function g(){var f;s.value||d(),(f=s.value)==null||f.start(p),l++;function p(){typeof e.loop=="boolean"&&e.loop||e.loop>l?h=S(()=>{var w;(w=s.value)==null||w.reset(),g()},e.delay):u.value=!0}}function V(){h==null||h.cancel(),d(),g()}return a.watch([()=>e.startVal,()=>e.endVal],()=>{e.autoplay&&V()}),a.watch(u,p=>{p&&i("finished")}),a.onMounted(()=>{d(),e.autoplay&&g()}),a.onUnmounted(()=>{var p;h==null||h.cancel(),(p=s.value)==null||p.reset()}),n({init:d,restart:V}),(p,f)=>(a.openBlock(),a.createElementBlock("div",b,[a.renderSlot(p.$slots,"prefix"),a.createElementVNode("span",{ref_key:"elRef",ref:t},null,512),a.renderSlot(p.$slots,"suffix")]))}}))}(Vue);
