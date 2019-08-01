function solution(arr, count) {
    while(count > 0) {
        swapIndex(arr);
        count--;
    }
    return arr;
}

function swapIndex(arr) {
    if(arr.length > 0) {
        let lastIndex = arr.pop();
        arr.unshift(lastIndex);
        return arr;
    }
    return;
}

console.log(solution([1,2,3,4,5,6], 4)); // returns [ 3, 4, 5, 6, 1, 2 ]