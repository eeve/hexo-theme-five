/*! This file is created by eeve. */
!function(o){function t(n){if(e[n])return e[n].exports;var l=e[n]={exports:{},id:n,loaded:!1};return o[n].call(l.exports,l,l.exports,t),l.loaded=!0,l.exports}var e={};return t.m=o,t.c=e,t.p="",t(0)}([function(o,t,e){var n=e(1);!function(){new n("backtop")}()},function(o,t){var e=function(o){var t=this;this.el=document.getElementById(o),this._scrollMove=function(o){t.setScrollTop(t.getScrollTop()/1.1),t.getScrollTop()<1&&clearInterval(o)},this.el.onclick=function(){t.back()},window.onscroll=function(){t.getScrollTop()>0?t.el.style.display="":t.el.style.display="none"}};e.prototype.getScrollTop=function(){return document.documentElement.scrollTop+document.body.scrollTop},e.prototype.setScrollTop=function(o){document.documentElement.scrollTop?document.documentElement.scrollTop=o:document.body.scrollTop=o},e.prototype.back=function(){var o=this,t=setInterval(function(){o._scrollMove(t)},10)},o.exports=e}]);