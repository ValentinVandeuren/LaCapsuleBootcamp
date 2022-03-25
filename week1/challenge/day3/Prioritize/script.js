const criticality = document.getElementsByClassName("criticality");
const panicButton = document.getElementById("panicButton");
const row = document.getElementsByClassName("row");

for(let i=0; i <criticality.length; i++){
    switch (criticality[i].textContent){
        case '1':
            criticality[i].style.backgroundColor= "#32CA6F";
            break;
        case '2':
            criticality[i].style.backgroundColor= "#F2C410";
            break;
        case '3':
            criticality[i].style.backgroundColor= "#E67F22";
            break;
        case '4':
            criticality[i].style.backgroundColor= "#E74D3D";
            break;
    };
};

    panicButton.addEventListener("click", 
        function(){
            console.log('test')
            for(let i=0; i <row.length; i++){

            }
        }
    );  