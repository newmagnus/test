"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[142],{142:function(n,e,t){t.d(e,{A:function(){return S}});var r=t(5893),o=t(7294),i=t(7948),a=t(9402),s=t(9835),c=t(6252),l=t(1163),u=t(2293),d=t(155),m=t(5861),h=t(6886),f=t(3321),v=t(9692);function x(n){var e=n.hero;return(0,r.jsx)(o.Fragment,{children:(0,r.jsxs)(h.ZP,{container:!0,columns:6,children:[(0,r.jsxs)(h.ZP,{item:!0,lg:1,md:2,sm:3,xs:6,children:["Level:"," ",(0,r.jsx)("span",{id:"hero-stats-level",children:e.level.toLocaleString()})]}),(0,r.jsxs)(h.ZP,{item:!0,lg:1,md:2,sm:3,xs:6,children:["Location:"," ",(0,r.jsxs)("span",{id:"hero-stats-location",children:[e.location.x,", ",e.location.y]})]}),(0,r.jsxs)(h.ZP,{item:!0,lg:1,md:2,sm:3,xs:6,children:["Gold: ",(0,r.jsx)("span",{id:"hero-stats-gold",children:e.gold.toLocaleString()})]}),(0,r.jsxs)(h.ZP,{item:!0,lg:1,md:2,sm:3,xs:6,children:["Experience:"," ",(0,r.jsx)("span",{id:"hero-stats-experience",children:e.experience.toLocaleString()})," ","/"," ",(0,r.jsx)("span",{id:"hero-stats-experience-needed",children:e.needed.toLocaleString()})]}),(0,r.jsxs)(h.ZP,{item:!0,lg:1,md:2,sm:3,xs:6,children:["Health:"," ",(0,r.jsxs)("span",{id:"hero-stats-health",children:[e.combat.health.toLocaleString()," /"," ",e.combat.maxHealth.toLocaleString()]})]}),(0,r.jsxs)(h.ZP,{item:!0,lg:1,md:2,sm:3,xs:6,children:["Luck:"," ",(0,r.jsx)("span",{id:"hero-stats-luck",children:e.stats.luck.toLocaleString()})]}),(0,r.jsxs)(h.ZP,{item:!0,lg:1,md:2,sm:3,xs:6,children:["Strength:"," ",(0,r.jsx)("span",{id:"hero-stats-strength",children:e.stats.strength.toLocaleString()})]}),(0,r.jsxs)(h.ZP,{item:!0,lg:1,md:2,sm:3,xs:6,children:["Dexterity:"," ",(0,r.jsx)("span",{id:"hero-stats-dexterity",children:e.stats.dexterity.toLocaleString()})]}),(0,r.jsxs)(h.ZP,{item:!0,lg:1,md:2,sm:3,xs:6,children:["Constitution:"," ",(0,r.jsx)("span",{id:"hero-stats-constitution",children:e.stats.constitution.toLocaleString()})]}),(0,r.jsxs)(h.ZP,{item:!0,lg:1,md:2,sm:3,xs:6,children:["Intelligence:"," ",(0,r.jsx)("span",{id:"hero-stats-intelligence",children:e.stats.intelligence.toLocaleString()})]}),(0,r.jsxs)(h.ZP,{item:!0,lg:1,md:2,sm:3,xs:6,children:["Wisdom:"," ",(0,r.jsx)("span",{id:"hero-stats-wisdom",children:e.stats.wisdom.toLocaleString()})]}),(0,r.jsxs)(h.ZP,{item:!0,lg:1,md:2,sm:3,xs:6,children:["Charisma:"," ",(0,r.jsx)("span",{id:"hero-stats-charisma",children:e.stats.charisma.toLocaleString()})]})]})})}function g(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function p(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,i=[],a=!0,s=!1;try{for(t=t.call(n);!(a=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(c){s=!0,o=c}finally{try{a||null==t.return||t.return()}finally{if(s)throw o}}return i}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return g(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return g(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(n){var e=n.hero,t=(0,l.useRouter)(),a=(0,c.x)(),s=p((0,v.d)(),2),g=(s[0],s[1]);return(0,r.jsxs)(u.Z,{position:"static",children:[(0,r.jsx)(d.Z,{children:(0,r.jsx)(i.Z,{children:(0,r.jsxs)(h.ZP,{container:!0,columns:3,children:[(0,r.jsx)(h.ZP,{item:!0,xs:2,children:(0,r.jsx)(m.Z,{variant:"h4",children:"Proof of Combat"})}),(0,r.jsx)(h.ZP,{item:!0,xs:1,children:e&&(0,r.jsx)(o.Fragment,{children:(0,r.jsxs)(m.Z,{variant:"h6",align:"right",children:[e.name,(0,r.jsx)("br",{}),(0,r.jsx)(f.Z,{color:"error",variant:"contained",disableElevation:!0,onClick:function(){g(null),a.clearStore(),t.push("/")},children:"Logout"})]})})})]})})}),(0,r.jsx)(i.Z,{children:e&&(0,r.jsx)(x,{hero:e})})]})}function b(n){var e=n.delay,t=(0,o.useRef)(null);return(0,o.useLayoutEffect)((function(){if(t.current){if(e<=0)return t.current.style.transition="none",void(t.current.style.width="0%");t.current.style.transition="none",t.current.style.width="100%";var n=setTimeout((function(){t.current&&(t.current.style.transition="width ".concat(e,"ms linear 100ms"),t.current.style.width="0px")}),1);return function(){return clearTimeout(n)}}}),[e,t.current]),(0,r.jsx)("div",{id:"delay-bar-container",style:{width:"100%",height:"6px",backgroundColor:"#ccc"},children:(0,r.jsx)("div",{id:"delay-bar",ref:t,style:{height:"100%",backgroundColor:"#f0f"}})})}var j=t(7720);function A(){return(0,r.jsxs)(o.Fragment,{children:[(0,r.jsx)("br",{}),(0,r.jsx)(j.Z,{}),(0,r.jsx)("br",{}),(0,r.jsx)(i.Z,{children:(0,r.jsxs)(h.ZP,{container:!0,columns:3,children:[(0,r.jsx)(h.ZP,{item:!0,sm:1,xs:3,children:(0,r.jsx)(m.Z,{children:(0,r.jsx)("a",{href:"https://github.com/chrisinajar/proofofcombat",target:"_blank",rel:"noreferrer",children:"Client source code"})})}),(0,r.jsx)(h.ZP,{item:!0,sm:1,xs:3,children:(0,r.jsx)(m.Z,{align:"center",children:(0,r.jsx)("a",{href:"https://studio.apollographql.com/sandbox/explorer?endpoint=https%3A%2F%2Fchrisinajar.com%3A4333%2Fgraphql",target:"_blank",rel:"noreferrer",children:"API explorer"})})}),(0,r.jsx)(h.ZP,{item:!0,sm:1,xs:3,children:(0,r.jsx)(m.Z,{align:"right",children:(0,r.jsx)("a",{href:"https://github.com/chrisinajar/proofofcombat-server",target:"_blank",rel:"noreferrer",children:"Server source code"})})})]})}),(0,r.jsx)("br",{})]})}var w=t(1458);function P(n){var e=n.hero;return(0,r.jsxs)(o.Fragment,{children:[(0,r.jsx)(w.Z,{sx:{height:10},variant:"determinate",value:e.combat.health/e.combat.maxHealth*100,color:"success"}),(0,r.jsx)(w.Z,{sx:{height:10},variant:"determinate",value:e.experience/e.needed*100,color:"secondary"})]})}function S(n){var e,t,c,l,u,d=n.children,m=n.showHero,h=void 0!==m&&m,f=(0,o.useState)(0),v=f[0],x=f[1],g=(0,a.UE)({skip:!h,onCompleted:function(n){var e,t;(null===n||void 0===n||null===(e=n.me)||void 0===e?void 0:e.now)&&!v&&x(L-Number(null===n||void 0===n||null===(t=n.me)||void 0===t?void 0:t.now))}}).data,p=(0,o.useState)(0),j=p[0],w=p[1],S=(0,o.useState)(0),Z=(S[0],S[1]),k=Number(null!==(u=null===g||void 0===g||null===(e=g.me)||void 0===e||null===(t=e.account)||void 0===t?void 0:t.nextAllowedAction)&&void 0!==u?u:0)+v,L=Date.now();if((0,o.useEffect)((function(){if(j>0){var n=setTimeout((function(){var n=k-Date.now();w(n)}),Math.max(50,j));return function(){return clearTimeout(n)}}}),[j]),(0,o.useEffect)((function(){var n,e;if(null===g||void 0===g||null===(n=g.me)||void 0===n||null===(e=n.account)||void 0===e?void 0:e.nextAllowedAction){var t=k-L;t>0&&(t>j&&Z(t),w(t))}}),[null===g||void 0===g||null===(c=g.me)||void 0===c||null===(l=c.account)||void 0===l?void 0:l.nextAllowedAction,v]),g&&h){var I=g.me,H=(I.now,I.account),$=H.hero;H.nextAllowedAction;if($)return(0,r.jsxs)(s.E.Provider,{value:[j,w],children:[(0,r.jsx)(y,{hero:$}),(0,r.jsx)(P,{hero:$}),(0,r.jsx)(b,{delay:j}),(0,r.jsx)(i.Z,{children:d}),(0,r.jsx)(A,{})]})}return(0,r.jsxs)(s.E.Provider,{value:[j,w],children:[(0,r.jsx)(y,{}),(0,r.jsx)(i.Z,{children:d}),(0,r.jsx)(A,{})]})}},9402:function(n,e,t){t.d(e,{hK:function(){return S},GC:function(){return Z},kj:function(){return k},$7:function(){return L},p$:function(){return I},TX:function(){return C},Ht:function(){return D},pL:function(){return O},zC:function(){return q},hL:function(){return W},Of:function(){return N},YA:function(){return _},Bl:function(){return z},Nn:function(){return Y},aP:function(){return Q},Wg:function(){return J},Y4:function(){return nn},gK:function(){return tn},o_:function(){return on},Cb:function(){return sn},UE:function(){return ln}});var r=t(7283),o=t(1641),i=t(319);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){a(n,e,t[e])}))}return n}function c(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function l(){var n=c(["\n    query GetChatToken {\n  chat {\n    token\n  }\n}\n    "]);return l=function(){return n},n}function u(){var n=c(["\n    mutation Challenge($monster: ID!) {\n  challenge(monster: $monster) {\n    id\n    monster {\n      id\n      name\n    }\n  }\n}\n    "]);return u=function(){return n},n}function d(){var n=c(["\n    query Challenges {\n  challenges {\n    id\n    name\n    level\n  }\n}\n    "]);return d=function(){return n},n}function m(){var n=c(["\n    mutation Fight($monster: ID!, $attackType: AttackType) {\n  fight(monster: $monster, attackType: $attackType) {\n    victory\n    experience\n    gold\n    didLevel\n    drop {\n      id\n      baseItem\n      owner\n      name\n      type\n      level\n      enchantment\n    }\n    log {\n      damage\n      attackType\n      success\n      from\n      to\n      critical\n    }\n    account {\n      id\n      nextAllowedAction\n    }\n    hero {\n      id\n      level\n      experience\n      attributePoints\n      gold\n      combat {\n        health\n        maxHealth\n      }\n      needed\n      gold\n      stats {\n        luck\n        charisma\n        wisdom\n        intelligence\n        constitution\n        dexterity\n        strength\n      }\n      inventory {\n        id\n      }\n    }\n    monster {\n      id\n      monster {\n        name\n        combat {\n          health\n          maxHealth\n        }\n      }\n    }\n  }\n}\n    "]);return m=function(){return n},n}function h(){var n=c(["\n    mutation Heal {\n  heal {\n    account {\n      id\n      nextAllowedAction\n    }\n    hero {\n      id\n      combat {\n        maxHealth\n        health\n      }\n    }\n  }\n}\n    "]);return h=function(){return n},n}function f(){var n=c(["\n    query Monsters {\n  monsters {\n    id\n    monster {\n      id\n      name\n      level\n      attackType\n      combat {\n        health\n        maxHealth\n      }\n    }\n  }\n}\n    "]);return f=function(){return n},n}function v(){var n=c(["\n    mutation Login($name: String!, $password: String!) {\n  login(name: $name, password: $password) {\n    token\n    account {\n      name\n      hero {\n        name\n        level\n        experience\n        combat {\n          health\n          maxHealth\n        }\n        stats {\n          strength\n          dexterity\n          constitution\n          intelligence\n          wisdom\n          charisma\n          luck\n        }\n      }\n    }\n  }\n}\n    "]);return v=function(){return n},n}function x(){var n=c(["\n    mutation Signup($name: String!, $password: String!) {\n  createAccount(name: $name, password: $password) {\n    name\n    hero {\n      name\n    }\n  }\n}\n    "]);return x=function(){return n},n}function g(){var n=c(["\n    mutation BuyItem($baseItem: ID!) {\n  buy(baseItem: $baseItem) {\n    hero {\n      id\n      gold\n      inventory {\n        id\n        baseItem\n        owner\n        name\n        type\n        level\n        enchantment\n      }\n      equipment {\n        id\n        accessories {\n          id\n        }\n        footArmor {\n          id\n        }\n        headArmor {\n          id\n        }\n        legArmor {\n          id\n        }\n        handArmor {\n          id\n        }\n        bodyArmor {\n          id\n        }\n        rightHand {\n          id\n        }\n        leftHand {\n          id\n        }\n      }\n    }\n    account {\n      id\n      nextAllowedAction\n    }\n  }\n}\n    "]);return g=function(){return n},n}function p(){var n=c(["\n    mutation EquipItem($item: ID!, $slot: String!) {\n  equip(item: $item, slot: $slot) {\n    account {\n      nextAllowedAction\n      id\n    }\n    hero {\n      id\n      equipment {\n        id\n        footArmor {\n          id\n        }\n        headArmor {\n          id\n        }\n        legArmor {\n          id\n        }\n        handArmor {\n          id\n        }\n        bodyArmor {\n          id\n        }\n        rightHand {\n          id\n        }\n        leftHand {\n          id\n        }\n      }\n    }\n  }\n}\n    "]);return p=function(){return n},n}function y(){var n=c(["\n    query Leaderboard {\n  leaderboard {\n    id\n    name\n    gold\n    level\n  }\n}\n    "]);return y=function(){return n},n}function b(){var n=c(["\n    mutation LevelUp($attribute: AttributeType!) {\n  increaseAttribute(attribute: $attribute) {\n    hero {\n      id\n      attributePoints\n      stats {\n        luck\n        charisma\n        wisdom\n        intelligence\n        constitution\n        dexterity\n        strength\n      }\n      combat {\n        maxHealth\n        health\n      }\n    }\n    account {\n      id\n      nextAllowedAction\n    }\n  }\n}\n    "]);return b=function(){return n},n}function j(){var n=c(["\n    mutation MoveLocation($direction: MoveDirection!) {\n  move(direction: $direction) {\n    hero {\n      id\n      location {\n        y\n        x\n      }\n    }\n    monsters {\n      id\n      monster {\n        id\n        name\n        level\n      }\n    }\n    account {\n      id\n      nextAllowedAction\n    }\n  }\n}\n    "]);return j=function(){return n},n}function A(){var n=c(["\n    mutation SellItem($item: ID!) {\n  sell(item: $item) {\n    hero {\n      id\n      gold\n      inventory {\n        id\n        owner\n        baseItem\n        name\n        type\n        level\n        enchantment\n      }\n      equipment {\n        id\n        accessories {\n          id\n        }\n        footArmor {\n          id\n        }\n        headArmor {\n          id\n        }\n        legArmor {\n          id\n        }\n        handArmor {\n          id\n        }\n        bodyArmor {\n          id\n        }\n        rightHand {\n          id\n        }\n        leftHand {\n          id\n        }\n      }\n    }\n    account {\n      id\n      nextAllowedAction\n    }\n  }\n}\n    "]);return A=function(){return n},n}function w(){var n=c(["\n    query ShopItems {\n  shopItems {\n    id\n    name\n    cost\n    type\n  }\n}\n    "]);return w=function(){return n},n}function P(){var n=c(["\n    query Me {\n  me {\n    now\n    account {\n      id\n      nextAllowedAction\n      hero {\n        version\n        id\n        name\n        level\n        experience\n        needed\n        gold\n        attributePoints\n        location {\n          x\n          y\n          map\n        }\n        inventory {\n          id\n          baseItem\n          owner\n          name\n          type\n          level\n          enchantment\n        }\n        equipment {\n          id\n          accessories {\n            id\n            baseItem\n            owner\n            name\n            type\n            level\n            enchantment\n          }\n          footArmor {\n            id\n            baseItem\n            owner\n            name\n            type\n            level\n            enchantment\n          }\n          headArmor {\n            id\n            baseItem\n            owner\n            name\n            type\n            level\n            enchantment\n          }\n          legArmor {\n            id\n            baseItem\n            owner\n            name\n            type\n            level\n            enchantment\n          }\n          handArmor {\n            id\n            baseItem\n            owner\n            name\n            type\n            level\n            enchantment\n          }\n          bodyArmor {\n            id\n            baseItem\n            owner\n            name\n            type\n            level\n            enchantment\n          }\n          rightHand {\n            id\n            baseItem\n            owner\n            name\n            type\n            level\n            enchantment\n          }\n          leftHand {\n            id\n            baseItem\n            owner\n            name\n            type\n            level\n            enchantment\n          }\n        }\n        combat {\n          health\n          maxHealth\n        }\n        stats {\n          dexterity\n          intelligence\n          charisma\n          constitution\n          wisdom\n          luck\n          strength\n        }\n      }\n    }\n  }\n}\n    "]);return P=function(){return n},n}var S,Z,k,L,I,H={};!function(n){n.Blood="BLOOD",n.Elemental="ELEMENTAL",n.Holy="HOLY",n.Melee="MELEE",n.Ranged="RANGED",n.Wizard="WIZARD"}(S||(S={})),function(n){n.Charisma="charisma",n.Constitution="constitution",n.Dexterity="dexterity",n.Intelligence="intelligence",n.Luck="luck",n.Strength="strength",n.Wisdom="wisdom"}(Z||(Z={})),function(n){n.BonusAllStats="BonusAllStats",n.BonusCharisma="BonusCharisma",n.BonusConstitution="BonusConstitution",n.BonusDexterity="BonusDexterity",n.BonusIntelligence="BonusIntelligence",n.BonusLuck="BonusLuck",n.BonusMental="BonusMental",n.BonusPhysical="BonusPhysical",n.BonusStrength="BonusStrength",n.BonusWisdom="BonusWisdom"}(k||(k={})),function(n){n.Accessory="Accessory",n.BodyArmor="BodyArmor",n.FootArmor="FootArmor",n.HandArmor="HandArmor",n.HeadArmor="HeadArmor",n.LegArmor="LegArmor",n.MeleeWeapon="MeleeWeapon",n.Quest="Quest",n.RangedWeapon="RangedWeapon",n.Shield="Shield",n.SpellFocus="SpellFocus"}(L||(L={})),function(n){n.East="EAST",n.North="NORTH",n.South="SOUTH",n.West="WEST"}(I||(I={}));var $=(0,r.Ps)(l());function C(n){var e=s({},H,n);return o.a($,e)}var B=(0,r.Ps)(u());function D(n){var e=s({},H,n);return i.D(B,e)}var E=(0,r.Ps)(d());function O(n){var e=s({},H,n);return o.a(E,e)}var T=(0,r.Ps)(m());function q(n){var e=s({},H,n);return i.D(T,e)}var M=(0,r.Ps)(h());function W(n){var e=s({},H,n);return i.D(M,e)}var F=(0,r.Ps)(f());function N(n){var e=s({},H,n);return o.a(F,e)}var R=(0,r.Ps)(v());function _(n){var e=s({},H,n);return i.D(R,e)}var U=(0,r.Ps)(x());function z(n){var e=s({},H,n);return i.D(U,e)}var G=(0,r.Ps)(g());function Y(n){var e=s({},H,n);return i.D(G,e)}var K=(0,r.Ps)(p());function Q(n){var e=s({},H,n);return i.D(K,e)}var X=(0,r.Ps)(y());function J(n){var e=s({},H,n);return o.a(X,e)}var V=(0,r.Ps)(b());function nn(n){var e=s({},H,n);return i.D(V,e)}var en=(0,r.Ps)(j());function tn(n){var e=s({},H,n);return i.D(en,e)}var rn=(0,r.Ps)(A());function on(n){var e=s({},H,n);return i.D(rn,e)}var an=(0,r.Ps)(w());function sn(n){var e=s({},H,n);return o.a(an,e)}var cn=(0,r.Ps)(P());function ln(n){var e=s({},H,n);return o.a(cn,e)}},9835:function(n,e,t){t.d(e,{E:function(){return o},g:function(){return i}});var r=t(7294),o=(0,r.createContext)([0,function(n){}]);function i(){return(0,r.useContext)(o)}},9692:function(n,e,t){t.d(e,{d:function(){return s}});var r,o=t(7294),i=["undefined"!==typeof localStorage&&null!==(r=localStorage.token)&&void 0!==r?r:null,function(n){i[0]=n,"undefined"!==typeof localStorage&&(localStorage.token=n)}],a=o.createContext(i);function s(){return o.useContext(a)}}}]);