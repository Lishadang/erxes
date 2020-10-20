(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{123:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return c}));var a=n(2),r=n(6),i=(n(0),n(139)),l={id:"upgrade",title:"Upgrade",sidebar_label:"Upgrade"},o={unversionedId:"installation/upgrade",id:"installation/upgrade",isDocsHomePage:!1,title:"Upgrade",description:"Following the steps in this document you can upgrade the system version.",source:"@site/docs/installation/upgrade.md",slug:"/installation/upgrade",permalink:"/installation/upgrade",editUrl:"https://github.com/erxes/erxes/edit/develop/docs/docs/installation/upgrade.md",version:"current",lastUpdatedBy:"BatAmar Battulga",lastUpdatedAt:1599462360,sidebar_label:"Upgrade",sidebar:"docs",previous:{title:"Heroku",permalink:"/installation/heroku"},next:{title:"Creating first user",permalink:"/administrator/creating-first-user"}},b=[{value:"Upgrade erxes 0.13.0 to 0.14.1",id:"upgrade-erxes-0130-to-0141",children:[]},{value:"Upgrade erxes 0.15.x to 0.18.2",id:"upgrade-erxes-015x-to-0182",children:[]},{value:"Upgrade erxes 0.17.x to 0.18.2",id:"upgrade-erxes-017x-to-0182",children:[]},{value:"Upgrading from v0.9+ to the latest release vx.x.x",id:"upgrading-from-v09-to-the-latest-release-vxxx",children:[{value:"Breaking Changes",id:"breaking-changes",children:[]},{value:"Env changes",id:"env-changes",children:[]}]}],s={rightToc:b};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Following the steps in this document you can upgrade the system version."),Object(i.b)("h2",{id:"upgrade-erxes-0130-to-0141"},"Upgrade erxes 0.13.0 to 0.14.1"),Object(i.b)("p",null,"Since the current ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/erxes/erxes/blob/develop/scripts/install/debian10.sh"}),"Debian installation script")," and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/erxes/erxes/blob/develop/scripts/install/centos8.sh"}),"CentOS installation script")," aret updated to 0.14.1, they can be used to upgrade erxes v0.13.0 to v 0.14.1 if you are hosting erxes on Centos, Ubuntu or Debian."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"SSH into your server as ",Object(i.b)("inlineCode",{parentName:"p"},"erxes"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"First, stop all pm2 processes and delete pm2 apps."))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"pm2 stop ecosystem.json\npm2 delete ecosystem.json\n")),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Move erxes, erxes-api, erxes-integrations and ecosystem.json somewhere as a backup. Also backup nginx config file in /etc/nginx/sites-available/default and dump your mongodb.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Then run the installation script as ",Object(i.b)("inlineCode",{parentName:"p"},"root")))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'# If erxes hosted on Debian or Ubuntu\nbash -c "$(wget -O - https://raw.githubusercontent.com/erxes/erxes/develop/scripts/install/debian10.sh)"\n\n# If erxes hosted on CentOS\nbash -c "$(curl https://raw.githubusercontent.com/erxes/erxes/develop/scripts/install/centos8.sh)"\n')),Object(i.b)("ol",{start:5},Object(i.b)("li",{parentName:"ol"},"Afther the installation complete, run the following commands as ",Object(i.b)("inlineCode",{parentName:"li"},"erxes")," user")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"cd ~/erxes-api\nexport MONGO_URL=mongodb://localhost/erxes?replicaSet=rs0\nyarn migrate\n")),Object(i.b)("ol",{start:6},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Lastly, update ",Object(i.b)("inlineCode",{parentName:"p"},"/home/erxes/erxes/ui/build/js/env.js"),", ",Object(i.b)("inlineCode",{parentName:"p"},"ecosystem.json")," and start pm2 by ",Object(i.b)("inlineCode",{parentName:"p"},"pm2 start ecosystem.json"),", and update nginx config using your backup and reload nginx by ",Object(i.b)("inlineCode",{parentName:"p"},"systemctl reload nginx"),"."),Object(i.b)("p",{parentName:"li"},"Note: We have noticed that ",Object(i.b)("inlineCode",{parentName:"p"},"pm2 reload ecosystem.json")," and ",Object(i.b)("inlineCode",{parentName:"p"},"pm2 restart ecosystem.json")," sometimes not picking up any changes to the ",Object(i.b)("inlineCode",{parentName:"p"},"ecosystem.json")," for some reason. So if you need to update ",Object(i.b)("inlineCode",{parentName:"p"},"ecosystem.json")," file, please use ",Object(i.b)("inlineCode",{parentName:"p"},"pm2 delete ecosystem.json")," and ",Object(i.b)("inlineCode",{parentName:"p"},"pm2 start ecosystem.json")," in the feature."))),Object(i.b)("h2",{id:"upgrade-erxes-015x-to-0182"},"Upgrade erxes 0.15.x to 0.18.2"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"login to your server")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"cd /home/erxes && su erxes")," ( switch to erxes user)")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"pm2 delete all"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"cp erxes/ui/build/js/env.js env.js.back")," (backup env.js file)")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"rm -rf erxes && rm -rf erxes-api && rm -rf erxes-integrations")," (remove old files)")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Download new files"),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"curl -L https://github.com/erxes/erxes/releases/download/0.18.2/erxes-0.18.2.tar.gz   | tar -xz -C .")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"curl -L https://github.com/erxes/erxes-api/releases/download/0.18.2/erxes-api-0.18.2.tar.gz   | tar -xz -C .")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"curl -L https://github.com/erxes/erxes-integrations/releases/download/0.18.2/erxes-integrations-0.18.2.tar.gz   | tar -xz -C .")))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"mv env.js.back erxes/build/js/env.js")," (replace env)")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"update ecosystem.json file"),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"replace ",Object(i.b)("inlineCode",{parentName:"li"},"/home/erxes/erxes-api/engages-email-sender")," with ",Object(i.b)("inlineCode",{parentName:"li"},"/home/erxes/erxes-engages-email-sender")),Object(i.b)("li",{parentName:"ol"},"replace ",Object(i.b)("inlineCode",{parentName:"li"},"/home/erxes/erxes-api/logger")," with ",Object(i.b)("inlineCode",{parentName:"li"},"/home/erxes/erxes-logger")),Object(i.b)("li",{parentName:"ol"},"replace ",Object(i.b)("inlineCode",{parentName:"li"},"/home/erxes/erxes/widgets")," with ",Object(i.b)("inlineCode",{parentName:"li"},"/home/erxes/erxes-widgets")))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"pm2 start ecosystem.json"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"exit")," ( switch to root user )")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"vim /etc/nginx/sites-enabled/default")," (edit nginx config)")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"replace ",Object(i.b)("inlineCode",{parentName:"p"},"/home/erxes/erxes/ui/build with "),"/home/erxes/erxes/build```")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"service nginx restart")))),Object(i.b)("h2",{id:"upgrade-erxes-017x-to-0182"},"Upgrade erxes 0.17.x to 0.18.2"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"login to your server"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"cd /home/erxes/erxes.io && su erxes")," ( switch to erxes user)"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"pm2 delete all")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"cp erxes/js/env.js env.js.back")," (backup env.js file)"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"rm -rf erxes && rm -rf erxes-widgets && rm -rf erxes-api && rm -rf erxes-logger && rm -rf erxes-elkSyncer && rm -rf erxes-email-verifier && rm -rf erxes-engages-email-sender && rm -rf erxes-integrations")," (remove old files)"),Object(i.b)("li",{parentName:"ol"},"Download new files",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"curl -L https://github.com/erxes/erxes/releases/download/0.18.2/erxes-0.18.2.tar.gz   | tar -xz -C .")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"curl -L https://github.com/erxes/erxes-api/releases/download/0.18.2/erxes-api-0.18.2.tar.gz   | tar -xz -C .")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"curl -L https://github.com/erxes/erxes-integrations/releases/download/0.18.2/erxes-integrations-0.18.2.tar.gz   | tar -xz -C .")))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"mv env.js.back erxes/build/js/env.js")," (replace env)"),Object(i.b)("li",{parentName:"ol"},"update ecosystem.json file",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"replace ",Object(i.b)("inlineCode",{parentName:"li"},"/home/erxes/erxes.io/erxes-elkSyncer")," with ",Object(i.b)("inlineCode",{parentName:"li"},"/home/erxes/erxes.io/erxes-elkSyncer/elkSyncer")))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"pm2 start ecosystem.json")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"exit")," ( switch to root user )"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"vim /etc/nginx/sites-enabled/default")," (edit nginx config)"),Object(i.b)("li",{parentName:"ol"},"replace ",Object(i.b)("inlineCode",{parentName:"li"},"/home/erxes/erxes.io/erxes")," with ",Object(i.b)("inlineCode",{parentName:"li"},"/home/erxes/erxes.io/erxes/build")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"service nginx restart"))),Object(i.b)("h2",{id:"upgrading-from-v09-to-the-latest-release-vxxx"},"Upgrading from v0.9+ to the latest release vx.x.x"),Object(i.b)("h3",{id:"breaking-changes"},"Breaking Changes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Since version ",Object(i.b)("inlineCode",{parentName:"li"},"latest vx.x.x")," Erxes started using RabbitMQ as message broker service. To update, please see example changes at docker ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"docker"}),"installation guide.")),Object(i.b)("li",{parentName:"ul"},"Engage module is moved to ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/erxes/erxes-engages-email-sender"}),"separate repository"),". Also docker ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"docker"}),"installation guide")," is updated to reflect related changes.")),Object(i.b)("h3",{id:"env-changes"},"Env changes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"erxes"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"REACT_APP_INTEGRATIONS_API_URL")," - is no longer used"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"erxes-api"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ENGAGES_API_DOMAIN")," - erxes-engages service endpoint"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"RABBITMQ_HOST")," - RabbitMQ connection uri"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"erxes-widgets-api"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"RABBITMQ_HOST")," - RabbitMQ connection uri"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"erxes-integrations"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"RABBITMQ_HOST")," - RabbitMQ connection uri"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"erxes-engages"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"PORT")," - engages service running port"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"NODE_ENV")," - node environment"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"DEBUG")," - enable logging"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"MAIN_API_DOMAIN")," - erxes api url"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"MONGO_URL")," - MongoDB connection uri"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"RABBITMQ_HOST")," - RabbitMQ connection uri")))))}c.isMDXComponent=!0},139:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),c=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,j=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return n?r.a.createElement(j,o(o({ref:t},s),{},{components:n})):r.a.createElement(j,o({ref:t},s))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);