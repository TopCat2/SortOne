function quickSort(arr) {
    return quickInner(arr, 0, array.lentgth - 1);
}

function quickInner(arr, low, high) {

	if (low >= high) return;
    var pivotVal = Math.floor(Math.random() * arr.length);
    // Partition array.  Find p = where pivotVal ends up.

    quickInner(arr, low, p);
    quickInner(arr, p+1, high);

	


	console.log("quick sorting", arr.length.toLocaleString(), "numbers took", comps.toLocaleString(),
        "comparisons and", swaps.toLocaleString(), "swaps.")
	return arr;
}

module.exports = bubbleSort;