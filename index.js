// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,t=Object.prototype,e=t.toString,i=t.__defineGetter__,a=t.__defineSetter__,o=t.__lookupGetter__,u=t.__lookupSetter__,f=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,f){var c,s,l,p;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((s="value"in f)&&(o.call(r,n)||u.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=f.value,r.__proto__=c):r[n]=f.value),l="get"in f,p="set"in f,s&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&i&&i.call(r,n,f.get),p&&a&&a.call(r,n,f.set),r};function c(r,n,t){f(r,n,{configurable:!1,enumerable:!0,writable:!1,value:t})}function s(r,n,t){f(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function l(r){return r!=r}var p=Math.floor;function y(r){return p(r)===r}function g(r){return y(r/2)}function h(r){return g(r>0?r-1:r+1)}var d=Number.POSITIVE_INFINITY,v=Number,b=v.NEGATIVE_INFINITY;function w(r){return r===d||r===b}var m=Math.sqrt;function N(r){return Math.abs(r)}var A="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function _(){return A&&"symbol"==typeof Symbol.toStringTag}var E,k=Object.prototype.toString,S=Object.prototype.hasOwnProperty,U="function"==typeof Symbol?Symbol.toStringTag:"",j=_()?function(r){var n,t,e,i,a;if(null==r)return k.call(r);t=r[U],a=U,n=null!=(i=r)&&S.call(i,a);try{r[U]=void 0}catch(n){return k.call(r)}return e=k.call(r),n?r[U]=t:delete r[U],e}:function(r){return k.call(r)},I="function"==typeof Uint32Array,x="function"==typeof Uint32Array?Uint32Array:null,T="function"==typeof Uint32Array?Uint32Array:void 0;E=function(){var r,n,t;if("function"!=typeof x)return!1;try{n=new x(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(I&&t instanceof Uint32Array||"[object Uint32Array]"===j(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?T:function(){throw new Error("not implemented")};var F,V=E,O="function"==typeof Float64Array,$="function"==typeof Float64Array?Float64Array:null,G="function"==typeof Float64Array?Float64Array:void 0;F=function(){var r,n,t;if("function"!=typeof $)return!1;try{n=new $([1,3.14,-3.14,NaN]),t=n,r=(O&&t instanceof Float64Array||"[object Float64Array]"===j(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?G:function(){throw new Error("not implemented")};var P,H=F,W="function"==typeof Uint8Array,C="function"==typeof Uint8Array?Uint8Array:null,L="function"==typeof Uint8Array?Uint8Array:void 0;P=function(){var r,n,t;if("function"!=typeof C)return!1;try{n=new C(n=[1,3.14,-3.14,256,257]),t=n,r=(W&&t instanceof Uint8Array||"[object Uint8Array]"===j(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?L:function(){throw new Error("not implemented")};var M,R=P,Z="function"==typeof Uint16Array,q="function"==typeof Uint16Array?Uint16Array:null,X="function"==typeof Uint16Array?Uint16Array:void 0;M=function(){var r,n,t;if("function"!=typeof q)return!1;try{n=new q(n=[1,3.14,-3.14,65536,65537]),t=n,r=(Z&&t instanceof Uint16Array||"[object Uint16Array]"===j(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?X:function(){throw new Error("not implemented")};var Y,z={uint16:M,uint8:R};(Y=new z.uint16(1))[0]=4660;var K,B,D=52===new z.uint8(Y.buffer)[0];!0===D?(K=1,B=0):(K=0,B=1);var J={HIGH:K,LOW:B},Q=new H(1),rr=new V(Q.buffer),nr=J.HIGH,tr=J.LOW;function er(r,n,t,e){return Q[0]=r,n[e]=rr[nr],n[e+t]=rr[tr],n}function ir(r){return er(r,[0,0],1,0)}s(ir,"assign",er);var ar=!0===D?0:1,or=new H(1),ur=new V(or.buffer);function fr(r,n){return or[0]=r,ur[ar]=n>>>0,or[0]}function cr(r){return 0|r}var sr,lr,pr=2147483647,yr=!0===D?1:0,gr=new H(1),hr=new V(gr.buffer);function dr(r){return gr[0]=r,hr[yr]}!0===D?(sr=1,lr=0):(sr=0,lr=1);var vr={HIGH:sr,LOW:lr},br=new H(1),wr=new V(br.buffer),mr=vr.HIGH,Nr=vr.LOW;function Ar(r,n){return wr[mr]=r,wr[Nr]=n,br[0]}var _r=[0,0];function Er(r,n){var t,e;return ir.assign(r,_r,1,0),t=_r[0],t&=pr,e=dr(n),Ar(t|=e&=2147483648,_r[1])}var kr=!0===D?1:0,Sr=new H(1),Ur=new V(Sr.buffer);function jr(r,n){return Sr[0]=r,Ur[kr]=n>>>0,Sr[0]}var Ir=1023,xr=1048576,Tr=[1,1.5],Fr=[0,.5849624872207642],Vr=[0,1.350039202129749e-8];function Or(r,n,t,e){return l(r)||w(r)?(n[e]=r,n[e+t]=0,n):0!==r&&N(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}s((function(r){return Or(r,[0,0],1,0)}),"assign",Or);var $r=[0,0],Gr=[0,0];function Pr(r,n){var t,e;return 0===n||0===r||l(r)||w(r)?r:(Or(r,$r,1,0),n+=$r[1],n+=function(r){var n=dr(r);return(n=(2146435072&n)>>>20)-Ir|0}(r=$r[0]),n<-1074?Er(0,r):n>1023?r<0?b:d:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,ir.assign(r,Gr,1,0),t=Gr[0],t&=2148532223,e*Ar(t|=n+Ir<<20,Gr[1])))}var Hr=1048575,Wr=1048576,Cr=1083179008,Lr=1e300,Mr=1e-300,Rr=[0,0],Zr=[0,0];function qr(r,n){var t,e,i,a,o,u,f,c,s,p,g,v,A,_;if(l(r)||l(n))return NaN;if(ir.assign(n,Rr,1,0),o=Rr[0],0===Rr[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return m(r);if(-.5===n)return 1/m(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(w(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:N(r)<1==(n===d)?0:d}(r,n)}if(ir.assign(r,Rr,1,0),a=Rr[0],0===Rr[1]){if(0===a)return function(r,n){return n===b?d:n===d?0:n>0?h(n)?r:0:h(n)?Er(d,r):d}(r,n);if(1===r)return 1;if(-1===r&&h(n))return-1;if(w(r))return r===b?qr(-0,-n):n<0?0:d}if(r<0&&!1===y(n))return(r-r)/(r-r);if(i=N(r),t=a&pr|0,e=o&pr|0,f=o>>>31|0,u=(u=a>>>31|0)&&h(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(dr(r)&pr)<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===f?u*Lr*Lr:u*Mr*Mr;if(t>1072693248)return 0===f?u*Lr*Lr:u*Mr*Mr;g=function(r,n){var t,e,i,a,o,u;return t=(o=1.9259629911266175e-8*(i=n-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((e=fr(e=(a=1.4426950216293335*i)+o,0))-a),r[0]=e,r[1]=t,r}(Zr,i)}else g=function(r,n,t){var e,i,a,o,u,f,c,s,l,p,y,g,h,d,v,b,w,m,N,A,_;return m=0,t<xr&&(m-=53,t=dr(n*=9007199254740992)),m+=(t>>20)-Ir|0,t=1072693248|(N=1048575&t|0),N<=235662?A=0:N<767610?A=1:(A=0,m+=1,t-=xr),o=fr(i=(b=(n=jr(n,t))-(c=Tr[A]))*(w=1/(n+c)),0),e=524288+(t>>1|536870912),f=jr(0,e+=A<<18),v=(a=i*i)*a*(0===(_=a)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=fr(f=3+(a=o*o)+(v+=(u=w*(b-o*f-o*(n-(f-c))))*(o+i)),0),h=(y=-7.028461650952758e-9*(l=fr(l=(b=o*f)+(w=u*f+(v-(f-3-a))*i),0))+.9617966939259756*(w-(l-b))+Vr[A])-((g=fr(g=(p=.9617967009544373*l)+y+(s=Fr[A])+(d=m),0))-d-s-p),r[0]=g,r[1]=h,r}(Zr,i,t);if(v=(p=(n-(c=fr(n,0)))*g[0]+n*g[1])+(s=c*g[0]),ir.assign(v,Rr,1,0),A=cr(Rr[0]),_=cr(Rr[1]),A>=Cr){if(0!=(A-Cr|_))return u*Lr*Lr;if(p+8008566259537294e-32>v-s)return u*Lr*Lr}else if((A&pr)>=1083231232){if(0!=(A-3230714880|_))return u*Mr*Mr;if(p<=v-s)return u*Mr*Mr}return v=function(r,n,t){var e,i,a,o,u,f,c,s,l,p;return l=((s=r&pr|0)>>20)-Ir|0,c=0,s>1071644672&&(i=jr(0,((c=r+(Wr>>l+1)>>>0)&~(Hr>>(l=((c&pr)>>20)-Ir|0)))>>>0),c=(c&Hr|Wr)>>20-l>>>0,r<0&&(c=-c),n-=i),r=cr(r=dr(f=1-((f=(a=.6931471824645996*(i=fr(i=t+n,0)))+(o=.6931471805599453*(t-(i-n))+-1.904654299957768e-9*i))*(e=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<20>>>0)>>20<=0?Pr(f,c):jr(f,r)}(A,s,p),u*v}function Xr(r,n,t){return l(r)||l(n)||l(t)||n<=0||t<=0?NaN:r<=0?0:r>=1?1:1-qr(1-qr(r,n),t)}function Yr(r){return function(){return r}}function zr(r,n,t){f(r,n,{configurable:!1,enumerable:!1,get:t})}function Kr(r){return"number"==typeof r}s(Xr,"factory",(function(r,n){return l(r)||l(n)||r<=0||n<=0?Yr(NaN):function(t){return l(t)?NaN:t<=0?0:t>=1?1:1-qr(1-qr(t,r),n)}}));var Br=v.prototype.toString,Dr=_();function Jr(r){return"object"==typeof r&&(r instanceof v||(Dr?function(r){try{return Br.call(r),!0}catch(r){return!1}}(r):"[object Number]"===j(r)))}function Qr(r){return Kr(r)||Jr(r)}function rn(r){return Kr(r)&&r>0}function nn(r){return Jr(r)&&r.valueOf()>0}function tn(r){return rn(r)||nn(r)}s(Qr,"isPrimitive",Kr),s(Qr,"isObject",Jr),s(tn,"isPrimitive",rn),s(tn,"isObject",nn);var en=.6931471803691238,an=1.9082149292705877e-10,on=Math.ceil;function un(r){return r<0?on(r):p(r)}var fn=1.4426950408889634,cn=1/(1<<28);function sn(r){var n;return l(r)||r===d?r:r===b?0:r>709.782712893384?d:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<cn?1+r:function(r,n,t){var e,i,a,o;return Pr(1-(n-(e=r-n)*(a=e-(i=e*e)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),t)}(r-.6931471803691238*(n=un(r<0?fn*r-.5:fn*r+.5)),1.9082149292705877e-10*n,n)}var ln=2220446049250313e-31;function pn(r){var n,t;return 0===r?1/0:((r<0?-r:r)<=1?(n=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+4624429436045379e-20*r))))))))),t=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+1*r)))))))))):(n=4624429436045379e-20+(r=1/r)*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+709811.662581658*r))))))))),t=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+0*r)))))))))),n/t)}var yn=10.900511;function gn(r,n){var t,e,i,a,o,u,f;return l(r)||l(n)||r<0||n<0?NaN:1===n?1/r:1===r?1/n:(f=r+n)<ln?(o=f/r,o/=n):f===r&&n<ln?1/n:f===n&&r<ln?1/r:(r<n&&(u=n,n=r,r=u),e=r+yn-.5,i=n+yn-.5,a=f+yn-.5,o=pn(r)*(pn(n)/pn(f)),N(n*(t=r-.5-n))<100*a&&r>100?o*=sn(t*function(r){var n,t,e,i,a,o,u,f,c,s;if(r<-1||l(r))return NaN;if(-1===r)return b;if(r===d)return r;if(0===r)return r;if(s=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(s=0,i=r,t=1)}return 0!==s&&(e<9007199254740992?(a=(s=((t=dr(c=1+r))>>20)-Ir)>0?1-(c-r):r-(c-1),a/=c):(s=((t=dr(c=r))>>20)-Ir,a=0),(t&=1048575)<434334?c=jr(c,1072693248|t):(s+=1,c=jr(c,1071644672|t),t=1048576-t>>2),i=c-1),n=.5*i*i,0===t?0===i?s*en+(a+=s*an):s*en-((f=n*(1-.6666666666666666*i))-(s*an+a)-i):(f=(u=(o=i/(2+i))*o)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===s?i-(n-o*(n+f)):s*en-(n-(o*(n+f)+(s*an+a))-i))}(-n/a)):o*=qr(e/a,t),o*=qr(a>1e10?e/a*(i/a):e*i/(a*a),n),o*=m(2.718281828459045/i))}function hn(r,n){var t,e,i,a,o,u;return l(r)||r<=0||l(n)||n<=0?NaN:(a=n*gn(1+1/r,n),o=n*gn(1+2/r,n),u=n*gn(1+3/r,n),e=n*gn(1+4/r,n)-4*u*a+6*o*(i=a*a)-3*i*i,e/=(t=o-a*a)*t)}function dn(r,n){return l(r)||r<=0||l(n)||n<=0?NaN:n*gn(1+1/r,n)}function vn(r,n){return l(r)||r<1||l(n)||n<1||1===r&&1===n?NaN:qr((r-1)/(r*n-1),1/r)}function bn(r,n){var t,e,i;return l(r)||r<=0||l(n)||n<=0?NaN:(e=n*gn(1+1/r,n),i=n*gn(1+2/r,n),(n*gn(1+3/r,n)-3*e*(t=i-e*e)-e*e*e)/qr(t,1.5))}function wn(r,n){var t,e;return l(r)||r<=0||l(n)||n<=0?NaN:(t=n*gn(1+1/r,n),e=n*gn(1+2/r,n),m(e-t*t))}function mn(r,n){var t;return l(r)||r<=0||l(n)||n<=0?NaN:(t=n*gn(1+1/r,n),n*gn(1+2/r,n)-t*t)}var Nn=.6931471803691238,An=1.9082149292705877e-10,_n=1048575;function En(r){var n,t,e,i,a,o,u,f,c,s,p,y;return 0===r?b:l(r)||r<0?NaN:(a=0,(t=dr(r))<1048576&&(a-=54,t=dr(r*=0x40000000000000)),t>=2146435072?r+r:(a+=(t>>20)-Ir|0,a+=(f=614244+(t&=_n)&1048576|0)>>20|0,u=(r=jr(r,t|1072693248^f))-1,(_n&2+t)<3?0===u?0===a?0:a*Nn+a*An:(o=u*u*(.5-.3333333333333333*u),0===a?u-o:a*Nn-(o-a*An-u)):(f=t-398458|0,c=440401-t|0,i=(p=(y=(s=u/(2+u))*s)*y)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=y*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),o=e+i,(f|=c)>0?(n=.5*u*u,0===a?u-(n-s*(n+o)):a*Nn-(n-(s*(n+o)+a*An)-u)):0===a?u-s*(u-o):a*Nn-(s*(u-o)-a*An-u))))}function kn(r,n,t){return l(r)||l(n)||l(t)||n<=0||t<=0?NaN:r<=0?b:r>=1?0:En(1-qr(1-qr(r,n),t))}function Sn(r,n,t){var e;return l(r)||l(n)||l(t)||n<=0||t<=0?NaN:r<=0||r>=1?b:(e=En(n*t),e+=(n-1)*En(r),e+=(t-1)*En(1-qr(r,n)))}function Un(r,n,t){return l(r)||l(n)||l(t)||n<=0||t<=0?NaN:r<=0||r>=1?0:n*t*qr(r,n-1)*qr(1-qr(r,n),t-1)}function jn(r,n,t){return l(r)||l(n)||l(t)||n<=0||t<=0||r<0||r>1?NaN:qr(1-qr(1-r,1/t),1/n)}function In(r){return"number"==typeof r}function xn(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function Tn(r,n,t){var e=!1,i=n-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(e=!0,r=r.substr(1)),r=t?r+xn(i):xn(i)+r,e&&(r="-"+r)),r}s(kn,"factory",(function(r,n){return l(r)||l(n)||r<=0||n<=0?Yr(NaN):function(t){return l(t)?NaN:t<=0?b:t>=1?0:En(1-qr(1-qr(t,r),n))}})),s(Sn,"factory",(function(r,n){return l(r)||l(n)||r<=0||n<=0?Yr(NaN):function(t){var e;return l(t)?NaN:t<=0||t>=1?b:(e=En(r*n),e+=(r-1)*En(t),e+=(n-1)*En(1-qr(t,r)))}})),s(Un,"factory",(function(r,n){return l(r)||l(n)||r<=0||n<=0?Yr(NaN):function(t){return l(t)?NaN:t<=0||t>=1?0:r*n*qr(t,r-1)*qr(1-qr(t,r),n-1)}})),s(jn,"factory",(function(r,n){return l(r)||l(n)||r<=0||n<=0?Yr(NaN):function(t){return l(t)||t<0||t>1?NaN:qr(1-qr(1-t,1/n),1/r)}}));var Fn=String.prototype.toLowerCase,Vn=String.prototype.toUpperCase;function On(r){var n,t,e;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(t=r.arg,e=parseInt(t,10),!isFinite(e)){if(!In(t))throw new Error("invalid integer. Value: "+t);e=0}return e<0&&("u"===r.specifier||10!==n)&&(e=4294967295+e+1),e<0?(t=(-e).toString(n),r.precision&&(t=Tn(t,r.precision,r.padRight)),t="-"+t):(t=e.toString(n),e||r.precision?r.precision&&(t=Tn(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===n&&(r.alternate&&(t="0x"+t),t=r.specifier===Vn.call(r.specifier)?Vn.call(t):Fn.call(t)),8===n&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function $n(r){return"string"==typeof r}var Gn=Math.abs,Pn=String.prototype.toLowerCase,Hn=String.prototype.toUpperCase,Wn=String.prototype.replace,Cn=/e\+(\d)$/,Ln=/e-(\d)$/,Mn=/^(\d+)$/,Rn=/^(\d+)e/,Zn=/\.0$/,qn=/\.0*e/,Xn=/(\..*[^0])0*e/;function Yn(r){var n,t,e=parseFloat(r.arg);if(!isFinite(e)){if(!In(r.arg))throw new Error("invalid floating-point number. Value: "+t);e=r.arg}switch(r.specifier){case"e":case"E":t=e.toExponential(r.precision);break;case"f":case"F":t=e.toFixed(r.precision);break;case"g":case"G":Gn(e)<1e-4?((n=r.precision)>0&&(n-=1),t=e.toExponential(n)):t=e.toPrecision(r.precision),r.alternate||(t=Wn.call(t,Xn,"$1e"),t=Wn.call(t,qn,"e"),t=Wn.call(t,Zn,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Wn.call(t,Cn,"e+0$1"),t=Wn.call(t,Ln,"e-0$1"),r.alternate&&(t=Wn.call(t,Mn,"$1."),t=Wn.call(t,Rn,"$1.e")),e>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Hn.call(r.specifier)?Hn.call(t):Pn.call(t)}function zn(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}function Kn(r,n,t){var e=n-r.length;return e<0?r:r=t?r+zn(e):zn(e)+r}var Bn=String.fromCharCode,Dn=isNaN,Jn=Array.isArray;function Qn(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function rt(r){var n,t,e,i,a,o,u,f,c;if(!Jn(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,f=0;f<r.length;f++)if($n(e=r[f]))o+=e;else{if(n=void 0!==e.precision,!(e=Qn(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+e+"`.");for(e.mapping&&(u=e.mapping),t=e.flags,c=0;c<t.length;c++)switch(i=t.charAt(c)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[u],10),u+=1,Dn(e.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[u],10),u+=1,Dn(e.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[u],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=On(e);break;case"s":e.maxWidth=n?e.precision:-1;break;case"c":if(!Dn(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=Dn(a)?String(e.arg):Bn(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=Yn(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=Tn(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=Kn(e.arg,e.width,e.padRight)),o+=e.arg||"",u+=1}return o}var nt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function tt(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function et(r){var n,t,e,i;for(t=[],i=0,e=nt.exec(r);e;)(n=r.slice(i,nt.lastIndex-e[0].length)).length&&t.push(n),t.push(tt(e)),i=nt.lastIndex,e=nt.exec(r);return(n=r.slice(i)).length&&t.push(n),t}function it(r){return"string"==typeof r}function at(r){var n,t,e;if(!it(r))throw new TypeError(at("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=et(r),(t=new Array(arguments.length))[0]=n,e=1;e<t.length;e++)t[e]=arguments[e];return rt.apply(null,t)}function ot(){var r,n;if(!(this instanceof ot))return 0===arguments.length?new ot:new ot(arguments[0],arguments[1]);if(arguments.length){if(n=arguments[1],!rn(r=arguments[0]))throw new TypeError(at("invalid argument. First shape parameter must be a positive number. Value: `%s`.",r));if(!rn(n))throw new TypeError(at("invalid argument. Second shape parameter must be a positive number. Value: `%s`.",n))}else r=1,n=1;return f(this,"a",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!rn(n))throw new TypeError(at("invalid assignment. Must be a positive number. Value: `%s`.",n));r=n}}),f(this,"b",{configurable:!1,enumerable:!0,get:function(){return n},set:function(r){if(!rn(r))throw new TypeError(at("invalid assignment. Must be a positive number. Value: `%s`.",r));n=r}}),this}zr(ot.prototype,"kurtosis",(function(){return hn(this.a,this.b)})),zr(ot.prototype,"mean",(function(){return dn(this.a,this.b)})),zr(ot.prototype,"mode",(function(){return vn(this.a,this.b)})),zr(ot.prototype,"skewness",(function(){return bn(this.a,this.b)})),zr(ot.prototype,"stdev",(function(){return wn(this.a,this.b)})),zr(ot.prototype,"variance",(function(){return mn(this.a,this.b)})),s(ot.prototype,"cdf",(function(r){return Xr(r,this.a,this.b)})),s(ot.prototype,"logcdf",(function(r){return kn(r,this.a,this.b)})),s(ot.prototype,"logpdf",(function(r){return Sn(r,this.a,this.b)})),s(ot.prototype,"pdf",(function(r){return Un(r,this.a,this.b)})),s(ot.prototype,"quantile",(function(r){return jn(r,this.a,this.b)}));var ut={};return c(ut,"cdf",Xr),c(ut,"Kumaraswamy",ot),c(ut,"kurtosis",hn),c(ut,"logcdf",kn),c(ut,"logpdf",Sn),c(ut,"mean",dn),c(ut,"median",(function(r,n){return l(r)||r<=0||l(n)||n<=0?NaN:qr(1-qr(2,-1/n),1/r)})),c(ut,"mode",vn),c(ut,"pdf",Un),c(ut,"quantile",jn),c(ut,"skewness",bn),c(ut,"stdev",wn),c(ut,"variance",mn),ut},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).kumaraswamy=n();
//# sourceMappingURL=index.js.map
