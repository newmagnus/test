"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[320],{1320:function(n,t,e){e.d(t,{A:function(){return j}});var r=e(5893),i=e(7294),o=e(7948),u=e(9402),a=e(9835),c=e(6252),l=e(1163),s=e(2293),d=e(155),m=e(5861),f=e(6886),h=e(3321),v=e(9692);function x(n){var t=n.hero;return(0,r.jsx)(i.Fragment,{children:(0,r.jsxs)(f.ZP,{container:!0,columns:6,children:[(0,r.jsxs)(f.ZP,{item:!0,lg:1,md:2,sm:3,xs:6,children:["Level: ",t.level]}),(0,r.jsxs)(f.ZP,{item:!0,lg:1,md:2,sm:3,xs:6,children:["Location: ",t.location.x,", ",t.location.y]}),(0,r.jsxs)(f.ZP,{item:!0,lg:1,md:2,sm:3,xs:6,children:["Gold: ",t.gold]}),(0,r.jsxs)(f.ZP,{item:!0,lg:1,md:2,sm:3,xs:6,children:["Experience: ",t.experience," / ",t.needed]}),(0,r.jsxs)(f.ZP,{item:!0,lg:1,md:2,sm:3,xs:6,children:["Health: ",t.combat.health," / ",t.combat.maxHealth]}),(0,r.jsxs)(f.ZP,{item:!0,lg:1,md:2,sm:3,xs:6,children:["Luck: ",t.stats.luck]}),(0,r.jsxs)(f.ZP,{item:!0,lg:1,md:2,sm:3,xs:6,children:["Strength: ",t.stats.strength]}),(0,r.jsxs)(f.ZP,{item:!0,lg:1,md:2,sm:3,xs:6,children:["Dexterity: ",t.stats.dexterity]}),(0,r.jsxs)(f.ZP,{item:!0,lg:1,md:2,sm:3,xs:6,children:["Constitution: ",t.stats.constitution]}),(0,r.jsxs)(f.ZP,{item:!0,lg:1,md:2,sm:3,xs:6,children:["Intelligence: ",t.stats.intelligence]}),(0,r.jsxs)(f.ZP,{item:!0,lg:1,md:2,sm:3,xs:6,children:["Wisdom: ",t.stats.wisdom]}),(0,r.jsxs)(f.ZP,{item:!0,lg:1,md:2,sm:3,xs:6,children:["Charisma: ",t.stats.charisma]})]})})}function g(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function y(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var r,i,o=[],u=!0,a=!1;try{for(e=e.call(n);!(u=(r=e.next()).done)&&(o.push(r.value),!t||o.length!==t);u=!0);}catch(c){a=!0,i=c}finally{try{u||null==e.return||e.return()}finally{if(a)throw i}}return o}}(n,t)||function(n,t){if(!n)return;if("string"===typeof n)return g(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return g(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(n){var t=n.hero,e=(0,l.useRouter)(),u=(0,c.x)(),a=y((0,v.d)(),2),g=(a[0],a[1]);return(0,r.jsxs)(s.Z,{position:"static",children:[(0,r.jsx)(d.Z,{children:(0,r.jsx)(o.Z,{children:(0,r.jsxs)(f.ZP,{container:!0,columns:3,children:[(0,r.jsx)(f.ZP,{item:!0,xs:2,children:(0,r.jsx)(m.Z,{variant:"h4",children:"Proof of Combat"})}),(0,r.jsx)(f.ZP,{item:!0,xs:1,children:t&&(0,r.jsx)(i.Fragment,{children:(0,r.jsxs)(m.Z,{variant:"h6",align:"right",children:[t.name,(0,r.jsx)("br",{}),(0,r.jsx)(h.Z,{color:"error",variant:"contained",disableElevation:!0,onClick:function(){g(null),u.clearStore(),e.push("/")},children:"Logout"})]})})})]})})}),(0,r.jsx)(o.Z,{children:t&&(0,r.jsx)(x,{hero:t})})]})}function p(n){var t=n.delay,e=(0,i.useRef)(null);return(0,i.useLayoutEffect)((function(){if(e.current){if(t<=0)return e.current.style.transition="none",void(e.current.style.width="0%");e.current.style.transition="none",e.current.style.width="100%";var n=setTimeout((function(){e.current&&(e.current.style.transition="width ".concat(t,"ms cubic-bezier(0.4, 0, 0.2, 1) 100ms"),e.current.style.width="0px")}),100);return function(){return clearTimeout(n)}}}),[t,e.current]),(0,r.jsx)("div",{style:{width:"100%",height:"4px",backgroundColor:"#ccc"},children:(0,r.jsx)("div",{ref:e,style:{height:"100%",backgroundColor:"#f0f"}})})}function j(n){var t,e,c,l,s,d=n.children,m=n.showHero,f=void 0!==m&&m,h=(0,i.useState)(0),v=h[0],x=h[1],g=(0,u.UE)({skip:!f,onCompleted:function(n){var t,e;(null===n||void 0===n||null===(t=n.me)||void 0===t?void 0:t.now)&&!v&&x(S-Number(null===n||void 0===n||null===(e=n.me)||void 0===e?void 0:e.now))}}).data,y=(0,i.useState)(0),j=y[0],w=y[1],P=(0,i.useState)(0),A=(P[0],P[1]),k=Number(null!==(s=null===g||void 0===g||null===(t=g.me)||void 0===t||null===(e=t.account)||void 0===e?void 0:e.nextAllowedAction)&&void 0!==s?s:0)+v,S=Date.now();if((0,i.useEffect)((function(){if(j>0){var n=setTimeout((function(){var n=k-Date.now();w(n)}),Math.max(50,j));return function(){return clearTimeout(n)}}}),[j]),(0,i.useEffect)((function(){var n,t;if(null===g||void 0===g||null===(n=g.me)||void 0===n||null===(t=n.account)||void 0===t?void 0:t.nextAllowedAction){var e=k-S;e>0&&(e>j&&A(e),w(e))}}),[null===g||void 0===g||null===(c=g.me)||void 0===c||null===(l=c.account)||void 0===l?void 0:l.nextAllowedAction,v]),g&&f){var Z=g.me,E=(Z.now,Z.account),C=E.hero;E.nextAllowedAction;if(C)return(0,r.jsxs)(a.E.Provider,{value:[j,w],children:[(0,r.jsx)(b,{hero:C}),(0,r.jsx)(p,{delay:j}),(0,r.jsx)(o.Z,{children:d})]})}return(0,r.jsxs)(a.E.Provider,{value:[j,w],children:[(0,r.jsx)(b,{}),(0,r.jsx)(o.Z,{children:d})]})}},9402:function(n,t,e){e.d(t,{hK:function(){return p},GC:function(){return j},p$:function(){return w},TX:function(){return k},Ht:function(){return Z},pL:function(){return C},zC:function(){return O},hL:function(){return D},Of:function(){return H},YA:function(){return I},Bl:function(){return R},Y4:function(){return z},gK:function(){return q},UE:function(){return _}});var r=e(7283),i=e(1641),o=e(319);function u(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function a(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))),r.forEach((function(t){u(n,t,e[t])}))}return n}function c(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}function l(){var n=c(["\n    query GetChatToken {\n  chat {\n    token\n  }\n}\n    "]);return l=function(){return n},n}function s(){var n=c(["\n    mutation Challenge($monster: ID!) {\n  challenge(monster: $monster) {\n    id\n    monster {\n      id\n      name\n    }\n  }\n}\n    "]);return s=function(){return n},n}function d(){var n=c(["\n    query Challenges {\n  challenges {\n    id\n    name\n    level\n  }\n}\n    "]);return d=function(){return n},n}function m(){var n=c(["\n    mutation Fight($monster: ID!, $attackType: AttackType) {\n  fight(monster: $monster, attackType: $attackType) {\n    victory\n    experience\n    didLevel\n    log {\n      damage\n      attackType\n      success\n      from\n      to\n    }\n    account {\n      id\n      nextAllowedAction\n    }\n    hero {\n      id\n      level\n      experience\n      attributePoints\n      gold\n      combat {\n        health\n        maxHealth\n      }\n      needed\n      gold\n      stats {\n        luck\n        charisma\n        wisdom\n        intelligence\n        constitution\n        dexterity\n        strength\n      }\n    }\n    monster {\n      id\n      monster {\n        name\n        combat {\n          health\n          maxHealth\n        }\n      }\n    }\n  }\n}\n    "]);return m=function(){return n},n}function f(){var n=c(["\n    mutation Heal {\n  heal {\n    account {\n      id\n      nextAllowedAction\n    }\n    hero {\n      id\n      combat {\n        maxHealth\n        health\n      }\n    }\n  }\n}\n    "]);return f=function(){return n},n}function h(){var n=c(["\n    query Monsters {\n  monsters {\n    id\n    monster {\n      id\n      name\n      level\n      attackType\n      combat {\n        health\n        maxHealth\n      }\n    }\n  }\n}\n    "]);return h=function(){return n},n}function v(){var n=c(["\n    mutation Login($name: String!, $password: String!) {\n  login(name: $name, password: $password) {\n    token\n    account {\n      name\n      hero {\n        name\n        level\n        experience\n        combat {\n          health\n          maxHealth\n        }\n        stats {\n          strength\n          dexterity\n          constitution\n          intelligence\n          wisdom\n          charisma\n          luck\n        }\n      }\n    }\n  }\n}\n    "]);return v=function(){return n},n}function x(){var n=c(["\n    mutation Signup($name: String!, $password: String!) {\n  createAccount(name: $name, password: $password) {\n    name\n    hero {\n      name\n    }\n  }\n}\n    "]);return x=function(){return n},n}function g(){var n=c(["\n    mutation LevelUp($attribute: AttributeType!) {\n  increaseAttribute(attribute: $attribute) {\n    hero {\n      id\n      attributePoints\n      stats {\n        luck\n        charisma\n        wisdom\n        intelligence\n        constitution\n        dexterity\n        strength\n      }\n      combat {\n        maxHealth\n        health\n      }\n    }\n    account {\n      id\n      nextAllowedAction\n    }\n  }\n}\n    "]);return g=function(){return n},n}function y(){var n=c(["\n    mutation MoveLocation($direction: MoveDirection!) {\n  move(direction: $direction) {\n    hero {\n      id\n      location {\n        y\n        x\n      }\n    }\n    monsters {\n      id\n      monster {\n        id\n        name\n        level\n      }\n    }\n    account {\n      id\n      nextAllowedAction\n    }\n  }\n}\n    "]);return y=function(){return n},n}function b(){var n=c(["\n    query Me {\n  me {\n    now\n    account {\n      id\n      nextAllowedAction\n      hero {\n        version\n        id\n        name\n        level\n        experience\n        needed\n        gold\n        attributePoints\n        location {\n          x\n          y\n          map\n        }\n        combat {\n          health\n          maxHealth\n        }\n        stats {\n          dexterity\n          intelligence\n          charisma\n          constitution\n          wisdom\n          luck\n          strength\n        }\n      }\n    }\n  }\n}\n    "]);return b=function(){return n},n}var p,j,w,P={};!function(n){n.Blood="BLOOD",n.Elemental="ELEMENTAL",n.Holy="HOLY",n.Melee="MELEE",n.Ranged="RANGED",n.Wizard="WIZARD"}(p||(p={})),function(n){n.Charisma="charisma",n.Constitution="constitution",n.Dexterity="dexterity",n.Intelligence="intelligence",n.Luck="luck",n.Strength="strength",n.Wisdom="wisdom"}(j||(j={})),function(n){n.East="EAST",n.North="NORTH",n.South="SOUTH",n.West="WEST"}(w||(w={}));var A=(0,r.Ps)(l());function k(n){var t=a({},P,n);return i.a(A,t)}var S=(0,r.Ps)(s());function Z(n){var t=a({},P,n);return o.D(S,t)}var E=(0,r.Ps)(d());function C(n){var t=a({},P,n);return i.a(E,t)}var $=(0,r.Ps)(m());function O(n){var t=a({},P,n);return o.D($,t)}var T=(0,r.Ps)(f());function D(n){var t=a({},P,n);return o.D(T,t)}var L=(0,r.Ps)(h());function H(n){var t=a({},P,n);return i.a(L,t)}var M=(0,r.Ps)(v());function I(n){var t=a({},P,n);return o.D(M,t)}var N=(0,r.Ps)(x());function R(n){var t=a({},P,n);return o.D(N,t)}var W=(0,r.Ps)(g());function z(n){var t=a({},P,n);return o.D(W,t)}var U=(0,r.Ps)(y());function q(n){var t=a({},P,n);return o.D(U,t)}var G=(0,r.Ps)(b());function _(n){var t=a({},P,n);return i.a(G,t)}},9835:function(n,t,e){e.d(t,{E:function(){return i},g:function(){return o}});var r=e(7294),i=(0,r.createContext)([0,function(n){}]);function o(){return(0,r.useContext)(i)}},9692:function(n,t,e){e.d(t,{d:function(){return a}});var r,i=e(7294),o=["undefined"!==typeof localStorage&&null!==(r=localStorage.token)&&void 0!==r?r:null,function(n){o[0]=n,"undefined"!==typeof localStorage&&(localStorage.token=n)}],u=i.createContext(o);function a(){return i.useContext(u)}}}]);