(this.webpackJsonpFotoplus=this.webpackJsonpFotoplus||[]).push([[22],{479:function(e,a,t){"use strict";var r=t(0),c=t.n(r);a.a=function(e){for(var a=e.ratingValue,t=[],n=0;n<5;n++)t.push(c.a.createElement("i",{className:"fa fa-star-o",key:n}));if(a&&a>0)for(var l=0;l<=a-1;l++)t[l]=c.a.createElement("i",{className:"fa fa-star-o yellow",key:l});return c.a.createElement(r.Fragment,null,t)}},685:function(e,a,t){"use strict";t.r(a);var r=t(0),c=t.n(r),n=t(101),l=t(143),m=t(485),o=t.n(m),s=t(144),i=t(63),u=t(65),d=t(102),p=t(477),E=t(481),N=t(482),b=t(479);a.default=Object(i.connect)((function(e){return{cartItems:e.cartData,compareItems:e.compareData,currency:e.currencyData}}),(function(e){return{addToCart:function(a,t,r){e(Object(u.e)(a,t,r))},deleteFromCompare:function(a,t){e(Object(d.d)(a,t))}}}))((function(e){var a=e.location,t=e.cartItems,m=e.compareItems,i=e.addToCart,u=e.deleteFromCompare,d=e.currency,f=a.pathname,v=Object(l.useToasts)().addToast;return c.a.createElement(r.Fragment,null,c.a.createElement(o.a,null,c.a.createElement("title",null,"Fotoplus | Comparar"),c.a.createElement("meta",{name:"description",content:"Fotoplus - La vida es para imprimirla."})),c.a.createElement(s.BreadcrumbsItem,{to:"/"},"Inicio"),c.a.createElement(s.BreadcrumbsItem,{to:""+f},"Comparar"),c.a.createElement(E.a,{headerTop:"visible"},c.a.createElement(N.a,null),c.a.createElement("div",{className:"compare-main-area pt-90 pb-100"},c.a.createElement("div",{className:"container"},m&&m.length>=1?c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"compare-page-content"},c.a.createElement("div",{className:"compare-table table-responsive"},c.a.createElement("table",{className:"table table-bordered mb-0"},c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("th",{className:"title-column"},"Product Info"),m.map((function(e,a){var r=t.filter((function(a){return a.id===e.id}))[0];return c.a.createElement("td",{className:"product-image-title",key:a},c.a.createElement("div",{className:"compare-remove"},c.a.createElement("button",{onClick:function(){return u(e,v)}},c.a.createElement("i",{className:"pe-7s-trash"}))),c.a.createElement(n.b,{to:"/product/"+e.id,className:"image"},c.a.createElement("img",{className:"img-fluid",src:""+e.image[0],alt:""})),c.a.createElement("div",{className:"product-title"},c.a.createElement(n.b,{to:"/product/"+e.id},e.name)),c.a.createElement("div",{className:"compare-btn"},e.affiliateLink?c.a.createElement("a",{href:e.affiliateLink,rel:"noopener noreferrer",target:"_blank"}," ","Buy now"," "):e.variation&&e.variation.length>=1?c.a.createElement(n.b,{to:"".concat("","/product/").concat(e.id)},"Selecciona una opcion"):e.stock&&e.stock>0?c.a.createElement("button",{onClick:function(){return i(e,v)},className:void 0!==r&&r.quantity>0?"active":"",disabled:void 0!==r&&r.quantity>0,title:void 0!==e?"Added to cart":"Add to cart"},void 0!==r&&r.quantity>0?"Added":"Add to cart"):c.a.createElement("button",{disabled:!0,className:"active"},"Agotado")))}))),c.a.createElement("tr",null,c.a.createElement("th",{className:"title-column"},"Price"),m.map((function(e,a){var t=Object(p.a)(e.price,e.discount),n=(e.price*d.currencyRate).toFixed(2),l=(t*d.currencyRate).toFixed(2);return c.a.createElement("td",{className:"product-price",key:a},null!==t?c.a.createElement(r.Fragment,null,c.a.createElement("span",{className:"amount old"},d.currencySymbol+n),c.a.createElement("span",{className:"amount"},d.currencySymbol+l)):c.a.createElement("span",{className:"amount"},d.currencySymbol+n))}))),c.a.createElement("tr",null,c.a.createElement("th",{className:"title-column"},"Descripci\xf3n"),m.map((function(e,a){return c.a.createElement("td",{className:"product-desc",key:a},c.a.createElement("p",null,e.shortDescription?e.shortDescription:"N/A"))}))),c.a.createElement("tr",null,c.a.createElement("th",{className:"title-column"},"Clasificaci\xf3n"),m.map((function(e,a){return c.a.createElement("td",{className:"product-rating",key:a},c.a.createElement(b.a,{ratingValue:e.rating}))}))))))))):c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"item-empty-area text-center"},c.a.createElement("div",{className:"item-empty-area__icon mb-30"},c.a.createElement("i",{className:"pe-7s-shuffle"})),c.a.createElement("div",{className:"item-empty-area__text"},"No se encontraron elementos en comparar ",c.a.createElement("br",null)," ",c.a.createElement(n.b,{to:"/shop"},"Agregar art\xedculos")))))))))}))}}]);
//# sourceMappingURL=22.1684c9c2.chunk.js.map