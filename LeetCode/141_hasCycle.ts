import { ListNode } from "./ListNode";

// 判断列表是否有环
// 输入：head = [3,2,0,-4], pos = 1（-4 指向 2）
// 输出：true

function hasCycle(nodelist: ListNode | null, pos: number): boolean {
  if (!nodelist) {
    return false;
  }

  let slow: ListNode | null = nodelist,
    fast: ListNode | null = nodelist;

  while (slow && fast?.next && fast?.next?.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}

function hasCycle2(nodelist: ListNode | null, pos: number): ListNode | null {
  if (!nodelist) {
    return null;
  }

  let slow: ListNode | null = nodelist,
    fast: ListNode | null = nodelist,
    flagNode: ListNode | null = nodelist;

  while (slow && fast?.next && fast?.next?.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      while (slow !== flagNode) {
        flagNode = flagNode?.next;
        slow = slow?.next;
      }

      return flagNode;
    }
  }

  return null;
}
