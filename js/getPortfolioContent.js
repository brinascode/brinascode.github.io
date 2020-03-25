var destination = $("#work-flex-container")

var githubRoot = "https://github.com/brinascode"

    content.map((item)=>{ //Content variable is an array coming from portfolioData.js
        destination.append(` 
                            <div class="work-flex-item">
                                <img src="${item.image}" width="100%"/>
                                <span class="item-info">
                                   <h3> ${item.name}   <a href=${item.github}>  <img src="images/icons/visitlink.png" width="6%" /> </a>
                                                       <a href=${item.live}>     <img src="images/icons/github.png" width="6%" /> </a></h3>
                                    ${item.description}
                                     <br></br>
                                    <br></br>
                                </span>   
                            </div>`
                           
                        )
    })


    //   <div class="item-info">
    //                                <h3> ${item.name} </h3>
    //                                 ${item.description}
    //                                 <br></br>
    //                               <a href=${item.github}>  <img src="images/icons/visitlink.png" width="10%" /> </a>
    //                               <a href=${item.live}>     <img src="images/icons/github.png" width="10%" /> </a>
    //                             </div>