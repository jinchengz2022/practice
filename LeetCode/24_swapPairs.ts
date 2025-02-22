import { ListNode } from "./ListNode";

// 两两交换链表节点
function swapPairs(head: ListNode | null): ListNode | null {
    if(!head) {
        return null;
    }

    let dummyNode = new ListNode(-1);
    dummyNode.next = head;

    let node = dummyNode;

    while(node && node.next && node.next.next) {
        const curNode = node.next;

        let temp = curNode.next as ListNode;
        curNode.next = temp.next;
        temp.next = node.next;
        node.next = temp;

        node = curNode;
    }

    return dummyNode.next;
}

// function swapPairs(head: ListNode | null): ListNode | null {
//     if(!head) {
//         return null;
//     }

//     let temp = head.next;
//     head.next = swapPairs(temp?.next || null);
//     temp?.next = head;

//     return temp;
// }