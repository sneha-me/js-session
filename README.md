#Reusability In JS


----------
##Introduction : What is reusability
##Features
##Advantage
##Disadvantage
##Implementation
###Options

 1.  function 
	 - A JavaScript function is a block of code designed to perform a particular task.
	 - function can be invoked whenever necessary in our js file.
	 - eg. 
	

    
	    function addNumbers(a,b){
		                         return (a+b);
    	    }
    	    
    	

	Invocation : addNumbers(3,2);
	
 2.  Object Oriented Concept:
	 Wrap your methods inside a object and invoke the methods as ObjectName.methodName();
	 
		 
 3. Create a jQuery pluggin
	 Sometimes you want to make a piece of functionality available throughout your code. For example, perhaps you want a single method you can call on a jQuery selection that performs a series of operations on the selection. In this case, you may want to write a plugin.

example:

	$.fn :  It allows you to extend jQuery with your own functions

    $.fn.blueBorder = function(){
     this.each(function(){
      $(this).css("border","solid blue 2px");
     });
     return this;
    };
    $.fn.blueText = function(){
     this.each(function(){
      $(this).css("color","blue");
     });
     return this;
    };
and now you can actually invoke this method on any of the selectoe like :
        $('.blue').blueBorder().blueText();   (chaining)

