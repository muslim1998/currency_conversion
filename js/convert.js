let RATES = {
    usd: 0.014,
    eur: 0.013,
    tg:6.16
}

function convert(rub,currency) {
    if (!RATES[currency]) {
        return null;
    }

    return rub * RATES[currency]
}