async function bubbleSort(arr) {
  await sleep(delay);
  var c=0,d=0;
  for (var i = 0; i < size - 1; i++) {
    for (var j = 0; j < size - i - 1; j++) {
      d++;
      await sleep(delay);
      setColor(j, SELECTED);
      setColor(j + 1, SELECTED);
      await sleep(delay);
      if (arr[j] > arr[j + 1]) {
          c++;
          document.getElementById('swapCount').innerHTML=`<h3>No. of Swaps are: ${c}</h3>`;
          swap(j, j + 1);
      }
      document.getElementById("compCount").innerHTML = `<h3>No. of Comparisons are: ${d}</h3>`;
      await sleep(delay);
      setColor(j, UNSORTED);
      setColor(j + 1, UNSORTED);
    }
    setColor(size - i - 1, SORTED);
  }
  setColor(0, SORTED);
}
