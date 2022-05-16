// Crea un array di 10 oggetti che rappresentano una zucchina,
// indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

const zucchine = [
    {
        varietà: "verde",
        peso: 1,
        lunghezza: 0.5,
    },
    {
        varietà: "gialla",
        peso: 1,
        lunghezza: 1,
    },
    {
        varietà: "blu",
        peso: 2,
        lunghezza: 0.55,
    },
    {
        varietà: "arancione",
        peso: 3,
        lunghezza: 0.5,
    },
    {
        varietà: "piccola",
        peso: 2,
        lunghezza: 0.3,
    },
    {
        varietà: "media",
        peso: 1,
        lunghezza: 0.6,
    },
    {
        varietà: "grande",
        peso: 4,
        lunghezza: 0.8,
    },
    {
        varietà: "orto",
        peso: 5,
        lunghezza: 2.5,
    },
    {
        varietà: "monti",
        peso: 1,
        lunghezza: 1,
    },
    {
        varietà: "lago",
        peso: 2,
        lunghezza: 0.8,
    },
]

let summ = 0;

for (let i = 0; i < zucchine.length; i++){
    summ += zucchine[i].peso;
}

console.log(summ);