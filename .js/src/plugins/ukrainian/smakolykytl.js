var t=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(i,o){function u(t){try{l(r.next(t))}catch(t){o(t)}}function a(t){try{l(r.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,a)}l((r=r.apply(t,e||[])).next())}))},e=this&&this.__generator||function(t,e){var n,r,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(a){return function(l){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,a[0]&&(u=0)),u;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return u.label++,{value:a[1],done:!1};case 5:u.label++,r=a[1],a=[0];continue;case 7:a=u.ops.pop(),u.trys.pop();continue;default:if(!(i=u.trys,(i=i.length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){u=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){u.label=a[1];break}if(6===a[0]&&u.label<i[1]){u.label=i[1],i=a;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(a);break}i[2]&&u.ops.pop(),u.trys.pop();continue}a=e.call(t,u)}catch(t){a=[6,t],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}},n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0});var r=require("@libs/fetch"),i=require("@libs/novelStatus"),o=n(require("dayjs")),u=function(){function n(){this.id="smakolykytl",this.name="Смаколики",this.site="https://smakolykytl.site/",this.apiSite="https://api.smakolykytl.site/api/user",this.version="1.0.1",this.icon="src/uk/smakolykytl/icon.png"}return n.prototype.popularNovels=function(n,i){return t(this,arguments,void 0,(function(t,n){var i,o,u,a,l=n.showLatestNovels;return e(this,(function(t){switch(t.label){case 0:return i=l?"/updates":"/projects",[4,(0,r.fetchApi)(this.apiSite+i)];case 1:return[4,t.sent().json()];case 2:return o=t.sent(),u=[],null===(a=(null==o?void 0:o.projects)||(null==o?void 0:o.updates))||void 0===a||a.forEach((function(t){return u.push({name:t.title,cover:t.image.url,path:"titles/"+t.id})})),[2,u]}}))}))},n.prototype.parseNovel=function(n){return t(this,void 0,void 0,(function(){var t,u,a,l,s,c,p,h,d,f,v,b,y,m,j;return e(this,(function(e){switch(e.label){case 0:return t=n.split("/").pop(),[4,(0,r.fetchApi)(this.apiSite+"/projects/"+t)];case 1:return[4,e.sent().json()];case 2:return u=e.sent(),a={path:n,name:(null===(p=null==u?void 0:u.project)||void 0===p?void 0:p.title)||"",cover:null===(d=null===(h=null==u?void 0:u.project)||void 0===h?void 0:h.image)||void 0===d?void 0:d.url,summary:null===(f=null==u?void 0:u.project)||void 0===f?void 0:f.description,author:null===(v=null==u?void 0:u.project)||void 0===v?void 0:v.author,status:(null===(b=null==u?void 0:u.project)||void 0===b?void 0:b.status_translate.includes("Триває"))?i.NovelStatus.Ongoing:i.NovelStatus.Completed},(l=[null===(y=null==u?void 0:u.project)||void 0===y?void 0:y.genres,null===(m=null==u?void 0:u.project)||void 0===m?void 0:m.tags].flat().map((function(t){return null==t?void 0:t.title})).filter((function(t){return t}))).length&&(a.genres=l.join(", ")),s=[],[4,(0,r.fetchApi)(this.apiSite+"/projects/"+t+"/books")];case 3:return[4,e.sent().json()];case 4:return c=e.sent(),null===(j=null==c?void 0:c.books)||void 0===j||j.forEach((function(t){var e;return null===(e=null==t?void 0:t.chapters)||void 0===e?void 0:e.forEach((function(e){return s.push({name:t.title+" "+e.title,path:"read/"+e.id,releaseTime:(0,o.default)(e.modifiedAt).format("LLL"),chapterNumber:s.length+1})}))})),a.chapters=s,[2,a]}}))}))},n.prototype.parseChapter=function(n){return t(this,void 0,void 0,(function(){var t,i,o,u;return e(this,(function(e){switch(e.label){case 0:return t=n.split("/").pop(),[4,(0,r.fetchApi)(this.apiSite+"/chapters/"+t)];case 1:return[4,e.sent().json()];case 2:return i=e.sent(),o=JSON.parse((null===(u=null==i?void 0:i.chapter)||void 0===u?void 0:u.content)||"[]"),[2,a(o)]}}))}))},n.prototype.searchNovels=function(n){return t(this,void 0,void 0,(function(){var t,i,o,u,a;return e(this,(function(e){switch(e.label){case 0:return[4,(0,r.fetchApi)(this.apiSite+"/projects")];case 1:return[4,e.sent().json()];case 2:return t=e.sent(),i=n.toLowerCase(),o=[],null===(a=null===(u=null==t?void 0:t.projects)||void 0===u?void 0:u.filter((function(t){var e=t.title,r=t.id;return e.toLowerCase().includes(i)||String(r)==n})))||void 0===a||a.forEach((function(t){return o.push({name:t.title,cover:t.image.url,path:"titles/"+t.id})})),[2,o]}}))}))},n}();function a(t,e){return void 0===e&&(e=""),t.forEach((function(t){switch(t.type){case"hardBreak":e+="<br>";break;case"horizontalRule":e+="<hr>";break;case"image":if(t.attrs){var n=Object.entries(t.attrs).filter((function(t){return null==t?void 0:t[1]})).map((function(t){return"".concat(t[0],'="').concat(t[1],'"')}));e+="<img "+n.join("; ")+">"}break;case"paragraph":e+="<p>"+(t.content?a(t.content):"<br>")+"</p>";break;case"text":e+=t.text;break;default:e+=JSON.stringify(t,null,"\t")}})),e}exports.default=new u;