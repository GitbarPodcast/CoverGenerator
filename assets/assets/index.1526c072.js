import{j as m,s as T,C as l,u as I,r as N,a as u,R as g,b as M}from"./vendor.5fef972a.js";const L=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}};L();const e={DARK:"#1E293B",GRAY:"#94A3B8",WHITE:"#F8FAFC",ORCHID:{MAIN:"#C084FC",DARK:"#9D89C8"},ROSE:{MAIN:"#EB6173",DARK:"#E0B0B0"},ACQUAMARINA:{MAIN:"#00C9A7",DARK:"#00A27C"},SKY:{MAIN:"#00C9FF",DARK:"#00A2E8"},BUTTER:{MAIN:"#FFCA00",DARK:"#E0B000"},LIME_PUNCH:{MAIN:"#A7FF00",DARK:"#7CDE00"},CLASSIC_BLUE:{MAIN:"#00B0FF",DARK:"#0080E8"},CORAL:{MAIN:"#FF7F00",DARK:"#E06600"}},E={ORCHID:{BACKGROUND:e.DARK,TEXT:e.ORCHID.DARK,SECONDARY_TEXT:e.WHITE,TERTIARY_TEXT:e.GRAY,IMAGE_BG:e.ORCHID.MAIN,BLOB_BG:e.ORCHID.MAIN},ROSE:{BACKGROUND:e.DARK,TEXT:e.ROSE.DARK,SECONDARY_TEXT:e.WHITE,TERTIARY_TEXT:e.GRAY,IMAGE_BG:e.ROSE.MAIN,BLOB_BG:e.ROSE.MAIN},ACQUAMARINA:{BACKGROUND:e.DARK,TEXT:e.ACQUAMARINA.DARK,SECONDARY_TEXT:e.WHITE,TERTIARY_TEXT:e.GRAY,IMAGE_BG:e.ACQUAMARINA.MAIN,BLOB_BG:e.ACQUAMARINA.MAIN},SKY:{BACKGROUND:e.DARK,TEXT:e.SKY.DARK,SECONDARY_TEXT:e.WHITE,TERTIARY_TEXT:e.GRAY,IMAGE_BG:e.SKY.MAIN,BLOB_BG:e.SKY.MAIN},BUTTER:{BACKGROUND:e.DARK,TEXT:e.BUTTER.DARK,SECONDARY_TEXT:e.WHITE,TERTIARY_TEXT:e.GRAY,IMAGE_BG:e.BUTTER.MAIN,BLOB_BG:e.BUTTER.MAIN},CLASSIC_BLUE:{BACKGROUND:e.DARK,TEXT:e.WHITE,SECONDARY_TEXT:e.CLASSIC_BLUE.DARK,TERTIARY_TEXT:e.GRAY,IMAGE_BG:e.CLASSIC_BLUE.MAIN,BLOB_BG:e.CLASSIC_BLUE.MAIN},LIME_PUNCH:{BACKGROUND:e.DARK,TEXT:e.WHITE,SECONDARY_TEXT:e.LIME_PUNCH.DARK,TERTIARY_TEXT:e.GRAY,IMAGE_BG:e.LIME_PUNCH.MAIN,BLOB_BG:e.LIME_PUNCH.MAIN},CORAL:{BACKGROUND:e.DARK,TEXT:e.WHITE,SECONDARY_TEXT:e.CORAL.DARK,TERTIARY_TEXT:e.GRAY,IMAGE_BG:e.CORAL.MAIN,BLOB_BG:e.CORAL.MAIN}},O={TL:{},TR:{},BL:{},BR:{}};var _="/assets/bg.0af0b0ae.png";const a=m.exports.jsx,f=m.exports.jsxs,S=T.div`
  height: 100%;
  flex-grow: 1;
  flex-shrink: 1;
  ${t=>l`
    clip-path: path("${t.clipPath}");
    background: url(${t.image}), url(${_}),
      ${E[t.theme].IMAGE_BG};
  `}
  background-blend-mode: luminosity, screen, normal;
  background-size: cover, cover, cover;
  background-position: center, center, center;
  box-sizing: border-box;
`;function D({theme:t,image:i,variant:r}){const[s,{width:n,height:o}]=I(),c=Math.min(n,o)*.1,A=Math.round(n*.18),R={TL:`M ${A} 0 L ${n} 0 L ${n} ${o} L 0 ${o} Z`,TR:`M 0 0 L ${n-A} 0 L ${n} ${o} L 0 ${o} Z`,BL:`M 0 0 L ${n} 0 L ${n} ${o} L ${A} ${o} Z`,BR:`M 0 0 L ${n} 0 L ${n-A} ${o} L 0 ${o} Z`},h=N(R[r],c,0).path;return u.exports.useLayoutEffect(()=>{window.dispatchEvent(new Event("resize"))},[n,o]),a(S,{ref:s,theme:t,image:i,clipPath:h})}const $={TL:"right",TR:"right",BL:"left",BR:"left"},v={TL:"left",TR:"right",BL:"left",BR:"right"},p={TL:"column",TR:"column",BL:"column-reverse",BR:"column-reverse"},x=T.div`
  display: flex;
  flex-direction: column-reverse;
  ${({variant:t})=>l`
    flex-direction: ${p[t]};
  `};
  height: 100%;
`,G=T.div`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  flex-grow: 1;
  flex-shrink: 1;
  height: 100%;
  transform-origin: center center;
  transform: rotate(-180deg);
  ${({variant:t})=>l`
    text-align: ${$[t]};
  `};
`,K=T.div`
  font-family: outfit;
  font-weight: bold;
  text-transform: uppercase;
  ${t=>l`
    line-height: ${t.fontSize*.8}px;
    font-size: ${t.fontSize}px;
    color: ${E[t.theme].TEXT};
  `};
`,y=T.div`
  font-family: outfit;
  font-weight: bold;
  text-transform: uppercase;
  ${t=>l`
    line-height: ${t.fontSize*.8}px;
    font-size: ${t.fontSize}px;
    color: ${E[t.theme].SECONDARY_TEXT};
  `};
`,Y=T.div`
  font-family: outfit;
  font-weight: bold;
  text-transform: uppercase;
  color: #f8fafc;
  ${t=>l`
    line-height: ${t.fontSize*1.6}px;
    font-size: ${t.fontSize}px;
    color: ${E[t.theme].TERTIARY_TEXT};
  `};
`,b=T.div`
  font-family: outfit;
  font-weight: bold;
  text-transform: uppercase;
  ${t=>l`
    text-align: ${v[t.variant]};
    font-size: ${t.fontSize}px;
    color: ${E[t.theme].TERTIARY_TEXT};
  `};
`,U=10,X=1.3,w=.3,F=.8;function z({name:t,surname:i,company:r,theme:s,episodeNumber:n,variant:o}){const[c,{width:A,height:R}]=I(),h=Math.round(R/Math.max(t.length,i.length,U)*X),B=h*w,C=Math.round(A/Math.max(String(n).length))*F;return u.exports.useLayoutEffect(()=>{window.dispatchEvent(new Event("resize"))},[A,R]),f(x,{ref:c,variant:o,children:[f(G,{variant:o,children:[a(K,{theme:s,fontSize:h,children:t}),a(y,{theme:s,fontSize:h,children:i}),a(Y,{theme:s,fontSize:B,children:`<${r}>`})]}),f(b,{theme:s,fontSize:C,variant:o,children:["#",n]})]})}const H={TL:"row-reverse",TR:"row",BL:"row-reverse",BR:"row"},k=T.div`
  height: 100%;
  position: relative;
  display: flex;
  padding: 4%;
  box-sizing: border-box;
  ${t=>l`
    background: ${E[t.theme].BACKGROUND};
    flex-direction: ${H[t.variant]};
  `};
`,P=(t,i)=>{const r=Object.keys(O);return(t.length>i.length?[r[0],r[2]]:[r[1],r[3]])[Math.floor(Math.random()*2)]},W=()=>{const t=Object.keys(E);return t[Math.floor(Math.random()*t.length)]};function j({theme:t,name:i,surname:r,company:s,episodeNumber:n,image:o,variant:c}){const A=c||P(i,r),R=t||W();return f(k,{theme:R,variant:A,children:[a(D,{theme:R,image:o,variant:A}),a(z,{name:i,surname:r,company:s,theme:R,episodeNumber:n,variant:A})]})}let d=(window==null?void 0:window.__COVER__)||{name:"Test",surname:"Test",company:"Test",episodeNumber:1,image:"https://res.cloudinary.com/brainrepo/image/upload/v1643752139/lytp0sdklrfzuhntk3iz.png"};function Z(){return a("div",{style:{height:"100vh",width:"100vw",display:"flex",flexWrap:"wrap",flexDirection:"column",flexShrink:1},children:a("div",{style:{height:"50vh",width:"50vw"},children:a("div",{style:{height:"100vh",width:"100vw"},children:a(j,{name:d.name,surname:d.surname,image:d.image,episodeNumber:d.episodeNumber,company:d.company,variant:d.variant,theme:d.theme})})})})}g.render(a(M.StrictMode,{children:a(Z,{})}),document.getElementById("root"));
