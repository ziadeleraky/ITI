#include <iostream>

#include "LinkedList.h"

using namespace std;

int main()
{
    LinkedList myList;

    myList.Add(3);
    myList.Add(5);
    myList.Add(7);
    myList.Add(9);
    myList.Display();

    cout << endl;

    if(myList.Search(5))
        cout << "Found\n";
    else
        cout << "Not Found\n";

    //myList.Remove(7);

    cout << "Get Count: " << myList.GetCount() << endl;

    cout << "Get Data By Index[1]: " << myList.GetDataByIndex(1) << endl;

    myList.InsertAfter(11,5);
    myList.Display();
    cout << endl;

    LinkedList linkPtr;
    linkPtr = *myList.Reverse();
    cout << "New Reversed Linked List\n";
    linkPtr.Display();
    cout << endl;

    cout << "In Place Reversed Linked List\n";
    myList.InPlaceReverse();
    myList.Display();
    return 0;
}
