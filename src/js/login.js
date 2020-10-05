import{config} from './config.js'
import {fieldFilter, userRules, passRules, checkIfLoggedin} from './helper.js'
console.log(config)
$(document).ready(function(){
    checkIfLoggedin('./addItems.html')

})

    
$("#login").click(function(){
    
    var name = $(".name");
    var password = $(".password");

    

    // **If the inputs are empty, border gets red
    if( fieldFilter( name , userRules) ){

        $('.name').css({border: '1px solid red',})  

        return        

    }else if( fieldFilter( password, passRules) ){

        $('.password').css({border:'1px solid red',})

        return
    };

    var details = {

        user : name.val(),

        password : password.val(),
    };

    $.post( config.login, details ).done( function(response){

        if(response.status == 200){

            localStorage.setItem('token', response.token)
            window.location.assign("addItems.html")

        }else{
            
            $('span').show()
        };
    });

});




