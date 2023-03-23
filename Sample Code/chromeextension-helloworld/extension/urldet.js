// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     var tab = tabs[0];
//       console.log(tab.url);

// async function getCurrentTab() {
//     let queryOptions = { active: true, lastFocusedWindow: true };
//     let [tab] = await chrome.tabs.query(queryOptions);
//   return tab;
//     }

// var tabUrl;
// chrome.browserAction.onClicked.addListener(function(activeTab) {
//     var x=activeTab.url;
//     var newURL = "https://www.google.com";
//     if (x!= newURL) {
//         //to open a page in a new tab
//         chrome.tabs.create({url: newURL,"selected":true});
//         //to open the page with the current tab
//         chrome.tabs.update(activeTab.id, {url:newURL});
//     }
// });

var tabUrl = chrome.tabs.getSelected(null, function(tab) {
    var tabUrl = tab.url;
    
    return tabUrl;
});