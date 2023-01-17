#ifndef TREE_H
#define TREE_H

#include <iostream>
#include "Node.h"

using namespace std;

class Tree
{
    Node *root;

    public:
        Tree()
        {
            root = NULL;
        }

        void Add(int data)
        {
            Node *node = new Node(data);

            if(root == NULL)
            {
                root = node;
            }
            else
            {
                Node *current = root;
                Node *parent;

                while(current != NULL)
                {
                    parent = current;

                    if(data > current->Data)
                        current = current->Right;
                    else
                        current = current->Left;
                }

                if(data > parent->Data)
                    parent->Right = node;
                else
                    parent->Left = node;
            }
        }

        void Remove(int data)
        {
            Node *node = GetNodeByData(data);

            if(node == NULL)
                return;

            if(node == root)
            {
                if(root->Left == NULL && root->Right == NULL)
                {
                    root = NULL;
                }
                else if(root->Right == NULL)
                {
                    root = root->Left;
                }
                else if(root->Left == NULL)
                {
                    root = root->Right;
                }
                else
                {
                    Node *newRoot = root->Left;
                    Node *maxRight = GetMaxRight(newRoot);

                    maxRight->Right = root->Right;
                    root = newRoot;
                }
            }
            else
            {
                Node *parent = GetParent(node);
                Node *newChild;

                if(node->Left == NULL && node->Right == NULL)
                {
                    newChild = NULL;
                }
                else if(node->Right == NULL)
                {
                    newChild = node->Left;
                }
                else if(node->Left == NULL)
                {
                    newChild = node->Right;
                }
                else
                {
                    Node *newParent = node->Left;
                    Node *maxRight = GetMaxRight(newParent);

                    maxRight->Right = node->Right;

                    newChild = newParent;
                }

                if(parent->Left == node)
                    parent->Left = newChild;
                else
                    parent->Right = newChild;
            }

            delete node;
        }

        void Traverse()
        {
            Display(root);
        }

        int maxDepth(Node *node)
        {
            if (node == NULL)
                return 0;
            else
            {
                int left = maxDepth(node->Left);
                int right = maxDepth(node->Right);

                if (left > right)
                    // max level in right + root
                    return (left + 1);
                else
                    // max level in right + root
                    return (right + 1);
            }
        }

        int GetMaxLevels()
        {
            return maxDepth(root);
        }

    protected:

    private:

        Node* GetNodeByData(int data)
        {
            Node *current = root;

            while(current != NULL)
            {
                if(data == current->Data)
                    return current;

                if(data > current->Data)
                    current = current->Right;
                else
                    current = current->Left;
            }

            return NULL;
        }

        Node* GetParent(Node *node)
        {
            Node *parent = root;

            while(parent != NULL)
            {
                if(parent->Left == node || parent->Right == node)
                    return parent;

                if(node->Data > parent->Data)
                    parent = parent->Right;
                else
                    parent = parent->Left;
            }

            return NULL;
        }

        Node* GetMaxRight(Node *node)
        {
            while(node->Right != NULL)
            {
                node = node->Right;
            }

            return node;
        }

        void Display(Node *node)
        {
            if(node == NULL)
                return;

            Display(node->Left);
            cout << node->Data << "   ";
            Display(node->Right);
        }
};

#endif // TREE_H
