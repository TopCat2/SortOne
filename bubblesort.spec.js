describe('Bubble Sort', function(){

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles a one-element array', function(){
    expect( bubbleSort([1]) ).toEqual( [1] );
  });

  it('handles a two-element array', function(){
    expect( bubbleSort([7, 1]) ).toEqual( [1, 7] );
  });
  
 it('handles a ten-element array', function(){
    expect( bubbleSort([4, 9, 2, 8, 10, 7,3, 5, 6, 1]) ).toEqual( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] );
  });
  
});