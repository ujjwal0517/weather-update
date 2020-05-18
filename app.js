let city=document.getElementById('txt');
let form = document.getElementById('form-main');

form.addEventListener('submit', function(e){

// let xhr = new XMLHttpRequest();
// xhr.open("GET",'https://api.openweathermap.org/data/2.5/weather?q='+city.value+'&appid=d3c63fa06c1efb4abcce4025732c2b82', true);
// xhr.onload = function(){
//     if(this.status==200){
//         let data = json.parse(this.responseText);
//         let temp = data.main.temp;
//         let temp_min = data.main.temp_min;
//         let temp_max = data.main.temp_max;
//         let desc = data.weather[0].description;
//         let name = data.name;

        
//         document.getElementById('city').innerHTML = name;
//         document.getElementById('temp-min').innerHTML = (temp_min-272.15)+`<sup>o</sup> c`;
//         document.getElementById('temp-max').innerHTML = Math.round((temp_max-272.15))+`<sup>o</sup> c`;
//         document.getElementById('temp').innerHTML = (temp-272.15)+`<sup>o</sup> c`;
//         document.getElementById('desc').innerHTML = desc;
//         city.value='';


        
//     };
//     xhr.onerror = function () {
//       console.log("There is an error fetching the data!");}

// }
// xhr.send();

    
 
// });


  fetch('https://api.openweathermap.org/data/2.5/weather?q='+city.value+'&appid=d3c63fa06c1efb4abcce4025732c2b82')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let temp = data.main.temp;
        let temp_min = data.main.temp_min;
        let temp_max = data.main.temp_max;
        let desc = data.weather[0].description;
        let name = data.name

        document.getElementById('city').innerHTML = name;
        document.getElementById('temp-min').innerHTML = (temp_min-272.15)+`<sup>o</sup> c`;
        document.getElementById('temp-max').innerHTML = Math.round((temp_max-272.15))+`<sup>o</sup> c`;
        document.getElementById('temp').innerHTML = (temp-272.15)+`<sup>o</sup> c`;
        document.getElementById('desc').innerHTML = desc;
        city.value='';

    })
    .catch(function(){
        alert("there is error");
    })

 document.getElementById('res').style.display = "block";

    e.preventDefault();
    e.stopPropagation;

});

   