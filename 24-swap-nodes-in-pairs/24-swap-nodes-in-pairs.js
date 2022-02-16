/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (head == null || head.next == null) return head;
  let dummy = new ListNode(0, head);
  let curr = head;
  let prev = dummy;
  while (curr && curr.next) {
    let next = curr.next.next;
    let second = curr.next;

    // reverse
    second.next = curr;
    curr.next = next;
    prev.next = second;

    prev = curr;
    curr = next;
  }
  return dummy.next;
};