//Debe recibir un array ordenado ascendente de elementos con valores únicos

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 28, 32, 45, 50];
function binarySearch(arr, val) {
       
    let start = 0, end = arr.length -1, mid = Math.floor((start + end)/2);
     if (arr[mid] === val) {
        return mid
     }
    while (arr[mid] !==val) {
        console.log(start, mid, end);

        if (val < arr[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
        mid = Math.floor((start + end ) / 2)
    }
    console.log(start, mid, end)
    return mid;
}

console.log("El numero esta en la posición N°: " + binarySearch(arr, 32));