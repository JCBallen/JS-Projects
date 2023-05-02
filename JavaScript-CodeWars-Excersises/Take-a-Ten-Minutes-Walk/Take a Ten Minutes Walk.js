// function isValidWalk(walk) {
//     const newArr = [...walk]
//     var v = 0
//     var h = 0

//     if (newArr.length != 10) {
//         return false
//     }

//     newArr.map(function (e) {
//         if (e == "n") {
//             v++
//         }
//         if (e == "s") {
//             v--
//         }
//         if (e == "e") {
//             h++
//         }
//         if (e == "w") {
//             h--
//         }
//     })

//     if (v == 0 && h == 0) {
//         return true
//     } else {
//         return false
//     }
// }


function isValidWalk(walk) {
    function count(val) {
        console.log(walk.filter(function (a) { return a == val; }))
        return walk.filter(function (a) { return a == val; }).length;
    }
    return walk.length == 10 && count('n') == count('s') && count('w') == count('e');
}

ans = isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])

console.log(ans)

