#include <iostream>
using namespace std;

class Complex {
    // Attributes
    float real;
    float img;

    // Methods
    public:
        // Constructor
        Complex() {
            real = 0;
            img = 0;
        }

        // Parameterized Constructor
        Complex(float r, float i) {
            real = r;
            img = i;
        }

        // Parameterized Constructor
        Complex(float n) {
            real = n;
            img = n;
        }

        void setReal(float r) {
            real = r;
        }

        float getReal() {
            return real;
        }

        void setImg(float i) {
            img = i;
        }

        float getImg() {
            return img;
        }

        void display();

        /*
        ~Complex() {
            cout << "Happy Coding =)" << endl;
        }
        */
};

Complex Add(Complex, Complex);
Complex Add(Complex, Complex, Complex);
Complex Add(Complex, float);
Complex Add(float, Complex);

int main() {
    Complex C1;
    Complex C2(5.1, 7.2);
    Complex C3(3.3);

    // Case 1 - Show Values that have setted by constructors
    cout << "*** Case 1 - Constructors ***" << endl;
    C1.display();
    C2.display();
    C3.display();

    // Case 2 - Add(complex, float)
    cout << "\n\n*** Case 2 - Add(complex, float) ***" << endl;
    Complex CC1 = Add(C3, 3.3);
    CC1.display();

    // Case 3 - Add(float, complex)
    cout << "\n\n*** Case 3 - Add(float, complex) ***" << endl;
    Complex CC2 = Add(C3, 3.3);
    CC2.display();

    // Case 3 - Add(complex, complex)
    cout << "\n\n*** Case 3 - Add(complex, complex) ***" << endl;
    Complex CC3 = Add(C3, C2);
    CC3.display();

    // Case 4 - Add(complex, complex, complex)
    cout << "\n\n*** Case 3 - Add(complex, complex, complex) ***" << endl;
    Complex C4(1.1, 2);
    Complex CC4 = Add(C3, C4, C1);
    CC4.display();


}

void Complex::display() {
    if (getReal() == 0 && getImg() == 0) {
        cout << "0" << endl;
    } else if (getImg() == 1) {
        if (getReal() == 0) {
            cout << "i" << endl;
        } else {
            cout << getReal() << "+" << "i" << endl;
        }
    } else if (getReal() == 0) {
        cout << getImg() << "i" << endl;
    } else if (getImg() == 0) {
        cout << getReal() << endl;
    } else if (getImg() < 0) {
        cout << getReal() << getImg() << "i" << endl;
    } else {
        cout << getReal() << "+" << getImg() << "i" << endl;
    }
}

// Normal Function that returns a class type instead of (int, float,...)
Complex Add(Complex c1, Complex c2) {
    Complex sum;
    sum.setReal(c1.getReal() + c2.getReal());
    sum.setImg(c1.getImg() + c2.getImg());
    return sum;
}

Complex Add(Complex c1, Complex c2, Complex c3) {
    Complex sum;
    sum.setReal(c1.getReal() + c2.getReal() + c3.getReal());
    sum.setImg(c1.getImg() + c2.getImg() + c3.getImg());
    return sum;
}

Complex Add(Complex c, float r) {
    Complex sum;
    sum.setReal(c.getReal() + r);
    sum.setImg(c.getImg());
    return sum;
}

Complex Add(float r, Complex c) {
    Complex sum;
    sum.setReal(c.getReal() + r);
    sum.setImg(c.getImg());
    return sum;
}

