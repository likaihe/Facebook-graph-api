window.fbAsyncInit = function () {
    var accessToken;
    FB.init({

        //check the Id first!!
        appId: '201650830263114',
        xfbml: true,
        version: 'v2.8'
    });
    FB.AppEvents.logPageView();
    //check the connection
    FB.getLoginStatus(function (response) {
        if (response.status === 'connected') {
            console.log('Logged in.');
            //get accessToken
            accessToken = response.authResponse.accessToken;

            //*******************************facebook sdk call api***************************************//
            //
            //get user's infomation obj
            //FB.api('/me', 'get', function (response) {
            //    console.log(response);
            //});

            //********************************Jquery call api**************************************//
            //
            $.ajax({
                url: "https://graph.facebook.com/me?access_token=" + accessToken,
                method: "GET",
                success: function () {
                    alert("success");
                }
            });


        }
        else {
            FB.login();
            window.console.log("not");
        }
    });





};


//facebook like and share
(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));