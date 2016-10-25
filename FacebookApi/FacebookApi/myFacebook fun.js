
$(document).ready(function () {
    
    $.ajaxSetup({ cache: true });
    $.getScript('//connect.facebook.net/en_US/sdk.js', function () {
        var accessToken;
        FB.init({

            //check the Id first!!
            appId: '201650830263114',
            xfbml: true,
            version: 'v2.8'
        });

        //???
        FB.AppEvents.logPageView();

        //check the connection
        FB.login(function (response) {
            if (response.authResponse) {
                //get accessToken
                //accessToken = response.authResponse.accessToken;

                //*******************************facebook sdk call api***************************************//
                //
                //get user's infomation obj
                //FB.api('/me', 'get', function (response) {
                //    console.log(response);
                //});

                //get uesr(log in) id, name, and picture

                
                FB.api('/me?fields=name,picture', 'get', function (response) {
                    name = response.name;
                    picture = response.picture.data.url;
                    //do something
                    dosomething(name, picture);
                    
                });


                //********************************Jquery call api**************************************//
                //note that accessToken is necessary 
                //$.ajax({
                //    url: "https://graph.facebook.com/me?access_token=" + accessToken,
                //    method: "GET",
                //    success: function () {
                //        alert("success");
                //    }
                //});
                

            }
            else {
                console.log('User cancelled login or did not fully authorize.');
            }
        });//Finsihed FB.login
        
    });//Finished getScript

    //**********************other code*******************************//
    dosomething = function (name, pirture) {
        alert();
    }
   

});