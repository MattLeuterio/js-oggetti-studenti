console.log('ok');
console.log('jQuery Ok ->', $);

$(document).ready( function() {

    var inputChat = $('.input-chat');
    var contChat = $('.main');
    var btnSend = $('.button-send');


    // Ottengo Html da usare
    var source = $('#template-chat').html();
    console.log(source);

    // Genero utility Handlebars
    var template = Handlebars.compile(source);

    //  Inviare messaggio tramite input chat

    // Cliccando il tasto Invio sulla tastiera
    inputChat.keyup(function(event) {

        // controllo che nell'input sia stato scritto qualcosa
        if(inputChat.val() !== ''){
            // Se è vero allora procedo con l'inserimento
            if(event.which == 13) {
                newMessage();
                setTimeout(autoReply, 1000)
            };
        };
    });
    
    // Cliccando icona invio
    btnSend.click( function () {

        if (inputChat.val() != '') {
            newMessage();
            setTimeout(autoReply, 1000);
        }    
    });


    //function 

    // prendere ora all'invio del messaggio
    function time() {
        // prendo info data dal sistema
        var dateNow = new Date(); 
        // assegno solo ora e minuti
        timeNow = (dateNow.getHours()<10?'0':'') + dateNow.getHours() + ':' + (dateNow.getMinutes()<10?'0':'') + dateNow.getMinutes(); 

        return timeNow;
    };

    // nuovo messaggio
    function newMessage() {
        var newMess = inputChat.val().trim();

            var message = {
                text: newMess,
                time: time(),
            };

            var html = template(message)

            contChat.append(html);

            inputChat.val('');

            scrollchat()
    };


    // risposta automatica
    function autoReply() {
        var message = {
            text: 'Ok!',
            time: time(),
            classSend: 'mess-received'
        };

        var html = template(message)

        contChat.append(html);

        scrollchat()
    };

    // Funzione per lo scroll

    function scrollchat() {

        contChat.scrollTop(contChat.prop('scrollHeight'))

    };


}); // <- End Doc Ready