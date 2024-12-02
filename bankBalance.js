const operaciones = [1250, -3420, 7650, -1900, 9820, -5630, 4120, -8590, 6720, -4390,
    2510, -3400, 8900, -1340, 5680, -2130, 7220, -7850, 5630, -4120,
    8900, -3800, 7200, -6540, 5430, -2290, 8120, -6430, 9350, -2170,
    6900, -4730, 1420, -5540, 8200, -7360, 2100, -8730, 9500, -3240,
    6110, -6700, 4310, -8590, 5400, -6120, 8000, -5320, 9230, -4020,
    5120, -7810, 3200, -7620, 6810, -2520, 4910, -3820, 7640, -6810,
    6520, -1530, 9200, -1930, 4110, -1250, 7860, -4730, 6310, -5920,
    8420, -6700, 4520, -1930, 9550, -2480, 7750, -8140, 2210, -6820,
    5430, -2140, 1020, -3140, 5430, -6870, 7530, -4820, 9110, -1120,
    3700, -4510, 6550, -3120, 6310, -5940, 8900, -1930, 7210, -6410,
    5220, -7500, 8320, -4530, 2630, -8190, 9140, -2560, 8400, -1320,
    7120, -5980, 3700, -4630, 5300, -6110, 7830, -1320, 6110, -4630,
    3420, -5200, 7000, -8130, 8510, -3020, 6780, -4530, 3120, -5420,
    9230, -7260, 7020, -5310, 4850, -3620, 7430, -5330, 5120, -8420,
    6720, -4730, 5410, -7610, 4120, -6030, 8320, -4520, 3190, -7220,
    6010, -8130, 2650, -1840, 9300, -6030, 5210, -5510, 6720, -4310,
    9130, -6420, 7320, -4120, 5110, -6900, 7800, -3420, 6430, -1940,
    9510, -3200, 6520, -7230, 9100, -2720, 3280, -6010, 5400, -4310,
    8500, -2670, 3120, -5740, 9140, -2130, 3200, -5090, 8340, -7320,
    5520, -2810, 6820, -1900, 7360, -5420, 4930, -3030, 8110, -4790,
    9130, -3500, 5020, -1260, 6210, -7230, 7130, -5120, 5610, -6710,
    7810, -5140, 4130, -8530, 9430, -4320, 5720, -8350, 8610, -1260]

function calculateBalances(operaciones) {
    let depositos = 0;
    let retiros = 0;
    for (let i = 0; i < operaciones.length; i++) {
        const monto = operaciones[i];
        if(monto > 0) depositos+=monto;

        if(monto < 0) retiros-=monto;
    }
    return {
        depositos,
        retiros,
        total: depositos -retiros
    }
}

function bankBalance(nombre,apellido,operaciones) {
    const amounts=calculateBalances(operaciones)
    return `Estimad@ ${nombre} ${apellido}: El monto total de los depósitos es de: $${amounts.depositos}. El monto total de los retiros es de: $-${amounts.retiros}. Por lo tanto, su saldo actual en la cuenta es de: $${amounts.total}.`
} 

console.log(bankBalance("maria","gonzales",operaciones));

module.exports = bankBalance