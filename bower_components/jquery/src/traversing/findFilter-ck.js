define(["../core","../var/indexOf","./var/rneedsContext","../selector"],function(e,t,n){function i(n,i,s){if(e.isFunction(i))return e.grep(n,function(e,t){return!!i.call(e,t,e)!==s});if(i.nodeType)return e.grep(n,function(e){return e===i!==s});if(typeof i=="string"){if(r.test(i))return e.filter(i,n,s);i=e.filter(i,n)}return e.grep(n,function(e){return t.call(i,e)>=0!==s})}var r=/^.[^:#\[\.,]*$/;e.filter=function(t,n,r){var i=n[0];r&&(t=":not("+t+")");return n.length===1&&i.nodeType===1?e.find.matchesSelector(i,t)?[i]:[]:e.find.matches(t,e.grep(n,function(e){return e.nodeType===1}))};e.fn.extend({find:function(t){var n,r=this.length,i=[],s=this;if(typeof t!="string")return this.pushStack(e(t).filter(function(){for(n=0;n<r;n++)if(e.contains(s[n],this))return!0}));for(n=0;n<r;n++)e.find(t,s[n],i);i=this.pushStack(r>1?e.unique(i):i);i.selector=this.selector?this.selector+" "+t:t;return i},filter:function(e){return this.pushStack(i(this,e||[],!1))},not:function(e){return this.pushStack(i(this,e||[],!0))},is:function(t){return!!i(this,typeof t=="string"&&n.test(t)?e(t):t||[],!1).length}})});