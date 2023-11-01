import { ListNode } from './ListNode'

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  if (!head) {
      return null;
  }

  let dummyNode = new ListNode(-1);
  dummyNode.next = head;

  let node = dummyNode;

  for(let i = 0; i < left - 1; i++) {
      node = node.next;
  }

  const beforeReverseNode = node.next;

  for(let k = left; k < right; k++) {
      const temp = beforeReverseNode.next;
      beforeReverseNode.next = temp.next;
      temp.next = node.next;
      node.next = temp;
  }

  return dummyNode.next
};