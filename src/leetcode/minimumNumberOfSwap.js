function minimumSwaps(arr) {
    let swaps = 0;

    const tmp = {};
    arr.forEach((v, i) => tmp[v] = i);;

    arr.forEach((v, i) => {
        // because they are consecutives, I can see if the number is where it belongs
        if (arr[i] !== i+1) { //2 !== 0+1 
            swaps += 1
            const t = arr[i] //const t= 2
            arr[i] = i+1 // [3,4,1,5]
            arr[tmp[i+1]] = t //arr[3] =2

            // Switch also the tmp array, no need to change i+1 as it's already good now
            tmp[t] = tmp[i+1]
        }
    });

    return swaps
}
console.log(minimumSwaps([11,9,8]))



