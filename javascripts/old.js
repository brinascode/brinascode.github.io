//**************VARIABLES and STORAGE*****************************************************

//****Getting our DOM elements:
var hi ="gg"
//The view
var view = document.getElementById("view")

//We save the original innerText for the About section
var viewInnerForAbout = view.innerHTML

//Buttons: apps,games,desings,info
var buttons = [document.getElementById("apps"),document.getElementById("games"),document.getElementById("designs"),document.getElementById("about")]


//Storing my projects (together they're all called apps): app,design,game,about
var apps = [{
        name:"Afribelle",
        description:"Cosmetics Marketplace (originally in French but Google Translate is available)",
        img :"images/afribellepic2.PNG",
        href :"https://afribelle.herokuapp.com/",
        type:"apps"
    },
       {
        name:"My Plan Abidjan",
        description:"City Guide app for Abidjan (originally in French but Google Translate is available)",
        img :"images/myplanabidjan.png",
        href :"https://myplanabidjan.herokuapp.com/",
        type:"apps"
    },{
        name:"School App",
        description:"Developped for my previous highschool",
        img :"images/mymgis.PNG",
        href :"https://mymgis2.herokuapp.com/",
        type:"apps"
    },{
        name:"My Journal",
        description:"A journal app that works offline in your browser",
        img :"images/myjournal.jpg",
        href :"myjournal",
        type:"apps"

    },{
        name:"Landing Page",
        description:"Landing page to Afribelle (originally in French but Google Translate is available)",
        img :"images/afribellepic.PNG",
        href :"https://afribelle-promo.herokuapp.com/",
        type:"designs"
    },{
        name:"Portfolio Space Theme",
        description:"Alternative theme to this very website",
        img :"images/portfoliospacetheme.png",
        href :"https://brinascode.herokuapp.com/",
        type:"designs"
    },{
        name:"Hangman",
        description:"A fun hangman game",
        img :"images/hangman.jpg",
        href :"hangman",
        type:"games"
    },{
        name:"Dressup!",
        description:"The dolls and their outfits are my creations",
        img :"images/dressup.jpg",
        href :"dressupGame",
        type:"games"
    },
    ]
    
//Storing the titles and descriptions of each category type (details)
 var typeDetails = 
    {apps: {title:"Web apps - Click to open!"},
    games: {title:"Games - Click to open!"},
    designs:{title:"Designs - Click to open!"},
    about:{title:"About - Click to open!"}
    }
         
//******FUNCTIONS NOW! ***********************************************************************



var appsToLoad = [] //where we store the apps we will be displaying


var selectView = function(type){ //Event helper for when menu button is clicked.
   
        var type = type
        //work pls
      
        /* We loop through our list of all apps (elements in Array) to populate the array of the apps 
        we are going to display */
        for (var i=0;i<apps.length;i++){
            //We enter each app now to chech its type property
                if(apps[i].type == type){
                    appsToLoad.push(apps[i])
                }
        }
        createView(type) //Then we create the view for the selected type      
} 

var createView = function(type){
  
                //The about page is special:
                if(type == "about"){
                    view.innerHTML = viewInnerForAbout 
                }
                else{
                            //First we empty the view from its current content:
                    view.innerText = ""

                     //Creating the Type's (mainCategory) title (Ex: Web Apps, Games etc...) and appending it at once
                      var title  = document.createElement("h2")
                      title.innerText = typeDetails[type].title
                      view.appendChild(title)

                     //Main Div
                      var mainDiv = document.createElement("div")
                      mainDiv.className = "row"

                  
                    for (var i=0; i<=appsToLoad.length-1; i++){   //Loop to create elements to show apps

                        var appsDivLeft = document.createElement("div")
                            appsDivLeft.className   = "col-md-6 col-lg-6 col-sm-6"
                            var img     = document.createElement("img")
                            img.src     = appsToLoad[i].img
                            img.alt     = "Picture loading"
                            img.style.width = 100+"%"
                           
                            var linkLeft  = document.createElement("a")
                            linkLeft.href  = appsToLoad[i].href
                            linkLeft.style.color  = "black" 
                            linkLeft.appendChild(img)

                            appsDivLeft.appendChild(linkLeft)

                        var appsDivRight = document.createElement("div")
                        appsDivRight.className   = "col-md-6 col-lg-6 col-sm-6"
                                var title   = document.createElement("h3")
                                title.innerText  = appsToLoad[i].name

                                var linkRight  = document.createElement("a")
                                linkRight.href  = appsToLoad[i].href
                                linkRight.style.color  = "black" 
                                linkRight.appendChild(title)
                                appsDivRight.appendChild(linkRight)
    
                                var description = document.createElement("p")
                                description.innerText  = appsToLoad[i].description
                                appsDivRight.appendChild(description)
                                
                                
                      
                        //Appending everything in div, then div to article
                        mainDiv.appendChild(appsDivRight)
                        mainDiv.appendChild(appsDivLeft)
                       
                        }
                        view.appendChild(mainDiv)
                 
                }

                appsToLoad = []
}

/*
//We add the click event to our buttons
for(var i=0;i<buttons.length;i++){
   buttons[i].addEventListener("click",function(e){
        selectView(e)
    },false)
}
*/ 
