function extraLongFactorials(n) {
    n = BigInt(n)
    var accumulator = BigInt(1);

    for (let i = n; i > 0; i--) {
            accumulator = accumulator * i
    }

    console.log(accumulator.toString())
}
extraLongFactorials(25);