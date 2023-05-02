function countChange(money, coins) {
    // determinar numero maximo de digitos sumando el menor varias veces
    var arrSum = []
    var suma = 0
    var numSol = 0
    coins.sort((a, b) => a - b)

    // detectando el max
    while (suma < money) {
        suma = 0
        arrSum.push(coins[0])
        arrSum.forEach(num => suma += num);
        // console.log(suma)
        if (suma == money) {
            numSol++
        }
    }

    contSum(arrSum, 0)


    return arrSum
}

function contSum(arrSum, auxIdx) {
    var suma = 0
    arrSum.pop()
    arrSum.forEach(num => suma += num);

    if (suma < money) {
        arrSum[auxIdx - 1] = coins[auxIdx]
        arrSum.forEach(num => suma += num);
        console.log(suma)
    }


}

console.log(countChange(10, [5, 2, 3]))