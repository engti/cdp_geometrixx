// digitalData = {
//     loginStatus : '',
//     userID: '',
// }
var userCookie = getCookie("username");
window.onload = function(e){ 

var cartCookie = getCookie("simpleCart");
if(userCookie.length>0){

    document.getElementById('username').innerHTML = userCookie;
    document.getElementById('login_logout').innerHTML = "Logout";
    // digitalData.loginStatus = 'Logged In';
    // digitalData.userID = document.getElementById('username').innerHTML;

}
else {
    document.getElementById('login_logout').innerHTML = "Login";
    // digitalData.loginStatus = 'Logged Out';
}
// if(userCookie.length===0){
//    window.location.href = "index.html";
// }
};
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 3600 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

function logout(){
//   setCookie("username",'',-1);
if(userCookie.length>0){
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
   window.location.href = "/home.html";
}
else{
    window.location.href = "/index.html";
}
}