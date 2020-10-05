import{config} from './config.js'
import * as Data from './helper.js'  

Data.checkIfLoggedin('addItems.html')

var user = $('.user');
var password = $(".password");
var retypePass = $(".retype-password");
        
$('.register').click(function(){

            var details = {
            name : user.val(),
            password : password.val(),
                };  
                console.log(details)
        if(password.val() === retypePass.val()){

            $.post( config.register, details).done( function(response){
                console.log(response)

            if(response.status == 200){

                localStorage.setItem('token', response.token)
                window.location.assign('addItems.html')          
            }
            })
        }   
         });



user.keyup(function(){
    Data.check( $(this), Data.userRules )
});

password.keyup(function(){
    Data.check($(this), Data.passRules)
});

retypePass.keyup(function(){
    password.val() !== retypePass.val() ? $(this).css({border: '5px solid red'}) : $(this).css({border : '5px solid green'})
});


// var elements = [user, password, retypePass]

// $.each(elements, function(index, element){
//     element.keyup(function (){
//         check( $(this), userRules )
//     })
// })

