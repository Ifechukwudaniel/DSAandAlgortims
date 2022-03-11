/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

 var rotateRight = function (head, k = 1) {
  if (k == 0) return head;
  if (!head) return head;
  if (!head.next) return head;
  let length = 1;
  let lastNode = null;
  let tail = head;

  while (tail.next) {
    tail = tail.next;
    length++;
  }

  if (k >= length) k = k % length;

  if (k == 0) return head;

  let currentNode = head;
  for (let i = 0; i < length - k - 1; i++) {
    currentNode = currentNode.next;
  }

  lastNode = currentNode.next;
  currentNode.next = null;
  tail.next = head;
  return lastNode;
};