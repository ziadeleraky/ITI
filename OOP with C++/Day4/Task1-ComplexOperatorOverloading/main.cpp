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

        // Operators Overloading
        Complex operator + (Complex &);
        Complex operator - (Complex &);
        Complex operator * (Complex &);
        Complex operator = (Complex &);
        Complex operator ++ (); //prefix
        Complex operator ++ (int); //postfix
        Complex operator -- ();
        Complex operator -- (int);
        Complex operator += (Complex &);
        Complex operator -= (Complex &);
        int operator == (Complex &);
        int operator != (Complex &);
        int operator < (Complex &);
        int operator > (Complex &);
        operator float();
        operator int();
};

Complex Add(Complex, Complex);
Complex Add(Complex, Complex, Complex);
Complex Add(Complex, float);
Complex Add(float, Complex);

int main() {
    // operator +
    Complex c1(5, 7.2), c2(3, 2);
    Complex c3 = c1 + c2;
    Complex c4 = c1 - c2;
    Complex c5 = c1 * c2;

    cout << "****c1(5, 7.2), c2(3,2)****" << endl;
    cout << "***Add***" << endl;
    c3.display();

    cout << "***Sub***" << endl;
    c4.display();

    cout << "***Mult***" << endl;
    c5.display();

    cout << "***Equal***" << endl;
    c3 = c5;
    c3.display();

    cout << "*** ++ prefix ***" << endl;
    ++c2;
    c2.display();

    cout << "*** ++ postfix ***" << endl;
    c1++;
    c1.display();

    cout << "*** -- prefix ***" << endl;
    --c2;
    c2.display();

    cout << "*** -- postfix ***" << endl;
    c1--;
    c1.display();

    cout << "*** += ***" << endl;
    c2 += c1;
    c2.display();

    cout << "*** -= ***" << endl;
    c1 -= c2;
    c1.display();

    cout << "*** < ***" << endl;
    if (c1 < c2) {
        cout << "true\n";
    }

    cout << "*** > ***" << endl;
    if (c1 > c2) {
        cout << "true\n";
    } else {
        cout << "false\n";
    }

    cout << "*** float ***" << endl;
    float f;
    f = (float)c1;
    cout << f << endl;

    cout << "*** int ***" << endl;
    int i;
    i = (int)c1;
    cout << i << endl;

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

// Ex: Complex c3 = c1 + c2;
Complex Complex::operator+ (Complex &c) {
    Complex res;
//  real(c3) = real(c1)+real(c2)
    res.real = real + c.real;
    res.img = img + c.img;
    return res;
}

Complex Complex::operator- (Complex &c) {
    Complex res;
    res.real = real - c.real;
    res.img = img - c.img;
    return res;
}

Complex Complex::operator* (Complex &c) {
    Complex res;
    res.real = real * c.real;
    res.img = img * c.img;
    return res;
}

Complex Complex::operator= (Complex &c) {
    real = c.real;
    img = c.img;
    return *this;
}

// res = ++c1
Complex Complex::operator++ () {
    real++;
    return *this;
}

Complex Complex::operator++ (int) {
    real++;
    return *this;
}

Complex Complex::operator-- () {
    real--;
    return *this;
}

Complex Complex::operator-- (int) {
    real--;
    return *this;
}

// c1 += c2
Complex Complex::operator+= (Complex &c) {
//  real(c1)=real(c1)+real(c2)
    real = real + c.real;
    img = img + c.img;
    return *this;
}

Complex Complex::operator-= (Complex &c) {
    real = real - c.real;
    img = img - c.img;
    return *this;
}

int Complex::operator== (Complex &c) {
    return ((real == c.real) && (img == c.img));
}

int Complex::operator!= (Complex &c) {
    return ((real != c.real) && (img != c.img));
}

int Complex::operator< (Complex &c) {
    if (real < c.real) {
        return 1;
    } else if (real == c.real) {
        if (img < c.img) {
            return 1;
        }
    } else {
        return 0;
    }
}

int Complex::operator> (Complex &c) {
    if (real > c.real) {
        return 1;
    } else if (real == c.real) {
        if (img > c.img) {
            return 1;
        }
    } else {
        return 0;
    }
}

Complex::operator float() {
    return real;
}

Complex::operator int() {
    return (int)real;
}
