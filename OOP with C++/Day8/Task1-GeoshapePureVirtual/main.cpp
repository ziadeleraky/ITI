#include <iostream>

using namespace std;

// Base Class
class Geoshape
{
    // Attributes
    protected:
        float dim1, dim2;
    // Methods
    public:
        // Default Constructor
        Geoshape()
        {
            dim1 = dim2 = 0;
        }
        // Parameterized Constructor
        Geoshape(float d)
        {
            dim1 = dim2 = d;
        }
        Geoshape(float d1, float d2)
        {
            dim1 = d1;
            dim2 = d2;
        }
        // Setters
        void setDim1(float d1)
        {
            dim1 = d1;
        }
        void setDim2(float d2)
        {
            dim2 = d2;
        }
        // Getters
        float getDim1()
        {
            return dim1;
        }
        float getDim2()
        {
            return dim2;
        }
        // Pure Virtual -> will enforce derived classes to implement calcArea()
        virtual float calcArea() = 0;
        virtual void paint() = 0;
};

// Derived Classes
class Circle: public Geoshape
{
    public:
        // Default Constructor - just to call the default constructor of the base
        // class and setting dims to 0
        Circle() {}
        // Parameterized Constructor that accept radius then will pass it
        // to parameterized constructor of the base to initialize the dim.
        Circle(float r):Geoshape(r) {}
        float calcArea()
        {
            // dim 1 = dim 2 = r
            return 3.14*dim1*dim2;
        }

};

class Rect: public Geoshape
{
    public:
        Rect() {}
        // dim 1 = l, dim 2 = w
        Rect(float l, float w):Geoshape(l,w) {};
        float calcArea()
        {
            // length * width
            return dim1*dim2;
        }
};

class Triangle: public Geoshape
{
    public:
        Triangle() {}
        Triangle(float b, float h):Geoshape(b,h) {}
        float calcArea()
        {
            // dim 1 = base, dim 2 = height
            return 0.5*dim1*dim2;
        }
};

class Square: public Rect
{
    public:
        Square() {}
        Square(float d):Rect(d,d) {}
        // calcArea() will be inherited from Rect
};

int main()
{
    Geoshape *g;
    cout << " ------------------------------------------- " << endl;
    Triangle t(30,15);
    cout << "| Triangle Area = 0.5 * Base * Height = " << t.calcArea() << " |" << endl;
    cout << " ------------------------------------------- \n" << endl;

    cout << " ---------------------------------------------- " << endl;
    Circle c(15);
    cout << "| Circle Area = 3.14 * radius * radius = " << c.calcArea() << " |" << endl;
    cout << " ---------------------------------------------- \n" << endl;

    cout << " --------------------------------------- " << endl;
    Rect r(20,10);
    cout << "| Rectangle Area = Length * Width = " << r.calcArea() << " |" << endl;
    cout << " --------------------------------------- \n" << endl;

    cout << " ----------------------------------- " << endl;
    Square s(5);
    cout << "| Square Area = Length * Width = " << s.calcArea() << " |" << endl;
    cout << " ----------------------------------- \n" << endl;

    return 0;
}
