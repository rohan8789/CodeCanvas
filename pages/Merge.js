async function merge(p, q, r, counters) {
  await sleep(delay);

  var i, j;
  var n1 = q - p + 1;
  var n2 = r - q;
  var L = [];
  var R = [];

  for (i = 0; i < n1; i++) {
    L.push(arr[p + i]);
    setColor(p + i, LEFT);
  }
  for (j = 0; j < n2; j++) {
    R.push(arr[q + j + 1]);
    setColor(q + j + 1, RIGHT);
  }

  L.push(Infinity);
  R.push(Infinity);

  i = 0;
  j = 0;

  for (var k = p; k <= r; k++) {
    await sleep(delay);
    counters.comparisons++;
    document.getElementById(
      "compCount"
    ).innerHTML = `<h3>No. of Comparisons are: ${counters.comparisons}</h3>`;
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
      counters.swaps++;
      document.getElementById(
        "swapCount"
      ).innerHTML = `<h3>No. of Swaps are: ${counters.swaps}</h3>`;
    }

    setHeight2(k, arr[k]);
    setColor(k, SELECTED);
  }

  await sleep(delay);
  if (p == 0 && r == size - 1) setColorRange(p, r, SORTED);
  else setColorRange(p, r, UNSORTED);
}

async function mergeSort(p, r, counters = { comparisons: 0, swaps: 0 }) {
  if (p < r) {
    var q = Math.floor((p + r) / 2);
    await mergeSort(p, q, counters);
    await mergeSort(q + 1, r, counters);
    await merge(p, q, r, counters);
  }
}
