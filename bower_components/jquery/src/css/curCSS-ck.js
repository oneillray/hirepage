define(["../core","./var/rnumnonpx","./var/rmargin","./var/getStyles","../selector"],function(e,t,n,r){function i(i,s,o){var u,a,f,l,c=i.style;o=o||r(i);o&&(l=o.getPropertyValue(s)||o[s]);if(o){l===""&&!e.contains(i.ownerDocument,i)&&(l=e.style(i,s));if(t.test(l)&&n.test(s)){u=c.width;a=c.minWidth;f=c.maxWidth;c.minWidth=c.maxWidth=c.width=l;l=o.width;c.width=u;c.minWidth=a;c.maxWidth=f}}return l!==undefined?l+"":l}return i});