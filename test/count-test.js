(function(){
	// Import
	var expect = require('chai').expect,
		joe = require('joe')

	// Test
	joe.describe('log plugin', function(describe,it){
		var Chainy = require('chainy-core').subclass().require('set').addExtension('count', require('../'))

		it("should fire successfully", function(next){
			var data = [1,2,3]
			var chain = Chainy.create()
				.set(data)
				.count()
				.done(function(err, result){
					if (err)  return next(err)
					expect(result).to.equal(data)
					return next()
				})
		})
	})
})()
