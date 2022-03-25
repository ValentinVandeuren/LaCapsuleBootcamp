const numberCounter = function(){
    $('#number').text($('.card').length);
};
numberCounter();

$('#addButton').click(
    function(){
        const nameMessage = "Valentin Vandeuren";
        const messageContent = $('#addBar').val();
        const cardType = `
            <div class="card">
                <img class="avatar" src="/week1/projets/myMails/part3/Assets/avatar-1.jpg">
                <div class="enterCard">
                    <h2 class="name">${nameMessage}</h2>
                    <p class="message">${messageContent}</p>
                </div>
                <img id="trash" class="icon-trash" src="/week1/projets/myMails/part3/Assets/trash.png">
            </div>
        `;

        $('body').append(cardType);
        $('.icon-trash').click(
            function(){
                $(this).parent().remove();
                numberCounter();
            }
        );

        numberCounter();
    }
);

$('.icon-trash').click(
    function(){
        $(this).parent().remove();
        numberCounter();
    }
);

$('#searchButton').click(
    function(){
        var searchMessage = $('#searchBar').val();
        $('.name').each(
            function(){
                if(searchMessage != $(this).text()){
                    $(this).parent().parent().fadeOut();
                } else {
                    $(this).parent().parent().show();
                };
            }
        );
        if(searchMessage.length === 0){
            $('.card').fadeIn();
        };
        $('#searchBar').val('');
    }
);