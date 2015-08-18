/**
 * @fileoverview <%= projectName %>.
 * @author <%= author %> <%= email %>
 */
/**
 * KISSY.use('../index',function(S,<%= projectName %>){
 *		<%= projectName %>.init();
 * });
 */
KISSY.add(function(S, require, exports, module) {
	
	"use strict";

	// 引用本地其他模块
	// var Mod = require('./mod'); 
	
	// 载入本地 css 文件
	require('./index.css');

	var $ = S.all;

	module.exports = {
		init:function(){
			$('#log').text('ok');
		}
	};
	
});

