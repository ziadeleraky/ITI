#ifndef LINKEDLIST_H
#define LINKEDLIST_H

#include <iostream>
#include "Node.h"

using namespace std;

class LinkedList
{
    Node *head, *tail;

    public:
        LinkedList()
        {
            // Setting head & tail with NULL instead of garbage
            head = tail = NULL;
        }

        void Add(int data)
        {
            // Create new Node for new data
            Node *node = new Node(data);

            // Linking current one with the previous
            // if head==null -> it means that we're creating first node in the linkedlist
            if (head == NULL)
            {
                // Set head&tail with new data address(node)
                head = tail = node;
            }
            else
            {
                // head!=null -> it means that we have created a node before
                // so we are setting current.next with the new data to refer to it
                // newData.previous with the old node to refer to it
                // moving the tail to refer to the new one
                tail->Next = node;
                node->Prev = tail;
                tail = node;
            }
        }

        void Display()
        {
            Node *current = head;

            while(current != NULL)
            {
                cout << current->Data << "   ";
                current = current->Next;
            }
        }

        int Search(int data)
        {
            Node *node = GetNodeByData(data);
            return node != NULL; // will evaluate to true or false
        }

        void Remove(int data)
        {
            Node *node = GetNodeByData(data);
            if(node == NULL)
                return;

            if(node == head)
            {
                if(node == tail)
                {
                    head = tail = NULL;
                }
                else
                {
                    head = head->Next;
                    head->Prev = NULL;
                }
            }
            else if (node == tail)
            {
                tail = tail->Prev;
                tail->Next = NULL;
            }
            else
            {
                /*
                Node *A = node->Prev;
                Node *B = node->Next;
                A->Next = B;
                b->Prev = A;
                */
                node->Prev->Next = node->Next;
                node->Next->Prev = node->Prev;
            }

            delete node;

        }

        int GetCount()
        {
            Node *current = head;
            int Count = 0;
            while (current != NULL) {
                Count++;
                current = current->Next;
            }
            return Count;
        }

        int GetDataByIndex(int index)
        {
            Node *current = head;
            for (int i = 0; i < index; i++) {
                if(current->Next != NULL)
                    current = current->Next;
                else
                    return current->Data;
            }
            return current->Data;
        }

        void InsertAfter(int data, int afterData)
        {
            Node *node = new Node(data);
            Node *current = GetNodeByData(afterData);

            if(current == NULL)
                return;

            if(current == head)
            {
                if(current == tail)
                {
                    tail = node;
                }
                else
                {
                    head->Next->Prev = node;
                    node->Next = head->Next;
                    head->Next = node;
                }
            }
            else if(current == tail)
            {
                tail->Next = node;
                node->Prev = tail;
                tail = node;
            }
            else
            {
                node->Next = current->Next;
                node->Next->Prev = node;
                node->Prev = current;
                current->Next = node;
            }
        }

        LinkedList* Reverse()
        {
            LinkedList *newList = new LinkedList();
            Node *current = tail;

            while(true)
            {
                if(head == NULL)
                {
                    return newList;
                }
                else
                {
                    newList->Add(current->Data);
                    current = current->Prev;
                    if(current == head)
                    {
                        newList->Add(current->Data);
                        return newList;
                    }
                }
            }

        }

        void InPlaceReverse()
        {
            Node *current = head;
            Node *prev = NULL;
            Node *next = NULL;
            // 1->2->3->NULL
            while(current != NULL)
            {
                // next = 2
                next = current->Next;
                // current of next = NULL
                current->Next = prev;
                // prev = head
                prev = current;
                // current 2
                current = next;
            }
            // head = 3
            head = prev;
        }


    protected:

    private:
        Node* GetNodeByData(int data)
        {
            Node *current = head;

            while(current != NULL)
            {
                if(current->Data == data)
                {
                    return current;
                }
                current = current->Next;
            }

            return NULL;
        }
};

#endif // LINKEDLIST_H
