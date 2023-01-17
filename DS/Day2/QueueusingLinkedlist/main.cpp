#include <iostream>
#include <Queue.h>

using namespace std;

int main()
{
    Queue q;

    q.enQueue(3);
    q.enQueue(5);
    q.enQueue(7);
    cout << "**** enQueue 3, 5, 7 ****" << endl;
    q.Display();


    cout << "\n**** deQueue ****" << endl;
    q.deQueue();
    q.Display();

    return 0;
}
