
let arr = [2,3,5];

let insertOrder = (ele, arr) => {
    if(arr.length == 0){
        arr.push(ele);
        return;
    }

    let current;
    for(let i = 0 ; i < arr.length ; i++){
        current = i;
        if(ele < arr[current]){
            break;
        }
    }


    insertItem(ele, current,arr);
}

let insertItem = (ele, index , arr) => {

    let init = arr.length - 1; 
    while(init != index){
        arr[init + 1] = arr[init];
        init--;
    }

    arr[index + 1] = arr[index]
    arr[index] = ele;
}

insertOrder(4,arr)
insertOrder(1,arr)
insertOrder(0,arr)

// The Final Result [0, 1, 2, 3, 4, 5]



