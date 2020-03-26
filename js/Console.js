class Console{
    constructor(){

    }
    ct(text,type){  //ct stands for create tag
        var result = ""
        switch(type){
            case "text":
                result = `<span class='txt'>${text}</span>`
            case "det":
                result =  `<span class='det'>${text}</span>`
                break;
            case "str":
                result = `<span class='str'>${text}</span>`
            case "prop":
                result = `<span class='prop'>${text}</span>`
            case "num":
                result = `<span class='num'>${text}</span>`
            case "obj":
                 result = `<span class='obj'>${text}</span>`
            case "met":
                result = `<span class='met'>${text}</span>`
            case "var":
                result = `<span class='var'>${text}</span>`
        }
       return result
    }
    
}

