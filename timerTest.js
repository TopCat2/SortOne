/**
 * Created by Peter on 6/10/16.
 */

var bubbleSort = require('./bubblesort');
var mergeSort = require('./mergesort');
var quickSort = require('./quicksort');

for (var i = 9; i <= 12; i++) {
    var numItems = Math.pow(2, i);
    var nativeTestArray = [];

    for(var j = 0; j < numItems; j++) {
        var rand = Math.floor(Math.random() * numItems);
        nativeTestArray.push(rand);
    }

    var bTestArray = nativeTestArray.slice(0);
    var mTestArray = nativeTestArray.slice(0);
    var qTestArray = nativeTestArray.slice(0);

    console.log();
    console.time(numItems + ' native');
    nativeTestArray.sort(function(a, b){ return a - b; });
    console.timeEnd(numItems + ' native');

    console.time(numItems + ' bubble');
    bubbleSort(bTestArray);
    console.timeEnd(numItems + ' bubble');

    console.time(numItems + ' merge');
    mergeSort(mTestArray);
    console.timeEnd(numItems + ' merge');

    console.time(numItems + ' quick');
    quickSort(qTestArray);
    console.timeEnd(numItems + ' quick');
}