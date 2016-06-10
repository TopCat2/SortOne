var comps = 0, swaps = 0, allocs = 0;

function split(arr){
	var len = arr.length;
	if(len<=1){
		return arr;
	} 
	len = Math.floor(len/2);
	var result = [arr.slice(0,len)];
	result.push(arr.slice(len));
	allocs += result[0].length + result[1].length

	return result;
}

function mergeSort(arr){
	var result = mergeSortInner(arr);
	console.log("Merge sorting", arr.length.toLocaleString(), "numbers took", comps.toLocaleString(),
		"comparisons and the allocation of" , allocs.toLocaleString(), "numbers.");
	return result;
}

function mergeSortInner (arr) {
		if(arr.length <= 1) return arr;
	var halves = split(arr);
	return merge(mergeSortInner(halves[0]), mergeSortInner(halves[1]));
}

function merge(left, right){
	var result = [];
	while(left.length>0 && right.length>0){
		comps++;
		if(left[0] < right[0]){
			result.push(left[0]);
			left = left.slice(1);
		} else{
			result.push(right[0]);
			right = right.slice(1);
		}
        allocs++;
	}
	if(left.length === 0) {
		result = result.concat(right);
        allocs += result.length;
	} else if(right.length === 0) {
		result = result.concat(left);
        allocs += result.length;
	}

	return result;
}

module.exports = mergeSort;