/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if (height.length < 3) {
        return 0;
    }
    let leftWall = [];  
    let vol = 0;
    let baseH = 0;
    height.forEach((h, i) => {
       if (h === 0){
           baseH = 0;
       } else {
           if (leftWall.length === 0){
               leftWall.push({h,i});
           } else {

               let lastH= leftWall[leftWall.length-1];
               if (h < lastH.h) {
                   vol += (h-baseH) * (i-lastH.i-1);
                   leftWall.push({h,i});
                   baseH = h;
               } else if (h === lastH.h) {
                   leftWall.pop();
                   vol += (lastH.h-baseH) * (i-lastH.i-1);
                   leftWall.push({h,i});
               } else { // need to loop back until same or higher wall is found
                   let stop = false, add = false;
                   baseH = 0;
                   while (leftWall.length > 0 && !stop) {
                       lastH = leftWall[leftWall.length-1];
                       
                        if (h < lastH.h) {
                           leftWall.push({h,i});
                            vol += (h-baseH) * (i-lastH.i-1);
                            stop = true;
                            add = false;
                       } else if (h === lastH.h) {
                           leftWall.pop();
                           vol += (lastH.h-baseH) * (i-lastH.i-1);
                           leftWall.push({h,i});          
                           stop = true;
                           add = false;
                       } else  { //h > lastH.h
                            leftWall.pop();
                            vol += (lastH.h-baseH) * (i-lastH.i-1);
                            baseH = lastH.h;
                            add = true;
                       } 
                   }
                   if (add) {
                       leftWall.push({h,i});  
                   }
               }
           }
       }

    });

    return vol;
    
};
