#include <iostream>
using namespace std;

class Stack {
    // Attributes
    int *stPtr;
    int top;
    int s;

    // Methods
    public:
        // Constructor
        Stack() {
            top = 0;
            s = 5;
            // Reserve 5(size)*4(int bytes) and sign the address for the pointer
            stPtr = new int[s];
        }

        void push(int);
        int pop();
};

int main() {
    Stack s;

    // PUSH
    s.push(10);
    s.push(5);
    cout << "PUSHED Elements (10,5)" << endl;
    // POP
    cout << "First POP: " << s.pop() << endl;
    cout << "Second POP: " << s.pop() << endl;
    cout << "Third POP: " << s.pop() << endl;

}


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

/*
#include <iostream>
using namespace std;
#define SIZE 5

class Stack {
    // Attributes
    int st[SIZE];
    int top;

    // Methods
    public:
        void push(int);
        int pop();
        void initStack() {
            top = 0;
        }
};

int main()
{
    Stack s;

    // Intiallizing TOP
    s.initStack();
    // PUSH
    s.push(10);
    s.push(5);
    cout << "PUSHED Elements (10,5)" << endl;
    // POP
    cout << "First POP: " << s.pop() << endl;
    cout << "Second POP: " << s.pop() << endl;
    cout << "Third POP: " << s.pop() << endl;


}

void Stack::push(int n) {
    if (top == SIZE) {
        cout << "Stack is already FULL!" << endl;
    } else {
        st[top] = n;
        top++;
    }
}

int Stack::pop() {
    int poppedVal;
    if (top == 0) {
        cout << "Stack is EMPTY!" << endl;
    } else {
        top--;
        poppedVal = st[top];
    }
    return poppedVal;
}
*/
