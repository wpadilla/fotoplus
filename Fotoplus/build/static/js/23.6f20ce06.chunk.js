(this.webpackJsonpFotoplus=this.webpackJsonpFotoplus||[]).push([[23],{683:function(e,t,a){"use strict";a.r(t);var l=a(478),c=a(0),n=a.n(c),r=a(101),m=a(143),s=a(485),o=a.n(s),i=a(144),u=a(63),d=a(477),E=a(65),p=a(481),b=a(482);t.default=Object(u.connect)((function(e){return{cartItems:e.cartData,currency:e.currencyData}}),(function(e){return{addToCart:function(t,a,l){e(Object(E.e)(t,a,l))},decreaseQuantity:function(t,a){e(Object(E.g)(t,a))},deleteFromCart:function(t,a){e(Object(E.i)(t,a))},deleteAllFromCart:function(t){e(Object(E.h)(t))}}}))((function(e){var t=e.location,a=e.cartItems,s=e.currency,u=e.decreaseQuantity,N=e.addToCart,v=e.deleteFromCart,y=e.deleteAllFromCart,g=Object(c.useState)(1),h=Object(l.a)(g,1)[0],C=Object(m.useToasts)().addToast,f=t.pathname,x=0;return n.a.createElement(c.Fragment,null,n.a.createElement(o.a,null,n.a.createElement("title",null,"Fotoplus | Carrito"),n.a.createElement("meta",{name:"description",content:"Fotoplus - La vida es para imprimirla."})),n.a.createElement(i.BreadcrumbsItem,{to:"/"},"Inicio"),n.a.createElement(i.BreadcrumbsItem,{to:""+f},"Carrito"),n.a.createElement(p.a,{headerTop:"visible"},n.a.createElement(b.a,null),n.a.createElement("div",{className:"cart-main-area pt-90 pb-100"},n.a.createElement("div",{className:"container"},a&&a.length>=1?n.a.createElement(c.Fragment,null,n.a.createElement("h3",{className:"cart-page-title"},"Tus items"),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement("div",{className:"table-content table-responsive cart-table-content"},n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Imagen"),n.a.createElement("th",null,"Nombre del producto"),n.a.createElement("th",null,"Precio unitario"),n.a.createElement("th",null,"Cantidad"),n.a.createElement("th",null,"Subtotal")),n.a.createElement("th",null,"Acci\xf3n")),n.a.createElement("tbody",null,a.map((function(e,t){var a=Object(d.a)(e.price,e.discount),l=(e.price*s.currencyRate).toFixed(2),m=(a*s.currencyRate).toFixed(2);return x+=null!=a?m*e.quantity:l*e.quantity,n.a.createElement("tr",{key:t},n.a.createElement("td",{className:"product-thumbnail"},n.a.createElement(r.b,{to:"/product/"+e.id},n.a.createElement("img",{className:"img-fluid",src:""+e.image[0],alt:""}))),n.a.createElement("td",{className:"product-name"},n.a.createElement(r.b,{to:"/product/"+e.id},e.name),e.selectedProductColor&&e.selectedProductSize?n.a.createElement("div",{className:"cart-item-variation"},n.a.createElement("span",null,"Color: ",e.selectedProductColor),n.a.createElement("span",null,"Size: ",e.selectedProductSize)):""),n.a.createElement("td",{className:"product-price-cart"},null!==a?n.a.createElement(c.Fragment,null,n.a.createElement("span",{className:"amount old"},s.currencySymbol+l),n.a.createElement("span",{className:"amount"},s.currencySymbol+m)):n.a.createElement("span",{className:"amount"},s.currencySymbol+l)),n.a.createElement("td",{className:"product-quantity"},n.a.createElement("div",{className:"cart-plus-minus"},n.a.createElement("button",{className:"dec qtybutton",onClick:function(){return u(e,C)}},"-"),n.a.createElement("input",{className:"cart-plus-minus-box",type:"text",value:e.quantity,readOnly:!0}),n.a.createElement("button",{className:"inc qtybutton",onClick:function(){return N(e,C,h)},disabled:void 0!==e&&e.quantity&&e.quantity>=Object(E.f)(e,e.selectedProductColor,e.selectedProductSize)},"+"))),n.a.createElement("td",{className:"product-subtotal"},null!==a?s.currencySymbol+(m*e.quantity).toFixed(2):s.currencySymbol+(l*e.quantity).toFixed(2)),n.a.createElement("td",{className:"product-remove"},n.a.createElement("button",{onClick:function(){return v(e,C)}},n.a.createElement("i",{className:"fa fa-times"}))))}))))))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"cart-shiping-update-wrapper"},n.a.createElement("div",{className:"cart-shiping-update"},n.a.createElement(r.b,{to:"/shop"},"Continuar Comprando")),n.a.createElement("div",{className:"cart-clear"},n.a.createElement("button",{onClick:function(){return y(C)}},"Limpiar Carrito"))))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-4 col-md-6"},n.a.createElement("div",{className:"cart-tax"},n.a.createElement("div",{className:"title-wrap"},n.a.createElement("h4",{className:"cart-bottom-title section-bg-gray"},"Env\xedo e impuesto estimado")),n.a.createElement("div",{className:"tax-wrapper"},n.a.createElement("p",null,"Ingrese su destino para obtener un precio estimado de env\xedo."),n.a.createElement("div",{className:"tax-select-wrapper"},n.a.createElement("div",{className:"tax-select"},n.a.createElement("label",null,"* Pais"),n.a.createElement("select",{className:"email s-email s-wid"},n.a.createElement("option",null,"Per\xfa"))),n.a.createElement("div",{className:"tax-select"},n.a.createElement("label",null,"* Ciudad"),n.a.createElement("select",{className:"email s-email s-wid"},n.a.createElement("option",null,"Lima"),n.a.createElement("option",null,"Ica"),n.a.createElement("option",null,"Trujillo"),n.a.createElement("option",null,"Arequipa"),n.a.createElement("option",null,"Cusco"))),n.a.createElement("div",{className:"tax-select"},n.a.createElement("label",null,"Codigo Postal"),n.a.createElement("input",{type:"text"})),n.a.createElement("button",{className:"cart-btn-2",type:"submit"},"Obten un estimado"))))),n.a.createElement("div",{className:"col-lg-4 col-md-6"},n.a.createElement("div",{className:"discount-code-wrapper"},n.a.createElement("div",{className:"title-wrap"},n.a.createElement("h4",{className:"cart-bottom-title section-bg-gray"},"Usar codigo de cupon")),n.a.createElement("div",{className:"discount-code"},n.a.createElement("p",null,"Ingresa tu cupon si tienes uno."),n.a.createElement("form",null,n.a.createElement("input",{type:"text",required:!0,name:"name"}),n.a.createElement("button",{className:"cart-btn-2",type:"submit"},"Aplicar Cupon"))))),n.a.createElement("div",{className:"col-lg-4 col-md-12"},n.a.createElement("div",{className:"grand-totall"},n.a.createElement("div",{className:"title-wrap"},n.a.createElement("h4",{className:"cart-bottom-title section-bg-gary-cart"},"Total del carrito")),n.a.createElement("h5",null,"Productos totales"," ",n.a.createElement("span",null,s.currencySymbol+x.toFixed(2))),n.a.createElement("h4",{className:"grand-totall-title"},"Total"," ",n.a.createElement("span",null,s.currencySymbol+x.toFixed(2))),n.a.createElement(r.b,{to:"/checkout"},"Proceder con compra"))))):n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"item-empty-area text-center"},n.a.createElement("div",{className:"item-empty-area__icon mb-30"},n.a.createElement("i",{className:"pe-7s-cart"})),n.a.createElement("div",{className:"item-empty-area__text"},"No tienes items en el carrito ",n.a.createElement("br",null)," ",n.a.createElement(r.b,{to:"/shop"},"Compra Ahora")))))))))}))}}]);
//# sourceMappingURL=23.6f20ce06.chunk.js.map