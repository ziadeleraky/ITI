#ifndef STACK_H
#define STACK_H

#include "Node.h"
#include <iostream>

using namespace std;

class Stack
{
    public:
        Node *top;

        Stack()
        {
            top = NULL;
        }

        void Push (int data)
        {
            Node *node = new Node(data);

            // Setting the data of the node
            node->Data = data;
            // Linking the new node with the old one
            node->Prev = top;
            // Make the new Node as top of stack
            top = node;
        }

        int Pop()
        {
            if(top == NULL)
                throw "Stack is Empty";

            top = top->Prev;
            return top->Data;
        }

        void Display()
        {
            Node *current;

            if(top == NULL)
                return;
            else
                current = top;
                while(current != NULL)
                {
                    cout << current->Data << "   ";
                    current = current->Prev;
                }
        }

    protected:

    private:
};

#endif // STACK_H
