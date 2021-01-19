// JSnack 2:
// Utilizzando const e/o let e template literal. Creare due tag div con due id diversi. 
// Un div avrà il testo colorato di rosso mentre l’altro di verde. Partendo da un array di numeri, 
// stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

$(document).ready(function () {

    $(document).keypress(function () { 

        const numbers = [];
        
        // chiedi all'utente un numero
        do{
            number = parseInt(prompt('White a number for add array number, when not add white not a number'))
            
            isNaN(number) ? console.log('stop add number') : numbers.push(number)

        } while(!isNaN(number))


        // stampa tutti i numeri
        for(number in numbers){

            console.log('number:' + number)
            
            // create element html
            let item;

            // add inner html item
            if(number % 2 == 0) {
                item = /*html*/ ` 
                    <div class="alert alert-danger" role="alert">
                        <p>${number}</p>
                    </div>`
            } else{
                item = /*html*/ ` 
                    <div class="alert alert-success" role="alert">
                        <p>${number}</p>
                    </div>`
            }
            
            // show in the windows
            $('#listNumber').append(item);
        }


    });    
});