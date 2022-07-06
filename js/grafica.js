
//GRAFICA


var ctx = document.getElementById("grafica").getContext("2d");  
var myChart= new Chart(ctx,{
    type: 'line',
    data: {
        labels:['May','Juny','July','Aug','Sep','Oct','Nov'],
        datasets: [{
            label:"",
            backgroundColor:"rgba(255, 255, 255, )",
            borderColor:"rgba(249, 220, 139, 1)",
            color:"rgba(229, 196, 103)",
            tension: 0.4,
            data:[3300, 3600, 3290, 3500, 3800,4000,3900]
        }
    ], legend: {
        display: false
    }
        
    }
}
)


    var ctx = document.getElementById("grafica2").getContext("2d");  
var myChart= new Chart(ctx,{
    type: 'line',
    data: {
        labels:['May','Juny','July','Aug','Sep','Oct','Nov'],
        datasets: [{
            label:"",
            backgroundColor:"rgb(140,65,33)",
            borderColor:"rgb(137, 62, 32)",
            color:"rgba(229, 196, 103)",
            tension: 0.4,
            data:[3300, 3600, 3290, 3500, 3800,4000,3900]
        }
    ], options: {
        plugins:{
         legend: {
          display: false
         }
        }
       }
        
    }
}
)


    var ctx = document.getElementById("grafica3").getContext("2d");  
var myChart= new Chart(ctx,{
    type: 'line',
    data: {
        labels:['May','Juny','July','Aug','Sep','Oct','Nov'],
        datasets: [{
            label:"",
            backgroundColor:"rgb(140,65,33)",
            borderColor:"rgb(137, 62, 32)",
            color:"rgba(229, 196, 103)",
            tension: 0.4,
            data:[3300, 3600, 3290, 3500, 3800,4000,3900]
        }
    ], options: {
        plugins:{
         legend: {
          display: false
         }
        }
       }
        
    }
}
)