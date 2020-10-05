export let userRules = {

    min : 5,
    max : 10,
    
};

export let passRules = {

    min : 6,
    max : 20,
    
};

/**
 * Can not be altered
 * 
 * @param {*} el 
 * @param {*} rules 
 */

export function fieldFilter(el, rules){

    return el.val().length < rules.min || el.val().length > rules.max;
};




export function check(el, ruleName){

    var result = fieldFilter(el,ruleName);
    
    result ?  el.css({border: '5px solid red'}) : el.css({border : '5px solid green'})

    
};


export function checkIfLoggedin(redirectWhere, redirectIfNot=null){
    if (localStorage.getItem('token')){
        console.log('have token')
        window.location.assign(redirectWhere)
    }else if(redirectIfNot){
        window.location.assign(redirectIfNot)
    }
}


