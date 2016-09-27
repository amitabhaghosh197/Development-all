define(['../plugins/module3'],function(module3){

	
          
          var AddClass = function(){
          	$('body').addClass('red');
          };

		return{
			init:function(){
                 AddClass();
                 module3.ModThree();
			}
		}


	
	
});