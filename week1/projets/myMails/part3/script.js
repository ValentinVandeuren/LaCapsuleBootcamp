let number = function(){
    for(let i=0; i <document.getElementsByClassName('numberClass').length; i++){
        document.getElementById('number').textContent = document.getElementsByClassName('card').length
    };
};
number();

document.getElementById('addButton').addEventListener("click",
    function(){
        const nameMessage = 'Valentin Vandeuren'
        const message = document.getElementById('addBar').value
        const cardType = `
            <div class="card">
                <img class="avatar" src="/week1/projets/myMails/part3/Assets/avatar-1.jpg">
                <div class="enterCard">
                    <h2 class="name">${nameMessage}</h2>
                    <p class="message">${message}</p>
                </div>
                <img id="trash" class="icon-trash" src="/week1/projets/myMails/part3/Assets/trash.png">
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', cardType)
        number();
        for(let i=0; i <document.getElementsByClassName('icon-trash').length; i++){
            document.getElementsByClassName('icon-trash')[i].addEventListener("click", 
                function(){
                    this.parentNode.remove();
                    number();
                }
            );
        };
    }
);
