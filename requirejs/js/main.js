require.config({
	
	paths:{
		'jQuery' : 'vendor/jquery-1.11.2.min',
		
	},

	shim:{
		'jQuery':{
			'exports': '$'
		}
	}
});

require(['module1','module2','jQuery'],function( module1, module2){
   
   	module1.init();
   	module2.alertProduct();
   
});