for(let i=0; i <document.getElementsByClassName('cookie').length; i++){
    document.getElementsByClassName('cookie')[i].addEventListener("click", 
        function(){
            // console.log('une partie du cookie à été mangé');
            // this.src = "/assests/cookie-2.jpg";
            if(this.src.indexOf('cookie-1') > -1) {
                this.src = "/assests/cookie-2.jpg"
            }else if(this.src.indexOf('cookie-2') > -1){
                this.style.opacity = "0"
            }
        }
    );
};