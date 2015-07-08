!function(){!window.Cocoon&&window.cordova&&"undefined"!=typeof require&&require("com.ludei.cocoon.common.Cocoon");var e=window.Cocoon;e.define("Cocoon.InApp",function(t){"use strict";function n(e){for(var t=0;t<e.length;++t)i[e[t].productId]=e[t].stock,delete e[t].stock}function c(e,t){var n=i[e];"number"!=typeof n&&(n=0),n+=t,0>n&&(n=0),i[e]=n}function r(e){for(var n=0;n<t._products.length;++n)if(t._products[n].productId===e.productId)return void(t._products[n]=e);t._products.push(e)}t.serviceName="InAppService",t.signal=new e.Signal,t._canPurchase=!0,t._products=[];var i={};return t.initialize=function(c,r){e.exec(this.serviceName,"setListener",[],function(e){var n=e[0];if("start"===n)t.signal.emit("purchase","start",[e[1]]);else if("complete"===n){var c=e[1];i[c.productId]=e[2],t.signal.emit("purchase","complete",[c])}else if("error"==n){var r=e[1],o=e[2];t.signal.emit("purchase","error",[r,o])}}),e.exec(this.serviceName,"initialize",[c],function(e){t._canPurchase=e.canPurchase,t._products=e.products,n(t._products),r&&r(e.error)})},t.Settings={autofinish:"autofinish"},t.canPurchase=function(){return this._canPurchase},t.fetchProducts=function(t,c){return c=c||function(){},e.exec(this.serviceName,"fetchProducts",[t],function(e){for(var t=0;t<e.length;++t)r(e[t]);n(e),c(e,null)},function(e){c([],e)})},t.getProducts=function(){return this._products},t.productForId=function(e){for(var t=0;t<this._products.length;++t){var n=this._products[t];if(n.productId===e)return n}return null},t.isPurchased=function(e){return this.stockOfProduct(e)>0},t.stockOfProduct=function(e){var t=i[e];return"number"==typeof t?t:0},t.restorePurchases=function(t){t=t||function(){},e.exec(this.serviceName,"restorePurchases",[],function(){t()},function(e){t(e)})},t.purchase=function(t,n,c){"number"!=typeof n&&(n=1),c=c||function(){},e.exec(this.serviceName,"purchase",[t,n],function(){c()},function(e){c(e)})},t.consume=function(t,n,r){"number"!=typeof n&&(n=1),r=r||function(){},e.exec(this.serviceName,"consume",[t,n],function(e){c(t,-e),r(e,null)},function(e){r(0,e)})},t.finishPurchase=function(t){e.exec(this.serviceName,"finishPurchase",[t])},t.setValidationHandler=function(n){var c=!n;e.exec(this.serviceName,"setValidationHandler",[c],function(c){var r=c[2];n(c[0],c[1],function(n){e.exec(t.serviceName,"validationCompletion",[r,!!n])})})},t.setLudeiServerValidationHandler=function(){e.exec(this.serviceName,"setLudeiServerValidationHandler",[])},t.Product={productId:"productId",title:"title",description:"description",localizedPrice:"localizedPrice",price:"price"},t.PurchaseInfo={productId:"productId",transactionId:"transactionId",purchaseDate:"purchaseDate",quantity:"quantity"},t.on=t.signal.expose(),t})}();