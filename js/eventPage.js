!function e(n,t,r){function o(a,c){if(!t[a]){if(!n[a]){var u="function"==typeof require&&require;if(!c&&u)return u(a,!0);if(i)return i(a,!0);var s=new Error("Cannot find module '"+a+"'");throw s.code="MODULE_NOT_FOUND",s}var l=t[a]={exports:{}};n[a][0].call(l.exports,function(e){var t=n[a][1][e];return o(t?t:e)},l,l.exports,e,n,t,r)}return t[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(){var e,n;n=function(e){return"install"===e.reason?(chrome.tabs.create({url:"welcome.html"}),mixpanel.track("Install"),chrome.windows.getAll(function(e){var n,t,r,o;for(o=[],n=0,t=e.length;t>n;n++)r=e[n],o.push(chrome.tabs.getAllInWindow(r.id,function(e){var n,t,r,o;for(r=[],n=0,t=e.length;t>n;n++)o=e[n],r.push(o.url.startsWith("chrome")?void 0:chrome.tabs.executeScript(o.id,{file:"js/content.js"}));return r}));return o})):void 0},e=function(){var e,n;return mixpanel.register({"Extension: Version":chrome.app.getDetails().version}),e={email:"",key:"",verified:!1},chrome.storage.sync.get(e,function(t){var r,o;return e=t,e.email&&e.key?navigator.onLine?(r=new FormData,r.append("email",e.email),r.append("key",e.key),o=new XMLHttpRequest,o.open("POST","https://smoothkeyscroll.herokuapp.com/license/verify",!0),o.onerror=function(){return n(!1)},o.onload=function(){return n("Valid"===o.responseText)},o.send(r)):void 0:n(!1)}),chrome.storage.sync.get({scrollCount:-1,notificationCount:-1},function(e){var n,t;return n=new FormData,n.append("id",mixpanel.get_distinct_id()),n.append("scroll_count",e.scrollCount),n.append("notification_count",e.notificationCount),t=new XMLHttpRequest,t.open("POST","https://smoothkeyscroll.herokuapp.com/analytics/submit",!0),t.send(n),mixpanel.people.set({scroll_count:e.scrollCount,notification_count:e.notificationCount})}),n=function(n){return e.verified=n,chrome.storage.sync.set(e)}},chrome.runtime.onInstalled.addListener(e),chrome.runtime.onStartup.addListener(e),chrome.runtime.onInstalled.addListener(n)},{}]},{},[1]);