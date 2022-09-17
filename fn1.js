function fn1() {
    var sap = document.getElementById("shapee").value;
    var col = document.getElementById("colore").value;
    var r1 = document.getElementById("height").value;
    var r2 = document.getElementById("lenght").value;
     console.log("done");
    if(sap.toLowerCase() =="square"){
        // square

         var sq = document.getElementById("element").getContext("2d");

         sq.fillStyle = col ;
         sq.rect(0, 0, r1, r1);
         sq.fill();

    } 
    else if(sap.toLowerCase() =="rectangle"){
        // rectangle

      var rc = document.getElementById("element").getContext("2d");

      rc.fillStyle = col;
      rc.rect(0, 0, r2, r1);
      rc.fill();

    }
    else if(sap.toLowerCase() =="circle"){
        // circle

        var cir = document.getElementById("element").getContext("2d");
         r1=2*r1;
        cir.fillStyle = col;
        cir.arc(280, 280, r1, 0, 2 * Math.PI);
        cir.fill();
        document.getElementById("lenght").classList.add('hide'); // this will simply add a class with a name of hide to the selected input

    }
    else if(sap.toLowerCase() =="right-triangle"){
        // triangle

        var tri = document.getElementById("element").getContext("2d");

        tri.fillStyle = col;
        tri.beginPath();
        tri.moveTo(0, 0);
        tri.lineTo(0, r1);
        tri.lineTo(r2, r1);
        tri.fill();
 
    }
    else if(sap.toLowerCase() =="scale-triangle"){
        // triangle

        var tri = document.getElementById("element").getContext("2d");

        tri.fillStyle = col;
        tri.beginPath();
        tri.moveTo(250, 0);
        tri.lineTo(0, r1);
        tri.lineTo(r2, r1);
        tri.fill();
 
    }
    else if(sap.toLowerCase() =="semi-circle"){
        // circle

        var cir = document.getElementById("element").getContext("2d");
         r1=2*r1
        cir.fillStyle = col;
        cir.arc(250, 250, r1, 0 , Math.PI);
        cir.fill();

    }
    
    
}
