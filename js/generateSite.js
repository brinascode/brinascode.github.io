function color(templateUrl,settingsArr){ // Function to color our template words to create a "console" (left side of site)
    return new Promise((resolve,reject)=>{
        var template = ""
        $.get(templateUrl,(data)=>{  // We must get the templateUrl: it's a file saved in the templates directory
            template = data
            for(var i=0;i<settingsArr.length;i++){
                var setting = settingsArr[i]
                if(setting.type === "specific"){ //If we're dealing with set words
                    setting.data.forEach((item,index)=>{
                        template = template.replace(item,`<span class='${setting.className}'>${item}</span>`)
                    })
                }else if(setting.type === "regex"){
                    //We find all the matches for our regex, then we loop to replace each of them
                    var matches = template.match(setting.regex)
                    matches.forEach((match,index)=>{
                        template = template.replace(match,`<span class='${setting.className}'> ${match} </span>`)
                    })  
                }
            } 
            resolve(template)
        })
    })
}

class Header{
    constructor(){
    }
    
    async createConsole(){
        var settingsArr = [
            {
                type:"specific",
                name:"determiners",
                data:["var","let","const"],
                className:"det" 
            },
            {
                type:"specific",
                name:"symbols",
                data:["+",".","{","}"],
                className:"text" 
            },
            {
                type:"regex",
                name:"properties",
                regex:/.*\:/igm,
                className:"prop"
            },
            {
                type:"regex",
                name:"strings",
                regex:/".*"/igm, 
                className:"str"
            }
        ]
        var consoleHtml = await color("./templates/console.html",settingsArr)
        $("#console").html(consoleHtml)
    }
}



// JjQuery starts here:
$(function(){
    //We create the header
   var header = new Header()
   header.createConsole()


   //Theme toggle:
   var siteLogo = $("#site-logo")
   var body = $("body")
   var headerLeft = $("#header-left")
   var rightPic = $("#right-pic")
   var centerPic = $("#center-pic")

   var toggle = true

   //Main dividers
   var header = $("#header")
   var aboutMe= $("#about-me")
   var myWork = $("#my-work")
   var mainDividers = [$("#header"),$("#about-me"),$("#my-work")]

   siteLogo.click(()=>{
        toggle ? goDark() : goLight()
        toggle = !toggle
    })
   function goDark(){
        siteLogo.attr("src","./images/logo-dark.png")
        rightPic.attr("src","./images/pinkblob.png")
        centerPic.attr("src","./images/profile-pic-dark.png")
        body.removeClass("light")
        body.addClass("dark")
        headerLeft.removeClass("light-editor")
        // headerLeft.addClass("dark-editor")
        aboutMe.removeClass("light")
        aboutMe.addClass("dark")

        mainDividers.forEach((item)=>{item.addClass("dark")})


   }
   function goLight(){
        siteLogo.attr("src","./images/logo-light.png")
        rightPic.attr("src","./images/pinkblob.png")
        centerPic.attr("src","./images/profile-pic-light.png")
        body.removeClass("dark")
        body.addClass("light")
        headerLeft.removeClass("dark-editor")
        headerLeft.addClass("light-editor")
        aboutMe.removeClass("dark")
        aboutMe.addClass("light")

        mainDividers.forEach((item)=>{item.addClass("light")})
   }


   
})
   
    




//OLD

// class Header{
//     constructor(htmlDestination,templateSrc){ //maybe in the future some css  dimensions can come here
//         this.htmlDestination = htmlDestination
//         this.template = templateSrc
//     }

    // injectIntoHTML(){ 
    //     $(this.htmlDestination).load(this.template)
    //  }
 
// createConsoleOld(){
//     var html = ct("var","var") + ct("user","var") + ct("= {","txt") + "</br>" + ct("username","prop") + ct(": brinascode","str")
//     }

// function ct(text,type){  //ct stands for create tag
//     var result = ""
//     switch(type){
//         case "text":
//             result = `<span class='txt'>${text}</span>`
//             break;
//         case "det":
//             result =  `<span class='det'>${text}</span>`
//             break;
//         case "str":
//             result = `<span class='str'>${text}</span>`
//             break;
//         case "prop":
//             result = `<span class='prop'>${text}</span>`
//             break;
//         case "num":
//             result = `<span class='num'>${text}</span>`
//             break;
//         case "obj":
//              result = `<span class='obj'>${text}</span>`
//              break;
//         case "met":
//             result = `<span class='met'>${text}</span>`
//             break;
//         case "var":
//             result = `<span class='var'>${text}</span>`
//             break;
//     }
//    return result
// }
