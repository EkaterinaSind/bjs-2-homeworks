function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr [0];
  let sum = 0;
  let count = 0;

  for (let i=0; i<arr.length; i++) {
    sum += arr[i];
    count++;
    if (arr[i] < min) {
      min = arr[i];
    }

    if (arr[i] > max) {
      max = arr[i];
    }
  }

  avg = sum / count;
  avg = parseFloat(avg.toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;

  if (arr[0] == null) {
    return 0;
  }

  for (let i=0; i<arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function differenceMaxMinWorker(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  if (arr[0] == null) {
    return 0;
  }
    
  return (max - min);
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  
  if (arr[0] == null) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
    }
        
    else {
      sumOddElement += arr[i];
    }
  }
    
  return (sumEvenElement - sumOddElement);
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  if (arr[0] == null) {
    return 0;
  }
    
  for (let i =0; i<arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
    
  return (sumEvenElement / countEvenElement);
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
    
  for (let i=0; i<arrOfArr.length; i++) {
    let element = arrOfArr[i];
    let max = func(...element);
    if (max > maxWorkerResult) {
      maxWorkerResult = max;
    }
  }
  return maxWorkerResult;
}
