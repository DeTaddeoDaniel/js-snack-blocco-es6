// JSnack 3:
// Utilizzando const e/o let. Dare la possibilità di inserire due parole. Verificare se le due parole 
// hanno la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la 
// più lunga delle due.

$(document).ready(function () {

    $(document).keypress(function () { 

        // chiedi all'utente un numero
        const word1 = prompt('Add the first word single');
        const word2 = prompt('Add the second word single');
        let item;

        if(word1.length == word2.length){
            
            item = /*html*/ ` 
                <div class="alert alert-success" role="alert">
                    <p>Word 1: ${word1}</p>
                    <p>Word 2: ${word2}</p>
                </div>`

        } else if( word1.length < word2.length){

            item = /*html*/ ` 
                <div class="alert alert-info" role="alert">
                    <p>Word 2: ${word2}</p>
                </div>`
                
        } else if(word1.length > word2.length){

            item = /*html*/ ` 
                <div class="alert alert-dark" role="alert">
                    <p>Word 1: ${word1}</p>
                </div>`

        } else {
            console.log('error')
        }


        // show in the windows
        $('#listNumber').append(item);

    });    
});