function show(){
    document.getElementById("pageContainer").style.display="flex";
}
function hide(){
    document.getElementById("pageContainer").style.display="none";
}

//************************************front pages********************************************
var picNumber=6;
function nextPic(){
    if (picNumber>=10) {
        picNumber=5;
    }
    ++picNumber;
    console.log(picNumber);
    if (picNumber==6) {
        document.querySelector(".h3Head1").innerText="Made Me Your Health Is Your property.";
        document.querySelector(".h1Head").innerText= "Health Service Design With Care.";
        document.querySelector(".h3Head2").innerText="welcome we have made your health as priority and we are ready to take step towards a smiling future.";
        document.getElementById("frontDocImg").setAttribute("src","../ASSETS/doc.webp"); 
        document.getElementById("buble1").style.transform=`scale(2)`;
        document.getElementById("buble1").style.backgroundColor="blue";

    }else if (picNumber==7) {
        document.querySelector(".h3Head1").innerText="EXPERT HANDS IN HEALTHCARE";
        document.querySelector(".h1Head").innerText= "We Accompany You For A Healthy Lifestyle.";
        document.querySelector(".h3Head2").innerText="At our clinic, we are focused on providing you with the best health care service along your expert team.";
        document.getElementById("frontDocImg").setAttribute("src","../ASSETS/d7.webp");
        document.getElementById("buble2").style.transform=`scale(2)`;
        document.getElementById("buble2").style.backgroundColor="blue";
    } else if (picNumber==8) {
        document.querySelector(".h3Head1").innerText="Made Me Your Health Is Your property.";
        document.querySelector(".h1Head").innerText= "Health Service Design With Care.";
        document.querySelector(".h3Head2").innerText="welcome we have made your health as priority and we are ready to take step towards a smiling future.";
        document.getElementById("frontDocImg").setAttribute("src","../ASSETS/d8.webp");
        document.getElementById("buble3").style.transform=`scale(2)`;
        document.getElementById("buble3").style.backgroundColor="blue";
    }else if (picNumber==9) {
        document.querySelector(".h3Head1").innerText="EXPERT HANDS IN HEALTHCARE";
        document.querySelector(".h1Head").innerText= "We Accompany You For A Healthy Lifestyle.";
        document.querySelector(".h3Head2").innerText="At our clinic, we are focused on providing you with the best health care service along your expert team.";
        document.getElementById("frontDocImg").setAttribute("src","../ASSETS/d9.webp");
        document.getElementById("buble4").style.transform=`scale(2)`;
        document.getElementById("buble4").style.backgroundColor="blue";
    }else if (picNumber==10) {
        document.querySelector(".h3Head1").innerText="Made Me Your Health Is Your property.";
        document.querySelector(".h1Head").innerText= "Health Service Design With Care.";
        document.querySelector(".h3Head2").innerText="welcome we have made your health as priority and we are ready to take step towards a smiling future.";
        document.getElementById("frontDocImg").setAttribute("src","../ASSETS/d10.jpeg");
        document.getElementById("buble5").style.transform=`scale(2)`;
        document.getElementById("buble5").style.backgroundColor="blue";
    }
    if (picNumber!=6) {
        document.getElementById("buble1").style.transform=`scale(1)`;
        document.getElementById("buble1").style.backgroundColor="transparent";
    }
    if (picNumber!=7) {
        document.getElementById("buble2").style.transform=`scale(1)`;
        document.getElementById("buble2").style.backgroundColor="transparent";
    } 
    if (picNumber!=8) {
        document.getElementById("buble3").style.transform=`scale(1)`;
        document.getElementById("buble3").style.backgroundColor="transparent";
    }
    if (picNumber!=9) {
        document.getElementById("buble4").style.transform=`scale(1)`;
        document.getElementById("buble4").style.backgroundColor="transparent";
    }
    if (picNumber!=10) {
        document.getElementById("buble5").style.transform=`scale(1)`;
        document.getElementById("buble5").style.backgroundColor="transparent";
    }
    
}
function priviousPic(){
if (picNumber<7) {
    picNumber=11;
}
picNumber--;
console.log(picNumber);
if (picNumber==6) {
        document.querySelector(".h3Head1").innerText="Made Me Your Health Is Your property.";
        document.querySelector(".h1Head").innerText= "Health Service Design With Care.";
        document.querySelector(".h3Head2").innerText="welcome we have made your health as priority and we are ready to take step towards a smiling future.";
        document.getElementById("frontDocImg").setAttribute("src","../ASSETS/doc.webp"); 
        document.getElementById("buble1").style.transform=`scale(2)`;
        document.getElementById("buble1").style.backgroundColor="blue";

    }else if (picNumber==7) {
        document.querySelector(".h3Head1").innerText="EXPERT HANDS IN HEALTHCARE";
        document.querySelector(".h1Head").innerText= "We Accompany You For A Healthy Lifestyle.";
        document.querySelector(".h3Head2").innerText="At our clinic, we are focused on providing you with the best health care service along your expert team.";
        document.getElementById("frontDocImg").setAttribute("src","../ASSETS/d7.webp");
        document.getElementById("buble2").style.transform=`scale(2)`;
        document.getElementById("buble2").style.backgroundColor="blue";
    } else if (picNumber==8) {
        document.querySelector(".h3Head1").innerText="Made Me Your Health Is Your property.";
        document.querySelector(".h1Head").innerText= "Health Service Design With Care.";
        document.querySelector(".h3Head2").innerText="welcome we have made your health as priority and we are ready to take step towards a smiling future.";
        document.getElementById("frontDocImg").setAttribute("src","../ASSETS/d8.webp");
        document.getElementById("buble3").style.transform=`scale(2)`;
        document.getElementById("buble3").style.backgroundColor="blue";
    }else if (picNumber==9) {
        document.querySelector(".h3Head1").innerText="EXPERT HANDS IN HEALTHCARE";
        document.querySelector(".h1Head").innerText= "We Accompany You For A Healthy Lifestyle.";
        document.querySelector(".h3Head2").innerText="At our clinic, we are focused on providing you with the best health care service along your expert team.";
        document.getElementById("frontDocImg").setAttribute("src","../ASSETS/d9.webp");
        document.getElementById("buble4").style.transform=`scale(2)`;
        document.getElementById("buble4").style.backgroundColor="blue";
    }else if (picNumber==10) {
        document.querySelector(".h3Head1").innerText="Made Me Your Health Is Your property.";
        document.querySelector(".h1Head").innerText= "Health Service Design With Care.";
        document.querySelector(".h3Head2").innerText="welcome we have made your health as priority and we are ready to take step towards a smiling future.";
        document.getElementById("frontDocImg").setAttribute("src","../ASSETS/d10.jpeg");
        document.getElementById("buble5").style.transform=`scale(2)`;
        document.getElementById("buble5").style.backgroundColor="blue";
    }
    if (picNumber!=6) {
        
        document.getElementById("buble1").style.transform=`scale(1)`;
        document.getElementById("buble1").style.backgroundColor="transparent";
    }
    if (picNumber!=7) {
        document.getElementById("buble2").style.transform=`scale(1)`;
        document.getElementById("buble2").style.backgroundColor="transparent";
    } 
    if (picNumber!=8) {
        document.getElementById("buble3").style.transform=`scale(1)`;
        document.getElementById("buble3").style.backgroundColor="transparent";
    }
    if (picNumber!=9) {
        document.getElementById("buble4").style.transform=`scale(1)`;
        document.getElementById("buble4").style.backgroundColor="transparent";
    }
    if (picNumber!=10) {
        document.getElementById("buble5").style.transform=`scale(1)`;
        document.getElementById("buble5").style.backgroundColor="transparent";
    }
   
}

