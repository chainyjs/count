"use strict";
module.exports = function(value, opts, next){
	require('chainy-core').create({parent:this}).require('set log')
		.set(value && value.length)
		.log(opts)
		.done(function(err){
			return next(err)  // discard the updated result
		})
}
module.exports.extensionType = 'action'