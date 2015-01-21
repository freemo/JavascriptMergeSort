function mergeSort()
{
  var unsortedValues = Array.prototype.slice.call(arguments);
  return mergeSortArray(unsortedValues);
}

function mergeSortArray(unsortedValues)
{
  if(unsortedValues.length <= 1)
    return unsortedValues;
    
  var middleIndex = Math.floor(unsortedValues.length/2);
  
  var bottomValues = unsortedValues.slice(0, middleIndex);
  var topValues = unsortedValues.slice(middleIndex, unsortedValues.length);
  
  //if the top or bottom halves have more than one element in them, recursively
  //sort them first
  if(bottomValues.length > 1)
    bottomValues = mergeSortArray(bottomValues);
  if(topValues.length > 1)
    topValues = mergeSortArray(topValues);
    
  //now is where we merge the two arrays. We have two sorted arrays we want to
  //merge into one larger sorted array.
  var bottomIndex = 0;
  var topIndex = 0;
  var sortedIndex = 0;
  var sortedValues = new Array(unsortedValues.length);
  
  while( sortedIndex < sortedValues.length )
  {
    //check if there is just one half of the array left
    if(bottomIndex >= bottomValues.length)
    {
      while(topIndex < topValues.length)
      {
        sortedValues[sortedIndex] = topValues[topIndex];
        topIndex++;
        sortedIndex++;
      }
    }
    else if(topIndex >= topValues.length)
    {
      while(bottomIndex < bottomValues.length)
      {
        sortedValues[sortedIndex] = bottomValues[bottomIndex];
        bottomIndex++;
        sortedIndex++;
      }
    }
    //since both arrays are still in play lets do our comparison and sort
    else if(bottomValues[bottomIndex] < topValues[topIndex])
    {
      sortedValues[sortedIndex] = bottomValues[bottomIndex];
      sortedIndex++;
      bottomIndex++;
    }
    else
    {
      sortedValues[sortedIndex] = topValues[topIndex];
      sortedIndex++;
      topIndex++;
    }
  }
  
  return sortedValues;
}