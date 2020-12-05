



window.addEventListener("load",function(){//loads the js file after the window is loaded...previously the js file was loaded even before the document..resulting in null 
    console.log("loaded");

    var op = document.querySelector("#output");
    var inp = document.querySelector("#input");
    var btn=document.querySelector("#btn-translate")
    
    
    btn.addEventListener("click", function  minionsTranslate()//callback function ->that gets invokes when the respective event happenss
    {
        var inptext=inp.value;
        console.log(inptext);
        fetch(serverApi(inptext))
            .then(response => response.json())
            .then(json => op.innerText=json.contents.translated)
            .catch(errorHandler)
    });
    
    function errorHandler()
    {
        console.log("error occured");
        alert("Something went wrong with the server. Please try after sometime ")
    }

    function serverApi(text)
    {
        var serverURL = "https://api.funtranslations.com/translate/minion.json";
        return serverURL+"?"+"text="+text;
    }
})