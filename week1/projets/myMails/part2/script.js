let number = function(){
    for(let i=0; i <document.getElementsByClassName('numberClass').length; i++){
        document.getElementById('number').textContent = document.getElementsByClassName('card').length
    };
};
number();


for(let i=0; i <document.getElementsByClassName('icon-trash').length; i++){
    document.getElementsByClassName('icon-trash')[i].addEventListener("click", 
        function(){
            this.parentNode.remove();
           number();
        }
    );
};