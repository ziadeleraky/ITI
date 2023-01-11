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

        friend void viewContent(Stack &);

        // Destructor
        ~Stack() {
            delete stPtr;
        }
};

int main() {
    Stack s1;

    // PUSH
    cout << "Pushed Values (10,5,8,100)\n" << endl;
    s1.push(10);
    s1.push(5);
    s1.push(8);
    s1.push(100);
    cout << "View Content" << endl;
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
void viewContent(Stack &s) {
    int n = s.top;
    for (int i = 0; i < n; i++) {
        cout << s.stPtr[i] << endl;
    }
}

