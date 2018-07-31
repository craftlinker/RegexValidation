function validateName() {
    let name = document.getElementById("commentName").value;
    
    if (name.length == 0) {
        producePrompt("Name is Required", "red");
        return false;
    }
    else if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        producePrompt('First and last name, please.', 'red');
        return false;

    }
      
    else{
        producePrompt("Welcome " + name, "green");
        return true;
    }

    
}

function producePrompt(message, color){
    
    document.getElementById("namePrompt").innerHTML = message;
    document.getElementById("namePrompt").style.color = color;
}