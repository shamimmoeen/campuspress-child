(()=>{class t{constructor(t){this.tablistNode=t,this.tabs=[],this.firstTab=null,this.lastTab=null,this.tabs=Array.from(this.tablistNode.querySelectorAll("[role=tab]")),this.tabPanels=[];for(let t=0;t<this.tabs.length;t+=1){const e=this.tabs[t],s=document.getElementById(e.getAttribute("aria-controls"));e.tabIndex=-1,e.setAttribute("aria-selected","false"),this.tabPanels.push(s),e.addEventListener("keydown",this.onKeydown.bind(this)),e.addEventListener("click",this.onClick.bind(this)),this.firstTab||(this.firstTab=e),this.lastTab=e}this.setSelectedTab(this.firstTab,!1)}setSelectedTab(t,e){"boolean"!=typeof e&&(e=!0);for(let s=0;s<this.tabs.length;s+=1){const a=this.tabs[s];t===a?(a.setAttribute("aria-selected","true"),a.removeAttribute("tabindex"),this.tabPanels[s].classList.remove("is-hidden"),e&&a.focus()):(a.setAttribute("aria-selected","false"),a.tabIndex=-1,this.tabPanels[s].classList.add("is-hidden"))}}setSelectedToPreviousTab(t){let e;t===this.firstTab?this.setSelectedTab(this.lastTab):(e=this.tabs.indexOf(t),this.setSelectedTab(this.tabs[e-1]))}setSelectedToNextTab(t){let e;t===this.lastTab?this.setSelectedTab(this.firstTab):(e=this.tabs.indexOf(t),this.setSelectedTab(this.tabs[e+1]))}onKeydown(t){const e=t.currentTarget;let s=!1;switch(t.key){case"ArrowLeft":this.setSelectedToPreviousTab(e),s=!0;break;case"ArrowRight":this.setSelectedToNextTab(e),s=!0;break;case"Home":this.setSelectedTab(this.firstTab),s=!0;break;case"End":this.setSelectedTab(this.lastTab),s=!0}s&&(t.stopPropagation(),t.preventDefault())}onClick(t){this.setSelectedTab(t.currentTarget)}}window.addEventListener("load",(function(){const e=document.querySelectorAll("[role=tablist].__image_tabs_block_tablist");for(let s=0;s<e.length;s++)new t(e[s])}))})();