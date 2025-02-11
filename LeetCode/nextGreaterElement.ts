function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const result: number[] = [];

    for(let i = 0; i < nums1.length; i++) {
        result[i] = -1;

        const index = nums2.indexOf(nums1[i]);
        for(let k = index; k < nums2.length; k++) {
            if(nums2[k] > nums1[i]) {
                result[i] = nums2[k];
                break;
            }
        }
    }
    
    return result
};

console.log(nextGreaterElement([4,1,2], [1,3,4,2]));
