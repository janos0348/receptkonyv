var txt;
var kepIndex = 0;
$(function(){
    beolvas("json.json",megjelenitTableBlock)
    //gomb
    
});
function beolvas(eleres,callback){
    fetch(eleres)
      .then((response) => response.json())
      .then((data) => {
          console.log(data.recept);
          callback(data.recept);
      });
  
  }
function megjelenitTableBlock(tomb){
    buttonos(tomb);
    txt = "<table>";
    tomb.forEach(function (recept,index) {
        txt += "<tr id = " + index + ">"
        for(const key in recept){
            txt+="<td>";
            txt+=recept[key];
            txt+="</td>";
        }
        txt+="</tr>";
    });
    txt +="</table>";
    $(".tartalom").append(txt);
    $(".tartalom table tr").on("click", function (){
        console.log($(this).attr("id"))
    })
}
function buttonos(tomb){
    for (let i = 0; i < $(".recik").children("button").length; i++) {
        $("button").eq(i).click(function(){
                if (i==0) {
                    if (kepIndex==0) {
                        kepIndex= tomb.length-1;
                    }else{
                        kepIndex-=1;
                    }
                   
                }else{
                    if (kepIndex==tomb.length-1) {
                        kepIndex= 0;
                    }else{
                        kepIndex+=1;
                    }
                }
                console.log(tomb[kepIndex].kep);
                $(".recik img").attr("src",tomb[kepIndex].kep)
          });
    }
}