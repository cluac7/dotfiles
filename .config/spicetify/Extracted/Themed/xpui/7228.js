"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[7228],{97228:(e,a,t)=>{t.r(a),t.d(a,{DsaModal:()=>ne});var n=t(30758),i=t(41978),s=t(58184),r=t(39029),l=t(90441),d=t(88989),o=t(8539),c=t(53634),u=t(16743),m=t(3532),v=t(82686),g=t(67939),E=t(39876),f=t(8530);const h="vkMQw77rXE4cp8xsAdzl",N="emw6kR941D2wReukhCAJ";var x=t(86070),T=function(e){var a=e.advertiser,t=e.legalEntityName,n=((0,v.L)()||{item:null}).item,i=n&&(0,E.N)(n)?null==n?void 0:n.images:void 0,r=(0,f.h)(i);return(0,x.jsxs)("div",{className:h,children:[r&&(0,x.jsx)(g._,{className:N,src:r,loading:"lazy"}),(0,x.jsx)(s.E,{variant:"bodyMediumBold","aria-label":a,children:a}),t&&(0,x.jsx)(s.E,{variant:"bodySmall",semanticColor:"textSubdued","aria-label":t,children:t})]})},R=(t(82368),t(83603),t(10565),t(62980),t(58470),t(75231),t(76133),t(2795),t(96588)),p=t(48878),b=t(23105),y=(t(63516),function(e){return e[e.UNKNOWN=0]="UNKNOWN",e[e.AGE=1]="AGE",e[e.GEO=2]="GEO",e[e.GENDER=3]="GENDER",e[e.INTEREST=4]="INTEREST",e[e.UNRECOGNIZED=-1]="UNRECOGNIZED",e}({}));var j={fromJSON:function(e){return{targetingTypes:globalThis.Array.isArray(null==e?void 0:e.targetingTypes)?e.targetingTypes.map((function(e){return function(e){switch(e){case 0:case"UNKNOWN":return y.UNKNOWN;case 1:case"AGE":return y.AGE;case 2:case"GEO":return y.GEO;case 3:case"GENDER":return y.GENDER;case 4:case"INTEREST":return y.INTEREST;default:return y.UNRECOGNIZED}}(e)})):[],legalEntityName:A(e.legalEntityName)?globalThis.String(e.legalEntityName):"",showTailoredAdsSection:A(e.showTailoredAdsSection)?Boolean(e.showTailoredAdsSection):void 0}},toJSON:function(e){var a,t={};return null!==(a=e.targetingTypes)&&void 0!==a&&a.length&&(t.targetingTypes=e.targetingTypes.map((function(e){return function(e){switch(e){case y.UNKNOWN:return"UNKNOWN";case y.AGE:return"AGE";case y.GEO:return"GEO";case y.GENDER:return"GENDER";case y.INTEREST:return"INTEREST";case y.UNRECOGNIZED:default:return"UNRECOGNIZED"}}(e)}))),""!==e.legalEntityName&&(t.legalEntityName=e.legalEntityName),void 0!==e.showTailoredAdsSection&&(t.showTailoredAdsSection=e.showTailoredAdsSection),t},create:function(e){return j.fromPartial(null!=e?e:{})},fromPartial:function(e){var a,t,n,i={targetingTypes:[],legalEntityName:"",showTailoredAdsSection:void 0};return i.targetingTypes=(null===(a=e.targetingTypes)||void 0===a?void 0:a.map((function(e){return e})))||[],i.legalEntityName=null!==(t=e.legalEntityName)&&void 0!==t?t:"",i.showTailoredAdsSection=null!==(n=e.showTailoredAdsSection)&&void 0!==n?n:void 0,i}};function A(e){return null!=e}const _="khENZvA4G9EjpLQiINss",w="Fu87PEr0tL6oDjmw_X2H";var G=function(e){var a=e.title,t=e.showTitle,n=e.children;return(0,x.jsxs)("section",{className:_,children:[t&&(0,x.jsx)(s.E,{className:w,variant:"bodyMediumBold",as:"h3","aria-label":a,children:a}),n]})},S=t(74004);const I="P9gpV_sgryfUERYOdfor";var O=function(e){var a=e.text,t=e.icon;return(0,x.jsxs)(S.K,{className:I,condensed:!0,children:[t,(0,x.jsx)(s.E,{variant:"bodyMedium","aria-label":a,as:"h4",children:a})]})};const k="FB2PxTNhkGbwFwYI2ufG",C="gZYgXNWbFSAAjLzGhOI9",D="eYxzC4s3Nw68RcbK7xzl",B="QrelMvam4WOTMVaO28Rl",U="_EaBFRLKy0nZJXkiRwlx",M="N77hKGzNc_lKQ5OG1EBN",K="JceC3xibcl3MHVULIK0b",F="Uk72m6OFBBdTZ3RJb0K_",L="IFqCps3krPbH25azco3F";var W=function(e){var a=e.activeTargetingTypes,t=[y.GEO,y.INTEREST].some((function(e){return a.includes(e)}));if(!t)return null;var n=t&&a.some((function(e){return e===y.AGE||e===y.GENDER}));return(0,x.jsx)(G,{title:o.Ru.get("ad-formats.dsa.modal.otherInfo"),showTitle:n,children:(0,x.jsx)(b.b,{className:L,condensedAll:!0,children:a.map((function(e){var a=function(e){switch(e){case y.GEO:return{icon:(0,x.jsx)(R.t,{}),text:o.Ru.get("ad-formats.dsa.modal.targeting.location")};case y.INTEREST:return{icon:(0,x.jsx)(p.T,{}),text:o.Ru.get("ad-formats.dsa.modal.targeting.interests")};default:return null}}(e);return a?(0,x.jsx)(O,{icon:a.icon,text:a.text},e):null}))})})},Z=(t(37015),t(50609)),z=t(87428),J=t(67264),P=t(33716),Y=t(27233),q=t(18428),Q=t(92984);var V=function(e){var a=e.activeTargetingTypes,t=e.item,n=(0,m.vh)(),i=(0,Q.L)().openURLWithSessionTransfer;return[y.AGE,y.GENDER].some((function(e){return a.includes(e)}))?(0,x.jsxs)(G,{title:o.Ru.get("ad-formats.dsa.modal.profileInfo"),showTitle:!0,children:[(0,x.jsx)(b.b,{className:L,condensedAll:!0,style:{marginBlockEnd:J.CD},children:a.map((function(e){var a=function(e){switch(e){case y.AGE:return{icon:(0,x.jsx)(Z.w,{}),text:o.Ru.get("ad-formats.dsa.modal.targeting.age")};case y.GENDER:return{icon:(0,x.jsx)(z.v,{}),text:o.Ru.get("ad-formats.dsa.modal.targeting.gender")};default:return null}}(e);return a?(0,x.jsx)(O,{icon:a.icon,text:a.text},e):null}))}),(0,x.jsx)(s.E,{variant:"bodyMedium",semanticColor:"textSubdued","aria-label":o.Ru.get("ad-formats.dsa.modal.adRelevancyAction"),children:o.Ru.get("ad-formats.dsa.modal.adRelevancyAction")}),(0,x.jsxs)(P.Y,{component:"button","aria-label":"Edit your Spotify profile, link",className:M,semanticColor:"textBrightAccent",onClick:function(){var e,a;i(q.vE),n.send((0,d.m)({ad_id:t.adId,lineitem_id:null===(e=t.metadata)||void 0===e?void 0:e.lineitem_id,creative_id:null===(a=t.metadata)||void 0===a?void 0:a.creative_id,slot:t.slot,event:"event_clicked",reason:"edit_profile",surface:"ad_dsa_view"}))},standalone:!0,children:[(0,x.jsx)(s.E,{variant:"bodyMediumBold",as:"h2",children:o.Ru.get("ad-formats.dsa.modal.editProfile")}),(0,x.jsx)(Y.p,{semanticColor:"textBrightAccent"})]})]}):null},X=function(e){var a=e.item,t=(0,m.vh)(),n=(0,Q.L)().openURLWithSessionTransfer;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("hr",{className:K}),(0,x.jsx)(s.E,{className:F,variant:"titleSmall","aria-label":o.Ru.get("ad-formats.dsa.modal.aboutTailoredAds"),as:"h2",children:o.Ru.get("ad-formats.dsa.modal.aboutTailoredAds")}),(0,x.jsx)(s.E,{variant:"bodyMedium",semanticColor:"textSubdued","aria-label":o.Ru.get("ad-formats.dsa.modal.tailoredAds"),children:o.Ru.get("ad-formats.dsa.modal.tailoredAds")}),(0,x.jsxs)(P.Y,{component:"button","aria-label":"Visit your privacy settings, link",className:M,semanticColor:"textBrightAccent",onClick:function(){var e,i;n("".concat(q.k$,"/#tailored-ads")),t.send((0,d.m)({ad_id:a.adId,creative_id:null===(e=a.metadata)||void 0===e?void 0:e.creative_id,event:"event_clicked",lineitem_id:null===(i=a.metadata)||void 0===i?void 0:i.lineitem_id,reason:"change_preferences",request_id:a.requestId,slot:a.slot,surface:"ad_dsa_view"}))},standalone:!0,children:[(0,x.jsx)(s.E,{variant:"bodyMediumBold",as:"h2",children:o.Ru.get("ad-formats.dsa.modal.privacySetting")}),(0,x.jsx)(Y.p,{semanticColor:"textBrightAccent"})]})]})},H=t(29969),$=t(98866),ee=t(52618),ae=t.n(ee),te=t(47799),ne=function(e){var a=e.item,t=(0,m.vh)(),v=(0,i.wA)(),g=(0,i.d4)((function(e){return e.ui.dsaDialog})).isOpen,E=function(e){var a=(0,n.useState)(null),t=(0,$.A)(a,2),i=t[0],s=t[1],r=(0,n.useState)(!1),l=(0,$.A)(r,2),d=l[0],o=l[1];return(0,n.useEffect)((function(){var a,t=function(){var e=(0,H.A)(ae().mark((function e(a){var t;return ae().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o(!0),e.next=4,te.ZY(a);case 4:t=e.sent,s(j.fromJSON(t)),o(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),o(!1);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(a){return e.apply(this,arguments)}}();null!=e&&null!==(a=e.metadata)&&void 0!==a&&a.lineitem_id&&e.adId&&t({lineitemId:e.metadata.lineitem_id,adId:e.adId})}),[e]),{data:i,loading:d}}(a),f=E.data,h=E.loading;return(0,n.useEffect)((function(){var e,n;t.send((0,d.m)({ad_id:a.adId,creative_id:null===(e=a.metadata)||void 0===e?void 0:e.creative_id,event:"event_viewed",lineitem_id:null===(n=a.metadata)||void 0===n?void 0:n.lineitem_id,reason:"ad_dsa_view",request_id:a.requestId,slot:a.slot,surface:"ad_dsa_view"}))}),[]),(0,x.jsxs)(u.A,{className:k,isOpen:g,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,contentLabel:o.Ru.get("ad-formats.dsa.aboutThisAd"),children:[(0,x.jsx)("div",{className:D,children:(0,x.jsx)(s.E,{"aria-label":o.Ru.get("ad-formats.dsa.aboutThisAd"),variant:"titleMedium",as:"h1",children:o.Ru.get("ad-formats.dsa.aboutThisAd")})}),(0,x.jsx)("hr",{className:K}),(0,x.jsx)("div",{className:C,children:h?(0,x.jsx)("div",{className:B,"data-testid":"loading-indicator",children:(0,x.jsx)(r.I,{size:"large"})}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(T,{advertiser:a.metadata.advertiser,legalEntityName:null==f?void 0:f.legalEntityName}),null!=f&&f.targetingTypes.length?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(s.E,{className:F,variant:"titleSmall",as:"h2","aria-label":o.Ru.get("ad-formats.dsa.modal.adBasedInfoExplanation"),children:o.Ru.get("ad-formats.dsa.modal.adBasedInfoExplanation")}),(0,x.jsx)(V,{item:a,activeTargetingTypes:null==f?void 0:f.targetingTypes}),(0,x.jsx)(W,{item:a,activeTargetingTypes:null==f?void 0:f.targetingTypes})]}):(0,x.jsx)(s.E,{className:F,as:"h2","aria-label":o.Ru.get("ad-formats.dsa.modal.targeting.unknown"),tabIndex:0,children:o.Ru.get("ad-formats.dsa.modal.targeting.unknown")}),(null==f?void 0:f.showTailoredAdsSection)&&(0,x.jsx)(X,{item:a})]})}),(0,x.jsx)("button",{"aria-label":o.Ru.get("close_button_action"),className:U,onClick:function(){v((0,c.ft)())},children:(0,x.jsx)(l.M,{size:"medium",semanticColor:"textBase"})})]})}}}]);
//# sourceMappingURL=7228.js.map