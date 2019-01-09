/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let found=false;
    //for (var i=0; i<word.length; i++) {
        let ch = word[0];
        for (var j=0; j<board.length; j++) {
            let row = board[j];
            for (var k=0; k<row.length; k++) {
                if (board[j][k] === ch) {
                    
                    //console.log({j,k,ch, row});
                    
                    found = findWord(cloneArray(board), j, k, word);
                    if (found) {return true;}
                }
            }
        }
    //}
    return false;
};


var findWord = function(board, j, k, word) {
 //  console.log('findWord',{board,j,k,word});
    
    
    if (word.length === 0) { return true; }
    if (j<0 || k<0) {return false;}
    if (!board[j]) {return false;}
    if (!board[j][k]) {return false;}

    let found=false;
    if (word[0] === board[j][k]) {
        board[j][k] = '';
        found = findWord(cloneArray(board), j-1, k, word.substring(1));
        if (found) {return true;}
        found = findWord(cloneArray(board), j+1, k, word.substring(1));
        if (found) {return true;}
        found = findWord(cloneArray(board), j, k-1, word.substring(1));
        if (found) {return true;}
        found = findWord(cloneArray(board), j, k+1, word.substring(1));
        if (found) {return true;}         
    }
    return false;        
    
};


var cloneArray = function (arr) {
    //Deep copy
    return JSON.parse(JSON.stringify(arr));
}

