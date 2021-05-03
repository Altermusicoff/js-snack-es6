function esercizio1() {
    let biciclette = [
        {
            'nome': 'ktm',
            'peso': 6.6
        },
        {
            'nome': 'bianchi',
            'peso': 2.1
        },
        {
            'nome': 'legnano',
            'peso': 4.5
        },
        {
            'nome': 'campagnolo',
            'peso': 3.5
        }
    ];
    let biciclettapiccola = {
        nome: '',
        peso: Number.MAX_SAFE_INTEGER
    };
    for (let i = 0; i < biciclette.length; i++) {
        const bicicletta = biciclette[i];
        let { nome, peso } = bicicletta;
        if (peso < biciclettapiccola.peso) {
            biciclettapiccola = bicicletta;
        }
    }
    console.log(biciclettapiccola);
}

function esercizio2() {
    function numRnd(minimo, massimo) {
        const localMinimo = minimo;
        const localMassimo = massimo - minimo + 1;
        return Math.floor(Math.random() * localMassimo) + localMinimo;
    }

    let squadre = [
        {
            'nome': 'inter',
            'punti': 0,
            'falli': 0
        },
        {
            'nome': 'milan',
            'punti': 0,
            'falli': 0
        },
        {
            'nome': 'juventus',
            'punti': 0,
            'falli': 0
        },
        {
            'nome': 'cagliari',
            'punti': 0,
            'falli': 0
        }


    ];

    for (let i = 0; i < squadre.length; i++) {
        const squadra = squadre[i];

        squadra['punti'] = numRnd(0, 10);
        squadra['falli'] = numRnd(0, 10);
    }

    const resArr = [];
    for (let i = 0; i < squadre.length; i++) {
        const squadra = squadre[i];
        let { punti, falli } = squadra;
        let resObj = { punti, falli };
        resArr.push(resObj);
    }
    console.log(squadre, resArr);
}


function init() {
    esercizio1();
    esercizio2();
}

$(document).ready(init);