﻿(function(window,document,undefined){window.console&&console.log("entering closure");var foo,bar=153;function myFunc(param){alert(param+foo+bar+42);arf(param,foo+bar,bar-foo)}window.myFunc=myFunc;function arf(one,two,three){one==undefined&&(one="undefined");foobar(one,two,three);alert("called foobar");document.location="#arf"}})(window,document);
/*! important external comment */
(function(a){a&&a.alert("external")})(window);
(function($){$(function(){alert("hi!")})})(jQuery)