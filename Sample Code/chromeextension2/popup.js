// console.log("This is a popup!");

// $(document).ready(function () {
//     chrome.tabs.getSelected(null, function (tab) {
//         var link = document.createElement('a');
//         link.href = tab.url;
//         $("#host").html("URL: "+link.hostname);
        
//     })
// })

var tabUrl = chrome.tabs.getSelected(null, function(tab) {
    var tabUrl = tab.url;
    
    return tabUrl;
});