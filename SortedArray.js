function bubbleSortDescending(arr) {
    let n = arr.length;
    let swapped;
    
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] < arr[i + 1]) {
               
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        n--; 
    } while (swapped);

    return arr;
}


const unsortedArray = [5, 2, 9, 1, 5, 6];
const sortedArray = bubbleSortDescending(unsortedArray);
console.log("Sorted array in descending order:", sortedArray);
