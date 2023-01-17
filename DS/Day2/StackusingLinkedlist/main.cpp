#include <iostream>
#include "Stack.h"
using namespace std;

int main()
{
    Stack stk;

    cout << "**** Push 3,5,7 ****" << endl;
    stk.Push(3);
    stk.Push(5);
    stk.Push(7);

    stk.Display();

    cout << endl;

    cout << "**** Pop ****" << endl;
    stk.Pop();

    stk.Display();
    stk.Pop();

    cout << endl;
    stk.Display();


    return 0;
}
