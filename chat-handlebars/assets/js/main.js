console.log('ok');
console.log('jQuery Ok ->', $);

$(document).ready( function() {

    var inputChat = $('.input-chat');
    var contChat = $('.main');
    var btnSend = $('.button-send');
    
    var randomHello = [
        'Ey',
        'Ciao',
        'Ehila',
        'Carissimo',
        'Ciao Bello'
    ];

    var messDefault = [
        {
            text: randomHello[getRandomInt(0, 4)],
            time:  time(),
            classSend: 'mess-received'
        },
        {
            text: 'Come stai?',
            time:  time()
        },
        {
            text: 'Bene',
            time:  time(),
            classSend: 'mess-received'
        }
    ];

    

    console.log(messDefault);
    
    // Ottengo Html da usare
    var source = $('#template-chat').html();
    console.log(source);

    // Genero utility Handlebars
    var template = Handlebars.compile(source);


    // creo i messaggi di default che si leggono all'avvio della chat
    for (var i = 0; i < messDefault.length; i++) {

        // assegno i valori di text e time a due nuove variabili
        var newText = messDefault[i].text;
        var newTime = messDefault[i].time;

        // se la lunghezza dell'oggetto è diversa da due quindi è presente un terzo elemento
        if(messDefault[i].length != 2) {
            // prendo anche la classe
            var newReceived = messDefault[i].classSend
            
            // creo un nuovo oggetto con anche la classe
            var newDefMessage = {
                text: newText,
                time: newTime,
                classSend: newReceived
            };
        
           // altrimenti creo l'oggetto solo con text e time 
           } else {
            
            var newDefMessage = {
                text: newText,
                time: newTime,
           };   
            
        };
        
    
        
        var html = template(newDefMessage)

        contChat.append(html)

    };



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

    // Funzione per numero random in un range
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; 
      }

}); // <- End Doc Ready