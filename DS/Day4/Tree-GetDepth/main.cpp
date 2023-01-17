#include <iostream>
#include "Tree.h"
using namespace std;

//int maxDepth(Tree *tree)
//{
//    Node *node = tree->root;
//    if (node == NULL)
//        return 0;
//    else
//    {
//        /* compute the depth of each subtree */
//        int lDepth = maxDepth(node->Left);
//        int rDepth = maxDepth(node->Right);
//
//        /* use the larger one */
//        if (lDepth > rDepth)
//            return (lDepth + 1);
//        else
//            return (rDepth + 1);
//    }
//}

int main()
{
    Tree t;

    t.Add(50);
    t.Add(40);
    t.Add(30);
    t.Add(60);
    t.Add(70);
    t.Add(65);

    t.Traverse();

    cout << endl;
    cout << "---<No. of Levels>---\n";
    cout << t.GetMaxLevels();

    return 0;
}
