var compsP, compsS, swaps, callsP, callsI, rangeP;

function quickSort(arr) {
    compsP = 0;
    compsS=0;
    swaps = 0;
    callsP = 0;
    callsI = 0;
    rangeP = 0;
    var result = quickInner(arr, 0, arr.length - 1);
    console.log("quick sorting", arr.length.toLocaleString(), "numbers took",
        compsS.toLocaleString(), "scanner comparisons, " +
        compsP.toLocaleString(), "partition comparisons and", swaps.toLocaleString(), "swaps.");
    console.log("There were", callsI, "inner quicksort calls and", callsP,
        "partition calls for a partition range of", rangeP.toLocaleString());
    console.log("Total comparisons:", (compsP + compsS).toLocaleString());

    return result;
}

function quickInner(arr, low, high)  {
    callsI++;
	if (low >= high) return;

    // Partition array.  Find p = where pivotVal ends up.
    var p = partition(arr, low, high);
    quickInner(arr, low, p-1);
    quickInner(arr, p+1, high);

	return arr;
}



function partition (arr, low, high) {
var rangeBefore = rangeP;
var compsBefore = compsP + compsS;
    callsP++;
    rangeP += high - low + 1;
    if (low >= high) return;
    var where = Math.floor((Math.random() * (high - low + 1)) + low);
    var pivot = arr[where];
    swap (arr, where, high);
    var fng = pushFng(arr, low, high, pivot); // Pointer to First Known Good item, or top if not yet moved.

    for (var index = low; index < fng; index++) {
        compsP++;
        if (arr[index] > pivot) {
            swap(arr, index, fng - 1);
            fng = pushFng(arr, low, fng - 1, pivot);
        }
    }

    swap(arr, high, index);
    return index;
}

function pushFng(arr, low, now, pivot) {
    for (var i = now; i > low; i--) {
        compsS++;
        if (arr[i - 1] < pivot) return i;
    }
    return low;
}

function swap (arr, a, b) {
    swaps++
    if (a != b) {
        var temp = arr[a]
        arr[a] = arr[b];
        arr[b] = temp;
    }
}

module.exports = quickSort;
