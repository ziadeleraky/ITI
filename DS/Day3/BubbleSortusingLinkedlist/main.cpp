#include <iostream>
#include "Linkedlist.h"

using namespace std;



int main()
{
    LinkedList lnk;
    lnk.Add(3);
    lnk.Add(7);
    lnk.Add(9);
    lnk.Add(5);
    cout << "---<Linkedlist>---\n";
    lnk.Display();

    cout << endl;
    lnk.BubbleSort();
    cout << "---<Bubble Sort>---\n";
    lnk.Display();

    cout << endl;
    cout << "---<Binary Search - 5 >---\n";
    cout << lnk.BinarySearch(5);
    cout << endl;
    cout << "---<Binary Search - 1 >---\n";
    cout << lnk.BinarySearch(1);
    return 0;
}
