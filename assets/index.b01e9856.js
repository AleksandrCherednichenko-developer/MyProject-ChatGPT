import{B as I,a as v,_ as E,b as f}from"./index.b0ac0555.js";import{_ as p,o as m,c as d,b as n,m as T,r as c,C as b,v as A,D as L,a as u}from"./index.b87d4351.js";import{P}from"./index.b3018c6e.js";const{VITE_API_IMAGE:y}={VITE_API_KEY:"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",VITE_API_CHAT:"https://api.openai.com/v1/chat/completions",VITE_API_TEXT:"https://api.openai.com/v1/completions",VITE_API_IMAGE:"https://api.openai.com/v1/images/generations",VITE_API_MODEL_CHAT:"gpt-3.5-turbo",VITE_API_MODEL_TEXT:"text-davinci-003",VITE_DEFAULT_LOCALE:"en",VITE_FALLBACK_LOCALE:"ru",VITE_SUPPORTED_LOCALES:"en,ru",BASE_URL:"/MyProject-OpenAI/",MODE:"production",DEV:!1,PROD:!0};class C{static async getImage(t){var s;const a=await I.POST({uri:y,body:{prompt:t,n:1,size:"1024x1024"}});return a.status.ok?(s=a.payload)==null?void 0:s.data[0].url:v()}}const x={name:"CloseButton"},V=Object.assign(x,{emits:["close"],setup(i,{emit:t}){return(a,s)=>(m(),d("button",{class:"btn close__btn",onClick:s[0]||(s[0]=l=>t("close"))},[n(T,{name:"close",class:"close__btn-icon"})]))}}),B=p(V,[["__scopeId","data-v-cb1ebdb8"]]);const O={class:"section content-container chat__page"},S={class:"image__full-size"},M=["src"],D={name:"ImagePage"},h=Object.assign(D,{setup(i){const t=c([]),a=c(!1),s=c(!1),l=c(),g=async o=>{if(!o)return;a.value=!0,t.value.push({role:"user",content:o});const e=await C.getImage(o);a.value=!1,e&&t.value.push({role:"assistant",content:e})},r=(o,e=null)=>{s.value=o,l.value=e!=null?e:null};return(o,e)=>(m(),d("section",O,[n(P,{text:"image"}),n(E,{"chat-messages":t.value,loading:a.value,"type-messages":"image",onToggleFullSize:e[0]||(e[0]=_=>r(!0,_))},null,8,["chat-messages","loading"]),n(f,{onSendMessage:e[1]||(e[1]=_=>g(_))}),n(L,{class:A({"background-layout--active":s.value})},{default:b(()=>[u("div",S,[n(B,{onClose:e[2]||(e[2]=_=>r(!1))}),u("img",{src:l.value,alt:"image"},null,8,M)])]),_:1},8,["class"])]))}}),$=p(h,[["__scopeId","data-v-61ef7c64"]]);export{$ as default};
