module.exports = function(grunt){
	grunt.initConfig({
		log: {
			foo: [1,2,3],
			bar: 'hello world',
			baz: false
		}
	})

	grunt.registerTask('default', 'des1111111', function(a,b){
		console.log(grunt.config)
	})
}