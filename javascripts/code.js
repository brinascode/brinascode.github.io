    var content  = document.getElementById("content")
    var header = document.getElementById("header")
    var siteTitle = document.getElementById("site-title")
    var siteSubheading = document.getElementById("site-subheading")
    var leftNav = document.getElementById("left-nav")
    var content = document.getElementById("content")
    var portfolioSection = document.getElementById("portfolio")
    var blogSection = document.getElementById("blog")
    var scrollArrow = document.getElementById("scroll-arrow")

    scrollArrowDefaultStyle = {
        position:"absolute",
        top:"39vw",
        marginLeft:"-4vw",
        width:"4vw"
    }

    var headerDefaultStyle = 
    {
        textAlign:"center",
        padding:"18%",
        fontSize:"5vw",
        backgroundImage:"url('images/city2/pic.jpg')",
        backgroundRepeat:"no-repeat",
        backgroundSize:"120%",
        backgroundPosition:"center",
        color:"white",
        fontWeight: "5vw",
        fontFamily:"McLaren"
    }
    var siteTitleDefaultStyle = {
        position:"relative",
        bottom:"11vw",
        right:"13vw"
    }
    
    var siteSubheadingDefaultStyle = {
        fontSize:"1.3vw",
        position:"relative",
        bottom:"12vw",
        left:"10vw"
    }



    function getPortfolioItems(){
        $.get("https://brinascode-strapi.herokuapp.com/restaurants", function(data, status){
             var item = data[0]
             portfolioSection.style.display ="inline"
             /*
             portfolioSection.innerHTML = 
             `<h1>${item.name}</h1>`
             +`<p>${item.article_content}</p>`

             */
            }); 
    }

   

    function switchtoblog(){
            $("#header").fadeTo("slow", 0.15);
            $("#header").fadeTo("slow", 0.4);
            $("#header").fadeTo("slow", 0.6);
            $("#header").fadeTo("slow", 1);

          header.style = headerDefaultStyle
          siteSubheading.innerHTML = "Welcome to my Blog!"
          siteTitle.style = siteTitleDefaultStyle
          siteSubheading.style = siteSubheadingDefaultStyle
          scrollArrow.style = scrollArrowDefaultStyle

           //Styling Social Media Icons
           var instagram = document.getElementById("instagram")
           var twitter= document.getElementById("twitter")
           var linkedin= document.getElementById("linkedin")
           var github= document.getElementById("github")

           instagram.src ="images/icons/instagram-white.png"
           twitter.src ="images/icons/twitter-white.png"
           linkedin.src ="images/icons/linkedin-white.png"
           github.src ="images/icons/github-white.png"

           //Styling Nav links
           var portfoliolink = document.getElementById("portfoliolink")
           var bloglink = document.getElementById("bloglink")
           portfoliolink.style.color = "white"
           bloglink.style.color = "white"

           leftNav.style.display = "inline-block"
           content.style.width = "76.1vw"
           content.style.float = "right"

           blogSection.style.display = "visible"
           portfolioSection.style.display = "none"

           
         

           getBlogItems(); 
    }

    function switchtoportfolio(){

        $("#header").fadeTo("slow", 0.15);
        $("#header").fadeTo("slow", 0.4);
        $("#header").fadeTo("slow", 0.6);
        $("#header").fadeTo("slow", 1);

          portfolioSection.style.position = "relative"
          portfolioSection.style.bottom = "6vw"
          portfolioSection.style.zIndex = "50"
        
           header.style.backgroundImage = "url('images/purpleback/img.jpg')"
           header.style.backgroundSize = "100%"
           header.style.backgroundPosition = "bottom"
           header.style.height = "30vh"
           header.style.backgroundSize = "100%"
           header.style.color = "white"
           
           siteTitle.style.fontSize = "5vw"
           siteSubheading.innerHTML = "Welcome to my Portfolio!"
           siteSubheading.color = "black"
           siteSubheading.style.fontSize = "2vw"
           siteTitle.style.position = "relative"
           siteSubheading.style.position = "relative"
           siteSubheading.style.right = "50vw"

           //Styling Social Media Icons
           var instagram = document.getElementById("instagram")
           var twitter= document.getElementById("twitter")
           var linkedin= document.getElementById("linkedin")
           var github= document.getElementById("github")

           instagram.src ="images/icons/instagram-black.png"
           twitter.src ="images/icons/twitter-black.png"
           linkedin.src ="images/icons/linkedin-black.png"
           github.src ="images/icons/github-black.png"

        //Styling Nav links
           var portfoliolink = document.getElementById("portfoliolink")
           var bloglink = document.getElementById("bloglink")
           portfoliolink.style.color = "black"
           bloglink.style.color = "black"

           //The content Changes
           leftNav.style.display = "none"
           content.style.width = "98%"
           content.style.float = "none"
           content.style.overflow = "auto"
           blogSection.style.display = "none"
           portfolioSection.style.display = "visible"

           getPortfolioItems();
    }


   // getBlogItems()


   var blog = $("#blog")
   var articles = []
   function getBlogItems(){
    $.get("https://brinascode-strapi.herokuapp.com/articles", function(data, status){

        blog.css("{'display':'inline'}")
        blog.empty()

        data.forEach((article)=>{
            articles.push(article)
            blog.append(`
             <h1 class="article-link" id=${article.id}> ${article.name}</h1>
             <p>${article.article_content}</p>
             
            `)
          
        })
        });
}



       
$("#articles-list").on("click",()=>{
   getBlogItems()
})

$(".article-link").on("click",()=>{
    $get(`https://brinascode-strapi.herokuapp.com/articles/${e.id}`,function(data,status){
       var article = data[0]
        blog.html(`
        <h1 class="article-link">${article.name}</h1>
        <p>${article.article_content}</p> 
       `)
    })

   
})

getBlogItems()