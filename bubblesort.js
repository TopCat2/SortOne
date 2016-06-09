function bubbleSort(arr) {
	
	var temp;
	var swap ;
	var comps = 0, swaps = 0;
	do {
		swap = false;
		for (var i = 0; i < arr.length - 1; i++) {
			comps++;
			if (arr[i] > arr[i+1]) {
				swap = true;
				swaps++;
				temp = arr[i]; 
				arr[i] = arr[i+1];
				arr[i+1] = temp;
			}
		}
	} while (swap);

	console.log("That took", comps, "comparisons and", swaps, "swaps.")
	return arr;
}