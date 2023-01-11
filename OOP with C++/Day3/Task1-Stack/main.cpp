#include <iostream>
using namespace std;

class Stack {
    // Attributes
    int *stPtr;
    int top;
    int s;
    static int counter;

    // Methods
    public:
        // Default Constructor
        Stack() {
            top = 0;
            s = 5;
            // Reserve 5(size)*4(int bytes) and sign the address for the pointer
            stPtr = new int[s];
            counter++;
        }

        // Parameterized Constructor
        Stack(int sz) {
            s = sz;
            top = 0;
            stPtr = new int[sz];
            counter++;
        }

        void push(int);
        int pop();

        static int getCounter() {
            return counter;
        }

        int getTop() {
            // We created this function because we can't view the content if we don't know the top -> rubbish
            return top;
        }

        // Destructor
        ~Stack() {
            delete stPtr;
        }
};

void viewContent(Stack);

int main() {
    Stack s1;
    Stack s2(100);

    // PUSH
    cout << "Pushed Values (10,5,8,100)\n" << endl;
    s1.push(10);
    s1.push(5);
    s1.push(8);
    s1.push(100);
    cout << "View Content - LIFO" << endl;
    cout << "-------------------" << endl;
    viewContent(s1);
}

// Initialize the static Counter
int Stack::counter = 0;

void Stack::push(int n) {
    if (top == 5) {
        cout << "Stack is already FULL!" << endl;
    } else {
        stPtr[top] = n;
        top++;
    }
}

int Stack::pop() {
    int poppedVal;
    if (top == 0) {
        cout << "Stack is EMPTY!" << endl;
    } else {
        top--;
        poppedVal = stPtr[top];
    }
    return poppedVal;
}

// View Content of the passing Stack
/*
    We will face a problem that the destructor of s will remove the stack from
    the heap (delete stPtr). Stack s => pass by value it copies every detail of
    the class even the stPtr copies the address only not the allocation itself.
*/
void viewContent(Stack s) {
    int n = s.getTop();
    for (int i = 0; i < n; i++) {
        cout << s.pop() << endl;
    }
}

/*
    s2.push(10);
    s2.push(20);

    cout << "\n\nPUSHED Elements (20,10)" << endl;
    // POP
    cout << "First POP: " << s2.pop() << endl;
    cout << "Second POP: " << s2.pop() << endl;
    cout << "Third POP: " << s2.pop() << endl;

    cout << "\n\n*** Counter ***" << endl;
    cout << Stack::getCounter();
*/

