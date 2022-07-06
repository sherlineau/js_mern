//quick sort
//divide array into two partitions. set a pivot index, everything to left of pivot should be greater than pivot, everything right should be less than pivot
//use pointers to iterate right and left,

const partition = (arr,low,high) => {
    //sets pivot to middle of array
    //low is passed in starting at 0
    //high is length of arr - 1
    let pivot = arr[Math.floor((low+high)/2)]
    
    //continues to run while low is less than high ( which is the length of the input array)
    while (low <= high) {
        
        //runs will arr at index low is less than our pivot which was set outside the while loop
        while(arr[low] < pivot) {
            //incremements low until arr[low] is not less than the pivot
            low++
        }
        
        //same as low loop but checking for greater than pivot
        while (arr[high] > pivot) {
            high--
        }
        
        //swaps arr indices 
        if (low<=high) {
            [arr[low],arr[high]] = [arr[high],arr[low]]
            low++
            high--
        }
    }
    return low
}

const quickSort = (arr,low,high) => {
    //initialize index varialble to hold our returned index from partition function
    let index;
    if (arr.length > 1) {
        index = partition(arr,low,high);
        if ( low < index - 1) {
            quickSort(arr,low,index-1)
        }
        if ( index < high ) {
            quickSort(arr, index, high)
        }
    }
    return arr
}

nums = [1,7,6,2,3,8,9]
console.log(quickSort(nums,0,nums.length-1))

data = [8, 7, 2, 1, 0, 9, 6]
console.log(quickSort(data,0,data.length-1))

// time complexity O(n log(n))
