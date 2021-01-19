// JSnack 1:
// Utilizzando const e/o let. Dare la possibilità di inserire due parole. Verificare se le due parole 
// hanno la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

$(document).ready(function () {

    $(document).keypress(function () { 

        let number = 0;
        
        // chiedi all'utente un numero
        do{
            number = parseInt(prompt('White a number anything'))
        } while(isNaN(number))

        // crea elementi html
        let item = $('#templateRow').clone().contents();
        let text = item.find('p')
        $('#listNumber').append(item);

        // Vede se pari o dispari
        if(number % 2 == 0){
            console.log('number input even: '+number)
            $(text).text('The number '+number+' in is even, the number not change: '+number )
        }else{
            number++;
            console.log('number input odd, the next number is: '+number)
            $(text).text('The number '+--number+' in is odd, the number next : '+number )
        }

    });

    $(document).click(function () { 

        let number = 0;
        
        // chiedi all'utente un numero
        do{
            number = parseInt(prompt('White a number anything (not see html)'))
        } while(isNaN(number))

        // Vede se pari o dispari
        if(number % 2 == 0){
            console.log('number input even: '+number)
        }else{
            console.log('number input odd, the next number is: '+(++number))
        }

    });

    
});