/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/

function UserInfo(n,i,e,c)
{
    this.name=n;
    this.image=i;
    this.email=e;
    this.country=c;
}


function Myfun()
{
    console.log("I'm in");
    var name=document.getElementById("user_name").value;

    var image=document.getElementById("user_pic").value;

    var email=document.getElementById("user_email").value;

    var country=document.getElementById("user_country").value;

    var info=new UserInfo(name,image,email,country);
    console.log(info)

    localStorage.setItem("user",JSON.stringify(info));

    document.getElementById("user_name").value=null;
    document.getElementById("user_pic").value=null
    document.getElementById("user_email").value=null
    document.getElementById("user_country").value=null
}

