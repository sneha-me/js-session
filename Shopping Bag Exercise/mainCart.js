$(function () {
  // Grab the template script
  var theTemplateScript = $("#shopping-cart-initial-template").html();

  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);

  
    //handle bar context data
     // Define our data object
  var jsonObject={
    "productsInCart":[  
      {  
         "p_id":"1",
         "p_name":"cotton tshirt",
         "p_variation":"solid green",
         "p_style":"ms13kt1906",
         "p_selected_color":{  
            "name":"blue",
            "hexcode":"#1169BD"
         },
         "p_selected_size":{  
            "name":"small",
            "code":"s"
         },
         "p_available_options":{  
            "colors":[  
               {  
                  "name":"green",
                  "hexcode":"#A3D2A1"
               },
               {  
                  "name":"yellow",
                  "hexcode":"#F9F8E6"
               },
               {  
                  "name":"red",
                  "hexcode":"#ED99A8"
               }
            ],
            "sizes":[  
               {  
                  "name":"small",
                  "code":"s"
               },
               {  
                  "name":"medium",
                  "code":"m"
               },
               {  
                  "name":"large",
                  "code":"l"
               },
               {  
                  "name":"extra large",
                  "code":"xl"
               }
            ]
         },
         "p_quantity":1,
         "p_originalprice":11.0,
         "p_price":11.0,
         "c_currency":"$"
      },
      {  
         "p_id":"2",
         "p_name":"print girls tee",
         "p_variation":"pink rainbow",
         "p_style":"ms13kt1906",
         "p_selected_color":{  
            "name":"pink",
            "hexcode":"#F1DDEF"
         },
         "p_selected_size":{  
            "name":"small",
            "code":"s"
         },
         "p_available_options":{  
            "colors":[  
               {  
                  "name":"green",
                  "hexcode":"#A3D2A1"
               },
               {  
                  "name":"yellow",
                  "hexcode":"#F9F8E6"
               },
               {  
                  "name":"pink",
                  "hexcode":"#F1DDEF"
               }
            ],
            "sizes":[  
               {  
                  "name":"small",
                  "code":"s"
               },
               {  
                  "name":"medium",
                  "code":"m"
               },
               {  
                  "name":"large",
                  "code":"l"
               },
               {  
                  "name":"extra large",
                  "code":"xl"
               }
            ]
         },
         "p_quantity":1,
         "p_originalprice":17.0,
         "p_price":17.0,
         "c_currency":"$"
      },
      {  
         "p_id":"3",
         "p_name":"flower pattern shirt",
         "p_variation":"blue",
         "p_style":"ms13kt1906",
         "p_selected_color":{  
            "name":"blue",
            "hexcode":"#1169BD"
         },
         "p_selected_size":{  
            "name":"small",
            "code":"s"
         },
         "p_available_options":{  
            "colors":[  
               {  
                  "name":"green",
                  "hexcode":"#A3D2A1"
               },
               {  
                  "name":"blue",
                  "hexcode":"#1169BD"
               },
               {  
                  "name":"red",
                  "hexcode":"#ED99A8"
               }
            ],
            "sizes":[  
               {  
                  "name":"small",
                  "code":"s"
               },
               {  
                  "name":"medium",
                  "code":"m"
               },
               {  
                  "name":"large",
                  "code":"l"
               },
               {  
                  "name":"extra large",
                  "code":"xl"
               }
            ]
         },
         "p_quantity":1,
         "p_originalprice":21.0,
         "p_price":9.0,
         "c_currency":"$"
      },
      {  
         "p_id":"4",
         "p_name":"check pattern tshirt",
         "p_variation":"mens red",
         "p_style":"ms13kt1906",
         "p_selected_color":{  
            "name":"red",
            "hexcode":""
         },
         "p_selected_size":{  
            "name":"small",
            "code":"s"
         },
         "p_available_options":{  
            "colors":[  
               {  
                  "name":"green",
                  "hexcode":"#A3D2A1"
               },
               {  
                  "name":"yellow",
                  "hexcode":"#F9F8E6"
               },
               {  
                  "name":"red",
                  "hexcode":"#ED99A8"
               }
            ],
            "sizes":[  
               {  
                  "name":"small",
                  "code":"s"
               },
               {  
                  "name":"medium",
                  "code":"m"
               },
               {  
                  "name":"large",
                  "code":"l"
               },
               {  
                  "name":"extra large",
                  "code":"xl"
               }
            ]
         },
         "p_quantity":1,
         "p_originalprice":22.0,
         "p_price":22.0,
         "c_currency":"$"
      }
   ]
  };
    // Pass our data to the template
  var theCompiledHtml = theTemplate(jsonObject);

  // Add the compiled html to the page
  $('.list-items').append(theCompiledHtml);
    
    
    // discount logic
    function ShoppingCart(){};
    
    var shoppingCart = new ShoppingCart();
    
    ShoppingCart.prototype.calculateSubTotal = function(){
        var subTotal = 0; orig_price = [];
        var price = $(".priceColumn .orig_price");
        for(i=0; i<price.length; i++){
            //orig_price.push(parseInt(price[i].innerHTML));
            subTotal += parseInt(price[i].innerHTML);
            }
        console.log(subTotal);
        return subTotal;
    }
    
    ShoppingCart.prototype.getSubtotal = function(){
         subTotalInCart = this.calculateSubTotal();
        $("#subTotal p").html(subTotalInCart);
    }
    
    ShoppingCart.prototype.getPromoCode = function(){
         discountApplied = this.applyPromoCode(shoppingCart.getNoOfProdInCart());
        $("#promoCode p").html(discountApplied);
    }
    
    ShoppingCart.prototype.getestimatedTotal = function(){
        estimatedTotal = this.calcEstimatedTotal(subTotalInCart, discountApplied);
        $("#estimatedTotal #total").html(estimatedTotal);
    }
   
    
    ShoppingCart.prototype.applyPromoCode = function(numOfProdInCart){
        var discount = 0;
        if(numOfProdInCart == 3){
            discount = 0.05 * subTotalInCart;
        }
        else if(numOfProdInCart >= 3 && numOfProdInCart <=6){
            discount = 0.1 * subTotalInCart;
        }
        else if(numOfProdInCart >= 10){
            discount = 0.25 * subTotalInCart;
        }
        return discount;
    }
    
    ShoppingCart.prototype.getNoOfProdInCart = function(){
        var NoOfProd = $(".priceColumn .orig_price");
        return NoOfProd.length;
    }
    
    shoppingCart.getSubtotal();
    shoppingCart.getPromoCode(shoppingCart.getNoOfProdInCart());
    
    
    
    ShoppingCart.prototype.calcEstimatedTotal = function(subTotal, discount){
        return subTotal - discount;
    }
    shoppingCart.getestimatedTotal(subTotalInCart, discountApplied);
    
    
    
    $(".quantity").on('blur','.product_quantity', function(){
       var currVal = $(this).val();
       var prodId = $(this).data('id');
        $('#'+prodId).html(currVal*parseInt($('.priceColumn #'+prodId).html()));
        shoppingCart.getSubtotal();
        shoppingCart.getPromoCode();
        shoppingCart.getestimatedTotal();
        
        
    });
    
    
    
});
