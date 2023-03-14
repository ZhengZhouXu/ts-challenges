const tree1 = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: null,
  },
} as const;

interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

type A = InorderTraversal<null>; // [1, 3, 2]

type InorderTraversal<T extends TreeNode | null> = [T] extends [TreeNode]
  ? [...InorderTraversal<T['left']>, T['val'], ...InorderTraversal<T['right']>]
  : [];
