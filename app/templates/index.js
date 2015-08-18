/**
 * @fileoverview Test.
 * @author NoName
 */
/**
 * KISSY.use('../index',function(S,Test){
 *		new Test({参数列表});
 * });
 */
KISSY.add(function(S, require, exports, module) {
	
	"use strict";

	// var Mod = require('./mod'); 
	require('./index.css');
	var $ = S.all;

	module.exports = {
		init:function(){
			$('#log').text('ok');
		}
	};
	
});

