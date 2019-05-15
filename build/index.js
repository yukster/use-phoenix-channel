module.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=require("react")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0);t.default=(0,o.createContext)()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useChannel=t.SocketProvider=void 0;var o=r(n(3)),i=r(n(8));function r(e){return e&&e.__esModule?e:{default:e}}t.SocketProvider=o.default,t.useChannel=i.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),i=c(o),r=c(n(4)),s=n(7),a=c(n(1));function c(e){return e&&e.__esModule?e:{default:e}}var u=function(e){var t=e.wsUrl,n=e.options,r=e.children,c=new s.Socket(t,{params:n});return(0,o.useEffect)(function(){c.connect()},[n,t]),i.default.createElement(a.default.Provider,{value:c},r)};u.defaultProps={options:{}},u.propTypes={wsUrl:r.default.string.isRequired,options:r.default.object.isRequired},t.default=u},function(e,t,n){e.exports=n(5)()},function(e,t,n){"use strict";var o=n(6);function i(){}function r(){}r.resetWarningCache=i,e.exports=function(){function e(e,t,n,i,r,s){if(s!==o){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:r,resetWarningCache:i};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){e.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){(function(t){e.exports=t.Phoenix=n(2)}).call(this,n(1))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.r(t),n.d(t,"Channel",function(){return g}),n.d(t,"Serializer",function(){return k}),n.d(t,"Socket",function(){return b}),n.d(t,"LongPoll",function(){return j}),n.d(t,"Ajax",function(){return R}),n.d(t,"Presence",function(){return C});var a="undefined"!=typeof self?self:null,c="undefined"!=typeof window?window:null,u=a||c||void 0,l={connecting:0,open:1,closing:2,closed:3},h=1e4,f={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},d={close:"phx_close",error:"phx_error",join:"phx_join",reply:"phx_reply",leave:"phx_leave"},p=[d.close,d.error,d.join,d.reply,d.leave],v={longpoll:"longpoll",websocket:"websocket"},y=function(e){return"function"==typeof e?e:function(){return e}},m=function(){function e(t,n,o,r){i(this,e),this.channel=t,this.event=n,this.payload=o||function(){return{}},this.receivedResp=null,this.timeout=r,this.timeoutTimer=null,this.recHooks=[],this.sent=!1}return s(e,[{key:"resend",value:function(e){this.timeout=e,this.reset(),this.send()}},{key:"send",value:function(){this.hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload(),ref:this.ref,join_ref:this.channel.joinRef()}))}},{key:"receive",value:function(e,t){return this.hasReceived(e)&&t(this.receivedResp.response),this.recHooks.push({status:e,callback:t}),this}},{key:"reset",value:function(){this.cancelRefEvent(),this.ref=null,this.refEvent=null,this.receivedResp=null,this.sent=!1}},{key:"matchReceive",value:function(e){var t=e.status,n=e.response;e.ref,this.recHooks.filter(function(e){return e.status===t}).forEach(function(e){return e.callback(n)})}},{key:"cancelRefEvent",value:function(){this.refEvent&&this.channel.off(this.refEvent)}},{key:"cancelTimeout",value:function(){clearTimeout(this.timeoutTimer),this.timeoutTimer=null}},{key:"startTimeout",value:function(){var e=this;this.timeoutTimer&&this.cancelTimeout(),this.ref=this.channel.socket.makeRef(),this.refEvent=this.channel.replyEventName(this.ref),this.channel.on(this.refEvent,function(t){e.cancelRefEvent(),e.cancelTimeout(),e.receivedResp=t,e.matchReceive(t)}),this.timeoutTimer=setTimeout(function(){e.trigger("timeout",{})},this.timeout)}},{key:"hasReceived",value:function(e){return this.receivedResp&&this.receivedResp.status===e}},{key:"trigger",value:function(e,t){this.channel.trigger(this.refEvent,{status:e,response:t})}}]),e}(),g=function(){function e(t,n,o){var r=this;i(this,e),this.state=f.closed,this.topic=t,this.params=y(n||{}),this.socket=o,this.bindings=[],this.bindingRef=0,this.timeout=this.socket.timeout,this.joinedOnce=!1,this.joinPush=new m(this,d.join,this.params,this.timeout),this.pushBuffer=[],this.rejoinTimer=new T(function(){r.socket.isConnected()&&r.rejoin()},this.socket.rejoinAfterMs),this.socket.onError(function(){return r.rejoinTimer.reset()}),this.socket.onOpen(function(){r.rejoinTimer.reset(),r.isErrored()&&r.rejoin()}),this.joinPush.receive("ok",function(){r.state=f.joined,r.rejoinTimer.reset(),r.pushBuffer.forEach(function(e){return e.send()}),r.pushBuffer=[]}),this.joinPush.receive("error",function(){r.state=f.errored,r.socket.isConnected()&&r.rejoinTimer.scheduleTimeout()}),this.onClose(function(){r.rejoinTimer.reset(),r.socket.hasLogger()&&r.socket.log("channel","close ".concat(r.topic," ").concat(r.joinRef())),r.state=f.closed,r.socket.remove(r)}),this.onError(function(e){r.socket.hasLogger()&&r.socket.log("channel","error ".concat(r.topic),e),r.isJoining()&&r.joinPush.reset(),r.state=f.errored,r.socket.isConnected()&&r.rejoinTimer.scheduleTimeout()}),this.joinPush.receive("timeout",function(){r.socket.hasLogger()&&r.socket.log("channel","timeout ".concat(r.topic," (").concat(r.joinRef(),")"),r.joinPush.timeout),new m(r,d.leave,y({}),r.timeout).send(),r.state=f.errored,r.joinPush.reset(),r.socket.isConnected()&&r.rejoinTimer.scheduleTimeout()}),this.on(d.reply,function(e,t){r.trigger(r.replyEventName(t),e)})}return s(e,[{key:"join",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.timeout;if(this.joinedOnce)throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");return this.timeout=e,this.joinedOnce=!0,this.rejoin(),this.joinPush}},{key:"onClose",value:function(e){this.on(d.close,e)}},{key:"onError",value:function(e){return this.on(d.error,function(t){return e(t)})}},{key:"on",value:function(e,t){var n=this.bindingRef++;return this.bindings.push({event:e,ref:n,callback:t}),n}},{key:"off",value:function(e,t){this.bindings=this.bindings.filter(function(n){return!(n.event===e&&(void 0===t||t===n.ref))})}},{key:"canPush",value:function(){return this.socket.isConnected()&&this.isJoined()}},{key:"push",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.timeout;if(!this.joinedOnce)throw new Error("tried to push '".concat(e,"' to '").concat(this.topic,"' before joining. Use channel.join() before pushing events"));var o=new m(this,e,function(){return t},n);return this.canPush()?o.send():(o.startTimeout(),this.pushBuffer.push(o)),o}},{key:"leave",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.timeout;this.rejoinTimer.reset(),this.state=f.leaving;var n=function(){e.socket.hasLogger()&&e.socket.log("channel","leave ".concat(e.topic)),e.trigger(d.close,"leave")},o=new m(this,d.leave,y({}),t);return o.receive("ok",function(){return n()}).receive("timeout",function(){return n()}),o.send(),this.canPush()||o.trigger("ok",{}),o}},{key:"onMessage",value:function(e,t,n){return t}},{key:"isLifecycleEvent",value:function(e){return p.indexOf(e)>=0}},{key:"isMember",value:function(e,t,n,o){return!(this.topic!==e||o&&o!==this.joinRef()&&this.isLifecycleEvent(t)&&(this.socket.hasLogger()&&this.socket.log("channel","dropping outdated message",{topic:e,event:t,payload:n,joinRef:o}),1))}},{key:"joinRef",value:function(){return this.joinPush.ref}},{key:"sendJoin",value:function(e){this.state=f.joining,this.joinPush.resend(e)}},{key:"rejoin",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.timeout;this.isLeaving()||this.sendJoin(e)}},{key:"trigger",value:function(e,t,n,o){var i=this.onMessage(e,t,n,o);if(t&&!i)throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");for(var r=0;r<this.bindings.length;r++){var s=this.bindings[r];s.event===e&&s.callback(i,n,o||this.joinRef())}}},{key:"replyEventName",value:function(e){return"chan_reply_".concat(e)}},{key:"isClosed",value:function(){return this.state===f.closed}},{key:"isErrored",value:function(){return this.state===f.errored}},{key:"isJoined",value:function(){return this.state===f.joined}},{key:"isJoining",value:function(){return this.state===f.joining}},{key:"isLeaving",value:function(){return this.state===f.leaving}}]),e}(),k={encode:function(e,t){var n=[e.join_ref,e.ref,e.topic,e.event,e.payload];return t(JSON.stringify(n))},decode:function(e,t){var n=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],o=!0,i=!1,r=void 0;try{for(var s,a=e[Symbol.iterator]();!(o=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);o=!0);}catch(e){i=!0,r=e}finally{try{o||null==a.return||a.return()}finally{if(i)throw r}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(JSON.parse(e),5);return t({join_ref:n[0],ref:n[1],topic:n[2],event:n[3],payload:n[4]})}},b=function(){function e(t){var n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i(this,e),this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.channels=[],this.sendBuffer=[],this.ref=0,this.timeout=o.timeout||h,this.transport=o.transport||u.WebSocket||j,this.defaultEncoder=k.encode,this.defaultDecoder=k.decode,this.closeWasClean=!1,this.unloaded=!1,this.binaryType=o.binaryType||"arraybuffer",this.transport!==j?(this.encode=o.encode||this.defaultEncoder,this.decode=o.decode||this.defaultDecoder):(this.encode=this.defaultEncoder,this.decode=this.defaultDecoder),c&&c.addEventListener("beforeunload",function(e){n.unloaded=!0,n.abnormalClose("unloaded")}),this.heartbeatIntervalMs=o.heartbeatIntervalMs||3e4,this.rejoinAfterMs=function(e){return o.rejoinAfterMs?o.rejoinAfterMs(e):[1e3,2e3,5e3][e-1]||1e4},this.reconnectAfterMs=function(e){return n.unloaded?100:o.reconnectAfterMs?o.reconnectAfterMs(e):[10,50,100,150,200,250,500,1e3,2e3][e-1]||5e3},this.logger=o.logger||null,this.longpollerTimeout=o.longpollerTimeout||2e4,this.params=y(o.params||{}),this.endPoint="".concat(t,"/").concat(v.websocket),this.heartbeatTimer=null,this.pendingHeartbeatRef=null,this.reconnectTimer=new T(function(){n.teardown(function(){return n.connect()})},this.reconnectAfterMs)}return s(e,[{key:"protocol",value:function(){return location.protocol.match(/^https/)?"wss":"ws"}},{key:"endPointURL",value:function(){var e=R.appendParams(R.appendParams(this.endPoint,this.params()),{vsn:"2.0.0"});return"/"!==e.charAt(0)?e:"/"===e.charAt(1)?"".concat(this.protocol(),":").concat(e):"".concat(this.protocol(),"://").concat(location.host).concat(e)}},{key:"disconnect",value:function(e,t,n){this.closeWasClean=!0,this.reconnectTimer.reset(),this.teardown(e,t,n)}},{key:"connect",value:function(e){var t=this;e&&(console&&console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"),this.params=y(e)),this.conn||(this.conn=new this.transport(this.endPointURL()),this.conn.binaryType=this.binaryType,this.conn.timeout=this.longpollerTimeout,this.conn.onopen=function(){return t.onConnOpen()},this.conn.onerror=function(e){return t.onConnError(e)},this.conn.onmessage=function(e){return t.onConnMessage(e)},this.conn.onclose=function(e){return t.onConnClose(e)})}},{key:"log",value:function(e,t,n){this.logger(e,t,n)}},{key:"hasLogger",value:function(){return null!==this.logger}},{key:"onOpen",value:function(e){this.stateChangeCallbacks.open.push(e)}},{key:"onClose",value:function(e){this.stateChangeCallbacks.close.push(e)}},{key:"onError",value:function(e){this.stateChangeCallbacks.error.push(e)}},{key:"onMessage",value:function(e){this.stateChangeCallbacks.message.push(e)}},{key:"onConnOpen",value:function(){this.hasLogger()&&this.log("transport","connected to ".concat(this.endPointURL())),this.unloaded=!1,this.closeWasClean=!1,this.flushSendBuffer(),this.reconnectTimer.reset(),this.resetHeartbeat(),this.stateChangeCallbacks.open.forEach(function(e){return e()})}},{key:"resetHeartbeat",value:function(){var e=this;this.conn&&this.conn.skipHeartbeat||(this.pendingHeartbeatRef=null,clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(function(){return e.sendHeartbeat()},this.heartbeatIntervalMs))}},{key:"teardown",value:function(e,t,n){this.conn&&(this.conn.onclose=function(){},t?this.conn.close(t,n||""):this.conn.close(),this.conn=null),e&&e()}},{key:"onConnClose",value:function(e){this.hasLogger()&&this.log("transport","close",e),this.triggerChanError(),clearInterval(this.heartbeatTimer),this.closeWasClean||this.reconnectTimer.scheduleTimeout(),this.stateChangeCallbacks.close.forEach(function(t){return t(e)})}},{key:"onConnError",value:function(e){this.hasLogger()&&this.log("transport",e),this.triggerChanError(),this.stateChangeCallbacks.error.forEach(function(t){return t(e)})}},{key:"triggerChanError",value:function(){this.channels.forEach(function(e){e.isErrored()||e.isLeaving()||e.isClosed()||e.trigger(d.error)})}},{key:"connectionState",value:function(){switch(this.conn&&this.conn.readyState){case l.connecting:return"connecting";case l.open:return"open";case l.closing:return"closing";default:return"closed"}}},{key:"isConnected",value:function(){return"open"===this.connectionState()}},{key:"remove",value:function(e){this.channels=this.channels.filter(function(t){return t.joinRef()!==e.joinRef()})}},{key:"channel",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=new g(e,t,this);return this.channels.push(n),n}},{key:"push",value:function(e){var t=this;if(this.hasLogger()){var n=e.topic,o=e.event,i=e.payload,r=e.ref,s=e.join_ref;this.log("push","".concat(n," ").concat(o," (").concat(s,", ").concat(r,")"),i)}this.isConnected()?this.encode(e,function(e){return t.conn.send(e)}):this.sendBuffer.push(function(){return t.encode(e,function(e){return t.conn.send(e)})})}},{key:"makeRef",value:function(){var e=this.ref+1;return e===this.ref?this.ref=0:this.ref=e,this.ref.toString()}},{key:"sendHeartbeat",value:function(){if(this.isConnected()){if(this.pendingHeartbeatRef)return this.pendingHeartbeatRef=null,this.hasLogger()&&this.log("transport","heartbeat timeout. Attempting to re-establish connection"),void this.abnormalClose("heartbeat timeout");this.pendingHeartbeatRef=this.makeRef(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef})}}},{key:"abnormalClose",value:function(e){this.closeWasClean=!1,this.conn.close(1e3,e)}},{key:"flushSendBuffer",value:function(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(function(e){return e()}),this.sendBuffer=[])}},{key:"onConnMessage",value:function(e){var t=this;this.decode(e.data,function(e){var n=e.topic,o=e.event,i=e.payload,r=e.ref,s=e.join_ref;r&&r===t.pendingHeartbeatRef&&(t.pendingHeartbeatRef=null),t.hasLogger()&&t.log("receive","".concat(i.status||""," ").concat(n," ").concat(o," ").concat(r&&"("+r+")"||""),i);for(var a=0;a<t.channels.length;a++){var c=t.channels[a];c.isMember(n,o,i,s)&&c.trigger(o,i,r,s)}for(var u=0;u<t.stateChangeCallbacks.message.length;u++)t.stateChangeCallbacks.message[u](e)})}}]),e}(),j=function(){function e(t){i(this,e),this.endPoint=null,this.token=null,this.skipHeartbeat=!0,this.onopen=function(){},this.onerror=function(){},this.onmessage=function(){},this.onclose=function(){},this.pollEndpoint=this.normalizeEndpoint(t),this.readyState=l.connecting,this.poll()}return s(e,[{key:"normalizeEndpoint",value:function(e){return e.replace("ws://","http://").replace("wss://","https://").replace(new RegExp("(.*)/"+v.websocket),"$1/"+v.longpoll)}},{key:"endpointURL",value:function(){return R.appendParams(this.pollEndpoint,{token:this.token})}},{key:"closeAndRetry",value:function(){this.close(),this.readyState=l.connecting}},{key:"ontimeout",value:function(){this.onerror("timeout"),this.closeAndRetry()}},{key:"poll",value:function(){var e=this;this.readyState!==l.open&&this.readyState!==l.connecting||R.request("GET",this.endpointURL(),"application/json",null,this.timeout,this.ontimeout.bind(this),function(t){if(t){var n=t.status,o=t.token,i=t.messages;e.token=o}else n=0;switch(n){case 200:i.forEach(function(t){return e.onmessage({data:t})}),e.poll();break;case 204:e.poll();break;case 410:e.readyState=l.open,e.onopen(),e.poll();break;case 0:case 500:e.onerror(),e.closeAndRetry();break;default:throw new Error("unhandled poll status ".concat(n))}})}},{key:"send",value:function(e){var t=this;R.request("POST",this.endpointURL(),"application/json",e,this.timeout,this.onerror.bind(this,"timeout"),function(e){e&&200===e.status||(t.onerror(e&&e.status),t.closeAndRetry())})}},{key:"close",value:function(e,t){this.readyState=l.closed,this.onclose()}}]),e}(),R=function(){function e(){i(this,e)}return s(e,null,[{key:"request",value:function(e,t,n,o,i,r,s){if(u.XDomainRequest){var a=new XDomainRequest;this.xdomainRequest(a,e,t,o,i,r,s)}else{var c=u.XMLHttpRequest?new u.XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");this.xhrRequest(c,e,t,n,o,i,r,s)}}},{key:"xdomainRequest",value:function(e,t,n,o,i,r,s){var a=this;e.timeout=i,e.open(t,n),e.onload=function(){var t=a.parseJSON(e.responseText);s&&s(t)},r&&(e.ontimeout=r),e.onprogress=function(){},e.send(o)}},{key:"xhrRequest",value:function(e,t,n,o,i,r,s,a){var c=this;e.open(t,n,!0),e.timeout=r,e.setRequestHeader("Content-Type",o),e.onerror=function(){a&&a(null)},e.onreadystatechange=function(){if(e.readyState===c.states.complete&&a){var t=c.parseJSON(e.responseText);a(t)}},s&&(e.ontimeout=s),e.send(i)}},{key:"parseJSON",value:function(e){if(!e||""===e)return null;try{return JSON.parse(e)}catch(t){return console&&console.log("failed to parse JSON response",e),null}}},{key:"serialize",value:function(e,t){var n=[];for(var i in e)if(e.hasOwnProperty(i)){var r=t?"".concat(t,"[").concat(i,"]"):i,s=e[i];"object"===o(s)?n.push(this.serialize(s,r)):n.push(encodeURIComponent(r)+"="+encodeURIComponent(s))}return n.join("&")}},{key:"appendParams",value:function(e,t){if(0===Object.keys(t).length)return e;var n=e.match(/\?/)?"&":"?";return"".concat(e).concat(n).concat(this.serialize(t))}}]),e}();R.states={complete:4};var C=function(){function e(t){var n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i(this,e);var r=o.events||{state:"presence_state",diff:"presence_diff"};this.state={},this.pendingDiffs=[],this.channel=t,this.joinRef=null,this.caller={onJoin:function(){},onLeave:function(){},onSync:function(){}},this.channel.on(r.state,function(t){var o=n.caller,i=o.onJoin,r=o.onLeave,s=o.onSync;n.joinRef=n.channel.joinRef(),n.state=e.syncState(n.state,t,i,r),n.pendingDiffs.forEach(function(t){n.state=e.syncDiff(n.state,t,i,r)}),n.pendingDiffs=[],s()}),this.channel.on(r.diff,function(t){var o=n.caller,i=o.onJoin,r=o.onLeave,s=o.onSync;n.inPendingSyncState()?n.pendingDiffs.push(t):(n.state=e.syncDiff(n.state,t,i,r),s())})}return s(e,[{key:"onJoin",value:function(e){this.caller.onJoin=e}},{key:"onLeave",value:function(e){this.caller.onLeave=e}},{key:"onSync",value:function(e){this.caller.onSync=e}},{key:"list",value:function(t){return e.list(this.state,t)}},{key:"inPendingSyncState",value:function(){return!this.joinRef||this.joinRef!==this.channel.joinRef()}}],[{key:"syncState",value:function(e,t,n,o){var i=this,r=this.clone(e),s={},a={};return this.map(r,function(e,n){t[e]||(a[e]=n)}),this.map(t,function(e,t){var n=r[e];if(n){var o=t.metas.map(function(e){return e.phx_ref}),c=n.metas.map(function(e){return e.phx_ref}),u=t.metas.filter(function(e){return c.indexOf(e.phx_ref)<0}),l=n.metas.filter(function(e){return o.indexOf(e.phx_ref)<0});u.length>0&&(s[e]=t,s[e].metas=u),l.length>0&&(a[e]=i.clone(n),a[e].metas=l)}else s[e]=t}),this.syncDiff(r,{joins:s,leaves:a},n,o)}},{key:"syncDiff",value:function(e,t,n,o){var i=t.joins,r=t.leaves,s=this.clone(e);return n||(n=function(){}),o||(o=function(){}),this.map(i,function(e,t){var o=s[e];if(s[e]=t,o){var i,r=s[e].metas.map(function(e){return e.phx_ref}),a=o.metas.filter(function(e){return r.indexOf(e.phx_ref)<0});(i=s[e].metas).unshift.apply(i,function(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(a))}n(e,o,t)}),this.map(r,function(e,t){var n=s[e];if(n){var i=t.metas.map(function(e){return e.phx_ref});n.metas=n.metas.filter(function(e){return i.indexOf(e.phx_ref)<0}),o(e,n,t),0===n.metas.length&&delete s[e]}}),s}},{key:"list",value:function(e,t){return t||(t=function(e,t){return t}),this.map(e,function(e,n){return t(e,n)})}},{key:"map",value:function(e,t){return Object.getOwnPropertyNames(e).map(function(n){return t(n,e[n])})}},{key:"clone",value:function(e){return JSON.parse(JSON.stringify(e))}}]),e}(),T=function(){function e(t,n){i(this,e),this.callback=t,this.timerCalc=n,this.timer=null,this.tries=0}return s(e,[{key:"reset",value:function(){this.tries=0,clearTimeout(this.timer)}},{key:"scheduleTimeout",value:function(){var e=this;clearTimeout(this.timer),this.timer=setTimeout(function(){e.tries=e.tries+1,e.callback()},this.timerCalc(this.tries+1))}}]),e}()}])},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,i=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,i=!1,r=void 0;try{for(var s,a=e[Symbol.iterator]();!(o=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);o=!0);}catch(e){i=!0,r=e}finally{try{!o&&a.return&&a.return()}finally{if(i)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),r=n(0),s=n(1),a=(o=s)&&o.__esModule?o:{default:o};var c=function(e,t,n,o){var i=e.channel(t,{client:"browser"});return i.onMessage=function(e,t){return n({event:e,payload:t}),t},i.join().receive("ok",function(e){var t=e.messages;return console.log("successfully joined channel",t||"")}).receive("error",function(e){var t=e.reason;return console.error("failed to join channel",t)}),o(function(){return i.push.bind(i)}),function(){i.leave()}},u=function(){return function(){return console.error("useChannel broadcast function cannot be invoked before the channel has been joined")}};t.default=function(e,t,n){var o=(0,r.useContext)(a.default),s=(0,r.useReducer)(t,n),l=i(s,2),h=l[0],f=l[1],d=(0,r.useState)(u),p=i(d,2),v=p[0],y=p[1];return(0,r.useEffect)(function(){return c(o,e,f,y)},[e]),[h,v]}}]);