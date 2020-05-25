(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{169:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),i=n(9),a=(n(0),n(206)),o={id:"environment-variables",title:"Environment variables"},l={id:"administrator/environment-variables",title:"Environment variables",description:"On this page you can see how to configure the work environment. It is very important to follow the steps as indicated.",source:"@site/docs/administrator/environment-variables.md",permalink:"/administrator/environment-variables",editUrl:"https://github.com/erxes/erxes/edit/develop/docs/docs/administrator/environment-variables.md",lastUpdatedBy:"Jason-2020",lastUpdatedAt:1590438656,sidebar:"docs",previous:{title:"Creating first user",permalink:"/administrator/creating-first-user"},next:{title:"System config",permalink:"/administrator/system-config"}},c=[{value:"MongoDB",id:"mongodb",children:[]},{value:"Redis",id:"redis",children:[]},{value:"General configs",id:"general-configs",children:[]}],s={rightToc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"On this page you can see how to configure the work environment. It is very important to follow the steps as indicated."),Object(a.b)("h2",{id:"mongodb"},"MongoDB"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"MONGO_URL=mongodb://localhost/erxes\nTEST_MONGO_URL=mongodb://localhost/test\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"MONGO_URL")," is your application's database URL.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"TEST_MONGO_URL")," is when you run testing."))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"yarn test\n")),Object(a.b)("h2",{id:"redis"},"Redis"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"REDIS_HOST=localhost\nREDIS_PORT=6379\nREDIS_PASSWORD=\n")),Object(a.b)("p",null,"Redis is necessary for reactive subscriptions."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"REDIS_HOST")," is your redis server's URL."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"REDIST_PORT")," defines which port is redis running."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"REDIS_PASSWORD")," fill this if you have password on your redis server.")),Object(a.b)("h2",{id:"general-configs"},"General configs"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"HTTPS=false\nMAIN_APP_DOMAIN=http://localhost:3000\nWIDGETS_DOMAIN=http://localhost:3200\nDOMAIN=http://localhost:3300\nNODE_ENV=development\nPORT=3300\n\nERXES_PATH=''\nAPI_PATH=''\nWIDGET_PATH=''\nWIDGET_API_PATH=''\n\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"HTTPS"),"this is boolean variables, set true if you are using secure ssl."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"MAIN_APP_DOMAIN")," this is your main application's domain where is erxes/erxes repository is running."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"WIDGETS_DOMAIN")," your widget application's domain where is erxes/widgets repository is running."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"DOMAIN")," this is your erxes-api application's domain where is erxes/erxes-api repository is running."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"NODE_ENV")," set to production on live mode, set to development on development mode."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"PORT")," this option will define which port is your application running, you can change to any port you want.")))}p.isMDXComponent=!0},206:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return O}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,O=b["".concat(o,".").concat(d)]||b[d]||u[d]||a;return n?i.a.createElement(O,l(l({ref:t},s),{},{components:n})):i.a.createElement(O,l({ref:t},s))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);