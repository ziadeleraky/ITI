#ifndef CIRCULARQUEUE_H
#define CIRCULARQUEUE_H

#include <iostream>
using namespace std;

class CircularQueue
{
    public:
        int Rear, Front;
        int Size;
        int *items;

        CircularQueue(int s)
        {
            Front = Rear = -1;
            Size = s;
            // Create new array in heap
            items = new int[s];
        }

        void enQueue(int data)
        {
            // Full                             - Front is in front of Rear
            if((Front == 0 && Rear == Size -1) || (Front == Rear + 1))
            {
                Rear = 0;
                items[Rear] = data;
            }
            // Empty
            else if(Front == -1 && Rear == -1)
            {
                Front++;
                Rear++;
                items[Rear] = data;
            }
            else
            {
                Rear++;
                items[Rear] = data;
            }
        }

        void deQueue()
        {
            // Empty
            if(Front == -1 && Rear == -1)
            {
                return;
            }
            // Last item or empty
            else if (Front == Rear)
            {
                Front = Rear = -1;
            }
            else
            {
                if(Front == Size - 1)
                {
                    Front = -1;
                }
                else
                {
                    Front++;
                }
            }
        }

        void Display()
        {
            if(Front == -1)
            {
                return;
            }

            if(Rear >= Front)
            {
                for(int i = Front; i <= Rear; i++)
                {
                    cout << items[i] << "   ";
                }
            }
            else
            {
                // From Front to the end
                for(int i = Front; i < Size; i++)
                    cout << items[i] << "   ";

                // From 0 to Rear
                for(int i = 0; i <= Rear; i++)
                    cout << items[i] << "   ";
            }
        }

    protected:

    private:
};

#endif // CIRCULARQUEUE_H
