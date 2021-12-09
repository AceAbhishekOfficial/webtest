const Dpass="oooo"
var pass = "oooo";

function Click(b) 
{
    var aud = document.getElementById("beep"); 
    aud.play(); 
    if (pass.length >= 4) pass = "";
    pass += b;
    document.getElementById("pass").innerHTML = beautify(pass);
}
function beautify(s)
{

    var r = "" + s.charAt(0);
    for (var a = 1; a < s.length; a++)
        r = r + " " + s.charAt(a);
    return r;
}
function er() 
{
    if (pass != "oooo")
        if (pass.length == 1)
            pass = Dpass;
        else if (pass.length > 1)
            pass = pass.substring(0, pass.length - 1);
    document.getElementById("pass").innerHTML = beautify(pass);
}
function call() 
{
    var aud = document.getElementById("beepS"); 
    aud.play(); 
    pass=Dpass;
    document.getElementById("pass").innerHTML = beautify(pass);
    document.getElementById("pass").animate([
        {transform: 'translate(20px,0px)'},
        {transform: 'translate(-20px,0px)'},
        
      ], {
        duration: 100,
        iterations: 3,
        delay: 0
      });
      

}