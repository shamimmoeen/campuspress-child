/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/* eslint-disable no-console */
console.log('Hello World! (from create-block-image-tabs-block block)!');

/* eslint-enable no-console */

class TabsAutomatic {
  constructor(groupNode) {
    this.tablistNode = groupNode;
    this.tabs = [];
    this.firstTab = null;
    this.lastTab = null;
    this.tabs = Array.from(this.tablistNode.querySelectorAll('[role=tab]'));
    this.tabPanels = [];
    for (let i = 0; i < this.tabs.length; i += 1) {
      const tab = this.tabs[i];
      const tabPanel = document.getElementById(tab.getAttribute('aria-controls'));
      tab.tabIndex = -1;
      tab.setAttribute('aria-selected', 'false');
      this.tabPanels.push(tabPanel);
      tab.addEventListener('keydown', this.onKeydown.bind(this));
      tab.addEventListener('click', this.onClick.bind(this));
      if (!this.firstTab) {
        this.firstTab = tab;
      }
      this.lastTab = tab;
    }
    this.setSelectedTab(this.firstTab, false);
  }
  setSelectedTab(currentTab, setFocus) {
    if (typeof setFocus !== 'boolean') {
      setFocus = true;
    }
    for (let i = 0; i < this.tabs.length; i += 1) {
      const tab = this.tabs[i];
      if (currentTab === tab) {
        tab.setAttribute('aria-selected', 'true');
        tab.removeAttribute('tabindex');
        this.tabPanels[i].classList.remove('is-hidden');
        if (setFocus) {
          tab.focus();
        }
      } else {
        tab.setAttribute('aria-selected', 'false');
        tab.tabIndex = -1;
        this.tabPanels[i].classList.add('is-hidden');
      }
    }
  }
  setSelectedToPreviousTab(currentTab) {
    let index;
    if (currentTab === this.firstTab) {
      this.setSelectedTab(this.lastTab);
    } else {
      index = this.tabs.indexOf(currentTab);
      this.setSelectedTab(this.tabs[index - 1]);
    }
  }
  setSelectedToNextTab(currentTab) {
    let index;
    if (currentTab === this.lastTab) {
      this.setSelectedTab(this.firstTab);
    } else {
      index = this.tabs.indexOf(currentTab);
      this.setSelectedTab(this.tabs[index + 1]);
    }
  }

  /* EVENT HANDLERS */
  onKeydown(event) {
    const tgt = event.currentTarget;
    let flag = false;
    switch (event.key) {
      case 'ArrowLeft':
        this.setSelectedToPreviousTab(tgt);
        flag = true;
        break;
      case 'ArrowRight':
        this.setSelectedToNextTab(tgt);
        flag = true;
        break;
      case 'Home':
        this.setSelectedTab(this.firstTab);
        flag = true;
        break;
      case 'End':
        this.setSelectedTab(this.lastTab);
        flag = true;
        break;
      default:
        break;
    }
    if (flag) {
      event.stopPropagation();
      event.preventDefault();
    }
  }
  onClick(event) {
    this.setSelectedTab(event.currentTarget);
  }
}

// Initialize tabs.
window.addEventListener('load', function () {
  const tabLists = document.querySelectorAll('[role=tablist].__image_tabs_block_tablist');
  for (let i = 0; i < tabLists.length; i++) {
    new TabsAutomatic(tabLists[i]);
  }
});
/******/ })()
;
//# sourceMappingURL=view.js.map