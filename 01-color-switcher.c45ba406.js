const e=document.querySelector("body"),t=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]");let a=null;t.addEventListener("click",(function(l){a=setInterval((()=>{e.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.disabled=!0,d.disabled=!1})),d.addEventListener("click",(function(){clearInterval(a),t.disabled=!1,d.disabled=!0}));
//# sourceMappingURL=01-color-switcher.c45ba406.js.map