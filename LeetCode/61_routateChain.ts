import { ListNode } from "./ListNode";

function getLength(head: ListNode | null) {
  let len = 0;

  while (head) {
    head = head.next;
    len++;
  }

  return len;
}

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head) {
    return null;
  }

  let dummyNode = new ListNode(-1);
  dummyNode.next = head;

  let fast: any = dummyNode,
    slow: any = dummyNode;
  let headLength = k % getLength(head);

  while (headLength > 0) {
    fast = fast.next;
    headLength--;
  }

  while (fast && fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  fast.next = dummyNode.next;
  dummyNode.next = slow.next;
  slow.next = null;

  return dummyNode.next;
}
