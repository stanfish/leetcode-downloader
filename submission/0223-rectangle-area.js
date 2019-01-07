/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
    const area1 = (C-A) * (D-B);
    const area2 = (G-E) * (H-F);
    
   // console.log({area1,area2});
    
    let commonArea = 0;
    
    //W,X,Y,Z
    let W = Math.max(A,E);
    let X = Math.max(B,F);
    let Y = Math.min(C,G);
    let Z = Math.min(D,H);    

  //  console.log({W,X,Y,Z});
    
    
    if ((W<Y && X<Z) && ((W>=A && W<=C) || (X>=F && X<=H))){
        commonArea = (Y-W) * (Z-X); 
    }
    
    return area1 + area2 - commonArea;
    
};
