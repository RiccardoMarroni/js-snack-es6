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