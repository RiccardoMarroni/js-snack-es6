/**SNACK 1*
Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
Ci ha lasciato il nome del tavolo (“Tavolo Vip”) e la lista degli invitati in ordine di posto:
[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']
Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come attributi:
nome del tavolo,
nome dell’ospite,
posto occupato.
Generiamo e stampiamo in console la lista per i segnaposto.
*/

function generateTable(VipName, TableName, siteNr) {
    const vip = {
        Table: TableName,
        name: VipName,
        site: siteNr,

    };
    return vip;
}

const invitati = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 
'Georgina Rodriguez', 'Chiara Ferragni', 
'Fedez', 'George Clooney',
 'Maneskin'];

const TavoloVIP = invitati.map((el,idx) =>{
    const vip = generateTable(el,'Tavolo VIP',idx + 1)
    return vip;
    
});


console.log(TavoloVIP);



/**SNACK 2*
Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
1. Per preparare l’aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
Questo è l’elenco degli studenti:
Id   Name                    Grades
213  Marco della Rovere      78
110  Paola Cortellessa       96
250  Andrea Mantegna 	      48
145  Gaia Borromini          74
196  Luigi Grimaldello 	  68
102  Piero della Francesca   50
120  Francesca da Polenta    84 */



let studentiUpperCase = [];

let voto70 = [];

let voto70Id120 = [];


let studenti = [
    {id:213, nome:'Marco della Rovere',voto:78},
    {id:110, nome:'Paola Cortellessa',voto:96},
    {id:250, nome:'Andrea Mantegna',voto:48},
    {id:145, nome:'Gaia Borromini',voto:74},
    {id:196, nome:'Luigi Grimaldello',voto:68},
    {id:102, nome:'Piero della Francesca',voto:50},
    {id:120, nome:'Francesca da Polenta',voto:84},
];


studentiUpperCase = studenti.map((el) => {
    let studente = {
        id: el.id,
        nome: el.nome.toUpperCase(),
        voto: el.voto
    }

    
    return studente
})

voto70 = studentiUpperCase.filter((el) =>{return el.voto > 70} )
voto70Id120 = studentiUpperCase.filter((el) =>{return el.voto > 70 && el.id > 120} )


console.log(studentiUpperCase);
console.log('array con solo voto > 70:', voto70);
console.log('array con voto > 70 e ID >120:', voto70Id120);


/*SNACK 3
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal */


function weightRandom(){
     

    let weight = (Math.random() * 10).toFixed(2);

    return weight;


}




let bicicle = [
    {
        model:'Atala',
        weight: parseFloat(weightRandom())
    },
    {
        model:'Bianchi',
        weight: parseFloat(weightRandom())
    },
    {
        model:'Bottecchia',
        weight: parseFloat(weightRandom())
    },
    {
        model:'Piaggio',
        weight: parseFloat(weightRandom())
    },
    {
        model:'Pinarello',
        weight: parseFloat(weightRandom())
    },
    {
        model:'Garelli',
        weight: parseFloat(weightRandom())
    },
    {
        model:'Basso',
        weight: parseFloat(weightRandom())
    },
    {
        model:'Carrera',
        weight: parseFloat(weightRandom())
    },

]



let lightestBike = bicicle[0]


for (let i = 1; i < bicicle.length; i++){
    
    if (bicicle[i].weight < lightestBike.weight){
        lightestBike = bicicle[i]
        
    }

    
}

const {model,weight} = lightestBike

console.log(bicicle)
console.log(lightestBike)
console.log(`La piu' leggera e' la ${model} con un peso di ${weight}kg`)