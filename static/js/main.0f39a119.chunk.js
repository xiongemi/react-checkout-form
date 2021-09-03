(this["webpackJsonpreact-checkout-form"]=this["webpackJsonpreact-checkout-form"]||[]).push([[0],{180:function(e,t,r){},297:function(e,t,r){"use strict";r.r(t);var i,n=r(0),a=r.n(n),o=r(12),c=r.n(o),s=(r(180),r(343)),d=r(344),l=r(49),u=r(46),j=r(15),m=r(337),b=r(346),h=r(140),v=r(300),p=r(349),x=r(55),O=r(350),g=r(338),f=r(348);!function(e){e.Delivery="/delivery",e.Payment="/payment",e.Confirmation="/confirmation"}(i||(i={}));var y,C=r(2),k=function(){var e=Object(p.a)().t,t=Object(j.i)().path,r=Object(n.useState)(0),a=Object(x.a)(r,2),o=a[0],c=a[1];return Object(n.useEffect)((function(){t.includes(i.Delivery)?c(0):t.includes(i.Payment)?c(1):c(2)}),[t]),Object(C.jsxs)(O.a,{alternativeLabel:!0,activeStep:o,children:[Object(C.jsx)(g.a,{children:Object(C.jsx)(f.a,{children:e("checkout.delivery")})},i.Delivery),Object(C.jsx)(g.a,{children:Object(C.jsx)(f.a,{children:e("checkout.payment")})},i.Payment),Object(C.jsx)(g.a,{children:Object(C.jsx)(f.a,{children:e("checkout.confirmation")})},i.Confirmation)]})},F=r(81),N=function(e){return e.checkout},P={getCheckoutState:N,getDeliveryForm:Object(F.a)(N,(function(e){return null===e||void 0===e?void 0:e.deliveryForm})),getPaymentForm:Object(F.a)(N,(function(e){return null===e||void 0===e?void 0:e.paymentForm}))},M=Object(l.b)((function(e){return{deliveryForm:P.getDeliveryForm(e),paymentForm:P.getPaymentForm(e)}}))((function(e){Object(h.a)(e);var t=Object(p.a)().t;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(k,{}),Object(C.jsx)(v.a,{variant:"h3",gutterBottom:!0,children:t("checkout.delivery")}),Object(C.jsx)(v.a,{variant:"h3",gutterBottom:!0,children:t("checkout.payment")})]})})),D=r(303),L=r(342),w=r(157),q=r(94),S=r.n(q),A=r(93),T=r.n(A),z=r(10);!function(e){e.Checkout="/checkout"}(y||(y={}));var W,B,I=r(341),E=r(23),$=function(e){var t=e.formName,r=void 0===t?"address":t,i=e.errors,n=e.touched,a=Object(p.a)().t;return Object(C.jsxs)(I.a,{container:!0,spacing:2,children:[Object(C.jsx)(I.a,{item:!0,xs:12,sm:6,children:Object(C.jsx)(z.a,{component:E.c,label:a("address.firstName"),name:"".concat(r,".firstName"),variant:"outlined",error:(null===n||void 0===n?void 0:n.firstName)&&!!(null===i||void 0===i?void 0:i.firstName),helperText:(null===n||void 0===n?void 0:n.firstName)&&(null===i||void 0===i?void 0:i.firstName),fullWidth:!0})}),Object(C.jsx)(I.a,{item:!0,xs:12,sm:6,children:Object(C.jsx)(z.a,{component:E.c,label:a("address.lastName"),name:"".concat(r,".lastName"),variant:"outlined",error:(null===n||void 0===n?void 0:n.lastName)&&!!(null===i||void 0===i?void 0:i.lastName),helperText:(null===n||void 0===n?void 0:n.lastName)&&(null===i||void 0===i?void 0:i.lastName),fullWidth:!0})}),Object(C.jsx)(I.a,{item:!0,xs:12,children:Object(C.jsx)(z.a,{component:E.c,label:a("address.addressLine1"),name:"".concat(r,".addressLine1"),variant:"outlined",error:(null===n||void 0===n?void 0:n.addressLine1)&&!!(null===i||void 0===i?void 0:i.addressLine1),helperText:(null===n||void 0===n?void 0:n.addressLine1)&&!!(null===i||void 0===i?void 0:i.addressLine1),fullWidth:!0})}),Object(C.jsx)(I.a,{item:!0,xs:12,children:Object(C.jsx)(z.a,{component:E.c,label:a("address.addressLine2"),name:"".concat(r,".addressLine2"),variant:"outlined",error:(null===n||void 0===n?void 0:n.addressLine2)&&!!(null===i||void 0===i?void 0:i.addressLine2),helperText:(null===n||void 0===n?void 0:n.addressLine2)&&(null===i||void 0===i?void 0:i.addressLine2),fullWidth:!0})}),Object(C.jsx)(I.a,{item:!0,xs:12,sm:6,children:Object(C.jsx)(z.a,{component:E.c,label:a("address.city"),name:"".concat(r,".city"),variant:"outlined",error:(null===n||void 0===n?void 0:n.city)&&!!(null===i||void 0===i?void 0:i.city),helperText:(null===n||void 0===n?void 0:n.city)&&(null===i||void 0===i?void 0:i.city),fullWidth:!0})}),Object(C.jsx)(I.a,{item:!0,xs:12,sm:6,children:Object(C.jsx)(z.a,{component:E.c,label:a("address.provinceState"),name:"".concat(r,".provinceState"),variant:"outlined",error:(null===n||void 0===n?void 0:n.provinceState)&&!!(null===i||void 0===i?void 0:i.provinceState),helperText:(null===n||void 0===n?void 0:n.provinceState)&&(null===i||void 0===i?void 0:i.provinceState),fullWidth:!0})}),Object(C.jsx)(I.a,{item:!0,xs:12,sm:6,children:Object(C.jsx)(z.a,{component:E.c,label:a("address.country"),name:"".concat(r,".country"),variant:"outlined",error:(null===n||void 0===n?void 0:n.country)&&!!(null===i||void 0===i?void 0:i.country),helperText:(null===n||void 0===n?void 0:n.country)&&(null===i||void 0===i?void 0:i.country),fullWidth:!0})}),Object(C.jsx)(I.a,{item:!0,xs:12,sm:6,children:Object(C.jsx)(z.a,{component:E.c,label:a("address.zipPostalCode"),name:"".concat(r,".zipPostalCode"),variant:"outlined",error:(null===n||void 0===n?void 0:n.zipPostalCode)&&!!(null===i||void 0===i?void 0:i.zipPostalCode),helperText:(null===n||void 0===n?void 0:n.zipPostalCode)&&(null===i||void 0===i?void 0:i.zipPostalCode),fullWidth:!0})})]})},J=function(e){var t=e.formName,r=void 0===t?"signup":t,i=e.errors,n=e.touched,a=e.values,o=Object(p.a)().t;return Object(C.jsxs)(I.a,{container:!0,spacing:2,children:[Object(C.jsx)(I.a,{item:!0,xs:12,children:Object(C.jsx)(z.a,{component:E.a,type:"checkbox",name:"".concat(r,".guestCheckout"),Label:{label:o("signup.guestCheckout")}})}),Object(C.jsx)(I.a,{item:!0,xs:12,children:Object(C.jsx)(z.a,{component:E.c,label:o("signup.email"),name:"".concat(r,".email"),variant:"outlined",error:(null===n||void 0===n?void 0:n.email)&&!!(null===i||void 0===i?void 0:i.email),helperText:(null===n||void 0===n?void 0:n.email)&&(null===i||void 0===i?void 0:i.email),type:"email",fullWidth:!0})}),!(null===a||void 0===a?void 0:a.guestCheckout)&&Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(I.a,{item:!0,xs:12,sm:6,children:Object(C.jsx)(z.a,{component:E.c,label:o("signup.password"),name:"".concat(r,".password"),variant:"outlined",error:(null===n||void 0===n?void 0:n.password)&&!!(null===i||void 0===i?void 0:i.password),helperText:(null===n||void 0===n?void 0:n.password)&&(null===i||void 0===i?void 0:i.password),type:"password",fullWidth:!0})}),Object(C.jsx)(I.a,{item:!0,xs:12,sm:6,children:Object(C.jsx)(z.a,{component:E.c,label:o("signup.confirmPassword"),name:"".concat(r,".confirmPassword"),variant:"outlined",error:(null===n||void 0===n?void 0:n.confirmPassword)&&!!(null===i||void 0===i?void 0:i.confirmPassword),helperText:(null===n||void 0===n?void 0:n.confirmPassword)&&(null===i||void 0===i?void 0:i.confirmPassword),type:"password",fullWidth:!0})})]})]})},R=r(340),V=r(347);(B=W||(W={})).free="free",B.express="express",B.nextDay="nextDay";var Z=function(e){var t=e.formName,r=void 0===t?"shippingMethod":t,i=Object(p.a)().t;return Object(C.jsxs)(z.a,{component:E.b,name:r,children:[Object(C.jsx)(R.a,{value:W.free,control:Object(C.jsx)(V.a,{}),label:i("checkout.shippingMethod.free")}),Object(C.jsx)(R.a,{value:W.express,control:Object(C.jsx)(V.a,{}),label:i("checkout.shippingMethod.express")}),Object(C.jsx)(R.a,{value:W.nextDay,control:Object(C.jsx)(V.a,{}),label:i("checkout.shippingMethod.nextDay")})]})},G=r(9),H=function(e){return Object(G.c)().shape({firstName:Object(G.e)().required(e("errorMessages.required",{fieldName:e("address.firstName")})).max(30,e("errorMessages.tooLong",{max:30})),lastName:Object(G.e)().required(e("errorMessages.required",{fieldName:e("address.lastName")})).max(30,e("errorMessages.tooLong",{max:30})),addressLine1:Object(G.e)().required(e("errorMessages.required",{fieldName:e("address.addressLine1")})).max(200,e("errorMessages.tooLong",{max:200})),addressLine2:Object(G.e)().notRequired(),city:Object(G.e)().required(e("errorMessages.required",{fieldName:e("address.addressLine2")})).max(30,e("errorMessages.tooLong",{max:30})),provinceState:Object(G.e)().required(e("errorMessages.required",{fieldName:e("address.provinceState")})).max(30,e("errorMessages.tooLong",{max:30})),country:Object(G.e)().required(e("errorMessages.required",{fieldName:e("address.country")})).max(30,e("errorMessages.tooLong",{max:30})),zipPostalCode:Object(G.e)().required(e("errorMessages.required",{fieldName:e("address.zipPostalCode")})).min(5,e("errorMessages.tooShort",{min:5})).max(7,e("errorMessages.tooLong",{max:7}))})},K=function(e){return Object(G.c)().shape({guestCheckout:Object(G.a)(),email:Object(G.e)().email(e("errorMessages.email")).required(e("errorMessages.required",{fieldName:e("signup.email")})),password:Object(G.e)().when("guestCheckout",{is:!1,then:function(t){return t.required(e("errorMessages.required",{fieldName:e("signup.password")})).matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,e("errorMessages.password"))}}),confirmPassword:Object(G.e)().when("guestCheckout",{is:!1,then:function(t){return t.required(e("errorMessages.required",{fieldName:e("signup.confirmPassword")})).equals([Object(G.d)("password")],e("errorMessages.confirmPassword"))}})})},Q=function(e){return Object(G.c)().shape({shippingAddress:H(e),shippingMethod:Object(G.b)().oneOf(Object.values(W)),signup:K(e)})},U=r(58),X={firstName:"",lastName:"",addressLine1:"",addressLine2:"",city:"",provinceState:"",country:"",zipPostalCode:""},Y={deliveryForm:{shippingAddress:X,shippingMethod:W.free,signup:{guestCheckout:!1,email:"",password:"",confirmPassword:""}},paymentForm:{sameAsShipping:!1,billingAddress:X,creditCard:{cardNumber:"",expiryDate:"",securityCode:""}}},_=Object(U.b)({name:"checkout",initialState:Y,reducers:{submitDeliveryForm:function(e,t){e.deliveryForm=t.payload},clearDeliveryForm:function(e){e.deliveryForm=Y.deliveryForm},submitPaymentForm:function(e,t){e.paymentForm=t.payload},clearPaymentForm:function(e){e.paymentForm=Y.paymentForm}}}),ee=Object(w.a)(D.a)((function(e){return{display:"block",marginTop:e.theme.spacing(2)}})),te=Object(l.b)((function(e){return{deliveryForm:P.getDeliveryForm(e)}}),(function(e){return{submitDeliveryForm:function(t){e(_.actions.submitDeliveryForm(t))},clearDeliveryForm:function(){e(_.actions.clearDeliveryForm())}}}))((function(e){var t=e.deliveryForm,r=e.submitDeliveryForm,n=e.clearDeliveryForm,a=Object(p.a)().t,o=Object(j.g)();return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(k,{}),Object(C.jsx)(z.c,{enableReinitialize:!0,validationSchema:Q(a),initialValues:t,onSubmit:function(e){r(e),o.push(y.Checkout+i.Payment)},children:function(e){var t=e.errors,r=e.touched,i=e.values;return Object(C.jsxs)(z.b,{children:[Object(C.jsx)(ee,{children:Object(C.jsx)(L.a,{type:"reset",variant:"contained",endIcon:Object(C.jsx)(T.a,{}),size:"large",onClick:n,children:a("checkout.clear")})}),Object(C.jsxs)(ee,{children:[Object(C.jsx)(v.a,{variant:"h5",component:"legend",gutterBottom:!0,children:a("checkout.shippingAddress")}),Object(C.jsx)($,{formName:"shippingAddress",errors:t.shippingAddress,touched:r.shippingAddress})]}),Object(C.jsxs)(ee,{children:[Object(C.jsx)(v.a,{variant:"h5",component:"legend",gutterBottom:!0,children:a("checkout.shippingMethod.title")}),Object(C.jsx)(Z,{})]}),Object(C.jsxs)(ee,{children:[Object(C.jsx)(v.a,{variant:"h5",component:"legend",gutterBottom:!0,children:a("checkout.customerInfo")}),Object(C.jsx)(J,{formName:"signup",errors:t.signup,touched:r.signup,values:i.signup})]}),Object(C.jsx)(b.a,{textAlign:"right",mt:2,children:Object(C.jsx)(L.a,{type:"submit",variant:"contained",color:"primary",endIcon:Object(C.jsx)(S.a,{}),size:"large",children:a("checkout.continue")})})]})}})]})})),re=r(152),ie=r.n(re),ne=r(339),ae=r(95),oe=r.n(ae),ce=function(e){var t=e.formName,r=void 0===t?"creditCard":t,i=e.errors,n=e.touched,a=e.values,o=e.handleChange,c=Object(p.a)().t;return Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)(I.a,{container:!0,spacing:2,children:[Object(C.jsx)(I.a,{item:!0,xs:12,sm:12,children:Object(C.jsx)(oe.a,{mask:"9999-9999-9999-9999",maskPlaceholder:"####-####-####-####",name:"".concat(r,".cardNumber"),value:a.cardNumber,onChange:o,children:Object(C.jsx)(ne.a,{label:c("creditCard.cardNumber"),variant:"outlined",error:(null===n||void 0===n?void 0:n.cardNumber)&&!!(null===i||void 0===i?void 0:i.cardNumber),helperText:(null===n||void 0===n?void 0:n.cardNumber)&&(null===i||void 0===i?void 0:i.cardNumber),fullWidth:!0})})}),Object(C.jsx)(I.a,{item:!0,xs:12,sm:6,children:Object(C.jsx)(oe.a,{mask:"99/9999",maskPlaceholder:"mm/yyyy",name:"".concat(r,".expiryDate"),value:a.expiryDate,onChange:o,children:Object(C.jsx)(ne.a,{label:c("creditCard.expiryDate"),variant:"outlined",error:(null===n||void 0===n?void 0:n.expiryDate)&&!!(null===i||void 0===i?void 0:i.expiryDate),helperText:(null===n||void 0===n?void 0:n.expiryDate)&&(null===i||void 0===i?void 0:i.expiryDate),fullWidth:!0})})}),Object(C.jsx)(I.a,{item:!0,xs:12,sm:6,children:Object(C.jsx)(oe.a,{mask:"999",name:"".concat(r,".securityCode"),value:a.securityCode,onChange:o,children:Object(C.jsx)(ne.a,{label:c("creditCard.securityCode"),variant:"outlined",error:(null===n||void 0===n?void 0:n.securityCode)&&!!(null===i||void 0===i?void 0:i.securityCode),helperText:(null===n||void 0===n?void 0:n.securityCode)&&(null===i||void 0===i?void 0:i.securityCode),fullWidth:!0})})})]})})},se=function(e){return Object(G.c)().shape({cardNumber:Object(G.e)().required(e("errorMessages.required",{fieldName:e("creditCard.cardNumber")})).matches(/[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}/,e("errorMessages.invalidFormat")),expiryDate:Object(G.e)().required(e("errorMessages.required",{fieldName:e("creditCard.expiryDate")})).matches(/(0[1-9]|1[0-2])\/[0-9]{2}/,e("errorMessages.invalidFormat")),securityCode:Object(G.e)().required(e("errorMessages.required",{fieldName:e("creditCard.securityCode")})).matches(/[0-9]{3}/,e("errorMessages.invalidFormat"))})},de=function(e){return Object(G.c)().shape({sameAsShipping:Object(G.a)(),billingAddress:Object(G.c)().when("sameAsShipping",{is:function(e){return!e},then:H(e)}),creditCard:se(e)})},le=Object(w.a)(D.a)((function(e){return{display:"block",marginTop:e.theme.spacing(2)}})),ue=Object(l.b)((function(e){return{paymentForm:P.getPaymentForm(e)}}),(function(e){return{submitPaymentForm:function(t){e(_.actions.submitPaymentForm(t))},clearPaymentForm:function(){e(_.actions.clearPaymentForm())}}}))((function(e){var t=e.paymentForm,r=e.submitPaymentForm,n=e.clearPaymentForm,a=Object(p.a)().t,o=Object(j.g)(),c=function(){o.push(y.Checkout+i.Delivery)};return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(k,{}),Object(C.jsx)(z.c,{validationSchema:de(a),initialValues:t,onSubmit:function(e){r(e),o.push(y.Checkout+i.Confirmation)},children:function(e){var t=e.errors,r=e.touched,i=e.values,o=e.handleChange;e.setFieldTouched;return Object(C.jsxs)(z.b,{children:[Object(C.jsx)(le,{children:Object(C.jsx)(L.a,{type:"reset",variant:"contained",endIcon:Object(C.jsx)(T.a,{}),size:"large",onClick:n,children:a("checkout.clear")})}),Object(C.jsxs)(le,{children:[Object(C.jsx)(v.a,{variant:"h5",component:"legend",gutterBottom:!0,children:a("checkout.billingAddress")}),Object(C.jsx)(z.a,{component:E.a,type:"checkbox",name:"sameAsShipping",Label:{label:a("checkout.sameAsShipping")}}),!i.sameAsShipping&&Object(C.jsx)($,{formName:"billingAddress",errors:t.billingAddress,touched:r.billingAddress})]}),Object(C.jsxs)(le,{children:[Object(C.jsx)(v.a,{variant:"h5",component:"legend",gutterBottom:!0,children:a("checkout.creditCard")}),Object(C.jsx)(ce,{formName:"creditCard",errors:t.creditCard,touched:r.creditCard,values:i.creditCard,handleChange:o})]}),Object(C.jsxs)(b.a,{textAlign:"right",display:"flex",justifyContent:"space-between",mt:2,children:[Object(C.jsx)(L.a,{type:"button",variant:"contained",color:"secondary",endIcon:Object(C.jsx)(ie.a,{}),size:"large",onClick:c,children:a("checkout.previous")}),Object(C.jsx)(L.a,{type:"submit",variant:"contained",color:"primary",endIcon:Object(C.jsx)(S.a,{}),size:"large",children:a("checkout.continue")})]})]})}})]})}));function je(){var e=Object(j.i)().path;return Object(C.jsx)(u.a,{children:Object(C.jsxs)(j.d,{children:[Object(C.jsx)(j.b,{path:e+i.Delivery,children:Object(C.jsx)(te,{})}),Object(C.jsx)(j.b,{path:e+i.Payment,children:Object(C.jsx)(ue,{})}),Object(C.jsx)(j.b,{path:e+i.Confirmation,children:Object(C.jsx)(M,{})}),Object(C.jsx)(j.b,{exact:!0,path:e,children:Object(C.jsx)(j.a,{to:e+i.Delivery})})]})})}var me=function(){var e=Object(j.h)();return Object(n.useEffect)((function(){console.log("checkout route has been changed")}),[e.pathname]),Object(C.jsx)(m.a,{children:Object(C.jsx)(b.a,{p:3,children:Object(C.jsx)(je,{})})})};function be(){return Object(C.jsx)(u.a,{basename:"/react-checkout-form",children:Object(C.jsxs)(j.d,{children:[Object(C.jsx)(j.b,{path:y.Checkout,children:Object(C.jsx)(me,{})}),Object(C.jsx)(j.b,{exact:!0,path:"/",children:Object(C.jsx)(j.a,{to:y.Checkout})})]})})}var he=r(72),ve=r(153),pe=r(154),xe=r(71);r(156);var Oe,ge,fe,ye=r(36),Ce=Object(ye.b)({checkout:_.reducer}),ke=Object(U.a)({reducer:Ce,middleware:[],devTools:false}),Fe="en-GB";Oe="./i18n/{{lng}}.json",ge=Fe,he.a.use(ve.a).use(xe.e).use(pe.a).init({backend:{loadPath:Oe},fallbackLng:ge,load:"currentOnly",debug:!1}),fe=Fe,he.a.changeLanguage(fe);var Ne=function(){return Object(C.jsx)(s.a,{maxWidth:"lg",children:Object(C.jsx)(n.Suspense,{fallback:Object(C.jsx)(d.a,{}),children:Object(C.jsx)(l.a,{store:ke,children:Object(C.jsx)(be,{})})})})},Pe=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,352)).then((function(t){var r=t.getCLS,i=t.getFID,n=t.getFCP,a=t.getLCP,o=t.getTTFB;r(e),i(e),n(e),a(e),o(e)}))};c.a.render(Object(C.jsx)(a.a.StrictMode,{children:Object(C.jsx)(Ne,{})}),document.getElementById("root")),Pe()}},[[297,1,2]]]);
//# sourceMappingURL=main.0f39a119.chunk.js.map