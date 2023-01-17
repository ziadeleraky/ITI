#ifndef QUEUE_H
#define QUEUE_H

#include "Node.h"
#include <iostream>

using namespace std;


class Queue
{
    public:
        Node *Front, *Rear;

        Queue()
        {
            Front = Rear = NULL;
        }

        void enQueue(int data)
        {
            // Create new node in the heap
            Node *node = new Node(data);

            // if queue is empty
            if(Rear == NULL)
            {
                Front = Rear = node;
                return;
            }

            // linking the current node with the new one
            Rear->Next = node;
            // moving rear to the new node
            Rear = node;
        }

        void deQueue()
        {
            // if queue is empty
            if(Front == NULL)
                return;

            Node *current = Front;
            // moving front to the next
            Front = Front->Next;

            delete current;
        }

        void Display()
        {
            Node *current = Front;

            if(current == NULL)
                return;

            while(current != NULL)
            {
                cout << current->Data << "   ";
                current = current->Next;
            }
        }

    protected:

    private:
};

#endif // QUEUE_H
