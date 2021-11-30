/*
Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

 

Example 1:


Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: l1 = [], l2 = []
Output: []
Example 3:

Input: l1 = [], l2 = [0]
Output: [0]
 

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both l1 and l2 are sorted in non-decreasing order.
*/

let mergeTwoLists = function(l1, l2) {

    //set up dummy node 
    let dummy = new ListNode(-1);

    //assign the head 
    let head = dummy;
  
    while (l1 !== null && l2 !== null) {
      if (l1.val <= l2.val) {
        dummy.next = l1;
        l1 = l1.next;
      } else {
        dummy.next = l2;
        l2 = l2.next;
      }
      dummy = dummy.next;
    }
  
    if (l1 !== null) {
      dummy.next = l1;
    } else {
      dummy.next = l2;
    }
  
    return head.next;
  };