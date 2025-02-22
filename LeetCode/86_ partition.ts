import { ListNode } from "./ListNode";

function partition(head: ListNode | null, x: number): ListNode | null {
    if (!head) {
        return null;
    }

    let minListNode = new ListNode(-1), maxListNode = new ListNode(-1);
    let node1 = minListNode, node2 = maxListNode;

    while(head) {
        if(head.val < x) {
            node1.next = new ListNode(head.val)
            node1 = node1.next;
        } else {
            node2.next = new ListNode(head.val)
            node2 = node2.next;
        }

        head = head.next
    }

    minListNode.next = maxListNode.next

    return minListNode.next
}