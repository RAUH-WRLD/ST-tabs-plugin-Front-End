export function activateSTtabs(object) {
    class STtabs {
        constructor(object) {
            this.tabs = document.querySelectorAll(object.classnameOfTabs);
            this.tabsInfo = document.querySelectorAll(object.classnameOfTabsInfo);
            this.stTabs(this.tabs, this.tabsInfo);
        };
        stTabs(tabs, infos) {
            const showTabs = (tabs, infos) => {
                const actionOnTabs = (tab, tabInfo) => {
                    const action = (item1, item2) => {
                        if (item1.id === item2.id) {
                            item2.classList.remove("not-active");
                            item2.classList.add("active");
                        } else if (tab.id !== tabInfo.id) {
                            item2.classList.remove("active");
                            item2.classList.add("not-active");
                        };
                    };
                    tab.addEventListener("click", () => {
                        return action(tab, tabInfo);
                    });
                };
                const hideOtherTabs = (tabs, item) => {
                    const iterateAllTabs = (tabInfo) => {
                        return tabs.forEach(tab => {
                            return actionOnTabs(tab, tabInfo);
                        });
                    };
                    return item.forEach(element => {
                        item[0].classList.add("active");
                        item[0].classList.remove("not-active");
                        element.classList.add("not-active");
                        return iterateAllTabs(element);
                    });
                };
                return hideOtherTabs(tabs, infos);
            };
            return showTabs(tabs, infos);
        };  
    };
    const tabs = new STtabs(object);
};