async function partition(p, r, counters) {
  await sleep(delay);

  var i = p - 1;
  setColor(r, SELECTED);

  for (var j = p; j < r; j++) {
    await sleep(delay);
    counters.comparisons++;
    document.getElementById(
      "compCount"
    ).innerHTML = `<h3>No. of Comparisons are: ${counters.comparisons}</h3>`;

    if (arr[j] <= arr[r]) {
      i++;
      counters.swaps++;
      document.getElementById(
        "swapCount"
      ).innerHTML = `<h3>No. of Swaps are: ${counters.swaps}</h3>`;
      swap(i, j);
      setColor(j, RIGHT);
      setColor(i, LEFT);
    } else setColor(j, RIGHT);
  }

  if (i + 1 < r) {
    await sleep(delay);

    counters.swaps++;
    document.getElementById(
      "swapCount"
    ).innerHTML = `<h3>No. of Swaps are: ${counters.swaps}</h3>`;
    swap(i + 1, r);
    setColor(r, RIGHT);
    setColor(i + 1, SELECTED);
  }

  await sleep(delay);

  setColorRange(p, r, UNSORTED);

  return i + 1;
}

async function quickSort(p, r, counters = { comparisons: 0, swaps: 0 }) {
  if (p < r) {
    var q = await partition(p, r, counters);

    await quickSort(p, q - 1, counters);

    await quickSort(q + 1, r, counters);

    setColorRange(p, q, SORTED);
    setColorRange(q + 1, r, SORTED);
  }

  if (p == 0 && r == size - 1) await sleep(delay);
}
