(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ia="166",rc=0,ns=1,ac=2,oo=1,sc=2,qt=3,dn=0,gt=1,jt=2,cn=0,Yn=1,Jr=2,is=3,rs=4,oc=5,yn=100,cc=101,uc=102,dc=103,lc=104,fc=200,hc=201,pc=202,mc=203,Qr=204,ea=205,_c=206,gc=207,vc=208,Mc=209,xc=210,Sc=211,yc=212,bc=213,Ec=214,wc=0,Tc=1,Ac=2,ar=3,Cc=4,Rc=5,Pc=6,Lc=7,co=0,Dc=1,Uc=2,un=0,Ic=1,Nc=2,Fc=3,Oc=4,kc=5,Bc=6,zc=7,uo=300,Zn=301,Jn=302,ta=303,na=304,fr=306,ia=1e3,En=1001,ra=1002,At=1003,Hc=1004,Ti=1005,Ut=1006,xr=1007,wn=1008,Zt=1009,lo=1010,fo=1011,pi=1012,Na=1013,Tn=1014,Yt=1015,_i=1016,Fa=1017,Oa=1018,Qn=1020,ho=35902,po=1021,mo=1022,It=1023,_o=1024,go=1025,$n=1026,ei=1027,vo=1028,ka=1029,Mo=1030,Ba=1031,za=1033,Qi=33776,er=33777,tr=33778,nr=33779,aa=35840,sa=35841,oa=35842,ca=35843,ua=36196,da=37492,la=37496,fa=37808,ha=37809,pa=37810,ma=37811,_a=37812,ga=37813,va=37814,Ma=37815,xa=37816,Sa=37817,ya=37818,ba=37819,Ea=37820,wa=37821,ir=36492,Ta=36494,Aa=36495,xo=36283,Ca=36284,Ra=36285,Pa=36286,Gc=3200,Vc=3201,Wc=0,Xc=1,on="",yt="srgb",fn="srgb-linear",Ha="display-p3",hr="display-p3-linear",sr="linear",Ye="srgb",or="rec709",cr="p3",Rn=7680,as=519,qc=512,jc=513,Yc=514,So=515,$c=516,Kc=517,Zc=518,Jc=519,ss=35044,os="300 es",$t=2e3,ur=2001;class ni{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,o=r.length;a<o;a++)r[a].call(this,e);e.target=null}}}const dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sr=Math.PI/180,La=180/Math.PI;function gi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dt[i&255]+dt[i>>8&255]+dt[i>>16&255]+dt[i>>24&255]+"-"+dt[e&255]+dt[e>>8&255]+"-"+dt[e>>16&15|64]+dt[e>>24&255]+"-"+dt[t&63|128]+dt[t>>8&255]+"-"+dt[t>>16&255]+dt[t>>24&255]+dt[n&255]+dt[n>>8&255]+dt[n>>16&255]+dt[n>>24&255]).toLowerCase()}function _t(i,e,t){return Math.max(e,Math.min(t,i))}function Qc(i,e){return(i%e+e)%e}function yr(i,e,t){return(1-t)*i+t*e}function ai(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function mt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ke{constructor(e=0,t=0){ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*n-o*r+e.x,this.y=a*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ie{constructor(e,t,n,r,a,o,c,d,h){Ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,o,c,d,h)}set(e,t,n,r,a,o,c,d,h){const p=this.elements;return p[0]=e,p[1]=r,p[2]=c,p[3]=t,p[4]=a,p[5]=d,p[6]=n,p[7]=o,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,o=n[0],c=n[3],d=n[6],h=n[1],p=n[4],x=n[7],M=n[2],S=n[5],T=n[8],A=r[0],v=r[3],m=r[6],P=r[1],R=r[4],s=r[7],l=r[2],u=r[5],_=r[8];return a[0]=o*A+c*P+d*l,a[3]=o*v+c*R+d*u,a[6]=o*m+c*s+d*_,a[1]=h*A+p*P+x*l,a[4]=h*v+p*R+x*u,a[7]=h*m+p*s+x*_,a[2]=M*A+S*P+T*l,a[5]=M*v+S*R+T*u,a[8]=M*m+S*s+T*_,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],o=e[4],c=e[5],d=e[6],h=e[7],p=e[8];return t*o*p-t*c*h-n*a*p+n*c*d+r*a*h-r*o*d}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],o=e[4],c=e[5],d=e[6],h=e[7],p=e[8],x=p*o-c*h,M=c*d-p*a,S=h*a-o*d,T=t*x+n*M+r*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=x*A,e[1]=(r*h-p*n)*A,e[2]=(c*n-r*o)*A,e[3]=M*A,e[4]=(p*t-r*d)*A,e[5]=(r*a-c*t)*A,e[6]=S*A,e[7]=(n*d-h*t)*A,e[8]=(o*t-n*a)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,o,c){const d=Math.cos(a),h=Math.sin(a);return this.set(n*d,n*h,-n*(d*o+h*c)+o+e,-r*h,r*d,-r*(-h*o+d*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(br.makeScale(e,t)),this}rotate(e){return this.premultiply(br.makeRotation(-e)),this}translate(e,t){return this.premultiply(br.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const br=new Ie;function yo(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function mi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function eu(){const i=mi("canvas");return i.style.display="block",i}const cs={};function bo(i){i in cs||(cs[i]=!0,console.warn(i))}function tu(i,e,t){return new Promise(function(n,r){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const us=new Ie().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ds=new Ie().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ai={[fn]:{transfer:sr,primaries:or,toReference:i=>i,fromReference:i=>i},[yt]:{transfer:Ye,primaries:or,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[hr]:{transfer:sr,primaries:cr,toReference:i=>i.applyMatrix3(ds),fromReference:i=>i.applyMatrix3(us)},[Ha]:{transfer:Ye,primaries:cr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(ds),fromReference:i=>i.applyMatrix3(us).convertLinearToSRGB()}},nu=new Set([fn,hr]),Xe={enabled:!0,_workingColorSpace:fn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!nu.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Ai[e].toReference,r=Ai[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Ai[i].primaries},getTransfer:function(i){return i===on?sr:Ai[i].transfer}};function Kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Er(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Pn;class iu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Pn===void 0&&(Pn=mi("canvas")),Pn.width=e.width,Pn.height=e.height;const n=Pn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Pn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=mi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let o=0;o<a.length;o++)a[o]=Kn(a[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Kn(t[n]/255)*255):t[n]=Kn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ru=0;class Eo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=gi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let o=0,c=r.length;o<c;o++)r[o].isDataTexture?a.push(wr(r[o].image)):a.push(wr(r[o]))}else a=wr(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function wr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?iu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let au=0;class ht extends ni{constructor(e=ht.DEFAULT_IMAGE,t=ht.DEFAULT_MAPPING,n=En,r=En,a=Ut,o=wn,c=It,d=Zt,h=ht.DEFAULT_ANISOTROPY,p=on){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:au++}),this.uuid=gi(),this.name="",this.source=new Eo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=o,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=d,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ia:e.x=e.x-Math.floor(e.x);break;case En:e.x=e.x<0?0:1;break;case ra:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ia:e.y=e.y-Math.floor(e.y);break;case En:e.y=e.y<0?0:1;break;case ra:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ht.DEFAULT_IMAGE=null;ht.DEFAULT_MAPPING=uo;ht.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,t=0,n=0,r=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*a,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*a,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*a,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const d=e.elements,h=d[0],p=d[4],x=d[8],M=d[1],S=d[5],T=d[9],A=d[2],v=d[6],m=d[10];if(Math.abs(p-M)<.01&&Math.abs(x-A)<.01&&Math.abs(T-v)<.01){if(Math.abs(p+M)<.1&&Math.abs(x+A)<.1&&Math.abs(T+v)<.1&&Math.abs(h+S+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(h+1)/2,s=(S+1)/2,l=(m+1)/2,u=(p+M)/4,_=(x+A)/4,y=(T+v)/4;return R>s&&R>l?R<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(R),r=u/n,a=_/n):s>l?s<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(s),n=u/r,a=y/r):l<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(l),n=_/a,r=y/a),this.set(n,r,a,t),this}let P=Math.sqrt((v-T)*(v-T)+(x-A)*(x-A)+(M-p)*(M-p));return Math.abs(P)<.001&&(P=1),this.x=(v-T)/P,this.y=(x-A)/P,this.z=(M-p)/P,this.w=Math.acos((h+S+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class su extends ni{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ut,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new ht(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let c=0;c<o;c++)this.textures[c]=a.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Eo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class An extends su{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class wo extends ht{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=At,this.minFilter=At,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ou extends ht{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=At,this.minFilter=At,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,o,c){let d=n[r+0],h=n[r+1],p=n[r+2],x=n[r+3];const M=a[o+0],S=a[o+1],T=a[o+2],A=a[o+3];if(c===0){e[t+0]=d,e[t+1]=h,e[t+2]=p,e[t+3]=x;return}if(c===1){e[t+0]=M,e[t+1]=S,e[t+2]=T,e[t+3]=A;return}if(x!==A||d!==M||h!==S||p!==T){let v=1-c;const m=d*M+h*S+p*T+x*A,P=m>=0?1:-1,R=1-m*m;if(R>Number.EPSILON){const l=Math.sqrt(R),u=Math.atan2(l,m*P);v=Math.sin(v*u)/l,c=Math.sin(c*u)/l}const s=c*P;if(d=d*v+M*s,h=h*v+S*s,p=p*v+T*s,x=x*v+A*s,v===1-c){const l=1/Math.sqrt(d*d+h*h+p*p+x*x);d*=l,h*=l,p*=l,x*=l}}e[t]=d,e[t+1]=h,e[t+2]=p,e[t+3]=x}static multiplyQuaternionsFlat(e,t,n,r,a,o){const c=n[r],d=n[r+1],h=n[r+2],p=n[r+3],x=a[o],M=a[o+1],S=a[o+2],T=a[o+3];return e[t]=c*T+p*x+d*S-h*M,e[t+1]=d*T+p*M+h*x-c*S,e[t+2]=h*T+p*S+c*M-d*x,e[t+3]=p*T-c*x-d*M-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,o=e._order,c=Math.cos,d=Math.sin,h=c(n/2),p=c(r/2),x=c(a/2),M=d(n/2),S=d(r/2),T=d(a/2);switch(o){case"XYZ":this._x=M*p*x+h*S*T,this._y=h*S*x-M*p*T,this._z=h*p*T+M*S*x,this._w=h*p*x-M*S*T;break;case"YXZ":this._x=M*p*x+h*S*T,this._y=h*S*x-M*p*T,this._z=h*p*T-M*S*x,this._w=h*p*x+M*S*T;break;case"ZXY":this._x=M*p*x-h*S*T,this._y=h*S*x+M*p*T,this._z=h*p*T+M*S*x,this._w=h*p*x-M*S*T;break;case"ZYX":this._x=M*p*x-h*S*T,this._y=h*S*x+M*p*T,this._z=h*p*T-M*S*x,this._w=h*p*x+M*S*T;break;case"YZX":this._x=M*p*x+h*S*T,this._y=h*S*x+M*p*T,this._z=h*p*T-M*S*x,this._w=h*p*x-M*S*T;break;case"XZY":this._x=M*p*x-h*S*T,this._y=h*S*x-M*p*T,this._z=h*p*T+M*S*x,this._w=h*p*x+M*S*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],o=t[1],c=t[5],d=t[9],h=t[2],p=t[6],x=t[10],M=n+c+x;if(M>0){const S=.5/Math.sqrt(M+1);this._w=.25/S,this._x=(p-d)*S,this._y=(a-h)*S,this._z=(o-r)*S}else if(n>c&&n>x){const S=2*Math.sqrt(1+n-c-x);this._w=(p-d)/S,this._x=.25*S,this._y=(r+o)/S,this._z=(a+h)/S}else if(c>x){const S=2*Math.sqrt(1+c-n-x);this._w=(a-h)/S,this._x=(r+o)/S,this._y=.25*S,this._z=(d+p)/S}else{const S=2*Math.sqrt(1+x-n-c);this._w=(o-r)/S,this._x=(a+h)/S,this._y=(d+p)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,o=e._w,c=t._x,d=t._y,h=t._z,p=t._w;return this._x=n*p+o*c+r*h-a*d,this._y=r*p+o*d+a*c-n*h,this._z=a*p+o*h+n*d-r*c,this._w=o*p-n*c-r*d-a*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,a=this._z,o=this._w;let c=o*e._w+n*e._x+r*e._y+a*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=o,this._x=n,this._y=r,this._z=a,this;const d=1-c*c;if(d<=Number.EPSILON){const S=1-t;return this._w=S*o+t*this._w,this._x=S*n+t*this._x,this._y=S*r+t*this._y,this._z=S*a+t*this._z,this.normalize(),this}const h=Math.sqrt(d),p=Math.atan2(h,c),x=Math.sin((1-t)*p)/h,M=Math.sin(t*p)/h;return this._w=o*x+this._w*M,this._x=n*x+this._x*M,this._y=r*x+this._y*M,this._z=a*x+this._z*M,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,n=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ls.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ls.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,o=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*o,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*o,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,o=e.y,c=e.z,d=e.w,h=2*(o*r-c*n),p=2*(c*t-a*r),x=2*(a*n-o*t);return this.x=t+d*h+o*x-c*p,this.y=n+d*p+c*h-a*x,this.z=r+d*x+a*p-o*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,o=t.x,c=t.y,d=t.z;return this.x=r*d-a*c,this.y=a*o-n*d,this.z=n*c-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Tr.copy(this).projectOnVector(e),this.sub(Tr)}reflect(e){return this.sub(Tr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Tr=new G,ls=new vi;class Mi{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Pt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Pt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Pt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let o=0,c=a.count;o<c;o++)e.isMesh===!0?e.getVertexPosition(o,Pt):Pt.fromBufferAttribute(a,o),Pt.applyMatrix4(e.matrixWorld),this.expandByPoint(Pt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ci.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ci.copy(n.boundingBox)),Ci.applyMatrix4(e.matrixWorld),this.union(Ci)}const r=e.children;for(let a=0,o=r.length;a<o;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Pt),Pt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(si),Ri.subVectors(this.max,si),Ln.subVectors(e.a,si),Dn.subVectors(e.b,si),Un.subVectors(e.c,si),en.subVectors(Dn,Ln),tn.subVectors(Un,Dn),pn.subVectors(Ln,Un);let t=[0,-en.z,en.y,0,-tn.z,tn.y,0,-pn.z,pn.y,en.z,0,-en.x,tn.z,0,-tn.x,pn.z,0,-pn.x,-en.y,en.x,0,-tn.y,tn.x,0,-pn.y,pn.x,0];return!Ar(t,Ln,Dn,Un,Ri)||(t=[1,0,0,0,1,0,0,0,1],!Ar(t,Ln,Dn,Un,Ri))?!1:(Pi.crossVectors(en,tn),t=[Pi.x,Pi.y,Pi.z],Ar(t,Ln,Dn,Un,Ri))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ht[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ht[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ht[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ht[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ht[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ht[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ht[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ht[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ht),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ht=[new G,new G,new G,new G,new G,new G,new G,new G],Pt=new G,Ci=new Mi,Ln=new G,Dn=new G,Un=new G,en=new G,tn=new G,pn=new G,si=new G,Ri=new G,Pi=new G,mn=new G;function Ar(i,e,t,n,r){for(let a=0,o=i.length-3;a<=o;a+=3){mn.fromArray(i,a);const c=r.x*Math.abs(mn.x)+r.y*Math.abs(mn.y)+r.z*Math.abs(mn.z),d=e.dot(mn),h=t.dot(mn),p=n.dot(mn);if(Math.max(-Math.max(d,h,p),Math.min(d,h,p))>c)return!1}return!0}const cu=new Mi,oi=new G,Cr=new G;class xi{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):cu.setFromPoints(e).getCenter(n);let r=0;for(let a=0,o=e.length;a<o;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oi.subVectors(e,this.center);const t=oi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(oi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oi.copy(e.center).add(Cr)),this.expandByPoint(oi.copy(e.center).sub(Cr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gt=new G,Rr=new G,Li=new G,nn=new G,Pr=new G,Di=new G,Lr=new G;class Ga{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Gt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gt.copy(this.origin).addScaledVector(this.direction,t),Gt.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Rr.copy(e).add(t).multiplyScalar(.5),Li.copy(t).sub(e).normalize(),nn.copy(this.origin).sub(Rr);const a=e.distanceTo(t)*.5,o=-this.direction.dot(Li),c=nn.dot(this.direction),d=-nn.dot(Li),h=nn.lengthSq(),p=Math.abs(1-o*o);let x,M,S,T;if(p>0)if(x=o*d-c,M=o*c-d,T=a*p,x>=0)if(M>=-T)if(M<=T){const A=1/p;x*=A,M*=A,S=x*(x+o*M+2*c)+M*(o*x+M+2*d)+h}else M=a,x=Math.max(0,-(o*M+c)),S=-x*x+M*(M+2*d)+h;else M=-a,x=Math.max(0,-(o*M+c)),S=-x*x+M*(M+2*d)+h;else M<=-T?(x=Math.max(0,-(-o*a+c)),M=x>0?-a:Math.min(Math.max(-a,-d),a),S=-x*x+M*(M+2*d)+h):M<=T?(x=0,M=Math.min(Math.max(-a,-d),a),S=M*(M+2*d)+h):(x=Math.max(0,-(o*a+c)),M=x>0?a:Math.min(Math.max(-a,-d),a),S=-x*x+M*(M+2*d)+h);else M=o>0?-a:a,x=Math.max(0,-(o*M+c)),S=-x*x+M*(M+2*d)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,x),r&&r.copy(Rr).addScaledVector(Li,M),S}intersectSphere(e,t){Gt.subVectors(e.center,this.origin);const n=Gt.dot(this.direction),r=Gt.dot(Gt)-n*n,a=e.radius*e.radius;if(r>a)return null;const o=Math.sqrt(a-r),c=n-o,d=n+o;return d<0?null:c<0?this.at(d,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,o,c,d;const h=1/this.direction.x,p=1/this.direction.y,x=1/this.direction.z,M=this.origin;return h>=0?(n=(e.min.x-M.x)*h,r=(e.max.x-M.x)*h):(n=(e.max.x-M.x)*h,r=(e.min.x-M.x)*h),p>=0?(a=(e.min.y-M.y)*p,o=(e.max.y-M.y)*p):(a=(e.max.y-M.y)*p,o=(e.min.y-M.y)*p),n>o||a>r||((a>n||isNaN(n))&&(n=a),(o<r||isNaN(r))&&(r=o),x>=0?(c=(e.min.z-M.z)*x,d=(e.max.z-M.z)*x):(c=(e.max.z-M.z)*x,d=(e.min.z-M.z)*x),n>d||c>r)||((c>n||n!==n)&&(n=c),(d<r||r!==r)&&(r=d),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Gt)!==null}intersectTriangle(e,t,n,r,a){Pr.subVectors(t,e),Di.subVectors(n,e),Lr.crossVectors(Pr,Di);let o=this.direction.dot(Lr),c;if(o>0){if(r)return null;c=1}else if(o<0)c=-1,o=-o;else return null;nn.subVectors(this.origin,e);const d=c*this.direction.dot(Di.crossVectors(nn,Di));if(d<0)return null;const h=c*this.direction.dot(Pr.cross(nn));if(h<0||d+h>o)return null;const p=-c*nn.dot(Lr);return p<0?null:this.at(p/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(e,t,n,r,a,o,c,d,h,p,x,M,S,T,A,v){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,o,c,d,h,p,x,M,S,T,A,v)}set(e,t,n,r,a,o,c,d,h,p,x,M,S,T,A,v){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=a,m[5]=o,m[9]=c,m[13]=d,m[2]=h,m[6]=p,m[10]=x,m[14]=M,m[3]=S,m[7]=T,m[11]=A,m[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/In.setFromMatrixColumn(e,0).length(),a=1/In.setFromMatrixColumn(e,1).length(),o=1/In.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,o=Math.cos(n),c=Math.sin(n),d=Math.cos(r),h=Math.sin(r),p=Math.cos(a),x=Math.sin(a);if(e.order==="XYZ"){const M=o*p,S=o*x,T=c*p,A=c*x;t[0]=d*p,t[4]=-d*x,t[8]=h,t[1]=S+T*h,t[5]=M-A*h,t[9]=-c*d,t[2]=A-M*h,t[6]=T+S*h,t[10]=o*d}else if(e.order==="YXZ"){const M=d*p,S=d*x,T=h*p,A=h*x;t[0]=M+A*c,t[4]=T*c-S,t[8]=o*h,t[1]=o*x,t[5]=o*p,t[9]=-c,t[2]=S*c-T,t[6]=A+M*c,t[10]=o*d}else if(e.order==="ZXY"){const M=d*p,S=d*x,T=h*p,A=h*x;t[0]=M-A*c,t[4]=-o*x,t[8]=T+S*c,t[1]=S+T*c,t[5]=o*p,t[9]=A-M*c,t[2]=-o*h,t[6]=c,t[10]=o*d}else if(e.order==="ZYX"){const M=o*p,S=o*x,T=c*p,A=c*x;t[0]=d*p,t[4]=T*h-S,t[8]=M*h+A,t[1]=d*x,t[5]=A*h+M,t[9]=S*h-T,t[2]=-h,t[6]=c*d,t[10]=o*d}else if(e.order==="YZX"){const M=o*d,S=o*h,T=c*d,A=c*h;t[0]=d*p,t[4]=A-M*x,t[8]=T*x+S,t[1]=x,t[5]=o*p,t[9]=-c*p,t[2]=-h*p,t[6]=S*x+T,t[10]=M-A*x}else if(e.order==="XZY"){const M=o*d,S=o*h,T=c*d,A=c*h;t[0]=d*p,t[4]=-x,t[8]=h*p,t[1]=M*x+A,t[5]=o*p,t[9]=S*x-T,t[2]=T*x-S,t[6]=c*p,t[10]=A*x+M}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uu,e,du)}lookAt(e,t,n){const r=this.elements;return xt.subVectors(e,t),xt.lengthSq()===0&&(xt.z=1),xt.normalize(),rn.crossVectors(n,xt),rn.lengthSq()===0&&(Math.abs(n.z)===1?xt.x+=1e-4:xt.z+=1e-4,xt.normalize(),rn.crossVectors(n,xt)),rn.normalize(),Ui.crossVectors(xt,rn),r[0]=rn.x,r[4]=Ui.x,r[8]=xt.x,r[1]=rn.y,r[5]=Ui.y,r[9]=xt.y,r[2]=rn.z,r[6]=Ui.z,r[10]=xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,o=n[0],c=n[4],d=n[8],h=n[12],p=n[1],x=n[5],M=n[9],S=n[13],T=n[2],A=n[6],v=n[10],m=n[14],P=n[3],R=n[7],s=n[11],l=n[15],u=r[0],_=r[4],y=r[8],g=r[12],f=r[1],b=r[5],N=r[9],D=r[13],F=r[2],O=r[6],E=r[10],I=r[14],k=r[3],j=r[7],ee=r[11],Y=r[15];return a[0]=o*u+c*f+d*F+h*k,a[4]=o*_+c*b+d*O+h*j,a[8]=o*y+c*N+d*E+h*ee,a[12]=o*g+c*D+d*I+h*Y,a[1]=p*u+x*f+M*F+S*k,a[5]=p*_+x*b+M*O+S*j,a[9]=p*y+x*N+M*E+S*ee,a[13]=p*g+x*D+M*I+S*Y,a[2]=T*u+A*f+v*F+m*k,a[6]=T*_+A*b+v*O+m*j,a[10]=T*y+A*N+v*E+m*ee,a[14]=T*g+A*D+v*I+m*Y,a[3]=P*u+R*f+s*F+l*k,a[7]=P*_+R*b+s*O+l*j,a[11]=P*y+R*N+s*E+l*ee,a[15]=P*g+R*D+s*I+l*Y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],o=e[1],c=e[5],d=e[9],h=e[13],p=e[2],x=e[6],M=e[10],S=e[14],T=e[3],A=e[7],v=e[11],m=e[15];return T*(+a*d*x-r*h*x-a*c*M+n*h*M+r*c*S-n*d*S)+A*(+t*d*S-t*h*M+a*o*M-r*o*S+r*h*p-a*d*p)+v*(+t*h*x-t*c*S-a*o*x+n*o*S+a*c*p-n*h*p)+m*(-r*c*p-t*d*x+t*c*M+r*o*x-n*o*M+n*d*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],o=e[4],c=e[5],d=e[6],h=e[7],p=e[8],x=e[9],M=e[10],S=e[11],T=e[12],A=e[13],v=e[14],m=e[15],P=x*v*h-A*M*h+A*d*S-c*v*S-x*d*m+c*M*m,R=T*M*h-p*v*h-T*d*S+o*v*S+p*d*m-o*M*m,s=p*A*h-T*x*h+T*c*S-o*A*S-p*c*m+o*x*m,l=T*x*d-p*A*d-T*c*M+o*A*M+p*c*v-o*x*v,u=t*P+n*R+r*s+a*l;if(u===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const _=1/u;return e[0]=P*_,e[1]=(A*M*a-x*v*a-A*r*S+n*v*S+x*r*m-n*M*m)*_,e[2]=(c*v*a-A*d*a+A*r*h-n*v*h-c*r*m+n*d*m)*_,e[3]=(x*d*a-c*M*a-x*r*h+n*M*h+c*r*S-n*d*S)*_,e[4]=R*_,e[5]=(p*v*a-T*M*a+T*r*S-t*v*S-p*r*m+t*M*m)*_,e[6]=(T*d*a-o*v*a-T*r*h+t*v*h+o*r*m-t*d*m)*_,e[7]=(o*M*a-p*d*a+p*r*h-t*M*h-o*r*S+t*d*S)*_,e[8]=s*_,e[9]=(T*x*a-p*A*a-T*n*S+t*A*S+p*n*m-t*x*m)*_,e[10]=(o*A*a-T*c*a+T*n*h-t*A*h-o*n*m+t*c*m)*_,e[11]=(p*c*a-o*x*a-p*n*h+t*x*h+o*n*S-t*c*S)*_,e[12]=l*_,e[13]=(p*A*r-T*x*r+T*n*M-t*A*M-p*n*v+t*x*v)*_,e[14]=(T*c*r-o*A*r-T*n*d+t*A*d+o*n*v-t*c*v)*_,e[15]=(o*x*r-p*c*r+p*n*d-t*x*d-o*n*M+t*c*M)*_,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,o=e.x,c=e.y,d=e.z,h=a*o,p=a*c;return this.set(h*o+n,h*c-r*d,h*d+r*c,0,h*c+r*d,p*c+n,p*d-r*o,0,h*d-r*c,p*d+r*o,a*d*d+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,o){return this.set(1,n,a,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,o=t._y,c=t._z,d=t._w,h=a+a,p=o+o,x=c+c,M=a*h,S=a*p,T=a*x,A=o*p,v=o*x,m=c*x,P=d*h,R=d*p,s=d*x,l=n.x,u=n.y,_=n.z;return r[0]=(1-(A+m))*l,r[1]=(S+s)*l,r[2]=(T-R)*l,r[3]=0,r[4]=(S-s)*u,r[5]=(1-(M+m))*u,r[6]=(v+P)*u,r[7]=0,r[8]=(T+R)*_,r[9]=(v-P)*_,r[10]=(1-(M+A))*_,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=In.set(r[0],r[1],r[2]).length();const o=In.set(r[4],r[5],r[6]).length(),c=In.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Lt.copy(this);const h=1/a,p=1/o,x=1/c;return Lt.elements[0]*=h,Lt.elements[1]*=h,Lt.elements[2]*=h,Lt.elements[4]*=p,Lt.elements[5]*=p,Lt.elements[6]*=p,Lt.elements[8]*=x,Lt.elements[9]*=x,Lt.elements[10]*=x,t.setFromRotationMatrix(Lt),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,r,a,o,c=$t){const d=this.elements,h=2*a/(t-e),p=2*a/(n-r),x=(t+e)/(t-e),M=(n+r)/(n-r);let S,T;if(c===$t)S=-(o+a)/(o-a),T=-2*o*a/(o-a);else if(c===ur)S=-o/(o-a),T=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return d[0]=h,d[4]=0,d[8]=x,d[12]=0,d[1]=0,d[5]=p,d[9]=M,d[13]=0,d[2]=0,d[6]=0,d[10]=S,d[14]=T,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,n,r,a,o,c=$t){const d=this.elements,h=1/(t-e),p=1/(n-r),x=1/(o-a),M=(t+e)*h,S=(n+r)*p;let T,A;if(c===$t)T=(o+a)*x,A=-2*x;else if(c===ur)T=a*x,A=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return d[0]=2*h,d[4]=0,d[8]=0,d[12]=-M,d[1]=0,d[5]=2*p,d[9]=0,d[13]=-S,d[2]=0,d[6]=0,d[10]=A,d[14]=-T,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const In=new G,Lt=new Qe,uu=new G(0,0,0),du=new G(1,1,1),rn=new G,Ui=new G,xt=new G,fs=new Qe,hs=new vi;class Jt{constructor(e=0,t=0,n=0,r=Jt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],o=r[4],c=r[8],d=r[1],h=r[5],p=r[9],x=r[2],M=r[6],S=r[10];switch(t){case"XYZ":this._y=Math.asin(_t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,S),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(M,h),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,S),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-x,a),this._z=0);break;case"ZXY":this._x=Math.asin(_t(M,-1,1)),Math.abs(M)<.9999999?(this._y=Math.atan2(-x,S),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-_t(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(M,S),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(_t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-x,a)):(this._x=0,this._y=Math.atan2(c,S));break;case"XZY":this._z=Math.asin(-_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(M,h),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-p,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fs.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fs,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hs.setFromEuler(this),this.setFromQuaternion(hs,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jt.DEFAULT_ORDER="XYZ";class To{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lu=0;const ps=new G,Nn=new vi,Vt=new Qe,Ii=new G,ci=new G,fu=new G,hu=new vi,ms=new G(1,0,0),_s=new G(0,1,0),gs=new G(0,0,1),vs={type:"added"},pu={type:"removed"},Fn={type:"childadded",child:null},Dr={type:"childremoved",child:null};class pt extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lu++}),this.uuid=gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pt.DEFAULT_UP.clone();const e=new G,t=new Jt,n=new vi,r=new G(1,1,1);function a(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Qe},normalMatrix:{value:new Ie}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new To,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Nn.setFromAxisAngle(e,t),this.quaternion.multiply(Nn),this}rotateOnWorldAxis(e,t){return Nn.setFromAxisAngle(e,t),this.quaternion.premultiply(Nn),this}rotateX(e){return this.rotateOnAxis(ms,e)}rotateY(e){return this.rotateOnAxis(_s,e)}rotateZ(e){return this.rotateOnAxis(gs,e)}translateOnAxis(e,t){return ps.copy(e).applyQuaternion(this.quaternion),this.position.add(ps.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ms,e)}translateY(e){return this.translateOnAxis(_s,e)}translateZ(e){return this.translateOnAxis(gs,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ii.copy(e):Ii.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ci.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vt.lookAt(ci,Ii,this.up):Vt.lookAt(Ii,ci,this.up),this.quaternion.setFromRotationMatrix(Vt),r&&(Vt.extractRotation(r.matrixWorld),Nn.setFromRotationMatrix(Vt),this.quaternion.premultiply(Nn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vs),Fn.child=e,this.dispatchEvent(Fn),Fn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pu),Dr.child=e,this.dispatchEvent(Dr),Dr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vs),Fn.child=e,this.dispatchEvent(Fn),Fn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ci,e,fu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ci,hu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(c,d){return c[d.uuid]===void 0&&(c[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const d=c.shapes;if(Array.isArray(d))for(let h=0,p=d.length;h<p;h++){const x=d[h];a(e.shapes,x)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let d=0,h=this.material.length;d<h;d++)c.push(a(e.materials,this.material[d]));r.material=c}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){const d=this.animations[c];r.animations.push(a(e.animations,d))}}if(t){const c=o(e.geometries),d=o(e.materials),h=o(e.textures),p=o(e.images),x=o(e.shapes),M=o(e.skeletons),S=o(e.animations),T=o(e.nodes);c.length>0&&(n.geometries=c),d.length>0&&(n.materials=d),h.length>0&&(n.textures=h),p.length>0&&(n.images=p),x.length>0&&(n.shapes=x),M.length>0&&(n.skeletons=M),S.length>0&&(n.animations=S),T.length>0&&(n.nodes=T)}return n.object=r,n;function o(c){const d=[];for(const h in c){const p=c[h];delete p.metadata,d.push(p)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}pt.DEFAULT_UP=new G(0,1,0);pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dt=new G,Wt=new G,Ur=new G,Xt=new G,On=new G,kn=new G,Ms=new G,Ir=new G,Nr=new G,Fr=new G;class Bt{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Dt.subVectors(e,t),r.cross(Dt);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){Dt.subVectors(r,t),Wt.subVectors(n,t),Ur.subVectors(e,t);const o=Dt.dot(Dt),c=Dt.dot(Wt),d=Dt.dot(Ur),h=Wt.dot(Wt),p=Wt.dot(Ur),x=o*h-c*c;if(x===0)return a.set(0,0,0),null;const M=1/x,S=(h*d-c*p)*M,T=(o*p-c*d)*M;return a.set(1-S-T,T,S)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Xt)===null?!1:Xt.x>=0&&Xt.y>=0&&Xt.x+Xt.y<=1}static getInterpolation(e,t,n,r,a,o,c,d){return this.getBarycoord(e,t,n,r,Xt)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,Xt.x),d.addScaledVector(o,Xt.y),d.addScaledVector(c,Xt.z),d)}static isFrontFacing(e,t,n,r){return Dt.subVectors(n,t),Wt.subVectors(e,t),Dt.cross(Wt).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dt.subVectors(this.c,this.b),Wt.subVectors(this.a,this.b),Dt.cross(Wt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return Bt.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return Bt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let o,c;On.subVectors(r,n),kn.subVectors(a,n),Ir.subVectors(e,n);const d=On.dot(Ir),h=kn.dot(Ir);if(d<=0&&h<=0)return t.copy(n);Nr.subVectors(e,r);const p=On.dot(Nr),x=kn.dot(Nr);if(p>=0&&x<=p)return t.copy(r);const M=d*x-p*h;if(M<=0&&d>=0&&p<=0)return o=d/(d-p),t.copy(n).addScaledVector(On,o);Fr.subVectors(e,a);const S=On.dot(Fr),T=kn.dot(Fr);if(T>=0&&S<=T)return t.copy(a);const A=S*h-d*T;if(A<=0&&h>=0&&T<=0)return c=h/(h-T),t.copy(n).addScaledVector(kn,c);const v=p*T-S*x;if(v<=0&&x-p>=0&&S-T>=0)return Ms.subVectors(a,r),c=(x-p)/(x-p+(S-T)),t.copy(r).addScaledVector(Ms,c);const m=1/(v+A+M);return o=A*m,c=M*m,t.copy(n).addScaledVector(On,o).addScaledVector(kn,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ao={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},an={h:0,s:0,l:0},Ni={h:0,s:0,l:0};function Or(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Xe.workingColorSpace){if(e=Qc(e,1),t=_t(t,0,1),n=_t(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,o=2*n-a;this.r=Or(o,a,e+1/3),this.g=Or(o,a,e),this.b=Or(o,a,e-1/3)}return Xe.toWorkingColorSpace(this,r),this}setStyle(e,t=yt){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=r[1],c=r[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){const n=Ao[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kn(e.r),this.g=Kn(e.g),this.b=Kn(e.b),this}copyLinearToSRGB(e){return this.r=Er(e.r),this.g=Er(e.g),this.b=Er(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return Xe.fromWorkingColorSpace(lt.copy(this),e),Math.round(_t(lt.r*255,0,255))*65536+Math.round(_t(lt.g*255,0,255))*256+Math.round(_t(lt.b*255,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.fromWorkingColorSpace(lt.copy(this),t);const n=lt.r,r=lt.g,a=lt.b,o=Math.max(n,r,a),c=Math.min(n,r,a);let d,h;const p=(c+o)/2;if(c===o)d=0,h=0;else{const x=o-c;switch(h=p<=.5?x/(o+c):x/(2-o-c),o){case n:d=(r-a)/x+(r<a?6:0);break;case r:d=(a-n)/x+2;break;case a:d=(n-r)/x+4;break}d/=6}return e.h=d,e.s=h,e.l=p,e}getRGB(e,t=Xe.workingColorSpace){return Xe.fromWorkingColorSpace(lt.copy(this),t),e.r=lt.r,e.g=lt.g,e.b=lt.b,e}getStyle(e=yt){Xe.fromWorkingColorSpace(lt.copy(this),e);const t=lt.r,n=lt.g,r=lt.b;return e!==yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(an),this.setHSL(an.h+e,an.s+t,an.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(an),e.getHSL(Ni);const n=yr(an.h,Ni.h,t),r=yr(an.s,Ni.s,t),a=yr(an.l,Ni.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const lt=new Ve;Ve.NAMES=Ao;let mu=0;class ii extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=gi(),this.name="",this.type="Material",this.blending=Yn,this.side=dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qr,this.blendDst=ea,this.blendEquation=yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=as,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rn,this.stencilZFail=Rn,this.stencilZPass=Rn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yn&&(n.blending=this.blending),this.side!==dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Qr&&(n.blendSrc=this.blendSrc),this.blendDst!==ea&&(n.blendDst=this.blendDst),this.blendEquation!==yn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ar&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==as&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Rn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Rn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const o=[];for(const c in a){const d=a[c];delete d.metadata,o.push(d)}return o}if(t){const a=r(e.textures),o=r(e.images);a.length>0&&(n.textures=a),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Co extends ii{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jt,this.combine=co,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const it=new G,Fi=new ke;class Nt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ss,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Yt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return bo("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Fi.fromBufferAttribute(this,t),Fi.applyMatrix3(e),this.setXY(t,Fi.x,Fi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)it.fromBufferAttribute(this,t),it.applyMatrix3(e),this.setXYZ(t,it.x,it.y,it.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)it.fromBufferAttribute(this,t),it.applyMatrix4(e),this.setXYZ(t,it.x,it.y,it.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)it.fromBufferAttribute(this,t),it.applyNormalMatrix(e),this.setXYZ(t,it.x,it.y,it.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)it.fromBufferAttribute(this,t),it.transformDirection(e),this.setXYZ(t,it.x,it.y,it.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ai(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),r=mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),r=mt(r,this.array),a=mt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ss&&(e.usage=this.usage),e}}class Ro extends Nt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Po extends Nt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class bt extends Nt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let _u=0;const wt=new Qe,kr=new pt,Bn=new G,St=new Mi,ui=new Mi,st=new G;class Ct extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_u++}),this.uuid=gi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yo(e)?Po:Ro)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Ie().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wt.makeRotationFromQuaternion(e),this.applyMatrix4(wt),this}rotateX(e){return wt.makeRotationX(e),this.applyMatrix4(wt),this}rotateY(e){return wt.makeRotationY(e),this.applyMatrix4(wt),this}rotateZ(e){return wt.makeRotationZ(e),this.applyMatrix4(wt),this}translate(e,t,n){return wt.makeTranslation(e,t,n),this.applyMatrix4(wt),this}scale(e,t,n){return wt.makeScale(e,t,n),this.applyMatrix4(wt),this}lookAt(e){return kr.lookAt(e),kr.updateMatrix(),this.applyMatrix4(kr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bn).negate(),this.translate(Bn.x,Bn.y,Bn.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new bt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];St.setFromBufferAttribute(a),this.morphTargetsRelative?(st.addVectors(this.boundingBox.min,St.min),this.boundingBox.expandByPoint(st),st.addVectors(this.boundingBox.max,St.max),this.boundingBox.expandByPoint(st)):(this.boundingBox.expandByPoint(St.min),this.boundingBox.expandByPoint(St.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const n=this.boundingSphere.center;if(St.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const c=t[a];ui.setFromBufferAttribute(c),this.morphTargetsRelative?(st.addVectors(St.min,ui.min),St.expandByPoint(st),st.addVectors(St.max,ui.max),St.expandByPoint(st)):(St.expandByPoint(ui.min),St.expandByPoint(ui.max))}St.getCenter(n);let r=0;for(let a=0,o=e.count;a<o;a++)st.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(st));if(t)for(let a=0,o=t.length;a<o;a++){const c=t[a],d=this.morphTargetsRelative;for(let h=0,p=c.count;h<p;h++)st.fromBufferAttribute(c,h),d&&(Bn.fromBufferAttribute(e,h),st.add(Bn)),r=Math.max(r,n.distanceToSquared(st))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),c=[],d=[];for(let y=0;y<n.count;y++)c[y]=new G,d[y]=new G;const h=new G,p=new G,x=new G,M=new ke,S=new ke,T=new ke,A=new G,v=new G;function m(y,g,f){h.fromBufferAttribute(n,y),p.fromBufferAttribute(n,g),x.fromBufferAttribute(n,f),M.fromBufferAttribute(a,y),S.fromBufferAttribute(a,g),T.fromBufferAttribute(a,f),p.sub(h),x.sub(h),S.sub(M),T.sub(M);const b=1/(S.x*T.y-T.x*S.y);isFinite(b)&&(A.copy(p).multiplyScalar(T.y).addScaledVector(x,-S.y).multiplyScalar(b),v.copy(x).multiplyScalar(S.x).addScaledVector(p,-T.x).multiplyScalar(b),c[y].add(A),c[g].add(A),c[f].add(A),d[y].add(v),d[g].add(v),d[f].add(v))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let y=0,g=P.length;y<g;++y){const f=P[y],b=f.start,N=f.count;for(let D=b,F=b+N;D<F;D+=3)m(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const R=new G,s=new G,l=new G,u=new G;function _(y){l.fromBufferAttribute(r,y),u.copy(l);const g=c[y];R.copy(g),R.sub(l.multiplyScalar(l.dot(g))).normalize(),s.crossVectors(u,g);const b=s.dot(d[y])<0?-1:1;o.setXYZW(y,R.x,R.y,R.z,b)}for(let y=0,g=P.length;y<g;++y){const f=P[y],b=f.start,N=f.count;for(let D=b,F=b+N;D<F;D+=3)_(e.getX(D+0)),_(e.getX(D+1)),_(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let M=0,S=n.count;M<S;M++)n.setXYZ(M,0,0,0);const r=new G,a=new G,o=new G,c=new G,d=new G,h=new G,p=new G,x=new G;if(e)for(let M=0,S=e.count;M<S;M+=3){const T=e.getX(M+0),A=e.getX(M+1),v=e.getX(M+2);r.fromBufferAttribute(t,T),a.fromBufferAttribute(t,A),o.fromBufferAttribute(t,v),p.subVectors(o,a),x.subVectors(r,a),p.cross(x),c.fromBufferAttribute(n,T),d.fromBufferAttribute(n,A),h.fromBufferAttribute(n,v),c.add(p),d.add(p),h.add(p),n.setXYZ(T,c.x,c.y,c.z),n.setXYZ(A,d.x,d.y,d.z),n.setXYZ(v,h.x,h.y,h.z)}else for(let M=0,S=t.count;M<S;M+=3)r.fromBufferAttribute(t,M+0),a.fromBufferAttribute(t,M+1),o.fromBufferAttribute(t,M+2),p.subVectors(o,a),x.subVectors(r,a),p.cross(x),n.setXYZ(M+0,p.x,p.y,p.z),n.setXYZ(M+1,p.x,p.y,p.z),n.setXYZ(M+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)st.fromBufferAttribute(e,t),st.normalize(),e.setXYZ(t,st.x,st.y,st.z)}toNonIndexed(){function e(c,d){const h=c.array,p=c.itemSize,x=c.normalized,M=new h.constructor(d.length*p);let S=0,T=0;for(let A=0,v=d.length;A<v;A++){c.isInterleavedBufferAttribute?S=d[A]*c.data.stride+c.offset:S=d[A]*p;for(let m=0;m<p;m++)M[T++]=h[S++]}return new Nt(M,p,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ct,n=this.index.array,r=this.attributes;for(const c in r){const d=r[c],h=e(d,n);t.setAttribute(c,h)}const a=this.morphAttributes;for(const c in a){const d=[],h=a[c];for(let p=0,x=h.length;p<x;p++){const M=h[p],S=e(M,n);d.push(S)}t.morphAttributes[c]=d}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let c=0,d=o.length;c<d;c++){const h=o[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const d in n){const h=n[d];e.data.attributes[d]=h.toJSON(e.data)}const r={};let a=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],p=[];for(let x=0,M=h.length;x<M;x++){const S=h[x];p.push(S.toJSON(e.data))}p.length>0&&(r[d]=p,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const h in r){const p=r[h];this.setAttribute(h,p.clone(t))}const a=e.morphAttributes;for(const h in a){const p=[],x=a[h];for(let M=0,S=x.length;M<S;M++)p.push(x[M].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let h=0,p=o.length;h<p;h++){const x=o[h];this.addGroup(x.start,x.count,x.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xs=new Qe,_n=new Ga,Oi=new xi,Ss=new G,zn=new G,Hn=new G,Gn=new G,Br=new G,ki=new G,Bi=new ke,zi=new ke,Hi=new ke,ys=new G,bs=new G,Es=new G,Gi=new G,Vi=new G;class Kt extends pt{constructor(e=new Ct,t=new Co){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const c=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const c=this.morphTargetInfluences;if(a&&c){ki.set(0,0,0);for(let d=0,h=a.length;d<h;d++){const p=c[d],x=a[d];p!==0&&(Br.fromBufferAttribute(x,e),o?ki.addScaledVector(Br,p):ki.addScaledVector(Br.sub(t),p))}t.add(ki)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Oi.copy(n.boundingSphere),Oi.applyMatrix4(a),_n.copy(e.ray).recast(e.near),!(Oi.containsPoint(_n.origin)===!1&&(_n.intersectSphere(Oi,Ss)===null||_n.origin.distanceToSquared(Ss)>(e.far-e.near)**2))&&(xs.copy(a).invert(),_n.copy(e.ray).applyMatrix4(xs),!(n.boundingBox!==null&&_n.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,_n)))}_computeIntersections(e,t,n){let r;const a=this.geometry,o=this.material,c=a.index,d=a.attributes.position,h=a.attributes.uv,p=a.attributes.uv1,x=a.attributes.normal,M=a.groups,S=a.drawRange;if(c!==null)if(Array.isArray(o))for(let T=0,A=M.length;T<A;T++){const v=M[T],m=o[v.materialIndex],P=Math.max(v.start,S.start),R=Math.min(c.count,Math.min(v.start+v.count,S.start+S.count));for(let s=P,l=R;s<l;s+=3){const u=c.getX(s),_=c.getX(s+1),y=c.getX(s+2);r=Wi(this,m,e,n,h,p,x,u,_,y),r&&(r.faceIndex=Math.floor(s/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{const T=Math.max(0,S.start),A=Math.min(c.count,S.start+S.count);for(let v=T,m=A;v<m;v+=3){const P=c.getX(v),R=c.getX(v+1),s=c.getX(v+2);r=Wi(this,o,e,n,h,p,x,P,R,s),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}else if(d!==void 0)if(Array.isArray(o))for(let T=0,A=M.length;T<A;T++){const v=M[T],m=o[v.materialIndex],P=Math.max(v.start,S.start),R=Math.min(d.count,Math.min(v.start+v.count,S.start+S.count));for(let s=P,l=R;s<l;s+=3){const u=s,_=s+1,y=s+2;r=Wi(this,m,e,n,h,p,x,u,_,y),r&&(r.faceIndex=Math.floor(s/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{const T=Math.max(0,S.start),A=Math.min(d.count,S.start+S.count);for(let v=T,m=A;v<m;v+=3){const P=v,R=v+1,s=v+2;r=Wi(this,o,e,n,h,p,x,P,R,s),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}}}function gu(i,e,t,n,r,a,o,c){let d;if(e.side===gt?d=n.intersectTriangle(o,a,r,!0,c):d=n.intersectTriangle(r,a,o,e.side===dn,c),d===null)return null;Vi.copy(c),Vi.applyMatrix4(i.matrixWorld);const h=t.ray.origin.distanceTo(Vi);return h<t.near||h>t.far?null:{distance:h,point:Vi.clone(),object:i}}function Wi(i,e,t,n,r,a,o,c,d,h){i.getVertexPosition(c,zn),i.getVertexPosition(d,Hn),i.getVertexPosition(h,Gn);const p=gu(i,e,t,n,zn,Hn,Gn,Gi);if(p){r&&(Bi.fromBufferAttribute(r,c),zi.fromBufferAttribute(r,d),Hi.fromBufferAttribute(r,h),p.uv=Bt.getInterpolation(Gi,zn,Hn,Gn,Bi,zi,Hi,new ke)),a&&(Bi.fromBufferAttribute(a,c),zi.fromBufferAttribute(a,d),Hi.fromBufferAttribute(a,h),p.uv1=Bt.getInterpolation(Gi,zn,Hn,Gn,Bi,zi,Hi,new ke)),o&&(ys.fromBufferAttribute(o,c),bs.fromBufferAttribute(o,d),Es.fromBufferAttribute(o,h),p.normal=Bt.getInterpolation(Gi,zn,Hn,Gn,ys,bs,Es,new G),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const x={a:c,b:d,c:h,normal:new G,materialIndex:0};Bt.getNormal(zn,Hn,Gn,x.normal),p.face=x}return p}class Si extends Ct{constructor(e=1,t=1,n=1,r=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:o};const c=this;r=Math.floor(r),a=Math.floor(a),o=Math.floor(o);const d=[],h=[],p=[],x=[];let M=0,S=0;T("z","y","x",-1,-1,n,t,e,o,a,0),T("z","y","x",1,-1,n,t,-e,o,a,1),T("x","z","y",1,1,e,n,t,r,o,2),T("x","z","y",1,-1,e,n,-t,r,o,3),T("x","y","z",1,-1,e,t,n,r,a,4),T("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(d),this.setAttribute("position",new bt(h,3)),this.setAttribute("normal",new bt(p,3)),this.setAttribute("uv",new bt(x,2));function T(A,v,m,P,R,s,l,u,_,y,g){const f=s/_,b=l/y,N=s/2,D=l/2,F=u/2,O=_+1,E=y+1;let I=0,k=0;const j=new G;for(let ee=0;ee<E;ee++){const Y=ee*b-D;for(let Me=0;Me<O;Me++){const Te=Me*f-N;j[A]=Te*P,j[v]=Y*R,j[m]=F,h.push(j.x,j.y,j.z),j[A]=0,j[v]=0,j[m]=u>0?1:-1,p.push(j.x,j.y,j.z),x.push(Me/_),x.push(1-ee/y),I+=1}}for(let ee=0;ee<y;ee++)for(let Y=0;Y<_;Y++){const Me=M+Y+O*ee,Te=M+Y+O*(ee+1),q=M+(Y+1)+O*(ee+1),Z=M+(Y+1)+O*ee;d.push(Me,Te,Z),d.push(Te,q,Z),k+=6}c.addGroup(S,k,g),S+=k,M+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Si(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ti(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function ft(i){const e={};for(let t=0;t<i.length;t++){const n=ti(i[t]);for(const r in n)e[r]=n[r]}return e}function vu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Lo(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const Mu={clone:ti,merge:ft};var xu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Su=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ln extends ii{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xu,this.fragmentShader=Su,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ti(e.uniforms),this.uniformsGroups=vu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Do extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=$t}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const sn=new G,ws=new ke,Ts=new ke;class Tt extends Do{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=La*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return La*2*Math.atan(Math.tan(Sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){sn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(sn.x,sn.y).multiplyScalar(-e/sn.z),sn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(sn.x,sn.y).multiplyScalar(-e/sn.z)}getViewSize(e,t){return this.getViewBounds(e,ws,Ts),t.subVectors(Ts,ws)}setViewOffset(e,t,n,r,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Sr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const d=o.fullWidth,h=o.fullHeight;a+=o.offsetX*r/d,t-=o.offsetY*n/h,r*=o.width/d,n*=o.height/h}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Vn=-90,Wn=1;class yu extends pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Tt(Vn,Wn,e,t);r.layers=this.layers,this.add(r);const a=new Tt(Vn,Wn,e,t);a.layers=this.layers,this.add(a);const o=new Tt(Vn,Wn,e,t);o.layers=this.layers,this.add(o);const c=new Tt(Vn,Wn,e,t);c.layers=this.layers,this.add(c);const d=new Tt(Vn,Wn,e,t);d.layers=this.layers,this.add(d);const h=new Tt(Vn,Wn,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,o,c,d]=t;for(const h of t)this.remove(h);if(e===$t)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===ur)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,o,c,d,h,p]=this.children,x=e.getRenderTarget(),M=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,a),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,c),e.setRenderTarget(n,3,r),e.render(t,d),e.setRenderTarget(n,4,r),e.render(t,h),n.texture.generateMipmaps=A,e.setRenderTarget(n,5,r),e.render(t,p),e.setRenderTarget(x,M,S),e.xr.enabled=T,n.texture.needsPMREMUpdate=!0}}class Uo extends ht{constructor(e,t,n,r,a,o,c,d,h,p){e=e!==void 0?e:[],t=t!==void 0?t:Zn,super(e,t,n,r,a,o,c,d,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bu extends An{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Uo(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ut}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Si(5,5,5),a=new ln({name:"CubemapFromEquirect",uniforms:ti(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gt,blending:cn});a.uniforms.tEquirect.value=t;const o=new Kt(r,a),c=t.minFilter;return t.minFilter===wn&&(t.minFilter=Ut),new yu(1,10,this).update(e,o),t.minFilter=c,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(a)}}const zr=new G,Eu=new G,wu=new Ie;class xn{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=zr.subVectors(n,t).cross(Eu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(zr),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||wu.getNormalMatrix(e),r=this.coplanarPoint(zr).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gn=new xi,Xi=new G;class Io{constructor(e=new xn,t=new xn,n=new xn,r=new xn,a=new xn,o=new xn){this.planes=[e,t,n,r,a,o]}set(e,t,n,r,a,o){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(r),c[4].copy(a),c[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$t){const n=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],d=r[3],h=r[4],p=r[5],x=r[6],M=r[7],S=r[8],T=r[9],A=r[10],v=r[11],m=r[12],P=r[13],R=r[14],s=r[15];if(n[0].setComponents(d-a,M-h,v-S,s-m).normalize(),n[1].setComponents(d+a,M+h,v+S,s+m).normalize(),n[2].setComponents(d+o,M+p,v+T,s+P).normalize(),n[3].setComponents(d-o,M-p,v-T,s-P).normalize(),n[4].setComponents(d-c,M-x,v-A,s-R).normalize(),t===$t)n[5].setComponents(d+c,M+x,v+A,s+R).normalize();else if(t===ur)n[5].setComponents(c,x,A,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gn)}intersectsSprite(e){return gn.center.set(0,0,0),gn.radius=.7071067811865476,gn.applyMatrix4(e.matrixWorld),this.intersectsSphere(gn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Xi.x=r.normal.x>0?e.max.x:e.min.x,Xi.y=r.normal.y>0?e.max.y:e.min.y,Xi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Xi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function No(){let i=null,e=!1,t=null,n=null;function r(a,o){t(a,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function Tu(i){const e=new WeakMap;function t(c,d){const h=c.array,p=c.usage,x=h.byteLength,M=i.createBuffer();i.bindBuffer(d,M),i.bufferData(d,h,p),c.onUploadCallback();let S;if(h instanceof Float32Array)S=i.FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?S=i.HALF_FLOAT:S=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)S=i.SHORT;else if(h instanceof Uint32Array)S=i.UNSIGNED_INT;else if(h instanceof Int32Array)S=i.INT;else if(h instanceof Int8Array)S=i.BYTE;else if(h instanceof Uint8Array)S=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)S=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:M,type:S,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:x}}function n(c,d,h){const p=d.array,x=d._updateRange,M=d.updateRanges;if(i.bindBuffer(h,c),x.count===-1&&M.length===0&&i.bufferSubData(h,0,p),M.length!==0){for(let S=0,T=M.length;S<T;S++){const A=M[S];i.bufferSubData(h,A.start*p.BYTES_PER_ELEMENT,p,A.start,A.count)}d.clearUpdateRanges()}x.count!==-1&&(i.bufferSubData(h,x.offset*p.BYTES_PER_ELEMENT,p,x.offset,x.count),x.count=-1),d.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=e.get(c);d&&(i.deleteBuffer(d.buffer),e.delete(c))}function o(c,d){if(c.isGLBufferAttribute){const p=e.get(c);(!p||p.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=e.get(c);if(h===void 0)e.set(c,t(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,c,d),h.version=c.version}}return{get:r,remove:a,update:o}}class pr extends Ct{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,o=t/2,c=Math.floor(n),d=Math.floor(r),h=c+1,p=d+1,x=e/c,M=t/d,S=[],T=[],A=[],v=[];for(let m=0;m<p;m++){const P=m*M-o;for(let R=0;R<h;R++){const s=R*x-a;T.push(s,-P,0),A.push(0,0,1),v.push(R/c),v.push(1-m/d)}}for(let m=0;m<d;m++)for(let P=0;P<c;P++){const R=P+h*m,s=P+h*(m+1),l=P+1+h*(m+1),u=P+1+h*m;S.push(R,s,u),S.push(s,l,u)}this.setIndex(S),this.setAttribute("position",new bt(T,3)),this.setAttribute("normal",new bt(A,3)),this.setAttribute("uv",new bt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pr(e.width,e.height,e.widthSegments,e.heightSegments)}}var Au=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ru=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Du=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Uu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Iu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Fu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ou=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ku=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Hu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Gu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Vu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ju=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$u=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ku=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Zu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ju=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Qu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ed=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,td=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,id="gl_FragColor = linearToOutputTexel( gl_FragColor );",rd=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,ad=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,sd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,od=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ud=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ld=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,md=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_d=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Md=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,xd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ed=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Td=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ad=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Cd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ld=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ud=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Id=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Fd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Od=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Vd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Xd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$d=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Kd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,el=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tl=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,nl=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,il=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rl=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,al=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sl=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ol=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cl=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ul=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,dl=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ll=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fl=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hl=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pl=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ml=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_l=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gl=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vl=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ml=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,xl=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Sl=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,El=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,wl=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Tl=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Al=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rl=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ll=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dl=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ul=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Il=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Nl=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Fl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ol=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kl=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bl=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zl=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Hl=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gl=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vl=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wl=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Xl=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ql=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jl=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Yl=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$l=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kl=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Zl=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jl=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ql=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ef=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,tf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,af=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ue={alphahash_fragment:Au,alphahash_pars_fragment:Cu,alphamap_fragment:Ru,alphamap_pars_fragment:Pu,alphatest_fragment:Lu,alphatest_pars_fragment:Du,aomap_fragment:Uu,aomap_pars_fragment:Iu,batching_pars_vertex:Nu,batching_vertex:Fu,begin_vertex:Ou,beginnormal_vertex:ku,bsdfs:Bu,iridescence_fragment:zu,bumpmap_pars_fragment:Hu,clipping_planes_fragment:Gu,clipping_planes_pars_fragment:Vu,clipping_planes_pars_vertex:Wu,clipping_planes_vertex:Xu,color_fragment:qu,color_pars_fragment:ju,color_pars_vertex:Yu,color_vertex:$u,common:Ku,cube_uv_reflection_fragment:Zu,defaultnormal_vertex:Ju,displacementmap_pars_vertex:Qu,displacementmap_vertex:ed,emissivemap_fragment:td,emissivemap_pars_fragment:nd,colorspace_fragment:id,colorspace_pars_fragment:rd,envmap_fragment:ad,envmap_common_pars_fragment:sd,envmap_pars_fragment:od,envmap_pars_vertex:cd,envmap_physical_pars_fragment:Md,envmap_vertex:ud,fog_vertex:dd,fog_pars_vertex:ld,fog_fragment:fd,fog_pars_fragment:hd,gradientmap_pars_fragment:pd,lightmap_pars_fragment:md,lights_lambert_fragment:_d,lights_lambert_pars_fragment:gd,lights_pars_begin:vd,lights_toon_fragment:xd,lights_toon_pars_fragment:Sd,lights_phong_fragment:yd,lights_phong_pars_fragment:bd,lights_physical_fragment:Ed,lights_physical_pars_fragment:wd,lights_fragment_begin:Td,lights_fragment_maps:Ad,lights_fragment_end:Cd,logdepthbuf_fragment:Rd,logdepthbuf_pars_fragment:Pd,logdepthbuf_pars_vertex:Ld,logdepthbuf_vertex:Dd,map_fragment:Ud,map_pars_fragment:Id,map_particle_fragment:Nd,map_particle_pars_fragment:Fd,metalnessmap_fragment:Od,metalnessmap_pars_fragment:kd,morphinstance_vertex:Bd,morphcolor_vertex:zd,morphnormal_vertex:Hd,morphtarget_pars_vertex:Gd,morphtarget_vertex:Vd,normal_fragment_begin:Wd,normal_fragment_maps:Xd,normal_pars_fragment:qd,normal_pars_vertex:jd,normal_vertex:Yd,normalmap_pars_fragment:$d,clearcoat_normal_fragment_begin:Kd,clearcoat_normal_fragment_maps:Zd,clearcoat_pars_fragment:Jd,iridescence_pars_fragment:Qd,opaque_fragment:el,packing:tl,premultiplied_alpha_fragment:nl,project_vertex:il,dithering_fragment:rl,dithering_pars_fragment:al,roughnessmap_fragment:sl,roughnessmap_pars_fragment:ol,shadowmap_pars_fragment:cl,shadowmap_pars_vertex:ul,shadowmap_vertex:dl,shadowmask_pars_fragment:ll,skinbase_vertex:fl,skinning_pars_vertex:hl,skinning_vertex:pl,skinnormal_vertex:ml,specularmap_fragment:_l,specularmap_pars_fragment:gl,tonemapping_fragment:vl,tonemapping_pars_fragment:Ml,transmission_fragment:xl,transmission_pars_fragment:Sl,uv_pars_fragment:yl,uv_pars_vertex:bl,uv_vertex:El,worldpos_vertex:wl,background_vert:Tl,background_frag:Al,backgroundCube_vert:Cl,backgroundCube_frag:Rl,cube_vert:Pl,cube_frag:Ll,depth_vert:Dl,depth_frag:Ul,distanceRGBA_vert:Il,distanceRGBA_frag:Nl,equirect_vert:Fl,equirect_frag:Ol,linedashed_vert:kl,linedashed_frag:Bl,meshbasic_vert:zl,meshbasic_frag:Hl,meshlambert_vert:Gl,meshlambert_frag:Vl,meshmatcap_vert:Wl,meshmatcap_frag:Xl,meshnormal_vert:ql,meshnormal_frag:jl,meshphong_vert:Yl,meshphong_frag:$l,meshphysical_vert:Kl,meshphysical_frag:Zl,meshtoon_vert:Jl,meshtoon_frag:Ql,points_vert:ef,points_frag:tf,shadow_vert:nf,shadow_frag:rf,sprite_vert:af,sprite_frag:sf},ce={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},Ot={basic:{uniforms:ft([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:ft([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:ft([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:ft([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:ft([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:ft([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:ft([ce.points,ce.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:ft([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:ft([ce.common,ce.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:ft([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:ft([ce.sprite,ce.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:ft([ce.common,ce.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:ft([ce.lights,ce.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};Ot.physical={uniforms:ft([Ot.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const qi={r:0,b:0,g:0},vn=new Jt,of=new Qe;function cf(i,e,t,n,r,a,o){const c=new Ve(0);let d=a===!0?0:1,h,p,x=null,M=0,S=null;function T(P){let R=P.isScene===!0?P.background:null;return R&&R.isTexture&&(R=(P.backgroundBlurriness>0?t:e).get(R)),R}function A(P){let R=!1;const s=T(P);s===null?m(c,d):s&&s.isColor&&(m(s,1),R=!0);const l=i.xr.getEnvironmentBlendMode();l==="additive"?n.buffers.color.setClear(0,0,0,1,o):l==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||R)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(P,R){const s=T(R);s&&(s.isCubeTexture||s.mapping===fr)?(p===void 0&&(p=new Kt(new Si(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:ti(Ot.backgroundCube.uniforms),vertexShader:Ot.backgroundCube.vertexShader,fragmentShader:Ot.backgroundCube.fragmentShader,side:gt,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(l,u,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),vn.copy(R.backgroundRotation),vn.x*=-1,vn.y*=-1,vn.z*=-1,s.isCubeTexture&&s.isRenderTargetTexture===!1&&(vn.y*=-1,vn.z*=-1),p.material.uniforms.envMap.value=s,p.material.uniforms.flipEnvMap.value=s.isCubeTexture&&s.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(of.makeRotationFromEuler(vn)),p.material.toneMapped=Xe.getTransfer(s.colorSpace)!==Ye,(x!==s||M!==s.version||S!==i.toneMapping)&&(p.material.needsUpdate=!0,x=s,M=s.version,S=i.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null)):s&&s.isTexture&&(h===void 0&&(h=new Kt(new pr(2,2),new ln({name:"BackgroundMaterial",uniforms:ti(Ot.background.uniforms),vertexShader:Ot.background.vertexShader,fragmentShader:Ot.background.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=s,h.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,h.material.toneMapped=Xe.getTransfer(s.colorSpace)!==Ye,s.matrixAutoUpdate===!0&&s.updateMatrix(),h.material.uniforms.uvTransform.value.copy(s.matrix),(x!==s||M!==s.version||S!==i.toneMapping)&&(h.material.needsUpdate=!0,x=s,M=s.version,S=i.toneMapping),h.layers.enableAll(),P.unshift(h,h.geometry,h.material,0,0,null))}function m(P,R){P.getRGB(qi,Lo(i)),n.buffers.color.setClear(qi.r,qi.g,qi.b,R,o)}return{getClearColor:function(){return c},setClearColor:function(P,R=1){c.set(P),d=R,m(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(P){d=P,m(c,d)},render:A,addToRenderList:v}}function uf(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=M(null);let a=r,o=!1;function c(f,b,N,D,F){let O=!1;const E=x(D,N,b);a!==E&&(a=E,h(a.object)),O=S(f,D,N,F),O&&T(f,D,N,F),F!==null&&e.update(F,i.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,s(f,b,N,D),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function d(){return i.createVertexArray()}function h(f){return i.bindVertexArray(f)}function p(f){return i.deleteVertexArray(f)}function x(f,b,N){const D=N.wireframe===!0;let F=n[f.id];F===void 0&&(F={},n[f.id]=F);let O=F[b.id];O===void 0&&(O={},F[b.id]=O);let E=O[D];return E===void 0&&(E=M(d()),O[D]=E),E}function M(f){const b=[],N=[],D=[];for(let F=0;F<t;F++)b[F]=0,N[F]=0,D[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:N,attributeDivisors:D,object:f,attributes:{},index:null}}function S(f,b,N,D){const F=a.attributes,O=b.attributes;let E=0;const I=N.getAttributes();for(const k in I)if(I[k].location>=0){const ee=F[k];let Y=O[k];if(Y===void 0&&(k==="instanceMatrix"&&f.instanceMatrix&&(Y=f.instanceMatrix),k==="instanceColor"&&f.instanceColor&&(Y=f.instanceColor)),ee===void 0||ee.attribute!==Y||Y&&ee.data!==Y.data)return!0;E++}return a.attributesNum!==E||a.index!==D}function T(f,b,N,D){const F={},O=b.attributes;let E=0;const I=N.getAttributes();for(const k in I)if(I[k].location>=0){let ee=O[k];ee===void 0&&(k==="instanceMatrix"&&f.instanceMatrix&&(ee=f.instanceMatrix),k==="instanceColor"&&f.instanceColor&&(ee=f.instanceColor));const Y={};Y.attribute=ee,ee&&ee.data&&(Y.data=ee.data),F[k]=Y,E++}a.attributes=F,a.attributesNum=E,a.index=D}function A(){const f=a.newAttributes;for(let b=0,N=f.length;b<N;b++)f[b]=0}function v(f){m(f,0)}function m(f,b){const N=a.newAttributes,D=a.enabledAttributes,F=a.attributeDivisors;N[f]=1,D[f]===0&&(i.enableVertexAttribArray(f),D[f]=1),F[f]!==b&&(i.vertexAttribDivisor(f,b),F[f]=b)}function P(){const f=a.newAttributes,b=a.enabledAttributes;for(let N=0,D=b.length;N<D;N++)b[N]!==f[N]&&(i.disableVertexAttribArray(N),b[N]=0)}function R(f,b,N,D,F,O,E){E===!0?i.vertexAttribIPointer(f,b,N,F,O):i.vertexAttribPointer(f,b,N,D,F,O)}function s(f,b,N,D){A();const F=D.attributes,O=N.getAttributes(),E=b.defaultAttributeValues;for(const I in O){const k=O[I];if(k.location>=0){let j=F[I];if(j===void 0&&(I==="instanceMatrix"&&f.instanceMatrix&&(j=f.instanceMatrix),I==="instanceColor"&&f.instanceColor&&(j=f.instanceColor)),j!==void 0){const ee=j.normalized,Y=j.itemSize,Me=e.get(j);if(Me===void 0)continue;const Te=Me.buffer,q=Me.type,Z=Me.bytesPerElement,oe=q===i.INT||q===i.UNSIGNED_INT||j.gpuType===Na;if(j.isInterleavedBufferAttribute){const ae=j.data,_e=ae.stride,Re=j.offset;if(ae.isInstancedInterleavedBuffer){for(let Le=0;Le<k.locationSize;Le++)m(k.location+Le,ae.meshPerAttribute);f.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Le=0;Le<k.locationSize;Le++)v(k.location+Le);i.bindBuffer(i.ARRAY_BUFFER,Te);for(let Le=0;Le<k.locationSize;Le++)R(k.location+Le,Y/k.locationSize,q,ee,_e*Z,(Re+Y/k.locationSize*Le)*Z,oe)}else{if(j.isInstancedBufferAttribute){for(let ae=0;ae<k.locationSize;ae++)m(k.location+ae,j.meshPerAttribute);f.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ae=0;ae<k.locationSize;ae++)v(k.location+ae);i.bindBuffer(i.ARRAY_BUFFER,Te);for(let ae=0;ae<k.locationSize;ae++)R(k.location+ae,Y/k.locationSize,q,ee,Y*Z,Y/k.locationSize*ae*Z,oe)}}else if(E!==void 0){const ee=E[I];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(k.location,ee);break;case 3:i.vertexAttrib3fv(k.location,ee);break;case 4:i.vertexAttrib4fv(k.location,ee);break;default:i.vertexAttrib1fv(k.location,ee)}}}}P()}function l(){y();for(const f in n){const b=n[f];for(const N in b){const D=b[N];for(const F in D)p(D[F].object),delete D[F];delete b[N]}delete n[f]}}function u(f){if(n[f.id]===void 0)return;const b=n[f.id];for(const N in b){const D=b[N];for(const F in D)p(D[F].object),delete D[F];delete b[N]}delete n[f.id]}function _(f){for(const b in n){const N=n[b];if(N[f.id]===void 0)continue;const D=N[f.id];for(const F in D)p(D[F].object),delete D[F];delete N[f.id]}}function y(){g(),o=!0,a!==r&&(a=r,h(a.object))}function g(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:c,reset:y,resetDefaultState:g,dispose:l,releaseStatesOfGeometry:u,releaseStatesOfProgram:_,initAttributes:A,enableAttribute:v,disableUnusedAttributes:P}}function df(i,e,t){let n;function r(h){n=h}function a(h,p){i.drawArrays(n,h,p),t.update(p,n,1)}function o(h,p,x){x!==0&&(i.drawArraysInstanced(n,h,p,x),t.update(p,n,x))}function c(h,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,p,0,x);let S=0;for(let T=0;T<x;T++)S+=p[T];t.update(S,n,1)}function d(h,p,x,M){if(x===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let T=0;T<h.length;T++)o(h[T],p[T],M[T]);else{S.multiDrawArraysInstancedWEBGL(n,h,0,p,0,M,0,x);let T=0;for(let A=0;A<x;A++)T+=p[A];for(let A=0;A<M.length;A++)t.update(T,n,M[A])}}this.setMode=r,this.render=a,this.renderInstances=o,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function lf(i,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const u=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(u.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(u){return!(u!==It&&n.convert(u)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(u){const _=u===_i&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(u!==Zt&&n.convert(u)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&u!==Yt&&!_)}function d(u){if(u==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";u="mediump"}return u==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=d(h);p!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const x=t.logarithmicDepthBuffer===!0,M=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=i.getParameter(i.MAX_TEXTURE_SIZE),A=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),P=i.getParameter(i.MAX_VARYING_VECTORS),R=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),s=S>0,l=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:o,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:x,maxTextures:M,maxVertexTextures:S,maxTextureSize:T,maxCubemapSize:A,maxAttributes:v,maxVertexUniforms:m,maxVaryings:P,maxFragmentUniforms:R,vertexTextures:s,maxSamples:l}}function ff(i){const e=this;let t=null,n=0,r=!1,a=!1;const o=new xn,c=new Ie,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(x,M){const S=x.length!==0||M||n!==0||r;return r=M,n=x.length,S},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(x,M){t=p(x,M,0)},this.setState=function(x,M,S){const T=x.clippingPlanes,A=x.clipIntersection,v=x.clipShadows,m=i.get(x);if(!r||T===null||T.length===0||a&&!v)a?p(null):h();else{const P=a?0:n,R=P*4;let s=m.clippingState||null;d.value=s,s=p(T,M,R,S);for(let l=0;l!==R;++l)s[l]=t[l];m.clippingState=s,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=P}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(x,M,S,T){const A=x!==null?x.length:0;let v=null;if(A!==0){if(v=d.value,T!==!0||v===null){const m=S+A*4,P=M.matrixWorldInverse;c.getNormalMatrix(P),(v===null||v.length<m)&&(v=new Float32Array(m));for(let R=0,s=S;R!==A;++R,s+=4)o.copy(x[R]).applyMatrix4(P,c),o.normal.toArray(v,s),v[s+3]=o.constant}d.value=v,d.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,v}}function hf(i){let e=new WeakMap;function t(o,c){return c===ta?o.mapping=Zn:c===na&&(o.mapping=Jn),o}function n(o){if(o&&o.isTexture){const c=o.mapping;if(c===ta||c===na)if(e.has(o)){const d=e.get(o).texture;return t(d,o.mapping)}else{const d=o.image;if(d&&d.height>0){const h=new bu(d.height);return h.fromEquirectangularTexture(i,o),e.set(o,h),o.addEventListener("dispose",r),t(h.texture,o.mapping)}else return null}}return o}function r(o){const c=o.target;c.removeEventListener("dispose",r);const d=e.get(c);d!==void 0&&(e.delete(c),d.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class pf extends Do{constructor(e=-1,t=1,n=1,r=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,o=n+e,c=r+t,d=r-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,o=a+h*this.view.width,c-=p*this.view.offsetY,d=c-p*this.view.height}this.projectionMatrix.makeOrthographic(a,o,c,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const jn=4,As=[.125,.215,.35,.446,.526,.582],bn=20,Hr=new pf,Cs=new Ve;let Gr=null,Vr=0,Wr=0,Xr=!1;const Sn=(1+Math.sqrt(5))/2,Xn=1/Sn,Rs=[new G(-Sn,Xn,0),new G(Sn,Xn,0),new G(-Xn,0,Sn),new G(Xn,0,Sn),new G(0,Sn,-Xn),new G(0,Sn,Xn),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)];class Ps{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Gr=this._renderer.getRenderTarget(),Vr=this._renderer.getActiveCubeFace(),Wr=this._renderer.getActiveMipmapLevel(),Xr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Us(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ds(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Gr,Vr,Wr),this._renderer.xr.enabled=Xr,e.scissorTest=!1,ji(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zn||e.mapping===Jn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gr=this._renderer.getRenderTarget(),Vr=this._renderer.getActiveCubeFace(),Wr=this._renderer.getActiveMipmapLevel(),Xr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ut,minFilter:Ut,generateMipmaps:!1,type:_i,format:It,colorSpace:fn,depthBuffer:!1},r=Ls(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ls(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mf(a)),this._blurMaterial=_f(a,e,t)}return r}_compileMaterial(e){const t=new Kt(this._lodPlanes[0],e);this._renderer.compile(t,Hr)}_sceneToCubeUV(e,t,n,r){const c=new Tt(90,1,t,n),d=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,x=p.autoClear,M=p.toneMapping;p.getClearColor(Cs),p.toneMapping=un,p.autoClear=!1;const S=new Co({name:"PMREM.Background",side:gt,depthWrite:!1,depthTest:!1}),T=new Kt(new Si,S);let A=!1;const v=e.background;v?v.isColor&&(S.color.copy(v),e.background=null,A=!0):(S.color.copy(Cs),A=!0);for(let m=0;m<6;m++){const P=m%3;P===0?(c.up.set(0,d[m],0),c.lookAt(h[m],0,0)):P===1?(c.up.set(0,0,d[m]),c.lookAt(0,h[m],0)):(c.up.set(0,d[m],0),c.lookAt(0,0,h[m]));const R=this._cubeSize;ji(r,P*R,m>2?R:0,R,R),p.setRenderTarget(r),A&&p.render(T,c),p.render(e,c)}T.geometry.dispose(),T.material.dispose(),p.toneMapping=M,p.autoClear=x,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Zn||e.mapping===Jn;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Us()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ds());const a=r?this._cubemapMaterial:this._equirectMaterial,o=new Kt(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=e;const d=this._cubeSize;ji(t,0,0,3*d,2*d),n.setRenderTarget(t),n.render(o,Hr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const o=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),c=Rs[(r-a-1)%Rs.length];this._blur(e,a-1,a,o,c)}t.autoClear=n}_blur(e,t,n,r,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",a),this._halfBlur(o,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,o,c){const d=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,x=new Kt(this._lodPlanes[r],h),M=h.uniforms,S=this._sizeLods[n]-1,T=isFinite(a)?Math.PI/(2*S):2*Math.PI/(2*bn-1),A=a/T,v=isFinite(a)?1+Math.floor(p*A):bn;v>bn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${bn}`);const m=[];let P=0;for(let _=0;_<bn;++_){const y=_/A,g=Math.exp(-y*y/2);m.push(g),_===0?P+=g:_<v&&(P+=2*g)}for(let _=0;_<m.length;_++)m[_]=m[_]/P;M.envMap.value=e.texture,M.samples.value=v,M.weights.value=m,M.latitudinal.value=o==="latitudinal",c&&(M.poleAxis.value=c);const{_lodMax:R}=this;M.dTheta.value=T,M.mipInt.value=R-n;const s=this._sizeLods[r],l=3*s*(r>R-jn?r-R+jn:0),u=4*(this._cubeSize-s);ji(t,l,u,3*s,2*s),d.setRenderTarget(t),d.render(x,Hr)}}function mf(i){const e=[],t=[],n=[];let r=i;const a=i-jn+1+As.length;for(let o=0;o<a;o++){const c=Math.pow(2,r);t.push(c);let d=1/c;o>i-jn?d=As[o-i+jn-1]:o===0&&(d=0),n.push(d);const h=1/(c-2),p=-h,x=1+h,M=[p,p,x,p,x,x,p,p,x,x,p,x],S=6,T=6,A=3,v=2,m=1,P=new Float32Array(A*T*S),R=new Float32Array(v*T*S),s=new Float32Array(m*T*S);for(let u=0;u<S;u++){const _=u%3*2/3-1,y=u>2?0:-1,g=[_,y,0,_+2/3,y,0,_+2/3,y+1,0,_,y,0,_+2/3,y+1,0,_,y+1,0];P.set(g,A*T*u),R.set(M,v*T*u);const f=[u,u,u,u,u,u];s.set(f,m*T*u)}const l=new Ct;l.setAttribute("position",new Nt(P,A)),l.setAttribute("uv",new Nt(R,v)),l.setAttribute("faceIndex",new Nt(s,m)),e.push(l),r>jn&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ls(i,e,t){const n=new An(i,e,t);return n.texture.mapping=fr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ji(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function _f(i,e,t){const n=new Float32Array(bn),r=new G(0,1,0);return new ln({name:"SphericalGaussianBlur",defines:{n:bn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:cn,depthTest:!1,depthWrite:!1})}function Ds(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:cn,depthTest:!1,depthWrite:!1})}function Us(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cn,depthTest:!1,depthWrite:!1})}function Va(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function gf(i){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const d=c.mapping,h=d===ta||d===na,p=d===Zn||d===Jn;if(h||p){let x=e.get(c);const M=x!==void 0?x.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==M)return t===null&&(t=new Ps(i)),x=h?t.fromEquirectangular(c,x):t.fromCubemap(c,x),x.texture.pmremVersion=c.pmremVersion,e.set(c,x),x.texture;if(x!==void 0)return x.texture;{const S=c.image;return h&&S&&S.height>0||p&&S&&r(S)?(t===null&&(t=new Ps(i)),x=h?t.fromEquirectangular(c):t.fromCubemap(c),x.texture.pmremVersion=c.pmremVersion,e.set(c,x),c.addEventListener("dispose",a),x.texture):null}}}return c}function r(c){let d=0;const h=6;for(let p=0;p<h;p++)c[p]!==void 0&&d++;return d===h}function a(c){const d=c.target;d.removeEventListener("dispose",a);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function vf(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&bo("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Mf(i,e,t,n){const r={},a=new WeakMap;function o(x){const M=x.target;M.index!==null&&e.remove(M.index);for(const T in M.attributes)e.remove(M.attributes[T]);for(const T in M.morphAttributes){const A=M.morphAttributes[T];for(let v=0,m=A.length;v<m;v++)e.remove(A[v])}M.removeEventListener("dispose",o),delete r[M.id];const S=a.get(M);S&&(e.remove(S),a.delete(M)),n.releaseStatesOfGeometry(M),M.isInstancedBufferGeometry===!0&&delete M._maxInstanceCount,t.memory.geometries--}function c(x,M){return r[M.id]===!0||(M.addEventListener("dispose",o),r[M.id]=!0,t.memory.geometries++),M}function d(x){const M=x.attributes;for(const T in M)e.update(M[T],i.ARRAY_BUFFER);const S=x.morphAttributes;for(const T in S){const A=S[T];for(let v=0,m=A.length;v<m;v++)e.update(A[v],i.ARRAY_BUFFER)}}function h(x){const M=[],S=x.index,T=x.attributes.position;let A=0;if(S!==null){const P=S.array;A=S.version;for(let R=0,s=P.length;R<s;R+=3){const l=P[R+0],u=P[R+1],_=P[R+2];M.push(l,u,u,_,_,l)}}else if(T!==void 0){const P=T.array;A=T.version;for(let R=0,s=P.length/3-1;R<s;R+=3){const l=R+0,u=R+1,_=R+2;M.push(l,u,u,_,_,l)}}else return;const v=new(yo(M)?Po:Ro)(M,1);v.version=A;const m=a.get(x);m&&e.remove(m),a.set(x,v)}function p(x){const M=a.get(x);if(M){const S=x.index;S!==null&&M.version<S.version&&h(x)}else h(x);return a.get(x)}return{get:c,update:d,getWireframeAttribute:p}}function xf(i,e,t){let n;function r(M){n=M}let a,o;function c(M){a=M.type,o=M.bytesPerElement}function d(M,S){i.drawElements(n,S,a,M*o),t.update(S,n,1)}function h(M,S,T){T!==0&&(i.drawElementsInstanced(n,S,a,M*o,T),t.update(S,n,T))}function p(M,S,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,S,0,a,M,0,T);let v=0;for(let m=0;m<T;m++)v+=S[m];t.update(v,n,1)}function x(M,S,T,A){if(T===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let m=0;m<M.length;m++)h(M[m]/o,S[m],A[m]);else{v.multiDrawElementsInstancedWEBGL(n,S,0,a,M,0,A,0,T);let m=0;for(let P=0;P<T;P++)m+=S[P];for(let P=0;P<A.length;P++)t.update(m,n,A[P])}}this.setMode=r,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=x}function Sf(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,o,c){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=c*(a/3);break;case i.LINES:t.lines+=c*(a/2);break;case i.LINE_STRIP:t.lines+=c*(a-1);break;case i.LINE_LOOP:t.lines+=c*a;break;case i.POINTS:t.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function yf(i,e,t){const n=new WeakMap,r=new ot;function a(o,c,d){const h=o.morphTargetInfluences,p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,x=p!==void 0?p.length:0;let M=n.get(c);if(M===void 0||M.count!==x){let f=function(){y.dispose(),n.delete(c),c.removeEventListener("dispose",f)};var S=f;M!==void 0&&M.texture.dispose();const T=c.morphAttributes.position!==void 0,A=c.morphAttributes.normal!==void 0,v=c.morphAttributes.color!==void 0,m=c.morphAttributes.position||[],P=c.morphAttributes.normal||[],R=c.morphAttributes.color||[];let s=0;T===!0&&(s=1),A===!0&&(s=2),v===!0&&(s=3);let l=c.attributes.position.count*s,u=1;l>e.maxTextureSize&&(u=Math.ceil(l/e.maxTextureSize),l=e.maxTextureSize);const _=new Float32Array(l*u*4*x),y=new wo(_,l,u,x);y.type=Yt,y.needsUpdate=!0;const g=s*4;for(let b=0;b<x;b++){const N=m[b],D=P[b],F=R[b],O=l*u*4*b;for(let E=0;E<N.count;E++){const I=E*g;T===!0&&(r.fromBufferAttribute(N,E),_[O+I+0]=r.x,_[O+I+1]=r.y,_[O+I+2]=r.z,_[O+I+3]=0),A===!0&&(r.fromBufferAttribute(D,E),_[O+I+4]=r.x,_[O+I+5]=r.y,_[O+I+6]=r.z,_[O+I+7]=0),v===!0&&(r.fromBufferAttribute(F,E),_[O+I+8]=r.x,_[O+I+9]=r.y,_[O+I+10]=r.z,_[O+I+11]=F.itemSize===4?r.w:1)}}M={count:x,texture:y,size:new ke(l,u)},n.set(c,M),c.addEventListener("dispose",f)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)d.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let T=0;for(let v=0;v<h.length;v++)T+=h[v];const A=c.morphTargetsRelative?1:1-T;d.getUniforms().setValue(i,"morphTargetBaseInfluence",A),d.getUniforms().setValue(i,"morphTargetInfluences",h)}d.getUniforms().setValue(i,"morphTargetsTexture",M.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",M.size)}return{update:a}}function bf(i,e,t,n){let r=new WeakMap;function a(d){const h=n.render.frame,p=d.geometry,x=e.get(d,p);if(r.get(x)!==h&&(e.update(x),r.set(x,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",c)===!1&&d.addEventListener("dispose",c),r.get(d)!==h&&(t.update(d.instanceMatrix,i.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,i.ARRAY_BUFFER),r.set(d,h))),d.isSkinnedMesh){const M=d.skeleton;r.get(M)!==h&&(M.update(),r.set(M,h))}return x}function o(){r=new WeakMap}function c(d){const h=d.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}class Fo extends ht{constructor(e,t,n,r,a,o,c,d,h,p=$n){if(p!==$n&&p!==ei)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&p===$n&&(n=Tn),n===void 0&&p===ei&&(n=Qn),super(null,r,a,o,c,d,p,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:At,this.minFilter=d!==void 0?d:At,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Oo=new ht,Is=new Fo(1,1),ko=new wo,Bo=new ou,zo=new Uo,Ns=[],Fs=[],Os=new Float32Array(16),ks=new Float32Array(9),Bs=new Float32Array(4);function ri(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=Ns[r];if(a===void 0&&(a=new Float32Array(r),Ns[r]=a),e!==0){n.toArray(a,0);for(let o=1,c=0;o!==e;++o)c+=t,i[o].toArray(a,c)}return a}function rt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function at(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function mr(i,e){let t=Fs[e];t===void 0&&(t=new Int32Array(e),Fs[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ef(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function wf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rt(t,e))return;i.uniform2fv(this.addr,e),at(t,e)}}function Tf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rt(t,e))return;i.uniform3fv(this.addr,e),at(t,e)}}function Af(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rt(t,e))return;i.uniform4fv(this.addr,e),at(t,e)}}function Cf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(rt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),at(t,e)}else{if(rt(t,n))return;Bs.set(n),i.uniformMatrix2fv(this.addr,!1,Bs),at(t,n)}}function Rf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(rt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),at(t,e)}else{if(rt(t,n))return;ks.set(n),i.uniformMatrix3fv(this.addr,!1,ks),at(t,n)}}function Pf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(rt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),at(t,e)}else{if(rt(t,n))return;Os.set(n),i.uniformMatrix4fv(this.addr,!1,Os),at(t,n)}}function Lf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Df(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rt(t,e))return;i.uniform2iv(this.addr,e),at(t,e)}}function Uf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rt(t,e))return;i.uniform3iv(this.addr,e),at(t,e)}}function If(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rt(t,e))return;i.uniform4iv(this.addr,e),at(t,e)}}function Nf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ff(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rt(t,e))return;i.uniform2uiv(this.addr,e),at(t,e)}}function Of(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rt(t,e))return;i.uniform3uiv(this.addr,e),at(t,e)}}function kf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rt(t,e))return;i.uniform4uiv(this.addr,e),at(t,e)}}function Bf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let a;this.type===i.SAMPLER_2D_SHADOW?(Is.compareFunction=So,a=Is):a=Oo,t.setTexture2D(e||a,r)}function zf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Bo,r)}function Hf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||zo,r)}function Gf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||ko,r)}function Vf(i){switch(i){case 5126:return Ef;case 35664:return wf;case 35665:return Tf;case 35666:return Af;case 35674:return Cf;case 35675:return Rf;case 35676:return Pf;case 5124:case 35670:return Lf;case 35667:case 35671:return Df;case 35668:case 35672:return Uf;case 35669:case 35673:return If;case 5125:return Nf;case 36294:return Ff;case 36295:return Of;case 36296:return kf;case 35678:case 36198:case 36298:case 36306:case 35682:return Bf;case 35679:case 36299:case 36307:return zf;case 35680:case 36300:case 36308:case 36293:return Hf;case 36289:case 36303:case 36311:case 36292:return Gf}}function Wf(i,e){i.uniform1fv(this.addr,e)}function Xf(i,e){const t=ri(e,this.size,2);i.uniform2fv(this.addr,t)}function qf(i,e){const t=ri(e,this.size,3);i.uniform3fv(this.addr,t)}function jf(i,e){const t=ri(e,this.size,4);i.uniform4fv(this.addr,t)}function Yf(i,e){const t=ri(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function $f(i,e){const t=ri(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Kf(i,e){const t=ri(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Zf(i,e){i.uniform1iv(this.addr,e)}function Jf(i,e){i.uniform2iv(this.addr,e)}function Qf(i,e){i.uniform3iv(this.addr,e)}function eh(i,e){i.uniform4iv(this.addr,e)}function th(i,e){i.uniform1uiv(this.addr,e)}function nh(i,e){i.uniform2uiv(this.addr,e)}function ih(i,e){i.uniform3uiv(this.addr,e)}function rh(i,e){i.uniform4uiv(this.addr,e)}function ah(i,e,t){const n=this.cache,r=e.length,a=mr(t,r);rt(n,a)||(i.uniform1iv(this.addr,a),at(n,a));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Oo,a[o])}function sh(i,e,t){const n=this.cache,r=e.length,a=mr(t,r);rt(n,a)||(i.uniform1iv(this.addr,a),at(n,a));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Bo,a[o])}function oh(i,e,t){const n=this.cache,r=e.length,a=mr(t,r);rt(n,a)||(i.uniform1iv(this.addr,a),at(n,a));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||zo,a[o])}function ch(i,e,t){const n=this.cache,r=e.length,a=mr(t,r);rt(n,a)||(i.uniform1iv(this.addr,a),at(n,a));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||ko,a[o])}function uh(i){switch(i){case 5126:return Wf;case 35664:return Xf;case 35665:return qf;case 35666:return jf;case 35674:return Yf;case 35675:return $f;case 35676:return Kf;case 5124:case 35670:return Zf;case 35667:case 35671:return Jf;case 35668:case 35672:return Qf;case 35669:case 35673:return eh;case 5125:return th;case 36294:return nh;case 36295:return ih;case 36296:return rh;case 35678:case 36198:case 36298:case 36306:case 35682:return ah;case 35679:case 36299:case 36307:return sh;case 35680:case 36300:case 36308:case 36293:return oh;case 36289:case 36303:case 36311:case 36292:return ch}}class dh{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Vf(t.type)}}class lh{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=uh(t.type)}}class fh{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const c=r[a];c.setValue(e,t[c.id],n)}}}const qr=/(\w+)(\])?(\[|\.)?/g;function zs(i,e){i.seq.push(e),i.map[e.id]=e}function hh(i,e,t){const n=i.name,r=n.length;for(qr.lastIndex=0;;){const a=qr.exec(n),o=qr.lastIndex;let c=a[1];const d=a[2]==="]",h=a[3];if(d&&(c=c|0),h===void 0||h==="["&&o+2===r){zs(t,h===void 0?new dh(c,i,e):new lh(c,i,e));break}else{let x=t.map[c];x===void 0&&(x=new fh(c),zs(t,x)),t=x}}}class rr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),o=e.getUniformLocation(t,a.name);hh(a,o,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,o=t.length;a!==o;++a){const c=t[a],d=n[c.id];d.needsUpdate!==!1&&c.setValue(e,d.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Hs(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const ph=37297;let mh=0;function _h(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=r;o<a;o++){const c=o+1;n.push(`${c===e?">":" "} ${c}: ${t[o]}`)}return n.join(`
`)}function gh(i){const e=Xe.getPrimaries(Xe.workingColorSpace),t=Xe.getPrimaries(i);let n;switch(e===t?n="":e===cr&&t===or?n="LinearDisplayP3ToLinearSRGB":e===or&&t===cr&&(n="LinearSRGBToLinearDisplayP3"),i){case fn:case hr:return[n,"LinearTransferOETF"];case yt:case Ha:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Gs(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+_h(i.getShaderSource(e),o)}else return r}function vh(i,e){const t=gh(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Mh(i,e){let t;switch(e){case Ic:t="Linear";break;case Nc:t="Reinhard";break;case Fc:t="OptimizedCineon";break;case Oc:t="ACESFilmic";break;case Bc:t="AgX";break;case zc:t="Neutral";break;case kc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function xh(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(li).join(`
`)}function Sh(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function yh(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),o=a.name;let c=1;a.type===i.FLOAT_MAT2&&(c=2),a.type===i.FLOAT_MAT3&&(c=3),a.type===i.FLOAT_MAT4&&(c=4),t[o]={type:a.type,location:i.getAttribLocation(e,o),locationSize:c}}return t}function li(i){return i!==""}function Vs(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ws(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bh=/^[ \t]*#include +<([\w\d./]+)>/gm;function Da(i){return i.replace(bh,wh)}const Eh=new Map;function wh(i,e){let t=Ue[e];if(t===void 0){const n=Eh.get(e);if(n!==void 0)t=Ue[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Da(t)}const Th=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xs(i){return i.replace(Th,Ah)}function Ah(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function qs(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ch(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===oo?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===sc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===qt&&(e="SHADOWMAP_TYPE_VSM"),e}function Rh(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Zn:case Jn:e="ENVMAP_TYPE_CUBE";break;case fr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ph(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Jn:e="ENVMAP_MODE_REFRACTION";break}return e}function Lh(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case co:e="ENVMAP_BLENDING_MULTIPLY";break;case Dc:e="ENVMAP_BLENDING_MIX";break;case Uc:e="ENVMAP_BLENDING_ADD";break}return e}function Dh(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Uh(i,e,t,n){const r=i.getContext(),a=t.defines;let o=t.vertexShader,c=t.fragmentShader;const d=Ch(t),h=Rh(t),p=Ph(t),x=Lh(t),M=Dh(t),S=xh(t),T=Sh(a),A=r.createProgram();let v,m,P=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(li).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(li).join(`
`),m.length>0&&(m+=`
`)):(v=[qs(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(li).join(`
`),m=[qs(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+x:"",M?"#define CUBEUV_TEXEL_WIDTH "+M.texelWidth:"",M?"#define CUBEUV_TEXEL_HEIGHT "+M.texelHeight:"",M?"#define CUBEUV_MAX_MIP "+M.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==un?"#define TONE_MAPPING":"",t.toneMapping!==un?Ue.tonemapping_pars_fragment:"",t.toneMapping!==un?Mh("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,vh("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(li).join(`
`)),o=Da(o),o=Vs(o,t),o=Ws(o,t),c=Da(c),c=Vs(c,t),c=Ws(c,t),o=Xs(o),c=Xs(c),t.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,v=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",t.glslVersion===os?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===os?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const R=P+v+o,s=P+m+c,l=Hs(r,r.VERTEX_SHADER,R),u=Hs(r,r.FRAGMENT_SHADER,s);r.attachShader(A,l),r.attachShader(A,u),t.index0AttributeName!==void 0?r.bindAttribLocation(A,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(A,0,"position"),r.linkProgram(A);function _(b){if(i.debug.checkShaderErrors){const N=r.getProgramInfoLog(A).trim(),D=r.getShaderInfoLog(l).trim(),F=r.getShaderInfoLog(u).trim();let O=!0,E=!0;if(r.getProgramParameter(A,r.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,A,l,u);else{const I=Gs(r,l,"vertex"),k=Gs(r,u,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(A,r.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+N+`
`+I+`
`+k)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(D===""||F==="")&&(E=!1);E&&(b.diagnostics={runnable:O,programLog:N,vertexShader:{log:D,prefix:v},fragmentShader:{log:F,prefix:m}})}r.deleteShader(l),r.deleteShader(u),y=new rr(r,A),g=yh(r,A)}let y;this.getUniforms=function(){return y===void 0&&_(this),y};let g;this.getAttributes=function(){return g===void 0&&_(this),g};let f=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return f===!1&&(f=r.getProgramParameter(A,ph)),f},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=mh++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=l,this.fragmentShader=u,this}let Ih=0;class Nh{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Fh(e),t.set(e,n)),n}}class Fh{constructor(e){this.id=Ih++,this.code=e,this.usedTimes=0}}function Oh(i,e,t,n,r,a,o){const c=new To,d=new Nh,h=new Set,p=[],x=r.logarithmicDepthBuffer,M=r.vertexTextures;let S=r.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(g){return h.add(g),g===0?"uv":`uv${g}`}function v(g,f,b,N,D){const F=N.fog,O=D.geometry,E=g.isMeshStandardMaterial?N.environment:null,I=(g.isMeshStandardMaterial?t:e).get(g.envMap||E),k=I&&I.mapping===fr?I.image.height:null,j=T[g.type];g.precision!==null&&(S=r.getMaxPrecision(g.precision),S!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",S,"instead."));const ee=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Y=ee!==void 0?ee.length:0;let Me=0;O.morphAttributes.position!==void 0&&(Me=1),O.morphAttributes.normal!==void 0&&(Me=2),O.morphAttributes.color!==void 0&&(Me=3);let Te,q,Z,oe;if(j){const Be=Ot[j];Te=Be.vertexShader,q=Be.fragmentShader}else Te=g.vertexShader,q=g.fragmentShader,d.update(g),Z=d.getVertexShaderID(g),oe=d.getFragmentShaderID(g);const ae=i.getRenderTarget(),_e=D.isInstancedMesh===!0,Re=D.isBatchedMesh===!0,Le=!!g.map,je=!!g.matcap,U=!!I,$e=!!g.aoMap,We=!!g.lightMap,qe=!!g.bumpMap,ve=!!g.normalMap,et=!!g.displacementMap,Ae=!!g.emissiveMap,Pe=!!g.metalnessMap,L=!!g.roughnessMap,w=g.anisotropy>0,X=g.clearcoat>0,Q=g.dispersion>0,te=g.iridescence>0,J=g.sheen>0,xe=g.transmission>0,ue=w&&!!g.anisotropyMap,fe=X&&!!g.clearcoatMap,De=X&&!!g.clearcoatNormalMap,ne=X&&!!g.clearcoatRoughnessMap,le=te&&!!g.iridescenceMap,Fe=te&&!!g.iridescenceThicknessMap,we=J&&!!g.sheenColorMap,he=J&&!!g.sheenRoughnessMap,Ce=!!g.specularMap,Ne=!!g.specularColorMap,Ke=!!g.specularIntensityMap,B=xe&&!!g.transmissionMap,ie=xe&&!!g.thicknessMap,$=!!g.gradientMap,K=!!g.alphaMap,se=g.alphaTest>0,ye=!!g.alphaHash,Oe=!!g.extensions;let tt=un;g.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(tt=i.toneMapping);const ct={shaderID:j,shaderType:g.type,shaderName:g.name,vertexShader:Te,fragmentShader:q,defines:g.defines,customVertexShaderID:Z,customFragmentShaderID:oe,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:S,batching:Re,batchingColor:Re&&D._colorsTexture!==null,instancing:_e,instancingColor:_e&&D.instanceColor!==null,instancingMorph:_e&&D.morphTexture!==null,supportsVertexTextures:M,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:fn,alphaToCoverage:!!g.alphaToCoverage,map:Le,matcap:je,envMap:U,envMapMode:U&&I.mapping,envMapCubeUVHeight:k,aoMap:$e,lightMap:We,bumpMap:qe,normalMap:ve,displacementMap:M&&et,emissiveMap:Ae,normalMapObjectSpace:ve&&g.normalMapType===Xc,normalMapTangentSpace:ve&&g.normalMapType===Wc,metalnessMap:Pe,roughnessMap:L,anisotropy:w,anisotropyMap:ue,clearcoat:X,clearcoatMap:fe,clearcoatNormalMap:De,clearcoatRoughnessMap:ne,dispersion:Q,iridescence:te,iridescenceMap:le,iridescenceThicknessMap:Fe,sheen:J,sheenColorMap:we,sheenRoughnessMap:he,specularMap:Ce,specularColorMap:Ne,specularIntensityMap:Ke,transmission:xe,transmissionMap:B,thicknessMap:ie,gradientMap:$,opaque:g.transparent===!1&&g.blending===Yn&&g.alphaToCoverage===!1,alphaMap:K,alphaTest:se,alphaHash:ye,combine:g.combine,mapUv:Le&&A(g.map.channel),aoMapUv:$e&&A(g.aoMap.channel),lightMapUv:We&&A(g.lightMap.channel),bumpMapUv:qe&&A(g.bumpMap.channel),normalMapUv:ve&&A(g.normalMap.channel),displacementMapUv:et&&A(g.displacementMap.channel),emissiveMapUv:Ae&&A(g.emissiveMap.channel),metalnessMapUv:Pe&&A(g.metalnessMap.channel),roughnessMapUv:L&&A(g.roughnessMap.channel),anisotropyMapUv:ue&&A(g.anisotropyMap.channel),clearcoatMapUv:fe&&A(g.clearcoatMap.channel),clearcoatNormalMapUv:De&&A(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&A(g.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&A(g.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&A(g.iridescenceThicknessMap.channel),sheenColorMapUv:we&&A(g.sheenColorMap.channel),sheenRoughnessMapUv:he&&A(g.sheenRoughnessMap.channel),specularMapUv:Ce&&A(g.specularMap.channel),specularColorMapUv:Ne&&A(g.specularColorMap.channel),specularIntensityMapUv:Ke&&A(g.specularIntensityMap.channel),transmissionMapUv:B&&A(g.transmissionMap.channel),thicknessMapUv:ie&&A(g.thicknessMap.channel),alphaMapUv:K&&A(g.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ve||w),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!O.attributes.uv&&(Le||K),fog:!!F,useFog:g.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:g.flatShading===!0,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:x,skinning:D.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:Me,numDirLights:f.directional.length,numPointLights:f.point.length,numSpotLights:f.spot.length,numSpotLightMaps:f.spotLightMap.length,numRectAreaLights:f.rectArea.length,numHemiLights:f.hemi.length,numDirLightShadows:f.directionalShadowMap.length,numPointLightShadows:f.pointShadowMap.length,numSpotLightShadows:f.spotShadowMap.length,numSpotLightShadowsWithMaps:f.numSpotLightShadowsWithMaps,numLightProbes:f.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&b.length>0,shadowMapType:i.shadowMap.type,toneMapping:tt,decodeVideoTexture:Le&&g.map.isVideoTexture===!0&&Xe.getTransfer(g.map.colorSpace)===Ye,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===jt,flipSided:g.side===gt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Oe&&g.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&g.extensions.multiDraw===!0||Re)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return ct.vertexUv1s=h.has(1),ct.vertexUv2s=h.has(2),ct.vertexUv3s=h.has(3),h.clear(),ct}function m(g){const f=[];if(g.shaderID?f.push(g.shaderID):(f.push(g.customVertexShaderID),f.push(g.customFragmentShaderID)),g.defines!==void 0)for(const b in g.defines)f.push(b),f.push(g.defines[b]);return g.isRawShaderMaterial===!1&&(P(f,g),R(f,g),f.push(i.outputColorSpace)),f.push(g.customProgramCacheKey),f.join()}function P(g,f){g.push(f.precision),g.push(f.outputColorSpace),g.push(f.envMapMode),g.push(f.envMapCubeUVHeight),g.push(f.mapUv),g.push(f.alphaMapUv),g.push(f.lightMapUv),g.push(f.aoMapUv),g.push(f.bumpMapUv),g.push(f.normalMapUv),g.push(f.displacementMapUv),g.push(f.emissiveMapUv),g.push(f.metalnessMapUv),g.push(f.roughnessMapUv),g.push(f.anisotropyMapUv),g.push(f.clearcoatMapUv),g.push(f.clearcoatNormalMapUv),g.push(f.clearcoatRoughnessMapUv),g.push(f.iridescenceMapUv),g.push(f.iridescenceThicknessMapUv),g.push(f.sheenColorMapUv),g.push(f.sheenRoughnessMapUv),g.push(f.specularMapUv),g.push(f.specularColorMapUv),g.push(f.specularIntensityMapUv),g.push(f.transmissionMapUv),g.push(f.thicknessMapUv),g.push(f.combine),g.push(f.fogExp2),g.push(f.sizeAttenuation),g.push(f.morphTargetsCount),g.push(f.morphAttributeCount),g.push(f.numDirLights),g.push(f.numPointLights),g.push(f.numSpotLights),g.push(f.numSpotLightMaps),g.push(f.numHemiLights),g.push(f.numRectAreaLights),g.push(f.numDirLightShadows),g.push(f.numPointLightShadows),g.push(f.numSpotLightShadows),g.push(f.numSpotLightShadowsWithMaps),g.push(f.numLightProbes),g.push(f.shadowMapType),g.push(f.toneMapping),g.push(f.numClippingPlanes),g.push(f.numClipIntersection),g.push(f.depthPacking)}function R(g,f){c.disableAll(),f.supportsVertexTextures&&c.enable(0),f.instancing&&c.enable(1),f.instancingColor&&c.enable(2),f.instancingMorph&&c.enable(3),f.matcap&&c.enable(4),f.envMap&&c.enable(5),f.normalMapObjectSpace&&c.enable(6),f.normalMapTangentSpace&&c.enable(7),f.clearcoat&&c.enable(8),f.iridescence&&c.enable(9),f.alphaTest&&c.enable(10),f.vertexColors&&c.enable(11),f.vertexAlphas&&c.enable(12),f.vertexUv1s&&c.enable(13),f.vertexUv2s&&c.enable(14),f.vertexUv3s&&c.enable(15),f.vertexTangents&&c.enable(16),f.anisotropy&&c.enable(17),f.alphaHash&&c.enable(18),f.batching&&c.enable(19),f.dispersion&&c.enable(20),f.batchingColor&&c.enable(21),g.push(c.mask),c.disableAll(),f.fog&&c.enable(0),f.useFog&&c.enable(1),f.flatShading&&c.enable(2),f.logarithmicDepthBuffer&&c.enable(3),f.skinning&&c.enable(4),f.morphTargets&&c.enable(5),f.morphNormals&&c.enable(6),f.morphColors&&c.enable(7),f.premultipliedAlpha&&c.enable(8),f.shadowMapEnabled&&c.enable(9),f.doubleSided&&c.enable(10),f.flipSided&&c.enable(11),f.useDepthPacking&&c.enable(12),f.dithering&&c.enable(13),f.transmission&&c.enable(14),f.sheen&&c.enable(15),f.opaque&&c.enable(16),f.pointsUvs&&c.enable(17),f.decodeVideoTexture&&c.enable(18),f.alphaToCoverage&&c.enable(19),g.push(c.mask)}function s(g){const f=T[g.type];let b;if(f){const N=Ot[f];b=Mu.clone(N.uniforms)}else b=g.uniforms;return b}function l(g,f){let b;for(let N=0,D=p.length;N<D;N++){const F=p[N];if(F.cacheKey===f){b=F,++b.usedTimes;break}}return b===void 0&&(b=new Uh(i,f,g,a),p.push(b)),b}function u(g){if(--g.usedTimes===0){const f=p.indexOf(g);p[f]=p[p.length-1],p.pop(),g.destroy()}}function _(g){d.remove(g)}function y(){d.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:s,acquireProgram:l,releaseProgram:u,releaseShaderCache:_,programs:p,dispose:y}}function kh(){let i=new WeakMap;function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function t(a){i.delete(a)}function n(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Bh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function js(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ys(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function o(x,M,S,T,A,v){let m=i[e];return m===void 0?(m={id:x.id,object:x,geometry:M,material:S,groupOrder:T,renderOrder:x.renderOrder,z:A,group:v},i[e]=m):(m.id=x.id,m.object=x,m.geometry=M,m.material=S,m.groupOrder=T,m.renderOrder=x.renderOrder,m.z=A,m.group=v),e++,m}function c(x,M,S,T,A,v){const m=o(x,M,S,T,A,v);S.transmission>0?n.push(m):S.transparent===!0?r.push(m):t.push(m)}function d(x,M,S,T,A,v){const m=o(x,M,S,T,A,v);S.transmission>0?n.unshift(m):S.transparent===!0?r.unshift(m):t.unshift(m)}function h(x,M){t.length>1&&t.sort(x||Bh),n.length>1&&n.sort(M||js),r.length>1&&r.sort(M||js)}function p(){for(let x=e,M=i.length;x<M;x++){const S=i[x];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:c,unshift:d,finish:p,sort:h}}function zh(){let i=new WeakMap;function e(n,r){const a=i.get(n);let o;return a===void 0?(o=new Ys,i.set(n,[o])):r>=a.length?(o=new Ys,a.push(o)):o=a[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Hh(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new Ve};break;case"SpotLight":t={position:new G,direction:new G,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new G,halfWidth:new G,halfHeight:new G};break}return i[e.id]=t,t}}}function Gh(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Vh=0;function Wh(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Xh(i){const e=new Hh,t=Gh(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new G);const r=new G,a=new Qe,o=new Qe;function c(h){let p=0,x=0,M=0;for(let g=0;g<9;g++)n.probe[g].set(0,0,0);let S=0,T=0,A=0,v=0,m=0,P=0,R=0,s=0,l=0,u=0,_=0;h.sort(Wh);for(let g=0,f=h.length;g<f;g++){const b=h[g],N=b.color,D=b.intensity,F=b.distance,O=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)p+=N.r*D,x+=N.g*D,M+=N.b*D;else if(b.isLightProbe){for(let E=0;E<9;E++)n.probe[E].addScaledVector(b.sh.coefficients[E],D);_++}else if(b.isDirectionalLight){const E=e.get(b);if(E.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const I=b.shadow,k=t.get(b);k.shadowIntensity=I.intensity,k.shadowBias=I.bias,k.shadowNormalBias=I.normalBias,k.shadowRadius=I.radius,k.shadowMapSize=I.mapSize,n.directionalShadow[S]=k,n.directionalShadowMap[S]=O,n.directionalShadowMatrix[S]=b.shadow.matrix,P++}n.directional[S]=E,S++}else if(b.isSpotLight){const E=e.get(b);E.position.setFromMatrixPosition(b.matrixWorld),E.color.copy(N).multiplyScalar(D),E.distance=F,E.coneCos=Math.cos(b.angle),E.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),E.decay=b.decay,n.spot[A]=E;const I=b.shadow;if(b.map&&(n.spotLightMap[l]=b.map,l++,I.updateMatrices(b),b.castShadow&&u++),n.spotLightMatrix[A]=I.matrix,b.castShadow){const k=t.get(b);k.shadowIntensity=I.intensity,k.shadowBias=I.bias,k.shadowNormalBias=I.normalBias,k.shadowRadius=I.radius,k.shadowMapSize=I.mapSize,n.spotShadow[A]=k,n.spotShadowMap[A]=O,s++}A++}else if(b.isRectAreaLight){const E=e.get(b);E.color.copy(N).multiplyScalar(D),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),n.rectArea[v]=E,v++}else if(b.isPointLight){const E=e.get(b);if(E.color.copy(b.color).multiplyScalar(b.intensity),E.distance=b.distance,E.decay=b.decay,b.castShadow){const I=b.shadow,k=t.get(b);k.shadowIntensity=I.intensity,k.shadowBias=I.bias,k.shadowNormalBias=I.normalBias,k.shadowRadius=I.radius,k.shadowMapSize=I.mapSize,k.shadowCameraNear=I.camera.near,k.shadowCameraFar=I.camera.far,n.pointShadow[T]=k,n.pointShadowMap[T]=O,n.pointShadowMatrix[T]=b.shadow.matrix,R++}n.point[T]=E,T++}else if(b.isHemisphereLight){const E=e.get(b);E.skyColor.copy(b.color).multiplyScalar(D),E.groundColor.copy(b.groundColor).multiplyScalar(D),n.hemi[m]=E,m++}}v>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=x,n.ambient[2]=M;const y=n.hash;(y.directionalLength!==S||y.pointLength!==T||y.spotLength!==A||y.rectAreaLength!==v||y.hemiLength!==m||y.numDirectionalShadows!==P||y.numPointShadows!==R||y.numSpotShadows!==s||y.numSpotMaps!==l||y.numLightProbes!==_)&&(n.directional.length=S,n.spot.length=A,n.rectArea.length=v,n.point.length=T,n.hemi.length=m,n.directionalShadow.length=P,n.directionalShadowMap.length=P,n.pointShadow.length=R,n.pointShadowMap.length=R,n.spotShadow.length=s,n.spotShadowMap.length=s,n.directionalShadowMatrix.length=P,n.pointShadowMatrix.length=R,n.spotLightMatrix.length=s+l-u,n.spotLightMap.length=l,n.numSpotLightShadowsWithMaps=u,n.numLightProbes=_,y.directionalLength=S,y.pointLength=T,y.spotLength=A,y.rectAreaLength=v,y.hemiLength=m,y.numDirectionalShadows=P,y.numPointShadows=R,y.numSpotShadows=s,y.numSpotMaps=l,y.numLightProbes=_,n.version=Vh++)}function d(h,p){let x=0,M=0,S=0,T=0,A=0;const v=p.matrixWorldInverse;for(let m=0,P=h.length;m<P;m++){const R=h[m];if(R.isDirectionalLight){const s=n.directional[x];s.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),s.direction.sub(r),s.direction.transformDirection(v),x++}else if(R.isSpotLight){const s=n.spot[S];s.position.setFromMatrixPosition(R.matrixWorld),s.position.applyMatrix4(v),s.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),s.direction.sub(r),s.direction.transformDirection(v),S++}else if(R.isRectAreaLight){const s=n.rectArea[T];s.position.setFromMatrixPosition(R.matrixWorld),s.position.applyMatrix4(v),o.identity(),a.copy(R.matrixWorld),a.premultiply(v),o.extractRotation(a),s.halfWidth.set(R.width*.5,0,0),s.halfHeight.set(0,R.height*.5,0),s.halfWidth.applyMatrix4(o),s.halfHeight.applyMatrix4(o),T++}else if(R.isPointLight){const s=n.point[M];s.position.setFromMatrixPosition(R.matrixWorld),s.position.applyMatrix4(v),M++}else if(R.isHemisphereLight){const s=n.hemi[A];s.direction.setFromMatrixPosition(R.matrixWorld),s.direction.transformDirection(v),A++}}}return{setup:c,setupView:d,state:n}}function $s(i){const e=new Xh(i),t=[],n=[];function r(p){h.camera=p,t.length=0,n.length=0}function a(p){t.push(p)}function o(p){n.push(p)}function c(){e.setup(t)}function d(p){e.setupView(t,p)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:h,setupLights:c,setupLightsView:d,pushLight:a,pushShadow:o}}function qh(i){let e=new WeakMap;function t(r,a=0){const o=e.get(r);let c;return o===void 0?(c=new $s(i),e.set(r,[c])):a>=o.length?(c=new $s(i),o.push(c)):c=o[a],c}function n(){e=new WeakMap}return{get:t,dispose:n}}class jh extends ii{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Yh extends ii{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $h=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kh=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Zh(i,e,t){let n=new Io;const r=new ke,a=new ke,o=new ot,c=new jh({depthPacking:Vc}),d=new Yh,h={},p=t.maxTextureSize,x={[dn]:gt,[gt]:dn,[jt]:jt},M=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:$h,fragmentShader:Kh}),S=M.clone();S.defines.HORIZONTAL_PASS=1;const T=new Ct;T.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Kt(T,M),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oo;let m=this.type;this.render=function(u,_,y){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||u.length===0)return;const g=i.getRenderTarget(),f=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),N=i.state;N.setBlending(cn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const D=m!==qt&&this.type===qt,F=m===qt&&this.type!==qt;for(let O=0,E=u.length;O<E;O++){const I=u[O],k=I.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const j=k.getFrameExtents();if(r.multiply(j),a.copy(k.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(a.x=Math.floor(p/j.x),r.x=a.x*j.x,k.mapSize.x=a.x),r.y>p&&(a.y=Math.floor(p/j.y),r.y=a.y*j.y,k.mapSize.y=a.y)),k.map===null||D===!0||F===!0){const Y=this.type!==qt?{minFilter:At,magFilter:At}:{};k.map!==null&&k.map.dispose(),k.map=new An(r.x,r.y,Y),k.map.texture.name=I.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const ee=k.getViewportCount();for(let Y=0;Y<ee;Y++){const Me=k.getViewport(Y);o.set(a.x*Me.x,a.y*Me.y,a.x*Me.z,a.y*Me.w),N.viewport(o),k.updateMatrices(I,Y),n=k.getFrustum(),s(_,y,k.camera,I,this.type)}k.isPointLightShadow!==!0&&this.type===qt&&P(k,y),k.needsUpdate=!1}m=this.type,v.needsUpdate=!1,i.setRenderTarget(g,f,b)};function P(u,_){const y=e.update(A);M.defines.VSM_SAMPLES!==u.blurSamples&&(M.defines.VSM_SAMPLES=u.blurSamples,S.defines.VSM_SAMPLES=u.blurSamples,M.needsUpdate=!0,S.needsUpdate=!0),u.mapPass===null&&(u.mapPass=new An(r.x,r.y)),M.uniforms.shadow_pass.value=u.map.texture,M.uniforms.resolution.value=u.mapSize,M.uniforms.radius.value=u.radius,i.setRenderTarget(u.mapPass),i.clear(),i.renderBufferDirect(_,null,y,M,A,null),S.uniforms.shadow_pass.value=u.mapPass.texture,S.uniforms.resolution.value=u.mapSize,S.uniforms.radius.value=u.radius,i.setRenderTarget(u.map),i.clear(),i.renderBufferDirect(_,null,y,S,A,null)}function R(u,_,y,g){let f=null;const b=y.isPointLight===!0?u.customDistanceMaterial:u.customDepthMaterial;if(b!==void 0)f=b;else if(f=y.isPointLight===!0?d:c,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0){const N=f.uuid,D=_.uuid;let F=h[N];F===void 0&&(F={},h[N]=F);let O=F[D];O===void 0&&(O=f.clone(),F[D]=O,_.addEventListener("dispose",l)),f=O}if(f.visible=_.visible,f.wireframe=_.wireframe,g===qt?f.side=_.shadowSide!==null?_.shadowSide:_.side:f.side=_.shadowSide!==null?_.shadowSide:x[_.side],f.alphaMap=_.alphaMap,f.alphaTest=_.alphaTest,f.map=_.map,f.clipShadows=_.clipShadows,f.clippingPlanes=_.clippingPlanes,f.clipIntersection=_.clipIntersection,f.displacementMap=_.displacementMap,f.displacementScale=_.displacementScale,f.displacementBias=_.displacementBias,f.wireframeLinewidth=_.wireframeLinewidth,f.linewidth=_.linewidth,y.isPointLight===!0&&f.isMeshDistanceMaterial===!0){const N=i.properties.get(f);N.light=y}return f}function s(u,_,y,g,f){if(u.visible===!1)return;if(u.layers.test(_.layers)&&(u.isMesh||u.isLine||u.isPoints)&&(u.castShadow||u.receiveShadow&&f===qt)&&(!u.frustumCulled||n.intersectsObject(u))){u.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,u.matrixWorld);const D=e.update(u),F=u.material;if(Array.isArray(F)){const O=D.groups;for(let E=0,I=O.length;E<I;E++){const k=O[E],j=F[k.materialIndex];if(j&&j.visible){const ee=R(u,j,g,f);u.onBeforeShadow(i,u,_,y,D,ee,k),i.renderBufferDirect(y,null,D,ee,u,k),u.onAfterShadow(i,u,_,y,D,ee,k)}}}else if(F.visible){const O=R(u,F,g,f);u.onBeforeShadow(i,u,_,y,D,O,null),i.renderBufferDirect(y,null,D,O,u,null),u.onAfterShadow(i,u,_,y,D,O,null)}}const N=u.children;for(let D=0,F=N.length;D<F;D++)s(N[D],_,y,g,f)}function l(u){u.target.removeEventListener("dispose",l);for(const y in h){const g=h[y],f=u.target.uuid;f in g&&(g[f].dispose(),delete g[f])}}}function Jh(i){function e(){let B=!1;const ie=new ot;let $=null;const K=new ot(0,0,0,0);return{setMask:function(se){$!==se&&!B&&(i.colorMask(se,se,se,se),$=se)},setLocked:function(se){B=se},setClear:function(se,ye,Oe,tt,ct){ct===!0&&(se*=tt,ye*=tt,Oe*=tt),ie.set(se,ye,Oe,tt),K.equals(ie)===!1&&(i.clearColor(se,ye,Oe,tt),K.copy(ie))},reset:function(){B=!1,$=null,K.set(-1,0,0,0)}}}function t(){let B=!1,ie=null,$=null,K=null;return{setTest:function(se){se?oe(i.DEPTH_TEST):ae(i.DEPTH_TEST)},setMask:function(se){ie!==se&&!B&&(i.depthMask(se),ie=se)},setFunc:function(se){if($!==se){switch(se){case wc:i.depthFunc(i.NEVER);break;case Tc:i.depthFunc(i.ALWAYS);break;case Ac:i.depthFunc(i.LESS);break;case ar:i.depthFunc(i.LEQUAL);break;case Cc:i.depthFunc(i.EQUAL);break;case Rc:i.depthFunc(i.GEQUAL);break;case Pc:i.depthFunc(i.GREATER);break;case Lc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$=se}},setLocked:function(se){B=se},setClear:function(se){K!==se&&(i.clearDepth(se),K=se)},reset:function(){B=!1,ie=null,$=null,K=null}}}function n(){let B=!1,ie=null,$=null,K=null,se=null,ye=null,Oe=null,tt=null,ct=null;return{setTest:function(Be){B||(Be?oe(i.STENCIL_TEST):ae(i.STENCIL_TEST))},setMask:function(Be){ie!==Be&&!B&&(i.stencilMask(Be),ie=Be)},setFunc:function(Be,zt,Ft){($!==Be||K!==zt||se!==Ft)&&(i.stencilFunc(Be,zt,Ft),$=Be,K=zt,se=Ft)},setOp:function(Be,zt,Ft){(ye!==Be||Oe!==zt||tt!==Ft)&&(i.stencilOp(Be,zt,Ft),ye=Be,Oe=zt,tt=Ft)},setLocked:function(Be){B=Be},setClear:function(Be){ct!==Be&&(i.clearStencil(Be),ct=Be)},reset:function(){B=!1,ie=null,$=null,K=null,se=null,ye=null,Oe=null,tt=null,ct=null}}}const r=new e,a=new t,o=new n,c=new WeakMap,d=new WeakMap;let h={},p={},x=new WeakMap,M=[],S=null,T=!1,A=null,v=null,m=null,P=null,R=null,s=null,l=null,u=new Ve(0,0,0),_=0,y=!1,g=null,f=null,b=null,N=null,D=null;const F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,E=0;const I=i.getParameter(i.VERSION);I.indexOf("WebGL")!==-1?(E=parseFloat(/^WebGL (\d)/.exec(I)[1]),O=E>=1):I.indexOf("OpenGL ES")!==-1&&(E=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),O=E>=2);let k=null,j={};const ee=i.getParameter(i.SCISSOR_BOX),Y=i.getParameter(i.VIEWPORT),Me=new ot().fromArray(ee),Te=new ot().fromArray(Y);function q(B,ie,$,K){const se=new Uint8Array(4),ye=i.createTexture();i.bindTexture(B,ye),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Oe=0;Oe<$;Oe++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(ie,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,se):i.texImage2D(ie+Oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,se);return ye}const Z={};Z[i.TEXTURE_2D]=q(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),oe(i.DEPTH_TEST),a.setFunc(ar),qe(!1),ve(ns),oe(i.CULL_FACE),$e(cn);function oe(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function ae(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function _e(B,ie){return p[B]!==ie?(i.bindFramebuffer(B,ie),p[B]=ie,B===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=ie),B===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=ie),!0):!1}function Re(B,ie){let $=M,K=!1;if(B){$=x.get(ie),$===void 0&&($=[],x.set(ie,$));const se=B.textures;if($.length!==se.length||$[0]!==i.COLOR_ATTACHMENT0){for(let ye=0,Oe=se.length;ye<Oe;ye++)$[ye]=i.COLOR_ATTACHMENT0+ye;$.length=se.length,K=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,K=!0);K&&i.drawBuffers($)}function Le(B){return S!==B?(i.useProgram(B),S=B,!0):!1}const je={[yn]:i.FUNC_ADD,[cc]:i.FUNC_SUBTRACT,[uc]:i.FUNC_REVERSE_SUBTRACT};je[dc]=i.MIN,je[lc]=i.MAX;const U={[fc]:i.ZERO,[hc]:i.ONE,[pc]:i.SRC_COLOR,[Qr]:i.SRC_ALPHA,[xc]:i.SRC_ALPHA_SATURATE,[vc]:i.DST_COLOR,[_c]:i.DST_ALPHA,[mc]:i.ONE_MINUS_SRC_COLOR,[ea]:i.ONE_MINUS_SRC_ALPHA,[Mc]:i.ONE_MINUS_DST_COLOR,[gc]:i.ONE_MINUS_DST_ALPHA,[Sc]:i.CONSTANT_COLOR,[yc]:i.ONE_MINUS_CONSTANT_COLOR,[bc]:i.CONSTANT_ALPHA,[Ec]:i.ONE_MINUS_CONSTANT_ALPHA};function $e(B,ie,$,K,se,ye,Oe,tt,ct,Be){if(B===cn){T===!0&&(ae(i.BLEND),T=!1);return}if(T===!1&&(oe(i.BLEND),T=!0),B!==oc){if(B!==A||Be!==y){if((v!==yn||R!==yn)&&(i.blendEquation(i.FUNC_ADD),v=yn,R=yn),Be)switch(B){case Yn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jr:i.blendFunc(i.ONE,i.ONE);break;case is:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rs:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Yn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Jr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case is:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rs:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}m=null,P=null,s=null,l=null,u.set(0,0,0),_=0,A=B,y=Be}return}se=se||ie,ye=ye||$,Oe=Oe||K,(ie!==v||se!==R)&&(i.blendEquationSeparate(je[ie],je[se]),v=ie,R=se),($!==m||K!==P||ye!==s||Oe!==l)&&(i.blendFuncSeparate(U[$],U[K],U[ye],U[Oe]),m=$,P=K,s=ye,l=Oe),(tt.equals(u)===!1||ct!==_)&&(i.blendColor(tt.r,tt.g,tt.b,ct),u.copy(tt),_=ct),A=B,y=!1}function We(B,ie){B.side===jt?ae(i.CULL_FACE):oe(i.CULL_FACE);let $=B.side===gt;ie&&($=!$),qe($),B.blending===Yn&&B.transparent===!1?$e(cn):$e(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);const K=B.stencilWrite;o.setTest(K),K&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Ae(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?oe(i.SAMPLE_ALPHA_TO_COVERAGE):ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function qe(B){g!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),g=B)}function ve(B){B!==rc?(oe(i.CULL_FACE),B!==f&&(B===ns?i.cullFace(i.BACK):B===ac?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ae(i.CULL_FACE),f=B}function et(B){B!==b&&(O&&i.lineWidth(B),b=B)}function Ae(B,ie,$){B?(oe(i.POLYGON_OFFSET_FILL),(N!==ie||D!==$)&&(i.polygonOffset(ie,$),N=ie,D=$)):ae(i.POLYGON_OFFSET_FILL)}function Pe(B){B?oe(i.SCISSOR_TEST):ae(i.SCISSOR_TEST)}function L(B){B===void 0&&(B=i.TEXTURE0+F-1),k!==B&&(i.activeTexture(B),k=B)}function w(B,ie,$){$===void 0&&(k===null?$=i.TEXTURE0+F-1:$=k);let K=j[$];K===void 0&&(K={type:void 0,texture:void 0},j[$]=K),(K.type!==B||K.texture!==ie)&&(k!==$&&(i.activeTexture($),k=$),i.bindTexture(B,ie||Z[B]),K.type=B,K.texture=ie)}function X(){const B=j[k];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function te(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function xe(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ue(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function fe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function De(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ne(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function le(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Fe(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function we(B){Me.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),Me.copy(B))}function he(B){Te.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),Te.copy(B))}function Ce(B,ie){let $=d.get(ie);$===void 0&&($=new WeakMap,d.set(ie,$));let K=$.get(B);K===void 0&&(K=i.getUniformBlockIndex(ie,B.name),$.set(B,K))}function Ne(B,ie){const K=d.get(ie).get(B);c.get(ie)!==K&&(i.uniformBlockBinding(ie,K,B.__bindingPointIndex),c.set(ie,K))}function Ke(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},k=null,j={},p={},x=new WeakMap,M=[],S=null,T=!1,A=null,v=null,m=null,P=null,R=null,s=null,l=null,u=new Ve(0,0,0),_=0,y=!1,g=null,f=null,b=null,N=null,D=null,Me.set(0,0,i.canvas.width,i.canvas.height),Te.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:oe,disable:ae,bindFramebuffer:_e,drawBuffers:Re,useProgram:Le,setBlending:$e,setMaterial:We,setFlipSided:qe,setCullFace:ve,setLineWidth:et,setPolygonOffset:Ae,setScissorTest:Pe,activeTexture:L,bindTexture:w,unbindTexture:X,compressedTexImage2D:Q,compressedTexImage3D:te,texImage2D:le,texImage3D:Fe,updateUBOMapping:Ce,uniformBlockBinding:Ne,texStorage2D:De,texStorage3D:ne,texSubImage2D:J,texSubImage3D:xe,compressedTexSubImage2D:ue,compressedTexSubImage3D:fe,scissor:we,viewport:he,reset:Ke}}function Ks(i,e,t,n){const r=Qh(n);switch(t){case po:return i*e;case _o:return i*e;case go:return i*e*2;case vo:return i*e/r.components*r.byteLength;case ka:return i*e/r.components*r.byteLength;case Mo:return i*e*2/r.components*r.byteLength;case Ba:return i*e*2/r.components*r.byteLength;case mo:return i*e*3/r.components*r.byteLength;case It:return i*e*4/r.components*r.byteLength;case za:return i*e*4/r.components*r.byteLength;case Qi:case er:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case tr:case nr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case sa:case ca:return Math.max(i,16)*Math.max(e,8)/4;case aa:case oa:return Math.max(i,8)*Math.max(e,8)/2;case ua:case da:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case la:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ha:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case pa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ma:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case _a:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ga:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case va:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ma:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case xa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Sa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ya:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ba:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ea:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case wa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ir:case Ta:case Aa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case xo:case Ca:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ra:case Pa:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Qh(i){switch(i){case Zt:case lo:return{byteLength:1,components:1};case pi:case fo:case _i:return{byteLength:2,components:1};case Fa:case Oa:return{byteLength:2,components:4};case Tn:case Na:case Yt:return{byteLength:4,components:1};case ho:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function ep(i,e,t,n,r,a,o){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ke,p=new WeakMap;let x;const M=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(L,w){return S?new OffscreenCanvas(L,w):mi("canvas")}function A(L,w,X){let Q=1;const te=Pe(L);if((te.width>X||te.height>X)&&(Q=X/Math.max(te.width,te.height)),Q<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const J=Math.floor(Q*te.width),xe=Math.floor(Q*te.height);x===void 0&&(x=T(J,xe));const ue=w?T(J,xe):x;return ue.width=J,ue.height=xe,ue.getContext("2d").drawImage(L,0,0,J,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+J+"x"+xe+")."),ue}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),L;return L}function v(L){return L.generateMipmaps&&L.minFilter!==At&&L.minFilter!==Ut}function m(L){i.generateMipmap(L)}function P(L,w,X,Q,te=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let J=w;if(w===i.RED&&(X===i.FLOAT&&(J=i.R32F),X===i.HALF_FLOAT&&(J=i.R16F),X===i.UNSIGNED_BYTE&&(J=i.R8)),w===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(J=i.R8UI),X===i.UNSIGNED_SHORT&&(J=i.R16UI),X===i.UNSIGNED_INT&&(J=i.R32UI),X===i.BYTE&&(J=i.R8I),X===i.SHORT&&(J=i.R16I),X===i.INT&&(J=i.R32I)),w===i.RG&&(X===i.FLOAT&&(J=i.RG32F),X===i.HALF_FLOAT&&(J=i.RG16F),X===i.UNSIGNED_BYTE&&(J=i.RG8)),w===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(J=i.RG8UI),X===i.UNSIGNED_SHORT&&(J=i.RG16UI),X===i.UNSIGNED_INT&&(J=i.RG32UI),X===i.BYTE&&(J=i.RG8I),X===i.SHORT&&(J=i.RG16I),X===i.INT&&(J=i.RG32I)),w===i.RGB&&X===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),w===i.RGBA){const xe=te?sr:Xe.getTransfer(Q);X===i.FLOAT&&(J=i.RGBA32F),X===i.HALF_FLOAT&&(J=i.RGBA16F),X===i.UNSIGNED_BYTE&&(J=xe===Ye?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function R(L,w){let X;return L?w===null||w===Tn||w===Qn?X=i.DEPTH24_STENCIL8:w===Yt?X=i.DEPTH32F_STENCIL8:w===pi&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Tn||w===Qn?X=i.DEPTH_COMPONENT24:w===Yt?X=i.DEPTH_COMPONENT32F:w===pi&&(X=i.DEPTH_COMPONENT16),X}function s(L,w){return v(L)===!0||L.isFramebufferTexture&&L.minFilter!==At&&L.minFilter!==Ut?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function l(L){const w=L.target;w.removeEventListener("dispose",l),_(w),w.isVideoTexture&&p.delete(w)}function u(L){const w=L.target;w.removeEventListener("dispose",u),g(w)}function _(L){const w=n.get(L);if(w.__webglInit===void 0)return;const X=L.source,Q=M.get(X);if(Q){const te=Q[w.__cacheKey];te.usedTimes--,te.usedTimes===0&&y(L),Object.keys(Q).length===0&&M.delete(X)}n.remove(L)}function y(L){const w=n.get(L);i.deleteTexture(w.__webglTexture);const X=L.source,Q=M.get(X);delete Q[w.__cacheKey],o.memory.textures--}function g(L){const w=n.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(w.__webglFramebuffer[Q]))for(let te=0;te<w.__webglFramebuffer[Q].length;te++)i.deleteFramebuffer(w.__webglFramebuffer[Q][te]);else i.deleteFramebuffer(w.__webglFramebuffer[Q]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[Q])}else{if(Array.isArray(w.__webglFramebuffer))for(let Q=0;Q<w.__webglFramebuffer.length;Q++)i.deleteFramebuffer(w.__webglFramebuffer[Q]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Q=0;Q<w.__webglColorRenderbuffer.length;Q++)w.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[Q]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const X=L.textures;for(let Q=0,te=X.length;Q<te;Q++){const J=n.get(X[Q]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(X[Q])}n.remove(L)}let f=0;function b(){f=0}function N(){const L=f;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),f+=1,L}function D(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function F(L,w){const X=n.get(L);if(L.isVideoTexture&&et(L),L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){const Q=L.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Te(X,L,w);return}}t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+w)}function O(L,w){const X=n.get(L);if(L.version>0&&X.__version!==L.version){Te(X,L,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+w)}function E(L,w){const X=n.get(L);if(L.version>0&&X.__version!==L.version){Te(X,L,w);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+w)}function I(L,w){const X=n.get(L);if(L.version>0&&X.__version!==L.version){q(X,L,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+w)}const k={[ia]:i.REPEAT,[En]:i.CLAMP_TO_EDGE,[ra]:i.MIRRORED_REPEAT},j={[At]:i.NEAREST,[Hc]:i.NEAREST_MIPMAP_NEAREST,[Ti]:i.NEAREST_MIPMAP_LINEAR,[Ut]:i.LINEAR,[xr]:i.LINEAR_MIPMAP_NEAREST,[wn]:i.LINEAR_MIPMAP_LINEAR},ee={[qc]:i.NEVER,[Jc]:i.ALWAYS,[jc]:i.LESS,[So]:i.LEQUAL,[Yc]:i.EQUAL,[Zc]:i.GEQUAL,[$c]:i.GREATER,[Kc]:i.NOTEQUAL};function Y(L,w){if(w.type===Yt&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Ut||w.magFilter===xr||w.magFilter===Ti||w.magFilter===wn||w.minFilter===Ut||w.minFilter===xr||w.minFilter===Ti||w.minFilter===wn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,k[w.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,k[w.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,k[w.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,j[w.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,j[w.minFilter]),w.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,ee[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===At||w.minFilter!==Ti&&w.minFilter!==wn||w.type===Yt&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Me(L,w){let X=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",l));const Q=w.source;let te=M.get(Q);te===void 0&&(te={},M.set(Q,te));const J=D(w);if(J!==L.__cacheKey){te[J]===void 0&&(te[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),te[J].usedTimes++;const xe=te[L.__cacheKey];xe!==void 0&&(te[L.__cacheKey].usedTimes--,xe.usedTimes===0&&y(w)),L.__cacheKey=J,L.__webglTexture=te[J].texture}return X}function Te(L,w,X){let Q=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Q=i.TEXTURE_3D);const te=Me(L,w),J=w.source;t.bindTexture(Q,L.__webglTexture,i.TEXTURE0+X);const xe=n.get(J);if(J.version!==xe.__version||te===!0){t.activeTexture(i.TEXTURE0+X);const ue=Xe.getPrimaries(Xe.workingColorSpace),fe=w.colorSpace===on?null:Xe.getPrimaries(w.colorSpace),De=w.colorSpace===on||ue===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let ne=A(w.image,!1,r.maxTextureSize);ne=Ae(w,ne);const le=a.convert(w.format,w.colorSpace),Fe=a.convert(w.type);let we=P(w.internalFormat,le,Fe,w.colorSpace,w.isVideoTexture);Y(Q,w);let he;const Ce=w.mipmaps,Ne=w.isVideoTexture!==!0,Ke=xe.__version===void 0||te===!0,B=J.dataReady,ie=s(w,ne);if(w.isDepthTexture)we=R(w.format===ei,w.type),Ke&&(Ne?t.texStorage2D(i.TEXTURE_2D,1,we,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,we,ne.width,ne.height,0,le,Fe,null));else if(w.isDataTexture)if(Ce.length>0){Ne&&Ke&&t.texStorage2D(i.TEXTURE_2D,ie,we,Ce[0].width,Ce[0].height);for(let $=0,K=Ce.length;$<K;$++)he=Ce[$],Ne?B&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,he.width,he.height,le,Fe,he.data):t.texImage2D(i.TEXTURE_2D,$,we,he.width,he.height,0,le,Fe,he.data);w.generateMipmaps=!1}else Ne?(Ke&&t.texStorage2D(i.TEXTURE_2D,ie,we,ne.width,ne.height),B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ne.width,ne.height,le,Fe,ne.data)):t.texImage2D(i.TEXTURE_2D,0,we,ne.width,ne.height,0,le,Fe,ne.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ne&&Ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ie,we,Ce[0].width,Ce[0].height,ne.depth);for(let $=0,K=Ce.length;$<K;$++)if(he=Ce[$],w.format!==It)if(le!==null)if(Ne){if(B)if(w.layerUpdates.size>0){const se=Ks(he.width,he.height,w.format,w.type);for(const ye of w.layerUpdates){const Oe=he.data.subarray(ye*se/he.data.BYTES_PER_ELEMENT,(ye+1)*se/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,ye,he.width,he.height,1,le,Oe,0,0)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,he.width,he.height,ne.depth,le,he.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,we,he.width,he.height,ne.depth,0,he.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?B&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,he.width,he.height,ne.depth,le,Fe,he.data):t.texImage3D(i.TEXTURE_2D_ARRAY,$,we,he.width,he.height,ne.depth,0,le,Fe,he.data)}else{Ne&&Ke&&t.texStorage2D(i.TEXTURE_2D,ie,we,Ce[0].width,Ce[0].height);for(let $=0,K=Ce.length;$<K;$++)he=Ce[$],w.format!==It?le!==null?Ne?B&&t.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,he.width,he.height,le,he.data):t.compressedTexImage2D(i.TEXTURE_2D,$,we,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?B&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,he.width,he.height,le,Fe,he.data):t.texImage2D(i.TEXTURE_2D,$,we,he.width,he.height,0,le,Fe,he.data)}else if(w.isDataArrayTexture)if(Ne){if(Ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ie,we,ne.width,ne.height,ne.depth),B)if(w.layerUpdates.size>0){const $=Ks(ne.width,ne.height,w.format,w.type);for(const K of w.layerUpdates){const se=ne.data.subarray(K*$/ne.data.BYTES_PER_ELEMENT,(K+1)*$/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,ne.width,ne.height,1,le,Fe,se)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,le,Fe,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,we,ne.width,ne.height,ne.depth,0,le,Fe,ne.data);else if(w.isData3DTexture)Ne?(Ke&&t.texStorage3D(i.TEXTURE_3D,ie,we,ne.width,ne.height,ne.depth),B&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,le,Fe,ne.data)):t.texImage3D(i.TEXTURE_3D,0,we,ne.width,ne.height,ne.depth,0,le,Fe,ne.data);else if(w.isFramebufferTexture){if(Ke)if(Ne)t.texStorage2D(i.TEXTURE_2D,ie,we,ne.width,ne.height);else{let $=ne.width,K=ne.height;for(let se=0;se<ie;se++)t.texImage2D(i.TEXTURE_2D,se,we,$,K,0,le,Fe,null),$>>=1,K>>=1}}else if(Ce.length>0){if(Ne&&Ke){const $=Pe(Ce[0]);t.texStorage2D(i.TEXTURE_2D,ie,we,$.width,$.height)}for(let $=0,K=Ce.length;$<K;$++)he=Ce[$],Ne?B&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,le,Fe,he):t.texImage2D(i.TEXTURE_2D,$,we,le,Fe,he);w.generateMipmaps=!1}else if(Ne){if(Ke){const $=Pe(ne);t.texStorage2D(i.TEXTURE_2D,ie,we,$.width,$.height)}B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le,Fe,ne)}else t.texImage2D(i.TEXTURE_2D,0,we,le,Fe,ne);v(w)&&m(Q),xe.__version=J.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function q(L,w,X){if(w.image.length!==6)return;const Q=Me(L,w),te=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+X);const J=n.get(te);if(te.version!==J.__version||Q===!0){t.activeTexture(i.TEXTURE0+X);const xe=Xe.getPrimaries(Xe.workingColorSpace),ue=w.colorSpace===on?null:Xe.getPrimaries(w.colorSpace),fe=w.colorSpace===on||xe===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const De=w.isCompressedTexture||w.image[0].isCompressedTexture,ne=w.image[0]&&w.image[0].isDataTexture,le=[];for(let K=0;K<6;K++)!De&&!ne?le[K]=A(w.image[K],!0,r.maxCubemapSize):le[K]=ne?w.image[K].image:w.image[K],le[K]=Ae(w,le[K]);const Fe=le[0],we=a.convert(w.format,w.colorSpace),he=a.convert(w.type),Ce=P(w.internalFormat,we,he,w.colorSpace),Ne=w.isVideoTexture!==!0,Ke=J.__version===void 0||Q===!0,B=te.dataReady;let ie=s(w,Fe);Y(i.TEXTURE_CUBE_MAP,w);let $;if(De){Ne&&Ke&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ie,Ce,Fe.width,Fe.height);for(let K=0;K<6;K++){$=le[K].mipmaps;for(let se=0;se<$.length;se++){const ye=$[se];w.format!==It?we!==null?Ne?B&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,se,0,0,ye.width,ye.height,we,ye.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,se,Ce,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,se,0,0,ye.width,ye.height,we,he,ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,se,Ce,ye.width,ye.height,0,we,he,ye.data)}}}else{if($=w.mipmaps,Ne&&Ke){$.length>0&&ie++;const K=Pe(le[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ie,Ce,K.width,K.height)}for(let K=0;K<6;K++)if(ne){Ne?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,le[K].width,le[K].height,we,he,le[K].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ce,le[K].width,le[K].height,0,we,he,le[K].data);for(let se=0;se<$.length;se++){const Oe=$[se].image[K].image;Ne?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,se+1,0,0,Oe.width,Oe.height,we,he,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,se+1,Ce,Oe.width,Oe.height,0,we,he,Oe.data)}}else{Ne?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,we,he,le[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ce,we,he,le[K]);for(let se=0;se<$.length;se++){const ye=$[se];Ne?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,se+1,0,0,we,he,ye.image[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,se+1,Ce,we,he,ye.image[K])}}}v(w)&&m(i.TEXTURE_CUBE_MAP),J.__version=te.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function Z(L,w,X,Q,te,J){const xe=a.convert(X.format,X.colorSpace),ue=a.convert(X.type),fe=P(X.internalFormat,xe,ue,X.colorSpace);if(!n.get(w).__hasExternalTextures){const ne=Math.max(1,w.width>>J),le=Math.max(1,w.height>>J);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,J,fe,ne,le,w.depth,0,xe,ue,null):t.texImage2D(te,J,fe,ne,le,0,xe,ue,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),ve(w)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,te,n.get(X).__webglTexture,0,qe(w)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,te,n.get(X).__webglTexture,J),t.bindFramebuffer(i.FRAMEBUFFER,null)}function oe(L,w,X){if(i.bindRenderbuffer(i.RENDERBUFFER,L),w.depthBuffer){const Q=w.depthTexture,te=Q&&Q.isDepthTexture?Q.type:null,J=R(w.stencilBuffer,te),xe=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=qe(w);ve(w)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,J,w.width,w.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,J,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,J,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,L)}else{const Q=w.textures;for(let te=0;te<Q.length;te++){const J=Q[te],xe=a.convert(J.format,J.colorSpace),ue=a.convert(J.type),fe=P(J.internalFormat,xe,ue,J.colorSpace),De=qe(w);X&&ve(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,De,fe,w.width,w.height):ve(w)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,De,fe,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,fe,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ae(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),F(w.depthTexture,0);const Q=n.get(w.depthTexture).__webglTexture,te=qe(w);if(w.depthTexture.format===$n)ve(w)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(w.depthTexture.format===ei)ve(w)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function _e(L){const w=n.get(L),X=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");ae(w.__webglFramebuffer,L)}else if(X){w.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[Q]),w.__webglDepthbuffer[Q]=i.createRenderbuffer(),oe(w.__webglDepthbuffer[Q],L,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=i.createRenderbuffer(),oe(w.__webglDepthbuffer,L,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Re(L,w,X){const Q=n.get(L);w!==void 0&&Z(Q.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&_e(L)}function Le(L){const w=L.texture,X=n.get(L),Q=n.get(w);L.addEventListener("dispose",u);const te=L.textures,J=L.isWebGLCubeRenderTarget===!0,xe=te.length>1;if(xe||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=w.version,o.memory.textures++),J){X.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer[ue]=[];for(let fe=0;fe<w.mipmaps.length;fe++)X.__webglFramebuffer[ue][fe]=i.createFramebuffer()}else X.__webglFramebuffer[ue]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer=[];for(let ue=0;ue<w.mipmaps.length;ue++)X.__webglFramebuffer[ue]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(xe)for(let ue=0,fe=te.length;ue<fe;ue++){const De=n.get(te[ue]);De.__webglTexture===void 0&&(De.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&ve(L)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ue=0;ue<te.length;ue++){const fe=te[ue];X.__webglColorRenderbuffer[ue]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[ue]);const De=a.convert(fe.format,fe.colorSpace),ne=a.convert(fe.type),le=P(fe.internalFormat,De,ne,fe.colorSpace,L.isXRRenderTarget===!0),Fe=qe(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Fe,le,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,X.__webglColorRenderbuffer[ue])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),oe(X.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),Y(i.TEXTURE_CUBE_MAP,w);for(let ue=0;ue<6;ue++)if(w.mipmaps&&w.mipmaps.length>0)for(let fe=0;fe<w.mipmaps.length;fe++)Z(X.__webglFramebuffer[ue][fe],L,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,fe);else Z(X.__webglFramebuffer[ue],L,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);v(w)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let ue=0,fe=te.length;ue<fe;ue++){const De=te[ue],ne=n.get(De);t.bindTexture(i.TEXTURE_2D,ne.__webglTexture),Y(i.TEXTURE_2D,De),Z(X.__webglFramebuffer,L,De,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,0),v(De)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let ue=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ue=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,Q.__webglTexture),Y(ue,w),w.mipmaps&&w.mipmaps.length>0)for(let fe=0;fe<w.mipmaps.length;fe++)Z(X.__webglFramebuffer[fe],L,w,i.COLOR_ATTACHMENT0,ue,fe);else Z(X.__webglFramebuffer,L,w,i.COLOR_ATTACHMENT0,ue,0);v(w)&&m(ue),t.unbindTexture()}L.depthBuffer&&_e(L)}function je(L){const w=L.textures;for(let X=0,Q=w.length;X<Q;X++){const te=w[X];if(v(te)){const J=L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,xe=n.get(te).__webglTexture;t.bindTexture(J,xe),m(J),t.unbindTexture()}}}const U=[],$e=[];function We(L){if(L.samples>0){if(ve(L)===!1){const w=L.textures,X=L.width,Q=L.height;let te=i.COLOR_BUFFER_BIT;const J=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=n.get(L),ue=w.length>1;if(ue)for(let fe=0;fe<w.length;fe++)t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let fe=0;fe<w.length;fe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),ue){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xe.__webglColorRenderbuffer[fe]);const De=n.get(w[fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,De,0)}i.blitFramebuffer(0,0,X,Q,0,0,X,Q,te,i.NEAREST),d===!0&&(U.length=0,$e.length=0,U.push(i.COLOR_ATTACHMENT0+fe),L.depthBuffer&&L.resolveDepthBuffer===!1&&(U.push(J),$e.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,$e)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,U))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ue)for(let fe=0;fe<w.length;fe++){t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,xe.__webglColorRenderbuffer[fe]);const De=n.get(w[fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,De,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&d){const w=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function qe(L){return Math.min(r.maxSamples,L.samples)}function ve(L){const w=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function et(L){const w=o.render.frame;p.get(L)!==w&&(p.set(L,w),L.update())}function Ae(L,w){const X=L.colorSpace,Q=L.format,te=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||X!==fn&&X!==on&&(Xe.getTransfer(X)===Ye?(Q!==It||te!==Zt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),w}function Pe(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=N,this.resetTextureUnits=b,this.setTexture2D=F,this.setTexture2DArray=O,this.setTexture3D=E,this.setTextureCube=I,this.rebindTextures=Re,this.setupRenderTarget=Le,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=ve}function tp(i,e){function t(n,r=on){let a;const o=Xe.getTransfer(r);if(n===Zt)return i.UNSIGNED_BYTE;if(n===Fa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Oa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ho)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===lo)return i.BYTE;if(n===fo)return i.SHORT;if(n===pi)return i.UNSIGNED_SHORT;if(n===Na)return i.INT;if(n===Tn)return i.UNSIGNED_INT;if(n===Yt)return i.FLOAT;if(n===_i)return i.HALF_FLOAT;if(n===po)return i.ALPHA;if(n===mo)return i.RGB;if(n===It)return i.RGBA;if(n===_o)return i.LUMINANCE;if(n===go)return i.LUMINANCE_ALPHA;if(n===$n)return i.DEPTH_COMPONENT;if(n===ei)return i.DEPTH_STENCIL;if(n===vo)return i.RED;if(n===ka)return i.RED_INTEGER;if(n===Mo)return i.RG;if(n===Ba)return i.RG_INTEGER;if(n===za)return i.RGBA_INTEGER;if(n===Qi||n===er||n===tr||n===nr)if(o===Ye)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Qi)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===er)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===tr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===nr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Qi)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===er)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===tr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===nr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===aa||n===sa||n===oa||n===ca)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===aa)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sa)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===oa)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ca)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ua||n===da||n===la)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===ua||n===da)return o===Ye?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===la)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===fa||n===ha||n===pa||n===ma||n===_a||n===ga||n===va||n===Ma||n===xa||n===Sa||n===ya||n===ba||n===Ea||n===wa)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===fa)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ha)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===pa)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ma)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_a)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ga)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===va)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ma)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xa)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Sa)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ya)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ba)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ea)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===wa)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ir||n===Ta||n===Aa)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===ir)return o===Ye?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ta)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Aa)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xo||n===Ca||n===Ra||n===Pa)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===ir)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Ca)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ra)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Pa)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qn?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class np extends Tt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Yi extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ip={type:"move"};class jr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,o=null;const c=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){o=!0;for(const A of e.hand.values()){const v=t.getJointPose(A,n),m=this._getHandJoint(h,A);v!==null&&(m.matrix.fromArray(v.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=v.radius),m.visible=v!==null}const p=h.joints["index-finger-tip"],x=h.joints["thumb-tip"],M=p.position.distanceTo(x.position),S=.02,T=.005;h.inputState.pinching&&M>S+T?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&M<=S-T&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1));c!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(ip)))}return c!==null&&(c.visible=r!==null),d!==null&&(d.visible=a!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Yi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const rp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ap=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class sp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new ht,a=e.properties.get(r);a.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ln({vertexShader:rp,fragmentShader:ap,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Kt(new pr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class op extends ni{constructor(e,t){super();const n=this;let r=null,a=1,o=null,c="local-floor",d=1,h=null,p=null,x=null,M=null,S=null,T=null;const A=new sp,v=t.getContextAttributes();let m=null,P=null;const R=[],s=[],l=new ke;let u=null;const _=new Tt;_.layers.enable(1),_.viewport=new ot;const y=new Tt;y.layers.enable(2),y.viewport=new ot;const g=[_,y],f=new np;f.layers.enable(1),f.layers.enable(2);let b=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Z=R[q];return Z===void 0&&(Z=new jr,R[q]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(q){let Z=R[q];return Z===void 0&&(Z=new jr,R[q]=Z),Z.getGripSpace()},this.getHand=function(q){let Z=R[q];return Z===void 0&&(Z=new jr,R[q]=Z),Z.getHandSpace()};function D(q){const Z=s.indexOf(q.inputSource);if(Z===-1)return;const oe=R[Z];oe!==void 0&&(oe.update(q.inputSource,q.frame,h||o),oe.dispatchEvent({type:q.type,data:q.inputSource}))}function F(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",O);for(let q=0;q<R.length;q++){const Z=s[q];Z!==null&&(s[q]=null,R[q].disconnect(Z))}b=null,N=null,A.reset(),e.setRenderTarget(m),S=null,M=null,x=null,r=null,P=null,Te.stop(),n.isPresenting=!1,e.setPixelRatio(u),e.setSize(l.width,l.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){c=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(q){h=q},this.getBaseLayer=function(){return M!==null?M:S},this.getBinding=function(){return x},this.getFrame=function(){return T},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",F),r.addEventListener("inputsourceschange",O),v.xrCompatible!==!0&&await t.makeXRCompatible(),u=e.getPixelRatio(),e.getSize(l),r.renderState.layers===void 0){const Z={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};S=new XRWebGLLayer(r,t,Z),r.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),P=new An(S.framebufferWidth,S.framebufferHeight,{format:It,type:Zt,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let Z=null,oe=null,ae=null;v.depth&&(ae=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=v.stencil?ei:$n,oe=v.stencil?Qn:Tn);const _e={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:a};x=new XRWebGLBinding(r,t),M=x.createProjectionLayer(_e),r.updateRenderState({layers:[M]}),e.setPixelRatio(1),e.setSize(M.textureWidth,M.textureHeight,!1),P=new An(M.textureWidth,M.textureHeight,{format:It,type:Zt,depthTexture:new Fo(M.textureWidth,M.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:M.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(d),h=null,o=await r.requestReferenceSpace(c),Te.setContext(r),Te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function O(q){for(let Z=0;Z<q.removed.length;Z++){const oe=q.removed[Z],ae=s.indexOf(oe);ae>=0&&(s[ae]=null,R[ae].disconnect(oe))}for(let Z=0;Z<q.added.length;Z++){const oe=q.added[Z];let ae=s.indexOf(oe);if(ae===-1){for(let Re=0;Re<R.length;Re++)if(Re>=s.length){s.push(oe),ae=Re;break}else if(s[Re]===null){s[Re]=oe,ae=Re;break}if(ae===-1)break}const _e=R[ae];_e&&_e.connect(oe)}}const E=new G,I=new G;function k(q,Z,oe){E.setFromMatrixPosition(Z.matrixWorld),I.setFromMatrixPosition(oe.matrixWorld);const ae=E.distanceTo(I),_e=Z.projectionMatrix.elements,Re=oe.projectionMatrix.elements,Le=_e[14]/(_e[10]-1),je=_e[14]/(_e[10]+1),U=(_e[9]+1)/_e[5],$e=(_e[9]-1)/_e[5],We=(_e[8]-1)/_e[0],qe=(Re[8]+1)/Re[0],ve=Le*We,et=Le*qe,Ae=ae/(-We+qe),Pe=Ae*-We;Z.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Pe),q.translateZ(Ae),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const L=Le+Ae,w=je+Ae,X=ve-Pe,Q=et+(ae-Pe),te=U*je/w*L,J=$e*je/w*L;q.projectionMatrix.makePerspective(X,Q,te,J,L,w),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function j(q,Z){Z===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Z.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;A.texture!==null&&(q.near=A.depthNear,q.far=A.depthFar),f.near=y.near=_.near=q.near,f.far=y.far=_.far=q.far,(b!==f.near||N!==f.far)&&(r.updateRenderState({depthNear:f.near,depthFar:f.far}),b=f.near,N=f.far,_.near=b,_.far=N,y.near=b,y.far=N,_.updateProjectionMatrix(),y.updateProjectionMatrix(),q.updateProjectionMatrix());const Z=q.parent,oe=f.cameras;j(f,Z);for(let ae=0;ae<oe.length;ae++)j(oe[ae],Z);oe.length===2?k(f,_,y):f.projectionMatrix.copy(_.projectionMatrix),ee(q,f,Z)};function ee(q,Z,oe){oe===null?q.matrix.copy(Z.matrixWorld):(q.matrix.copy(oe.matrixWorld),q.matrix.invert(),q.matrix.multiply(Z.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=La*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return f},this.getFoveation=function(){if(!(M===null&&S===null))return d},this.setFoveation=function(q){d=q,M!==null&&(M.fixedFoveation=q),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=q)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(f)};let Y=null;function Me(q,Z){if(p=Z.getViewerPose(h||o),T=Z,p!==null){const oe=p.views;S!==null&&(e.setRenderTargetFramebuffer(P,S.framebuffer),e.setRenderTarget(P));let ae=!1;oe.length!==f.cameras.length&&(f.cameras.length=0,ae=!0);for(let Re=0;Re<oe.length;Re++){const Le=oe[Re];let je=null;if(S!==null)je=S.getViewport(Le);else{const $e=x.getViewSubImage(M,Le);je=$e.viewport,Re===0&&(e.setRenderTargetTextures(P,$e.colorTexture,M.ignoreDepthValues?void 0:$e.depthStencilTexture),e.setRenderTarget(P))}let U=g[Re];U===void 0&&(U=new Tt,U.layers.enable(Re),U.viewport=new ot,g[Re]=U),U.matrix.fromArray(Le.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(Le.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(je.x,je.y,je.width,je.height),Re===0&&(f.matrix.copy(U.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale)),ae===!0&&f.cameras.push(U)}const _e=r.enabledFeatures;if(_e&&_e.includes("depth-sensing")){const Re=x.getDepthInformation(oe[0]);Re&&Re.isValid&&Re.texture&&A.init(e,Re,r.renderState)}}for(let oe=0;oe<R.length;oe++){const ae=s[oe],_e=R[oe];ae!==null&&_e!==void 0&&_e.update(ae,Z,h||o)}Y&&Y(q,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),T=null}const Te=new No;Te.setAnimationLoop(Me),this.setAnimationLoop=function(q){Y=q},this.dispose=function(){}}}const Mn=new Jt,cp=new Qe;function up(i,e){function t(v,m){v.matrixAutoUpdate===!0&&v.updateMatrix(),m.value.copy(v.matrix)}function n(v,m){m.color.getRGB(v.fogColor.value,Lo(i)),m.isFog?(v.fogNear.value=m.near,v.fogFar.value=m.far):m.isFogExp2&&(v.fogDensity.value=m.density)}function r(v,m,P,R,s){m.isMeshBasicMaterial||m.isMeshLambertMaterial?a(v,m):m.isMeshToonMaterial?(a(v,m),x(v,m)):m.isMeshPhongMaterial?(a(v,m),p(v,m)):m.isMeshStandardMaterial?(a(v,m),M(v,m),m.isMeshPhysicalMaterial&&S(v,m,s)):m.isMeshMatcapMaterial?(a(v,m),T(v,m)):m.isMeshDepthMaterial?a(v,m):m.isMeshDistanceMaterial?(a(v,m),A(v,m)):m.isMeshNormalMaterial?a(v,m):m.isLineBasicMaterial?(o(v,m),m.isLineDashedMaterial&&c(v,m)):m.isPointsMaterial?d(v,m,P,R):m.isSpriteMaterial?h(v,m):m.isShadowMaterial?(v.color.value.copy(m.color),v.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(v,m){v.opacity.value=m.opacity,m.color&&v.diffuse.value.copy(m.color),m.emissive&&v.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(v.map.value=m.map,t(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.bumpMap&&(v.bumpMap.value=m.bumpMap,t(m.bumpMap,v.bumpMapTransform),v.bumpScale.value=m.bumpScale,m.side===gt&&(v.bumpScale.value*=-1)),m.normalMap&&(v.normalMap.value=m.normalMap,t(m.normalMap,v.normalMapTransform),v.normalScale.value.copy(m.normalScale),m.side===gt&&v.normalScale.value.negate()),m.displacementMap&&(v.displacementMap.value=m.displacementMap,t(m.displacementMap,v.displacementMapTransform),v.displacementScale.value=m.displacementScale,v.displacementBias.value=m.displacementBias),m.emissiveMap&&(v.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,v.emissiveMapTransform)),m.specularMap&&(v.specularMap.value=m.specularMap,t(m.specularMap,v.specularMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest);const P=e.get(m),R=P.envMap,s=P.envMapRotation;R&&(v.envMap.value=R,Mn.copy(s),Mn.x*=-1,Mn.y*=-1,Mn.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Mn.y*=-1,Mn.z*=-1),v.envMapRotation.value.setFromMatrix4(cp.makeRotationFromEuler(Mn)),v.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=m.reflectivity,v.ior.value=m.ior,v.refractionRatio.value=m.refractionRatio),m.lightMap&&(v.lightMap.value=m.lightMap,v.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,v.lightMapTransform)),m.aoMap&&(v.aoMap.value=m.aoMap,v.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,v.aoMapTransform))}function o(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,m.map&&(v.map.value=m.map,t(m.map,v.mapTransform))}function c(v,m){v.dashSize.value=m.dashSize,v.totalSize.value=m.dashSize+m.gapSize,v.scale.value=m.scale}function d(v,m,P,R){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.size.value=m.size*P,v.scale.value=R*.5,m.map&&(v.map.value=m.map,t(m.map,v.uvTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function h(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.rotation.value=m.rotation,m.map&&(v.map.value=m.map,t(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function p(v,m){v.specular.value.copy(m.specular),v.shininess.value=Math.max(m.shininess,1e-4)}function x(v,m){m.gradientMap&&(v.gradientMap.value=m.gradientMap)}function M(v,m){v.metalness.value=m.metalness,m.metalnessMap&&(v.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,v.metalnessMapTransform)),v.roughness.value=m.roughness,m.roughnessMap&&(v.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,v.roughnessMapTransform)),m.envMap&&(v.envMapIntensity.value=m.envMapIntensity)}function S(v,m,P){v.ior.value=m.ior,m.sheen>0&&(v.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),v.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(v.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,v.sheenColorMapTransform)),m.sheenRoughnessMap&&(v.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,v.sheenRoughnessMapTransform))),m.clearcoat>0&&(v.clearcoat.value=m.clearcoat,v.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(v.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,v.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(v.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===gt&&v.clearcoatNormalScale.value.negate())),m.dispersion>0&&(v.dispersion.value=m.dispersion),m.iridescence>0&&(v.iridescence.value=m.iridescence,v.iridescenceIOR.value=m.iridescenceIOR,v.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(v.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,v.iridescenceMapTransform)),m.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),m.transmission>0&&(v.transmission.value=m.transmission,v.transmissionSamplerMap.value=P.texture,v.transmissionSamplerSize.value.set(P.width,P.height),m.transmissionMap&&(v.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,v.transmissionMapTransform)),v.thickness.value=m.thickness,m.thicknessMap&&(v.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=m.attenuationDistance,v.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(v.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(v.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=m.specularIntensity,v.specularColor.value.copy(m.specularColor),m.specularColorMap&&(v.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,v.specularColorMapTransform)),m.specularIntensityMap&&(v.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,v.specularIntensityMapTransform))}function T(v,m){m.matcap&&(v.matcap.value=m.matcap)}function A(v,m){const P=e.get(m).light;v.referencePosition.value.setFromMatrixPosition(P.matrixWorld),v.nearDistance.value=P.shadow.camera.near,v.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function dp(i,e,t,n){let r={},a={},o=[];const c=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function d(P,R){const s=R.program;n.uniformBlockBinding(P,s)}function h(P,R){let s=r[P.id];s===void 0&&(T(P),s=p(P),r[P.id]=s,P.addEventListener("dispose",v));const l=R.program;n.updateUBOMapping(P,l);const u=e.render.frame;a[P.id]!==u&&(M(P),a[P.id]=u)}function p(P){const R=x();P.__bindingPointIndex=R;const s=i.createBuffer(),l=P.__size,u=P.usage;return i.bindBuffer(i.UNIFORM_BUFFER,s),i.bufferData(i.UNIFORM_BUFFER,l,u),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,R,s),s}function x(){for(let P=0;P<c;P++)if(o.indexOf(P)===-1)return o.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function M(P){const R=r[P.id],s=P.uniforms,l=P.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let u=0,_=s.length;u<_;u++){const y=Array.isArray(s[u])?s[u]:[s[u]];for(let g=0,f=y.length;g<f;g++){const b=y[g];if(S(b,u,g,l)===!0){const N=b.__offset,D=Array.isArray(b.value)?b.value:[b.value];let F=0;for(let O=0;O<D.length;O++){const E=D[O],I=A(E);typeof E=="number"||typeof E=="boolean"?(b.__data[0]=E,i.bufferSubData(i.UNIFORM_BUFFER,N+F,b.__data)):E.isMatrix3?(b.__data[0]=E.elements[0],b.__data[1]=E.elements[1],b.__data[2]=E.elements[2],b.__data[3]=0,b.__data[4]=E.elements[3],b.__data[5]=E.elements[4],b.__data[6]=E.elements[5],b.__data[7]=0,b.__data[8]=E.elements[6],b.__data[9]=E.elements[7],b.__data[10]=E.elements[8],b.__data[11]=0):(E.toArray(b.__data,F),F+=I.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function S(P,R,s,l){const u=P.value,_=R+"_"+s;if(l[_]===void 0)return typeof u=="number"||typeof u=="boolean"?l[_]=u:l[_]=u.clone(),!0;{const y=l[_];if(typeof u=="number"||typeof u=="boolean"){if(y!==u)return l[_]=u,!0}else if(y.equals(u)===!1)return y.copy(u),!0}return!1}function T(P){const R=P.uniforms;let s=0;const l=16;for(let _=0,y=R.length;_<y;_++){const g=Array.isArray(R[_])?R[_]:[R[_]];for(let f=0,b=g.length;f<b;f++){const N=g[f],D=Array.isArray(N.value)?N.value:[N.value];for(let F=0,O=D.length;F<O;F++){const E=D[F],I=A(E),k=s%l;k!==0&&l-k<I.boundary&&(s+=l-k),N.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=s,s+=I.storage}}}const u=s%l;return u>0&&(s+=l-u),P.__size=s,P.__cache={},this}function A(P){const R={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(R.boundary=4,R.storage=4):P.isVector2?(R.boundary=8,R.storage=8):P.isVector3||P.isColor?(R.boundary=16,R.storage=12):P.isVector4?(R.boundary=16,R.storage=16):P.isMatrix3?(R.boundary=48,R.storage=48):P.isMatrix4?(R.boundary=64,R.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),R}function v(P){const R=P.target;R.removeEventListener("dispose",v);const s=o.indexOf(R.__bindingPointIndex);o.splice(s,1),i.deleteBuffer(r[R.id]),delete r[R.id],delete a[R.id]}function m(){for(const P in r)i.deleteBuffer(r[P]);o=[],r={},a={}}return{bind:d,update:h,dispose:m}}class lp{constructor(e={}){const{canvas:t=eu(),context:n=null,depth:r=!0,stencil:a=!1,alpha:o=!1,antialias:c=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:x=!1}=e;this.isWebGLRenderer=!0;let M;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=n.getContextAttributes().alpha}else M=o;const S=new Uint32Array(4),T=new Int32Array(4);let A=null,v=null;const m=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yt,this.toneMapping=un,this.toneMappingExposure=1;const R=this;let s=!1,l=0,u=0,_=null,y=-1,g=null;const f=new ot,b=new ot;let N=null;const D=new Ve(0);let F=0,O=t.width,E=t.height,I=1,k=null,j=null;const ee=new ot(0,0,O,E),Y=new ot(0,0,O,E);let Me=!1;const Te=new Io;let q=!1,Z=!1;const oe=new Qe,ae=new G,_e=new ot,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Le=!1;function je(){return _===null?I:1}let U=n;function $e(C,z){return t.getContext(C,z)}try{const C={alpha:!0,depth:r,stencil:a,antialias:c,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ia}`),t.addEventListener("webglcontextlost",$,!1),t.addEventListener("webglcontextrestored",K,!1),t.addEventListener("webglcontextcreationerror",se,!1),U===null){const z="webgl2";if(U=$e(z,C),U===null)throw $e(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let We,qe,ve,et,Ae,Pe,L,w,X,Q,te,J,xe,ue,fe,De,ne,le,Fe,we,he,Ce,Ne,Ke;function B(){We=new vf(U),We.init(),Ce=new tp(U,We),qe=new lf(U,We,e,Ce),ve=new Jh(U),et=new Sf(U),Ae=new kh,Pe=new ep(U,We,ve,Ae,qe,Ce,et),L=new hf(R),w=new gf(R),X=new Tu(U),Ne=new uf(U,X),Q=new Mf(U,X,et,Ne),te=new bf(U,Q,X,et),Fe=new yf(U,qe,Pe),De=new ff(Ae),J=new Oh(R,L,w,We,qe,Ne,De),xe=new up(R,Ae),ue=new zh,fe=new qh(We),le=new cf(R,L,w,ve,te,M,d),ne=new Zh(R,te,qe),Ke=new dp(U,et,qe,ve),we=new df(U,We,et),he=new xf(U,We,et),et.programs=J.programs,R.capabilities=qe,R.extensions=We,R.properties=Ae,R.renderLists=ue,R.shadowMap=ne,R.state=ve,R.info=et}B();const ie=new op(R,U);this.xr=ie,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const C=We.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=We.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(C){C!==void 0&&(I=C,this.setSize(O,E,!1))},this.getSize=function(C){return C.set(O,E)},this.setSize=function(C,z,V=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=C,E=z,t.width=Math.floor(C*I),t.height=Math.floor(z*I),V===!0&&(t.style.width=C+"px",t.style.height=z+"px"),this.setViewport(0,0,C,z)},this.getDrawingBufferSize=function(C){return C.set(O*I,E*I).floor()},this.setDrawingBufferSize=function(C,z,V){O=C,E=z,I=V,t.width=Math.floor(C*V),t.height=Math.floor(z*V),this.setViewport(0,0,C,z)},this.getCurrentViewport=function(C){return C.copy(f)},this.getViewport=function(C){return C.copy(ee)},this.setViewport=function(C,z,V,W){C.isVector4?ee.set(C.x,C.y,C.z,C.w):ee.set(C,z,V,W),ve.viewport(f.copy(ee).multiplyScalar(I).round())},this.getScissor=function(C){return C.copy(Y)},this.setScissor=function(C,z,V,W){C.isVector4?Y.set(C.x,C.y,C.z,C.w):Y.set(C,z,V,W),ve.scissor(b.copy(Y).multiplyScalar(I).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(C){ve.setScissorTest(Me=C)},this.setOpaqueSort=function(C){k=C},this.setTransparentSort=function(C){j=C},this.getClearColor=function(C){return C.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor.apply(le,arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha.apply(le,arguments)},this.clear=function(C=!0,z=!0,V=!0){let W=0;if(C){let H=!1;if(_!==null){const re=_.texture.format;H=re===za||re===Ba||re===ka}if(H){const re=_.texture.type,de=re===Zt||re===Tn||re===pi||re===Qn||re===Fa||re===Oa,pe=le.getClearColor(),me=le.getClearAlpha(),be=pe.r,Ee=pe.g,Se=pe.b;de?(S[0]=be,S[1]=Ee,S[2]=Se,S[3]=me,U.clearBufferuiv(U.COLOR,0,S)):(T[0]=be,T[1]=Ee,T[2]=Se,T[3]=me,U.clearBufferiv(U.COLOR,0,T))}else W|=U.COLOR_BUFFER_BIT}z&&(W|=U.DEPTH_BUFFER_BIT),V&&(W|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$,!1),t.removeEventListener("webglcontextrestored",K,!1),t.removeEventListener("webglcontextcreationerror",se,!1),ue.dispose(),fe.dispose(),Ae.dispose(),L.dispose(),w.dispose(),te.dispose(),Ne.dispose(),Ke.dispose(),J.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Ft),ie.removeEventListener("sessionend",$a),hn.stop()};function $(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),s=!0}function K(){console.log("THREE.WebGLRenderer: Context Restored."),s=!1;const C=et.autoReset,z=ne.enabled,V=ne.autoUpdate,W=ne.needsUpdate,H=ne.type;B(),et.autoReset=C,ne.enabled=z,ne.autoUpdate=V,ne.needsUpdate=W,ne.type=H}function se(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ye(C){const z=C.target;z.removeEventListener("dispose",ye),Oe(z)}function Oe(C){tt(C),Ae.remove(C)}function tt(C){const z=Ae.get(C).programs;z!==void 0&&(z.forEach(function(V){J.releaseProgram(V)}),C.isShaderMaterial&&J.releaseShaderCache(C))}this.renderBufferDirect=function(C,z,V,W,H,re){z===null&&(z=Re);const de=H.isMesh&&H.matrixWorld.determinant()<0,pe=ec(C,z,V,W,H);ve.setMaterial(W,de);let me=V.index,be=1;if(W.wireframe===!0){if(me=Q.getWireframeAttribute(V),me===void 0)return;be=2}const Ee=V.drawRange,Se=V.attributes.position;let ze=Ee.start*be,Ze=(Ee.start+Ee.count)*be;re!==null&&(ze=Math.max(ze,re.start*be),Ze=Math.min(Ze,(re.start+re.count)*be)),me!==null?(ze=Math.max(ze,0),Ze=Math.min(Ze,me.count)):Se!=null&&(ze=Math.max(ze,0),Ze=Math.min(Ze,Se.count));const Je=Ze-ze;if(Je<0||Je===1/0)return;Ne.setup(H,W,pe,V,me);let vt,He=we;if(me!==null&&(vt=X.get(me),He=he,He.setIndex(vt)),H.isMesh)W.wireframe===!0?(ve.setLineWidth(W.wireframeLinewidth*je()),He.setMode(U.LINES)):He.setMode(U.TRIANGLES);else if(H.isLine){let ge=W.linewidth;ge===void 0&&(ge=1),ve.setLineWidth(ge*je()),H.isLineSegments?He.setMode(U.LINES):H.isLineLoop?He.setMode(U.LINE_LOOP):He.setMode(U.LINE_STRIP)}else H.isPoints?He.setMode(U.POINTS):H.isSprite&&He.setMode(U.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)He.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(We.get("WEBGL_multi_draw"))He.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const ge=H._multiDrawStarts,ut=H._multiDrawCounts,Ge=H._multiDrawCount,Rt=me?X.get(me).bytesPerElement:1,Cn=Ae.get(W).currentProgram.getUniforms();for(let Mt=0;Mt<Ge;Mt++)Cn.setValue(U,"_gl_DrawID",Mt),He.render(ge[Mt]/Rt,ut[Mt])}else if(H.isInstancedMesh)He.renderInstances(ze,Je,H.count);else if(V.isInstancedBufferGeometry){const ge=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,ut=Math.min(V.instanceCount,ge);He.renderInstances(ze,Je,ut)}else He.render(ze,Je)};function ct(C,z,V){C.transparent===!0&&C.side===jt&&C.forceSinglePass===!1?(C.side=gt,C.needsUpdate=!0,wi(C,z,V),C.side=dn,C.needsUpdate=!0,wi(C,z,V),C.side=jt):wi(C,z,V)}this.compile=function(C,z,V=null){V===null&&(V=C),v=fe.get(V),v.init(z),P.push(v),V.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(v.pushLight(H),H.castShadow&&v.pushShadow(H))}),C!==V&&C.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(v.pushLight(H),H.castShadow&&v.pushShadow(H))}),v.setupLights();const W=new Set;return C.traverse(function(H){const re=H.material;if(re)if(Array.isArray(re))for(let de=0;de<re.length;de++){const pe=re[de];ct(pe,V,H),W.add(pe)}else ct(re,V,H),W.add(re)}),P.pop(),v=null,W},this.compileAsync=function(C,z,V=null){const W=this.compile(C,z,V);return new Promise(H=>{function re(){if(W.forEach(function(de){Ae.get(de).currentProgram.isReady()&&W.delete(de)}),W.size===0){H(C);return}setTimeout(re,10)}We.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Be=null;function zt(C){Be&&Be(C)}function Ft(){hn.stop()}function $a(){hn.start()}const hn=new No;hn.setAnimationLoop(zt),typeof self<"u"&&hn.setContext(self),this.setAnimationLoop=function(C){Be=C,ie.setAnimationLoop(C),C===null?hn.stop():hn.start()},ie.addEventListener("sessionstart",Ft),ie.addEventListener("sessionend",$a),this.render=function(C,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(s===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(z),z=ie.getCamera()),C.isScene===!0&&C.onBeforeRender(R,C,z,_),v=fe.get(C,P.length),v.init(z),P.push(v),oe.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Te.setFromProjectionMatrix(oe),Z=this.localClippingEnabled,q=De.init(this.clippingPlanes,Z),A=ue.get(C,m.length),A.init(),m.push(A),ie.enabled===!0&&ie.isPresenting===!0){const re=R.xr.getDepthSensingMesh();re!==null&&_r(re,z,-1/0,R.sortObjects)}_r(C,z,0,R.sortObjects),A.finish(),R.sortObjects===!0&&A.sort(k,j),Le=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Le&&le.addToRenderList(A,C),this.info.render.frame++,q===!0&&De.beginShadows();const V=v.state.shadowsArray;ne.render(V,C,z),q===!0&&De.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=A.opaque,H=A.transmissive;if(v.setupLights(),z.isArrayCamera){const re=z.cameras;if(H.length>0)for(let de=0,pe=re.length;de<pe;de++){const me=re[de];Za(W,H,C,me)}Le&&le.render(C);for(let de=0,pe=re.length;de<pe;de++){const me=re[de];Ka(A,C,me,me.viewport)}}else H.length>0&&Za(W,H,C,z),Le&&le.render(C),Ka(A,C,z);_!==null&&(Pe.updateMultisampleRenderTarget(_),Pe.updateRenderTargetMipmap(_)),C.isScene===!0&&C.onAfterRender(R,C,z),Ne.resetDefaultState(),y=-1,g=null,P.pop(),P.length>0?(v=P[P.length-1],q===!0&&De.setGlobalState(R.clippingPlanes,v.state.camera)):v=null,m.pop(),m.length>0?A=m[m.length-1]:A=null};function _r(C,z,V,W){if(C.visible===!1)return;if(C.layers.test(z.layers)){if(C.isGroup)V=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(z);else if(C.isLight)v.pushLight(C),C.castShadow&&v.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Te.intersectsSprite(C)){W&&_e.setFromMatrixPosition(C.matrixWorld).applyMatrix4(oe);const de=te.update(C),pe=C.material;pe.visible&&A.push(C,de,pe,V,_e.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Te.intersectsObject(C))){const de=te.update(C),pe=C.material;if(W&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),_e.copy(C.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),_e.copy(de.boundingSphere.center)),_e.applyMatrix4(C.matrixWorld).applyMatrix4(oe)),Array.isArray(pe)){const me=de.groups;for(let be=0,Ee=me.length;be<Ee;be++){const Se=me[be],ze=pe[Se.materialIndex];ze&&ze.visible&&A.push(C,de,ze,V,_e.z,Se)}}else pe.visible&&A.push(C,de,pe,V,_e.z,null)}}const re=C.children;for(let de=0,pe=re.length;de<pe;de++)_r(re[de],z,V,W)}function Ka(C,z,V,W){const H=C.opaque,re=C.transmissive,de=C.transparent;v.setupLightsView(V),q===!0&&De.setGlobalState(R.clippingPlanes,V),W&&ve.viewport(f.copy(W)),H.length>0&&Ei(H,z,V),re.length>0&&Ei(re,z,V),de.length>0&&Ei(de,z,V),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Za(C,z,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[W.id]===void 0&&(v.state.transmissionRenderTarget[W.id]=new An(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?_i:Zt,minFilter:wn,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace}));const re=v.state.transmissionRenderTarget[W.id],de=W.viewport||f;re.setSize(de.z,de.w);const pe=R.getRenderTarget();R.setRenderTarget(re),R.getClearColor(D),F=R.getClearAlpha(),F<1&&R.setClearColor(16777215,.5),Le?le.render(V):R.clear();const me=R.toneMapping;R.toneMapping=un;const be=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),v.setupLightsView(W),q===!0&&De.setGlobalState(R.clippingPlanes,W),Ei(C,V,W),Pe.updateMultisampleRenderTarget(re),Pe.updateRenderTargetMipmap(re),We.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let Se=0,ze=z.length;Se<ze;Se++){const Ze=z[Se],Je=Ze.object,vt=Ze.geometry,He=Ze.material,ge=Ze.group;if(He.side===jt&&Je.layers.test(W.layers)){const ut=He.side;He.side=gt,He.needsUpdate=!0,Ja(Je,V,W,vt,He,ge),He.side=ut,He.needsUpdate=!0,Ee=!0}}Ee===!0&&(Pe.updateMultisampleRenderTarget(re),Pe.updateRenderTargetMipmap(re))}R.setRenderTarget(pe),R.setClearColor(D,F),be!==void 0&&(W.viewport=be),R.toneMapping=me}function Ei(C,z,V){const W=z.isScene===!0?z.overrideMaterial:null;for(let H=0,re=C.length;H<re;H++){const de=C[H],pe=de.object,me=de.geometry,be=W===null?de.material:W,Ee=de.group;pe.layers.test(V.layers)&&Ja(pe,z,V,me,be,Ee)}}function Ja(C,z,V,W,H,re){C.onBeforeRender(R,z,V,W,H,re),C.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),H.transparent===!0&&H.side===jt&&H.forceSinglePass===!1?(H.side=gt,H.needsUpdate=!0,R.renderBufferDirect(V,z,W,H,C,re),H.side=dn,H.needsUpdate=!0,R.renderBufferDirect(V,z,W,H,C,re),H.side=jt):R.renderBufferDirect(V,z,W,H,C,re),C.onAfterRender(R,z,V,W,H,re)}function wi(C,z,V){z.isScene!==!0&&(z=Re);const W=Ae.get(C),H=v.state.lights,re=v.state.shadowsArray,de=H.state.version,pe=J.getParameters(C,H.state,re,z,V),me=J.getProgramCacheKey(pe);let be=W.programs;W.environment=C.isMeshStandardMaterial?z.environment:null,W.fog=z.fog,W.envMap=(C.isMeshStandardMaterial?w:L).get(C.envMap||W.environment),W.envMapRotation=W.environment!==null&&C.envMap===null?z.environmentRotation:C.envMapRotation,be===void 0&&(C.addEventListener("dispose",ye),be=new Map,W.programs=be);let Ee=be.get(me);if(Ee!==void 0){if(W.currentProgram===Ee&&W.lightsStateVersion===de)return es(C,pe),Ee}else pe.uniforms=J.getUniforms(C),C.onBeforeCompile(pe,R),Ee=J.acquireProgram(pe,me),be.set(me,Ee),W.uniforms=pe.uniforms;const Se=W.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Se.clippingPlanes=De.uniform),es(C,pe),W.needsLights=nc(C),W.lightsStateVersion=de,W.needsLights&&(Se.ambientLightColor.value=H.state.ambient,Se.lightProbe.value=H.state.probe,Se.directionalLights.value=H.state.directional,Se.directionalLightShadows.value=H.state.directionalShadow,Se.spotLights.value=H.state.spot,Se.spotLightShadows.value=H.state.spotShadow,Se.rectAreaLights.value=H.state.rectArea,Se.ltc_1.value=H.state.rectAreaLTC1,Se.ltc_2.value=H.state.rectAreaLTC2,Se.pointLights.value=H.state.point,Se.pointLightShadows.value=H.state.pointShadow,Se.hemisphereLights.value=H.state.hemi,Se.directionalShadowMap.value=H.state.directionalShadowMap,Se.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Se.spotShadowMap.value=H.state.spotShadowMap,Se.spotLightMatrix.value=H.state.spotLightMatrix,Se.spotLightMap.value=H.state.spotLightMap,Se.pointShadowMap.value=H.state.pointShadowMap,Se.pointShadowMatrix.value=H.state.pointShadowMatrix),W.currentProgram=Ee,W.uniformsList=null,Ee}function Qa(C){if(C.uniformsList===null){const z=C.currentProgram.getUniforms();C.uniformsList=rr.seqWithValue(z.seq,C.uniforms)}return C.uniformsList}function es(C,z){const V=Ae.get(C);V.outputColorSpace=z.outputColorSpace,V.batching=z.batching,V.batchingColor=z.batchingColor,V.instancing=z.instancing,V.instancingColor=z.instancingColor,V.instancingMorph=z.instancingMorph,V.skinning=z.skinning,V.morphTargets=z.morphTargets,V.morphNormals=z.morphNormals,V.morphColors=z.morphColors,V.morphTargetsCount=z.morphTargetsCount,V.numClippingPlanes=z.numClippingPlanes,V.numIntersection=z.numClipIntersection,V.vertexAlphas=z.vertexAlphas,V.vertexTangents=z.vertexTangents,V.toneMapping=z.toneMapping}function ec(C,z,V,W,H){z.isScene!==!0&&(z=Re),Pe.resetTextureUnits();const re=z.fog,de=W.isMeshStandardMaterial?z.environment:null,pe=_===null?R.outputColorSpace:_.isXRRenderTarget===!0?_.texture.colorSpace:fn,me=(W.isMeshStandardMaterial?w:L).get(W.envMap||de),be=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ee=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Se=!!V.morphAttributes.position,ze=!!V.morphAttributes.normal,Ze=!!V.morphAttributes.color;let Je=un;W.toneMapped&&(_===null||_.isXRRenderTarget===!0)&&(Je=R.toneMapping);const vt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,He=vt!==void 0?vt.length:0,ge=Ae.get(W),ut=v.state.lights;if(q===!0&&(Z===!0||C!==g)){const Et=C===g&&W.id===y;De.setState(W,C,Et)}let Ge=!1;W.version===ge.__version?(ge.needsLights&&ge.lightsStateVersion!==ut.state.version||ge.outputColorSpace!==pe||H.isBatchedMesh&&ge.batching===!1||!H.isBatchedMesh&&ge.batching===!0||H.isBatchedMesh&&ge.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&ge.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&ge.instancing===!1||!H.isInstancedMesh&&ge.instancing===!0||H.isSkinnedMesh&&ge.skinning===!1||!H.isSkinnedMesh&&ge.skinning===!0||H.isInstancedMesh&&ge.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&ge.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&ge.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&ge.instancingMorph===!1&&H.morphTexture!==null||ge.envMap!==me||W.fog===!0&&ge.fog!==re||ge.numClippingPlanes!==void 0&&(ge.numClippingPlanes!==De.numPlanes||ge.numIntersection!==De.numIntersection)||ge.vertexAlphas!==be||ge.vertexTangents!==Ee||ge.morphTargets!==Se||ge.morphNormals!==ze||ge.morphColors!==Ze||ge.toneMapping!==Je||ge.morphTargetsCount!==He)&&(Ge=!0):(Ge=!0,ge.__version=W.version);let Rt=ge.currentProgram;Ge===!0&&(Rt=wi(W,z,H));let Cn=!1,Mt=!1,gr=!1;const nt=Rt.getUniforms(),Qt=ge.uniforms;if(ve.useProgram(Rt.program)&&(Cn=!0,Mt=!0,gr=!0),W.id!==y&&(y=W.id,Mt=!0),Cn||g!==C){nt.setValue(U,"projectionMatrix",C.projectionMatrix),nt.setValue(U,"viewMatrix",C.matrixWorldInverse);const Et=nt.map.cameraPosition;Et!==void 0&&Et.setValue(U,ae.setFromMatrixPosition(C.matrixWorld)),qe.logarithmicDepthBuffer&&nt.setValue(U,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&nt.setValue(U,"isOrthographic",C.isOrthographicCamera===!0),g!==C&&(g=C,Mt=!0,gr=!0)}if(H.isSkinnedMesh){nt.setOptional(U,H,"bindMatrix"),nt.setOptional(U,H,"bindMatrixInverse");const Et=H.skeleton;Et&&(Et.boneTexture===null&&Et.computeBoneTexture(),nt.setValue(U,"boneTexture",Et.boneTexture,Pe))}H.isBatchedMesh&&(nt.setOptional(U,H,"batchingTexture"),nt.setValue(U,"batchingTexture",H._matricesTexture,Pe),nt.setOptional(U,H,"batchingIdTexture"),nt.setValue(U,"batchingIdTexture",H._indirectTexture,Pe),nt.setOptional(U,H,"batchingColorTexture"),H._colorsTexture!==null&&nt.setValue(U,"batchingColorTexture",H._colorsTexture,Pe));const vr=V.morphAttributes;if((vr.position!==void 0||vr.normal!==void 0||vr.color!==void 0)&&Fe.update(H,V,Rt),(Mt||ge.receiveShadow!==H.receiveShadow)&&(ge.receiveShadow=H.receiveShadow,nt.setValue(U,"receiveShadow",H.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Qt.envMap.value=me,Qt.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&z.environment!==null&&(Qt.envMapIntensity.value=z.environmentIntensity),Mt&&(nt.setValue(U,"toneMappingExposure",R.toneMappingExposure),ge.needsLights&&tc(Qt,gr),re&&W.fog===!0&&xe.refreshFogUniforms(Qt,re),xe.refreshMaterialUniforms(Qt,W,I,E,v.state.transmissionRenderTarget[C.id]),rr.upload(U,Qa(ge),Qt,Pe)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(rr.upload(U,Qa(ge),Qt,Pe),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&nt.setValue(U,"center",H.center),nt.setValue(U,"modelViewMatrix",H.modelViewMatrix),nt.setValue(U,"normalMatrix",H.normalMatrix),nt.setValue(U,"modelMatrix",H.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Et=W.uniformsGroups;for(let Mr=0,ic=Et.length;Mr<ic;Mr++){const ts=Et[Mr];Ke.update(ts,Rt),Ke.bind(ts,Rt)}}return Rt}function tc(C,z){C.ambientLightColor.needsUpdate=z,C.lightProbe.needsUpdate=z,C.directionalLights.needsUpdate=z,C.directionalLightShadows.needsUpdate=z,C.pointLights.needsUpdate=z,C.pointLightShadows.needsUpdate=z,C.spotLights.needsUpdate=z,C.spotLightShadows.needsUpdate=z,C.rectAreaLights.needsUpdate=z,C.hemisphereLights.needsUpdate=z}function nc(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return l},this.getActiveMipmapLevel=function(){return u},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(C,z,V){Ae.get(C.texture).__webglTexture=z,Ae.get(C.depthTexture).__webglTexture=V;const W=Ae.get(C);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||We.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,z){const V=Ae.get(C);V.__webglFramebuffer=z,V.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(C,z=0,V=0){_=C,l=z,u=V;let W=!0,H=null,re=!1,de=!1;if(C){const me=Ae.get(C);me.__useDefaultFramebuffer!==void 0?(ve.bindFramebuffer(U.FRAMEBUFFER,null),W=!1):me.__webglFramebuffer===void 0?Pe.setupRenderTarget(C):me.__hasExternalTextures&&Pe.rebindTextures(C,Ae.get(C.texture).__webglTexture,Ae.get(C.depthTexture).__webglTexture);const be=C.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(de=!0);const Ee=Ae.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ee[z])?H=Ee[z][V]:H=Ee[z],re=!0):C.samples>0&&Pe.useMultisampledRTT(C)===!1?H=Ae.get(C).__webglMultisampledFramebuffer:Array.isArray(Ee)?H=Ee[V]:H=Ee,f.copy(C.viewport),b.copy(C.scissor),N=C.scissorTest}else f.copy(ee).multiplyScalar(I).floor(),b.copy(Y).multiplyScalar(I).floor(),N=Me;if(ve.bindFramebuffer(U.FRAMEBUFFER,H)&&W&&ve.drawBuffers(C,H),ve.viewport(f),ve.scissor(b),ve.setScissorTest(N),re){const me=Ae.get(C.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+z,me.__webglTexture,V)}else if(de){const me=Ae.get(C.texture),be=z||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,me.__webglTexture,V||0,be)}y=-1},this.readRenderTargetPixels=function(C,z,V,W,H,re,de){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=Ae.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&de!==void 0&&(pe=pe[de]),pe){ve.bindFramebuffer(U.FRAMEBUFFER,pe);try{const me=C.texture,be=me.format,Ee=me.type;if(!qe.textureFormatReadable(be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(Ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=C.width-W&&V>=0&&V<=C.height-H&&U.readPixels(z,V,W,H,Ce.convert(be),Ce.convert(Ee),re)}finally{const me=_!==null?Ae.get(_).__webglFramebuffer:null;ve.bindFramebuffer(U.FRAMEBUFFER,me)}}},this.readRenderTargetPixelsAsync=async function(C,z,V,W,H,re,de){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=Ae.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&de!==void 0&&(pe=pe[de]),pe){ve.bindFramebuffer(U.FRAMEBUFFER,pe);try{const me=C.texture,be=me.format,Ee=me.type;if(!qe.textureFormatReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(Ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=C.width-W&&V>=0&&V<=C.height-H){const Se=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Se),U.bufferData(U.PIXEL_PACK_BUFFER,re.byteLength,U.STREAM_READ),U.readPixels(z,V,W,H,Ce.convert(be),Ce.convert(Ee),0),U.flush();const ze=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);await tu(U,ze,4);try{U.bindBuffer(U.PIXEL_PACK_BUFFER,Se),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,re)}finally{U.deleteBuffer(Se),U.deleteSync(ze)}return re}}finally{const me=_!==null?Ae.get(_).__webglFramebuffer:null;ve.bindFramebuffer(U.FRAMEBUFFER,me)}}},this.copyFramebufferToTexture=function(C,z=null,V=0){C.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,C=arguments[1]);const W=Math.pow(2,-V),H=Math.floor(C.image.width*W),re=Math.floor(C.image.height*W),de=z!==null?z.x:0,pe=z!==null?z.y:0;Pe.setTexture2D(C,0),U.copyTexSubImage2D(U.TEXTURE_2D,V,0,0,de,pe,H,re),ve.unbindTexture()},this.copyTextureToTexture=function(C,z,V=null,W=null,H=0){C.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,C=arguments[1],z=arguments[2],H=arguments[3]||0,V=null);let re,de,pe,me,be,Ee;V!==null?(re=V.max.x-V.min.x,de=V.max.y-V.min.y,pe=V.min.x,me=V.min.y):(re=C.image.width,de=C.image.height,pe=0,me=0),W!==null?(be=W.x,Ee=W.y):(be=0,Ee=0);const Se=Ce.convert(z.format),ze=Ce.convert(z.type);Pe.setTexture2D(z,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,z.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,z.unpackAlignment);const Ze=U.getParameter(U.UNPACK_ROW_LENGTH),Je=U.getParameter(U.UNPACK_IMAGE_HEIGHT),vt=U.getParameter(U.UNPACK_SKIP_PIXELS),He=U.getParameter(U.UNPACK_SKIP_ROWS),ge=U.getParameter(U.UNPACK_SKIP_IMAGES),ut=C.isCompressedTexture?C.mipmaps[H]:C.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,ut.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ut.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,pe),U.pixelStorei(U.UNPACK_SKIP_ROWS,me),C.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,H,be,Ee,re,de,Se,ze,ut.data):C.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,H,be,Ee,ut.width,ut.height,Se,ut.data):U.texSubImage2D(U.TEXTURE_2D,H,be,Ee,re,de,Se,ze,ut),U.pixelStorei(U.UNPACK_ROW_LENGTH,Ze),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Je),U.pixelStorei(U.UNPACK_SKIP_PIXELS,vt),U.pixelStorei(U.UNPACK_SKIP_ROWS,He),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ge),H===0&&z.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),ve.unbindTexture()},this.copyTextureToTexture3D=function(C,z,V=null,W=null,H=0){C.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,C=arguments[2],z=arguments[3],H=arguments[4]||0);let re,de,pe,me,be,Ee,Se,ze,Ze;const Je=C.isCompressedTexture?C.mipmaps[H]:C.image;V!==null?(re=V.max.x-V.min.x,de=V.max.y-V.min.y,pe=V.max.z-V.min.z,me=V.min.x,be=V.min.y,Ee=V.min.z):(re=Je.width,de=Je.height,pe=Je.depth,me=0,be=0,Ee=0),W!==null?(Se=W.x,ze=W.y,Ze=W.z):(Se=0,ze=0,Ze=0);const vt=Ce.convert(z.format),He=Ce.convert(z.type);let ge;if(z.isData3DTexture)Pe.setTexture3D(z,0),ge=U.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)Pe.setTexture2DArray(z,0),ge=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,z.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,z.unpackAlignment);const ut=U.getParameter(U.UNPACK_ROW_LENGTH),Ge=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Rt=U.getParameter(U.UNPACK_SKIP_PIXELS),Cn=U.getParameter(U.UNPACK_SKIP_ROWS),Mt=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Je.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Je.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,me),U.pixelStorei(U.UNPACK_SKIP_ROWS,be),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ee),C.isDataTexture||C.isData3DTexture?U.texSubImage3D(ge,H,Se,ze,Ze,re,de,pe,vt,He,Je.data):z.isCompressedArrayTexture?U.compressedTexSubImage3D(ge,H,Se,ze,Ze,re,de,pe,vt,Je.data):U.texSubImage3D(ge,H,Se,ze,Ze,re,de,pe,vt,He,Je),U.pixelStorei(U.UNPACK_ROW_LENGTH,ut),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ge),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Rt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Cn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Mt),H===0&&z.generateMipmaps&&U.generateMipmap(ge),ve.unbindTexture()},this.initRenderTarget=function(C){Ae.get(C).__webglFramebuffer===void 0&&Pe.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Pe.setTextureCube(C,0):C.isData3DTexture?Pe.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Pe.setTexture2DArray(C,0):Pe.setTexture2D(C,0),ve.unbindTexture()},this.resetState=function(){l=0,u=0,_=null,ve.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $t}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ha?"display-p3":"srgb",t.unpackColorSpace=Xe.workingColorSpace===hr?"display-p3":"srgb"}}class fp extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jt,this.environmentIntensity=1,this.environmentRotation=new Jt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class hp extends ii{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const dr=new G,lr=new G,Zs=new Qe,di=new Ga,$i=new xi,Yr=new G,Js=new G;class pp extends pt{constructor(e=new Ct,t=new hp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,a=t.count;r<a;r++)dr.fromBufferAttribute(t,r-1),lr.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=dr.distanceTo(lr);e.setAttribute("lineDistance",new bt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$i.copy(n.boundingSphere),$i.applyMatrix4(r),$i.radius+=a,e.ray.intersectsSphere($i)===!1)return;Zs.copy(r).invert(),di.copy(e.ray).applyMatrix4(Zs);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=c*c,h=this.isLineSegments?2:1,p=n.index,M=n.attributes.position;if(p!==null){const S=Math.max(0,o.start),T=Math.min(p.count,o.start+o.count);for(let A=S,v=T-1;A<v;A+=h){const m=p.getX(A),P=p.getX(A+1),R=Ki(this,e,di,d,m,P);R&&t.push(R)}if(this.isLineLoop){const A=p.getX(T-1),v=p.getX(S),m=Ki(this,e,di,d,A,v);m&&t.push(m)}}else{const S=Math.max(0,o.start),T=Math.min(M.count,o.start+o.count);for(let A=S,v=T-1;A<v;A+=h){const m=Ki(this,e,di,d,A,A+1);m&&t.push(m)}if(this.isLineLoop){const A=Ki(this,e,di,d,T-1,S);A&&t.push(A)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const c=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function Ki(i,e,t,n,r,a){const o=i.geometry.attributes.position;if(dr.fromBufferAttribute(o,r),lr.fromBufferAttribute(o,a),t.distanceSqToSegment(dr,lr,Yr,Js)>n)return;Yr.applyMatrix4(i.matrixWorld);const d=e.ray.origin.distanceTo(Yr);if(!(d<e.near||d>e.far))return{distance:d,point:Js.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,object:i}}const Qs=new G,eo=new G;class mp extends pp{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,a=t.count;r<a;r+=2)Qs.fromBufferAttribute(t,r),eo.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Qs.distanceTo(eo);e.setAttribute("lineDistance",new bt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ho extends ii{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const to=new Qe,Ua=new Ga,Zi=new xi,Ji=new G;class Go extends pt{constructor(e=new Ct,t=new Ho){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zi.copy(n.boundingSphere),Zi.applyMatrix4(r),Zi.radius+=a,e.ray.intersectsSphere(Zi)===!1)return;to.copy(r).invert(),Ua.copy(e.ray).applyMatrix4(to);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=c*c,h=n.index,x=n.attributes.position;if(h!==null){const M=Math.max(0,o.start),S=Math.min(h.count,o.start+o.count);for(let T=M,A=S;T<A;T++){const v=h.getX(T);Ji.fromBufferAttribute(x,v),no(Ji,v,d,r,e,t,this)}}else{const M=Math.max(0,o.start),S=Math.min(x.count,o.start+o.count);for(let T=M,A=S;T<A;T++)Ji.fromBufferAttribute(x,T),no(Ji,T,d,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const c=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function no(i,e,t,n,r,a,o){const c=Ua.distanceSqToPoint(i);if(c<t){const d=new G;Ua.closestPointToPoint(i,d),d.applyMatrix4(n);const h=r.ray.origin.distanceTo(d);if(h<r.near||h>r.far)return;a.push({distance:h,distanceToRay:Math.sqrt(c),point:d,index:e,face:null,object:o})}}class Wa extends Ct{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const a=[],o=[];c(r),h(n),p(),this.setAttribute("position",new bt(a,3)),this.setAttribute("normal",new bt(a.slice(),3)),this.setAttribute("uv",new bt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function c(P){const R=new G,s=new G,l=new G;for(let u=0;u<t.length;u+=3)S(t[u+0],R),S(t[u+1],s),S(t[u+2],l),d(R,s,l,P)}function d(P,R,s,l){const u=l+1,_=[];for(let y=0;y<=u;y++){_[y]=[];const g=P.clone().lerp(s,y/u),f=R.clone().lerp(s,y/u),b=u-y;for(let N=0;N<=b;N++)N===0&&y===u?_[y][N]=g:_[y][N]=g.clone().lerp(f,N/b)}for(let y=0;y<u;y++)for(let g=0;g<2*(u-y)-1;g++){const f=Math.floor(g/2);g%2===0?(M(_[y][f+1]),M(_[y+1][f]),M(_[y][f])):(M(_[y][f+1]),M(_[y+1][f+1]),M(_[y+1][f]))}}function h(P){const R=new G;for(let s=0;s<a.length;s+=3)R.x=a[s+0],R.y=a[s+1],R.z=a[s+2],R.normalize().multiplyScalar(P),a[s+0]=R.x,a[s+1]=R.y,a[s+2]=R.z}function p(){const P=new G;for(let R=0;R<a.length;R+=3){P.x=a[R+0],P.y=a[R+1],P.z=a[R+2];const s=v(P)/2/Math.PI+.5,l=m(P)/Math.PI+.5;o.push(s,1-l)}T(),x()}function x(){for(let P=0;P<o.length;P+=6){const R=o[P+0],s=o[P+2],l=o[P+4],u=Math.max(R,s,l),_=Math.min(R,s,l);u>.9&&_<.1&&(R<.2&&(o[P+0]+=1),s<.2&&(o[P+2]+=1),l<.2&&(o[P+4]+=1))}}function M(P){a.push(P.x,P.y,P.z)}function S(P,R){const s=P*3;R.x=e[s+0],R.y=e[s+1],R.z=e[s+2]}function T(){const P=new G,R=new G,s=new G,l=new G,u=new ke,_=new ke,y=new ke;for(let g=0,f=0;g<a.length;g+=9,f+=6){P.set(a[g+0],a[g+1],a[g+2]),R.set(a[g+3],a[g+4],a[g+5]),s.set(a[g+6],a[g+7],a[g+8]),u.set(o[f+0],o[f+1]),_.set(o[f+2],o[f+3]),y.set(o[f+4],o[f+5]),l.copy(P).add(R).add(s).divideScalar(3);const b=v(l);A(u,f+0,P,b),A(_,f+2,R,b),A(y,f+4,s,b)}}function A(P,R,s,l){l<0&&P.x===1&&(o[R]=P.x-1),s.x===0&&s.z===0&&(o[R]=l/2/Math.PI+.5)}function v(P){return Math.atan2(P.z,-P.x)}function m(P){return Math.atan2(-P.y,Math.sqrt(P.x*P.x+P.z*P.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wa(e.vertices,e.indices,e.radius,e.details)}}class Xa extends Wa{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,a,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Xa(e.radius,e.detail)}}class _p extends Ct{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,r=new G,a=new G;if(e.index!==null){const o=e.attributes.position,c=e.index;let d=e.groups;d.length===0&&(d=[{start:0,count:c.count,materialIndex:0}]);for(let h=0,p=d.length;h<p;++h){const x=d[h],M=x.start,S=x.count;for(let T=M,A=M+S;T<A;T+=3)for(let v=0;v<3;v++){const m=c.getX(T+v),P=c.getX(T+(v+1)%3);r.fromBufferAttribute(o,m),a.fromBufferAttribute(o,P),io(r,a,n)===!0&&(t.push(r.x,r.y,r.z),t.push(a.x,a.y,a.z))}}}else{const o=e.attributes.position;for(let c=0,d=o.count/3;c<d;c++)for(let h=0;h<3;h++){const p=3*c+h,x=3*c+(h+1)%3;r.fromBufferAttribute(o,p),a.fromBufferAttribute(o,x),io(r,a,n)===!0&&(t.push(r.x,r.y,r.z),t.push(a.x,a.y,a.z))}}this.setAttribute("position",new bt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function io(i,e,t){const n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(r)===!0?!1:(t.add(n),t.add(r),!0)}const ro={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class gp{constructor(e,t,n){const r=this;let a=!1,o=0,c=0,d;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(p){c++,a===!1&&r.onStart!==void 0&&r.onStart(p,o,c),a=!0},this.itemEnd=function(p){o++,r.onProgress!==void 0&&r.onProgress(p,o,c),o===c&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(p){r.onError!==void 0&&r.onError(p)},this.resolveURL=function(p){return d?d(p):p},this.setURLModifier=function(p){return d=p,this},this.addHandler=function(p,x){return h.push(p,x),this},this.removeHandler=function(p){const x=h.indexOf(p);return x!==-1&&h.splice(x,2),this},this.getHandler=function(p){for(let x=0,M=h.length;x<M;x+=2){const S=h[x],T=h[x+1];if(S.global&&(S.lastIndex=0),S.test(p))return T}return null}}}const vp=new gp;class qa{constructor(e){this.manager=e!==void 0?e:vp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,a){n.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}qa.DEFAULT_MATERIAL_NAME="__DEFAULT";class Mp extends qa{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,o=ro.get(e);if(o!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(o),a.manager.itemEnd(e)},0),o;const c=mi("img");function d(){p(),ro.add(e,this),t&&t(this),a.manager.itemEnd(e)}function h(x){p(),r&&r(x),a.manager.itemError(e),a.manager.itemEnd(e)}function p(){c.removeEventListener("load",d,!1),c.removeEventListener("error",h,!1)}return c.addEventListener("load",d,!1),c.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),a.manager.itemStart(e),c.src=e,c}}class xp extends qa{constructor(e){super(e)}load(e,t,n,r){const a=new ht,o=new Mp(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(c){a.image=c,a.needsUpdate=!0,t!==void 0&&t(a)},n,r),a}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ia}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ia);var Sp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function yp(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Vo={exports:{}};(function(i){(function(){function e(s){var l={omitExtraWLInCodeBlocks:{defaultValue:!1,describe:"Omit the default extra whiteline added to code blocks",type:"boolean"},noHeaderId:{defaultValue:!1,describe:"Turn on/off generated header id",type:"boolean"},prefixHeaderId:{defaultValue:!1,describe:"Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix",type:"string"},rawPrefixHeaderId:{defaultValue:!1,describe:'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',type:"boolean"},ghCompatibleHeaderId:{defaultValue:!1,describe:"Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",type:"boolean"},rawHeaderId:{defaultValue:!1,describe:`Remove only spaces, ' and " from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids`,type:"boolean"},headerLevelStart:{defaultValue:!1,describe:"The header blocks level start",type:"integer"},parseImgDimensions:{defaultValue:!1,describe:"Turn on/off image dimension parsing",type:"boolean"},simplifiedAutoLink:{defaultValue:!1,describe:"Turn on/off GFM autolink style",type:"boolean"},excludeTrailingPunctuationFromURLs:{defaultValue:!1,describe:"Excludes trailing punctuation from links generated with autoLinking",type:"boolean"},literalMidWordUnderscores:{defaultValue:!1,describe:"Parse midword underscores as literal underscores",type:"boolean"},literalMidWordAsterisks:{defaultValue:!1,describe:"Parse midword asterisks as literal asterisks",type:"boolean"},strikethrough:{defaultValue:!1,describe:"Turn on/off strikethrough support",type:"boolean"},tables:{defaultValue:!1,describe:"Turn on/off tables support",type:"boolean"},tablesHeaderId:{defaultValue:!1,describe:"Add an id to table headers",type:"boolean"},ghCodeBlocks:{defaultValue:!0,describe:"Turn on/off GFM fenced code blocks support",type:"boolean"},tasklists:{defaultValue:!1,describe:"Turn on/off GFM tasklist support",type:"boolean"},smoothLivePreview:{defaultValue:!1,describe:"Prevents weird effects in live previews due to incomplete input",type:"boolean"},smartIndentationFix:{defaultValue:!1,describe:"Tries to smartly fix indentation in es6 strings",type:"boolean"},disableForced4SpacesIndentedSublists:{defaultValue:!1,describe:"Disables the requirement of indenting nested sublists by 4 spaces",type:"boolean"},simpleLineBreaks:{defaultValue:!1,describe:"Parses simple line breaks as <br> (GFM Style)",type:"boolean"},requireSpaceBeforeHeadingText:{defaultValue:!1,describe:"Makes adding a space between `#` and the header text mandatory (GFM Style)",type:"boolean"},ghMentions:{defaultValue:!1,describe:"Enables github @mentions",type:"boolean"},ghMentionsLink:{defaultValue:"https://github.com/{u}",describe:"Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",type:"string"},encodeEmails:{defaultValue:!0,describe:"Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",type:"boolean"},openLinksInNewWindow:{defaultValue:!1,describe:"Open all links in new windows",type:"boolean"},backslashEscapesHTMLTags:{defaultValue:!1,describe:"Support for HTML Tag escaping. ex: <div>foo</div>",type:"boolean"},emoji:{defaultValue:!1,describe:"Enable emoji support. Ex: `this is a :smile: emoji`",type:"boolean"},underline:{defaultValue:!1,describe:"Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`",type:"boolean"},ellipsis:{defaultValue:!0,describe:"Replaces three dots with the ellipsis unicode character",type:"boolean"},completeHTMLDocument:{defaultValue:!1,describe:"Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags",type:"boolean"},metadata:{defaultValue:!1,describe:"Enable support for document metadata (defined at the top of the document between `«««` and `»»»` or between `---` and `---`).",type:"boolean"},splitAdjacentBlockquotes:{defaultValue:!1,describe:"Split adjacent blockquote blocks",type:"boolean"}};if(s===!1)return JSON.parse(JSON.stringify(l));var u={};for(var _ in l)l.hasOwnProperty(_)&&(u[_]=l[_].defaultValue);return u}function t(){var s=e(!0),l={};for(var u in s)s.hasOwnProperty(u)&&(l[u]=!0);return l}var n={},r={},a={},o=e(!0),c="vanilla",d={github:{omitExtraWLInCodeBlocks:!0,simplifiedAutoLink:!0,excludeTrailingPunctuationFromURLs:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0,disableForced4SpacesIndentedSublists:!0,simpleLineBreaks:!0,requireSpaceBeforeHeadingText:!0,ghCompatibleHeaderId:!0,ghMentions:!0,backslashEscapesHTMLTags:!0,emoji:!0,splitAdjacentBlockquotes:!0},original:{noHeaderId:!0,ghCodeBlocks:!1},ghost:{omitExtraWLInCodeBlocks:!0,parseImgDimensions:!0,simplifiedAutoLink:!0,excludeTrailingPunctuationFromURLs:!0,literalMidWordUnderscores:!0,strikethrough:!0,tables:!0,tablesHeaderId:!0,ghCodeBlocks:!0,tasklists:!0,smoothLivePreview:!0,simpleLineBreaks:!0,requireSpaceBeforeHeadingText:!0,ghMentions:!1,encodeEmails:!0},vanilla:e(!0),allOn:t()};n.helper={},n.extensions={},n.setOption=function(s,l){return o[s]=l,this},n.getOption=function(s){return o[s]},n.getOptions=function(){return o},n.resetOptions=function(){o=e(!0)},n.setFlavor=function(s){if(!d.hasOwnProperty(s))throw Error(s+" flavor was not found");n.resetOptions();var l=d[s];c=s;for(var u in l)l.hasOwnProperty(u)&&(o[u]=l[u])},n.getFlavor=function(){return c},n.getFlavorOptions=function(s){if(d.hasOwnProperty(s))return d[s]},n.getDefaultOptions=function(s){return e(s)},n.subParser=function(s,l){if(n.helper.isString(s))if(typeof l<"u")r[s]=l;else{if(r.hasOwnProperty(s))return r[s];throw Error("SubParser named "+s+" not registered!")}},n.extension=function(s,l){if(!n.helper.isString(s))throw Error("Extension 'name' must be a string");if(s=n.helper.stdExtName(s),n.helper.isUndefined(l)){if(!a.hasOwnProperty(s))throw Error("Extension named "+s+" is not registered!");return a[s]}else{typeof l=="function"&&(l=l()),n.helper.isArray(l)||(l=[l]);var u=h(l,s);if(u.valid)a[s]=l;else throw Error(u.error)}},n.getAllExtensions=function(){return a},n.removeExtension=function(s){delete a[s]},n.resetExtensions=function(){a={}};function h(s,l){var u=l?"Error in "+l+" extension->":"Error in unnamed extension",_={valid:!0,error:""};n.helper.isArray(s)||(s=[s]);for(var y=0;y<s.length;++y){var g=u+" sub-extension "+y+": ",f=s[y];if(typeof f!="object")return _.valid=!1,_.error=g+"must be an object, but "+typeof f+" given",_;if(!n.helper.isString(f.type))return _.valid=!1,_.error=g+'property "type" must be a string, but '+typeof f.type+" given",_;var b=f.type=f.type.toLowerCase();if(b==="language"&&(b=f.type="lang"),b==="html"&&(b=f.type="output"),b!=="lang"&&b!=="output"&&b!=="listener")return _.valid=!1,_.error=g+"type "+b+' is not recognized. Valid values: "lang/language", "output/html" or "listener"',_;if(b==="listener"){if(n.helper.isUndefined(f.listeners))return _.valid=!1,_.error=g+'. Extensions of type "listener" must have a property called "listeners"',_}else if(n.helper.isUndefined(f.filter)&&n.helper.isUndefined(f.regex))return _.valid=!1,_.error=g+b+' extensions must define either a "regex" property or a "filter" method',_;if(f.listeners){if(typeof f.listeners!="object")return _.valid=!1,_.error=g+'"listeners" property must be an object but '+typeof f.listeners+" given",_;for(var N in f.listeners)if(f.listeners.hasOwnProperty(N)&&typeof f.listeners[N]!="function")return _.valid=!1,_.error=g+'"listeners" property must be an hash of [event name]: [callback]. listeners.'+N+" must be a function but "+typeof f.listeners[N]+" given",_}if(f.filter){if(typeof f.filter!="function")return _.valid=!1,_.error=g+'"filter" must be a function, but '+typeof f.filter+" given",_}else if(f.regex){if(n.helper.isString(f.regex)&&(f.regex=new RegExp(f.regex,"g")),!(f.regex instanceof RegExp))return _.valid=!1,_.error=g+'"regex" property must either be a string or a RegExp object, but '+typeof f.regex+" given",_;if(n.helper.isUndefined(f.replace))return _.valid=!1,_.error=g+'"regex" extensions must implement a replace string or function',_}}return _}n.validateExtension=function(s){var l=h(s,null);return l.valid?!0:(console.warn(l.error),!1)},n.hasOwnProperty("helper")||(n.helper={}),n.helper.isString=function(s){return typeof s=="string"||s instanceof String},n.helper.isFunction=function(s){var l={};return s&&l.toString.call(s)==="[object Function]"},n.helper.isArray=function(s){return Array.isArray(s)},n.helper.isUndefined=function(s){return typeof s>"u"},n.helper.forEach=function(s,l){if(n.helper.isUndefined(s))throw new Error("obj param is required");if(n.helper.isUndefined(l))throw new Error("callback param is required");if(!n.helper.isFunction(l))throw new Error("callback param must be a function/closure");if(typeof s.forEach=="function")s.forEach(l);else if(n.helper.isArray(s))for(var u=0;u<s.length;u++)l(s[u],u,s);else if(typeof s=="object")for(var _ in s)s.hasOwnProperty(_)&&l(s[_],_,s);else throw new Error("obj does not seem to be an array or an iterable object")},n.helper.stdExtName=function(s){return s.replace(/[_?*+\/\\.^-]/g,"").replace(/\s/g,"").toLowerCase()};function p(s,l){var u=l.charCodeAt(0);return"¨E"+u+"E"}n.helper.escapeCharactersCallback=p,n.helper.escapeCharacters=function(s,l,u){var _="(["+l.replace(/([\[\]\\])/g,"\\$1")+"])";u&&(_="\\\\"+_);var y=new RegExp(_,"g");return s=s.replace(y,p),s},n.helper.unescapeHTMLEntities=function(s){return s.replace(/&quot;/g,'"').replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")};var x=function(s,l,u,_){var y=_||"",g=y.indexOf("g")>-1,f=new RegExp(l+"|"+u,"g"+y.replace(/g/g,"")),b=new RegExp(l,y.replace(/g/g,"")),N=[],D,F,O,E,I;do for(D=0;O=f.exec(s);)if(b.test(O[0]))D++||(F=f.lastIndex,E=F-O[0].length);else if(D&&!--D){I=O.index+O[0].length;var k={left:{start:E,end:F},match:{start:F,end:O.index},right:{start:O.index,end:I},wholeMatch:{start:E,end:I}};if(N.push(k),!g)return N}while(D&&(f.lastIndex=F));return N};n.helper.matchRecursiveRegExp=function(s,l,u,_){for(var y=x(s,l,u,_),g=[],f=0;f<y.length;++f)g.push([s.slice(y[f].wholeMatch.start,y[f].wholeMatch.end),s.slice(y[f].match.start,y[f].match.end),s.slice(y[f].left.start,y[f].left.end),s.slice(y[f].right.start,y[f].right.end)]);return g},n.helper.replaceRecursiveRegExp=function(s,l,u,_,y){if(!n.helper.isFunction(l)){var g=l;l=function(){return g}}var f=x(s,u,_,y),b=s,N=f.length;if(N>0){var D=[];f[0].wholeMatch.start!==0&&D.push(s.slice(0,f[0].wholeMatch.start));for(var F=0;F<N;++F)D.push(l(s.slice(f[F].wholeMatch.start,f[F].wholeMatch.end),s.slice(f[F].match.start,f[F].match.end),s.slice(f[F].left.start,f[F].left.end),s.slice(f[F].right.start,f[F].right.end))),F<N-1&&D.push(s.slice(f[F].wholeMatch.end,f[F+1].wholeMatch.start));f[N-1].wholeMatch.end<s.length&&D.push(s.slice(f[N-1].wholeMatch.end)),b=D.join("")}return b},n.helper.regexIndexOf=function(s,l,u){if(!n.helper.isString(s))throw"InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";if(!(l instanceof RegExp))throw"InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";var _=s.substring(u||0).search(l);return _>=0?_+(u||0):_},n.helper.splitAtIndex=function(s,l){if(!n.helper.isString(s))throw"InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";return[s.substring(0,l),s.substring(l)]},n.helper.encodeEmailAddress=function(s){var l=[function(u){return"&#"+u.charCodeAt(0)+";"},function(u){return"&#x"+u.charCodeAt(0).toString(16)+";"},function(u){return u}];return s=s.replace(/./g,function(u){if(u==="@")u=l[Math.floor(Math.random()*2)](u);else{var _=Math.random();u=_>.9?l[2](u):_>.45?l[1](u):l[0](u)}return u}),s},n.helper.padEnd=function(l,u,_){return u=u>>0,_=String(_||" "),l.length>u?String(l):(u=u-l.length,u>_.length&&(_+=_.repeat(u/_.length)),String(l)+_.slice(0,u))},typeof console>"u"&&(console={warn:function(s){alert(s)},log:function(s){alert(s)},error:function(s){throw s}}),n.helper.regexes={asteriskDashAndColon:/([*_:~])/g},n.helper.emojis={"+1":"👍","-1":"👎",100:"💯",1234:"🔢","1st_place_medal":"🥇","2nd_place_medal":"🥈","3rd_place_medal":"🥉","8ball":"🎱",a:"🅰️",ab:"🆎",abc:"🔤",abcd:"🔡",accept:"🉑",aerial_tramway:"🚡",airplane:"✈️",alarm_clock:"⏰",alembic:"⚗️",alien:"👽",ambulance:"🚑",amphora:"🏺",anchor:"⚓️",angel:"👼",anger:"💢",angry:"😠",anguished:"😧",ant:"🐜",apple:"🍎",aquarius:"♒️",aries:"♈️",arrow_backward:"◀️",arrow_double_down:"⏬",arrow_double_up:"⏫",arrow_down:"⬇️",arrow_down_small:"🔽",arrow_forward:"▶️",arrow_heading_down:"⤵️",arrow_heading_up:"⤴️",arrow_left:"⬅️",arrow_lower_left:"↙️",arrow_lower_right:"↘️",arrow_right:"➡️",arrow_right_hook:"↪️",arrow_up:"⬆️",arrow_up_down:"↕️",arrow_up_small:"🔼",arrow_upper_left:"↖️",arrow_upper_right:"↗️",arrows_clockwise:"🔃",arrows_counterclockwise:"🔄",art:"🎨",articulated_lorry:"🚛",artificial_satellite:"🛰",astonished:"😲",athletic_shoe:"👟",atm:"🏧",atom_symbol:"⚛️",avocado:"🥑",b:"🅱️",baby:"👶",baby_bottle:"🍼",baby_chick:"🐤",baby_symbol:"🚼",back:"🔙",bacon:"🥓",badminton:"🏸",baggage_claim:"🛄",baguette_bread:"🥖",balance_scale:"⚖️",balloon:"🎈",ballot_box:"🗳",ballot_box_with_check:"☑️",bamboo:"🎍",banana:"🍌",bangbang:"‼️",bank:"🏦",bar_chart:"📊",barber:"💈",baseball:"⚾️",basketball:"🏀",basketball_man:"⛹️",basketball_woman:"⛹️&zwj;♀️",bat:"🦇",bath:"🛀",bathtub:"🛁",battery:"🔋",beach_umbrella:"🏖",bear:"🐻",bed:"🛏",bee:"🐝",beer:"🍺",beers:"🍻",beetle:"🐞",beginner:"🔰",bell:"🔔",bellhop_bell:"🛎",bento:"🍱",biking_man:"🚴",bike:"🚲",biking_woman:"🚴&zwj;♀️",bikini:"👙",biohazard:"☣️",bird:"🐦",birthday:"🎂",black_circle:"⚫️",black_flag:"🏴",black_heart:"🖤",black_joker:"🃏",black_large_square:"⬛️",black_medium_small_square:"◾️",black_medium_square:"◼️",black_nib:"✒️",black_small_square:"▪️",black_square_button:"🔲",blonde_man:"👱",blonde_woman:"👱&zwj;♀️",blossom:"🌼",blowfish:"🐡",blue_book:"📘",blue_car:"🚙",blue_heart:"💙",blush:"😊",boar:"🐗",boat:"⛵️",bomb:"💣",book:"📖",bookmark:"🔖",bookmark_tabs:"📑",books:"📚",boom:"💥",boot:"👢",bouquet:"💐",bowing_man:"🙇",bow_and_arrow:"🏹",bowing_woman:"🙇&zwj;♀️",bowling:"🎳",boxing_glove:"🥊",boy:"👦",bread:"🍞",bride_with_veil:"👰",bridge_at_night:"🌉",briefcase:"💼",broken_heart:"💔",bug:"🐛",building_construction:"🏗",bulb:"💡",bullettrain_front:"🚅",bullettrain_side:"🚄",burrito:"🌯",bus:"🚌",business_suit_levitating:"🕴",busstop:"🚏",bust_in_silhouette:"👤",busts_in_silhouette:"👥",butterfly:"🦋",cactus:"🌵",cake:"🍰",calendar:"📆",call_me_hand:"🤙",calling:"📲",camel:"🐫",camera:"📷",camera_flash:"📸",camping:"🏕",cancer:"♋️",candle:"🕯",candy:"🍬",canoe:"🛶",capital_abcd:"🔠",capricorn:"♑️",car:"🚗",card_file_box:"🗃",card_index:"📇",card_index_dividers:"🗂",carousel_horse:"🎠",carrot:"🥕",cat:"🐱",cat2:"🐈",cd:"💿",chains:"⛓",champagne:"🍾",chart:"💹",chart_with_downwards_trend:"📉",chart_with_upwards_trend:"📈",checkered_flag:"🏁",cheese:"🧀",cherries:"🍒",cherry_blossom:"🌸",chestnut:"🌰",chicken:"🐔",children_crossing:"🚸",chipmunk:"🐿",chocolate_bar:"🍫",christmas_tree:"🎄",church:"⛪️",cinema:"🎦",circus_tent:"🎪",city_sunrise:"🌇",city_sunset:"🌆",cityscape:"🏙",cl:"🆑",clamp:"🗜",clap:"👏",clapper:"🎬",classical_building:"🏛",clinking_glasses:"🥂",clipboard:"📋",clock1:"🕐",clock10:"🕙",clock1030:"🕥",clock11:"🕚",clock1130:"🕦",clock12:"🕛",clock1230:"🕧",clock130:"🕜",clock2:"🕑",clock230:"🕝",clock3:"🕒",clock330:"🕞",clock4:"🕓",clock430:"🕟",clock5:"🕔",clock530:"🕠",clock6:"🕕",clock630:"🕡",clock7:"🕖",clock730:"🕢",clock8:"🕗",clock830:"🕣",clock9:"🕘",clock930:"🕤",closed_book:"📕",closed_lock_with_key:"🔐",closed_umbrella:"🌂",cloud:"☁️",cloud_with_lightning:"🌩",cloud_with_lightning_and_rain:"⛈",cloud_with_rain:"🌧",cloud_with_snow:"🌨",clown_face:"🤡",clubs:"♣️",cocktail:"🍸",coffee:"☕️",coffin:"⚰️",cold_sweat:"😰",comet:"☄️",computer:"💻",computer_mouse:"🖱",confetti_ball:"🎊",confounded:"😖",confused:"😕",congratulations:"㊗️",construction:"🚧",construction_worker_man:"👷",construction_worker_woman:"👷&zwj;♀️",control_knobs:"🎛",convenience_store:"🏪",cookie:"🍪",cool:"🆒",policeman:"👮",copyright:"©️",corn:"🌽",couch_and_lamp:"🛋",couple:"👫",couple_with_heart_woman_man:"💑",couple_with_heart_man_man:"👨&zwj;❤️&zwj;👨",couple_with_heart_woman_woman:"👩&zwj;❤️&zwj;👩",couplekiss_man_man:"👨&zwj;❤️&zwj;💋&zwj;👨",couplekiss_man_woman:"💏",couplekiss_woman_woman:"👩&zwj;❤️&zwj;💋&zwj;👩",cow:"🐮",cow2:"🐄",cowboy_hat_face:"🤠",crab:"🦀",crayon:"🖍",credit_card:"💳",crescent_moon:"🌙",cricket:"🏏",crocodile:"🐊",croissant:"🥐",crossed_fingers:"🤞",crossed_flags:"🎌",crossed_swords:"⚔️",crown:"👑",cry:"😢",crying_cat_face:"😿",crystal_ball:"🔮",cucumber:"🥒",cupid:"💘",curly_loop:"➰",currency_exchange:"💱",curry:"🍛",custard:"🍮",customs:"🛃",cyclone:"🌀",dagger:"🗡",dancer:"💃",dancing_women:"👯",dancing_men:"👯&zwj;♂️",dango:"🍡",dark_sunglasses:"🕶",dart:"🎯",dash:"💨",date:"📅",deciduous_tree:"🌳",deer:"🦌",department_store:"🏬",derelict_house:"🏚",desert:"🏜",desert_island:"🏝",desktop_computer:"🖥",male_detective:"🕵️",diamond_shape_with_a_dot_inside:"💠",diamonds:"♦️",disappointed:"😞",disappointed_relieved:"😥",dizzy:"💫",dizzy_face:"😵",do_not_litter:"🚯",dog:"🐶",dog2:"🐕",dollar:"💵",dolls:"🎎",dolphin:"🐬",door:"🚪",doughnut:"🍩",dove:"🕊",dragon:"🐉",dragon_face:"🐲",dress:"👗",dromedary_camel:"🐪",drooling_face:"🤤",droplet:"💧",drum:"🥁",duck:"🦆",dvd:"📀","e-mail":"📧",eagle:"🦅",ear:"👂",ear_of_rice:"🌾",earth_africa:"🌍",earth_americas:"🌎",earth_asia:"🌏",egg:"🥚",eggplant:"🍆",eight_pointed_black_star:"✴️",eight_spoked_asterisk:"✳️",electric_plug:"🔌",elephant:"🐘",email:"✉️",end:"🔚",envelope_with_arrow:"📩",euro:"💶",european_castle:"🏰",european_post_office:"🏤",evergreen_tree:"🌲",exclamation:"❗️",expressionless:"😑",eye:"👁",eye_speech_bubble:"👁&zwj;🗨",eyeglasses:"👓",eyes:"👀",face_with_head_bandage:"🤕",face_with_thermometer:"🤒",fist_oncoming:"👊",factory:"🏭",fallen_leaf:"🍂",family_man_woman_boy:"👪",family_man_boy:"👨&zwj;👦",family_man_boy_boy:"👨&zwj;👦&zwj;👦",family_man_girl:"👨&zwj;👧",family_man_girl_boy:"👨&zwj;👧&zwj;👦",family_man_girl_girl:"👨&zwj;👧&zwj;👧",family_man_man_boy:"👨&zwj;👨&zwj;👦",family_man_man_boy_boy:"👨&zwj;👨&zwj;👦&zwj;👦",family_man_man_girl:"👨&zwj;👨&zwj;👧",family_man_man_girl_boy:"👨&zwj;👨&zwj;👧&zwj;👦",family_man_man_girl_girl:"👨&zwj;👨&zwj;👧&zwj;👧",family_man_woman_boy_boy:"👨&zwj;👩&zwj;👦&zwj;👦",family_man_woman_girl:"👨&zwj;👩&zwj;👧",family_man_woman_girl_boy:"👨&zwj;👩&zwj;👧&zwj;👦",family_man_woman_girl_girl:"👨&zwj;👩&zwj;👧&zwj;👧",family_woman_boy:"👩&zwj;👦",family_woman_boy_boy:"👩&zwj;👦&zwj;👦",family_woman_girl:"👩&zwj;👧",family_woman_girl_boy:"👩&zwj;👧&zwj;👦",family_woman_girl_girl:"👩&zwj;👧&zwj;👧",family_woman_woman_boy:"👩&zwj;👩&zwj;👦",family_woman_woman_boy_boy:"👩&zwj;👩&zwj;👦&zwj;👦",family_woman_woman_girl:"👩&zwj;👩&zwj;👧",family_woman_woman_girl_boy:"👩&zwj;👩&zwj;👧&zwj;👦",family_woman_woman_girl_girl:"👩&zwj;👩&zwj;👧&zwj;👧",fast_forward:"⏩",fax:"📠",fearful:"😨",feet:"🐾",female_detective:"🕵️&zwj;♀️",ferris_wheel:"🎡",ferry:"⛴",field_hockey:"🏑",file_cabinet:"🗄",file_folder:"📁",film_projector:"📽",film_strip:"🎞",fire:"🔥",fire_engine:"🚒",fireworks:"🎆",first_quarter_moon:"🌓",first_quarter_moon_with_face:"🌛",fish:"🐟",fish_cake:"🍥",fishing_pole_and_fish:"🎣",fist_raised:"✊",fist_left:"🤛",fist_right:"🤜",flags:"🎏",flashlight:"🔦",fleur_de_lis:"⚜️",flight_arrival:"🛬",flight_departure:"🛫",floppy_disk:"💾",flower_playing_cards:"🎴",flushed:"😳",fog:"🌫",foggy:"🌁",football:"🏈",footprints:"👣",fork_and_knife:"🍴",fountain:"⛲️",fountain_pen:"🖋",four_leaf_clover:"🍀",fox_face:"🦊",framed_picture:"🖼",free:"🆓",fried_egg:"🍳",fried_shrimp:"🍤",fries:"🍟",frog:"🐸",frowning:"😦",frowning_face:"☹️",frowning_man:"🙍&zwj;♂️",frowning_woman:"🙍",middle_finger:"🖕",fuelpump:"⛽️",full_moon:"🌕",full_moon_with_face:"🌝",funeral_urn:"⚱️",game_die:"🎲",gear:"⚙️",gem:"💎",gemini:"♊️",ghost:"👻",gift:"🎁",gift_heart:"💝",girl:"👧",globe_with_meridians:"🌐",goal_net:"🥅",goat:"🐐",golf:"⛳️",golfing_man:"🏌️",golfing_woman:"🏌️&zwj;♀️",gorilla:"🦍",grapes:"🍇",green_apple:"🍏",green_book:"📗",green_heart:"💚",green_salad:"🥗",grey_exclamation:"❕",grey_question:"❔",grimacing:"😬",grin:"😁",grinning:"😀",guardsman:"💂",guardswoman:"💂&zwj;♀️",guitar:"🎸",gun:"🔫",haircut_woman:"💇",haircut_man:"💇&zwj;♂️",hamburger:"🍔",hammer:"🔨",hammer_and_pick:"⚒",hammer_and_wrench:"🛠",hamster:"🐹",hand:"✋",handbag:"👜",handshake:"🤝",hankey:"💩",hatched_chick:"🐥",hatching_chick:"🐣",headphones:"🎧",hear_no_evil:"🙉",heart:"❤️",heart_decoration:"💟",heart_eyes:"😍",heart_eyes_cat:"😻",heartbeat:"💓",heartpulse:"💗",hearts:"♥️",heavy_check_mark:"✔️",heavy_division_sign:"➗",heavy_dollar_sign:"💲",heavy_heart_exclamation:"❣️",heavy_minus_sign:"➖",heavy_multiplication_x:"✖️",heavy_plus_sign:"➕",helicopter:"🚁",herb:"🌿",hibiscus:"🌺",high_brightness:"🔆",high_heel:"👠",hocho:"🔪",hole:"🕳",honey_pot:"🍯",horse:"🐴",horse_racing:"🏇",hospital:"🏥",hot_pepper:"🌶",hotdog:"🌭",hotel:"🏨",hotsprings:"♨️",hourglass:"⌛️",hourglass_flowing_sand:"⏳",house:"🏠",house_with_garden:"🏡",houses:"🏘",hugs:"🤗",hushed:"😯",ice_cream:"🍨",ice_hockey:"🏒",ice_skate:"⛸",icecream:"🍦",id:"🆔",ideograph_advantage:"🉐",imp:"👿",inbox_tray:"📥",incoming_envelope:"📨",tipping_hand_woman:"💁",information_source:"ℹ️",innocent:"😇",interrobang:"⁉️",iphone:"📱",izakaya_lantern:"🏮",jack_o_lantern:"🎃",japan:"🗾",japanese_castle:"🏯",japanese_goblin:"👺",japanese_ogre:"👹",jeans:"👖",joy:"😂",joy_cat:"😹",joystick:"🕹",kaaba:"🕋",key:"🔑",keyboard:"⌨️",keycap_ten:"🔟",kick_scooter:"🛴",kimono:"👘",kiss:"💋",kissing:"😗",kissing_cat:"😽",kissing_closed_eyes:"😚",kissing_heart:"😘",kissing_smiling_eyes:"😙",kiwi_fruit:"🥝",koala:"🐨",koko:"🈁",label:"🏷",large_blue_circle:"🔵",large_blue_diamond:"🔷",large_orange_diamond:"🔶",last_quarter_moon:"🌗",last_quarter_moon_with_face:"🌜",latin_cross:"✝️",laughing:"😆",leaves:"🍃",ledger:"📒",left_luggage:"🛅",left_right_arrow:"↔️",leftwards_arrow_with_hook:"↩️",lemon:"🍋",leo:"♌️",leopard:"🐆",level_slider:"🎚",libra:"♎️",light_rail:"🚈",link:"🔗",lion:"🦁",lips:"👄",lipstick:"💄",lizard:"🦎",lock:"🔒",lock_with_ink_pen:"🔏",lollipop:"🍭",loop:"➿",loud_sound:"🔊",loudspeaker:"📢",love_hotel:"🏩",love_letter:"💌",low_brightness:"🔅",lying_face:"🤥",m:"Ⓜ️",mag:"🔍",mag_right:"🔎",mahjong:"🀄️",mailbox:"📫",mailbox_closed:"📪",mailbox_with_mail:"📬",mailbox_with_no_mail:"📭",man:"👨",man_artist:"👨&zwj;🎨",man_astronaut:"👨&zwj;🚀",man_cartwheeling:"🤸&zwj;♂️",man_cook:"👨&zwj;🍳",man_dancing:"🕺",man_facepalming:"🤦&zwj;♂️",man_factory_worker:"👨&zwj;🏭",man_farmer:"👨&zwj;🌾",man_firefighter:"👨&zwj;🚒",man_health_worker:"👨&zwj;⚕️",man_in_tuxedo:"🤵",man_judge:"👨&zwj;⚖️",man_juggling:"🤹&zwj;♂️",man_mechanic:"👨&zwj;🔧",man_office_worker:"👨&zwj;💼",man_pilot:"👨&zwj;✈️",man_playing_handball:"🤾&zwj;♂️",man_playing_water_polo:"🤽&zwj;♂️",man_scientist:"👨&zwj;🔬",man_shrugging:"🤷&zwj;♂️",man_singer:"👨&zwj;🎤",man_student:"👨&zwj;🎓",man_teacher:"👨&zwj;🏫",man_technologist:"👨&zwj;💻",man_with_gua_pi_mao:"👲",man_with_turban:"👳",tangerine:"🍊",mans_shoe:"👞",mantelpiece_clock:"🕰",maple_leaf:"🍁",martial_arts_uniform:"🥋",mask:"😷",massage_woman:"💆",massage_man:"💆&zwj;♂️",meat_on_bone:"🍖",medal_military:"🎖",medal_sports:"🏅",mega:"📣",melon:"🍈",memo:"📝",men_wrestling:"🤼&zwj;♂️",menorah:"🕎",mens:"🚹",metal:"🤘",metro:"🚇",microphone:"🎤",microscope:"🔬",milk_glass:"🥛",milky_way:"🌌",minibus:"🚐",minidisc:"💽",mobile_phone_off:"📴",money_mouth_face:"🤑",money_with_wings:"💸",moneybag:"💰",monkey:"🐒",monkey_face:"🐵",monorail:"🚝",moon:"🌔",mortar_board:"🎓",mosque:"🕌",motor_boat:"🛥",motor_scooter:"🛵",motorcycle:"🏍",motorway:"🛣",mount_fuji:"🗻",mountain:"⛰",mountain_biking_man:"🚵",mountain_biking_woman:"🚵&zwj;♀️",mountain_cableway:"🚠",mountain_railway:"🚞",mountain_snow:"🏔",mouse:"🐭",mouse2:"🐁",movie_camera:"🎥",moyai:"🗿",mrs_claus:"🤶",muscle:"💪",mushroom:"🍄",musical_keyboard:"🎹",musical_note:"🎵",musical_score:"🎼",mute:"🔇",nail_care:"💅",name_badge:"📛",national_park:"🏞",nauseated_face:"🤢",necktie:"👔",negative_squared_cross_mark:"❎",nerd_face:"🤓",neutral_face:"😐",new:"🆕",new_moon:"🌑",new_moon_with_face:"🌚",newspaper:"📰",newspaper_roll:"🗞",next_track_button:"⏭",ng:"🆖",no_good_man:"🙅&zwj;♂️",no_good_woman:"🙅",night_with_stars:"🌃",no_bell:"🔕",no_bicycles:"🚳",no_entry:"⛔️",no_entry_sign:"🚫",no_mobile_phones:"📵",no_mouth:"😶",no_pedestrians:"🚷",no_smoking:"🚭","non-potable_water":"🚱",nose:"👃",notebook:"📓",notebook_with_decorative_cover:"📔",notes:"🎶",nut_and_bolt:"🔩",o:"⭕️",o2:"🅾️",ocean:"🌊",octopus:"🐙",oden:"🍢",office:"🏢",oil_drum:"🛢",ok:"🆗",ok_hand:"👌",ok_man:"🙆&zwj;♂️",ok_woman:"🙆",old_key:"🗝",older_man:"👴",older_woman:"👵",om:"🕉",on:"🔛",oncoming_automobile:"🚘",oncoming_bus:"🚍",oncoming_police_car:"🚔",oncoming_taxi:"🚖",open_file_folder:"📂",open_hands:"👐",open_mouth:"😮",open_umbrella:"☂️",ophiuchus:"⛎",orange_book:"📙",orthodox_cross:"☦️",outbox_tray:"📤",owl:"🦉",ox:"🐂",package:"📦",page_facing_up:"📄",page_with_curl:"📃",pager:"📟",paintbrush:"🖌",palm_tree:"🌴",pancakes:"🥞",panda_face:"🐼",paperclip:"📎",paperclips:"🖇",parasol_on_ground:"⛱",parking:"🅿️",part_alternation_mark:"〽️",partly_sunny:"⛅️",passenger_ship:"🛳",passport_control:"🛂",pause_button:"⏸",peace_symbol:"☮️",peach:"🍑",peanuts:"🥜",pear:"🍐",pen:"🖊",pencil2:"✏️",penguin:"🐧",pensive:"😔",performing_arts:"🎭",persevere:"😣",person_fencing:"🤺",pouting_woman:"🙎",phone:"☎️",pick:"⛏",pig:"🐷",pig2:"🐖",pig_nose:"🐽",pill:"💊",pineapple:"🍍",ping_pong:"🏓",pisces:"♓️",pizza:"🍕",place_of_worship:"🛐",plate_with_cutlery:"🍽",play_or_pause_button:"⏯",point_down:"👇",point_left:"👈",point_right:"👉",point_up:"☝️",point_up_2:"👆",police_car:"🚓",policewoman:"👮&zwj;♀️",poodle:"🐩",popcorn:"🍿",post_office:"🏣",postal_horn:"📯",postbox:"📮",potable_water:"🚰",potato:"🥔",pouch:"👝",poultry_leg:"🍗",pound:"💷",rage:"😡",pouting_cat:"😾",pouting_man:"🙎&zwj;♂️",pray:"🙏",prayer_beads:"📿",pregnant_woman:"🤰",previous_track_button:"⏮",prince:"🤴",princess:"👸",printer:"🖨",purple_heart:"💜",purse:"👛",pushpin:"📌",put_litter_in_its_place:"🚮",question:"❓",rabbit:"🐰",rabbit2:"🐇",racehorse:"🐎",racing_car:"🏎",radio:"📻",radio_button:"🔘",radioactive:"☢️",railway_car:"🚃",railway_track:"🛤",rainbow:"🌈",rainbow_flag:"🏳️&zwj;🌈",raised_back_of_hand:"🤚",raised_hand_with_fingers_splayed:"🖐",raised_hands:"🙌",raising_hand_woman:"🙋",raising_hand_man:"🙋&zwj;♂️",ram:"🐏",ramen:"🍜",rat:"🐀",record_button:"⏺",recycle:"♻️",red_circle:"🔴",registered:"®️",relaxed:"☺️",relieved:"😌",reminder_ribbon:"🎗",repeat:"🔁",repeat_one:"🔂",rescue_worker_helmet:"⛑",restroom:"🚻",revolving_hearts:"💞",rewind:"⏪",rhinoceros:"🦏",ribbon:"🎀",rice:"🍚",rice_ball:"🍙",rice_cracker:"🍘",rice_scene:"🎑",right_anger_bubble:"🗯",ring:"💍",robot:"🤖",rocket:"🚀",rofl:"🤣",roll_eyes:"🙄",roller_coaster:"🎢",rooster:"🐓",rose:"🌹",rosette:"🏵",rotating_light:"🚨",round_pushpin:"📍",rowing_man:"🚣",rowing_woman:"🚣&zwj;♀️",rugby_football:"🏉",running_man:"🏃",running_shirt_with_sash:"🎽",running_woman:"🏃&zwj;♀️",sa:"🈂️",sagittarius:"♐️",sake:"🍶",sandal:"👡",santa:"🎅",satellite:"📡",saxophone:"🎷",school:"🏫",school_satchel:"🎒",scissors:"✂️",scorpion:"🦂",scorpius:"♏️",scream:"😱",scream_cat:"🙀",scroll:"📜",seat:"💺",secret:"㊙️",see_no_evil:"🙈",seedling:"🌱",selfie:"🤳",shallow_pan_of_food:"🥘",shamrock:"☘️",shark:"🦈",shaved_ice:"🍧",sheep:"🐑",shell:"🐚",shield:"🛡",shinto_shrine:"⛩",ship:"🚢",shirt:"👕",shopping:"🛍",shopping_cart:"🛒",shower:"🚿",shrimp:"🦐",signal_strength:"📶",six_pointed_star:"🔯",ski:"🎿",skier:"⛷",skull:"💀",skull_and_crossbones:"☠️",sleeping:"😴",sleeping_bed:"🛌",sleepy:"😪",slightly_frowning_face:"🙁",slightly_smiling_face:"🙂",slot_machine:"🎰",small_airplane:"🛩",small_blue_diamond:"🔹",small_orange_diamond:"🔸",small_red_triangle:"🔺",small_red_triangle_down:"🔻",smile:"😄",smile_cat:"😸",smiley:"😃",smiley_cat:"😺",smiling_imp:"😈",smirk:"😏",smirk_cat:"😼",smoking:"🚬",snail:"🐌",snake:"🐍",sneezing_face:"🤧",snowboarder:"🏂",snowflake:"❄️",snowman:"⛄️",snowman_with_snow:"☃️",sob:"😭",soccer:"⚽️",soon:"🔜",sos:"🆘",sound:"🔉",space_invader:"👾",spades:"♠️",spaghetti:"🍝",sparkle:"❇️",sparkler:"🎇",sparkles:"✨",sparkling_heart:"💖",speak_no_evil:"🙊",speaker:"🔈",speaking_head:"🗣",speech_balloon:"💬",speedboat:"🚤",spider:"🕷",spider_web:"🕸",spiral_calendar:"🗓",spiral_notepad:"🗒",spoon:"🥄",squid:"🦑",stadium:"🏟",star:"⭐️",star2:"🌟",star_and_crescent:"☪️",star_of_david:"✡️",stars:"🌠",station:"🚉",statue_of_liberty:"🗽",steam_locomotive:"🚂",stew:"🍲",stop_button:"⏹",stop_sign:"🛑",stopwatch:"⏱",straight_ruler:"📏",strawberry:"🍓",stuck_out_tongue:"😛",stuck_out_tongue_closed_eyes:"😝",stuck_out_tongue_winking_eye:"😜",studio_microphone:"🎙",stuffed_flatbread:"🥙",sun_behind_large_cloud:"🌥",sun_behind_rain_cloud:"🌦",sun_behind_small_cloud:"🌤",sun_with_face:"🌞",sunflower:"🌻",sunglasses:"😎",sunny:"☀️",sunrise:"🌅",sunrise_over_mountains:"🌄",surfing_man:"🏄",surfing_woman:"🏄&zwj;♀️",sushi:"🍣",suspension_railway:"🚟",sweat:"😓",sweat_drops:"💦",sweat_smile:"😅",sweet_potato:"🍠",swimming_man:"🏊",swimming_woman:"🏊&zwj;♀️",symbols:"🔣",synagogue:"🕍",syringe:"💉",taco:"🌮",tada:"🎉",tanabata_tree:"🎋",taurus:"♉️",taxi:"🚕",tea:"🍵",telephone_receiver:"📞",telescope:"🔭",tennis:"🎾",tent:"⛺️",thermometer:"🌡",thinking:"🤔",thought_balloon:"💭",ticket:"🎫",tickets:"🎟",tiger:"🐯",tiger2:"🐅",timer_clock:"⏲",tipping_hand_man:"💁&zwj;♂️",tired_face:"😫",tm:"™️",toilet:"🚽",tokyo_tower:"🗼",tomato:"🍅",tongue:"👅",top:"🔝",tophat:"🎩",tornado:"🌪",trackball:"🖲",tractor:"🚜",traffic_light:"🚥",train:"🚋",train2:"🚆",tram:"🚊",triangular_flag_on_post:"🚩",triangular_ruler:"📐",trident:"🔱",triumph:"😤",trolleybus:"🚎",trophy:"🏆",tropical_drink:"🍹",tropical_fish:"🐠",truck:"🚚",trumpet:"🎺",tulip:"🌷",tumbler_glass:"🥃",turkey:"🦃",turtle:"🐢",tv:"📺",twisted_rightwards_arrows:"🔀",two_hearts:"💕",two_men_holding_hands:"👬",two_women_holding_hands:"👭",u5272:"🈹",u5408:"🈴",u55b6:"🈺",u6307:"🈯️",u6708:"🈷️",u6709:"🈶",u6e80:"🈵",u7121:"🈚️",u7533:"🈸",u7981:"🈲",u7a7a:"🈳",umbrella:"☔️",unamused:"😒",underage:"🔞",unicorn:"🦄",unlock:"🔓",up:"🆙",upside_down_face:"🙃",v:"✌️",vertical_traffic_light:"🚦",vhs:"📼",vibration_mode:"📳",video_camera:"📹",video_game:"🎮",violin:"🎻",virgo:"♍️",volcano:"🌋",volleyball:"🏐",vs:"🆚",vulcan_salute:"🖖",walking_man:"🚶",walking_woman:"🚶&zwj;♀️",waning_crescent_moon:"🌘",waning_gibbous_moon:"🌖",warning:"⚠️",wastebasket:"🗑",watch:"⌚️",water_buffalo:"🐃",watermelon:"🍉",wave:"👋",wavy_dash:"〰️",waxing_crescent_moon:"🌒",wc:"🚾",weary:"😩",wedding:"💒",weight_lifting_man:"🏋️",weight_lifting_woman:"🏋️&zwj;♀️",whale:"🐳",whale2:"🐋",wheel_of_dharma:"☸️",wheelchair:"♿️",white_check_mark:"✅",white_circle:"⚪️",white_flag:"🏳️",white_flower:"💮",white_large_square:"⬜️",white_medium_small_square:"◽️",white_medium_square:"◻️",white_small_square:"▫️",white_square_button:"🔳",wilted_flower:"🥀",wind_chime:"🎐",wind_face:"🌬",wine_glass:"🍷",wink:"😉",wolf:"🐺",woman:"👩",woman_artist:"👩&zwj;🎨",woman_astronaut:"👩&zwj;🚀",woman_cartwheeling:"🤸&zwj;♀️",woman_cook:"👩&zwj;🍳",woman_facepalming:"🤦&zwj;♀️",woman_factory_worker:"👩&zwj;🏭",woman_farmer:"👩&zwj;🌾",woman_firefighter:"👩&zwj;🚒",woman_health_worker:"👩&zwj;⚕️",woman_judge:"👩&zwj;⚖️",woman_juggling:"🤹&zwj;♀️",woman_mechanic:"👩&zwj;🔧",woman_office_worker:"👩&zwj;💼",woman_pilot:"👩&zwj;✈️",woman_playing_handball:"🤾&zwj;♀️",woman_playing_water_polo:"🤽&zwj;♀️",woman_scientist:"👩&zwj;🔬",woman_shrugging:"🤷&zwj;♀️",woman_singer:"👩&zwj;🎤",woman_student:"👩&zwj;🎓",woman_teacher:"👩&zwj;🏫",woman_technologist:"👩&zwj;💻",woman_with_turban:"👳&zwj;♀️",womans_clothes:"👚",womans_hat:"👒",women_wrestling:"🤼&zwj;♀️",womens:"🚺",world_map:"🗺",worried:"😟",wrench:"🔧",writing_hand:"✍️",x:"❌",yellow_heart:"💛",yen:"💴",yin_yang:"☯️",yum:"😋",zap:"⚡️",zipper_mouth_face:"🤐",zzz:"💤",octocat:'<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',showdown:`<span style="font-family: 'Anonymous Pro', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;">S</span>`},n.Converter=function(s){var l={},u=[],_=[],y={},g=c,f={parsed:{},raw:"",format:""};b();function b(){s=s||{};for(var E in o)o.hasOwnProperty(E)&&(l[E]=o[E]);if(typeof s=="object")for(var I in s)s.hasOwnProperty(I)&&(l[I]=s[I]);else throw Error("Converter expects the passed parameter to be an object, but "+typeof s+" was passed instead.");l.extensions&&n.helper.forEach(l.extensions,N)}function N(E,I){if(I=I||null,n.helper.isString(E))if(E=n.helper.stdExtName(E),I=E,n.extensions[E]){console.warn("DEPRECATION WARNING: "+E+" is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"),D(n.extensions[E],E);return}else if(!n.helper.isUndefined(a[E]))E=a[E];else throw Error('Extension "'+E+'" could not be loaded. It was either not found or is not a valid extension.');typeof E=="function"&&(E=E()),n.helper.isArray(E)||(E=[E]);var k=h(E,I);if(!k.valid)throw Error(k.error);for(var j=0;j<E.length;++j){switch(E[j].type){case"lang":u.push(E[j]);break;case"output":_.push(E[j]);break}if(E[j].hasOwnProperty("listeners"))for(var ee in E[j].listeners)E[j].listeners.hasOwnProperty(ee)&&F(ee,E[j].listeners[ee])}}function D(E,I){typeof E=="function"&&(E=E(new n.Converter)),n.helper.isArray(E)||(E=[E]);var k=h(E,I);if(!k.valid)throw Error(k.error);for(var j=0;j<E.length;++j)switch(E[j].type){case"lang":u.push(E[j]);break;case"output":_.push(E[j]);break;default:throw Error("Extension loader error: Type unrecognized!!!")}}function F(E,I){if(!n.helper.isString(E))throw Error("Invalid argument in converter.listen() method: name must be a string, but "+typeof E+" given");if(typeof I!="function")throw Error("Invalid argument in converter.listen() method: callback must be a function, but "+typeof I+" given");y.hasOwnProperty(E)||(y[E]=[]),y[E].push(I)}function O(E){var I=E.match(/^\s*/)[0].length,k=new RegExp("^\\s{0,"+I+"}","gm");return E.replace(k,"")}this._dispatch=function(I,k,j,ee){if(y.hasOwnProperty(I))for(var Y=0;Y<y[I].length;++Y){var Me=y[I][Y](I,k,this,j,ee);Me&&typeof Me<"u"&&(k=Me)}return k},this.listen=function(E,I){return F(E,I),this},this.makeHtml=function(E){if(!E)return E;var I={gHtmlBlocks:[],gHtmlMdBlocks:[],gHtmlSpans:[],gUrls:{},gTitles:{},gDimensions:{},gListLevel:0,hashLinkCounts:{},langExtensions:u,outputModifiers:_,converter:this,ghCodeBlocks:[],metadata:{parsed:{},raw:"",format:""}};return E=E.replace(/¨/g,"¨T"),E=E.replace(/\$/g,"¨D"),E=E.replace(/\r\n/g,`
`),E=E.replace(/\r/g,`
`),E=E.replace(/\u00A0/g,"&nbsp;"),l.smartIndentationFix&&(E=O(E)),E=`

`+E+`

`,E=n.subParser("detab")(E,l,I),E=E.replace(/^[ \t]+$/mg,""),n.helper.forEach(u,function(k){E=n.subParser("runExtension")(k,E,l,I)}),E=n.subParser("metadata")(E,l,I),E=n.subParser("hashPreCodeTags")(E,l,I),E=n.subParser("githubCodeBlocks")(E,l,I),E=n.subParser("hashHTMLBlocks")(E,l,I),E=n.subParser("hashCodeTags")(E,l,I),E=n.subParser("stripLinkDefinitions")(E,l,I),E=n.subParser("blockGamut")(E,l,I),E=n.subParser("unhashHTMLSpans")(E,l,I),E=n.subParser("unescapeSpecialChars")(E,l,I),E=E.replace(/¨D/g,"$$"),E=E.replace(/¨T/g,"¨"),E=n.subParser("completeHTMLDocument")(E,l,I),n.helper.forEach(_,function(k){E=n.subParser("runExtension")(k,E,l,I)}),f=I.metadata,E},this.makeMarkdown=this.makeMd=function(E,I){if(E=E.replace(/\r\n/g,`
`),E=E.replace(/\r/g,`
`),E=E.replace(/>[ \t]+</,">¨NBSP;<"),!I)if(window&&window.document)I=window.document;else throw new Error("HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM");var k=I.createElement("div");k.innerHTML=E;var j={preList:q(k)};Te(k);for(var ee=k.childNodes,Y="",Me=0;Me<ee.length;Me++)Y+=n.subParser("makeMarkdown.node")(ee[Me],j);function Te(Z){for(var oe=0;oe<Z.childNodes.length;++oe){var ae=Z.childNodes[oe];ae.nodeType===3?!/\S/.test(ae.nodeValue)&&!/^[ ]+$/.test(ae.nodeValue)?(Z.removeChild(ae),--oe):(ae.nodeValue=ae.nodeValue.split(`
`).join(" "),ae.nodeValue=ae.nodeValue.replace(/(\s)+/g,"$1")):ae.nodeType===1&&Te(ae)}}function q(Z){for(var oe=Z.querySelectorAll("pre"),ae=[],_e=0;_e<oe.length;++_e)if(oe[_e].childElementCount===1&&oe[_e].firstChild.tagName.toLowerCase()==="code"){var Re=oe[_e].firstChild.innerHTML.trim(),Le=oe[_e].firstChild.getAttribute("data-language")||"";if(Le==="")for(var je=oe[_e].firstChild.className.split(" "),U=0;U<je.length;++U){var $e=je[U].match(/^language-(.+)$/);if($e!==null){Le=$e[1];break}}Re=n.helper.unescapeHTMLEntities(Re),ae.push(Re),oe[_e].outerHTML='<precode language="'+Le+'" precodenum="'+_e.toString()+'"></precode>'}else ae.push(oe[_e].innerHTML),oe[_e].innerHTML="",oe[_e].setAttribute("prenum",_e.toString());return ae}return Y},this.setOption=function(E,I){l[E]=I},this.getOption=function(E){return l[E]},this.getOptions=function(){return l},this.addExtension=function(E,I){I=I||null,N(E,I)},this.useExtension=function(E){N(E)},this.setFlavor=function(E){if(!d.hasOwnProperty(E))throw Error(E+" flavor was not found");var I=d[E];g=E;for(var k in I)I.hasOwnProperty(k)&&(l[k]=I[k])},this.getFlavor=function(){return g},this.removeExtension=function(E){n.helper.isArray(E)||(E=[E]);for(var I=0;I<E.length;++I){for(var k=E[I],j=0;j<u.length;++j)u[j]===k&&u.splice(j,1);for(var ee=0;ee<_.length;++ee)_[ee]===k&&_.splice(ee,1)}},this.getAllExtensions=function(){return{language:u,output:_}},this.getMetadata=function(E){return E?f.raw:f.parsed},this.getMetadataFormat=function(){return f.format},this._setMetadataPair=function(E,I){f.parsed[E]=I},this._setMetadataFormat=function(E){f.format=E},this._setMetadataRaw=function(E){f.raw=E}},n.subParser("anchors",function(s,l,u){s=u.converter._dispatch("anchors.before",s,l,u);var _=function(y,g,f,b,N,D,F){if(n.helper.isUndefined(F)&&(F=""),f=f.toLowerCase(),y.search(/\(<?\s*>? ?(['"].*['"])?\)$/m)>-1)b="";else if(!b)if(f||(f=g.toLowerCase().replace(/ ?\n/g," ")),b="#"+f,!n.helper.isUndefined(u.gUrls[f]))b=u.gUrls[f],n.helper.isUndefined(u.gTitles[f])||(F=u.gTitles[f]);else return y;b=b.replace(n.helper.regexes.asteriskDashAndColon,n.helper.escapeCharactersCallback);var O='<a href="'+b+'"';return F!==""&&F!==null&&(F=F.replace(/"/g,"&quot;"),F=F.replace(n.helper.regexes.asteriskDashAndColon,n.helper.escapeCharactersCallback),O+=' title="'+F+'"'),l.openLinksInNewWindow&&!/^#/.test(b)&&(O+=' rel="noopener noreferrer" target="¨E95Eblank"'),O+=">"+g+"</a>",O};return s=s.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g,_),s=s.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,_),s=s.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,_),s=s.replace(/\[([^\[\]]+)]()()()()()/g,_),l.ghMentions&&(s=s.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gmi,function(y,g,f,b,N){if(f==="\\")return g+b;if(!n.helper.isString(l.ghMentionsLink))throw new Error("ghMentionsLink option must be a string");var D=l.ghMentionsLink.replace(/\{u}/g,N),F="";return l.openLinksInNewWindow&&(F=' rel="noopener noreferrer" target="¨E95Eblank"'),g+'<a href="'+D+'"'+F+">"+b+"</a>"})),s=u.converter._dispatch("anchors.after",s,l,u),s});var M=/([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi,S=/([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi,T=/()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi,A=/(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gmi,v=/<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,m=function(s){return function(l,u,_,y,g,f,b){_=_.replace(n.helper.regexes.asteriskDashAndColon,n.helper.escapeCharactersCallback);var N=_,D="",F="",O=u||"",E=b||"";return/^www\./i.test(_)&&(_=_.replace(/^www\./i,"http://www.")),s.excludeTrailingPunctuationFromURLs&&f&&(D=f),s.openLinksInNewWindow&&(F=' rel="noopener noreferrer" target="¨E95Eblank"'),O+'<a href="'+_+'"'+F+">"+N+"</a>"+D+E}},P=function(s,l){return function(u,_,y){var g="mailto:";return _=_||"",y=n.subParser("unescapeSpecialChars")(y,s,l),s.encodeEmails?(g=n.helper.encodeEmailAddress(g+y),y=n.helper.encodeEmailAddress(y)):g=g+y,_+'<a href="'+g+'">'+y+"</a>"}};n.subParser("autoLinks",function(s,l,u){return s=u.converter._dispatch("autoLinks.before",s,l,u),s=s.replace(T,m(l)),s=s.replace(v,P(l,u)),s=u.converter._dispatch("autoLinks.after",s,l,u),s}),n.subParser("simplifiedAutoLinks",function(s,l,u){return l.simplifiedAutoLink&&(s=u.converter._dispatch("simplifiedAutoLinks.before",s,l,u),l.excludeTrailingPunctuationFromURLs?s=s.replace(S,m(l)):s=s.replace(M,m(l)),s=s.replace(A,P(l,u)),s=u.converter._dispatch("simplifiedAutoLinks.after",s,l,u)),s}),n.subParser("blockGamut",function(s,l,u){return s=u.converter._dispatch("blockGamut.before",s,l,u),s=n.subParser("blockQuotes")(s,l,u),s=n.subParser("headers")(s,l,u),s=n.subParser("horizontalRule")(s,l,u),s=n.subParser("lists")(s,l,u),s=n.subParser("codeBlocks")(s,l,u),s=n.subParser("tables")(s,l,u),s=n.subParser("hashHTMLBlocks")(s,l,u),s=n.subParser("paragraphs")(s,l,u),s=u.converter._dispatch("blockGamut.after",s,l,u),s}),n.subParser("blockQuotes",function(s,l,u){s=u.converter._dispatch("blockQuotes.before",s,l,u),s=s+`

`;var _=/(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;return l.splitAdjacentBlockquotes&&(_=/^ {0,3}>[\s\S]*?(?:\n\n)/gm),s=s.replace(_,function(y){return y=y.replace(/^[ \t]*>[ \t]?/gm,""),y=y.replace(/¨0/g,""),y=y.replace(/^[ \t]+$/gm,""),y=n.subParser("githubCodeBlocks")(y,l,u),y=n.subParser("blockGamut")(y,l,u),y=y.replace(/(^|\n)/g,"$1  "),y=y.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(g,f){var b=f;return b=b.replace(/^  /mg,"¨0"),b=b.replace(/¨0/g,""),b}),n.subParser("hashBlock")(`<blockquote>
`+y+`
</blockquote>`,l,u)}),s=u.converter._dispatch("blockQuotes.after",s,l,u),s}),n.subParser("codeBlocks",function(s,l,u){s=u.converter._dispatch("codeBlocks.before",s,l,u),s+="¨0";var _=/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;return s=s.replace(_,function(y,g,f){var b=g,N=f,D=`
`;return b=n.subParser("outdent")(b,l,u),b=n.subParser("encodeCode")(b,l,u),b=n.subParser("detab")(b,l,u),b=b.replace(/^\n+/g,""),b=b.replace(/\n+$/g,""),l.omitExtraWLInCodeBlocks&&(D=""),b="<pre><code>"+b+D+"</code></pre>",n.subParser("hashBlock")(b,l,u)+N}),s=s.replace(/¨0/,""),s=u.converter._dispatch("codeBlocks.after",s,l,u),s}),n.subParser("codeSpans",function(s,l,u){return s=u.converter._dispatch("codeSpans.before",s,l,u),typeof s>"u"&&(s=""),s=s.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,function(_,y,g,f){var b=f;return b=b.replace(/^([ \t]*)/g,""),b=b.replace(/[ \t]*$/g,""),b=n.subParser("encodeCode")(b,l,u),b=y+"<code>"+b+"</code>",b=n.subParser("hashHTMLSpans")(b,l,u),b}),s=u.converter._dispatch("codeSpans.after",s,l,u),s}),n.subParser("completeHTMLDocument",function(s,l,u){if(!l.completeHTMLDocument)return s;s=u.converter._dispatch("completeHTMLDocument.before",s,l,u);var _="html",y=`<!DOCTYPE HTML>
`,g="",f=`<meta charset="utf-8">
`,b="",N="";typeof u.metadata.parsed.doctype<"u"&&(y="<!DOCTYPE "+u.metadata.parsed.doctype+`>
`,_=u.metadata.parsed.doctype.toString().toLowerCase(),(_==="html"||_==="html5")&&(f='<meta charset="utf-8">'));for(var D in u.metadata.parsed)if(u.metadata.parsed.hasOwnProperty(D))switch(D.toLowerCase()){case"doctype":break;case"title":g="<title>"+u.metadata.parsed.title+`</title>
`;break;case"charset":_==="html"||_==="html5"?f='<meta charset="'+u.metadata.parsed.charset+`">
`:f='<meta name="charset" content="'+u.metadata.parsed.charset+`">
`;break;case"language":case"lang":b=' lang="'+u.metadata.parsed[D]+'"',N+='<meta name="'+D+'" content="'+u.metadata.parsed[D]+`">
`;break;default:N+='<meta name="'+D+'" content="'+u.metadata.parsed[D]+`">
`}return s=y+"<html"+b+`>
<head>
`+g+f+N+`</head>
<body>
`+s.trim()+`
</body>
</html>`,s=u.converter._dispatch("completeHTMLDocument.after",s,l,u),s}),n.subParser("detab",function(s,l,u){return s=u.converter._dispatch("detab.before",s,l,u),s=s.replace(/\t(?=\t)/g,"    "),s=s.replace(/\t/g,"¨A¨B"),s=s.replace(/¨B(.+?)¨A/g,function(_,y){for(var g=y,f=4-g.length%4,b=0;b<f;b++)g+=" ";return g}),s=s.replace(/¨A/g,"    "),s=s.replace(/¨B/g,""),s=u.converter._dispatch("detab.after",s,l,u),s}),n.subParser("ellipsis",function(s,l,u){return l.ellipsis&&(s=u.converter._dispatch("ellipsis.before",s,l,u),s=s.replace(/\.\.\./g,"…"),s=u.converter._dispatch("ellipsis.after",s,l,u)),s}),n.subParser("emoji",function(s,l,u){if(!l.emoji)return s;s=u.converter._dispatch("emoji.before",s,l,u);var _=/:([\S]+?):/g;return s=s.replace(_,function(y,g){return n.helper.emojis.hasOwnProperty(g)?n.helper.emojis[g]:y}),s=u.converter._dispatch("emoji.after",s,l,u),s}),n.subParser("encodeAmpsAndAngles",function(s,l,u){return s=u.converter._dispatch("encodeAmpsAndAngles.before",s,l,u),s=s.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;"),s=s.replace(/<(?![a-z\/?$!])/gi,"&lt;"),s=s.replace(/</g,"&lt;"),s=s.replace(/>/g,"&gt;"),s=u.converter._dispatch("encodeAmpsAndAngles.after",s,l,u),s}),n.subParser("encodeBackslashEscapes",function(s,l,u){return s=u.converter._dispatch("encodeBackslashEscapes.before",s,l,u),s=s.replace(/\\(\\)/g,n.helper.escapeCharactersCallback),s=s.replace(/\\([`*_{}\[\]()>#+.!~=|:-])/g,n.helper.escapeCharactersCallback),s=u.converter._dispatch("encodeBackslashEscapes.after",s,l,u),s}),n.subParser("encodeCode",function(s,l,u){return s=u.converter._dispatch("encodeCode.before",s,l,u),s=s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/([*_{}\[\]\\=~-])/g,n.helper.escapeCharactersCallback),s=u.converter._dispatch("encodeCode.after",s,l,u),s}),n.subParser("escapeSpecialCharsWithinTagAttributes",function(s,l,u){s=u.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before",s,l,u);var _=/<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi,y=/<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi;return s=s.replace(_,function(g){return g.replace(/(.)<\/?code>(?=.)/g,"$1`").replace(/([\\`*_~=|])/g,n.helper.escapeCharactersCallback)}),s=s.replace(y,function(g){return g.replace(/([\\`*_~=|])/g,n.helper.escapeCharactersCallback)}),s=u.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after",s,l,u),s}),n.subParser("githubCodeBlocks",function(s,l,u){return l.ghCodeBlocks?(s=u.converter._dispatch("githubCodeBlocks.before",s,l,u),s+="¨0",s=s.replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g,function(_,y,g,f){var b=l.omitExtraWLInCodeBlocks?"":`
`;return f=n.subParser("encodeCode")(f,l,u),f=n.subParser("detab")(f,l,u),f=f.replace(/^\n+/g,""),f=f.replace(/\n+$/g,""),f="<pre><code"+(g?' class="'+g+" language-"+g+'"':"")+">"+f+b+"</code></pre>",f=n.subParser("hashBlock")(f,l,u),`

¨G`+(u.ghCodeBlocks.push({text:_,codeblock:f})-1)+`G

`}),s=s.replace(/¨0/,""),u.converter._dispatch("githubCodeBlocks.after",s,l,u)):s}),n.subParser("hashBlock",function(s,l,u){return s=u.converter._dispatch("hashBlock.before",s,l,u),s=s.replace(/(^\n+|\n+$)/g,""),s=`

¨K`+(u.gHtmlBlocks.push(s)-1)+`K

`,s=u.converter._dispatch("hashBlock.after",s,l,u),s}),n.subParser("hashCodeTags",function(s,l,u){s=u.converter._dispatch("hashCodeTags.before",s,l,u);var _=function(y,g,f,b){var N=f+n.subParser("encodeCode")(g,l,u)+b;return"¨C"+(u.gHtmlSpans.push(N)-1)+"C"};return s=n.helper.replaceRecursiveRegExp(s,_,"<code\\b[^>]*>","</code>","gim"),s=u.converter._dispatch("hashCodeTags.after",s,l,u),s}),n.subParser("hashElement",function(s,l,u){return function(_,y){var g=y;return g=g.replace(/\n\n/g,`
`),g=g.replace(/^\n/,""),g=g.replace(/\n+$/g,""),g=`

¨K`+(u.gHtmlBlocks.push(g)-1)+`K

`,g}}),n.subParser("hashHTMLBlocks",function(s,l,u){s=u.converter._dispatch("hashHTMLBlocks.before",s,l,u);var _=["pre","div","h1","h2","h3","h4","h5","h6","blockquote","table","dl","ol","ul","script","noscript","form","fieldset","iframe","math","style","section","header","footer","nav","article","aside","address","audio","canvas","figure","hgroup","output","video","p"],y=function(E,I,k,j){var ee=E;return k.search(/\bmarkdown\b/)!==-1&&(ee=k+u.converter.makeHtml(I)+j),`

¨K`+(u.gHtmlBlocks.push(ee)-1)+`K

`};l.backslashEscapesHTMLTags&&(s=s.replace(/\\<(\/?[^>]+?)>/g,function(E,I){return"&lt;"+I+"&gt;"}));for(var g=0;g<_.length;++g)for(var f,b=new RegExp("^ {0,3}(<"+_[g]+"\\b[^>]*>)","im"),N="<"+_[g]+"\\b[^>]*>",D="</"+_[g]+">";(f=n.helper.regexIndexOf(s,b))!==-1;){var F=n.helper.splitAtIndex(s,f),O=n.helper.replaceRecursiveRegExp(F[1],y,N,D,"im");if(O===F[1])break;s=F[0].concat(O)}return s=s.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,n.subParser("hashElement")(s,l,u)),s=n.helper.replaceRecursiveRegExp(s,function(E){return`

¨K`+(u.gHtmlBlocks.push(E)-1)+`K

`},"^ {0,3}<!--","-->","gm"),s=s.replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,n.subParser("hashElement")(s,l,u)),s=u.converter._dispatch("hashHTMLBlocks.after",s,l,u),s}),n.subParser("hashHTMLSpans",function(s,l,u){s=u.converter._dispatch("hashHTMLSpans.before",s,l,u);function _(y){return"¨C"+(u.gHtmlSpans.push(y)-1)+"C"}return s=s.replace(/<[^>]+?\/>/gi,function(y){return _(y)}),s=s.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g,function(y){return _(y)}),s=s.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g,function(y){return _(y)}),s=s.replace(/<[^>]+?>/gi,function(y){return _(y)}),s=u.converter._dispatch("hashHTMLSpans.after",s,l,u),s}),n.subParser("unhashHTMLSpans",function(s,l,u){s=u.converter._dispatch("unhashHTMLSpans.before",s,l,u);for(var _=0;_<u.gHtmlSpans.length;++_){for(var y=u.gHtmlSpans[_],g=0;/¨C(\d+)C/.test(y);){var f=RegExp.$1;if(y=y.replace("¨C"+f+"C",u.gHtmlSpans[f]),g===10){console.error("maximum nesting of 10 spans reached!!!");break}++g}s=s.replace("¨C"+_+"C",y)}return s=u.converter._dispatch("unhashHTMLSpans.after",s,l,u),s}),n.subParser("hashPreCodeTags",function(s,l,u){s=u.converter._dispatch("hashPreCodeTags.before",s,l,u);var _=function(y,g,f,b){var N=f+n.subParser("encodeCode")(g,l,u)+b;return`

¨G`+(u.ghCodeBlocks.push({text:y,codeblock:N})-1)+`G

`};return s=n.helper.replaceRecursiveRegExp(s,_,"^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>","^ {0,3}</code>\\s*</pre>","gim"),s=u.converter._dispatch("hashPreCodeTags.after",s,l,u),s}),n.subParser("headers",function(s,l,u){s=u.converter._dispatch("headers.before",s,l,u);var _=isNaN(parseInt(l.headerLevelStart))?1:parseInt(l.headerLevelStart),y=l.smoothLivePreview?/^(.+)[ \t]*\n={2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n=+[ \t]*\n+/gm,g=l.smoothLivePreview?/^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm:/^(.+)[ \t]*\n-+[ \t]*\n+/gm;s=s.replace(y,function(N,D){var F=n.subParser("spanGamut")(D,l,u),O=l.noHeaderId?"":' id="'+b(D)+'"',E=_,I="<h"+E+O+">"+F+"</h"+E+">";return n.subParser("hashBlock")(I,l,u)}),s=s.replace(g,function(N,D){var F=n.subParser("spanGamut")(D,l,u),O=l.noHeaderId?"":' id="'+b(D)+'"',E=_+1,I="<h"+E+O+">"+F+"</h"+E+">";return n.subParser("hashBlock")(I,l,u)});var f=l.requireSpaceBeforeHeadingText?/^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm:/^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;s=s.replace(f,function(N,D,F){var O=F;l.customizedHeaderId&&(O=F.replace(/\s?\{([^{]+?)}\s*$/,""));var E=n.subParser("spanGamut")(O,l,u),I=l.noHeaderId?"":' id="'+b(F)+'"',k=_-1+D.length,j="<h"+k+I+">"+E+"</h"+k+">";return n.subParser("hashBlock")(j,l,u)});function b(N){var D,F;if(l.customizedHeaderId){var O=N.match(/\{([^{]+?)}\s*$/);O&&O[1]&&(N=O[1])}return D=N,n.helper.isString(l.prefixHeaderId)?F=l.prefixHeaderId:l.prefixHeaderId===!0?F="section-":F="",l.rawPrefixHeaderId||(D=F+D),l.ghCompatibleHeaderId?D=D.replace(/ /g,"-").replace(/&amp;/g,"").replace(/¨T/g,"").replace(/¨D/g,"").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g,"").toLowerCase():l.rawHeaderId?D=D.replace(/ /g,"-").replace(/&amp;/g,"&").replace(/¨T/g,"¨").replace(/¨D/g,"$").replace(/["']/g,"-").toLowerCase():D=D.replace(/[^\w]/g,"").toLowerCase(),l.rawPrefixHeaderId&&(D=F+D),u.hashLinkCounts[D]?D=D+"-"+u.hashLinkCounts[D]++:u.hashLinkCounts[D]=1,D}return s=u.converter._dispatch("headers.after",s,l,u),s}),n.subParser("horizontalRule",function(s,l,u){s=u.converter._dispatch("horizontalRule.before",s,l,u);var _=n.subParser("hashBlock")("<hr />",l,u);return s=s.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm,_),s=s.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm,_),s=s.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm,_),s=u.converter._dispatch("horizontalRule.after",s,l,u),s}),n.subParser("images",function(s,l,u){s=u.converter._dispatch("images.before",s,l,u);var _=/!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,y=/!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g,g=/!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,f=/!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g,b=/!\[([^\[\]]+)]()()()()()/g;function N(F,O,E,I,k,j,ee,Y){return I=I.replace(/\s/g,""),D(F,O,E,I,k,j,ee,Y)}function D(F,O,E,I,k,j,ee,Y){var Me=u.gUrls,Te=u.gTitles,q=u.gDimensions;if(E=E.toLowerCase(),Y||(Y=""),F.search(/\(<?\s*>? ?(['"].*['"])?\)$/m)>-1)I="";else if(I===""||I===null)if((E===""||E===null)&&(E=O.toLowerCase().replace(/ ?\n/g," ")),I="#"+E,!n.helper.isUndefined(Me[E]))I=Me[E],n.helper.isUndefined(Te[E])||(Y=Te[E]),n.helper.isUndefined(q[E])||(k=q[E].width,j=q[E].height);else return F;O=O.replace(/"/g,"&quot;").replace(n.helper.regexes.asteriskDashAndColon,n.helper.escapeCharactersCallback),I=I.replace(n.helper.regexes.asteriskDashAndColon,n.helper.escapeCharactersCallback);var Z='<img src="'+I+'" alt="'+O+'"';return Y&&n.helper.isString(Y)&&(Y=Y.replace(/"/g,"&quot;").replace(n.helper.regexes.asteriskDashAndColon,n.helper.escapeCharactersCallback),Z+=' title="'+Y+'"'),k&&j&&(k=k==="*"?"auto":k,j=j==="*"?"auto":j,Z+=' width="'+k+'"',Z+=' height="'+j+'"'),Z+=" />",Z}return s=s.replace(f,D),s=s.replace(g,N),s=s.replace(y,D),s=s.replace(_,D),s=s.replace(b,D),s=u.converter._dispatch("images.after",s,l,u),s}),n.subParser("italicsAndBold",function(s,l,u){s=u.converter._dispatch("italicsAndBold.before",s,l,u);function _(y,g,f){return g+y+f}return l.literalMidWordUnderscores?(s=s.replace(/\b___(\S[\s\S]*?)___\b/g,function(y,g){return _(g,"<strong><em>","</em></strong>")}),s=s.replace(/\b__(\S[\s\S]*?)__\b/g,function(y,g){return _(g,"<strong>","</strong>")}),s=s.replace(/\b_(\S[\s\S]*?)_\b/g,function(y,g){return _(g,"<em>","</em>")})):(s=s.replace(/___(\S[\s\S]*?)___/g,function(y,g){return/\S$/.test(g)?_(g,"<strong><em>","</em></strong>"):y}),s=s.replace(/__(\S[\s\S]*?)__/g,function(y,g){return/\S$/.test(g)?_(g,"<strong>","</strong>"):y}),s=s.replace(/_([^\s_][\s\S]*?)_/g,function(y,g){return/\S$/.test(g)?_(g,"<em>","</em>"):y})),l.literalMidWordAsterisks?(s=s.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g,function(y,g,f){return _(f,g+"<strong><em>","</em></strong>")}),s=s.replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g,function(y,g,f){return _(f,g+"<strong>","</strong>")}),s=s.replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g,function(y,g,f){return _(f,g+"<em>","</em>")})):(s=s.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g,function(y,g){return/\S$/.test(g)?_(g,"<strong><em>","</em></strong>"):y}),s=s.replace(/\*\*(\S[\s\S]*?)\*\*/g,function(y,g){return/\S$/.test(g)?_(g,"<strong>","</strong>"):y}),s=s.replace(/\*([^\s*][\s\S]*?)\*/g,function(y,g){return/\S$/.test(g)?_(g,"<em>","</em>"):y})),s=u.converter._dispatch("italicsAndBold.after",s,l,u),s}),n.subParser("lists",function(s,l,u){function _(f,b){u.gListLevel++,f=f.replace(/\n{2,}$/,`
`),f+="¨0";var N=/(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm,D=/\n[ \t]*\n(?!¨0)/.test(f);return l.disableForced4SpacesIndentedSublists&&(N=/(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm),f=f.replace(N,function(F,O,E,I,k,j,ee){ee=ee&&ee.trim()!=="";var Y=n.subParser("outdent")(k,l,u),Me="";return j&&l.tasklists&&(Me=' class="task-list-item" style="list-style-type: none;"',Y=Y.replace(/^[ \t]*\[(x|X| )?]/m,function(){var Te='<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';return ee&&(Te+=" checked"),Te+=">",Te})),Y=Y.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g,function(Te){return"¨A"+Te}),O||Y.search(/\n{2,}/)>-1?(Y=n.subParser("githubCodeBlocks")(Y,l,u),Y=n.subParser("blockGamut")(Y,l,u)):(Y=n.subParser("lists")(Y,l,u),Y=Y.replace(/\n$/,""),Y=n.subParser("hashHTMLBlocks")(Y,l,u),Y=Y.replace(/\n\n+/g,`

`),D?Y=n.subParser("paragraphs")(Y,l,u):Y=n.subParser("spanGamut")(Y,l,u)),Y=Y.replace("¨A",""),Y="<li"+Me+">"+Y+`</li>
`,Y}),f=f.replace(/¨0/g,""),u.gListLevel--,b&&(f=f.replace(/\s+$/,"")),f}function y(f,b){if(b==="ol"){var N=f.match(/^ *(\d+)\./);if(N&&N[1]!=="1")return' start="'+N[1]+'"'}return""}function g(f,b,N){var D=l.disableForced4SpacesIndentedSublists?/^ ?\d+\.[ \t]/gm:/^ {0,3}\d+\.[ \t]/gm,F=l.disableForced4SpacesIndentedSublists?/^ ?[*+-][ \t]/gm:/^ {0,3}[*+-][ \t]/gm,O=b==="ul"?D:F,E="";if(f.search(O)!==-1)(function k(j){var ee=j.search(O),Y=y(f,b);ee!==-1?(E+=`

<`+b+Y+`>
`+_(j.slice(0,ee),!!N)+"</"+b+`>
`,b=b==="ul"?"ol":"ul",O=b==="ul"?D:F,k(j.slice(ee))):E+=`

<`+b+Y+`>
`+_(j,!!N)+"</"+b+`>
`})(f);else{var I=y(f,b);E=`

<`+b+I+`>
`+_(f,!!N)+"</"+b+`>
`}return E}return s=u.converter._dispatch("lists.before",s,l,u),s+="¨0",u.gListLevel?s=s.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,function(f,b,N){var D=N.search(/[*+-]/g)>-1?"ul":"ol";return g(b,D,!0)}):s=s.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,function(f,b,N,D){var F=D.search(/[*+-]/g)>-1?"ul":"ol";return g(N,F,!1)}),s=s.replace(/¨0/,""),s=u.converter._dispatch("lists.after",s,l,u),s}),n.subParser("metadata",function(s,l,u){if(!l.metadata)return s;s=u.converter._dispatch("metadata.before",s,l,u);function _(y){u.metadata.raw=y,y=y.replace(/&/g,"&amp;").replace(/"/g,"&quot;"),y=y.replace(/\n {4}/g," "),y.replace(/^([\S ]+): +([\s\S]+?)$/gm,function(g,f,b){return u.metadata.parsed[f]=b,""})}return s=s.replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/,function(y,g,f){return _(f),"¨M"}),s=s.replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/,function(y,g,f){return g&&(u.metadata.format=g),_(f),"¨M"}),s=s.replace(/¨M/g,""),s=u.converter._dispatch("metadata.after",s,l,u),s}),n.subParser("outdent",function(s,l,u){return s=u.converter._dispatch("outdent.before",s,l,u),s=s.replace(/^(\t|[ ]{1,4})/gm,"¨0"),s=s.replace(/¨0/g,""),s=u.converter._dispatch("outdent.after",s,l,u),s}),n.subParser("paragraphs",function(s,l,u){s=u.converter._dispatch("paragraphs.before",s,l,u),s=s.replace(/^\n+/g,""),s=s.replace(/\n+$/g,"");for(var _=s.split(/\n{2,}/g),y=[],g=_.length,f=0;f<g;f++){var b=_[f];b.search(/¨(K|G)(\d+)\1/g)>=0?y.push(b):b.search(/\S/)>=0&&(b=n.subParser("spanGamut")(b,l,u),b=b.replace(/^([ \t]*)/g,"<p>"),b+="</p>",y.push(b))}for(g=y.length,f=0;f<g;f++){for(var N="",D=y[f],F=!1;/¨(K|G)(\d+)\1/.test(D);){var O=RegExp.$1,E=RegExp.$2;O==="K"?N=u.gHtmlBlocks[E]:F?N=n.subParser("encodeCode")(u.ghCodeBlocks[E].text,l,u):N=u.ghCodeBlocks[E].codeblock,N=N.replace(/\$/g,"$$$$"),D=D.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/,N),/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(D)&&(F=!0)}y[f]=D}return s=y.join(`
`),s=s.replace(/^\n+/g,""),s=s.replace(/\n+$/g,""),u.converter._dispatch("paragraphs.after",s,l,u)}),n.subParser("runExtension",function(s,l,u,_){if(s.filter)l=s.filter(l,_.converter,u);else if(s.regex){var y=s.regex;y instanceof RegExp||(y=new RegExp(y,"g")),l=l.replace(y,s.replace)}return l}),n.subParser("spanGamut",function(s,l,u){return s=u.converter._dispatch("spanGamut.before",s,l,u),s=n.subParser("codeSpans")(s,l,u),s=n.subParser("escapeSpecialCharsWithinTagAttributes")(s,l,u),s=n.subParser("encodeBackslashEscapes")(s,l,u),s=n.subParser("images")(s,l,u),s=n.subParser("anchors")(s,l,u),s=n.subParser("autoLinks")(s,l,u),s=n.subParser("simplifiedAutoLinks")(s,l,u),s=n.subParser("emoji")(s,l,u),s=n.subParser("underline")(s,l,u),s=n.subParser("italicsAndBold")(s,l,u),s=n.subParser("strikethrough")(s,l,u),s=n.subParser("ellipsis")(s,l,u),s=n.subParser("hashHTMLSpans")(s,l,u),s=n.subParser("encodeAmpsAndAngles")(s,l,u),l.simpleLineBreaks?/\n\n¨K/.test(s)||(s=s.replace(/\n+/g,`<br />
`)):s=s.replace(/  +\n/g,`<br />
`),s=u.converter._dispatch("spanGamut.after",s,l,u),s}),n.subParser("strikethrough",function(s,l,u){function _(y){return l.simplifiedAutoLink&&(y=n.subParser("simplifiedAutoLinks")(y,l,u)),"<del>"+y+"</del>"}return l.strikethrough&&(s=u.converter._dispatch("strikethrough.before",s,l,u),s=s.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g,function(y,g){return _(g)}),s=u.converter._dispatch("strikethrough.after",s,l,u)),s}),n.subParser("stripLinkDefinitions",function(s,l,u){var _=/^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm,y=/^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm;s+="¨0";var g=function(f,b,N,D,F,O,E){return b=b.toLowerCase(),s.toLowerCase().split(b).length-1<2?f:(N.match(/^data:.+?\/.+?;base64,/)?u.gUrls[b]=N.replace(/\s/g,""):u.gUrls[b]=n.subParser("encodeAmpsAndAngles")(N,l,u),O?O+E:(E&&(u.gTitles[b]=E.replace(/"|'/g,"&quot;")),l.parseImgDimensions&&D&&F&&(u.gDimensions[b]={width:D,height:F}),""))};return s=s.replace(y,g),s=s.replace(_,g),s=s.replace(/¨0/,""),s}),n.subParser("tables",function(s,l,u){if(!l.tables)return s;var _=/^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm,y=/^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm;function g(F){return/^:[ \t]*--*$/.test(F)?' style="text-align:left;"':/^--*[ \t]*:[ \t]*$/.test(F)?' style="text-align:right;"':/^:[ \t]*--*[ \t]*:$/.test(F)?' style="text-align:center;"':""}function f(F,O){var E="";return F=F.trim(),(l.tablesHeaderId||l.tableHeaderId)&&(E=' id="'+F.replace(/ /g,"_").toLowerCase()+'"'),F=n.subParser("spanGamut")(F,l,u),"<th"+E+O+">"+F+`</th>
`}function b(F,O){var E=n.subParser("spanGamut")(F,l,u);return"<td"+O+">"+E+`</td>
`}function N(F,O){for(var E=`<table>
<thead>
<tr>
`,I=F.length,k=0;k<I;++k)E+=F[k];for(E+=`</tr>
</thead>
<tbody>
`,k=0;k<O.length;++k){E+=`<tr>
`;for(var j=0;j<I;++j)E+=O[k][j];E+=`</tr>
`}return E+=`</tbody>
</table>
`,E}function D(F){var O,E=F.split(`
`);for(O=0;O<E.length;++O)/^ {0,3}\|/.test(E[O])&&(E[O]=E[O].replace(/^ {0,3}\|/,"")),/\|[ \t]*$/.test(E[O])&&(E[O]=E[O].replace(/\|[ \t]*$/,"")),E[O]=n.subParser("codeSpans")(E[O],l,u);var I=E[0].split("|").map(function(Z){return Z.trim()}),k=E[1].split("|").map(function(Z){return Z.trim()}),j=[],ee=[],Y=[],Me=[];for(E.shift(),E.shift(),O=0;O<E.length;++O)E[O].trim()!==""&&j.push(E[O].split("|").map(function(Z){return Z.trim()}));if(I.length<k.length)return F;for(O=0;O<k.length;++O)Y.push(g(k[O]));for(O=0;O<I.length;++O)n.helper.isUndefined(Y[O])&&(Y[O]=""),ee.push(f(I[O],Y[O]));for(O=0;O<j.length;++O){for(var Te=[],q=0;q<ee.length;++q)n.helper.isUndefined(j[O][q]),Te.push(b(j[O][q],Y[q]));Me.push(Te)}return N(ee,Me)}return s=u.converter._dispatch("tables.before",s,l,u),s=s.replace(/\\(\|)/g,n.helper.escapeCharactersCallback),s=s.replace(_,D),s=s.replace(y,D),s=u.converter._dispatch("tables.after",s,l,u),s}),n.subParser("underline",function(s,l,u){return l.underline&&(s=u.converter._dispatch("underline.before",s,l,u),l.literalMidWordUnderscores?(s=s.replace(/\b___(\S[\s\S]*?)___\b/g,function(_,y){return"<u>"+y+"</u>"}),s=s.replace(/\b__(\S[\s\S]*?)__\b/g,function(_,y){return"<u>"+y+"</u>"})):(s=s.replace(/___(\S[\s\S]*?)___/g,function(_,y){return/\S$/.test(y)?"<u>"+y+"</u>":_}),s=s.replace(/__(\S[\s\S]*?)__/g,function(_,y){return/\S$/.test(y)?"<u>"+y+"</u>":_})),s=s.replace(/(_)/g,n.helper.escapeCharactersCallback),s=u.converter._dispatch("underline.after",s,l,u)),s}),n.subParser("unescapeSpecialChars",function(s,l,u){return s=u.converter._dispatch("unescapeSpecialChars.before",s,l,u),s=s.replace(/¨E(\d+)E/g,function(_,y){var g=parseInt(y);return String.fromCharCode(g)}),s=u.converter._dispatch("unescapeSpecialChars.after",s,l,u),s}),n.subParser("makeMarkdown.blockquote",function(s,l){var u="";if(s.hasChildNodes())for(var _=s.childNodes,y=_.length,g=0;g<y;++g){var f=n.subParser("makeMarkdown.node")(_[g],l);f!==""&&(u+=f)}return u=u.trim(),u="> "+u.split(`
`).join(`
> `),u}),n.subParser("makeMarkdown.codeBlock",function(s,l){var u=s.getAttribute("language"),_=s.getAttribute("precodenum");return"```"+u+`
`+l.preList[_]+"\n```"}),n.subParser("makeMarkdown.codeSpan",function(s){return"`"+s.innerHTML+"`"}),n.subParser("makeMarkdown.emphasis",function(s,l){var u="";if(s.hasChildNodes()){u+="*";for(var _=s.childNodes,y=_.length,g=0;g<y;++g)u+=n.subParser("makeMarkdown.node")(_[g],l);u+="*"}return u}),n.subParser("makeMarkdown.header",function(s,l,u){var _=new Array(u+1).join("#"),y="";if(s.hasChildNodes()){y=_+" ";for(var g=s.childNodes,f=g.length,b=0;b<f;++b)y+=n.subParser("makeMarkdown.node")(g[b],l)}return y}),n.subParser("makeMarkdown.hr",function(){return"---"}),n.subParser("makeMarkdown.image",function(s){var l="";return s.hasAttribute("src")&&(l+="!["+s.getAttribute("alt")+"](",l+="<"+s.getAttribute("src")+">",s.hasAttribute("width")&&s.hasAttribute("height")&&(l+=" ="+s.getAttribute("width")+"x"+s.getAttribute("height")),s.hasAttribute("title")&&(l+=' "'+s.getAttribute("title")+'"'),l+=")"),l}),n.subParser("makeMarkdown.links",function(s,l){var u="";if(s.hasChildNodes()&&s.hasAttribute("href")){var _=s.childNodes,y=_.length;u="[";for(var g=0;g<y;++g)u+=n.subParser("makeMarkdown.node")(_[g],l);u+="](",u+="<"+s.getAttribute("href")+">",s.hasAttribute("title")&&(u+=' "'+s.getAttribute("title")+'"'),u+=")"}return u}),n.subParser("makeMarkdown.list",function(s,l,u){var _="";if(!s.hasChildNodes())return"";for(var y=s.childNodes,g=y.length,f=s.getAttribute("start")||1,b=0;b<g;++b)if(!(typeof y[b].tagName>"u"||y[b].tagName.toLowerCase()!=="li")){var N="";u==="ol"?N=f.toString()+". ":N="- ",_+=N+n.subParser("makeMarkdown.listItem")(y[b],l),++f}return _+=`
<!-- -->
`,_.trim()}),n.subParser("makeMarkdown.listItem",function(s,l){for(var u="",_=s.childNodes,y=_.length,g=0;g<y;++g)u+=n.subParser("makeMarkdown.node")(_[g],l);return/\n$/.test(u)?u=u.split(`
`).join(`
    `).replace(/^ {4}$/gm,"").replace(/\n\n+/g,`

`):u+=`
`,u}),n.subParser("makeMarkdown.node",function(s,l,u){u=u||!1;var _="";if(s.nodeType===3)return n.subParser("makeMarkdown.txt")(s,l);if(s.nodeType===8)return"<!--"+s.data+`-->

`;if(s.nodeType!==1)return"";var y=s.tagName.toLowerCase();switch(y){case"h1":u||(_=n.subParser("makeMarkdown.header")(s,l,1)+`

`);break;case"h2":u||(_=n.subParser("makeMarkdown.header")(s,l,2)+`

`);break;case"h3":u||(_=n.subParser("makeMarkdown.header")(s,l,3)+`

`);break;case"h4":u||(_=n.subParser("makeMarkdown.header")(s,l,4)+`

`);break;case"h5":u||(_=n.subParser("makeMarkdown.header")(s,l,5)+`

`);break;case"h6":u||(_=n.subParser("makeMarkdown.header")(s,l,6)+`

`);break;case"p":u||(_=n.subParser("makeMarkdown.paragraph")(s,l)+`

`);break;case"blockquote":u||(_=n.subParser("makeMarkdown.blockquote")(s,l)+`

`);break;case"hr":u||(_=n.subParser("makeMarkdown.hr")(s,l)+`

`);break;case"ol":u||(_=n.subParser("makeMarkdown.list")(s,l,"ol")+`

`);break;case"ul":u||(_=n.subParser("makeMarkdown.list")(s,l,"ul")+`

`);break;case"precode":u||(_=n.subParser("makeMarkdown.codeBlock")(s,l)+`

`);break;case"pre":u||(_=n.subParser("makeMarkdown.pre")(s,l)+`

`);break;case"table":u||(_=n.subParser("makeMarkdown.table")(s,l)+`

`);break;case"code":_=n.subParser("makeMarkdown.codeSpan")(s,l);break;case"em":case"i":_=n.subParser("makeMarkdown.emphasis")(s,l);break;case"strong":case"b":_=n.subParser("makeMarkdown.strong")(s,l);break;case"del":_=n.subParser("makeMarkdown.strikethrough")(s,l);break;case"a":_=n.subParser("makeMarkdown.links")(s,l);break;case"img":_=n.subParser("makeMarkdown.image")(s,l);break;default:_=s.outerHTML+`

`}return _}),n.subParser("makeMarkdown.paragraph",function(s,l){var u="";if(s.hasChildNodes())for(var _=s.childNodes,y=_.length,g=0;g<y;++g)u+=n.subParser("makeMarkdown.node")(_[g],l);return u=u.trim(),u}),n.subParser("makeMarkdown.pre",function(s,l){var u=s.getAttribute("prenum");return"<pre>"+l.preList[u]+"</pre>"}),n.subParser("makeMarkdown.strikethrough",function(s,l){var u="";if(s.hasChildNodes()){u+="~~";for(var _=s.childNodes,y=_.length,g=0;g<y;++g)u+=n.subParser("makeMarkdown.node")(_[g],l);u+="~~"}return u}),n.subParser("makeMarkdown.strong",function(s,l){var u="";if(s.hasChildNodes()){u+="**";for(var _=s.childNodes,y=_.length,g=0;g<y;++g)u+=n.subParser("makeMarkdown.node")(_[g],l);u+="**"}return u}),n.subParser("makeMarkdown.table",function(s,l){var u="",_=[[],[]],y=s.querySelectorAll("thead>tr>th"),g=s.querySelectorAll("tbody>tr"),f,b;for(f=0;f<y.length;++f){var N=n.subParser("makeMarkdown.tableCell")(y[f],l),D="---";if(y[f].hasAttribute("style")){var F=y[f].getAttribute("style").toLowerCase().replace(/\s/g,"");switch(F){case"text-align:left;":D=":---";break;case"text-align:right;":D="---:";break;case"text-align:center;":D=":---:";break}}_[0][f]=N.trim(),_[1][f]=D}for(f=0;f<g.length;++f){var O=_.push([])-1,E=g[f].getElementsByTagName("td");for(b=0;b<y.length;++b){var I=" ";typeof E[b]<"u"&&(I=n.subParser("makeMarkdown.tableCell")(E[b],l)),_[O].push(I)}}var k=3;for(f=0;f<_.length;++f)for(b=0;b<_[f].length;++b){var j=_[f][b].length;j>k&&(k=j)}for(f=0;f<_.length;++f){for(b=0;b<_[f].length;++b)f===1?_[f][b].slice(-1)===":"?_[f][b]=n.helper.padEnd(_[f][b].slice(-1),k-1,"-")+":":_[f][b]=n.helper.padEnd(_[f][b],k,"-"):_[f][b]=n.helper.padEnd(_[f][b],k);u+="| "+_[f].join(" | ")+` |
`}return u.trim()}),n.subParser("makeMarkdown.tableCell",function(s,l){var u="";if(!s.hasChildNodes())return"";for(var _=s.childNodes,y=_.length,g=0;g<y;++g)u+=n.subParser("makeMarkdown.node")(_[g],l,!0);return u.trim()}),n.subParser("makeMarkdown.txt",function(s){var l=s.nodeValue;return l=l.replace(/ +/g," "),l=l.replace(/¨NBSP;/g," "),l=n.helper.unescapeHTMLEntities(l),l=l.replace(/([*_~|`])/g,"\\$1"),l=l.replace(/^(\s*)>/g,"\\$1>"),l=l.replace(/^#/gm,"\\#"),l=l.replace(/^(\s*)([-=]{3,})(\s*)$/,"$1\\$2$3"),l=l.replace(/^( {0,3}\d+)\./gm,"$1\\."),l=l.replace(/^( {0,3})([+-])/gm,"$1\\$2"),l=l.replace(/]([\s]*)\(/g,"\\]$1\\("),l=l.replace(/^ {0,3}\[([\S \t]*?)]:/gm,"\\[$1]:"),l});var R=this;i.exports?i.exports=n:R.showdown=n}).call(Sp)})(Vo);var bp=Vo.exports;const Ep=yp(bp),wp="My name is Julian Ubico. I'm a software developer currently pursuing a Bachelor of Science in Computer Science (Spring 2025) at the University of Florida. I have a diverse skill set in programming languages like Java, SQL, HTML, CSS, JavaScript, and C++, and I am proficient in Linux system administration. I specialize in creating responsive, mobile-friendly websites, setting up web servers with NGINX, and developing full stack applications. I first learned how to program at the age of 16, with Java being my foundation. My most notable project is [DirtCraft](https://dirtcraft.net/), a modded minecraft network which I co-founded. During the summer of 2021, I also completed an internship with [Tech For Good](https://www.techforgoodinc.org/), a not-for-profit organization focused on providing access to technology for the less fortunate. I collaborated with team members on projects, actively participated in the daily meetings, and gained experience in a real-world software engineering environment.",Tp="I am experienced with databases such as H2, MySQL, and MariaDB. I have strong skills in Linux, particularly CentOS 7, and am proficient in system administration. I have utilized Jenkins for automated build processes. I am adept at setting up and managing web servers using NGINX. I can develop responsive, mobile-friendly websites and full stack applications. Additionally, I am well-versed in software engineering practices, including version control with Git, continuous integration and delivery (CI/CD), and agile methodologies.<br><br>**Programming Languages**",Ap=`
#### [Dirt Panel](https://github.com/d4julian)
Developed a full stack administration panel with a React frontend and an Express & Java backend. The panel uses MySQL databases for efficient data storage and retrieval, allowing seamless management and monitoring of the server network.

#### [Dirt Launcher](https://github.com/d4julian)
Created a custom modded Minecraft launcher using JavaFX. This launcher provided users with an intuitive interface for managing game mods and updates, enhancing the overall user experience.
    `,Cp=new Date(2019,3,1),$r=new Date(2019,10,1),Rp=new Date(2019,7,1),Pp=new Date(2022,8,1),Wo=new Date;let ja=`
`;const Kr={Java:Cp,SQL:Rp,HTML:$r,CSS:$r,JavaScript:$r,"C++":Pp};function Lp(){let i=!1;return function(e){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(i=!0)}(navigator.userAgent||navigator.vendor||window.opera),i}function Dp(i){return Math.abs(new Date(Wo-i).getUTCFullYear()-1970)}function Up(i,e){return new Date(Wo-i).getUTCMonth()}for(let i in Kr){const e=Dp(Kr[i]),t=Up(Kr[i]);let n;switch(e){case 0:n=`${t} ${t!=1?"months":"month"}`;break;default:n=e+" "+(e!=1?"years":"year"),t>0&&(n+=" and "+(t!=1?t+" months":"a month"));break}ja+=`* ${i}: ${n}
`}ja.trimEnd();function Ya(i,e=!1){let n=new Ep.Converter().makeHtml(e?i+ja:i);const r=document.getElementById("textbox");for(;r.firstChild;)r.removeChild(r.lastChild);r.classList.add("fade"),setTimeout(()=>{r.innerHTML=n,r.classList.remove("fade")},250)}function Ip(){Ya(Tp,!0)}function Xo(){Ya(wp)}function Np(){Ya(Ap)}const ao=document.getElementById("categories").children;for(let i=0;i<ao.length;i++){const e=ao[i];e.onclick=function(){switch(document.createElement("span"),e.id){case"home":Xo();break;case"skills":Ip();break;case"projects":Np();break}document.getElementById("text")}}Xo();let qo=0,jo=0;const fi=new fp,Fp=document.getElementById("three-canvas"),yi=new lp({canvas:Fp,antialias:!0});yi.setSize(window.innerWidth,window.innerHeight);yi.setPixelRatio(window.devicePixelRatio>1?2:1);const kt=new Tt(75,window.innerWidth/window.innerHeight,1,2e3);kt.position.z=300;const Op=new _p(new Xa(Lp()?window.innerWidth/6:window.innerWidth/12,4)),bi=new mp(Op);bi.material.transparent=!0;kt.lookAt(bi.position);fi.add(bi);const Yo=new Ct,hi=[],$o=[],Ko=new xp,Zo=i=>i.colorSpace=yt;let Zr=Ko.load("/sp2.png",Zo),so=Ko.load("/sp3.png",Zo);for(let i=0;i<1e4;i++){const e=Math.random()*2e3-1e3,t=Math.random()*2e3-1e3,n=Math.random()*2e3-1e3;$o.push(e,t,n)}Yo.setAttribute("position",new Nt(new Float32Array($o),3));let qn=[[null,so,10],[null,so,10],[null,Zr,1],[null,Zr,1],[null,Zr,1]];for(let i=0;i<qn.length;i++){qn[i][0]=[Math.random(),Math.random()*.7+.7,Math.random()*.5+.5];const e=qn[i][0],t=qn[i][1],n=qn[i][2];hi[i]=new Ho({size:n,map:t,blending:Jr,transparent:!0,alphaTest:.1}),hi[i].color.setHex(e,yt);const r=new Go(Yo,hi[i]);r.rotation.x=Math.random()*6,r.rotation.y=Math.random()*6,r.rotation.z=Math.random()*6,fi.add(r)}document.body.addEventListener("pointermove",zp);window.addEventListener("resize",kp);let Jo=window.innerHeight/2,Qo=window.innerWidth/2;function kp(){Jo=window.innerHeight/2,Qo=window.innerWidth/2,kt.aspect=window.innerWidth/window.innerHeight,kt.updateProjectionMatrix(),yi.setSize(window.innerWidth,window.innerHeight)}function Bp(){const i=bi.material,e=i.opacity,t=Date.now();function n(){const a=Date.now()-t,o=Math.min(a/250,1);i.opacity=e*(1-o),o<1&&requestAnimationFrame(n)}n()}function zp(i){i.isPrimary!==!1&&(qo=i.clientX-Qo,jo=i.clientY-Jo)}function Hp(i){return((i-new Date(2003,1,18))/315576e5).toFixed(9)}function Gp(){const i=Date.now();document.getElementById("age").innerText=`${Hp(i)} year old developer`;const e=i*1e-4,t=Wp()?.1:.01;kt.position.x+=(-qo-kt.position.x)*t,kt.position.y+=(jo-kt.position.y)*t,kt.lookAt(bi.position);for(let n=0;n<fi.children.length;n++){const r=fi.children[n];r instanceof Go&&(r.rotation.y=e*(n<4?n+1:-(n+1)))}for(let n=0;n<hi.length;n++){const r=qn[n][0],a=360*(r[0]+e)%360/360;hi[n].color.setHSL(a,r[1],r[2],yt)}yi.render(fi,kt)}yi.setAnimationLoop(Gp);const Vp=document.getElementById("enter");function Wp(){return document.getElementById("splash-components").style.display!="none"}function Xp(i,e){Bp(),i.classList.add("fade"),setTimeout(()=>{i.style.visibility="hidden",i.classList.remove("fade"),i.style.display="none",e()},250)}function qp(i){i.classList.add("fade"),setTimeout(()=>{i.style.visibility="visible",i.classList.remove("fade")},250)}Vp.addEventListener("click",()=>Xp(document.getElementById("splash-components"),()=>Array.from(document.getElementsByClassName("main-content")).forEach(i=>qp(i))));
