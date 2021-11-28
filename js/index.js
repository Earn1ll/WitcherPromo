import burgerMenu from "./burger.js";
import tabs from "./tabs.js";
import renderTabs from "./renderTabs.js";

burgerMenu(
    '.burger',
    '.navigation__list',
    '.burger__active',
    '.navigation__list_active',
)

tabs({
    selectorTabsButtons: '.tabs__btn',
    activeClassButton: 'tabs__btn_active',
    selectorTabsElement: '.tabs__item',
    activeClassTab: 'tabs__item_active',
    callback: renderTabs,
});

renderTabs();