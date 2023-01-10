#include <stdio.h>
#include <stdlib.h>
#include <windows.h>

struct Fullname {
    char fname[10];
    char lname[10];
};

struct Employee {
    int code,age;
    float sal, bonus, tax;
    struct Fullname name;
};

void gotoxy(int x, int y)
{
    COORD coordinate;
    coordinate.X = x;
    coordinate.Y = y;
    SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE), coordinate);
}

int main()
{
    struct Employee emp;
    // Menu Header
    gotoxy(40, 0);
    printf("*******************");
    gotoxy(40, 1);
    printf("** Employee Form **");
    gotoxy(40, 2);
    printf("*******************");

    // Menu Body
    gotoxy(30, 4);
    printf("Code:");
    scanf("%d", &emp.code);

    gotoxy(60, 4);
    printf("Age:");
    scanf("%d", &emp.age);

    gotoxy(30, 5);
    printf("Fname:");
    scanf("%s", &emp.name.fname);

    gotoxy(60, 5);
    printf("Lname:");
    scanf("%s", &emp.name.lname);

    gotoxy(30, 6);
    printf("Sal:");
    scanf("%f", &emp.sal);

    gotoxy(60, 6);
    printf("Bonus:");
    scanf("%f", &emp.bonus);

    gotoxy(30, 7);
    printf("Tax:");
    scanf("%f", &emp.tax);

    gotoxy(30, 9);
    printf("To Print Enter Any Key...");
    getch();

    // page 2
    system("CLS");

    gotoxy(30,0);
    printf("Page 2");

    gotoxy(20,2);
    printf("Code: %d", emp.code);
    gotoxy(40,2);
    printf("Fullname: %s %s", emp.name.fname, emp.name.lname);
    gotoxy(20,4);
    printf("Age: %d", emp.age);
    gotoxy(40,4);
    printf("Net Salary: %f", emp.sal+emp.bonus-emp.tax);
    gotoxy(20,6);
    printf("Press any key to end program...");
    getch();
    system("CLS");
    printf("Thanks =)");

}
