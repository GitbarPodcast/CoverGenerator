import{j as I,s as T,C as E,u,r as N,a as B,R as M,b as g}from"./vendor.2adb307f.js";const L=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}};L();const e={DARK:"#1E293B",GRAY:"#94A3B8",WHITE:"#F8FAFC",ORCHID:{MAIN:"#C084FC",DARK:"#9D89C8"},ROSE:{MAIN:"#EB6173",DARK:"#E0B0B0"},ACQUAMARINA:{MAIN:"#00C9A7",DARK:"#00A27C"},SKY:{MAIN:"#00C9FF",DARK:"#00A2E8"},BUTTER:{MAIN:"#FFCA00",DARK:"#E0B000"},LIME_PUNCH:{MAIN:"#A7FF00",DARK:"#7CDE00"},CLASSIC_BLUE:{MAIN:"#00B0FF",DARK:"#0080E8"},CORAL:{MAIN:"#FF7F00",DARK:"#E06600"}},l={ORCHID:{BACKGROUND:e.DARK,TEXT:e.ORCHID.DARK,SECONDARY_TEXT:e.WHITE,TERTIARY_TEXT:e.GRAY,IMAGE_BG:e.ORCHID.MAIN,BLOB_BG:e.ORCHID.MAIN},ROSE:{BACKGROUND:e.DARK,TEXT:e.ROSE.DARK,SECONDARY_TEXT:e.WHITE,TERTIARY_TEXT:e.GRAY,IMAGE_BG:e.ROSE.MAIN,BLOB_BG:e.ROSE.MAIN},ACQUAMARINA:{BACKGROUND:e.DARK,TEXT:e.ACQUAMARINA.DARK,SECONDARY_TEXT:e.WHITE,TERTIARY_TEXT:e.GRAY,IMAGE_BG:e.ACQUAMARINA.MAIN,BLOB_BG:e.ACQUAMARINA.MAIN},SKY:{BACKGROUND:e.DARK,TEXT:e.SKY.DARK,SECONDARY_TEXT:e.WHITE,TERTIARY_TEXT:e.GRAY,IMAGE_BG:e.SKY.MAIN,BLOB_BG:e.SKY.MAIN},BUTTER:{BACKGROUND:e.DARK,TEXT:e.BUTTER.DARK,SECONDARY_TEXT:e.WHITE,TERTIARY_TEXT:e.GRAY,IMAGE_BG:e.BUTTER.MAIN,BLOB_BG:e.BUTTER.MAIN},CLASSIC_BLUE:{BACKGROUND:e.DARK,TEXT:e.WHITE,SECONDARY_TEXT:e.CLASSIC_BLUE.DARK,TERTIARY_TEXT:e.GRAY,IMAGE_BG:e.CLASSIC_BLUE.MAIN,BLOB_BG:e.CLASSIC_BLUE.MAIN},LIME_PUNCH:{BACKGROUND:e.DARK,TEXT:e.WHITE,SECONDARY_TEXT:e.LIME_PUNCH.DARK,TERTIARY_TEXT:e.GRAY,IMAGE_BG:e.LIME_PUNCH.MAIN,BLOB_BG:e.LIME_PUNCH.MAIN},CORAL:{BACKGROUND:e.DARK,TEXT:e.WHITE,SECONDARY_TEXT:e.CORAL.DARK,TERTIARY_TEXT:e.GRAY,IMAGE_BG:e.CORAL.MAIN,BLOB_BG:e.CORAL.MAIN}},O={TL:{},TR:{},BL:{},BR:{}};var p="/assets/bg.0af0b0ae.png";const A=I.exports.jsx,f=I.exports.jsxs,_=T.div`
  height: 100%;
  flex-grow: 1;
  flex-shrink: 1;
  ${({theme:n,clipPath:o,image:i})=>E`
    clip-path: path("${o}");
    background: url(${i}), url(${p}), ${l[n].IMAGE_BG};
  `}
  background-blend-mode: luminosity, screen, normal;
  background-size: cover, cover, cover;
  background-position: center, center, center;
  box-sizing: border-box;
`;function D({theme:n,image:o,variant:i}){const[s,{width:t,height:r}]=u(),a=Math.min(t,r)*.1,c=Math.round(t*.18),R={TL:`M ${c} 0 L ${t} 0 L ${t} ${r} L 0 ${r} Z`,TR:`M 0 0 L ${t-c} 0 L ${t} ${r} L 0 ${r} Z`,BL:`M 0 0 L ${t} 0 L ${t} ${r} L ${c} ${r} Z`,BR:`M 0 0 L ${t} 0 L ${t-c} ${r} L 0 ${r} Z`},h=N(R[i],a,0).path;return B.exports.useLayoutEffect(()=>{window.dispatchEvent(new Event("resize"))},[t,r]),A(_,{ref:s,theme:n,image:o,clipPath:h})}const $={TL:"right",TR:"right",BL:"left",BR:"left"},x={TL:"left",TR:"right",BL:"left",BR:"right"},v={TL:"column",TR:"column",BL:"column-reverse",BR:"column-reverse"},S=T.div`
  display: flex;
  flex-direction: column-reverse;
  ${({variant:n})=>E`
    flex-direction: ${v[n]};
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
  ${({variant:n})=>E`
    text-align: ${$[n]};
  `};
`,K=T.div`
  font-family: outfit;
  font-weight: bold;
  text-transform: uppercase;
  ${({theme:n,fontSize:o})=>E`
    line-height: ${o*.8}px;
    font-size: ${o}px;
    color: ${l[n].TEXT};
  `};
`,Y=T.div`
  font-family: outfit;
  font-weight: bold;
  text-transform: uppercase;
  ${({theme:n,fontSize:o})=>E`
    line-height: ${o*.8}px;
    font-size: ${o}px;
    color: ${l[n].SECONDARY_TEXT};
  `};
`,y=T.div`
  font-family: outfit;
  font-weight: bold;
  text-transform: uppercase;
  color: #f8fafc;
  ${({theme:n,fontSize:o})=>E`
    line-height: ${o*1.6}px;
    font-size: ${o}px;
    color: ${l[n].TERTIARY_TEXT};
  `};
`,b=T.div`
  font-family: outfit;
  font-weight: bold;
  text-transform: uppercase;
  ${({theme:n,fontSize:o,variant:i})=>E`
    text-align: ${x[i]};
    font-size: ${o}px;
    color: ${l[n].TERTIARY_TEXT};
  `};
`,U=10,X=1.3,w=.3,F=.8;function H({name:n,surname:o,company:i,theme:s,episodeNumber:t,variant:r}){const[a,{width:c,height:R}]=u(),h=Math.round(R/Math.max(n.length,o.length,U)*X),C=h*w,m=Math.round(c/Math.max(String(t).length))*F;return B.exports.useLayoutEffect(()=>{window.dispatchEvent(new Event("resize"))},[c,R]),f(S,{ref:a,variant:r,children:[f(G,{variant:r,children:[A(K,{theme:s,fontSize:h,children:n}),A(Y,{theme:s,fontSize:h,children:o}),A(y,{theme:s,fontSize:C,children:`<${i}>`})]}),f(b,{theme:s,fontSize:m,variant:r,children:["#",t]})]})}const z={TL:"row-reverse",TR:"row",BL:"row-reverse",BR:"row"},k=T.div`
  height: 100%;
  position: relative;
  display: flex;
  padding: 4%;
  box-sizing: border-box;
  ${({theme:n,variant:o})=>E`
    background: ${l[n].BACKGROUND};
    flex-direction: ${z[o]};
  `};
`,P=(n,o)=>{const i=Object.keys(O);return(n.length>o.length?[i[0],i[2]]:[i[1],i[3]])[Math.floor(Math.random()*2)]},W=()=>{const n=Object.keys(l);return n[Math.floor(Math.random()*n.length)]};function j({theme:n,name:o,surname:i,company:s,episodeNumber:t,image:r,variant:a}){const c=a||P(o,i),R=n||W();return f(k,{theme:R,variant:c,children:[A(D,{theme:R,image:r,variant:c}),A(H,{name:o,surname:i,company:s,theme:R,episodeNumber:t,variant:c})]})}let d=window.__COVER__;function Z(){return A("div",{style:{height:"100vh",width:"100vw",display:"flex",flexWrap:"wrap",flexDirection:"column",flexShrink:1},children:A("div",{style:{height:"50vh",width:"50vw"},children:A("div",{style:{height:"100vh",width:"100vw"},children:A(j,{name:d.name,surname:d.surname,image:d.image,episodeNumber:d.episodeNumber,company:d.company,variant:d.variant,theme:d.theme})})})})}M.render(A(g.StrictMode,{children:A(Z,{})}),document.getElementById("root"));
