function post_to_url(url,name,value){
    var form = document.createElement("form"); //create a form
    form.setAttribute("method", "post"); //set form method to post
    form.setAttribute("action", url); //url to send to
    var hiddenField = document.createElement("input"); //create an input feild
    hiddenField.setAttribute("type", "hidden"); //make input feild hidden
    hiddenField.setAttribute("name", name); //set name to given name parameter
    hiddenField.setAttribute("value", value ); //set value to given value parameter
    form.appendChild(hiddenField); //append input feild as a child to form
    document.body.appendChild(form); //append form to document
    form.submit(); //submit this generated form with hidden text feild
}
