/*62c8fbc44750a4accd2bc283a42720fe4e52a764*/(function(g){if(!g||!(g.toJSON||Object.toJSON||window.JSON)){throw new Error("jQuery, MooTools or Prototype needs to be loaded before jStorage!")}var h={},e={jStorage:"{}"},i=null,k=0,n=g.toJSON||Object.toJSON||(window.JSON&&(JSON.encode||JSON.stringify)),f=g.evalJSON||(window.JSON&&(JSON.decode||JSON.parse))||function(p){return String(p).evalJSON()},j=false,m,d={isXML:function(q){var p=(q?q.ownerDocument||q:0).documentElement;return p?p.nodeName!=="HTML":false},encode:function(q){if(!this.isXML(q)){return false}try{return new XMLSerializer().serializeToString(q)}catch(p){try{return q.xml}catch(r){}}return false},decode:function(q){var p=("DOMParser" in window&&(new DOMParser()).parseFromString)||(window.ActiveXObject&&function(s){var t=new ActiveXObject("Microsoft.XMLDOM");t.async="false";t.loadXML(s);return t}),r;if(!p){return false}r=p.call("DOMParser" in window&&(new DOMParser())||window,q,"text/xml");return this.isXML(r)?r:false}};function l(){var p=false;if("localStorage" in window){try{window.localStorage.setItem("_tmptest","tmpval");p=true;window.localStorage.removeItem("_tmptest")}catch(q){}}if(p){try{if(window.localStorage){e=window.localStorage;j="localStorage"}}catch(u){}}else{if("globalStorage" in window){try{if(window.globalStorage){e=window.globalStorage[window.location.hostname];j="globalStorage"}}catch(t){}}else{i=document.createElement("link");if(i.addBehavior){i.style.behavior="url(#default#userData)";document.getElementsByTagName("head")[0].appendChild(i);i.load("jStorage");var s="{}";try{s=i.getAttribute("jStorage")}catch(r){}e.jStorage=s;j="userDataBehavior"}else{i=null;return}}}b();o()}function b(){if(e.jStorage){try{h=f(String(e.jStorage))}catch(p){e.jStorage="{}"}}else{e.jStorage="{}"}k=e.jStorage?String(e.jStorage).length:0}function c(){try{e.jStorage=n(h);if(i){i.setAttribute("jStorage",e.jStorage);i.save("jStorage")}k=e.jStorage?String(e.jStorage).length:0}catch(p){}}function a(p){if(!p||(typeof p!="string"&&typeof p!="number")){throw new TypeError("Key name must be string or numeric")}if(p=="__jstorage_meta"){throw new TypeError("Reserved key name")}return true}function o(){var t,p,r,q=Infinity,s=false;clearTimeout(m);if(!h.__jstorage_meta||typeof h.__jstorage_meta.TTL!="object"){return}t=+new Date();r=h.__jstorage_meta.TTL;for(p in r){if(r.hasOwnProperty(p)){if(r[p]<=t){delete r[p];delete h[p];s=true}else{if(r[p]<q){q=r[p]}}}}if(q!=Infinity){m=setTimeout(o,q-t)}if(s){c()}}g.jStorage={version:"0.1.7.0",set:function(q,r,p){a(q);p=p||{};if(d.isXML(r)){r={_is_xml:true,xml:d.encode(r)}}else{if(typeof r=="function"){r=null}else{if(r&&typeof r=="object"){r=f(n(r))}}}h[q]=r;if(!isNaN(p.TTL)){this.setTTL(q,p.TTL)}else{c()}return r},get:function(p,q){a(p);if(p in h){if(h[p]&&typeof h[p]=="object"&&h[p]._is_xml&&h[p]._is_xml){return d.decode(h[p].xml)}else{return h[p]}}return typeof(q)=="undefined"?null:q},deleteKey:function(p){a(p);if(p in h){delete h[p];if(h.__jstorage_meta&&typeof h.__jstorage_meta.TTL=="object"&&p in h.__jstorage_meta.TTL){delete h.__jstorage_meta.TTL[p]}c();return true}return false},setTTL:function(q,p){var r=+new Date();a(q);p=Number(p)||0;if(q in h){if(!h.__jstorage_meta){h.__jstorage_meta={}}if(!h.__jstorage_meta.TTL){h.__jstorage_meta.TTL={}}if(p>0){h.__jstorage_meta.TTL[q]=r+p}else{delete h.__jstorage_meta.TTL[q]}c();o();return true}return false},flush:function(){h={};c();return true},storageObj:function(){function p(){}p.prototype=h;return new p()},index:function(){var p=[],q;for(q in h){if(h.hasOwnProperty(q)&&q!="__jstorage_meta"){p.push(q)}}return p},storageSize:function(){return k},currentBackend:function(){return j},storageAvailable:function(){return !!j},reInit:function(){var p,r;if(i&&i.addBehavior){p=document.createElement("link");i.parentNode.replaceChild(p,i);i=p;i.style.behavior="url(#default#userData)";document.getElementsByTagName("head")[0].appendChild(i);i.load("jStorage");r="{}";try{r=i.getAttribute("jStorage")}catch(q){}e.jStorage=r;j="userDataBehavior"}b()}};l()})(window.$||window.jQuery);