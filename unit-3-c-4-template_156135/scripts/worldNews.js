var obj=JSON.parse(localStorage.getItem("user"));

var image=document.createElement("img");
image.src=obj.image;

var nam=document.createElement("h3");
nam.innerText=obj.name;

var email=document.createElement("p");
email.innerText=obj.email;

var country=document.createElement("h2");
if(obj.country==="in")
{
    country.innerText="India";
}
else if(obj.country==="ch"){
    country.innerText="China";
}
else if(obj.country==="nz"){
    country.innerText="New Zealand";
}
else if(obj.country==="us"){
    country.innerText="USA";
}
else if(obj.country==="uk"){
    country.innerText="United Kingdom";
}


var cont=document.getElementById("box11");
cont.append(image,nam,email,country);


const api_key="https://masai-mock-api.herokuapp.com/news/top-headlines?country="+obj.country;
console.log(obj.country)

async function getNews(){
        
    try{
        let res=await fetch(api_key);
        let newsee=await res.json();
        let data=newsee.articles;
        append(data)
    }
    catch(err){
        console.log(err)
    }

}
getNews();


function append(data){
    var box12=document.getElementById("news_result");

    data.forEach(function(el,index){
        var box=document.createElement("div");
        box.setAttribute("class","news");

        var imag=document.createElement("img");
        imag.src=el.urlToImage;
        imag.style.width="150px"
        imag.style.height="100%"

        var author=document.createElement("p");
        author.innerText=el.author;

        var des=document.createElement("p");
        des.innerText=el.description;

        box.style.border="1px"
        box.append(imag,author,des);
        box12.append(box);
        
        box.addEventListener("click",function(){
            MyFun2(index)
        })
        function MyFun2(index){
            console.log("hello")
            console.log(index)
            localStorage.setItem("item",index);
            window.location.href="news.html";
        }

    })
}
