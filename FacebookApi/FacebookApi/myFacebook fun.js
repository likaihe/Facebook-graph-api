
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
        FB.getLoginStatus(function (response) {
            if (response.status === 'connected') {
                console.log('Logged in.');
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
                alert("please log in to facebook")
            }
        });
       
        
    });//Finished getScript

    //**********************other code*******************************//
    dosomething = function (name, pirture) {
           
    }
   

});