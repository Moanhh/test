function validateForm() {

     // check type email 
var chMail= document.getElementById('ycEmail');

var mail=document.forms["myForm"]["email"].value;
var aCong=mail.indexOf("@");
var dauCham = mail.lastIndexOf(".");

if (mail == "") {
chMail.innerHTML = '*Bạn chưa nhập mail';

}
else if ((aCong<1) || (dauCham<aCong+2) || (dauCham+2>mail.length)) {
chMail.innerHTML = '*Email không đúng';

} else {
     chMail.innerHTML = '';
     console.log( "Gmail: ",mail);
}


//check password
var chPass = document.getElementById('ycPassword');
var pass = document.forms["myForm"]["password"].value;

if (pass == "") {
     chPass.innerHTML='*Bạn chưa nhập mật khẩu';

} else {
     chPass.innerHTML='';
     console.log(pass);
}


}