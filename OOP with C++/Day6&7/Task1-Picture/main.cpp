#include <iostream>
#include <graphics.h>

using namespace std;

class Point {
    // Attributes
    int x,y;
    // Methods
    public:
        // Default Constructor
        Point() {
           x=y=0;
        }
        // Parameterized Constructor - 1 value
        Point(int z) {
            x = y = z;
        }
        // Parameterized Constructor - 2 values
        Point(int n, int m) {
            x = n;
            y = m;
        }
        // Passing an object (Copy Constructor)
        /*
        Point(Point &p) {
            x = p.getX();
            y = p.getY();
        }
        */
        // Setters
        void setX(int n) {
            x = n;
        }
        void setY(int m) {
            y = m;
        }
        // Getters
        int getX() {
            return x;
        }
        int getY() {
            return y;
        }

};

class Circle {
    // Attributes
    Point center;
    int r;
    // Methods
    public:
        // By default Point default constructor will be called before Circle constructor
        // So it will be like this x=0,y=0 then r=0
        Circle() {
            r = 0;
        }
        // Parameterized constructor of Point will be called first with x,y values then will set radius
        // So it will be like this x=10,y=20 then r=5
        Circle(int x, int y, int rad):center(x,y) {
            r = rad;
        }
        // Setting the point with the copy constructor
        Circle(Point p, int rad):center(p) {
            r = rad;
        }

        void draw() {
            circle(center.getX(), center.getY(), r);
        }
};

class Rect {
    // Attributes
    Point UL;
    Point LR;
    // Methods
    public:
        // Will call UL default constructor then will call LR default constructor
        // So the result will be x1=0, y1=0 then x2=0, y2=0
        Rect() {};
        // Will call parameterized constructor of UL then LR
        // So it will be UL-> x1=5, y1=10 then LR-> x2=3, y2=6
        Rect(int x1, int y1, int x2, int y2):UL(x1,y1),LR(x2,y2) {};

        // Setters
        void setUL(int x, int y) {
            UL.setX(x);
            UL.setY(y);
        }
        void setLR(int x, int y) {
            LR.setX(x);
            LR.setY(y);
        }

        // Getters
        // We're passing by reference to return more than one value
        void getUL(int &x, int &y) {
            x = UL.getX();
            y = UL.getY();
        }
        void getLR(int &x, int &y) {
            x = LR.getX();
            y = LR.getY();
        }

        void draw() {
            rectangle(UL.getX(), UL.getY(), LR.getX(), LR.getY());
        }
};

class Line {
    // Attributes
    Point p1;
    Point p2;
    // Methods
    public:
        Line() {};
        Line(int x1, int y1, int x2, int y2):p1(x1,y1),p2(x2,y2) {};
        void draw() {
            line(p1.getX(),p1.getY(),p2.getX(),p2.getY());
        }
};

class Picture {
    // Attributes
    int cNum; //circle
    int rNum; //rectangle
    int lNum; //line
    Circle *pCircles;
    Rect *pRects;
    Line *pLines;

    // Methods
    public:
        // Default Constructor - initialize the data
        Picture() {
            cNum = 0;
            rNum = 0;
            lNum = 0;
            pCircles = NULL;
            pRects = NULL;
            pLines = NULL;
        }

        // Parameterized Constructor
        Picture(Circle *pc, Rect *pr, Line *pl, int cn, int rn, int ln) {
            cNum = cn;
            rNum = rn;
            lNum = ln;
            // Address = Address
            pCircles = pc;
            pLines = pl;
            pRects = pr;
        }

        // Setters
        void setCircles(Circle *pc, int cn) {
            pCircles = pc;
            cNum = cn;
        }

        void setRects(Rect *pr, int rn) {
            pRects = pr;
            rNum = rn;
        }

        void setLines(Line *pl, int ln) {
            pLines = pl;
            lNum = ln;
        }

        void paint() {
            int i;
            // Drawing Circles
            for (i = 0; i < cNum; i++) {
                setcolor(4);
                setbkcolor(4);
                pCircles[i].draw();
            }
            // Drawing Rectangles
            for (i = 0; i < rNum; i++) {
                setcolor(5);
                setbkcolor(5);
                pRects[i].draw();
            }
            // Drawing Lines
            for (i = 0; i < lNum; i++) {
                setcolor(6);
                setbkcolor(BROWN);
                pLines[i].draw();
            }
        }
};

int main() {
    int gd=DETECT,gm;
    initgraph(&gd,&gm,"");

    Picture pic;

    Circle cArr[3] = {Circle(50,150,250), Circle(200,100,150), Circle(20,50,200)};
    Rect rArr[2] = {Rect(30,40,120,100), Rect(20,50,50,300)};
    Line lArr[2] = {Line(420,50,300,200), Line(40,400,50,500)};

    pic.setCircles(cArr, 3);
    pic.setRects(rArr, 2);
    pic.setLines(lArr, 2);

/*
    Circle cArr[3];
    cArr[0] =  Circle(50,50,50);
    cArr[1] =  Circle(200,100,150);
    cArr[2] =  Circle(20,50,200);


    Rect rArr[2];
    rArr[0] = Rect(30,40,120,100);
    rArr[1] = Rect(20,50,50,300);
    Line lArr[2];
    lArr[0] = Line(420,50,300,200);
    lArr[1] = Line(40,400,50,500);


    // Passing them to Picture to draw it
    pic.setCircles(cArr, 3);
    pic.setRects(rArr, 2);
    pic.setLines(lArr, 2);
*/
    pic.paint();
    getch();
    return 0;
}
