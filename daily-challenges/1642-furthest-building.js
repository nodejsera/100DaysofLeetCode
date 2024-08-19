var furthestBuilding = function(heights, bricks, ladders) {
    const jumpArr = [];
    for(let i=0;i<heights.length-1;i++) {
        if(heights[i+1] > heights[i]) {
            jumpArr.push(heights[i+1] - heights[i]);
        } else{
            jumpArr.push(0)
        }
    }
    console.log("jumpArr", jumpArr);
    return jumpArr;

};
furthestBuilding([4,12,2,7,3,18,20,3,19], 10, 2);
