// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty;function t(r){return"number"==typeof r}function e(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function i(r,n,t){var i=!1,a=n-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+e(a):e(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var n,e,u;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!t(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==n)&&(u=4294967295+u+1),u<0?(e=(-u).toString(n),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(n),u||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===n&&(r.alternate&&(e="0x"+e),e=r.specifier===o.call(r.specifier)?o.call(e):a.call(e)),8===n&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}var f=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,l=/e\+(\d)$/,y=/e-(\d)$/,g=/^(\d+)$/,h=/^(\d+)e/,d=/\.0$/,v=/\.0*e/,b=/(\..*[^0])0*e/;function w(r){var n,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((n=r.precision)>0&&(n-=1),e=i.toExponential(n)):e=i.toPrecision(r.precision),r.alternate||(e=p.call(e,b,"$1e"),e=p.call(e,v,"e"),e=p.call(e,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=p.call(e,l,"e+0$1"),e=p.call(e,y,"e-0$1"),r.alternate&&(e=p.call(e,g,"$1."),e=p.call(e,h,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===s.call(r.specifier)?s.call(e):c.call(e)}function m(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}var N=String.fromCharCode,A=isNaN,_=Array.isArray;function E(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function k(r){var n,t,e,a,o,f,c,s,p,l,y,g,h;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,s=0;s<r.length;s++)if("string"==typeof(e=r[s]))f+=e;else{if(n=void 0!==e.precision,!(e=E(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+e+"`.");for(e.mapping&&(c=e.mapping),t=e.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===e.width){if(e.width=parseInt(arguments[c],10),c+=1,A(e.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[c],10),c+=1,A(e.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[c],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=n?e.precision:-1;break;case"c":if(!A(e.arg)){if((o=parseInt(e.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=A(o)?String(e.arg):N(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=w(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=(l=e.arg,y=e.width,g=e.padRight,h=void 0,(h=y-l.length)<0?l:l=g?l+m(h):m(h)+l)),f+=e.arg||"",c+=1}return f}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function U(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function j(r){var n,t,e,i;for(t=[],i=0,e=S.exec(r);e;)(n=r.slice(i,S.lastIndex-e[0].length)).length&&t.push(n),t.push(U(e)),i=S.lastIndex,e=S.exec(r);return(n=r.slice(i)).length&&t.push(n),t}function I(r){var n,t;if("string"!=typeof r)throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=[j(r)],t=1;t<arguments.length;t++)n.push(arguments[t]);return k.apply(null,n)}var x=Object.prototype,T=x.toString,F=x.__defineGetter__,V=x.__defineSetter__,O=x.__lookupGetter__,$=x.__lookupSetter__,G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,t){var e,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===T.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===T.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(O.call(r,n)||$.call(r,n)?(e=r.__proto__,r.__proto__=x,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&F&&F.call(r,n,t.get),o&&V&&V.call(r,n,t.set),r};function P(r,n,t){G(r,n,{configurable:!1,enumerable:!0,writable:!1,value:t})}function H(r,n,t){G(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function W(r){return r!=r}var C=Math.floor;function L(r){return C(r)===r}function M(r){return L(r/2)}function R(r){return M(r>0?r-1:r+1)}var Z=Number.POSITIVE_INFINITY,q=Number,X=q.NEGATIVE_INFINITY;function Y(r){return r===Z||r===X}var z=Math.sqrt;function K(r){return Math.abs(r)}var B="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function D(){return B&&"symbol"==typeof Symbol.toStringTag}var J,Q=Object.prototype.toString,rr=Object.prototype.hasOwnProperty,nr="function"==typeof Symbol?Symbol:void 0,tr="function"==typeof nr?nr.toStringTag:"",er=D()?function(r){var n,t,e,i,a;if(null==r)return Q.call(r);t=r[tr],a=tr,n=null!=(i=r)&&rr.call(i,a);try{r[tr]=void 0}catch(n){return Q.call(r)}return e=Q.call(r),n?r[tr]=t:delete r[tr],e}:function(r){return Q.call(r)},ir="function"==typeof Uint32Array,ar="function"==typeof Uint32Array?Uint32Array:null,or="function"==typeof Uint32Array?Uint32Array:void 0;J=function(){var r,n,t;if("function"!=typeof ar)return!1;try{n=new ar(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(ir&&t instanceof Uint32Array||"[object Uint32Array]"===er(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?or:function(){throw new Error("not implemented")};var ur,fr=J,cr="function"==typeof Float64Array,sr="function"==typeof Float64Array?Float64Array:null,pr="function"==typeof Float64Array?Float64Array:void 0;ur=function(){var r,n,t;if("function"!=typeof sr)return!1;try{n=new sr([1,3.14,-3.14,NaN]),t=n,r=(cr&&t instanceof Float64Array||"[object Float64Array]"===er(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var lr,yr=ur,gr="function"==typeof Uint8Array,hr="function"==typeof Uint8Array?Uint8Array:null,dr="function"==typeof Uint8Array?Uint8Array:void 0;lr=function(){var r,n,t;if("function"!=typeof hr)return!1;try{n=new hr(n=[1,3.14,-3.14,256,257]),t=n,r=(gr&&t instanceof Uint8Array||"[object Uint8Array]"===er(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?dr:function(){throw new Error("not implemented")};var vr,br=lr,wr="function"==typeof Uint16Array,mr="function"==typeof Uint16Array?Uint16Array:null,Nr="function"==typeof Uint16Array?Uint16Array:void 0;vr=function(){var r,n,t;if("function"!=typeof mr)return!1;try{n=new mr(n=[1,3.14,-3.14,65536,65537]),t=n,r=(wr&&t instanceof Uint16Array||"[object Uint16Array]"===er(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Nr:function(){throw new Error("not implemented")};var Ar,_r={uint16:vr,uint8:br};(Ar=new _r.uint16(1))[0]=4660;var Er,kr,Sr=52===new _r.uint8(Ar.buffer)[0];!0===Sr?(Er=1,kr=0):(Er=0,kr=1);var Ur={HIGH:Er,LOW:kr},jr=new yr(1),Ir=new fr(jr.buffer),xr=Ur.HIGH,Tr=Ur.LOW;function Fr(r,n,t,e){return jr[0]=r,n[e]=Ir[xr],n[e+t]=Ir[Tr],n}function Vr(r){return Fr(r,[0,0],1,0)}H(Vr,"assign",Fr);var Or=!0===Sr?0:1,$r=new yr(1),Gr=new fr($r.buffer);function Pr(r,n){return $r[0]=r,Gr[Or]=n>>>0,$r[0]}function Hr(r){return 0|r}var Wr,Cr,Lr=2147483647,Mr=2147483648,Rr=!0===Sr?1:0,Zr=new yr(1),qr=new fr(Zr.buffer);function Xr(r){return Zr[0]=r,qr[Rr]}!0===Sr?(Wr=1,Cr=0):(Wr=0,Cr=1);var Yr={HIGH:Wr,LOW:Cr},zr=new yr(1),Kr=new fr(zr.buffer),Br=Yr.HIGH,Dr=Yr.LOW;function Jr(r,n){return Kr[Br]=r,Kr[Dr]=n,zr[0]}var Qr=[0,0];function rn(r,n){var t,e;return Vr.assign(r,Qr,1,0),t=Qr[0],t&=Lr,e=Xr(n),Jr(t|=e&=Mr,Qr[1])}var nn=1072693247,tn=1e300,en=1e-300,an=!0===Sr?1:0,on=new yr(1),un=new fr(on.buffer);function fn(r,n){return on[0]=r,un[an]=n>>>0,on[0]}var cn=1023,sn=1048575,pn=1048576,ln=1072693248,yn=536870912,gn=524288,hn=20,dn=9007199254740992,vn=.9617966939259756,bn=.9617967009544373,wn=-7.028461650952758e-9,mn=[1,1.5],Nn=[0,.5849624872207642],An=[0,1.350039202129749e-8],_n=1.4426950408889634,En=1.4426950216293335,kn=1.9259629911266175e-8,Sn=1023,Un=-1023,jn=-1074,In=22250738585072014e-324,xn=4503599627370496;function Tn(r,n,t,e){return W(r)||Y(r)?(n[e]=r,n[e+t]=0,n):0!==r&&K(r)<In?(n[e]=r*xn,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}H((function(r){return Tn(r,[0,0],1,0)}),"assign",Tn);var Fn=2146435072,Vn=2220446049250313e-31,On=2148532223,$n=[0,0],Gn=[0,0];function Pn(r,n){var t,e;return 0===n||0===r||W(r)||Y(r)?r:(Tn(r,$n,1,0),r=$n[0],n+=$n[1],n+=function(r){var n=Xr(r);return(n=(n&Fn)>>>20)-cn|0}(r),n<jn?rn(0,r):n>Sn?r<0?X:Z:(n<=Un?(n+=52,e=Vn):e=1,Vr.assign(r,Gn,1,0),t=Gn[0],t&=On,e*Jr(t|=n+cn<<20,Gn[1])))}var Hn=.6931471805599453,Wn=1048575,Cn=1048576,Ln=1071644672,Mn=20,Rn=.6931471824645996,Zn=-1.904654299957768e-9,qn=1072693247,Xn=1105199104,Yn=1139802112,zn=1083179008,Kn=1072693248,Bn=1083231232,Dn=3230714880,Jn=31,Qn=1e300,rt=1e-300,nt=8008566259537294e-32,tt=[0,0],et=[0,0];function it(r,n){var t,e,i,a,o,u,f,c,s,p,l,y,g,h;if(W(r)||W(n))return NaN;if(Vr.assign(n,tt,1,0),o=tt[0],0===tt[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return z(r);if(-.5===n)return 1/z(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(Y(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:K(r)<1==(n===Z)?0:Z}(r,n)}if(Vr.assign(r,tt,1,0),a=tt[0],0===tt[1]){if(0===a)return function(r,n){return n===X?Z:n===Z?0:n>0?R(n)?r:0:R(n)?rn(Z,r):Z}(r,n);if(1===r)return 1;if(-1===r&&R(n))return-1;if(Y(r))return r===X?it(-0,-n):n<0?0:Z}if(r<0&&!1===L(n))return(r-r)/(r-r);if(i=K(r),t=a&Lr|0,e=o&Lr|0,f=o>>>Jn|0,u=(u=a>>>Jn|0)&&R(n)?-1:1,e>Xn){if(e>Yn)return function(r,n){return(Xr(r)&Lr)<=nn?n<0?tn*tn:en*en:n>0?tn*tn:en*en}(r,n);if(t<qn)return 1===f?u*Qn*Qn:u*rt*rt;if(t>Kn)return 0===f?u*Qn*Qn:u*rt*rt;l=function(r,n){var t,e,i,a,o,u,f;return a=(i=n-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),t=(u=i*kn-a*_n)-((e=Pr(e=(o=En*i)+u,0))-o),r[0]=e,r[1]=t,r}(et,i)}else l=function(r,n,t){var e,i,a,o,u,f,c,s,p,l,y,g,h,d,v,b,w,m,N,A,_;return m=0,t<pn&&(m-=53,t=Xr(n*=dn)),m+=(t>>hn)-cn|0,t=(N=t&sn|0)|ln|0,N<=235662?A=0:N<767610?A=1:(A=0,m+=1,t-=pn),o=Pr(i=(b=(n=fn(n,t))-(c=mn[A]))*(w=1/(n+c)),0),e=(t>>1|yn)+gn,f=fn(0,e+=A<<18),v=(a=i*i)*a*(0===(_=a)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=Pr(f=3+(a=o*o)+(v+=(u=w*(b-o*f-o*(n-(f-c))))*(o+i)),0),p=Pr(p=(b=o*f)+(w=u*f+(v-(f-3-a))*i),0),l=bn*p,h=(y=wn*p+(w-(p-b))*vn+An[A])-((g=Pr(g=l+y+(s=Nn[A])+(d=m),0))-d-s-l),r[0]=g,r[1]=h,r}(et,i,t);if(y=(p=(n-(c=Pr(n,0)))*l[0]+n*l[1])+(s=c*l[0]),Vr.assign(y,tt,1,0),g=Hr(tt[0]),h=Hr(tt[1]),g>=zn){if(0!=(g-zn|h))return u*Qn*Qn;if(p+nt>y-s)return u*Qn*Qn}else if((g&Lr)>=Bn){if(0!=(g-Dn|h))return u*rt*rt;if(p<=y-s)return u*rt*rt}return y=function(r,n,t){var e,i,a,o,u,f,c,s,p,l;return p=((s=r&Lr|0)>>Mn)-cn|0,c=0,s>Ln&&(i=fn(0,((c=r+(Cn>>p+1)>>>0)&~(Wn>>(p=((c&Lr)>>Mn)-cn|0)))>>>0),c=(c&Wn|Cn)>>Mn-p>>>0,r<0&&(c=-c),n-=i),r=Hr(r=Xr(f=1-((f=(a=(i=Pr(i=t+n,0))*Rn)+(o=(t-(i-n))*Hn+i*Zn))*(e=f-(i=f*f)*(0===(l=i)?.16666666666666602:.16666666666666602+l*(l*(6613756321437934e-20+l*(4.1381367970572385e-8*l-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<Mn>>>0)>>Mn<=0?Pn(f,c):fn(f,r)}(g,s,p),u*y}function at(r,n,t){return W(r)||W(n)||W(t)||n<=0||t<=0?NaN:r<=0?0:r>=1?1:1-it(1-it(r,n),t)}function ot(r){return function(){return r}}function ut(r,n,t){G(r,n,{configurable:!1,enumerable:!1,get:t})}function ft(r){return"number"==typeof r}H(at,"factory",(function(r,n){return W(r)||W(n)||r<=0||n<=0?ot(NaN):function(t){return W(t)?NaN:t<=0?0:t>=1?1:1-it(1-it(t,r),n)}}));var ct=q.prototype.toString,st=D();function pt(r){return"object"==typeof r&&(r instanceof q||(st?function(r){try{return ct.call(r),!0}catch(r){return!1}}(r):"[object Number]"===er(r)))}function lt(r){return ft(r)||pt(r)}function yt(r){return ft(r)&&r>0}function gt(r){return pt(r)&&r.valueOf()>0}function ht(r){return yt(r)||gt(r)}H(lt,"isPrimitive",ft),H(lt,"isObject",pt),H(ht,"isPrimitive",yt),H(ht,"isObject",gt);var dt=.6931471803691238,vt=1.9082149292705877e-10,bt=.41421356237309503,wt=-.2928932188134525,mt=1.862645149230957e-9,Nt=5551115123125783e-32,At=9007199254740992,_t=.6666666666666666,Et=Math.ceil;function kt(r){return r<0?Et(r):C(r)}var St=.6931471803691238,Ut=1.9082149292705877e-10,jt=1.4426950408889634,It=709.782712893384,xt=-745.1332191019411,Tt=1/(1<<28),Ft=-Tt;function Vt(r){var n;return W(r)||r===Z?r:r===X?0:r>It?Z:r<xt?0:r>Ft&&r<Tt?1+r:function(r,n,t){var e,i,a,o;return Pn(1-(n-(e=r-n)*(a=e-(i=e*e)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),t)}(r-(n=kt(r<0?jt*r-.5:jt*r+.5))*St,n*Ut,n)}var Ot=2.718281828459045,$t=2220446049250313e-31;function Gt(r){var n,t;return 0===r?1/0:((r<0?-r:r)<=1?(n=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+4624429436045379e-20*r))))))))),t=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+1*r)))))))))):(n=4624429436045379e-20+(r=1/r)*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+709811.662581658*r))))))))),t=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+0*r)))))))))),n/t)}var Pt=10.900511;function Ht(r,n){var t,e,i,a,o,u,f;return W(r)||W(n)||r<0||n<0?NaN:1===n?1/r:1===r?1/n:(f=r+n)<$t?(o=f/r,o/=n):f===r&&n<$t?1/n:f===n&&r<$t?1/r:(r<n&&(u=n,n=r,r=u),e=r+Pt-.5,i=n+Pt-.5,a=f+Pt-.5,o=Gt(r)*(Gt(n)/Gt(f)),K(n*(t=r-.5-n))<100*a&&r>100?o*=Vt(t*function(r){var n,t,e,i,a,o,u,f,c,s;if(r<-1||W(r))return NaN;if(-1===r)return X;if(r===Z)return r;if(0===r)return r;if(s=1,(e=r<0?-r:r)<bt){if(e<mt)return e<Nt?r:r-r*r*.5;r>wt&&(s=0,i=r,t=1)}return 0!==s&&(e<At?(a=(s=((t=Xr(c=1+r))>>20)-cn)>0?1-(c-r):r-(c-1),a/=c):(s=((t=Xr(c=r))>>20)-cn,a=0),(t&=1048575)<434334?c=fn(c,1072693248|t):(s+=1,c=fn(c,1071644672|t),t=1048576-t>>2),i=c-1),n=.5*i*i,0===t?0===i?s*dt+(a+=s*vt):s*dt-((f=n*(1-_t*i))-(s*vt+a)-i):(f=(u=(o=i/(2+i))*o)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===s?i-(n-o*(n+f)):s*dt-(n-(o*(n+f)+(s*vt+a))-i))}(-n/a)):o*=it(e/a,t),o*=it(a>1e10?e/a*(i/a):e*i/(a*a),n),o*=z(Ot/i))}function Wt(r,n){var t,e,i,a,o,u;return W(r)||r<=0||W(n)||n<=0?NaN:(a=n*Ht(1+1/r,n),o=n*Ht(1+2/r,n),u=n*Ht(1+3/r,n),e=n*Ht(1+4/r,n)-4*u*a+6*o*(i=a*a)-3*i*i,e/=(t=o-a*a)*t)}function Ct(r,n){return W(r)||r<=0||W(n)||n<=0?NaN:n*Ht(1+1/r,n)}function Lt(r,n){return W(r)||r<1||W(n)||n<1||1===r&&1===n?NaN:it((r-1)/(r*n-1),1/r)}function Mt(r,n){var t,e,i;return W(r)||r<=0||W(n)||n<=0?NaN:(e=n*Ht(1+1/r,n),i=n*Ht(1+2/r,n),(n*Ht(1+3/r,n)-3*e*(t=i-e*e)-e*e*e)/it(t,1.5))}function Rt(r,n){var t,e;return W(r)||r<=0||W(n)||n<=0?NaN:(t=n*Ht(1+1/r,n),e=n*Ht(1+2/r,n),z(e-t*t))}function Zt(r,n){var t;return W(r)||r<=0||W(n)||n<=0?NaN:(t=n*Ht(1+1/r,n),n*Ht(1+2/r,n)-t*t)}var qt=.6931471803691238,Xt=1.9082149292705877e-10,Yt=0x40000000000000,zt=.3333333333333333,Kt=1048575,Bt=2146435072,Dt=1048576,Jt=1072693248;function Qt(r){var n,t,e,i,a,o,u,f,c,s,p,l;return 0===r?X:W(r)||r<0?NaN:(a=0,(t=Xr(r))<Dt&&(a-=54,t=Xr(r*=Yt)),t>=Bt?r+r:(a+=(t>>20)-cn|0,a+=(f=614244+(t&=Kt)&1048576|0)>>20|0,u=(r=fn(r,t|f^Jt))-1,(Kt&2+t)<3?0===u?0===a?0:a*qt+a*Xt:(o=u*u*(.5-zt*u),0===a?u-o:a*qt-(o-a*Xt-u)):(f=t-398458|0,c=440401-t|0,i=(p=(l=(s=u/(2+u))*s)*l)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=l*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),o=e+i,(f|=c)>0?(n=.5*u*u,0===a?u-(n-s*(n+o)):a*qt-(n-(s*(n+o)+a*Xt)-u)):0===a?u-s*(u-o):a*qt-(s*(u-o)-a*Xt-u))))}function re(r,n,t){return W(r)||W(n)||W(t)||n<=0||t<=0?NaN:r<=0?X:r>=1?0:Qt(1-it(1-it(r,n),t))}function ne(r,n,t){var e;return W(r)||W(n)||W(t)||n<=0||t<=0?NaN:r<=0||r>=1?X:(e=Qt(n*t),e+=(n-1)*Qt(r),e+=(t-1)*Qt(1-it(r,n)))}function te(r,n,t){return W(r)||W(n)||W(t)||n<=0||t<=0?NaN:r<=0||r>=1?0:n*t*it(r,n-1)*it(1-it(r,n),t-1)}function ee(r,n,t){return W(r)||W(n)||W(t)||n<=0||t<=0||r<0||r>1?NaN:it(1-it(1-r,1/t),1/n)}function ie(){var r,n;if(!(this instanceof ie))return 0===arguments.length?new ie:new ie(arguments[0],arguments[1]);if(arguments.length){if(n=arguments[1],!yt(r=arguments[0]))throw new TypeError(I("invalid argument. First shape parameter must be a positive number. Value: `%s`.",r));if(!yt(n))throw new TypeError(I("invalid argument. Second shape parameter must be a positive number. Value: `%s`.",n))}else r=1,n=1;return G(this,"a",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!yt(n))throw new TypeError(I("invalid assignment. Must be a positive number. Value: `%s`.",n));r=n}}),G(this,"b",{configurable:!1,enumerable:!0,get:function(){return n},set:function(r){if(!yt(r))throw new TypeError(I("invalid assignment. Must be a positive number. Value: `%s`.",r));n=r}}),this}H(re,"factory",(function(r,n){return W(r)||W(n)||r<=0||n<=0?ot(NaN):function(t){return W(t)?NaN:t<=0?X:t>=1?0:Qt(1-it(1-it(t,r),n))}})),H(ne,"factory",(function(r,n){return W(r)||W(n)||r<=0||n<=0?ot(NaN):function(t){var e;return W(t)?NaN:t<=0||t>=1?X:(e=Qt(r*n),e+=(r-1)*Qt(t),e+=(n-1)*Qt(1-it(t,r)))}})),H(te,"factory",(function(r,n){return W(r)||W(n)||r<=0||n<=0?ot(NaN):function(t){return W(t)?NaN:t<=0||t>=1?0:r*n*it(t,r-1)*it(1-it(t,r),n-1)}})),H(ee,"factory",(function(r,n){return W(r)||W(n)||r<=0||n<=0?ot(NaN):function(t){return W(t)||t<0||t>1?NaN:it(1-it(1-t,1/n),1/r)}})),ut(ie.prototype,"kurtosis",(function(){return Wt(this.a,this.b)})),ut(ie.prototype,"mean",(function(){return Ct(this.a,this.b)})),ut(ie.prototype,"mode",(function(){return Lt(this.a,this.b)})),ut(ie.prototype,"skewness",(function(){return Mt(this.a,this.b)})),ut(ie.prototype,"stdev",(function(){return Rt(this.a,this.b)})),ut(ie.prototype,"variance",(function(){return Zt(this.a,this.b)})),H(ie.prototype,"cdf",(function(r){return at(r,this.a,this.b)})),H(ie.prototype,"logcdf",(function(r){return re(r,this.a,this.b)})),H(ie.prototype,"logpdf",(function(r){return ne(r,this.a,this.b)})),H(ie.prototype,"pdf",(function(r){return te(r,this.a,this.b)})),H(ie.prototype,"quantile",(function(r){return ee(r,this.a,this.b)}));var ae={};return P(ae,"cdf",at),P(ae,"Kumaraswamy",ie),P(ae,"kurtosis",Wt),P(ae,"logcdf",re),P(ae,"logpdf",ne),P(ae,"mean",Ct),P(ae,"median",(function(r,n){return W(r)||r<=0||W(n)||n<=0?NaN:it(1-it(2,-1/n),1/r)})),P(ae,"mode",Lt),P(ae,"pdf",te),P(ae,"quantile",ee),P(ae,"skewness",Mt),P(ae,"stdev",Rt),P(ae,"variance",Zt),ae},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).kumaraswamy=n();
//# sourceMappingURL=index.js.map
