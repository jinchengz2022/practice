import { ListNode } from "./ListNode";

// 反转链表
// 1 -> 2 -> 3
// 3 -> 2 -> 1
function reverseList(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }

  let pre: ListNode | null = null;

  // step1. head 1 -> 2 -> 3
  // temp = 2 -> 3
  // head.next = null
  // pre = 1 -> null
  // head = 2 -> 3 -> null

  // step2.  head 2 -> 3
  // temp = 3
  // head.next = 1 -> null
  // pre = 2 -> 1 -> null
  // head = 3 -> null

  // step3. head 3 -> null
  // temp = null
  // head.next = 2 -> 1 -> null
  // pre = 3 -> 2 -> 1
  // head = null

  while (head) {
    const temp = head.next;
    head.next = pre;
    pre = head;
    head = temp;
  }

  return pre;
}

reverseList({ val: 1, next: { val: 2, next: { val: 3, next: null } } });
