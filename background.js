var myURL = "about:blank"; // A default url just in case below code doesn't work
chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function(tabs) {
    var tab = tabs[0];
    myURL = tab.url;
  });
  // chrome.browserAction.onClicked.addListener(function(activeTab){
  //   var newURL = "http://stackoverflow.com/";
  //   chrome.tabs.create({ url: newURL });
  // });
  