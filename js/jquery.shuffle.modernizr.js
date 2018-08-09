window.Modernizr=function(t,e,i){function n(t){c.cssText=t}function s(t,e){return typeof t===e}function o(t,e){for(var n in t){var s=t[n];if(!~(""+s).indexOf("-")&&c[s]!==i)return"pfx"!=e||s}return!1}function r(t,e,n){var r=t.charAt(0).toUpperCase()+t.slice(1),a=(t+" "+y.join(r+" ")+r).split(" ");return s(e,"string")||s(e,"undefined")?o(a,e):function(t,e,n){for(var o in t){var r=e[t[o]];if(r!==i)return!1===n?t[o]:s(r,"function")?r.bind(n||e):r}return!1}(a=(t+" "+_.join(r+" ")+r).split(" "),e,n)}var a,l,u={},h=e.documentElement,p="modernizr",f=e.createElement(p),c=f.style,d=" -webkit- -moz- -o- -ms- ".split(" "),m="Webkit Moz O ms",y=m.split(" "),_=m.toLowerCase().split(" "),g={},v=[],C=v.slice,T=function(t,i,n,s){var o,r,a,l,u=e.createElement("div"),f=e.body,c=f||e.createElement("body");if(parseInt(n,10))for(;n--;)a=e.createElement("div"),a.id=s?s[n]:p+(n+1),u.appendChild(a);return o=["&#173;",'<style id="s',p,'">',t,"</style>"].join(""),u.id=p,(f?u:c).innerHTML+=o,c.appendChild(u),f||(c.style.background="",c.style.overflow="hidden",l=h.style.overflow,h.style.overflow="hidden",h.appendChild(c)),r=i(u,t),f?u.parentNode.removeChild(u):(c.parentNode.removeChild(c),h.style.overflow=l),!!r},E={}.hasOwnProperty;l=s(E,"undefined")||s(E.call,"undefined")?function(t,e){return e in t&&s(t.constructor.prototype[e],"undefined")}:function(t,e){return E.call(t,e)},Function.prototype.bind||(Function.prototype.bind=function(t){var e=this;if("function"!=typeof e)throw new TypeError;var i=C.call(arguments,1),n=function(){if(this instanceof n){var s=function(){};s.prototype=e.prototype;var o=new s,r=e.apply(o,i.concat(C.call(arguments)));return Object(r)===r?r:o}return e.apply(t,i.concat(C.call(arguments)))};return n}),g.csstransforms=function(){return!!r("transform")},g.csstransforms3d=function(){var t=!!r("perspective");return t&&"webkitPerspective"in h.style&&T("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(e,i){t=9===e.offsetLeft&&3===e.offsetHeight}),t},g.csstransitions=function(){return r("transition")};for(var S in g)l(g,S)&&(a=S.toLowerCase(),u[a]=g[S](),v.push((u[a]?"":"no-")+a));return u.addTest=function(t,e){if("object"==typeof t)for(var n in t)l(t,n)&&u.addTest(n,t[n]);else{if(t=t.toLowerCase(),u[t]!==i)return u;e="function"==typeof e?e():e,h.className+=" "+(e?"":"no-")+t,u[t]=e}return u},n(""),f=null,u._version="2.6.2",u._prefixes=d,u._domPrefixes=_,u._cssomPrefixes=y,u.testProp=function(t){return o([t])},u.testAllProps=r,u.testStyles=T,u.prefixed=function(t,e,i){return e?r(t,e,i):r(t,"pfx")},h.className=h.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+" js "+v.join(" "),u}(0,this.document),function(t){"function"==typeof define&&define.amd?define(["jquery","modernizr"],t):window.Shuffle=t(window.jQuery,window.Modernizr)}(function(t,e,i){"use strict";if("object"!=typeof e)throw new Error("Shuffle.js requires Modernizr.\nhttp://vestride.github.io/Shuffle/#dependencies");var n,s=e.prefixed("transition"),o=e.prefixed("transitionDelay"),r=e.prefixed("transitionDuration"),a={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[s],l=e.prefixed("transform"),u=(n=l)?n.replace(/([A-Z])/g,function(t,e){return"-"+e.toLowerCase()}).replace(/^ms-/,"-ms-"):"",h=e.csstransforms&&e.csstransitions,p=e.csstransforms3d,f="shuffle",c="all";function d(t,e,i){for(var n=0,s=t.length;n<s;n++)if(e.call(i,t[n],n,t)==={})return}function m(e,i,n){return setTimeout(t.proxy(e,i),n)}function y(t){return Math.max.apply(Math,t)}function _(e){return t.isNumeric(e)?e:0}var g=function(t,e){this.x=_(t),this.y=_(e)};g.equals=function(t,e){return t.x===e.x&&t.y===e.y};var v=0,C=t(window),T=function(e,i){i=i||{},t.extend(this,T.options,i,T.settings),this.$el=t(e),this.element=e,this.unique="shuffle_"+v++,this._fire(T.EventType.LOADING),this._init(),m(function(){this.initialized=!0,this._fire(T.EventType.DONE)},this,16)};return T.EventType={LOADING:"loading",DONE:"done",LAYOUT:"layout",REMOVED:"removed"},T.ClassName={BASE:f,SHUFFLE_ITEM:"shuffle-item",FILTERED:"filtered",CONCEALED:"concealed"},T.options={group:c,speed:250,easing:"ease-out",itemSelector:"",sizer:null,gutterWidth:0,columnWidth:0,delimeter:null,buffer:0,initialSort:null,throttle:function(e,i,n){var s,o,r,a=null,l=0;n=n||{};var u=function(){l=!1===n.leading?0:t.now(),a=null,r=e.apply(s,o),s=o=null};return function(){var h=t.now();l||!1!==n.leading||(l=h);var p=i-(h-l);return s=this,o=arguments,p<=0||p>i?(clearTimeout(a),a=null,l=h,r=e.apply(s,o),s=o=null):a||!1===n.trailing||(a=setTimeout(u,p)),r}},throttleTime:300,sequentialFadeDelay:150,supported:h},T.settings={useSizer:!1,itemCss:{position:"absolute",top:0,left:0,visibility:"visible"},revealAppendedDelay:300,lastSort:{},lastFilter:c,enabled:!0,destroyed:!1,initialized:!1,_animations:[],styleQueue:[]},T.Point=g,T._getItemTransformString=function(t,e){return p?"translate3d("+t.x+"px, "+t.y+"px, 0) scale3d("+e+", "+e+", 1)":"translate("+t.x+"px, "+t.y+"px) scale("+e+")"},T._getNumberStyle=function(e,i){return T._getFloat(t(e).css(i))},T._getInt=function(t){return _(parseInt(t,10))},T._getFloat=function(t){return _(parseFloat(t))},T._getOuterWidth=function(t,e){var i=t.offsetWidth;e&&(i+=T._getNumberStyle(t,"marginLeft")+T._getNumberStyle(t,"marginRight"));return i},T._getOuterHeight=function(t,e){var i=t.offsetHeight;e&&(i+=T._getNumberStyle(t,"marginTop")+T._getNumberStyle(t,"marginBottom"));return i},T._skipTransition=function(t,e,i){var n=t.style[r];t.style[r]="0ms",e.call(i);t.offsetWidth;t.style[r]=n},T.prototype._init=function(){this.$items=this._getItems(),this.sizer=this._getElementOption(this.sizer),this.sizer&&(this.useSizer=!0),this.$el.addClass(T.ClassName.BASE),this._initItems(),C.on("resize."+f+"."+this.unique,this._getResizeFunction());var t=this.$el.css(["position","overflow"]),e=T._getOuterWidth(this.element);this._validateStyles(t),this._setColumns(e),this.shuffle(this.group,this.initialSort),this.supported&&m(function(){this._setTransitions(),this.element.style[s]="height "+this.speed+"ms "+this.easing},this)},T.prototype._getResizeFunction=function(){var e=t.proxy(this._onResize,this);return this.throttle?this.throttle(e,this.throttleTime):e},T.prototype._getElementOption=function(t){return"string"==typeof t?this.$el.find(t)[0]||null:t&&t.nodeType&&1===t.nodeType?t:t&&t.jquery?t[0]:null},T.prototype._validateStyles=function(t){"static"===t.position&&(this.element.style.position="relative"),"hidden"!==t.overflow&&(this.element.style.overflow="hidden")},T.prototype._filter=function(t,e){t=t||this.lastFilter,e=e||this.$items;var i=this._getFilteredSets(t,e);return this._toggleFilterClasses(i.filtered,i.concealed),this.lastFilter=t,"string"==typeof t&&(this.group=t),i.filtered},T.prototype._getFilteredSets=function(e,i){var n=t(),s=t();return e===c?n=i:d(i,function(i){var o=t(i);this._doesPassFilter(e,o)?n=n.add(o):s=s.add(o)},this),{filtered:n,concealed:s}},T.prototype._doesPassFilter=function(e,i){if(t.isFunction(e))return e.call(i[0],i,this);var n=i.data("groups"),s=this.delimeter&&!t.isArray(n)?n.split(this.delimeter):n;return t.inArray(e,s)>-1},T.prototype._toggleFilterClasses=function(t,e){t.removeClass(T.ClassName.CONCEALED).addClass(T.ClassName.FILTERED),e.removeClass(T.ClassName.FILTERED).addClass(T.ClassName.CONCEALED)},T.prototype._initItems=function(t){(t=t||this.$items).addClass([T.ClassName.SHUFFLE_ITEM,T.ClassName.FILTERED].join(" ")),t.css(this.itemCss).data("point",new g).data("scale",1)},T.prototype._updateItemCount=function(){this.visibleItems=this._getFilteredItems().length},T.prototype._setTransition=function(t){t.style[s]=u+" "+this.speed+"ms "+this.easing+", opacity "+this.speed+"ms "+this.easing},T.prototype._setTransitions=function(t){d(t=t||this.$items,function(t){this._setTransition(t)},this)},T.prototype._setSequentialDelay=function(t){this.supported&&d(t,function(t,e){t.style[o]="0ms,"+(e+1)*this.sequentialFadeDelay+"ms"},this)},T.prototype._getItems=function(){return this.$el.children(this.itemSelector)},T.prototype._getFilteredItems=function(){return this.$items.filter("."+T.ClassName.FILTERED)},T.prototype._getConcealedItems=function(){return this.$items.filter("."+T.ClassName.CONCEALED)},T.prototype._getColumnSize=function(e,i){var n;return 0===(n=t.isFunction(this.columnWidth)?this.columnWidth(e):this.useSizer?T._getOuterWidth(this.sizer):this.columnWidth?this.columnWidth:this.$items.length>0?T._getOuterWidth(this.$items[0],!0):e)&&(n=e),n+i},T.prototype._getGutterSize=function(e){return t.isFunction(this.gutterWidth)?this.gutterWidth(e):this.useSizer?T._getNumberStyle(this.sizer,"marginLeft"):this.gutterWidth},T.prototype._setColumns=function(t){var e=t||T._getOuterWidth(this.element),i=this._getGutterSize(e),n=this._getColumnSize(e,i),s=(e+i)/n;Math.abs(Math.round(s)-s)<.3&&(s=Math.round(s)),this.cols=Math.max(Math.floor(s),1),this.containerWidth=e,this.colWidth=n},T.prototype._setContainerSize=function(){this.$el.css("height",this._getContainerSize())},T.prototype._getContainerSize=function(){return y(this.positions)},T.prototype._fire=function(t,e){this.$el.trigger(t+"."+f,e&&e.length?e:[this])},T.prototype._resetCols=function(){var t=this.cols;for(this.positions=[];t--;)this.positions.push(0)},T.prototype._layout=function(t,e){d(t,function(t){this._layoutItem(t,!!e)},this),this._processStyleQueue(),this._setContainerSize()},T.prototype._layoutItem=function(e,i){var n=t(e),s=n.data(),o=s.point,r=s.scale,a={width:T._getOuterWidth(e,!0),height:T._getOuterHeight(e,!0)},l=this._getItemPosition(a);g.equals(o,l)&&1===r||(s.point=l,s.scale=1,this.styleQueue.push({$item:n,point:l,scale:1,opacity:i?0:1,skipTransition:i,callfront:function(){i||n.css("visibility","visible")},callback:function(){i&&n.css("visibility","hidden")}}))},T.prototype._getItemPosition=function(t){for(var e=this._getColumnSpan(t.width,this.colWidth,this.cols),i=this._getColumnSet(e,this.cols),n=this._getShortColumn(i,this.buffer),s=new g(Math.round(this.colWidth*n),Math.round(i[n])),o=i[n]+t.height,r=this.cols+1-i.length,a=0;a<r;a++)this.positions[n+a]=o;return s},T.prototype._getColumnSpan=function(t,e,i){var n=t/e;return Math.abs(Math.round(n)-n)<.3&&(n=Math.round(n)),Math.min(Math.ceil(n),i)},T.prototype._getColumnSet=function(t,e){if(1===t)return this.positions;for(var i=e+1-t,n=[],s=0;s<i;s++)n[s]=y(this.positions.slice(s,s+t));return n},T.prototype._getShortColumn=function(t,e){for(var i,n=(i=t,Math.min.apply(Math,i)),s=0,o=t.length;s<o;s++)if(t[s]>=n-e&&t[s]<=n+e)return s;return 0},T.prototype._shrink=function(e){d(e||this._getConcealedItems(),function(e){var i=t(e),n=i.data();.001!==n.scale&&(n.scale=.001,this.styleQueue.push({$item:i,point:n.point,scale:.001,opacity:0,callback:function(){i.css("visibility","hidden")}}))},this)},T.prototype._onResize=function(){!this.enabled||this.destroyed||this.isTransitioning||T._getOuterWidth(this.element)!==this.containerWidth&&this.update()},T.prototype._getStylesForTransition=function(t){var e={opacity:t.opacity};return this.supported?e[l]=T._getItemTransformString(t.point,t.scale):(e.left=t.point.x,e.top=t.point.y),e},T.prototype._transition=function(e){var i=this._getStylesForTransition(e);this._startItemAnimation(e.$item,i,e.callfront||t.noop,e.callback||t.noop)},T.prototype._startItemAnimation=function(e,i,n,s){if(n(),!this.initialized)return e.css(i),void s();if(this.supported)e.css(i),e.on(a,function e(i){i.target===i.currentTarget&&(t(i.target).off(a,e),s())});else{var o=e.stop(!0).animate(i,this.speed,"swing",s);this._animations.push(o.promise())}},T.prototype._processStyleQueue=function(e){var i=t();d(this.styleQueue,function(t){t.skipTransition?this._styleImmediately(t):(i=i.add(t.$item),this._transition(t))},this),i.length>0&&this.initialized?(this.isTransitioning=!0,this.supported?this._whenCollectionDone(i,a,this._movementFinished):this._whenAnimationsDone(this._movementFinished)):e||m(this._layoutEnd,this),this.styleQueue.length=0},T.prototype._styleImmediately=function(t){T._skipTransition(t.$item[0],function(){t.$item.css(this._getStylesForTransition(t))},this)},T.prototype._movementFinished=function(){this.isTransitioning=!1,this._layoutEnd()},T.prototype._layoutEnd=function(){this._fire(T.EventType.LAYOUT)},T.prototype._addItems=function(t,e,i){this._initItems(t),this._setTransitions(t),this.$items=this._getItems(),this._shrink(t),d(this.styleQueue,function(t){t.skipTransition=!0}),this._processStyleQueue(!0),e?this._addItemsToEnd(t,i):this.shuffle(this.lastFilter)},T.prototype._addItemsToEnd=function(t,e){var i=this._filter(null,t).get();this._updateItemCount(),this._layout(i,!0),e&&this.supported&&this._setSequentialDelay(i),this._revealAppended(i)},T.prototype._revealAppended=function(e){m(function(){d(e,function(e){var i=t(e);this._transition({$item:i,opacity:1,point:i.data("point"),scale:1})},this),this._whenCollectionDone(t(e),a,function(){t(e).css(o,"0ms"),this._movementFinished()})},this,this.revealAppendedDelay)},T.prototype._whenCollectionDone=function(e,i,n){var s=0,o=e.length,r=this;e.on(i,function e(a){a.target===a.currentTarget&&(t(a.target).off(i,e),++s===o&&n.call(r))})},T.prototype._whenAnimationsDone=function(e){t.when.apply(null,this._animations).always(t.proxy(function(){this._animations.length=0,e.call(this)},this))},T.prototype.shuffle=function(t,e){this.enabled&&!this.isTransitioning&&(t||(t=c),this._filter(t),this._updateItemCount(),this._shrink(),this.sort(e))},T.prototype.sort=function(t){if(this.enabled&&!this.isTransitioning){this._resetCols();var e=t||this.lastSort,i=this._getFilteredItems().sorted(e);this._layout(i),this.lastSort=e}},T.prototype.update=function(t){this.enabled&&!this.isTransitioning&&(t||this._setColumns(),this.sort())},T.prototype.layout=function(){this.update(!0)},T.prototype.appended=function(t,e,i){this._addItems(t,!0===e,!1!==i)},T.prototype.disable=function(){this.enabled=!1},T.prototype.enable=function(t){this.enabled=!0,!1!==t&&this.update()},T.prototype.remove=function(e){e.length&&e.jquery&&(this._toggleFilterClasses(t(),e),this._shrink(e),this.sort(),this.$el.one(T.EventType.LAYOUT+"."+f,t.proxy(function(){e.remove(),this.$items=this._getItems(),this._updateItemCount(),this._fire(T.EventType.REMOVED,[e,this]),e=null},this)))},T.prototype.destroy=function(){C.off("."+this.unique),this.$el.removeClass(f).removeAttr("style").removeData(f),this.$items.removeAttr("style").removeData("point").removeData("scale").removeClass([T.ClassName.CONCEALED,T.ClassName.FILTERED,T.ClassName.SHUFFLE_ITEM].join(" ")),this.$items=null,this.$el=null,this.sizer=null,this.element=null,this.destroyed=!0},t.fn.shuffle=function(e){var i=Array.prototype.slice.call(arguments,1);return this.each(function(){var n=t(this),s=n.data(f);s?"string"==typeof e&&s[e]&&s[e].apply(s,i):(s=new T(this,e),n.data(f,s))})},t.fn.sorted=function(e){var n=t.extend({},t.fn.sorted.defaults,e),s=this.get(),o=!1;return s.length?n.randomize?function(t){var e,i,n=t.length;if(!n)return t;for(;--n;)e=t[i=Math.floor(Math.random()*(n+1))],t[i]=t[n],t[n]=e;return t}(s):(t.isFunction(n.by)&&s.sort(function(e,s){if(o)return 0;var r=n.by(t(e)),a=n.by(t(s));return r===i&&a===i?(o=!0,0):r<a||"sortFirst"===r||"sortLast"===a?-1:r>a||"sortLast"===r||"sortFirst"===a?1:0}),o?this.get():(n.reverse&&s.reverse(),s)):[]},t.fn.sorted.defaults={reverse:!1,by:null,randomize:!1},T});