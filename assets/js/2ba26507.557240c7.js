"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[970],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=u(r),d=a,f=c["".concat(s,".").concat(d)]||c[d]||p[d]||i;return r?n.createElement(f,o(o({ref:t},m),{},{components:r})):n.createElement(f,o({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5397:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const i={slug:"/hardware-requirements",sidebar_position:5,title:"Hardware Requirements"},o=void 0,l={unversionedId:"requirements",id:"version-0.9.2/requirements",title:"Hardware Requirements",description:"This outlines the hardware specifications required to run a Juno full node, including both minimal and recommended requirements.",source:"@site/versioned_docs/version-0.9.2/requirements.md",sourceDirName:".",slug:"/hardware-requirements",permalink:"/hardware-requirements",draft:!1,tags:[],version:"0.9.2",sidebarPosition:5,frontMatter:{slug:"/hardware-requirements",sidebar_position:5,title:"Hardware Requirements"},sidebar:"tutorialSidebar",previous:{title:"Database Snapshots",permalink:"/snapshots"}},s={},u=[{value:"Minimal",id:"minimal",level:2},{value:"Recommended",id:"recommended",level:2}],m={toc:u},c="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This outlines the hardware specifications required to run a Juno full node, including both minimal and recommended requirements."),(0,a.kt)("h2",{id:"minimal"},"Minimal"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"CPU"),": 2+ cores"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"RAM"),": 4GB+"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Storage"),": 200GB (SSD recommended; note: storage requirements will increase over time)")),(0,a.kt)("h2",{id:"recommended"},"Recommended"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"CPU"),": Fast CPU with 4+ cores"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"RAM"),": 8GB or more"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Storage"),": High-performance SSD with more than 200GB, to accommodate future growth")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),": The above specifications serve as a guideline. While the minimal requirements are sufficient for basic operations, the recommended specifications ensure optimal performance and future scalability. Always refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://juno.nethermind.io/"},"official Juno documentation")," for the most current information and updates."))}p.isMDXComponent=!0}}]);