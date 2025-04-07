import{createCanvasElement as aa,SRGBColorSpace as oa,NoToneMapping as Lt,Vector4 as pt,Color as $e,Frustum as xr,Matrix4 as $t,Vector3 as be,REVISION as sa,warnOnce as Ot,WebGLRenderTarget as jt,ColorManagement as it,LinearMipmapLinearFilter as rn,HalfFloatType as Dt,UnsignedByteType as Ht,DoubleSide as Tt,BackSide as vt,FrontSide as cn,toNormalizedProjectionMatrix as la,toReversedProjectionMatrix as ca,LinearSRGBColorSpace as pn,probeAsync as fa,WebGLCoordinateSystem as da,EventDispatcher as ua,Vector2 as Ke,PerspectiveCamera as on,ArrayCamera as pa,WebXRController as In,RGBAFormat as Ct,DepthStencilFormat as bn,DepthFormat as ri,UnsignedInt248Type as fn,UnsignedIntType as dn,DepthTexture as Ar,RAD2DEG as ha,NoColorSpace as Yt,LessEqualDepth as Cn,ReverseSubtractEquation as ma,SubtractEquation as _a,AddEquation as nn,OneMinusConstantAlphaFactor as ga,ConstantAlphaFactor as va,OneMinusConstantColorFactor as Ea,ConstantColorFactor as Sa,OneMinusDstAlphaFactor as Ma,OneMinusDstColorFactor as Ta,OneMinusSrcAlphaFactor as xa,OneMinusSrcColorFactor as Aa,DstAlphaFactor as Ra,DstColorFactor as ba,SrcAlphaSaturateFactor as Ca,SrcAlphaFactor as Pa,SrcColorFactor as Da,OneFactor as wa,ZeroFactor as La,NoBlending as Gt,CustomBlending as Ua,MultiplyBlending as _i,SubtractiveBlending as gi,AdditiveBlending as vi,NormalBlending as Tn,CullFaceNone as ya,CullFaceBack as Ei,CullFaceFront as Ia,MirroredRepeatWrapping as Na,ClampToEdgeWrapping as Oa,RepeatWrapping as Fa,LinearMipmapNearestFilter as Nn,LinearFilter as wt,NearestMipmapLinearFilter as _n,NearestMipmapNearestFilter as Ba,NearestFilter as sn,NotEqualCompare as Ga,GreaterCompare as Ha,GreaterEqualCompare as Va,EqualCompare as ka,LessEqualCompare as Rr,LessCompare as za,AlwaysCompare as Wa,NeverCompare as Xa,Plane as br,Matrix3 as He,Layers as Ya,MeshDepthMaterial as Ka,RGBADepthPacking as qa,MeshDistanceMaterial as Za,ShaderMaterial as Vt,BufferGeometry as Cr,BufferAttribute as xn,Mesh as xt,PCFShadowMap as Pr,VSMShadowMap as bt,UnsignedShortType as Pn,UnsignedShort4444Type as Dr,UnsignedShort5551Type as wr,Texture as Lr,PlaneGeometry as Ur,UnsignedInt5999Type as $a,ByteType as ja,ShortType as Qa,IntType as yr,FloatType as At,AlphaFormat as Ja,RGBFormat as eo,LuminanceFormat as to,LuminanceAlphaFormat as no,RedFormat as io,RedIntegerFormat as Ir,RGFormat as ro,RGIntegerFormat as Nr,RGBAIntegerFormat as Or,RGB_S3TC_DXT1_Format as On,RGBA_S3TC_DXT1_Format as Fn,RGBA_S3TC_DXT3_Format as Bn,RGBA_S3TC_DXT5_Format as Gn,SRGBTransfer as Ze,RGB_PVRTC_4BPPV1_Format as Si,RGB_PVRTC_2BPPV1_Format as Mi,RGBA_PVRTC_4BPPV1_Format as Ti,RGBA_PVRTC_2BPPV1_Format as xi,RGB_ETC1_Format as Ai,RGB_ETC2_Format as Ri,RGBA_ETC2_EAC_Format as bi,RGBA_ASTC_4x4_Format as Ci,RGBA_ASTC_5x4_Format as Pi,RGBA_ASTC_5x5_Format as Di,RGBA_ASTC_6x5_Format as wi,RGBA_ASTC_6x6_Format as Li,RGBA_ASTC_8x5_Format as Ui,RGBA_ASTC_8x6_Format as yi,RGBA_ASTC_8x8_Format as Ii,RGBA_ASTC_10x5_Format as Ni,RGBA_ASTC_10x6_Format as Oi,RGBA_ASTC_10x8_Format as Fi,RGBA_ASTC_10x10_Format as Bi,RGBA_ASTC_12x10_Format as Gi,RGBA_ASTC_12x12_Format as Hi,RGBA_BPTC_Format as Hn,RGB_BPTC_SIGNED_Format as Vi,RGB_BPTC_UNSIGNED_Format as ki,RED_RGTC1_Format as ao,SIGNED_RED_RGTC1_Format as zi,RED_GREEN_RGTC2_Format as Wi,SIGNED_RED_GREEN_RGTC2_Format as Xi,NotEqualDepth as Zn,GreaterDepth as $n,GreaterEqualDepth as jn,EqualDepth as Qn,LessDepth as Jn,AlwaysDepth as ei,NeverDepth as ti,EquirectangularReflectionMapping as Dn,EquirectangularRefractionMapping as ni,WebGLCubeRenderTarget as oo,DataArrayTexture as Fr,UniformsUtils as so,mergeUniforms as ut,CubeUVReflectionMapping as wn,TangentSpaceNormalMap as lo,ObjectSpaceNormalMap as co,getUnlitUniformColorSpace as Br,BoxGeometry as Gr,cloneUniforms as Yi,Euler as Hr,getByteLength as Ki,LinearTransfer as Vr,CubeReflectionMapping as un,CubeRefractionMapping as Qt,OrthographicCamera as fo,MeshBasicMaterial as ai,Uint32BufferAttribute as uo,Uint16BufferAttribute as po,arrayNeedsUint32 as ho,GLSL3 as qi,PCFSoftShadowMap as mo,CustomToneMapping as _o,NeutralToneMapping as go,AgXToneMapping as vo,ACESFilmicToneMapping as kr,CineonToneMapping as Eo,ReinhardToneMapping as So,LinearToneMapping as Mo,CubeTexture as To,Data3DTexture as xo,createElementNS as Ao,AddOperation as Ro,MixOperation as bo,MultiplyOperation as Co,MinEquation as Po,MaxEquation as Do,Ray as wo,MathUtils as Lo,Controls as Uo,MOUSE as Zt,TOUCH as Kt,Quaternion as Zi,Spherical as $i,DataTextureLoader as yo,DataUtils as gn,Scene as Io,Raycaster as No,Shape as Oo,ShapeGeometry as Fo,SphereGeometry as Bo}from"https://cdnjs.cloudflare.com/ajax/libs/three.js/0.174.0/three.core.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function zr(){let e=null,n=!1,t=null,i=null;function r(a,d){t(a,d),i=e.requestAnimationFrame(r)}return{start:function(){n!==!0&&t!==null&&(i=e.requestAnimationFrame(r),n=!0)},stop:function(){e.cancelAnimationFrame(i),n=!1},setAnimationLoop:function(a){t=a},setContext:function(a){e=a}}}function Go(e){const n=new WeakMap;function t(u,b){const M=u.array,y=u.usage,x=M.byteLength,E=e.createBuffer();e.bindBuffer(b,E),e.bufferData(b,M,y),u.onUploadCallback();let R;if(M instanceof Float32Array)R=e.FLOAT;else if(M instanceof Uint16Array)u.isFloat16BufferAttribute?R=e.HALF_FLOAT:R=e.UNSIGNED_SHORT;else if(M instanceof Int16Array)R=e.SHORT;else if(M instanceof Uint32Array)R=e.UNSIGNED_INT;else if(M instanceof Int32Array)R=e.INT;else if(M instanceof Int8Array)R=e.BYTE;else if(M instanceof Uint8Array)R=e.UNSIGNED_BYTE;else if(M instanceof Uint8ClampedArray)R=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+M);return{buffer:E,type:R,bytesPerElement:M.BYTES_PER_ELEMENT,version:u.version,size:x}}function i(u,b,M){const y=b.array,x=b.updateRanges;if(e.bindBuffer(M,u),x.length===0)e.bufferSubData(M,0,y);else{x.sort((R,G)=>R.start-G.start);let E=0;for(let R=1;R<x.length;R++){const G=x[E],D=x[R];D.start<=G.start+G.count+1?G.count=Math.max(G.count,D.start+D.count-G.start):(++E,x[E]=D)}x.length=E+1;for(let R=0,G=x.length;R<G;R++){const D=x[R];e.bufferSubData(M,D.start*y.BYTES_PER_ELEMENT,y,D.start,D.count)}b.clearUpdateRanges()}b.onUploadCallback()}function r(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const b=n.get(u);b&&(e.deleteBuffer(b.buffer),n.delete(u))}function d(u,b){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const y=n.get(u);(!y||y.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const M=n.get(u);if(M===void 0)n.set(u,t(u,b));else if(M.version<u.version){if(M.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(M.buffer,u,b),M.version=u.version}}return{get:r,remove:a,update:d}}var Ho=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vo=`#ifdef USE_ALPHAHASH
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
#endif`,ko=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zo=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wo=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xo=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yo=`#ifdef USE_AOMAP
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
#endif`,Ko=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qo=`#ifdef USE_BATCHING
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
#endif`,Zo=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$o=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jo=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qo=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jo=`#ifdef USE_IRIDESCENCE
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
#endif`,es=`#ifdef USE_BUMPMAP
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
#endif`,ts=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ns=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,is=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rs=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,as=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,os=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ss=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ls=`#if defined( USE_COLOR_ALPHA )
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
#endif`,cs=`#define PI 3.141592653589793
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
} // validated`,fs=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ds=`vec3 transformedNormal = objectNormal;
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
#endif`,us=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ps=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hs=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ms=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_s="gl_FragColor = linearToOutputTexel( gl_FragColor );",gs=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vs=`#ifdef USE_ENVMAP
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
#endif`,Es=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ss=`#ifdef USE_ENVMAP
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
#endif`,Ms=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ts=`#ifdef USE_ENVMAP
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
#endif`,xs=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,As=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rs=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bs=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cs=`#ifdef USE_GRADIENTMAP
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
}`,Ps=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ds=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ws=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ls=`uniform bool receiveShadow;
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
#endif`,Us=`#ifdef USE_ENVMAP
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
#endif`,ys=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Is=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ns=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Os=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fs=`PhysicalMaterial material;
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
#endif`,Bs=`struct PhysicalMaterial {
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
}`,Gs=`
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
#endif`,Hs=`#if defined( RE_IndirectDiffuse )
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
#endif`,Vs=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ks=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zs=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ws=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xs=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ys=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ks=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qs=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zs=`#if defined( USE_POINTS_UV )
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
#endif`,$s=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,js=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qs=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Js=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,el=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tl=`#ifdef USE_MORPHTARGETS
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
#endif`,nl=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,il=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,rl=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,al=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ol=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sl=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ll=`#ifdef USE_NORMALMAP
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
#endif`,cl=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fl=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dl=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ul=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pl=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hl=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ml=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_l=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gl=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vl=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,El=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sl=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ml=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tl=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xl=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Al=`float getShadowMask() {
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
}`,Rl=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bl=`#ifdef USE_SKINNING
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
#endif`,Cl=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pl=`#ifdef USE_SKINNING
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
#endif`,Dl=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wl=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ll=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ul=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yl=`#ifdef USE_TRANSMISSION
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
#endif`,Il=`#ifdef USE_TRANSMISSION
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
#endif`,Nl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ol=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bl=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gl=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hl=`uniform sampler2D t2D;
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
}`,Vl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kl=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wl=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xl=`#include <common>
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
}`,Yl=`#if DEPTH_PACKING == 3200
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Kl=`#define DISTANCE
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
}`,ql=`#define DISTANCE
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
}`,Zl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$l=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jl=`uniform float scale;
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
}`,Ql=`uniform vec3 diffuse;
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
}`,Jl=`#include <common>
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
}`,ec=`uniform vec3 diffuse;
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
}`,tc=`#define LAMBERT
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
}`,nc=`#define LAMBERT
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
}`,ic=`#define MATCAP
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
}`,rc=`#define MATCAP
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
}`,ac=`#define NORMAL
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
}`,oc=`#define NORMAL
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
}`,sc=`#define PHONG
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
}`,lc=`#define PHONG
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
}`,cc=`#define STANDARD
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
}`,fc=`#define STANDARD
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
}`,dc=`#define TOON
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
}`,uc=`#define TOON
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
}`,pc=`uniform float size;
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
}`,hc=`uniform vec3 diffuse;
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
}`,mc=`#include <common>
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
}`,_c=`uniform vec3 color;
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
}`,gc=`uniform float rotation;
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
}`,vc=`uniform vec3 diffuse;
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
}`,Le={alphahash_fragment:Ho,alphahash_pars_fragment:Vo,alphamap_fragment:ko,alphamap_pars_fragment:zo,alphatest_fragment:Wo,alphatest_pars_fragment:Xo,aomap_fragment:Yo,aomap_pars_fragment:Ko,batching_pars_vertex:qo,batching_vertex:Zo,begin_vertex:$o,beginnormal_vertex:jo,bsdfs:Qo,iridescence_fragment:Jo,bumpmap_pars_fragment:es,clipping_planes_fragment:ts,clipping_planes_pars_fragment:ns,clipping_planes_pars_vertex:is,clipping_planes_vertex:rs,color_fragment:as,color_pars_fragment:os,color_pars_vertex:ss,color_vertex:ls,common:cs,cube_uv_reflection_fragment:fs,defaultnormal_vertex:ds,displacementmap_pars_vertex:us,displacementmap_vertex:ps,emissivemap_fragment:hs,emissivemap_pars_fragment:ms,colorspace_fragment:_s,colorspace_pars_fragment:gs,envmap_fragment:vs,envmap_common_pars_fragment:Es,envmap_pars_fragment:Ss,envmap_pars_vertex:Ms,envmap_physical_pars_fragment:Us,envmap_vertex:Ts,fog_vertex:xs,fog_pars_vertex:As,fog_fragment:Rs,fog_pars_fragment:bs,gradientmap_pars_fragment:Cs,lightmap_pars_fragment:Ps,lights_lambert_fragment:Ds,lights_lambert_pars_fragment:ws,lights_pars_begin:Ls,lights_toon_fragment:ys,lights_toon_pars_fragment:Is,lights_phong_fragment:Ns,lights_phong_pars_fragment:Os,lights_physical_fragment:Fs,lights_physical_pars_fragment:Bs,lights_fragment_begin:Gs,lights_fragment_maps:Hs,lights_fragment_end:Vs,logdepthbuf_fragment:ks,logdepthbuf_pars_fragment:zs,logdepthbuf_pars_vertex:Ws,logdepthbuf_vertex:Xs,map_fragment:Ys,map_pars_fragment:Ks,map_particle_fragment:qs,map_particle_pars_fragment:Zs,metalnessmap_fragment:$s,metalnessmap_pars_fragment:js,morphinstance_vertex:Qs,morphcolor_vertex:Js,morphnormal_vertex:el,morphtarget_pars_vertex:tl,morphtarget_vertex:nl,normal_fragment_begin:il,normal_fragment_maps:rl,normal_pars_fragment:al,normal_pars_vertex:ol,normal_vertex:sl,normalmap_pars_fragment:ll,clearcoat_normal_fragment_begin:cl,clearcoat_normal_fragment_maps:fl,clearcoat_pars_fragment:dl,iridescence_pars_fragment:ul,opaque_fragment:pl,packing:hl,premultiplied_alpha_fragment:ml,project_vertex:_l,dithering_fragment:gl,dithering_pars_fragment:vl,roughnessmap_fragment:El,roughnessmap_pars_fragment:Sl,shadowmap_pars_fragment:Ml,shadowmap_pars_vertex:Tl,shadowmap_vertex:xl,shadowmask_pars_fragment:Al,skinbase_vertex:Rl,skinning_pars_vertex:bl,skinning_vertex:Cl,skinnormal_vertex:Pl,specularmap_fragment:Dl,specularmap_pars_fragment:wl,tonemapping_fragment:Ll,tonemapping_pars_fragment:Ul,transmission_fragment:yl,transmission_pars_fragment:Il,uv_pars_fragment:Nl,uv_pars_vertex:Ol,uv_vertex:Fl,worldpos_vertex:Bl,background_vert:Gl,background_frag:Hl,backgroundCube_vert:Vl,backgroundCube_frag:kl,cube_vert:zl,cube_frag:Wl,depth_vert:Xl,depth_frag:Yl,distanceRGBA_vert:Kl,distanceRGBA_frag:ql,equirect_vert:Zl,equirect_frag:$l,linedashed_vert:jl,linedashed_frag:Ql,meshbasic_vert:Jl,meshbasic_frag:ec,meshlambert_vert:tc,meshlambert_frag:nc,meshmatcap_vert:ic,meshmatcap_frag:rc,meshnormal_vert:ac,meshnormal_frag:oc,meshphong_vert:sc,meshphong_frag:lc,meshphysical_vert:cc,meshphysical_frag:fc,meshtoon_vert:dc,meshtoon_frag:uc,points_vert:pc,points_frag:hc,shadow_vert:mc,shadow_frag:_c,sprite_vert:gc,sprite_frag:vc},ee={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Mt={basic:{uniforms:ut([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:ut([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,ee.lights,{emissive:{value:new $e(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:ut([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,ee.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:ut([ee.common,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.roughnessmap,ee.metalnessmap,ee.fog,ee.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:ut([ee.common,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.gradientmap,ee.fog,ee.lights,{emissive:{value:new $e(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:ut([ee.common,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:ut([ee.points,ee.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:ut([ee.common,ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:ut([ee.common,ee.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:ut([ee.common,ee.bumpmap,ee.normalmap,ee.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:ut([ee.sprite,ee.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Le.backgroundCube_vert,fragmentShader:Le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:ut([ee.common,ee.displacementmap,{referencePosition:{value:new be},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:ut([ee.lights,ee.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};Mt.physical={uniforms:ut([Mt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};const vn={r:0,b:0,g:0},It=new Hr,Ec=new $t;function Sc(e,n,t,i,r,a,d){const u=new $e(0);let b=a===!0?0:1,M,y,x=null,E=0,R=null;function G(A){let _=A.isScene===!0?A.background:null;return _&&_.isTexture&&(_=(A.backgroundBlurriness>0?t:n).get(_)),_}function D(A){let _=!1;const z=G(A);z===null?o(u,b):z&&z.isColor&&(o(z,1),_=!0);const P=e.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,d):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,d),(e.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function f(A,_){const z=G(_);z&&(z.isCubeTexture||z.mapping===wn)?(y===void 0&&(y=new xt(new Gr(1,1,1),new Vt({name:"BackgroundCubeMaterial",uniforms:Yi(Mt.backgroundCube.uniforms),vertexShader:Mt.backgroundCube.vertexShader,fragmentShader:Mt.backgroundCube.fragmentShader,side:vt,depthTest:!1,depthWrite:!1,fog:!1})),y.geometry.deleteAttribute("normal"),y.geometry.deleteAttribute("uv"),y.onBeforeRender=function(P,I,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(y.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(y)),It.copy(_.backgroundRotation),It.x*=-1,It.y*=-1,It.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(It.y*=-1,It.z*=-1),y.material.uniforms.envMap.value=z,y.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,y.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,y.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,y.material.uniforms.backgroundRotation.value.setFromMatrix4(Ec.makeRotationFromEuler(It)),y.material.toneMapped=it.getTransfer(z.colorSpace)!==Ze,(x!==z||E!==z.version||R!==e.toneMapping)&&(y.material.needsUpdate=!0,x=z,E=z.version,R=e.toneMapping),y.layers.enableAll(),A.unshift(y,y.geometry,y.material,0,0,null)):z&&z.isTexture&&(M===void 0&&(M=new xt(new Ur(2,2),new Vt({name:"BackgroundMaterial",uniforms:Yi(Mt.background.uniforms),vertexShader:Mt.background.vertexShader,fragmentShader:Mt.background.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),M.geometry.deleteAttribute("normal"),Object.defineProperty(M.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(M)),M.material.uniforms.t2D.value=z,M.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,M.material.toneMapped=it.getTransfer(z.colorSpace)!==Ze,z.matrixAutoUpdate===!0&&z.updateMatrix(),M.material.uniforms.uvTransform.value.copy(z.matrix),(x!==z||E!==z.version||R!==e.toneMapping)&&(M.material.needsUpdate=!0,x=z,E=z.version,R=e.toneMapping),M.layers.enableAll(),A.unshift(M,M.geometry,M.material,0,0,null))}function o(A,_){A.getRGB(vn,Br(e)),i.buffers.color.setClear(vn.r,vn.g,vn.b,_,d)}function w(){y!==void 0&&(y.geometry.dispose(),y.material.dispose(),y=void 0),M!==void 0&&(M.geometry.dispose(),M.material.dispose(),M=void 0)}return{getClearColor:function(){return u},setClearColor:function(A,_=1){u.set(A),b=_,o(u,b)},getClearAlpha:function(){return b},setClearAlpha:function(A){b=A,o(u,b)},render:D,addToRenderList:f,dispose:w}}function Mc(e,n){const t=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},r=E(null);let a=r,d=!1;function u(c,g,V,B,O){let q=!1;const F=x(B,V,g);a!==F&&(a=F,M(a.object)),q=R(c,B,V,O),q&&G(c,B,V,O),O!==null&&n.update(O,e.ELEMENT_ARRAY_BUFFER),(q||d)&&(d=!1,_(c,g,V,B),O!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(O).buffer))}function b(){return e.createVertexArray()}function M(c){return e.bindVertexArray(c)}function y(c){return e.deleteVertexArray(c)}function x(c,g,V){const B=V.wireframe===!0;let O=i[c.id];O===void 0&&(O={},i[c.id]=O);let q=O[g.id];q===void 0&&(q={},O[g.id]=q);let F=q[B];return F===void 0&&(F=E(b()),q[B]=F),F}function E(c){const g=[],V=[],B=[];for(let O=0;O<t;O++)g[O]=0,V[O]=0,B[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:g,enabledAttributes:V,attributeDivisors:B,object:c,attributes:{},index:null}}function R(c,g,V,B){const O=a.attributes,q=g.attributes;let F=0;const Q=V.getAttributes();for(const k in Q)if(Q[k].location>=0){const he=O[k];let Ce=q[k];if(Ce===void 0&&(k==="instanceMatrix"&&c.instanceMatrix&&(Ce=c.instanceMatrix),k==="instanceColor"&&c.instanceColor&&(Ce=c.instanceColor)),he===void 0||he.attribute!==Ce||Ce&&he.data!==Ce.data)return!0;F++}return a.attributesNum!==F||a.index!==B}function G(c,g,V,B){const O={},q=g.attributes;let F=0;const Q=V.getAttributes();for(const k in Q)if(Q[k].location>=0){let he=q[k];he===void 0&&(k==="instanceMatrix"&&c.instanceMatrix&&(he=c.instanceMatrix),k==="instanceColor"&&c.instanceColor&&(he=c.instanceColor));const Ce={};Ce.attribute=he,he&&he.data&&(Ce.data=he.data),O[k]=Ce,F++}a.attributes=O,a.attributesNum=F,a.index=B}function D(){const c=a.newAttributes;for(let g=0,V=c.length;g<V;g++)c[g]=0}function f(c){o(c,0)}function o(c,g){const V=a.newAttributes,B=a.enabledAttributes,O=a.attributeDivisors;V[c]=1,B[c]===0&&(e.enableVertexAttribArray(c),B[c]=1),O[c]!==g&&(e.vertexAttribDivisor(c,g),O[c]=g)}function w(){const c=a.newAttributes,g=a.enabledAttributes;for(let V=0,B=g.length;V<B;V++)g[V]!==c[V]&&(e.disableVertexAttribArray(V),g[V]=0)}function A(c,g,V,B,O,q,F){F===!0?e.vertexAttribIPointer(c,g,V,O,q):e.vertexAttribPointer(c,g,V,B,O,q)}function _(c,g,V,B){D();const O=B.attributes,q=V.getAttributes(),F=g.defaultAttributeValues;for(const Q in q){const k=q[Q];if(k.location>=0){let ue=O[Q];if(ue===void 0&&(Q==="instanceMatrix"&&c.instanceMatrix&&(ue=c.instanceMatrix),Q==="instanceColor"&&c.instanceColor&&(ue=c.instanceColor)),ue!==void 0){const he=ue.normalized,Ce=ue.itemSize,De=n.get(ue);if(De===void 0)continue;const Be=De.buffer,W=De.type,J=De.bytesPerElement,pe=W===e.INT||W===e.UNSIGNED_INT||ue.gpuType===yr;if(ue.isInterleavedBufferAttribute){const ie=ue.data,Se=ie.stride,Ve=ue.offset;if(ie.isInstancedInterleavedBuffer){for(let Te=0;Te<k.locationSize;Te++)o(k.location+Te,ie.meshPerAttribute);c.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Te=0;Te<k.locationSize;Te++)f(k.location+Te);e.bindBuffer(e.ARRAY_BUFFER,Be);for(let Te=0;Te<k.locationSize;Te++)A(k.location+Te,Ce/k.locationSize,W,he,Se*J,(Ve+Ce/k.locationSize*Te)*J,pe)}else{if(ue.isInstancedBufferAttribute){for(let ie=0;ie<k.locationSize;ie++)o(k.location+ie,ue.meshPerAttribute);c.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ie=0;ie<k.locationSize;ie++)f(k.location+ie);e.bindBuffer(e.ARRAY_BUFFER,Be);for(let ie=0;ie<k.locationSize;ie++)A(k.location+ie,Ce/k.locationSize,W,he,Ce*J,Ce/k.locationSize*ie*J,pe)}}else if(F!==void 0){const he=F[Q];if(he!==void 0)switch(he.length){case 2:e.vertexAttrib2fv(k.location,he);break;case 3:e.vertexAttrib3fv(k.location,he);break;case 4:e.vertexAttrib4fv(k.location,he);break;default:e.vertexAttrib1fv(k.location,he)}}}}w()}function z(){C();for(const c in i){const g=i[c];for(const V in g){const B=g[V];for(const O in B)y(B[O].object),delete B[O];delete g[V]}delete i[c]}}function P(c){if(i[c.id]===void 0)return;const g=i[c.id];for(const V in g){const B=g[V];for(const O in B)y(B[O].object),delete B[O];delete g[V]}delete i[c.id]}function I(c){for(const g in i){const V=i[g];if(V[c.id]===void 0)continue;const B=V[c.id];for(const O in B)y(B[O].object),delete B[O];delete V[c.id]}}function C(){p(),d=!0,a!==r&&(a=r,M(a.object))}function p(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:u,reset:C,resetDefaultState:p,dispose:z,releaseStatesOfGeometry:P,releaseStatesOfProgram:I,initAttributes:D,enableAttribute:f,disableUnusedAttributes:w}}function Tc(e,n,t){let i;function r(M){i=M}function a(M,y){e.drawArrays(i,M,y),t.update(y,i,1)}function d(M,y,x){x!==0&&(e.drawArraysInstanced(i,M,y,x),t.update(y,i,x))}function u(M,y,x){if(x===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,M,0,y,0,x);let R=0;for(let G=0;G<x;G++)R+=y[G];t.update(R,i,1)}function b(M,y,x,E){if(x===0)return;const R=n.get("WEBGL_multi_draw");if(R===null)for(let G=0;G<M.length;G++)d(M[G],y[G],E[G]);else{R.multiDrawArraysInstancedWEBGL(i,M,0,y,0,E,0,x);let G=0;for(let D=0;D<x;D++)G+=y[D]*E[D];t.update(G,i,1)}}this.setMode=r,this.render=a,this.renderInstances=d,this.renderMultiDraw=u,this.renderMultiDrawInstances=b}function xc(e,n,t,i){let r;function a(){if(r!==void 0)return r;if(n.has("EXT_texture_filter_anisotropic")===!0){const I=n.get("EXT_texture_filter_anisotropic");r=e.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function d(I){return!(I!==Ct&&i.convert(I)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(I){const C=I===Dt&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(I!==Ht&&i.convert(I)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==At&&!C)}function b(I){if(I==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let M=t.precision!==void 0?t.precision:"highp";const y=b(M);y!==M&&(console.warn("THREE.WebGLRenderer:",M,"not supported, using",y,"instead."),M=y);const x=t.logarithmicDepthBuffer===!0,E=t.reverseDepthBuffer===!0&&n.has("EXT_clip_control"),R=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),G=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=e.getParameter(e.MAX_TEXTURE_SIZE),f=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),o=e.getParameter(e.MAX_VERTEX_ATTRIBS),w=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),A=e.getParameter(e.MAX_VARYING_VECTORS),_=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),z=G>0,P=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:b,textureFormatReadable:d,textureTypeReadable:u,precision:M,logarithmicDepthBuffer:x,reverseDepthBuffer:E,maxTextures:R,maxVertexTextures:G,maxTextureSize:D,maxCubemapSize:f,maxAttributes:o,maxVertexUniforms:w,maxVaryings:A,maxFragmentUniforms:_,vertexTextures:z,maxSamples:P}}function Ac(e){const n=this;let t=null,i=0,r=!1,a=!1;const d=new br,u=new He,b={value:null,needsUpdate:!1};this.uniform=b,this.numPlanes=0,this.numIntersection=0,this.init=function(x,E){const R=x.length!==0||E||i!==0||r;return r=E,i=x.length,R},this.beginShadows=function(){a=!0,y(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(x,E){t=y(x,E,0)},this.setState=function(x,E,R){const G=x.clippingPlanes,D=x.clipIntersection,f=x.clipShadows,o=e.get(x);if(!r||G===null||G.length===0||a&&!f)a?y(null):M();else{const w=a?0:i,A=w*4;let _=o.clippingState||null;b.value=_,_=y(G,E,A,R);for(let z=0;z!==A;++z)_[z]=t[z];o.clippingState=_,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=w}};function M(){b.value!==t&&(b.value=t,b.needsUpdate=i>0),n.numPlanes=i,n.numIntersection=0}function y(x,E,R,G){const D=x!==null?x.length:0;let f=null;if(D!==0){if(f=b.value,G!==!0||f===null){const o=R+D*4,w=E.matrixWorldInverse;u.getNormalMatrix(w),(f===null||f.length<o)&&(f=new Float32Array(o));for(let A=0,_=R;A!==D;++A,_+=4)d.copy(x[A]).applyMatrix4(w,u),d.normal.toArray(f,_),f[_+3]=d.constant}b.value=f,b.needsUpdate=!0}return n.numPlanes=D,n.numIntersection=0,f}}function Rc(e){let n=new WeakMap;function t(d,u){return u===Dn?d.mapping=un:u===ni&&(d.mapping=Qt),d}function i(d){if(d&&d.isTexture){const u=d.mapping;if(u===Dn||u===ni)if(n.has(d)){const b=n.get(d).texture;return t(b,d.mapping)}else{const b=d.image;if(b&&b.height>0){const M=new oo(b.height);return M.fromEquirectangularTexture(e,d),n.set(d,M),d.addEventListener("dispose",r),t(M.texture,d.mapping)}else return null}}return d}function r(d){const u=d.target;u.removeEventListener("dispose",r);const b=n.get(u);b!==void 0&&(n.delete(u),b.dispose())}function a(){n=new WeakMap}return{get:i,dispose:a}}const qt=4,ji=[.125,.215,.35,.446,.526,.582],Bt=20,Vn=new fo,Qi=new $e;let kn=null,zn=0,Wn=0,Xn=!1;const Ft=(1+Math.sqrt(5))/2,Xt=1/Ft,Ji=[new be(-Ft,Xt,0),new be(Ft,Xt,0),new be(-Xt,0,Ft),new be(Xt,0,Ft),new be(0,Ft,-Xt),new be(0,Ft,Xt),new be(-1,1,-1),new be(1,1,-1),new be(-1,1,1),new be(1,1,1)],bc=new be;class er{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(n,t=0,i=.1,r=100,a={}){const{size:d=256,position:u=bc}=a;kn=this._renderer.getRenderTarget(),zn=this._renderer.getActiveCubeFace(),Wn=this._renderer.getActiveMipmapLevel(),Xn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const b=this._allocateTargets();return b.depthBuffer=!0,this._sceneToCubeUV(n,i,r,b,u),t>0&&this._blur(b,0,0,t),this._applyPMREM(b),this._cleanup(b),b}fromEquirectangular(n,t=null){return this._fromTexture(n,t)}fromCubemap(n,t=null){return this._fromTexture(n,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ir(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodPlanes.length;n++)this._lodPlanes[n].dispose()}_cleanup(n){this._renderer.setRenderTarget(kn,zn,Wn),this._renderer.xr.enabled=Xn,n.scissorTest=!1,En(n,0,0,n.width,n.height)}_fromTexture(n,t){n.mapping===un||n.mapping===Qt?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),kn=this._renderer.getRenderTarget(),zn=this._renderer.getActiveCubeFace(),Wn=this._renderer.getActiveMipmapLevel(),Xn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(n,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:wt,minFilter:wt,generateMipmaps:!1,type:Dt,format:Ct,colorSpace:pn,depthBuffer:!1},r=tr(n,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tr(n,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cc(a)),this._blurMaterial=Pc(a,n,t)}return r}_compileMaterial(n){const t=new xt(this._lodPlanes[0],n);this._renderer.compile(t,Vn)}_sceneToCubeUV(n,t,i,r,a){const b=new on(90,1,t,i),M=[1,-1,1,1,1,1],y=[1,1,1,-1,-1,-1],x=this._renderer,E=x.autoClear,R=x.toneMapping;x.getClearColor(Qi),x.toneMapping=Lt,x.autoClear=!1;const G=new ai({name:"PMREM.Background",side:vt,depthWrite:!1,depthTest:!1}),D=new xt(new Gr,G);let f=!1;const o=n.background;o?o.isColor&&(G.color.copy(o),n.background=null,f=!0):(G.color.copy(Qi),f=!0);for(let w=0;w<6;w++){const A=w%3;A===0?(b.up.set(0,M[w],0),b.position.set(a.x,a.y,a.z),b.lookAt(a.x+y[w],a.y,a.z)):A===1?(b.up.set(0,0,M[w]),b.position.set(a.x,a.y,a.z),b.lookAt(a.x,a.y+y[w],a.z)):(b.up.set(0,M[w],0),b.position.set(a.x,a.y,a.z),b.lookAt(a.x,a.y,a.z+y[w]));const _=this._cubeSize;En(r,A*_,w>2?_:0,_,_),x.setRenderTarget(r),f&&x.render(D,b),x.render(n,b)}D.geometry.dispose(),D.material.dispose(),x.toneMapping=R,x.autoClear=E,n.background=o}_textureToCubeUV(n,t){const i=this._renderer,r=n.mapping===un||n.mapping===Qt;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ir()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nr());const a=r?this._cubemapMaterial:this._equirectMaterial,d=new xt(this._lodPlanes[0],a),u=a.uniforms;u.envMap.value=n;const b=this._cubeSize;En(t,0,0,3*b,2*b),i.setRenderTarget(t),i.render(d,Vn)}_applyPMREM(n){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const d=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),u=Ji[(r-a-1)%Ji.length];this._blur(n,a-1,a,d,u)}t.autoClear=i}_blur(n,t,i,r,a){const d=this._pingPongRenderTarget;this._halfBlur(n,d,t,i,r,"latitudinal",a),this._halfBlur(d,n,i,i,r,"longitudinal",a)}_halfBlur(n,t,i,r,a,d,u){const b=this._renderer,M=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const y=3,x=new xt(this._lodPlanes[r],M),E=M.uniforms,R=this._sizeLods[i]-1,G=isFinite(a)?Math.PI/(2*R):2*Math.PI/(2*Bt-1),D=a/G,f=isFinite(a)?1+Math.floor(y*D):Bt;f>Bt&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Bt}`);const o=[];let w=0;for(let I=0;I<Bt;++I){const C=I/D,p=Math.exp(-C*C/2);o.push(p),I===0?w+=p:I<f&&(w+=2*p)}for(let I=0;I<o.length;I++)o[I]=o[I]/w;E.envMap.value=n.texture,E.samples.value=f,E.weights.value=o,E.latitudinal.value=d==="latitudinal",u&&(E.poleAxis.value=u);const{_lodMax:A}=this;E.dTheta.value=G,E.mipInt.value=A-i;const _=this._sizeLods[r],z=3*_*(r>A-qt?r-A+qt:0),P=4*(this._cubeSize-_);En(t,z,P,3*_,2*_),b.setRenderTarget(t),b.render(x,Vn)}}function Cc(e){const n=[],t=[],i=[];let r=e;const a=e-qt+1+ji.length;for(let d=0;d<a;d++){const u=Math.pow(2,r);t.push(u);let b=1/u;d>e-qt?b=ji[d-e+qt-1]:d===0&&(b=0),i.push(b);const M=1/(u-2),y=-M,x=1+M,E=[y,y,x,y,x,x,y,y,x,x,y,x],R=6,G=6,D=3,f=2,o=1,w=new Float32Array(D*G*R),A=new Float32Array(f*G*R),_=new Float32Array(o*G*R);for(let P=0;P<R;P++){const I=P%3*2/3-1,C=P>2?0:-1,p=[I,C,0,I+2/3,C,0,I+2/3,C+1,0,I,C,0,I+2/3,C+1,0,I,C+1,0];w.set(p,D*G*P),A.set(E,f*G*P);const c=[P,P,P,P,P,P];_.set(c,o*G*P)}const z=new Cr;z.setAttribute("position",new xn(w,D)),z.setAttribute("uv",new xn(A,f)),z.setAttribute("faceIndex",new xn(_,o)),n.push(z),r>qt&&r--}return{lodPlanes:n,sizeLods:t,sigmas:i}}function tr(e,n,t){const i=new jt(e,n,t);return i.texture.mapping=wn,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function En(e,n,t,i,r){e.viewport.set(n,t,i,r),e.scissor.set(n,t,i,r)}function Pc(e,n,t){const i=new Float32Array(Bt),r=new be(0,1,0);return new Vt({name:"SphericalGaussianBlur",defines:{n:Bt,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:oi(),fragmentShader:`

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
		`,blending:Gt,depthTest:!1,depthWrite:!1})}function nr(){return new Vt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oi(),fragmentShader:`

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
		`,blending:Gt,depthTest:!1,depthWrite:!1})}function ir(){return new Vt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gt,depthTest:!1,depthWrite:!1})}function oi(){return`

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
	`}function Dc(e){let n=new WeakMap,t=null;function i(u){if(u&&u.isTexture){const b=u.mapping,M=b===Dn||b===ni,y=b===un||b===Qt;if(M||y){let x=n.get(u);const E=x!==void 0?x.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==E)return t===null&&(t=new er(e)),x=M?t.fromEquirectangular(u,x):t.fromCubemap(u,x),x.texture.pmremVersion=u.pmremVersion,n.set(u,x),x.texture;if(x!==void 0)return x.texture;{const R=u.image;return M&&R&&R.height>0||y&&R&&r(R)?(t===null&&(t=new er(e)),x=M?t.fromEquirectangular(u):t.fromCubemap(u),x.texture.pmremVersion=u.pmremVersion,n.set(u,x),u.addEventListener("dispose",a),x.texture):null}}}return u}function r(u){let b=0;const M=6;for(let y=0;y<M;y++)u[y]!==void 0&&b++;return b===M}function a(u){const b=u.target;b.removeEventListener("dispose",a);const M=n.get(b);M!==void 0&&(n.delete(b),M.dispose())}function d(){n=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:d}}function wc(e){const n={};function t(i){if(n[i]!==void 0)return n[i];let r;switch(i){case"WEBGL_depth_texture":r=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=e.getExtension(i)}return n[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Ot("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Lc(e,n,t,i){const r={},a=new WeakMap;function d(x){const E=x.target;E.index!==null&&n.remove(E.index);for(const G in E.attributes)n.remove(E.attributes[G]);E.removeEventListener("dispose",d),delete r[E.id];const R=a.get(E);R&&(n.remove(R),a.delete(E)),i.releaseStatesOfGeometry(E),E.isInstancedBufferGeometry===!0&&delete E._maxInstanceCount,t.memory.geometries--}function u(x,E){return r[E.id]===!0||(E.addEventListener("dispose",d),r[E.id]=!0,t.memory.geometries++),E}function b(x){const E=x.attributes;for(const R in E)n.update(E[R],e.ARRAY_BUFFER)}function M(x){const E=[],R=x.index,G=x.attributes.position;let D=0;if(R!==null){const w=R.array;D=R.version;for(let A=0,_=w.length;A<_;A+=3){const z=w[A+0],P=w[A+1],I=w[A+2];E.push(z,P,P,I,I,z)}}else if(G!==void 0){const w=G.array;D=G.version;for(let A=0,_=w.length/3-1;A<_;A+=3){const z=A+0,P=A+1,I=A+2;E.push(z,P,P,I,I,z)}}else return;const f=new(ho(E)?uo:po)(E,1);f.version=D;const o=a.get(x);o&&n.remove(o),a.set(x,f)}function y(x){const E=a.get(x);if(E){const R=x.index;R!==null&&E.version<R.version&&M(x)}else M(x);return a.get(x)}return{get:u,update:b,getWireframeAttribute:y}}function Uc(e,n,t){let i;function r(E){i=E}let a,d;function u(E){a=E.type,d=E.bytesPerElement}function b(E,R){e.drawElements(i,R,a,E*d),t.update(R,i,1)}function M(E,R,G){G!==0&&(e.drawElementsInstanced(i,R,a,E*d,G),t.update(R,i,G))}function y(E,R,G){if(G===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,R,0,a,E,0,G);let f=0;for(let o=0;o<G;o++)f+=R[o];t.update(f,i,1)}function x(E,R,G,D){if(G===0)return;const f=n.get("WEBGL_multi_draw");if(f===null)for(let o=0;o<E.length;o++)M(E[o]/d,R[o],D[o]);else{f.multiDrawElementsInstancedWEBGL(i,R,0,a,E,0,D,0,G);let o=0;for(let w=0;w<G;w++)o+=R[w]*D[w];t.update(o,i,1)}}this.setMode=r,this.setIndex=u,this.render=b,this.renderInstances=M,this.renderMultiDraw=y,this.renderMultiDrawInstances=x}function yc(e){const n={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,d,u){switch(t.calls++,d){case e.TRIANGLES:t.triangles+=u*(a/3);break;case e.LINES:t.lines+=u*(a/2);break;case e.LINE_STRIP:t.lines+=u*(a-1);break;case e.LINE_LOOP:t.lines+=u*a;break;case e.POINTS:t.points+=u*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:n,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Ic(e,n,t){const i=new WeakMap,r=new pt;function a(d,u,b){const M=d.morphTargetInfluences,y=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,x=y!==void 0?y.length:0;let E=i.get(u);if(E===void 0||E.count!==x){let p=function(){I.dispose(),i.delete(u),u.removeEventListener("dispose",p)};E!==void 0&&E.texture.dispose();const R=u.morphAttributes.position!==void 0,G=u.morphAttributes.normal!==void 0,D=u.morphAttributes.color!==void 0,f=u.morphAttributes.position||[],o=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let A=0;R===!0&&(A=1),G===!0&&(A=2),D===!0&&(A=3);let _=u.attributes.position.count*A,z=1;_>n.maxTextureSize&&(z=Math.ceil(_/n.maxTextureSize),_=n.maxTextureSize);const P=new Float32Array(_*z*4*x),I=new Fr(P,_,z,x);I.type=At,I.needsUpdate=!0;const C=A*4;for(let c=0;c<x;c++){const g=f[c],V=o[c],B=w[c],O=_*z*4*c;for(let q=0;q<g.count;q++){const F=q*C;R===!0&&(r.fromBufferAttribute(g,q),P[O+F+0]=r.x,P[O+F+1]=r.y,P[O+F+2]=r.z,P[O+F+3]=0),G===!0&&(r.fromBufferAttribute(V,q),P[O+F+4]=r.x,P[O+F+5]=r.y,P[O+F+6]=r.z,P[O+F+7]=0),D===!0&&(r.fromBufferAttribute(B,q),P[O+F+8]=r.x,P[O+F+9]=r.y,P[O+F+10]=r.z,P[O+F+11]=B.itemSize===4?r.w:1)}}E={count:x,texture:I,size:new Ke(_,z)},i.set(u,E),u.addEventListener("dispose",p)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)b.getUniforms().setValue(e,"morphTexture",d.morphTexture,t);else{let R=0;for(let D=0;D<M.length;D++)R+=M[D];const G=u.morphTargetsRelative?1:1-R;b.getUniforms().setValue(e,"morphTargetBaseInfluence",G),b.getUniforms().setValue(e,"morphTargetInfluences",M)}b.getUniforms().setValue(e,"morphTargetsTexture",E.texture,t),b.getUniforms().setValue(e,"morphTargetsTextureSize",E.size)}return{update:a}}function Nc(e,n,t,i){let r=new WeakMap;function a(b){const M=i.render.frame,y=b.geometry,x=n.get(b,y);if(r.get(x)!==M&&(n.update(x),r.set(x,M)),b.isInstancedMesh&&(b.hasEventListener("dispose",u)===!1&&b.addEventListener("dispose",u),r.get(b)!==M&&(t.update(b.instanceMatrix,e.ARRAY_BUFFER),b.instanceColor!==null&&t.update(b.instanceColor,e.ARRAY_BUFFER),r.set(b,M))),b.isSkinnedMesh){const E=b.skeleton;r.get(E)!==M&&(E.update(),r.set(E,M))}return x}function d(){r=new WeakMap}function u(b){const M=b.target;M.removeEventListener("dispose",u),t.remove(M.instanceMatrix),M.instanceColor!==null&&t.remove(M.instanceColor)}return{update:a,dispose:d}}const Wr=new Lr,rr=new Ar(1,1),Xr=new Fr,Yr=new xo,Kr=new To,ar=[],or=[],sr=new Float32Array(16),lr=new Float32Array(9),cr=new Float32Array(4);function en(e,n,t){const i=e[0];if(i<=0||i>0)return e;const r=n*t;let a=ar[r];if(a===void 0&&(a=new Float32Array(r),ar[r]=a),n!==0){i.toArray(a,0);for(let d=1,u=0;d!==n;++d)u+=t,e[d].toArray(a,u)}return a}function at(e,n){if(e.length!==n.length)return!1;for(let t=0,i=e.length;t<i;t++)if(e[t]!==n[t])return!1;return!0}function ot(e,n){for(let t=0,i=n.length;t<i;t++)e[t]=n[t]}function Ln(e,n){let t=or[n];t===void 0&&(t=new Int32Array(n),or[n]=t);for(let i=0;i!==n;++i)t[i]=e.allocateTextureUnit();return t}function Oc(e,n){const t=this.cache;t[0]!==n&&(e.uniform1f(this.addr,n),t[0]=n)}function Fc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2f(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(at(t,n))return;e.uniform2fv(this.addr,n),ot(t,n)}}function Bc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3f(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else if(n.r!==void 0)(t[0]!==n.r||t[1]!==n.g||t[2]!==n.b)&&(e.uniform3f(this.addr,n.r,n.g,n.b),t[0]=n.r,t[1]=n.g,t[2]=n.b);else{if(at(t,n))return;e.uniform3fv(this.addr,n),ot(t,n)}}function Gc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4f(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(at(t,n))return;e.uniform4fv(this.addr,n),ot(t,n)}}function Hc(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(at(t,n))return;e.uniformMatrix2fv(this.addr,!1,n),ot(t,n)}else{if(at(t,i))return;cr.set(i),e.uniformMatrix2fv(this.addr,!1,cr),ot(t,i)}}function Vc(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(at(t,n))return;e.uniformMatrix3fv(this.addr,!1,n),ot(t,n)}else{if(at(t,i))return;lr.set(i),e.uniformMatrix3fv(this.addr,!1,lr),ot(t,i)}}function kc(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(at(t,n))return;e.uniformMatrix4fv(this.addr,!1,n),ot(t,n)}else{if(at(t,i))return;sr.set(i),e.uniformMatrix4fv(this.addr,!1,sr),ot(t,i)}}function zc(e,n){const t=this.cache;t[0]!==n&&(e.uniform1i(this.addr,n),t[0]=n)}function Wc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2i(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(at(t,n))return;e.uniform2iv(this.addr,n),ot(t,n)}}function Xc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3i(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(at(t,n))return;e.uniform3iv(this.addr,n),ot(t,n)}}function Yc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4i(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(at(t,n))return;e.uniform4iv(this.addr,n),ot(t,n)}}function Kc(e,n){const t=this.cache;t[0]!==n&&(e.uniform1ui(this.addr,n),t[0]=n)}function qc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2ui(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(at(t,n))return;e.uniform2uiv(this.addr,n),ot(t,n)}}function Zc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3ui(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(at(t,n))return;e.uniform3uiv(this.addr,n),ot(t,n)}}function $c(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4ui(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(at(t,n))return;e.uniform4uiv(this.addr,n),ot(t,n)}}function jc(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r);let a;this.type===e.SAMPLER_2D_SHADOW?(rr.compareFunction=Rr,a=rr):a=Wr,t.setTexture2D(n||a,r)}function Qc(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(n||Yr,r)}function Jc(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(n||Kr,r)}function ef(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(n||Xr,r)}function tf(e){switch(e){case 5126:return Oc;case 35664:return Fc;case 35665:return Bc;case 35666:return Gc;case 35674:return Hc;case 35675:return Vc;case 35676:return kc;case 5124:case 35670:return zc;case 35667:case 35671:return Wc;case 35668:case 35672:return Xc;case 35669:case 35673:return Yc;case 5125:return Kc;case 36294:return qc;case 36295:return Zc;case 36296:return $c;case 35678:case 36198:case 36298:case 36306:case 35682:return jc;case 35679:case 36299:case 36307:return Qc;case 35680:case 36300:case 36308:case 36293:return Jc;case 36289:case 36303:case 36311:case 36292:return ef}}function nf(e,n){e.uniform1fv(this.addr,n)}function rf(e,n){const t=en(n,this.size,2);e.uniform2fv(this.addr,t)}function af(e,n){const t=en(n,this.size,3);e.uniform3fv(this.addr,t)}function of(e,n){const t=en(n,this.size,4);e.uniform4fv(this.addr,t)}function sf(e,n){const t=en(n,this.size,4);e.uniformMatrix2fv(this.addr,!1,t)}function lf(e,n){const t=en(n,this.size,9);e.uniformMatrix3fv(this.addr,!1,t)}function cf(e,n){const t=en(n,this.size,16);e.uniformMatrix4fv(this.addr,!1,t)}function ff(e,n){e.uniform1iv(this.addr,n)}function df(e,n){e.uniform2iv(this.addr,n)}function uf(e,n){e.uniform3iv(this.addr,n)}function pf(e,n){e.uniform4iv(this.addr,n)}function hf(e,n){e.uniform1uiv(this.addr,n)}function mf(e,n){e.uniform2uiv(this.addr,n)}function _f(e,n){e.uniform3uiv(this.addr,n)}function gf(e,n){e.uniform4uiv(this.addr,n)}function vf(e,n,t){const i=this.cache,r=n.length,a=Ln(t,r);at(i,a)||(e.uniform1iv(this.addr,a),ot(i,a));for(let d=0;d!==r;++d)t.setTexture2D(n[d]||Wr,a[d])}function Ef(e,n,t){const i=this.cache,r=n.length,a=Ln(t,r);at(i,a)||(e.uniform1iv(this.addr,a),ot(i,a));for(let d=0;d!==r;++d)t.setTexture3D(n[d]||Yr,a[d])}function Sf(e,n,t){const i=this.cache,r=n.length,a=Ln(t,r);at(i,a)||(e.uniform1iv(this.addr,a),ot(i,a));for(let d=0;d!==r;++d)t.setTextureCube(n[d]||Kr,a[d])}function Mf(e,n,t){const i=this.cache,r=n.length,a=Ln(t,r);at(i,a)||(e.uniform1iv(this.addr,a),ot(i,a));for(let d=0;d!==r;++d)t.setTexture2DArray(n[d]||Xr,a[d])}function Tf(e){switch(e){case 5126:return nf;case 35664:return rf;case 35665:return af;case 35666:return of;case 35674:return sf;case 35675:return lf;case 35676:return cf;case 5124:case 35670:return ff;case 35667:case 35671:return df;case 35668:case 35672:return uf;case 35669:case 35673:return pf;case 5125:return hf;case 36294:return mf;case 36295:return _f;case 36296:return gf;case 35678:case 36198:case 36298:case 36306:case 35682:return vf;case 35679:case 36299:case 36307:return Ef;case 35680:case 36300:case 36308:case 36293:return Sf;case 36289:case 36303:case 36311:case 36292:return Mf}}class xf{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.setValue=tf(t.type)}}class Af{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Tf(t.type)}}class Rf{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,t,i){const r=this.seq;for(let a=0,d=r.length;a!==d;++a){const u=r[a];u.setValue(n,t[u.id],i)}}}const Yn=/(\w+)(\])?(\[|\.)?/g;function fr(e,n){e.seq.push(n),e.map[n.id]=n}function bf(e,n,t){const i=e.name,r=i.length;for(Yn.lastIndex=0;;){const a=Yn.exec(i),d=Yn.lastIndex;let u=a[1];const b=a[2]==="]",M=a[3];if(b&&(u=u|0),M===void 0||M==="["&&d+2===r){fr(t,M===void 0?new xf(u,e,n):new Af(u,e,n));break}else{let x=t.map[u];x===void 0&&(x=new Rf(u),fr(t,x)),t=x}}}class An{constructor(n,t){this.seq=[],this.map={};const i=n.getProgramParameter(t,n.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=n.getActiveUniform(t,r),d=n.getUniformLocation(t,a.name);bf(a,d,this)}}setValue(n,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(n,i,r)}setOptional(n,t,i){const r=t[i];r!==void 0&&this.setValue(n,i,r)}static upload(n,t,i,r){for(let a=0,d=t.length;a!==d;++a){const u=t[a],b=i[u.id];b.needsUpdate!==!1&&u.setValue(n,b.value,r)}}static seqWithValue(n,t){const i=[];for(let r=0,a=n.length;r!==a;++r){const d=n[r];d.id in t&&i.push(d)}return i}}function dr(e,n,t){const i=e.createShader(n);return e.shaderSource(i,t),e.compileShader(i),i}const Cf=37297;let Pf=0;function Df(e,n){const t=e.split(`
`),i=[],r=Math.max(n-6,0),a=Math.min(n+6,t.length);for(let d=r;d<a;d++){const u=d+1;i.push(`${u===n?">":" "} ${u}: ${t[d]}`)}return i.join(`
`)}const ur=new He;function wf(e){it._getMatrix(ur,it.workingColorSpace,e);const n=`mat3( ${ur.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(e)){case Vr:return[n,"LinearTransferOETF"];case Ze:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[n,"LinearTransferOETF"]}}function pr(e,n,t){const i=e.getShaderParameter(n,e.COMPILE_STATUS),r=e.getShaderInfoLog(n).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const d=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Df(e.getShaderSource(n),d)}else return r}function Lf(e,n){const t=wf(n);return[`vec4 ${e}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Uf(e,n){let t;switch(n){case Mo:t="Linear";break;case So:t="Reinhard";break;case Eo:t="Cineon";break;case kr:t="ACESFilmic";break;case vo:t="AgX";break;case go:t="Neutral";break;case _o:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",n),t="Linear"}return"vec3 "+e+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Sn=new be;function yf(){it.getLuminanceCoefficients(Sn);const e=Sn.x.toFixed(4),n=Sn.y.toFixed(4),t=Sn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${n}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function If(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(an).join(`
`)}function Nf(e){const n=[];for(const t in e){const i=e[t];i!==!1&&n.push("#define "+t+" "+i)}return n.join(`
`)}function Of(e,n){const t={},i=e.getProgramParameter(n,e.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=e.getActiveAttrib(n,r),d=a.name;let u=1;a.type===e.FLOAT_MAT2&&(u=2),a.type===e.FLOAT_MAT3&&(u=3),a.type===e.FLOAT_MAT4&&(u=4),t[d]={type:a.type,location:e.getAttribLocation(n,d),locationSize:u}}return t}function an(e){return e!==""}function hr(e,n){const t=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function mr(e,n){return e.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const Ff=/^[ \t]*#include +<([\w\d./]+)>/gm;function ii(e){return e.replace(Ff,Gf)}const Bf=new Map;function Gf(e,n){let t=Le[n];if(t===void 0){const i=Bf.get(n);if(i!==void 0)t=Le[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,i);else throw new Error("Can not resolve #include <"+n+">")}return ii(t)}const Hf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _r(e){return e.replace(Hf,Vf)}function Vf(e,n,t,i){let r="";for(let a=parseInt(n);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function gr(e){let n=`precision ${e.precision} float;
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
	`;return e.precision==="highp"?n+=`
#define HIGH_PRECISION`:e.precision==="mediump"?n+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(n+=`
#define LOW_PRECISION`),n}function kf(e){let n="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Pr?n="SHADOWMAP_TYPE_PCF":e.shadowMapType===mo?n="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===bt&&(n="SHADOWMAP_TYPE_VSM"),n}function zf(e){let n="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case un:case Qt:n="ENVMAP_TYPE_CUBE";break;case wn:n="ENVMAP_TYPE_CUBE_UV";break}return n}function Wf(e){let n="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case Qt:n="ENVMAP_MODE_REFRACTION";break}return n}function Xf(e){let n="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case Co:n="ENVMAP_BLENDING_MULTIPLY";break;case bo:n="ENVMAP_BLENDING_MIX";break;case Ro:n="ENVMAP_BLENDING_ADD";break}return n}function Yf(e){const n=e.envMapCubeUVHeight;if(n===null)return null;const t=Math.log2(n)-2,i=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Kf(e,n,t,i){const r=e.getContext(),a=t.defines;let d=t.vertexShader,u=t.fragmentShader;const b=kf(t),M=zf(t),y=Wf(t),x=Xf(t),E=Yf(t),R=If(t),G=Nf(a),D=r.createProgram();let f,o,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,G].filter(an).join(`
`),f.length>0&&(f+=`
`),o=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,G].filter(an).join(`
`),o.length>0&&(o+=`
`)):(f=[gr(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,G,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+y:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+b:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(an).join(`
`),o=[gr(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,G,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+M:"",t.envMap?"#define "+y:"",t.envMap?"#define "+x:"",E?"#define CUBEUV_TEXEL_WIDTH "+E.texelWidth:"",E?"#define CUBEUV_TEXEL_HEIGHT "+E.texelHeight:"",E?"#define CUBEUV_MAX_MIP "+E.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+b:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Lt?"#define TONE_MAPPING":"",t.toneMapping!==Lt?Le.tonemapping_pars_fragment:"",t.toneMapping!==Lt?Uf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Le.colorspace_pars_fragment,Lf("linearToOutputTexel",t.outputColorSpace),yf(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(an).join(`
`)),d=ii(d),d=hr(d,t),d=mr(d,t),u=ii(u),u=hr(u,t),u=mr(u,t),d=_r(d),u=_r(u),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,f=[R,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,o=["#define varying in",t.glslVersion===qi?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qi?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+o);const A=w+f+d,_=w+o+u,z=dr(r,r.VERTEX_SHADER,A),P=dr(r,r.FRAGMENT_SHADER,_);r.attachShader(D,z),r.attachShader(D,P),t.index0AttributeName!==void 0?r.bindAttribLocation(D,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(D,0,"position"),r.linkProgram(D);function I(g){if(e.debug.checkShaderErrors){const V=r.getProgramInfoLog(D).trim(),B=r.getShaderInfoLog(z).trim(),O=r.getShaderInfoLog(P).trim();let q=!0,F=!0;if(r.getProgramParameter(D,r.LINK_STATUS)===!1)if(q=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(r,D,z,P);else{const Q=pr(r,z,"vertex"),k=pr(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(D,r.VALIDATE_STATUS)+`

Material Name: `+g.name+`
Material Type: `+g.type+`

Program Info Log: `+V+`
`+Q+`
`+k)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(B===""||O==="")&&(F=!1);F&&(g.diagnostics={runnable:q,programLog:V,vertexShader:{log:B,prefix:f},fragmentShader:{log:O,prefix:o}})}r.deleteShader(z),r.deleteShader(P),C=new An(r,D),p=Of(r,D)}let C;this.getUniforms=function(){return C===void 0&&I(this),C};let p;this.getAttributes=function(){return p===void 0&&I(this),p};let c=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return c===!1&&(c=r.getProgramParameter(D,Cf)),c},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(D),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Pf++,this.cacheKey=n,this.usedTimes=1,this.program=D,this.vertexShader=z,this.fragmentShader=P,this}let qf=0;class Zf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const t=n.vertexShader,i=n.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),d=this._getShaderCacheForMaterial(n);return d.has(r)===!1&&(d.add(r),r.usedTimes++),d.has(a)===!1&&(d.add(a),a.usedTimes++),this}remove(n){const t=this.materialCache.get(n);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const t=this.materialCache;let i=t.get(n);return i===void 0&&(i=new Set,t.set(n,i)),i}_getShaderStage(n){const t=this.shaderCache;let i=t.get(n);return i===void 0&&(i=new $f(n),t.set(n,i)),i}}class $f{constructor(n){this.id=qf++,this.code=n,this.usedTimes=0}}function jf(e,n,t,i,r,a,d){const u=new Ya,b=new Zf,M=new Set,y=[],x=r.logarithmicDepthBuffer,E=r.vertexTextures;let R=r.precision;const G={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function D(p){return M.add(p),p===0?"uv":`uv${p}`}function f(p,c,g,V,B){const O=V.fog,q=B.geometry,F=p.isMeshStandardMaterial?V.environment:null,Q=(p.isMeshStandardMaterial?t:n).get(p.envMap||F),k=Q&&Q.mapping===wn?Q.image.height:null,ue=G[p.type];p.precision!==null&&(R=r.getMaxPrecision(p.precision),R!==p.precision&&console.warn("THREE.WebGLProgram.getParameters:",p.precision,"not supported, using",R,"instead."));const he=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ce=he!==void 0?he.length:0;let De=0;q.morphAttributes.position!==void 0&&(De=1),q.morphAttributes.normal!==void 0&&(De=2),q.morphAttributes.color!==void 0&&(De=3);let Be,W,J,pe;if(ue){const We=Mt[ue];Be=We.vertexShader,W=We.fragmentShader}else Be=p.vertexShader,W=p.fragmentShader,b.update(p),J=b.getVertexShaderID(p),pe=b.getFragmentShaderID(p);const ie=e.getRenderTarget(),Se=e.state.buffers.depth.getReversed(),Ve=B.isInstancedMesh===!0,Te=B.isBatchedMesh===!0,tt=!!p.map,Qe=!!p.matcap,Ue=!!Q,m=!!p.aoMap,mt=!!p.lightMap,ye=!!p.bumpMap,Ie=!!p.normalMap,ge=!!p.displacementMap,qe=!!p.emissiveMap,_e=!!p.metalnessMap,h=!!p.roughnessMap,s=p.anisotropy>0,L=p.clearcoat>0,Y=p.dispersion>0,Z=p.iridescence>0,X=p.sheen>0,me=p.transmission>0,re=s&&!!p.anisotropyMap,le=L&&!!p.clearcoatMap,Oe=L&&!!p.clearcoatNormalMap,j=L&&!!p.clearcoatRoughnessMap,ce=Z&&!!p.iridescenceMap,Me=Z&&!!p.iridescenceThicknessMap,xe=X&&!!p.sheenColorMap,fe=X&&!!p.sheenRoughnessMap,Ne=!!p.specularMap,we=!!p.specularColorMap,Ye=!!p.specularIntensityMap,v=me&&!!p.transmissionMap,te=me&&!!p.thicknessMap,H=!!p.gradientMap,K=!!p.alphaMap,oe=p.alphaTest>0,ae=!!p.alphaHash,Pe=!!p.extensions;let Je=Lt;p.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Je=e.toneMapping);const lt={shaderID:ue,shaderType:p.type,shaderName:p.name,vertexShader:Be,fragmentShader:W,defines:p.defines,customVertexShaderID:J,customFragmentShaderID:pe,isRawShaderMaterial:p.isRawShaderMaterial===!0,glslVersion:p.glslVersion,precision:R,batching:Te,batchingColor:Te&&B._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&B.instanceColor!==null,instancingMorph:Ve&&B.morphTexture!==null,supportsVertexTextures:E,outputColorSpace:ie===null?e.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:pn,alphaToCoverage:!!p.alphaToCoverage,map:tt,matcap:Qe,envMap:Ue,envMapMode:Ue&&Q.mapping,envMapCubeUVHeight:k,aoMap:m,lightMap:mt,bumpMap:ye,normalMap:Ie,displacementMap:E&&ge,emissiveMap:qe,normalMapObjectSpace:Ie&&p.normalMapType===co,normalMapTangentSpace:Ie&&p.normalMapType===lo,metalnessMap:_e,roughnessMap:h,anisotropy:s,anisotropyMap:re,clearcoat:L,clearcoatMap:le,clearcoatNormalMap:Oe,clearcoatRoughnessMap:j,dispersion:Y,iridescence:Z,iridescenceMap:ce,iridescenceThicknessMap:Me,sheen:X,sheenColorMap:xe,sheenRoughnessMap:fe,specularMap:Ne,specularColorMap:we,specularIntensityMap:Ye,transmission:me,transmissionMap:v,thicknessMap:te,gradientMap:H,opaque:p.transparent===!1&&p.blending===Tn&&p.alphaToCoverage===!1,alphaMap:K,alphaTest:oe,alphaHash:ae,combine:p.combine,mapUv:tt&&D(p.map.channel),aoMapUv:m&&D(p.aoMap.channel),lightMapUv:mt&&D(p.lightMap.channel),bumpMapUv:ye&&D(p.bumpMap.channel),normalMapUv:Ie&&D(p.normalMap.channel),displacementMapUv:ge&&D(p.displacementMap.channel),emissiveMapUv:qe&&D(p.emissiveMap.channel),metalnessMapUv:_e&&D(p.metalnessMap.channel),roughnessMapUv:h&&D(p.roughnessMap.channel),anisotropyMapUv:re&&D(p.anisotropyMap.channel),clearcoatMapUv:le&&D(p.clearcoatMap.channel),clearcoatNormalMapUv:Oe&&D(p.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&D(p.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&D(p.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&D(p.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&D(p.sheenColorMap.channel),sheenRoughnessMapUv:fe&&D(p.sheenRoughnessMap.channel),specularMapUv:Ne&&D(p.specularMap.channel),specularColorMapUv:we&&D(p.specularColorMap.channel),specularIntensityMapUv:Ye&&D(p.specularIntensityMap.channel),transmissionMapUv:v&&D(p.transmissionMap.channel),thicknessMapUv:te&&D(p.thicknessMap.channel),alphaMapUv:K&&D(p.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Ie||s),vertexColors:p.vertexColors,vertexAlphas:p.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!q.attributes.uv&&(tt||K),fog:!!O,useFog:p.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:p.flatShading===!0,sizeAttenuation:p.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:Se,skinning:B.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:De,numDirLights:c.directional.length,numPointLights:c.point.length,numSpotLights:c.spot.length,numSpotLightMaps:c.spotLightMap.length,numRectAreaLights:c.rectArea.length,numHemiLights:c.hemi.length,numDirLightShadows:c.directionalShadowMap.length,numPointLightShadows:c.pointShadowMap.length,numSpotLightShadows:c.spotShadowMap.length,numSpotLightShadowsWithMaps:c.numSpotLightShadowsWithMaps,numLightProbes:c.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:p.dithering,shadowMapEnabled:e.shadowMap.enabled&&g.length>0,shadowMapType:e.shadowMap.type,toneMapping:Je,decodeVideoTexture:tt&&p.map.isVideoTexture===!0&&it.getTransfer(p.map.colorSpace)===Ze,decodeVideoTextureEmissive:qe&&p.emissiveMap.isVideoTexture===!0&&it.getTransfer(p.emissiveMap.colorSpace)===Ze,premultipliedAlpha:p.premultipliedAlpha,doubleSided:p.side===Tt,flipSided:p.side===vt,useDepthPacking:p.depthPacking>=0,depthPacking:p.depthPacking||0,index0AttributeName:p.index0AttributeName,extensionClipCullDistance:Pe&&p.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&p.extensions.multiDraw===!0||Te)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:p.customProgramCacheKey()};return lt.vertexUv1s=M.has(1),lt.vertexUv2s=M.has(2),lt.vertexUv3s=M.has(3),M.clear(),lt}function o(p){const c=[];if(p.shaderID?c.push(p.shaderID):(c.push(p.customVertexShaderID),c.push(p.customFragmentShaderID)),p.defines!==void 0)for(const g in p.defines)c.push(g),c.push(p.defines[g]);return p.isRawShaderMaterial===!1&&(w(c,p),A(c,p),c.push(e.outputColorSpace)),c.push(p.customProgramCacheKey),c.join()}function w(p,c){p.push(c.precision),p.push(c.outputColorSpace),p.push(c.envMapMode),p.push(c.envMapCubeUVHeight),p.push(c.mapUv),p.push(c.alphaMapUv),p.push(c.lightMapUv),p.push(c.aoMapUv),p.push(c.bumpMapUv),p.push(c.normalMapUv),p.push(c.displacementMapUv),p.push(c.emissiveMapUv),p.push(c.metalnessMapUv),p.push(c.roughnessMapUv),p.push(c.anisotropyMapUv),p.push(c.clearcoatMapUv),p.push(c.clearcoatNormalMapUv),p.push(c.clearcoatRoughnessMapUv),p.push(c.iridescenceMapUv),p.push(c.iridescenceThicknessMapUv),p.push(c.sheenColorMapUv),p.push(c.sheenRoughnessMapUv),p.push(c.specularMapUv),p.push(c.specularColorMapUv),p.push(c.specularIntensityMapUv),p.push(c.transmissionMapUv),p.push(c.thicknessMapUv),p.push(c.combine),p.push(c.fogExp2),p.push(c.sizeAttenuation),p.push(c.morphTargetsCount),p.push(c.morphAttributeCount),p.push(c.numDirLights),p.push(c.numPointLights),p.push(c.numSpotLights),p.push(c.numSpotLightMaps),p.push(c.numHemiLights),p.push(c.numRectAreaLights),p.push(c.numDirLightShadows),p.push(c.numPointLightShadows),p.push(c.numSpotLightShadows),p.push(c.numSpotLightShadowsWithMaps),p.push(c.numLightProbes),p.push(c.shadowMapType),p.push(c.toneMapping),p.push(c.numClippingPlanes),p.push(c.numClipIntersection),p.push(c.depthPacking)}function A(p,c){u.disableAll(),c.supportsVertexTextures&&u.enable(0),c.instancing&&u.enable(1),c.instancingColor&&u.enable(2),c.instancingMorph&&u.enable(3),c.matcap&&u.enable(4),c.envMap&&u.enable(5),c.normalMapObjectSpace&&u.enable(6),c.normalMapTangentSpace&&u.enable(7),c.clearcoat&&u.enable(8),c.iridescence&&u.enable(9),c.alphaTest&&u.enable(10),c.vertexColors&&u.enable(11),c.vertexAlphas&&u.enable(12),c.vertexUv1s&&u.enable(13),c.vertexUv2s&&u.enable(14),c.vertexUv3s&&u.enable(15),c.vertexTangents&&u.enable(16),c.anisotropy&&u.enable(17),c.alphaHash&&u.enable(18),c.batching&&u.enable(19),c.dispersion&&u.enable(20),c.batchingColor&&u.enable(21),p.push(u.mask),u.disableAll(),c.fog&&u.enable(0),c.useFog&&u.enable(1),c.flatShading&&u.enable(2),c.logarithmicDepthBuffer&&u.enable(3),c.reverseDepthBuffer&&u.enable(4),c.skinning&&u.enable(5),c.morphTargets&&u.enable(6),c.morphNormals&&u.enable(7),c.morphColors&&u.enable(8),c.premultipliedAlpha&&u.enable(9),c.shadowMapEnabled&&u.enable(10),c.doubleSided&&u.enable(11),c.flipSided&&u.enable(12),c.useDepthPacking&&u.enable(13),c.dithering&&u.enable(14),c.transmission&&u.enable(15),c.sheen&&u.enable(16),c.opaque&&u.enable(17),c.pointsUvs&&u.enable(18),c.decodeVideoTexture&&u.enable(19),c.decodeVideoTextureEmissive&&u.enable(20),c.alphaToCoverage&&u.enable(21),p.push(u.mask)}function _(p){const c=G[p.type];let g;if(c){const V=Mt[c];g=so.clone(V.uniforms)}else g=p.uniforms;return g}function z(p,c){let g;for(let V=0,B=y.length;V<B;V++){const O=y[V];if(O.cacheKey===c){g=O,++g.usedTimes;break}}return g===void 0&&(g=new Kf(e,c,p,a),y.push(g)),g}function P(p){if(--p.usedTimes===0){const c=y.indexOf(p);y[c]=y[y.length-1],y.pop(),p.destroy()}}function I(p){b.remove(p)}function C(){b.dispose()}return{getParameters:f,getProgramCacheKey:o,getUniforms:_,acquireProgram:z,releaseProgram:P,releaseShaderCache:I,programs:y,dispose:C}}function Qf(){let e=new WeakMap;function n(d){return e.has(d)}function t(d){let u=e.get(d);return u===void 0&&(u={},e.set(d,u)),u}function i(d){e.delete(d)}function r(d,u,b){e.get(d)[u]=b}function a(){e=new WeakMap}return{has:n,get:t,remove:i,update:r,dispose:a}}function Jf(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.material.id!==n.material.id?e.material.id-n.material.id:e.z!==n.z?e.z-n.z:e.id-n.id}function vr(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.z!==n.z?n.z-e.z:e.id-n.id}function Er(){const e=[];let n=0;const t=[],i=[],r=[];function a(){n=0,t.length=0,i.length=0,r.length=0}function d(x,E,R,G,D,f){let o=e[n];return o===void 0?(o={id:x.id,object:x,geometry:E,material:R,groupOrder:G,renderOrder:x.renderOrder,z:D,group:f},e[n]=o):(o.id=x.id,o.object=x,o.geometry=E,o.material=R,o.groupOrder=G,o.renderOrder=x.renderOrder,o.z=D,o.group=f),n++,o}function u(x,E,R,G,D,f){const o=d(x,E,R,G,D,f);R.transmission>0?i.push(o):R.transparent===!0?r.push(o):t.push(o)}function b(x,E,R,G,D,f){const o=d(x,E,R,G,D,f);R.transmission>0?i.unshift(o):R.transparent===!0?r.unshift(o):t.unshift(o)}function M(x,E){t.length>1&&t.sort(x||Jf),i.length>1&&i.sort(E||vr),r.length>1&&r.sort(E||vr)}function y(){for(let x=n,E=e.length;x<E;x++){const R=e[x];if(R.id===null)break;R.id=null,R.object=null,R.geometry=null,R.material=null,R.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:u,unshift:b,finish:y,sort:M}}function ed(){let e=new WeakMap;function n(i,r){const a=e.get(i);let d;return a===void 0?(d=new Er,e.set(i,[d])):r>=a.length?(d=new Er,a.push(d)):d=a[r],d}function t(){e=new WeakMap}return{get:n,dispose:t}}function td(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={direction:new be,color:new $e};break;case"SpotLight":t={position:new be,direction:new be,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new be,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new be,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new be,halfWidth:new be,halfHeight:new be};break}return e[n.id]=t,t}}}function nd(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[n.id]=t,t}}}let id=0;function rd(e,n){return(n.castShadow?2:0)-(e.castShadow?2:0)+(n.map?1:0)-(e.map?1:0)}function ad(e){const n=new td,t=nd(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let M=0;M<9;M++)i.probe.push(new be);const r=new be,a=new $t,d=new $t;function u(M){let y=0,x=0,E=0;for(let p=0;p<9;p++)i.probe[p].set(0,0,0);let R=0,G=0,D=0,f=0,o=0,w=0,A=0,_=0,z=0,P=0,I=0;M.sort(rd);for(let p=0,c=M.length;p<c;p++){const g=M[p],V=g.color,B=g.intensity,O=g.distance,q=g.shadow&&g.shadow.map?g.shadow.map.texture:null;if(g.isAmbientLight)y+=V.r*B,x+=V.g*B,E+=V.b*B;else if(g.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(g.sh.coefficients[F],B);I++}else if(g.isDirectionalLight){const F=n.get(g);if(F.color.copy(g.color).multiplyScalar(g.intensity),g.castShadow){const Q=g.shadow,k=t.get(g);k.shadowIntensity=Q.intensity,k.shadowBias=Q.bias,k.shadowNormalBias=Q.normalBias,k.shadowRadius=Q.radius,k.shadowMapSize=Q.mapSize,i.directionalShadow[R]=k,i.directionalShadowMap[R]=q,i.directionalShadowMatrix[R]=g.shadow.matrix,w++}i.directional[R]=F,R++}else if(g.isSpotLight){const F=n.get(g);F.position.setFromMatrixPosition(g.matrixWorld),F.color.copy(V).multiplyScalar(B),F.distance=O,F.coneCos=Math.cos(g.angle),F.penumbraCos=Math.cos(g.angle*(1-g.penumbra)),F.decay=g.decay,i.spot[D]=F;const Q=g.shadow;if(g.map&&(i.spotLightMap[z]=g.map,z++,Q.updateMatrices(g),g.castShadow&&P++),i.spotLightMatrix[D]=Q.matrix,g.castShadow){const k=t.get(g);k.shadowIntensity=Q.intensity,k.shadowBias=Q.bias,k.shadowNormalBias=Q.normalBias,k.shadowRadius=Q.radius,k.shadowMapSize=Q.mapSize,i.spotShadow[D]=k,i.spotShadowMap[D]=q,_++}D++}else if(g.isRectAreaLight){const F=n.get(g);F.color.copy(V).multiplyScalar(B),F.halfWidth.set(g.width*.5,0,0),F.halfHeight.set(0,g.height*.5,0),i.rectArea[f]=F,f++}else if(g.isPointLight){const F=n.get(g);if(F.color.copy(g.color).multiplyScalar(g.intensity),F.distance=g.distance,F.decay=g.decay,g.castShadow){const Q=g.shadow,k=t.get(g);k.shadowIntensity=Q.intensity,k.shadowBias=Q.bias,k.shadowNormalBias=Q.normalBias,k.shadowRadius=Q.radius,k.shadowMapSize=Q.mapSize,k.shadowCameraNear=Q.camera.near,k.shadowCameraFar=Q.camera.far,i.pointShadow[G]=k,i.pointShadowMap[G]=q,i.pointShadowMatrix[G]=g.shadow.matrix,A++}i.point[G]=F,G++}else if(g.isHemisphereLight){const F=n.get(g);F.skyColor.copy(g.color).multiplyScalar(B),F.groundColor.copy(g.groundColor).multiplyScalar(B),i.hemi[o]=F,o++}}f>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ee.LTC_FLOAT_1,i.rectAreaLTC2=ee.LTC_FLOAT_2):(i.rectAreaLTC1=ee.LTC_HALF_1,i.rectAreaLTC2=ee.LTC_HALF_2)),i.ambient[0]=y,i.ambient[1]=x,i.ambient[2]=E;const C=i.hash;(C.directionalLength!==R||C.pointLength!==G||C.spotLength!==D||C.rectAreaLength!==f||C.hemiLength!==o||C.numDirectionalShadows!==w||C.numPointShadows!==A||C.numSpotShadows!==_||C.numSpotMaps!==z||C.numLightProbes!==I)&&(i.directional.length=R,i.spot.length=D,i.rectArea.length=f,i.point.length=G,i.hemi.length=o,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=_+z-P,i.spotLightMap.length=z,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=I,C.directionalLength=R,C.pointLength=G,C.spotLength=D,C.rectAreaLength=f,C.hemiLength=o,C.numDirectionalShadows=w,C.numPointShadows=A,C.numSpotShadows=_,C.numSpotMaps=z,C.numLightProbes=I,i.version=id++)}function b(M,y){let x=0,E=0,R=0,G=0,D=0;const f=y.matrixWorldInverse;for(let o=0,w=M.length;o<w;o++){const A=M[o];if(A.isDirectionalLight){const _=i.directional[x];_.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(f),x++}else if(A.isSpotLight){const _=i.spot[R];_.position.setFromMatrixPosition(A.matrixWorld),_.position.applyMatrix4(f),_.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(f),R++}else if(A.isRectAreaLight){const _=i.rectArea[G];_.position.setFromMatrixPosition(A.matrixWorld),_.position.applyMatrix4(f),d.identity(),a.copy(A.matrixWorld),a.premultiply(f),d.extractRotation(a),_.halfWidth.set(A.width*.5,0,0),_.halfHeight.set(0,A.height*.5,0),_.halfWidth.applyMatrix4(d),_.halfHeight.applyMatrix4(d),G++}else if(A.isPointLight){const _=i.point[E];_.position.setFromMatrixPosition(A.matrixWorld),_.position.applyMatrix4(f),E++}else if(A.isHemisphereLight){const _=i.hemi[D];_.direction.setFromMatrixPosition(A.matrixWorld),_.direction.transformDirection(f),D++}}}return{setup:u,setupView:b,state:i}}function Sr(e){const n=new ad(e),t=[],i=[];function r(y){M.camera=y,t.length=0,i.length=0}function a(y){t.push(y)}function d(y){i.push(y)}function u(){n.setup(t)}function b(y){n.setupView(t,y)}const M={lightsArray:t,shadowsArray:i,camera:null,lights:n,transmissionRenderTarget:{}};return{init:r,state:M,setupLights:u,setupLightsView:b,pushLight:a,pushShadow:d}}function od(e){let n=new WeakMap;function t(r,a=0){const d=n.get(r);let u;return d===void 0?(u=new Sr(e),n.set(r,[u])):a>=d.length?(u=new Sr(e),d.push(u)):u=d[a],u}function i(){n=new WeakMap}return{get:t,dispose:i}}const sd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ld=`uniform sampler2D shadow_pass;
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
}`;function cd(e,n,t){let i=new xr;const r=new Ke,a=new Ke,d=new pt,u=new Ka({depthPacking:qa}),b=new Za,M={},y=t.maxTextureSize,x={[cn]:vt,[vt]:cn,[Tt]:Tt},E=new Vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:sd,fragmentShader:ld}),R=E.clone();R.defines.HORIZONTAL_PASS=1;const G=new Cr;G.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new xt(G,E),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pr;let o=this.type;this.render=function(P,I,C){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||P.length===0)return;const p=e.getRenderTarget(),c=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),V=e.state;V.setBlending(Gt),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const B=o!==bt&&this.type===bt,O=o===bt&&this.type!==bt;for(let q=0,F=P.length;q<F;q++){const Q=P[q],k=Q.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const ue=k.getFrameExtents();if(r.multiply(ue),a.copy(k.mapSize),(r.x>y||r.y>y)&&(r.x>y&&(a.x=Math.floor(y/ue.x),r.x=a.x*ue.x,k.mapSize.x=a.x),r.y>y&&(a.y=Math.floor(y/ue.y),r.y=a.y*ue.y,k.mapSize.y=a.y)),k.map===null||B===!0||O===!0){const Ce=this.type!==bt?{minFilter:sn,magFilter:sn}:{};k.map!==null&&k.map.dispose(),k.map=new jt(r.x,r.y,Ce),k.map.texture.name=Q.name+".shadowMap",k.camera.updateProjectionMatrix()}e.setRenderTarget(k.map),e.clear();const he=k.getViewportCount();for(let Ce=0;Ce<he;Ce++){const De=k.getViewport(Ce);d.set(a.x*De.x,a.y*De.y,a.x*De.z,a.y*De.w),V.viewport(d),k.updateMatrices(Q,Ce),i=k.getFrustum(),_(I,C,k.camera,Q,this.type)}k.isPointLightShadow!==!0&&this.type===bt&&w(k,C),k.needsUpdate=!1}o=this.type,f.needsUpdate=!1,e.setRenderTarget(p,c,g)};function w(P,I){const C=n.update(D);E.defines.VSM_SAMPLES!==P.blurSamples&&(E.defines.VSM_SAMPLES=P.blurSamples,R.defines.VSM_SAMPLES=P.blurSamples,E.needsUpdate=!0,R.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new jt(r.x,r.y)),E.uniforms.shadow_pass.value=P.map.texture,E.uniforms.resolution.value=P.mapSize,E.uniforms.radius.value=P.radius,e.setRenderTarget(P.mapPass),e.clear(),e.renderBufferDirect(I,null,C,E,D,null),R.uniforms.shadow_pass.value=P.mapPass.texture,R.uniforms.resolution.value=P.mapSize,R.uniforms.radius.value=P.radius,e.setRenderTarget(P.map),e.clear(),e.renderBufferDirect(I,null,C,R,D,null)}function A(P,I,C,p){let c=null;const g=C.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(g!==void 0)c=g;else if(c=C.isPointLight===!0?b:u,e.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const V=c.uuid,B=I.uuid;let O=M[V];O===void 0&&(O={},M[V]=O);let q=O[B];q===void 0&&(q=c.clone(),O[B]=q,I.addEventListener("dispose",z)),c=q}if(c.visible=I.visible,c.wireframe=I.wireframe,p===bt?c.side=I.shadowSide!==null?I.shadowSide:I.side:c.side=I.shadowSide!==null?I.shadowSide:x[I.side],c.alphaMap=I.alphaMap,c.alphaTest=I.alphaTest,c.map=I.map,c.clipShadows=I.clipShadows,c.clippingPlanes=I.clippingPlanes,c.clipIntersection=I.clipIntersection,c.displacementMap=I.displacementMap,c.displacementScale=I.displacementScale,c.displacementBias=I.displacementBias,c.wireframeLinewidth=I.wireframeLinewidth,c.linewidth=I.linewidth,C.isPointLight===!0&&c.isMeshDistanceMaterial===!0){const V=e.properties.get(c);V.light=C}return c}function _(P,I,C,p,c){if(P.visible===!1)return;if(P.layers.test(I.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&c===bt)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,P.matrixWorld);const B=n.update(P),O=P.material;if(Array.isArray(O)){const q=B.groups;for(let F=0,Q=q.length;F<Q;F++){const k=q[F],ue=O[k.materialIndex];if(ue&&ue.visible){const he=A(P,ue,p,c);P.onBeforeShadow(e,P,I,C,B,he,k),e.renderBufferDirect(C,null,B,he,P,k),P.onAfterShadow(e,P,I,C,B,he,k)}}}else if(O.visible){const q=A(P,O,p,c);P.onBeforeShadow(e,P,I,C,B,q,null),e.renderBufferDirect(C,null,B,q,P,null),P.onAfterShadow(e,P,I,C,B,q,null)}}const V=P.children;for(let B=0,O=V.length;B<O;B++)_(V[B],I,C,p,c)}function z(P){P.target.removeEventListener("dispose",z);for(const C in M){const p=M[C],c=P.target.uuid;c in p&&(p[c].dispose(),delete p[c])}}}const fd={[ti]:ei,[Jn]:$n,[Qn]:Zn,[Cn]:jn,[ei]:ti,[$n]:Jn,[Zn]:Qn,[jn]:Cn};function dd(e,n){function t(){let v=!1;const te=new pt;let H=null;const K=new pt(0,0,0,0);return{setMask:function(oe){H!==oe&&!v&&(e.colorMask(oe,oe,oe,oe),H=oe)},setLocked:function(oe){v=oe},setClear:function(oe,ae,Pe,Je,lt){lt===!0&&(oe*=Je,ae*=Je,Pe*=Je),te.set(oe,ae,Pe,Je),K.equals(te)===!1&&(e.clearColor(oe,ae,Pe,Je),K.copy(te))},reset:function(){v=!1,H=null,K.set(-1,0,0,0)}}}function i(){let v=!1,te=!1,H=null,K=null,oe=null;return{setReversed:function(ae){if(te!==ae){const Pe=n.get("EXT_clip_control");te?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT);const Je=oe;oe=null,this.setClear(Je)}te=ae},getReversed:function(){return te},setTest:function(ae){ae?ie(e.DEPTH_TEST):Se(e.DEPTH_TEST)},setMask:function(ae){H!==ae&&!v&&(e.depthMask(ae),H=ae)},setFunc:function(ae){if(te&&(ae=fd[ae]),K!==ae){switch(ae){case ti:e.depthFunc(e.NEVER);break;case ei:e.depthFunc(e.ALWAYS);break;case Jn:e.depthFunc(e.LESS);break;case Cn:e.depthFunc(e.LEQUAL);break;case Qn:e.depthFunc(e.EQUAL);break;case jn:e.depthFunc(e.GEQUAL);break;case $n:e.depthFunc(e.GREATER);break;case Zn:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}K=ae}},setLocked:function(ae){v=ae},setClear:function(ae){oe!==ae&&(te&&(ae=1-ae),e.clearDepth(ae),oe=ae)},reset:function(){v=!1,H=null,K=null,oe=null,te=!1}}}function r(){let v=!1,te=null,H=null,K=null,oe=null,ae=null,Pe=null,Je=null,lt=null;return{setTest:function(We){v||(We?ie(e.STENCIL_TEST):Se(e.STENCIL_TEST))},setMask:function(We){te!==We&&!v&&(e.stencilMask(We),te=We)},setFunc:function(We,Et,Rt){(H!==We||K!==Et||oe!==Rt)&&(e.stencilFunc(We,Et,Rt),H=We,K=Et,oe=Rt)},setOp:function(We,Et,Rt){(ae!==We||Pe!==Et||Je!==Rt)&&(e.stencilOp(We,Et,Rt),ae=We,Pe=Et,Je=Rt)},setLocked:function(We){v=We},setClear:function(We){lt!==We&&(e.clearStencil(We),lt=We)},reset:function(){v=!1,te=null,H=null,K=null,oe=null,ae=null,Pe=null,Je=null,lt=null}}}const a=new t,d=new i,u=new r,b=new WeakMap,M=new WeakMap;let y={},x={},E=new WeakMap,R=[],G=null,D=!1,f=null,o=null,w=null,A=null,_=null,z=null,P=null,I=new $e(0,0,0),C=0,p=!1,c=null,g=null,V=null,B=null,O=null;const q=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,Q=0;const k=e.getParameter(e.VERSION);k.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(k)[1]),F=Q>=1):k.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),F=Q>=2);let ue=null,he={};const Ce=e.getParameter(e.SCISSOR_BOX),De=e.getParameter(e.VIEWPORT),Be=new pt().fromArray(Ce),W=new pt().fromArray(De);function J(v,te,H,K){const oe=new Uint8Array(4),ae=e.createTexture();e.bindTexture(v,ae),e.texParameteri(v,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(v,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Pe=0;Pe<H;Pe++)v===e.TEXTURE_3D||v===e.TEXTURE_2D_ARRAY?e.texImage3D(te,0,e.RGBA,1,1,K,0,e.RGBA,e.UNSIGNED_BYTE,oe):e.texImage2D(te+Pe,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,oe);return ae}const pe={};pe[e.TEXTURE_2D]=J(e.TEXTURE_2D,e.TEXTURE_2D,1),pe[e.TEXTURE_CUBE_MAP]=J(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[e.TEXTURE_2D_ARRAY]=J(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),pe[e.TEXTURE_3D]=J(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),d.setClear(1),u.setClear(0),ie(e.DEPTH_TEST),d.setFunc(Cn),ye(!1),Ie(Ei),ie(e.CULL_FACE),m(Gt);function ie(v){y[v]!==!0&&(e.enable(v),y[v]=!0)}function Se(v){y[v]!==!1&&(e.disable(v),y[v]=!1)}function Ve(v,te){return x[v]!==te?(e.bindFramebuffer(v,te),x[v]=te,v===e.DRAW_FRAMEBUFFER&&(x[e.FRAMEBUFFER]=te),v===e.FRAMEBUFFER&&(x[e.DRAW_FRAMEBUFFER]=te),!0):!1}function Te(v,te){let H=R,K=!1;if(v){H=E.get(te),H===void 0&&(H=[],E.set(te,H));const oe=v.textures;if(H.length!==oe.length||H[0]!==e.COLOR_ATTACHMENT0){for(let ae=0,Pe=oe.length;ae<Pe;ae++)H[ae]=e.COLOR_ATTACHMENT0+ae;H.length=oe.length,K=!0}}else H[0]!==e.BACK&&(H[0]=e.BACK,K=!0);K&&e.drawBuffers(H)}function tt(v){return G!==v?(e.useProgram(v),G=v,!0):!1}const Qe={[nn]:e.FUNC_ADD,[_a]:e.FUNC_SUBTRACT,[ma]:e.FUNC_REVERSE_SUBTRACT};Qe[Po]=e.MIN,Qe[Do]=e.MAX;const Ue={[La]:e.ZERO,[wa]:e.ONE,[Da]:e.SRC_COLOR,[Pa]:e.SRC_ALPHA,[Ca]:e.SRC_ALPHA_SATURATE,[ba]:e.DST_COLOR,[Ra]:e.DST_ALPHA,[Aa]:e.ONE_MINUS_SRC_COLOR,[xa]:e.ONE_MINUS_SRC_ALPHA,[Ta]:e.ONE_MINUS_DST_COLOR,[Ma]:e.ONE_MINUS_DST_ALPHA,[Sa]:e.CONSTANT_COLOR,[Ea]:e.ONE_MINUS_CONSTANT_COLOR,[va]:e.CONSTANT_ALPHA,[ga]:e.ONE_MINUS_CONSTANT_ALPHA};function m(v,te,H,K,oe,ae,Pe,Je,lt,We){if(v===Gt){D===!0&&(Se(e.BLEND),D=!1);return}if(D===!1&&(ie(e.BLEND),D=!0),v!==Ua){if(v!==f||We!==p){if((o!==nn||_!==nn)&&(e.blendEquation(e.FUNC_ADD),o=nn,_=nn),We)switch(v){case Tn:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case vi:e.blendFunc(e.ONE,e.ONE);break;case gi:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case _i:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}else switch(v){case Tn:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case vi:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case gi:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case _i:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}w=null,A=null,z=null,P=null,I.set(0,0,0),C=0,f=v,p=We}return}oe=oe||te,ae=ae||H,Pe=Pe||K,(te!==o||oe!==_)&&(e.blendEquationSeparate(Qe[te],Qe[oe]),o=te,_=oe),(H!==w||K!==A||ae!==z||Pe!==P)&&(e.blendFuncSeparate(Ue[H],Ue[K],Ue[ae],Ue[Pe]),w=H,A=K,z=ae,P=Pe),(Je.equals(I)===!1||lt!==C)&&(e.blendColor(Je.r,Je.g,Je.b,lt),I.copy(Je),C=lt),f=v,p=!1}function mt(v,te){v.side===Tt?Se(e.CULL_FACE):ie(e.CULL_FACE);let H=v.side===vt;te&&(H=!H),ye(H),v.blending===Tn&&v.transparent===!1?m(Gt):m(v.blending,v.blendEquation,v.blendSrc,v.blendDst,v.blendEquationAlpha,v.blendSrcAlpha,v.blendDstAlpha,v.blendColor,v.blendAlpha,v.premultipliedAlpha),d.setFunc(v.depthFunc),d.setTest(v.depthTest),d.setMask(v.depthWrite),a.setMask(v.colorWrite);const K=v.stencilWrite;u.setTest(K),K&&(u.setMask(v.stencilWriteMask),u.setFunc(v.stencilFunc,v.stencilRef,v.stencilFuncMask),u.setOp(v.stencilFail,v.stencilZFail,v.stencilZPass)),qe(v.polygonOffset,v.polygonOffsetFactor,v.polygonOffsetUnits),v.alphaToCoverage===!0?ie(e.SAMPLE_ALPHA_TO_COVERAGE):Se(e.SAMPLE_ALPHA_TO_COVERAGE)}function ye(v){c!==v&&(v?e.frontFace(e.CW):e.frontFace(e.CCW),c=v)}function Ie(v){v!==ya?(ie(e.CULL_FACE),v!==g&&(v===Ei?e.cullFace(e.BACK):v===Ia?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Se(e.CULL_FACE),g=v}function ge(v){v!==V&&(F&&e.lineWidth(v),V=v)}function qe(v,te,H){v?(ie(e.POLYGON_OFFSET_FILL),(B!==te||O!==H)&&(e.polygonOffset(te,H),B=te,O=H)):Se(e.POLYGON_OFFSET_FILL)}function _e(v){v?ie(e.SCISSOR_TEST):Se(e.SCISSOR_TEST)}function h(v){v===void 0&&(v=e.TEXTURE0+q-1),ue!==v&&(e.activeTexture(v),ue=v)}function s(v,te,H){H===void 0&&(ue===null?H=e.TEXTURE0+q-1:H=ue);let K=he[H];K===void 0&&(K={type:void 0,texture:void 0},he[H]=K),(K.type!==v||K.texture!==te)&&(ue!==H&&(e.activeTexture(H),ue=H),e.bindTexture(v,te||pe[v]),K.type=v,K.texture=te)}function L(){const v=he[ue];v!==void 0&&v.type!==void 0&&(e.bindTexture(v.type,null),v.type=void 0,v.texture=void 0)}function Y(){try{e.compressedTexImage2D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Z(){try{e.compressedTexImage3D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function X(){try{e.texSubImage2D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function me(){try{e.texSubImage3D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function re(){try{e.compressedTexSubImage2D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function le(){try{e.compressedTexSubImage3D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Oe(){try{e.texStorage2D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function j(){try{e.texStorage3D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ce(){try{e.texImage2D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Me(){try{e.texImage3D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function xe(v){Be.equals(v)===!1&&(e.scissor(v.x,v.y,v.z,v.w),Be.copy(v))}function fe(v){W.equals(v)===!1&&(e.viewport(v.x,v.y,v.z,v.w),W.copy(v))}function Ne(v,te){let H=M.get(te);H===void 0&&(H=new WeakMap,M.set(te,H));let K=H.get(v);K===void 0&&(K=e.getUniformBlockIndex(te,v.name),H.set(v,K))}function we(v,te){const K=M.get(te).get(v);b.get(te)!==K&&(e.uniformBlockBinding(te,K,v.__bindingPointIndex),b.set(te,K))}function Ye(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),d.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),y={},ue=null,he={},x={},E=new WeakMap,R=[],G=null,D=!1,f=null,o=null,w=null,A=null,_=null,z=null,P=null,I=new $e(0,0,0),C=0,p=!1,c=null,g=null,V=null,B=null,O=null,Be.set(0,0,e.canvas.width,e.canvas.height),W.set(0,0,e.canvas.width,e.canvas.height),a.reset(),d.reset(),u.reset()}return{buffers:{color:a,depth:d,stencil:u},enable:ie,disable:Se,bindFramebuffer:Ve,drawBuffers:Te,useProgram:tt,setBlending:m,setMaterial:mt,setFlipSided:ye,setCullFace:Ie,setLineWidth:ge,setPolygonOffset:qe,setScissorTest:_e,activeTexture:h,bindTexture:s,unbindTexture:L,compressedTexImage2D:Y,compressedTexImage3D:Z,texImage2D:ce,texImage3D:Me,updateUBOMapping:Ne,uniformBlockBinding:we,texStorage2D:Oe,texStorage3D:j,texSubImage2D:X,texSubImage3D:me,compressedTexSubImage2D:re,compressedTexSubImage3D:le,scissor:xe,viewport:fe,reset:Ye}}function ud(e,n,t,i,r,a,d){const u=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,b=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),M=new Ke,y=new WeakMap;let x;const E=new WeakMap;let R=!1;try{R=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function G(h,s){return R?new OffscreenCanvas(h,s):Ao("canvas")}function D(h,s,L){let Y=1;const Z=_e(h);if((Z.width>L||Z.height>L)&&(Y=L/Math.max(Z.width,Z.height)),Y<1)if(typeof HTMLImageElement<"u"&&h instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&h instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&h instanceof ImageBitmap||typeof VideoFrame<"u"&&h instanceof VideoFrame){const X=Math.floor(Y*Z.width),me=Math.floor(Y*Z.height);x===void 0&&(x=G(X,me));const re=s?G(X,me):x;return re.width=X,re.height=me,re.getContext("2d").drawImage(h,0,0,X,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+X+"x"+me+")."),re}else return"data"in h&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),h;return h}function f(h){return h.generateMipmaps}function o(h){e.generateMipmap(h)}function w(h){return h.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:h.isWebGL3DRenderTarget?e.TEXTURE_3D:h.isWebGLArrayRenderTarget||h.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function A(h,s,L,Y,Z=!1){if(h!==null){if(e[h]!==void 0)return e[h];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+h+"'")}let X=s;if(s===e.RED&&(L===e.FLOAT&&(X=e.R32F),L===e.HALF_FLOAT&&(X=e.R16F),L===e.UNSIGNED_BYTE&&(X=e.R8)),s===e.RED_INTEGER&&(L===e.UNSIGNED_BYTE&&(X=e.R8UI),L===e.UNSIGNED_SHORT&&(X=e.R16UI),L===e.UNSIGNED_INT&&(X=e.R32UI),L===e.BYTE&&(X=e.R8I),L===e.SHORT&&(X=e.R16I),L===e.INT&&(X=e.R32I)),s===e.RG&&(L===e.FLOAT&&(X=e.RG32F),L===e.HALF_FLOAT&&(X=e.RG16F),L===e.UNSIGNED_BYTE&&(X=e.RG8)),s===e.RG_INTEGER&&(L===e.UNSIGNED_BYTE&&(X=e.RG8UI),L===e.UNSIGNED_SHORT&&(X=e.RG16UI),L===e.UNSIGNED_INT&&(X=e.RG32UI),L===e.BYTE&&(X=e.RG8I),L===e.SHORT&&(X=e.RG16I),L===e.INT&&(X=e.RG32I)),s===e.RGB_INTEGER&&(L===e.UNSIGNED_BYTE&&(X=e.RGB8UI),L===e.UNSIGNED_SHORT&&(X=e.RGB16UI),L===e.UNSIGNED_INT&&(X=e.RGB32UI),L===e.BYTE&&(X=e.RGB8I),L===e.SHORT&&(X=e.RGB16I),L===e.INT&&(X=e.RGB32I)),s===e.RGBA_INTEGER&&(L===e.UNSIGNED_BYTE&&(X=e.RGBA8UI),L===e.UNSIGNED_SHORT&&(X=e.RGBA16UI),L===e.UNSIGNED_INT&&(X=e.RGBA32UI),L===e.BYTE&&(X=e.RGBA8I),L===e.SHORT&&(X=e.RGBA16I),L===e.INT&&(X=e.RGBA32I)),s===e.RGB&&L===e.UNSIGNED_INT_5_9_9_9_REV&&(X=e.RGB9_E5),s===e.RGBA){const me=Z?Vr:it.getTransfer(Y);L===e.FLOAT&&(X=e.RGBA32F),L===e.HALF_FLOAT&&(X=e.RGBA16F),L===e.UNSIGNED_BYTE&&(X=me===Ze?e.SRGB8_ALPHA8:e.RGBA8),L===e.UNSIGNED_SHORT_4_4_4_4&&(X=e.RGBA4),L===e.UNSIGNED_SHORT_5_5_5_1&&(X=e.RGB5_A1)}return(X===e.R16F||X===e.R32F||X===e.RG16F||X===e.RG32F||X===e.RGBA16F||X===e.RGBA32F)&&n.get("EXT_color_buffer_float"),X}function _(h,s){let L;return h?s===null||s===dn||s===fn?L=e.DEPTH24_STENCIL8:s===At?L=e.DEPTH32F_STENCIL8:s===Pn&&(L=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):s===null||s===dn||s===fn?L=e.DEPTH_COMPONENT24:s===At?L=e.DEPTH_COMPONENT32F:s===Pn&&(L=e.DEPTH_COMPONENT16),L}function z(h,s){return f(h)===!0||h.isFramebufferTexture&&h.minFilter!==sn&&h.minFilter!==wt?Math.log2(Math.max(s.width,s.height))+1:h.mipmaps!==void 0&&h.mipmaps.length>0?h.mipmaps.length:h.isCompressedTexture&&Array.isArray(h.image)?s.mipmaps.length:1}function P(h){const s=h.target;s.removeEventListener("dispose",P),C(s),s.isVideoTexture&&y.delete(s)}function I(h){const s=h.target;s.removeEventListener("dispose",I),c(s)}function C(h){const s=i.get(h);if(s.__webglInit===void 0)return;const L=h.source,Y=E.get(L);if(Y){const Z=Y[s.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&p(h),Object.keys(Y).length===0&&E.delete(L)}i.remove(h)}function p(h){const s=i.get(h);e.deleteTexture(s.__webglTexture);const L=h.source,Y=E.get(L);delete Y[s.__cacheKey],d.memory.textures--}function c(h){const s=i.get(h);if(h.depthTexture&&(h.depthTexture.dispose(),i.remove(h.depthTexture)),h.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(s.__webglFramebuffer[Y]))for(let Z=0;Z<s.__webglFramebuffer[Y].length;Z++)e.deleteFramebuffer(s.__webglFramebuffer[Y][Z]);else e.deleteFramebuffer(s.__webglFramebuffer[Y]);s.__webglDepthbuffer&&e.deleteRenderbuffer(s.__webglDepthbuffer[Y])}else{if(Array.isArray(s.__webglFramebuffer))for(let Y=0;Y<s.__webglFramebuffer.length;Y++)e.deleteFramebuffer(s.__webglFramebuffer[Y]);else e.deleteFramebuffer(s.__webglFramebuffer);if(s.__webglDepthbuffer&&e.deleteRenderbuffer(s.__webglDepthbuffer),s.__webglMultisampledFramebuffer&&e.deleteFramebuffer(s.__webglMultisampledFramebuffer),s.__webglColorRenderbuffer)for(let Y=0;Y<s.__webglColorRenderbuffer.length;Y++)s.__webglColorRenderbuffer[Y]&&e.deleteRenderbuffer(s.__webglColorRenderbuffer[Y]);s.__webglDepthRenderbuffer&&e.deleteRenderbuffer(s.__webglDepthRenderbuffer)}const L=h.textures;for(let Y=0,Z=L.length;Y<Z;Y++){const X=i.get(L[Y]);X.__webglTexture&&(e.deleteTexture(X.__webglTexture),d.memory.textures--),i.remove(L[Y])}i.remove(h)}let g=0;function V(){g=0}function B(){const h=g;return h>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+h+" texture units while this GPU supports only "+r.maxTextures),g+=1,h}function O(h){const s=[];return s.push(h.wrapS),s.push(h.wrapT),s.push(h.wrapR||0),s.push(h.magFilter),s.push(h.minFilter),s.push(h.anisotropy),s.push(h.internalFormat),s.push(h.format),s.push(h.type),s.push(h.generateMipmaps),s.push(h.premultiplyAlpha),s.push(h.flipY),s.push(h.unpackAlignment),s.push(h.colorSpace),s.join()}function q(h,s){const L=i.get(h);if(h.isVideoTexture&&ge(h),h.isRenderTargetTexture===!1&&h.version>0&&L.__version!==h.version){const Y=h.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(L,h,s);return}}t.bindTexture(e.TEXTURE_2D,L.__webglTexture,e.TEXTURE0+s)}function F(h,s){const L=i.get(h);if(h.version>0&&L.__version!==h.version){W(L,h,s);return}t.bindTexture(e.TEXTURE_2D_ARRAY,L.__webglTexture,e.TEXTURE0+s)}function Q(h,s){const L=i.get(h);if(h.version>0&&L.__version!==h.version){W(L,h,s);return}t.bindTexture(e.TEXTURE_3D,L.__webglTexture,e.TEXTURE0+s)}function k(h,s){const L=i.get(h);if(h.version>0&&L.__version!==h.version){J(L,h,s);return}t.bindTexture(e.TEXTURE_CUBE_MAP,L.__webglTexture,e.TEXTURE0+s)}const ue={[Fa]:e.REPEAT,[Oa]:e.CLAMP_TO_EDGE,[Na]:e.MIRRORED_REPEAT},he={[sn]:e.NEAREST,[Ba]:e.NEAREST_MIPMAP_NEAREST,[_n]:e.NEAREST_MIPMAP_LINEAR,[wt]:e.LINEAR,[Nn]:e.LINEAR_MIPMAP_NEAREST,[rn]:e.LINEAR_MIPMAP_LINEAR},Ce={[Xa]:e.NEVER,[Wa]:e.ALWAYS,[za]:e.LESS,[Rr]:e.LEQUAL,[ka]:e.EQUAL,[Va]:e.GEQUAL,[Ha]:e.GREATER,[Ga]:e.NOTEQUAL};function De(h,s){if(s.type===At&&n.has("OES_texture_float_linear")===!1&&(s.magFilter===wt||s.magFilter===Nn||s.magFilter===_n||s.magFilter===rn||s.minFilter===wt||s.minFilter===Nn||s.minFilter===_n||s.minFilter===rn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(h,e.TEXTURE_WRAP_S,ue[s.wrapS]),e.texParameteri(h,e.TEXTURE_WRAP_T,ue[s.wrapT]),(h===e.TEXTURE_3D||h===e.TEXTURE_2D_ARRAY)&&e.texParameteri(h,e.TEXTURE_WRAP_R,ue[s.wrapR]),e.texParameteri(h,e.TEXTURE_MAG_FILTER,he[s.magFilter]),e.texParameteri(h,e.TEXTURE_MIN_FILTER,he[s.minFilter]),s.compareFunction&&(e.texParameteri(h,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(h,e.TEXTURE_COMPARE_FUNC,Ce[s.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(s.magFilter===sn||s.minFilter!==_n&&s.minFilter!==rn||s.type===At&&n.has("OES_texture_float_linear")===!1)return;if(s.anisotropy>1||i.get(s).__currentAnisotropy){const L=n.get("EXT_texture_filter_anisotropic");e.texParameterf(h,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(s.anisotropy,r.getMaxAnisotropy())),i.get(s).__currentAnisotropy=s.anisotropy}}}function Be(h,s){let L=!1;h.__webglInit===void 0&&(h.__webglInit=!0,s.addEventListener("dispose",P));const Y=s.source;let Z=E.get(Y);Z===void 0&&(Z={},E.set(Y,Z));const X=O(s);if(X!==h.__cacheKey){Z[X]===void 0&&(Z[X]={texture:e.createTexture(),usedTimes:0},d.memory.textures++,L=!0),Z[X].usedTimes++;const me=Z[h.__cacheKey];me!==void 0&&(Z[h.__cacheKey].usedTimes--,me.usedTimes===0&&p(s)),h.__cacheKey=X,h.__webglTexture=Z[X].texture}return L}function W(h,s,L){let Y=e.TEXTURE_2D;(s.isDataArrayTexture||s.isCompressedArrayTexture)&&(Y=e.TEXTURE_2D_ARRAY),s.isData3DTexture&&(Y=e.TEXTURE_3D);const Z=Be(h,s),X=s.source;t.bindTexture(Y,h.__webglTexture,e.TEXTURE0+L);const me=i.get(X);if(X.version!==me.__version||Z===!0){t.activeTexture(e.TEXTURE0+L);const re=it.getPrimaries(it.workingColorSpace),le=s.colorSpace===Yt?null:it.getPrimaries(s.colorSpace),Oe=s.colorSpace===Yt||re===le?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,s.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,s.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,s.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let j=D(s.image,!1,r.maxTextureSize);j=qe(s,j);const ce=a.convert(s.format,s.colorSpace),Me=a.convert(s.type);let xe=A(s.internalFormat,ce,Me,s.colorSpace,s.isVideoTexture);De(Y,s);let fe;const Ne=s.mipmaps,we=s.isVideoTexture!==!0,Ye=me.__version===void 0||Z===!0,v=X.dataReady,te=z(s,j);if(s.isDepthTexture)xe=_(s.format===bn,s.type),Ye&&(we?t.texStorage2D(e.TEXTURE_2D,1,xe,j.width,j.height):t.texImage2D(e.TEXTURE_2D,0,xe,j.width,j.height,0,ce,Me,null));else if(s.isDataTexture)if(Ne.length>0){we&&Ye&&t.texStorage2D(e.TEXTURE_2D,te,xe,Ne[0].width,Ne[0].height);for(let H=0,K=Ne.length;H<K;H++)fe=Ne[H],we?v&&t.texSubImage2D(e.TEXTURE_2D,H,0,0,fe.width,fe.height,ce,Me,fe.data):t.texImage2D(e.TEXTURE_2D,H,xe,fe.width,fe.height,0,ce,Me,fe.data);s.generateMipmaps=!1}else we?(Ye&&t.texStorage2D(e.TEXTURE_2D,te,xe,j.width,j.height),v&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,j.width,j.height,ce,Me,j.data)):t.texImage2D(e.TEXTURE_2D,0,xe,j.width,j.height,0,ce,Me,j.data);else if(s.isCompressedTexture)if(s.isCompressedArrayTexture){we&&Ye&&t.texStorage3D(e.TEXTURE_2D_ARRAY,te,xe,Ne[0].width,Ne[0].height,j.depth);for(let H=0,K=Ne.length;H<K;H++)if(fe=Ne[H],s.format!==Ct)if(ce!==null)if(we){if(v)if(s.layerUpdates.size>0){const oe=Ki(fe.width,fe.height,s.format,s.type);for(const ae of s.layerUpdates){const Pe=fe.data.subarray(ae*oe/fe.data.BYTES_PER_ELEMENT,(ae+1)*oe/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,H,0,0,ae,fe.width,fe.height,1,ce,Pe)}s.clearLayerUpdates()}else t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,H,0,0,0,fe.width,fe.height,j.depth,ce,fe.data)}else t.compressedTexImage3D(e.TEXTURE_2D_ARRAY,H,xe,fe.width,fe.height,j.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else we?v&&t.texSubImage3D(e.TEXTURE_2D_ARRAY,H,0,0,0,fe.width,fe.height,j.depth,ce,Me,fe.data):t.texImage3D(e.TEXTURE_2D_ARRAY,H,xe,fe.width,fe.height,j.depth,0,ce,Me,fe.data)}else{we&&Ye&&t.texStorage2D(e.TEXTURE_2D,te,xe,Ne[0].width,Ne[0].height);for(let H=0,K=Ne.length;H<K;H++)fe=Ne[H],s.format!==Ct?ce!==null?we?v&&t.compressedTexSubImage2D(e.TEXTURE_2D,H,0,0,fe.width,fe.height,ce,fe.data):t.compressedTexImage2D(e.TEXTURE_2D,H,xe,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?v&&t.texSubImage2D(e.TEXTURE_2D,H,0,0,fe.width,fe.height,ce,Me,fe.data):t.texImage2D(e.TEXTURE_2D,H,xe,fe.width,fe.height,0,ce,Me,fe.data)}else if(s.isDataArrayTexture)if(we){if(Ye&&t.texStorage3D(e.TEXTURE_2D_ARRAY,te,xe,j.width,j.height,j.depth),v)if(s.layerUpdates.size>0){const H=Ki(j.width,j.height,s.format,s.type);for(const K of s.layerUpdates){const oe=j.data.subarray(K*H/j.data.BYTES_PER_ELEMENT,(K+1)*H/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,K,j.width,j.height,1,ce,Me,oe)}s.clearLayerUpdates()}else t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ce,Me,j.data)}else t.texImage3D(e.TEXTURE_2D_ARRAY,0,xe,j.width,j.height,j.depth,0,ce,Me,j.data);else if(s.isData3DTexture)we?(Ye&&t.texStorage3D(e.TEXTURE_3D,te,xe,j.width,j.height,j.depth),v&&t.texSubImage3D(e.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ce,Me,j.data)):t.texImage3D(e.TEXTURE_3D,0,xe,j.width,j.height,j.depth,0,ce,Me,j.data);else if(s.isFramebufferTexture){if(Ye)if(we)t.texStorage2D(e.TEXTURE_2D,te,xe,j.width,j.height);else{let H=j.width,K=j.height;for(let oe=0;oe<te;oe++)t.texImage2D(e.TEXTURE_2D,oe,xe,H,K,0,ce,Me,null),H>>=1,K>>=1}}else if(Ne.length>0){if(we&&Ye){const H=_e(Ne[0]);t.texStorage2D(e.TEXTURE_2D,te,xe,H.width,H.height)}for(let H=0,K=Ne.length;H<K;H++)fe=Ne[H],we?v&&t.texSubImage2D(e.TEXTURE_2D,H,0,0,ce,Me,fe):t.texImage2D(e.TEXTURE_2D,H,xe,ce,Me,fe);s.generateMipmaps=!1}else if(we){if(Ye){const H=_e(j);t.texStorage2D(e.TEXTURE_2D,te,xe,H.width,H.height)}v&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,ce,Me,j)}else t.texImage2D(e.TEXTURE_2D,0,xe,ce,Me,j);f(s)&&o(Y),me.__version=X.version,s.onUpdate&&s.onUpdate(s)}h.__version=s.version}function J(h,s,L){if(s.image.length!==6)return;const Y=Be(h,s),Z=s.source;t.bindTexture(e.TEXTURE_CUBE_MAP,h.__webglTexture,e.TEXTURE0+L);const X=i.get(Z);if(Z.version!==X.__version||Y===!0){t.activeTexture(e.TEXTURE0+L);const me=it.getPrimaries(it.workingColorSpace),re=s.colorSpace===Yt?null:it.getPrimaries(s.colorSpace),le=s.colorSpace===Yt||me===re?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,s.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,s.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,s.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const Oe=s.isCompressedTexture||s.image[0].isCompressedTexture,j=s.image[0]&&s.image[0].isDataTexture,ce=[];for(let K=0;K<6;K++)!Oe&&!j?ce[K]=D(s.image[K],!0,r.maxCubemapSize):ce[K]=j?s.image[K].image:s.image[K],ce[K]=qe(s,ce[K]);const Me=ce[0],xe=a.convert(s.format,s.colorSpace),fe=a.convert(s.type),Ne=A(s.internalFormat,xe,fe,s.colorSpace),we=s.isVideoTexture!==!0,Ye=X.__version===void 0||Y===!0,v=Z.dataReady;let te=z(s,Me);De(e.TEXTURE_CUBE_MAP,s);let H;if(Oe){we&&Ye&&t.texStorage2D(e.TEXTURE_CUBE_MAP,te,Ne,Me.width,Me.height);for(let K=0;K<6;K++){H=ce[K].mipmaps;for(let oe=0;oe<H.length;oe++){const ae=H[oe];s.format!==Ct?xe!==null?we?v&&t.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe,0,0,ae.width,ae.height,xe,ae.data):t.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe,Ne,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?v&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe,0,0,ae.width,ae.height,xe,fe,ae.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe,Ne,ae.width,ae.height,0,xe,fe,ae.data)}}}else{if(H=s.mipmaps,we&&Ye){H.length>0&&te++;const K=_e(ce[0]);t.texStorage2D(e.TEXTURE_CUBE_MAP,te,Ne,K.width,K.height)}for(let K=0;K<6;K++)if(j){we?v&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ce[K].width,ce[K].height,xe,fe,ce[K].data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ne,ce[K].width,ce[K].height,0,xe,fe,ce[K].data);for(let oe=0;oe<H.length;oe++){const Pe=H[oe].image[K].image;we?v&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe+1,0,0,Pe.width,Pe.height,xe,fe,Pe.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe+1,Ne,Pe.width,Pe.height,0,xe,fe,Pe.data)}}else{we?v&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,xe,fe,ce[K]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ne,xe,fe,ce[K]);for(let oe=0;oe<H.length;oe++){const ae=H[oe];we?v&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe+1,0,0,xe,fe,ae.image[K]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe+1,Ne,xe,fe,ae.image[K])}}}f(s)&&o(e.TEXTURE_CUBE_MAP),X.__version=Z.version,s.onUpdate&&s.onUpdate(s)}h.__version=s.version}function pe(h,s,L,Y,Z,X){const me=a.convert(L.format,L.colorSpace),re=a.convert(L.type),le=A(L.internalFormat,me,re,L.colorSpace),Oe=i.get(s),j=i.get(L);if(j.__renderTarget=s,!Oe.__hasExternalTextures){const ce=Math.max(1,s.width>>X),Me=Math.max(1,s.height>>X);Z===e.TEXTURE_3D||Z===e.TEXTURE_2D_ARRAY?t.texImage3D(Z,X,le,ce,Me,s.depth,0,me,re,null):t.texImage2D(Z,X,le,ce,Me,0,me,re,null)}t.bindFramebuffer(e.FRAMEBUFFER,h),Ie(s)?u.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Y,Z,j.__webglTexture,0,ye(s)):(Z===e.TEXTURE_2D||Z>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,Y,Z,j.__webglTexture,X),t.bindFramebuffer(e.FRAMEBUFFER,null)}function ie(h,s,L){if(e.bindRenderbuffer(e.RENDERBUFFER,h),s.depthBuffer){const Y=s.depthTexture,Z=Y&&Y.isDepthTexture?Y.type:null,X=_(s.stencilBuffer,Z),me=s.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,re=ye(s);Ie(s)?u.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,re,X,s.width,s.height):L?e.renderbufferStorageMultisample(e.RENDERBUFFER,re,X,s.width,s.height):e.renderbufferStorage(e.RENDERBUFFER,X,s.width,s.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,me,e.RENDERBUFFER,h)}else{const Y=s.textures;for(let Z=0;Z<Y.length;Z++){const X=Y[Z],me=a.convert(X.format,X.colorSpace),re=a.convert(X.type),le=A(X.internalFormat,me,re,X.colorSpace),Oe=ye(s);L&&Ie(s)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Oe,le,s.width,s.height):Ie(s)?u.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Oe,le,s.width,s.height):e.renderbufferStorage(e.RENDERBUFFER,le,s.width,s.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Se(h,s){if(s&&s.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(e.FRAMEBUFFER,h),!(s.depthTexture&&s.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=i.get(s.depthTexture);Y.__renderTarget=s,(!Y.__webglTexture||s.depthTexture.image.width!==s.width||s.depthTexture.image.height!==s.height)&&(s.depthTexture.image.width=s.width,s.depthTexture.image.height=s.height,s.depthTexture.needsUpdate=!0),q(s.depthTexture,0);const Z=Y.__webglTexture,X=ye(s);if(s.depthTexture.format===ri)Ie(s)?u.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Z,0,X):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Z,0);else if(s.depthTexture.format===bn)Ie(s)?u.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Z,0,X):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Ve(h){const s=i.get(h),L=h.isWebGLCubeRenderTarget===!0;if(s.__boundDepthTexture!==h.depthTexture){const Y=h.depthTexture;if(s.__depthDisposeCallback&&s.__depthDisposeCallback(),Y){const Z=()=>{delete s.__boundDepthTexture,delete s.__depthDisposeCallback,Y.removeEventListener("dispose",Z)};Y.addEventListener("dispose",Z),s.__depthDisposeCallback=Z}s.__boundDepthTexture=Y}if(h.depthTexture&&!s.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");Se(s.__webglFramebuffer,h)}else if(L){s.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer[Y]),s.__webglDepthbuffer[Y]===void 0)s.__webglDepthbuffer[Y]=e.createRenderbuffer(),ie(s.__webglDepthbuffer[Y],h,!1);else{const Z=h.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,X=s.__webglDepthbuffer[Y];e.bindRenderbuffer(e.RENDERBUFFER,X),e.framebufferRenderbuffer(e.FRAMEBUFFER,Z,e.RENDERBUFFER,X)}}else if(t.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),s.__webglDepthbuffer===void 0)s.__webglDepthbuffer=e.createRenderbuffer(),ie(s.__webglDepthbuffer,h,!1);else{const Y=h.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Z=s.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,Z),e.framebufferRenderbuffer(e.FRAMEBUFFER,Y,e.RENDERBUFFER,Z)}t.bindFramebuffer(e.FRAMEBUFFER,null)}function Te(h,s,L){const Y=i.get(h);s!==void 0&&pe(Y.__webglFramebuffer,h,h.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),L!==void 0&&Ve(h)}function tt(h){const s=h.texture,L=i.get(h),Y=i.get(s);h.addEventListener("dispose",I);const Z=h.textures,X=h.isWebGLCubeRenderTarget===!0,me=Z.length>1;if(me||(Y.__webglTexture===void 0&&(Y.__webglTexture=e.createTexture()),Y.__version=s.version,d.memory.textures++),X){L.__webglFramebuffer=[];for(let re=0;re<6;re++)if(s.mipmaps&&s.mipmaps.length>0){L.__webglFramebuffer[re]=[];for(let le=0;le<s.mipmaps.length;le++)L.__webglFramebuffer[re][le]=e.createFramebuffer()}else L.__webglFramebuffer[re]=e.createFramebuffer()}else{if(s.mipmaps&&s.mipmaps.length>0){L.__webglFramebuffer=[];for(let re=0;re<s.mipmaps.length;re++)L.__webglFramebuffer[re]=e.createFramebuffer()}else L.__webglFramebuffer=e.createFramebuffer();if(me)for(let re=0,le=Z.length;re<le;re++){const Oe=i.get(Z[re]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=e.createTexture(),d.memory.textures++)}if(h.samples>0&&Ie(h)===!1){L.__webglMultisampledFramebuffer=e.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(e.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let re=0;re<Z.length;re++){const le=Z[re];L.__webglColorRenderbuffer[re]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,L.__webglColorRenderbuffer[re]);const Oe=a.convert(le.format,le.colorSpace),j=a.convert(le.type),ce=A(le.internalFormat,Oe,j,le.colorSpace,h.isXRRenderTarget===!0),Me=ye(h);e.renderbufferStorageMultisample(e.RENDERBUFFER,Me,ce,h.width,h.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+re,e.RENDERBUFFER,L.__webglColorRenderbuffer[re])}e.bindRenderbuffer(e.RENDERBUFFER,null),h.depthBuffer&&(L.__webglDepthRenderbuffer=e.createRenderbuffer(),ie(L.__webglDepthRenderbuffer,h,!0)),t.bindFramebuffer(e.FRAMEBUFFER,null)}}if(X){t.bindTexture(e.TEXTURE_CUBE_MAP,Y.__webglTexture),De(e.TEXTURE_CUBE_MAP,s);for(let re=0;re<6;re++)if(s.mipmaps&&s.mipmaps.length>0)for(let le=0;le<s.mipmaps.length;le++)pe(L.__webglFramebuffer[re][le],h,s,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+re,le);else pe(L.__webglFramebuffer[re],h,s,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);f(s)&&o(e.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let re=0,le=Z.length;re<le;re++){const Oe=Z[re],j=i.get(Oe);t.bindTexture(e.TEXTURE_2D,j.__webglTexture),De(e.TEXTURE_2D,Oe),pe(L.__webglFramebuffer,h,Oe,e.COLOR_ATTACHMENT0+re,e.TEXTURE_2D,0),f(Oe)&&o(e.TEXTURE_2D)}t.unbindTexture()}else{let re=e.TEXTURE_2D;if((h.isWebGL3DRenderTarget||h.isWebGLArrayRenderTarget)&&(re=h.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(re,Y.__webglTexture),De(re,s),s.mipmaps&&s.mipmaps.length>0)for(let le=0;le<s.mipmaps.length;le++)pe(L.__webglFramebuffer[le],h,s,e.COLOR_ATTACHMENT0,re,le);else pe(L.__webglFramebuffer,h,s,e.COLOR_ATTACHMENT0,re,0);f(s)&&o(re),t.unbindTexture()}h.depthBuffer&&Ve(h)}function Qe(h){const s=h.textures;for(let L=0,Y=s.length;L<Y;L++){const Z=s[L];if(f(Z)){const X=w(h),me=i.get(Z).__webglTexture;t.bindTexture(X,me),o(X),t.unbindTexture()}}}const Ue=[],m=[];function mt(h){if(h.samples>0){if(Ie(h)===!1){const s=h.textures,L=h.width,Y=h.height;let Z=e.COLOR_BUFFER_BIT;const X=h.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,me=i.get(h),re=s.length>1;if(re)for(let le=0;le<s.length;le++)t.bindFramebuffer(e.FRAMEBUFFER,me.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+le,e.RENDERBUFFER,null),t.bindFramebuffer(e.FRAMEBUFFER,me.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+le,e.TEXTURE_2D,null,0);t.bindFramebuffer(e.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let le=0;le<s.length;le++){if(h.resolveDepthBuffer&&(h.depthBuffer&&(Z|=e.DEPTH_BUFFER_BIT),h.stencilBuffer&&h.resolveStencilBuffer&&(Z|=e.STENCIL_BUFFER_BIT)),re){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,me.__webglColorRenderbuffer[le]);const Oe=i.get(s[le]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Oe,0)}e.blitFramebuffer(0,0,L,Y,0,0,L,Y,Z,e.NEAREST),b===!0&&(Ue.length=0,m.length=0,Ue.push(e.COLOR_ATTACHMENT0+le),h.depthBuffer&&h.resolveDepthBuffer===!1&&(Ue.push(X),m.push(X),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,m)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ue))}if(t.bindFramebuffer(e.READ_FRAMEBUFFER,null),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),re)for(let le=0;le<s.length;le++){t.bindFramebuffer(e.FRAMEBUFFER,me.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+le,e.RENDERBUFFER,me.__webglColorRenderbuffer[le]);const Oe=i.get(s[le]).__webglTexture;t.bindFramebuffer(e.FRAMEBUFFER,me.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+le,e.TEXTURE_2D,Oe,0)}t.bindFramebuffer(e.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(h.depthBuffer&&h.resolveDepthBuffer===!1&&b){const s=h.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[s])}}}function ye(h){return Math.min(r.maxSamples,h.samples)}function Ie(h){const s=i.get(h);return h.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&s.__useRenderToTexture!==!1}function ge(h){const s=d.render.frame;y.get(h)!==s&&(y.set(h,s),h.update())}function qe(h,s){const L=h.colorSpace,Y=h.format,Z=h.type;return h.isCompressedTexture===!0||h.isVideoTexture===!0||L!==pn&&L!==Yt&&(it.getTransfer(L)===Ze?(Y!==Ct||Z!==Ht)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),s}function _e(h){return typeof HTMLImageElement<"u"&&h instanceof HTMLImageElement?(M.width=h.naturalWidth||h.width,M.height=h.naturalHeight||h.height):typeof VideoFrame<"u"&&h instanceof VideoFrame?(M.width=h.displayWidth,M.height=h.displayHeight):(M.width=h.width,M.height=h.height),M}this.allocateTextureUnit=B,this.resetTextureUnits=V,this.setTexture2D=q,this.setTexture2DArray=F,this.setTexture3D=Q,this.setTextureCube=k,this.rebindTextures=Te,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Ie}function pd(e,n){function t(i,r=Yt){let a;const d=it.getTransfer(r);if(i===Ht)return e.UNSIGNED_BYTE;if(i===Dr)return e.UNSIGNED_SHORT_4_4_4_4;if(i===wr)return e.UNSIGNED_SHORT_5_5_5_1;if(i===$a)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===ja)return e.BYTE;if(i===Qa)return e.SHORT;if(i===Pn)return e.UNSIGNED_SHORT;if(i===yr)return e.INT;if(i===dn)return e.UNSIGNED_INT;if(i===At)return e.FLOAT;if(i===Dt)return e.HALF_FLOAT;if(i===Ja)return e.ALPHA;if(i===eo)return e.RGB;if(i===Ct)return e.RGBA;if(i===to)return e.LUMINANCE;if(i===no)return e.LUMINANCE_ALPHA;if(i===ri)return e.DEPTH_COMPONENT;if(i===bn)return e.DEPTH_STENCIL;if(i===io)return e.RED;if(i===Ir)return e.RED_INTEGER;if(i===ro)return e.RG;if(i===Nr)return e.RG_INTEGER;if(i===Or)return e.RGBA_INTEGER;if(i===On||i===Fn||i===Bn||i===Gn)if(d===Ze)if(a=n.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===On)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Fn)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Bn)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Gn)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=n.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===On)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Fn)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Bn)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Gn)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Si||i===Mi||i===Ti||i===xi)if(a=n.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Si)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Mi)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ti)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xi)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ai||i===Ri||i===bi)if(a=n.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Ai||i===Ri)return d===Ze?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===bi)return d===Ze?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ci||i===Pi||i===Di||i===wi||i===Li||i===Ui||i===yi||i===Ii||i===Ni||i===Oi||i===Fi||i===Bi||i===Gi||i===Hi)if(a=n.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Ci)return d===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Pi)return d===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Di)return d===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wi)return d===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Li)return d===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ui)return d===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===yi)return d===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ii)return d===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ni)return d===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Oi)return d===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Fi)return d===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bi)return d===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Gi)return d===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Hi)return d===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Hn||i===Vi||i===ki)if(a=n.get("EXT_texture_compression_bptc"),a!==null){if(i===Hn)return d===Ze?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Vi)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ki)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ao||i===zi||i===Wi||i===Xi)if(a=n.get("EXT_texture_compression_rgtc"),a!==null){if(i===Hn)return a.COMPRESSED_RED_RGTC1_EXT;if(i===zi)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wi)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xi)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fn?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:t}}const hd=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,md=`
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

}`;class _d{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,t,i){if(this.texture===null){const r=new Lr,a=n.properties.get(r);a.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(n){if(this.texture!==null&&this.mesh===null){const t=n.cameras[0].viewport,i=new Vt({vertexShader:hd,fragmentShader:md,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xt(new Ur(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gd extends ua{constructor(n,t){super();const i=this;let r=null,a=1,d=null,u="local-floor",b=1,M=null,y=null,x=null,E=null,R=null,G=null;const D=new _d,f=t.getContextAttributes();let o=null,w=null;const A=[],_=[],z=new Ke;let P=null;const I=new on;I.viewport=new pt;const C=new on;C.viewport=new pt;const p=[I,C],c=new pa;let g=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let J=A[W];return J===void 0&&(J=new In,A[W]=J),J.getTargetRaySpace()},this.getControllerGrip=function(W){let J=A[W];return J===void 0&&(J=new In,A[W]=J),J.getGripSpace()},this.getHand=function(W){let J=A[W];return J===void 0&&(J=new In,A[W]=J),J.getHandSpace()};function B(W){const J=_.indexOf(W.inputSource);if(J===-1)return;const pe=A[J];pe!==void 0&&(pe.update(W.inputSource,W.frame,M||d),pe.dispatchEvent({type:W.type,data:W.inputSource}))}function O(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",q);for(let W=0;W<A.length;W++){const J=_[W];J!==null&&(_[W]=null,A[W].disconnect(J))}g=null,V=null,D.reset(),n.setRenderTarget(o),R=null,E=null,x=null,r=null,w=null,Be.stop(),i.isPresenting=!1,n.setPixelRatio(P),n.setSize(z.width,z.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){u=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return M||d},this.setReferenceSpace=function(W){M=W},this.getBaseLayer=function(){return E!==null?E:R},this.getBinding=function(){return x},this.getFrame=function(){return G},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(o=n.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",O),r.addEventListener("inputsourceschange",q),f.xrCompatible!==!0&&await t.makeXRCompatible(),P=n.getPixelRatio(),n.getSize(z),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,ie=null,Se=null;f.depth&&(Se=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=f.stencil?bn:ri,ie=f.stencil?fn:dn);const Ve={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:a};x=new XRWebGLBinding(r,t),E=x.createProjectionLayer(Ve),r.updateRenderState({layers:[E]}),n.setPixelRatio(1),n.setSize(E.textureWidth,E.textureHeight,!1),w=new jt(E.textureWidth,E.textureHeight,{format:Ct,type:Ht,depthTexture:new Ar(E.textureWidth,E.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:f.stencil,colorSpace:n.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}else{const pe={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:a};R=new XRWebGLLayer(r,t,pe),r.updateRenderState({baseLayer:R}),n.setPixelRatio(1),n.setSize(R.framebufferWidth,R.framebufferHeight,!1),w=new jt(R.framebufferWidth,R.framebufferHeight,{format:Ct,type:Ht,colorSpace:n.outputColorSpace,stencilBuffer:f.stencil,resolveDepthBuffer:R.ignoreDepthValues===!1,resolveStencilBuffer:R.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(b),M=null,d=await r.requestReferenceSpace(u),Be.setContext(r),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return D.getDepthTexture()};function q(W){for(let J=0;J<W.removed.length;J++){const pe=W.removed[J],ie=_.indexOf(pe);ie>=0&&(_[ie]=null,A[ie].disconnect(pe))}for(let J=0;J<W.added.length;J++){const pe=W.added[J];let ie=_.indexOf(pe);if(ie===-1){for(let Ve=0;Ve<A.length;Ve++)if(Ve>=_.length){_.push(pe),ie=Ve;break}else if(_[Ve]===null){_[Ve]=pe,ie=Ve;break}if(ie===-1)break}const Se=A[ie];Se&&Se.connect(pe)}}const F=new be,Q=new be;function k(W,J,pe){F.setFromMatrixPosition(J.matrixWorld),Q.setFromMatrixPosition(pe.matrixWorld);const ie=F.distanceTo(Q),Se=J.projectionMatrix.elements,Ve=pe.projectionMatrix.elements,Te=Se[14]/(Se[10]-1),tt=Se[14]/(Se[10]+1),Qe=(Se[9]+1)/Se[5],Ue=(Se[9]-1)/Se[5],m=(Se[8]-1)/Se[0],mt=(Ve[8]+1)/Ve[0],ye=Te*m,Ie=Te*mt,ge=ie/(-m+mt),qe=ge*-m;if(J.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(qe),W.translateZ(ge),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Se[10]===-1)W.projectionMatrix.copy(J.projectionMatrix),W.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const _e=Te+ge,h=tt+ge,s=ye-qe,L=Ie+(ie-qe),Y=Qe*tt/h*_e,Z=Ue*tt/h*_e;W.projectionMatrix.makePerspective(s,L,Y,Z,_e,h),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function ue(W,J){J===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(J.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let J=W.near,pe=W.far;D.texture!==null&&(D.depthNear>0&&(J=D.depthNear),D.depthFar>0&&(pe=D.depthFar)),c.near=C.near=I.near=J,c.far=C.far=I.far=pe,(g!==c.near||V!==c.far)&&(r.updateRenderState({depthNear:c.near,depthFar:c.far}),g=c.near,V=c.far),I.layers.mask=W.layers.mask|2,C.layers.mask=W.layers.mask|4,c.layers.mask=I.layers.mask|C.layers.mask;const ie=W.parent,Se=c.cameras;ue(c,ie);for(let Ve=0;Ve<Se.length;Ve++)ue(Se[Ve],ie);Se.length===2?k(c,I,C):c.projectionMatrix.copy(I.projectionMatrix),he(W,c,ie)};function he(W,J,pe){pe===null?W.matrix.copy(J.matrixWorld):(W.matrix.copy(pe.matrixWorld),W.matrix.invert(),W.matrix.multiply(J.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(J.projectionMatrix),W.projectionMatrixInverse.copy(J.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=ha*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return c},this.getFoveation=function(){if(!(E===null&&R===null))return b},this.setFoveation=function(W){b=W,E!==null&&(E.fixedFoveation=W),R!==null&&R.fixedFoveation!==void 0&&(R.fixedFoveation=W)},this.hasDepthSensing=function(){return D.texture!==null},this.getDepthSensingMesh=function(){return D.getMesh(c)};let Ce=null;function De(W,J){if(y=J.getViewerPose(M||d),G=J,y!==null){const pe=y.views;R!==null&&(n.setRenderTargetFramebuffer(w,R.framebuffer),n.setRenderTarget(w));let ie=!1;pe.length!==c.cameras.length&&(c.cameras.length=0,ie=!0);for(let Te=0;Te<pe.length;Te++){const tt=pe[Te];let Qe=null;if(R!==null)Qe=R.getViewport(tt);else{const m=x.getViewSubImage(E,tt);Qe=m.viewport,Te===0&&(n.setRenderTargetTextures(w,m.colorTexture,E.ignoreDepthValues?void 0:m.depthStencilTexture),n.setRenderTarget(w))}let Ue=p[Te];Ue===void 0&&(Ue=new on,Ue.layers.enable(Te),Ue.viewport=new pt,p[Te]=Ue),Ue.matrix.fromArray(tt.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(tt.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),Te===0&&(c.matrix.copy(Ue.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale)),ie===!0&&c.cameras.push(Ue)}const Se=r.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){const Te=x.getDepthInformation(pe[0]);Te&&Te.isValid&&Te.texture&&D.init(n,Te,r.renderState)}}for(let pe=0;pe<A.length;pe++){const ie=_[pe],Se=A[pe];ie!==null&&Se!==void 0&&Se.update(ie,J,M||d)}Ce&&Ce(W,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),G=null}const Be=new zr;Be.setAnimationLoop(De),this.setAnimationLoop=function(W){Ce=W},this.dispose=function(){}}}const Nt=new Hr,vd=new $t;function Ed(e,n){function t(f,o){f.matrixAutoUpdate===!0&&f.updateMatrix(),o.value.copy(f.matrix)}function i(f,o){o.color.getRGB(f.fogColor.value,Br(e)),o.isFog?(f.fogNear.value=o.near,f.fogFar.value=o.far):o.isFogExp2&&(f.fogDensity.value=o.density)}function r(f,o,w,A,_){o.isMeshBasicMaterial||o.isMeshLambertMaterial?a(f,o):o.isMeshToonMaterial?(a(f,o),x(f,o)):o.isMeshPhongMaterial?(a(f,o),y(f,o)):o.isMeshStandardMaterial?(a(f,o),E(f,o),o.isMeshPhysicalMaterial&&R(f,o,_)):o.isMeshMatcapMaterial?(a(f,o),G(f,o)):o.isMeshDepthMaterial?a(f,o):o.isMeshDistanceMaterial?(a(f,o),D(f,o)):o.isMeshNormalMaterial?a(f,o):o.isLineBasicMaterial?(d(f,o),o.isLineDashedMaterial&&u(f,o)):o.isPointsMaterial?b(f,o,w,A):o.isSpriteMaterial?M(f,o):o.isShadowMaterial?(f.color.value.copy(o.color),f.opacity.value=o.opacity):o.isShaderMaterial&&(o.uniformsNeedUpdate=!1)}function a(f,o){f.opacity.value=o.opacity,o.color&&f.diffuse.value.copy(o.color),o.emissive&&f.emissive.value.copy(o.emissive).multiplyScalar(o.emissiveIntensity),o.map&&(f.map.value=o.map,t(o.map,f.mapTransform)),o.alphaMap&&(f.alphaMap.value=o.alphaMap,t(o.alphaMap,f.alphaMapTransform)),o.bumpMap&&(f.bumpMap.value=o.bumpMap,t(o.bumpMap,f.bumpMapTransform),f.bumpScale.value=o.bumpScale,o.side===vt&&(f.bumpScale.value*=-1)),o.normalMap&&(f.normalMap.value=o.normalMap,t(o.normalMap,f.normalMapTransform),f.normalScale.value.copy(o.normalScale),o.side===vt&&f.normalScale.value.negate()),o.displacementMap&&(f.displacementMap.value=o.displacementMap,t(o.displacementMap,f.displacementMapTransform),f.displacementScale.value=o.displacementScale,f.displacementBias.value=o.displacementBias),o.emissiveMap&&(f.emissiveMap.value=o.emissiveMap,t(o.emissiveMap,f.emissiveMapTransform)),o.specularMap&&(f.specularMap.value=o.specularMap,t(o.specularMap,f.specularMapTransform)),o.alphaTest>0&&(f.alphaTest.value=o.alphaTest);const w=n.get(o),A=w.envMap,_=w.envMapRotation;A&&(f.envMap.value=A,Nt.copy(_),Nt.x*=-1,Nt.y*=-1,Nt.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Nt.y*=-1,Nt.z*=-1),f.envMapRotation.value.setFromMatrix4(vd.makeRotationFromEuler(Nt)),f.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=o.reflectivity,f.ior.value=o.ior,f.refractionRatio.value=o.refractionRatio),o.lightMap&&(f.lightMap.value=o.lightMap,f.lightMapIntensity.value=o.lightMapIntensity,t(o.lightMap,f.lightMapTransform)),o.aoMap&&(f.aoMap.value=o.aoMap,f.aoMapIntensity.value=o.aoMapIntensity,t(o.aoMap,f.aoMapTransform))}function d(f,o){f.diffuse.value.copy(o.color),f.opacity.value=o.opacity,o.map&&(f.map.value=o.map,t(o.map,f.mapTransform))}function u(f,o){f.dashSize.value=o.dashSize,f.totalSize.value=o.dashSize+o.gapSize,f.scale.value=o.scale}function b(f,o,w,A){f.diffuse.value.copy(o.color),f.opacity.value=o.opacity,f.size.value=o.size*w,f.scale.value=A*.5,o.map&&(f.map.value=o.map,t(o.map,f.uvTransform)),o.alphaMap&&(f.alphaMap.value=o.alphaMap,t(o.alphaMap,f.alphaMapTransform)),o.alphaTest>0&&(f.alphaTest.value=o.alphaTest)}function M(f,o){f.diffuse.value.copy(o.color),f.opacity.value=o.opacity,f.rotation.value=o.rotation,o.map&&(f.map.value=o.map,t(o.map,f.mapTransform)),o.alphaMap&&(f.alphaMap.value=o.alphaMap,t(o.alphaMap,f.alphaMapTransform)),o.alphaTest>0&&(f.alphaTest.value=o.alphaTest)}function y(f,o){f.specular.value.copy(o.specular),f.shininess.value=Math.max(o.shininess,1e-4)}function x(f,o){o.gradientMap&&(f.gradientMap.value=o.gradientMap)}function E(f,o){f.metalness.value=o.metalness,o.metalnessMap&&(f.metalnessMap.value=o.metalnessMap,t(o.metalnessMap,f.metalnessMapTransform)),f.roughness.value=o.roughness,o.roughnessMap&&(f.roughnessMap.value=o.roughnessMap,t(o.roughnessMap,f.roughnessMapTransform)),o.envMap&&(f.envMapIntensity.value=o.envMapIntensity)}function R(f,o,w){f.ior.value=o.ior,o.sheen>0&&(f.sheenColor.value.copy(o.sheenColor).multiplyScalar(o.sheen),f.sheenRoughness.value=o.sheenRoughness,o.sheenColorMap&&(f.sheenColorMap.value=o.sheenColorMap,t(o.sheenColorMap,f.sheenColorMapTransform)),o.sheenRoughnessMap&&(f.sheenRoughnessMap.value=o.sheenRoughnessMap,t(o.sheenRoughnessMap,f.sheenRoughnessMapTransform))),o.clearcoat>0&&(f.clearcoat.value=o.clearcoat,f.clearcoatRoughness.value=o.clearcoatRoughness,o.clearcoatMap&&(f.clearcoatMap.value=o.clearcoatMap,t(o.clearcoatMap,f.clearcoatMapTransform)),o.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=o.clearcoatRoughnessMap,t(o.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),o.clearcoatNormalMap&&(f.clearcoatNormalMap.value=o.clearcoatNormalMap,t(o.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(o.clearcoatNormalScale),o.side===vt&&f.clearcoatNormalScale.value.negate())),o.dispersion>0&&(f.dispersion.value=o.dispersion),o.iridescence>0&&(f.iridescence.value=o.iridescence,f.iridescenceIOR.value=o.iridescenceIOR,f.iridescenceThicknessMinimum.value=o.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=o.iridescenceThicknessRange[1],o.iridescenceMap&&(f.iridescenceMap.value=o.iridescenceMap,t(o.iridescenceMap,f.iridescenceMapTransform)),o.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=o.iridescenceThicknessMap,t(o.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),o.transmission>0&&(f.transmission.value=o.transmission,f.transmissionSamplerMap.value=w.texture,f.transmissionSamplerSize.value.set(w.width,w.height),o.transmissionMap&&(f.transmissionMap.value=o.transmissionMap,t(o.transmissionMap,f.transmissionMapTransform)),f.thickness.value=o.thickness,o.thicknessMap&&(f.thicknessMap.value=o.thicknessMap,t(o.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=o.attenuationDistance,f.attenuationColor.value.copy(o.attenuationColor)),o.anisotropy>0&&(f.anisotropyVector.value.set(o.anisotropy*Math.cos(o.anisotropyRotation),o.anisotropy*Math.sin(o.anisotropyRotation)),o.anisotropyMap&&(f.anisotropyMap.value=o.anisotropyMap,t(o.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=o.specularIntensity,f.specularColor.value.copy(o.specularColor),o.specularColorMap&&(f.specularColorMap.value=o.specularColorMap,t(o.specularColorMap,f.specularColorMapTransform)),o.specularIntensityMap&&(f.specularIntensityMap.value=o.specularIntensityMap,t(o.specularIntensityMap,f.specularIntensityMapTransform))}function G(f,o){o.matcap&&(f.matcap.value=o.matcap)}function D(f,o){const w=n.get(o).light;f.referencePosition.value.setFromMatrixPosition(w.matrixWorld),f.nearDistance.value=w.shadow.camera.near,f.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Sd(e,n,t,i){let r={},a={},d=[];const u=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function b(w,A){const _=A.program;i.uniformBlockBinding(w,_)}function M(w,A){let _=r[w.id];_===void 0&&(G(w),_=y(w),r[w.id]=_,w.addEventListener("dispose",f));const z=A.program;i.updateUBOMapping(w,z);const P=n.render.frame;a[w.id]!==P&&(E(w),a[w.id]=P)}function y(w){const A=x();w.__bindingPointIndex=A;const _=e.createBuffer(),z=w.__size,P=w.usage;return e.bindBuffer(e.UNIFORM_BUFFER,_),e.bufferData(e.UNIFORM_BUFFER,z,P),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,A,_),_}function x(){for(let w=0;w<u;w++)if(d.indexOf(w)===-1)return d.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function E(w){const A=r[w.id],_=w.uniforms,z=w.__cache;e.bindBuffer(e.UNIFORM_BUFFER,A);for(let P=0,I=_.length;P<I;P++){const C=Array.isArray(_[P])?_[P]:[_[P]];for(let p=0,c=C.length;p<c;p++){const g=C[p];if(R(g,P,p,z)===!0){const V=g.__offset,B=Array.isArray(g.value)?g.value:[g.value];let O=0;for(let q=0;q<B.length;q++){const F=B[q],Q=D(F);typeof F=="number"||typeof F=="boolean"?(g.__data[0]=F,e.bufferSubData(e.UNIFORM_BUFFER,V+O,g.__data)):F.isMatrix3?(g.__data[0]=F.elements[0],g.__data[1]=F.elements[1],g.__data[2]=F.elements[2],g.__data[3]=0,g.__data[4]=F.elements[3],g.__data[5]=F.elements[4],g.__data[6]=F.elements[5],g.__data[7]=0,g.__data[8]=F.elements[6],g.__data[9]=F.elements[7],g.__data[10]=F.elements[8],g.__data[11]=0):(F.toArray(g.__data,O),O+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,V,g.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function R(w,A,_,z){const P=w.value,I=A+"_"+_;if(z[I]===void 0)return typeof P=="number"||typeof P=="boolean"?z[I]=P:z[I]=P.clone(),!0;{const C=z[I];if(typeof P=="number"||typeof P=="boolean"){if(C!==P)return z[I]=P,!0}else if(C.equals(P)===!1)return C.copy(P),!0}return!1}function G(w){const A=w.uniforms;let _=0;const z=16;for(let I=0,C=A.length;I<C;I++){const p=Array.isArray(A[I])?A[I]:[A[I]];for(let c=0,g=p.length;c<g;c++){const V=p[c],B=Array.isArray(V.value)?V.value:[V.value];for(let O=0,q=B.length;O<q;O++){const F=B[O],Q=D(F),k=_%z,ue=k%Q.boundary,he=k+ue;_+=ue,he!==0&&z-he<Q.storage&&(_+=z-he),V.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=_,_+=Q.storage}}}const P=_%z;return P>0&&(_+=z-P),w.__size=_,w.__cache={},this}function D(w){const A={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(A.boundary=4,A.storage=4):w.isVector2?(A.boundary=8,A.storage=8):w.isVector3||w.isColor?(A.boundary=16,A.storage=12):w.isVector4?(A.boundary=16,A.storage=16):w.isMatrix3?(A.boundary=48,A.storage=48):w.isMatrix4?(A.boundary=64,A.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),A}function f(w){const A=w.target;A.removeEventListener("dispose",f);const _=d.indexOf(A.__bindingPointIndex);d.splice(_,1),e.deleteBuffer(r[A.id]),delete r[A.id],delete a[A.id]}function o(){for(const w in r)e.deleteBuffer(r[w]);d=[],r={},a={}}return{bind:b,update:M,dispose:o}}class Md{constructor(n={}){const{canvas:t=aa(),context:i=null,depth:r=!0,stencil:a=!1,alpha:d=!1,antialias:u=!1,premultipliedAlpha:b=!0,preserveDrawingBuffer:M=!1,powerPreference:y="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:E=!1}=n;this.isWebGLRenderer=!0;let R;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");R=i.getContextAttributes().alpha}else R=d;const G=new Uint32Array(4),D=new Int32Array(4);let f=null,o=null;const w=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=oa,this.toneMapping=Lt,this.toneMappingExposure=1;const _=this;let z=!1,P=0,I=0,C=null,p=-1,c=null;const g=new pt,V=new pt;let B=null;const O=new $e(0);let q=0,F=t.width,Q=t.height,k=1,ue=null,he=null;const Ce=new pt(0,0,F,Q),De=new pt(0,0,F,Q);let Be=!1;const W=new xr;let J=!1,pe=!1;this.transmissionResolutionScale=1;const ie=new $t,Se=new $t,Ve=new be,Te=new pt,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qe=!1;function Ue(){return C===null?k:1}let m=i;function mt(l,S){return t.getContext(l,S)}try{const l={alpha:!0,depth:r,stencil:a,antialias:u,premultipliedAlpha:b,preserveDrawingBuffer:M,powerPreference:y,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${sa}`),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",oe,!1),t.addEventListener("webglcontextcreationerror",ae,!1),m===null){const S="webgl2";if(m=mt(S,l),m===null)throw mt(S)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(l){throw console.error("THREE.WebGLRenderer: "+l.message),l}let ye,Ie,ge,qe,_e,h,s,L,Y,Z,X,me,re,le,Oe,j,ce,Me,xe,fe,Ne,we,Ye,v;function te(){ye=new wc(m),ye.init(),we=new pd(m,ye),Ie=new xc(m,ye,n,we),ge=new dd(m,ye),Ie.reverseDepthBuffer&&E&&ge.buffers.depth.setReversed(!0),qe=new yc(m),_e=new Qf,h=new ud(m,ye,ge,_e,Ie,we,qe),s=new Rc(_),L=new Dc(_),Y=new Go(m),Ye=new Mc(m,Y),Z=new Lc(m,Y,qe,Ye),X=new Nc(m,Z,Y,qe),xe=new Ic(m,Ie,h),j=new Ac(_e),me=new jf(_,s,L,ye,Ie,Ye,j),re=new Ed(_,_e),le=new ed,Oe=new od(ye),Me=new Sc(_,s,L,ge,X,R,b),ce=new cd(_,X,Ie),v=new Sd(m,qe,Ie,ge),fe=new Tc(m,ye,qe),Ne=new Uc(m,ye,qe),qe.programs=me.programs,_.capabilities=Ie,_.extensions=ye,_.properties=_e,_.renderLists=le,_.shadowMap=ce,_.state=ge,_.info=qe}te();const H=new gd(_,m);this.xr=H,this.getContext=function(){return m},this.getContextAttributes=function(){return m.getContextAttributes()},this.forceContextLoss=function(){const l=ye.get("WEBGL_lose_context");l&&l.loseContext()},this.forceContextRestore=function(){const l=ye.get("WEBGL_lose_context");l&&l.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(l){l!==void 0&&(k=l,this.setSize(F,Q,!1))},this.getSize=function(l){return l.set(F,Q)},this.setSize=function(l,S,U=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=l,Q=S,t.width=Math.floor(l*k),t.height=Math.floor(S*k),U===!0&&(t.style.width=l+"px",t.style.height=S+"px"),this.setViewport(0,0,l,S)},this.getDrawingBufferSize=function(l){return l.set(F*k,Q*k).floor()},this.setDrawingBufferSize=function(l,S,U){F=l,Q=S,k=U,t.width=Math.floor(l*U),t.height=Math.floor(S*U),this.setViewport(0,0,l,S)},this.getCurrentViewport=function(l){return l.copy(g)},this.getViewport=function(l){return l.copy(Ce)},this.setViewport=function(l,S,U,N){l.isVector4?Ce.set(l.x,l.y,l.z,l.w):Ce.set(l,S,U,N),ge.viewport(g.copy(Ce).multiplyScalar(k).round())},this.getScissor=function(l){return l.copy(De)},this.setScissor=function(l,S,U,N){l.isVector4?De.set(l.x,l.y,l.z,l.w):De.set(l,S,U,N),ge.scissor(V.copy(De).multiplyScalar(k).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(l){ge.setScissorTest(Be=l)},this.setOpaqueSort=function(l){ue=l},this.setTransparentSort=function(l){he=l},this.getClearColor=function(l){return l.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor(...arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha(...arguments)},this.clear=function(l=!0,S=!0,U=!0){let N=0;if(l){let T=!1;if(C!==null){const $=C.texture.format;T=$===Or||$===Nr||$===Ir}if(T){const $=C.texture.type,ne=$===Ht||$===dn||$===Pn||$===fn||$===Dr||$===wr,se=Me.getClearColor(),de=Me.getClearAlpha(),Ae=se.r,Re=se.g,ve=se.b;ne?(G[0]=Ae,G[1]=Re,G[2]=ve,G[3]=de,m.clearBufferuiv(m.COLOR,0,G)):(D[0]=Ae,D[1]=Re,D[2]=ve,D[3]=de,m.clearBufferiv(m.COLOR,0,D))}else N|=m.COLOR_BUFFER_BIT}S&&(N|=m.DEPTH_BUFFER_BIT),U&&(N|=m.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),m.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",oe,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),Me.dispose(),le.dispose(),Oe.dispose(),_e.dispose(),s.dispose(),L.dispose(),X.dispose(),Ye.dispose(),v.dispose(),me.dispose(),H.dispose(),H.removeEventListener("sessionstart",ci),H.removeEventListener("sessionend",fi),Ut.stop()};function K(l){l.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function oe(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;const l=qe.autoReset,S=ce.enabled,U=ce.autoUpdate,N=ce.needsUpdate,T=ce.type;te(),qe.autoReset=l,ce.enabled=S,ce.autoUpdate=U,ce.needsUpdate=N,ce.type=T}function ae(l){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",l.statusMessage)}function Pe(l){const S=l.target;S.removeEventListener("dispose",Pe),Je(S)}function Je(l){lt(l),_e.remove(l)}function lt(l){const S=_e.get(l).programs;S!==void 0&&(S.forEach(function(U){me.releaseProgram(U)}),l.isShaderMaterial&&me.releaseShaderCache(l))}this.renderBufferDirect=function(l,S,U,N,T,$){S===null&&(S=tt);const ne=T.isMesh&&T.matrixWorld.determinant()<0,se=Jr(l,S,U,N,T);ge.setMaterial(N,ne);let de=U.index,Ae=1;if(N.wireframe===!0){if(de=Z.getWireframeAttribute(U),de===void 0)return;Ae=2}const Re=U.drawRange,ve=U.attributes.position;let Fe=Re.start*Ae,ke=(Re.start+Re.count)*Ae;$!==null&&(Fe=Math.max(Fe,$.start*Ae),ke=Math.min(ke,($.start+$.count)*Ae)),de!==null?(Fe=Math.max(Fe,0),ke=Math.min(ke,de.count)):ve!=null&&(Fe=Math.max(Fe,0),ke=Math.min(ke,ve.count));const nt=ke-Fe;if(nt<0||nt===1/0)return;Ye.setup(T,N,se,U,de);let et,Ge=fe;if(de!==null&&(et=Y.get(de),Ge=Ne,Ge.setIndex(et)),T.isMesh)N.wireframe===!0?(ge.setLineWidth(N.wireframeLinewidth*Ue()),Ge.setMode(m.LINES)):Ge.setMode(m.TRIANGLES);else if(T.isLine){let Ee=N.linewidth;Ee===void 0&&(Ee=1),ge.setLineWidth(Ee*Ue()),T.isLineSegments?Ge.setMode(m.LINES):T.isLineLoop?Ge.setMode(m.LINE_LOOP):Ge.setMode(m.LINE_STRIP)}else T.isPoints?Ge.setMode(m.POINTS):T.isSprite&&Ge.setMode(m.TRIANGLES);if(T.isBatchedMesh)if(T._multiDrawInstances!==null)Ot("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ge.renderMultiDrawInstances(T._multiDrawStarts,T._multiDrawCounts,T._multiDrawCount,T._multiDrawInstances);else if(ye.get("WEBGL_multi_draw"))Ge.renderMultiDraw(T._multiDrawStarts,T._multiDrawCounts,T._multiDrawCount);else{const Ee=T._multiDrawStarts,st=T._multiDrawCounts,ze=T._multiDrawCount,St=de?Y.get(de).bytesPerElement:1,Wt=_e.get(N).currentProgram.getUniforms();for(let ht=0;ht<ze;ht++)Wt.setValue(m,"_gl_DrawID",ht),Ge.render(Ee[ht]/St,st[ht])}else if(T.isInstancedMesh)Ge.renderInstances(Fe,nt,T.count);else if(U.isInstancedBufferGeometry){const Ee=U._maxInstanceCount!==void 0?U._maxInstanceCount:1/0,st=Math.min(U.instanceCount,Ee);Ge.renderInstances(Fe,nt,st)}else Ge.render(Fe,nt)};function We(l,S,U){l.transparent===!0&&l.side===Tt&&l.forceSinglePass===!1?(l.side=vt,l.needsUpdate=!0,mn(l,S,U),l.side=cn,l.needsUpdate=!0,mn(l,S,U),l.side=Tt):mn(l,S,U)}this.compile=function(l,S,U=null){U===null&&(U=l),o=Oe.get(U),o.init(S),A.push(o),U.traverseVisible(function(T){T.isLight&&T.layers.test(S.layers)&&(o.pushLight(T),T.castShadow&&o.pushShadow(T))}),l!==U&&l.traverseVisible(function(T){T.isLight&&T.layers.test(S.layers)&&(o.pushLight(T),T.castShadow&&o.pushShadow(T))}),o.setupLights();const N=new Set;return l.traverse(function(T){if(!(T.isMesh||T.isPoints||T.isLine||T.isSprite))return;const $=T.material;if($)if(Array.isArray($))for(let ne=0;ne<$.length;ne++){const se=$[ne];We(se,U,T),N.add(se)}else We($,U,T),N.add($)}),o=A.pop(),N},this.compileAsync=function(l,S,U=null){const N=this.compile(l,S,U);return new Promise(T=>{function $(){if(N.forEach(function(ne){_e.get(ne).currentProgram.isReady()&&N.delete(ne)}),N.size===0){T(l);return}setTimeout($,10)}ye.get("KHR_parallel_shader_compile")!==null?$():setTimeout($,10)})};let Et=null;function Rt(l){Et&&Et(l)}function ci(){Ut.stop()}function fi(){Ut.start()}const Ut=new zr;Ut.setAnimationLoop(Rt),typeof self<"u"&&Ut.setContext(self),this.setAnimationLoop=function(l){Et=l,H.setAnimationLoop(l),l===null?Ut.stop():Ut.start()},H.addEventListener("sessionstart",ci),H.addEventListener("sessionend",fi),this.render=function(l,S){if(S!==void 0&&S.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(l.matrixWorldAutoUpdate===!0&&l.updateMatrixWorld(),S.parent===null&&S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(S),S=H.getCamera()),l.isScene===!0&&l.onBeforeRender(_,l,S,C),o=Oe.get(l,A.length),o.init(S),A.push(o),Se.multiplyMatrices(S.projectionMatrix,S.matrixWorldInverse),W.setFromProjectionMatrix(Se),pe=this.localClippingEnabled,J=j.init(this.clippingPlanes,pe),f=le.get(l,w.length),f.init(),w.push(f),H.enabled===!0&&H.isPresenting===!0){const $=_.xr.getDepthSensingMesh();$!==null&&Un($,S,-1/0,_.sortObjects)}Un(l,S,0,_.sortObjects),f.finish(),_.sortObjects===!0&&f.sort(ue,he),Qe=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,Qe&&Me.addToRenderList(f,l),this.info.render.frame++,J===!0&&j.beginShadows();const U=o.state.shadowsArray;ce.render(U,l,S),J===!0&&j.endShadows(),this.info.autoReset===!0&&this.info.reset();const N=f.opaque,T=f.transmissive;if(o.setupLights(),S.isArrayCamera){const $=S.cameras;if(T.length>0)for(let ne=0,se=$.length;ne<se;ne++){const de=$[ne];ui(N,T,l,de)}Qe&&Me.render(l);for(let ne=0,se=$.length;ne<se;ne++){const de=$[ne];di(f,l,de,de.viewport)}}else T.length>0&&ui(N,T,l,S),Qe&&Me.render(l),di(f,l,S);C!==null&&I===0&&(h.updateMultisampleRenderTarget(C),h.updateRenderTargetMipmap(C)),l.isScene===!0&&l.onAfterRender(_,l,S),Ye.resetDefaultState(),p=-1,c=null,A.pop(),A.length>0?(o=A[A.length-1],J===!0&&j.setGlobalState(_.clippingPlanes,o.state.camera)):o=null,w.pop(),w.length>0?f=w[w.length-1]:f=null};function Un(l,S,U,N){if(l.visible===!1)return;if(l.layers.test(S.layers)){if(l.isGroup)U=l.renderOrder;else if(l.isLOD)l.autoUpdate===!0&&l.update(S);else if(l.isLight)o.pushLight(l),l.castShadow&&o.pushShadow(l);else if(l.isSprite){if(!l.frustumCulled||W.intersectsSprite(l)){N&&Te.setFromMatrixPosition(l.matrixWorld).applyMatrix4(Se);const ne=X.update(l),se=l.material;se.visible&&f.push(l,ne,se,U,Te.z,null)}}else if((l.isMesh||l.isLine||l.isPoints)&&(!l.frustumCulled||W.intersectsObject(l))){const ne=X.update(l),se=l.material;if(N&&(l.boundingSphere!==void 0?(l.boundingSphere===null&&l.computeBoundingSphere(),Te.copy(l.boundingSphere.center)):(ne.boundingSphere===null&&ne.computeBoundingSphere(),Te.copy(ne.boundingSphere.center)),Te.applyMatrix4(l.matrixWorld).applyMatrix4(Se)),Array.isArray(se)){const de=ne.groups;for(let Ae=0,Re=de.length;Ae<Re;Ae++){const ve=de[Ae],Fe=se[ve.materialIndex];Fe&&Fe.visible&&f.push(l,ne,Fe,U,Te.z,ve)}}else se.visible&&f.push(l,ne,se,U,Te.z,null)}}const $=l.children;for(let ne=0,se=$.length;ne<se;ne++)Un($[ne],S,U,N)}function di(l,S,U,N){const T=l.opaque,$=l.transmissive,ne=l.transparent;o.setupLightsView(U),J===!0&&j.setGlobalState(_.clippingPlanes,U),N&&ge.viewport(g.copy(N)),T.length>0&&hn(T,S,U),$.length>0&&hn($,S,U),ne.length>0&&hn(ne,S,U),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function ui(l,S,U,N){if((U.isScene===!0?U.overrideMaterial:null)!==null)return;o.state.transmissionRenderTarget[N.id]===void 0&&(o.state.transmissionRenderTarget[N.id]=new jt(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float")?Dt:Ht,minFilter:rn,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const $=o.state.transmissionRenderTarget[N.id],ne=N.viewport||g;$.setSize(ne.z*_.transmissionResolutionScale,ne.w*_.transmissionResolutionScale);const se=_.getRenderTarget();_.setRenderTarget($),_.getClearColor(O),q=_.getClearAlpha(),q<1&&_.setClearColor(16777215,.5),_.clear(),Qe&&Me.render(U);const de=_.toneMapping;_.toneMapping=Lt;const Ae=N.viewport;if(N.viewport!==void 0&&(N.viewport=void 0),o.setupLightsView(N),J===!0&&j.setGlobalState(_.clippingPlanes,N),hn(l,U,N),h.updateMultisampleRenderTarget($),h.updateRenderTargetMipmap($),ye.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let ve=0,Fe=S.length;ve<Fe;ve++){const ke=S[ve],nt=ke.object,et=ke.geometry,Ge=ke.material,Ee=ke.group;if(Ge.side===Tt&&nt.layers.test(N.layers)){const st=Ge.side;Ge.side=vt,Ge.needsUpdate=!0,pi(nt,U,N,et,Ge,Ee),Ge.side=st,Ge.needsUpdate=!0,Re=!0}}Re===!0&&(h.updateMultisampleRenderTarget($),h.updateRenderTargetMipmap($))}_.setRenderTarget(se),_.setClearColor(O,q),Ae!==void 0&&(N.viewport=Ae),_.toneMapping=de}function hn(l,S,U){const N=S.isScene===!0?S.overrideMaterial:null;for(let T=0,$=l.length;T<$;T++){const ne=l[T],se=ne.object,de=ne.geometry,Ae=N===null?ne.material:N,Re=ne.group;se.layers.test(U.layers)&&pi(se,S,U,de,Ae,Re)}}function pi(l,S,U,N,T,$){l.onBeforeRender(_,S,U,N,T,$),l.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,l.matrixWorld),l.normalMatrix.getNormalMatrix(l.modelViewMatrix),T.onBeforeRender(_,S,U,N,l,$),T.transparent===!0&&T.side===Tt&&T.forceSinglePass===!1?(T.side=vt,T.needsUpdate=!0,_.renderBufferDirect(U,S,N,T,l,$),T.side=cn,T.needsUpdate=!0,_.renderBufferDirect(U,S,N,T,l,$),T.side=Tt):_.renderBufferDirect(U,S,N,T,l,$),l.onAfterRender(_,S,U,N,T,$)}function mn(l,S,U){S.isScene!==!0&&(S=tt);const N=_e.get(l),T=o.state.lights,$=o.state.shadowsArray,ne=T.state.version,se=me.getParameters(l,T.state,$,S,U),de=me.getProgramCacheKey(se);let Ae=N.programs;N.environment=l.isMeshStandardMaterial?S.environment:null,N.fog=S.fog,N.envMap=(l.isMeshStandardMaterial?L:s).get(l.envMap||N.environment),N.envMapRotation=N.environment!==null&&l.envMap===null?S.environmentRotation:l.envMapRotation,Ae===void 0&&(l.addEventListener("dispose",Pe),Ae=new Map,N.programs=Ae);let Re=Ae.get(de);if(Re!==void 0){if(N.currentProgram===Re&&N.lightsStateVersion===ne)return mi(l,se),Re}else se.uniforms=me.getUniforms(l),l.onBeforeCompile(se,_),Re=me.acquireProgram(se,de),Ae.set(de,Re),N.uniforms=se.uniforms;const ve=N.uniforms;return(!l.isShaderMaterial&&!l.isRawShaderMaterial||l.clipping===!0)&&(ve.clippingPlanes=j.uniform),mi(l,se),N.needsLights=ta(l),N.lightsStateVersion=ne,N.needsLights&&(ve.ambientLightColor.value=T.state.ambient,ve.lightProbe.value=T.state.probe,ve.directionalLights.value=T.state.directional,ve.directionalLightShadows.value=T.state.directionalShadow,ve.spotLights.value=T.state.spot,ve.spotLightShadows.value=T.state.spotShadow,ve.rectAreaLights.value=T.state.rectArea,ve.ltc_1.value=T.state.rectAreaLTC1,ve.ltc_2.value=T.state.rectAreaLTC2,ve.pointLights.value=T.state.point,ve.pointLightShadows.value=T.state.pointShadow,ve.hemisphereLights.value=T.state.hemi,ve.directionalShadowMap.value=T.state.directionalShadowMap,ve.directionalShadowMatrix.value=T.state.directionalShadowMatrix,ve.spotShadowMap.value=T.state.spotShadowMap,ve.spotLightMatrix.value=T.state.spotLightMatrix,ve.spotLightMap.value=T.state.spotLightMap,ve.pointShadowMap.value=T.state.pointShadowMap,ve.pointShadowMatrix.value=T.state.pointShadowMatrix),N.currentProgram=Re,N.uniformsList=null,Re}function hi(l){if(l.uniformsList===null){const S=l.currentProgram.getUniforms();l.uniformsList=An.seqWithValue(S.seq,l.uniforms)}return l.uniformsList}function mi(l,S){const U=_e.get(l);U.outputColorSpace=S.outputColorSpace,U.batching=S.batching,U.batchingColor=S.batchingColor,U.instancing=S.instancing,U.instancingColor=S.instancingColor,U.instancingMorph=S.instancingMorph,U.skinning=S.skinning,U.morphTargets=S.morphTargets,U.morphNormals=S.morphNormals,U.morphColors=S.morphColors,U.morphTargetsCount=S.morphTargetsCount,U.numClippingPlanes=S.numClippingPlanes,U.numIntersection=S.numClipIntersection,U.vertexAlphas=S.vertexAlphas,U.vertexTangents=S.vertexTangents,U.toneMapping=S.toneMapping}function Jr(l,S,U,N,T){S.isScene!==!0&&(S=tt),h.resetTextureUnits();const $=S.fog,ne=N.isMeshStandardMaterial?S.environment:null,se=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:pn,de=(N.isMeshStandardMaterial?L:s).get(N.envMap||ne),Ae=N.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,Re=!!U.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),ve=!!U.morphAttributes.position,Fe=!!U.morphAttributes.normal,ke=!!U.morphAttributes.color;let nt=Lt;N.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(nt=_.toneMapping);const et=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Ge=et!==void 0?et.length:0,Ee=_e.get(N),st=o.state.lights;if(J===!0&&(pe===!0||l!==c)){const ct=l===c&&N.id===p;j.setState(N,l,ct)}let ze=!1;N.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==st.state.version||Ee.outputColorSpace!==se||T.isBatchedMesh&&Ee.batching===!1||!T.isBatchedMesh&&Ee.batching===!0||T.isBatchedMesh&&Ee.batchingColor===!0&&T.colorTexture===null||T.isBatchedMesh&&Ee.batchingColor===!1&&T.colorTexture!==null||T.isInstancedMesh&&Ee.instancing===!1||!T.isInstancedMesh&&Ee.instancing===!0||T.isSkinnedMesh&&Ee.skinning===!1||!T.isSkinnedMesh&&Ee.skinning===!0||T.isInstancedMesh&&Ee.instancingColor===!0&&T.instanceColor===null||T.isInstancedMesh&&Ee.instancingColor===!1&&T.instanceColor!==null||T.isInstancedMesh&&Ee.instancingMorph===!0&&T.morphTexture===null||T.isInstancedMesh&&Ee.instancingMorph===!1&&T.morphTexture!==null||Ee.envMap!==de||N.fog===!0&&Ee.fog!==$||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==j.numPlanes||Ee.numIntersection!==j.numIntersection)||Ee.vertexAlphas!==Ae||Ee.vertexTangents!==Re||Ee.morphTargets!==ve||Ee.morphNormals!==Fe||Ee.morphColors!==ke||Ee.toneMapping!==nt||Ee.morphTargetsCount!==Ge)&&(ze=!0):(ze=!0,Ee.__version=N.version);let St=Ee.currentProgram;ze===!0&&(St=mn(N,S,T));let Wt=!1,ht=!1,tn=!1;const je=St.getUniforms(),_t=Ee.uniforms;if(ge.useProgram(St.program)&&(Wt=!0,ht=!0,tn=!0),N.id!==p&&(p=N.id,ht=!0),Wt||c!==l){ge.buffers.depth.getReversed()?(ie.copy(l.projectionMatrix),la(ie),ca(ie),je.setValue(m,"projectionMatrix",ie)):je.setValue(m,"projectionMatrix",l.projectionMatrix),je.setValue(m,"viewMatrix",l.matrixWorldInverse);const ft=je.map.cameraPosition;ft!==void 0&&ft.setValue(m,Ve.setFromMatrixPosition(l.matrixWorld)),Ie.logarithmicDepthBuffer&&je.setValue(m,"logDepthBufFC",2/(Math.log(l.far+1)/Math.LN2)),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&je.setValue(m,"isOrthographic",l.isOrthographicCamera===!0),c!==l&&(c=l,ht=!0,tn=!0)}if(T.isSkinnedMesh){je.setOptional(m,T,"bindMatrix"),je.setOptional(m,T,"bindMatrixInverse");const ct=T.skeleton;ct&&(ct.boneTexture===null&&ct.computeBoneTexture(),je.setValue(m,"boneTexture",ct.boneTexture,h))}T.isBatchedMesh&&(je.setOptional(m,T,"batchingTexture"),je.setValue(m,"batchingTexture",T._matricesTexture,h),je.setOptional(m,T,"batchingIdTexture"),je.setValue(m,"batchingIdTexture",T._indirectTexture,h),je.setOptional(m,T,"batchingColorTexture"),T._colorsTexture!==null&&je.setValue(m,"batchingColorTexture",T._colorsTexture,h));const gt=U.morphAttributes;if((gt.position!==void 0||gt.normal!==void 0||gt.color!==void 0)&&xe.update(T,U,St),(ht||Ee.receiveShadow!==T.receiveShadow)&&(Ee.receiveShadow=T.receiveShadow,je.setValue(m,"receiveShadow",T.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(_t.envMap.value=de,_t.flipEnvMap.value=de.isCubeTexture&&de.isRenderTargetTexture===!1?-1:1),N.isMeshStandardMaterial&&N.envMap===null&&S.environment!==null&&(_t.envMapIntensity.value=S.environmentIntensity),ht&&(je.setValue(m,"toneMappingExposure",_.toneMappingExposure),Ee.needsLights&&ea(_t,tn),$&&N.fog===!0&&re.refreshFogUniforms(_t,$),re.refreshMaterialUniforms(_t,N,k,Q,o.state.transmissionRenderTarget[l.id]),An.upload(m,hi(Ee),_t,h)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(An.upload(m,hi(Ee),_t,h),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&je.setValue(m,"center",T.center),je.setValue(m,"modelViewMatrix",T.modelViewMatrix),je.setValue(m,"normalMatrix",T.normalMatrix),je.setValue(m,"modelMatrix",T.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const ct=N.uniformsGroups;for(let ft=0,yn=ct.length;ft<yn;ft++){const yt=ct[ft];v.update(yt,St),v.bind(yt,St)}}return St}function ea(l,S){l.ambientLightColor.needsUpdate=S,l.lightProbe.needsUpdate=S,l.directionalLights.needsUpdate=S,l.directionalLightShadows.needsUpdate=S,l.pointLights.needsUpdate=S,l.pointLightShadows.needsUpdate=S,l.spotLights.needsUpdate=S,l.spotLightShadows.needsUpdate=S,l.rectAreaLights.needsUpdate=S,l.hemisphereLights.needsUpdate=S}function ta(l){return l.isMeshLambertMaterial||l.isMeshToonMaterial||l.isMeshPhongMaterial||l.isMeshStandardMaterial||l.isShadowMaterial||l.isShaderMaterial&&l.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(l,S,U){_e.get(l.texture).__webglTexture=S,_e.get(l.depthTexture).__webglTexture=U;const N=_e.get(l);N.__hasExternalTextures=!0,N.__autoAllocateDepthBuffer=U===void 0,N.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(l,S){const U=_e.get(l);U.__webglFramebuffer=S,U.__useDefaultFramebuffer=S===void 0};const na=m.createFramebuffer();this.setRenderTarget=function(l,S=0,U=0){C=l,P=S,I=U;let N=!0,T=null,$=!1,ne=!1;if(l){const de=_e.get(l);if(de.__useDefaultFramebuffer!==void 0)ge.bindFramebuffer(m.FRAMEBUFFER,null),N=!1;else if(de.__webglFramebuffer===void 0)h.setupRenderTarget(l);else if(de.__hasExternalTextures)h.rebindTextures(l,_e.get(l.texture).__webglTexture,_e.get(l.depthTexture).__webglTexture);else if(l.depthBuffer){const ve=l.depthTexture;if(de.__boundDepthTexture!==ve){if(ve!==null&&_e.has(ve)&&(l.width!==ve.image.width||l.height!==ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");h.setupDepthRenderbuffer(l)}}const Ae=l.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(ne=!0);const Re=_e.get(l).__webglFramebuffer;l.isWebGLCubeRenderTarget?(Array.isArray(Re[S])?T=Re[S][U]:T=Re[S],$=!0):l.samples>0&&h.useMultisampledRTT(l)===!1?T=_e.get(l).__webglMultisampledFramebuffer:Array.isArray(Re)?T=Re[U]:T=Re,g.copy(l.viewport),V.copy(l.scissor),B=l.scissorTest}else g.copy(Ce).multiplyScalar(k).floor(),V.copy(De).multiplyScalar(k).floor(),B=Be;if(U!==0&&(T=na),ge.bindFramebuffer(m.FRAMEBUFFER,T)&&N&&ge.drawBuffers(l,T),ge.viewport(g),ge.scissor(V),ge.setScissorTest(B),$){const de=_e.get(l.texture);m.framebufferTexture2D(m.FRAMEBUFFER,m.COLOR_ATTACHMENT0,m.TEXTURE_CUBE_MAP_POSITIVE_X+S,de.__webglTexture,U)}else if(ne){const de=_e.get(l.texture),Ae=S;m.framebufferTextureLayer(m.FRAMEBUFFER,m.COLOR_ATTACHMENT0,de.__webglTexture,U,Ae)}else if(l!==null&&U!==0){const de=_e.get(l.texture);m.framebufferTexture2D(m.FRAMEBUFFER,m.COLOR_ATTACHMENT0,m.TEXTURE_2D,de.__webglTexture,U)}p=-1},this.readRenderTargetPixels=function(l,S,U,N,T,$,ne){if(!(l&&l.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let se=_e.get(l).__webglFramebuffer;if(l.isWebGLCubeRenderTarget&&ne!==void 0&&(se=se[ne]),se){ge.bindFramebuffer(m.FRAMEBUFFER,se);try{const de=l.texture,Ae=de.format,Re=de.type;if(!Ie.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ie.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}S>=0&&S<=l.width-N&&U>=0&&U<=l.height-T&&m.readPixels(S,U,N,T,we.convert(Ae),we.convert(Re),$)}finally{const de=C!==null?_e.get(C).__webglFramebuffer:null;ge.bindFramebuffer(m.FRAMEBUFFER,de)}}},this.readRenderTargetPixelsAsync=async function(l,S,U,N,T,$,ne){if(!(l&&l.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let se=_e.get(l).__webglFramebuffer;if(l.isWebGLCubeRenderTarget&&ne!==void 0&&(se=se[ne]),se){const de=l.texture,Ae=de.format,Re=de.type;if(!Ie.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ie.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(S>=0&&S<=l.width-N&&U>=0&&U<=l.height-T){ge.bindFramebuffer(m.FRAMEBUFFER,se);const ve=m.createBuffer();m.bindBuffer(m.PIXEL_PACK_BUFFER,ve),m.bufferData(m.PIXEL_PACK_BUFFER,$.byteLength,m.STREAM_READ),m.readPixels(S,U,N,T,we.convert(Ae),we.convert(Re),0);const Fe=C!==null?_e.get(C).__webglFramebuffer:null;ge.bindFramebuffer(m.FRAMEBUFFER,Fe);const ke=m.fenceSync(m.SYNC_GPU_COMMANDS_COMPLETE,0);return m.flush(),await fa(m,ke,4),m.bindBuffer(m.PIXEL_PACK_BUFFER,ve),m.getBufferSubData(m.PIXEL_PACK_BUFFER,0,$),m.deleteBuffer(ve),m.deleteSync(ke),$}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(l,S=null,U=0){l.isTexture!==!0&&(Ot("WebGLRenderer: copyFramebufferToTexture function signature has changed."),S=arguments[0]||null,l=arguments[1]);const N=Math.pow(2,-U),T=Math.floor(l.image.width*N),$=Math.floor(l.image.height*N),ne=S!==null?S.x:0,se=S!==null?S.y:0;h.setTexture2D(l,0),m.copyTexSubImage2D(m.TEXTURE_2D,U,0,0,ne,se,T,$),ge.unbindTexture()};const ia=m.createFramebuffer(),ra=m.createFramebuffer();this.copyTextureToTexture=function(l,S,U=null,N=null,T=0,$=null){l.isTexture!==!0&&(Ot("WebGLRenderer: copyTextureToTexture function signature has changed."),N=arguments[0]||null,l=arguments[1],S=arguments[2],$=arguments[3]||0,U=null),$===null&&(T!==0?(Ot("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),$=T,T=0):$=0);let ne,se,de,Ae,Re,ve,Fe,ke,nt;const et=l.isCompressedTexture?l.mipmaps[$]:l.image;if(U!==null)ne=U.max.x-U.min.x,se=U.max.y-U.min.y,de=U.isBox3?U.max.z-U.min.z:1,Ae=U.min.x,Re=U.min.y,ve=U.isBox3?U.min.z:0;else{const gt=Math.pow(2,-T);ne=Math.floor(et.width*gt),se=Math.floor(et.height*gt),l.isDataArrayTexture?de=et.depth:l.isData3DTexture?de=Math.floor(et.depth*gt):de=1,Ae=0,Re=0,ve=0}N!==null?(Fe=N.x,ke=N.y,nt=N.z):(Fe=0,ke=0,nt=0);const Ge=we.convert(S.format),Ee=we.convert(S.type);let st;S.isData3DTexture?(h.setTexture3D(S,0),st=m.TEXTURE_3D):S.isDataArrayTexture||S.isCompressedArrayTexture?(h.setTexture2DArray(S,0),st=m.TEXTURE_2D_ARRAY):(h.setTexture2D(S,0),st=m.TEXTURE_2D),m.pixelStorei(m.UNPACK_FLIP_Y_WEBGL,S.flipY),m.pixelStorei(m.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),m.pixelStorei(m.UNPACK_ALIGNMENT,S.unpackAlignment);const ze=m.getParameter(m.UNPACK_ROW_LENGTH),St=m.getParameter(m.UNPACK_IMAGE_HEIGHT),Wt=m.getParameter(m.UNPACK_SKIP_PIXELS),ht=m.getParameter(m.UNPACK_SKIP_ROWS),tn=m.getParameter(m.UNPACK_SKIP_IMAGES);m.pixelStorei(m.UNPACK_ROW_LENGTH,et.width),m.pixelStorei(m.UNPACK_IMAGE_HEIGHT,et.height),m.pixelStorei(m.UNPACK_SKIP_PIXELS,Ae),m.pixelStorei(m.UNPACK_SKIP_ROWS,Re),m.pixelStorei(m.UNPACK_SKIP_IMAGES,ve);const je=l.isDataArrayTexture||l.isData3DTexture,_t=S.isDataArrayTexture||S.isData3DTexture;if(l.isDepthTexture){const gt=_e.get(l),ct=_e.get(S),ft=_e.get(gt.__renderTarget),yn=_e.get(ct.__renderTarget);ge.bindFramebuffer(m.READ_FRAMEBUFFER,ft.__webglFramebuffer),ge.bindFramebuffer(m.DRAW_FRAMEBUFFER,yn.__webglFramebuffer);for(let yt=0;yt<de;yt++)je&&(m.framebufferTextureLayer(m.READ_FRAMEBUFFER,m.COLOR_ATTACHMENT0,_e.get(l).__webglTexture,T,ve+yt),m.framebufferTextureLayer(m.DRAW_FRAMEBUFFER,m.COLOR_ATTACHMENT0,_e.get(S).__webglTexture,$,nt+yt)),m.blitFramebuffer(Ae,Re,ne,se,Fe,ke,ne,se,m.DEPTH_BUFFER_BIT,m.NEAREST);ge.bindFramebuffer(m.READ_FRAMEBUFFER,null),ge.bindFramebuffer(m.DRAW_FRAMEBUFFER,null)}else if(T!==0||l.isRenderTargetTexture||_e.has(l)){const gt=_e.get(l),ct=_e.get(S);ge.bindFramebuffer(m.READ_FRAMEBUFFER,ia),ge.bindFramebuffer(m.DRAW_FRAMEBUFFER,ra);for(let ft=0;ft<de;ft++)je?m.framebufferTextureLayer(m.READ_FRAMEBUFFER,m.COLOR_ATTACHMENT0,gt.__webglTexture,T,ve+ft):m.framebufferTexture2D(m.READ_FRAMEBUFFER,m.COLOR_ATTACHMENT0,m.TEXTURE_2D,gt.__webglTexture,T),_t?m.framebufferTextureLayer(m.DRAW_FRAMEBUFFER,m.COLOR_ATTACHMENT0,ct.__webglTexture,$,nt+ft):m.framebufferTexture2D(m.DRAW_FRAMEBUFFER,m.COLOR_ATTACHMENT0,m.TEXTURE_2D,ct.__webglTexture,$),T!==0?m.blitFramebuffer(Ae,Re,ne,se,Fe,ke,ne,se,m.COLOR_BUFFER_BIT,m.NEAREST):_t?m.copyTexSubImage3D(st,$,Fe,ke,nt+ft,Ae,Re,ne,se):m.copyTexSubImage2D(st,$,Fe,ke,Ae,Re,ne,se);ge.bindFramebuffer(m.READ_FRAMEBUFFER,null),ge.bindFramebuffer(m.DRAW_FRAMEBUFFER,null)}else _t?l.isDataTexture||l.isData3DTexture?m.texSubImage3D(st,$,Fe,ke,nt,ne,se,de,Ge,Ee,et.data):S.isCompressedArrayTexture?m.compressedTexSubImage3D(st,$,Fe,ke,nt,ne,se,de,Ge,et.data):m.texSubImage3D(st,$,Fe,ke,nt,ne,se,de,Ge,Ee,et):l.isDataTexture?m.texSubImage2D(m.TEXTURE_2D,$,Fe,ke,ne,se,Ge,Ee,et.data):l.isCompressedTexture?m.compressedTexSubImage2D(m.TEXTURE_2D,$,Fe,ke,et.width,et.height,Ge,et.data):m.texSubImage2D(m.TEXTURE_2D,$,Fe,ke,ne,se,Ge,Ee,et);m.pixelStorei(m.UNPACK_ROW_LENGTH,ze),m.pixelStorei(m.UNPACK_IMAGE_HEIGHT,St),m.pixelStorei(m.UNPACK_SKIP_PIXELS,Wt),m.pixelStorei(m.UNPACK_SKIP_ROWS,ht),m.pixelStorei(m.UNPACK_SKIP_IMAGES,tn),$===0&&S.generateMipmaps&&m.generateMipmap(st),ge.unbindTexture()},this.copyTextureToTexture3D=function(l,S,U=null,N=null,T=0){return l.isTexture!==!0&&(Ot("WebGLRenderer: copyTextureToTexture3D function signature has changed."),U=arguments[0]||null,N=arguments[1]||null,l=arguments[2],S=arguments[3],T=arguments[4]||0),Ot('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(l,S,U,N,T)},this.initRenderTarget=function(l){_e.get(l).__webglFramebuffer===void 0&&h.setupRenderTarget(l)},this.initTexture=function(l){l.isCubeTexture?h.setTextureCube(l,0):l.isData3DTexture?h.setTexture3D(l,0):l.isDataArrayTexture||l.isCompressedArrayTexture?h.setTexture2DArray(l,0):h.setTexture2D(l,0),ge.unbindTexture()},this.resetState=function(){P=0,I=0,C=null,ge.reset(),Ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return da}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const t=this.getContext();t.drawingBufferColorspace=it._getDrawingBufferColorSpace(n),t.unpackColorSpace=it._getUnpackColorSpace()}}const Mr={type:"change"},si={type:"start"},qr={type:"end"},Mn=new wo,Tr=new br,Td=Math.cos(70*Lo.DEG2RAD),rt=new be,dt=2*Math.PI,Xe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Kn=1e-6;class xd extends Uo{constructor(n,t=null){super(n,t),this.state=Xe.NONE,this.target=new be,this.cursor=new be,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zt.ROTATE,MIDDLE:Zt.DOLLY,RIGHT:Zt.PAN},this.touches={ONE:Kt.ROTATE,TWO:Kt.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new be,this._lastQuaternion=new Zi,this._lastTargetPosition=new be,this._quat=new Zi().setFromUnitVectors(n.up,new be(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new $i,this._sphericalDelta=new $i,this._scale=1,this._panOffset=new be,this._rotateStart=new Ke,this._rotateEnd=new Ke,this._rotateDelta=new Ke,this._panStart=new Ke,this._panEnd=new Ke,this._panDelta=new Ke,this._dollyStart=new Ke,this._dollyEnd=new Ke,this._dollyDelta=new Ke,this._dollyDirection=new be,this._mouse=new Ke,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Rd.bind(this),this._onPointerDown=Ad.bind(this),this._onPointerUp=bd.bind(this),this._onContextMenu=yd.bind(this),this._onMouseWheel=Dd.bind(this),this._onKeyDown=wd.bind(this),this._onTouchStart=Ld.bind(this),this._onTouchMove=Ud.bind(this),this._onMouseDown=Cd.bind(this),this._onMouseMove=Pd.bind(this),this._interceptControlDown=Id.bind(this),this._interceptControlUp=Nd.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(n){super.connect(n),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(n){n.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=n}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Mr),this.update(),this.state=Xe.NONE}update(n=null){const t=this.object.position;rt.copy(t).sub(this.target),rt.applyQuaternion(this._quat),this._spherical.setFromVector3(rt),this.autoRotate&&this.state===Xe.NONE&&this._rotateLeft(this._getAutoRotationAngle(n)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=dt:i>Math.PI&&(i-=dt),r<-Math.PI?r+=dt:r>Math.PI&&(r-=dt),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const d=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=d!=this._spherical.radius}if(rt.setFromSpherical(this._spherical),rt.applyQuaternion(this._quatInverse),t.copy(this.target).add(rt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let d=null;if(this.object.isPerspectiveCamera){const u=rt.length();d=this._clampDistance(u*this._scale);const b=u-d;this.object.position.addScaledVector(this._dollyDirection,b),this.object.updateMatrixWorld(),a=!!b}else if(this.object.isOrthographicCamera){const u=new be(this._mouse.x,this._mouse.y,0);u.unproject(this.object);const b=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=b!==this.object.zoom;const M=new be(this._mouse.x,this._mouse.y,0);M.unproject(this.object),this.object.position.sub(M).add(u),this.object.updateMatrixWorld(),d=rt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;d!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(d).add(this.object.position):(Mn.origin.copy(this.object.position),Mn.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Mn.direction))<Td?this.object.lookAt(this.target):(Tr.setFromNormalAndCoplanarPoint(this.object.up,this.target),Mn.intersectPlane(Tr,this.target))))}else if(this.object.isOrthographicCamera){const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),d!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Kn||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Kn||this._lastTargetPosition.distanceToSquared(this.target)>Kn?(this.dispatchEvent(Mr),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(n){return n!==null?dt/60*this.autoRotateSpeed*n:dt/60/60*this.autoRotateSpeed}_getZoomScale(n){const t=Math.abs(n*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(n){this._sphericalDelta.theta-=n}_rotateUp(n){this._sphericalDelta.phi-=n}_panLeft(n,t){rt.setFromMatrixColumn(t,0),rt.multiplyScalar(-n),this._panOffset.add(rt)}_panUp(n,t){this.screenSpacePanning===!0?rt.setFromMatrixColumn(t,1):(rt.setFromMatrixColumn(t,0),rt.crossVectors(this.object.up,rt)),rt.multiplyScalar(n),this._panOffset.add(rt)}_pan(n,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;rt.copy(r).sub(this.target);let a=rt.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*n*a/i.clientHeight,this.object.matrix),this._panUp(2*t*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(n*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(n){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=n:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(n){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=n:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(n,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=n-i.left,a=t-i.top,d=i.width,u=i.height;this._mouse.x=r/d*2-1,this._mouse.y=-(a/u)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(n){return Math.max(this.minDistance,Math.min(this.maxDistance,n))}_handleMouseDownRotate(n){this._rotateStart.set(n.clientX,n.clientY)}_handleMouseDownDolly(n){this._updateZoomParameters(n.clientX,n.clientX),this._dollyStart.set(n.clientX,n.clientY)}_handleMouseDownPan(n){this._panStart.set(n.clientX,n.clientY)}_handleMouseMoveRotate(n){this._rotateEnd.set(n.clientX,n.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(dt*this._rotateDelta.x/t.clientHeight),this._rotateUp(dt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(n){this._dollyEnd.set(n.clientX,n.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(n){this._panEnd.set(n.clientX,n.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(n){this._updateZoomParameters(n.clientX,n.clientY),n.deltaY<0?this._dollyIn(this._getZoomScale(n.deltaY)):n.deltaY>0&&this._dollyOut(this._getZoomScale(n.deltaY)),this.update()}_handleKeyDown(n){let t=!1;switch(n.code){case this.keys.UP:n.ctrlKey||n.metaKey||n.shiftKey?this.enableRotate&&this._rotateUp(dt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:n.ctrlKey||n.metaKey||n.shiftKey?this.enableRotate&&this._rotateUp(-dt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:n.ctrlKey||n.metaKey||n.shiftKey?this.enableRotate&&this._rotateLeft(dt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:n.ctrlKey||n.metaKey||n.shiftKey?this.enableRotate&&this._rotateLeft(-dt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(n.preventDefault(),this.update())}_handleTouchStartRotate(n){if(this._pointers.length===1)this._rotateStart.set(n.pageX,n.pageY);else{const t=this._getSecondPointerPosition(n),i=.5*(n.pageX+t.x),r=.5*(n.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(n){if(this._pointers.length===1)this._panStart.set(n.pageX,n.pageY);else{const t=this._getSecondPointerPosition(n),i=.5*(n.pageX+t.x),r=.5*(n.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(n){const t=this._getSecondPointerPosition(n),i=n.pageX-t.x,r=n.pageY-t.y,a=Math.sqrt(i*i+r*r);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(n){this.enableZoom&&this._handleTouchStartDolly(n),this.enablePan&&this._handleTouchStartPan(n)}_handleTouchStartDollyRotate(n){this.enableZoom&&this._handleTouchStartDolly(n),this.enableRotate&&this._handleTouchStartRotate(n)}_handleTouchMoveRotate(n){if(this._pointers.length==1)this._rotateEnd.set(n.pageX,n.pageY);else{const i=this._getSecondPointerPosition(n),r=.5*(n.pageX+i.x),a=.5*(n.pageY+i.y);this._rotateEnd.set(r,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(dt*this._rotateDelta.x/t.clientHeight),this._rotateUp(dt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(n){if(this._pointers.length===1)this._panEnd.set(n.pageX,n.pageY);else{const t=this._getSecondPointerPosition(n),i=.5*(n.pageX+t.x),r=.5*(n.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(n){const t=this._getSecondPointerPosition(n),i=n.pageX-t.x,r=n.pageY-t.y,a=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const d=(n.pageX+t.x)*.5,u=(n.pageY+t.y)*.5;this._updateZoomParameters(d,u)}_handleTouchMoveDollyPan(n){this.enableZoom&&this._handleTouchMoveDolly(n),this.enablePan&&this._handleTouchMovePan(n)}_handleTouchMoveDollyRotate(n){this.enableZoom&&this._handleTouchMoveDolly(n),this.enableRotate&&this._handleTouchMoveRotate(n)}_addPointer(n){this._pointers.push(n.pointerId)}_removePointer(n){delete this._pointerPositions[n.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==n.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(n){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==n.pointerId)return!0;return!1}_trackPointer(n){let t=this._pointerPositions[n.pointerId];t===void 0&&(t=new Ke,this._pointerPositions[n.pointerId]=t),t.set(n.pageX,n.pageY)}_getSecondPointerPosition(n){const t=n.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(n){const t=n.deltaMode,i={clientX:n.clientX,clientY:n.clientY,deltaY:n.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return n.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Ad(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType==="touch"?this._onTouchStart(e):this._onMouseDown(e)))}function Rd(e){this.enabled!==!1&&(e.pointerType==="touch"?this._onTouchMove(e):this._onMouseMove(e))}function bd(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(qr),this.state=Xe.NONE;break;case 1:const n=this._pointers[0],t=this._pointerPositions[n];this._onTouchStart({pointerId:n,pageX:t.x,pageY:t.y});break}}function Cd(e){let n;switch(e.button){case 0:n=this.mouseButtons.LEFT;break;case 1:n=this.mouseButtons.MIDDLE;break;case 2:n=this.mouseButtons.RIGHT;break;default:n=-1}switch(n){case Zt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=Xe.DOLLY;break;case Zt.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Xe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Xe.ROTATE}break;case Zt.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Xe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Xe.PAN}break;default:this.state=Xe.NONE}this.state!==Xe.NONE&&this.dispatchEvent(si)}function Pd(e){switch(this.state){case Xe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case Xe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case Xe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function Dd(e){this.enabled===!1||this.enableZoom===!1||this.state!==Xe.NONE||(e.preventDefault(),this.dispatchEvent(si),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(qr))}function wd(e){this.enabled!==!1&&this._handleKeyDown(e)}function Ld(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case Kt.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=Xe.TOUCH_ROTATE;break;case Kt.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=Xe.TOUCH_PAN;break;default:this.state=Xe.NONE}break;case 2:switch(this.touches.TWO){case Kt.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=Xe.TOUCH_DOLLY_PAN;break;case Kt.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=Xe.TOUCH_DOLLY_ROTATE;break;default:this.state=Xe.NONE}break;default:this.state=Xe.NONE}this.state!==Xe.NONE&&this.dispatchEvent(si)}function Ud(e){switch(this._trackPointer(e),this.state){case Xe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case Xe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case Xe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case Xe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=Xe.NONE}}function yd(e){this.enabled!==!1&&e.preventDefault()}function Id(e){e.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Nd(e){e.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Od extends yo{constructor(n){super(n),this.type=Dt}parse(n){const d=function(C,p){switch(C){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(p||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(p||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(p||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(p||""))}},y=`
`,x=function(C,p,c){p=p||1024;let V=C.pos,B=-1,O=0,q="",F=String.fromCharCode.apply(null,new Uint16Array(C.subarray(V,V+128)));for(;0>(B=F.indexOf(y))&&O<p&&V<C.byteLength;)q+=F,O+=F.length,V+=128,F+=String.fromCharCode.apply(null,new Uint16Array(C.subarray(V,V+128)));return-1<B?(C.pos+=O+B+1,q+F.slice(0,B)):!1},E=function(C){const p=/^#\?(\S+)/,c=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,g=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,V=/^\s*FORMAT=(\S+)\s*$/,B=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,O={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let q,F;for((C.pos>=C.byteLength||!(q=x(C)))&&d(1,"no header found"),(F=q.match(p))||d(3,"bad initial token"),O.valid|=1,O.programtype=F[1],O.string+=q+`
`;q=x(C),q!==!1;){if(O.string+=q+`
`,q.charAt(0)==="#"){O.comments+=q+`
`;continue}if((F=q.match(c))&&(O.gamma=parseFloat(F[1])),(F=q.match(g))&&(O.exposure=parseFloat(F[1])),(F=q.match(V))&&(O.valid|=2,O.format=F[1]),(F=q.match(B))&&(O.valid|=4,O.height=parseInt(F[1],10),O.width=parseInt(F[2],10)),O.valid&2&&O.valid&4)break}return O.valid&2||d(3,"missing format specifier"),O.valid&4||d(3,"missing image size specifier"),O},R=function(C,p,c){const g=p;if(g<8||g>32767||C[0]!==2||C[1]!==2||C[2]&128)return new Uint8Array(C);g!==(C[2]<<8|C[3])&&d(3,"wrong scanline width");const V=new Uint8Array(4*p*c);V.length||d(4,"unable to allocate buffer space");let B=0,O=0;const q=4*g,F=new Uint8Array(4),Q=new Uint8Array(q);let k=c;for(;k>0&&O<C.byteLength;){O+4>C.byteLength&&d(1),F[0]=C[O++],F[1]=C[O++],F[2]=C[O++],F[3]=C[O++],(F[0]!=2||F[1]!=2||(F[2]<<8|F[3])!=g)&&d(3,"bad rgbe scanline format");let ue=0,he;for(;ue<q&&O<C.byteLength;){he=C[O++];const De=he>128;if(De&&(he-=128),(he===0||ue+he>q)&&d(3,"bad scanline data"),De){const Be=C[O++];for(let W=0;W<he;W++)Q[ue++]=Be}else Q.set(C.subarray(O,O+he),ue),ue+=he,O+=he}const Ce=g;for(let De=0;De<Ce;De++){let Be=0;V[B]=Q[De+Be],Be+=g,V[B+1]=Q[De+Be],Be+=g,V[B+2]=Q[De+Be],Be+=g,V[B+3]=Q[De+Be],B+=4}k--}return V},G=function(C,p,c,g){const V=C[p+3],B=Math.pow(2,V-128)/255;c[g+0]=C[p+0]*B,c[g+1]=C[p+1]*B,c[g+2]=C[p+2]*B,c[g+3]=1},D=function(C,p,c,g){const V=C[p+3],B=Math.pow(2,V-128)/255;c[g+0]=gn.toHalfFloat(Math.min(C[p+0]*B,65504)),c[g+1]=gn.toHalfFloat(Math.min(C[p+1]*B,65504)),c[g+2]=gn.toHalfFloat(Math.min(C[p+2]*B,65504)),c[g+3]=gn.toHalfFloat(1)},f=new Uint8Array(n);f.pos=0;const o=E(f),w=o.width,A=o.height,_=R(f.subarray(f.pos),w,A);let z,P,I;switch(this.type){case At:I=_.length/4;const C=new Float32Array(I*4);for(let c=0;c<I;c++)G(_,c*4,C,c*4);z=C,P=At;break;case Dt:I=_.length/4;const p=new Uint16Array(I*4);for(let c=0;c<I;c++)D(_,c*4,p,c*4);z=p,P=Dt;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:w,height:A,data:z,header:o.string,gamma:o.gamma,exposure:o.exposure,type:P}}setDataType(n){return this.type=n,this}load(n,t,i,r){function a(d,u){switch(d.type){case At:case Dt:d.colorSpace=pn,d.minFilter=wt,d.magFilter=wt,d.generateMipmaps=!1,d.flipY=!0;break}t&&t(d,u)}return super.load(n,a,i,r)}}const Fd=[{id:"point1",url:"./images/brown_photostudio_01_4k.hdr",connections:[{target:"point2",position:new be(0,-.7,-1),rotation:0}],infoPoints:[{position:new be(1,0,-1),title:"KhiemVipPro",description:"Integrating, sharing and connecting information systems of ministries, branches and localities",imageUrl:"./images/vxp_info.jpg"}]},{id:"point2",url:"./images/studio_country_hall_4k.hdr",connections:[{target:"point1",position:new be(0,-.7,1),rotation:Math.PI}],infoPoints:[]}],Pt=new Io;Pt.background=new $e(3355443);const Jt=new on(75,window.innerWidth/window.innerHeight,.1,1e3);Jt.position.set(0,0,.1);const Zr=document.querySelector("#webgl"),kt=new Md({canvas:Zr,antialias:!0});kt.setSize(window.innerWidth,window.innerHeight);kt.setPixelRatio(Math.min(window.devicePixelRatio,2));kt.toneMapping=kr;kt.toneMappingExposure=.8;kt.outputEncoding=void 0;const zt=new xd(Jt,Zr);zt.enableDamping=!0;zt.dampingFactor=.05;zt.screenSpacePanning=!1;zt.minDistance=.1;zt.maxDistance=50;zt.maxPolarAngle=Math.PI;let Rn=[],ln=[];function Bd(){const e=document.createElement("div");return e.id="info-dialog",e.style.display="none",e.style.position="fixed",e.style.top="50%",e.style.left="50%",e.style.transform="translate(-50%, -50%)",e.style.backgroundColor="white",e.style.padding="20px",e.style.borderRadius="10px",e.style.boxShadow="0 0 20px rgba(0,0,0,0.5)",e.style.zIndex="1000",e.style.maxWidth="80%",e.style.maxHeight="80%",e.style.overflow="auto",document.body.appendChild(e),e}function Gd(){const e=document.createElement("div");e.id="mini-map",e.style.position="absolute",e.style.bottom="20px",e.style.right="20px",e.style.width="200px",e.style.height="150px",e.style.backgroundColor="rgba(255, 255, 255, 0.8)",e.style.borderRadius="5px",e.style.padding="5px",e.style.zIndex="100",e.style.boxShadow="0 0 10px rgba(0, 0, 0, 0.3)";const n=document.createElement("div");n.textContent=" MAP",n.style.textAlign="center",n.style.fontWeight="bold",n.style.marginBottom="5px",e.appendChild(n);const t=document.createElement("div");t.style.position="relative",t.style.width="100%",t.style.height="calc(100% - 25px)";const i=document.createElement("img");return i.src="./images/exhibition_map.jpg",i.style.width="100%",i.style.height="100%",i.style.objectFit="cover",t.appendChild(i),e.appendChild(t),document.body.appendChild(e),{container:e,markerContainer:t}}function Hd(e,n,t,i){const r=document.createElement("div");return r.style.position="absolute",r.style.left=e+"%",r.style.top=n+"%",r.style.width="15px",r.style.height="15px",r.style.backgroundColor="rgba(255, 0, 0, 0.7)",r.style.borderRadius="50%",r.style.transform="translate(-50%, -50%)",r.style.cursor="pointer",r.style.boxShadow="0 0 5px rgba(0, 0, 0, 0.5)",r.onmouseover=()=>{r.style.backgroundColor="rgba(255, 0, 0, 1)",r.style.transform="translate(-50%, -50%) scale(1.2)"},r.onmouseout=()=>{r.style.backgroundColor="rgba(255, 0, 0, 0.7)",r.style.transform="translate(-50%, -50%)"},r.onclick=()=>{li(t)},i.markerContainer.appendChild(r),r}const $r=Gd(),jr=[{x:30,y:40,panoramaId:"point1"},{x:70,y:60,panoramaId:"point2"}];jr.forEach(e=>{Hd(e.x,e.y,e.panoramaId,$r)});function Vd(e){const n=document.getElementById("current-position-marker");n&&n.remove();const t=jr.find(r=>r.panoramaId===e);if(!t)return;const i=document.createElement("div");i.id="current-position-marker",i.style.position="absolute",i.style.left=t.x+"%",i.style.top=t.y+"%",i.style.width="20px",i.style.height="20px",i.style.border="3px solid blue",i.style.borderRadius="50%",i.style.transform="translate(-50%, -50%)",i.style.zIndex="10",$r.markerContainer.appendChild(i)}const qn=Bd();function kd(e,n,t){qn.innerHTML=`
    <div style="position: relative;">
      <h2 style="color: #1a3c8f; margin-bottom: 15px;">${e}</h2>
      <button id="close-dialog" style="position: absolute; top: 0; right: 0; background: none; border: none; font-size: 20px; cursor: pointer;">×</button>
      <div style="display: flex; flex-direction: column; align-items: center;">
        <img src="${t}" style="max-width: 100%; margin-bottom: 15px; border-radius: 5px;">
        <p style="margin-bottom: 15px;">${n}</p>
        <button id="more-info-btn" style="background-color: #1a3c8f; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">MORE INFO</button>
      </div>
    </div>
  `,qn.style.display="block",document.getElementById("close-dialog").addEventListener("click",()=>{qn.style.display="none"}),document.getElementById("more-info-btn").addEventListener("click",()=>{window.open("https://github.com/hoangmanhkhiem","_blank")})}function zd(e,n,t=35071){const i=new Oo;i.moveTo(0,.1),i.lineTo(-.07,-.05),i.lineTo(.07,-.05),i.lineTo(0,.1);const r=new Fo(i),a=new ai({color:t,transparent:!0,opacity:.8,side:Tt}),d=new xt(r,a);d.rotation.x=-Math.PI/2,d.rotation.z=n;const u=new be().copy(e);return d.position.copy(u),d}function Wd(e){const n=new Bo(.05,32,32),t=new ai({color:16711680,transparent:!0,opacity:.8}),i=new xt(n,t),r=new be().copy(e);i.position.copy(r);const a=()=>{const d=1+.1*Math.sin(Date.now()*.005);i.scale.set(d,d,d)};return i.userData.animate=a,i}function li(e){Rn.forEach(t=>Pt.remove(t)),Rn=[],ln.forEach(t=>Pt.remove(t)),ln=[],Vd(e);const n=Fd.find(t=>t.id===e);n&&new Od().load(n.url,function(t){t.mapping=Dn,Pt.background=t,Pt.environment=t,n.connections.forEach(i=>{const r=zd(i.position,i.rotation);r.userData.targetId=i.target,Pt.add(r),Rn.push(r)}),n.infoPoints.forEach(i=>{const r=Wd(i.position);r.userData.info=i,Pt.add(r),ln.push(r)})},void 0,function(t){console.error("Lỗi khi tải HDR:",t)})}function Xd(e){e.preventDefault();const n=new Ke;n.x=e.clientX/window.innerWidth*2-1,n.y=-(e.clientY/window.innerHeight)*2+1;const t=new No;t.setFromCamera(n,Jt);const i=t.intersectObjects(Rn);if(i.length>0){const a=i[0].object.userData.targetId;li(a);return}const r=t.intersectObjects(ln);if(r.length>0){const a=r[0].object.userData.info;kd(a.title,a.description,a.imageUrl);return}}window.addEventListener("click",Xd,!1);window.addEventListener("resize",()=>{Jt.aspect=window.innerWidth/window.innerHeight,Jt.updateProjectionMatrix(),kt.setSize(window.innerWidth,window.innerHeight)});function Qr(){requestAnimationFrame(Qr),zt.update(),ln.forEach(e=>{e.userData.animate&&e.userData.animate()}),kt.render(Pt,Jt)}li("point1");Qr();
