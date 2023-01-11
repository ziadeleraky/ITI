#include <iostream>
using namespace std;

class Complex {
    // Attributes
    float real;
    float img;
    // Methods
    public:
        void setReal(float);
        float getReal();
        void setImg(float);
        float getImg();
        void display();
};

Complex Add(Complex, Complex);

int main() {
    Complex C1, C2, C;
    float n;

    cout << "Enter Real 1 Part: ";
    cin >> n;
    C1.setReal(n);

    cout << "Enter Img 1 Part: ";
    cin >> n;
    C1.setImg(n);

    cout << "Enter Real 2 Part: ";
    cin >> n;
    C2.setReal(n);

    cout << "Enter Img 2 Part: ";
    cin >> n;
    C2.setImg(n);

    // Case 1
    cout << "\n\n*** Case 1 - Display for One Object ***" << endl;
    C1.display();

    // Case 2
    cout << "\n\n*** Case 2 - Display Sum ***" << endl;
    C = Add(C1,C2);
    C.display();

}

void Complex::setReal(float r) {
    real = r;
}

float Complex::getReal() {
    return real;
}

void Complex::setImg(float i) {
    img = i;
}

float Complex::getImg() {
    return img;
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


Complex Add(Complex c1, Complex c2) {
    Complex sum;
    sum.setReal(c1.getReal() + c2.getReal());
    sum.setImg(c1.getImg() + c2.getImg());
    return sum;
}


/*
struct complex {
    // Attributes
    float real;
    float img;
    // Methods
    public:
        void setReal(float);
        float getReal();
        void setImg(float);
        float getImg();
        void display();
};

int main()
{
    complex c1;
    float n;

    cout << "Enter Real Part: ";
    cin >> n;
    c1.setReal(n);

    cout << "Enter Img Part: ";
    cin >> n;
    c1.setImg(n);

    c1.display();
}

void complex::setReal(float r) {
    real = r;
}

float complex::getReal() {
    return real;
}

void complex::setImg(float i) {
    img = i;
}

float complex::getImg() {
    return img;
}

void complex::display() {
    cout << "Real Part is " << getReal() << endl;
    cout << "Img Part is " << getImg();
}

*/
