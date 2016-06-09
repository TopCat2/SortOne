function split(arr){
	var len = arr.length;
	if(len<=1){
		return arr;
	} 
	len = Math.floor(len/2);
	var result = [arr.slice(0,len)];
	result.push(arr.slice(len));

	return result;
}

function mergeSort(arr){
	if(arr.length <= 1) return arr;
	var halves = split(arr);

	return merge(mergeSort(halves[0]), mergeSort(halves[1]));
}

function merge(left, right){
	var result = [];
	while(left.length>0 && right.length>0){
		if(left[0] < right[0]){
			result.push(left[0]);
			left = left.slice(1);
		} else{
			result.push(right[0]);
			right = right.slice(1);
		}
	}
	if(left.length ===0) {
		result = result.concat(right);
	} else if(right.length ===0) {
		result = result.concat(left);
	}

	return result;
}