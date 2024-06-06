import{g as G,a as N,s as R,P as D,c as b,_ as g,r as d,u as P,b as z,j as p,d as K,e as _,R as B,n as V,S as F,f as H,h as j,i as v,B as A,T as W,k as $,A as Z,l as J,M as Y,m as X,o as Q,O as q}from"./index-6a584b3d.js";import{C as ee}from"./Container-603228ce.js";function oe(o){return G("MuiAppBar",o)}N("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent"]);const te=["className","color","enableColorOnDark","position"],re=o=>{const{color:e,position:t,classes:r}=o,n={root:["root",`color${b(e)}`,`position${b(t)}`]};return _(n,oe,r)},m=(o,e)=>o?`${o==null?void 0:o.replace(")","")}, ${e})`:e,ne=R(D,{name:"MuiAppBar",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,e[`position${b(t.position)}`],e[`color${b(t.color)}`]]}})(({theme:o,ownerState:e})=>{const t=o.palette.mode==="light"?o.palette.grey[100]:o.palette.grey[900];return g({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},e.position==="fixed"&&{position:"fixed",zIndex:(o.vars||o).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},e.position==="absolute"&&{position:"absolute",zIndex:(o.vars||o).zIndex.appBar,top:0,left:"auto",right:0},e.position==="sticky"&&{position:"sticky",zIndex:(o.vars||o).zIndex.appBar,top:0,left:"auto",right:0},e.position==="static"&&{position:"static"},e.position==="relative"&&{position:"relative"},!o.vars&&g({},e.color==="default"&&{backgroundColor:t,color:o.palette.getContrastText(t)},e.color&&e.color!=="default"&&e.color!=="inherit"&&e.color!=="transparent"&&{backgroundColor:o.palette[e.color].main,color:o.palette[e.color].contrastText},e.color==="inherit"&&{color:"inherit"},o.palette.mode==="dark"&&!e.enableColorOnDark&&{backgroundColor:null,color:null},e.color==="transparent"&&g({backgroundColor:"transparent",color:"inherit"},o.palette.mode==="dark"&&{backgroundImage:"none"})),o.vars&&g({},e.color==="default"&&{"--AppBar-background":e.enableColorOnDark?o.vars.palette.AppBar.defaultBg:m(o.vars.palette.AppBar.darkBg,o.vars.palette.AppBar.defaultBg),"--AppBar-color":e.enableColorOnDark?o.vars.palette.text.primary:m(o.vars.palette.AppBar.darkColor,o.vars.palette.text.primary)},e.color&&!e.color.match(/^(default|inherit|transparent)$/)&&{"--AppBar-background":e.enableColorOnDark?o.vars.palette[e.color].main:m(o.vars.palette.AppBar.darkBg,o.vars.palette[e.color].main),"--AppBar-color":e.enableColorOnDark?o.vars.palette[e.color].contrastText:m(o.vars.palette.AppBar.darkColor,o.vars.palette[e.color].contrastText)},{backgroundColor:"var(--AppBar-background)",color:e.color==="inherit"?"inherit":"var(--AppBar-color)"},e.color==="transparent"&&{backgroundImage:"none",backgroundColor:"transparent",color:"inherit"}))}),ie=d.forwardRef(function(e,t){const r=P({props:e,name:"MuiAppBar"}),{className:n,color:a="primary",enableColorOnDark:i=!1,position:s="fixed"}=r,c=z(r,te),u=g({},r,{color:a,position:s,enableColorOnDark:i}),l=re(u);return p(ne,g({square:!0,component:"header",ownerState:u,elevation:4,className:K(l.root,n,s==="fixed"&&"mui-fixed"),ref:t},c))}),ae=ie;function se(o,e){if(o==null)return{};var t={},r=Object.keys(o),n,a;for(a=0;a<r.length;a++)n=r[a],!(e.indexOf(n)>=0)&&(t[n]=o[n]);return t}var le=["AD","AE","AF","AG","AI","AL","AM","AO","AR","AS","AT","AU","AW","AX","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BL","BM","BN","BO","BR","BS","BT","BV","BW","BY","BZ","CA","CC","CD","CF","CG","CH","CI","CK","CL","CM","CN","CO","CR","CU","CV","CW","CX","CY","CZ","DE","DJ","DK","DM","DO","DZ","EC","EE","EG","ER","ES","ET","FI","FJ","FK","FM","FO","FR","GA","GB","GD","GE","GF","GG","GH","GI","GL","GM","GN","GP","GQ","GR","GS","GT","GU","GW","GY","HK","HM","HN","HR","HT","HU","ID","IE","IL","IM","IN","IO","IQ","IR","IS","IT","JE","JM","JO","JP","KE","KG","KH","KI","KM","KN","KP","KR","KW","KY","KZ","LA","LB","LC","LGBT","LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MG","MH","MK","ML","MM","MN","MO","MP","MQ","MR","MS","MT","MU","MV","MW","MX","MY","MZ","NA","NC","NE","NF","NG","NI","NL","NO","NP","NR","NU","NZ","OM","PA","PE","PF","PG","PH","PK","PL","PM","PN","PR","PS","PT","PW","PY","QA","RE","RO","RS","RU","RW","SA","SB","SC","SD","SE","SG","SI","SJ","SK","SL","SM","SN","SO","SR","SS","ST","SV","SX","SY","SZ","TC","TD","TF","TG","TH","TJ","TK","TL","TM","TN","TO","TR","TT","TV","TW","TZ","UA","UG","UM","US","UY","UZ","VA","VC","VE","VG","VI","VN","VU","WF","WS","XK","YE","YT","ZA","ZM","ZW","EU","GB-ENG","GB-NIR","GB-SCT","GB-WLS","GB-ZET","US-CA"],w=function(e){var t=e.country,r=t===void 0?"US":t,n=e.role,a=n===void 0?"img":n,i=e.size,s=i===void 0?24:i,c=e.alt,u=se(e,["country","role","size","alt"]);if(r){var l=r.toUpperCase();if(le.find(function(y){return y===r})!==void 0){var x="https://cdn.jsdelivr.net/gh/madebybowtie/FlagKit@2.2/Assets/SVG",C=x+"/"+l+".svg";return B.createElement("img",Object.assign({src:C,role:a,alt:c??l+" Flag",height:s,width:s},u))}return B.createElement("span",null,l)}return null};/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */var O=pe,T=de,ce=decodeURIComponent,ue=encodeURIComponent,k=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function pe(o,e){if(typeof o!="string")throw new TypeError("argument str must be a string");for(var t={},r=e||{},n=o.split(";"),a=r.decode||ce,i=0;i<n.length;i++){var s=n[i],c=s.indexOf("=");if(!(c<0)){var u=s.substring(0,c).trim();if(t[u]==null){var l=s.substring(c+1,s.length).trim();l[0]==='"'&&(l=l.slice(1,-1)),t[u]=fe(l,a)}}}return t}function de(o,e,t){var r=t||{},n=r.encode||ue;if(typeof n!="function")throw new TypeError("option encode is invalid");if(!k.test(o))throw new TypeError("argument name is invalid");var a=n(e);if(a&&!k.test(a))throw new TypeError("argument val is invalid");var i=o+"="+a;if(r.maxAge!=null){var s=r.maxAge-0;if(isNaN(s)||!isFinite(s))throw new TypeError("option maxAge is invalid");i+="; Max-Age="+Math.floor(s)}if(r.domain){if(!k.test(r.domain))throw new TypeError("option domain is invalid");i+="; Domain="+r.domain}if(r.path){if(!k.test(r.path))throw new TypeError("option path is invalid");i+="; Path="+r.path}if(r.expires){if(typeof r.expires.toUTCString!="function")throw new TypeError("option expires is invalid");i+="; Expires="+r.expires.toUTCString()}if(r.httpOnly&&(i+="; HttpOnly"),r.secure&&(i+="; Secure"),r.sameSite){var c=typeof r.sameSite=="string"?r.sameSite.toLowerCase():r.sameSite;switch(c){case!0:i+="; SameSite=Strict";break;case"lax":i+="; SameSite=Lax";break;case"strict":i+="; SameSite=Strict";break;case"none":i+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return i}function fe(o,e){try{return e(o)}catch{return o}}function he(){return typeof document=="object"&&typeof document.cookie=="string"}function ge(o,e){return typeof o=="string"?O(o,e):typeof o=="object"&&o!==null?o:{}}function Ce(o,e){return typeof e>"u"&&(e=!o||o[0]!=="{"&&o[0]!=="["&&o[0]!=='"'),!e}function E(o,e){e===void 0&&(e={});var t=ve(o);if(Ce(t,e.doNotParse))try{return JSON.parse(t)}catch{}return o}function ve(o){return o&&o[0]==="j"&&o[1]===":"?o.substr(2):o}var f=globalThis&&globalThis.__assign||function(){return f=Object.assign||function(o){for(var e,t=1,r=arguments.length;t<r;t++){e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(o[n]=e[n])}return o},f.apply(this,arguments)},me=function(){function o(e,t){var r=this;this.changeListeners=[],this.HAS_DOCUMENT_COOKIE=!1,this.cookies=ge(e,t),new Promise(function(){r.HAS_DOCUMENT_COOKIE=he()}).catch(function(){})}return o.prototype._updateBrowserValues=function(e){this.HAS_DOCUMENT_COOKIE&&(this.cookies=O(document.cookie,e))},o.prototype._emitChange=function(e){for(var t=0;t<this.changeListeners.length;++t)this.changeListeners[t](e)},o.prototype.get=function(e,t,r){return t===void 0&&(t={}),this._updateBrowserValues(r),E(this.cookies[e],t)},o.prototype.getAll=function(e,t){e===void 0&&(e={}),this._updateBrowserValues(t);var r={};for(var n in this.cookies)r[n]=E(this.cookies[n],e);return r},o.prototype.set=function(e,t,r){var n;typeof t=="object"&&(t=JSON.stringify(t)),this.cookies=f(f({},this.cookies),(n={},n[e]=t,n)),this.HAS_DOCUMENT_COOKIE&&(document.cookie=T(e,t,r)),this._emitChange({name:e,value:t,options:r})},o.prototype.remove=function(e,t){var r=t=f(f({},t),{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=f({},this.cookies),delete this.cookies[e],this.HAS_DOCUMENT_COOKIE&&(document.cookie=T(e,"",r)),this._emitChange({name:e,value:void 0,options:t})},o.prototype.addChangeListener=function(e){this.changeListeners.push(e)},o.prototype.removeChangeListener=function(e){var t=this.changeListeners.indexOf(e);t>=0&&this.changeListeners.splice(t,1)},o}();const ke=me;var S=d.createContext(new ke);S.Provider;S.Consumer;const be=S;function xe(){return typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"}function ye(o){var e=d.useContext(be);if(!e)throw new Error("Missing <CookiesProvider>");var t=e.getAll(),r=d.useState(t),n=r[0],a=r[1],i=d.useRef(n);xe()&&d.useLayoutEffect(function(){function u(){var l=e.getAll();Me(o||null,l,i.current)&&a(l),i.current=l}return e.addChangeListener(u),function(){e.removeChangeListener(u)}},[e]);var s=d.useMemo(function(){return e.set.bind(e)},[e]),c=d.useMemo(function(){return e.remove.bind(e)},[e]);return[n,s,c]}function Me(o,e,t){if(!o)return!0;for(var r=0,n=o;r<n.length;r++){var a=n[r];if(e[a]!==t[a])return!0}return!1}const Ae=V(F)(({theme:o})=>({width:62,height:34,padding:7,"& .MuiSwitch-switchBase":{margin:1,padding:0,transform:"translateX(6px)","&.Mui-checked":{color:"#fff",transform:"translateX(22px)","& .MuiSwitch-thumb:before":{backgroundImage:`url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent("#fff")}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`},"& + .MuiSwitch-track":{opacity:1,backgroundColor:o.palette.mode==="dark"?"#8796A5":"#aab4be"}}},"& .MuiSwitch-thumb":{backgroundColor:o.palette.mode==="dark"?"#003892":"#001e3c",width:32,height:32,"&:before":{content:"''",position:"absolute",width:"100%",height:"100%",left:0,top:0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundImage:`url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent("#fff")}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`}},"& .MuiSwitch-track":{opacity:1,backgroundColor:o.palette.mode==="dark"?"#8796A5":"#aab4be",borderRadius:20/2}})),we=({mode:o,setMode:e})=>{const t=H(h=>h),[r,n]=d.useState(!1),[a,i]=B.useState(null),[s]=ye(["i18next"]),c=s.i18next==="en"?"US":s.i18next,[u,l]=d.useState(c&&c.toUpperCase()),{t:x}=j(),C=!!a,y=h=>{i(h.currentTarget)},I=()=>{i(null)};d.useEffect(()=>{t.admin.admin.showModal&&n(!0),t.faculty.faculty.showModal&&n(!0),t.dekan.dekan.showModal&&n(!0),t.news.news.showModal&&n(!0),t.student.student.showModal&&n(!0)},[t.admin.admin.showModal,t.dekan.dekan.showModal,t.faculty.faculty.showModal,t.news.news.showModal,t.student.student.showModal]);const L=[{code:"en",name:"English",country_code:"US"},{code:"uz",name:"Uzbek",country_code:"UZ"}];return v(A,{color:"text.primary",bgcolor:"background.default",children:[p(ae,{sx:{height:"60px"},position:"sticky",children:p(ee,{sx:{height:"60px"},maxWidth:"xl",children:v(W,{sx:{justifyContent:"space-between"},disableGutters:!0,children:[p($,{variant:"h6",noWrap:!0,component:"a",href:"/",sx:{mr:2,fontSize:{xs:15,md:22},display:"flex",fontFamily:"monospace",fontWeight:700,letterSpacing:".1rem",color:"inherit",textDecoration:"none"},children:"TonicDev"}),r&&p(Z,{sx:{fontSize:{lg:15,sm:12,xs:10},position:{xs:"absolute",md:"static"},top:70,zIndex:100},severity:"warning",children:x("warning")}),v(A,{sx:{flexGrow:0,display:"flex",alignItems:"center"},children:[v(J,{id:"basic-button","aria-controls":C?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":C?"true":void 0,onClick:y,children:[p(w,{country:u})," ",p("span",{className:"text-white",children:u==="US"?"English":"Uzbek"})]}),p(Y,{id:"basic-menu",anchorEl:a,open:C,onClose:I,MenuListProps:{"aria-labelledby":"basic-button"},children:L.map(({name:h,country_code:M,code:U})=>p("li",{onClick:()=>l(M),children:v(X,{onClick:()=>Q.changeLanguage(U),children:[p(w,{country:M})," ",h]})},M))}),p(Ae,{defaultChecked:!0,onChange:h=>e(o==="light"?"dark":"light")})]})]})})}),p(A,{sx:{display:"flex",justifyContent:{xs:"center",md:"center"},minHeight:550},children:p(q,{})})]})};export{we as default};
