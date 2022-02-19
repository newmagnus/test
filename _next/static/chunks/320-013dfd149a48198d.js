"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[320],{1320:function(n,e,t){t.d(e,{A:function(){return b}});var r=t(5893),o=t(7294),i=t(7948),u=t(9402),c=t(9835),a=t(6252),l=t(1163),s=t(2293),d=t(155),m=t(5861),f=t(6886),h=t(3321),v=t(9692);function x(n){var e=n.hero;return(0,r.jsx)(o.Fragment,{children:(0,r.jsxs)(f.ZP,{container:!0,columns:6,children:[(0,r.jsxs)(f.ZP,{item:!0,lg:1,md:2,sm:3,xs:6,children:["Level: ",e.level]}),(0,r.jsxs)(f.ZP,{item:!0,lg:1,md:2,sm:3,xs:6,children:["Location: ",e.location.x,", ",e.location.y]}),(0,r.jsxs)(f.ZP,{item:!0,lg:1,md:2,sm:3,xs:6,children:["Gold: ",e.gold]}),(0,r.jsxs)(f.ZP,{item:!0,lg:1,md:2,sm:3,xs:6,children:["Experience: ",e.experience," / ",e.needed]}),(0,r.jsxs)(f.ZP,{item:!0,lg:1,md:2,sm:3,xs:6,children:["Health: ",e.combat.health," / ",e.combat.maxHealth]}),(0,r.jsxs)(f.ZP,{item:!0,lg:1,md:2,sm:3,xs:6,children:["Luck: ",e.stats.luck]}),(0,r.jsxs)(f.ZP,{item:!0,lg:1,md:2,sm:3,xs:6,children:["Strength: ",e.stats.strength]}),(0,r.jsxs)(f.ZP,{item:!0,lg:1,md:2,sm:3,xs:6,children:["Dexterity: ",e.stats.dexterity]}),(0,r.jsxs)(f.ZP,{item:!0,lg:1,md:2,sm:3,xs:6,children:["Constitution: ",e.stats.constitution]}),(0,r.jsxs)(f.ZP,{item:!0,lg:1,md:2,sm:3,xs:6,children:["Intelligence: ",e.stats.intelligence]}),(0,r.jsxs)(f.ZP,{item:!0,lg:1,md:2,sm:3,xs:6,children:["Wisdom: ",e.stats.wisdom]}),(0,r.jsxs)(f.ZP,{item:!0,lg:1,md:2,sm:3,xs:6,children:["Charisma: ",e.stats.charisma]})]})})}function g(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function y(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,i=[],u=!0,c=!1;try{for(t=t.call(n);!(u=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);u=!0);}catch(a){c=!0,o=a}finally{try{u||null==t.return||t.return()}finally{if(c)throw o}}return i}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return g(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return g(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(n){var e=n.hero,t=(0,l.useRouter)(),u=(0,a.x)(),c=y((0,v.d)(),2),g=(c[0],c[1]);return(0,r.jsxs)(s.Z,{position:"static",children:[(0,r.jsx)(d.Z,{children:(0,r.jsx)(i.Z,{children:(0,r.jsxs)(f.ZP,{container:!0,columns:3,children:[(0,r.jsx)(f.ZP,{item:!0,xs:2,children:(0,r.jsx)(m.Z,{variant:"h4",children:"Proof of Combat"})}),(0,r.jsx)(f.ZP,{item:!0,xs:1,children:e&&(0,r.jsx)(o.Fragment,{children:(0,r.jsxs)(m.Z,{variant:"h6",align:"right",children:[e.name,(0,r.jsx)("br",{}),(0,r.jsx)(h.Z,{color:"error",variant:"contained",disableElevation:!0,onClick:function(){g(null),u.clearStore(),t.push("/")},children:"Logout"})]})})})]})})}),(0,r.jsx)(i.Z,{children:e&&(0,r.jsx)(x,{hero:e})})]})}function p(n){var e=n.delay,t=(0,o.useRef)(null);return(0,o.useLayoutEffect)((function(){if(t.current){if(e<=0)return t.current.style.transition="none",void(t.current.style.width="0%");t.current.style.transition="none",t.current.style.width="100%";var n=setTimeout((function(){t.current&&(t.current.style.transition="width ".concat(e,"ms cubic-bezier(0.4, 0, 0.2, 1) 100ms"),t.current.style.width="0px")}),100);return function(){return clearTimeout(n)}}}),[e,t.current]),(0,r.jsx)("div",{style:{width:"100%",height:"4px",backgroundColor:"#ccc"},children:(0,r.jsx)("div",{ref:t,style:{height:"100%",backgroundColor:"#f0f"}})})}function b(n){var e,t,a,l,s,d=n.children,m=n.showHero,f=void 0!==m&&m,h=(0,o.useState)(0),v=h[0],x=h[1],g=(0,u.UE)({skip:!f,onCompleted:function(n){var e,t;(null===n||void 0===n||null===(e=n.me)||void 0===e?void 0:e.now)&&!v&&x(S-Number(null===n||void 0===n||null===(t=n.me)||void 0===t?void 0:t.now))}}).data,y=(0,o.useState)(0),b=y[0],w=y[1],P=(0,o.useState)(0),Z=(P[0],P[1]),A=Number(null!==(s=null===g||void 0===g||null===(e=g.me)||void 0===e||null===(t=e.account)||void 0===t?void 0:t.nextAllowedAction)&&void 0!==s?s:0)+v,S=Date.now();if((0,o.useEffect)((function(){if(b>0){var n=setTimeout((function(){var n=A-Date.now();w(n)}),Math.max(50,b));return function(){return clearTimeout(n)}}}),[b]),(0,o.useEffect)((function(){var n,e;if(null===g||void 0===g||null===(n=g.me)||void 0===n||null===(e=n.account)||void 0===e?void 0:e.nextAllowedAction){var t=A-S;t>0&&(t>b&&Z(t),w(t))}}),[null===g||void 0===g||null===(a=g.me)||void 0===a||null===(l=a.account)||void 0===l?void 0:l.nextAllowedAction,v]),g&&f){var k=g.me,C=(k.now,k.account),E=C.hero;C.nextAllowedAction;if(E)return(0,r.jsxs)(c.E.Provider,{value:[b,w],children:[(0,r.jsx)(j,{hero:E}),(0,r.jsx)(p,{delay:b}),(0,r.jsx)(i.Z,{children:d})]})}return(0,r.jsxs)(c.E.Provider,{value:[b,w],children:[(0,r.jsx)(j,{}),(0,r.jsx)(i.Z,{children:d})]})}},9402:function(n,e,t){t.d(e,{hK:function(){return y},TX:function(){return b},Ht:function(){return P},pL:function(){return A},zC:function(){return k},hL:function(){return E},Of:function(){return $},YA:function(){return H},Bl:function(){return T},UE:function(){return M}});var r=t(7283),o=t(1641),i=t(319);function u(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){u(n,e,t[e])}))}return n}function a(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function l(){var n=a(["\n    query GetChatToken {\n  chat {\n    token\n  }\n}\n    "]);return l=function(){return n},n}function s(){var n=a(["\n    mutation Challenge($monster: ID!) {\n  challenge(monster: $monster) {\n    id\n    monster {\n      id\n      name\n    }\n  }\n}\n    "]);return s=function(){return n},n}function d(){var n=a(["\n    query Challenges {\n  challenges {\n    id\n    name\n    level\n  }\n}\n    "]);return d=function(){return n},n}function m(){var n=a(["\n    mutation Fight($monster: ID!) {\n  fight(monster: $monster) {\n    victory\n    experience\n    didLevel\n    log {\n      damage\n      attackType\n      success\n      from\n      to\n    }\n    account {\n      id\n      nextAllowedAction\n    }\n    hero {\n      id\n      level\n      experience\n      combat {\n        health\n        maxHealth\n      }\n      needed\n      gold\n      stats {\n        luck\n        charisma\n        wisdom\n        intelligence\n        constitution\n        dexterity\n        strength\n      }\n    }\n    monster {\n      id\n      monster {\n        name\n        combat {\n          health\n          maxHealth\n        }\n      }\n    }\n  }\n}\n    "]);return m=function(){return n},n}function f(){var n=a(["\n    mutation Heal {\n  heal {\n    account {\n      id\n      nextAllowedAction\n    }\n    hero {\n      id\n      combat {\n        maxHealth\n        health\n      }\n    }\n  }\n}\n    "]);return f=function(){return n},n}function h(){var n=a(["\n    query Monsters {\n  monsters {\n    id\n    monster {\n      id\n      name\n      level\n      combat {\n        health\n        maxHealth\n      }\n    }\n  }\n}\n    "]);return h=function(){return n},n}function v(){var n=a(["\n    mutation Login($name: String!, $password: String!) {\n  login(name: $name, password: $password) {\n    token\n    account {\n      name\n      hero {\n        name\n        level\n        experience\n        combat {\n          health\n          maxHealth\n        }\n        stats {\n          strength\n          dexterity\n          constitution\n          intelligence\n          wisdom\n          charisma\n          luck\n        }\n      }\n    }\n  }\n}\n    "]);return v=function(){return n},n}function x(){var n=a(["\n    mutation Signup($name: String!, $password: String!) {\n  createAccount(name: $name, password: $password) {\n    name\n    hero {\n      name\n    }\n  }\n}\n    "]);return x=function(){return n},n}function g(){var n=a(["\n    query Me {\n  me {\n    now\n    account {\n      id\n      nextAllowedAction\n      hero {\n        id\n        name\n        level\n        experience\n        needed\n        gold\n        location {\n          x\n          y\n          map\n        }\n        combat {\n          health\n          maxHealth\n        }\n        stats {\n          dexterity\n          intelligence\n          charisma\n          constitution\n          wisdom\n          luck\n          strength\n        }\n      }\n    }\n  }\n}\n    "]);return g=function(){return n},n}var y,j={};!function(n){n.Melee="MELEE"}(y||(y={}));var p=(0,r.Ps)(l());function b(n){var e=c({},j,n);return o.a(p,e)}var w=(0,r.Ps)(s());function P(n){var e=c({},j,n);return i.D(w,e)}var Z=(0,r.Ps)(d());function A(n){var e=c({},j,n);return o.a(Z,e)}var S=(0,r.Ps)(m());function k(n){var e=c({},j,n);return i.D(S,e)}var C=(0,r.Ps)(f());function E(n){var e=c({},j,n);return i.D(C,e)}var O=(0,r.Ps)(h());function $(n){var e=c({},j,n);return o.a(O,e)}var D=(0,r.Ps)(v());function H(n){var e=c({},j,n);return i.D(D,e)}var L=(0,r.Ps)(x());function T(n){var e=c({},j,n);return i.D(L,e)}var I=(0,r.Ps)(g());function M(n){var e=c({},j,n);return o.a(I,e)}},9835:function(n,e,t){t.d(e,{E:function(){return o},g:function(){return i}});var r=t(7294),o=(0,r.createContext)([0,function(n){}]);function i(){return(0,r.useContext)(o)}},9692:function(n,e,t){t.d(e,{d:function(){return c}});var r,o=t(7294),i=["undefined"!==typeof localStorage&&null!==(r=localStorage.token)&&void 0!==r?r:null,function(n){i[0]=n,"undefined"!==typeof localStorage&&(localStorage.token=n)}],u=o.createContext(i);function c(){return o.useContext(u)}}}]);