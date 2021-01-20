// JSnack 4:
// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: 
// - nome e peso. 

// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.

$(document).ready(function () {

    let bikes = []

    $(document).keypress(function () { 

        // chiedi all'utente un numero
        const name = prompt('Add the first bike name ');
        const weight = parseFloat(prompt('Add the first bike weight'));

        // costruisci oggetto bici
        const bike = { name, weight }

        // inserisci dell'array
        bikes.push(bike)
        console.log(bikes)

        // svuota elementi html
        $('#listNumber').empty();
        let item;

        // stampa tutte le bici
        for( let element in bikes){
            
            // ottieni chiavi - valori
            const {name, weight} = bikes[element]
            console.log(element + ', '+name +', '+weight)
            
            // stampa item bike
            item = /*html*/ ` 
                <div class="alert alert-info" role="alert">
                    <p>Name : ${name}</p>
                    <p>Weight: ${weight} kg</p>
                </div>`
 
            // show in the windows
            $('#listNumber').append(item);
        }

        // trovami indice bici più leggera
        let indexLess = 0;
        bikes.forEach( (bike, index) => {
            if(bikes[indexLess].weight > bike.weight){
                indexLess = index
            }
        });

        // stampa indice bici più leggera
        console.log(indexLess)
        const {nameLight, weightLight} = bikes[indexLess]
        console.log(nameLight+', '+weightLight)

        item = /*html*/ ` 
            <div class="alert bg-success text-white" role="alert">
                <p>Bici con peso minore è: </p>
                <p>Name : ${bikes[indexLess].name}</p>
                <p>Weight: ${bikes[indexLess].weight} kg</p>
            </div>`
    
        // show in the windows
        $('#listNumber').append(item);

    });    
});