function google(info, tab) {
  return function (info, tab) {
    var selection = info.selectionText;
    var url = "https://www.google.com/search?q=" + selection;
    chrome.tabs.create({ index: tab.index + 1, url: url, selected: true });
  };
}
chrome.contextMenus.create({
  title: "Google",
  type: "normal",
  contexts: ["selection"],
  onclick: google(),
});

function search(info, tab) {
  return function (info, tab) {
    var selection = info.selectionText;
    var url = "https://en.wikipedia.org/wiki/" + selection;
    chrome.tabs.create({ index: tab.index + 1, url: url, selected: true });
  };
}
chrome.contextMenus.create({
  title: "Wikipedia",
  type: "normal",
  contexts: ["selection"],
  onclick: search(),
});

function diki(info, tab) {
  return function (info, tab) {
    var selection = info.selectionText;
    var url = "https://www.diki.pl/slownik-angielskiego?q=" + selection;
    chrome.tabs.create({ index: tab.index + 1, url: url, selected: true });
  };
}
chrome.contextMenus.create({
  title: "Dictionary Diki",
  type: "normal",
  contexts: ["selection"],
  onclick: diki(),
});

function mapa(info, tab) {
  return function (info, tab) {
    var selection = info.selectionText;
    var url = "https://www.google.com/maps/place/" + selection;
    chrome.tabs.create({ index: tab.index + 1, url: url, selected: true });
  };
}
chrome.contextMenus.create({
  title: "Maps",
  type: "normal",
  contexts: ["selection"],
  onclick: mapa(),
});
