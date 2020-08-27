/*
OICE:
https://leetcode.com/submissions/detail/387287694/?from=/explore/interview/card/apple/350/trees-and-graphs/3118/
O: boolean
I: two trees
C: They are considered the same if they are structurally the same and nodes haver the same value
E: 

//structure of tree
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }

Diagram
check value
            1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

check value - 1 
1 === 1
go to left node check value
2===2

go to right node check value
3===3

return true


            1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]
check value
1===1
left node value check
2 === 1 - false - break and return false

Pseudo
func - p,q

if (p.value !== q.value) return false
func(p.left, q.left)
func(p.right, q.right)

*/

//Solution
var isSameTree = function(p, q) {
   if (!p || !q) {
    return p === q;
   }
   if (p.val !== q.val) {
    return false;
   }
   return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

var valueCheck = (a,b) => {
    return a === b;
}
//Tests