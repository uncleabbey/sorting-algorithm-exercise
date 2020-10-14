const bubbleSort = (inputArr) => {
    let n = inputArr.length;
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(inputArr[j] > inputArr[j+1]){
                let t = inputArr[j];
                inputArr[j] = inputArr[j+1];
                inputArr[j+1] = t;
            }
        }
    }
    return inputArr;
}

const selectionSort = (arr) => {
  for (let i=0; i <= arr.length-1; i++) {
    let smallestIdx = i

    for (let j=i; j <= arr.length-1; j++) {
      if (arr[j] < arr[smallestIdx]) { 
        smallestIdx = j
      }
    }

    if (arr[i] > arr[smallestIdx]) {
      let temp = arr[i]
      arr[i] = arr[smallestIdx]
      arr[smallestIdx] = temp
    }
  }

  return arr
}
const insertionSort = arr => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let el = arr[i];
    let j;

    for (j = i - 1; j >= 0 && arr[j] > el; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = el;
  }
  return arr;
};

const merge = (arr1, arr2) => {
  let result = [];
  let i = 0; 
  let j = 0;

  while(i < arr1.length && j < arr2.length){
    if(arr1[i] > arr2[j]) {
      result.push(arr2[j]);
      j++;
    } else {
      result.push(arr1[i]);
      i++;
    }
  }
  while(i < arr1.length){
    result.push(arr1[i]);
    i++;
  }

  while(j < arr2.length){
    result.push(arr2[j]);
    j++;
  }

  return result;
}
const  mergeSort = (arr) => {

  if(arr.length <= 1) return arr;
  
  let halfPoint = Math.ceil(arr.length / 2);

  let firstHalf = mergeSort(arr.splice(0, halfPoint));

  let secondHalf = mergeSort(arr.splice(-halfPoint));

  return merge(firstHalf, secondHalf);
}

const quickSort = array => {
    if(array.length <= 1) return array
   let left = []
   let right = []
   let pivot = array[array.length-1]
   
   
   for(let i = 0; i < array.length-1; i++){
       if(pivot > array[i]) left.push(array[i])
       else right.push(array[i])
   }
   return [...quickSort(left), pivot, ...quickSort(right)]
}

const pivot = (arr, start = 0, end = arr.length + 1) => {
    const swap = (list, a, b) => [list[a], list[b]] = [list[b], list[a]];
  
    let pivot = arr[start],
        pointer = start;
  
    for (let i = start; i < arr.length; i++) {
      if (arr[i] < pivot  ) {
        pointer++;
        swap(arr, pointer, i);
      }
    };
    swap(arr, start, pointer);
  
    return pointer;
  }
