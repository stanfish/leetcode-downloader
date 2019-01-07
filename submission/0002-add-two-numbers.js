/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    var tempL1 = l1;
    var tempL2 = l2;
    var l3, tempL3;
    var carry = false;
    while (tempL1 !== null || tempL2 !== null){
        
        var val1 = tempL1 === null ? 0 : tempL1.val;
        if (tempL1 !== null ){
            tempL1 = tempL1.next;
        }
        
        var val2 = tempL2 === null ? 0 : tempL2.val;
        if (tempL2 !== null ){
            tempL2 = tempL2.next;
        }
        
        var val3 = val1 + val2 + (carry ? 1 : 0);
        if (val3 >= 10) {
            val3 -= 10;
            carry = true;
        } else {
            carry = false;
        }
        
        var newNode = new ListNode(val3);
        
        if (!l3) {
            l3 = newNode;
            tempL3 = l3;
        } else {
            tempL3.next = newNode;
            tempL3 = newNode;
        }
        
    }
    
    if (carry){
        tempL3.next = new ListNode(1);
    }
    

    return l3;
    
};
