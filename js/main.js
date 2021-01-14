const accodion_box = document.querySelector(".accordion").children;

for(let i=0; i<accodion_box.length; i++){
    const heading = accodion_box[i].querySelector(".heading");

    heading.onclick=function () {
        for(let j=0;j<accodion_box.length;j++){
            accodion_box[j].querySelector(".body").style.maxHeight ="0px";
            accodion_box[j].querySelector(".heading span").classList.remove("fa-minus");
            accodion_box[j].querySelector(".heading span").classList.add("fa-plus");
        }
      
            accodion_box[i].querySelector(".body").style.maxHeight = accodion_box[i].querySelector(".body").scrollHeight +"px";
            accodion_box[i].querySelector(".heading span").classList.remove('fa-plus');
            accodion_box[i].querySelector(".heading span").classList.add('fa-minus');
        }
        }



  



/*const acc = document.querySelector("accordion").children;
var i;

for (i = 0; i < acc.length; i++) {
    const heading = acc[i].querySelector(".heading");
  acc[i].addEventListener("click", function() {
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      acc[i].querySelector(".heading span").classList.remove('fa-plus');
      acc[i].querySelector(".heading span").classList.add('fa-minus');
  
      
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      acc[i].querySelector(".heading span").classList.remove('fa-plus');
      acc[i].querySelector(".heading span").classList.add('fa-minus');


    } 
  });
}
*/
