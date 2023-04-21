document.addEventListener("DOMContentLoaded", function(){
    let counter = 0;
    function autoMsg(){
        let d = new Date(); 
        const hour = d.getHours();
        const min = d.getMinutes(); 
        const msg = `${hour}:${min} AI: Hello`;
        const li = document.createElement("li");
        li.innerHTML = msg;
        document.querySelector("#messages").append(li);
    }
    document.querySelector("form").onsubmit = function(){
        let d = new Date(); 
        const hour = d.getHours();
        const min = d.getMinutes(); 
        const fromTextBox = document.querySelector("#textbox").value;
        if(fromTextBox.trim() !== ""){
            const msg = `${hour}:${min} You:${fromTextBox.trim()}`;
            const li = document.createElement("li");
            li.innerHTML = msg;
            document.querySelector("#messages").append(li);
            document.querySelector("#textbox").value = "";
            let interval = Math.floor((Math.random() * 30) + 10);
            setTimeout(autoMsg, interval * 1000);
        }
        return false;
    }
});