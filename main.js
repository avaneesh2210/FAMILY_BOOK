var array1 = ["FAMILY_BOOK.jpg","FAMILY_BOOK.jpg","DAD.jpg","MOM.jpg","SISTER.jpg","SON.jpg"];
    var array2 = ["Family book","King's family","Arjun","Sharadha","Lakshmi","Sharadh"];

function change_image(){
  var i = 0;
    i++
    var number_of_members = 4;
    if (i>number_of_members){
      i = 0;
    }
    var update_image = array1[i];
    var update_name = array2[i];  
    document.getElementById("image").innerHTML = update_image;
document.getElementById("text").innerHTML = update_name;
}