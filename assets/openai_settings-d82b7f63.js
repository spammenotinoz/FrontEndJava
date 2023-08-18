import{P as ee,Q as ne,R as te,m as ae,c as se}from"./index-0ad4123e.js";import{d as O,Q as l,R as L,S as c,$ as oe,r as d,e as z,w as le,X as a,V as t,c as _,Y as i,H as F,U as p,a4 as ie,F as I,Z as _e,l as ce}from"./vue-ed5b065f.js";import{_ as ue}from"./OpenaiWebPluginDetailCard.vue_vue_type_script_setup_true_lang-8a4cfd96.js";import{C as re,a2 as de,p as pe,a3 as me,Q as fe,N as ge,b as ve,R as he,L as we,a4 as xe,t as ye,_ as be,h as Ce,G as $e,o as T,V as Se,U as ke}from"./naive_ui-22e043f0.js";const Pe={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},ze=c("path",{d:"M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0c.41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z",fill:"currentColor"},null,-1),Le=[ze],Ve=O({name:"SearchRound",render:function(h,w){return l(),L("svg",Pe,Le)}}),Ue={class:"flex flex-row lt-sm:flex-col lt-sm:space-y-2 justify-between items-center mb-3"},Be={key:2},Ne={class:"flex flex-wrap gap-3"},Oe={class:"flex flex-col gap-4 rounded border"},Re={class:"flex gap-4"},Ae={class:"flex min-w-0 flex-col items-start justify-between"},We={class:"max-w-full truncate text-lg leading-6"},je={class:"flex flex-row space-x-4"},De={class:"flex flex-col w-full items-center mt-4"},Me=O({__name:"OpenaiWebPluginSetting",setup(R){const{width:h}=ee(),{t:w}=oe(),V=re(),x=d([]),y=d(!0),m=d(null),U=d(!1),b=d(1),B=z(()=>Math.floor((h.value-24)/304)*3),f=d("all"),r=d(""),A=z(()=>{let e=x.value;return f.value==="newly_added"?e=e.filter(n=>{var s;return((s=n.categories)==null?void 0:s.findIndex(u=>u.id==="newly_added"))!=-1}):f.value==="most_popular"?e=e.filter(n=>{var s;return((s=n.categories)==null?void 0:s.findIndex(u=>u.id==="most_popular"))!=-1}):f.value==="installed"&&(e=e.filter(n=>{var s;return(s=n.user_settings)==null?void 0:s.is_installed})),r.value.trim()!==""&&(e=e.filter(n=>{var s,u,C,$,S,k,P,g;return((u=(s=n.manifest)==null?void 0:s.name_for_human)==null?void 0:u.toLowerCase().includes(r.value.toLowerCase()))||(($=(C=n.manifest)==null?void 0:C.name_for_model)==null?void 0:$.toLowerCase().includes(r.value.toLowerCase()))||((k=(S=n.manifest)==null?void 0:S.description_for_human)==null?void 0:k.toLowerCase().includes(r.value.toLowerCase()))||((g=(P=n.manifest)==null?void 0:P.name_for_model)==null?void 0:g.toLowerCase().includes(r.value.toLowerCase()))})),e}),q=z(()=>Math.ceil(A.value.length/B.value)),E=z(()=>{const e=(b.value-1)*B.value,n=e+B.value;return A.value.slice(e,n)});le(f,()=>{b.value=1});function W(e,n){e&&(m.value=e,te(e,{is_installed:n}).then(()=>{ae.success(w(n?"tips.enablePluginSuccess":"tips.disablePluginSuccess")),j()}).finally(()=>{m.value=null}))}function j(){ne().then(e=>{x.value=e.data,U.value=!0}).catch(()=>{U.value=!1}).finally(()=>{y.value=!1})}function G(e){var n;se.info({title:(n=e.manifest)==null?void 0:n.name_for_human,style:{width:"630px"},content:()=>ce(ue,{plugin:e})})}return j(),(e,n)=>{const s=de,u=pe,C=me,$=fe,S=ge,k=ve,P=he,g=we,H=be,N=Ce,X=$e,Y=T,Z=xe,J=ye;return l(),L(I,null,[c("div",Ue,[a(C,{value:f.value,"onUpdate:value":n[0]||(n[0]=o=>f.value=o),name:"radiogroup"},{default:t(()=>[a(u,null,{default:t(()=>[a(s,{value:"all"},{default:t(()=>[_(i(e.$t("commons.all")),1)]),_:1}),a(s,{value:"most_popular"},{default:t(()=>[_(i(e.$t("commons.most_popular")),1)]),_:1}),a(s,{value:"newly_added"},{default:t(()=>[_(i(e.$t("commons.newly_added")),1)]),_:1}),a(s,{value:"installed"},{default:t(()=>[_(i(e.$t("commons.enabled")),1)]),_:1})]),_:1})]),_:1},8,["value"]),a($,null,{default:t(()=>[_(i(e.$t("desc.openai_web_installed_plugins")),1)]),_:1}),a(k,{value:r.value,"onUpdate:value":n[1]||(n[1]=o=>r.value=o),placeholder:"Search",clearable:"",class:"w-full",style:{width:"200px"}},{suffix:t(()=>[a(S,null,{default:t(()=>[a(F(Ve))]),_:1})]),_:1},8,["value"])]),a(J,{class:"p-3"},{default:t(()=>[y.value?(l(),p(g,{key:0,class:"h-full flex justify-center",style:ie({backgroundColor:F(V).cardColor}),description:e.$t("tips.loading")},{icon:t(()=>[a(P,{size:"medium"})]),_:1},8,["style","description"])):U.value?(l(),L("div",Be,[c("div",Ne,[(l(!0),L(I,null,_e(E.value,(o,K)=>(l(),p(Y,{key:K,class:"w-68 h-45"},{default:t(()=>{var D,M,Q;return[c("div",Oe,[c("div",Re,[(l(),p(H,{key:`${o.id}-logo`,size:64,src:(D=o.manifest)==null?void 0:D.logo_url},null,8,["src"])),c("div",Ae,[c("div",We,i((M=o.manifest)==null?void 0:M.name_for_human),1),c("div",je,[(Q=o.user_settings)!=null&&Q.is_installed?(l(),p(N,{key:0,disabled:m.value,loading:m.value==o.id,type:"primary",size:"small",onClick:v=>W(o.id,!1)},{default:t(()=>[_(i(e.$t("commons.disable")),1)]),_:2},1032,["disabled","loading","onClick"])):(l(),p(N,{key:1,disabled:m.value,loading:m.value==o.id,size:"small",onClick:v=>W(o.id,!0)},{default:t(()=>[_(i(e.$t("commons.enable")),1)]),_:2},1032,["disabled","loading","onClick"])),a(N,{text:"",onClick:v=>G(o)},{default:t(()=>[_(i(e.$t("commons.detail")),1)]),_:2},1032,["onClick"])])])]),a(X,{"line-clamp":3},{default:t(()=>{var v;return[_(i((v=o.manifest)==null?void 0:v.description_for_human),1)]}),_:2},1024)])]}),_:2},1024))),128))])])):(l(),p(g,{key:1,description:e.$t("commons.noPluginsAvailable")},null,8,["description"])),c("div",De,[a(Z,{page:b.value,"onUpdate:page":n[2]||(n[2]=o=>b.value=o),simple:"","page-count":q.value},null,8,["page","page-count"])])]),_:1})],64)}}}),qe=O({__name:"openai_settings",setup(R){return(h,w)=>{const V=Se,x=ke,y=T;return l(),p(y,{class:"mb-4 h-full"},{default:t(()=>[a(x,{class:"-mt-2","default-value":"pluginSettings",size:"large",animated:"","pane-wrapper-style":"margin: 0 -4px","pane-style":"padding-left: 4px; padding-right: 4px; box-sizing: border-box;"},{default:t(()=>[a(V,{name:"pluginSettings",tab:h.$t("commons.pluginSettings")},{default:t(()=>[a(Me)]),_:1},8,["tab"])]),_:1})]),_:1})}}});export{qe as default};
//# sourceMappingURL=openai_settings-d82b7f63.js.map
