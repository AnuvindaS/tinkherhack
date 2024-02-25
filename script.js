
function validation(){
    if(document.getElementById("name-input").value=="")
    {
        document.getElementById("name-validation").style.display="block";
    }

    if(document.getElementById("email-input").value=="")
    {
        document.getElementById("email-validation").style.display="block";
    }

    if(document.getElementById("location-input").value=="")
    {
        document.getElementById("location-validation").style.display="block";
    }


    if(document.getElementById("message-input").value=="")
    {
        document.getElementById("message-validation").style.display="block";
    }

    return false;

}