import { ListNode } from "./ListNode";

function getReverseListNode(head: ListNode) {
    let pre = null;

    while(head) {
        let temp = head.next;
        head.next = pre;
        pre = head;
        head = temp;
    }

    return pre;
}

function getMiddleNode(head: ListNode) {
    let fast = head, slow = head;

    while(fast?.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow.next
    }

    return fast?.next ? slow.next : slow;
}

function isPalindrome(head: ListNode | null): boolean {
    if(!head) {
        return null;
    }

    const middleNode = getMiddleNode(head);
    const reverseListNode = getReverseListNode(middleNode);

    while(middleNode && reverseListNode) {
        if(middleNode.val !== reverseListNode.val) {
            return false;
        }

        middleNode = middleNode.next;
        reverseListNode = reverseListNode.next;
    }

    return true;
}