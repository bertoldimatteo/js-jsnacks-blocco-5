// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

const zucchine = [
    {
        varietà: "verde",
        peso: 1,
        lunghezza: 15,
    },
    {
        varietà: "gialla",
        peso: 1,
        lunghezza: 30,
    },
    {
        varietà: "blu",
        peso: 2,
        lunghezza: 20,
    },
    {
        varietà: "arancione",
        peso: 3,
        lunghezza: 8,
    },
    {
        varietà: "piccola",
        peso: 2,
        lunghezza: 5,
    },
    {
        varietà: "media",
        peso: 1,
        lunghezza: 21,
    },
    {
        varietà: "grande",
        peso: 4,
        lunghezza: 40,
    },
    {
        varietà: "orto",
        peso: 5,
        lunghezza: 2,
    },
    {
        varietà: "monti",
        peso: 1,
        lunghezza: 13.5,
    },
    {
        varietà: "lago",
        peso: 2,
        lunghezza: 4,
    },
]

const zucchineUnder15 = [];
const zucchineOver15 = [];

let sumzucchineUnder15 = 0;
let sumzucchineOver15 = 0;

for (let i = 0; i < zucchine.length; i++) {
    // Dividi in due array separati le zucchine che misurano meno o più di 15cm.
    if (zucchine[i].lunghezza > 15){
        zucchineUnder15.push(zucchine[i].lunghezza)
        sumzucchineUnder15 += zucchine[i].peso;
    } else if ( zucchine[i].lunghezza < 15){
        zucchineOver15.push(zucchine[i].lunghezza)
        sumzucchineOver15 += zucchine[i].peso;
    }
}
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

console.log(zucchineUnder15);
console.log(sumzucchineUnder15);
console.log(zucchineOver15);
console.log(sumzucchineOver15);