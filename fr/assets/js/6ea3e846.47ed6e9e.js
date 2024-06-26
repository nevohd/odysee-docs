"use strict";(self.webpackChunkodysee_docs=self.webpackChunkodysee_docs||[]).push([[2271],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(n),h=o,y=p["".concat(c,".").concat(h)]||p[h]||l[h]||a;return n?r.createElement(y,s(s({ref:t},u),{},{components:n})):r.createElement(y,s({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var d=2;d<a;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9436:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(7294),o=n(6010),a=n(9960);n(9471);const s={fungusCardContainer:"fungusCardContainer_BJ8Z",fungusCard:"fungusCard_V18C",rowCard:"rowCard_Y0Fj",fungusImage:"fungusImage_LcF9"};n(7814);function i(e){let{href:t,children:n,classes:i}=e;return r.createElement(a.Z,{href:t,className:(0,o.Z)("card padding--lg",s.fungusCardContainer,i)},n)}function c(e){return r.createElement("div",{className:(0,o.Z)("col col--"+e.size+" margin-bottom--lg",s.cardColumn),style:e.style},r.createElement(i,{classes:(0,o.Z)(s.rowCard)},r.createElement("img",{src:"/img/LadyFungus/g_192x192p_RGB_LadyFungus_Happy.png",className:s.fungusImage}),r.createElement("div",{className:s.fungusCard},e.children)))}},2334:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=n(7462),o=(n(7294),n(3905)),a=n(9436);const s={slug:"/unexpected-errors",sidebar_label:"Unexpected errors",sidebar_position:99,title:"Unexpected errors",description:"Some unexpected errors when using Odysee.",image:"https://i.imgur.com/FpXwZoM.jpg",keywords:["odysee","errors","unexpected errors","fix errors"],displayed_sidebar:"helphub"},i="Unexpected errors",c={unversionedId:"unexpected-errors",id:"unexpected-errors",title:"Unexpected errors",description:"Some unexpected errors when using Odysee.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/unexpected-errors.mdx",sourceDirName:".",slug:"/unexpected-errors",permalink:"/fr/unexpected-errors",draft:!1,editUrl:"https://github.com/OdyseeTeam/odysee-docs/edit/main/i18n/fr/docusaurus-plugin-content-docs/current/unexpected-errors.mdx",tags:[],version:"current",sidebarPosition:99,frontMatter:{slug:"/unexpected-errors",sidebar_label:"Unexpected errors",sidebar_position:99,title:"Unexpected errors",description:"Some unexpected errors when using Odysee.",image:"https://i.imgur.com/FpXwZoM.jpg",keywords:["odysee","errors","unexpected errors","fix errors"],displayed_sidebar:"helphub"},sidebar:"helphub",previous:{title:"Assets",permalink:"/fr/assets"},next:{title:"Payments Chart",permalink:"/fr/payments-chart"}},d={},u=[{value:"Your channel is not a candidate for sync",id:"your-channel-is-not-a-candidate-for-sync",level:2},{value:"Channel connected to a different account",id:"channel-connected-to-a-different-account",level:2},{value:"Error loading content",id:"error-loading-content",level:2}],l={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"unexpected-errors"},"Unexpected errors"),(0,o.kt)(a.Z,{size:"12",mdxType:"FungusCard"},"Hello, it's me, again, ",(0,o.kt)("b",null,"Lady Fungus"),". First of all, I'm sorry that you had a different experience on Odysee with some unexpected errors. Here you can find some of the errors that should not be frequent, but that will help you solve it. If you do not find any unexpected errors in this documentation that are happening to you, please email us at hello@odysee.com."),(0,o.kt)("h2",{id:"your-channel-is-not-a-candidate-for-sync"},"Your channel is not a candidate for sync"),(0,o.kt)("p",null,"If you are trying to sync your YouTube channel to Odysee and the error: ",(0,o.kt)("b",null,'"Your channel is not a candidate for sync"')," is displayed, it is possible that the channel needs some of the minimum requirements to sync. If the channel meets the requirements but still cannot sync, please email us."),(0,o.kt)("p",null,"Visit the ",(0,o.kt)("a",{parentName:"p",href:"https://help.odysee.tv/category-syncprogram/"},"Requirements & Limits")," page in the documentation."),(0,o.kt)("h2",{id:"channel-connected-to-a-different-account"},"Channel connected to a different account"),(0,o.kt)("p",null,'If you are trying to sync a YouTube channel to Odysee and the message, "the channel is connected to a different account," is displayed, you may:'),(0,o.kt)("p",null,"a. The account has been deleted with the YouTube channel connected to that account, but the channel was not synced yet. You will need to send an email to try to fix it.\nb. The channel was synced with a different account but you tried to sync it again. Sorry, it is not possible to sync the channel to another account if it has already been synced.\nc. The channel is synced to another account but the channel was deleted. In these cases it is possible that the channel cannot be synchronized again on another account.\nd. Trying to sync a YouTube channel to a manually created channel in Odysee. Sorry, the content transfer will be to the channel created automatically by synchronization. However, you can edit a video on your Odysee channel and save it to another channel. Here you can find out how: ",(0,o.kt)("a",{parentName:"p",href:"https://help.odysee.tv/category-uploading/category-fileuploads/settings/"},"Channel Selection")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If you think your case is different from the errors mentioned here, you can send us an email. We will be happy to review your case.")),(0,o.kt)("h2",{id:"error-loading-content"},"Error loading content"),(0,o.kt)("p",null,"In some cases unexpected error messages may appear when loading content. Some of these unexpected errors can be fixed by making some changes to the publication."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("b",null,'"Insufficient balance"'),". The message suggests that you do not have enough Credits to publish or to Boost content. Please check that you have sufficient Credits from the wallet page in the immediate spending balance section. Check that your post does not exceed the amount of Credits you have in your wallet. If you need more Credits for immediate spending, you can edit published content or revoke Boosts from transactions on the wallet page."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("b",null,'"The transaction was rejected by network rules. TX rejected: script size (number) exceeds limit."')," You may have exceeded the number of characters in your content description. You will have to edit the number of characters and try to upload the content again."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("b",null,'"The media could not be loaded, either because the server or network failed or because the format is not supported."')," It is possible that you have uploaded a video with HEVC(H.265) encoding or some other unsupported codec. We currently do not have automatic transcoding upon upload, so videos are published in the original format. We recommend using H264 video encoding as it is supported by virtually all browsers and devices. You can find our short guide on how to do it from here: [Encoding Videos](https://help.odysee.tv/category-uploading/category-fileuploads/encoding/)"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("b",null,'"There was a network error, but the publish may have been completed. Wait a few minutes, then check your Uploads or Wallet page to confirm."')," This unexpected error may be caused by an interruption in the content loading per connection, but it may have been published successfully. You can check it by visiting the Uploads page.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If you do not find an unexpected error here, it may be a temporary interruption of some service. You can also write to us at ",(0,o.kt)("a",{parentName:"p",href:"mailto:hello@odysee.com"},"hello@odysee.com")," and share more details about the error you are experiencing. Some screenshots may help too.")))}p.isMDXComponent=!0}}]);