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

        // Copy Constructor
        Stack(Stack &);

        void push(int);
        int pop();

        static int getCounter() {
            return counter;
        }

        int getTop() {
            // We created this function because we can't view the content if we don't know the top -> rubbish
            return top;
        }

        // Will Pass by reference and return by reference to avoid creating temp
        Stack & operator= (Stack &);

        int & operator[] (int);

        // Destructor
        ~Stack() {
            delete stPtr;
        }

};

void viewContent(Stack);

int main() {
    Stack s1;

    // PUSH
    cout << "Pushed Values (10,5,8,100)\n" << endl;
    s1.push(10);
    s1.push(5);
    s1.push(8);
    s1.push(100);
    cout << "View Content - LIFO" << endl;
    cout << "-------------------" << endl;
    viewContent(s1);

    cout << "\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~" << endl;
    cout << "Overload Equality Operator" << endl;
    cout << "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~" << endl;
    Stack s3;
    s3 = s1;
    viewContent(s1);

    cout << "\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~" << endl;
    cout << "Overload Subscripting [] Operator" << endl;
    cout << "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~" << endl;
    s3[0] = 101;
    viewContent(s3);
}

// Initialize the static Counter
int Stack::counter = 0;

// Copy Constructor
Stack::Stack(Stack &X) {
    // Where X is the Original Stack and we create an exact copy with copy constructor
    // This refer to the new copy that will create a new Stack
    this -> s = X.s;
    this -> top = X.top;
    counter++;
    // Create another area in heap with the same size of the original 4*Size
    this -> stPtr = new int[X.s];
    for (int i = 0; i < this -> top; i++) {
        this -> stPtr[i] = X.stPtr[i];
    }
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

// View Content of the passing Stack
/*
    We will face a problem that the destructor of s will remove the stack from
    the heap (delete stPtr). Stack s => pass by value it copies every detail of
    the class even the stPtr copies the address not only the allocation itself.
*/
void viewContent(Stack s) {
    int n = s.getTop();
    for (int i = 0; i < n; i++) {
        cout << s.pop() << endl;
    }
}

// Overload equality operator
Stack & Stack::operator= (Stack &st) {
    delete stPtr;
    top = st.top;
    s = st.s;
    // create dynamic allocation 4*Size
    stPtr = new int[s];
    for (int i = 0; i < top; i++) {
        stPtr[i] = st.stPtr[i];
    }
    return *this;
}

// Overload Subscripting operator
int & Stack::operator[] (int index) {
    if (index >= s) {
        cout << "Index Error" << endl;
        exit(0);
    } else {
        return stPtr[index];
    }
}
