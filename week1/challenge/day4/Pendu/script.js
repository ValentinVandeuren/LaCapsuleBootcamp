const messageCarracter = `
    <h6>Veuillez renseigner minimum 5 carractère!</h6>
`;
const page2 = `
    <div id="page2">
        <div id="underScoreList">
        </div>
    </div>
`;
const numberOfLetters = `
    <h1 id='underscoreClass' >_</h1>
`;
const proposition = `
    <div class="choiseProposition">
        <input id="propositionBar" type="text" placeholder="Enter your proposition">
        <input id="propositionButton" type="button" value="accepte">
    </div>
`;


document.getElementById('wordButton').addEventListener("click",
    function(){
        const message = document.getElementById('wordBar').value;
        if(message.length >= 5){
            console.log('accepté');
            console.log(message);
            document.getElementById('page1').remove();
            document.body.insertAdjacentHTML('beforeend', page2)
            for(let i=0; i <message.length; i++){
                document.getElementById('underScoreList').insertAdjacentHTML('beforeend', numberOfLetters)
            }
            document.getElementById('page2').insertAdjacentHTML('beforeend', proposition);
            document.getElementById('propositionButton').addEventListener("click",
                function(){
                    console.log('bouton 2 cliqué');
                }
            );
        }else if(message.length < 5){
            console.log('refusé');
            document.body.insertAdjacentHTML('beforeend', messageCarracter)
        }
    }
);

// document.addEventListener("keypress",
//     function (enter){
//         const message = document.getElementById('wordBar').value;
//         if(message.length >= 5){
//             console.log('accepté');
//             console.log(message);
//         }else if(message.length < 5){
//             document.body.insertAdjacentHTML('beforeend', messageCarracter)
//         }
//     }
// );