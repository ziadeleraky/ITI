#include <iostream>
#include <CircularQueue.h>

using namespace std;

int main()
{
    CircularQueue cq(4);
    cq.enQueue(3);
    cq.enQueue(5);
    cq.Display();

    cout << endl;
    cq.deQueue();
    cq.Display();

    return 0;
}
