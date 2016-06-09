describe('Merge Sort', function(){

  it('handles an empty array', function(){
    expect( mergeSort([]) ).toEqual( [] );
  });

  it('handles a one-element array', function(){
    expect( mergeSort([1]) ).toEqual( [1] );
  });

  it('handles a two-element array', function(){
    expect( mergeSort([7, 1]) ).toEqual( [1, 7] );
  });
  
 it('handles a ten-element array', function(){
    expect( mergeSort([4, 9, 2, 8, 10, 7,3, 5, 6, 1]) ).toEqual( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] );
  });
  
});

describe('Split', function(){

  it('splits an empty array', function(){
    expect( split([]) ).toEqual( [] );
  });

  it('splits an array of 1', function(){
    expect( split([17]) ).toEqual( [17] );
  });

  it('splits an even length arr', function(){
    expect( split([1,2,3,4]) ).toEqual( [[1,2],[3,4]] );
  });

  it('splits an odd length array', function(){
    expect( split([1,2,3]) ).toEqual( [[1],[2,3]] );
  });

});

describe('Merge', function(){

  it('merges arrays of length 1', function(){
    expect( merge([1],[2]) ).toEqual( [1,2] );
    expect( merge([2],[1]) ).toEqual( [1,2] );
  });

  it('merges arrays of length 2', function(){
    expect( merge([1,2],[3,4]) ).toEqual( [1,2,3,4] );
    expect( merge([1,3],[2,4]) ).toEqual( [1,2,3,4] );
    expect( merge([1,4],[2,3]) ).toEqual( [1,2,3,4] );
    expect( merge([2,4],[1,3]) ).toEqual( [1,2,3,4] );
  });

  it('merges arrays of different lengths', function(){
    expect( merge([1,2,5],[3,4]) ).toEqual( [1,2,3,4,5] );
  });
});