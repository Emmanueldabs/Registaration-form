function validate(){
//validation for 1st name
var fname=document.form1.fname.value;
if(fname==""){
    document.getElementById("fnv").innerHTML="*please enter your full name";
    document.form1.fname.focus();
    return false;
}
else{
    document.getElementById("fnv").innerHTML="";
}
//validation for E-mail
var em=document.form1.Email.value;
var atpos=em.indexOf("@");
var dotpos=em.lastIndexOf(".");
if(em==""){
    document.getElementById("ev").innerHTML="*please enter your E-mail";
    document.form1.Email.focus();
    return false;
}
else if(atpos<1||(dotpos-atpos<2)){
 document.getElementById("ev").innerHTML="*please enter proper E-mail";
 document.form1.Email.focus();
 return false;
}
else{
    document.getElementById("ev").innerHTML="";
}
//validation for mobile number
var mn=document.form1.Number.value;
if(mn==""){
    document.getElementById("mv").innerHTML="*please enter your phone number";
    document.form1.Number.focus();
    return false;
}
else if(mn.length!=10||isNaN(mn)){
    document.getElementById("mv").innerHTML="*please enter proper phone number";
    document.form1.Number.focus();
    return false;
}
else{
    document.getElementById("mv").innerHTML="";
}
//validation for date of birth
var d=document.form1.DOB.value;
if(d==""){
    document.getElementById("dobv").innerHTML="*please enter date of birth";
    document.form1.DOB.focus();
    return false;
}
else{
    document.getElementById("dobv").innerHTML="";
}
//validation for username
var u=document.form1.Uname.value;
if(u==""){
    document.getElementById("usv").innerHTML="*please enter Username";
    document.form1.Uname.focus();
    return false;
}
else{
    document.getElementById("usv").innerHTML="";
}
//validation for password
var p=document.form1.Password.value;
if(p==""){
    document.getElementById("pv").innerHTML="*please enter password";
    document.form1.Password.focus();
    return false;
}
else if(p.length!=6){
    document.getElementById("pv").innerHTML="*password must be at least 6 charcecters";
    document.form1.Password.focus();
    return false;
}
else{
    document.getElementById("pv").innerHTML="";
}
//validation for comfirm password
var cp=document.form1.CPassword.value;
if(cp==""){
    document.getElementById("cpv").innerHTML="*please confirm password";
    document.form1.CPassword.focus();
    return false;
}
else if(p!=cp){
    document.getElementById("cpv").innerHTML="*password and confirm password should be the same";
    document.form1.CPassword.focus();
    return false;
}
else{
    document.getElementById("cpv").innerHTML="";
}
//validation for gender
var g=document.getElementsByName("radio1");
if (g[0].checked==true){
    document.getElementById("rgen").innerHTML="";
}
else if(g[1].checked==true){
    document.getElementById("rgen").innerHTML="";
}
else{
    document.getElementById("rgen").innerHTML="*please select your gender";
    return false;
}
//validation for pincode
var pin=document.form1.pincode.value;
if(pin==""||pin.length!=6){
    document.getElementById("pinv").innerHTML="*please enter pincode";
    document.form1.pincode.focus();
    return false;
}
else{
    document.getElementById("pinv").innerHTML="";
}
//validation for country
var con=document.form1.Country.value;
if(con==-1){
    document.getElementById("cv").innerHTML="*please enter your country";
    return false;
}
else{
    document.getElementById("cv").innerHTML="";
}
}




























