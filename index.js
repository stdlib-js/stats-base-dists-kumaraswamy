// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty;function t(r){return"number"==typeof r}function e(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function i(r,n,t){var i=!1,a=n-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+e(a):e(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var n,e,u;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!t(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==n)&&(u=4294967295+u+1),u<0?(e=(-u).toString(n),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(n),u||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===n&&(r.alternate&&(e="0x"+e),e=r.specifier===o.call(r.specifier)?o.call(e):a.call(e)),8===n&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function f(r){return"string"==typeof r}var c=Math.abs,s=String.prototype.toLowerCase,p=String.prototype.toUpperCase,l=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,h=/^(\d+)$/,v=/^(\d+)e/,d=/\.0$/,b=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var n,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((n=r.precision)>0&&(n-=1),e=i.toExponential(n)):e=i.toPrecision(r.precision),r.alternate||(e=l.call(e,w,"$1e"),e=l.call(e,b,"e"),e=l.call(e,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=l.call(e,y,"e+0$1"),e=l.call(e,g,"e-0$1"),r.alternate&&(e=l.call(e,h,"$1."),e=l.call(e,v,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===p.call(r.specifier)?p.call(e):s.call(e)}function N(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}function A(r,n,t){var e=n-r.length;return e<0?r:r=t?r+N(e):N(e)+r}var _=String.fromCharCode,E=isNaN,k=Array.isArray;function S(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function U(r){var n,t,e,a,o,c,s,p,l;if(!k(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",s=1,p=0;p<r.length;p++)if(f(e=r[p]))c+=e;else{if(n=void 0!==e.precision,!(e=S(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+e+"`.");for(e.mapping&&(s=e.mapping),t=e.flags,l=0;l<t.length;l++)switch(a=t.charAt(l)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===e.width){if(e.width=parseInt(arguments[s],10),s+=1,E(e.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[s],10),s+=1,E(e.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[s],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=n?e.precision:-1;break;case"c":if(!E(e.arg)){if((o=parseInt(e.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=E(o)?String(e.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=m(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=A(e.arg,e.width,e.padRight)),c+=e.arg||"",s+=1}return c}var j=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function x(r){var n,t,e,i;for(t=[],i=0,e=j.exec(r);e;)(n=r.slice(i,j.lastIndex-e[0].length)).length&&t.push(n),t.push(I(e)),i=j.lastIndex,e=j.exec(r);return(n=r.slice(i)).length&&t.push(n),t}function T(r){return"string"==typeof r}function F(r){var n,t,e;if(!T(r))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=x(r),(t=new Array(arguments.length))[0]=n,e=1;e<t.length;e++)t[e]=arguments[e];return U.apply(null,t)}var V=Object.prototype,O=V.toString,$=V.__defineGetter__,G=V.__defineSetter__,P=V.__lookupGetter__,H=V.__lookupSetter__,W=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,t){var e,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===O.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===O.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(P.call(r,n)||H.call(r,n)?(e=r.__proto__,r.__proto__=V,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(r,n,t.get),o&&G&&G.call(r,n,t.set),r};function C(r,n,t){W(r,n,{configurable:!1,enumerable:!0,writable:!1,value:t})}function L(r,n,t){W(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function M(r){return r!=r}var R=Math.floor;function Z(r){return R(r)===r}function q(r){return Z(r/2)}function X(r){return q(r>0?r-1:r+1)}var Y=Number.POSITIVE_INFINITY,z=Number,K=z.NEGATIVE_INFINITY;function B(r){return r===Y||r===K}var D=Math.sqrt;function J(r){return Math.abs(r)}var Q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function rr(){return Q&&"symbol"==typeof Symbol.toStringTag}var nr,tr=Object.prototype.toString,er=Object.prototype.hasOwnProperty,ir="function"==typeof Symbol?Symbol:void 0,ar="function"==typeof ir?ir.toStringTag:"",or=rr()?function(r){var n,t,e,i,a;if(null==r)return tr.call(r);t=r[ar],a=ar,n=null!=(i=r)&&er.call(i,a);try{r[ar]=void 0}catch(n){return tr.call(r)}return e=tr.call(r),n?r[ar]=t:delete r[ar],e}:function(r){return tr.call(r)},ur="function"==typeof Uint32Array,fr="function"==typeof Uint32Array?Uint32Array:null,cr="function"==typeof Uint32Array?Uint32Array:void 0;nr=function(){var r,n,t;if("function"!=typeof fr)return!1;try{n=new fr(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(ur&&t instanceof Uint32Array||"[object Uint32Array]"===or(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?cr:function(){throw new Error("not implemented")};var sr,pr=nr,lr="function"==typeof Float64Array,yr="function"==typeof Float64Array?Float64Array:null,gr="function"==typeof Float64Array?Float64Array:void 0;sr=function(){var r,n,t;if("function"!=typeof yr)return!1;try{n=new yr([1,3.14,-3.14,NaN]),t=n,r=(lr&&t instanceof Float64Array||"[object Float64Array]"===or(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?gr:function(){throw new Error("not implemented")};var hr,vr=sr,dr="function"==typeof Uint8Array,br="function"==typeof Uint8Array?Uint8Array:null,wr="function"==typeof Uint8Array?Uint8Array:void 0;hr=function(){var r,n,t;if("function"!=typeof br)return!1;try{n=new br(n=[1,3.14,-3.14,256,257]),t=n,r=(dr&&t instanceof Uint8Array||"[object Uint8Array]"===or(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?wr:function(){throw new Error("not implemented")};var mr,Nr=hr,Ar="function"==typeof Uint16Array,_r="function"==typeof Uint16Array?Uint16Array:null,Er="function"==typeof Uint16Array?Uint16Array:void 0;mr=function(){var r,n,t;if("function"!=typeof _r)return!1;try{n=new _r(n=[1,3.14,-3.14,65536,65537]),t=n,r=(Ar&&t instanceof Uint16Array||"[object Uint16Array]"===or(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Er:function(){throw new Error("not implemented")};var kr,Sr={uint16:mr,uint8:Nr};(kr=new Sr.uint16(1))[0]=4660;var Ur,jr,Ir=52===new Sr.uint8(kr.buffer)[0];!0===Ir?(Ur=1,jr=0):(Ur=0,jr=1);var xr={HIGH:Ur,LOW:jr},Tr=new vr(1),Fr=new pr(Tr.buffer),Vr=xr.HIGH,Or=xr.LOW;function $r(r,n,t,e){return Tr[0]=r,n[e]=Fr[Vr],n[e+t]=Fr[Or],n}function Gr(r){return $r(r,[0,0],1,0)}L(Gr,"assign",$r);var Pr=!0===Ir?0:1,Hr=new vr(1),Wr=new pr(Hr.buffer);function Cr(r,n){return Hr[0]=r,Wr[Pr]=n>>>0,Hr[0]}function Lr(r){return 0|r}var Mr,Rr,Zr=2147483647,qr=!0===Ir?1:0,Xr=new vr(1),Yr=new pr(Xr.buffer);function zr(r){return Xr[0]=r,Yr[qr]}!0===Ir?(Mr=1,Rr=0):(Mr=0,Rr=1);var Kr={HIGH:Mr,LOW:Rr},Br=new vr(1),Dr=new pr(Br.buffer),Jr=Kr.HIGH,Qr=Kr.LOW;function rn(r,n){return Dr[Jr]=r,Dr[Qr]=n,Br[0]}var nn=[0,0];function tn(r,n){var t,e;return Gr.assign(r,nn,1,0),t=nn[0],t&=Zr,e=zr(n),rn(t|=e&=2147483648,nn[1])}var en=!0===Ir?1:0,an=new vr(1),on=new pr(an.buffer);function un(r,n){return an[0]=r,on[en]=n>>>0,an[0]}var fn=1023,cn=1048576,sn=[1,1.5],pn=[0,.5849624872207642],ln=[0,1.350039202129749e-8];function yn(r,n,t,e){return M(r)||B(r)?(n[e]=r,n[e+t]=0,n):0!==r&&J(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}L((function(r){return yn(r,[0,0],1,0)}),"assign",yn);var gn=[0,0],hn=[0,0];function vn(r,n){var t,e;return 0===n||0===r||M(r)||B(r)?r:(yn(r,gn,1,0),n+=gn[1],n+=function(r){var n=zr(r);return(n=(2146435072&n)>>>20)-fn|0}(r=gn[0]),n<-1074?tn(0,r):n>1023?r<0?K:Y:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Gr.assign(r,hn,1,0),t=hn[0],t&=2148532223,e*rn(t|=n+fn<<20,hn[1])))}var dn=1048575,bn=1048576,wn=1083179008,mn=1e300,Nn=1e-300,An=[0,0],_n=[0,0];function En(r,n){var t,e,i,a,o,u,f,c,s,p,l,y,g,h;if(M(r)||M(n))return NaN;if(Gr.assign(n,An,1,0),o=An[0],0===An[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return D(r);if(-.5===n)return 1/D(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(B(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:J(r)<1==(n===Y)?0:Y}(r,n)}if(Gr.assign(r,An,1,0),a=An[0],0===An[1]){if(0===a)return function(r,n){return n===K?Y:n===Y?0:n>0?X(n)?r:0:X(n)?tn(Y,r):Y}(r,n);if(1===r)return 1;if(-1===r&&X(n))return-1;if(B(r))return r===K?En(-0,-n):n<0?0:Y}if(r<0&&!1===Z(n))return(r-r)/(r-r);if(i=J(r),t=a&Zr|0,e=o&Zr|0,f=o>>>31|0,u=(u=a>>>31|0)&&X(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(zr(r)&Zr)<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===f?u*mn*mn:u*Nn*Nn;if(t>1072693248)return 0===f?u*mn*mn:u*Nn*Nn;l=function(r,n){var t,e,i,a,o,u;return t=(o=1.9259629911266175e-8*(i=n-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((e=Cr(e=(a=1.4426950216293335*i)+o,0))-a),r[0]=e,r[1]=t,r}(_n,i)}else l=function(r,n,t){var e,i,a,o,u,f,c,s,p,l,y,g,h,v,d,b,w,m,N,A,_;return m=0,t<cn&&(m-=53,t=zr(n*=9007199254740992)),m+=(t>>20)-fn|0,t=1072693248|(N=1048575&t|0),N<=235662?A=0:N<767610?A=1:(A=0,m+=1,t-=cn),o=Cr(i=(b=(n=un(n,t))-(c=sn[A]))*(w=1/(n+c)),0),e=524288+(t>>1|536870912),f=un(0,e+=A<<18),d=(a=i*i)*a*(0===(_=a)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=Cr(f=3+(a=o*o)+(d+=(u=w*(b-o*f-o*(n-(f-c))))*(o+i)),0),h=(y=-7.028461650952758e-9*(p=Cr(p=(b=o*f)+(w=u*f+(d-(f-3-a))*i),0))+.9617966939259756*(w-(p-b))+ln[A])-((g=Cr(g=(l=.9617967009544373*p)+y+(s=pn[A])+(v=m),0))-v-s-l),r[0]=g,r[1]=h,r}(_n,i,t);if(y=(p=(n-(c=Cr(n,0)))*l[0]+n*l[1])+(s=c*l[0]),Gr.assign(y,An,1,0),g=Lr(An[0]),h=Lr(An[1]),g>=wn){if(0!=(g-wn|h))return u*mn*mn;if(p+8008566259537294e-32>y-s)return u*mn*mn}else if((g&Zr)>=1083231232){if(0!=(g-3230714880|h))return u*Nn*Nn;if(p<=y-s)return u*Nn*Nn}return y=function(r,n,t){var e,i,a,o,u,f,c,s,p,l;return p=((s=r&Zr|0)>>20)-fn|0,c=0,s>1071644672&&(i=un(0,((c=r+(bn>>p+1)>>>0)&~(dn>>(p=((c&Zr)>>20)-fn|0)))>>>0),c=(c&dn|bn)>>20-p>>>0,r<0&&(c=-c),n-=i),r=Lr(r=zr(f=1-((f=(a=.6931471824645996*(i=Cr(i=t+n,0)))+(o=.6931471805599453*(t-(i-n))+-1.904654299957768e-9*i))*(e=f-(i=f*f)*(0===(l=i)?.16666666666666602:.16666666666666602+l*(l*(6613756321437934e-20+l*(4.1381367970572385e-8*l-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<20>>>0)>>20<=0?vn(f,c):un(f,r)}(g,s,p),u*y}function kn(r,n,t){return M(r)||M(n)||M(t)||n<=0||t<=0?NaN:r<=0?0:r>=1?1:1-En(1-En(r,n),t)}function Sn(r){return function(){return r}}function Un(r,n,t){W(r,n,{configurable:!1,enumerable:!1,get:t})}function jn(r){return"number"==typeof r}L(kn,"factory",(function(r,n){return M(r)||M(n)||r<=0||n<=0?Sn(NaN):function(t){return M(t)?NaN:t<=0?0:t>=1?1:1-En(1-En(t,r),n)}}));var In=z.prototype.toString,xn=rr();function Tn(r){return"object"==typeof r&&(r instanceof z||(xn?function(r){try{return In.call(r),!0}catch(r){return!1}}(r):"[object Number]"===or(r)))}function Fn(r){return jn(r)||Tn(r)}function Vn(r){return jn(r)&&r>0}function On(r){return Tn(r)&&r.valueOf()>0}function $n(r){return Vn(r)||On(r)}L(Fn,"isPrimitive",jn),L(Fn,"isObject",Tn),L($n,"isPrimitive",Vn),L($n,"isObject",On);var Gn=.6931471803691238,Pn=1.9082149292705877e-10,Hn=Math.ceil;function Wn(r){return r<0?Hn(r):R(r)}var Cn=1.4426950408889634,Ln=1/(1<<28);function Mn(r){var n;return M(r)||r===Y?r:r===K?0:r>709.782712893384?Y:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Ln?1+r:function(r,n,t){var e,i,a,o;return vn(1-(n-(e=r-n)*(a=e-(i=e*e)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),t)}(r-.6931471803691238*(n=Wn(r<0?Cn*r-.5:Cn*r+.5)),1.9082149292705877e-10*n,n)}var Rn=2220446049250313e-31;function Zn(r){var n,t;return 0===r?1/0:((r<0?-r:r)<=1?(n=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+4624429436045379e-20*r))))))))),t=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+1*r)))))))))):(n=4624429436045379e-20+(r=1/r)*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+709811.662581658*r))))))))),t=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+0*r)))))))))),n/t)}var qn=10.900511;function Xn(r,n){var t,e,i,a,o,u,f;return M(r)||M(n)||r<0||n<0?NaN:1===n?1/r:1===r?1/n:(f=r+n)<Rn?(o=f/r,o/=n):f===r&&n<Rn?1/n:f===n&&r<Rn?1/r:(r<n&&(u=n,n=r,r=u),e=r+qn-.5,i=n+qn-.5,a=f+qn-.5,o=Zn(r)*(Zn(n)/Zn(f)),J(n*(t=r-.5-n))<100*a&&r>100?o*=Mn(t*function(r){var n,t,e,i,a,o,u,f,c,s;if(r<-1||M(r))return NaN;if(-1===r)return K;if(r===Y)return r;if(0===r)return r;if(s=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(s=0,i=r,t=1)}return 0!==s&&(e<9007199254740992?(a=(s=((t=zr(c=1+r))>>20)-fn)>0?1-(c-r):r-(c-1),a/=c):(s=((t=zr(c=r))>>20)-fn,a=0),(t&=1048575)<434334?c=un(c,1072693248|t):(s+=1,c=un(c,1071644672|t),t=1048576-t>>2),i=c-1),n=.5*i*i,0===t?0===i?s*Gn+(a+=s*Pn):s*Gn-((f=n*(1-.6666666666666666*i))-(s*Pn+a)-i):(f=(u=(o=i/(2+i))*o)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===s?i-(n-o*(n+f)):s*Gn-(n-(o*(n+f)+(s*Pn+a))-i))}(-n/a)):o*=En(e/a,t),o*=En(a>1e10?e/a*(i/a):e*i/(a*a),n),o*=D(2.718281828459045/i))}function Yn(r,n){var t,e,i,a,o,u;return M(r)||r<=0||M(n)||n<=0?NaN:(a=n*Xn(1+1/r,n),o=n*Xn(1+2/r,n),u=n*Xn(1+3/r,n),e=n*Xn(1+4/r,n)-4*u*a+6*o*(i=a*a)-3*i*i,e/=(t=o-a*a)*t)}function zn(r,n){return M(r)||r<=0||M(n)||n<=0?NaN:n*Xn(1+1/r,n)}function Kn(r,n){return M(r)||r<1||M(n)||n<1||1===r&&1===n?NaN:En((r-1)/(r*n-1),1/r)}function Bn(r,n){var t,e,i;return M(r)||r<=0||M(n)||n<=0?NaN:(e=n*Xn(1+1/r,n),i=n*Xn(1+2/r,n),(n*Xn(1+3/r,n)-3*e*(t=i-e*e)-e*e*e)/En(t,1.5))}function Dn(r,n){var t,e;return M(r)||r<=0||M(n)||n<=0?NaN:(t=n*Xn(1+1/r,n),e=n*Xn(1+2/r,n),D(e-t*t))}function Jn(r,n){var t;return M(r)||r<=0||M(n)||n<=0?NaN:(t=n*Xn(1+1/r,n),n*Xn(1+2/r,n)-t*t)}var Qn=.6931471803691238,rt=1.9082149292705877e-10,nt=1048575;function tt(r){var n,t,e,i,a,o,u,f,c,s,p,l;return 0===r?K:M(r)||r<0?NaN:(a=0,(t=zr(r))<1048576&&(a-=54,t=zr(r*=0x40000000000000)),t>=2146435072?r+r:(a+=(t>>20)-fn|0,a+=(f=614244+(t&=nt)&1048576|0)>>20|0,u=(r=un(r,t|1072693248^f))-1,(nt&2+t)<3?0===u?0===a?0:a*Qn+a*rt:(o=u*u*(.5-.3333333333333333*u),0===a?u-o:a*Qn-(o-a*rt-u)):(f=t-398458|0,c=440401-t|0,i=(p=(l=(s=u/(2+u))*s)*l)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=l*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),o=e+i,(f|=c)>0?(n=.5*u*u,0===a?u-(n-s*(n+o)):a*Qn-(n-(s*(n+o)+a*rt)-u)):0===a?u-s*(u-o):a*Qn-(s*(u-o)-a*rt-u))))}function et(r,n,t){return M(r)||M(n)||M(t)||n<=0||t<=0?NaN:r<=0?K:r>=1?0:tt(1-En(1-En(r,n),t))}function it(r,n,t){var e;return M(r)||M(n)||M(t)||n<=0||t<=0?NaN:r<=0||r>=1?K:(e=tt(n*t),e+=(n-1)*tt(r),e+=(t-1)*tt(1-En(r,n)))}function at(r,n,t){return M(r)||M(n)||M(t)||n<=0||t<=0?NaN:r<=0||r>=1?0:n*t*En(r,n-1)*En(1-En(r,n),t-1)}function ot(r,n,t){return M(r)||M(n)||M(t)||n<=0||t<=0||r<0||r>1?NaN:En(1-En(1-r,1/t),1/n)}function ut(){var r,n;if(!(this instanceof ut))return 0===arguments.length?new ut:new ut(arguments[0],arguments[1]);if(arguments.length){if(n=arguments[1],!Vn(r=arguments[0]))throw new TypeError(F("invalid argument. First shape parameter must be a positive number. Value: `%s`.",r));if(!Vn(n))throw new TypeError(F("invalid argument. Second shape parameter must be a positive number. Value: `%s`.",n))}else r=1,n=1;return W(this,"a",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!Vn(n))throw new TypeError(F("invalid assignment. Must be a positive number. Value: `%s`.",n));r=n}}),W(this,"b",{configurable:!1,enumerable:!0,get:function(){return n},set:function(r){if(!Vn(r))throw new TypeError(F("invalid assignment. Must be a positive number. Value: `%s`.",r));n=r}}),this}L(et,"factory",(function(r,n){return M(r)||M(n)||r<=0||n<=0?Sn(NaN):function(t){return M(t)?NaN:t<=0?K:t>=1?0:tt(1-En(1-En(t,r),n))}})),L(it,"factory",(function(r,n){return M(r)||M(n)||r<=0||n<=0?Sn(NaN):function(t){var e;return M(t)?NaN:t<=0||t>=1?K:(e=tt(r*n),e+=(r-1)*tt(t),e+=(n-1)*tt(1-En(t,r)))}})),L(at,"factory",(function(r,n){return M(r)||M(n)||r<=0||n<=0?Sn(NaN):function(t){return M(t)?NaN:t<=0||t>=1?0:r*n*En(t,r-1)*En(1-En(t,r),n-1)}})),L(ot,"factory",(function(r,n){return M(r)||M(n)||r<=0||n<=0?Sn(NaN):function(t){return M(t)||t<0||t>1?NaN:En(1-En(1-t,1/n),1/r)}})),Un(ut.prototype,"kurtosis",(function(){return Yn(this.a,this.b)})),Un(ut.prototype,"mean",(function(){return zn(this.a,this.b)})),Un(ut.prototype,"mode",(function(){return Kn(this.a,this.b)})),Un(ut.prototype,"skewness",(function(){return Bn(this.a,this.b)})),Un(ut.prototype,"stdev",(function(){return Dn(this.a,this.b)})),Un(ut.prototype,"variance",(function(){return Jn(this.a,this.b)})),L(ut.prototype,"cdf",(function(r){return kn(r,this.a,this.b)})),L(ut.prototype,"logcdf",(function(r){return et(r,this.a,this.b)})),L(ut.prototype,"logpdf",(function(r){return it(r,this.a,this.b)})),L(ut.prototype,"pdf",(function(r){return at(r,this.a,this.b)})),L(ut.prototype,"quantile",(function(r){return ot(r,this.a,this.b)}));var ft={};return C(ft,"cdf",kn),C(ft,"Kumaraswamy",ut),C(ft,"kurtosis",Yn),C(ft,"logcdf",et),C(ft,"logpdf",it),C(ft,"mean",zn),C(ft,"median",(function(r,n){return M(r)||r<=0||M(n)||n<=0?NaN:En(1-En(2,-1/n),1/r)})),C(ft,"mode",Kn),C(ft,"pdf",at),C(ft,"quantile",ot),C(ft,"skewness",Bn),C(ft,"stdev",Dn),C(ft,"variance",Jn),ft},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).kumaraswamy=n();
//# sourceMappingURL=index.js.map
