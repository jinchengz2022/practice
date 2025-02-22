import { ListNode } from "./ListNode";

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if(!head) {
        return null;
    }

    let node: ListNode | null = head;

    while(node) {
        while(node && node.next && node.val === node.next.val) {
            node.next = node.next.next;
        }

        node = node.next
    }

    return head;
}