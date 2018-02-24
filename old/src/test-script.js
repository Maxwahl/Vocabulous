/*Testbereich*/
(function () {
    Polymer("register-login", {
        ready: function() {
            var myself = this;
    
            var password = myself.$.password;
            var user = myself.$.user;
    
            if(password == 'admin' && user == 'admin'){
                return true;
            }
            return false;
        }
    });
})
    /*Testbereich*/

    