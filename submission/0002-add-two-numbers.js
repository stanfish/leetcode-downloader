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
    
    let tempL1 = l1;
    let tempL2 = l2;
    let l3, tempL3;
    let carry = false;
    while (tempL1 !== null || tempL2 !== null){
        
        let val1 = tempL1 === null ? 0 : tempL1.val;
        if (tempL1 !== null ){
            tempL1 = tempL1.next;
        }
        
        let val2 = tempL2 === null ? 0 : tempL2.val;
        if (tempL2 !== null ){
            tempL2 = tempL2.next;
        }
        
        let val3 = val1 + val2 + (carry ? 1 : 0);
        if (val3 >= 10) {
            val3 -= 10;
            carry = true;
        } else {
            carry = false;
        }
        
        let newNode = new ListNode(val3);
        
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
