const Dpass="oooo"

var pass = "oooo";
var locked="";
var password="";
Lock();
Pass();
setTimeout(hideSucess,200);

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
    console.log("lock pass=|"+pass+"| password=|"+password+"ab|");
    var aud = document.getElementById("beepS"); 
    aud.play(); 
    if(pass==password)
    {
        pass="oooo";
        document.getElementById("pass").innerHTML = beautify(pass);
        //alert("door open");
        showSucess();
    }
    else
    {
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

}
async function Lock()
{
    url="https://api.thingspeak.com/channels/1602764/fields/2.csv?api_key=BK6MUTVPMUW0COM0&results=1";
    const response = fetch(url);
    console.log(response);
    const data = await  (await response).text();
    UpdateLock(data);
    //document.write("lock "+data+"<br>");
}
function UpdateLock(s)
{
    var k = s.lastIndexOf(",");
    s=s.substring(k+1);
    //document.write(s)+"<br>";
    locked=s;
}
async function Pass()
{
    url="https://api.thingspeak.com/channels/1602764/fields/1.csv?api_key=BK6MUTVPMUW0COM0&results=1";
    const response = fetch(url);
    console.log(response);
    const data = await  (await response).text();
    //document.write("pass "+data+"<br>");
    UpdatePass(data);
}
function UpdatePass(s)
{
    var k = s.lastIndexOf(",");
    s=s.substring(k+1);
    console.log("password upadted = "+s);
    //document.write(s);
    for(var a=0;a<s.length;a++)
    if(s.charAt(a)>='0' && s.charAt(a)<='9')
    password+=s.charAt(a);
    console.log("password upadted = |"+password+'|');
}

function showSucess()
{
    var lock  = document.getElementById("lock");
    lock.style.display="none";
    var sucess = document.getElementById("sucess");
    sucess.style.display="block";
    setTimeout(hideSucess,5000);
  
}
function hideSucess()
{
    console.log("hiding");
    var lock  = document.getElementById("lock");
    lock.style.display="block";
    var x = document.getElementById("sucess");
    x.style.display="none";
}