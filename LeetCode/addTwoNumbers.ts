// 链表两数相加
// l1: 1 -> 2 -> 3
// l2: 8 -> 9 -> 9
// result: 9 -> 1 -> 3 -> 1
import { ListNode } from './ListNode'

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const dummyNode: ListNode = new ListNode(-1);
  let node = dummyNode;
  let num = 0;

  // 有一个节点遍历完就退出
  while (l1 && l2) {
    // 两节点加上一步进位值
    const sum = l1.val + l2.val + num;

    // 进位值
    num = Math.floor(sum / 10);

    // 个位值
    const newNode = new ListNode(sum % 10);
    node.next = newNode;
    // 当前节点已完成，移动指针
    node = node.next;
    l1 = l1.next;
    l2 = l2.next;
  }

  // 判断是否有剩余值
  while (l1) {
    const sum = l1.val + num;

    num = Math.floor(sum / 10);

    const newNode = new ListNode(sum % 10);
    node.next = newNode;
    node = node.next;
    l1 = l1.next;
  }

  while (l2) {
    const sum = l2.val + num;

    num = Math.floor(sum / 10);

    const newNode = new ListNode(sum % 10);
    node.next = newNode;
    node = node.next;
    l2 = l2.next;
  }

  // 是否还有进位值
  if (num) {
    const newNode = new ListNode(num);
    node.next = newNode;
  }

  return dummyNode.next;
}

addTwoNumbers(
  {
    val: 9,
    next: {
      val: 9,
      next: {
        val: 9,
        next: { val: 9, next: null },
      },
    },
  },
  {
    val: 9,
    next: {
      val: 9,
      next: {
        val: 9,
        next: { val: 9, next: { val: 9, next: { val: 9, next: null } } },
      },
    },
  }
);
