(function(){var e,t,n,r,i,a,o,s,c,l=1e3,u=1001,d=1002,f=1003,p=1006,m=1008,h=1009,g=1012,_=1014,v=1015,y=1016,b=1017,x=1018,S=1020,C=1023,w=1026,T=1027,E=1028,D=1029,O=1030,k=1031,A=1033,j=2300,M=2301,N=2302,P=2303,F=2400,I=2401,L=2402,ee=`srgb`,R=`srgb-linear`,te=`linear`,z=`srgb`,ne=7680,re=2e3;function ie(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function ae(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function oe(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function se(){let e=oe(`canvas`);return e.style.display=`block`,e}var ce={};function le(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function ue(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function B(...e){e=ue(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function V(...e){e=ue(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function de(...e){let t=e.join(` `);t in ce||(ce[t]=!0,B(...e))}function fe(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var pe={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},me=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},he=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),ge=Math.PI/180,_e=180/Math.PI;function ve(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(he[e&255]+he[e>>8&255]+he[e>>16&255]+he[e>>24&255]+`-`+he[t&255]+he[t>>8&255]+`-`+he[t>>16&15|64]+he[t>>24&255]+`-`+he[n&63|128]+he[n>>8&255]+`-`+he[n>>16&255]+he[n>>24&255]+he[r&255]+he[r>>8&255]+he[r>>16&255]+he[r>>24&255]).toLowerCase()}function H(e,t,n){return Math.max(t,Math.min(n,e))}function ye(e,t){return(e%t+t)%t}function be(e,t,n){return(1-n)*e+n*t}function xe(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function Se(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}o=Symbol.iterator;var U=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=H(this.x,e.x,t.x),this.y=H(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=H(this.x,e,t),this.y=H(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(H(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(H(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[o](){yield this.x,yield this.y}};e=U,e.prototype.isVector2=!0;var Ce=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:B(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(H(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};s=Symbol.iterator;var W=class{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Te.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Te.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=H(this.x,e.x,t.x),this.y=H(this.y,e.y,t.y),this.z=H(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=H(this.x,e,t),this.y=H(this.y,e,t),this.z=H(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(H(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return we.copy(this).projectOnVector(e),this.sub(we)}reflect(e){return this.sub(we.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(H(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[s](){yield this.x,yield this.y,yield this.z}};t=W,t.prototype.isVector3=!0;var we=new W,Te=new Ce,G=class{constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return de(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Ee.makeScale(e,t)),this}rotate(e){return de(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Ee.makeRotation(-e)),this}translate(e,t){return de(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Ee.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};n=G,n.prototype.isMatrix3=!0;var Ee=new G,De=new G().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Oe=new G().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ke(){let e={enabled:!0,workingColorSpace:R,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=je(e.r),e.g=je(e.g),e.b=je(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=K(e.r),e.g=K(e.g),e.b=K(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?te:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return de(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return de(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[R]:{primaries:t,whitePoint:r,transfer:te,toXYZ:De,fromXYZ:Oe,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ee},outputColorSpaceConfig:{drawingBufferColorSpace:ee}},[ee]:{primaries:t,whitePoint:r,transfer:z,toXYZ:De,fromXYZ:Oe,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ee}}}),e}var Ae=ke();function je(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function K(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Me,Ne=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Me===void 0&&(Me=oe(`canvas`)),Me.width=e.width,Me.height=e.height;let t=Me.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Me}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=oe(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=je(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(je(t[e]/255)*255):t[e]=je(t[e]);return{data:t,width:e.width,height:e.height}}return B(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Pe=0,q=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Pe++}),this.uuid=ve(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Fe(r[t].image)):e.push(Fe(r[t]))}else e=Fe(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Fe(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Ne.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(B(`Texture: Unable to serialize Texture.`),{})}var J=0,Ie=new W,Le=class e extends me{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=u,i=u,a=p,o=m,s=C,c=h,l=e.DEFAULT_ANISOTROPY,d=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:J++}),this.uuid=ve(),this.name=``,this.source=new q(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new U(0,0),this.repeat=new U(1,1),this.center=new U(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new G,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ie).x}get height(){return this.source.getSize(Ie).y}get depth(){return this.source.getSize(Ie).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){B(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?B(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case l:e.x-=Math.floor(e.x);break;case u:e.x=e.x<0?0:1;break;case d:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case l:e.y-=Math.floor(e.y);break;case u:e.y=e.y<0?0:1;break;case d:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Le.DEFAULT_IMAGE=null,Le.DEFAULT_MAPPING=300,Le.DEFAULT_ANISOTROPY=1,c=Symbol.iterator;var Re=class{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=H(this.x,e.x,t.x),this.y=H(this.y,e.y,t.y),this.z=H(this.z,e.z,t.z),this.w=H(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=H(this.x,e,t),this.y=H(this.y,e,t),this.z=H(this.z,e,t),this.w=H(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(H(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[c](){yield this.x,yield this.y,yield this.z,yield this.w}};r=Re,r.prototype.isVector4=!0;var ze=class extends me{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:p,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Re(0,0,e,t),this.scissorTest=!1,this.viewport=new Re(0,0,e,t),this.textures=[];let r=new Le({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:p,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new q(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Be=class extends ze{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ve=class extends Le{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=f,this.minFilter=f,this.wrapR=u,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},He=class extends Le{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=f,this.minFilter=f,this.wrapR=u,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Ue=class e{constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/We.setFromMatrixColumn(e,0).length(),i=1/We.setFromMatrixColumn(e,1).length(),a=1/We.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ke,e,qe)}lookAt(e,t,n){let r=this.elements;return Xe.subVectors(e,t),Xe.lengthSq()===0&&(Xe.z=1),Xe.normalize(),Je.crossVectors(n,Xe),Je.lengthSq()===0&&(Math.abs(n.z)===1?Xe.x+=1e-4:Xe.z+=1e-4,Xe.normalize(),Je.crossVectors(n,Xe)),Je.normalize(),Ye.crossVectors(Xe,Je),r[0]=Je.x,r[4]=Ye.x,r[8]=Xe.x,r[1]=Je.y,r[5]=Ye.y,r[9]=Xe.y,r[2]=Je.z,r[6]=Ye.z,r[10]=Xe.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],P=r[7],F=r[11],I=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*P,i[8]=a*C+o*D+s*j+c*F,i[12]=a*w+o*O+s*M+c*I,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*P,i[9]=l*C+u*D+d*j+f*F,i[13]=l*w+u*O+d*M+f*I,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*P,i[10]=p*C+m*D+h*j+g*F,i[14]=p*w+m*O+h*M+g*I,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*P,i[11]=_*C+v*D+y*j+b*F,i[15]=_*w+v*O+y*M+b*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=We.set(r[0],r[1],r[2]).length(),o=We.set(r[4],r[5],r[6]).length(),s=We.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Ge.copy(this);let c=1/a,l=1/o,u=1/s;return Ge.elements[0]*=c,Ge.elements[1]*=c,Ge.elements[2]*=c,Ge.elements[4]*=l,Ge.elements[5]*=l,Ge.elements[6]*=l,Ge.elements[8]*=u,Ge.elements[9]*=u,Ge.elements[10]*=u,t.setFromRotationMatrix(Ge),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=re,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=re,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};i=Ue,i.prototype.isMatrix4=!0;var We=new W,Ge=new Ue,Ke=new W(0,0,0),qe=new W(1,1,1),Je=new W,Ye=new W,Xe=new W,Ze=new Ue,Qe=new Ce,$e=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(H(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-H(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(H(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-H(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(H(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-H(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:B(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ze.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ze,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qe.setFromEuler(this),this.setFromQuaternion(Qe,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$e.DEFAULT_ORDER=`XYZ`;var et=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},tt=0,nt=new W,rt=new Ce,it=new Ue,at=new W,ot=new W,st=new W,ct=new Ce,lt=new W(1,0,0),ut=new W(0,1,0),dt=new W(0,0,1),ft={type:`added`},pt={type:`removed`},mt={type:`childadded`,child:null},ht={type:`childremoved`,child:null},gt=class e extends me{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tt++}),this.uuid=ve(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new W,n=new $e,r=new Ce,i=new W(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ue},normalMatrix:{value:new G}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new et,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return rt.setFromAxisAngle(e,t),this.quaternion.multiply(rt),this}rotateOnWorldAxis(e,t){return rt.setFromAxisAngle(e,t),this.quaternion.premultiply(rt),this}rotateX(e){return this.rotateOnAxis(lt,e)}rotateY(e){return this.rotateOnAxis(ut,e)}rotateZ(e){return this.rotateOnAxis(dt,e)}translateOnAxis(e,t){return nt.copy(e).applyQuaternion(this.quaternion),this.position.add(nt.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lt,e)}translateY(e){return this.translateOnAxis(ut,e)}translateZ(e){return this.translateOnAxis(dt,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(it.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?at.copy(e):at.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),ot.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?it.lookAt(ot,at,this.up):it.lookAt(at,ot,this.up),this.quaternion.setFromRotationMatrix(it),r&&(it.extractRotation(r.matrixWorld),rt.setFromRotationMatrix(it),this.quaternion.premultiply(rt.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(V(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ft),mt.child=e,this.dispatchEvent(mt),mt.child=null):V(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pt),ht.child=e,this.dispatchEvent(ht),ht.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),it.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),it.multiply(e.parent.matrixWorld)),e.applyMatrix4(it),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ft),mt.child=e,this.dispatchEvent(mt),mt.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ot,e,st),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ot,ct,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};gt.DEFAULT_UP=new W(0,1,0),gt.DEFAULT_MATRIX_AUTO_UPDATE=!0,gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var _t=class extends gt{constructor(){super(),this.isGroup=!0,this.type=`Group`}},vt={type:`move`},yt=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vt)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new _t;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},bt={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xt={h:0,s:0,l:0},St={h:0,s:0,l:0};function Ct(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var wt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ee){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ae.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Ae.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ae.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Ae.workingColorSpace){if(e=ye(e,1),t=H(t,0,1),n=H(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Ct(i,r,e+1/3),this.g=Ct(i,r,e),this.b=Ct(i,r,e-1/3)}return Ae.colorSpaceToWorking(this,r),this}setStyle(e,t=ee){function n(t){t!==void 0&&parseFloat(t)<1&&B(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:B(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);B(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ee){let n=bt[e.toLowerCase()];return n===void 0?B(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=je(e.r),this.g=je(e.g),this.b=je(e.b),this}copyLinearToSRGB(e){return this.r=K(e.r),this.g=K(e.g),this.b=K(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ee){return Ae.workingToColorSpace(Tt.copy(this),e),Math.round(H(Tt.r*255,0,255))*65536+Math.round(H(Tt.g*255,0,255))*256+Math.round(H(Tt.b*255,0,255))}getHexString(e=ee){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ae.workingColorSpace){Ae.workingToColorSpace(Tt.copy(this),t);let n=Tt.r,r=Tt.g,i=Tt.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Ae.workingColorSpace){return Ae.workingToColorSpace(Tt.copy(this),t),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=ee){Ae.workingToColorSpace(Tt.copy(this),e);let t=Tt.r,n=Tt.g,r=Tt.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(xt),this.setHSL(xt.h+e,xt.s+t,xt.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xt),e.getHSL(St);let n=be(xt.h,St.h,t),r=be(xt.s,St.s,t),i=be(xt.l,St.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Tt=new wt;wt.NAMES=bt;var Et=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new wt(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Dt=class extends gt{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $e,this.environmentIntensity=1,this.environmentRotation=new $e,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ot=new W,kt=new W,At=new W,jt=new W,Mt=new W,Nt=new W,Pt=new W,Ft=new W,It=new W,Lt=new W,Rt=new Re,zt=new Re,Bt=new Re,Vt=class e{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ot.subVectors(e,t),r.cross(Ot);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Ot.subVectors(r,t),kt.subVectors(n,t),At.subVectors(e,t);let a=Ot.dot(Ot),o=Ot.dot(kt),s=Ot.dot(At),c=kt.dot(kt),l=kt.dot(At),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,jt)!==null&&jt.x>=0&&jt.y>=0&&jt.x+jt.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,jt)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,jt.x),s.addScaledVector(a,jt.y),s.addScaledVector(o,jt.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Rt.setScalar(0),zt.setScalar(0),Bt.setScalar(0),Rt.fromBufferAttribute(e,t),zt.fromBufferAttribute(e,n),Bt.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Rt,i.x),a.addScaledVector(zt,i.y),a.addScaledVector(Bt,i.z),a}static isFrontFacing(e,t,n,r){return Ot.subVectors(n,t),kt.subVectors(e,t),Ot.cross(kt).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ot.subVectors(this.c,this.b),kt.subVectors(this.a,this.b),Ot.cross(kt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Mt.subVectors(r,n),Nt.subVectors(i,n),Ft.subVectors(e,n);let s=Mt.dot(Ft),c=Nt.dot(Ft);if(s<=0&&c<=0)return t.copy(n);It.subVectors(e,r);let l=Mt.dot(It),u=Nt.dot(It);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Mt,a);Lt.subVectors(e,i);let f=Mt.dot(Lt),p=Nt.dot(Lt);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Nt,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Pt.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Pt,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Mt,a).addScaledVector(Nt,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ht=class{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Wt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Wt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Wt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Wt):Wt.fromBufferAttribute(r,t),Wt.applyMatrix4(e.matrixWorld),this.expandByPoint(Wt);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Gt.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Gt.copy(e.boundingBox)),Gt.applyMatrix4(e.matrixWorld),this.union(Gt)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wt),Wt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qt),$t.subVectors(this.max,Qt),Kt.subVectors(e.a,Qt),qt.subVectors(e.b,Qt),Jt.subVectors(e.c,Qt),Yt.subVectors(qt,Kt),Xt.subVectors(Jt,qt),Zt.subVectors(Kt,Jt);let t=[0,-Yt.z,Yt.y,0,-Xt.z,Xt.y,0,-Zt.z,Zt.y,Yt.z,0,-Yt.x,Xt.z,0,-Xt.x,Zt.z,0,-Zt.x,-Yt.y,Yt.x,0,-Xt.y,Xt.x,0,-Zt.y,Zt.x,0];return!nn(t,Kt,qt,Jt,$t)||(t=[1,0,0,0,1,0,0,0,1],!nn(t,Kt,qt,Jt,$t))?!1:(en.crossVectors(Yt,Xt),t=[en.x,en.y,en.z],nn(t,Kt,qt,Jt,$t))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Ut[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ut[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ut[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ut[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ut[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ut[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ut[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ut[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ut)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ut=[new W,new W,new W,new W,new W,new W,new W,new W],Wt=new W,Gt=new Ht,Kt=new W,qt=new W,Jt=new W,Yt=new W,Xt=new W,Zt=new W,Qt=new W,$t=new W,en=new W,tn=new W;function nn(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){tn.fromArray(e,a);let o=i.x*Math.abs(tn.x)+i.y*Math.abs(tn.y)+i.z*Math.abs(tn.z),s=t.dot(tn),c=n.dot(tn),l=r.dot(tn);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var rn=new W,an=new U,on=0,sn=class extends me{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:on++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=v,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyMatrix3(e),this.setXY(t,an.x,an.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix3(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=xe(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Se(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xe(t,this.array)),t}setX(e,t){return this.normalized&&(t=Se(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xe(t,this.array)),t}setY(e,t){return this.normalized&&(t=Se(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xe(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Se(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xe(t,this.array)),t}setW(e,t){return this.normalized&&(t=Se(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Se(t,this.array),n=Se(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Se(t,this.array),n=Se(n,this.array),r=Se(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Se(t,this.array),n=Se(n,this.array),r=Se(r,this.array),i=Se(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},cn=class extends sn{constructor(e,t,n){super(new Uint16Array(e),t,n)}},ln=class extends sn{constructor(e,t,n){super(new Uint32Array(e),t,n)}},un=class extends sn{constructor(e,t,n){super(new Float32Array(e),t,n)}},dn=new Ht,fn=new W,pn=new W,mn=class{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?dn.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fn.subVectors(e,this.center);let t=fn.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(fn,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pn.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fn.copy(e.center).add(pn)),this.expandByPoint(fn.copy(e.center).sub(pn))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},hn=0,gn=new Ue,_n=new gt,vn=new W,yn=new Ht,bn=new Ht,xn=new W,Sn=class e extends me{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hn++}),this.uuid=ve(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(ie(e)?ln:cn)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new G().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,n){return gn.makeTranslation(e,t,n),this.applyMatrix4(gn),this}scale(e,t,n){return gn.makeScale(e,t,n),this.applyMatrix4(gn),this}lookAt(e){return _n.lookAt(e),_n.updateMatrix(),this.applyMatrix4(_n.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vn).negate(),this.translate(vn.x,vn.y,vn.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new un(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&B(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ht);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)V(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];yn.setFromBufferAttribute(n),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&V(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)V(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new W,1/0);else if(e){let n=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];bn.setFromBufferAttribute(n),this.morphTargetsRelative?(xn.addVectors(yn.min,bn.min),yn.expandByPoint(xn),xn.addVectors(yn.max,bn.max),yn.expandByPoint(xn)):(yn.expandByPoint(bn.min),yn.expandByPoint(bn.max))}yn.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)xn.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(xn));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)xn.fromBufferAttribute(a,t),o&&(vn.fromBufferAttribute(e,t),xn.add(vn)),r=Math.max(r,n.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&V(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){V(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new sn(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new W,s[e]=new W;let c=new W,l=new W,u=new W,d=new U,f=new U,p=new U,m=new W,h=new W;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new W,y=new W,b=new W,x=new W;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new sn(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new W,i=new W,a=new W,o=new W,s=new W,c=new W,l=new W,u=new W;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)xn.fromBufferAttribute(e,t),xn.normalize(),e.setXYZ(t,xn.x,xn.y,xn.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new sn(a,r,i)}if(this.index===null)return B(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Cn=new W,wn=new W,Tn=new G,En=class{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Cn.subVectors(n,t).cross(wn.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Cn),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Tn.getNormalMatrix(e),r=this.coplanarPoint(Cn).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Dn=0,On=class extends me{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dn++}),this.uuid=ve(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ne,this.stencilZFail=ne,this.stencilZPass=ne,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){B(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?B(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new wt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new En().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new U().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new U().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},kn=new W,An=new W,jn=new W,Mn=new W,Nn=class{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kn.copy(this.origin).addScaledVector(this.direction,t),kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){An.copy(e).add(t).multiplyScalar(.5),jn.copy(t).sub(e).normalize(),Mn.copy(this.origin).sub(An);let i=e.distanceTo(t)*.5,a=-this.direction.dot(jn),o=Mn.dot(this.direction),s=-Mn.dot(jn),c=Mn.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(An).addScaledVector(jn,d),f}intersectSphere(e,t){if(e.radius<0)return null;kn.subVectors(e.center,this.origin);let n=kn.dot(this.direction),r=kn.dot(kn)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,kn)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,N;if(y>=b&&y>=x?(w=s,D=u,A=p,N=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,N=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,N=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let P=S/w,F=C/w,I=1/w,L=T-P*D,ee=E-F*D,R=O-P*A,te=k-F*A,z=j-P*N,ne=M-F*N,re=z*te-ne*R,ie=L*ne-ee*z,ae=R*ee-te*L;if(r){if(re<0||ie<0||ae<0)return null}else if((re<0||ie<0||ae<0)&&(re>0||ie>0||ae>0))return null;let oe=re+ie+ae;if(oe===0)return null;let se=I*(re*D+ie*A+ae*N);return(oe>0?se<0:se>0)?null:this.at(se/oe,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Pn=class extends On{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $e,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Fn=new Ue,In=new Nn,Ln=new mn,Rn=new W,zn=new W,Bn=new W,Vn=new W,Hn=new W,Un=new W,Wn=new W,Gn=new W,Kn=class extends gt{constructor(e=new Sn,t=new Pn){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Un.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Hn.fromBufferAttribute(s,e),a?Un.addScaledVector(Hn,r):Un.addScaledVector(Hn.sub(t),r))}t.add(Un)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ln.copy(n.boundingSphere),Ln.applyMatrix4(i),In.copy(e.ray).recast(e.near),!(Ln.containsPoint(In.origin)===!1&&(In.intersectSphere(Ln,Rn)===null||In.origin.distanceToSquared(Rn)>(e.far-e.near)**2))&&(Fn.copy(i).invert(),In.copy(e.ray).applyMatrix4(Fn),(n.boundingBox===null||In.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,In)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Jn(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Jn(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Jn(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Jn(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function qn(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Gn.copy(s),Gn.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Gn);return l<n.near||l>n.far?null:{distance:l,point:Gn.clone(),object:e}}function Jn(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,zn),e.getVertexPosition(c,Bn),e.getVertexPosition(l,Vn);let u=qn(e,t,n,r,zn,Bn,Vn,Wn);if(u){let e=new W;Vt.getBarycoord(Wn,zn,Bn,Vn,e),i&&(u.uv=Vt.getInterpolatedAttribute(i,s,c,l,e,new U)),a&&(u.uv1=Vt.getInterpolatedAttribute(a,s,c,l,e,new U)),o&&(u.normal=Vt.getInterpolatedAttribute(o,s,c,l,e,new W),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new W,materialIndex:0};Vt.getNormal(zn,Bn,Vn,t.normal),u.face=t,u.barycoord=e}return u}var Yn=class extends Le{constructor(e=null,t=1,n=1,r,i,a,o,s,c=f,l=f,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Xn=class extends sn{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Zn=new Ue,Qn=new Ue,$n=[],er=new Ht,tr=new Ue,nr=new Kn,rr=new mn,ir=class extends Kn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Xn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,tr)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ht),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Zn),er.copy(e.boundingBox).applyMatrix4(Zn),this.boundingBox.union(er)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new mn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Zn),rr.copy(e.boundingSphere).applyMatrix4(Zn),this.boundingSphere.union(rr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(nr.geometry=this.geometry,nr.material=this.material,nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rr.copy(this.boundingSphere),rr.applyMatrix4(n),e.ray.intersectsSphere(rr)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Zn),Qn.multiplyMatrices(n,Zn),nr.matrixWorld=Qn,nr.raycast(e,$n);for(let e=0,n=$n.length;e<n;e++){let n=$n[e];n.instanceId=i,n.object=this,t.push(n)}$n.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Xn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Yn(new Float32Array(r*this.count),r,this.count,E,v));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ar=new mn,or=new U(.5,.5),sr=new W,cr=class{constructor(e=new En,t=new En,n=new En,r=new En,i=new En,a=new En){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=re,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ar.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(e){return ar.center.set(0,0,0),ar.radius=.7071067811865476+or.distanceTo(e.center),ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(sr.x=r.normal.x>0?e.max.x:e.min.x,sr.y=r.normal.y>0?e.max.y:e.min.y,sr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(sr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},lr=class extends Le{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ur=class extends Le{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},dr=class extends Le{constructor(e,t,n=_,r,i,a,o=f,s=f,c,l=w,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new q(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},fr=class extends dr{constructor(e,t=_,n=301,r,i,a=f,o=f,s,c=w){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},pr=class extends Le{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},mr=class e extends Sn{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new un(c,3)),this.setAttribute(`normal`,new un(l,3)),this.setAttribute(`uv`,new un(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new W;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},hr=class e extends Sn{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new W,l=new U;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new un(a,3)),this.setAttribute(`normal`,new un(o,3)),this.setAttribute(`uv`,new un(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},gr=class e extends Sn{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new un(p,3)),this.setAttribute(`normal`,new un(m,3)),this.setAttribute(`uv`,new un(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};function _r(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(yr(i))i.isRenderTargetTexture?(B(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(yr(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function vr(e){let t={};for(let n=0;n<e.length;n++){let r=_r(e[n]);for(let e in r)t[e]=r[e]}return t}function yr(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function br(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function xr(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ae.workingColorSpace}var Sr={clone:_r,merge:vr},Cr=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wr=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Tr=class extends On{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cr,this.fragmentShader=wr,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_r(e.uniforms),this.uniformsGroups=br(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new wt().setHex(r.value);break;case`v2`:this.uniforms[n].value=new U().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new W().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Re().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new G().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Ue().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Er=class extends Tr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Dr=class extends On{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new U(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $e,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Or=class extends On{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},kr=class extends On{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ar(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function jr(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Mr=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Nr=class extends Mr{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:F,endingEnd:F}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case I:i=e,o=2*t-n;break;case L:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case I:a=e,s=2*n-t;break;case L:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Pr=class extends Mr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Fr=class extends Mr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ir=class extends Mr{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=zr(n,t,g,y,r);i[p]=Lr(x,o,_,b,m)}return i}};function Lr(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Rr(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function zr(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Lr(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Rr(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Br=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Ar(t,this.TimeBufferType),this.values=Ar(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ar(e.times,Array),values:Ar(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),jr(e.settings)&&(n.settings={inTangents:Ar(e.settings.inTangents,Array),outTangents:Ar(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Fr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Pr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Nr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ir(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case j:t=this.InterpolantFactoryMethodDiscrete;break;case M:t=this.InterpolantFactoryMethodLinear;break;case N:t=this.InterpolantFactoryMethodSmooth;break;case P:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return B(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return j;case this.InterpolantFactoryMethodLinear:return M;case this.InterpolantFactoryMethodSmooth:return N;case this.InterpolantFactoryMethodBezier:return P}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;jr(this.settings)&&(Vr(this.settings.inTangents,e),Vr(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(V(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(V(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){V(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){V(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&ae(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){V(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===N,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,jr(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Vr(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Br.prototype.ValueTypeName=``,Br.prototype.TimeBufferType=Float32Array,Br.prototype.ValueBufferType=Float32Array,Br.prototype.DefaultInterpolation=M;var Hr=class extends Br{constructor(e,t,n){super(e,t,n)}};Hr.prototype.ValueTypeName=`bool`,Hr.prototype.ValueBufferType=Array,Hr.prototype.DefaultInterpolation=j,Hr.prototype.InterpolantFactoryMethodLinear=void 0,Hr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ur=class extends Br{constructor(e,t,n,r){super(e,t,n,r)}};Ur.prototype.ValueTypeName=`color`;var Wr=class extends Br{constructor(e,t,n,r){super(e,t,n,r)}};Wr.prototype.ValueTypeName=`number`;var Gr=class extends Mr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Ce.slerpFlat(i,0,a,c-o,a,c,s);return i}},Kr=class extends Br{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Gr(this.times,this.values,this.getValueSize(),e)}};Kr.prototype.ValueTypeName=`quaternion`,Kr.prototype.InterpolantFactoryMethodSmooth=void 0;var qr=class extends Br{constructor(e,t,n){super(e,t,n)}};qr.prototype.ValueTypeName=`string`,qr.prototype.ValueBufferType=Array,qr.prototype.DefaultInterpolation=j,qr.prototype.InterpolantFactoryMethodLinear=void 0,qr.prototype.InterpolantFactoryMethodSmooth=void 0;var Jr=class extends Br{constructor(e,t,n,r){super(e,t,n,r)}};Jr.prototype.ValueTypeName=`vector`;var Yr=class extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new wt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Xr=class extends Yr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new wt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Zr=new Ue,Qr=new W,$r=new W,ei=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new U(512,512),this.mapType=h,this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cr,this._frameExtents=new U(1,1),this._viewportCount=1,this._viewports=[new Re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Qr.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qr),$r.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($r),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Zr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Zr,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Zr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ti=new W,ni=new Ce,ri=new W,ii=class extends gt{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=re,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ti,ni,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ti,ni,ri.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ti,ni,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ti,ni,ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ai=new W,oi=new U,si=new U,ci=class extends ii{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=_e*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ge*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _e*2*Math.atan(Math.tan(ge*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ai.x,ai.y).multiplyScalar(-e/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ai.x,ai.y).multiplyScalar(-e/ai.z)}getViewSize(e,t){return this.getViewBounds(e,oi,si),t.subVectors(si,oi)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ge*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},li=class extends ii{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ui=class extends ei{constructor(){super(new li(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},di=class extends Yr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new ui}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},fi=-90,pi=1,mi=class extends gt{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ci(fi,pi,e,t);r.layers=this.layers,this.add(r);let i=new ci(fi,pi,e,t);i.layers=this.layers,this.add(i);let a=new ci(fi,pi,e,t);a.layers=this.layers,this.add(a);let o=new ci(fi,pi,e,t);o.layers=this.layers,this.add(o);let s=new ci(fi,pi,e,t);s.layers=this.layers,this.add(s);let c=new ci(fi,pi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},hi=class extends ci{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},gi=`\\[\\]\\.:\\/`,_i=RegExp(`[\\[\\]\\.:\\/]`,`g`),vi=`[^\\[\\]\\.:\\/]`,yi=`[^`+gi.replace(`\\.`,``)+`]`,bi=`((?:WC+[\\/:])*)`.replace(`WC`,vi),xi=`(WCOD+)?`.replace(`WCOD`,yi),Si=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,vi),Ci=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,vi),wi=RegExp(`^`+bi+xi+Si+Ci+`$`),Ti=[`material`,`materials`,`bones`,`map`],Ei=class{constructor(e,t,n){let r=n||Di.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Di=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(_i,``)}static parseTrackName(e){let t=wi.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Ti.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){B(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){V(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){V(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){V(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){V(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){V(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){V(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){V(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;V(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){V(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){V(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Di.Composite=Ei,Di.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Di.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Di.prototype.GetterByBindingType=[Di.prototype._getValue_direct,Di.prototype._getValue_array,Di.prototype._getValue_arrayElement,Di.prototype._getValue_toArray],Di.prototype.SetterByBindingTypeAndVersioning=[[Di.prototype._setValue_direct,Di.prototype._setValue_direct_setNeedsUpdate,Di.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Di.prototype._setValue_array,Di.prototype._setValue_array_setNeedsUpdate,Di.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Di.prototype._setValue_arrayElement,Di.prototype._setValue_arrayElement_setNeedsUpdate,Di.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Di.prototype._setValue_fromArray,Di.prototype._setValue_fromArray_setNeedsUpdate,Di.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],a=class{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}},a.prototype.isMatrix2=!0;function Oi(e,t,n,r){let i=ki(r);switch(n){case 1021:return e*t;case E:return e*t/i.components*i.byteLength;case D:return e*t/i.components*i.byteLength;case O:return e*t*2/i.components*i.byteLength;case k:return e*t*2/i.components*i.byteLength;case 1022:return e*t*3/i.components*i.byteLength;case C:return e*t*4/i.components*i.byteLength;case A:return e*t*4/i.components*i.byteLength;case 33776:case 33777:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case 33778:case 33779:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case 35841:case 35843:return Math.max(e,16)*Math.max(t,8)/4;case 35840:case 35842:return Math.max(e,8)*Math.max(t,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case 37808:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case 37809:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case 37810:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case 37811:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case 37812:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case 37813:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case 37814:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case 37815:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case 37816:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case 37817:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case 37818:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case 37819:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case 37820:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case 37821:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(e/4)*Math.ceil(t/4)*16;case 36283:case 36284:return Math.ceil(e/4)*Math.ceil(t/4)*8;case 36285:case 36286:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function ki(e){switch(e){case h:case 1010:return{byteLength:1,components:1};case g:case 1011:case y:return{byteLength:2,components:1};case b:case x:return{byteLength:2,components:4};case _:case 1013:case v:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?B(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function Ai(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function ji(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Mi={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},Y={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new G},alphaMap:{value:null},alphaMapTransform:{value:new G},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new G}},envmap:{envMap:{value:null},envMapRotation:{value:new G},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new G}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new G}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new G},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new G},normalScale:{value:new U(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new G},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new G}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new G}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new G}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new G},alphaTest:{value:0},uvTransform:{value:new G}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new U(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new G},alphaMap:{value:null},alphaMapTransform:{value:new G},alphaTest:{value:0}}},Ni={basic:{uniforms:vr([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.fog]),vertexShader:Mi.meshbasic_vert,fragmentShader:Mi.meshbasic_frag},lambert:{uniforms:vr([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,Y.lights,{emissive:{value:new wt(0)},envMapIntensity:{value:1}}]),vertexShader:Mi.meshlambert_vert,fragmentShader:Mi.meshlambert_frag},phong:{uniforms:vr([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,Y.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Mi.meshphong_vert,fragmentShader:Mi.meshphong_frag},standard:{uniforms:vr([Y.common,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.roughnessmap,Y.metalnessmap,Y.fog,Y.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Mi.meshphysical_vert,fragmentShader:Mi.meshphysical_frag},toon:{uniforms:vr([Y.common,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.gradientmap,Y.fog,Y.lights,{emissive:{value:new wt(0)}}]),vertexShader:Mi.meshtoon_vert,fragmentShader:Mi.meshtoon_frag},matcap:{uniforms:vr([Y.common,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,{matcap:{value:null}}]),vertexShader:Mi.meshmatcap_vert,fragmentShader:Mi.meshmatcap_frag},points:{uniforms:vr([Y.points,Y.fog]),vertexShader:Mi.points_vert,fragmentShader:Mi.points_frag},dashed:{uniforms:vr([Y.common,Y.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mi.linedashed_vert,fragmentShader:Mi.linedashed_frag},depth:{uniforms:vr([Y.common,Y.displacementmap]),vertexShader:Mi.depth_vert,fragmentShader:Mi.depth_frag},normal:{uniforms:vr([Y.common,Y.bumpmap,Y.normalmap,Y.displacementmap,{opacity:{value:1}}]),vertexShader:Mi.meshnormal_vert,fragmentShader:Mi.meshnormal_frag},sprite:{uniforms:vr([Y.sprite,Y.fog]),vertexShader:Mi.sprite_vert,fragmentShader:Mi.sprite_frag},background:{uniforms:{uvTransform:{value:new G},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Mi.background_vert,fragmentShader:Mi.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new G}},vertexShader:Mi.backgroundCube_vert,fragmentShader:Mi.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Mi.cube_vert,fragmentShader:Mi.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mi.equirect_vert,fragmentShader:Mi.equirect_frag},distance:{uniforms:vr([Y.common,Y.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Mi.distance_vert,fragmentShader:Mi.distance_frag},shadow:{uniforms:vr([Y.lights,Y.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:Mi.shadow_vert,fragmentShader:Mi.shadow_frag}};Ni.physical={uniforms:vr([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new G},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new G},clearcoatNormalScale:{value:new U(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new G},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new G},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new G},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new G},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new G},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new G},transmissionSamplerSize:{value:new U},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new G},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new G},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new G},anisotropyVector:{value:new U},anisotropyMap:{value:null},anisotropyMapTransform:{value:new G}}]),vertexShader:Mi.meshphysical_vert,fragmentShader:Mi.meshphysical_frag};var Pi={r:0,b:0,g:0},Fi=new Ue,Ii=new G;Ii.set(-1,0,0,0,1,0,0,0,1);function Li(e,t,n,r,i,a){let o=new wt(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new Kn(new mr(1,1,1),new Tr({name:`BackgroundCubeMaterial`,uniforms:_r(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Fi.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Ii),l.material.toneMapped=Ae.getTransfer(i.colorSpace)!==z,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new Kn(new gr(2,2),new Tr({name:`BackgroundMaterial`,uniforms:_r(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Ae.getTransfer(i.colorSpace)!==z,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Pi,xr(e)),n.buffers.color.setClear(Pi.r,Pi.g,Pi.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Ri(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function zi(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Bi(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(B(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&B(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Vi(e){let t=this,n=null,r=0,i=!1,a=!1,o=new En,s=new G,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Hi=4,Ui=6,Wi=20,Gi=256,Ki=new li,qi=new wt,Ji=null,Yi=0,Xi=0,Zi=!1,Qi=new W,$i=new W,ea=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Qi}=i;Ji=this._renderer.getRenderTarget(),Yi=this._renderer.getActiveCubeFace(),Xi=this._renderer.getActiveMipmapLevel(),Zi=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=oa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ji,Yi,Xi),this._renderer.xr.enabled=Zi,e.scissorTest=!1,ra(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ji=this._renderer.getRenderTarget(),Yi=this._renderer.getActiveCubeFace(),Xi=this._renderer.getActiveMipmapLevel(),Zi=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:p,minFilter:p,generateMipmaps:!1,type:y,format:C,colorSpace:R,depthBuffer:!1},r=na(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=na(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ta(r)),this._blurMaterial=aa(r,e,t),this._ggxMaterial=ia(r,e,t)}return r}_compileMaterial(e){let t=new Kn(new Sn,e);this._renderer.compile(t,Ki)}_sceneToCubeUV(e,t,n,r,i){let a=new ci(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(qi),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Kn(new mr,new Pn({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(qi),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;ra(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=sa()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=oa());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;ra(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Ki)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Hi?n-d+Hi:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,ra(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Ki),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,ra(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Ki)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];ra(t,3*l*(r>this._lodMax-Hi?r-this._lodMax+Hi:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,Ki)}};function ta(e){let t=[],n=[],r=e,i=e-Hi+1+Ui;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?$i.set(1,r,n):e===1?$i.set(-n,1,-r):e===2?$i.set(-n,r,1):e===3?$i.set(-1,r,-n):e===4?$i.set(-n,-1,r):$i.set(n,r,-1),$i.toArray(l,(e*6+t)*3)}}let u=new Sn;u.setAttribute(`position`,new sn(c,3)),u.setAttribute(`outputDirection`,new sn(l,3)),n.push(new Kn(u,null)),r>Hi&&r--}return{lodMeshes:n,sizeLods:t}}function na(e,t,n){let r=new Be(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function ra(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function ia(e,t,n){return new Tr({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Gi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ca(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function aa(e,t,n){return new Tr({name:`SphericalGaussianBlur`,defines:{SAMPLES:Wi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ca(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function oa(){return new Tr({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:ca(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function sa(){return new Tr({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ca(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var la=class extends Be{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new lr(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new mr(5,5,5),i=new Tr({name:`CubemapFromEquirect`,uniforms:_r(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Kn(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=p),new mi(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function ua(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new la(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new ea(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new ea(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function da(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&de(`WebGLRenderer: `+e+` extension not supported.`),t}}}function fa(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?ln:cn)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function pa(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function ma(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:V(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function ha(e,t,n){let r=new WeakMap,i=new Re;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],p=0;e===!0&&(p=1),n===!0&&(p=2),a===!0&&(p=3);let m=o.attributes.position.count*p,h=1;m>t.maxTextureSize&&(h=Math.ceil(m/t.maxTextureSize),m=t.maxTextureSize);let g=new Float32Array(m*h*4*u),_=new Ve(g,m,h,u);_.type=v,_.needsUpdate=!0;let y=p*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=m*h*4*t;for(let t=0;t<r.count;t++){let s=t*y;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new U(m,h)},r.set(o,d);function f(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,f)}o.addEventListener(`dispose`,f)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function ga(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var _a={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function va(e,t,n,r,i,a){let o=new Be(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new Sn;l.setAttribute(`position`,new un([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new un([0,2,0,0,2,0],2));let u=new Er({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Kn(l,u),f=new li(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,b=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new Be(t,n,{type:y,depthBuffer:!1,stencilBuffer:!1}),c=new Be(t,n,{type:y,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},Ae.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=_a[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var ya=new Le,ba=new dr(1,1),xa=new Ve,Sa=new He,Ca=new lr,wa=[],Ta=[],Ea=new Float32Array(16),Da=new Float32Array(9),Oa=new Float32Array(4);function ka(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=wa[i];if(a===void 0&&(a=new Float32Array(i),wa[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Aa(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function ja(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Ma(e,t){let n=Ta[t];n===void 0&&(n=new Int32Array(t),Ta[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Na(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Pa(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Aa(n,t))return;e.uniform2fv(this.addr,t),ja(n,t)}}function Fa(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Aa(n,t))return;e.uniform3fv(this.addr,t),ja(n,t)}}function Ia(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Aa(n,t))return;e.uniform4fv(this.addr,t),ja(n,t)}}function La(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Aa(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),ja(n,t)}else{if(Aa(n,r))return;Oa.set(r),e.uniformMatrix2fv(this.addr,!1,Oa),ja(n,r)}}function Ra(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Aa(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),ja(n,t)}else{if(Aa(n,r))return;Da.set(r),e.uniformMatrix3fv(this.addr,!1,Da),ja(n,r)}}function za(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Aa(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),ja(n,t)}else{if(Aa(n,r))return;Ea.set(r),e.uniformMatrix4fv(this.addr,!1,Ea),ja(n,r)}}function Ba(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Va(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Aa(n,t))return;e.uniform2iv(this.addr,t),ja(n,t)}}function Ha(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Aa(n,t))return;e.uniform3iv(this.addr,t),ja(n,t)}}function Ua(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Aa(n,t))return;e.uniform4iv(this.addr,t),ja(n,t)}}function Wa(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Ga(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Aa(n,t))return;e.uniform2uiv(this.addr,t),ja(n,t)}}function Ka(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Aa(n,t))return;e.uniform3uiv(this.addr,t),ja(n,t)}}function qa(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Aa(n,t))return;e.uniform4uiv(this.addr,t),ja(n,t)}}function Ja(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(ba.compareFunction=n.isReversedDepthBuffer()?518:515,a=ba):a=ya,n.setTexture2D(t||a,i)}function Ya(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Sa,i)}function Xa(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Ca,i)}function Za(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||xa,i)}function Qa(e){switch(e){case 5126:return Na;case 35664:return Pa;case 35665:return Fa;case 35666:return Ia;case 35674:return La;case 35675:return Ra;case 35676:return za;case 5124:case 35670:return Ba;case 35667:case 35671:return Va;case 35668:case 35672:return Ha;case 35669:case 35673:return Ua;case 5125:return Wa;case 36294:return Ga;case 36295:return Ka;case 36296:return qa;case 35678:case 36198:case 36298:case 36306:case 35682:return Ja;case 35679:case 36299:case 36307:return Ya;case 35680:case 36300:case 36308:case 36293:return Xa;case 36289:case 36303:case 36311:case 36292:return Za}}function $a(e,t){e.uniform1fv(this.addr,t)}function eo(e,t){let n=ka(t,this.size,2);e.uniform2fv(this.addr,n)}function to(e,t){let n=ka(t,this.size,3);e.uniform3fv(this.addr,n)}function no(e,t){let n=ka(t,this.size,4);e.uniform4fv(this.addr,n)}function ro(e,t){let n=ka(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function io(e,t){let n=ka(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function ao(e,t){let n=ka(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function oo(e,t){e.uniform1iv(this.addr,t)}function so(e,t){e.uniform2iv(this.addr,t)}function co(e,t){e.uniform3iv(this.addr,t)}function lo(e,t){e.uniform4iv(this.addr,t)}function uo(e,t){e.uniform1uiv(this.addr,t)}function fo(e,t){e.uniform2uiv(this.addr,t)}function po(e,t){e.uniform3uiv(this.addr,t)}function mo(e,t){e.uniform4uiv(this.addr,t)}function ho(e,t,n){let r=this.cache,i=t.length,a=Ma(n,i);Aa(r,a)||(e.uniform1iv(this.addr,a),ja(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?ba:ya;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function go(e,t,n){let r=this.cache,i=t.length,a=Ma(n,i);Aa(r,a)||(e.uniform1iv(this.addr,a),ja(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Sa,a[e])}function _o(e,t,n){let r=this.cache,i=t.length,a=Ma(n,i);Aa(r,a)||(e.uniform1iv(this.addr,a),ja(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Ca,a[e])}function vo(e,t,n){let r=this.cache,i=t.length,a=Ma(n,i);Aa(r,a)||(e.uniform1iv(this.addr,a),ja(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||xa,a[e])}function yo(e){switch(e){case 5126:return $a;case 35664:return eo;case 35665:return to;case 35666:return no;case 35674:return ro;case 35675:return io;case 35676:return ao;case 5124:case 35670:return oo;case 35667:case 35671:return so;case 35668:case 35672:return co;case 35669:case 35673:return lo;case 5125:return uo;case 36294:return fo;case 36295:return po;case 36296:return mo;case 35678:case 36198:case 36298:case 36306:case 35682:return ho;case 35679:case 36299:case 36307:return go;case 35680:case 36300:case 36308:case 36293:return _o;case 36289:case 36303:case 36311:case 36292:return vo}}var bo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Qa(t.type)}},xo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=yo(t.type)}},So=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Co=/(\w+)(\])?(\[|\.)?/g;function wo(e,t){e.seq.push(t),e.map[t.id]=t}function To(e,t,n){let r=e.name,i=r.length;for(Co.lastIndex=0;;){let a=Co.exec(r),o=Co.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){wo(n,l===void 0?new bo(s,e,t):new xo(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new So(s),wo(n,e)),n=e}}}var Eo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);To(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Do(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Oo=37297,ko=0;function Ao(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var jo=new G;function Mo(e){Ae._getMatrix(jo,Ae.workingColorSpace,e);let t=`mat3( ${jo.elements.map(e=>e.toFixed(4))} )`;switch(Ae.getTransfer(e)){case te:return[t,`LinearTransferOETF`];case z:return[t,`sRGBTransferOETF`];default:return B(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function No(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Ao(e.getShaderSource(t),r)}return i}function Po(e,t){let n=Mo(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Fo={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Io(e,t){let n=Fo[t];return n===void 0?(B(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Lo=new W;function Ro(){return Ae.getLuminanceCoefficients(Lo),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Lo.x.toFixed(4)}, ${Lo.y.toFixed(4)}, ${Lo.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function zo(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Ho).join(`
`)}function Bo(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Vo(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Ho(e){return e!==``}function Uo(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wo(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Go=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ko(e){return e.replace(Go,Jo)}var qo=new Map;function Jo(e,t){let n=Mi[t];if(n===void 0){let e=qo.get(t);if(e!==void 0)n=Mi[e],B(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Ko(n)}var Yo=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xo(e){return e.replace(Yo,Zo)}function Zo(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Qo(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var $o={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function es(e){return $o[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var ts={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function ns(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:ts[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var rs={302:`ENVMAP_MODE_REFRACTION`};function is(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:rs[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var as={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function os(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:as[e.combine]||`ENVMAP_BLENDING_NONE`}function ss(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function cs(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=es(n),l=ns(n),u=is(n),d=os(n),f=ss(n),p=zo(n),m=Bo(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Ho).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Ho).join(`
`),_.length>0&&(_+=`
`)):(g=[Qo(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Ho).join(`
`),_=[Qo(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Mi.tonemapping_pars_fragment,n.toneMapping===0?``:Io(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Mi.colorspace_pars_fragment,Po(`linearToOutputTexel`,n.outputColorSpace),Ro(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Ho).join(`
`)),o=Ko(o),o=Uo(o,n),o=Wo(o,n),s=Ko(s),s=Uo(s,n),s=Wo(s,n),o=Xo(o),s=Xo(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Do(i,i.VERTEX_SHADER,y),S=Do(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=No(i,x,`vertex`),n=No(i,S,`fragment`);V(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):B(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Eo(i,h),T=Vo(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Oo)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ko++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var ls=0,us=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ds(e),t.set(e,n)),n}},ds=class{constructor(e){this.id=ls++,this.code=e,this.usedTimes=0}};function fs(e){return e===1030||e===37490||e===36285}function ps(e,t,n,r,i,a){let o=new et,s=new us,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&B(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=Ni[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),M=e.state.buffers.depth.getReversed(),N=h.isInstancedMesh===!0,P=h.isBatchedMesh===!0,F=!!i.map,I=!!i.matcap,L=!!x,ee=!!i.aoMap,R=!!i.lightMap,te=!!i.bumpMap&&i.wireframe===!1,z=!!i.normalMap,ne=!!i.displacementMap,re=!!i.emissiveMap,ie=!!i.metalnessMap,ae=!!i.roughnessMap,oe=i.anisotropy>0,se=i.clearcoat>0,ce=i.dispersion>0,le=i.retroreflectivity>0,ue=i.iridescence>0,V=i.sheen>0,de=i.transmission>0,fe=oe&&!!i.anisotropyMap,pe=se&&!!i.clearcoatMap,me=se&&!!i.clearcoatNormalMap,he=se&&!!i.clearcoatRoughnessMap,ge=ue&&!!i.iridescenceMap,_e=ue&&!!i.iridescenceThicknessMap,ve=V&&!!i.sheenColorMap,H=V&&!!i.sheenRoughnessMap,ye=!!i.specularMap,be=!!i.specularColorMap,xe=!!i.specularIntensityMap,Se=de&&!!i.transmissionMap,U=de&&!!i.thicknessMap,Ce=!!i.gradientMap,W=!!i.alphaMap,we=i.alphaTest>0,Te=!!i.alphaHash,G=!!i.extensions,Ee=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ee=e.toneMapping);let De={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:P,batchingColor:P&&h._colorsTexture!==null,instancing:N,instancingColor:N&&h.instanceColor!==null,instancingMorph:N&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Ae.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:F,matcap:I,envMap:L,envMapMode:L&&x.mapping,envMapCubeUVHeight:S,aoMap:ee,lightMap:R,bumpMap:te,normalMap:z,displacementMap:ne,emissiveMap:re,normalMapObjectSpace:z&&i.normalMapType===1,normalMapTangentSpace:z&&i.normalMapType===0,packedNormalMap:z&&i.normalMapType===0&&fs(i.normalMap.format),metalnessMap:ie,roughnessMap:ae,anisotropy:oe,anisotropyMap:fe,clearcoat:se,clearcoatMap:pe,clearcoatNormalMap:me,clearcoatRoughnessMap:he,dispersion:ce,retroreflection:le,iridescence:ue,iridescenceMap:ge,iridescenceThicknessMap:_e,sheen:V,sheenColorMap:ve,sheenRoughnessMap:H,specularMap:ye,specularColorMap:be,specularIntensityMap:xe,transmission:de,transmissionMap:Se,thicknessMap:U,gradientMap:Ce,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:W,alphaTest:we,alphaHash:Te,combine:i.combine,mapUv:F&&m(i.map.channel),aoMapUv:ee&&m(i.aoMap.channel),lightMapUv:R&&m(i.lightMap.channel),bumpMapUv:te&&m(i.bumpMap.channel),normalMapUv:z&&m(i.normalMap.channel),displacementMapUv:ne&&m(i.displacementMap.channel),emissiveMapUv:re&&m(i.emissiveMap.channel),metalnessMapUv:ie&&m(i.metalnessMap.channel),roughnessMapUv:ae&&m(i.roughnessMap.channel),anisotropyMapUv:fe&&m(i.anisotropyMap.channel),clearcoatMapUv:pe&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:me&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:H&&m(i.sheenRoughnessMap.channel),specularMapUv:ye&&m(i.specularMap.channel),specularColorMapUv:be&&m(i.specularColorMap.channel),specularIntensityMapUv:xe&&m(i.specularIntensityMap.channel),transmissionMapUv:Se&&m(i.transmissionMap.channel),thicknessMapUv:U&&m(i.thicknessMap.channel),alphaMapUv:W&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(z||oe),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(F||W),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&z===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:M,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ee,decodeVideoTexture:F&&i.map.isVideoTexture===!0&&Ae.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:re&&i.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:G&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(G&&i.extensions.multiDraw===!0||P)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return De.vertexUv1s=c.has(1),De.vertexUv2s=c.has(2),De.vertexUv3s=c.has(3),c.clear(),De}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Ni[t];n=Sr.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new cs(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function ms(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function hs(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function gs(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function _s(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||hs),r.length>1&&r.sort(t||gs),i.length>1&&i.sort(t||gs)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function vs(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new _s,e.set(t,[i])):n>=r.length?(i=new _s,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function ys(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new W,color:new wt};break;case`SpotLight`:n={position:new W,direction:new W,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new W,color:new wt,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new W,skyColor:new wt,groundColor:new wt};break;case`RectAreaLight`:n={color:new wt,position:new W,halfWidth:new W,halfHeight:new W}}return e[t.id]=n,n}}}function bs(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new U};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new U};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new U,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var xs=0;function Ss(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Cs(e){let t=new ys,n=bs(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new W);let i=new W,a=new Ue,o=new Ue;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Ss);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Y.LTC_FLOAT_1,r.rectAreaLTC2=Y.LTC_FLOAT_2):(r.rectAreaLTC1=Y.LTC_HALF_1,r.rectAreaLTC2=Y.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=xs++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function ws(e){let t=new Cs(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Ts(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new ws(e),t.set(n,[a])):r>=i.length?(a=new ws(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Es=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ds=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Os=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],ks=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],As=new Ue,js=new W,Ms=new W;function Ns(e,t,n){let r=new cr,i=new U,a=new U,o=new Re,s=new Or,c=new kr,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},m=new Tr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new U},radius:{value:4}},vertexShader:Es,fragmentShader:Ds}),h=m.clone();h.defines.HORIZONTAL_PASS=1;let g=new Sn;g.setAttribute(`position`,new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Kn(g,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,s){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(B(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.state;m.setBlending(0),m.buffers.depth.getReversed()===!0?m.buffers.color.setClear(0,0,0,0):m.buffers.color.setClear(1,1,1,1),m.buffers.depth.setTest(!0),m.setScissorTest(!1);let h=S!==this.type;h&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){B(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let g=d.getFrameExtents();i.multiply(g),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/g.x),i.x=a.x*g.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/g.y),i.y=a.y*g.y,d.mapSize.y=a.y));let b=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=b,d.map===null||h===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){B(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new Be(i.x,i.y,{format:O,type:y,minFilter:p,magFilter:p,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new dr(i.x,i.y,v),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=w,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=f,d.map.depthTexture.magFilter=f}else l.isPointLight?(d.map=new la(i.x),d.map.depthTexture=new fr(i.x,_)):(d.map=new Be(i.x,i.y),d.map.depthTexture=new dr(i.x,i.y,_)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=w,this.type===1?(d.map.depthTexture.compareFunction=b?518:515,d.map.depthTexture.minFilter=p,d.map.depthTexture.magFilter=p):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=f,d.map.depthTexture.magFilter=f);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let x=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<x;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),js.setFromMatrixPosition(l.matrixWorld),e.position.copy(js),Ms.copy(e.position),Ms.add(Os[t]),e.up.copy(ks[t]),e.lookAt(Ms),e.updateMatrixWorld(),n.makeTranslation(-js.x,-js.y,-js.z),As.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(As,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),m.viewport(o)}r=d.getFrustum(t),E(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&C(d,s),d.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(c,l,d)};function C(n,r){let a=t.update(b);m.defines.VSM_SAMPLES!==n.blurSamples&&(m.defines.VSM_SAMPLES=n.blurSamples,h.defines.VSM_SAMPLES=n.blurSamples,m.needsUpdate=!0,h.needsUpdate=!0),n.mapPass===null?n.mapPass=new Be(i.x,i.y,{format:O,type:y}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),m.uniforms.shadow_pass.value=n.map.depthTexture,m.uniforms.resolution.value.set(n.map.width,n.map.height),m.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,m,b,null),h.uniforms.shadow_pass.value=n.mapPass.texture,h.uniforms.resolution.value.set(n.map.width,n.map.height),h.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,h,b,null)}function T(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function E(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=T(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=T(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)E(c[e],i,a,o,s)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Ps(e,t){function n(){let t=!1,n=new Re,r=null,i=new Re(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?ie(e.DEPTH_TEST):ae(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=pe[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?ie(e.STENCIL_TEST):ae(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new wt(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,P=0,F=e.getParameter(e.VERSION);F.indexOf(`WebGL`)===-1?F.indexOf(`OpenGL ES`)!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),N=P>=2):(P=parseFloat(/^WebGL (\d)/.exec(F)[1]),N=P>=1);let I=null,L={},ee=e.getParameter(e.SCISSOR_BOX),R=e.getParameter(e.VIEWPORT),te=new Re().fromArray(ee),z=new Re().fromArray(R);function ne(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let re={};re[e.TEXTURE_2D]=ne(e.TEXTURE_2D,e.TEXTURE_2D,1),re[e.TEXTURE_CUBE_MAP]=ne(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[e.TEXTURE_2D_ARRAY]=ne(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),re[e.TEXTURE_3D]=ne(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),ie(e.DEPTH_TEST),o.setFunc(3),fe(!1),me(1),ie(e.CULL_FACE),B(0);function ie(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ae(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function oe(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function se(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function ce(t){return h!==t&&(e.useProgram(t),h=t,!0)}let le={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};le[103]=e.MIN,le[104]=e.MAX;let ue={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function B(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(ae(e.BLEND),g=!1);else if(g===!1&&(ie(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:V(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:V(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:V(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:V(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a=a||n,o=o||r,s=s||i,(n!==v||a!==x)&&(e.blendEquationSeparate(le[n],le[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ue[r],ue[i],ue[o],ue[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function de(t,n){t.side===2?ae(e.CULL_FACE):ie(e.CULL_FACE);let r=t.side===1;n&&(r=!r),fe(r),t.blending===1&&t.transparent===!1?B(0):B(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),ge(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?ie(e.SAMPLE_ALPHA_TO_COVERAGE):ae(e.SAMPLE_ALPHA_TO_COVERAGE)}function fe(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function me(t){t===0?ae(e.CULL_FACE):(ie(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function he(t){t!==k&&(N&&e.lineWidth(t),k=t)}function ge(t,n,r){t?(ie(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):ae(e.POLYGON_OFFSET_FILL)}function _e(t){t?ie(e.SCISSOR_TEST):ae(e.SCISSOR_TEST)}function ve(t){t===void 0&&(t=e.TEXTURE0+M-1),I!==t&&(e.activeTexture(t),I=t)}function H(t,n,r){r===void 0&&(r=I===null?e.TEXTURE0+M-1:I);let i=L[r];i===void 0&&(i={type:void 0,texture:void 0},L[r]=i),(i.type!==t||i.texture!==n)&&(I!==r&&(e.activeTexture(r),I=r),e.bindTexture(t,n||re[t]),i.type=t,i.texture=n)}function ye(){let t=L[I];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function be(){try{e.compressedTexImage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function xe(){try{e.compressedTexImage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Se(){try{e.texSubImage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function U(){try{e.texSubImage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Ce(){try{e.compressedTexSubImage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function W(){try{e.compressedTexSubImage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function we(){try{e.texStorage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Te(){try{e.texStorage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function G(){try{e.texImage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Ee(){try{e.texImage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function De(t){return d[t]===void 0?e.getParameter(t):d[t]}function Oe(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function ke(t){te.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),te.copy(t))}function Ae(t){z.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),z.copy(t))}function je(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function K(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Me(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},I=null,L={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new wt(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,te.set(0,0,e.canvas.width,e.canvas.height),z.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:ie,disable:ae,bindFramebuffer:oe,drawBuffers:se,useProgram:ce,setBlending:B,setMaterial:de,setFlipSided:fe,setCullFace:me,setLineWidth:he,setPolygonOffset:ge,setScissorTest:_e,activeTexture:ve,bindTexture:H,unbindTexture:ye,compressedTexImage2D:be,compressedTexImage3D:xe,texImage2D:G,texImage3D:Ee,pixelStorei:Oe,getParameter:De,updateUBOMapping:je,uniformBlockBinding:K,texStorage2D:we,texStorage3D:Te,texSubImage2D:Se,texSubImage3D:U,compressedTexSubImage2D:Ce,compressedTexSubImage3D:W,scissor:ke,viewport:Ae,reset:Me}}function Fs(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),h=new U,g=new WeakMap,_=new Set,v,y=new WeakMap,b=!1;try{b=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function x(e,t){return b?new OffscreenCanvas(e,t):oe(`canvas`)}function S(e,t,n){let r=1,i=De(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);v===void 0&&(v=x(n,a));let o=t?x(n,a):v;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),B(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&B(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function C(e){return e.generateMipmaps}function w(t){e.generateMipmap(t)}function E(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function D(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];B(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||B(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?te:Ae.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function O(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,B(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function k(e,t){return C(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function A(e){let t=e.target;t.removeEventListener(`dispose`,A),M(t),t.isVideoTexture&&g.delete(t),t.isHTMLTexture&&_.delete(t)}function j(e){let t=e.target;t.removeEventListener(`dispose`,j),P(t)}function M(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=y.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&N(e),Object.keys(i).length===0&&y.delete(n)}r.remove(e)}function N(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=y.get(i);delete a[n.__cacheKey],o.memory.textures--}function P(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let F=0;function I(){F=0}function L(){return F}function ee(e){F=e}function R(){let e=F;return e>=i.maxTextures&&B(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),F+=1,e}function z(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ne(t,i){let a=r.get(t);if(t.isVideoTexture&&G(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)B(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)B(`WebGLRenderer: Texture marked for update but image is incomplete`);else{me(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function re(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?me(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function ie(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?me(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function ae(t,i){let a=r.get(t);t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version?he(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let se={[l]:e.REPEAT,[u]:e.CLAMP_TO_EDGE,[d]:e.MIRRORED_REPEAT},ce={[f]:e.NEAREST,1004:e.NEAREST_MIPMAP_NEAREST,1005:e.NEAREST_MIPMAP_LINEAR,[p]:e.LINEAR,1007:e.LINEAR_MIPMAP_NEAREST,[m]:e.LINEAR_MIPMAP_LINEAR},le={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ue(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&B(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,se[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,se[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,se[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ce[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ce[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,le[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function de(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,A));let i=n.source,a=y.get(i);a===void 0&&(a={},y.set(i,a));let s=z(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&N(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function fe(e,t,n){return Math.floor(Math.floor(e/n)/t)}function pe(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=fe(n.start,r.width,4),c=fe(t.start,r.width,4);n.start<=i+1&&a===c&&fe(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function me(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=de(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let d=r.get(u);if(u.version!==d.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=Ae.getPrimaries(Ae.workingColorSpace),r=o.colorSpace===``?null:Ae.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=S(o.image,!1,i.maxTextureSize);t=Ee(o,t);let r=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=D(o.internalFormat,r,f,o.normalized,o.colorSpace,o.isVideoTexture);ue(c,o);let m,h=o.mipmaps,g=o.isVideoTexture!==!0,v=d.__version===void 0||l===!0,y=u.dataReady,b=k(o,t);if(o.isDepthTexture)p=O(o.format===T,o.type),v&&(g?n.texStorage2D(e.TEXTURE_2D,1,p,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,r,f,null));else if(o.isDataTexture){if(h.length>0){g&&v&&n.texStorage2D(e.TEXTURE_2D,b,p,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)m=h[t],g?y&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,f,m.data):n.texImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,r,f,m.data);o.generateMipmaps=!1}else g?(v&&n.texStorage2D(e.TEXTURE_2D,b,p,t.width,t.height),y&&pe(o,t,r,f)):n.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,r,f,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){g&&v&&n.texStorage3D(e.TEXTURE_2D_ARRAY,b,p,h[0].width,h[0].height,t.depth);for(let i=0,a=h.length;i<a;i++)if(m=h[i],o.format!==1023){if(r!==null){if(g){if(y){if(o.layerUpdates.size>0){let t=Oi(m.width,m.height,o.format,o.type);for(let a of o.layerUpdates){let o=m.data.subarray(a*t/m.data.BYTES_PER_ELEMENT,(a+1)*t/m.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,m.width,m.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,m.width,m.height,t.depth,r,m.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,p,m.width,m.height,t.depth,0,m.data,0,0)}else B(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?y&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,m.width,m.height,t.depth,r,f,m.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,p,m.width,m.height,t.depth,0,r,f,m.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{g&&v&&n.texStorage2D(e.TEXTURE_2D,b,p,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)m=h[t],o.format===1023?g?y&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,f,m.data):n.texImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,r,f,m.data):r===null?B(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?y&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,m.data):n.compressedTexImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,m.data)}}else if(o.isDataArrayTexture){if(g){if(v&&n.texStorage3D(e.TEXTURE_2D_ARRAY,b,p,t.width,t.height,t.depth),y){if(o.layerUpdates.size>0){let i=Oi(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,f,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,f,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,p,t.width,t.height,t.depth,0,r,f,t.data)}else if(o.isData3DTexture)g?(v&&n.texStorage3D(e.TEXTURE_3D,b,p,t.width,t.height,t.depth),y&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,f,t.data)):n.texImage3D(e.TEXTURE_3D,0,p,t.width,t.height,t.depth,0,r,f,t.data);else if(o.isFramebufferTexture){if(v){if(g)n.texStorage2D(e.TEXTURE_2D,b,p,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<b;t++)n.texImage2D(e.TEXTURE_2D,t,p,i,a,0,r,f,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),_.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of _)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&v){let t=De(h[0]);n.texStorage2D(e.TEXTURE_2D,b,p,t.width,t.height)}for(let t=0,i=h.length;t<i;t++)m=h[t],g?y&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,f,m):n.texImage2D(e.TEXTURE_2D,t,p,r,f,m);o.generateMipmaps=!1}else if(g){if(v){let r=De(t);n.texStorage2D(e.TEXTURE_2D,b,p,r.width,r.height)}y&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,f,t)}else n.texImage2D(e.TEXTURE_2D,0,p,r,f,t);C(o)&&w(c),d.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function he(t,o,s){if(o.image.length!==6)return;let c=de(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=Ae.getPrimaries(Ae.workingColorSpace),r=o.colorSpace===``?null:Ae.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=S(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=Ee(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),v=D(o.internalFormat,g,_,o.normalized,o.colorSpace),y=o.isVideoTexture!==!0,b=u.__version===void 0||c===!0,x=l.dataReady,T=k(o,h);ue(e.TEXTURE_CUBE_MAP,o);let E;if(f){y&&b&&n.texStorage2D(e.TEXTURE_CUBE_MAP,T,v,h.width,h.height);for(let t=0;t<6;t++){E=m[t].mipmaps;for(let r=0;r<E.length;r++){let i=E[r];o.format===1023?y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?B(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(E=o.mipmaps,y&&b){E.length>0&&T++;let t=De(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,T,v,t.width,t.height)}for(let t=0;t<6;t++)if(p){y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<E.length;r++){let i=E[r].image[t].image;y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,i.width,i.height,0,g,_,i.data)}}else{y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,m[t]);for(let r=0;r<E.length;r++){let i=E[r];y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,g,_,i.image[t])}}}C(o)&&w(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ge(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=D(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Te(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,we(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function _e(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=O(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Te(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,we(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,we(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=D(o.internalFormat,c,l,o.normalized,o.colorSpace);Te(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,we(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,we(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ve(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,A)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),ue(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else ne(i.depthTexture,0);let u=l.__webglTexture,d=we(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)Te(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)Te(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function H(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)ve(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?ve(i.__webglFramebuffer[0],t,0):ve(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),_e(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),_e(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ye(t,n,i){let a=r.get(t);n!==void 0&&ge(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&H(t)}function be(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,j);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&Te(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=D(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=we(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),_e(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),ue(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)ge(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else ge(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);C(i)&&w(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),ue(c,a),ge(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),C(a)&&w(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),ue(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)ge(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else ge(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);C(i)&&w(r),n.unbindTexture()}t.depthBuffer&&H(t)}function xe(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(C(a)){let t=E(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),w(t),n.unbindTexture()}}}let Se=[],Ce=[];function W(t){if(t.samples>0){if(Te(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(Se.length=0,Ce.length=0,Se.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(Se.push(l),Ce.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ce)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Se))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function we(e){return Math.min(i.maxSamples,e.samples)}function Te(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function G(e){let t=o.render.frame;g.get(e)!==t&&(g.set(e,t),e.update())}function Ee(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Ae.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&B(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):V(`WebGLTextures: Unsupported texture color space:`,n)),t}function De(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(h.width=e.naturalWidth||e.width,h.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(h.width=e.displayWidth,h.height=e.displayHeight):(h.width=e.width,h.height=e.height),h}this.allocateTextureUnit=R,this.resetTextureUnits=I,this.getTextureUnits=L,this.setTextureUnits=ee,this.setTexture2D=ne,this.setTexture2DArray=re,this.setTexture3D=ie,this.setTextureCube=ae,this.rebindTextures=ye,this.setupRenderTarget=be,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=H,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Te,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Is(e,t){function n(n,r=``){let i,a=Ae.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Ls=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rs=`
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

}`,zs=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new pr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Tr({vertexShader:Ls,fragmentShader:Rs,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Kn(new gr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Bs=class extends me{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,g=new zs,v={},y=t.getContextAttributes(),b=null,x=null,E=[],D=[],O=new U,k=null,A=null,j=new ci;j.viewport=new Re;let M=new ci;M.viewport=new Re;let N=[j,M],P=new hi,F=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=E[e];return t===void 0&&(t=new yt,E[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=E[e];return t===void 0&&(t=new yt,E[e]=t),t.getGripSpace()},this.getHand=function(e){let t=E[e];return t===void 0&&(t=new yt,E[e]=t),t.getHandSpace()};function L(e){let t=D.indexOf(e.inputSource);if(t===-1)return;let n=E[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ee(){r.removeEventListener(`select`,L),r.removeEventListener(`selectstart`,L),r.removeEventListener(`selectend`,L),r.removeEventListener(`squeeze`,L),r.removeEventListener(`squeezestart`,L),r.removeEventListener(`squeezeend`,L),r.removeEventListener(`end`,ee),r.removeEventListener(`inputsourceschange`,R);for(let e=0;e<E.length;e++){let t=D[e];t!==null&&(D[e]=null,E[e].disconnect(t))}F=null,I=null,g.reset();for(let e in v)delete v[e];if(e.setRenderTarget(b),f=null,d=null,u=null,r=null,x=null,se.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(O.width,O.height,!1),A!==null){let e=A.camera;e.fov=A.fov,e.zoom=A.zoom,e.updateProjectionMatrix(),A=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&B(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&B(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(b=e.getRenderTarget(),r.addEventListener(`select`,L),r.addEventListener(`selectstart`,L),r.addEventListener(`selectend`,L),r.addEventListener(`squeeze`,L),r.addEventListener(`squeezestart`,L),r.addEventListener(`squeezeend`,L),r.addEventListener(`end`,ee),r.addEventListener(`inputsourceschange`,R),y.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(O),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;y.depth&&(o=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=y.stencil?T:w,a=y.stencil?S:_);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Be(d.textureWidth,d.textureHeight,{format:C,type:h,depthTexture:new dr(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Be(f.framebufferWidth,f.framebufferHeight,{format:C,type:h,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),se.setContext(r),se.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function R(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=D.indexOf(n);r>=0&&(D[r]=null,E[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=D.indexOf(n);if(r===-1){for(let e=0;e<E.length;e++)if(e>=D.length){D.push(n),r=e;break}else if(D[e]===null){D[e]=n,r=e;break}if(r===-1)break}let i=E[r];i&&i.connect(n)}}let te=new W,z=new W;function ne(e,t,n){te.setFromMatrixPosition(t.matrixWorld),z.setFromMatrixPosition(n.matrixWorld);let r=te.distanceTo(z),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function re(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;g.texture!==null&&(g.depthNear>0&&(t=g.depthNear),g.depthFar>0&&(n=g.depthFar)),P.near=M.near=j.near=t,P.far=M.far=j.far=n,(F!==P.near||I!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),F=P.near,I=P.far),P.layers.mask=e.layers.mask|6,j.layers.mask=P.layers.mask&-5,M.layers.mask=P.layers.mask&-3;let i=e.parent,a=P.cameras;re(P,i);for(let e=0;e<a.length;e++)re(a[e],i);a.length===2?ne(P,j,M):P.projectionMatrix.copy(j.projectionMatrix),A===null&&e.isPerspectiveCamera&&(A={camera:e,fov:e.fov,zoom:e.zoom}),ie(e,P,i)};function ie(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=_e*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(P)},this.getCameraTexture=function(e){return v[e]};let ae=null;function oe(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let i=!1;t.length!==P.cameras.length&&(P.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(x,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(x))}let o=N[n];o===void 0&&(o=new ci,o.layers.enable(n),o.viewport=new Re,N[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(P.matrix.copy(o.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),i===!0&&P.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&g.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new pr,v[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<E.length;e++){let t=D[e],n=E[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ae&&ae(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let se=new Ai;se.setAnimationLoop(oe),this.setAnimationLoop=function(e){ae=e},this.dispose=function(){}}},Vs=new Ue,Hs=new G;Hs.set(-1,0,0,0,1,0,0,0,1);function Us(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,xr(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Vs.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Hs),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Ws(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return V(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?B(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):B(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Gs=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ks=null;function qs(){return Ks===null&&(Ks=new Yn(Gs,16,16,O,y),Ks.name=`DFG_LUT`,Ks.minFilter=p,Ks.magFilter=p,Ks.wrapS=u,Ks.wrapT=u,Ks.generateMipmaps=!1,Ks.needsUpdate=!0),Ks}var Js=class{constructor(e={}){let{canvas:t=se(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=h}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let v=f,C=new Set([A,k,D]),w=new Set([h,_,g,S,b,x]),T=new Uint32Array(4),E=new Int32Array(4),O=new W,j=null,M=null,N=[],P=[],F=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,L=!1,R=null,te=null,z=null,ne=null;this._outputColorSpace=ee;let ie=0,ae=0,oe=null,ce=-1,ue=null,de=new Re,pe=new Re,me=null,he=new wt(0),ge=0,_e=t.width,ve=t.height,H=1,ye=null,be=null,xe=new Re(0,0,_e,ve),Se=new Re(0,0,_e,ve),U=!1,Ce=new cr,we=!1,Te=!1,G=new Ue,Ee=new W,De=new Re,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ke=!1;function je(){return oe===null?H:1}let K=n;function Me(e,n){return t.getContext(e,n)}let Ne,Pe,q,Fe,J,Ie,Le,ze,Ve,He,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,et,tt,nt;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,at,!1),t.addEventListener(`webglcontextrestored`,ot,!1),t.addEventListener(`webglcontextcreationerror`,st,!1),K===null){let t=`webgl2`;if(K=Me(t,e),K===null)throw Me(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}rt()}catch(e){throw t.removeEventListener(`webglcontextlost`,at,!1),t.removeEventListener(`webglcontextrestored`,ot,!1),t.removeEventListener(`webglcontextcreationerror`,st,!1),V(`WebGLRenderer: `+e.message),e}function rt(){Ne=new da(K),Ne.init(),et=new Is(K,Ne),Pe=new Bi(K,Ne,e,et),q=new Ps(K,Ne),Pe.reversedDepthBuffer&&d&&q.buffers.depth.setReversed(!0),te=K.createFramebuffer(),z=K.createFramebuffer(),ne=K.createFramebuffer(),Fe=new ma(K),J=new ms,Ie=new Fs(K,Ne,q,J,Pe,et,Fe),Le=new ua(I),ze=new ji(K),tt=new Ri(K,ze),Ve=new fa(K,ze,Fe,tt),He=new ga(K,Ve,ze,tt,Fe),Ze=new ha(K,Pe,Ie),Je=new Vi(J),We=new ps(I,Le,Ne,Pe,tt,Je),Ge=new Us(I,J),Ke=new vs,qe=new Ts(Ne),Xe=new Li(I,Le,q,He,p,s),Ye=new Ns(I,He,Pe),nt=new Ws(K,Fe,Pe,q),Qe=new zi(K,Ne,Fe),$e=new pa(K,Ne,Fe),Fe.programs=We.programs,I.capabilities=Pe,I.extensions=Ne,I.properties=J,I.renderLists=Ke,I.shadowMap=Ye,I.state=q,I.info=Fe}v!==1009&&(F=new va(v,t.width,t.height,o,r,i));let it=new Bs(I,K);this.xr=it,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){let e=Ne.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ne.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(e){e!==void 0&&(H=e,this.setSize(_e,ve,!1))},this.getSize=function(e){return e.set(_e,ve)},this.setSize=function(e,n,r=!0){it.isPresenting?B(`WebGLRenderer: Can't change size while VR device is presenting.`):(_e=e,ve=n,t.width=Math.floor(e*H),t.height=Math.floor(n*H),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(_e*H,ve*H).floor()},this.setDrawingBufferSize=function(e,n,r){_e=e,ve=n,H=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(v===1009)V(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){B(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}F.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(de)},this.getViewport=function(e){return e.copy(xe)},this.setViewport=function(e,t,n,r){e.isVector4?xe.set(e.x,e.y,e.z,e.w):xe.set(e,t,n,r),q.viewport(de.copy(xe).multiplyScalar(H).round())},this.getScissor=function(e){return e.copy(Se)},this.setScissor=function(e,t,n,r){e.isVector4?Se.set(e.x,e.y,e.z,e.w):Se.set(e,t,n,r),q.scissor(pe.copy(Se).multiplyScalar(H).round())},this.getScissorTest=function(){return U},this.setScissorTest=function(e){q.setScissorTest(U=e)},this.setOpaqueSort=function(e){ye=e},this.setTransparentSort=function(e){be=e},this.getClearColor=function(e){return e.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor(...arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(oe!==null){let t=oe.texture.format;e=C.has(t)}if(e){let e=oe.texture.type,t=w.has(e),n=Xe.getClearColor(),r=Xe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,K.clearBufferuiv(K.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,K.clearBufferiv(K.COLOR,0,E))}else r|=K.COLOR_BUFFER_BIT}t&&(r|=K.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&K.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),R=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,at,!1),t.removeEventListener(`webglcontextrestored`,ot,!1),t.removeEventListener(`webglcontextcreationerror`,st,!1),Xe.dispose(),Ke.dispose(),qe.dispose(),J.dispose(),Le.dispose(),He.dispose(),tt.dispose(),nt.dispose(),We.dispose(),it.dispose(),it.removeEventListener(`sessionstart`,mt),it.removeEventListener(`sessionend`,ht),gt.stop()};function at(e){e.preventDefault(),le(`WebGLRenderer: Context Lost.`),L=!0}function ot(){le(`WebGLRenderer: Context Restored.`),L=!1;let e=Fe.autoReset,t=Ye.enabled,n=Ye.autoUpdate,r=Ye.needsUpdate,i=Ye.type;rt(),Fe.autoReset=e,Ye.enabled=t,Ye.autoUpdate=n,Ye.needsUpdate=r,Ye.type=i}function st(e){V(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ct(e){let t=e.target;t.removeEventListener(`dispose`,ct),lt(t)}function lt(e){ut(e),J.remove(e)}function ut(e){let t=J.get(e).programs;t!==void 0&&(t.forEach(function(e){We.releaseProgram(e)}),e.isShaderMaterial&&We.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Oe);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Dt(e,t,n,r,i);q.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ve.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;tt.setup(i,r,s,n,c);let h,g=Qe;if(c!==null&&(h=ze.get(c),g=$e,g.setIndex(h)),i.isMesh)r.wireframe===!0?(q.setLineWidth(r.wireframeLinewidth*je()),g.setMode(K.LINES)):g.setMode(K.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),q.setLineWidth(e*je()),i.isLineSegments?g.setMode(K.LINES):i.isLineLoop?g.setMode(K.LINE_LOOP):g.setMode(K.LINE_STRIP)}else i.isPoints?g.setMode(K.POINTS):i.isSprite&&g.setMode(K.TRIANGLES);if(i.isBatchedMesh){if(Ne.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?ze.get(c).bytesPerElement:1,o=J.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(K,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function dt(e,t,n,r){R!==null&&e.isNodeMaterial&&R.setObject(r,e),we===!0&&Je.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,St(e,t,r),e.side=0,e.needsUpdate=!0,St(e,t,r),e.side=2):St(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),R!==null&&R.renderStart(e,t,n),M=qe.get(n),M.init(t),P.push(M),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(M.pushLight(e),e.castShadow&&M.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(M.pushLight(e),e.castShadow&&M.pushShadow(e))}),M.setupLights(),R!==null&&R.updateLights(M.state.lightsArray),Te=this.localClippingEnabled,we=Je.init(this.clippingPlanes,Te),we===!0&&Je.setGlobalState(this.clippingPlanes,t),R!==null&&Ye.render(M.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];dt(o,n,t,e),r.add(o)}else dt(i,n,t,e),r.add(i)}}),M=P.pop(),R!==null&&R.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=J.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Ne.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let ft=null;function pt(e){ft&&ft(e)}function mt(){gt.stop()}function ht(){gt.start()}let gt=new Ai;gt.setAnimationLoop(pt),typeof self<`u`&&gt.setContext(self),this.setAnimationLoop=function(e){ft=e,it.setAnimationLoop(e),e===null?gt.stop():gt.start()},it.addEventListener(`sessionstart`,mt),it.addEventListener(`sessionend`,ht),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){V(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(L===!0)return;R!==null&&R.renderStart(e,t);let n=it.enabled===!0&&it.isPresenting===!0,r=F!==null&&(oe===null||n)&&F.begin(I,oe);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(it.cameraAutoUpdate===!0&&it.updateCamera(t),t=it.getCamera()),e.isScene===!0&&e.onBeforeRender(I,e,t,oe),M=qe.get(e,P.length),M.init(t),M.state.textureUnits=Ie.getTextureUnits(),P.push(M),G.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),Ce.setFromProjectionMatrix(G,re,t.reversedDepth),Te=this.localClippingEnabled,we=Je.init(this.clippingPlanes,Te),j=Ke.get(e,N.length),j.init(),N.push(j),it.enabled===!0&&it.isPresenting===!0){let e=I.xr.getDepthSensingMesh();e!==null&&_t(e,t,-1/0,I.sortObjects)}_t(e,t,0,I.sortObjects),j.finish(),R!==null&&R.updateLights(M.state.lightsArray),I.sortObjects===!0&&j.sort(ye,be),ke=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,ke&&Xe.addToRenderList(j,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),we===!0&&Je.beginShadows();let i=M.state.shadowsArray;if(Ye.render(i,e,t),we===!0&&Je.endShadows(),(r&&F.hasRenderPass())===!1){let n=j.opaque,r=j.transmissive;if(M.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];yt(n,r,e,a)}ke&&Xe.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];vt(j,e,n,n.viewport)}}else r.length>0&&yt(n,r,e,t),ke&&Xe.render(e),vt(j,e,t)}oe!==null&&ae===0&&(Ie.updateMultisampleRenderTarget(oe),Ie.updateRenderTargetMipmap(oe)),r&&F.end(I),e.isScene===!0&&e.onAfterRender(I,e,t),tt.resetDefaultState(),ce=-1,ue=null,P.pop(),P.length>0?(M=P[P.length-1],Ie.setTextureUnits(M.state.textureUnits),we===!0&&Je.setGlobalState(I.clippingPlanes,M.state.camera)):M=null,N.pop(),j=N.length>0?N[N.length-1]:null,R!==null&&R.renderEnd()};function _t(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)M.pushLightProbeGrid(e);else if(e.isLight)M.pushLight(e),e.castShadow&&M.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(Ce)){r&&De.setFromMatrixPosition(e.matrixWorld).applyMatrix4(G);let i=He.update(e),a=e.material;a.visible&&j.push(e,i,a,n,De.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(Ce))){let i=He.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),De.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),De.copy(e.boundingSphere.center)),De.applyMatrix4(e.matrixWorld).applyMatrix4(G)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&j.push(e,i,c,n,De.z,s,t)}}else a.visible&&j.push(e,i,a,n,De.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)_t(i[e],t,n,r)}function vt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;M.setupLightsView(n),we===!0&&Je.setGlobalState(I.clippingPlanes,n),r&&q.viewport(de.copy(r)),i.length>0&&bt(i,t,n),a.length>0&&bt(a,t,n),o.length>0&&bt(o,t,n),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function yt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[r.id]===void 0){let e=Ne.has(`EXT_color_buffer_half_float`)||Ne.has(`EXT_color_buffer_float`);M.state.transmissionRenderTarget[r.id]=new Be(1,1,{generateMipmaps:!0,type:e?y:h,minFilter:m,samples:Math.max(4,Pe.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ae.workingColorSpace})}let a=M.state.transmissionRenderTarget[r.id],o=r.viewport||de;a.setSize(o.z*I.transmissionResolutionScale,o.w*I.transmissionResolutionScale);let s=I.getRenderTarget(),c=I.getActiveCubeFace(),l=I.getActiveMipmapLevel();I.setRenderTarget(a),I.getClearColor(he),ge=I.getClearAlpha(),ge<1&&I.setClearColor(16777215,.5),I.clear(),ke&&Xe.render(n);let u=I.toneMapping;I.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),M.setupLightsView(r),we===!0&&Je.setGlobalState(I.clippingPlanes,r),bt(e,n,r),Ie.updateMultisampleRenderTarget(a),Ie.updateRenderTargetMipmap(a),Ne.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,xt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Ie.updateMultisampleRenderTarget(a),Ie.updateRenderTargetMipmap(a))}I.setRenderTarget(s,c,l),I.setClearColor(he,ge),d!==void 0&&(r.viewport=d),I.toneMapping=u}function bt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&xt(o,t,n,s,l,c)}}function xt(e,t,n,r,i,a){R!==null&&i.isNodeMaterial&&R.setObject(e,i),e.onBeforeRender(I,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(I,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,I.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,I.renderBufferDirect(n,t,r,i,e,a),i.side=2):I.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(I,t,n,r,i,a)}function St(e,t,n){t.isScene!==!0&&(t=Oe);let r=J.get(e),i=M.state.lights,a=M.state.shadowsArray,o=i.state.version,s=We.getParameters(e,i.state,a,t,n,M.state.lightProbeGridArray),c=We.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Le.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ct),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Tt(e,s),d}else s.uniforms=We.getUniforms(e),R!==null&&e.isNodeMaterial&&R.build(e,n,s),e.onBeforeCompile(s,I),d=We.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Je.uniform),Tt(e,s),r.needsLights=kt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=M.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Ct(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Eo.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Tt(e,t){let n=J.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Et(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];O.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(O))return n}return null}function Dt(e,t,n,r,i){t.isScene!==!0&&(t=Oe),Ie.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=oe===null?I.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Ae.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Le.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(h=I.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=J.get(r),y=M.state.lights;if(we===!0&&(Te===!0||e!==ue)){let t=e===ue&&r.id===ce;Je.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Je.numPlanes||v.numIntersection!==Je.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=M.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=St(r,t,i),R&&r.isNodeMaterial&&R.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(q.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==ce&&(ce=r.id,C=!0),v.needsLights){let e=Et(M.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||ue!==e){q.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(K,`projectionMatrix`,e.projectionMatrix),T.setValue(K,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(K,Ee.setFromMatrixPosition(e.matrixWorld)),Pe.logarithmicDepthBuffer&&T.setValue(K,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(K,`isOrthographic`,e.isOrthographicCamera===!0),ue!==e&&(ue=e,C=!0,w=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&T.setValue(K,`sunShadowMap`,y.state.sunShadowMap,Ie),y.state.directionalShadowMap.length>0&&T.setValue(K,`directionalShadowMap`,y.state.directionalShadowMap,Ie),y.state.spotShadowMap.length>0&&T.setValue(K,`spotShadowMap`,y.state.spotShadowMap,Ie),y.state.pointShadowMap.length>0&&T.setValue(K,`pointShadowMap`,y.state.pointShadowMap,Ie)),i.isSkinnedMesh){T.setOptional(K,i,`bindMatrix`),T.setOptional(K,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(K,`boneTexture`,e.boneTexture,Ie))}i.isBatchedMesh&&(T.setOptional(K,i,`batchingTexture`),T.setValue(K,`batchingTexture`,i._matricesTexture,Ie),T.setOptional(K,i,`batchingIdTexture`),T.setValue(K,`batchingIdTexture`,i._indirectTexture,Ie),T.setOptional(K,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(K,`batchingColorTexture`,i._colorsTexture,Ie));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&Ze.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(K,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=qs()),C){if(T.setValue(K,`toneMappingExposure`,I.toneMappingExposure),v.needsLights&&Ot(E,w),a&&r.fog===!0&&Ge.refreshFogUniforms(E,a),Ge.refreshMaterialUniforms(E,r,H,ve,M.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}Eo.upload(K,Ct(v),E,Ie)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Eo.upload(K,Ct(v),E,Ie),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(K,`center`,i.center),T.setValue(K,`modelViewMatrix`,i.modelViewMatrix),T.setValue(K,`normalMatrix`,i.normalMatrix),T.setValue(K,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];nt.update(n,x),nt.bind(n,x)}}return x}function Ot(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function kt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ie},this.getActiveMipmapLevel=function(){return ae},this.getRenderTarget=function(){return oe},this.setRenderTargetTextures=function(e,t,n){let r=J.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),J.get(e.texture).__webglTexture=t,J.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=J.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){oe=e,ie=t,ae=n;let r=null,i=!1,a=!1;if(e){let o=J.get(e);if(o.__useDefaultFramebuffer!==void 0){q.bindFramebuffer(K.FRAMEBUFFER,o.__webglFramebuffer),de.copy(e.viewport),pe.copy(e.scissor),me=e.scissorTest,q.viewport(de),q.scissor(pe),q.setScissorTest(me),ce=-1;return}if(o.__webglFramebuffer===void 0)Ie.setupRenderTarget(e);else if(o.__hasExternalTextures)Ie.rebindTextures(e,J.get(e.texture).__webglTexture,J.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&J.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Ie.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=J.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Ie.useMultisampledRTT(e)===!1?J.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,de.copy(e.viewport),pe.copy(e.scissor),me=e.scissorTest}else de.copy(xe).multiplyScalar(H).floor(),pe.copy(Se).multiplyScalar(H).floor(),me=U;if(n!==0&&(r=te),q.bindFramebuffer(K.FRAMEBUFFER,r)&&q.drawBuffers(e,r),q.viewport(de),q.scissor(pe),q.setScissorTest(me),i){let r=J.get(e.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=J.get(e.textures[t]);K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=J.get(e.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,t.__webglTexture,n)}ce=-1};function At(e){let t=J.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Pe.textureFormatReadable(e.format),t.__typeReadable=Pe.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){V(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=J.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){q.bindFramebuffer(K.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+s);let u=At(o);if(u.__formatReadable===!1){V(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){V(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&K.readPixels(t,n,r,i,et.convert(c),et.convert(l),a)}finally{let e=oe===null?null:J.get(oe).__webglFramebuffer;q.bindFramebuffer(K.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=J.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){q.bindFramebuffer(K.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+s);let d=At(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=K.createBuffer();K.bindBuffer(K.PIXEL_PACK_BUFFER,f),K.bufferData(K.PIXEL_PACK_BUFFER,a.byteLength,K.STREAM_READ),K.readPixels(t,n,r,i,et.convert(l),et.convert(u),0),K.bindBuffer(K.PIXEL_PACK_BUFFER,null);let p=oe===null?null:J.get(oe).__webglFramebuffer;q.bindFramebuffer(K.FRAMEBUFFER,p);let m=K.fenceSync(K.SYNC_GPU_COMMANDS_COMPLETE,0);return K.flush(),await fe(K,m,4),K.bindBuffer(K.PIXEL_PACK_BUFFER,f),K.getBufferSubData(K.PIXEL_PACK_BUFFER,0,a),K.bindBuffer(K.PIXEL_PACK_BUFFER,null),K.deleteBuffer(f),K.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Ie.setTexture2D(e,0),K.copyTexSubImage2D(K.TEXTURE_2D,n,0,0,o,s,i,a),q.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=et.convert(t.format),_=et.convert(t.type),v;t.isData3DTexture?(Ie.setTexture3D(t,0),v=K.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Ie.setTexture2DArray(t,0),v=K.TEXTURE_2D_ARRAY):(Ie.setTexture2D(t,0),v=K.TEXTURE_2D),q.activeTexture(K.TEXTURE0),q.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,t.flipY),q.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),q.pixelStorei(K.UNPACK_ALIGNMENT,t.unpackAlignment);let y=q.getParameter(K.UNPACK_ROW_LENGTH),b=q.getParameter(K.UNPACK_IMAGE_HEIGHT),x=q.getParameter(K.UNPACK_SKIP_PIXELS),S=q.getParameter(K.UNPACK_SKIP_ROWS),C=q.getParameter(K.UNPACK_SKIP_IMAGES);q.pixelStorei(K.UNPACK_ROW_LENGTH,h.width),q.pixelStorei(K.UNPACK_IMAGE_HEIGHT,h.height),q.pixelStorei(K.UNPACK_SKIP_PIXELS,l),q.pixelStorei(K.UNPACK_SKIP_ROWS,u),q.pixelStorei(K.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=J.get(e),r=J.get(t),h=J.get(n.__renderTarget),g=J.get(r.__renderTarget);q.bindFramebuffer(K.READ_FRAMEBUFFER,h.__webglFramebuffer),q.bindFramebuffer(K.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,J.get(e).__webglTexture,i,d+n),K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,J.get(t).__webglTexture,a,m+n)),K.blitFramebuffer(l,u,o,s,f,p,o,s,K.DEPTH_BUFFER_BIT,K.NEAREST);q.bindFramebuffer(K.READ_FRAMEBUFFER,null),q.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||J.has(e)){let n=J.get(e),r=J.get(t);q.bindFramebuffer(K.READ_FRAMEBUFFER,z),q.bindFramebuffer(K.DRAW_FRAMEBUFFER,ne);for(let e=0;e<c;e++)w?K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):K.framebufferTexture2D(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,n.__webglTexture,i),T?K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):K.framebufferTexture2D(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,r.__webglTexture,a),i===0?T?K.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):K.copyTexSubImage2D(v,a,f,p,l,u,o,s):K.blitFramebuffer(l,u,o,s,f,p,o,s,K.COLOR_BUFFER_BIT,K.NEAREST);q.bindFramebuffer(K.READ_FRAMEBUFFER,null),q.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?K.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?K.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):K.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):K.texSubImage2D(K.TEXTURE_2D,a,f,p,o,s,g,_,h);q.pixelStorei(K.UNPACK_ROW_LENGTH,y),q.pixelStorei(K.UNPACK_IMAGE_HEIGHT,b),q.pixelStorei(K.UNPACK_SKIP_PIXELS,x),q.pixelStorei(K.UNPACK_SKIP_ROWS,S),q.pixelStorei(K.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&K.generateMipmap(v),q.unbindTexture()},this.initRenderTarget=function(e){J.get(e).__webglFramebuffer===void 0&&Ie.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Ie.setTextureCube(e,0):e.isData3DTexture?Ie.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Ie.setTexture2DArray(e,0):Ie.setTexture2D(e,0),q.unbindTexture()},this.resetState=function(){ie=0,ae=0,oe=null,q.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return re}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ae._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ae._getUnpackColorSpace()}};function Ys(e){"@babel/helpers - typeof";return Ys=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Ys(e)}function Xs(e,t){if(Ys(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(Ys(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Zs(e){var t=Xs(e,`string`);return Ys(t)==`symbol`?t:t+``}function X(e,t,n){return(t=Zs(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Qs={cross:0,circle:1,square:2,triangle:3,l1:4,r1:5,l2:6,r2:7,share:8,options:9,l3:10,r3:11,up:12,down:13,left:14,right:15},$s={leftX:0,leftY:1,rightX:2,rightY:3},ec=.2,tc=[{action:`Move`,buttons:`Left stick or D-pad`},{action:`Look / turn`,buttons:`Right stick`},{action:`Jump`,buttons:`Cross (✕)`},{action:`Run (hold)`,buttons:`Square (□) or R2`},{action:`Crouch (hold)`,buttons:`Circle (○) or L3`},{action:`Interact / talk`,buttons:`Triangle (△)`},{action:`Pause / continue`,buttons:`Options`},{action:`In menus and questions`,buttons:`D-pad up / down, Cross to pick, Circle to go back`}],nc=`On an Xbox pad: Cross = A, Circle = B, Square = X, Triangle = Y, Options = Menu.`,rc=class{constructor(e=.38,t=.13){X(this,`delay`,void 0),X(this,`every`,void 0),X(this,`held`,0),X(this,`time`,0),this.delay=e,this.every=t}step(e,t){return e===0?(this.held=0,this.time=0,0):e===this.held?(this.time+=t,this.time>=this.delay?(this.time-=this.every,e):0):(this.held=e,this.time=0,e)}reset(){this.held=0,this.time=0}},ic={forward:`Move forward`,back:`Move back`,left:`Move left`,right:`Move right`,jump:`Jump`,run:`Run (hold)`,crouch:`Crouch (hold)`,interact:`Interact`},ac={ArrowUp:`↑`,ArrowDown:`↓`,ArrowLeft:`←`,ArrowRight:`→`,Space:`Space`,ShiftLeft:`Shift (L)`,ShiftRight:`Shift (R)`,ControlLeft:`Ctrl (L)`,ControlRight:`Ctrl (R)`,AltLeft:`Alt (L)`,AltRight:`Alt (R)`,Enter:`Enter`,Tab:`Tab`,Backspace:`Backspace`};function oc(e){return ac[e]?ac[e]:e.startsWith(`Key`)?e.slice(3):e.startsWith(`Digit`)?e.slice(5):e}var sc=2.5,cc=.5,lc=4e6;function uc(e,t=lc){return typeof e==`string`&&e.length<=t&&/^data:image\/(png|jpeg|gif|webp);base64,[A-Za-z0-9+/=]+$/.test(e)}function dc(e){let t=e;if(!t||typeof t!=`object`||!uc(t.image))return;let n=typeof t.seconds==`number`&&Number.isFinite(t.seconds)?t.seconds:sc;return{image:t.image,seconds:Math.min(10,Math.max(cc,n)),background:typeof t.background==`string`&&/^#[0-9a-fA-F]{6}$/.test(t.background)?t.background:`#000000`}}var fc={logoSize:50,background:`dim`,backgroundColor:`#14161b`,accent:`#ffb23e`,startLabel:`Start game`,settingsLabel:`Settings`},pc=e=>typeof e==`string`&&/^#[0-9a-fA-F]{6}$/.test(e);function mc(e,t){return(typeof e==`string`?e.replace(/\s+/g,` `).trim().slice(0,24):``)||t}function hc(e){let t=e;if(!t||typeof t!=`object`)return;let n=uc(t.logo,2e6)?t.logo:void 0,r=uc(t.backgroundImage,4e6)?t.backgroundImage:void 0,i=typeof t.logoSize==`number`&&Number.isFinite(t.logoSize)?t.logoSize:fc.logoSize,a=t.background===`color`||t.background===`picture`?t.background:`dim`,o={...n?{logo:n}:{},logoSize:Math.round(Math.min(100,Math.max(10,i))),background:a===`picture`&&!r?`dim`:a,backgroundColor:pc(t.backgroundColor)?t.backgroundColor.toLowerCase():fc.backgroundColor,...r?{backgroundImage:r}:{},accent:pc(t.accent)?t.accent.toLowerCase():fc.accent,startLabel:mc(t.startLabel,fc.startLabel),settingsLabel:mc(t.settingsLabel,fc.settingsLabel)};return!o.logo&&!o.backgroundImage&&o.logoSize===fc.logoSize&&o.background===fc.background&&o.backgroundColor===fc.backgroundColor&&o.accent===fc.accent&&o.startLabel===fc.startLabel&&o.settingsLabel===fc.settingsLabel?void 0:o}function gc(e){return hc(e)??{...fc}}function _c(e){let t=/^#([0-9a-f]{6})$/i.exec(e);if(!t)return`#1b1e25`;let n=parseInt(t[1],16);return(.2126*(n>>16&255)+.7152*(n>>8&255)+.0722*(n&255))/255>.55?`#1b1e25`:`#ffffff`}function vc(e){let t=1;for(;t<e;)t<<=1;return t}function yc(e,t=64){let n=[...e].sort((e,t)=>t.h-e.h||t.w-e.w||e.key.localeCompare(t.key)),r=n.reduce((e,t)=>Math.max(e,t.w),1),i=n.reduce((e,t)=>e+t.w*t.h,0),a=vc(Math.max(t,r,Math.ceil(Math.sqrt(i)))),o=new Map,s=0,c=0,l=0;for(let e of n)s+e.w>a&&(s=0,c+=l,l=0),o.set(e.key,{x:s,y:c,w:e.w,h:e.h}),s+=e.w,l=Math.max(l,e.h);return{width:a,height:vc(Math.max(1,c+l)),rects:o}}var bc={id:`humanoid-female`,name:`Humanoid (female)`,texture:`Character-Female-Skin.png`,cubes:[{id:`cube-Hips`,name:`Hips`,position:[0,0,0],rotation:[0,0,0],mesh:{verts:[[-.10561,.40594,-.05941],[.10561,.40594,-.05941],[-.10561,.40594,.05941],[.10561,.40594,.05941],[-.09076,.50165,-.05611],[.09076,.50165,-.05611],[-.09076,.50165,.05611],[.09076,.50165,.05611]],faces:[{v:[6,7,5,4],uv:[[23,71],[36,71],[36,63],[23,63]]},{v:[0,1,3,2],uv:[[36,71],[49,71],[49,63],[36,63]]},{v:[0,2,6,4],uv:[[15,77],[23,77],[22.778,71],[15.222,71]]},{v:[2,3,7,6],uv:[[23,77],[36,77],[35.086,71],[23.914,71]]},{v:[3,1,5,7],uv:[[36,77],[44,77],[43.778,71],[36.222,71]]},{v:[1,0,4,5],uv:[[44,77],[57,77],[56.086,71],[44.914,71]]}]},bone:`bone-Hips`},{id:`cube-Waist`,name:`Waist`,position:[0,0,0],rotation:[0,0,0],mesh:{verts:[[-.09076,.50165,-.05611],[.09076,.50165,-.05611],[-.09076,.50165,.05611],[.09076,.50165,.05611],[-.08581,.58086,-.05446],[.08581,.58086,-.05446],[-.08581,.58086,.05446],[.08581,.58086,.05446]],faces:[{v:[6,7,5,4],uv:[[41,86],[52,86],[52,79],[41,79]]},{v:[0,1,3,2],uv:[[52,86],[63,86],[63,79],[52,79]]},{v:[0,2,6,4],uv:[[34,91],[41,91],[40.897,86],[34.103,86]]},{v:[2,3,7,6],uv:[[41,91],[52,91],[51.7,86],[41.3,86]]},{v:[3,1,5,7],uv:[[52,91],[59,91],[58.897,86],[52.103,86]]},{v:[1,0,4,5],uv:[[59,91],[70,91],[69.7,86],[59.3,86]]}]},bone:`bone-Waist`},{id:`cube-Chest`,name:`Chest`,position:[0,0,0],rotation:[0,0,0],mesh:{verts:[[-.08746,.58086,-.05611],[.08746,.58086,-.05611],[-.08746,.58086,.05611],[.08746,.58086,.05611],[-.10891,.76568,-.06436],[.10891,.76568,-.06436],[-.10891,.76568,.06436],[.10891,.76568,.06436]],faces:[{v:[6,7,5,4],uv:[[59,8],[73,8],[73,0],[59,0]]},{v:[0,1,3,2],uv:[[73,8],[87,8],[87,0],[73,0]]},{v:[0,2,6,4],uv:[[51.513,20],[58.487,20],[59,8],[51,8]]},{v:[2,3,7,6],uv:[[60.379,20],[71.621,20],[73,8],[59,8]]},{v:[3,1,5,7],uv:[[73.513,20],[80.487,20],[81,8],[73,8]]},{v:[1,0,4,5],uv:[[82.379,20],[93.621,20],[95,8],[81,8]]}]},bone:`bone-Chest`},{id:`cube-Neck`,name:`Neck`,position:[0,0,0],rotation:[0,0,0],mesh:{verts:[[-.0297,.75908,-.0297],[.0297,.75908,-.0297],[-.0297,.75908,.0297],[.0297,.75908,.0297],[-.02805,.78878,-.02805],[.02805,.78878,-.02805],[-.02805,.78878,.02805],[.02805,.78878,.02805]],faces:[{v:[6,7,5,4],uv:[[4,97],[8,97],[8,93],[4,93]]},{v:[0,1,3,2],uv:[[8,97],[12,97],[12,93],[8,93]]},{v:[0,2,6,4],uv:[[0,99],[4,99],[3.889,97],[.111,97]]},{v:[2,3,7,6],uv:[[4,99],[8,99],[7.889,97],[4.111,97]]},{v:[3,1,5,7],uv:[[8,99],[12,99],[11.889,97],[8.111,97]]},{v:[1,0,4,5],uv:[[12,99],[16,99],[15.889,97],[12.111,97]]}]},bone:`bone-Neck`},{id:`cube-Head`,name:`Head`,position:[0,0,0],rotation:[0,0,0],mesh:{verts:[[-.09406,.78548,-.08911],[.09406,.78548,-.08911],[-.09406,.78548,.08911],[.09406,.78548,.08911],[-.10561,.9901,-.09901],[.10561,.9901,-.09901],[-.10561,.9901,.09901],[.10561,.9901,.09901]],faces:[{v:[6,7,5,4],uv:[[12,12],[25,12],[25,0],[12,0]]},{v:[0,1,3,2],uv:[[25,12],[38,12],[38,0],[25,0]]},{v:[0,2,6,4],uv:[[.6,25],[11.4,25],[12,12],[0,12]]},{v:[2,3,7,6],uv:[[12.711,25],[24.289,25],[25,12],[12,12]]},{v:[3,1,5,7],uv:[[25.6,25],[36.4,25],[37,12],[25,12]]},{v:[1,0,4,5],uv:[[37.711,25],[49.289,25],[50,12],[37,12]]}]},bone:`bone-Head`},{id:`cube-HairCap`,name:`HairCap`,position:[0,0,0],rotation:[0,0,0],mesh:{verts:[[-.11418,.93729,-.10801],[.11418,.93729,-.10801],[-.11418,.93729,.10801],[.11418,.93729,.10801],[-.11716,1,-.11056],[.11716,1,-.11056],[-.11716,1,.11056],[.11716,1,.11056]],faces:[{v:[6,7,5,4],uv:[[14,40],[29,40],[29,26],[14,26]]},{v:[0,1,3,2],uv:[[29,40],[44,40],[44,26],[29,26]]},{v:[0,2,6,4],uv:[[.162,44],[13.838,44],[14,40],[0,40]]},{v:[2,3,7,6],uv:[[14.191,44],[28.809,44],[29,40],[14,40]]},{v:[3,1,5,7],uv:[[29.162,44],[42.838,44],[43,40],[29,40]]},{v:[1,0,4,5],uv:[[43.191,44],[57.809,44],[58,40],[43,40]]}]},bone:`bone-Head`},{id:`cube-HairBack`,name:`HairBack`,position:[0,0,0],rotation:[0,0,0],mesh:{verts:[[-.10231,.74587,-.10231],[.10231,.74587,-.10231],[-.10231,.74587,-.05281],[.10231,.74587,-.05281],[-.11623,.9736,-.11141],[.11623,.9736,-.11141],[-.11623,.9736,-.06191],[.11623,.9736,-.06191]],faces:[{v:[6,7,5,4],uv:[[62,29],[77,29],[77,26],[62,26]]},{v:[0,1,3,2],uv:[[77,29],[92,29],[92,26],[77,26]]},{v:[0,2,6,4],uv:[[59.466,43],[62,43],[61.534,29],[59,29]]},{v:[2,3,7,6],uv:[[62.898,43],[76.102,43],[77,29],[62,29]]},{v:[3,1,5,7],uv:[[77,43],[79.534,43],[80,29],[77.466,29]]},{v:[1,0,4,5],uv:[[80.898,43],[94.102,43],[95,29],[80,29]]}]},bone:`bone-Head`},{id:`cube-RightHairLock`,name:`RightHairLock`,position:[0,0,0],rotation:[0,0,0],mesh:{verts:[[-.12477,.81353,-.05611],[-.09342,.81353,-.05611],[-.12477,.81353,.0231],[-.09342,.81353,.0231],[-.12477,.96865,-.05611],[-.09342,.96865,-.05611],[-.12477,.96865,.0231],[-.09342,.96865,.0231]],faces:[{v:[6,7,5,4],uv:[[5,68],[7,68],[7,63],[5,63]]},{v:[0,1,3,2],uv:[[7,68],[9,68],[9,63],[7,63]]},{v:[0,2,6,4],uv:[[0,78],[5,78],[5,68],[0,68]]},{v:[2,3,7,6],uv:[[5,78],[7,78],[7,68],[5,68]]},{v:[3,1,5,7],uv:[[7,78],[12,78],[12,68],[7,68]]},{v:[1,0,4,5],uv:[[12,78],[14,78],[14,68],[12,68]]}]},bone:`bone-Head`},{id:`cube-LeftHairLock`,name:`LeftHairLock`,position:[0,0,0],rotation:[0,0,0],mesh:{verts:[[.09342,.81353,-.05611],[.12477,.81353,-.05611],[.09342,.81353,.0231],[.12477,.81353,.0231],[.09342,.96865,-.05611],[.12477,.96865,-.05611],[.09342,.96865,.0231],[.12477,.96865,.0231]],faces:[{v:[6,7,5,4],uv:[[110,50],[112,50],[112,45],[110,45]]},{v:[0,1,3,2],uv:[[112,50],[114,50],[114,45],[112,45]]},{v:[0,2,6,4],uv:[[105,60],[110,60],[110,50],[105,50]]},{v:[2,3,7,6],uv:[[110,60],[112,60],[112,50],[110,50]]},{v:[3,1,5,7],uv:[[112,60],[117,60],[117,50],[112,50]]},{v:[1,0,4,5],uv:[[117,60],[119,60],[119,50],[117,50]]}]},bone:`bone-Head`},{id:`cube-RightEar`,name:`RightEar`,position:[0,0,0],rotation:[0,0,0],mesh:{verts:[[-.11716,.85149,-.0231],[-.09736,.85149,-.0231],[-.11716,.85149,.0231],[-.09736,.85149,.0231],[-.11716,.90429,-.0231],[-.09736,.90429,-.0231],[-.11716,.90429,.0231],[-.09736,.90429,.0231]],faces:[{v:[6,7,5,4],uv:[[119,82],[121,82],[121,79],[119,79]]},{v:[0,1,3,2],uv:[[121,82],[123,82],[123,79],[121,79]]},{v:[0,2,6,4],uv:[[116,86],[119,86],[119,82],[116,82]]},{v:[2,3,7,6],uv:[[119,86],[121,86],[121,82],[119,82]]},{v:[3,1,5,7],uv:[[121,86],[124,86],[124,82],[121,82]]},{v:[1,0,4,5],uv:[[124,86],[126,86],[126,82],[124,82]]}]},bone:`bone-RightEar`},{id:`cube-LeftEar`,name:`LeftEar`,position:[0,0,0],rotation:[0,0,0],mesh:{verts:[[.09736,.85149,-.0231],[.11716,.85149,-.0231],[.09736,.85149,.0231],[.11716,.85149,.0231],[.09736,.90429,-.0231],[.11716,.90429,-.0231],[.09736,.90429,.0231],[.11716,.90429,.0231]],faces:[{v:[6,7,5,4],uv:[[108,82],[110,82],[110,79],[108,79]]},{v:[0,1,3,2],uv:[[110,82],[112,82],[112,79],[110,79]]},{v:[0,2,6,4],uv:[[105,86],[108,86],[108,82],[105,82]]},{v:[2,3,7,6],uv:[[108,86],[110,86],[110,82],[108,82]]},{v:[3,1,5,7],uv:[[110,86],[113,86],[113,82],[110,82]]},{v:[1,0,4,5],uv:[[113,86],[115,86],[115,82],[113,82]]}]},bone:`bone-LeftEar`},{id:`cube-RightUpperArm`,name:`RightUpperArm`,position:[0,0,0],rotation:[0,0,0],mesh:{verts:[[-.16749,.59736,-.03218],[-.10974,.59736,-.03218],[-.16749,.59736,.03218],[-.10974,.59736,.03218],[-.17162,.76238,-.0363],[-.10561,.76238,-.0363],[-.17162,.76238,.0363],[-.10561,.76238,.0363]],faces:[{v:[6,7,5,4],uv:[[91,50],[95,50],[95,45],[91,45]]},{v:[0,1,3,2],uv:[[95,50],[99,50],[99,45],[95,45]]},{v:[0,2,6,4],uv:[[86.284,60],[90.716,60],[91,50],[86,50]]},{v:[2,3,7,6],uv:[[91.25,60],[94.75,60],[95,50],[91,50]]},{v:[3,1,5,7],uv:[[95.284,60],[99.716,60],[100,50],[95,50]]},{v:[1,0,4,5],uv:[[100.25,60],[103.75,60],[104,50],[100,50]]}]},bone:`bone-RightUpperArm`},{id:`cube-LeftUpperArm`,name:`LeftUpperArm`,position:[0,0,0],rotation:[0,0,0],mesh:{verts:[[.10974,.59736,-.03218],[.16749,.59736,-.03218],[.10974,.59736,.03218],[.16749,.59736,.03218],[.10561,.76238,-.0363],[.17162,.76238,-.0363],[.10561,.76238,.0363],[.17162,.76238,.0363]],faces:[{v:[6,7,5,4],uv:[[72,50],[76,50],[76,45],[72,45]]},{v:[0,1,3,2],uv:[[76,50],[80,50],[80,45],[76,45]]},{v:[0,2,6,4],uv:[[67.284,60],[71.716,60],[72,50],[67,50]]},{v:[2,3,7,6],uv:[[72.25,60],[75.75,60],[76,50],[72,50]]},{v:[3,1,5,7],uv:[[76.284,60],[80.716,60],[81,50],[76,50]]},{v:[1,0,4,5],uv:[[81.25,60],[84.75,60],[85,50],[81,50]]}]},bone:`bone-LeftUpperArm`},{id:`cube-RightForearm`,name:`RightForearm`,position:[0,0,0],rotation:[0,0,0],mesh:{verts:[[-.16419,.45875,-.02888],[-.11304,.45875,-.02888],[-.16419,.45875,.02888],[-.11304,.45875,.02888],[-.16749,.59736,-.03218],[-.10974,.59736,-.03218],[-.16749,.59736,.03218],[-.10974,.59736,.03218]],faces:[{v:[6,7,5,4],uv:[[21,83],[25,83],[25,79],[21,79]]},{v:[0,1,3,2],uv:[[25,83],[29,83],[29,79],[25,79]]},{v:[0,2,6,4],uv:[[17.205,92],[20.795,92],[21,83],[17,83]]},{v:[2,3,7,6],uv:[[21.229,92],[24.771,92],[25,83],[21,83]]},{v:[3,1,5,7],uv:[[25.205,92],[28.795,92],[29,83],[25,83]]},{v:[1,0,4,5],uv:[[29.229,92],[32.771,92],[33,83],[29,83]]}]},bone:`bone-RightForearm`},{id:`cube-LeftForearm`,name:`LeftForearm`,position:[0,0,0],rotation:[0,0,0],mesh:{verts:[[.11304,.45875,-.02888],[.16419,.45875,-.02888],[.11304,.45875,.02888],[.16419,.45875,.02888],[.10974,.59736,-.03218],[.16749,.59736,-.03218],[.10974,.59736,.03218],[.16749,.59736,.03218]],faces:[{v:[6,7,5,4],uv:[[4,83],[8,83],[8,79],[4,79]]},{v:[0,1,3,2],uv:[[8,83],[12,83],[12,79],[8,79]]},{v:[0,2,6,4],uv:[[.205,92],[3.795,92],[4,83],[0,83]]},{v:[2,3,7,6],uv:[[4.229,92],[7.771,92],[8,83],[4,83]]},{v:[3,1,5,7],uv:[[8.205,92],[11.795,92],[12,83],[8,83]]},{v:[1,0,4,5],uv:[[12.229,92],[15.771,92],[16,83],[12,83]]}]},bone:`bone-LeftForearm`},{id:`cube-RightHand`,name:`RightHand`,position:[0,0,0],rotation:[0,0,0],mesh:{verts:[[-.16254,.39274,-.02558],[-.11469,.39274,-.02558],[-.16254,.39274,.02558],[-.11469,.39274,.02558],[-.16667,.45875,-.02888],[-.11056,.45875,-.02888],[-.16667,.45875,.02888],[-.11056,.45875,.02888]],faces:[{v:[6,7,5,4],uv:[[92,83],[96,83],[96,79],[92,79]]},{v:[0,1,3,2],uv:[[96,83],[100,83],[100,79],[96,79]]},{v:[0,2,6,4],uv:[[88.229,87],[91.771,87],[92,83],[88,83]]},{v:[2,3,7,6],uv:[[92.294,87],[95.706,87],[96,83],[92,83]]},{v:[3,1,5,7],uv:[[96.229,87],[99.771,87],[100,83],[96,83]]},{v:[1,0,4,5],uv:[[100.294,87],[103.706,87],[104,83],[100,83]]}]},bone:`bone-RightHand`},{id:`cube-LeftHand`,name:`LeftHand`,position:[0,0,0],rotation:[0,0,0],mesh:{verts:[[.11469,.39274,-.02558],[.16254,.39274,-.02558],[.11469,.39274,.02558],[.16254,.39274,.02558],[.11056,.45875,-.02888],[.16667,.45875,-.02888],[.11056,.45875,.02888],[.16667,.45875,.02888]],faces:[{v:[6,7,5,4],uv:[[75,83],[79,83],[79,79],[75,79]]},{v:[0,1,3,2],uv:[[79,83],[83,83],[83,79],[79,79]]},{v:[0,2,6,4],uv:[[71.229,87],[74.771,87],[75,83],[71,83]]},{v:[2,3,7,6],uv:[[75.294,87],[78.706,87],[79,83],[75,83]]},{v:[3,1,5,7],uv:[[79.229,87],[82.771,87],[83,83],[79,83]]},{v:[1,0,4,5],uv:[[83.294,87],[86.706,87],[87,83],[83,83]]}]},bone:`bone-LeftHand`},{id:`cube-RightThigh`,name:`RightThigh`,position:[0,0,0],rotation:[0,0,0],mesh:{verts:[[-.09158,.24092,-.04208],[-.01403,.24092,-.04208],[-.09158,.24092,.04208],[-.01403,.24092,.04208],[-.10066,.41584,-.04868],[-.00495,.41584,-.04868],[-.10066,.41584,.04868],[-.00495,.41584,.04868]],faces:[{v:[6,7,5,4],uv:[[6,51],[12,51],[12,45],[6,45]]},{v:[0,1,3,2],uv:[[12,51],[18,51],[18,45],[12,45]]},{v:[0,2,6,4],uv:[[.407,62],[5.593,62],[6,51],[0,51]]},{v:[2,3,7,6],uv:[[6.569,62],[11.431,62],[12,51],[6,51]]},{v:[3,1,5,7],uv:[[12.407,62],[17.593,62],[18,51],[12,51]]},{v:[1,0,4,5],uv:[[18.569,62],[23.431,62],[24,51],[18,51]]}]},bone:`bone-RightThigh`},{id:`cube-LeftThigh`,name:`LeftThigh`,position:[0,0,0],rotation:[0,0,0],mesh:{verts:[[.01403,.24092,-.04208],[.09158,.24092,-.04208],[.01403,.24092,.04208],[.09158,.24092,.04208],[.00495,.41584,-.04868],[.10066,.41584,-.04868],[.00495,.41584,.04868],[.10066,.41584,.04868]],faces:[{v:[6,7,5,4],uv:[[102,32],[108,32],[108,26],[102,26]]},{v:[0,1,3,2],uv:[[108,32],[114,32],[114,26],[108,26]]},{v:[0,2,6,4],uv:[[96.407,43],[101.593,43],[102,32],[96,32]]},{v:[2,3,7,6],uv:[[102.569,43],[107.431,43],[108,32],[102,32]]},{v:[3,1,5,7],uv:[[108.407,43],[113.593,43],[114,32],[108,32]]},{v:[1,0,4,5],uv:[[114.569,43],[119.431,43],[120,32],[114,32]]}]},bone:`bone-LeftThigh`},{id:`cube-RightShin`,name:`RightShin`,position:[0,0,0],rotation:[0,0,0],mesh:{verts:[[-.08251,.05941,-.033],[-.0231,.05941,-.033],[-.08251,.05941,.033],[-.0231,.05941,.033],[-.08993,.24092,-.03878],[-.01568,.24092,-.03878],[-.08993,.24092,.03878],[-.01568,.24092,.03878]],faces:[{v:[6,7,5,4],uv:[[51,50],[56,50],[56,45],[51,45]]},{v:[0,1,3,2],uv:[[56,50],[61,50],[61,45],[56,45]]},{v:[0,2,6,4],uv:[[46.372,61],[50.628,61],[51,50],[46,50]]},{v:[2,3,7,6],uv:[[51.5,61],[55.5,61],[56,50],[51,50]]},{v:[3,1,5,7],uv:[[56.372,61],[60.628,61],[61,50],[56,50]]},{v:[1,0,4,5],uv:[[61.5,61],[65.5,61],[66,50],[61,50]]}]},bone:`bone-RightShin`},{id:`cube-LeftShin`,name:`LeftShin`,position:[0,0,0],rotation:[0,0,0],mesh:{verts:[[.0231,.05941,-.033],[.08251,.05941,-.033],[.0231,.05941,.033],[.08251,.05941,.033],[.01568,.24092,-.03878],[.08993,.24092,-.03878],[.01568,.24092,.03878],[.08993,.24092,.03878]],faces:[{v:[6,7,5,4],uv:[[30,50],[35,50],[35,45],[30,45]]},{v:[0,1,3,2],uv:[[35,50],[40,50],[40,45],[35,45]]},{v:[0,2,6,4],uv:[[25.372,61],[29.628,61],[30,50],[25,50]]},{v:[2,3,7,6],uv:[[30.5,61],[34.5,61],[35,50],[30,50]]},{v:[3,1,5,7],uv:[[35.372,61],[39.628,61],[40,50],[35,50]]},{v:[1,0,4,5],uv:[[40.5,61],[44.5,61],[45,50],[40,50]]}]},bone:`bone-LeftShin`},{id:`cube-RightFoot`,name:`RightFoot`,position:[0,0,0],rotation:[0,0,0],mesh:{verts:[[-.08828,0,-.0396],[-.01733,0,-.0396],[-.08828,0,.11551],[-.01733,0,.11551],[-.08581,.05941,-.03795],[-.0198,.05941,-.03795],[-.08581,.05941,.06766],[-.0198,.05941,.06766]],faces:[{v:[6,7,5,4],uv:[[99,73],[104,73],[104,63],[99,63]]},{v:[0,1,3,2],uv:[[104,73],[109,73],[109,63],[104,63]]},{v:[0,2,6,4],uv:[[89,77],[99,77],[95.915,73],[89.106,73]]},{v:[2,3,7,6],uv:[[99,77],[104,77],[103.826,73],[99.174,73]]},{v:[3,1,5,7],uv:[[104,77],[114,77],[113.894,73],[107.085,73]]},{v:[1,0,4,5],uv:[[114,77],[119,77],[118.826,73],[114.174,73]]}]},bone:`bone-RightFoot`},{id:`cube-LeftFoot`,name:`LeftFoot`,position:[0,0,0],rotation:[0,0,0],mesh:{verts:[[.01733,0,-.0396],[.08828,0,-.0396],[.01733,0,.11551],[.08828,0,.11551],[.0198,.05941,-.03795],[.08581,.05941,-.03795],[.0198,.05941,.06766],[.08581,.05941,.06766]],faces:[{v:[6,7,5,4],uv:[[68,73],[73,73],[73,63],[68,63]]},{v:[0,1,3,2],uv:[[73,73],[78,73],[78,63],[73,63]]},{v:[0,2,6,4],uv:[[58,77],[68,77],[64.915,73],[58.106,73]]},{v:[2,3,7,6],uv:[[68,77],[73,77],[72.826,73],[68.174,73]]},{v:[3,1,5,7],uv:[[73,77],[83,77],[82.894,73],[76.085,73]]},{v:[1,0,4,5],uv:[[83,77],[88,77],[87.826,73],[83.174,73]]}]},bone:`bone-LeftFoot`}],bones:[{id:`bone-Root`,name:`Root`,parent:null,pivot:[0,0,0]},{id:`bone-Hips`,name:`Hips`,parent:`bone-Root`,pivot:[0,.4538,0]},{id:`bone-Waist`,name:`Waist`,parent:`bone-Hips`,pivot:[0,.50165,0]},{id:`bone-Chest`,name:`Chest`,parent:`bone-Waist`,pivot:[0,.58086,0]},{id:`bone-Neck`,name:`Neck`,parent:`bone-Chest`,pivot:[0,.75908,0]},{id:`bone-Head`,name:`Head`,parent:`bone-Neck`,pivot:[0,.78548,0]},{id:`bone-RightEar`,name:`RightEar`,parent:`bone-Head`,pivot:[-.10726,.85149,0]},{id:`bone-LeftEar`,name:`LeftEar`,parent:`bone-Head`,pivot:[.10726,.85149,0]},{id:`bone-RightUpperArm`,name:`RightUpperArm`,parent:`bone-Chest`,pivot:[-.13861,.76238,0]},{id:`bone-LeftUpperArm`,name:`LeftUpperArm`,parent:`bone-Chest`,pivot:[.13861,.76238,0]},{id:`bone-RightForearm`,name:`RightForearm`,parent:`bone-RightUpperArm`,pivot:[-.13861,.59736,0]},{id:`bone-LeftForearm`,name:`LeftForearm`,parent:`bone-LeftUpperArm`,pivot:[.13861,.59736,0]},{id:`bone-RightHand`,name:`RightHand`,parent:`bone-RightForearm`,pivot:[-.13861,.45875,0]},{id:`bone-LeftHand`,name:`LeftHand`,parent:`bone-LeftForearm`,pivot:[.13861,.45875,0]},{id:`bone-RightThigh`,name:`RightThigh`,parent:`bone-Hips`,pivot:[-.05281,.41584,0]},{id:`bone-LeftThigh`,name:`LeftThigh`,parent:`bone-Hips`,pivot:[.05281,.41584,0]},{id:`bone-RightShin`,name:`RightShin`,parent:`bone-RightThigh`,pivot:[-.05281,.24092,0]},{id:`bone-LeftShin`,name:`LeftShin`,parent:`bone-LeftThigh`,pivot:[.05281,.24092,0]},{id:`bone-RightFoot`,name:`RightFoot`,parent:`bone-RightShin`,pivot:[-.05281,.05941,0]},{id:`bone-LeftFoot`,name:`LeftFoot`,parent:`bone-LeftShin`,pivot:[.05281,.05941,0]}],clips:[]},xc={id:`humanoid`,name:`Humanoid`,texture:`Character-Skin.png`,cubes:[{id:`cube-Hips`,name:`Hips`,position:[0,0,0],rotation:[0,0,0],mesh:{verts:[[-.10323,.4,-.05806],[.10323,.4,-.05806],[-.10323,.4,.05806],[.10323,.4,.05806],[-.09839,.49032,-.05645],[.09839,.49032,-.05645],[-.09839,.49032,.05645],[.09839,.49032,.05645]],faces:[{v:[6,7,5,4],uv:[[92,56],[105,56],[105,48],[92,48]]},{v:[0,1,3,2],uv:[[105,56],[118,56],[118,48],[105,48]]},{v:[0,2,6,4],uv:[[84,62],[92,62],[91.889,56],[84.111,56]]},{v:[2,3,7,6],uv:[[92,62],[105,62],[104.695,56],[92.305,56]]},{v:[3,1,5,7],uv:[[105,62],[113,62],[112.889,56],[105.111,56]]},{v:[1,0,4,5],uv:[[113,62],[126,62],[125.695,56],[113.305,56]]}]},bone:`bone-Hips`},{id:`cube-Waist`,name:`Waist`,position:[0,0,0],rotation:[0,0,0],mesh:{verts:[[-.09839,.49032,-.05645],[.09839,.49032,-.05645],[-.09839,.49032,.05645],[.09839,.49032,.05645],[-.10161,.57097,-.05968],[.10161,.57097,-.05968],[-.10161,.57097,.05968],[.10161,.57097,.05968]],faces:[{v:[6,7,5,4],uv:[[8,88],[21,88],[21,80],[8,80]]},{v:[0,1,3,2],uv:[[21,88],[34,88],[34,80],[21,80]]},{v:[0,2,6,4],uv:[[.216,93],[7.784,93],[8,88],[0,88]]},{v:[2,3,7,6],uv:[[8.206,93],[20.794,93],[21,88],[8,88]]},{v:[3,1,5,7],uv:[[21.216,93],[28.784,93],[29,88],[21,88]]},{v:[1,0,4,5],uv:[[29.206,93],[41.794,93],[42,88],[29,88]]}]},bone:`bone-Waist`},{id:`cube-Chest`,name:`Chest`,position:[0,0,0],rotation:[0,0,0],mesh:{verts:[[-.10161,.57097,-.05968],[.10161,.57097,-.05968],[-.10161,.57097,.05968],[.10161,.57097,.05968],[-.12258,.75484,-.06935],[.12258,.75484,-.06935],[-.12258,.75484,.06935],[.12258,.75484,.06935]],faces:[{v:[6,7,5,4],uv:[[64,9],[80,9],[80,0],[64,0]]},{v:[0,1,3,2],uv:[[80,9],[96,9],[96,0],[80,0]]},{v:[0,2,6,4],uv:[[55.628,21],[63.372,21],[64,9],[55,9]]},{v:[2,3,7,6],uv:[[65.368,21],[78.632,21],[80,9],[64,9]]},{v:[3,1,5,7],uv:[[80.628,21],[88.372,21],[89,9],[80,9]]},{v:[1,0,4,5],uv:[[90.368,21],[103.632,21],[105,9],[89,9]]}]},bone:`bone-Chest`},{id:`cube-Neck`,name:`Neck`,position:[0,0,0],rotation:[0,0,0],mesh:{verts:[[-.03387,.74839,-.03387],[.03387,.74839,-.03387],[-.03387,.74839,.03387],[.03387,.74839,.03387],[-.03226,.77742,-.03226],[.03226,.77742,-.03226],[-.03226,.77742,.03226],[.03226,.77742,.03226]],faces:[{v:[6,7,5,4],uv:[[5,99],[10,99],[10,94],[5,94]]},{v:[0,1,3,2],uv:[[10,99],[15,99],[15,94],[10,94]]},{v:[0,2,6,4],uv:[[0,101],[5,101],[4.881,99],[.119,99]]},{v:[2,3,7,6],uv:[[5,101],[10,101],[9.881,99],[5.119,99]]},{v:[3,1,5,7],uv:[[10,101],[15,101],[14.881,99],[10.119,99]]},{v:[1,0,4,5],uv:[[15,101],[20,101],[19.881,99],[15.119,99]]}]},bone:`bone-Neck`},{id:`cube-Head`,name:`Head`,position:[0,0,0],rotation:[0,0,0],mesh:{verts:[[-.1,.77419,-.09516],[.1,.77419,-.09516],[-.1,.77419,.09516],[.1,.77419,.09516],[-.1129,.99032,-.10484],[.1129,.99032,-.10484],[-.1129,.99032,.10484],[.1129,.99032,.10484]],faces:[{v:[6,7,5,4],uv:[[13,13],[27,13],[27,0],[13,0]]},{v:[0,1,3,2],uv:[[27,13],[41,13],[41,0],[27,0]]},{v:[0,2,6,4],uv:[[.6,27],[12.4,27],[13,13],[0,13]]},{v:[2,3,7,6],uv:[[13.8,27],[26.2,27],[27,13],[13,13]]},{v:[3,1,5,7],uv:[[27.6,27],[39.4,27],[40,13],[27,13]]},{v:[1,0,4,5],uv:[[40.8,27],[53.2,27],[54,13],[40,13]]}]},bone:`bone-Head`},{id:`cube-HairCap`,name:`HairCap`,position:[0,0,0],rotation:[0,0,0],mesh:{verts:[[-.12111,.93871,-.11382],[.12111,.93871,-.11382],[-.12111,.93871,.11382],[.12111,.93871,.11382],[-.12419,1,-.11613],[.12419,1,-.11613],[-.12419,1,.11613],[.12419,1,.11613]],faces:[{v:[6,7,5,4],uv:[[15,43],[31,43],[31,28],[15,28]]},{v:[0,1,3,2],uv:[[31,43],[47,43],[47,28],[31,28]]},{v:[0,2,6,4],uv:[[.149,47],[14.851,47],[15,43],[0,43]]},{v:[2,3,7,6],uv:[[15.198,47],[30.802,47],[31,43],[15,43]]},{v:[3,1,5,7],uv:[[31.149,47],[45.851,47],[46,43],[31,43]]},{v:[1,0,4,5],uv:[[46.198,47],[61.802,47],[62,43],[46,43]]}]},bone:`bone-Head`},{id:`cube-HairBack`,name:`HairBack`,position:[0,0,0],rotation:[0,0,0],mesh:{verts:[[-.11346,.86452,-.11211],[.11346,.86452,-.11211],[-.11346,.86452,-.05727],[.11346,.86452,-.05727],[-.12323,.97419,-.11702],[.12323,.97419,-.11702],[-.12323,.97419,-.06218],[.12323,.97419,-.06218]],faces:[{v:[6,7,5,4],uv:[[47,84],[63,84],[63,80],[47,80]]},{v:[0,1,3,2],uv:[[63,84],[79,84],[79,80],[63,80]]},{v:[0,2,6,4],uv:[[43.329,91],[47,91],[46.671,84],[43,84]]},{v:[2,3,7,6],uv:[[47.634,91],[62.366,91],[63,84],[47,84]]},{v:[3,1,5,7],uv:[[63,91],[66.671,91],[67,84],[63.329,84]]},{v:[1,0,4,5],uv:[[67.634,91],[82.366,91],[83,84],[67,84]]}]},bone:`bone-Head`},{id:`cube-RightEar`,name:`RightEar`,position:[0,0,0],rotation:[0,0,0],mesh:{verts:[[-.12419,.84516,-.02419],[-.10484,.84516,-.02419],[-.12419,.84516,.02419],[-.10484,.84516,.02419],[-.12419,.9,-.02419],[-.10484,.9,-.02419],[-.12419,.9,.02419],[-.10484,.9,.02419]],faces:[{v:[6,7,5,4],uv:[[35,97],[37,97],[37,94],[35,94]]},{v:[0,1,3,2],uv:[[37,97],[39,97],[39,94],[37,94]]},{v:[0,2,6,4],uv:[[32,101],[35,101],[35,97],[32,97]]},{v:[2,3,7,6],uv:[[35,101],[37,101],[37,97],[35,97]]},{v:[3,1,5,7],uv:[[37,101],[40,101],[40,97],[37,97]]},{v:[1,0,4,5],uv:[[40,101],[42,101],[42,97],[40,97]]}]},bone:`bone-RightEar`},{id:`cube-LeftEar`,name:`LeftEar`,position:[0,0,0],rotation:[0,0,0],mesh:{verts:[[.10484,.84516,-.02419],[.12419,.84516,-.02419],[.10484,.84516,.02419],[.12419,.84516,.02419],[.10484,.9,-.02419],[.12419,.9,-.02419],[.10484,.9,.02419],[.12419,.9,.02419]],faces:[{v:[6,7,5,4],uv:[[24,97],[26,97],[26,94],[24,94]]},{v:[0,1,3,2],uv:[[26,97],[28,97],[28,94],[26,94]]},{v:[0,2,6,4],uv:[[21,101],[24,101],[24,97],[21,97]]},{v:[2,3,7,6],uv:[[24,101],[26,101],[26,97],[24,97]]},{v:[3,1,5,7],uv:[[26,101],[29,101],[29,97],[26,97]]},{v:[1,0,4,5],uv:[[29,101],[31,101],[31,97],[29,97]]}]},bone:`bone-LeftEar`},{id:`cube-RightUpperArm`,name:`RightUpperArm`,position:[0,0,0],rotation:[0,0,0],mesh:{verts:[[-.18871,.59032,-.03548],[-.12419,.59032,-.03548],[-.18871,.59032,.03548],[-.12419,.59032,.03548],[-.19355,.75484,-.03952],[-.11935,.75484,-.03952],[-.19355,.75484,.03952],[-.11935,.75484,.03952]],faces:[{v:[6,7,5,4],uv:[[68,53],[73,53],[73,48],[68,48]]},{v:[0,1,3,2],uv:[[73,53],[78,53],[78,48],[73,48]]},{v:[0,2,6,4],uv:[[63.255,64],[67.745,64],[68,53],[63,53]]},{v:[2,3,7,6],uv:[[68.326,64],[72.674,64],[73,53],[68,53]]},{v:[3,1,5,7],uv:[[73.255,64],[77.745,64],[78,53],[73,53]]},{v:[1,0,4,5],uv:[[78.326,64],[82.674,64],[83,53],[78,53]]}]},bone:`bone-RightUpperArm`},{id:`cube-LeftUpperArm`,name:`LeftUpperArm`,position:[0,0,0],rotation:[0,0,0],mesh:{verts:[[.12419,.59032,-.03548],[.18871,.59032,-.03548],[.12419,.59032,.03548],[.18871,.59032,.03548],[.11935,.75484,-.03952],[.19355,.75484,-.03952],[.11935,.75484,.03952],[.19355,.75484,.03952]],faces:[{v:[6,7,5,4],uv:[[26,53],[31,53],[31,48],[26,48]]},{v:[0,1,3,2],uv:[[31,53],[36,53],[36,48],[31,48]]},{v:[0,2,6,4],uv:[[21.255,64],[25.745,64],[26,53],[21,53]]},{v:[2,3,7,6],uv:[[26.326,64],[30.674,64],[31,53],[26,53]]},{v:[3,1,5,7],uv:[[31.255,64],[35.745,64],[36,53],[31,53]]},{v:[1,0,4,5],uv:[[36.326,64],[40.674,64],[41,53],[36,53]]}]},bone:`bone-LeftUpperArm`},{id:`cube-RightForearm`,name:`RightForearm`,position:[0,0,0],rotation:[0,0,0],mesh:{verts:[[-.18548,.45161,-.03145],[-.12742,.45161,-.03145],[-.18548,.45161,.03145],[-.12742,.45161,.03145],[-.18871,.59032,-.03548],[-.12419,.59032,-.03548],[-.18871,.59032,.03548],[-.12419,.59032,.03548]],faces:[{v:[6,7,5,4],uv:[[86,70],[90,70],[90,65],[86,65]]},{v:[0,1,3,2],uv:[[90,70],[94,70],[94,65],[90,65]]},{v:[0,2,6,4],uv:[[81.284,79],[85.716,79],[86,70],[81,70]]},{v:[2,3,7,6],uv:[[86.2,79],[89.8,79],[90,70],[86,70]]},{v:[3,1,5,7],uv:[[90.284,79],[94.716,79],[95,70],[90,70]]},{v:[1,0,4,5],uv:[[95.2,79],[98.8,79],[99,70],[95,70]]}]},bone:`bone-RightForearm`},{id:`cube-LeftForearm`,name:`LeftForearm`,position:[0,0,0],rotation:[0,0,0],mesh:{verts:[[.12742,.45161,-.03145],[.18548,.45161,-.03145],[.12742,.45161,.03145],[.18548,.45161,.03145],[.12419,.59032,-.03548],[.18871,.59032,-.03548],[.12419,.59032,.03548],[.18871,.59032,.03548]],faces:[{v:[6,7,5,4],uv:[[67,70],[71,70],[71,65],[67,65]]},{v:[0,1,3,2],uv:[[71,70],[75,70],[75,65],[71,65]]},{v:[0,2,6,4],uv:[[62.284,79],[66.716,79],[67,70],[62,70]]},{v:[2,3,7,6],uv:[[67.2,79],[70.8,79],[71,70],[67,70]]},{v:[3,1,5,7],uv:[[71.284,79],[75.716,79],[76,70],[71,70]]},{v:[1,0,4,5],uv:[[76.2,79],[79.8,79],[80,70],[76,70]]}]},bone:`bone-LeftForearm`},{id:`cube-RightHand`,name:`RightHand`,position:[0,0,0],rotation:[0,0,0],mesh:{verts:[[-.18306,.3871,-.02661],[-.12984,.3871,-.02661],[-.18306,.3871,.02661],[-.12984,.3871,.02661],[-.1871,.45161,-.03065],[-.12581,.45161,-.03065],[-.1871,.45161,.03065],[-.12581,.45161,.03065]],faces:[{v:[6,7,5,4],uv:[[105,84],[109,84],[109,80],[105,80]]},{v:[0,1,3,2],uv:[[109,84],[113,84],[113,80],[109,80]]},{v:[0,2,6,4],uv:[[101.263,88],[104.737,88],[105,84],[101,84]]},{v:[2,3,7,6],uv:[[105.263,88],[108.737,88],[109,84],[105,84]]},{v:[3,1,5,7],uv:[[109.263,88],[112.737,88],[113,84],[109,84]]},{v:[1,0,4,5],uv:[[113.263,88],[116.737,88],[117,84],[113,84]]}]},bone:`bone-RightHand`},{id:`cube-LeftHand`,name:`LeftHand`,position:[0,0,0],rotation:[0,0,0],mesh:{verts:[[.12984,.3871,-.02661],[.18306,.3871,-.02661],[.12984,.3871,.02661],[.18306,.3871,.02661],[.12581,.45161,-.03065],[.1871,.45161,-.03065],[.12581,.45161,.03065],[.1871,.45161,.03065]],faces:[{v:[6,7,5,4],uv:[[88,84],[92,84],[92,80],[88,80]]},{v:[0,1,3,2],uv:[[92,84],[96,84],[96,80],[92,80]]},{v:[0,2,6,4],uv:[[84.263,88],[87.737,88],[88,84],[84,84]]},{v:[2,3,7,6],uv:[[88.263,88],[91.737,88],[92,84],[88,84]]},{v:[3,1,5,7],uv:[[92.263,88],[95.737,88],[96,84],[92,84]]},{v:[1,0,4,5],uv:[[96.263,88],[99.737,88],[100,84],[96,84]]}]},bone:`bone-LeftHand`},{id:`cube-RightThigh`,name:`RightThigh`,position:[0,0,0],rotation:[0,0,0],mesh:{verts:[[-.09032,.23871,-.04274],[-.0129,.23871,-.04274],[-.09032,.23871,.04274],[-.0129,.23871,.04274],[-.09758,.40968,-.04919],[-.00565,.40968,-.04919],[-.09758,.40968,.04919],[-.00565,.40968,.04919]],faces:[{v:[6,7,5,4],uv:[[97,35],[103,35],[103,28],[97,28]]},{v:[0,1,3,2],uv:[[103,35],[109,35],[109,28],[103,28]]},{v:[0,2,6,4],uv:[[90.459,46],[96.541,46],[97,35],[90,35]]},{v:[2,3,7,6],uv:[[97.474,46],[102.526,46],[103,35],[97,35]]},{v:[3,1,5,7],uv:[[103.459,46],[109.541,46],[110,35],[103,35]]},{v:[1,0,4,5],uv:[[110.474,46],[115.526,46],[116,35],[110,35]]}]},bone:`bone-RightThigh`},{id:`cube-LeftThigh`,name:`LeftThigh`,position:[0,0,0],rotation:[0,0,0],mesh:{verts:[[.0129,.23871,-.04274],[.09032,.23871,-.04274],[.0129,.23871,.04274],[.09032,.23871,.04274],[.00565,.40968,-.04919],[.09758,.40968,-.04919],[.00565,.40968,.04919],[.09758,.40968,.04919]],faces:[{v:[6,7,5,4],uv:[[70,35],[76,35],[76,28],[70,28]]},{v:[0,1,3,2],uv:[[76,35],[82,35],[82,28],[76,28]]},{v:[0,2,6,4],uv:[[63.459,46],[69.541,46],[70,35],[63,35]]},{v:[2,3,7,6],uv:[[70.474,46],[75.526,46],[76,35],[70,35]]},{v:[3,1,5,7],uv:[[76.459,46],[82.541,46],[83,35],[76,35]]},{v:[1,0,4,5],uv:[[83.474,46],[88.526,46],[89,35],[83,35]]}]},bone:`bone-LeftThigh`},{id:`cube-RightShin`,name:`RightShin`,position:[0,0,0],rotation:[0,0,0],mesh:{verts:[[-.08387,.06129,-.03468],[-.01935,.06129,-.03468],[-.08387,.06129,.03468],[-.01935,.06129,.03468],[-.08952,.23871,-.03952],[-.01371,.23871,-.03952],[-.08952,.23871,.03952],[-.01371,.23871,.03952]],faces:[{v:[6,7,5,4],uv:[[47,53],[52,53],[52,48],[47,48]]},{v:[0,1,3,2],uv:[[52,53],[57,53],[57,48],[52,48]]},{v:[0,2,6,4],uv:[[42.306,64],[46.694,64],[47,53],[42,53]]},{v:[2,3,7,6],uv:[[47.372,64],[51.628,64],[52,53],[47,53]]},{v:[3,1,5,7],uv:[[52.306,64],[56.694,64],[57,53],[52,53]]},{v:[1,0,4,5],uv:[[57.372,64],[61.628,64],[62,53],[57,53]]}]},bone:`bone-RightShin`},{id:`cube-LeftShin`,name:`LeftShin`,position:[0,0,0],rotation:[0,0,0],mesh:{verts:[[.01935,.06129,-.03468],[.08387,.06129,-.03468],[.01935,.06129,.03468],[.08387,.06129,.03468],[.01371,.23871,-.03952],[.08952,.23871,-.03952],[.01371,.23871,.03952],[.08952,.23871,.03952]],faces:[{v:[6,7,5,4],uv:[[5,53],[10,53],[10,48],[5,48]]},{v:[0,1,3,2],uv:[[10,53],[15,53],[15,48],[10,48]]},{v:[0,2,6,4],uv:[[.306,64],[4.694,64],[5,53],[0,53]]},{v:[2,3,7,6],uv:[[5.372,64],[9.628,64],[10,53],[5,53]]},{v:[3,1,5,7],uv:[[10.306,64],[14.694,64],[15,53],[10,53]]},{v:[1,0,4,5],uv:[[15.372,64],[19.628,64],[20,53],[15,53]]}]},bone:`bone-LeftShin`},{id:`cube-RightFoot`,name:`RightFoot`,position:[0,0,0],rotation:[0,0,0],mesh:{verts:[[-.08952,0,-.04032],[-.01371,0,-.04032],[-.08952,0,.12097],[-.01371,0,.12097],[-.0871,.06129,-.03871],[-.01613,.06129,-.03871],[-.0871,.06129,.07097],[-.01613,.06129,.07097]],faces:[{v:[6,7,5,4],uv:[[41,75],[46,75],[46,65],[41,65]]},{v:[0,1,3,2],uv:[[46,75],[51,75],[51,65],[46,65]]},{v:[0,2,6,4],uv:[[31,79],[41,79],[37.9,75],[31.1,75]]},{v:[2,3,7,6],uv:[[41,79],[46,79],[45.84,75],[41.16,75]]},{v:[3,1,5,7],uv:[[46,79],[56,79],[55.9,75],[49.1,75]]},{v:[1,0,4,5],uv:[[56,79],[61,79],[60.84,75],[56.16,75]]}]},bone:`bone-RightFoot`},{id:`cube-LeftFoot`,name:`LeftFoot`,position:[0,0,0],rotation:[0,0,0],mesh:{verts:[[.01371,0,-.04032],[.08952,0,-.04032],[.01371,0,.12097],[.08952,0,.12097],[.01613,.06129,-.03871],[.0871,.06129,-.03871],[.01613,.06129,.07097],[.0871,.06129,.07097]],faces:[{v:[6,7,5,4],uv:[[10,75],[15,75],[15,65],[10,65]]},{v:[0,1,3,2],uv:[[15,75],[20,75],[20,65],[15,65]]},{v:[0,2,6,4],uv:[[0,79],[10,79],[6.9,75],[.1,75]]},{v:[2,3,7,6],uv:[[10,79],[15,79],[14.84,75],[10.16,75]]},{v:[3,1,5,7],uv:[[15,79],[25,79],[24.9,75],[18.1,75]]},{v:[1,0,4,5],uv:[[25,79],[30,79],[29.84,75],[25.16,75]]}]},bone:`bone-LeftFoot`}],bones:[{id:`bone-Root`,name:`Root`,parent:null,pivot:[0,0,0]},{id:`bone-Hips`,name:`Hips`,parent:`bone-Root`,pivot:[0,.44516,0]},{id:`bone-Waist`,name:`Waist`,parent:`bone-Hips`,pivot:[0,.49032,0]},{id:`bone-Chest`,name:`Chest`,parent:`bone-Waist`,pivot:[0,.57097,0]},{id:`bone-Neck`,name:`Neck`,parent:`bone-Chest`,pivot:[0,.74839,0]},{id:`bone-Head`,name:`Head`,parent:`bone-Neck`,pivot:[0,.77419,0]},{id:`bone-RightEar`,name:`RightEar`,parent:`bone-Head`,pivot:[-.11452,.84516,0]},{id:`bone-LeftEar`,name:`LeftEar`,parent:`bone-Head`,pivot:[.11452,.84516,0]},{id:`bone-RightUpperArm`,name:`RightUpperArm`,parent:`bone-Chest`,pivot:[-.15645,.75484,0]},{id:`bone-LeftUpperArm`,name:`LeftUpperArm`,parent:`bone-Chest`,pivot:[.15645,.75484,0]},{id:`bone-RightForearm`,name:`RightForearm`,parent:`bone-RightUpperArm`,pivot:[-.15645,.59032,0]},{id:`bone-LeftForearm`,name:`LeftForearm`,parent:`bone-LeftUpperArm`,pivot:[.15645,.59032,0]},{id:`bone-RightHand`,name:`RightHand`,parent:`bone-RightForearm`,pivot:[-.15645,.45161,0]},{id:`bone-LeftHand`,name:`LeftHand`,parent:`bone-LeftForearm`,pivot:[.15645,.45161,0]},{id:`bone-RightThigh`,name:`RightThigh`,parent:`bone-Hips`,pivot:[-.05161,.40968,0]},{id:`bone-LeftThigh`,name:`LeftThigh`,parent:`bone-Hips`,pivot:[.05161,.40968,0]},{id:`bone-RightShin`,name:`RightShin`,parent:`bone-RightThigh`,pivot:[-.05161,.23871,0]},{id:`bone-LeftShin`,name:`LeftShin`,parent:`bone-LeftThigh`,pivot:[.05161,.23871,0]},{id:`bone-RightFoot`,name:`RightFoot`,parent:`bone-RightShin`,pivot:[-.05161,.06129,0]},{id:`bone-LeftFoot`,name:`LeftFoot`,parent:`bone-LeftShin`,pivot:[.05161,.06129,0]}],clips:[]},Sc=Math.PI*2,Cc=e=>Math.round(e*1e3)/1e3+0;function wc(e,t,n){let r=[];for(let i=0;i<=t;i++){let a=i/t,o=n(a*Sc);r.push({t:Cc(a*e),v:[Cc(o[0]),Cc(o[1]),Cc(o[2])]})}return r}var Z=e=>()=>e;function Tc(e,t,n,r,i,a,o={}){let s={};for(let[e,t]of Object.entries(a))s[e]={rot:wc(n,i,t)};for(let[e,t]of Object.entries(o))s[e]={...s[e]??{},pos:wc(n,i,t)};return{id:e,name:t,duration:n,loop:r,tracks:s}}var Ec=Math.sin,Dc=Math.cos,Oc=e=>Math.max(0,e);function kc(e,t,n){let r=e=>t=>-e*n.thigh*Ec(t),i=e=>t=>n.knee*Oc(e*Dc(t))+3;return Tc(e,t,n.duration,!0,16,{RightThigh:e=>[r(1)(e),0,0],LeftThigh:e=>[r(-1)(e),0,0],RightShin:e=>[i(1)(e),0,0],LeftShin:e=>[i(-1)(e),0,0],RightFoot:e=>[-.5*i(1)(e),0,0],LeftFoot:e=>[-.5*i(-1)(e),0,0],RightUpperArm:e=>[n.arm*Ec(e),0,0],LeftUpperArm:e=>[-n.arm*Ec(e),0,0],RightForearm:e=>[-(n.elbow+.25*n.arm*(.5-.5*Ec(e))),0,0],LeftForearm:e=>[-(n.elbow+.25*n.arm*(.5+.5*Ec(e))),0,0],Hips:e=>[0,.45*n.twist*Ec(e),0],Waist:e=>[n.lean*.5,0,0].map((t,r)=>r===1?-.3*n.twist*Ec(e):t),Chest:e=>[n.lean*.5,-.55*n.twist*Ec(e),0],Head:e=>[-n.lean*.9,.35*n.twist*Ec(e),0]},{Root:e=>[0,n.bob*Dc(2*e),0]})}function Ac(e){let t=Tc(e(),`idle`,3,!0,12,{Chest:e=>[1.4*Ec(e),0,0],Head:e=>[-1.2*Ec(e-.7),2*Ec(e/1-1.5)*.5,0],RightUpperArm:e=>[-1*Ec(e-.5),0,-1.6*Ec(e)],LeftUpperArm:e=>[-1*Ec(e-.5),0,1.6*Ec(e)],RightForearm:Z([-6,0,0]),LeftForearm:Z([-6,0,0])},{Root:e=>[0,.004*Ec(e),0]}),n=kc(e(),`walk`,{duration:.8,thigh:30,knee:40,arm:26,elbow:12,lean:3,bob:.012,twist:8}),r=kc(e(),`run`,{duration:.5,thigh:52,knee:78,arm:48,elbow:75,lean:14,bob:.032,twist:14}),i=Tc(e(),`jump`,.4,!0,2,{RightUpperArm:Z([-125,0,-22]),LeftUpperArm:Z([-125,0,22]),RightForearm:Z([-25,0,0]),LeftForearm:Z([-25,0,0]),RightThigh:Z([-32,0,0]),LeftThigh:Z([10,0,0]),RightShin:Z([55,0,0]),LeftShin:Z([30,0,0]),RightFoot:Z([-10,0,0]),LeftFoot:Z([-5,0,0]),Waist:Z([6,0,0]),Head:Z([-8,0,0])}),a=Tc(e(),`fall`,.4,!0,2,{RightUpperArm:Z([-30,0,-62]),LeftUpperArm:Z([-30,0,62]),RightForearm:Z([-22,0,0]),LeftForearm:Z([-22,0,0]),RightThigh:Z([-14,0,0]),LeftThigh:Z([8,0,0]),RightShin:Z([30,0,0]),LeftShin:Z([22,0,0]),Waist:Z([4,0,0]),Head:Z([-5,0,0])}),o=Tc(e(),`glide`,.6,!0,4,{RightUpperArm:e=>[-10,0,-78+5*Ec(e)],LeftUpperArm:e=>[-10,0,78-5*Ec(e)],RightForearm:Z([-8,0,0]),LeftForearm:Z([-8,0,0]),RightThigh:Z([12,0,0]),LeftThigh:Z([14,0,0]),RightShin:Z([22,0,0]),LeftShin:Z([26,0,0]),RightFoot:Z([-8,0,0]),LeftFoot:Z([-8,0,0]),Waist:Z([14,0,0]),Head:Z([-12,0,0])}),s=Tc(e(),`swim`,.9,!0,12,{RightUpperArm:e=>[-150+70*Ec(e),0,-10],LeftUpperArm:e=>[-150-70*Ec(e),0,10],RightForearm:e=>[-15-15*Dc(e),0,0],LeftForearm:e=>[-15+15*Dc(e),0,0],RightThigh:e=>[10+22*Ec(e*2),0,0],LeftThigh:e=>[10-22*Ec(e*2),0,0],RightShin:Z([14,0,0]),LeftShin:Z([14,0,0]),Waist:Z([62,0,0]),Head:Z([-48,0,0])}),c=e=>({RightThigh:t=>[-68+e(t),0,0],LeftThigh:t=>[-68-e(t),0,0],RightShin:t=>[118+.5*e(t),0,0],LeftShin:t=>[118-.5*e(t),0,0],RightFoot:t=>[-50-.5*e(t),0,0],LeftFoot:t=>[-50+.5*e(t),0,0],Hips:Z([-8,0,0]),Waist:Z([20,0,0]),Chest:Z([10,0,0]),Head:Z([-26,0,0]),RightUpperArm:t=>[-34+.5*e(t),0,0],LeftUpperArm:t=>[-34-.5*e(t),0,0],RightForearm:Z([-34,0,0]),LeftForearm:Z([-34,0,0])});return[t,n,r,i,a,o,s,Tc(e(),`crouch`,1,!0,2,c(()=>0),{Root:Z([0,-.165,0])}),Tc(e(),`crouch_walk`,.9,!0,16,c(e=>16*Ec(e)),{Root:e=>[0,-.165+.012*Dc(2*e),0]})]}var jc=`humanoid`,Mc=`humanoid-female`,Nc=`Character-Skin.png`,Pc=`Character-Template.png`,Fc=`Character-Explorer.png`,Ic=`Character-Female-Skin.png`,Lc={"Humanoid-Skin.png":null,"Humanoid-Template.png":Pc,"Humanoid-Hero.png":Fc};function Rc(e,t=jc){let n=t===Mc,r=n?bc:xc,i=new Map(r.bones.map(t=>[t.id,e()])),a=r.bones.map(e=>({id:i.get(e.id),name:e.name,parent:e.parent?i.get(e.parent)??null:null,pivot:[e.pivot[0],e.pivot[1],e.pivot[2]]})),o=r.cubes.map(t=>({id:e(),name:t.name,position:[t.position[0],t.position[1],t.position[2]],rotation:[t.rotation[0],t.rotation[1],t.rotation[2]],mesh:{verts:t.mesh.verts.map(e=>[e[0],e[1],e[2]]),faces:t.mesh.faces.map(e=>({v:[...e.v],uv:e.uv.map(e=>[e[0],e[1]])}))},bone:t.bone?i.get(t.bone)??null:null}));return{id:n?Mc:jc,name:n?`Humanoid (female)`:`Humanoid`,texture:n?Ic:Nc,cubes:o,bones:a,clips:Ac(e)}}function zc(e,t){let n=new Map(t.cubes.map(e=>[e.name,e]));for(let t of e.cubes){let e=n.get(t.name);e&&e.mesh.faces.length===t.mesh.faces.length&&e.mesh.faces.every((e,n)=>e.v.length===t.mesh.faces[n].v.length)&&e.mesh.faces.forEach((e,n)=>{t.mesh.faces[n].uv=e.uv.map(e=>[e[0],e[1]])})}}function Bc(e,t,n,r){return[[e,t+r],[e+n,t+r],[e+n,t],[e,t]]}function Vc(e){return e.map(e=>[e[0],e[1]])}var Hc=.01;function Uc(e,t,n){let r=e.length,i=0,a=0;for(let[t,n]of e)i+=t,a+=n;i/=r,a/=r;let o=[];for(let[r,s]of e){let e=i-r,c=a-s,l=Math.hypot(e,c),u=l>1e-9?Math.min(Hc,l*.5)/l:0;o.push((r+e*u)/t,1-(s+c*u)/n)}return o}function Wc(e){return e.tile?{tile:{...e.tile}}:{}}function Gc(e){let t=e;if(!t||typeof t!=`object`||typeof t.texture!=`string`||!t.texture||!Number.isInteger(t.col)||!Number.isInteger(t.row)||t.col<0||t.row<0)return;let n={texture:t.texture,col:t.col,row:t.row},r=typeof t.rot==`number`&&Number.isFinite(t.rot)?(Math.round(t.rot)%4+4)%4:0;return r&&(n.rot=r),t.flip===!0&&(n.flip=!0),n}var Kc=[`pz`,`nz`,`px`,`nx`,`py`,`ny`],qc={pz:[4,5,7,6],nz:[1,0,2,3],px:[5,1,3,7],nx:[0,4,6,2],py:[6,7,3,2],ny:[0,1,5,4]};function Jc(e,t){return[(t&1?.5:-.5)*e[0],(t&2?.5:-.5)*e[1],(t&4?.5:-.5)*e[2]]}var Yc={x:0,y:0,w:16,h:16},Xc=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],Zc=(e,t,n)=>[e[0]+(t[0]-e[0])*n,e[1]+(t[1]-e[1])*n,e[2]+(t[2]-e[2])*n],Qc=(e,t,n)=>[e[0]+(t[0]-e[0])*n,e[1]+(t[1]-e[1])*n],$c=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2];function el(e,t){return e<t?`${e}_${t}`:`${t}_${e}`}function tl(e){return{verts:e.verts.map(e=>[...e]),faces:e.faces.map(e=>({v:[...e.v],uv:Vc(e.uv),...Wc(e)}))}}function nl(e){let t=e;return!t||!Array.isArray(t.verts)||!Array.isArray(t.faces)||t.verts.length<3||t.faces.length<1||!t.verts.every(e=>Array.isArray(e)&&e.length===3&&e.every(e=>Number.isFinite(e)))?!1:t.faces.every(e=>e&&Array.isArray(e.v)&&e.v.length>=3&&e.v.every(e=>Number.isInteger(e)&&e>=0&&e<t.verts.length)&&Array.isArray(e.uv)&&e.uv.length===e.v.length&&e.uv.every(e=>Array.isArray(e)&&e.length===2&&Number.isFinite(e[0])&&Number.isFinite(e[1])))}function rl(e,t,n,r=Yc){let i=[];for(let n=0;n<8;n++){let r=Jc(e,n),a=t?.[n];i.push(a?[r[0]+a[0],r[1]+a[1],r[2]+a[2]]:r)}return{verts:i,faces:Kc.map(e=>({v:[...qc[e]],uv:Vc(n?.[e]??Bc(r.x,r.y,r.w,r.h))}))}}function il(e){let t=[1/0,1/0,1/0],n=[-1/0,-1/0,-1/0];for(let r of e.verts)for(let e=0;e<3;e++)r[e]<t[e]&&(t[e]=r[e]),r[e]>n[e]&&(n[e]=r[e]);return e.verts.length===0?{min:[0,0,0],max:[0,0,0]}:{min:t,max:n}}function al(e){let t=0,n=0,r=0,i=e.length;for(let a=0;a<i;a++){let o=e[a],s=e[(a+1)%i];t+=(o[1]-s[1])*(o[2]+s[2]),n+=(o[2]-s[2])*(o[0]+s[0]),r+=(o[0]-s[0])*(o[1]+s[1])}let a=Math.hypot(t,n,r);return a>1e-12?[t/a,n/a,r/a]:[0,1,0]}function ol(e,t){return al(e.faces[t].v.map(t=>e.verts[t]))}function sl(e,t){let n=e.faces[t],r=[0,0,0];for(let t of n.v){let n=e.verts[t];r[0]+=n[0],r[1]+=n[1],r[2]+=n[2]}let i=1/n.v.length;return[r[0]*i,r[1]*i,r[2]*i]}function cl(e){let t=new Map;return e.faces.forEach((e,n)=>{let r=e.v.length;for(let i=0;i<r;i++){let a=e.v[i],o=e.v[(i+1)%r],s=el(a,o),c=t.get(s);c||(c={a:Math.min(a,o),b:Math.max(a,o),faces:[]},t.set(s,c)),c.faces.push({face:n,slot:i})}}),t}function ll(e,t){let n=e.faces[t],r=n.v.length;if(r<3)return[];if(r===3)return[[0,1,2]];if(r===4)return[[0,1,2],[0,2,3]];let i=n.v.map(t=>e.verts[t]),a=ol(e,t),o=[Math.abs(a[0]),Math.abs(a[1]),Math.abs(a[2])],s=o[0]>=o[1]&&o[0]>=o[2]?0:o[1]>=o[2]?1:2,c=i.map(e=>s===0?[e[1],e[2]]:s===1?[e[2],e[0]]:[e[0],e[1]]),l=0;for(let e=0;e<r;e++){let t=c[e],n=c[(e+1)%r];l+=t[0]*n[1]-n[0]*t[1]}let u=l>=0?1:-1,d=(e,t,n)=>(t[0]-e[0])*(n[1]-e[1])-(t[1]-e[1])*(n[0]-e[0]),f=(e,t,n,r)=>u*d(t,n,e)>=-1e-12&&u*d(n,r,e)>=-1e-12&&u*d(r,t,e)>=-1e-12,p=(e,t)=>Math.abs(e[0]-t[0])<1e-12&&Math.abs(e[1]-t[1])<1e-12,m=Array.from({length:r},(e,t)=>t),h=[],g=r*r;for(;m.length>3&&g-->0;){let e=!1;for(let t=0;t<m.length;t++){let n=m[(t+m.length-1)%m.length],r=m[t],i=m[(t+1)%m.length];if(u*d(c[n],c[r],c[i])<=1e-12)continue;let a=!0;for(let e of m){if(e===n||e===r||e===i)continue;let t=c[e];if(!(p(t,c[n])||p(t,c[r])||p(t,c[i]))&&f(t,c[n],c[r],c[i])){a=!1;break}}if(a){h.push([n,r,i]),m.splice(t,1),e=!0;break}}if(!e)break}if(m.length===3)h.push([m[0],m[1],m[2]]);else if(m.length>3)for(let e=1;e<m.length-1;e++)h.push([m[0],m[e],m[e+1]]);return h}function ul(e){let t=Math.abs(e[0]),n=Math.abs(e[1]),r=Math.abs(e[2]);return n>=t&&n>=r?e[1]>=0?{u:[1,0,0],v:[0,0,-1]}:{u:[1,0,0],v:[0,0,1]}:r>=t?e[2]>=0?{u:[1,0,0],v:[0,1,0]}:{u:[-1,0,0],v:[0,1,0]}:e[0]>=0?{u:[0,0,-1],v:[0,1,0]}:{u:[0,0,1],v:[0,1,0]}}function dl(e,t){let n=e.faces[t],{u:r,v:i}=ul(ol(e,t)),a=n.v.map(t=>[$c(e.verts[t],r),$c(e.verts[t],i)]),o=Math.min(...a.map(e=>e[0])),s=Math.min(...a.map(e=>e[1])),c=a.map(e=>[e[0]-o,e[1]-s]);return{coords:c,width:Math.max(...c.map(e=>e[0])),height:Math.max(...c.map(e=>e[1]))}}function fl(e,t,n){let{coords:r,width:i,height:a}=dl(e,t),o=i>1e-9?i:1,s=a>1e-9?a:1;return r.map(([e,t])=>[n.x+e/o*n.w,n.y+n.h-t/s*n.h])}function pl(e,t){let n=[...new Set(t)].filter(t=>t>=0&&t<e.faces.length).sort((e,t)=>e-t);if(n.length===0)return[];let r=new Set(n),i=new Map,a=(t,n)=>{let r=el(t,n),a=i.get(r);return a===void 0&&(a=e.verts.length,e.verts.push(Zc(e.verts[t],e.verts[n],.5)),i.set(r,a)),a},o=[],s=[],c=new Map;for(let t of n){let n=e.faces[t],r=n.v.length,i=sl(e,t),o=e.verts.length;e.verts.push(i);let l=[0,0];for(let e of n.uv)l[0]+=e[0]/r,l[1]+=e[1]/r;let u=n.v.map((e,t)=>a(e,n.v[(t+1)%r])),d=n.uv.map((e,t)=>Qc(e,n.uv[(t+1)%r],.5)),f=[];for(let e=0;e<r;e++){let t=(e+r-1)%r;f.push({v:[n.v[e],u[e],o,u[t]],uv:[[...n.uv[e]],[...d[e]],[...l],[...d[t]]],...Wc(n)})}c.set(t,f[0]);for(let e=1;e<f.length;e++)s.push(f[e])}for(let t=0;t<e.faces.length;t++){if(r.has(t))continue;let n=e.faces[t],a=n.v.length,o=[],s=[];for(let e=0;e<a;e++){o.push(n.v[e]),s.push(n.uv[e]);let t=el(n.v[e],n.v[(e+1)%a]),r=i.get(t);r!==void 0&&(o.push(r),s.push(Qc(n.uv[e],n.uv[(e+1)%a],.5)))}n.v=o,n.uv=s}for(let[t,n]of c)e.faces[t]=n,o.push(t);let l=e.faces.length;e.faces.push(...s);for(let e=0;e<s.length;e++)o.push(l+e);return o}function ml(e,t,n){for(let r of t)r>=0&&r<e.faces.length&&(e.faces[r].uv=fl(e,r,n))}function hl(e,t=Yc){let[n,r,i]=e,a=n/2,o=r/2,s=i/2,c=[[-a,-o,s],[a,-o,s],[-a,-o,-s],[a,-o,-s],[-a,o,-s],[a,o,-s]],l=e=>({v:e,uv:[]}),u=[l([0,1,5,4]),l([2,4,5,3]),l([0,2,3,1]),l([0,4,2]),l([1,3,5])],d={verts:c,faces:u};return _l(d),ml(d,u.map((e,t)=>t),t),d}function gl(e,t,n,r=Yc){let i=Math.max(3,Math.floor(e)),a=[];for(let e=0;e<i;e++){let r=e/i*Math.PI*2;a.push([Math.cos(r)*t,-n/2,Math.sin(r)*t])}for(let e=0;e<i;e++){let r=e/i*Math.PI*2;a.push([Math.cos(r)*t,n/2,Math.sin(r)*t])}let o=[],s=Array.from({length:i},(e,t)=>t),c=Array.from({length:i},(e,t)=>i+t);o.push({v:c,uv:[]}),o.push({v:s,uv:[]});for(let e=0;e<i;e++){let t=(e+1)%i;o.push({v:[e,t,i+t,i+e],uv:[]})}let l={verts:a,faces:o};return _l(l),ml(l,o.map((e,t)=>t),r),l}function _l(e){let{min:t,max:n}=il(e),r=[(t[0]+n[0])/2,(t[1]+n[1])/2,(t[2]+n[2])/2];e.faces.forEach((t,n)=>{$c(ol(e,n),Xc(sl(e,n),r))<0&&(t.v.reverse(),t.uv.reverse())})}function vl(e=1,t=Yc){let n=e/2,r={verts:[[-n,-n,0],[n,-n,0],[n,n,0],[-n,n,0],[0,-n,n],[0,-n,-n],[0,n,-n],[0,n,n]],faces:[{v:[0,1,2,3],uv:[]},{v:[4,5,6,7],uv:[]}]};return ml(r,[0,1],t),r}function yl(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function bl(e=1,t=1,n=Yc){let r=yl(e),i=rl([t,t,t],null,null,n);pl(i,i.faces.map((e,t)=>t));let a=t/2;i.verts=i.verts.map(e=>{let t=Math.hypot(e[0],e[1],e[2])||1,n=a*1.12,i=.45+r()*.25,o=.82+r()*.36,s=1+(r()-.5)*.35,c=1+(r()-.5)*.35,l=Zc(e,[e[0]/t*n,e[1]/t*n,e[2]/t*n],i);return[l[0]*o*s,l[1]*o*.85,l[2]*o*c]});let{min:o}=il(i),s=o[1]+(il(i).max[1]-o[1])*.18;return i.verts=i.verts.map(e=>e[1]<s?[e[0],s,e[2]]:e),i}var xl=`Items-16.png`,Sl={coin:0,coinEdge:1,key:2,apple:3,stem:4,leaf:5,hazard:6,flag:7},Cl=e=>({x:e*16,y:0,w:16,h:16}),wl={coin:`item-coin`,key:`item-key`,apple:`item-apple`,flag:`item-flag`,trophy:`item-trophy`};function Tl(e,t,n,r,i=[0,0,0],a=null){return{id:e(),name:t,position:n,rotation:i,mesh:r,bone:a}}function El(e,t,n,r){let i=e();for(let e of t)e.bone=i;return{bones:[{id:i,name:`Root`,parent:null,pivot:n}],clips:[{id:e(),name:`spin`,duration:r,loop:!0,smooth:!0,tracks:{Root:{rot:[{t:0,v:[0,0,0]},{t:r/2,v:[0,180,0]},{t:r,v:[0,360,0]}],pos:[{t:0,v:[0,0,0]},{t:r/4,v:[0,.05,0]},{t:r/2,v:[0,0,0]},{t:r*3/4,v:[0,-.05,0]},{t:r,v:[0,0,0]}]}}}]}}function Dl(e,t){let n={id:wl[e],texture:xl};switch(e){case`coin`:{let e=Tl(t,`Coin`,[0,.5,0],gl(10,.27,.07,Cl(Sl.coin)),[90,0,0]);return{...n,name:`Coin`,cubes:[e],...El(t,[e],[0,.5,0],1.4)}}case`key`:{let e=[Tl(t,`Ring`,[0,.78,0],rl([.22,.22,.06],null,null,Cl(Sl.key))),Tl(t,`Shaft`,[0,.5,0],rl([.07,.4,.06],null,null,Cl(Sl.key))),Tl(t,`Tooth`,[.08,.36,0],rl([.1,.07,.06],null,null,Cl(Sl.key))),Tl(t,`Tooth 2`,[.07,.27,0],rl([.08,.07,.06],null,null,Cl(Sl.key)))];return{...n,name:`Key`,cubes:e,...El(t,e,[0,.52,0],1.6)}}case`apple`:{let e=[Tl(t,`Apple`,[0,.36,0],bl(11,.5,Cl(Sl.apple))),Tl(t,`Stem`,[0,.68,0],rl([.05,.12,.05],null,null,Cl(Sl.stem))),Tl(t,`Leaf`,[.08,.72,0],rl([.16,.03,.09],null,null,Cl(Sl.leaf)))];return{...n,name:`Apple`,cubes:e,...El(t,e,[0,.4,0],3)}}case`trophy`:{let e=[Tl(t,`Base`,[0,.06,0],rl([.5,.12,.5],null,null,Cl(Sl.coinEdge))),Tl(t,`Stem`,[0,.28,0],rl([.12,.32,.12],null,null,Cl(Sl.coin))),Tl(t,`Cup`,[0,.62,0],gl(8,.26,.36,Cl(Sl.coin))),Tl(t,`Handle`,[.33,.64,0],rl([.1,.22,.06],null,null,Cl(Sl.coinEdge))),Tl(t,`Handle 2`,[-.33,.64,0],rl([.1,.22,.06],null,null,Cl(Sl.coinEdge)))];return{...n,name:`Goal`,cubes:e,...El(t,e,[0,.4,0],4)}}case`flag`:{let e=[Tl(t,`Pole`,[0,.8,0],rl([.08,1.6,.08],null,null,Cl(Sl.stem))),Tl(t,`Cloth`,[.3,1.4,0],rl([.5,.32,.04],null,null,Cl(Sl.flag)))];return{...n,name:`Checkpoint`,cubes:e,bones:[],clips:[]}}}}var Ol=[{value:`touch`,label:`the player touches this`},{value:`stomp`,label:`the player jumps on top of this`},{value:`interact`,label:`the player presses Interact near this`},{value:`start`,label:`the level starts`},{value:`timer`,label:`some seconds have passed`},{value:`when`,label:`the conditions become true`}],kl=[`>=`,`>`,`<=`,`<`,`==`,`!=`],Al=.5,jl=class{constructor(e){X(this,`values`,new Map),X(this,`defs`,new Map),X(this,`version`,0),this.load(e)}load(e){this.defs=new Map(e.map(e=>[e.name,e])),this.reset()}reset(){this.values.clear();for(let e of this.defs.values())this.values.set(e.name,this.clamp(e,e.initial));this.version++}clamp(e,t){if(!e)return t;let n=t;return e.min!==null&&n<e.min&&(n=e.min),e.max!==null&&n>e.max&&(n=e.max),n}has(e){return this.defs.has(e)}get(e){return this.values.get(e)??0}set(e,t){let n=this.clamp(this.defs.get(e),t);this.values.get(e)!==n&&(this.values.set(e,n),this.version++)}add(e,t){this.set(e,this.get(e)+t)}snapshot(){return Object.fromEntries(this.values)}};function Ml(e,t,n){switch(t){case`>=`:return e>=n;case`>`:return e>n;case`<=`:return e<=n;case`<`:return e<n;case`==`:return e===n;case`!=`:return e!==n}}function Nl(e,t){return e.replace(/\{([^{}]+)\}/g,(e,n)=>{let r=n.trim();if(!t.has(r))return e;let i=t.get(r);return Number.isInteger(i)?String(i):i.toFixed(1)})}function Pl(e,t){return e.conditions.every(e=>Ml(t.get(e.variable),e.op,e.value))}function Fl(e,t){let n=[];for(let r of e)switch(r.type){case`set`:t.set(r.variable,r.value);break;case`add`:t.add(r.variable,r.value);break;case`message`:n.push({type:`message`,text:Nl(r.text,t),seconds:r.seconds});break;case`end`:n.push({type:`end`,title:Nl(r.title,t),text:Nl(r.text,t)});break;case`sound`:r.sound&&n.push({type:`sound`,sound:r.sound});break;case`destroy`:n.push(r.target?{type:`destroy`,target:r.target}:{type:`destroy`});break;case`move`:case`patrol`:n.push({...r,offset:[...r.offset]});break;case`dialogue`:n.push({type:`dialogue`,speaker:Nl(r.speaker,t),lines:r.lines.map(e=>Nl(e,t)),...r.voice?{voice:r.voice}:{},...r.pitch===void 0?{}:{pitch:r.pitch},...r.speed===void 0?{}:{speed:r.speed}});break;case`choice`:n.push({type:`choice`,question:Nl(r.question,t),options:r.options.map(e=>({label:Nl(e.label,t),actions:e.actions})),...r.speaker?{speaker:Nl(r.speaker,t)}:{},...r.voice?{voice:r.voice}:{},...r.pitch===void 0?{}:{pitch:r.pitch},...r.speed===void 0?{}:{speed:r.speed}});break;default:n.push({...r})}return n}function Il(e,t){return Pl(e,t)?Fl(e.actions,t):[]}function Ll(e,t,n){let r=[];for(let i of e)i.event===t&&r.push(...Il(i,n));return r}var Rl=new Set(kl),zl=new Set(Ol.map(e=>e.value)),Bl=(e,t)=>typeof e==`number`&&Number.isFinite(e)?e:t;function Vl(e,t){if(!Array.isArray(e))return[];let n=[],r=new Set;for(let i of e)i&&typeof i.name==`string`&&i.name.trim()&&!r.has(i.name)&&(r.add(i.name),n.push({id:typeof i.id==`string`?i.id:t(),name:i.name,initial:Bl(i.initial,0),min:typeof i.min==`number`&&Number.isFinite(i.min)?i.min:null,max:typeof i.max==`number`&&Number.isFinite(i.max)?i.max:null,hud:i.hud===!0,icon:typeof i.icon==`string`?i.icon:``,label:typeof i.label==`string`?i.label:``}));return n}function Hl(e){let t={};return typeof e.voice==`string`&&e.voice&&(t.voice=e.voice),typeof e.pitch==`number`&&Number.isFinite(e.pitch)&&e.pitch!==1&&(t.pitch=Math.min(2,Math.max(Al,e.pitch))),typeof e.speed==`number`&&Number.isFinite(e.speed)&&e.speed!==30&&(t.speed=Math.min(120,Math.max(0,e.speed))),t}function Ul(e){let t=e,n=e=>typeof e==`string`?e:``;switch(t?.type){case`set`:case`add`:return typeof t.variable==`string`?{type:t.type,variable:t.variable,value:Bl(t.value,0)}:null;case`message`:return{type:`message`,text:n(t.text),seconds:Math.max(.2,Bl(t.seconds,2))};case`sound`:return{type:`sound`,sound:n(t.sound)};case`destroy`:return typeof t.target==`string`&&t.target?{type:`destroy`,target:t.target}:{type:`destroy`};case`move`:case`patrol`:{let e=Array.isArray(t.offset)&&t.offset.length===3&&t.offset.every(e=>Number.isFinite(e))?t.offset:[0,2,0],r=[e[0],e[1],e[2]];return t.type===`patrol`?{type:`patrol`,target:n(t.target),offset:r,seconds:Math.max(.2,Bl(t.seconds,3))}:{type:`move`,target:n(t.target),offset:r,seconds:Math.max(0,Bl(t.seconds,1))}}case`animate`:return{type:`animate`,target:n(t.target),animation:n(t.animation)};case`end`:return{type:`end`,title:n(t.title)||`The end`,text:n(t.text)};case`level`:return{type:`level`,level:n(t.level)};case`chase`:return{type:`chase`,target:n(t.target),speed:Math.min(20,Math.max(.1,Bl(t.speed,2.5))),range:Math.min(80,Math.max(1,Bl(t.range,10)))};case`hurt`:return{type:`hurt`,amount:Math.max(0,Bl(t.amount,1)),variable:n(t.variable)||`health`,knockback:Math.min(30,Math.max(0,Bl(t.knockback,6)))};case`bounce`:return{type:`bounce`,strength:Math.min(30,Math.max(2,Bl(t.strength,10)))};case`dialogue`:{let e=Array.isArray(t.lines)?t.lines.filter(e=>typeof e==`string`):[];return{type:`dialogue`,speaker:n(t.speaker),lines:e.length>0?e:[`...`],...Hl(t)}}case`choice`:{let e=[];for(let r of Array.isArray(t.options)?t.options:[]){if(!r||typeof r!=`object`||e.length>=4)continue;let t=(Array.isArray(r.actions)?r.actions:[]).map(Ul).filter(e=>e!==null&&e.type!==`choice`);e.push({label:n(r.label)||`Answer`,actions:t})}return{type:`choice`,question:n(t.question),options:e.length>0?e:[{label:`OK`,actions:[]}],...n(t.speaker)?{speaker:n(t.speaker)}:{},...Hl(t)}}case`respawn`:case`checkpoint`:case`restart`:return{type:t.type};default:return null}}function Wl(e,t){if(!Array.isArray(e))return[];let n=[];for(let r of e){if(!r||!zl.has(r.event))continue;let e=[];for(let t of Array.isArray(r.conditions)?r.conditions:[])t&&typeof t.variable==`string`&&Rl.has(t.op)&&e.push({variable:t.variable,op:t.op,value:Bl(t.value,0)});let i=(Array.isArray(r.actions)?r.actions:[]).map(Ul).filter(e=>e!==null),a={id:typeof r.id==`string`?r.id:t(),event:r.event,conditions:e,actions:i};r.event===`timer`&&(a.seconds=Math.max(.1,Bl(r.seconds,5)),r.repeat===!0&&(a.repeat=!0)),n.push(a)}return n}function Gl(e,t){let n=e.label.trim()||e.name,r=Number.isInteger(t)?String(t):t.toFixed(1),i=e.max===null?``:` / ${Number.isInteger(e.max)?e.max:e.max.toFixed(1)}`;return`${e.icon?`${e.icon} `:``}${n}: ${r}${i}`}var Kl=44100;function ql(){return{wave:0,attack:0,sustain:.3,punch:0,decay:.4,startFreq:.3,minFreq:0,slide:0,deltaSlide:0,vibratoDepth:0,vibratoSpeed:0,changeAmount:0,changeSpeed:0,squareDuty:0,dutySweep:0,repeatSpeed:0,phaserOffset:0,phaserSweep:0,lpfCutoff:1,lpfSweep:0,lpfResonance:0,hpfCutoff:0,hpfSweep:0,volume:.5}}function Jl(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Yl(e,t=Kl,n=1){let r=Jl(n),i=e=>e*e,a=e=>e*e*e,o=0,s=0,c=0,l=0,u=0,d=0,f=1,p=0,m=0,h=t=>{o=100/(i(e.startFreq)+.001),s=100/(i(e.minFreq)+.001),c=1-a(e.slide)*.01,l=-a(e.deltaSlide)*1e-6,u=.5-e.squareDuty*.5,d=-e.dutySweep*5e-5,f=e.changeAmount>=0?1-i(e.changeAmount)*.9:1+i(e.changeAmount)*10,p=0,m=e.changeSpeed===1?0:Math.floor(i(1-e.changeSpeed)*2e4+32)};h(!0);let g=a(e.lpfCutoff)*.1,_=1+e.lpfSweep*1e-4,v=5/(1+i(e.lpfResonance)*20)*(.01+g);v>.8&&(v=.8);let y=i(e.hpfCutoff)*.1,b=1+e.hpfSweep*3e-4,x=0,S=i(e.vibratoSpeed)*.01,C=e.vibratoDepth*.5,w=[Math.floor(i(e.attack)*1e5),Math.floor(i(e.sustain)*1e5),Math.floor(i(e.decay)*1e5)],T=0,E=0,D=i(e.phaserOffset)*1020;e.phaserOffset<0&&(D=-D);let O=i(e.phaserSweep);e.phaserSweep<0&&(O=-O);let k=Math.abs(Math.floor(D)),A=0,j=new Float32Array(1024),M=new Float32Array(32);for(let e=0;e<32;e++)M[e]=r()*2-1;let N=0,P=e.repeatSpeed===0?0:Math.floor(i(1-e.repeatSpeed)*2e4+32),F=0,I=Math.floor(o),L=0,ee=0,R=0,te=w[0]+w[1]+w[2],z=[],ne=Kl/t,re=0,ie=0,ae=Math.min(te+64,Kl*4),oe=.25*(2*e.volume),se=!0;for(;se&&ie<ae;){N++,P!==0&&N>=P&&(N=0,h(!1)),p++,m!==0&&p>=m&&(m=0,o*=f),c+=l,o*=c,o>s&&(o=s,e.minFreq>0&&(se=!1));let t=o;C>0&&(x+=S,t=o*(1+Math.sin(x)*C)),I=Math.floor(t),I<8&&(I=8),u+=d,u=Math.min(.5,Math.max(0,u)),E++,E>w[T]&&(E=0,T++,T===3&&(se=!1));let n=0;T===0?n=w[0]>0?E/w[0]:1:T===1?n=1+(w[1]>0?1-E/w[1]:0)*2*e.punch:T===2&&(n=w[2]>0?1-E/w[2]:0),D+=O,k=Math.min(1023,Math.abs(Math.floor(D))),b!==0&&(y*=b,y=Math.min(.1,Math.max(1e-5,y)));let i=0;for(let t=0;t<8;t++){let t=0;if(F++,F>=I&&(F%=I,e.wave===3))for(let e=0;e<32;e++)M[e]=r()*2-1;let a=F/I;switch(e.wave){case 0:t=a<u?.5:-.5;break;case 1:t=1-a*2;break;case 2:t=Math.sin(a*2*Math.PI);break;case 3:t=M[Math.floor(F*32/I)]}let o=L;g*=_,g=Math.min(.1,Math.max(0,g)),e.lpfCutoff===1?(L=t,ee=0):(ee+=(t-L)*g,ee-=ee*v),L+=ee,R+=L-o,R-=R*y,t=R,j[A&1023]=t,t+=j[A-k+1024&1023],A=A+1&1023,i+=t*n}for(i=i/8*oe*2,i=Math.max(-1,Math.min(1,i)),re+=1;re>=ne;)re-=ne,z.push(i);ie++}let ce=z.length,le=Math.min(64,ce);for(let e=0;e<le;e++)z[ce-1-e]=z[ce-1-e]*(e/le);return Float32Array.from(z)}var Xl=e=>Math.min(1,Math.max(0,e)),Zl=e=>Math.min(1,Math.max(-1,e));function Ql(e,t=1){let n=Jl(t*7919+13),r=ql();switch(e){case`coin`:return{...r,wave:0,startFreq:.55+n()*.1,sustain:.02+n()*.03,decay:.22+n()*.08,punch:.4+n()*.2,changeAmount:.35+n()*.1,changeSpeed:.55+n()*.1,squareDuty:.3};case`jump`:return{...r,wave:0,startFreq:.3+n()*.08,slide:.28+n()*.1,sustain:.08+n()*.05,decay:.2+n()*.06,squareDuty:.4+n()*.3,hpfCutoff:.1+n()*.1};case`hit`:return{...r,wave:3,startFreq:.25+n()*.12,slide:-.4-n()*.2,sustain:.04+n()*.04,decay:.2+n()*.1,punch:.4,lpfCutoff:.7};case`powerup`:return{...r,wave:0,startFreq:.25+n()*.08,slide:.3+n()*.1,repeatSpeed:.55+n()*.15,sustain:.25,decay:.3+n()*.1,squareDuty:.5};case`explosion`:return{...r,wave:3,startFreq:.1+n()*.1,slide:-.2-n()*.1,sustain:.28,decay:.55+n()*.1,punch:.6,vibratoDepth:.2,vibratoSpeed:.3,lpfCutoff:.6};case`laser`:return{...r,wave:1,startFreq:.7+n()*.15,slide:-.4-n()*.2,minFreq:.15,sustain:.1,decay:.2,lpfCutoff:.9};case`blip`:return{...r,wave:0,startFreq:.45+n()*.2,sustain:.03,decay:.12,squareDuty:.5,hpfCutoff:.1};case`door`:return{...r,wave:3,startFreq:.18+n()*.05,slide:.15,sustain:.12,decay:.3,lpfCutoff:.35,lpfSweep:.2,punch:.2};case`random`:{let e=Math.floor(n()*4);return{...r,wave:e,startFreq:Xl(.15+n()*.6),slide:Zl((n()-.5)*1.2),sustain:.05+n()*.25,decay:.15+n()*.4,punch:n()*.6,squareDuty:n(),vibratoDepth:n()<.3?n()*.4:0,vibratoSpeed:n()*.6,changeAmount:n()<.4?(n()-.5)*1.4:0,changeSpeed:n(),lpfCutoff:n()<.5?1:.4+n()*.5}}}}var $l=[{value:`square`,label:`Square`},{value:`triangle`,label:`Triangle`},{value:`saw`,label:`Sawtooth`},{value:`sine`,label:`Sine`},{value:`piano`,label:`Soft piano`},{value:`bell`,label:`Bell`},{value:`pad`,label:`Pad (slow, soft)`},{value:`noise`,label:`Noise (drums)`}],eu={square:1,triangle:1,saw:1,sine:1,noise:1,piano:8,bell:8,pad:16},tu=[8,16,32,64,128,256,512],nu={major:[0,2,4,5,7,9,11],minor:[0,2,3,5,7,8,10],pentatonic:[0,2,4,7,9],blues:[0,3,5,6,7,10]};function ru(e){return nu[e].length*2}function iu(e){return e.length??eu[e.wave]}function au(){let e=e=>Array(e).fill(-1);return{bpm:120,stepCount:16,root:57,scale:`pentatonic`,channels:[{wave:`square`,volume:.5,octave:1,steps:e(16)},{wave:`triangle`,volume:.7,octave:-1,steps:e(16)},{wave:`noise`,volume:.4,octave:0,steps:e(16)}]}}function ou(e,t,n){let r=nu[e.scale],i=Math.floor(t/r.length);return 440*2**((e.root+r[t%r.length]+12*(i+n)-69)/12)}var su=4096,cu=(()=>{let e=new Float32Array(4097);for(let t=0;t<=su;t++)e[t]=Math.sin(t/su*2*Math.PI);return e})();function lu(e){let t=(e-Math.floor(e))*su,n=t|0,r=t-n;return cu[n]+(cu[n+1]-cu[n])*r}function uu(e,t,n,r,i,a){let o=e.length,s=Math.max(1,Math.floor(r*1.5*a)),c=Math.max(.15,r/2.5),l=e=>Math.exp(-1/(e*a)),u=l(c),d=l(Math.min(.14,c*.3)),f=l(c*.5),p=l(c*.3),m=l(.004),h=1,g=1,_=1,v=1,y=1,b=0,x=n/a,S=Math.floor(s*.12);for(let n=0;n<s;n++){b+=x;let r=(lu(b)+.32*_*lu(b*2)+.12*v*lu(b*3)+.04*v*lu(b*4))*(.72*h+.28*g)*(1-y)*i;n>s-S&&(r*=(s-n)/S),e[(t+n)%o]+=r,h*=u,g*=d,_*=f,v*=p,y*=m}}function du(e,t,n,r,i,a){let o=e.length,s=Math.max(1,Math.floor(r*1.4*a)),c=Math.max(.2,r/3),l=[[1,1,1],[2,.26,.55],[2.76,.3,.4],[5.4,.1,.2]],u=l.map(([,,e])=>Math.exp(-1/(c*e*a))),d=l.map(()=>1),f=Math.exp(-1/(.002*a)),p=1,m=Math.floor(s*.12);for(let r=0;r<s;r++){let c=0;for(let e=0;e<l.length;e++){let[t,i]=l[e];c+=lu(r/a*n*t)*i*d[e],d[e]=d[e]*u[e]}c*=(1-p)*i*.8,r>s-m&&(c*=(s-r)/m),e[(t+r)%o]+=c,p*=f}}function fu(e,t,n,r,i,a){let o=e.length,s=Math.min(2.2,r*.3),c=Math.min(3,r*.4),l=Math.max(1,Math.floor((r+c)*a)),u=r*a,d=Math.max(1,s*a),f=Math.max(1,c*a),p=0,m=.37,h=n/a,g=n*1.0016/a;for(let n=0;n<l;n++){p+=h,m+=g;let r=1;if(n<d){let e=Math.sin(Math.PI/2*(n/d));r=e*e}else if(n>u){let e=Math.cos(Math.PI/2*Math.min(1,(n-u)/f));r=e*e}let a=.55*lu(p)+.55*lu(m)+.18*lu(p*2)+.08*lu(m*3);e[(t+n)%o]+=a*r*i*.7}}function pu(e,t,n){let r=.5*n,i=.74+.18*n,a=e=>({buf:new Float32Array(Math.max(1,Math.round(e/1e3*t))),idx:0,lp:0}),o=[35.3,37.7,40.1,42.9,45.1,47.3,50.3,53.9].map(a),s=[12.6,9.8,6.5].map(a),c=e.length;for(let t=0;t<2;t++)for(let n=0;n<c;n++){let a=e[n]*.16,c=0;for(let e of o){let t=e.buf[e.idx];e.lp=t*.6+e.lp*.4,e.buf[e.idx]=a+e.lp*i,e.idx=e.idx+1===e.buf.length?0:e.idx+1,c+=t}let l=c;for(let e of s){let t=e.buf[e.idx],n=t-l;e.buf[e.idx]=l+t*.5,e.idx=e.idx+1===e.buf.length?0:e.idx+1,l=n}t===1&&(e[n]=e[n]+l*r)}}function mu(e,t=22050){let n=60/(e.bpm*4),r=Math.max(1,Math.round(n*t)),i=r*e.stepCount,a=new Float32Array(i),o=Jl(7),s=Jl(11),c=(e.reverb??0)>0||e.channels.some(e=>e.wave===`piano`||e.wave===`bell`||e.wave===`pad`);for(let c of e.channels){let l=Math.max(1,iu(c));for(let u=0;u<e.stepCount;u++){let d=c.steps[u];if(d===void 0||d<0)continue;let f=u*r;if(c.wave===`noise`){let e=Math.floor(r*(d===0?.9:d===1?.7:.25)),n=0;for(let r=0;r<e;r++){let s=r/e,l=(1-s)*(1-s),u;if(d===0){let e=120*(1-s*.8);u=Math.sin(r/t*2*Math.PI*e*(1+4*(1-s)))*l}else{let e=o()*2-1;n+=(e-n)*(d===1?.5:.95),u=n*l}a[(f+r)%i]+=u*c.volume*.5}continue}let p=ou(e,d,c.octave);if(c.wave===`piano`||c.wave===`bell`||c.wave===`pad`){let e=l*n,r=c.volume*.5*(.78+.22*s());c.wave===`piano`?uu(a,f,p,e,r,t):c.wave===`bell`?du(a,f,p,e,r,t):fu(a,f,p,e,r,t);continue}let m=Math.floor(r*l*.95),h=0;for(let e=0;e<m;e++){h+=p/t,h-=Math.floor(h);let n=0;switch(c.wave){case`square`:n=h<.5?.6:-.6;break;case`saw`:n=(1-h*2)*.6;break;case`triangle`:n=(h<.5?h*4-1:3-h*4)*.9;break;case`sine`:n=lu(h)*.9}let r=e/m,o=Math.min(1,e/(t*.004)),s=r>.8?(1-r)/.2:1;a[(f+e)%i]+=n*o*s*c.volume*.35}}}if((e.reverb??0)>0&&pu(a,t,Math.min(1,e.reverb)),c){let e=0;for(let t=0;t<i;t++)e=Math.max(e,Math.abs(a[t]));if(e>.92){let t=.92/e;for(let e=0;e<i;e++)a[e]=a[e]*t}}for(let e=0;e<i;e++)a[e]=Math.max(-1,Math.min(1,a[e]));return a}function hu(e){let t=au(),n=e??{},r=n.scale&&n.scale in nu?n.scale:t.scale,i=tu.includes(n.stepCount)?n.stepCount:16,a=ru(r),o=[];for(let e of Array.isArray(n.channels)?n.channels:t.channels){let t=$l.find(t=>t.value===e?.wave)?.value??`square`,n=Array.from({length:i},(t,n)=>{let r=e?.steps?.[n];return typeof r==`number`&&Number.isFinite(r)?Math.max(-1,Math.min(a-1,Math.round(r))):-1}),r=typeof e?.length==`number`&&Number.isFinite(e.length)?Math.max(1,Math.min(64,Math.round(e.length))):void 0;o.push({wave:t,volume:typeof e?.volume==`number`?Math.max(0,Math.min(1,e.volume)):.5,octave:typeof e?.octave==`number`?Math.max(-2,Math.min(2,Math.round(e.octave))):0,...r!==void 0&&r!==eu[t]?{length:r}:{},steps:n})}let s=typeof n.reverb==`number`&&Number.isFinite(n.reverb)?Math.max(0,Math.min(1,n.reverb)):0;return{bpm:typeof n.bpm==`number`?Math.max(40,Math.min(240,n.bpm)):t.bpm,stepCount:i,root:typeof n.root==`number`?Math.max(24,Math.min(96,Math.round(n.root))):t.root,scale:r,channels:o.length>0?o.slice(0,8):t.channels,...s>0?{reverb:s}:{}}}var gu=512,_u=32,vu=gu/_u,yu=ru(`major`)-1,bu=[[0,5,3,4,2,3,1,4],[0,3,5,4,0,3,1,4],[3,0,4,5,3,0,1,4],[5,3,0,4,5,3,1,4],[0,2,3,0,5,3,1,4]],xu={0:[[0,4],[7,2],[12,4],[20,7],[26,6]],5:[[0,5],[6,4],[10,2],[22,5],[28,4]],3:[[0,3],[8,5],[14,7],[24,5],[29,3]],4:[[0,4],[6,6],[12,8],[20,6],[26,4]],2:[[0,2],[7,4],[12,6],[22,4],[28,2]],1:[[0,1],[8,3],[14,5],[22,3],[28,1]]},Su={0:[[15,2],[27,4]],5:[[13,0],[29,2]],3:[[11,5],[25,7]],4:[[14,6],[28,8]],2:[[13,4],[27,6]],1:[[15,5],[29,3]]},Cu=e=>Math.max(0,Math.min(yu,e));function wu(e,t,n,r){return{wave:e,volume:t,octave:n,...r===eu[e]?{}:{length:r},steps:Array(gu).fill(-1)}}function Tu(e=0){let t=Jl(e*977+13),n=e===0,r=bu[n?0:Math.floor(t()*bu.length)],i=bu[n?1:Math.floor(t()*bu.length)],a=wu(`piano`,.75,1,8),o=wu(`piano`,.4,0,6),s=wu(`bell`,.32,2,8),c=wu(`piano`,.45,-1,16),l=wu(`pad`,.22,-1,30),u=wu(`pad`,.25,0,30),d=wu(`pad`,.2,0,30),f=(e,t,n)=>{t>=0&&t<gu&&(e.steps[t]=Cu(n))};for(let e=0;e<vu;e++){let p=e>=vu/2,m=(p?i:r)[e%8],h=e*_u;f(c,h,m),f(l,h,m),f(u,h,m+4),f(d,h,m+2+(m+2<7?7:0));let g=[m,m+2,m+4,m+7];if((n?p?[0,2,1,3]:[0,1,2,3]:[0,1,2,3].sort(()=>t()-.5)).forEach((e,t)=>f(o,h+t*8,g[e])),!(n?e===12:t()<.12)){let e=xu[m]??xu[0];e.forEach(([r,i],o)=>{if(p&&o===2||!n&&t()<.15)return;let s=p&&o===e.length-1?7:0;f(a,h+r+(p?2:0),i+s)})}(Su[m]??Su[0]).forEach(([r,i],a)=>{(n?e%2==0&&a===+!p:t()<.5)&&f(s,h+r+(p?3:0),i)})}return{bpm:n?60:52+Math.floor(t()*5)*4,stepCount:tu.includes(gu)?gu:512,root:n?48:[48,50,53,55][Math.floor(t()*4)],scale:`major`,reverb:n?.7:.55+t()*.25,channels:[a,o,s,c,l,u,d]}}var Eu={coin:`sfx-coin`,key:`sfx-key`,door:`sfx-door`,hit:`sfx-hit`,powerup:`sfx-powerup`,checkpoint:`sfx-checkpoint`,jump:`sfx-jump`,jump2:`sfx-jump2`,land:`sfx-land`,theme:`music-theme`,talk:`sfx-talk`,talkSoft:`sfx-talk-soft`,talkDeep:`sfx-talk-deep`,talkChirp:`sfx-talk-chirp`,talkMumble:`sfx-talk-mumble`},Du=[Eu.talk,Eu.talkSoft,Eu.talkDeep,Eu.talkChirp,Eu.talkMumble];function Ou(e,t,n,r,i=.8,a){return{id:e,name:t,kind:`sfx`,volume:i,seed:r,sfx:{...Ql(n,r),...a}}}function ku(e){switch(e){case Eu.coin:return Ou(e,`Coin`,`coin`,3);case Eu.key:return Ou(e,`Key`,`powerup`,5,.8,{sustain:.1,decay:.3,repeatSpeed:.35});case Eu.door:return Ou(e,`Door`,`door`,2);case Eu.hit:return Ou(e,`Hit`,`hit`,4);case Eu.powerup:return Ou(e,`Power-up`,`powerup`,1);case Eu.checkpoint:return Ou(e,`Checkpoint`,`blip`,7,.6,{startFreq:.42,changeAmount:.45,changeSpeed:.55,sustain:.1,decay:.28,punch:.15});case Eu.jump:return Ou(e,`Jump`,`jump`,2,.55);case Eu.jump2:return Ou(e,`Double jump`,`jump`,5,.55,{startFreq:.4});case Eu.land:return Ou(e,`Land`,`hit`,9,.35,{startFreq:.18,sustain:.01,decay:.12,slide:-.2});case Eu.theme:return{id:e,name:`Theme`,kind:`music`,volume:.55,music:Tu(0)};case Eu.talk:return Ou(e,`Voice: blip`,`blip`,11,.45,{wave:0,squareDuty:.35,startFreq:.36,minFreq:0,slide:.08,attack:0,sustain:.1,decay:.16,lpfCutoff:.55,punch:.1});case Eu.talkSoft:return Ou(e,`Voice: soft`,`blip`,12,.5,{wave:2,startFreq:.34,slide:0,attack:.04,sustain:.1,decay:.14,lpfCutoff:.8,punch:0});case Eu.talkDeep:return Ou(e,`Voice: deep`,`blip`,13,.5,{wave:1,startFreq:.22,slide:-.05,attack:0,sustain:.1,decay:.15,lpfCutoff:.45,punch:.2});case Eu.talkChirp:return Ou(e,`Voice: chirp`,`blip`,14,.4,{wave:0,squareDuty:.2,startFreq:.5,slide:.15,attack:0,sustain:.06,decay:.12,lpfCutoff:.7,punch:0});case Eu.talkMumble:return Ou(e,`Voice: mumble`,`blip`,15,.5,{wave:1,startFreq:.3,slide:.05,attack:.02,sustain:.11,decay:.15,lpfCutoff:.35,lpfResonance:.15,vibratoDepth:.1,vibratoSpeed:.4,punch:0});default:return null}}var Au=(e,t,n,r)=>typeof e==`number`&&Number.isFinite(e)?Math.min(n,Math.max(t,e)):r;function ju(e){let t=ql(),n=e??{},r={...t},i=n.wave;r.wave=i===0||i===1||i===2||i===3?i:0;let a=[`attack`,`sustain`,`punch`,`decay`,`startFreq`,`minFreq`,`vibratoDepth`,`vibratoSpeed`,`changeSpeed`,`squareDuty`,`repeatSpeed`,`lpfCutoff`,`lpfResonance`,`hpfCutoff`,`volume`],o=[`slide`,`deltaSlide`,`changeAmount`,`dutySweep`,`phaserOffset`,`phaserSweep`,`lpfSweep`,`hpfSweep`];for(let e of a)r[e]=Au(n[e],0,1,t[e]);for(let e of o)r[e]=Au(n[e],-1,1,t[e]);return r}function Mu(e,t){if(!Array.isArray(e))return[];let n=[],r=new Set;for(let i of e){if(!i||i.kind!==`sfx`&&i.kind!==`music`&&i.kind!==`file`)continue;let e=typeof i.id==`string`&&i.id&&!r.has(i.id)?i.id:t();r.add(e);let a={id:e,name:typeof i.name==`string`&&i.name?i.name:`Sound`,kind:i.kind,volume:Au(i.volume,0,1,.8)};if(i.kind===`sfx`)a.sfx=ju(i.sfx),a.seed=typeof i.seed==`number`?Math.floor(i.seed):1;else if(i.kind===`music`)a.music=hu(i.music);else{let e=i.file;if(!e||typeof e.data!=`string`||typeof e.mime!=`string`)continue;a.file={mime:e.mime,data:e.data}}n.push(a)}return n}var Nu=[{kind:`coin`,label:`Coin`,hint:`Touch it to get +1 coin`},{kind:`key`,label:`Key`,hint:`Touch it to get a key`},{kind:`apple`,label:`Apple`,hint:`Touch it to heal one heart`},{kind:`door`,label:`Door`,hint:`Solid until the player touches it with a key`},{kind:`checkpoint`,label:`Checkpoint`,hint:`Touch it to respawn here after a fall or a hit`},{kind:`hazard`,label:`Hazard`,hint:`Touch it to lose a heart and go back to the checkpoint`},{kind:`goal`,label:`Goal`,hint:`Touch it to win: the game stops with a “You win” screen`},{kind:`exit`,label:`Exit`,hint:`Touch it to go on to the next level`},{kind:`platform`,label:`Moving platform`,hint:`Slides back and forth; the player rides on it`},{kind:`sign`,label:`Sign`,hint:`Say something when the player presses Interact next to it`},{kind:`enemy`,label:`Slime`,hint:`Chases the player and hurts them; jump on it to get rid of it`},{kind:`npc`,label:`Villager`,hint:`Talks when the player presses Interact next to it`},{kind:`water`,label:`Water`,hint:`A pool: the player swims in it (jump swims up, crouch dives)`}],Pu={name:`coins`,initial:0,min:0,max:null,hud:!0,icon:`🪙`,label:`Coins`},Fu={name:`keys`,initial:0,min:0,max:null,hud:!0,icon:`🔑`,label:`Keys`},Iu={name:`health`,initial:3,min:0,max:3,hud:!0,icon:`❤`,label:`Health`};function Lu(e){switch(e){case`coin`:return[Pu];case`key`:case`door`:return[Fu];case`apple`:case`hazard`:case`enemy`:return[Iu];case`goal`:return[Pu];case`checkpoint`:case`exit`:case`platform`:case`sign`:case`npc`:case`water`:return[]}}function Ru(e,t){let n=e=>({id:t(),...e});switch(e){case`coin`:return[n({event:`touch`,conditions:[],actions:[{type:`add`,variable:`coins`,value:1},{type:`sound`,sound:Eu.coin},{type:`destroy`}]})];case`key`:return[n({event:`touch`,conditions:[],actions:[{type:`add`,variable:`keys`,value:1},{type:`sound`,sound:Eu.key},{type:`message`,text:`You found a key!`,seconds:2},{type:`destroy`}]})];case`apple`:return[n({event:`touch`,conditions:[{variable:`health`,op:`<`,value:3}],actions:[{type:`add`,variable:`health`,value:1},{type:`sound`,sound:Eu.powerup},{type:`destroy`}]})];case`door`:return[n({event:`touch`,conditions:[{variable:`keys`,op:`<`,value:1}],actions:[{type:`message`,text:`It is locked. Find a key.`,seconds:2}]}),n({event:`touch`,conditions:[{variable:`keys`,op:`>=`,value:1}],actions:[{type:`add`,variable:`keys`,value:-1},{type:`sound`,sound:Eu.door},{type:`message`,text:`The door opens`,seconds:2},{type:`move`,target:``,offset:[0,3,0],seconds:1}]})];case`checkpoint`:return[n({event:`touch`,conditions:[],actions:[{type:`checkpoint`},{type:`sound`,sound:Eu.checkpoint},{type:`message`,text:`Checkpoint!`,seconds:1.5}]})];case`goal`:return[n({event:`touch`,conditions:[],actions:[{type:`sound`,sound:Eu.powerup},{type:`end`,title:`You win!`,text:`Coins: {coins}`}]})];case`exit`:return[n({event:`touch`,conditions:[],actions:[{type:`sound`,sound:Eu.checkpoint},{type:`level`,level:``}]})];case`enemy`:return[n({event:`start`,conditions:[],actions:[{type:`chase`,target:``,speed:2.4,range:11}]}),n({event:`stomp`,conditions:[],actions:[{type:`sound`,sound:Eu.jump2},{type:`bounce`,strength:10},{type:`destroy`}]}),n({event:`touch`,conditions:[],actions:[{type:`hurt`,amount:1,variable:`health`,knockback:7},{type:`sound`,sound:Eu.hit}]}),n({event:`when`,conditions:[{variable:`health`,op:`<=`,value:0}],actions:[{type:`message`,text:`Game over. Starting again.`,seconds:2.5},{type:`restart`}]})];case`npc`:return[n({event:`interact`,conditions:[],actions:[{type:`dialogue`,speaker:`Villager`,lines:[`Hello, traveler!`,`Collect the coins, find the key and reach the trophy on top.`]}]})];case`water`:return[];case`sign`:return[n({event:`interact`,conditions:[],actions:[{type:`message`,text:`Hello! Change this text in Behavior.`,seconds:4}]})];case`platform`:return[n({event:`start`,conditions:[],actions:[{type:`patrol`,target:``,offset:[4,0,0],seconds:3}]})];case`hazard`:return[n({event:`touch`,conditions:[],actions:[{type:`add`,variable:`health`,value:-1},{type:`sound`,sound:Eu.hit},{type:`message`,text:`Ouch!`,seconds:1.2},{type:`respawn`}]}),n({event:`touch`,conditions:[{variable:`health`,op:`<=`,value:0}],actions:[{type:`message`,text:`Game over. Starting again.`,seconds:2.5},{type:`restart`}]})]}}function zu(e,t,n){return t.filter(t=>!e.some(e=>e.name===t.name)).map(e=>({...e,id:n()}))}var Bu={x:0,y:0,w:16,h:16};function Vu(e){let t=0;return e.faces.forEach((n,r)=>{for(let[i,a,o]of ll(e,r)){let r=e.verts[n.v[i]],s=e.verts[n.v[a]],c=e.verts[n.v[o]];t+=(r[0]*(s[1]*c[2]-s[2]*c[1])-r[1]*(s[0]*c[2]-s[2]*c[0])+r[2]*(s[0]*c[1]-s[1]*c[0]))/6}}),t}function Hu(e){if(!(Vu(e)>=0))for(let t of e.faces)t.v.reverse(),t.uv.reverse()}function Uu(e,t,n=`xy`,r=Bu){let i=e.length,a=t/2,o=(e,t,r)=>n===`xy`?[e,t,r]:[r,t,e],s=[];for(let[t,n]of e)s.push(o(t,n,a));for(let[t,n]of e)s.push(o(t,n,-a));let c=[];c.push({v:Array.from({length:i},(e,t)=>t),uv:[]}),c.push({v:Array.from({length:i},(e,t)=>2*i-1-t),uv:[]});for(let e=0;e<i;e++){let t=(e+1)%i;c.push({v:[e,i+e,i+t,t],uv:[]})}let l={verts:s,faces:c};return Hu(l),ml(l,c.map((e,t)=>t),r),l}function Wu(e){let t=0;for(let n=0;n<e.length;n++){let r=e[n],i=e[(n+1)%e.length];t+=r[0]*i[1]-i[0]*r[1]}return t/2}function Gu(e,t=5,n=Bu){let[r,i,a]=e,o=Math.max(2,Math.floor(t)),s=[[a/2,-i/2]];for(let e=0;e<o;e++){let t=-i/2+(e+1)*i/o;s.push([a/2-e*a/o,t]),s.push([a/2-(e+1)*a/o,t])}return s.push([-a/2,-i/2]),Uu(s,r,`zy`,n)}function Ku(e,t=1.4,n=2.2,r=8,i=Bu){let[a,o,s]=e,c=Math.min(t,a-.2)/2,l=Math.min(Math.max(n,c+.1),o-.1)-c,u=-o/2,d=[[-a/2,u],[-c,u],[-c,u+l]];for(let e=1;e<r;e++){let t=Math.PI-e/r*Math.PI;d.push([Math.cos(t)*c,u+l+Math.sin(t)*c])}return d.push([c,u+l],[c,u],[a/2,u],[a/2,o/2],[-a/2,o/2]),Wu(d)<0&&d.reverse(),Uu(d,s,`xy`,i)}function qu(e,t,n,r,i=Bu,a=0){let o=Math.max(3,Math.floor(e)),s=n<=1e-6,c=[];for(let e=0;e<o;e++){let n=a+e/o*Math.PI*2;c.push([Math.cos(n)*t,-r/2,Math.sin(n)*t])}if(s)c.push([0,r/2,0]);else for(let e=0;e<o;e++){let t=a+e/o*Math.PI*2;c.push([Math.cos(t)*n,r/2,Math.sin(t)*n])}let l=[];l.push({v:Array.from({length:o},(e,t)=>t),uv:[]}),s||l.push({v:Array.from({length:o},(e,t)=>o+t),uv:[]});for(let e=0;e<o;e++){let t=(e+1)%o;l.push(s?{v:[e,t,o],uv:[]}:{v:[e,t,o+t,o+e],uv:[]})}let u={verts:c,faces:l};return _l(u),ml(u,l.map((e,t)=>t),i),u}function Ju(e=.5,t=8,n=5,r=Bu){let i=Math.max(3,Math.floor(t)),a=Math.max(2,Math.floor(n)),o=[[0,e,0]];for(let t=1;t<a;t++){let n=t/a*Math.PI;for(let t=0;t<i;t++){let r=t/i*Math.PI*2;o.push([Math.sin(n)*Math.cos(r)*e,Math.cos(n)*e,Math.sin(n)*Math.sin(r)*e])}}o.push([0,-e,0]);let s=o.length-1,c=(e,t)=>1+(e-1)*i+t%i,l=[];for(let e=0;e<i;e++)l.push({v:[0,c(1,e+1),c(1,e)],uv:[]});for(let e=1;e<a-1;e++)for(let t=0;t<i;t++)l.push({v:[c(e,t),c(e,t+1),c(e+1,t+1),c(e+1,t)],uv:[]});for(let e=0;e<i;e++)l.push({v:[c(a-1,e),c(a-1,e+1),s],uv:[]});let u={verts:o,faces:l};return Hu(u),ml(u,l.map((e,t)=>t),r),u}function Yu(e=.5,t=8,n=3,r=Bu){let i=Math.max(3,Math.floor(t)),a=Math.max(1,Math.floor(n)),o=[[0,e,0]];for(let t=1;t<=a;t++){let n=t/a*(Math.PI/2);for(let t=0;t<i;t++){let r=t/i*Math.PI*2;o.push([Math.sin(n)*Math.cos(r)*e,Math.cos(n)*e,Math.sin(n)*Math.sin(r)*e])}}let s=(e,t)=>1+(e-1)*i+t%i,c=[];for(let e=0;e<i;e++)c.push({v:[0,s(1,e+1),s(1,e)],uv:[]});for(let e=1;e<a;e++)for(let t=0;t<i;t++)c.push({v:[s(e,t),s(e,t+1),s(e+1,t+1),s(e+1,t)],uv:[]});c.push({v:Array.from({length:i},(e,t)=>s(a,t)),uv:[]});let l={verts:o,faces:c};Hu(l);for(let t of l.verts)t[1]-=e/2;return ml(l,c.map((e,t)=>t),r),l}function Xu(e=.4,t=.12,n=10,r=6,i=Bu){let a=Math.max(3,Math.floor(n)),o=Math.max(3,Math.floor(r)),s=[];for(let n=0;n<a;n++){let r=n/a*Math.PI*2;for(let n=0;n<o;n++){let i=n/o*Math.PI*2,a=e+Math.cos(i)*t;s.push([Math.cos(r)*a,Math.sin(i)*t,Math.sin(r)*a])}}let c=(e,t)=>e%a*o+t%o,l=[];for(let e=0;e<a;e++)for(let t=0;t<o;t++)l.push({v:[c(e,t),c(e+1,t),c(e+1,t+1),c(e,t+1)],uv:[]});let u={verts:s,faces:l};return Hu(u),ml(u,l.map((e,t)=>t),i),u}var Zu=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],Qu=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],$u=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],ed=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],td=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],nd=e=>Math.hypot(e[0],e[1],e[2]),rd=e=>{let t=nd(e);return t>1e-12?$u(e,1/t):[0,0,0]},id=(e,t)=>[(e[0]+t[0])/2,(e[1]+t[1])/2];function ad(e){let t=[0,0,0];for(let n of e)t[0]+=n[0],t[1]+=n[1],t[2]+=n[2];return $u(t,1/Math.max(1,e.length))}function od(e){let t=0,n=0;for(let r of e)t+=r[0],n+=r[1];let r=1/Math.max(1,e.length);return[t*r,n*r]}function sd(e){let t=e.faces.map(t=>ad(t.v.map(t=>e.verts[t]))),n=e.faces.map(e=>od(e.uv)),r=cl(e),i=new Map;for(let[n,a]of r){let r=e.verts[a.a],o=e.verts[a.b];a.faces.length===2?i.set(n,$u(Zu(Zu(r,o),Zu(t[a.faces[0].face],t[a.faces[1].face])),.25)):i.set(n,$u(Zu(r,o),.5))}let a=e.verts.map(()=>[]),o=e.verts.map(()=>[]);e.faces.forEach((e,t)=>e.v.forEach(e=>a[e].push(t)));for(let[e,t]of r)o[t.a].push(e),o[t.b].push(e);let s=[...e.verts.map((n,i)=>{let s=a[i],c=o[i];if(s.length===0||c.length===0)return n;let l=c.filter(e=>r.get(e).faces.length!==2);if(l.length===0){let i=c.length;return $u(Zu(Zu(ad(s.map(e=>t[e])),$u(ad(c.map(t=>{let n=r.get(t);return $u(Zu(e.verts[n.a],e.verts[n.b]),.5)})),2)),$u(n,i-3)),1/i)}if(l.length===2){let t=l.map(t=>{let n=r.get(t);return e.verts[n.a===i?n.b:n.a]});return $u(Zu(Zu($u(n,6),t[0]),t[1]),1/8)}return n})],c=e.faces.map((e,n)=>(s.push(t[n]),s.length-1)),l=new Map;for(let[e,t]of i)s.push(t),l.set(e,s.length-1);let u=[];return e.faces.forEach((e,t)=>{let r=e.v.length;for(let i=0;i<r;i++){let a=(i+r-1)%r,o=(i+1)%r,s=l.get(el(e.v[i],e.v[o])),d=l.get(el(e.v[a],e.v[i]));u.push({v:[e.v[i],s,c[t],d],uv:[[...e.uv[i]],id(e.uv[i],e.uv[o]),[...n[t]],id(e.uv[a],e.uv[i])],...Wc(e)})}}),{verts:s,faces:u}}function cd(e,t){let{amount:n}=t,r=Math.cos((t.minAngle??20)*Math.PI/180),i=e.faces.map((t,n)=>al(e.faces[n].v.map(t=>e.verts[t]))),a=cl(e),o=new Map;for(let[e,t]of a){if(t.faces.length!==2)continue;let[n,a]=t.faces;ed(i[n.face],i[a.face])<r&&o.set(e,[n,a])}if(o.size===0||n<=0)return{verts:e.verts.map(e=>[...e]),faces:e.faces.map(e=>({v:[...e.v],uv:e.uv.map(e=>[...e]),...Wc(e)}))};let s=(t,n)=>{let r=0;for(let n=0;n<t;n++)r+=e.faces[n].v.length;return r+n},c=e.faces.reduce((e,t)=>e+t.v.length,0),l=Array.from({length:c},(e,t)=>t),u=e=>{for(;l[e]!==e;)l[e]=l[l[e]],e=l[e];return e},d=(e,t)=>{let n=u(e),r=u(t);n!==r&&(l[r]=n)},f=(t,n)=>e.faces[t].v.indexOf(n);for(let[e,t]of a){if(t.faces.length!==2||o.has(e))continue;let[n,r]=t.faces;for(let e of[t.a,t.b])d(s(n.face,f(n.face,e)),s(r.face,f(r.face,e)))}let p=Array(c),m=Array(c);e.faces.forEach((t,r)=>{let a=t.v.length,o=t.v.map(t=>e.verts[t]),c=i[r],l=sl(e,r),u=od(t.uv),d=1/0;for(let e=0;e<a;e++){let t=o[e],n=o[(e+1)%a],r=rd(Qu(n,t)),i=Qu(l,t),s=nd(Qu(i,$u(r,ed(i,r))));d=Math.min(d,s)}let f=Math.min(n,d*.45);for(let e=0;e<a;e++){let n=o[e],i=o[(e+a-1)%a],d=o[(e+1)%a],h=rd(Qu(n,i)),g=rd(Qu(d,n)),_=rd(td(c,h)),v=rd(td(c,g)),y=1+ed(_,v),b=y>1e-6?$u(Zu(_,v),f/y):$u(_,f),x=Zu(n,b),S=s(r,e);p[S]=x;let C=Math.min(.45,nd(b)/Math.max(1e-9,nd(Qu(l,n))));m[S]=[t.uv[e][0]+(u[0]-t.uv[e][0])*C,t.uv[e][1]+(u[1]-t.uv[e][1])*C]}});let h=new Map,g=[],_=[];for(let e=0;e<c;e++){let t=u(e),n=h.get(t);n===void 0&&(n=g.length,h.set(t,n),g.push([])),g[n].push(p[e])}for(let e of g)_.push(ad(e));let v=(e,t)=>h.get(u(s(e,t))),y=[];e.faces.forEach((e,t)=>{y.push({v:e.v.map((e,n)=>v(t,n)),uv:e.v.map((e,n)=>[...m[s(t,n)]]),...Wc(e)})});for(let[t,n]of o){let r=a.get(t),[i,o]=n,c=r.a,l=r.b,u=e.faces[i.face].v[i.slot]===c?i:o,d=u===i?o:i,p=f(u.face,c),h=f(u.face,l),g=f(d.face,c),_=f(d.face,l),b=[v(u.face,h),v(u.face,p),v(d.face,g),v(d.face,_)],x=[m[s(u.face,h)],m[s(u.face,p)],m[s(d.face,g)],m[s(d.face,_)]].map(e=>[...e]);new Set(b).size>=3&&y.push({v:b,uv:x,...Wc(e.faces[u.face])})}let b=e.verts.map(()=>[]);return e.faces.forEach((e,t)=>e.v.forEach((e,n)=>b[e].push({face:t,slot:n}))),e.verts.forEach((t,n)=>{let r=ld(e,n,b[n],a);if(!r)return;let o=r.map(e=>({id:s(e.face,e.slot),v:v(e.face,e.slot)})),c=[];for(let e of o)(c.length===0||c[c.length-1].v!==e.v)&&c.push(e);for(;c.length>1&&c[0].v===c[c.length-1].v;)c.pop();if(new Set(c.map(e=>e.v)).size<3)return;let l=ad(r.map(e=>i[e.face]));ed(al(c.map(e=>_[e.v])),l)<0&&c.reverse(),y.push({v:c.map(e=>e.v),uv:c.map(e=>[...m[e.id]]),...Wc(e.faces[r[0].face])})}),{verts:_,faces:y}}function ld(e,t,n,r){if(n.length<3)return null;let i=n[0],a=[],o=i;for(let s=0;s<n.length+1;s++){a.push(o);let n=e.faces[o.face],s=n.v[(o.slot+1)%n.v.length],c=r.get(el(t,s));if(!c||c.faces.length!==2)return null;let l=c.faces[0].face===o.face?c.faces[1]:c.faces[0],u=e.faces[l.face].v.indexOf(t);if(u<0)return null;if(o={face:l.face,slot:u},o.face===i.face)break}return o.face!==i.face||a.length!==n.length?null:a}function ud(e,t,n){let r=e.faces.map(e=>{let n=e.v.map(e=>t[e]),r=0,i=0,a=0;for(let e=0;e<n.length;e++){let t=n[e],o=n[(e+1)%n.length];r+=(t[1]-o[1])*(t[2]+o[2]),i+=(t[2]-o[2])*(t[0]+o[0]),a+=(t[0]-o[0])*(t[1]+o[1])}return[r,i,a]}),i=r.map(e=>{let t=nd(e);return t>1e-12?$u(e,1/t):[0,1,0]});if(n===null)return e.faces.map((e,t)=>e.v.map(()=>i[t]));let a=Math.cos(n*Math.PI/180),o=e.verts.map(()=>[]);return e.faces.forEach((e,t)=>e.v.forEach(e=>o[e].push(t))),e.faces.map((e,t)=>e.v.map(e=>{let n=[0,0,0];for(let s of o[e])ed(i[s],i[t])>=a&&(n=Zu(n,r[s]));let s=nd(n);return s>1e-12?$u(n,1/s):i[t]}))}var dd=class{constructor(e,t,n){X(this,`idGen`,void 0),X(this,`rectOf`,void 0),X(this,`fallback`,void 0),X(this,`cubes`,[]),X(this,`bones`,[]),X(this,`clips`,[]),this.idGen=e,this.rectOf=t,this.fallback=n}add(e,t,n,r,i){let a={id:this.idGen(),name:e,position:t,rotation:r,mesh:n,bone:i};return this.cubes.push(a),a}box(e,t,n,r,i=[0,0,0],a=null){let o,s={},c=(e,t)=>{if(!t)return;let n=this.rectOf(t);for(let t of e)s[t]=Bc(n.x,n.y,n.w,n.h)};return typeof r==`string`?o=r:(o=r.all??r.side??r.top??this.fallback,c([`pz`,`nz`,`px`,`nx`],r.side),c([`pz`],r.front),c([`py`],r.top),c([`ny`],r.bottom)),this.add(e,t,rl(n,null,s,this.rectOf(o)),i,a)}prism(e,t,n,r,i,a,o,s=null){let c=gl(n,r,i,this.rectOf(a));return this.spreadCaps(c,r,o),this.add(e,t,c,[0,0,0],s)}spreadCaps(e,t,n,r=[0,1]){let i=this.rectOf(n);for(let n of r){let r=e.faces[n];r&&(r.uv=r.v.map(n=>{let r=e.verts[n];return[i.x+(r[0]/t+1)/2*i.w,i.y+(r[2]/t+1)/2*i.h]}))}}mesh(e,t,n,r=[0,0,0],i=null,a=!1){let o=this.add(e,t,n,r,i);return a&&(o.smooth=!0),o}rect(e){return this.rectOf(e)}bone(e,t,n=null){let r=this.idGen();return this.bones.push({id:r,name:e,parent:n,pivot:t}),r}clip(e,t,n,r){this.clips.push({id:this.idGen(),name:e,duration:t,loop:n,smooth:!0,tracks:r})}toModel(e,t,n){return{id:e,name:t,texture:n,cubes:this.cubes,bones:this.bones,clips:this.clips}}},fd=`Props-16.png`,pd=`bark.log_end.leaves.pine.birch_bark.birch_leaves.planks.planks_dark.mushroom_cap.mushroom_stem.pumpkin.pumpkin_top.cactus.hay.rope.moss.stone.coal_ore.iron_ore.gold_ore.diamond_ore.emerald_ore.ruby_ore.copper_ore.cobble_mossy.brick_dark.obsidian.metal_plate.gold_block.dark_metal.gravestone.lava.chest_front.chest_side.chest_top.barrel_side.barrel_top.crate.bookshelf.cloth_red.cloth_blue.cloth_green.torch_wood.flame.lantern.candle.pillow.blanket.ruby.emerald.sapphire.amethyst.diamond.potion_red.potion_blue.potion_green.cork.water.slime.snow.ice.sand.dirt.wool_white.poppy.cornflower.dandelion.daisy.tall_grass.fern.sapling.wheat.tulip.rose_bush.sunflower.lily.clover.reed.blank.blank`.split(`.`),md=16,hd=16;function gd(e){let t=pd.indexOf(e);return{col:t%md,row:Math.floor(t/md)}}var _d=e=>{let{col:t,row:n}=gd(e);return{x:t*hd,y:n*hd,w:hd,h:hd}};function vd(e,t,n,r,i=r){let a=vl(r,_d(n));i!==r&&(a.verts=a.verts.map(e=>[e[0],e[1]*(i/r),e[2]])),e.mesh(t,[0,i/2,0],a,[0,45,0])}function yd(e,t){let n=e.bone(`Root`,[0,.4,0]);for(let t of e.cubes)t.bone=n;e.clip(`spin`,t,!0,{Root:{rot:[{t:0,v:[0,0,0]},{t:t/2,v:[0,180,0]},{t,v:[0,360,0]}],pos:[{t:0,v:[0,0,0]},{t:t/4,v:[0,.06,0]},{t:t/2,v:[0,0,0]},{t:t*3/4,v:[0,-.06,0]},{t,v:[0,0,0]}]}})}function bd(e,t){e.clip(`flicker`,.8,!0,{[e.bones.find(e=>e.id===t).name]:{rot:[{t:0,v:[0,0,0]},{t:.2,v:[0,40,0]},{t:.4,v:[0,90,0]},{t:.6,v:[0,50,0]},{t:.8,v:[0,0,0]}],pos:[{t:0,v:[0,0,0]},{t:.2,v:[0,.025,0]},{t:.4,v:[0,-.01,0]},{t:.6,v:[0,.03,0]},{t:.8,v:[0,0,0]}]}})}var xd={slime:{name:`Slime`,build:e=>{let t=e.bone(`Body`,[0,0,0]);e.mesh(`Body`,[0,.1,0],Yu(.5,10,4,_d(`slime`)),[0,0,0],t,!0),e.box(`Eye`,[-.17,.32,.4],[.12,.14,.06],`snow`,[0,0,0],t),e.box(`Eye 2`,[.17,.32,.4],[.12,.14,.06],`snow`,[0,0,0],t),e.box(`Pupil`,[-.17,.3,.44],[.06,.08,.03],`dark_metal`,[0,0,0],t),e.box(`Pupil 2`,[.17,.3,.44],[.06,.08,.03],`dark_metal`,[0,0,0],t),e.clip(`hop`,.9,!0,{Body:{pos:[{t:0,v:[0,0,0]},{t:.25,v:[0,.18,0]},{t:.45,v:[0,0,0]},{t:.9,v:[0,0,0]}],rot:[{t:0,v:[0,0,0]},{t:.25,v:[-8,0,0]},{t:.45,v:[6,0,0]},{t:.9,v:[0,0,0]}]}})}},villager:{name:`Villager`,build:e=>{let t=e.bone(`Body`,[0,0,0]);e.mesh(`Robe`,[0,.55,0],qu(10,.42,.27,1.1,_d(`cloth_blue`)),[0,0,0],t),e.mesh(`Head`,[0,1.38,0],Ju(.24,8,5,_d(`wool_white`)),[0,0,0],t,!0),e.box(`Nose`,[0,1.35,.25],[.07,.1,.1],`sand`,[0,0,0],t),e.box(`Eye`,[-.09,1.42,.21],[.05,.05,.03],`dark_metal`,[0,0,0],t),e.box(`Eye 2`,[.09,1.42,.21],[.05,.05,.03],`dark_metal`,[0,0,0],t),e.mesh(`Hat`,[0,1.68,0],qu(8,.26,0,.5,_d(`cloth_red`)),[0,0,0],t),e.box(`Brim`,[0,1.45,0],[.62,.05,.62],`cloth_red`,[0,0,0],t),e.box(`Arm`,[-.4,.95,.05],[.14,.5,.14],`cloth_blue`,[0,0,15],t),e.box(`Arm 2`,[.4,.95,.05],[.14,.5,.14],`cloth_blue`,[0,0,-15],t),e.clip(`idle`,2.4,!0,{Body:{rot:[{t:0,v:[0,0,0]},{t:.6,v:[0,0,2]},{t:1.8,v:[0,0,-2]},{t:2.4,v:[0,0,0]}],pos:[{t:0,v:[0,0,0]},{t:1.2,v:[0,.02,0]},{t:2.4,v:[0,0,0]}]}})}},bush:{name:`Bush`,build:e=>{e.box(`Leaves`,[0,.4,0],[1.1,.8,1.1],`leaves`),e.box(`Leaves 2`,[.25,.9,.1],[.6,.4,.6],`leaves`)}},mushroom:{name:`Mushroom`,build:e=>{e.box(`Stem`,[0,.25,0],[.22,.5,.22],`mushroom_stem`),e.box(`Cap`,[0,.6,0],[.8,.2,.8],`mushroom_cap`),e.box(`Cap top`,[0,.78,0],[.5,.16,.5],`mushroom_cap`)}},cactus:{name:`Cactus`,build:e=>{e.box(`Body`,[0,.8,0],[.5,1.6,.5],`cactus`),e.box(`Arm`,[.4,.75,0],[.3,.3,.3],`cactus`),e.box(`Arm up`,[.5,1.05,0],[.3,.6,.3],`cactus`)}},pumpkin:{name:`Pumpkin`,build:e=>{e.box(`Body`,[0,.4,0],[.9,.8,.9],{side:`pumpkin`,top:`pumpkin_top`,bottom:`pumpkin_top`}),e.box(`Stem`,[0,.9,0],[.14,.2,.14],`bark`)}},"hay-bale":{name:`Hay bale`,build:e=>{e.box(`Bale`,[0,.4,0],[1.1,.8,.8],`hay`)}},boulder:{name:`Boulder`,build:e=>{let t=bl(7,1.3,_d(`stone`));e.mesh(`Rock`,[0,-il(t).min[1],0],t)}},"mossy-boulder":{name:`Mossy boulder`,build:e=>{let t=bl(3,1.1,_d(`cobble_mossy`));e.mesh(`Rock`,[0,-il(t).min[1],0],t)}},poppy:{name:`Poppy`,build:e=>vd(e,`Flower`,`poppy`,.8)},cornflower:{name:`Cornflower`,build:e=>vd(e,`Flower`,`cornflower`,.8)},dandelion:{name:`Dandelion`,build:e=>vd(e,`Flower`,`dandelion`,.8)},daisy:{name:`Daisy`,build:e=>vd(e,`Flower`,`daisy`,.8)},tulip:{name:`Tulip`,build:e=>vd(e,`Flower`,`tulip`,.8)},sunflower:{name:`Sunflower`,build:e=>vd(e,`Flower`,`sunflower`,1.3)},"tall-grass":{name:`Tall grass`,build:e=>vd(e,`Grass`,`tall_grass`,1)},fern:{name:`Fern`,build:e=>vd(e,`Fern`,`fern`,1)},sapling:{name:`Sapling`,build:e=>vd(e,`Sapling`,`sapling`,.9)},wheat:{name:`Wheat`,build:e=>vd(e,`Wheat`,`wheat`,1)},"rose-bush":{name:`Rose bush`,build:e=>vd(e,`Bush`,`rose_bush`,1)},reeds:{name:`Reeds`,build:e=>vd(e,`Reeds`,`reed`,1.4)},crate:{name:`Crate`,build:e=>{e.box(`Crate`,[0,.45,0],[.9,.9,.9],`crate`)}},barrel:{name:`Barrel`,build:e=>{e.prism(`Barrel`,[0,.45,0],8,.42,.9,`barrel_side`,`barrel_top`)}},chest:{name:`Chest`,build:e=>{let t=e.bone(`Base`,[0,0,0]),n=e.bone(`Lid`,[0,.5,-.3],t),r={front:`chest_front`,side:`chest_side`,top:`chest_top`,bottom:`planks_dark`};e.box(`Base`,[0,.25,0],[.9,.5,.6],r,[0,0,0],t),e.box(`Lid`,[0,.65,0],[.9,.3,.6],r,[0,0,0],n),e.clip(`open`,.6,!1,{Lid:{rot:[{t:0,v:[0,0,0]},{t:.6,v:[-100,0,0]}]}}),e.clip(`close`,.5,!1,{Lid:{rot:[{t:0,v:[-100,0,0]},{t:.5,v:[0,0,0]}]}})}},torch:{name:`Torch`,build:e=>{e.box(`Stick`,[0,.35,0],[.12,.7,.12],`torch_wood`);let t=e.bone(`Flame`,[0,.82,0]);e.box(`Flame`,[0,.82,0],[.22,.24,.22],`flame`,[0,0,0],t),bd(e,t)}},lantern:{name:`Lantern`,build:e=>{e.box(`Base`,[0,.03,0],[.34,.06,.34],`dark_metal`),e.box(`Glass`,[0,.26,0],[.3,.4,.3],`lantern`),e.box(`Cap`,[0,.49,0],[.34,.06,.34],`dark_metal`),e.box(`Handle`,[0,.58,0],[.04,.12,.04],`dark_metal`)}},campfire:{name:`Campfire`,build:e=>{for(let t of[0,60,120])e.box(`Log`,[0,.1,0],[1,.18,.18],{side:`bark`,top:`log_end`,bottom:`bark`},[0,t,0]);for(let t=0;t<6;t++){let n=t/6*Math.PI*2;e.box(`Stone`,[Math.cos(n)*.6,.09,Math.sin(n)*.6],[.24,.18,.24],`stone`,[0,t*37%90,0])}e.box(`Embers`,[0,.2,0],[.34,.1,.34],`lava`);let t=e.bone(`Flame`,[0,.45,0]);e.box(`Flame`,[0,.45,0],[.4,.5,.4],`flame`,[0,0,0],t),bd(e,t)}},fence:{name:`Fence`,build:e=>{e.box(`Post`,[0,.5,0],[.18,1,.18],`planks_dark`),e.box(`Rail`,[0,.78,0],[1,.1,.08],`planks`),e.box(`Rail 2`,[0,.4,0],[1,.1,.08],`planks`)}},bench:{name:`Bench`,build:e=>{e.box(`Seat`,[0,.42,0],[1.3,.1,.42],`planks`),e.box(`Leg`,[-.55,.2,0],[.1,.4,.36],`planks_dark`),e.box(`Leg 2`,[.55,.2,0],[.1,.4,.36],`planks_dark`),e.box(`Back`,[0,.75,-.17],[1.3,.35,.07],`planks`)}},table:{name:`Table`,build:e=>{e.box(`Top`,[0,.75,0],[1.2,.1,.8],`planks`);for(let[t,n]of[[-.5,-.3],[.5,-.3],[-.5,.3],[.5,.3]])e.box(`Leg`,[t,.35,n],[.1,.7,.1],`planks_dark`)}},bookshelf:{name:`Bookshelf`,build:e=>{e.box(`Shelf`,[0,.9,0],[.9,1.8,.4],{front:`bookshelf`,side:`planks_dark`,top:`planks`,bottom:`planks`})}},well:{name:`Well`,build:e=>{e.box(`Wall`,[0,.35,.5],[1.2,.7,.2],`cobble_mossy`),e.box(`Wall 2`,[0,.35,-.5],[1.2,.7,.2],`cobble_mossy`),e.box(`Wall 3`,[-.5,.35,0],[.2,.7,.8],`cobble_mossy`),e.box(`Wall 4`,[.5,.35,0],[.2,.7,.8],`cobble_mossy`),e.box(`Water`,[0,.5,0],[.8,.04,.8],`water`),e.box(`Post`,[-.5,1.2,0],[.1,1,.1],`planks_dark`),e.box(`Post 2`,[.5,1.2,0],[.1,1,.1],`planks_dark`),e.box(`Roof`,[0,1.75,0],[1.5,.12,.9],`planks_dark`),e.box(`Roof top`,[0,1.87,0],[1,.12,.6],`planks_dark`)}},anvil:{name:`Anvil`,build:e=>{e.box(`Base`,[0,.1,0],[.5,.2,.35],`dark_metal`),e.box(`Waist`,[0,.3,0],[.28,.2,.28],`dark_metal`),e.box(`Top`,[0,.52,0],[.8,.24,.36],`dark_metal`),e.box(`Horn`,[.5,.52,0],[.25,.14,.2],`dark_metal`)}},gravestone:{name:`Gravestone`,build:e=>{e.box(`Base`,[0,.1,.05],[.9,.2,.5],`stone`),e.box(`Slab`,[0,.65,0],[.7,1.1,.2],`gravestone`),e.box(`Moss`,[.2,1,.11],[.25,.2,.02],`moss`)}},banner:{name:`Banner`,build:e=>{e.box(`Pole`,[0,1.3,0],[.1,2.6,.1],`planks_dark`),e.box(`Bar`,[0,2.45,0],[.9,.08,.08],`planks_dark`);let t=e.bone(`Cloth`,[0,2.4,0]);e.box(`Cloth`,[0,1.85,0],[.8,1.1,.03],`cloth_red`,[0,0,0],t),e.clip(`sway`,3,!0,{Cloth:{rot:[{t:0,v:[0,0,0]},{t:.75,v:[6,0,2]},{t:1.5,v:[0,0,0]},{t:2.25,v:[-6,0,-2]},{t:3,v:[0,0,0]}]}})}},signpost:{name:`Signpost`,build:e=>{e.box(`Pole`,[0,.8,0],[.14,1.6,.14],{side:`bark`,top:`log_end`,bottom:`log_end`}),e.box(`Board`,[.2,1.35,.1],[.9,.3,.06],`planks`),e.box(`Board 2`,[-.2,.98,.1],[.9,.3,.06],`planks`,[0,8,0])}},"potion-red":{name:`Red potion`,build:e=>Sd(e,`potion_red`)},"potion-blue":{name:`Blue potion`,build:e=>Sd(e,`potion_blue`)},"potion-green":{name:`Green potion`,build:e=>Sd(e,`potion_green`)},bed:{name:`Bed`,build:e=>{e.box(`Frame`,[0,.2,0],[1,.25,1.9],`planks_dark`),e.box(`Mattress`,[0,.37,0],[.9,.1,1.8],`pillow`),e.box(`Blanket`,[0,.44,-.25],[.92,.1,1.15],`blanket`),e.box(`Pillow`,[0,.46,.68],[.6,.12,.35],`pillow`),e.box(`Headboard`,[0,.55,.97],[1,.7,.1],`planks`)}},candle:{name:`Candle`,build:e=>{e.box(`Wax`,[0,.15,0],[.12,.3,.12],`candle`);let t=e.bone(`Flame`,[0,.36,0]);e.box(`Flame`,[0,.36,0],[.09,.12,.09],`flame`,[0,0,0],t),bd(e,t)}},ruby:{name:`Ruby crystals`,build:e=>Cd(e,`ruby`)},emerald:{name:`Emerald crystals`,build:e=>Cd(e,`emerald`)},sapphire:{name:`Sapphire crystals`,build:e=>Cd(e,`sapphire`)},amethyst:{name:`Amethyst crystals`,build:e=>Cd(e,`amethyst`)},diamond:{name:`Diamond crystals`,build:e=>Cd(e,`diamond`)},"lamp-post":{name:`Lamp post`,build:e=>{e.box(`Base`,[0,.1,0],[.3,.2,.3],`dark_metal`),e.box(`Pole`,[0,1.2,0],[.12,2.4,.12],`dark_metal`),e.box(`Arm`,[.2,2.35,0],[.5,.08,.08],`dark_metal`),e.box(`Lantern`,[.42,2.15,0],[.22,.3,.22],`lantern`)}},snowman:{name:`Snowman`,build:e=>{e.box(`Body`,[0,.4,0],[.9,.8,.9],`snow`),e.box(`Chest`,[0,1.05,0],[.7,.55,.7],`snow`),e.box(`Head`,[0,1.55,0],[.5,.45,.5],`snow`),e.box(`Eye`,[-.12,1.62,.26],[.07,.07,.04],`dark_metal`),e.box(`Eye 2`,[.12,1.62,.26],[.07,.07,.04],`dark_metal`),e.box(`Nose`,[0,1.5,.36],[.08,.08,.2],`pumpkin`),e.box(`Arm`,[-.55,1.15,0],[.5,.06,.06],`torch_wood`,[0,0,20]),e.box(`Arm 2`,[.55,1.15,0],[.5,.06,.06],`torch_wood`,[0,0,-20])}},scarecrow:{name:`Scarecrow`,build:e=>{e.box(`Post`,[0,.9,0],[.12,1.8,.12],`planks_dark`),e.box(`Arms`,[0,1.35,0],[1.3,.1,.1],`planks_dark`),e.box(`Body`,[0,1.05,.02],[.4,.6,.25],`hay`),e.box(`Head`,[0,1.7,.02],[.34,.34,.34],{side:`pumpkin`,top:`pumpkin_top`,bottom:`pumpkin_top`}),e.box(`Hat brim`,[0,1.93,.02],[.55,.05,.55],`planks_dark`),e.box(`Hat`,[0,2.03,.02],[.28,.16,.28],`planks_dark`)}}};function Sd(e,t){e.box(`Bottle`,[0,.14,0],[.26,.28,.26],t),e.box(`Neck`,[0,.34,0],[.12,.12,.12],t),e.box(`Cork`,[0,.43,0],[.12,.07,.12],`cork`)}function Cd(e,t){e.box(`Rock`,[0,.05,0],[.7,.1,.7],`stone`),e.prism(`Crystal`,[0,.5,0],6,.16,.8,t,t),e.prism(`Crystal 2`,[.24,.32,.1],6,.11,.5,t,t),e.cubes[e.cubes.length-1].rotation=[0,0,-18],e.prism(`Crystal 3`,[-.22,.26,-.12],6,.09,.4,t,t),e.cubes[e.cubes.length-1].rotation=[0,0,16],yd(e,8)}var wd=[`oak-tree`,`pine-tree`,`birch-tree`,`coal-ore`,`iron-ore`,`copper-ore`,`gold-ore`,`diamond-ore`,`emerald-ore`,`ruby-ore`,`gold-block`,`obsidian`,`lava-block`].map(e=>`prop-${e}`),Td=Object.keys(xd),Ed=e=>`prop-${e}`;function Dd(e,t){let n=xd[e],r=new dd(t,_d,`stone`);return n.build(r),r.toModel(Ed(e),n.name,fd)}function Od(e){return Td.map(t=>Dd(t,e))}var kd={enemy:`slime`,npc:`villager`},Ad=e=>`prefab-${e}`,jd=`Textures-16.png`,Md={texture:jd,col:3,row:13},Nd={texture:jd,col:7,row:0};function Pd(e,t,n,r,i){return{id:i(),name:e,kind:`block`,position:[0,0,0],rotation:[0,0,0],mesh:rl(t),tile:{...n},color:`#ffffff`,doubleSided:!0,collide:!0,rules:[],...r}}function Fd(e,t,n,r){return{id:r(),name:e,kind:`model`,modelId:wl[t],position:[0,0,0],rotation:[0,0,0],scale:[1,1,1],animation:`spin`,animationSpeed:1,collide:!1,rules:[],...n}}function Id(e,t,n,r){return{id:r(),name:e,kind:`model`,modelId:Ed(t),position:[0,0,0],rotation:[0,0,0],scale:[1,1,1],animation:null,animationSpeed:1,collide:!1,rules:[],...n}}function Ld(e,t){let n=Nu.find(t=>t.kind===e).label,r=Ru(e,t),i;switch(e){case`coin`:i=Fd(n,`coin`,{rules:r},t);break;case`key`:i=Fd(n,`key`,{rules:r},t);break;case`apple`:i=Fd(n,`apple`,{rules:r},t);break;case`checkpoint`:i=Fd(n,`flag`,{rules:r,animation:null},t);break;case`goal`:i=Fd(n,`trophy`,{rules:r,scale:[1.5,1.5,1.5]},t);break;case`door`:i=Pd(n,[2,2.4,.3],Md,{rules:r},t);break;case`hazard`:i=Pd(n,[2,.12,2],{texture:xl,col:Sl.hazard,row:0},{rules:r,collide:!1},t);break;case`exit`:i=Pd(n,[2,2.6,.3],Nd,{rules:r,color:`#9b6bff`,collide:!1},t);break;case`platform`:i=Pd(n,[3,.5,3],Nd,{rules:r},t);break;case`sign`:i=Pd(n,[1.1,1.4,.15],Md,{rules:r},t);break;case`water`:i=Pd(n,[8,2,8],{texture:`Kit-16.png`,col:2,row:4},{rules:r,collide:!1,opacity:.7,liquid:!0},t);break;case`enemy`:i=Id(n,kd.enemy,{rules:r,animation:`hop`,collide:!1},t);break;case`npc`:i=Id(n,kd.npc,{rules:r,animation:`idle`,collide:!0},t)}return{id:Ad(e),name:n,base:e,object:i}}function Rd(e){return Nu.map(t=>Ld(t.kind,e))}var zd={id:`demo-crystal-cluster`,name:`Crystal cluster`,texture:`Demo-16.png`,cubes:[{id:`cube4`,name:`Crystals`,position:[0,0,0],rotation:[0,0,0],mesh:{verts:[[.7255,0,.0061],[.5007,0,.5169],[-.0266,0,.7001],[-.5355,0,.5649],[-.7046,0,-.0128],[-.465,0,-.5108],[.038,0,-.7736],[.4915,0,-.5299],[.5466,.165,.0046],[.3811,.165,.3934],[-.0218,.165,.573],[-.3525,.165,.3718],[-.5887,.165,-.0107],[-.4083,.165,-.4485],[.0276,.165,-.5631],[.4228,.165,-.4559],[.3859,.27,.0033],[.2468,.27,.2547],[-.0139,.27,.365],[-.2187,.27,.2307],[-.3127,.27,-.0057],[-.2628,.27,-.2886],[.0163,.27,-.3315],[.2216,.27,-.239],[0,.3,0],[.2018,.1567,.0291],[.2285,1.1058,.0849],[.1002,.1594,.1434],[.1643,1.1382,.1574],[-.0811,.177,.1646],[.0426,1.0873,.1715],[-.2088,.1994,.0355],[-.0549,1.1708,.0954],[-.1017,.2,-.133],[.0335,1.1329,-.0192],[.0637,.1849,-.1644],[.1387,1.1048,-.0431],[.1546,1.6283,.1012],[.4857,.0748,.0985],[.6972,.661,-.0107],[.422,.1262,.2178],[.6356,.664,.0802],[.2702,.1937,.2169],[.5098,.6849,.0937],[.1899,.2064,.0975],[.495,.7613,-.0129],[.2711,.1451,-.0322],[.5375,.6969,-.1005],[.3766,.0979,-.034],[.6173,.6724,-.1063],[.7416,1.0433,-.0754],[-.1717,.1999,.0604],[-.4848,.8799,.1389],[-.2463,.1555,.1858],[-.5428,.8282,.2238],[-.3771,.1017,.1948],[-.6273,.7834,.2239],[-.4697,.0803,.053],[-.7017,.7696,.1312],[-.3889,.1324,-.1186],[-.6421,.8128,.0122],[-.2135,.2001,-.0901],[-.5046,.8413,.021],[-.7384,1.176,.1823],[.251,.1486,-.3331],[.1644,.5553,-.1351],[.1775,.0875,-.2187],[.1214,.5189,-.0485],[.0121,.0615,-.1892],[.0045,.5561,-.0168],[-.0831,.1356,-.3544],[-.0817,.5857,-.1319],[-.0417,.1928,-.4653],[-.037,.6417,-.1996],[.1604,.1956,-.4422],[.1021,.5798,-.2062],[.0298,.9097,.0404],[.0324,.0916,.3477],[.0598,.4917,.1911],[-.0175,.1652,.5057],[.034,.5445,.3163],[-.1708,.1724,.4572],[-.0744,.5473,.2584],[-.2446,.1431,.3542],[-.1288,.4991,.2068],[-.1923,.087,.2399],[-.1018,.4537,.1295],[-.0581,.0629,.2387],[-.0112,.4342,.138],[.0217,.8161,.0695]],faces:[{v:[8,9,1,0],uv:[[14.031,20.654],[1.915,20.654],[0,27.213],[16,27.346]]},{v:[9,10,2,1],uv:[[14.304,20.727],[1.615,20.727],[0,26.496],[16,27.273]]},{v:[10,11,3,2],uv:[[14.039,19.121],[1.774,19.121],[0,28.879],[16,24.893]]},{v:[11,12,4,3],uv:[[14.123,20.239],[1.728,20.239],[0,25.523],[16,27.761]]},{v:[12,13,5,4],uv:[[14.776,21.171],[1.044,21.171],[0,26.443],[16,26.829]]},{v:[13,14,6,5],uv:[[14.871,20.241],[1.837,20.241],[0,27.759],[16,24.94]]},{v:[14,15,7,6],uv:[[14.559,20.121],[1.496,20.121],[0,26.11],[16,27.879]]},{v:[15,8,0,7],uv:[[14.515,20.7],[1.325,20.7],[0,27.3],[16,25.567]]},{v:[16,17,9,8],uv:[[13.084,19.957],[2.143,19.957],[0,28.043],[16,26.606]]},{v:[17,18,10,9],uv:[[13.471,20.085],[3.204,20.085],[0,27.915],[16,27.644]]},{v:[18,19,11,10],uv:[[11.555,19.485],[1.426,19.485],[0,28.515],[16,28.04]]},{v:[19,20,12,11],uv:[[.154,22.013],[3.749,31.792],[15.846,32],[6.811,16]]},{v:[20,21,13,12],uv:[[14.513,19.028],[4.572,19.028],[0,25.973],[16,28.972]]},{v:[21,22,14,13],uv:[[10.389,18.45],[.147,20.183],[0,29.55],[16,25.245]]},{v:[22,23,15,14],uv:[[16,21.042],[8.226,17.302],[0,26.069],[14.958,30.698]]},{v:[23,16,8,15],uv:[[13.636,18.833],[3.243,18.833],[0,24.828],[16,29.167]]},{v:[0,1,2,3,4,5,6,7],uv:[[15.764,23.534],[13.324,17.989],[7.598,16],[2.073,17.468],[.236,23.74],[2.838,29.147],[8.299,32],[13.223,29.355]]},{v:[24,17,16],uv:[[16,29.269],[5.735,18.731],[0,29.135]]},{v:[24,18,17],uv:[[13.13,32],[13.69,16],[2.31,20.832]]},{v:[24,19,18],uv:[[3.194,32],[12.806,21.887],[3.869,16]]},{v:[24,20,19],uv:[[-0,29.735],[16,30.025],[11.234,17.975]]},{v:[24,21,20],uv:[[-0,16.647],[13.47,31.353],[16,16.938]]},{v:[24,22,21],uv:[[2.057,16],[1.295,32],[14.705,29.931]]},{v:[24,23,22],uv:[[13.352,16],[2.648,27.534],[12.513,32]]},{v:[24,16,23],uv:[[16,19.122],[0,18.987],[6.771,29.013]]},{v:[26,28,27,25],uv:[[40.87,.527],[39.295,0],[38.756,15.955],[41.244,16]]},{v:[37,28,26],uv:[[39.65,0],[38.524,15.01],[41.476,16]]},{v:[28,30,29,27],uv:[[57.997,-0],[55.994,.832],[54.003,15.714],[56.987,16]]},{v:[37,30,28],uv:[[57.624,-0],[54.202,16],[57.798,14.495]]},{v:[30,32,31,29],uv:[[42.274,1.344],[40.288,0],[37.726,15.619],[40.606,16]]},{v:[37,32,30],uv:[[42.675,0],[37.325,13.528],[40.863,16]]},{v:[32,34,33,31],uv:[[56.731,-0],[54.389,.626],[54.41,16],[57.611,15.925]]},{v:[37,34,32],uv:[[53.982,-0],[53.798,16],[58.202,14.773]]},{v:[34,36,35,33],uv:[[39.965,0],[38.165,.474],[39.022,16],[41.835,15.748]]},{v:[37,36,34],uv:[[38.593,-0],[38.416,16],[41.584,15.142]]},{v:[36,26,25,35],uv:[[56.118,.018],[53.483,-0],[54.51,16],[58.517,15.526]]},{v:[37,26,36],uv:[[54.514,0],[53.632,15.968],[58.368,16]]},{v:[25,27,29,31,33,35],uv:[[128,6.873],[124.074,2.432],[117.012,1.608],[112,6.626],[116.124,13.174],[122.563,14.392]]},{v:[39,41,40,38],uv:[[44.587,.081],[41.659,0],[35.413,14.581],[38.997,16]]},{v:[50,41,39],uv:[[43.94,0],[36.06,15.874],[40.655,16]]},{v:[41,43,42,40],uv:[[61.347,.598],[57.795,0],[50.653,14.027],[54.875,16]]},{v:[50,43,41],uv:[[61.096,-0],[50.904,15.116],[55.92,16]]},{v:[43,45,44,42],uv:[[42.045,2.173],[39.614,0],[37.955,15.792],[41.508,16]]},{v:[50,45,43],uv:[[42.09,0],[37.91,12.591],[41.014,16]]},{v:[45,47,46,44],uv:[[53.787,-0],[51.42,1.673],[56.796,16],[60.58,14.44]]},{v:[50,47,45],uv:[[51.481,0],[56.659,16],[60.519,13.025]]},{v:[47,49,48,46],uv:[[37.449,0],[35.319,.655],[41.884,16],[44.681,14.727]]},{v:[50,49,47],uv:[[35.644,0],[40.922,16],[44.356,14.942]]},{v:[49,39,38,48],uv:[[56.216,0],[53.113,.305],[54.613,16],[58.887,15.399]]},{v:[50,39,49],uv:[[54.256,0],[53.443,16],[58.557,15.524]]},{v:[38,40,42,44,46,48],uv:[[123.217,16],[127.685,9.752],[124.436,1.547],[116.921,0],[112.315,7.449],[114.457,13.2]]},{v:[52,54,53,51],uv:[[38.217,0],[36.056,1.141],[40.911,16],[43.944,14.919]]},{v:[63,54,52],uv:[[35.471,0],[40.361,16],[44.529,13.624]]},{v:[54,56,55,53],uv:[[53.661,0],[51.8,.988],[57.319,16],[60.2,14.821]]},{v:[63,56,54],uv:[[51.995,0],[56.578,16],[60.005,14.172]]},{v:[56,58,57,55],uv:[[39.749,0],[37.182,.314],[39.188,16],[42.818,15.407]]},{v:[63,58,56],uv:[[38.305,0],[37.688,16],[42.312,15.457]]},{v:[58,60,59,57],uv:[[59.985,.944],[57.161,0],[52.015,14.834],[56.032,16]]},{v:[63,60,58],uv:[[59.843,-0],[52.157,14.296],[57.392,16]]},{v:[60,62,61,59],uv:[[44.712,.64],[41.665,0],[35.288,14.431],[39.185,16]]},{v:[63,62,60],uv:[[44.778,-0],[35.222,14.747],[40.712,16]]},{v:[62,52,51,61],uv:[[57.356,.904],[54.853,0],[54.348,15.934],[57.652,16]]},{v:[63,52,62],uv:[[56.41,0],[53.89,14.156],[58.11,16]]},{v:[51,53,55,57,59,61],uv:[[128,6.884],[123.725,.601],[116.68,.149],[112,7.257],[116.707,15.851],[126.074,14.426]]},{v:[65,67,66,64],uv:[[37.964,-0],[34.66,1.247],[40.735,16],[45.34,13.886]]},{v:[76,67,65],uv:[[35.55,0],[40.511,16],[44.45,14.507]]},{v:[67,69,68,66],uv:[[56.583,1.205],[52.896,0],[53.962,16],[59.104,15.277]]},{v:[76,69,67],uv:[[54.077,0],[53.561,14.475],[58.439,16]]},{v:[69,71,70,68],uv:[[44.93,.917],[40.635,0],[35.07,13.956],[40.763,16]]},{v:[76,71,69],uv:[[44.63,0],[35.37,14.661],[41.869,16]]},{v:[71,73,72,70],uv:[[60.982,1.789],[58.504,0],[51.018,14.33],[54.681,16]]},{v:[76,73,71],uv:[[60.818,0],[51.182,13.232],[54.619,16]]},{v:[73,75,74,72],uv:[[41.018,0],[36.968,2.223],[36.942,16],[43.058,15.662]]},{v:[76,75,73],uv:[[37.395,-0],[37.605,16],[42.605,12.994]]},{v:[75,65,64,74],uv:[[54.856,0],[51.683,.906],[55.539,16],[60.317,14.372]]},{v:[76,65,75],uv:[[52.708,-0],[55.655,16],[59.292,14.898]]},{v:[64,66,68,70,72,74],uv:[[112,5.835],[114.711,12.447],[122.361,15.259],[128,7.235],[126.789,1.05],[117.039,.741]]},{v:[78,80,79,77],uv:[[45.724,1.869],[41.205,0],[34.276,13.412],[40.109,16]]},{v:[89,80,78],uv:[[45.908,-0],[34.092,13.394],[40.296,16]]},{v:[80,82,81,79],uv:[[57.503,.12],[52.985,0],[53.19,16],[59.015,15.717]]},{v:[89,82,80],uv:[[53.149,0],[53.168,15.834],[58.851,16]]},{v:[82,84,83,81],uv:[[38.974,0],[36.432,1.906],[39.084,16],[43.568,14.815]]},{v:[89,84,82],uv:[[37.092,0],[39.929,16],[42.908,13.569]]},{v:[84,86,85,83],uv:[[54.091,0],[50.935,1.766],[56.217,16],[61.065,13.865]]},{v:[89,86,84],uv:[[51.911,-0],[56.593,16],[60.089,13.992]]},{v:[86,88,87,85],uv:[[40.086,0],[36.5,.798],[38.209,16],[43.5,15.144]]},{v:[89,88,86],uv:[[37.529,0],[38.724,16],[42.471,15.184]]},{v:[88,78,77,87],uv:[[59.339,2.164],[56.219,0],[52.661,15.063],[57.75,16]]},{v:[89,78,88],uv:[[58.298,0],[53.702,13.592],[57.321,16]]},{v:[77,79,81,83,85,87],uv:[[127.829,9.471],[124.388,0],[115.931,2.904],[112.171,9.08],[115.579,15.929],[123.155,16]]}]},bone:null}],bones:[],clips:[]},Bd={id:`demo-ruin-column`,name:`Ruin column`,texture:`Demo-16.png`,cubes:[{id:`cube5`,name:`Column`,position:[0,0,0],rotation:[0,0,0],mesh:{verts:[[.6081,0,-.0166],[.4497,0,.4484],[.0297,0,.5905],[-.4352,0,.4524],[-.5966,0,.0306],[-.477,0,-.4241],[-.0165,0,-.6345],[.4058,0,-.4448],[.6207,.12,-.017],[.4341,.12,.4329],[.0288,.12,.5738],[-.4122,.12,.4284],[-.6112,.12,.0314],[-.4674,.12,-.4155],[-.0151,.12,-.5801],[.3943,.12,-.4323],[.5136,.2,-.0141],[.3704,.2,.3694],[.0241,.2,.4791],[-.3324,.2,.3455],[-.5119,.2,.0263],[-.3668,.2,-.3261],[-.0128,.2,-.4942],[.3496,.2,-.3833],[.4302,.24,-.0118],[.3022,.24,.3013],[.0218,.24,.4349],[-.2979,.24,.3097],[-.4325,.24,.0222],[-.3184,.24,-.2831],[-.011,.24,-.4238],[.2706,.24,-.2966],[.3968,.24,.0195],[.2757,.24,.3044],[.0069,.24,.3885],[-.2861,.24,.2775],[-.3861,.24,.0224],[-.2802,.24,-.2802],[.0061,.24,-.4122],[.2782,.24,-.2924],[.3556,.7,.0175],[.2555,.7,.2821],[.0067,.7,.3746],[-.266,.7,.2581],[-.3631,.7,.0211],[-.2575,.7,-.2575],[.0053,.7,-.3606],[.2576,.7,-.2706],[.3466,.95,.0171],[.2503,.95,.2763],[.0062,.95,.3485],[-.261,.95,.2532],[-.3616,.95,.021],[-.2518,.95,-.2518],[.0052,.95,-.3536],[.247,.95,-.2595],[.3547,1.18,.0174],[.2508,1.18,.2769],[.0065,1.18,.3641],[-.2588,1.18,.251],[-.3641,1.18,.0211],[-.2544,1.18,-.2544],[.0052,1.18,-.3498],[.2387,1.18,-.2508],[.3524,1.45,.0173],[.2345,1.45,.2589],[.0059,1.45,.3289],[-.2462,1.45,.2388],[-.3472,1.45,.0201],[-.248,1.45,-.248],[.0049,1.45,-.3281],[.2275,1.45,-.239],[.3268,1.5833,.0161],[.2234,1.7277,.2466],[.0057,1.7213,.3189],[-.2406,1.7293,.2334],[-.3362,1.6228,.0195],[-.2324,1.5675,-.2324],[.005,1.8269,-.3392],[.2255,1.6612,-.2369],[0,1.626,0],[.3924,1.55,-.0266],[.2002,1.55,.2164],[-.0823,1.55,.2257],[-.2549,1.55,-.0349],[-.0838,1.55,-.3181],[.2041,1.55,-.3105],[.3275,1.616,-.0292],[.182,1.616,.1831],[-.0677,1.616,.1985],[-.1949,1.616,-.0359],[-.0554,1.616,-.2631],[.1634,1.616,-.234],[.2246,1.658,-.0334],[.1273,1.658,.083],[-.0062,1.658,.0835],[-.0738,1.658,-.0378],[-.0109,1.658,-.1771],[.1283,1.658,-.1683],[.06,1.67,-.04],[1.2884,.6948,.2569],[1.2744,.5617,.513],[1.2468,.2994,.6238],[1.2212,.0552,.4967],[1.2117,-.0345,.2355],[1.221,.0538,-.0092],[1.247,.3007,-.0938],[1.276,.5767,.0072],[.8873,.7056,.2563],[.8743,.5812,.4889],[.8492,.3429,.5913],[.8254,.116,.4789],[.8166,.0325,.2366],[.8258,.1207,.0153],[.8491,.3423,-.0978],[.8775,.6118,.0135]],faces:[{v:[8,9,1,0],uv:[[80,6.034],[64.271,6.034],[64,9.966],[79.834,9.793]]},{v:[9,10,2,1],uv:[[79.652,5.807],[64.169,5.807],[64,10.175],[80,10.193]]},{v:[10,11,3,2],uv:[[79.801,5.959],[64.475,5.959],[64,10.041],[80,9.926]]},{v:[11,12,4,3],uv:[[79.61,5.878],[64,5.878],[64.207,10.122],[80,9.947]]},{v:[12,13,5,4],uv:[[80,5.968],[64.176,5.968],[64,10.032],[79.825,9.948]]},{v:[13,14,6,5],uv:[[79.805,5.93],[64.547,5.93],[64,10.07],[80,9.567]]},{v:[14,15,7,6],uv:[[79.314,5.824],[64.225,5.824],[64,10.019],[80,10.176]]},{v:[15,8,0,7],uv:[[79.815,5.985],[64,5.985],[64.191,10.015],[80,9.93]]},{v:[16,17,9,8],uv:[[78.679,5.914],[65.223,5.914],[64,9.676],[80,10.086]]},{v:[17,18,10,9],uv:[[78.451,5.73],[64.897,5.73],[64,10.27],[80,9.933]]},{v:[18,19,11,10],uv:[[78.701,5.716],[65.572,5.716],[64,10.284],[80,9.774]]},{v:[19,20,12,11],uv:[[78.803,5.559],[65.595,5.559],[64,9.877],[80,10.441]]},{v:[20,21,13,12],uv:[[78.546,5.434],[65.518,5.434],[64,10.566],[80,9.493]]},{v:[21,22,14,13],uv:[[78.247,5.598],[65.163,5.598],[64,9.343],[80,10.402]]},{v:[22,23,15,14],uv:[[78.996,5.922],[65.045,5.922],[64,9.6],[80,10.078]]},{v:[23,16,8,15],uv:[[79.096,5.839],[65.384,5.839],[64,10.161],[80,9.148]]},{v:[24,25,17,16],uv:[[71.468,15.938],[76.348,2.846],[73.11,0],[67.652,16]]},{v:[25,26,18,17],uv:[[78.562,5.936],[64.756,5.936],[64,8.478],[80,10.064]]},{v:[26,27,19,18],uv:[[79.236,6.719],[64.801,6.719],[64,9.281],[80,9.102]]},{v:[27,28,20,19],uv:[[79.218,6.164],[65.313,6.164],[64,9.836],[80,8.788]]},{v:[28,29,21,20],uv:[[78.672,6.258],[64.983,6.258],[64,9.304],[80,9.742]]},{v:[29,30,22,21],uv:[[78.933,6.446],[65.129,6.446],[64,9.554],[80,9.365]]},{v:[30,31,23,22],uv:[[80,9.2],[67.708,3.304],[64,7.323],[79.822,12.696]]},{v:[31,24,16,23],uv:[[78.529,5.674],[65.542,5.674],[64,9.016],[80,10.326]]},{v:[0,1,2,3,4,5,6,7],uv:[[79.867,7.93],[77.799,1.855],[72.312,0],[66.24,1.804],[64.133,7.312],[65.694,13.252],[71.71,16],[77.225,13.523]]},{v:[40,41,33,32],uv:[[76.922,0],[67.114,0],[66.638,15.975],[77.362,16]]},{v:[41,42,34,33],uv:[[76.497,0],[67.275,0],[67.115,15.985],[76.885,16]]},{v:[42,43,35,34],uv:[[77.238,0],[66.939,0],[66.564,16],[77.436,15.975]]},{v:[43,44,36,35],uv:[[76.396,0],[67.502,0],[67.242,15.993],[76.758,16]]},{v:[44,45,37,36],uv:[[77.237,0],[66.896,0],[66.437,16],[77.563,15.982]]},{v:[45,46,38,37],uv:[[76.999,-0],[67.232,-0],[66.555,16],[77.445,15.935]]},{v:[46,47,39,38],uv:[[76.559,0],[67.287,0],[66.866,15.956],[77.134,16]]},{v:[47,40,32,39],uv:[[77.297,0],[66.747,0],[66.221,16],[77.779,15.966]]},{v:[48,49,41,40],uv:[[79.846,.927],[64.203,.927],[64,15.071],[80,15.073]]},{v:[49,50,42,41],uv:[[79.796,.411],[64.421,.411],[64,15.589],[80,15.48]]},{v:[50,51,43,42],uv:[[79.502,1.229],[64.168,1.229],[64,14.746],[80,14.771]]},{v:[51,52,44,43],uv:[[79.845,.188],[64.033,.188],[64,15.81],[80,15.812]]},{v:[52,53,45,44],uv:[[79.964,1.282],[64.17,1.282],[64,14.718],[80,14.708]]},{v:[53,54,46,45],uv:[[79.818,.912],[64.152,.912],[64,15.086],[80,15.088]]},{v:[54,55,47,46],uv:[[79.854,.516],[64.349,.516],[64,15.484],[80,15.458]]},{v:[55,48,40,47],uv:[[79.638,1.42],[64.183,1.42],[64,14.571],[80,14.58]]},{v:[56,57,49,48],uv:[[96,1.415],[80,1.415],[80.019,14.584],[95.85,14.585]]},{v:[57,58,50,49],uv:[[96,.892],[80,.892],[80.308,15.108],[95.982,15.052]]},{v:[58,59,51,50],uv:[[96,1.645],[80.065,1.645],[80,14.355],[95.648,14.344]]},{v:[59,60,52,51],uv:[[95.936,.753],[80,.753],[80.058,15.247],[96,15.244]]},{v:[60,61,53,52],uv:[[96,1.795],[80,1.795],[80.081,14.205],[95.943,14.204]]},{v:[61,62,54,53],uv:[[96,1.379],[80.077,1.379],[80,14.621],[95.908,14.615]]},{v:[62,63,55,54],uv:[[95.913,.895],[80.26,.895],[80,15.105],[96,15.082]]},{v:[63,56,48,55],uv:[[95.747,1.801],[80,1.801],[80.191,14.199],[96,14.169]]},{v:[64,65,57,56],uv:[[79.948,.223],[64.517,.223],[64,15.777],[80,15.68]]},{v:[65,66,58,57],uv:[[79.013,0],[64.952,0],[64.382,16],[79.618,15.913]]},{v:[66,67,59,58],uv:[[79.309,.456],[64.43,.456],[64,15.489],[80,15.544]]},{v:[67,68,60,59],uv:[[79.135,0],[64.888,-0],[64.521,15.997],[79.479,16]]},{v:[68,69,61,60],uv:[[79.634,.705],[64.205,.705],[64,15.283],[80,15.295]]},{v:[69,70,62,61],uv:[[79.757,.16],[64.398,.16],[64,15.84],[80,15.785]]},{v:[70,71,63,62],uv:[[79.035,0],[64.862,-0],[64.506,15.983],[79.494,16]]},{v:[71,64,56,63],uv:[[79.689,.599],[64.061,.599],[64,15.396],[80,15.401]]},{v:[72,73,65,64],uv:[[79.199,8.292],[64.719,0],[64.308,15.948],[79.692,16]]},{v:[73,74,66,65],uv:[[78.491,0],[65.293,.37],[65.122,15.989],[78.878,16]]},{v:[74,75,67,66],uv:[[79.465,.459],[64.54,0],[64.337,15.996],[79.663,16]]},{v:[75,76,68,67],uv:[[78.716,-0],[65.326,6.099],[65.119,16],[78.881,15.967]]},{v:[76,77,69,68],uv:[[79.712,3.076],[64.436,6.232],[64,12.924],[80,12.722]]},{v:[77,78,70,69],uv:[[77.343,11.014],[66.3,0],[66.488,16],[77.7,15.973]]},{v:[78,79,71,70],uv:[[77.177,-0],[66.862,7.034],[66.823,16],[76.982,15.992]]},{v:[79,72,64,71],uv:[[79.923,1.935],[64.536,6.409],[64,14.065],[80,13.716]]},{v:[80,73,72],uv:[[80,10.962],[65.828,.752],[64,15.248]]},{v:[80,74,73],uv:[[77.642,16],[76.788,0],[66.358,3.629]]},{v:[80,75,74],uv:[[65.934,16],[78.066,4.292],[66.286,-0]]},{v:[80,76,75],uv:[[64,14.165],[80,13.134],[75.263,1.835]]},{v:[80,77,76],uv:[[64,2.803],[75.12,14.15],[80,1.85]]},{v:[80,78,77],uv:[[79.103,12.389],[67.01,0],[64.897,16]]},{v:[80,79,78],uv:[[64.172,16],[79.828,13.197],[74.53,0]]},{v:[80,72,79],uv:[[80,2.461],[64,1.655],[69.327,14.345]]},{v:[87,88,82,81],uv:[[14.212,21.83],[.888,21.83],[-0,25.669],[16,26.17]]},{v:[88,89,83,82],uv:[[15.088,21.905],[.919,21.905],[0,25.927],[16,26.095]]},{v:[89,90,84,83],uv:[[15.128,21.822],[1.427,21.822],[0,26.178],[16,25.294]]},{v:[90,91,85,84],uv:[[14.441,21.954],[1.545,21.954],[0,26.046],[16,25.976]]},{v:[91,92,86,85],uv:[[14.022,21.077],[1.693,21.077],[0,26.923],[16,25.601]]},{v:[92,87,81,86],uv:[[14.387,21.631],[2.011,21.631],[0,25.508],[16,26.369]]},{v:[93,94,88,87],uv:[[8.632,32],[15.317,23.395],[10.679,16],[.683,31.536]]},{v:[94,95,89,88],uv:[[3.509,27.938],[12.058,27.906],[16,20.062],[0,20.997]]},{v:[95,96,90,89],uv:[[1.594,23.779],[5.857,32],[14.406,31.866],[6.387,16]]},{v:[96,97,91,90],uv:[[12.877,20.484],[3.635,20.484],[0,25.731],[16,27.516]]},{v:[97,98,92,91],uv:[[12.378,20.632],[2.237,20.632],[0,26.431],[16,27.368]]},{v:[98,93,87,92],uv:[[13.974,21.205],[3.856,21.205],[0,26.795],[16,26]]},{v:[81,82,83,84,85,86],uv:[[16,23.517],[11.25,17.512],[4.266,17.28],[0,23.721],[4.23,30.72],[11.346,30.534]]},{v:[99,94,93],uv:[[16,29.976],[9.408,18.024],[0,29.332]]},{v:[99,95,94],uv:[[8.07,31.439],[16,16.561],[0,16.618]]},{v:[99,96,95],uv:[[-0,31.367],[16,31.108],[7.977,16.633]]},{v:[99,97,96],uv:[[.294,16.25],[8.523,32],[15.706,16]]},{v:[99,98,97],uv:[[7.86,16.09],[0,30.889],[16,31.91]]},{v:[99,93,98],uv:[[16,18.095],[0,17.451],[9.306,30.549]]},{v:[108,109,101,100],uv:[[64.77,2.213],[64,12.214],[79.167,13.787],[80,2.842]]},{v:[109,110,102,101],uv:[[64.816,2.18],[64,12.022],[79.1,13.82],[80,3.017]]},{v:[110,111,103,102],uv:[[65.358,2.141],[64,11.381],[78.511,13.859],[80,3.817]]},{v:[111,112,104,103],uv:[[64,3.295],[64.206,13.4],[80,13.443],[79.778,2.557]]},{v:[112,113,105,104],uv:[[64.303,2.816],[64,12.151],[79.697,13.184],[80,2.993]]},{v:[113,114,106,105],uv:[[80,11.612],[78.943,2.272],[64,4.025],[65.111,13.728]]},{v:[114,115,107,106],uv:[[80,12.688],[78.859,1.82],[64,3.235],[65.158,14.18]]},{v:[115,108,100,107],uv:[[80,12.825],[79.715,2.626],[64,2.602],[64.359,13.398]]},{v:[100,101,102,103,104,105,106,107],uv:[[72.177,0],[66.591,2.921],[64.172,8.675],[66.945,14.032],[72.644,16],[77.984,14.062],[79.828,8.645],[77.626,2.59]]},{v:[115,114,113,112,111,110,109,108],uv:[[82.584,2.333],[80,8.624],[82.625,13.798],[87.763,15.857],[93.39,13.907],[96,8.611],[93.62,3.047],[88.222,.143]]}]},bone:null}],bones:[],clips:[]},Vd={id:`demo-spikes`,name:`Thorn spikes`,texture:`Demo-16.png`,cubes:[{id:`cube6`,name:`Spikes`,position:[0,0,0],rotation:[0,0,0],mesh:{verts:[[.8574,0,-.0471],[.7551,0,.6476],[.2194,0,.9276],[-.4863,0,.8391],[-.8876,0,.2667],[-.9865,0,-.3312],[-.4407,0,-.8748],[.1883,0,-.9748],[.7828,0,-.5976],[.907,.1,-.0498],[.726,.1,.6226],[.2119,.1,.8962],[-.4572,.1,.7888],[-.7998,.1,.2403],[-.8628,.1,-.2897],[-.377,.1,-.7482],[.1737,.1,-.8989],[.7048,.1,-.5381],[.1622,.08,-.4274],[.0889,.08,-.3271],[-.0745,.08,-.375],[-.0466,.08,-.5304],[.0678,.08,-.5739],[-.0211,.7228,-.3493],[.5029,.08,.0969],[.4124,.08,.2362],[.2625,.08,.1941],[.2511,.08,.0164],[.3796,.08,-.0291],[.4542,.6307,.0745],[.0304,.08,.0621],[-.1022,.08,.2141],[-.2468,.08,.1363],[-.2344,.08,-.0073],[-.099,.08,-.0832],[-.0331,.8105,-.0177],[-.4362,.08,.186],[-.5663,.08,.3674],[-.7306,.08,.2813],[-.7631,.08,.1234],[-.5666,.08,.0589],[-.5913,.692,.1834],[.5643,.08,-.3491],[.4532,.08,-.2065],[.2895,.08,-.2555],[.2911,.08,-.449],[.4737,.08,-.5026],[.3352,.8717,-.343],[-.1429,.08,.1836],[-.2486,.08,.3282],[-.3792,.08,.2983],[-.4059,.08,.141],[-.203,.08,.0697],[-.1935,.9144,.2069],[.0021,.08,-.4893],[-.1262,.08,-.3707],[-.2588,.08,-.3964],[-.2954,.08,-.5721],[-.1202,.08,-.6562],[-.2498,.5049,-.4541],[.1513,.08,-.6793],[.0628,.08,-.5165],[-.0982,.08,-.5488],[-.1341,.08,-.7232],[.0214,.08,-.7989],[-.067,.7058,-.7005],[.2644,.08,-.3794],[.1999,.08,-.2691],[.0382,.08,-.3088],[.0111,.08,-.4987],[.1571,.08,-.5313],[.1738,.6906,-.4097]],faces:[{v:[9,10,1,0],uv:[[128,6.813],[112.371,6.813],[112,9.187],[127.652,8.588]]},{v:[10,11,2,1],uv:[[127.63,6.596],[112.217,6.596],[112,9.368],[128,9.404]]},{v:[11,12,3,2],uv:[[127.723,6.72],[112.468,6.72],[112,9.28],[128,9.018]]},{v:[12,13,4,3],uv:[[127.377,6.47],[112.553,6.47],[112,9.53],[128,8.966]]},{v:[13,14,5,4],uv:[[127.582,5.957],[113.476,5.957],[112,10.043],[128,9.487]]},{v:[14,15,6,5],uv:[[126.723,6.248],[112.841,6.248],[112,9.752],[128,9.406]]},{v:[15,16,7,6],uv:[[127.29,5.962],[112.864,5.962],[112,9.037],[128,10.038]]},{v:[16,17,8,7],uv:[[127.306,6.447],[112.706,6.447],[112,9.553],[128,9.213]]},{v:[17,9,0,8],uv:[[127.273,6.405],[112,6.405],[112.475,9.595],[128,7.861]]},{v:[0,1,2,3,4,5,6,7,8],uv:[[127.754,8.198],[126.894,2.355],[122.388,0],[116.453,.744],[113.078,5.558],[112.246,10.587],[116.836,15.158],[122.127,16],[127.126,12.827]]},{v:[17,16,15,14,13,12,11,10,9],uv:[[113.915,12.784],[118.649,16],[123.557,14.657],[127.887,10.57],[127.325,5.846],[124.272,.957],[118.308,0],[113.726,2.439],[112.113,8.432]]},{v:[23,19,18],uv:[[117.894,0],[119.051,16],[122.106,16]]},{v:[23,20,19],uv:[[103.336,0],[101.882,16],[106.118,16]]},{v:[23,21,20],uv:[[106.155,0],[101.845,16],[105.759,16]]},{v:[23,22,21],uv:[[121.953,0],[118.047,16],[120.983,16]]},{v:[23,18,22],uv:[[102.727,0],[101.925,16],[106.075,16]]},{v:[29,25,24],uv:[[122.179,0],[117.597,16],[122.403,16]]},{v:[29,26,25],uv:[[106.067,0],[101.835,16],[106.165,16]]},{v:[29,27,26],uv:[[103.507,0],[101.568,16],[106.432,16]]},{v:[29,28,27],uv:[[117.561,0],[118.574,16],[122.439,16]]},{v:[29,24,28],uv:[[102.892,0],[101.441,16],[106.559,16]]},{v:[35,31,30],uv:[[122.387,0],[117.613,16],[121.989,16]]},{v:[35,32,31],uv:[[104.691,0],[102.289,16],[105.711,16]]},{v:[35,33,32],uv:[[102.184,0],[102.771,16],[105.816,16]]},{v:[35,34,33],uv:[[118.037,0],[118.588,16],[121.963,16]]},{v:[35,30,34],uv:[[104.1,0],[101.869,16],[106.131,16]]},{v:[41,37,36],uv:[[120.599,0],[117.144,16],[122.856,16]]},{v:[41,38,37],uv:[[103.624,0],[101.646,16],[106.354,16]]},{v:[41,39,38],uv:[[104.324,0],[101.958,16],[106.042,16]]},{v:[41,40,39],uv:[[118.942,0],[117.339,16],[122.661,16]]},{v:[41,36,40],uv:[[104.561,0],[101.655,16],[106.345,16]]},{v:[47,43,42],uv:[[118.909,0],[118.217,16],[121.783,16]]},{v:[47,44,43],uv:[[102.661,0],[102.286,16],[105.714,16]]},{v:[47,45,44],uv:[[104.18,0],[102.048,16],[105.952,16]]},{v:[47,46,45],uv:[[121.655,0],[118.097,16],[121.903,16]]},{v:[47,42,46],uv:[[104.434,0],[102.253,16],[105.747,16]]},{v:[53,49,48],uv:[[120.785,0],[118.284,16],[121.716,16]]},{v:[53,50,49],uv:[[105.521,0],[102.479,16],[105.016,16]]},{v:[53,51,50],uv:[[104.388,0],[102.512,16],[105.488,16]]},{v:[53,52,51],uv:[[118.655,0],[117.964,16],[122.036,16]]},{v:[53,48,52],uv:[[102.826,0],[102.768,16],[105.232,16]]},{v:[59,55,54],uv:[[116.279,0],[117.493,16],[123.721,16]]},{v:[59,56,55],uv:[[101.44,0],[101.519,16],[106.56,16]]},{v:[59,57,56],uv:[[105.32,-0],[100.625,16],[107.375,16]]},{v:[59,58,57],uv:[[123.689,0],[116.311,16],[123.329,16]]},{v:[59,54,58],uv:[[104.565,0],[100.554,16],[107.446,16]]},{v:[65,61,60],uv:[[120.167,0],[117.746,16],[122.254,16]]},{v:[65,62,61],uv:[[101.981,0],[101.963,16],[106.037,16]]},{v:[65,63,62],uv:[[102.644,0],[101.735,16],[106.265,16]]},{v:[65,64,63],uv:[[120.92,0],[117.796,16],[122.204,16]]},{v:[65,60,64],uv:[[106.17,0],[101.791,16],[106.209,16]]},{v:[71,67,66],uv:[[121.146,0],[118.345,16],[121.655,16]]},{v:[71,68,67],uv:[[104.626,0],[101.866,16],[106.134,16]]},{v:[71,69,68],uv:[[104.386,0],[101.559,16],[106.441,16]]},{v:[71,70,69],uv:[[118.34,0],[118.078,16],[121.922,16]]},{v:[71,66,70],uv:[[103.584,0],[101.574,16],[106.426,16]]}]},bone:null}],bones:[],clips:[]},Hd={id:`demo-star-crystal`,name:`Star crystal`,texture:`Demo-16.png`,cubes:[{id:`cube2`,name:`Crystal`,position:[0,0,0],rotation:[0,0,0],mesh:{verts:[[.2523,.6226,-.034],[.1107,.6256,.188],[-.1452,.6201,.1923],[-.2007,.6175,.0213],[-.0973,.6256,-.1826],[.0888,.6112,-.2007],[.0498,1.2,.0239],[.0375,.16,.0116],[.0753,.4314,-.0498],[.0871,.4609,.0988],[-.0412,.5558,.1126],[-.0897,.5511,-.0575],[-.0193,.4793,-.1161],[.249,.8973,-.0517],[-.0795,.4218,.0587],[-.0466,.4185,-.0849],[.103,.4837,-.0579],[.0676,.5555,.0413],[-.0469,.5511,.0715],[-.1015,.4668,-4e-4],[-.1084,.8243,-.2643],[.0042,.3777,.0448],[-.0754,.439,.0492],[-.0534,.4914,-.1125],[.0594,.5628,-.1036],[.1021,.5595,.0471],[.0227,.4866,.1087],[-.2957,.8681,.1239],[.0655,.3972,-.0033],[.036,.4399,.0572],[-.0874,.487,.0485],[-.0827,.5725,-.0439],[.0397,.5728,-.0888],[.114,.4718,-.0106],[.1191,.8065,.2532],[.0125,.3876,-.0645]],faces:[{v:[6,1,0],uv:[[7.31,0],[4.454,15.916],[11.546,16]]},{v:[7,0,1],uv:[[7.255,16],[12.288,.104],[3.712,0]]},{v:[6,2,1],uv:[[25.823,0],[20.607,16],[27.393,15.848]]},{v:[7,1,2],uv:[[25.9,16],[28.106,0],[19.894,.19]]},{v:[6,3,2],uv:[[7.708,0],[5.714,16],[10.286,15.929]]},{v:[7,2,3],uv:[[7.257,16],[10.796,0],[5.204,.089]]},{v:[6,4,3],uv:[[24.164,0],[21.073,15.777],[26.927,16]]},{v:[7,3,4],uv:[[23.83,16],[27.581,.279],[20.419,0]]},{v:[6,5,4],uv:[[7.001,0],[5.623,16],[10.377,15.608]]},{v:[7,4,5],uv:[[7.54,16],[10.926,0],[5.074,.496]]},{v:[6,0,5],uv:[[23.654,0],[20.977,15.691],[27.023,16]]},{v:[7,5,0],uv:[[23.918,16],[27.741,.394],[20.259,0]]},{v:[13,9,8],uv:[[10.408,-0],[5.592,14.986],[10.374,16]]},{v:[14,8,9],uv:[[0,4.741],[14.404,15.066],[16,.934]]},{v:[13,10,9],uv:[[29.79,-0],[18.21,12.52],[22.754,16]]},{v:[14,9,10],uv:[[16,14.66],[32,10.773],[20.319,1.34]]},{v:[13,11,10],uv:[[8.064,0],[5.027,16],[10.973,15.784]]},{v:[14,10,11],uv:[[10.379,14.145],[16,1.855],[0,2.283]]},{v:[13,12,11],uv:[[18.436,0],[26.445,16],[29.564,13.252]]},{v:[14,11,12],uv:[[32,14.304],[23.405,1.696],[16,8.691]]},{v:[13,8,12],uv:[[3.549,-0],[8.567,16],[12.451,14.352]]},{v:[14,12,8],uv:[[1.66,-0],[5.592,16],[14.34,9.934]]},{v:[20,16,15],uv:[[12.955,0],[3.045,13.429],[8.6,16]]},{v:[21,15,16],uv:[[2.231,16],[13.769,9.843],[2.576,-0]]},{v:[20,17,16],uv:[[30.424,-0],[17.576,12.629],[21.503,16]]},{v:[21,16,17],uv:[[18.001,16],[29.999,6.458],[21.097,-0]]},{v:[20,18,17],uv:[[6.213,0],[5.836,16],[10.164,15.742]]},{v:[21,17,18],uv:[[7.734,16],[13.314,-0],[2.686,.397]]},{v:[20,19,18],uv:[[16.793,0],[27.427,16],[31.207,12.229]]},{v:[21,18,19],uv:[[28.947,16],[26.722,0],[19.053,7.777]]},{v:[20,15,19],uv:[[3.534,-0],[8.726,16],[12.466,14.096]]},{v:[21,19,15],uv:[[15.605,16],[10.085,-0],[.395,8.674]]},{v:[27,23,22],uv:[[13.005,-0],[2.995,14.047],[8.496,16]]},{v:[28,22,23],uv:[[2.517,16],[13.833,8.898],[2.167,0]]},{v:[27,24,23],uv:[[31.622,-0],[16.378,12.964],[20.531,16]]},{v:[28,23,24],uv:[[17.474,16],[30.526,6.904],[21.468,0]]},{v:[27,25,24],uv:[[6.276,0],[5.536,16],[10.464,15.829]]},{v:[28,24,25],uv:[[6.101,16],[15.505,0],[.495,.319]]},{v:[27,26,25],uv:[[16.122,0],[27.958,16],[31.878,12.941]]},{v:[28,25,26],uv:[[29.334,16],[27.633,0],[18.666,7.19]]},{v:[27,22,26],uv:[[2.948,0],[9.071,16],[13.052,14.225]]},{v:[28,26,22],uv:[[15.874,16],[11.073,0],[.126,8.519]]},{v:[34,30,29],uv:[[12.956,-0],[3.044,13.945],[7.867,16]]},{v:[35,29,30],uv:[[4.043,16],[12.478,7.578],[3.522,0]]},{v:[34,31,30],uv:[[32,.049],[16,11.692],[19.967,15.951]]},{v:[35,30,31],uv:[[18.211,16],[29.789,7.401],[22.966,0]]},{v:[34,32,31],uv:[[7.202,0],[5.516,15.98],[10.484,16]]},{v:[35,31,32],uv:[[5.308,16],[13.614,.025],[2.386,0]]},{v:[34,33,32],uv:[[16.216,0],[27.12,16],[31.784,11.171]]},{v:[35,32,33],uv:[[28.823,16],[28.172,-0],[19.177,8.721]]},{v:[34,29,33],uv:[[4.135,0],[7.911,16],[11.865,14.605]]},{v:[35,33,29],uv:[[13.7,16],[12.834,0],[2.3,6.066]]}]},bone:`bone1`}],bones:[{id:`bone1`,name:`Root`,parent:null,pivot:[0,.62,0]}],clips:[{name:`spin`,duration:3.2,loop:!0,smooth:!0,tracks:{Root:{rot:[{t:0,v:[0,0,0]},{t:1.6,v:[0,180,0]},{t:3.2,v:[0,360,0]}],pos:[{t:0,v:[0,0,0]},{t:.8,v:[0,.07,0]},{t:1.6,v:[0,0,0]},{t:2.4000000000000004,v:[0,.07,0]},{t:3.2,v:[0,0,0]}]}},id:`clip3`}]};function Ud(){let e=Object.assign({"/assets/models/crystal-cluster.json":zd,"/assets/models/ruin-column.json":Bd,"/assets/models/spikes.json":Vd,"/assets/models/star-crystal.json":Hd});return Object.keys(e).sort().map(t=>e[t])}var Wd=`Kit-16.png`,Gd=`stone_brick.stone_brick_dark.stone_block.plaster.plaster_aged.timber.timber_h.timber_brace.brick_red.cobble.cobble_dark.rubble.slate_wall.sandstone.marble.stone_brick_moss.roof_red.roof_slate.roof_thatch.roof_wood.roof_copper.roof_ridge.floor_wood.floor_flagstone.floor_checker.path_cobble.path_dirt.floor_stone.carpet_red.carpet_blue.grass.gravel.door_wood.door_iron.window.shutter.iron_bars.trim_stone.trim_wood.beam_end.plank_bridge.chain.lattice.stripes.canvas.canvas_stripes.metal_rust.lamp_glow.bark_oak.bark_pine.bark_birch.bark_dead.leaves_oak.leaves_light.leaves_pine.leaves_autumn.leaves_cherry.leaves_palm.moss.vines.root.trunk_cut.grass_blades.meadow.mush_cap.mush_stem.water.foam.dirt.stone.snow.banner_red.banner_blue.wax.glass.straw.sand.ivy.blank.blank`.split(`.`),Kd=16,qd=16;function Jd(e){let t=Gd.indexOf(e);return{col:t%Kd,row:Math.floor(t/Kd)}}var Q=e=>{let{col:t,row:n}=Jd(e);return{x:t*qd,y:n*qd,w:qd,h:qd}},Yd=Math.PI/180;function Xd(e,t,n){let r=Math.cos(t*Yd),i=Math.sin(t*Yd),a=Math.cos(n*Yd),o=Math.sin(n*Yd);return e.verts=e.verts.map(([e,t,n])=>{let s=t*r-n*i,c=t*i+n*r;return[e*a+c*o,s,-e*o+c*a]}),e}function Zd(e,t,n){let r={verts:[[-e/2,0,0],[e/2,0,0],[e/2,0,t],[-e/2,0,t]],faces:[{v:[3,2,1,0],uv:[]}]};return ml(r,[0],Q(n)),r}function Qd(e,t=.04){return cd(e,{amount:t})}var $d=(e,t,n=.04)=>Qd(rl(e,null,null,Q(t)),n);function ef(e,t,n,r,i,a=`trunk_cut`){let o=qu(8,n*1.5,n,t*.2,Q(i));e.spreadCaps(o,n*1.5,a,[0]),e.mesh(`Roots`,[0,t*.1,0],o);let s=qu(8,n,r,t*.85,Q(i));e.spreadCaps(s,r,a,[1]),e.mesh(`Trunk`,[0,t*.2+t*.85/2-t*.05,0],s)}function tf(e,t,n,r,i,a=5){e.mesh(t,n,Ju(r,8,a,Q(i)),[0,0,0],null,!0)}function nf(e,t,n){ef(e,2.6,.4,.24,t),e.mesh(`Branch`,[.45,2.45,0],qu(6,.14,.07,1.3,Q(t)),[0,0,-42]),e.mesh(`Branch 2`,[-.42,2.4,.1],qu(6,.13,.07,1.2,Q(t)),[0,0,40]),tf(e,`Crown`,[0,3.55,0],1.2,n),tf(e,`Crown 2`,[.95,3.1,.2],.9,n),tf(e,`Crown 3`,[-.95,3,-.2],.85,n),tf(e,`Crown 4`,[.1,3.05,.95],.8,n),tf(e,`Crown 5`,[.05,4.4,-.05],.75,n)}var rf={"stone-wall":{name:`Stone wall`,build:e=>{e.mesh(`Wall`,[0,1,0],$d([2,2,.5],`stone_brick`)),e.mesh(`Cap`,[0,2.1,0],$d([2.1,.2,.66],`trim_stone`,.03))}},"stone-pillar":{name:`Stone pillar`,build:e=>{e.mesh(`Plinth`,[0,.15,0],$d([.9,.3,.9],`stone_block`));let t=qu(10,.34,.3,2.4,Q(`stone_brick`));e.spreadCaps(t,.34,`stone_block`),e.mesh(`Shaft`,[0,1.5,0],t),e.mesh(`Capital`,[0,2.85,0],$d([.9,.3,.9],`stone_block`))}},archway:{name:`Archway`,build:e=>{e.mesh(`Wall`,[0,1.6,0],Qd(Ku([3,3.2,.7],1.5,2.4,10,Q(`stone_block`)),.03)),e.mesh(`Keystone`,[0,2.62,0],$d([.34,.42,.8],`trim_stone`,.03)),e.mesh(`Plinth`,[-1.1,.12,0],$d([.8,.24,.82],`trim_stone`,.03)),e.mesh(`Plinth 2`,[1.1,.12,0],$d([.8,.24,.82],`trim_stone`,.03))}},"stone-stairs":{name:`Stone stairs`,build:e=>{e.mesh(`Stairs`,[0,.8,0],Gu([2,1.6,3],8,Q(`stone_block`)))}},"wood-stairs":{name:`Wooden stairs`,build:e=>{e.mesh(`Stairs`,[0,.6,0],Gu([1.4,1.2,2.4],6,Q(`trim_wood`)))}},"floor-slab":{name:`Flagstone slab`,build:e=>{e.mesh(`Slab`,[0,.08,0],$d([2,.16,2],`floor_flagstone`,.025))}},"cobble-path":{name:`Cobble path`,build:e=>{e.mesh(`Path`,[0,.06,0],$d([2,.12,2],`path_cobble`,.02))}},gate:{name:`Iron gate`,build:e=>{e.mesh(`Post`,[-1.15,1.25,0],$d([.5,2.5,.5],`stone_brick`,.04)),e.mesh(`Post 2`,[1.15,1.25,0],$d([.5,2.5,.5],`stone_brick`,.04)),e.mesh(`Post cap`,[-1.15,2.6,0],$d([.62,.2,.62],`trim_stone`,.03)),e.mesh(`Post cap 2`,[1.15,2.6,0],$d([.62,.2,.62],`trim_stone`,.03)),e.box(`Bars`,[0,1.1,0],[1.8,2,.05],`iron_bars`),e.box(`Top bar`,[0,2.15,0],[1.8,.1,.1],`door_iron`)}},"wood-fence":{name:`Wooden fence`,build:e=>{e.mesh(`Post`,[0,.5,0],$d([.16,1,.16],`trim_wood`,.02)),e.mesh(`Post point`,[0,1.1,0],qu(4,.14,0,.2,Q(`trim_wood`),Math.PI/4)),e.box(`Rail`,[0,.78,0],[1,.1,.07],`trim_wood`),e.box(`Rail 2`,[0,.36,0],[1,.1,.07],`trim_wood`)}},"round-tower":{name:`Round tower`,build:e=>{let t=qu(12,1.7,1.5,5,Q(`stone_brick`));e.mesh(`Tower`,[0,2.5,0],t),e.mesh(`Eaves`,[0,5.05,0],qu(12,2,2,.18,Q(`roof_wood`))),e.mesh(`Roof`,[0,6.2,0],qu(12,1.95,0,2.2,Q(`roof_slate`))),e.mesh(`Door`,[0,.85,1.66],Qd(Ku([1,1.7,.18],.8,1.5,6,Q(`door_wood`)),.02)),e.box(`Window`,[0,3.4,1.58],[.5,.8,.14],`window`),e.box(`Window 2`,[1.2,3.4,1.1],[.5,.8,.14],`window`,[0,47,0]),e.box(`Window 3`,[-1.2,3.4,1.1],[.5,.8,.14],`window`,[0,-47,0])}},house:{name:`Cottage`,build:e=>{e.mesh(`Foundation`,[0,.2,0],$d([4.3,.4,3.7],`stone_block`,.04)),e.box(`Walls`,[0,1.6,0],[4,2.4,3.4],{side:`plaster`,top:`plaster`,bottom:`plaster`});for(let[t,n]of[[-2,1.7],[2,1.7],[-2,-1.7],[2,-1.7]])e.mesh(`Post`,[t,1.6,n],$d([.22,2.44,.22],`timber`,.02));e.mesh(`Beam`,[0,2.35,1.72],$d([4.2,.2,.14],`timber_h`,.02)),e.mesh(`Beam 2`,[0,2.35,-1.72],$d([4.2,.2,.14],`timber_h`,.02)),e.mesh(`Beam 3`,[2.02,2.35,0],$d([.14,.2,3.5],`timber_h`,.02)),e.mesh(`Beam 4`,[-2.02,2.35,0],$d([.14,.2,3.5],`timber_h`,.02));let t=Uu([[-2.1,0],[2.1,0],[0,1.7]],4.7,`zy`,Q(`roof_red`));ml(t,[0,1],Q(`plaster`)),e.mesh(`Roof`,[0,2.8,0],t,[0,0,0]),e.box(`Ridge`,[0,4.52,0],[4.8,.12,.26],`roof_ridge`),e.box(`Door frame`,[0,1.35,1.72],[1.15,1.9,.1],`trim_wood`),e.mesh(`Door`,[0,1.3,1.78],Qd(Ku([.95,1.75,.1],.8,1.6,6,Q(`door_wood`)),.015)),e.box(`Window`,[-1.3,1.9,1.74],[.8,.8,.1],`window`),e.box(`Shutter`,[-1.85,1.9,1.78],[.3,.8,.06],`shutter`),e.box(`Shutter 2`,[-.75,1.9,1.78],[.3,.8,.06],`shutter`),e.box(`Window 2`,[1.3,1.9,1.74],[.8,.8,.1],`window`),e.box(`Shutter 3`,[.75,1.9,1.78],[.3,.8,.06],`shutter`),e.box(`Shutter 4`,[1.85,1.9,1.78],[.3,.8,.06],`shutter`),e.mesh(`Chimney`,[1.35,3.9,-.5],$d([.55,1.9,.55],`brick_red`,.03)),e.mesh(`Step`,[0,.45,2],$d([1.3,.12,.5],`stone_block`,.02))}},"roof-gable":{name:`Roof piece`,build:e=>{let t=Uu([[-2,0],[2,0],[0,1.6]],3,`zy`,Q(`roof_red`));ml(t,[0,1],Q(`plaster`)),e.mesh(`Roof`,[0,0,0],t),e.box(`Ridge`,[0,1.62,0],[3.1,.12,.26],`roof_ridge`)}},chimney:{name:`Chimney`,build:e=>{e.mesh(`Shaft`,[0,.9,0],$d([.6,1.8,.6],`brick_red`,.03)),e.mesh(`Top`,[0,1.85,0],$d([.76,.14,.76],`trim_stone`,.02))}},"stone-bridge":{name:`Stone bridge`,build:e=>{e.mesh(`Body`,[0,.9,0],Qd(Ku([4.4,1.8,1.8],2.4,1.4,10,Q(`stone_block`)),.03)),e.mesh(`Deck`,[0,1.9,0],$d([4.8,.2,2],`floor_stone`,.03)),e.mesh(`Parapet`,[0,2.3,.88],$d([4.8,.6,.24],`stone_brick`,.03)),e.mesh(`Parapet 2`,[0,2.3,-.88],$d([4.8,.6,.24],`stone_brick`,.03))}},"wood-bridge":{name:`Wooden bridge`,build:e=>{for(let t=0;t<8;t++)e.box(`Plank`,[-1.75+t*.5,.55,0],[.44,.1,1.4],`plank_bridge`);e.mesh(`Beam`,[0,.42,.62],$d([4.2,.16,.16],`timber_h`,.02)),e.mesh(`Beam 2`,[0,.42,-.62],$d([4.2,.16,.16],`timber_h`,.02));for(let t of[-1.9,1.9])for(let n of[-.66,.66])e.mesh(`Post`,[t,.7,n],$d([.16,1.4,.16],`trim_wood`,.02));e.box(`Rail`,[0,1.28,.66],[4,.08,.08],`trim_wood`),e.box(`Rail 2`,[0,1.28,-.66],[4,.08,.08],`trim_wood`)}},"market-stall":{name:`Market stall`,build:e=>{e.mesh(`Counter`,[0,.45,.3],$d([1.8,.9,.7],`trim_wood`,.03)),e.box(`Goods`,[0,.98,.3],[1.4,.12,.5],`straw`);for(let[t,n]of[[-.85,-.45],[.85,-.45],[-.85,.6],[.85,.6]])e.mesh(`Post`,[t,1.1,n],$d([.1,2.2,.1],`timber`,.015));e.mesh(`Awning`,[0,2.25,.1],hl([2.2,.5,1.6],Q(`canvas_stripes`)),[0,180,0])}},windmill:{name:`Windmill`,build:e=>{e.mesh(`Base`,[0,.3,0],qu(8,1.6,1.5,.6,Q(`stone_block`))),e.mesh(`Tower`,[0,2.4,0],qu(8,1.4,.95,3.6,Q(`plaster`))),e.mesh(`Roof`,[0,4.7,0],qu(8,1.2,0,1.5,Q(`roof_thatch`))),e.mesh(`Door`,[0,.9,1.45],Qd(Ku([.9,1.7,.16],.7,1.5,6,Q(`door_wood`)),.02)),e.box(`Window`,[0,2.8,1.16],[.45,.6,.12],`window`);let t=e.bone(`Sails`,[0,3.5,1.2]);e.box(`Hub`,[0,3.5,1.2],[.3,.3,.4],`timber`,[0,0,0],t),e.mesh(`Beam`,[0,3.5,1.3],$d([.14,3.4,.08],`timber`,.01),[0,0,0],t),e.mesh(`Beam 2`,[0,3.5,1.3],$d([3.4,.14,.08],`timber`,.01),[0,0,0],t);for(let n=0;n<4;n++){let r=n*90*Yd,i=[-Math.sin(r),Math.cos(r)],a=[Math.cos(r),Math.sin(r)];e.box(`Sail`,[i[0]*1.15+a[0]*.3,3.5+i[1]*1.15+a[1]*.3,1.36],[.5,1.1,.03],`canvas`,[0,0,n*90],t)}e.clip(`turn`,10,!0,{Sails:{rot:[{t:0,v:[0,0,0]},{t:5,v:[0,0,-180]},{t:10,v:[0,0,-360]}]}})}},lighthouse:{name:`Lighthouse`,build:e=>{e.mesh(`Foot`,[0,.25,0],qu(12,1.8,1.7,.5,Q(`stone_block`))),e.mesh(`Band`,[0,1.5,0],qu(12,1.5,1.3,2,Q(`plaster`))),e.mesh(`Band 2`,[0,3.5,0],qu(12,1.3,1.1,2,Q(`brick_red`))),e.mesh(`Band 3`,[0,5.5,0],qu(12,1.1,.95,2,Q(`plaster`))),e.mesh(`Gallery`,[0,6.6,0],qu(12,1.3,1.3,.25,Q(`trim_stone`))),e.mesh(`Lamp`,[0,7.25,0],qu(8,.55,.55,1,Q(`lamp_glow`))),e.mesh(`Roof`,[0,8.1,0],qu(8,.85,0,.8,Q(`roof_copper`))),e.mesh(`Door`,[0,.85,1.74],Qd(Ku([.9,1.6,.16],.7,1.4,6,Q(`door_wood`)),.02))}},boulder:{name:`Large boulder`,build:e=>{let t=sd(bl(21,2.4,Q(`stone`)));e.mesh(`Rock`,[0,-il(t).min[1],0],t,[0,0,0],null,!0)}},"ring-stone":{name:`Standing ring`,build:e=>{e.mesh(`Ring`,[0,1.1,0],Xu(.9,.22,14,7,Q(`stone`)),[90,0,0],null,!0),e.mesh(`Base`,[0,.15,0],$d([1.3,.3,.7],`stone_block`,.03))}},"oak-tree":{name:`Oak tree`,build:e=>nf(e,`bark_oak`,`leaves_oak`)},"cherry-tree":{name:`Cherry tree`,build:e=>nf(e,`bark_oak`,`leaves_cherry`)},"autumn-tree":{name:`Autumn tree`,build:e=>nf(e,`bark_oak`,`leaves_autumn`)},"pine-tree":{name:`Pine tree`,build:e=>{ef(e,2,.32,.18,`bark_pine`);for(let[t,n,r]of[[1.45,1.5,1.9],[1.15,1.4,2.7],[.88,1.3,3.4],[.62,1.2,4.05]])e.mesh(`Tier`,[0,r,0],qu(9,t,0,n,Q(`leaves_pine`)))}},"birch-tree":{name:`Birch tree`,build:e=>{ef(e,3.2,.24,.15,`bark_birch`),tf(e,`Crown`,[0,3.5,0],.95,`leaves_light`),tf(e,`Crown 2`,[.55,3,.3],.7,`leaves_light`),tf(e,`Crown 3`,[-.45,3.15,-.3],.65,`leaves_light`)}},"palm-tree":{name:`Palm tree`,build:e=>{let t=0,n=0,r=4;for(let i=0;i<6;i++){let a=.8,o=.26-i*.025,s=o-.025,c=t+Math.sin(r*Yd)*(a/2),l=n+Math.cos(r*Yd)*(a/2);e.mesh(`Trunk`,[c,l,0],qu(8,o,s,a,Q(`bark_pine`)),[0,0,-r]),t+=Math.sin(r*Yd)*a,n+=Math.cos(r*Yd)*a,r+=3.5}for(let r=0;r<7;r++){let i=r/7*360,a=Xd(Zd(.9,1.9,`leaves_palm`),18+r%2*10,i);e.mesh(`Frond`,[t,n+.05,0],a)}e.mesh(`Coconut`,[t,n-.1,.12],Ju(.12,6,4,Q(`bark_oak`)),[0,0,0],null,!0)}},"dead-tree":{name:`Dead tree`,build:e=>{ef(e,3,.34,.14,`bark_dead`),e.mesh(`Branch`,[.55,2.2,0],qu(6,.12,.04,1.5,Q(`bark_dead`)),[0,0,-50]),e.mesh(`Branch 2`,[-.5,2.6,.1],qu(6,.1,.04,1.3,Q(`bark_dead`)),[0,0,55]),e.mesh(`Branch 3`,[.15,3,.45],qu(6,.09,.03,1.1,Q(`bark_dead`)),[55,0,-10])}},"round-bush":{name:`Round bush`,build:e=>{tf(e,`Leaves`,[0,.45,0],.55,`leaves_oak`),tf(e,`Leaves 2`,[.4,.35,.2],.4,`leaves_oak`),tf(e,`Leaves 3`,[-.35,.35,-.15],.42,`leaves_light`)}},hedge:{name:`Hedge`,build:e=>{e.mesh(`Hedge`,[0,.5,0],sd(rl([2,1,.8],null,null,Q(`leaves_oak`))),[0,0,0],null,!0)}},stump:{name:`Tree stump`,build:e=>{let t=qu(9,.42,.36,.6,Q(`bark_oak`));e.spreadCaps(t,.42,`trunk_cut`,[1]),e.mesh(`Stump`,[0,.3,0],t),e.mesh(`Root`,[.4,.1,.1],qu(5,.12,.05,.5,Q(`root`)),[0,0,-75]),e.mesh(`Root 2`,[-.2,.1,.38],qu(5,.12,.05,.5,Q(`root`)),[70,0,10])}},log:{name:`Fallen log`,build:e=>{let t=qu(9,.3,.27,2.2,Q(`bark_oak`));e.spreadCaps(t,.3,`trunk_cut`),e.mesh(`Log`,[0,.3,0],t,[0,0,90])}},"big-mushroom":{name:`Giant mushroom`,build:e=>{e.mesh(`Stem`,[0,.5,0],qu(8,.2,.15,1,Q(`mush_stem`))),e.mesh(`Cap`,[0,1.28,0],Yu(.8,10,3,Q(`mush_cap`)),[0,0,0],null,!0)}}},af=Object.keys(rf),of=e=>`kit-${e}`;function sf(e,t){let n=rf[e],r=new dd(t,Q,`stone`);return n.build(r),r.toModel(of(e),n.name,Wd)}function cf(e){return af.map(t=>sf(t,e))}var lf=[{value:`color`,label:`Flat color`,hint:`One color, like a plain backdrop`},{value:`gradient`,label:`Gradient`,hint:`From the sky color at the horizon up to the top color`},{value:`clouds`,label:`Clouds`,hint:`A gradient with soft pixel clouds`},{value:`stars`,label:`Stars`,hint:`A gradient with a night sky of stars`},{value:`texture`,label:`Picture`,hint:`A wide picture from your textures that wraps around the world`}],uf={skyStyle:`color`,skyTop:`#3f78c8`,skyTexture:null,fogColor:null,fogSky:.3,fogNear:60,fogFar:160,sunYaw:30,sunPitch:58,sunColor:`#fff4e0`,sunIntensity:1.9,ambient:1.7,shadows:!0},df=(e,t,n,r)=>typeof e==`number`&&Number.isFinite(e)?Math.min(n,Math.max(t,e)):r,ff=(e,t)=>typeof e==`string`&&/^#[0-9a-fA-F]{6}$/.test(e)?e:t;function pf(e){let t=e&&typeof e==`object`?e:{},n=df(t.fogNear,0,1e3,uf.fogNear),r=Math.max(n+1,df(t.fogFar,1,2e3,uf.fogFar));return{skyStyle:lf.find(e=>e.value===t.skyStyle)?.value??uf.skyStyle,skyTop:ff(t.skyTop,uf.skyTop),skyTexture:typeof t.skyTexture==`string`&&t.skyTexture?t.skyTexture:null,fogColor:typeof t.fogColor==`string`&&/^#[0-9a-fA-F]{6}$/.test(t.fogColor)?t.fogColor:null,fogSky:df(t.fogSky,0,1,uf.fogSky),fogNear:n,fogFar:r,sunYaw:df(t.sunYaw,-360,360,uf.sunYaw),sunPitch:df(t.sunPitch,5,90,uf.sunPitch),sunColor:ff(t.sunColor,uf.sunColor),sunIntensity:df(t.sunIntensity,0,6,uf.sunIntensity),ambient:df(t.ambient,0,6,uf.ambient),shadows:typeof t.shadows==`boolean`?t.shadows:uf.shadows}}function mf(e){let t=e.sunYaw*Math.PI/180,n=e.sunPitch*Math.PI/180,r=Math.cos(n);return[Math.sin(t)*r,Math.sin(n),Math.cos(t)*r]}var hf=Uint8Array,gf=Uint16Array,_f=Int32Array,vf=new hf([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),yf=new hf([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),bf=new hf([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),xf=function(e,t){for(var n=new gf(31),r=0;r<31;++r)n[r]=t+=1<<e[r-1];for(var i=new _f(n[30]),r=1;r<30;++r)for(var a=n[r];a<n[r+1];++a)i[a]=a-n[r]<<5|r;return{b:n,r:i}},Sf=xf(vf,2),Cf=Sf.b,wf=Sf.r;Cf[28]=258,wf[258]=28;for(var Tf=xf(yf,0),Ef=Tf.b,Df=Tf.r,Of=new gf(32768),kf=0;kf<32768;++kf){var Af=(kf&43690)>>1|(kf&21845)<<1;Af=(Af&52428)>>2|(Af&13107)<<2,Af=(Af&61680)>>4|(Af&3855)<<4,Of[kf]=((Af&65280)>>8|(Af&255)<<8)>>1}for(var jf=(function(e,t,n){for(var r=e.length,i=0,a=new gf(t);i<r;++i)e[i]&&++a[e[i]-1];var o=new gf(t);for(i=1;i<t;++i)o[i]=o[i-1]+a[i-1]<<1;var s;if(n){s=new gf(1<<t);var c=15-t;for(i=0;i<r;++i)if(e[i])for(var l=i<<4|e[i],u=t-e[i],d=o[e[i]-1]++<<u,f=d|(1<<u)-1;d<=f;++d)s[Of[d]>>c]=l}else for(s=new gf(r),i=0;i<r;++i)e[i]&&(s[i]=Of[o[e[i]-1]++]>>15-e[i]);return s}),Mf=new hf(288),kf=0;kf<144;++kf)Mf[kf]=8;for(var kf=144;kf<256;++kf)Mf[kf]=9;for(var kf=256;kf<280;++kf)Mf[kf]=7;for(var kf=280;kf<288;++kf)Mf[kf]=8;for(var Nf=new hf(32),kf=0;kf<32;++kf)Nf[kf]=5;var Pf=jf(Mf,9,0),Ff=jf(Mf,9,1),If=jf(Nf,5,0),Lf=jf(Nf,5,1),Rf=function(e){for(var t=e[0],n=1;n<e.length;++n)e[n]>t&&(t=e[n]);return t},zf=function(e,t,n){var r=t/8|0;return(e[r]|e[r+1]<<8)>>(t&7)&n},Bf=function(e,t){var n=t/8|0;return(e[n]|e[n+1]<<8|e[n+2]<<16)>>(t&7)},Vf=function(e){return(e+7)/8|0},Hf=function(e,t,n){return(t==null||t<0)&&(t=0),(n==null||n>e.length)&&(n=e.length),new hf(e.subarray(t,n))},Uf=[`unexpected EOF`,`invalid block type`,`invalid length/literal`,`invalid distance`,`stream finished`,`no stream handler`,,`no callback`,`invalid UTF-8 data`,`extra field too long`,`date not in range 1980-2099`,`filename too long`,`stream finishing`,`invalid zip data`],Wf=function(e,t,n){var r=Error(t||Uf[e]);if(r.code=e,Error.captureStackTrace&&Error.captureStackTrace(r,Wf),!n)throw r;return r},Gf=function(e,t,n,r){var i=e.length,a=r?r.length:0;if(!i||t.f&&!t.l)return n||new hf(0);var o=!n,s=o||t.i!=2,c=t.i;o&&(n=new hf(i*3));var l=function(e){var t=n.length;if(e>t){var r=new hf(Math.max(t*2,e));r.set(n),n=r}},u=t.f||0,d=t.p||0,f=t.b||0,p=t.l,m=t.d,h=t.m,g=t.n,_=i*8;do{if(!p){u=zf(e,d,1);var v=zf(e,d+1,3);if(d+=3,!v){var y=Vf(d)+4,b=e[y-4]|e[y-3]<<8,x=y+b;if(x>i){c&&Wf(0);break}s&&l(f+b),n.set(e.subarray(y,x),f),t.b=f+=b,t.p=d=x*8,t.f=u;continue}if(v==1)p=Ff,m=Lf,h=9,g=5;else if(v==2){var S=zf(e,d,31)+257,C=zf(e,d+10,15)+4,w=S+zf(e,d+5,31)+1;d+=14;for(var T=new hf(w),E=new hf(19),D=0;D<C;++D)E[bf[D]]=zf(e,d+D*3,7);d+=C*3;for(var O=Rf(E),k=(1<<O)-1,A=jf(E,O,1),D=0;D<w;){var j=A[zf(e,d,k)];d+=j&15;var y=j>>4;if(y<16)T[D++]=y;else{var M=0,N=0;for(y==16?(N=3+zf(e,d,3),d+=2,M=T[D-1]):y==17?(N=3+zf(e,d,7),d+=3):y==18&&(N=11+zf(e,d,127),d+=7);N--;)T[D++]=M}}var P=T.subarray(0,S),F=T.subarray(S);h=Rf(P),g=Rf(F),p=jf(P,h,1),m=jf(F,g,1)}else Wf(1);if(d>_){c&&Wf(0);break}}s&&l(f+131072);for(var I=(1<<h)-1,L=(1<<g)-1,ee=d;;ee=d){var M=p[Bf(e,d)&I],R=M>>4;if(d+=M&15,d>_){c&&Wf(0);break}if(M||Wf(2),R<256)n[f++]=R;else if(R==256){ee=d,p=null;break}else{var te=R-254;if(R>264){var D=R-257,z=vf[D];te=zf(e,d,(1<<z)-1)+Cf[D],d+=z}var ne=m[Bf(e,d)&L],re=ne>>4;ne||Wf(3),d+=ne&15;var F=Ef[re];if(re>3){var z=yf[re];F+=Bf(e,d)&(1<<z)-1,d+=z}if(d>_){c&&Wf(0);break}s&&l(f+131072);var ie=f+te;if(f<F){var ae=a-F,oe=Math.min(F,ie);for(ae+f<0&&Wf(3);f<oe;++f)n[f]=r[ae+f]}for(;f<ie;++f)n[f]=n[f-F]}}t.l=p,t.p=ee,t.b=f,t.f=u,p&&(u=1,t.m=h,t.d=m,t.n=g)}while(!u);return f!=n.length&&o?Hf(n,0,f):n.subarray(0,f)},Kf=function(e,t,n){n<<=t&7;var r=t/8|0;e[r]|=n,e[r+1]|=n>>8},qf=function(e,t,n){n<<=t&7;var r=t/8|0;e[r]|=n,e[r+1]|=n>>8,e[r+2]|=n>>16},Jf=function(e,t){for(var n=[],r=0;r<e.length;++r)e[r]&&n.push({s:r,f:e[r]});var i=n.length,a=n.slice();if(!i)return{t:tp,l:0};if(i==1){var o=new hf(n[0].s+1);return o[n[0].s]=1,{t:o,l:1}}n.sort(function(e,t){return e.f-t.f}),n.push({s:-1,f:25001});var s=n[0],c=n[1],l=0,u=1,d=2;for(n[0]={s:-1,f:s.f+c.f,l:s,r:c};u!=i-1;)s=n[n[l].f<n[d].f?l++:d++],c=n[l!=u&&n[l].f<n[d].f?l++:d++],n[u++]={s:-1,f:s.f+c.f,l:s,r:c};for(var f=a[0].s,r=1;r<i;++r)a[r].s>f&&(f=a[r].s);var p=new gf(f+1),m=Yf(n[u-1],p,0);if(m>t){var r=0,h=0,g=m-t,_=1<<g;for(a.sort(function(e,t){return p[t.s]-p[e.s]||e.f-t.f});r<i;++r){var v=a[r].s;if(p[v]>t)h+=_-(1<<m-p[v]),p[v]=t;else break}for(h>>=g;h>0;){var y=a[r].s;p[y]<t?h-=1<<t-p[y]++-1:++r}for(;r>=0&&h;--r){var b=a[r].s;p[b]==t&&(--p[b],++h)}m=t}return{t:new hf(p),l:m}},Yf=function(e,t,n){return e.s==-1?Math.max(Yf(e.l,t,n+1),Yf(e.r,t,n+1)):t[e.s]=n},Xf=function(e){for(var t=e.length;t&&!e[--t];);for(var n=new gf(++t),r=0,i=e[0],a=1,o=function(e){n[r++]=e},s=1;s<=t;++s)if(e[s]==i&&s!=t)++a;else{if(!i&&a>2){for(;a>138;a-=138)o(32754);a>2&&(o(a>10?a-11<<5|28690:a-3<<5|12305),a=0)}else if(a>3){for(o(i),--a;a>6;a-=6)o(8304);a>2&&(o(a-3<<5|8208),a=0)}for(;a--;)o(i);a=1,i=e[s]}return{c:n.subarray(0,r),n:t}},Zf=function(e,t){for(var n=0,r=0;r<t.length;++r)n+=e[r]*t[r];return n},Qf=function(e,t,n){var r=n.length,i=Vf(t+2);e[i]=r&255,e[i+1]=r>>8,e[i+2]=e[i]^255,e[i+3]=e[i+1]^255;for(var a=0;a<r;++a)e[i+a+4]=n[a];return(i+4+r)*8},$f=function(e,t,n,r,i,a,o,s,c,l,u){Kf(t,u++,n),++i[256];for(var d=Jf(i,15),f=d.t,p=d.l,m=Jf(a,15),h=m.t,g=m.l,_=Xf(f),v=_.c,y=_.n,b=Xf(h),x=b.c,S=b.n,C=new gf(19),w=0;w<v.length;++w)++C[v[w]&31];for(var w=0;w<x.length;++w)++C[x[w]&31];for(var T=Jf(C,7),E=T.t,D=T.l,O=19;O>4&&!E[bf[O-1]];--O);var k=l+5<<3,A=Zf(i,Mf)+Zf(a,Nf)+o,j=Zf(i,f)+Zf(a,h)+o+14+3*O+Zf(C,E)+2*C[16]+3*C[17]+7*C[18];if(c>=0&&k<=A&&k<=j)return Qf(t,u,e.subarray(c,c+l));var M,N,P,F;if(Kf(t,u,1+(j<A)),u+=2,j<A){M=jf(f,p,0),N=f,P=jf(h,g,0),F=h;var I=jf(E,D,0);Kf(t,u,y-257),Kf(t,u+5,S-1),Kf(t,u+10,O-4),u+=14;for(var w=0;w<O;++w)Kf(t,u+3*w,E[bf[w]]);u+=3*O;for(var L=[v,x],ee=0;ee<2;++ee)for(var R=L[ee],w=0;w<R.length;++w){var te=R[w]&31;Kf(t,u,I[te]),u+=E[te],te>15&&(Kf(t,u,R[w]>>5&127),u+=R[w]>>12)}}else M=Pf,N=Mf,P=If,F=Nf;for(var w=0;w<s;++w){var z=r[w];if(z>255){var te=z>>18&31;qf(t,u,M[te+257]),u+=N[te+257],te>7&&(Kf(t,u,z>>23&31),u+=vf[te]);var ne=z&31;qf(t,u,P[ne]),u+=F[ne],ne>3&&(qf(t,u,z>>5&8191),u+=yf[ne])}else qf(t,u,M[z]),u+=N[z]}return qf(t,u,M[256]),u+N[256]},ep=new _f([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),tp=new hf(0),np=function(e,t,n,r,i,a){var o=a.z||e.length,s=new hf(r+o+5*(1+Math.ceil(o/7e3))+i),c=s.subarray(r,s.length-i),l=a.l,u=(a.r||0)&7;if(t){u&&(c[0]=a.r>>3);for(var d=ep[t-1],f=d>>13,p=d&8191,m=(1<<n)-1,h=a.p||new gf(32768),g=a.h||new gf(m+1),_=Math.ceil(n/3),v=2*_,y=function(t){return(e[t]^e[t+1]<<_^e[t+2]<<v)&m},b=new _f(25e3),x=new gf(288),S=new gf(32),C=0,w=0,T=a.i||0,E=0,D=a.w||0,O=0;T+2<o;++T){var k=y(T),A=T&32767,j=g[k];if(h[A]=j,g[k]=A,D<=T){var M=o-T;if((C>7e3||E>24576)&&(M>423||!l)){u=$f(e,c,0,b,x,S,w,E,O,T-O,u),E=C=w=0,O=T;for(var N=0;N<286;++N)x[N]=0;for(var N=0;N<30;++N)S[N]=0}var P=2,F=0,I=p,L=A-j&32767;if(M>2&&k==y(T-L))for(var ee=Math.min(f,M)-1,R=Math.min(32767,T),te=Math.min(258,M);L<=R&&--I&&A!=j;){if(e[T+P]==e[T+P-L]){for(var z=0;z<te&&e[T+z]==e[T+z-L];++z);if(z>P){if(P=z,F=L,z>ee)break;for(var ne=Math.min(L,z-2),re=0,N=0;N<ne;++N){var ie=T-L+N&32767,ae=ie-h[ie]&32767;ae>re&&(re=ae,j=ie)}}}A=j,j=h[A],L+=A-j&32767}if(F){b[E++]=268435456|wf[P]<<18|Df[F];var oe=wf[P]&31,se=Df[F]&31;w+=vf[oe]+yf[se],++x[257+oe],++S[se],D=T+P,++C}else b[E++]=e[T],++x[e[T]]}}for(T=Math.max(T,D);T<o;++T)b[E++]=e[T],++x[e[T]];u=$f(e,c,l,b,x,S,w,E,O,T-O,u),l||(a.r=u&7|c[u/8|0]<<3,u-=7,a.h=g,a.p=h,a.i=T,a.w=D)}else{for(var T=a.w||0;T<o+l;T+=65535){var ce=T+65535;ce>=o&&(c[u/8|0]=l,ce=o),u=Qf(c,u+1,e.subarray(T,ce))}a.i=o}return Hf(s,0,r+Vf(u)+i)},rp=function(e,t,n,r,i){if(!i&&(i={l:1},t.dictionary)){var a=t.dictionary.subarray(-32768),o=new hf(a.length+e.length);o.set(a),o.set(e,a.length),e=o,i.w=a.length}return np(e,t.level==null?6:t.level,t.mem==null?i.l?Math.ceil(Math.max(8,Math.min(13,Math.log(e.length)))*1.5):20:12+t.mem,n,r,i)};function ip(e,t){return rp(e,t||{},0,0)}function ap(e,t){return Gf(e,{i:2},t&&t.out,t&&t.dictionary)}var op=typeof TextDecoder<`u`&&new TextDecoder;try{op.decode(tp,{stream:!0})}catch{}function sp(e){let t=``,n=32768;for(let r=0;r<e.length;r+=n)t+=String.fromCharCode(...e.subarray(r,r+n));return btoa(t)}function cp(e){let t=atob(e),n=new Uint8Array(t.length);for(let e=0;e<t.length;e++)n[e]=t.charCodeAt(e);return n}var lp=class e{constructor(e,t,n){X(this,`w`,void 0),X(this,`h`,void 0),X(this,`data`,void 0),this.w=e,this.h=t,this.data=n??new Uint8ClampedArray(e*t*4)}clone(){return new e(this.w,this.h,this.data.slice())}coverage(e,t,n,r){let i=0,a=0;for(let o=t;o<t+r;o++)for(let t=e;t<e+n;t++)this.inside(t,o)&&(a++,this.data[(o*this.w+t)*4+3]>127&&i++);return a>0?i/a:0}inside(e,t){return e>=0&&t>=0&&e<this.w&&t<this.h}get(e,t){let n=(t*this.w+e)*4,r=this.data;return[r[n],r[n+1],r[n+2],r[n+3]]}set(e,t,n){if(!this.inside(e,t))return;let r=(t*this.w+e)*4;this.data[r]=n[0],this.data[r+1]=n[1],this.data[r+2]=n[2],this.data[r+3]=n[3]}fill(e){for(let t=0;t<this.data.length;t+=4)this.data[t]=e[0],this.data[t+1]=e[1],this.data[t+2]=e[2],this.data[t+3]=e[3]}extract(t,n,r,i){let a=new e(r,i);for(let e=0;e<i;e++)for(let i=0;i<r;i++)this.inside(t+i,n+e)&&a.set(i,e,this.get(t+i,n+e));return a}blit(e,t,n){for(let r=0;r<e.h;r++)for(let i=0;i<e.w;i++)this.set(t+i,n+r,e.get(i,r))}toJSON(){let e=new Uint8Array(this.data.buffer,this.data.byteOffset,this.data.length);return{w:this.w,h:this.h,z:sp(ip(e,{level:6}))}}static from(t,n=16,r=16){if(t instanceof e)return t.clone();if(t&&typeof t==`object`){let i=t,a=typeof i.w==`number`&&i.w>0?Math.floor(i.w):n,o=typeof i.h==`number`&&i.h>0?Math.floor(i.h):r,s=null;try{typeof i.z==`string`?s=ap(cp(i.z)):typeof i.data==`string`?s=cp(i.data):(i.data instanceof Uint8ClampedArray||i.data instanceof Uint8Array)&&(s=new Uint8Array(i.data))}catch{s=null}if(s&&s.length===a*o*4){let t=new Uint8ClampedArray(s.length);return t.set(s),new e(a,o,t)}return new e(a,o)}return new e(n,r)}};function up(e,t){return e.verts.length===(t.cols+1)*(t.rows+1)&&e.faces.length===t.cols*t.rows}function dp(e){let t=e;if(!t||typeof t!=`object`)return;let n=e=>typeof e==`number`&&Number.isInteger(e)&&e>=1&&e<=128;if(n(t.cols)&&n(t.rows)&&typeof t.cell==`number`&&t.cell>=.25&&t.cell<=16)return{cols:t.cols,rows:t.rows,cell:t.cell}}var fp=[1,.5,.34,.25],pp=[`forward`,`back`,`left`,`right`,`jump`,`run`,`crouch`,`interact`],mp=[`chase`,`free`],hp=`#8fc0ee`,gp={forward:[`KeyW`,`ArrowUp`],back:[`KeyS`,`ArrowDown`],left:[`KeyA`,`ArrowLeft`],right:[`KeyD`,`ArrowRight`],jump:[`Space`],run:[`ShiftLeft`,`ShiftRight`],crouch:[`KeyC`],interact:[`KeyE`]};function _p(){return{color:`#ff8a3d`,modelId:jc,skin:null,attachments:[],soundJump:Eu.jump,soundDoubleJump:Eu.jump2,soundLand:Eu.land,width:.6,height:1.8,crouchHeight:1.1,walkSpeed:4,runSpeed:7,crouchSpeed:2,acceleration:60,deceleration:50,airControl:.6,maxSlope:50,stepHeight:.4,turnSpeed:16,steerSpeed:150,jumpHeight:1.6,gravity:35,fallMultiplier:1.5,jumpCut:.5,coyoteTime:.1,jumpBuffer:.12,doubleJump:!0,glide:!1,glideFall:1.6,cameraMode:`chase`,cameraDistance:6.5,cameraHeight:.8,cameraFov:60}}function vp(){return{name:`My Platformer`,fullscreen:!1,controls:structuredClone(gp),mouseSensitivity:1,invertY:!1,gamepad:!0,music:Eu.theme,volume:.8,renderScale:1}}var yp=0;function $(){return yp++,`obj_${Date.now().toString(36)}_${yp.toString(36)}_${Math.floor(Math.random()*1296).toString(36)}`}var bp=(e,t)=>Array.isArray(e)&&e.length===3&&e.every(e=>Number.isFinite(e))?[...e]:[...t];function xp(e){if(nl(e.mesh)){let t=tl(e.mesh);for(let e of t.faces){let t=Gc(e.tile);t?e.tile=t:delete e.tile}return t}let t=bp(e.size,[1,1,1]),n=e.offsets,r=Array.isArray(n)&&n.length===8&&n.every(e=>Array.isArray(e)&&e.length===3&&e.every(e=>Number.isFinite(e)))?n:null,i=e.uv,a={};if(i&&typeof i==`object`)for(let e of Kc){let t=i[e];Array.isArray(t)&&t.length===4&&t.every(e=>Array.isArray(e)&&e.length===2&&Number.isFinite(e[0])&&Number.isFinite(e[1]))&&(a[e]=t)}return rl(t,r,a)}function Sp(e){return{id:e.id??$(),name:e.name??`Cube`,position:bp(e.position,[0,.5,0]),rotation:bp(e.rotation,[0,0,0]),mesh:xp(e),bone:typeof e.bone==`string`?e.bone:null,...e.smooth===!0?{smooth:!0}:{}}}function Cp(e){if(!Array.isArray(e))return;let t=[];for(let n of e){let e=n?.t,r=n?.v;typeof e==`number`&&Number.isFinite(e)&&Array.isArray(r)&&r.length===3&&r.every(e=>Number.isFinite(e))&&t.push({t:e,v:[...r]})}return t.length>0?t.sort((e,t)=>e.t-t.t):void 0}function wp(e){let t={};if(e.tracks&&typeof e.tracks==`object`)for(let[n,r]of Object.entries(e.tracks)){let e=Cp(r?.rot),i=Cp(r?.pos);(e||i)&&(t[n]={...e?{rot:e}:{},...i?{pos:i}:{}})}let n=typeof e.duration==`number`&&e.duration>0?e.duration:1;return{id:e.id??$(),name:e.name??`clip`,duration:n,loop:e.loop??!0,smooth:e.smooth===!0,tracks:t}}function Tp(e){let t=Array.isArray(e.cubes)?e.cubes.map(e=>Sp(e)):[],n=[],r=new Set;for(let t of Array.isArray(e.bones)?e.bones:[])t&&typeof t.id==`string`&&typeof t.name==`string`&&!r.has(t.id)&&(r.add(t.id),n.push({id:t.id,name:t.name,parent:typeof t.parent==`string`?t.parent:null,pivot:bp(t.pivot,[0,0,0])}));for(let e of n)e.parent&&!r.has(e.parent)&&(e.parent=null);for(let e of t)e.bone&&!r.has(e.bone)&&(e.bone=null);return{id:e.id??$(),name:e.name??`Model`,texture:typeof e.texture==`string`?e.texture:null,cubes:t,bones:n,clips:Array.isArray(e.clips)?e.clips.map(e=>wp(e)):[]}}function Ep(e,t){let n=e.cubes??[],r=[];n.forEach((e,t)=>{for(let n of Kc){let i=lp.from(e.faces?.[n],16,16);r.push({key:`${t}:${n}`,w:i.w,h:i.h,buf:i})}});let i=yc(r),a=new lp(i.width,i.height);for(let e of r){let t=i.rects.get(e.key);a.blit(e.buf,t.x,t.y)}let o=`${e.name??`Model`} texture`,s=o;for(let e=2;t.has(s);e++)s=`${o} ${e}`;return t.add(s),{model:{id:e.id??$(),name:e.name??`Model`,texture:s,cubes:n.map((e,t)=>{let n={};for(let e of Kc){let r=i.rects.get(`${t}:${e}`);n[e]=Bc(r.x,r.y,r.w,r.h)}return{id:e.id??$(),name:e.name??`Cube`,position:bp(e.position,[0,.5,0]),rotation:[0,0,0],mesh:rl(bp(e.size,[1,1,1]),null,n),bone:null}}),bones:[],clips:[]},texture:{name:s,tileSize:16,pixels:a}}}function Dp(e){let t=e?.cubes;return!Array.isArray(t)||t.length===0?!1:t.some(e=>e&&typeof e==`object`&&`faces`in e&&!(`uv`in e)&&!(`mesh`in e))}var Op=`Textures-16.png`;function kp(e,t,n,r,i=!0){return{id:$(),name:e,kind:`block`,position:t,rotation:[0,0,0],mesh:rl(n),tile:r?{texture:Op,col:r[0],row:r[1]}:null,color:`#ffffff`,doubleSided:!0,collide:i,rules:[]}}function Ap(e,t,n,r){return{id:$(),name:e,kind:`block`,position:t,rotation:[0,0,0],mesh:n,tile:r,color:`#ffffff`,doubleSided:!0,collide:!0,rules:[]}}function jp(){let e=[3,16],t=[7,0],n=[3,3],r=[2,14],i=[3,13],a=[];a.push(kp(`Ground`,[0,-.5,0],[40,1,40],e));for(let e=1;e<=5;e++)a.push(kp(`Step ${e}`,[-6+e*2,.3*e,-3],[2,.6*e,3],n));[[8,1,-4],[11.5,2,-6],[8,3,-9],[4,4,-9]].forEach((e,n)=>a.push(kp(`Platform ${n+1}`,e,[3,.5,3],t))),a.push(kp(`Crate 1`,[-3,.5,4],[1,1,1],r)),a.push(kp(`Crate 2`,[-4,.5,4],[1,1,1],r)),a.push(kp(`Crate 3`,[-3.5,1.5,4],[1,1,1],r)),a.push(kp(`Tunnel wall L`,[-8.25,.9,8],[.5,1.8,3],i)),a.push(kp(`Tunnel wall R`,[-5.75,.9,8],[.5,1.8,3],i)),a.push(kp(`Tunnel roof`,[-7,1.55,8],[3,.5,3],i));let o={texture:Op,col:t[0],row:t[1]};a.push(Ap(`Ramp`,[4,.9,5],hl([3,1.8,6]),o));let s=bl(5,2.6);a.push(Ap(`Rock`,[-12,-il(s).min[1],0],s,o)),a.push(kp(`Wall`,[0,3,-14],[10,6,1],t));let c=kp(`Lift`,[-15,.25,-5],[3,.5,3],t);c.rules=Ru(`platform`,$);let l=c.rules[0].actions[0];l.type===`patrol`&&(l.offset=[0,4,0]),a.push(c),a.push(kp(`Ledge`,[-18,2.25,-5],[3,.5,3],t));let u=(e,t,n,r)=>({id:$(),name:n,kind:`model`,modelId:wl[e],position:r,rotation:[0,0,0],scale:[1,1,1],animation:e===`flag`?null:`spin`,animationSpeed:1,collide:!1,rules:Ru(t,$)});for(let[e,t]of[5,3.2,1.4].entries())a.push(u(`coin`,`coin`,`Coin ${e+1}`,[0,0,t]));a.push(u(`coin`,`coin`,`Coin 4`,[8,1.25,-4])),a.push(u(`coin`,`coin`,`Coin 5`,[11.5,2.25,-6])),a.push(u(`coin`,`coin`,`Coin 6`,[8,3.25,-9])),a.push(u(`key`,`key`,`Key`,[4,4.25,-9])),a.push(u(`apple`,`apple`,`Apple`,[-10,0,4])),a.push(u(`flag`,`checkpoint`,`Checkpoint`,[-3,0,1])),a.push(kp(`Platform 5`,[0,5,-10.5],[3,.5,3],t));let d=u(`trophy`,`goal`,`Goal`,[0,5.25,-10.5]);d.scale=[1.5,1.5,1.5],a.push(d);let f=kp(`Door`,[-7,.65,6.4],[2,1.3,.3],i);f.rules=Ru(`door`,$),a.push(f);for(let[e,t]of[4.5,3.5,2.5].entries())a.push(u(`coin`,`coin`,`Coin ${e+7}`,[-7,0,t]));let p=kp(`Sign`,[2.5,.7,6.5],[1.1,1.4,.15],i);p.rules=Ru(`sign`,$);let m=p.rules[0].actions[0];m.type===`message`&&(m.text=`Collect the coins and the key, open the door and reach the trophy on top!`,m.seconds=6),a.push(p);let h=kp(`Hazard`,[6,.06,2],[2,.12,2],null,!1);return h.tile={texture:xl,col:Sl.hazard,row:0},h.rules=Ru(`hazard`,$),a.push(h),a}function Mp(){return{version:13,settings:vp(),player:_p(),textures:[],models:[Rc($),Rc($,Mc),Dl(`coin`,$),Dl(`key`,$),Dl(`apple`,$),Dl(`flag`,$),Dl(`trophy`,$),...Od($),...cf($),...Np()],variables:[...zu([],Lu(`coin`),$),...zu([],Lu(`key`),$),...zu([],Lu(`apple`),$)],sounds:Object.values(Eu).map(e=>ku(e)).filter(e=>e!==null),levels:[Pp(`Level 1`,jp(),[0,.05,8],180)],prefabs:Rd($)}}function Np(){return Ud().map(e=>Tp(e))}function Pp(e,t,n=[0,.05,0],r=180,i=hp){return{id:$(),name:e,objects:t,spawn:[...n],spawnYaw:r,sky:i,look:pf(null)}}function Fp(e){if(e.kind===`model`){let t=e,n=typeof t.scale==`number`?[t.scale,t.scale,t.scale]:bp(t.scale,[1,1,1]),r=Array.isArray(t.rotation)?bp(t.rotation,[0,0,0]):[0,t.rotationY??0,0];return{id:t.id??$(),name:t.name??`Model`,kind:`model`,modelId:t.modelId??``,position:bp(t.position,[0,0,0]),rotation:r,scale:n,animation:typeof t.animation==`string`&&t.animation?t.animation:null,animationSpeed:typeof t.animationSpeed==`number`&&t.animationSpeed>0?t.animationSpeed:1,collide:t.collide??!0,rules:Wl(t.rules,$),...typeof t.prefab==`string`&&t.prefab?{prefab:t.prefab}:{}}}let t=e,n=t.tile&&typeof t.tile==`object`&&typeof t.tile.texture==`string`?t.tile:null,r=xp(t),i=dp(t.terrain);return{id:t.id??$(),name:t.name??`Block`,kind:`block`,position:bp(t.position,[0,0,0]),rotation:bp(t.rotation,[0,0,0]),mesh:r,...i&&up(r,i)?{terrain:i}:{},tile:n,color:typeof t.color==`string`?t.color:`#ffffff`,doubleSided:typeof t.doubleSided!=`boolean`||t.doubleSided,...t.smooth===!0?{smooth:!0}:{},...typeof t.opacity==`number`&&t.opacity<1?{opacity:Math.max(.05,t.opacity)}:{},...t.liquid===!0?{liquid:!0}:{},collide:t.collide??!0,rules:Wl(t.rules,$),...typeof t.prefab==`string`&&t.prefab?{prefab:t.prefab}:{}}}function Ip(e){if(!e||typeof e.name!=`string`)return null;let t=typeof e.tileSize==`number`&&e.tileSize>0?Math.floor(e.tileSize):16;return{name:e.name,tileSize:t,pixels:lp.from(e.pixels,64,64)}}function Lp(e){if(!Array.isArray(e))return[];let t=[];for(let n of e)n&&typeof n.modelId==`string`&&typeof n.bone==`string`&&t.push({id:typeof n.id==`string`?n.id:$(),modelId:n.modelId,bone:n.bone,offset:bp(n.offset,[0,0,0]),rotation:bp(n.rotation,[0,0,0]),scale:typeof n.scale==`number`&&n.scale>0?n.scale:1});return t}function Rp(e){let t=Mp();if(!e||typeof e!=`object`)return t;let n=e,r={...t.settings,...n.settings??{}};r.controls={...t.settings.controls,...n.settings?.controls??{}};let{airJumps:i,spawn:a,spawnYaw:o,...s}=n.player??{},c={...t.player,...s};c.skin=typeof c.skin==`string`?c.skin:null,c.attachments=Lp(c.attachments),typeof c.doubleJump!=`boolean`&&(c.doubleJump=t.player.doubleJump),typeof c.glide!=`boolean`&&(c.glide=t.player.glide),(typeof c.glideFall!=`number`||!(c.glideFall>=.2&&c.glideFall<=10))&&(c.glideFall=t.player.glideFall),mp.includes(c.cameraMode)||(c.cameraMode=t.player.cameraMode),(typeof c.maxSlope!=`number`||!(c.maxSlope>=5&&c.maxSlope<=85))&&(c.maxSlope=t.player.maxSlope),(typeof c.stepHeight!=`number`||!(c.stepHeight>=0&&c.stepHeight<=1.5))&&(c.stepHeight=t.player.stepHeight);let l=[];for(let e of Array.isArray(n.textures)?n.textures:[]){let t=Ip(e);t&&l.push(t)}let u=new Set(l.map(e=>e.name)),d=[];for(let e of Array.isArray(n.models)?n.models:[])if(Dp(e)){let t=Ep(e,u);d.push(t.model),l.push(t.texture)}else d.push(Tp(e));let f=typeof n.version==`number`?n.version:1;if(f<2&&c.modelId===null&&(c.modelId=jc,c.width===.8&&(c.width=t.player.width),c.crouchHeight===.5&&(c.crouchHeight=t.player.crouchHeight)),c.modelId===`humanoid`&&!d.some(e=>e.id===`humanoid`)&&d.push(Rc($)),f<3){let e=d.find(e=>e.id===jc);e&&zc(e,Rc($))}if(f<13){let e=d.findIndex(e=>e.id===jc);e>=0&&(d[e]=Rc($));let t=d.findIndex(e=>e.id===Mc);t>=0?d[t]=Rc($,Mc):f<12&&n.exported!==!0&&d.splice(e>=0?e+1:d.length,0,Rc($,Mc)),c.skin&&c.skin in Lc&&(c.skin=Lc[c.skin]??null);for(let e of c.attachments)e.bone===`Nose`&&(e.bone=`Head`)}if(f<11){let e={RightShoulder:`RightUpperArm`,LeftShoulder:`LeftUpperArm`,RightLeg:`RightShin`,LeftLeg:`LeftShin`,Pelvis:`Hips`,Body:`Waist`,HyRoot:`Root`};for(let t of c.attachments)t.bone=e[t.bone]??t.bone}if(f<4&&(c.height===1&&(c.height=t.player.height),c.width===.5&&(c.width=t.player.width),c.crouchHeight===.65&&(c.crouchHeight=t.player.crouchHeight),c.cameraDistance===4.5&&(c.cameraDistance=t.player.cameraDistance)),f<6){let e=new Set(d.map(e=>e.id));for(let t of Od($))e.has(t.id)||d.push(t)}if(f<8){let e=new Set(d.map(e=>e.id));for(let t of cf($))e.has(t.id)||d.push(t)}if(f<10){let e=new Set(d.map(e=>e.id));for(let t of Np())e.has(t.id)||d.push(t)}if(f<9){let e=new Set(d.map(e=>e.id));for(let t of[`slime`,`villager`])e.has(Ed(t))||d.push(Dd(t,$));let t=d.find(e=>e.id===jc);if(t){let e=Rc($);for(let n of[`glide`,`swim`]){let r=e.clips.find(e=>e.name===n);r&&!t.clips.some(e=>e.name===n)&&t.clips.push(r)}}}let p=Vp(n,bp(a,t.levels[0].spawn),typeof o==`number`?o:t.levels[0].spawnYaw,t),m=n.variables===void 0?[]:Vl(n.variables,$),h=n.sounds===void 0?[]:Mu(n.sounds,$),g=new Set(h.map(e=>e.id));r.music!==null&&(typeof r.music!=`string`||!g.has(r.music))&&(r.music=null);for(let e of[`soundJump`,`soundDoubleJump`,`soundLand`])c[e]!==null&&(typeof c[e]!=`string`||!g.has(c[e]))&&(c[e]=null);r.volume=typeof r.volume==`number`?Math.min(1,Math.max(0,r.volume)):t.settings.volume,r.renderScale=fp.includes(r.renderScale)?r.renderScale:t.settings.renderScale;let _=dc(n.settings?.splash);_?r.splash=_:delete r.splash;let v=hc(n.settings?.menu);v?r.menu=v:delete r.menu;let y=n.exported===!0,b=y?[]:zp(n.prefabs);f<7&&Bp(d,p,b,c);let x=new Set(b.map(e=>e.id));for(let e of p)for(let t of e.objects)t.prefab&&!x.has(t.prefab)&&delete t.prefab;return{version:13,settings:r,player:c,textures:l,models:d,variables:m,sounds:h,levels:p,prefabs:b,...y?{exported:y}:{}}}function zp(e){let t=[],n=new Set,r=new Set(Nu.map(e=>e.kind));for(let i of Array.isArray(e)?e:[]){if(!i||typeof i.id!=`string`||!i.id||n.has(i.id)||!i.object||typeof i.object!=`object`)continue;let e=i.object.kind;if(e!==`block`&&e!==`model`)continue;n.add(i.id);let a=Fp(i.object);a.position=[0,0,0],delete a.prefab,t.push({id:i.id,name:typeof i.name==`string`&&i.name.trim()?i.name:a.name,base:typeof i.base==`string`&&r.has(i.base)?i.base:null,object:a})}for(let e of Rd($))n.has(e.id)||t.push(e);return t}function Bp(e,t,n,r){let i=new Set;for(let e of t)for(let t of e.objects)t.kind===`model`&&i.add(t.modelId);for(let e of n)e.object.kind===`model`&&i.add(e.object.modelId);r.modelId&&i.add(r.modelId);for(let e of r.attachments)i.add(e.modelId);let a=new Set(wd);for(let t=e.length-1;t>=0;t--){let n=e[t].id;a.has(n)&&!i.has(n)&&e.splice(t,1)}}function Vp(e,t,n,r){let i=new Set,a=[];if(Array.isArray(e.levels))for(let t of e.levels){if(!t||typeof t!=`object`)continue;let e=typeof t.id==`string`&&t.id?t.id:$();i.has(e)&&(e=$()),i.add(e),a.push({id:e,name:typeof t.name==`string`&&t.name.trim()?t.name:`Level ${a.length+1}`,objects:Array.isArray(t.objects)?t.objects.map(e=>Fp(e)):[],spawn:bp(t.spawn,[0,.05,0]),spawnYaw:typeof t.spawnYaw==`number`&&Number.isFinite(t.spawnYaw)?t.spawnYaw:180,sky:typeof t.sky==`string`&&/^#[0-9a-fA-F]{6}$/.test(t.sky)?t.sky:hp,look:pf(t.look)})}return a.length>0?a:Array.isArray(e.level?.objects)?[Pp(`Level 1`,e.level.objects.map(e=>Fp(e)),t,n)]:r.levels}var Hp=1024;function Up(e,t=[143,192,238]){let n=/^#?([0-9a-fA-F]{6})$/.exec(e.trim());if(!n)return t;let r=parseInt(n[1],16);return[r>>16&255,r>>8&255,r&255]}function Wp(e){return`#${e.map(e=>Math.max(0,Math.min(255,Math.round(e))).toString(16).padStart(2,`0`)).join(``)}`}var Gp=(e,t,n)=>[e[0]+(t[0]-e[0])*n,e[1]+(t[1]-e[1])*n,e[2]+(t[2]-e[2])*n],Kp=e=>{let t=Math.min(1,Math.max(0,e));return t*t*(3-2*t)};function qp(e,t){if(t<=0)return 0;let n=Math.max(.03,Math.abs(Math.sin(e)));return 1-Math.exp(-t/n)}function Jp(e,t){let n=Math.max(0,Math.min(1.5,120/Math.max(1,t)));return 8*Math.max(0,Math.min(1,e))**3*n}function Yp(e,t,n,r,i){if(!(i<=0))for(let a=0;a<n;a++){let o=qp((.5-(a+.5)/n)*Math.PI,i);if(!(o<=.002))for(let n=0;n<t;n++){let i=(a*t+n)*4;e[i]=e[i]+(r[0]-e[i])*o,e[i+1]=e[i+1]+(r[1]-e[i+1])*o,e[i+2]=e[i+2]+(r[2]-e[i+2])*o}}}function Xp(e,t,n){let r=Jl(e),i=Array.from({length:t*(n+1)},()=>r()),a=(e,r)=>i[Math.max(0,Math.min(n,r))*t+(e%t+t)%t];return(e,t)=>{let n=Math.floor(e),r=Math.floor(t),i=Kp(e-n),o=Kp(t-r),s=a(n,r)*(1-i)+a(n+1,r)*i,c=a(n,r+1)*(1-i)+a(n+1,r+1)*i;return s*(1-o)+c*o}}function Zp(e,t,n,r,i,a,o=1,s=0){let c=new Uint8ClampedArray(t*n*4),l=n/2,u=[];for(let e=0;e<n;e++){let t;if(e>=l)t=a;else{let n=e/l;t=Gp(i,r,Kp(n)),t=Gp(t,a,Kp((n-.82)/.18))}u.push(t)}for(let e=0;e<n;e++){let n=u[e];for(let r=0;r<t;r++){let i=(e*t+r)*4;c[i]=n[0],c[i+1]=n[1],c[i+2]=n[2],c[i+3]=255}}if(e===`clouds`){let e=Xp(o*13+3,10,6),n=(t,n)=>{let r=0,i=.55,a=0,o=1;for(let s=0;s<3;s++)r+=e(t*o%(10*o),n*o)*i,a+=i,i*=.5,o*=2;return r/a},a=Gp([255,255,255],r,.18),s=Gp(a,i,.38),u=.53;for(let e=0;e<l;e++){let r=e/l,i=Kp((r-.1)/.18)*(1-Kp((r-.62)/.28));if(!(i<=0))for(let o=0;o<t;o++){let l=o/t*10,d=n(l,r*4)*i;if(d<u)continue;let f=n(l,(r-.035)*4)*i<u?a:Gp(a,s,Kp((d-u)/.12)),p=Kp((d-u)/.04),m=(e*t+o)*4;c[m]=c[m]+(f[0]-c[m])*p,c[m+1]=c[m+1]+(f[1]-c[m+1])*p,c[m+2]=c[m+2]+(f[2]-c[m+2])*p}}}else if(e===`stars`){let e=Jl(o*7+1),r=Math.round(t*n/380);for(let i=0;i<r;i++){let r=e(),i=.5-Math.asin(e()*.97)/Math.PI,a=Math.floor(r*t),o=Math.floor(i*n),s=.45+e()*.55,l=e()<.2?[255,214,170]:e()<.3?[180,205,255]:[255,255,255],u=e()<.12?2:1,d=Kp((.5-i)/.12);for(let e=0;e<u;e++)for(let r=0;r<u;r++){let i=(a+r)%t,u=(Math.min(n-1,o+e)*t+i)*4,f=s*d;c[u]=c[u]+(l[0]-c[u])*f,c[u+1]=c[u+1]+(l[1]-c[u+1])*f,c[u+2]=c[u+2]+(l[2]-c[u+2])*f}}}return Yp(c,t,n,a,s),c}function Qp(e,t,n){try{let r=Number(e.width)||0,i=Number(e.height)||0;if(!r||!i||typeof document>`u`)return null;let a=Math.min(1,2048/r),o=Math.max(1,Math.round(r*a)),s=Math.max(1,Math.round(i*a)),c=document.createElement(`canvas`);c.width=o,c.height=s;let l=c.getContext(`2d`,{willReadFrequently:!0});if(!l)return null;l.imageSmoothingEnabled=!1,l.drawImage(e,0,0,o,s);let u=l.getImageData(0,0,o,s);return Yp(u.data,o,s,t,n),l.putImageData(u,0,0),c}catch{return null}}function $p(e){try{let t=Math.max(1,Math.min(128,Number(e.width)||0)),n=Math.max(1,Number(e.height)||0);if(!e.width||!e.height)return null;let r=document.createElement(`canvas`);r.width=t,r.height=3;let i=r.getContext(`2d`,{willReadFrequently:!0});if(!i)return null;i.drawImage(e,0,Math.max(0,n/2-1.5),Number(e.width),3,0,0,t,3);let a=i.getImageData(0,0,t,3).data,o=0,s=0,c=0,l=0;for(let e=0;e<a.length;e+=4)a[e+3]<16||(o+=a[e],s+=a[e+1],c+=a[e+2],l++);return l>0?Wp([o/l,s/l,c/l]):null}catch{return null}}var em=hp,tm=30,nm=2048;function rm(e,t){t&&(t.shadowMap.enabled=!0,t.shadowMap.type=1);let n=new Et(em,uf.fogNear,uf.fogFar);e.background=new wt(em),e.fog=n;let r=new Xr(`#ffffff`,`#7d8794`,uf.ambient);e.add(r);let i=new di(uf.sunColor,uf.sunIntensity);i.castShadow=uf.shadows,i.shadow.mapSize.set(nm,nm);let a=i.shadow.camera;a.left=-30,a.right=tm,a.top=tm,a.bottom=-30,a.near=1,a.far=220,i.shadow.bias=-6e-4,i.shadow.normalBias=.04,e.add(i,i.target);let o=mf(uf),s=60/nm,c=new wt,l=null,u=null,d=()=>{l?.texture.dispose(),l=null,u?.dispose(),u=null},m=(t,r)=>{try{c.set(t)}catch{c.set(em)}d(),e.background instanceof wt?e.background.copy(c):e.background=c.clone();try{n.color.set(r??t)}catch{n.color.copy(c)}},h=(e,t)=>(e.mapping=303,e.colorSpace=ee,e.minFilter=t?f:p,e.magFilter=t?f:p,e.generateMipmaps=!1,e.needsUpdate=!0,e);return{fog:n,setSky(e){m(e)},setLevel(t,r){let i=t.look;this.setLook(i);let a=t.sky,o=i.skyStyle,s=Jp(i.fogSky,i.fogFar);if(o===`texture`&&i.skyTexture){let t=r?.get(i.skyTexture);if(t){d();let r=t.texture.image,o=i.fogColor??(r?$p(r):null)??a,c=s>.004&&r?Qp(r,Up(o),s):null;u=c?h(new ur(c),!0):h(t.texture.clone(),(Number(r?.width)||0)<=1024),e.background=u,n.color.set(o);return}}let c=i.fogColor??a,f=o===`gradient`||o===`clouds`||o===`stars`?o:o===`color`&&s>.004&&c.toLowerCase()!==a.toLowerCase()||o===`texture`&&s>.004?`gradient`:null;if(f&&typeof document<`u`){let t=o===`color`||o===`texture`?a:i.skyTop,r=`${f}|${a}|${t}|${c}|${s.toFixed(3)}`;if(l?.key!==r){let e=document.createElement(`canvas`);e.width=Hp,e.height=512;let n=e.getContext(`2d`);if(n){let i=Zp(f,Hp,512,Up(a),Up(t),Up(c),1,s),o=n.createImageData(Hp,512);o.data.set(i),n.putImageData(o,0,0),d(),l={key:r,texture:h(new ur(e),!0)}}}if(l){e.background=l.texture,n.color.set(c);return}}m(a,i.fogColor??void 0)},setLook(e){n.near=e.fogNear,n.far=e.fogFar,r.intensity=e.ambient,i.color.set(e.sunColor),i.intensity=e.sunIntensity,i.castShadow=e.shadows,o=mf(e)},followSun(e){let t=Math.round(e.x/s)*s,n=Math.round(e.y/s)*s,r=Math.round(e.z/s)*s;i.target.position.set(t,n,r),i.position.set(t+o[0]*90,n+o[1]*90,r+o[2]*90),i.target.updateMatrixWorld()}}}function im(e){let t=Math.PI/180;return new $e(e[0]*t,e[1]*t,e[2]*t,`XYZ`)}function am(e){return new Ce().setFromEuler(im(e))}function om(e){let t=am(e.rotation),n=new W;return e.mesh.verts.map(r=>(n.set(r[0],r[1],r[2]).applyQuaternion(t),[n.x+e.position[0],n.y+e.position[1],n.z+e.position[2]]))}function sm(e){let t=[1/0,1/0,1/0],n=[-1/0,-1/0,-1/0];for(let r of e)for(let e=0;e<3;e++)r[e]<t[e]&&(t[e]=r[e]),r[e]>n[e]&&(n[e]=r[e]);return{min:t,max:n}}function cm(e){if(e.verts.length!==8||e.faces.length!==6)return!1;for(let t=0;t<3;t++)if(new Set(e.verts.map(e=>Math.round(e[t]*1e5))).size!==2)return!1;return e.faces.every(e=>e.v.length===4)}var lm=[0,0,0];function um(e,t,n){let r=e.length,i=e[t],a=i.v,o=i.t,s=i.v,c=i.t,l=e[0].v,u=e[r-1].v,d=[u[0]-l[0],u[1]-l[1],u[2]-l[2]];if(t>0)a=e[t-1].v,o=e[t-1].t;else if(n>0&&r>2){let t=e[r-2];a=[t.v[0]-d[0],t.v[1]-d[1],t.v[2]-d[2]],o=t.t-n}if(t<r-1)s=e[t+1].v,c=e[t+1].t;else if(n>0&&r>2){let t=e[1];s=[t.v[0]+d[0],t.v[1]+d[1],t.v[2]+d[2]],c=t.t+n}let f=c-o;return f<=1e-9?[0,0,0]:[(s[0]-a[0])/f,(s[1]-a[1])/f,(s[2]-a[2])/f]}function dm(e,t,n=!1,r=0){if(!e||e.length===0)return null;if(t<=e[0].t||e.length===1)return[...e[0].v];let i=e[e.length-1];if(t>=i.t)return[...i.v];for(let i=1;i<e.length;i++){let a=e[i];if(t>a.t)continue;let o=e[i-1],s=a.t-o.t,c=s>0?(t-o.t)/s:0;if(!n||s<=0)return[o.v[0]+(a.v[0]-o.v[0])*c,o.v[1]+(a.v[1]-o.v[1])*c,o.v[2]+(a.v[2]-o.v[2])*c];let l=um(e,i-1,r),u=um(e,i,r),d=c*c,f=d*c,p=2*f-3*d+1,m=f-2*d+c,h=-2*f+3*d,g=f-d;return[0,1,2].map(e=>p*o.v[e]+m*s*l[e]+h*a.v[e]+g*s*u[e])}return[...i.v]}function fm(e,t){let n=e.loop?(t%e.duration+e.duration)%e.duration:Math.min(Math.max(t,0),e.duration),r=e.smooth===!0,i=e.loop?e.duration:0,a=new Map;for(let[t,o]of Object.entries(e.tracks))a.set(t,{rot:dm(o.rot,n,r,i)??[...lm],pos:dm(o.pos,n,r,i)??[...lm]});return a}function pm(e,t,n){let r=new Map,i=Math.min(1,Math.max(0,n));for(let n of new Set([...e.keys(),...t.keys()])){let a=e.get(n),o=t.get(n),s=(e,t)=>{let n=e??lm,r=t??lm;return[n[0]+(r[0]-n[0])*i,n[1]+(r[1]-n[1])*i,n[2]+(r[2]-n[2])*i]};r.set(n,{rot:s(a?.rot,o?.rot),pos:s(a?.pos,o?.pos)})}return r}function mm(e){let t=new Map(e.map(e=>[e.id,e])),n=[],r=new Map,i=e=>{if(r.get(e.id)===2||r.get(e.id)===1)return;r.set(e.id,1);let a=e.parent?t.get(e.parent):void 0;a&&i(a),r.set(e.id,2),n.push(e)};return e.forEach(i),n}var hm=new Ce,gm=new Ue,_m=new Ue,vm=new Ue;function ym(e,t,n=new Map){for(let r of e){let e=t.get(r.name),i=n.get(r.id)??new Ue,a=r.parent?n.get(r.parent):void 0;a?i.copy(a):i.identity();let o=e?.rot??lm,s=e?.pos??lm;gm.makeTranslation(r.pivot[0]+s[0],r.pivot[1]+s[1],r.pivot[2]+s[2]),hm.setFromEuler(im(o)),_m.makeRotationFromQuaternion(hm),vm.makeTranslation(-r.pivot[0],-r.pivot[1],-r.pivot[2]),i.multiply(gm).multiply(_m).multiply(vm),n.set(r.id,i)}return n}var bm=class{constructor(e,t){X(this,`render`,void 0),X(this,`root`,new _t),X(this,`bones`,void 0),X(this,`ordered`,void 0),X(this,`groups`,new Map),X(this,`byName`,new Map),X(this,`matrices`,new Map),X(this,`geometries`,[]),this.render=e,this.bones=e.model.bones,this.ordered=mm(this.bones);for(let e of this.bones)this.byName.set(e.name,e);let n=e.boneGeometries(),r=(e,r)=>{let i=new _t;i.matrixAutoUpdate=!1,this.groups.set(e,i),this.root.add(i);let a=n.get(r);if(a){this.geometries.push(a);let n=new Kn(a,t);n.frustumCulled=!1,n.castShadow=!0,n.receiveShadow=!0,n.userData.sharedResources=!0,n.userData.boneId=e,i.add(n)}};for(let e of this.bones)r(e.id,e.id);r(``,``),this.pose(new Map)}has(e){return this.byName.has(e)}pose(e){ym(this.ordered,e,this.matrices);for(let e of this.bones){let t=this.groups.get(e.id),n=this.matrices.get(e.id);t&&n&&(t.matrix.copy(n),t.matrixWorldNeedsUpdate=!0)}}boneNameOf(e){let t=e.userData.boneId;return this.bones.find(e=>e.id===t)?.name??null}pivotNow(e){let t=this.byName.get(e),n=t?this.matrices.get(t.id):void 0;return t&&n?new W(t.pivot[0],t.pivot[1],t.pivot[2]).applyMatrix4(n):null}matrixOf(e){let t=this.byName.get(e);return(t?this.matrices.get(t.id):void 0)??null}groupOf(e){let t=this.byName.get(e);return t?this.groups.get(t.id)??null:null}pivotOf(e){return this.byName.get(e)?.pivot??null}dispose(){for(let e of this.geometries)e.dispose();this.geometries=[]}},xm={grounded:!0,crouching:!1,speed:0,vy:0},Sm=(e,t,n)=>Math.min(n,Math.max(t,e));function Cm(e,t){if(e.swimming)return{clip:`swim`,rate:Sm(.6+e.speed/5,.6,1.5)};if(e.crouching&&e.grounded)return e.speed>.3?{clip:`crouch_walk`,rate:Sm(e.speed/Math.max(t.crouchSpeed,.1),.6,1.6)}:{clip:`crouch`,rate:1};if(!e.grounded)return{clip:e.gliding?`glide`:e.vy>0?`jump`:`fall`,rate:1};if(e.speed<.25)return{clip:`idle`,rate:1};let n=(t.walkSpeed+t.runSpeed)/2;return e.speed<=n?{clip:`walk`,rate:Sm(e.speed/Math.max(t.walkSpeed,.1),.5,1.8)}:{clip:`run`,rate:Sm(e.speed/Math.max(t.runSpeed,.1),.6,1.6)}}function wm(e,t){return e>.05&&t>0?t/e:1}var Tm=.14,Em=new Set([`walk`,`run`,`crouch_walk`]),Dm=class{constructor(e,t){X(this,`models`,void 0),X(this,`textures`,void 0),X(this,`root`,new _t),X(this,`render`,null),X(this,`rig`,null),X(this,`mesh`,null),X(this,`skinMaterial`,null),X(this,`skinTexture`,null),X(this,`attachmentMeshes`,[]),X(this,`attachKey`,``),X(this,`attachRenders`,[]),X(this,`fitScale`,1),X(this,`current`,null),X(this,`previous`,null),X(this,`blend`,1),this.models=e,this.textures=t}get present(){return this.render!==null}get rigged(){return this.rig!==null}get model(){return this.render?.model??null}sync(e){let t=e.modelId?this.models.get(e.modelId):null;this.fitScale=wm(t?t.bounds.max[1]-t.bounds.min[1]:0,e.height);let n=e.skin?this.textures.get(e.skin)?.texture??null:null,r=e.attachments.map(e=>this.models.get(e.modelId)),i=JSON.stringify(e.attachments);t===this.render&&n===this.skinTexture&&i===this.attachKey&&r.length===this.attachRenders.length&&r.every((e,t)=>e===this.attachRenders[t])||(this.rebuild(t,n,e.attachments,r),this.attachKey=i,this.attachRenders=r)}clear(){this.root.clear(),this.rig?.dispose(),this.rig=null,this.mesh=null,this.skinMaterial?.dispose(),this.skinMaterial=null,this.attachmentMeshes=[],this.current=null,this.previous=null,this.blend=1}rebuild(e,t,n,r){if(this.clear(),this.render=e,this.skinTexture=t,!e)return;if(e.model.bones.length===0){this.mesh=e.createMesh(),this.root.add(this.mesh);return}let i=e.material;t&&(this.skinMaterial=new Dr({map:t,alphaTest:.5,side:2}),i=this.skinMaterial),this.rig=new bm(e,i),this.root.add(this.rig.root),n.forEach((e,t)=>{let n=r[t],i=this.rig.groupOf(e.bone),a=this.rig.pivotOf(e.bone);if(!n||!i||!a)return;let o=n.createMesh();o.position.set(a[0]+e.offset[0],a[1]+e.offset[1],a[2]+e.offset[2]),o.rotation.set(e.rotation[0]*Math.PI/180,e.rotation[1]*Math.PI/180,e.rotation[2]*Math.PI/180,`XYZ`),o.scale.setScalar(e.scale),o.frustumCulled=!1,i.add(o),this.attachmentMeshes.push(o)})}update(e,t,n){let r=this.rig;if(!r)return;let i=Cm(t,n),a=this.render?.model.clips??[],o=a.find(e=>e.name===i.clip)??(i.clip===`glide`||i.clip===`swim`?a.find(e=>e.name===`fall`):void 0)??a.find(e=>e.name===`idle`)??null;o&&o!==this.current?.clip&&this.switchTo(o);let s=this.currentPose(e,i.rate);r.pose(s)}switchTo(e){let t=this.current;this.previous=t?{...t}:null;let n=t&&Em.has(t.clip.name)&&Em.has(e.name)?t.time%t.clip.duration/t.clip.duration:0;this.current={clip:e,time:n*e.duration},this.blend=+!this.previous}currentPose(e,t){let n=this.current;if(!n)return new Map;n.time+=e*t,this.previous&&(this.previous.time+=e*t);let r=fm(n.clip,n.time);if(this.blend>=1||!this.previous)return r;this.blend=Math.min(1,this.blend+e/Tm);let i=this.blend*this.blend*(3-2*this.blend);return this.blend>=1&&(this.previous=null),this.previous?pm(fm(this.previous.clip,this.previous.time),r,i):r}resetPose(){this.rig?.pose(new Map)}dispose(){this.clear(),this.render=null}};function Om(e){let t=atob(e),n=new Uint8Array(t.length);for(let e=0;e<t.length;e++)n[e]=t.charCodeAt(e);return n}var km=class{constructor(){X(this,`ctx`,null),X(this,`master`,null),X(this,`sounds`,new Map),X(this,`buffers`,new Map),X(this,`recipes`,new Map),X(this,`music`,null),X(this,`volume`,1),X(this,`muted`,!1)}recipe(e){return e.kind===`file`&&e.file?`file|${e.file.mime}|${e.file.data.length}|${e.file.data.slice(0,48)}|${e.file.data.slice(-48)}`:JSON.stringify([e.kind,e.seed??null,e.sfx??null,e.music??null])}setSounds(e,t){this.sounds=new Map(e.map(e=>[e.id,e]));for(let e of Du){let t=this.sounds.has(e)?null:ku(e);t&&this.sounds.set(e,t)}this.volume=t;for(let e of[...this.recipes.keys()])this.sounds.has(e)||(this.recipes.delete(e),this.buffers.delete(e));for(let[e,t]of this.sounds){let n=this.recipe(t),r=this.recipes.get(e);r!==void 0&&r!==n&&this.buffers.delete(e),this.recipes.set(e,n)}this.applyVolume()}ensure(){if(this.ctx)return this.ctx;let e=window.AudioContext??window.webkitAudioContext;return e?(this.ctx=new e,this.master=this.ctx.createGain(),this.master.connect(this.ctx.destination),this.applyVolume(),this.ctx):null}applyVolume(){this.master&&(this.master.gain.value=this.muted?0:this.volume)}setVolume(e){this.volume=Math.min(1,Math.max(0,e)),this.applyVolume()}setMuted(e){this.muted=e,this.applyVolume()}preload(e){e&&this.buffer(e)}resume(){let e=this.ensure();e&&e.state===`suspended`&&e.resume()}buffer(e){let t=this.buffers.get(e);if(t)return t;let n=this.ensure(),r=this.sounds.get(e);if(!n||!r)return Promise.resolve(null);let i;if(r.kind===`sfx`&&r.sfx){let e=Yl(r.sfx,Kl,r.seed??1);i=Promise.resolve(this.fromSamples(n,e,Kl))}else i=r.kind===`music`&&r.music?Promise.resolve(this.fromSamples(n,mu(r.music,22050),22050)):r.kind===`file`&&r.file?n.decodeAudioData(Om(r.file.data).buffer).catch(()=>null):Promise.resolve(null);return this.buffers.set(e,i),i}fromSamples(e,t,n){if(t.length===0)return null;let r=e.createBuffer(1,t.length,n);return r.copyToChannel(t,0),r}play(e,t=1){if(!e||this.muted)return;let n=this.sounds.get(e);n&&this.buffer(e).then(e=>{let r=this.ctx;if(!e||!r||!this.master)return;let i=r.createBufferSource();i.buffer=e,i.playbackRate.value=t;let a=r.createGain();a.gain.value=n.volume,i.connect(a).connect(this.master),i.start()})}playMusic(e,t=0){if(this.music&&this.music.id===e||(this.stopMusic(),!e))return;let n=this.sounds.get(e);n&&this.buffer(e).then(r=>{let i=this.ctx;if(!r||!i||!this.master||this.music)return;let a=i.createBufferSource();a.buffer=r,a.loop=!0;let o=i.createGain();o.gain.value=n.volume,a.connect(o).connect(this.master);let s=r.duration>0?(t%r.duration+r.duration)%r.duration:0;a.start(0,s),this.music={source:a,gain:o,id:e,startedAt:i.currentTime-s,duration:r.duration}})}stopMusic(){if(this.music){try{this.music.source.stop()}catch{}this.music.source.disconnect(),this.music=null}}musicPosition(){let e=this.music,t=this.ctx;return!e||!t||e.duration<=0?null:(t.currentTime-e.startedAt)%e.duration}get musicId(){return this.music?.id??null}dispose(){this.stopMusic(),this.ctx?.close(),this.ctx=null,this.master=null,this.buffers.clear(),this.recipes.clear()}},Am=`Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`,jm=class{constructor(e){X(this,`parent`,void 0),X(this,`root`,void 0),X(this,`list`,void 0),X(this,`toasts`,void 0),X(this,`rows`,[]),X(this,`seen`,-1),X(this,`endLayer`,null),X(this,`dialogue`,null),X(this,`dialogueText`,``),X(this,`dialogueShown`,null),X(this,`dialogueRest`,null),X(this,`dialogueAnswers`,null),X(this,`answerButtons`,[]),X(this,`tintEl`,null),X(this,`prompt`,void 0),this.parent=e,this.root=document.createElement(`div`),Object.assign(this.root.style,{position:`absolute`,inset:`0`,pointerEvents:`none`,zIndex:`20`,fontFamily:Am,display:`none`}),this.list=document.createElement(`div`),Object.assign(this.list.style,{position:`absolute`,top:`12px`,right:`14px`,display:`flex`,flexDirection:`column`,alignItems:`flex-end`,gap:`6px`}),this.toasts=document.createElement(`div`),Object.assign(this.toasts.style,{position:`absolute`,left:`0`,right:`0`,bottom:`64px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`6px`}),this.prompt=document.createElement(`div`),Object.assign(this.prompt.style,{position:`absolute`,left:`50%`,bottom:`20px`,transform:`translateX(-50%)`,padding:`6px 14px`,borderRadius:`8px`,background:`rgba(20, 22, 30, 0.82)`,color:`#ffd34d`,fontSize:`16px`,display:`none`}),this.root.append(this.list,this.toasts,this.prompt)}setPrompt(e){e===null?this.prompt.style.display=`none`:(this.prompt.textContent!==e&&(this.prompt.textContent=e),this.prompt.style.display=`block`)}show(e,t){this.root.isConnected||this.parent.append(this.root),this.root.style.display=`block`,this.list.replaceChildren(),this.toasts.replaceChildren(),this.rows=[];for(let t of e.filter(e=>e.hud)){let e=document.createElement(`div`);Object.assign(e.style,{padding:`5px 12px`,borderRadius:`8px`,background:`rgba(20, 22, 30, 0.72)`,color:`#fff`,fontSize:`18px`,fontWeight:`600`,textShadow:`0 1px 2px rgba(0,0,0,0.6)`}),this.list.append(e),this.rows.push({variable:t,el:e})}this.seen=-1,this.update(t)}update(e){if(e.version!==this.seen){this.seen=e.version;for(let{variable:t,el:n}of this.rows)n.textContent=Gl(t,e.get(t.name))}}toast(e,t){if(!e.trim())return;let n=document.createElement(`div`);for(n.textContent=e,Object.assign(n.style,{padding:`8px 16px`,borderRadius:`10px`,background:`rgba(20, 22, 30, 0.82)`,color:`#fff`,fontSize:`17px`,transition:`opacity 0.3s`}),this.toasts.append(n);this.toasts.childElementCount>3;)this.toasts.firstElementChild?.remove();window.setTimeout(()=>{n.style.opacity=`0`,window.setTimeout(()=>n.remove(),320)},Math.max(.3,t)*1e3)}tint(e){this.tintEl||(this.tintEl=document.createElement(`div`),Object.assign(this.tintEl.style,{position:`absolute`,inset:`0`,pointerEvents:`none`,display:`none`}),this.root.prepend(this.tintEl)),this.root.isConnected&&(this.tintEl.style.background=e??`transparent`,this.tintEl.style.display=e?`block`:`none`)}flash(e=`rgba(255, 32, 48, 0.45)`){if(!this.root.isConnected)return;let t=document.createElement(`div`);Object.assign(t.style,{position:`absolute`,inset:`0`,background:e,opacity:`1`,transition:`opacity 0.45s ease-out`,pointerEvents:`none`}),this.root.append(t),requestAnimationFrame(()=>{t.style.opacity=`0`}),window.setTimeout(()=>t.remove(),520)}showDialogue(e,t,n,r=[],i=()=>{},a=()=>{},o=t.length){this.hideDialogue(),this.root.isConnected||this.parent.append(this.root),this.root.style.display=`block`;let s=document.createElement(`div`);if(Object.assign(s.style,{position:`absolute`,left:`50%`,bottom:`26px`,transform:`translateX(-50%)`,width:`min(720px, 88%)`,boxSizing:`border-box`,padding:`14px 18px`,borderRadius:`12px`,background:`rgba(16, 18, 28, 0.92)`,border:`2px solid #fff`,color:`#fff`,fontSize:`18px`,lineHeight:`1.45`,pointerEvents:`auto`,cursor:r.length>0?`default`:`pointer`}),e.trim()){let t=document.createElement(`div`);t.textContent=e,Object.assign(t.style,{color:`#ffd34d`,fontWeight:`700`,marginBottom:`4px`}),s.append(t)}let c=document.createElement(`div`);c.style.whiteSpace=`pre-wrap`;let l=document.createElement(`span`),u=document.createElement(`span`);if(u.style.visibility=`hidden`,c.append(l,u),s.append(c),this.dialogueText=t,this.dialogueShown=l,this.dialogueRest=u,this.setDialogueShown(o),this.answerButtons=[],r.length>0){let e=document.createElement(`div`);if(Object.assign(e.style,{display:`flex`,flexDirection:`column`,gap:`6px`,marginTop:`10px`}),r.forEach((t,n)=>{let r=document.createElement(`button`);r.textContent=`${n+1}. ${t}`,Object.assign(r.style,{font:`inherit`,textAlign:`left`,padding:`6px 12px`,borderRadius:`8px`,border:`1px solid #8aa0ff`,background:`#25305a`,color:`#fff`,cursor:`pointer`}),r.addEventListener(`click`,e=>{e.stopPropagation(),i(n)}),e.append(r),this.answerButtons.push(r)}),e.style.visibility=o>=t.length?`visible`:`hidden`,this.dialogueAnswers=e,s.append(e),this.selectAnswer(0),n){let e=document.createElement(`div`);e.textContent=n,Object.assign(e.style,{color:`#9aa3b2`,fontSize:`14px`,marginTop:`8px`,textAlign:`right`}),s.append(e)}s.addEventListener(`click`,a)}else{let e=document.createElement(`div`);e.textContent=n,Object.assign(e.style,{color:`#9aa3b2`,fontSize:`14px`,marginTop:`8px`,textAlign:`right`}),s.append(e),s.addEventListener(`click`,a)}this.root.append(s),this.dialogue=s}selectAnswer(e){this.answerButtons.forEach((t,n)=>{let r=n===e;t.style.background=r?`#3b4f9a`:`#25305a`,t.style.borderColor=r?`#ffffff`:`#8aa0ff`,t.style.boxShadow=r?`0 0 0 2px #ffffff`:`none`})}setDialogueShown(e){let t=this.dialogueShown,n=this.dialogueRest;if(!t||!n)return;let r=Math.max(0,Math.min(e,this.dialogueText.length));t.textContent=this.dialogueText.slice(0,r),n.textContent=this.dialogueText.slice(r),this.dialogueAnswers&&(this.dialogueAnswers.style.visibility=r>=this.dialogueText.length?`visible`:`hidden`)}hideDialogue(){this.dialogue?.remove(),this.dialogue=null,this.dialogueShown=this.dialogueRest=this.dialogueAnswers=null,this.answerButtons=[]}get endScreen(){return this.endLayer}showEnd(e,t,n){this.hideEnd(),this.root.isConnected||this.parent.append(this.root),this.root.style.display=`block`;let r=document.createElement(`div`);Object.assign(r.style,{position:`absolute`,inset:`0`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,gap:`14px`,background:`rgba(10, 12, 20, 0.72)`,color:`#fff`,textAlign:`center`,pointerEvents:`auto`});let i=document.createElement(`div`);if(i.textContent=e,Object.assign(i.style,{fontSize:`44px`,fontWeight:`700`,textShadow:`0 2px 6px rgba(0,0,0,0.6)`}),r.append(i),t.trim()){let e=document.createElement(`div`);e.textContent=t,Object.assign(e.style,{fontSize:`20px`,color:`#cfd5e0`,maxWidth:`70%`,whiteSpace:`pre-wrap`}),r.append(e)}let a=document.createElement(`div`);Object.assign(a.style,{display:`flex`,gap:`12px`,marginTop:`12px`});for(let e of n){let t=document.createElement(`button`);t.textContent=e.label,Object.assign(t.style,{font:`inherit`,fontSize:`18px`,padding:`10px 22px`,borderRadius:`10px`,border:`2px solid #fff`,background:`#2b3a67`,color:`#fff`,cursor:`pointer`}),t.addEventListener(`click`,e.run),a.append(t)}r.append(a),this.root.append(r),this.endLayer=r}hideEnd(){this.endLayer?.remove(),this.endLayer=null}hide(){this.hideEnd(),this.hideDialogue(),this.tint(null),this.setPrompt(null),this.root.style.display=`none`,this.list.replaceChildren(),this.toasts.replaceChildren(),this.rows=[]}},Mm={boxes:[],meshes:[],liquids:[]};function Nm(e){if(e.length<9)return null;let t=[1/0,1/0,1/0],n=[-1/0,-1/0,-1/0];for(let r=0;r<e.length;r+=3)for(let i=0;i<3;i++){let a=e[r+i];a<t[i]&&(t[i]=a),a>n[i]&&(n[i]=a)}return{tris:new Float32Array(e),min:t,max:n}}function Pm(e,t=6,n=120){if(e.length/9<=n){let t=Nm(e);return t?[t]:[]}let r=new Map;for(let n=0;n<e.length;n+=9){let i=(e[n]+e[n+3]+e[n+6])/3,a=(e[n+2]+e[n+5]+e[n+8])/3,o=`${Math.floor(i/t)}:${Math.floor(a/t)}`,s=r.get(o);s||r.set(o,s=[]);for(let t=0;t<9;t++)s.push(e[n+t])}let i=[];for(let e of r.values()){let t=Nm(e);t&&i.push(t)}return i}var Fm=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],Im=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],Lm=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],Rm=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],zm=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],Bm=e=>Math.hypot(e[0],e[1],e[2]),Vm=e=>e<0?0:e>1?1:e;function Hm(e,t,n,r){let i=Fm(n,t),a=Fm(r,t),o=Fm(e,t),s=Rm(i,o),c=Rm(a,o);if(s<=0&&c<=0)return t;let l=Fm(e,n),u=Rm(i,l),d=Rm(a,l);if(u>=0&&d<=u)return n;let f=s*d-u*c;if(f<=0&&s>=0&&u<=0)return Im(t,Lm(i,s/(s-u)));let p=Fm(e,r),m=Rm(i,p),h=Rm(a,p);if(h>=0&&m<=h)return r;let g=m*c-s*h;if(g<=0&&c>=0&&h<=0)return Im(t,Lm(a,c/(c-h)));let _=u*h-m*d;if(_<=0&&d-u>=0&&m-h>=0)return Im(n,Lm(Fm(r,n),(d-u)/(d-u+(m-h))));let v=1/(_+g+f);return Im(t,Im(Lm(i,g*v),Lm(a,f*v)))}function Um(e,t,n,r){let i=Fm(t,e),a=Fm(r,n),o=Fm(e,n),s=Rm(i,i),c=Rm(a,a),l=Rm(a,o),u=1e-12,d,f;if(s<=u&&c<=u)d=0,f=0;else if(s<=u)d=0,f=Vm(l/c);else{let e=Rm(i,o);if(c<=u)f=0,d=Vm(-e/s);else{let t=Rm(i,a),n=s*c-t*t;d=n>u?Vm((t*l-e*c)/n):0,f=(t*d+l)/c,f<0?(f=0,d=Vm(-e/s)):f>1&&(f=1,d=Vm((t-e)/s))}}return{c1:Im(e,Lm(i,d)),c2:Im(n,Lm(a,f))}}function Wm(e,t,n,r,i){let a=Fm(r,n),o=Fm(i,n),s=Fm(t,e),c=zm(s,o),l=Rm(a,c);if(Math.abs(l)<1e-12)return null;let u=1/l,d=Fm(e,n),f=u*Rm(d,c);if(f<0||f>1)return null;let p=zm(d,a),m=u*Rm(s,p);if(m<0||f+m>1)return null;let h=u*Rm(o,p);return h>=0&&h<=1?h:null}function Gm(e,t,n){let r=zm(Fm(t,e),Fm(n,e)),i=Bm(r);return i<1e-9?null:Lm(r,1/i)}function Km(e,t,n,r,i,a){let o=Gm(r,i,a);if(!o)return null;if(Wm(e,t,r,i,a)!==null){let i=Rm(Fm(e,r),o),a=Rm(Fm(t,r),o),s=n-Math.min(i,a),c=n+Math.max(i,a);return s<=c?{n:o,depth:s}:{n:Lm(o,-1),depth:c}}let s=e,c=Hm(e,r,i,a),l=Bm(Fm(s,c)),u=(e,t)=>{let n=Bm(Fm(e,t));n<l&&(l=n,s=e,c=t)};u(t,Hm(t,r,i,a));for(let[n,o]of[[r,i],[i,a],[a,r]]){let{c1:r,c2:i}=Um(e,t,n,o);u(r,i)}return l>=n?null:l<1e-7?{n:Rm(Fm(Lm(Im(e,t),.5),r),o)>=0?o:Lm(o,-1),depth:n}:{n:Lm(Fm(s,c),1/l),depth:n-l}}function qm(e,t,n,r){let i=null;for(let a of r){let r=0,o=i??n,s=!0;for(let n=0;n<3&&s;n++){let i=e[n],c=t[n];if(Math.abs(c)<1e-9)(i<a.min[n]||i>a.max[n])&&(s=!1);else{let e=(a.min[n]-i)/c,t=(a.max[n]-i)/c;e>t&&([e,t]=[t,e]),r=Math.max(r,e),o=Math.min(o,t),r>o&&(s=!1)}}if(!s)continue;let c=a.tris;for(let r=0;r<c.length;r+=9){let a=c[r+3]-c[r],o=c[r+4]-c[r+1],s=c[r+5]-c[r+2],l=c[r+6]-c[r],u=c[r+7]-c[r+1],d=c[r+8]-c[r+2],f=t[1]*d-t[2]*u,p=t[2]*l-t[0]*d,m=t[0]*u-t[1]*l,h=a*f+o*p+s*m;if(Math.abs(h)<1e-12)continue;let g=1/h,_=e[0]-c[r],v=e[1]-c[r+1],y=e[2]-c[r+2],b=g*(_*f+v*p+y*m);if(b<0||b>1)continue;let x=v*s-y*o,S=y*a-_*s,C=_*o-v*a,w=g*(t[0]*x+t[1]*S+t[2]*C);if(w<0||b+w>1)continue;let T=g*(l*x+u*S+d*C);T>=0&&T<=n&&(i===null||T<i)&&(i=T)}}return i}function Jm(e,t,n,r){let i=qm([e,n+.01,t],[0,-1,0],200,r);return i===null?null:n+.01-i}function Ym(e,t=1e-4){let n=e.length===9?3:4;for(let r=0;r<3;r++){let i=0;for(let a=0;a<3;a++){let o=Math.abs(e[r*n+a]);if(Math.abs(o-1)<t)i++;else if(o>t)return!1}if(i!==1)return!1}return!0}var Xm=1e-4;function Zm(e){let t=1/0,n=1/0,r=1/0,i=-1/0,a=-1/0,o=-1/0;for(let s of e)s[0]<t&&(t=s[0]),s[0]>i&&(i=s[0]),s[1]<n&&(n=s[1]),s[1]>a&&(a=s[1]),s[2]<r&&(r=s[2]),s[2]>o&&(o=s[2]);return{minX:t,minY:n,minZ:r,maxX:i,maxY:a,maxZ:o}}function Qm(e,t){return e.minX<t.maxX-1e-4&&e.maxX>t.minX+1e-4&&e.minY<t.maxY-1e-4&&e.maxY>t.minY+1e-4&&e.minZ<t.maxZ-1e-4&&e.maxZ>t.minZ+1e-4}function $m(e,t,n,r){let i=null;for(let a of r){let r=0,o=n,s=[a.minX,a.minY,a.minZ],c=[a.maxX,a.maxY,a.maxZ],l=!0;for(let n=0;n<3;n++){let i=e[n],a=t[n];if(Math.abs(a)<1e-9){if(i<s[n]||i>c[n]){l=!1;break}}else{let e=(s[n]-i)/a,t=(c[n]-i)/a;if(e>t&&([e,t]=[t,e]),r=Math.max(r,e),o=Math.min(o,t),r>o){l=!1;break}}}l&&(i===null||r<i)&&(i=r)}return i}function eh(e,t,n,r,i){let a=null;for(let o of i)e+n<=o.minX||e-n>=o.maxX||t+n<=o.minZ||t-n>=o.maxZ||o.maxY>r+.01||(a===null||o.maxY>a)&&(a=o.maxY);return a}function th(e,t,n,r){let i=om(e),a=ud(e.mesh,i,e.smooth?60:null);e.mesh.faces.forEach((e,o)=>{e.v.map(e=>i[e]).forEach((e,i)=>{let s=(t[o]+i)*3,c=a[o][i];n[s]=e[0],n[s+1]=e[1],n[s+2]=e[2],r[s]=c[0],r[s+1]=c[1],r[s+2]=c[2]})})}function nh(e,t,n){let r=0,i=0,a=[],o=[];e.cubes.forEach((e,t)=>{let n=[],s=[];e.mesh.faces.forEach((t,a)=>{n.push(r),r+=t.v.length;let o=ll(e.mesh,a);s.push(...o.map(e=>[a,...e])),i+=o.length}),a.push(n),o[t]=s});let s=new Float32Array(r*3),c=new Float32Array(r*3),l=new Float32Array(r*2),u=new Uint32Array(i*3),d=new Uint16Array(i),f=new Uint16Array(i),p=0;return e.cubes.forEach((e,r)=>{let i=a[r];th(e,i,s,c),e.mesh.faces.forEach((e,r)=>{let a=Uc(e.uv,t,n);for(let t=0;t<e.v.length;t++)l[(i[r]+t)*2]=a[t*2],l[(i[r]+t)*2+1]=a[t*2+1]});for(let[e,t,n,i]of o[r]){let o=a[r][e];u[p*3]=o+t,u[p*3+1]=o+n,u[p*3+2]=o+i,d[p]=r,f[p]=e,p++}}),{positions:s,normals:c,uvs:l,indices:u,triCube:d,triFace:f,faceStart:a}}function rh(e){return e.cubes.length===0?{min:[0,0,0],max:[0,0,0]}:sm(e.cubes.flatMap(e=>om(e)))}function ih(e){return new Ue().makeRotationFromQuaternion(new Ce().setFromEuler(im(e))).elements}function ah(e,t,n){let r=new W;return om(e).map(e=>(r.set(e[0]*t.scale[0],e[1]*t.scale[1],e[2]*t.scale[2]).applyQuaternion(n),[r.x+t.position[0],r.y+t.position[1],r.z+t.position[2]]))}function oh(e,t){return cm(e.mesh)&&Ym(ih(e.rotation))&&Ym(ih(t.rotation))}function sh(e,t){let n=new Ce().setFromEuler(im(t.rotation));return e.cubes.filter(e=>oh(e,t)).map(e=>Zm(ah(e,t,n)))}function ch(e,t){if(e.cubes.length===0)return null;let n=new Ce().setFromEuler(im(t.rotation));return Zm(e.cubes.flatMap(e=>ah(e,t,n)))}function lh(e,t){let n=new Ce().setFromEuler(im(t.rotation)),r=[];for(let i of e.cubes){if(oh(i,t))continue;let e=ah(i,t,n),a=[];i.mesh.faces.forEach((t,n)=>{for(let r of ll(i.mesh,n))for(let n of r){let r=e[t.v[n]];a.push(r[0],r[1],r[2])}});let o=Nm(a);o&&r.push(o)}return r}var uh=class{constructor(e,t){X(this,`model`,void 0),X(this,`geometry`,new Sn),X(this,`material`,void 0),X(this,`bounds`,void 0),X(this,`texW`,void 0),X(this,`texH`,void 0),X(this,`data`,void 0),this.model=e;let n=e.texture?t.get(e.texture):null;this.texW=n?.width??1,this.texH=n?.height??1,this.bounds=rh(e),this.data=nh(e,this.texW,this.texH),this.geometry.setAttribute(`position`,new sn(this.data.positions,3)),this.geometry.setAttribute(`normal`,new sn(this.data.normals,3)),this.geometry.setAttribute(`uv`,new sn(this.data.uvs,2)),this.geometry.setIndex(new sn(this.data.indices,1)),this.geometry.computeBoundingBox(),this.geometry.computeBoundingSphere(),this.material=n?new Dr({map:n.texture,alphaTest:.5,side:2}):new Dr({color:`#ff00ff`,side:2})}faceOfTriangle(e){let t=this.data.triCube[e],n=this.data.triFace[e];return t===void 0||n===void 0?null:{cube:t,face:n}}updateFaceUv(e,t){let n=this.model.cubes[e]?.mesh.faces[t],r=this.data.faceStart[e]?.[t];if(!n||r===void 0)return;let i=Uc(n.uv,this.texW,this.texH),a=this.geometry.getAttribute(`uv`);for(let e=0;e<n.v.length;e++)a.setXY(r+e,i[e*2],i[e*2+1]);a.needsUpdate=!0}updateCubeGeometry(e){let t=this.model.cubes[e],n=this.data.faceStart[e];if(!t||!n)return;let r=this.geometry.getAttribute(`position`),i=this.geometry.getAttribute(`normal`);th(t,n,r.array,i.array),r.needsUpdate=!0,i.needsUpdate=!0,this.geometry.computeBoundingBox(),this.geometry.computeBoundingSphere(),this.bounds=rh(this.model)}boneGeometries(){let e=this.model.cubes.map(e=>e.bone??``),t=new Map;for(let n=0;n<this.data.triCube.length;n++){let r=e[this.data.triCube[n]]??``,i=t.get(r);i||t.set(r,i=[]),i.push(this.data.indices[n*3],this.data.indices[n*3+1],this.data.indices[n*3+2])}let n=new Map;for(let[e,r]of t){let t=new Sn;t.setAttribute(`position`,this.geometry.getAttribute(`position`)),t.setAttribute(`normal`,this.geometry.getAttribute(`normal`)),t.setAttribute(`uv`,this.geometry.getAttribute(`uv`)),t.setIndex(new sn(new Uint32Array(r),1)),n.set(e,t)}return n}createMesh(){let e=new Kn(this.geometry,this.material);return e.userData.sharedResources=!0,e.castShadow=!0,e.receiveShadow=!0,e}dispose(){this.geometry.dispose(),this.material.dispose()}},dh=class{constructor(e,t){X(this,`getModel`,void 0),X(this,`textures`,void 0),X(this,`renders`,new Map),this.getModel=e,this.textures=t}get(e){let t=this.renders.get(e);if(t)return t;let n=this.getModel(e);if(!n)return null;let r=new uh(n,this.textures);return this.renders.set(e,r),r}invalidate(e){this.renders.get(e)?.dispose(),this.renders.delete(e)}clear(){for(let e of this.renders.values())e.dispose();this.renders.clear()}};function fh(e,t){if(e.kind===`block`)return Zm(om(e));let n=t(e.modelId);return n?ch(n,e):null}var ph=class{constructor(){X(this,`store`,new jl([])),X(this,`triggers`,[]),X(this,`startRules`,[]),X(this,`timers`,[]),X(this,`watchers`,[]),X(this,`clock`,0),X(this,`variables`,[]),X(this,`objects`,[]),X(this,`getModel`,()=>void 0)}begin(e,t,n,r){return this.variables=e,this.objects=t,this.getModel=n,r&&this.store.load(e),this.arm(),this.runStart()}arm(){this.triggers=[],this.startRules=[],this.timers=[],this.watchers=[],this.clock=0;for(let e of this.objects){if(e.rules.length===0)continue;this.startRules.push({id:e.id,rules:e.rules});for(let t of e.rules)t.event===`timer`?this.timers.push({id:e.id,rule:t,at:Math.max(.05,t.seconds??5)}):t.event===`when`&&this.watchers.push({id:e.id,rule:t,was:!1});if(!e.rules.some(e=>e.event===`touch`||e.event===`interact`||e.event===`stomp`))continue;let t=fh(e,this.getModel);t&&this.triggers.push({id:e.id,rules:e.rules,box:t,inside:!1})}}runStart(){let e=[];for(let t of this.startRules)for(let n of Ll(t.rules,`start`,this.store))e.push({objectId:t.id,effect:n});return e}restart(){return this.store.load(this.variables),this.arm(),this.runStart()}shift(e,t,n,r){let i=this.triggers.find(t=>t.id===e);i&&(i.box={minX:i.box.minX+t,maxX:i.box.maxX+t,minY:i.box.minY+n,maxY:i.box.maxY+n,minZ:i.box.minZ+r,maxZ:i.box.maxZ+r})}runActions(e,t){return Fl(t,this.store).map(t=>({objectId:e,effect:t}))}interact(e,t){let n=[];for(let r of this.triggers)if(!t.has(r.id)&&Qm(e,r.box))for(let e of Ll(r.rules,`interact`,this.store))n.push({objectId:r.id,effect:e});return n}canInteract(e,t){return this.triggers.some(n=>!t.has(n.id)&&n.rules.some(e=>e.event===`interact`)&&Qm(e,n.box))}update(e,t,n,r=0){let i=[];for(let n of this.triggers){if(t.has(n.id))continue;let a=Qm(e,n.box);if(a&&!n.inside){let t=r<-1&&e.minY>=n.box.maxY-.45&&n.rules.some(e=>e.event===`stomp`);for(let e of Ll(n.rules,t?`stomp`:`touch`,this.store))i.push({objectId:n.id,effect:e})}n.inside=a}this.clock+=n;for(let e of this.timers)if(!(t.has(e.id)||this.clock<e.at)){for(let t of Il(e.rule,this.store))i.push({objectId:e.id,effect:t});e.at=e.rule.repeat?e.at+Math.max(.05,e.rule.seconds??5):1/0}for(let e of this.watchers){if(t.has(e.id))continue;let n=Pl(e.rule,this.store);if(n&&!e.was)for(let t of Il(e.rule,this.store))i.push({objectId:e.id,effect:t});e.was=n}return i}},mh=-.4,hh=1.35,gh=.0025,_h=.25,vh=.6,yh=e=>Math.atan2(Math.sin(e),Math.cos(e)),bh=class{constructor(){X(this,`yaw`,0),X(this,`pitch`,.4),X(this,`distance`,6),X(this,`focusY`,0),X(this,`initialized`,!1)}reset(e){this.yaw=e+Math.PI,this.pitch=.4,this.initialized=!1}look(e,t,n,r,i){i&&(this.yaw-=e*gh*n),this.pitch+=t*gh*n*(r?-1:1),this.pitch=Math.min(hh,Math.max(mh,this.pitch))}update(e,t,n,r,i,a,o,s=[]){if(a.cameraMode===`chase`){let t=yh(r+Math.PI-this.yaw);this.yaw=yh(this.yaw+t*(1-Math.exp(-9*e)))}let c=n[1]+i*.5+a.cameraHeight;this.initialized||(this.focusY=c,this.distance=a.cameraDistance,this.initialized=!0),this.focusY+=(c-this.focusY)*(1-Math.exp(-10*e));let l=[n[0],this.focusY,n[2]],u=Math.cos(this.pitch),d=[Math.sin(this.yaw)*u,Math.sin(this.pitch),Math.cos(this.yaw)*u],f=a.cameraDistance,p=$m(l,d,a.cameraDistance+_h,o),m=s.length>0?qm(l,d,a.cameraDistance+_h,s):null,h=p===null?m:m===null?p:Math.min(p,m);h!==null&&(f=Math.max(vh,Math.min(f,h-_h))),f<this.distance?this.distance=f:this.distance+=(f-this.distance)*(1-Math.exp(-6*e)),t.position.set(l[0]+d[0]*this.distance,l[1]+d[1]*this.distance,l[2]+d[2]*this.distance),t.lookAt(l[0],l[1],l[2]),t.fov!==a.cameraFov&&(t.fov=a.cameraFov,t.updateProjectionMatrix())}},xh=class{constructor(){X(this,`cur`,[]),X(this,`prev`,[]),X(this,`nav`,{x:new rc,y:new rc}),X(this,`connected`,!1),X(this,`active`,!1),X(this,`navX`,0),X(this,`navY`,0),X(this,`axes`,[])}find(){let e=typeof navigator<`u`?navigator.getGamepads?.():void 0;return Array.from(e??[]).find(e=>!!e&&e.connected)}take(e){this.connected=!!e,this.axes=e?Array.from(e.axes):[],this.cur=e?e.buttons.map((e,t)=>(t===Qs.l2||t===Qs.r2)&&e.value>.35||e.pressed):[]}poll(e){let t=this.find();if(this.prev=this.cur,this.navX=this.navY=0,this.take(t),!t){this.active=!1,this.nav.x.reset(),this.nav.y.reset();return}let n=Math.max(Math.hypot(this.axis($s.leftX),this.axis($s.leftY)),Math.hypot(this.axis($s.rightX),this.axis($s.rightY)));this.active=this.cur.some((e,t)=>e&&!this.prev[t])||n>.5;let r=this.axis($s.leftX),i=this.axis($s.leftY),a=+!!this.cur[Qs.right]-!!this.cur[Qs.left]||(Math.abs(r)>.55&&Math.abs(r)>Math.abs(i)?Math.sign(r):0),o=+!!this.cur[Qs.down]-!!this.cur[Qs.up]||(Math.abs(i)>.55&&Math.abs(i)>=Math.abs(r)?Math.sign(i):0);this.navX=this.nav.x.step(a,e),this.navY=this.nav.y.step(o,e)}down(e){return!!this.cur[e]}pressed(e){return!!this.cur[e]&&!this.prev[e]}axis(e){return this.axes[e]??0}stick(e,t){let n=this.axis(e),r=this.axis(t),i=Math.hypot(n,r);if(i<=.2)return[0,0];let a=Math.min(1,(i-ec)/(1-ec))/i;return[n*a,r*a]}sync(){this.take(this.find()),this.prev=[...this.cur],this.nav.x.reset(),this.nav.y.reset()}},Sh=900,Ch=class{constructor(e){X(this,`canvas`,void 0),X(this,`down`,new Set),X(this,`pressed`,new Set),X(this,`lookDX`,0),X(this,`lookDY`,0),X(this,`dragging`,!1),X(this,`pad`,new xh),X(this,`attached`,!1),X(this,`touch`,null),X(this,`padRecent`,0),X(this,`onKeyDown`,e=>{this.down.has(e.code)||this.pressed.add(e.code),this.down.add(e.code);let t=e.target;!(t instanceof HTMLElement&&/^(INPUT|SELECT|TEXTAREA)$/.test(t.tagName))&&(e.code===`Space`||e.code.startsWith(`Arrow`))&&e.preventDefault()}),X(this,`onKeyUp`,e=>{this.down.delete(e.code)}),X(this,`onBlur`,()=>{this.down.clear(),this.dragging=!1}),X(this,`onMouseDown`,e=>{this.dragging=!0,e.preventDefault()}),X(this,`onMouseUp`,()=>{this.dragging=!1}),X(this,`onMouseMove`,e=>{(document.pointerLockElement===this.canvas||this.dragging)&&(this.lookDX+=e.movementX,this.lookDY+=e.movementY)}),X(this,`onContextMenu`,e=>e.preventDefault()),this.canvas=e}attach(){this.attached||(this.attached=!0,window.addEventListener(`keydown`,this.onKeyDown),window.addEventListener(`keyup`,this.onKeyUp),window.addEventListener(`blur`,this.onBlur),window.addEventListener(`mouseup`,this.onMouseUp),window.addEventListener(`mousemove`,this.onMouseMove),this.canvas.addEventListener(`mousedown`,this.onMouseDown),this.canvas.addEventListener(`contextmenu`,this.onContextMenu))}detach(){this.attached&&(this.attached=!1,window.removeEventListener(`keydown`,this.onKeyDown),window.removeEventListener(`keyup`,this.onKeyUp),window.removeEventListener(`blur`,this.onBlur),window.removeEventListener(`mouseup`,this.onMouseUp),window.removeEventListener(`mousemove`,this.onMouseMove),this.canvas.removeEventListener(`mousedown`,this.onMouseDown),this.canvas.removeEventListener(`contextmenu`,this.onContextMenu),this.down.clear(),this.pressed.clear(),this.dragging=!1,this.lookDX=this.lookDY=0)}clear(){this.down.clear(),this.pressed.clear(),this.dragging=!1,this.lookDX=this.lookDY=0,this.pad.sync()}get padConnected(){return this.pad.connected}get padActive(){return this.padRecent>0}anyDown(e){return e.some(e=>this.down.has(e))}anyPressed(e){return e.some(e=>this.pressed.has(e))}poll(e,t){let n=e.controls,r=+!!this.anyDown(n.right)-!!this.anyDown(n.left),i=+!!this.anyDown(n.forward)-!!this.anyDown(n.back),a=Math.hypot(r,i);a>1&&(r/=a,i/=a);let o=this.anyPressed(n.jump),s=this.anyDown(n.jump),c=this.anyDown(n.run),l=this.anyDown(n.crouch),u=this.anyPressed(n.interact),d=this.lookDX,f=this.lookDY,p=+!!this.anyPressed(n.back)-!!this.anyPressed(n.forward),m=this.pressed.has(`Enter`)||this.pressed.has(`NumpadEnter`);if(this.pad.poll(t),e.gamepad&&this.pad.connected){let e=this.pad,[n,a]=e.stick($s.leftX,$s.leftY);r+=n+ +!!e.down(Qs.right)-+!!e.down(Qs.left),i+=-a+ +!!e.down(Qs.up)-+!!e.down(Qs.down);let h=Math.hypot(r,i);h>1&&(r/=h,i/=h);let[g,_]=e.stick($s.rightX,$s.rightY);d+=g*Sh*t,f+=_*Sh*t,e.pressed(Qs.cross)&&(o=!0,m=!0),s||(s=e.down(Qs.cross)),c||(c=e.down(Qs.square)||e.down(Qs.r2)),l||(l=e.down(Qs.circle)||e.down(Qs.l3)),e.pressed(Qs.triangle)&&(u=!0,m=!0),e.navY!==0&&(p=e.navY),e.active&&(this.padRecent=3)}if(this.padRecent=Math.max(0,this.padRecent-t),(this.anyPressed(n.jump)||this.anyPressed(n.interact))&&(m=!0),this.touch){let e=this.touch.sample();(e.moveX!==0||e.moveY!==0||e.jumpPressed)&&(this.padRecent=0),r+=e.moveX,i+=e.moveY;let t=Math.hypot(r,i);t>1&&(r/=t,i/=t),d+=e.lookX,f+=e.lookY,e.jumpPressed&&(o=!0),s||(s=e.jump),c||(c=e.run),l||(l=e.crouch),e.interactPressed&&(u=!0)}let h=-1;[`Digit1`,`Digit2`,`Digit3`,`Digit4`].forEach((e,t)=>{(this.pressed.has(e)||this.pressed.has(`Numpad${t+1}`))&&(h=t)});let g={moveX:r,moveY:i,jumpPressed:o,jumpHeld:s,run:c,crouch:l,interactPressed:u,answer:h,lookX:d,lookY:f,navY:p,confirm:m};return this.pressed.clear(),this.lookDX=0,this.lookDY=0,g}};function wh(e){return`.!?…`.includes(e)?.28:`,;:`.includes(e)?.13:e===`
`?.2:0}function Th(e){return/[\p{L}\p{N}]/u.test(e)}var Eh=class{constructor(e,t){X(this,`text`,void 0),X(this,`speed`,void 0),X(this,`shown`,0),X(this,`acc`,0),X(this,`hold`,0),this.text=e,this.speed=t,t>0||(this.shown=e.length)}get done(){return this.shown>=this.text.length}get visible(){return this.text.slice(0,this.shown)}update(e){if(this.done)return``;this.acc+=Math.max(0,e);let t=1/this.speed,n=this.shown;for(;this.shown<this.text.length;){if(this.hold>0){if(this.acc<this.hold){this.hold-=this.acc,this.acc=0;break}this.acc-=this.hold,this.hold=0}if(this.acc<t)break;this.acc-=t,this.hold=wh(this.text[this.shown]),this.shown++}return this.done&&(this.acc=this.hold=0),this.text.slice(n,this.shown)}finish(){this.shown=this.text.length,this.acc=this.hold=0}},Dh=class{constructor(e,t=1,n=Math.random,r=.14){X(this,`pitch`,void 0),X(this,`random`,void 0),X(this,`jitter`,void 0),X(this,`count`,0),X(this,`every`,void 0),this.pitch=t,this.random=n,this.jitter=r,this.every=Math.max(1,Math.round(e/15))}rates(e){let t=[];for(let n of e)Th(n)&&(this.count++,(this.count-1)%this.every==0&&t.push(this.pitch*(1+(this.random()*2-1)*this.jitter)));return t}},Oh=e=>e?`${e.texture}|${e.col}|${e.row}`:``;function kh(e,t=!1){let n=[],r=[],i=[],a=[],o=ud(e,e.verts,t?60:null);e.faces.forEach((t,s)=>{let{u:c,v:l}=ul(ol(e,s)),u=t.v.map(t=>e.verts[t]),d=u.map(e=>e[0]*c[0]+e[1]*c[1]+e[2]*c[2]),f=u.map(e=>e[0]*l[0]+e[1]*l[1]+e[2]*l[2]),p=Math.min(...d),m=Math.min(...f),h=t.tile?.rot??0,g=t.tile?.flip===!0;a.push(n.length/3),u.forEach((e,t)=>{n.push(e[0],e[1],e[2]);let a=o[s][t];r.push(a[0],a[1],a[2]);let c=(d[t]-p)/1,l=(f[t]-m)/1;g&&(c=-c);for(let e=0;e<h;e++)[c,l]=[-l,c];i.push(c,l)})});let s=[``],c=new Map([[``,null]]);e.faces.forEach(e=>{let t=Oh(e.tile);c.has(t)||(c.set(t,e.tile??null),s.push(t))});let l=[],u=[],d=[];for(let t of s){let n=l.length;e.faces.forEach((n,r)=>{if(Oh(n.tile)!==t)return;let i=a[r];for(let[t,n,a]of ll(e,r))l.push(i+t,i+n,i+a),u.push(r)}),l.length>n&&d.push({start:n,count:l.length-n,tile:c.get(t)??null})}return{positions:new Float32Array(n),normals:new Float32Array(r),tileUvs:new Float32Array(i),indices:new Uint32Array(l),faceOfTriangle:new Uint16Array(u),groups:d}}function Ah(e,t,n,r,i){let a=.01;return{u0:(e*n+a)/r,u1:((e+1)*n-a)/r,v0:1-((t+1)*n-a)/i,v1:1-(t*n+a)/i}}function jh(e,t,n,r,i=1,a){let o=new Dr({map:e,color:n,alphaTest:.5,side:r});i<1&&(o.transparent=!0,o.opacity=i,o.depthWrite=!1);let s=new Re(t.u0,t.v0,t.u1-t.u0,t.v1-t.v0),c=a??new U(0,0);return o.onBeforeCompile=e=>{e.uniforms.uTile={value:s},e.uniforms.uScroll={value:c},e.vertexShader=`attribute vec2 aTileUv;
varying vec2 vTileUv;
`+e.vertexShader.replace(`#include <uv_vertex>`,`#include <uv_vertex>
  vTileUv = aTileUv;`),e.fragmentShader=`uniform vec4 uTile;
uniform vec2 uScroll;
varying vec2 vTileUv;
`+e.fragmentShader.replace(`#include <map_fragment>`,`#ifdef USE_MAP
          vec2 tileCoord = uTile.xy + fract(vTileUv + uScroll) * uTile.zw;
          vec4 sampledDiffuseColor = texture2D( map, tileCoord );
          diffuseColor *= sampledDiffuseColor;
        #endif`)},o.customProgramCacheKey=()=>`polyhop-tiled-lambert`,o}var Mh=Math.PI/180;function Nh(e){let t=0;for(let n=0;n<e.length;n++)t=Math.imul(t,31)+e.charCodeAt(n)>>>0;return t}function Ph(e){let t=new Set,n=(e,r)=>{for(let i of r)if(`target`in i&&t.add(i.target||e),i.type===`choice`)for(let t of i.options)n(e,t.actions)};for(let r of e)if(r.rules.length!==0){t.add(r.id);for(let e of r.rules)n(r.id,e.actions)}return t}var Fh=32,Ih=class{constructor(e,t){X(this,`textures`,void 0),X(this,`models`,void 0),X(this,`group`,new _t),X(this,`meshes`,new Map),X(this,`batches`,[]),X(this,`flows`,[]),X(this,`proxyMaterial`,new Pn({visible:!1})),this.textures=e,this.models=t,this.group.name=`Level`}rebuild(e,t=!1){for(let e of[...this.meshes.keys()])this.remove(e);if(this.clearBatches(),this.flows=[],!t){for(let t of e)this.upsert(t);return}let n=Ph(e),r=[];for(let t of e)n.has(t.id)||!this.canBatch(t)?this.upsert(t):r.push(t);this.buildBatches(r)}canBatch(e){return e.kind===`block`?!e.liquid&&!e.terrain:!e.animation&&this.models.get(e.modelId)!==null}clearBatches(){for(let e of this.batches){this.group.remove(e);let t=e;if(!t.userData.sharedResources){t.geometry?.dispose();let e=t.material;for(let t of Array.isArray(e)?e:[e])t.dispose()}}this.batches=[]}buildBatches(e){let t=new Map,n=new Map,r=new Ue,i=new G,a=new W,o=new Ce,s=(e,t)=>`${Math.floor(e/Fh)}:${Math.floor(t/Fh)}`;for(let c of e){if(c.kind===`model`){let e=this.models.get(c.modelId);if(!e)continue;let t=`${c.modelId}|${s(c.position[0],c.position[2])}`,i=n.get(t);i||n.set(t,i={render:e,matrices:[]}),r.compose(a.set(c.position[0],c.position[1],c.position[2]),o.setFromEuler(new $e(c.rotation[0]*Mh,c.rotation[1]*Mh,c.rotation[2]*Mh,`XYZ`)),new W(c.scale[0],c.scale[1],c.scale[2])),i.matrices.push(r.clone());continue}let e=kh(c.mesh,c.smooth===!0),l=il(c.mesh),u=Math.min(l.max[0]-l.min[0],l.max[1]-l.min[1],l.max[2]-l.min[2])<.06,d=c.opacity??1,f=!u&&d>=1;r.makeRotationFromEuler(new $e(c.rotation[0]*Mh,c.rotation[1]*Mh,c.rotation[2]*Mh,`XYZ`)),i.setFromMatrix4(r);let p=s(c.position[0],c.position[2]);for(let n of e.groups){let r=n.tile??c.tile,o=`${p}|${r?`${r.texture}:${r.col}:${r.row}`:`-`}|${c.color}|${c.doubleSided}|${d}|${f}`,s=t.get(o);s||(s={key:o,pos:[],nor:[],uv:[],idx:[],tile:r?{texture:r.texture,col:r.col,row:r.row}:null,color:c.color,side:c.doubleSided?2:0,opacity:d,cast:f},t.set(o,s));let l=new Map;for(let t=n.start;t<n.start+n.count;t++){let n=e.indices[t],r=l.get(n);r===void 0&&(r=s.pos.length/3,l.set(n,r),a.set(e.positions[n*3],e.positions[n*3+1],e.positions[n*3+2]).applyMatrix3(i),s.pos.push(a.x+c.position[0],a.y+c.position[1],a.z+c.position[2]),a.set(e.normals[n*3],e.normals[n*3+1],e.normals[n*3+2]).applyMatrix3(i),s.nor.push(a.x,a.y,a.z),s.uv.push(e.tileUvs[n*2],e.tileUvs[n*2+1])),s.idx.push(r)}}}for(let e of t.values()){let t=new Sn;t.setAttribute(`position`,new sn(new Float32Array(e.pos),3)),t.setAttribute(`normal`,new sn(new Float32Array(e.nor),3)),t.setAttribute(`aTileUv`,new sn(new Float32Array(e.uv),2)),t.setIndex(new sn(new Uint32Array(e.idx),1)),t.computeBoundingBox(),t.computeBoundingSphere();let n=new wt(e.color),r=e.tile?this.textures.get(e.tile.texture):null,i;if(e.tile&&r)i=jh(r.texture,Ah(e.tile.col,e.tile.row,r.tileSize,r.width,r.height),n,e.side,e.opacity);else{let t=new Dr({color:n,side:e.side});e.opacity<1&&(t.transparent=!0,t.opacity=e.opacity,t.depthWrite=!1),i=t}let a=new Kn(t,i);a.castShadow=e.cast,a.receiveShadow=!0,e.opacity<1&&(a.renderOrder=2),a.name=`Batch`,this.group.add(a),this.batches.push(a)}for(let{render:e,matrices:t}of n.values()){let n=new ir(e.geometry,e.material,t.length);t.forEach((e,t)=>n.setMatrixAt(t,e)),n.instanceMatrix.needsUpdate=!0,n.castShadow=!0,n.receiveShadow=!0,n.userData.sharedResources=!0,n.name=`Instances`,n.computeBoundingSphere(),this.group.add(n),this.batches.push(n)}}upsert(e){this.remove(e.id);let t=e.kind===`block`?this.buildBlock(e):this.buildModel(e);t.name=e.name,t.userData.objectId=e.id,this.meshes.set(e.id,t),this.group.add(t),this.syncTransform(e)}syncTransform(e){let t=this.meshes.get(e.id);t&&(t.position.set(e.position[0],e.position[1],e.position[2]),t.rotation.set(e.rotation[0]*Mh,e.rotation[1]*Mh,e.rotation[2]*Mh,`XYZ`),e.kind===`model`&&t.scale.set(e.scale[0],e.scale[1],e.scale[2]))}buildBlock(e){let t=kh(e.mesh,e.smooth===!0),n=new Sn;n.setAttribute(`position`,new sn(t.positions,3)),n.setAttribute(`normal`,new sn(t.normals,3)),n.setAttribute(`aTileUv`,new sn(t.tileUvs,2)),n.setIndex(new sn(t.indices,1)),n.computeBoundingBox(),n.computeBoundingSphere(),n.userData.faceOfTriangle=t.faceOfTriangle;let r=new wt(e.color),i=e.doubleSided?2:0,a=e.opacity??1,o=e.liquid?new U(0,0):void 0;o&&this.flows.push(o);let s=e=>{let t=e?this.textures.get(e.texture):null;if(e&&t)return jh(t.texture,Ah(e.col,e.row,t.tileSize,t.width,t.height),r,i,a,o);let n=new Dr({color:r,side:i});return a<1&&(n.transparent=!0,n.opacity=a,n.depthWrite=!1),n},c=il(e.mesh),l=Math.min(c.max[0]-c.min[0],c.max[1]-c.min[1],c.max[2]-c.min[2])<.06,u=t=>(t.castShadow=!l&&a>=1&&!e.liquid,t.receiveShadow=!0,a<1&&(t.renderOrder=2),t);if(!t.groups.some(e=>e.tile!==null))return u(new Kn(n,s(e.tile)));let d=t.groups.map(t=>s(t.tile??e.tile));return t.groups.forEach((e,t)=>n.addGroup(e.start,e.count,t)),u(new Kn(n,d))}buildModel(e){let t=this.models.get(e.modelId);if(t){let n=t.createMesh();if(e.animation&&t.model.bones.length>0&&t.model.clips.some(t=>t.name===e.animation)){n.material=this.proxyMaterial;let r=new bm(t,t.material);n.add(r.root),n.userData.rig=r,n.userData.render=t,n.userData.animation=e.animation,n.userData.speed=e.animationSpeed,n.userData.time=Nh(e.id)%1e3/1e3}return n}let n=new Kn(new mr(1,1,1),new Pn({color:`#ff00ff`,wireframe:!0}));return n.geometry.translate(0,.5,0),n}remove(e){let t=this.meshes.get(e);if(t){if(this.group.remove(t),t.userData.rig?.dispose(),!t.userData.sharedResources){t.geometry.dispose();let e=t.material;for(let t of Array.isArray(e)?e:[e])t.dispose()}this.meshes.delete(e)}}animate(e){for(let t of this.flows)t.x=(t.x+e*.06)%1,t.y=(t.y+e*.035)%1;for(let t of this.meshes.values()){let n=t.userData.rig;if(!n)continue;let r=t.userData.render.model.clips.find(e=>e.name===t.userData.animation);r&&(t.userData.time=t.userData.time+e*t.userData.speed,n.pose(fm(r,t.userData.time)))}}getMesh(e){return this.meshes.get(e)}meshList(){return[...this.meshes.values()]}};function Lh(e,t){let n=[],r=[],i=[];for(let a of e)if(a.kind===`block`&&a.liquid&&i.push(Zm(om(a))),a.collide){if(a.kind===`block`){let e=om(a),t=new Ue().makeRotationFromEuler(new $e(a.rotation[0]*Mh,a.rotation[1]*Mh,a.rotation[2]*Mh,`XYZ`));if(cm(a.mesh)&&Ym(t.elements)){n.push(Zm(e));continue}let i=[];a.mesh.faces.forEach((t,n)=>{for(let r of ll(a.mesh,n))for(let n of r){let r=e[t.v[n]];i.push(r[0],r[1],r[2])}}),r.push(...Pm(i))}else{let e=t(a.modelId);if(!e)continue;n.push(...sh(e,a)),r.push(...lh(e,a))}}return{boxes:n,meshes:r,liquids:i}}var Rh=.12,zh=[],Bh=[],Vh=.6,Hh=.7,Uh=e=>Math.atan2(Math.sin(e),Math.cos(e)),Wh=class{constructor(e,t=[0,0,0],n=0){X(this,`settings`,void 0),X(this,`spawn`,void 0),X(this,`spawnYaw`,void 0),X(this,`pos`,[0,0,0]),X(this,`vel`,[0,0,0]),X(this,`grounded`,!1),X(this,`crouching`,!1),X(this,`facing`,0),X(this,`height`,void 0),X(this,`events`,[]),X(this,`coyote`,0),X(this,`jumpBuffer`,0),X(this,`airJumpUsed`,!1),X(this,`jumping`,!1),X(this,`cutApplied`,!1),X(this,`onSteep`,!1),X(this,`gliding`,!1),X(this,`swimming`,!1),X(this,`waterSurface`,-1/0),X(this,`glideReady`,!1),X(this,`stepHold`,0),this.settings=e,this.spawn=t,this.spawnYaw=n,this.height=e.height}reset(){let e=this.settings;this.pos=[...this.spawn],this.vel=[0,0,0],this.grounded=!1,this.crouching=!1,this.height=e.height,this.facing=this.spawnYaw*Math.PI/180,this.coyote=0,this.jumpBuffer=0,this.airJumpUsed=!1,this.jumping=!1,this.cutApplied=!1,this.stepHold=0}launch(e){this.vel[1]=e,this.grounded=!1,this.jumping=!1,this.airJumpUsed=!1,this.stepHold=0,this.coyote=0}turnRight(e){this.facing=Uh(this.facing-e)}box(e){let t=this.settings.width/2;return{minX:this.pos[0]-t,maxX:this.pos[0]+t,minY:this.pos[1],maxY:this.pos[1]+e,minZ:this.pos[2]-t,maxZ:this.pos[2]+t}}resolveMeshes(e,t){let n=this.settings,r=n.width/2,i=Math.cos(n.maxSlope*Math.PI/180),a=Math.max(t,2*r),o=!1;for(let t=0;t<4;t++){let t=!1;for(let n of e){if(n.max[0]<this.pos[0]-r||n.min[0]>this.pos[0]+r||n.max[2]<this.pos[2]-r||n.min[2]>this.pos[2]+r||n.max[1]<this.pos[1]||n.min[1]>this.pos[1]+a)continue;let e=n.tris;for(let n=0;n<e.length;n+=9){let s=this.pos[0],c=this.pos[1],l=this.pos[2];if(Math.max(e[n],e[n+3],e[n+6])<s-r||Math.min(e[n],e[n+3],e[n+6])>s+r||Math.max(e[n+1],e[n+4],e[n+7])<c||Math.min(e[n+1],e[n+4],e[n+7])>c+a||Math.max(e[n+2],e[n+5],e[n+8])<l-r||Math.min(e[n+2],e[n+5],e[n+8])>l+r)continue;let u=Km([s,c+r,l],[s,c+a-r,l],r,[e[n],e[n+1],e[n+2]],[e[n+3],e[n+4],e[n+5]],[e[n+6],e[n+7],e[n+8]]);if(!u||u.depth<=1e-5)continue;let d=u.n;if(d[1]>=i)this.pos[1]+=u.depth/d[1],this.vel[1]<0&&(this.vel[1]=0),o=!0;else{d[1]>.05&&(this.onSteep=!0),this.pos[0]+=d[0]*u.depth,this.pos[1]+=d[1]*u.depth,this.pos[2]+=d[2]*u.depth;let e=this.vel[0]*d[0]+this.vel[1]*d[1]+this.vel[2]*d[2];e<0&&(this.vel[0]-=d[0]*e,this.vel[1]-=d[1]*e,this.vel[2]-=d[2]*e)}t=!0}}if(!t)break}return o}meshesBlock(e,t){let n=this.settings.width/2,r=Math.max(t,2*n),[i,a,o]=this.pos;for(let t of e){if(t.max[0]<i-n||t.min[0]>i+n||t.max[2]<o-n||t.min[2]>o+n||t.max[1]<a||t.min[1]>a+r)continue;let e=t.tris;for(let t=0;t<e.length;t+=9){let s=Km([i,a+n,o],[i,a+r-n,o],n-.002,[e[t],e[t+1],e[t+2]],[e[t+3],e[t+4],e[t+5]],[e[t+6],e[t+7],e[t+8]]);if(s&&s.depth>1e-4)return!0}}return!1}update(e,t,n,r,i=zh,a=Bh){let o=this.settings,s=this.grounded,c=this.vel[1],l=this.swimming;this.swimming=!1,this.waterSurface=-1/0;let u=this.pos[1]+this.height*.5;for(let e of a)this.pos[0]>e.minX&&this.pos[0]<e.maxX&&this.pos[2]>e.minZ&&this.pos[2]<e.maxZ&&u>e.minY&&u<e.maxY&&(this.swimming=!0,this.waterSurface=Math.max(this.waterSurface,e.maxY));if(this.swimming&&!l&&c<-3&&this.events.push(`splash`),t.crouch)this.crouching=!0;else if(this.crouching){let e=this.box(o.height);!r.some(t=>Qm(e,t))&&!this.meshesBlock(i,o.height)&&(this.crouching=!1)}this.height=this.crouching?o.crouchHeight:o.height;let d=o.cameraMode===`chase`,f,p,m,h=1;if(d)this.facing=Uh(this.facing-t.moveX*(o.steerSpeed*Math.PI/180)*e),f=Math.sin(this.facing)*t.moveY,p=Math.cos(this.facing)*t.moveY,m=Math.min(1,Math.abs(t.moveY)),t.moveY<0&&(h=Hh);else{let e=Math.sin(n),r=Math.cos(n);f=-e*t.moveY+r*t.moveX,p=-r*t.moveY-e*t.moveX,m=Math.min(1,Math.hypot(t.moveX,t.moveY))}let g=Math.hypot(f,p);this.swimming&&(h*=Vh);let _=(this.crouching?o.crouchSpeed:t.run?o.runSpeed:o.walkSpeed)*h,v=g>1e-6?f/g*_*m:0,y=g>1e-6?p/g*_*m:0,b=(m>.01?o.acceleration:o.deceleration)*(this.grounded?1:o.airControl),x=v-this.vel[0],S=y-this.vel[2],C=Math.hypot(x,S),w=b*e;if(C<=w||C<1e-9?(this.vel[0]=v,this.vel[2]=y):(this.vel[0]+=x/C*w,this.vel[2]+=S/C*w),!d&&m>.1&&g>1e-6){let t=Uh(Math.atan2(f,p)-this.facing),n=o.turnSpeed*e;this.facing+=Math.abs(t)<=n?t:Math.sign(t)*n}let T=this.onSteep;if(this.onSteep=!1,this.grounded?(this.coyote=o.coyoteTime,this.airJumpUsed=!1):T&&this.vel[1]<=.5?this.coyote=o.coyoteTime:this.coyote-=e,this.jumpBuffer=t.jumpPressed?o.jumpBuffer:this.jumpBuffer-e,this.swimming){let n=Math.sqrt(2*o.gravity*o.jumpHeight);this.airJumpUsed=!1,this.jumping=!1;let r=this.pos[1]+this.height*.9>this.waterSurface;t.jumpPressed&&r?(this.vel[1]=n*.9,this.events.push(`jump`)):t.jumpHeld?this.vel[1]=Math.min(3.2,this.vel[1]+26*e):t.crouch&&(this.vel[1]=Math.max(-3.2,this.vel[1]-14*e)),this.jumpBuffer=0,this.coyote=0}else if(this.jumpBuffer>0){let e=Math.sqrt(2*o.gravity*o.jumpHeight);this.coyote>0?(this.vel[1]=e,this.coyote=0,this.jumpBuffer=0,this.jumping=!0,this.cutApplied=!1,this.grounded=!1,this.events.push(`jump`)):t.jumpPressed&&o.doubleJump&&!this.airJumpUsed&&(this.vel[1]=e,this.airJumpUsed=!0,this.jumpBuffer=0,this.jumping=!0,this.cutApplied=!1,this.events.push(`doubleJump`))}this.jumping&&!this.cutApplied&&!t.jumpHeld&&this.vel[1]>0&&(this.vel[1]*=o.jumpCut,this.cutApplied=!0),this.swimming||this.grounded?(this.glideReady=!1,this.gliding=!1):t.jumpHeld?this.gliding=o.glide&&this.glideReady&&this.vel[1]<0&&!this.jumping:(this.glideReady=!0,this.gliding=!1);let E=0;if(this.stepHold>0&&this.vel[1]<=0)this.stepHold-=e,this.vel[1]=0;else{this.stepHold=0;let t=o.gravity*(this.vel[1]<0?o.fallMultiplier:1),n=Math.max(-40,this.vel[1]-t*e);this.gliding&&(n=Math.max(n,-o.glideFall)),this.swimming&&(n=this.vel[1]-t*.12*e,n*=Math.max(0,1-2.6*e),n=Math.max(n,-3.2)),E=(this.vel[1]+n)*.5*e,this.vel[1]=n}let D=this.pos[0],O=this.pos[1],k=this.pos[2],A=this.vel[0]*e,j=this.vel[2]*e,M=v,N=y;if(this.moveAxis(0,A,r),this.moveAxis(2,j,r),this.grounded=!1,this.moveAxis(1,E,r),i.length>0){let e=this.resolveMeshes(i,this.height);if(!e&&s&&this.vel[1]<=0&&!this.standsOnSomething(r)){let t=this.pos[0],n=this.pos[1],a=this.pos[2],o=this.vel[0],s=this.vel[1],c=this.vel[2];this.pos[1]-=Rh,e=this.resolveMeshes(i,this.height);let l=this.box(this.height);(!e||r.some(e=>Qm(l,e)))&&(e=!1,this.pos=[t,n,a],this.vel=[o,s,c])}e&&(this.grounded=!0)}!this.grounded&&this.vel[1]<=0&&this.standsOnSomething(r)&&(this.grounded=!0),s&&o.stepHeight>.01&&(A!==0||j!==0)&&this.tryStepUp(D,O,k,A,j,M,N,r,i)&&(this.grounded=!0,this.stepHold=.12),this.stepHold>0&&(this.grounded=!0),this.grounded&&(this.jumping=!1,!s&&c<-4&&this.events.push(`land`))}tryStepUp(e,t,n,r,i,a,o,s,c){let l=Math.hypot(r,i);if(l<1e-6)return!1;let u=((this.pos[0]-e)*r+(this.pos[2]-n)*i)/l;if(u>l*.7)return!1;let d=this.settings.stepHeight,f={pos:[...this.pos],vel:[...this.vel],grounded:this.grounded},p=Math.max(u+l*.25,l*.5),m=a=>(this.pos=[e,t+a,n],s.some(e=>Qm(this.box(this.height),e))||this.meshesBlock(c,this.height)?!1:(this.moveAxis(0,r,s),this.moveAxis(2,i,s),c.length>0&&this.resolveMeshes(c,this.height),((this.pos[0]-e)*r+(this.pos[2]-n)*i)/l>=p)),h=()=>(this.pos=f.pos,this.vel=f.vel,this.grounded=f.grounded,!1);if(!m(d))return h();let g=0,_=d;for(let e=0;e<6;e++){let e=(g+_)/2;m(e)?_=e:g=e}if(!m(Math.min(d,_+.02)))return h();let v=[...this.pos],y=this.settings.width/2+.05;this.moveAxis(0,r/l*y,s),this.moveAxis(2,i/l*y,s),c.length>0&&this.resolveMeshes(c,this.height);let b=!1;this.grounded=!1;let x=(d+.1)/14;for(let e=0;e<14&&!b;e++)this.moveAxis(1,-x,s),(this.grounded||c.length>0&&this.resolveMeshes(c,this.height))&&(b=!0);let S=this.pos[1];return!b||S<t+.03?h():(this.pos=v,this.vel=[a,0,o],!0)}standsOnSomething(e){let t=this.box(this.height);return t.minY-=.02,t.maxY-=.02,e.some(e=>Qm(t,e))}moveAxis(e,t,n){if(t===0)return;let r=this.pos[e];this.pos[e]+=t;let i=this.settings.width/2;for(let r of n)Qm(this.box(this.height),r)&&(e===0?(this.pos[0]=t>0?r.minX-i:r.maxX+i,this.vel[0]=0):e===2?(this.pos[2]=t>0?r.minZ-i:r.maxZ+i,this.vel[2]=0):t>0?(this.pos[1]=r.minY-this.height-Xm*.5,this.vel[1]=0):(this.pos[1]=r.maxY,this.vel[1]=0,this.grounded=!0));Math.abs(this.pos[e]-r)>Math.abs(t)+.5&&(this.pos[e]=r,this.vel[e]=0)}},Gh=1/120,Kh=.1,qh=8;function Jh(e,t,n,r){return{boxes:e.boxes.filter(e=>e.maxX>=t-r&&e.minX<=t+r&&e.maxZ>=n-r&&e.minZ<=n+r),meshes:e.meshes.filter(e=>e.max[0]>=t-r&&e.min[0]<=t+r&&e.max[2]>=n-r&&e.min[2]<=n+r),liquids:e.liquids}}var Yh=30;function Xh(e){let t=1/0;for(let n of e)t=n.kind===`block`?Math.min(t,n.position[1]+il(n.mesh).min[1]):Math.min(t,n.position[1]);return Number.isFinite(t)?t:0}var Zh=class{constructor(e,t,n,r,i){X(this,`camera`,void 0),X(this,`textures`,void 0),X(this,`level`,void 0),X(this,`models`,void 0),X(this,`playerGroup`,new _t),X(this,`playerBody`,void 0),X(this,`controller`,void 0),X(this,`rig`,new bh),X(this,`playing`,!1),X(this,`paused`,!1),X(this,`input`,void 0),X(this,`touchMode`,!1),X(this,`colliders`,Mm),X(this,`eyes`,[]),X(this,`avatar`,void 0),X(this,`logic`,new ph),X(this,`audio`,new km),X(this,`hud`,null),X(this,`hudParent`,void 0),X(this,`removed`,new Set),X(this,`checkpoint`,null),X(this,`levelIndex`,0),X(this,`runStartLevel`,0),X(this,`live`,null),X(this,`moves`,[]),X(this,`chasers`,new Map),X(this,`invulnerable`,0),X(this,`clock`,0),X(this,`talking`,null),X(this,`fallLimit`,-80),X(this,`staticColliders`,Mm),X(this,`ended`,!1),X(this,`endActions`,[]),X(this,`onLevelShown`,void 0),X(this,`onDialogueEnd`,void 0),X(this,`onRestart`,void 0),X(this,`depth`,0),X(this,`shadow`,void 0),X(this,`bodyMat`,void 0),X(this,`visualHeight`,1),X(this,`accumulator`,0),X(this,`pendingJump`,!1),X(this,`project`,void 0),X(this,`getModel`,e=>this.project.models.find(t=>t.id===e)),this.camera=t,this.textures=r,this.models=new dh(e=>this.project.models.find(t=>t.id===e),r),this.level=new Ih(r,this.models),e.add(this.level.group),this.avatar=new Dm(this.models,r),this.bodyMat=new Dr({color:i.player.color}),this.playerBody=new Kn(new mr(1,1,1),this.bodyMat),this.playerBody.name=`Player`,this.playerGroup.add(this.playerBody);let a=new Pn({color:`#1b1b24`});for(let e=0;e<2;e++){let e=new Kn(new mr(1,1,1),a);this.eyes.push(e),this.playerGroup.add(e)}this.playerGroup.add(this.avatar.root),e.add(this.playerGroup);let o=new hr(.5,24);o.rotateX(-Math.PI/2),this.shadow=new Kn(o,new Pn({color:`#000000`,transparent:!0,opacity:.35,depthWrite:!1})),this.shadow.renderOrder=1,e.add(this.shadow),this.input=new Ch(n),this.hudParent=n.parentElement,this.controller=new Wh(i.player),this.load(i)}load(e,t=0){this.project=e,this.removed.clear(),this.moves=[],this.live=null,this.ended=!1,this.hud?.hide(),this.textures.dropProjectCache(),this.models.clear(),this.controller=new Wh(e.player),this.levelIndex=Math.min(Math.max(0,t),e.levels.length-1),this.level.rebuild(this.objects()),this.refreshColliders(),this.resetPlayer(),this.onLevelShown?.(e.levels[this.levelIndex])}showLevel(e){this.playing||(this.levelIndex=Math.min(Math.max(0,e),this.project.levels.length-1),this.level.rebuild(this.objects()),this.refreshColliders(),this.resetPlayer(),this.onLevelShown?.(this.project.levels[this.levelIndex]))}get currentLevelIndex(){return this.levelIndex}objects(){return this.live??this.project.levels[this.levelIndex].objects}dynamicIds(){let e=new Set(this.moves.map(e=>e.id));for(let t of this.chasers.keys())e.add(t);return e}refreshColliders(){let e=this.dynamicIds();this.staticColliders=Lh(this.objects().filter(t=>!this.removed.has(t.id)&&!e.has(t.id)),this.getModel),this.updateMovingColliders()}updateMovingColliders(){let e=this.dynamicIds();if(e.size===0){this.colliders=this.staticColliders;return}let t=Lh(this.objects().filter(t=>e.has(t.id)&&!this.removed.has(t.id)),this.getModel);this.colliders={boxes:[...this.staticColliders.boxes,...t.boxes],meshes:[...this.staticColliders.meshes,...t.meshes],liquids:[...this.staticColliders.liquids,...t.liquids]}}syncSpawn(){let e=this.project.levels[this.levelIndex];this.controller.spawn=[e.spawn[0],e.spawn[1],e.spawn[2]],this.controller.spawnYaw=e.spawnYaw}resetPlayer(){this.syncSpawn(),this.controller.reset(),this.visualHeight=this.controller.height,this.bodyMat.color.set(this.project.player.color),this.syncVisual(0)}prepareAudio(){this.audio.setSounds(this.project.sounds,this.project.settings.volume),this.audio.preload(this.project.settings.music)}startPlay(e=this.levelIndex){this.playing=!0,this.paused=!1,this.input.attach(),this.input.clear(),this.audio.setSounds(this.project.sounds,this.project.settings.volume),this.audio.resume(),this.audio.playMusic(this.project.settings.music),this.hud??(this.hud=this.hudParent?new jm(this.hudParent):null),this.runStartLevel=Math.min(Math.max(0,e),this.project.levels.length-1),this.depth=0,this.beginRun()}beginRun(){this.hud?.hideEnd(),this.ended=!1,this.enterLevel(this.runStartLevel,!0)}restartRun(){this.playing&&(this.depth=0,this.beginRun(),this.onRestart?.())}enterLevel(e,t){this.levelIndex=e;let n=this.project.levels[e];this.live=structuredClone(n.objects),this.fallLimit=Xh(this.live)-Yh,this.removed.clear(),this.moves=[],this.chasers.clear(),this.talking=null,this.hud?.hideDialogue(),this.invulnerable=0,this.checkpoint=null,this.level.rebuild(this.live,!0),this.refreshColliders(),this.resetPlayer(),this.onLevelShown?.(n),this.rig.reset(this.controller.facing),this.accumulator=0,this.pendingJump=!1,this.updateCamera(0);let r=this.logic.begin(this.project.variables,this.live,this.getModel,t);t&&this.hud?.show(this.project.variables,this.logic.store),this.project.levels.length>1&&this.hud?.toast(n.name,2.5),this.applyEffects(r)}setTouch(e){this.input.touch=e,this.touchMode=e!==null}setPaused(e){this.paused!==e&&(this.paused=e,this.playing&&this.input.clear())}stopPlay(){this.playing=!1,this.paused=!1,this.ended=!1,this.input.detach(),this.hud?.hide(),this.audio.stopMusic(),this.live=null,this.moves=[],this.chasers.clear(),this.talking=null,this.invulnerable=0,this.playerGroup.visible=!0,this.removed.clear(),this.levelIndex=this.runStartLevel,this.level.rebuild(this.objects()),this.refreshColliders(),this.resetPlayer(),this.onLevelShown?.(this.project.levels[this.levelIndex])}playPlayerSounds(){let e=this.controller.events;if(e.length===0)return;let t=this.project.player;for(let n of e)n===`jump`?this.audio.play(t.soundJump):n===`doubleJump`?this.audio.play(t.soundDoubleJump):n===`splash`?this.audio.play(t.soundLand,.6):this.audio.play(t.soundLand);e.length=0}touchBox(){let e=this.controller,t=this.project.player.width/2+.15;return{minX:e.pos[0]-t,maxX:e.pos[0]+t,minY:e.pos[1]-.05,maxY:e.pos[1]+e.height+.05,minZ:e.pos[2]-t,maxZ:e.pos[2]+t}}finish(e,t){this.ended||(this.ended=!0,this.input.clear(),document.pointerLockElement&&document.exitPointerLock(),this.hud?.showEnd(e,t,[{label:`Play again`,run:()=>this.restartRun()},...this.endActions]))}interactBox(){let e=this.controller,t=this.project.player.width/2+1;return{minX:e.pos[0]-t,maxX:e.pos[0]+t,minY:e.pos[1]-.2,maxY:e.pos[1]+e.height+.2,minZ:e.pos[2]-t,maxZ:e.pos[2]+t}}get isTalking(){return this.talking!==null}advanceTalk(){let e=this.talking;e?.typer&&!e.typer.done?(e.typer.finish(),this.hud?.setDialogueShown(e.typer.shown)):this.nextLine()}get endScreen(){return this.hud?.endScreen??null}get padActive(){return this.input.padActive}get isTyping(){let e=this.talking?.typer;return!!e&&!e.done}chooseAnswer(e){this.answer(e)}voiceOf(e){return{sound:e.voice===`none`?null:e.voice||Eu.talk,pitch:e.pitch??1,speed:e.speed??30}}startTalk(e){this.talking=e,this.input.clear(),e.options&&document.pointerLockElement&&document.exitPointerLock(),this.showTalk()}showTalk(){let e=this.talking;if(!e)return;let t=e.lines[e.index];if(e.typer=new Eh(t,e.voice.speed),e.blips=e.voice.sound?new Dh(e.voice.speed,e.voice.pitch):null,!this.hud)return;let n=e.index>=e.lines.length-1;if(e.options){let n=this.input.padActive?`D-pad: choose · Cross: pick`:this.touchMode?``:`↑ ↓ choose · Enter or 1-4: pick`;e.selected=0,this.hud.showDialogue(e.speaker,t,n,e.options.map(e=>e.label),e=>this.answer(e),()=>this.advanceTalk(),e.typer.shown)}else{let r=n?`close`:`next`,i=this.input.padActive?`Cross / Triangle: ${r}`:this.touchMode?`Tap: ${r}`:`Interact / Jump: ${r}`;this.hud.showDialogue(e.speaker,t,i,[],()=>{},()=>this.advanceTalk(),e.typer.shown)}}talkTick(e){let t=this.talking;if(!t?.typer||t.typer.done)return;let n=t.typer.update(e);if(n!==``&&(this.hud?.setDialogueShown(t.typer.shown),t.voice.sound&&t.blips))for(let e of t.blips.rates(n))this.audio.play(t.voice.sound,e)}nextLine(){let e=this.talking;e&&!e.options&&(e.index++,e.index>=e.lines.length?this.endTalk():this.showTalk())}answer(e){let t=this.talking;if(!t?.options||!t.options[e])return;let n=this.logic.runActions(t.objectId,t.options[e].actions);this.endTalk(),this.applyEffects(n)}endTalk(){this.talking=null,this.hud?.hideDialogue(),this.input.clear(),this.onDialogueEnd?.()}hurtPlayer(e,t,n,r){if(this.invulnerable>0||this.ended)return;t>0&&n&&this.logic.store.add(n,-t),this.invulnerable=1.2;let i=this.objects().find(t=>t.id===e),a=this.controller;if(r>0&&i){let e=a.pos[0]-i.position[0],t=a.pos[2]-i.position[2],n=Math.hypot(e,t)||1;e/=n,t/=n,a.vel=[e*r,Math.max(a.vel[1],5.5),t*r],a.grounded=!1}this.hud?.flash()}advanceChasers(e){if(this.chasers.size===0)return;let t=this.objects(),n=this.controller.pos;for(let[r,i]of this.chasers){let a=t.find(e=>e.id===r);if(!a||this.removed.has(r)){this.chasers.delete(r);continue}let o=fh(a,this.getModel),s=o?Math.max(.15,Math.min(o.maxX-o.minX,o.maxZ-o.minZ)/2):.4,c=o?Math.max(0,a.position[1]-o.minY):0,[l,u,d]=a.position,f=n[0]-l,p=n[2]-d,m=Math.hypot(f,p),h=l,g=d;if(m<=i.range&&m>s+.35){let t=Math.min(i.speed*e,m-(s+.35));h=l+f/m*t,g=d+p/m*t,a.rotation=[a.rotation[0],Math.atan2(f,p)*180/Math.PI,a.rotation[2]]}let _=this.groundAt(h,g,u-c+.5,s);_!==null&&_-(u-c)>.5&&(h=l,g=d);let v=this.groundAt(h,g,u-c+.5,s),y=u-c;if(v!==null&&y<=v+.02)u=v+c,i.vy=0;else if(i.vy=Math.max(-30,i.vy-30*e),u=v===null?u+i.vy*e:Math.max(v+c,u+i.vy*e),u<-80){this.removed.add(r),this.level.remove(r),this.chasers.delete(r);continue}l=h,d=g,this.placeObject(a,[l,u,d]),this.level.syncTransform(a)}this.updateMovingColliders()}groundAt(e,t,n,r){let i=eh(e,t,r,n,this.staticColliders.boxes),a=Jm(e,t,n,this.staticColliders.meshes);return i===null?a:a===null?i:Math.max(i,a)}applyEffects(e){if(!(this.depth>8)){this.depth++;try{this.applyEffectList(e)}finally{this.depth--}}}applyEffectList(e){let t=!1;for(let{objectId:n,effect:r}of e)switch(r.type){case`destroy`:{let e=r.target||n;this.removed.add(e),this.level.remove(e),this.moves=this.moves.filter(t=>t.id!==e),this.chasers.delete(e),t=!0;break}case`move`:case`patrol`:{let e=r.target||n,i=this.objects().find(t=>t.id===e);if(!i||this.removed.has(e))break;let a=[i.position[0],i.position[1],i.position[2]],o=[a[0]+r.offset[0],a[1]+r.offset[1],a[2]+r.offset[2]];this.moves=this.moves.filter(t=>t.id!==e),r.type===`move`&&r.seconds<=0?this.placeObject(i,o):this.moves.push({id:e,from:a,to:o,t:0,duration:Math.max(.05,r.seconds),pingpong:r.type===`patrol`}),t=!0;break}case`chase`:{let e=r.target||n;if(this.removed.has(e)||!this.objects().some(t=>t.id===e))break;this.chasers.set(e,{speed:r.speed,range:r.range,vy:0}),t=!0;break}case`hurt`:this.hurtPlayer(n,r.amount,r.variable,r.knockback);break;case`bounce`:this.controller.launch(r.strength);break;case`dialogue`:this.talking||this.startTalk({objectId:n,speaker:r.speaker,lines:r.lines,index:0,voice:this.voiceOf(r)});break;case`choice`:this.talking||this.startTalk({objectId:n,speaker:r.speaker??``,lines:[r.question],index:0,options:r.options,voice:this.voiceOf(r)});break;case`animate`:{let e=this.objects().find(e=>e.id===(r.target||n));e&&e.kind===`model`&&!this.removed.has(e.id)&&(e.animation=r.animation||null,this.level.upsert(e));break}case`message`:this.hud?.toast(r.text,r.seconds);break;case`sound`:this.audio.play(r.sound);break;case`checkpoint`:this.checkpoint=[this.controller.pos[0],this.controller.pos[1],this.controller.pos[2]];break;case`respawn`:{let e=this.checkpoint??this.project.levels[this.levelIndex].spawn;this.controller.pos=[e[0],e[1],e[2]],this.controller.vel=[0,0,0];break}case`end`:this.finish(r.title,r.text);return;case`level`:{let e=r.level?this.project.levels.findIndex(e=>e.id===r.level):this.levelIndex+1;if(e<0)break;e>=this.project.levels.length?this.finish(`You win!`,``):this.enterLevel(e,!1);return}case`restart`:this.beginRun();return}t&&this.refreshColliders()}placeObject(e,t){let n=t[0]-e.position[0],r=t[1]-e.position[1],i=t[2]-e.position[2];e.position=[t[0],t[1],t[2]],this.level.syncTransform(e),this.logic.shift(e.id,n,r,i)}playerRidesOn(e){if(!e.collide||!this.controller.grounded)return!1;let t=fh(e,this.getModel);if(!t)return!1;let n=this.controller,r=this.project.player.width/2,i=n.pos[1]-t.maxY;return i>-.1&&i<.15&&n.pos[0]>t.minX-r&&n.pos[0]<t.maxX+r&&n.pos[2]>t.minZ-r&&n.pos[2]<t.maxZ+r}advanceMoves(e){if(this.moves.length===0)return;let t=this.objects(),n=!1;for(let r of this.moves){let i=t.find(e=>e.id===r.id);if(!i){r.t=r.duration,r.pingpong=!1,n=!0;continue}let a=this.playerRidesOn(i),o=[i.position[0],i.position[1],i.position[2]];r.t=Math.min(r.duration,r.t+e);let s=r.t/r.duration,c=s*s*(3-2*s);this.placeObject(i,[r.from[0]+(r.to[0]-r.from[0])*c,r.from[1]+(r.to[1]-r.from[1])*c,r.from[2]+(r.to[2]-r.from[2])*c]),a&&(this.controller.pos[0]+=i.position[0]-o[0],this.controller.pos[1]+=i.position[1]-o[1],this.controller.pos[2]+=i.position[2]-o[2]),r.t>=r.duration&&(r.pingpong?([r.from,r.to]=[r.to,r.from],r.t=0):n=!0)}n?(this.moves=this.moves.filter(e=>e.pingpong||e.t<e.duration),this.refreshColliders()):this.updateMovingColliders()}update(e){if(!this.playing){this.avatar.sync(this.project.player),this.avatar.update(Math.min(e,Kh),xm,this.project.player),this.level.animate(Math.min(e,Kh));return}if(this.paused)return;if(this.ended){this.level.animate(Math.min(e,Kh));return}let t=Math.min(e,Kh);this.clock+=t;let n=this.input.poll(this.project.settings,t);if(this.talking){if(this.level.animate(t),this.talkTick(t),this.talking.options){let e=this.talking;if(n.answer>=0)this.isTyping?this.advanceTalk():this.answer(n.answer);else if(n.navY!==0&&!this.isTyping){let t=e.options.length;e.selected=(((e.selected??0)+n.navY)%t+t)%t,this.hud?.selectAnswer(e.selected)}else n.confirm&&(this.isTyping?this.advanceTalk():this.answer(e.selected??0))}else(n.interactPressed||n.jumpPressed||n.confirm)&&this.advanceTalk();this.updateCamera(t);return}this.invulnerable>0&&(this.invulnerable=Math.max(0,this.invulnerable-t)),this.playerGroup.visible=this.invulnerable<=0||Math.floor(this.clock*12)%2==0;let{mouseSensitivity:r,invertY:i}=this.project.settings,a=this.project.player.cameraMode===`chase`;this.rig.look(n.lookX,n.lookY,r,i,!a),a&&this.controller.turnRight(n.lookX*gh*r),n.jumpPressed&&(this.pendingJump=!0);let o=Jh(this.colliders,this.controller.pos[0],this.controller.pos[2],qh);for(this.accumulator+=t;this.accumulator>=Gh;)this.controller.update(Gh,{moveX:n.moveX,moveY:n.moveY,jumpPressed:this.pendingJump,jumpHeld:n.jumpHeld,run:n.run,crouch:n.crouch},this.rig.yaw,o.boxes,o.meshes,o.liquids),this.pendingJump=!1,this.accumulator-=Gh,this.playPlayerSounds();if(this.controller.pos[1]<this.fallLimit&&!this.ended&&(this.applyEffects([{objectId:``,effect:{type:`respawn`}}]),this.rig.reset(this.controller.facing)),this.syncVisual(t),this.level.animate(t),this.advanceMoves(t),this.advanceChasers(t),this.applyEffects(this.logic.update(this.touchBox(),this.removed,t,this.controller.vel[1])),n.interactPressed&&!this.ended&&this.applyEffects(this.logic.interact(this.interactBox(),this.removed)),this.hud&&!this.ended){let e=this.project.settings.controls.interact[0],t=this.logic.canInteract(this.interactBox(),this.removed);this.hud.setPrompt(t&&(this.touchMode||this.input.padActive||e)?this.input.padActive?`Triangle: interact`:this.touchMode?`Use: interact`:`${oc(e)}: interact`:null)}if(this.hud?.update(this.logic.store),this.hud){let e=this.camera.position,t=this.colliders.liquids.some(t=>e.x>t.minX&&e.x<t.maxX&&e.z>t.minZ&&e.z<t.maxZ&&e.y>t.minY&&e.y<t.maxY);this.hud.tint(t?`rgba(30, 100, 200, 0.38)`:null)}let s=this.controller,c={grounded:s.grounded,crouching:s.crouching,speed:Math.hypot(s.vel[0],s.vel[2]),vy:s.vel[1],gliding:s.gliding,swimming:s.swimming};this.avatar.update(t,c,this.project.player),this.updateCamera(t)}syncVisual(e){let t=this.controller,n=this.project.player,r=n.width;this.visualHeight+=(t.height-this.visualHeight)*(e>0?1-Math.exp(-25*e):1);let i=this.visualHeight;this.playerGroup.position.set(t.pos[0],t.pos[1],t.pos[2]),this.playerGroup.rotation.y=t.facing,this.playerBody.scale.set(r,i,r),this.playerBody.position.y=i/2,this.avatar.sync(n);let a=this.avatar.present;this.bodyMat.visible=!a,this.playerBody.visible=!0;let o=this.avatar.fitScale;this.avatar.root.scale.set(o,o*(this.avatar.rigged?1:i/n.height),o);let s=r*.16,c=i*.22;this.eyes.forEach((e,t)=>{e.visible=!a,e.scale.set(s,c,.04),e.position.set((t===0?-1:1)*r*.2,i*.62,r/2+.005)});let l=eh(t.pos[0],t.pos[2],r/2,t.pos[1],this.colliders.boxes),u=Jm(t.pos[0],t.pos[2],t.pos[1],this.colliders.meshes),d=l===null?u:u===null?l:Math.max(l,u),f=this.project.levels[this.levelIndex]?.look.shadows!==!1;if(d===null||f)this.shadow.visible=!1;else{this.shadow.visible=!0;let e=t.pos[1]-d,n=Math.max(.4,1-e*.08);this.shadow.position.set(t.pos[0],d+.02,t.pos[2]),this.shadow.scale.set(r*1.3*n,1,r*1.3*n),this.shadow.material.opacity=.35*Math.max(.3,1-e*.06)}}updateCamera(e){let t=this.project.player.cameraDistance+qh,n=Jh(this.colliders,this.controller.pos[0],this.controller.pos[2],t);this.rig.update(e,this.camera,this.controller.pos,this.controller.facing,this.visualHeight,this.project.player,n.boxes,n.meshes)}stats(){let e=this.controller;return{speed:Math.hypot(e.vel[0],e.vel[2]),grounded:e.grounded,crouching:e.crouching,pos:[e.pos[0],e.pos[1],e.pos[2]]}}};function Qh(e,t){return!t&&e.background===`color`?{background:e.backgroundColor}:!t&&e.background===`picture`&&e.backgroundImage?{background:`${e.backgroundColor} url("${e.backgroundImage}") center / cover no-repeat`}:{background:`rgba(20, 22, 27, 0.86)`}}function $h(e,...t){let n=document.createElement(`div`);return Object.assign(n.style,e),n.append(...t),n}function eg(e,t,n,r){let i=document.createElement(`button`);i.type=`button`,i.textContent=e;let a=t===`quiet`;return Object.assign(i.style,{font:`inherit`,fontSize:a?`15px`:`20px`,fontWeight:a?`400`:`600`,width:a?`auto`:`min(260px, 80%)`,padding:a?`6px 14px`:`12px 20px`,margin:a?`10px 0 0`:`6px 0`,border:a?`0`:`2px solid ${n}`,borderRadius:`10px`,background:t===`primary`?n:a?`transparent`:`rgba(0, 0, 0, 0.28)`,color:t===`primary`?_c(n):n,cursor:`pointer`}),i.addEventListener(`mouseenter`,()=>i.style.filter=`brightness(1.15)`),i.addEventListener(`mouseleave`,()=>i.style.filter=``),i.addEventListener(`click`,r),i}function tg(e){let{menu:t}=e,n=$h({display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,width:`100%`,boxSizing:`border-box`,padding:`0 24px`});if(t.logo){let r=document.createElement(`img`);r.src=t.logo,r.alt=e.title,r.draggable=!1,Object.assign(r.style,{width:`${t.logoSize}%`,height:`auto`,maxHeight:`44vh`,objectFit:`contain`,margin:`0 0 30px`,imageRendering:`auto`}),r.addEventListener(`load`,()=>{r.naturalWidth<=400&&(r.style.imageRendering=`pixelated`)}),n.append(r)}else n.append($h({fontSize:`44px`,fontWeight:`700`,margin:`0 0 28px`,textShadow:`0 2px 8px rgba(0, 0, 0, 0.5)`},e.title));e.paused&&n.append($h({fontSize:`16px`,color:`#9aa3b2`,margin:`-14px 0 16px`},`Paused`));let r=eg(e.paused?`Continue`:t.startLabel,`primary`,t.accent,e.onStart);return n.append(r,eg(t.settingsLabel,`secondary`,t.accent,e.onSettings)),e.onFullscreen&&n.append(eg(`Fullscreen`,`quiet`,t.accent,e.onFullscreen)),n}var ng=`button:not([disabled]), input:not([disabled]):not([type=file]):not([type=hidden]), select:not([disabled])`,rg=`polyhop-menu-nav`;function ig(e){return e.isConnected&&e.getClientRects().length>0}var ag=class{constructor(e){if(X(this,`options`,void 0),X(this,`on`,!1),X(this,`current`,null),X(this,`onKey`,e=>{if(this.options.blocked()||e.altKey||e.ctrlKey||e.metaKey)return;let t=this.layer();if(t)switch(e.code){case`ArrowDown`:case`ArrowUp`:e.preventDefault(),this.move(t,e.code===`ArrowDown`?1:-1);break;case`ArrowLeft`:case`ArrowRight`:e.preventDefault(),this.adjust(t,e.code===`ArrowRight`?1:-1)}}),this.options=e,!document.getElementById(rg)){let e=document.createElement(`style`);e.id=rg,e.textContent=`[data-nav="1"]{outline:3px solid #fff !important;outline-offset:2px;border-radius:8px}`,document.head.append(e)}window.addEventListener(`keydown`,this.onKey),window.addEventListener(`pointerdown`,()=>this.hide(),!0)}layer(){for(let e of this.options.layers())if(e&&ig(e)&&this.items(e).length>0)return e;return null}items(e){return Array.from(e.querySelectorAll(ng)).filter(ig)}hide(){this.on=!1,this.mark(null)}mark(e){this.current&&this.current!==e&&this.current.removeAttribute(`data-nav`),this.current=e,e&&(e.setAttribute(`data-nav`,`1`),e.focus({preventScroll:!0}))}position(e){let t=this.items(e),n=document.activeElement,r=this.current?t.indexOf(this.current):-1;return r<0&&n&&e.contains(n)&&(r=t.indexOf(n)),{items:t,index:r}}move(e,t){let{items:n,index:r}=this.position(e);if(n.length===0)return;let i=!this.on||r<0?Math.max(0,r):(r+t+n.length)%n.length;this.on=!0,this.mark(n[i])}adjust(e,t){let{items:n,index:r}=this.position(e),i=r>=0?n[r]:void 0;if(!i||!this.on)this.move(e,t);else if(i instanceof HTMLInputElement&&i.type===`range`){let e=Number(i.min||0),n=Number(i.max||100),r=Math.max(Number(i.step)||1,(n-e)/20);i.value=String(Math.min(n,Math.max(e,Number(i.value)+t*r))),i.dispatchEvent(new Event(`input`,{bubbles:!0})),i.dispatchEvent(new Event(`change`,{bubbles:!0}))}else if(i instanceof HTMLSelectElement){let e=Math.min(i.options.length-1,Math.max(0,i.selectedIndex+t));e!==i.selectedIndex&&(i.selectedIndex=e,i.dispatchEvent(new Event(`change`,{bubbles:!0})))}else if(i instanceof HTMLInputElement&&i.type===`checkbox`){let e=t>0;i.checked!==e&&i.click()}}activate(e){this.on||this.move(e,0);let{items:t,index:n}=this.position(e),r=n>=0?t[n]:void 0;r&&(r instanceof HTMLSelectElement?(r.selectedIndex=(r.selectedIndex+1)%r.options.length,r.dispatchEvent(new Event(`change`,{bubbles:!0}))):r instanceof HTMLInputElement&&r.type===`range`||r.click())}back(e){e.querySelector(`[data-nav-back]`)?.click()}update(e){let t=this.layer();if(!t)this.on&&this.hide();else{if(this.on&&this.current&&!this.current.isConnected){let{items:e}=this.position(t);this.mark(e[0]??null)}this.options.blocked()||(e.navY!==0&&this.move(t,e.navY),e.navX!==0&&this.adjust(t,e.navX),e.pressed(Qs.cross)&&this.activate(t),e.pressed(Qs.circle)&&this.back(t))}}},og=.2,sg=[`Escape`,`KeyM`,`Digit1`,`Digit2`,`Digit3`,`Digit4`],cg=(e,t,n)=>Math.min(n,Math.max(t,e));function lg(e){let t=e&&typeof e==`object`?e:{},n={};if(typeof t.volume==`number`&&Number.isFinite(t.volume)&&(n.volume=cg(t.volume,0,1)),typeof t.muted==`boolean`&&(n.muted=t.muted),typeof t.mouseSensitivity==`number`&&Number.isFinite(t.mouseSensitivity)&&(n.mouseSensitivity=cg(t.mouseSensitivity,og,3)),typeof t.invertY==`boolean`&&(n.invertY=t.invertY),typeof t.renderScale==`number`&&fp.includes(t.renderScale)&&(n.renderScale=t.renderScale),t.controls&&typeof t.controls==`object`){let e=t.controls,r={};for(let t of pp){let n=e[t];if(!Array.isArray(n))continue;let i=n.filter(e=>typeof e==`string`&&e.length>0&&e.length<32&&!sg.includes(e));i.length>0&&(r[t]=[...new Set(i)].slice(0,3))}Object.keys(r).length>0&&(n.controls=r)}return n}function ug(e,t){let n=structuredClone(e.controls);for(let e of pp){let r=t.controls?.[e];r&&r.length>0&&(n[e]=[...r])}return{...e,controls:n,volume:t.volume??e.volume,mouseSensitivity:t.mouseSensitivity??e.mouseSensitivity,invertY:t.invertY??e.invertY,renderScale:t.renderScale??e.renderScale}}function dg(e,t,n){let r=structuredClone(e),i=e[t].filter(e=>e!==n);r[t]=[n];for(let e of pp){if(e===t||!r[e].includes(n))continue;let a=r[e].filter(e=>e!==n);a.length===0&&i.length>0&&a.push(i[0]),r[e]=a}return r}function fg(e,t){let n={};for(let r of pp){let i=e[r],a=t[r];(i.length!==a.length||i.some((e,t)=>e!==a[t]))&&(n[r]=[...a])}return n}function pg(){try{return window.localStorage}catch{return null}}function mg(e){return`polyhop:prefs:${e}`}function hg(e,t){try{let n=e?.getItem(t);return n?lg(JSON.parse(n)):{}}catch{return{}}}function gg(e,t,n){try{Object.keys(n).length===0?e?.removeItem(t):e?.setItem(t,JSON.stringify(n))}catch{}}function _g(e){let t=/-(\d+)\.[a-z]+$/i.exec(e),n=t?parseInt(t[1],10):16;return n>0?n:16}function vg(e){e.colorSpace=ee,e.magFilter=f,e.minFilter=f,e.generateMipmaps=!1,e.wrapS=e.wrapT=u}var yg=class{constructor(){X(this,`urls`,new Map),X(this,`builtins`,new Map),X(this,`project`,new Map),X(this,`getProjectTextures`,()=>[])}bind(e){this.getProjectTextures=e,this.dropProjectCache()}dropProjectCache(){for(let e of this.project.values())e.info.texture.dispose();this.project.clear()}register(e,t){this.urls.set(e,t),this.builtins.delete(e)}async preload(){await Promise.all([...this.urls.entries()].filter(([e])=>!this.builtins.has(e)).map(async([e,t])=>{let n=await bg(t),r=new Le(n);vg(r),r.needsUpdate=!0,this.builtins.set(e,{name:e,width:n.naturalWidth,height:n.naturalHeight,tileSize:_g(e),texture:r,editable:!1})}))}names(){let e=this.getProjectTextures().map(e=>e.name),t=new Set(e);return[...e,...[...this.urls.keys()].filter(e=>this.builtins.has(e)&&!t.has(e))]}isProjectTexture(e){return this.getProjectTextures().some(t=>t.name===e)}isBuiltin(e){return this.builtins.has(e)}get(e){let t=this.getProjectTextures().find(t=>t.name===e);return t?this.projectInfo(t).info:this.builtins.get(e)??null}pixels(e){return this.getProjectTextures().find(t=>t.name===e)?.pixels??null}tileCoverage(e,t,n){let r=this.get(e);if(!r||(t+1)*r.tileSize>r.width||(n+1)*r.tileSize>r.height)return 0;let i=this.pixels(e)??this.builtinPixels(e);return i?i.coverage(t*r.tileSize,n*r.tileSize,r.tileSize,r.tileSize):0}atlasWithTile(e,t){return this.names().find(n=>this.tileCoverage(n,e,t)>=.5)??null}builtinPixels(e){let t=this.builtins.get(e);if(!t)return null;let n=document.createElement(`canvas`);n.width=t.width,n.height=t.height;let r=n.getContext(`2d`,{willReadFrequently:!0});r.drawImage(t.texture.image,0,0);let i=r.getImageData(0,0,t.width,t.height).data;return new lp(t.width,t.height,new Uint8ClampedArray(i))}touch(e,t){let n=this.getProjectTextures().find(t=>t.name===e);if(!n)return;let r=this.projectInfo(n),i=r.canvas.getContext(`2d`),a=new ImageData(n.pixels.data,n.pixels.w,n.pixels.h);if(t){let e=Math.max(0,t.x),r=Math.max(0,t.y),o=Math.min(n.pixels.w-e,t.w),s=Math.min(n.pixels.h-r,t.h);o>0&&s>0&&i.putImageData(a,0,0,e,r,o,s)}else i.putImageData(a,0,0);r.info.texture.needsUpdate=!0}projectInfo(e){let t=this.project.get(e.name);if(t&&t.pixels===e.pixels&&t.info.width===e.pixels.w&&t.info.height===e.pixels.h)return t.info.tileSize=e.tileSize,t;t?.info.texture.dispose();let n=document.createElement(`canvas`);n.width=e.pixels.w,n.height=e.pixels.h,n.getContext(`2d`).putImageData(new ImageData(e.pixels.data,e.pixels.w,e.pixels.h),0,0);let r=new ur(n);vg(r),r.needsUpdate=!0;let i={pixels:e.pixels,canvas:n,info:{name:e.name,width:e.pixels.w,height:e.pixels.h,tileSize:e.tileSize,texture:r,editable:!0}};return this.project.set(e.name,i),i}};function bg(e){return new Promise((t,n)=>{let r=new Image;r.onload=()=>t(r),r.onerror=()=>n(Error(`Failed to load texture: ${e}`)),r.src=e})}var xg=.45;function Sg(e,t,n){let r=document.createElement(`div`);Object.assign(r.style,{position:`absolute`,inset:`0`,zIndex:`60`,background:t.background,display:`flex`,alignItems:`center`,justifyContent:`center`,opacity:`0`,transition:`opacity ${xg}s ease`,cursor:`pointer`});let i=document.createElement(`img`);i.src=t.image,i.alt=``,i.draggable=!1,Object.assign(i.style,{width:`100%`,height:`100%`,objectFit:`contain`,imageRendering:`auto`}),i.addEventListener(`load`,()=>{i.naturalWidth<=800&&(i.style.imageRendering=`pixelated`)}),r.append(i),e.append(r);let a=!1,o=[],s=()=>{a||(a=!0,o.forEach(e=>window.clearTimeout(e)),window.removeEventListener(`keydown`,s,!0),r.style.opacity=`0`,window.setTimeout(()=>{r.remove(),n()},xg*1e3))};return r.addEventListener(`pointerdown`,s),window.addEventListener(`keydown`,s,!0),window.requestAnimationFrame(()=>{r.style.opacity=`1`}),o.push(window.setTimeout(s,(t.seconds+xg)*1e3)),s}function Cg(e,t,n,r=.15){let i=Math.hypot(e,t);if(i===0||n<=0)return{x:0,y:0};let a=Math.min(1,i/n);if(a<r)return{x:0,y:0};let o=(a-r)/(1-r);return{x:e/i*o,y:t/i*o}}var wg=class{constructor(){X(this,`stickRadius`,56),X(this,`lookScale`,1.7),X(this,`fingers`,new Map),X(this,`lookX`,0),X(this,`lookY`,0),X(this,`edges`,new Set)}down(e,t,n,r){if(r===`move`)for(let[e,t]of this.fingers)t.role===`move`&&this.fingers.delete(e);this.fingers.set(e,{role:r,x0:t,y0:n,x:t,y:n}),r!==`move`&&r!==`look`&&this.edges.add(r)}move(e,t,n){let r=this.fingers.get(e);r&&(r.role===`look`&&(this.lookX+=(t-r.x)*this.lookScale,this.lookY+=(n-r.y)*this.lookScale),r.x=t,r.y=n)}up(e){this.fingers.delete(e)}release(){this.fingers.clear(),this.edges.clear(),this.lookX=this.lookY=0}stick(){for(let e of this.fingers.values())if(e.role===`move`)return{x0:e.x0,y0:e.y0,x:e.x,y:e.y};return null}isHeld(e){for(let t of this.fingers.values())if(t.role===e)return!0;return!1}sample(){let e=0,t=0;for(let n of this.fingers.values()){if(n.role!==`move`)continue;let r=Cg(n.x-n.x0,n.y-n.y0,this.stickRadius);e=r.x,t=-r.y}let n={moveX:e,moveY:t,lookX:this.lookX,lookY:this.lookY,jump:this.isHeld(`jump`)||this.edges.has(`jump`),run:this.isHeld(`run`)||this.edges.has(`run`),crouch:this.isHeld(`crouch`)||this.edges.has(`crouch`),interact:this.isHeld(`interact`)||this.edges.has(`interact`),jumpPressed:this.edges.has(`jump`),interactPressed:this.edges.has(`interact`)};return this.edges.clear(),this.lookX=0,this.lookY=0,n}};function Tg(){try{return new URLSearchParams(location.search).has(`touch`)?!0:navigator.maxTouchPoints>0&&window.matchMedia(`(pointer: coarse)`).matches}catch{return!1}}var Eg=[{role:`jump`,label:`Jump`,size:88,right:22,bottom:26},{role:`interact`,label:`Use`,size:62,right:122,bottom:28},{role:`run`,label:`Run`,size:58,right:24,bottom:130},{role:`crouch`,label:`Duck`,size:58,right:96,bottom:112}],Dg=class{constructor(e,t){X(this,`onPause`,void 0),X(this,`state`,new wg),X(this,`element`,void 0),X(this,`stickRing`,void 0),X(this,`stickKnob`,void 0),X(this,`buttonEls`,new Map),this.onPause=t,this.element=document.createElement(`div`),Object.assign(this.element.style,{position:`absolute`,inset:`0`,zIndex:`15`,display:`none`,touchAction:`none`,userSelect:`none`,webkitUserSelect:`none`,fontFamily:Am});let n=(e,t,n)=>{let r=document.createElement(`div`);Object.assign(r.style,{position:`absolute`,top:`0`,bottom:`0`,left:t,width:n,touchAction:`none`}),this.listen(r,e),this.element.append(r)};n(`move`,`0`,`50%`),n(`look`,`50%`,`50%`),this.stickRing=this.circle(112,`rgba(255,255,255,0.14)`,`2px solid rgba(255,255,255,0.35)`),this.stickKnob=this.circle(52,`rgba(255,178,62,0.55)`,`2px solid rgba(255,178,62,0.9)`),this.stickRing.style.display=this.stickKnob.style.display=`none`,this.element.append(this.stickRing,this.stickKnob);for(let e of Eg){let t=this.circle(e.size,`rgba(20,22,27,0.45)`,`2px solid rgba(255,255,255,0.45)`);Object.assign(t.style,{position:`absolute`,right:`${e.right}px`,bottom:`${e.bottom}px`,left:`auto`,top:`auto`,display:`flex`,alignItems:`center`,justifyContent:`center`,color:`#fff`,fontSize:e.size>70?`16px`:`12px`,pointerEvents:`auto`,touchAction:`none`}),t.textContent=e.label,this.listen(t,e.role),this.buttonEls.set(e.role,t),this.element.append(t)}let r=document.createElement(`button`);r.textContent=`II`,Object.assign(r.style,{position:`absolute`,top:`10px`,left:`10px`,width:`44px`,height:`44px`,borderRadius:`10px`,border:`2px solid rgba(255,255,255,0.5)`,background:`rgba(20,22,27,0.5)`,color:`#fff`,font:`inherit`,fontSize:`16px`,pointerEvents:`auto`,touchAction:`none`}),r.addEventListener(`click`,()=>this.onPause()),this.element.append(r),e.append(this.element)}circle(e,t,n){let r=document.createElement(`div`);return Object.assign(r.style,{position:`absolute`,width:`${e}px`,height:`${e}px`,boxSizing:`border-box`,borderRadius:`50%`,background:t,border:n,pointerEvents:`none`}),r}listen(e,t){e.addEventListener(`pointerdown`,n=>{n.preventDefault();try{e.setPointerCapture(n.pointerId)}catch{}this.state.down(n.pointerId,n.clientX,n.clientY,t),this.paint()}),e.addEventListener(`pointermove`,e=>{this.state.move(e.pointerId,e.clientX,e.clientY),this.paint()});let n=e=>{this.state.up(e.pointerId),this.paint()};e.addEventListener(`pointerup`,n),e.addEventListener(`pointercancel`,n),e.addEventListener(`lostpointercapture`,n)}paint(){let e=this.state.stick(),t=this.element.getBoundingClientRect();if(e){let n=this.state.stickRadius,r=e.x-e.x0,i=e.y-e.y0,a=Math.hypot(r,i)||1,o=Math.min(1,a/n),s=e.x0+r/a*o*n,c=e.y0+i/a*o*n;this.place(this.stickRing,e.x0-t.left,e.y0-t.top),this.place(this.stickKnob,s-t.left,c-t.top),this.stickRing.style.display=this.stickKnob.style.display=`block`}else this.stickRing.style.display=this.stickKnob.style.display=`none`;for(let[e,t]of this.buttonEls)t.style.background=this.state.isHeld(e)?`rgba(255,178,62,0.6)`:`rgba(20,22,27,0.45)`}place(e,t,n){let r=e.offsetWidth||parseFloat(e.style.width);e.style.left=`${t-r/2}px`,e.style.top=`${n-r/2}px`}show(){this.element.style.display=`block`}hide(){this.element.style.display=`none`,this.state.release(),this.paint()}dispose(){this.element.remove()}};function Og(e,...t){let n=document.createElement(`div`);return Object.assign(n.style,e),n.append(...t),n}var kg=`#ffb23e`;function Ag(e){kg=e}function jg(){return kg}function Mg(e,t,n=!1){let r=document.createElement(`button`);return r.textContent=e,Object.assign(r.style,{font:`inherit`,fontSize:n?`15px`:`18px`,padding:n?`6px 14px`:`10px 22px`,margin:`6px`,border:`2px solid ${kg}`,borderRadius:`8px`,background:n?`transparent`:kg,color:n?kg:_c(kg),cursor:`pointer`}),r.addEventListener(`click`,t),r}var Ng={1:`Full`,.5:`Half`,.34:`Third`,.25:`Quarter`},Pg={display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:`16px`,padding:`5px 0`,fontSize:`15px`};function Fg(e,t){return Og(Pg,Og({color:`#cfd5e0`},e),t)}function Ig(e,t,n,r){let i=document.createElement(`input`);i.type=`range`,i.min=String(e),i.max=String(t),i.step=`1`,i.value=String(Math.round(n)),i.style.width=`150px`,i.style.accentColor=jg();let a=document.createElement(`span`);return a.style.cssText=`min-width:44px;text-align:right;color:#9aa3b2;font-size:14px`,a.textContent=`${i.value}%`,i.addEventListener(`input`,()=>{a.textContent=`${i.value}%`,r(Number(i.value))}),Og({display:`flex`,alignItems:`center`,gap:`8px`},i,a)}function Lg(e,t){let n=document.createElement(`input`);return n.type=`checkbox`,n.checked=e,n.style.accentColor=jg(),n.style.width=`18px`,n.style.height=`18px`,n.addEventListener(`change`,()=>t(n.checked)),n}function Rg(e,t=`Settings`){let n=Og({width:`min(440px, 92vw)`,maxHeight:`86vh`,overflowY:`auto`,padding:`18px 22px`,background:`rgba(30, 34, 43, 0.96)`,border:`1px solid #3b4252`,borderRadius:`12px`,textAlign:`left`,color:`#fff`}),r=null,i=``,a=()=>{r?.stop(),r=null;let a=e.values(),s=e.touch();n.replaceChildren(),n.append(Og({fontSize:`24px`,margin:`0 0 8px`,textAlign:`center`},t)),n.append(Fg(`Volume`,Ig(0,100,a.volume*100,t=>e.change({volume:t/100}))),Fg(`Mute (M)`,Lg(a.muted,t=>e.change({muted:t}))),Fg(s?`Look speed`:`Mouse speed`,Ig(og*100,300,a.mouseSensitivity*100,t=>e.change({mouseSensitivity:t/100}))),Fg(`Invert look up / down`,Lg(a.invertY,t=>e.change({invertY:t}))));let c=document.createElement(`select`);c.style.cssText=`font:inherit;font-size:15px;padding:4px 8px;border-radius:6px;background:#2a2f3a;color:#fff;border:1px solid #3b4252`;for(let e of fp){let t=document.createElement(`option`);t.value=String(e),t.textContent=Ng[e]??`${Math.round(e*100)}%`,t.selected=e===a.renderScale,c.append(t)}if(c.addEventListener(`change`,()=>e.change({renderScale:Number(c.value)})),n.append(Fg(`Resolution`,c)),!s){n.append(Og({margin:`14px 0 4px`,color:`#9aa3b2`,fontSize:`13px`,letterSpacing:`0.08em`},`KEYS (click one, then press the new key)`));for(let e of pp){let t=Mg(a.controls[e].map(oc).join(` / `)||`—`,()=>o(e,t),!0);t.style.minWidth=`130px`,t.style.margin=`0`,n.append(Fg(ic[e],t))}}if(e.gamepad()){n.append(Og({margin:`14px 0 4px`,color:`#9aa3b2`,fontSize:`13px`,letterSpacing:`0.08em`},`GAMEPAD`));for(let e of tc)n.append(Og({display:`flex`,justifyContent:`space-between`,gap:`16px`,padding:`3px 0`,fontSize:`14px`},Og({color:`#cfd5e0`},e.action),Og({color:`#9aa3b2`,textAlign:`right`},e.buttons)));n.append(Og({color:`#6f7889`,fontSize:`12px`,margin:`6px 0 0`},nc))}n.append(Og({minHeight:`20px`,margin:`6px 0 0`,color:jg(),fontSize:`13px`,textAlign:`center`},i)),i=``;let l=Mg(`Back`,e.back);l.setAttribute(`data-nav-back`,``),n.append(Og({display:`flex`,justifyContent:`center`,marginTop:`6px`},l,Mg(`Defaults`,e.reset,!0)))};function o(t,n){r?.stop(),n.textContent=`Press a key…`;let o=n=>{n.preventDefault(),n.stopImmediatePropagation(),n.code===`Escape`?(s(),a()):sg.includes(n.code)?(i=`${oc(n.code)} is used by the game itself`,s(),a()):(s(),e.rebind(t,n.code),a())},s=()=>{window.removeEventListener(`keydown`,o,!0),r?.action===t&&(r=null)};window.addEventListener(`keydown`,o,!0),r={action:t,stop:s}}return a(),{element:n,get listening(){return r!==null},refresh:a}}function zg(e){let t=document.getElementById(e);if(!t?.textContent)return null;try{return JSON.parse(t.textContent)}catch{return null}}async function Bg(){let e=document.getElementById(`game`),t=zg(`polyhop-project`),n=zg(`polyhop-options`)??{showControls:!0,background:`#14161b`};if(!e||!t){document.body.textContent=`This game has no project data.`;return}let r=Rp(t);document.title=r.settings.name;let i=gc(r.settings.menu);Ag(i.accent),r.settings.splash&&(Sg(e,r.settings.splash,()=>void 0),await new Promise(e=>requestAnimationFrame(()=>requestAnimationFrame(()=>e()))));let a=pg(),o=mg(r.settings.name),s=structuredClone(r.settings),c=hg(a,o);Object.assign(r.settings,ug(s,c));let l=new yg;l.bind(()=>r.textures);let u=new Js({antialias:!0}),d=()=>{let e=r.settings.renderScale;u.setPixelRatio(Math.min(window.devicePixelRatio,2)*e),u.domElement.style.imageRendering=e<1?`pixelated`:``};d(),e.append(u.domElement);let f=new Dt,p=rm(f,u),m=new ci(60,1,.05,400),h=new Zh(f,m,u.domElement,l,r);c.muted&&h.audio.setMuted(!0);let g=e=>{p.setLevel(e,l)};h.onLevelShown=g,g(r.levels[0]);let _=new W,v=()=>{let t=Math.max(1,e.clientWidth),n=Math.max(1,e.clientHeight);u.setSize(t,n),m.aspect=t/n,m.updateProjectionMatrix()};new ResizeObserver(v).observe(e),v();let y=Og({position:`absolute`,inset:`0`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,background:`rgba(20, 22, 27, 0.86)`,color:`#fff`,textAlign:`center`,zIndex:`30`});e.append(y);let b=()=>{Object.assign(r.settings,ug(s,c)),h.audio.setVolume(r.settings.volume),gg(a,o,c)},x=!1,S=!1,C=Rg({touch:()=>h.touchMode,gamepad:()=>r.settings.gamepad,values:()=>{let e=r.settings;return{volume:e.volume,muted:h.audio.muted,mouseSensitivity:e.mouseSensitivity,invertY:e.invertY,renderScale:e.renderScale,controls:e.controls}},change:e=>{c={...c,...e},e.muted!==void 0&&h.audio.setMuted(e.muted),b(),e.renderScale!==void 0&&(d(),v())},rebind:(e,t)=>{let n=fg(s.controls,dg(r.settings.controls,e,t)),{controls:i,...a}=c;c=Object.keys(n).length>0?{...a,controls:n}:a,b()},reset:()=>{c={},h.audio.setMuted(!1),b(),d(),v(),C.refresh()},back:()=>P(x)},i.settingsLabel),w=()=>{S=!0,y.replaceChildren(C.element),C.refresh()},T=new xh,E=new ag({layers:()=>[y.style.display===`none`?null:y,h.endScreen],blocked:()=>C.listening}),D=!1,O=null,k=null,A=()=>{k||(k=new Dg(e,()=>ee()),h.setTouch(k.state),M&&!h.paused&&!D&&k.show())},j=e=>{D!==e&&(D=e,e?k?.hide():M&&!h.paused&&!h.ended&&k?.show(),O&&F(O))};window.addEventListener(`touchstart`,()=>j(!1),{capture:!0,passive:!0});let M=!1,N=()=>void(document.fullscreenElement?document.exitFullscreen():e.requestFullscreen?.()),P=e=>{x=e,S=!1,k?.hide(),y.replaceChildren(),y.style.display=`flex`,Object.assign(y.style,Qh(i,e));let t=tg({menu:i,title:r.settings.name,paused:e,onStart:L,onSettings:w,onFullscreen:N});y.append(t),O=null,n.showControls&&(O=Og({fontSize:`14px`,color:`#cfd5e0`,margin:`22px 0 0`,lineHeight:`1.7`}),F(O),t.append(O))},F=e=>{e.replaceChildren();let t=e=>Og({color:`#9aa3b2`},e);if(D&&r.settings.gamepad){for(let t of tc)e.append(Og({},`${t.action}: ${t.buttons}`));e.append(t(nc))}else{if(h.touchMode)e.append(Og({},`Left side: move`),Og({},`Right side: look around`),t(`Buttons: Jump, Use, Run, Duck`));else{for(let t of pp){let n=r.settings.controls[t].map(oc).join(` / `);e.append(Og({},`${ic[t]}: ${n}`))}e.append(t(`Mouse: turn / look · M: sound on / off`))}r.settings.gamepad&&e.append(t(T.connected?`A gamepad is connected: press a button to use it.`:`Gamepad: connect one and press a button.`))}},I=()=>{try{u.domElement.requestPointerLock()?.catch?.(()=>{})}catch{}};h.onRestart=I;function L(){y.style.display=`none`,M||(M=!0,h.startPlay(),r.settings.fullscreen&&e.requestFullscreen?.().catch(()=>{})),S=!1,h.setPaused(!1),I(),D||k?.show()}let ee=()=>{!M||h.paused||h.ended||(h.setPaused(!0),P(!0))};document.addEventListener(`pointerlockchange`,()=>{document.pointerLockElement!==u.domElement&&ee()}),window.addEventListener(`keydown`,e=>{e.code===`Escape`?ee():e.code===`KeyM`&&(h.audio.setMuted(!h.audio.muted),c={...c,muted:h.audio.muted},b())}),window.addEventListener(`blur`,ee),Tg()?A():window.addEventListener(`touchstart`,A,{once:!0,passive:!0}),P(!1),window.setTimeout(()=>h.prepareAudio(),120);let R=performance.now(),te=!1,z=e=>{requestAnimationFrame(z);let t=Math.min((e-R)/1e3,.1);if(R=e,T.poll(t),r.settings.gamepad){let e=te;te=T.connected,T.active?j(!0):e!==te&&O&&F(O),E.update(T),T.pressed(Qs.options)&&!h.ended&&!C.listening&&(S?C.element.querySelector(`[data-nav-back]`)?.click():y.style.display===`none`?ee():L())}h.update(t);let n=h.controller.pos;p.followSun(_.set(n[0],n[1],n[2])),u.render(f,m)};requestAnimationFrame(z)}Bg()})();