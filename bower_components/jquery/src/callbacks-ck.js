define(["./core","./var/rnotwhite"],function(e,t){function r(r){var i=n[r]={};e.each(r.match(t)||[],function(e,t){i[t]=!0});return i}var n={};e.Callbacks=function(t){t=typeof t=="string"?n[t]||r(t):e.extend({},t);var i,s,o,u,a,f,l=[],c=!t.once&&[],h=function(e){i=t.memory&&e;s=!0;f=u||0;u=0;a=l.length;o=!0;for(;l&&f<a;f++)if(l[f].apply(e[0],e[1])===!1&&t.stopOnFalse){i=!1;break}o=!1;l&&(c?c.length&&h(c.shift()):i?l=[]:p.disable())},p={add:function(){if(l){var n=l.length;(function r(n){e.each(n,function(n,i){var s=e.type(i);s==="function"?(!t.unique||!p.has(i))&&l.push(i):i&&i.length&&s!=="string"&&r(i)})})(arguments);if(o)a=l.length;else if(i){u=n;h(i)}}return this},remove:function(){l&&e.each(arguments,function(t,n){var r;while((r=e.inArray(n,l,r))>-1){l.splice(r,1);if(o){r<=a&&a--;r<=f&&f--}}});return this},has:function(t){return t?e.inArray(t,l)>-1:!!l&&!!l.length},empty:function(){l=[];a=0;return this},disable:function(){l=c=i=undefined;return this},disabled:function(){return!l},lock:function(){c=undefined;i||p.disable();return this},locked:function(){return!c},fireWith:function(e,t){if(l&&(!s||c)){t=t||[];t=[e,t.slice?t.slice():t];o?c.push(t):h(t)}return this},fire:function(){p.fireWith(this,arguments);return this},fired:function(){return!!s}};return p};return e});