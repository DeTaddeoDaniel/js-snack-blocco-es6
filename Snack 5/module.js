// JSnack 5:

// Partendo da un array creiamone uno nuovo con solo i valori che hanno la posizione compresa 
// tra i due numeri inseriti dall'utente Usiamo i nuovi metodi degli array foreach o filter 

// Esempio: const myArray = ['Pippo', 'Pluto', 'Paperino', 'Paperone', 'Paperina', 'Paperoga']; 
// Se l’utente inserisce 2 numeri: 1,4 allora selezioniamo 'Pluto', 'Paperino', 'Paperone', 'Paperina'



$(document).ready(function () {

    const array = ['Pippo', 'Pluto', 'Paperino', 'Paperone', 'Paperina', 'Paperoga']; 

    $(document).keypress(function () { 

        // chiedi all'utente un numero
        const numMin = parseInt(prompt('Add index min '));
        const numMax = parseInt(prompt('Add index max'));

      

        // svuota elementi html
        $('#listNumber').empty();
        let item;

        // stampa tutte le bici
        for( let name in array){
            
            // stampa item bike
            item = /*html*/ ` 
                <div class="alert alert-info" role="alert">
                    <p>Name in the list: ${array[name]}</p>
                </div>`
 
            // show in the windows
            $('#listNumber').append(item);
        }

        // trovami indice bici più leggera
        let newArray = array.filter((element, index) => {return  (index >= numMin && index <= numMax)})
       
        console.log(newArray)

        // stampa tutte le bici
        for( let test in newArray){
            console.log(test)
            
            // stampa item bike
            item = /*html*/ ` 
                <div class="alert bg-success text-white" role="alert">
                    <p>Bici con index tra ${numMin} e ${numMax}: </p>
                    <p>Name : ${newArray[test]}</p>
                </div>`
 
            // show in the windows
            $('#listNumber').append(item);
        }
    

    });    
});