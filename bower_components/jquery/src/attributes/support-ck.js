define(["../var/support"],function(e){(function(){var t=document.createElement("input"),n=document.createElement("select"),r=n.appendChild(document.createElement("option"));t.type="checkbox";e.checkOn=t.value!=="";e.optSelected=r.selected;n.disabled=!0;e.optDisabled=!r.disabled;t=document.createElement("input");t.value="t";t.type="radio";e.radioValue=t.value==="t"})();return e});