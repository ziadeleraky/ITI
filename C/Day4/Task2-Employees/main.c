#include <stdio.h>
#include <stdlib.h>
#include <windows.h>
#define em 2

struct Fullname {
    char fname[10];
    char lname[10];
};

struct Employee {
    int code,age;
    float sal, bonus, tax;
    struct Fullname name;
};

void gotoxy(int x, int y) {
    COORD coordinate;
    coordinate.X = x;
    coordinate.Y = y;
    SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE), coordinate);
}

int main()
{
    struct Employee emp[em];
    for (int i = 0; i < em; i++) {
        // Menu Header
        gotoxy(40, 0);
        printf("********************");
        gotoxy(40, 1);
        printf("** Employee No. %d **", i+1);
        gotoxy(40, 2);
        printf("********************");

        // Menu Body
        gotoxy(30, 4);
        printf("Code:");
        scanf("%d", &emp[i].code);
        gotoxy(60, 4);

        printf("Age:");
        scanf("%d", &emp[i].age);

        gotoxy(30, 5);
        printf("Fname:");
        scanf("%s", &emp[i].name.fname);

        gotoxy(60, 5);
        printf("Lname:");
        scanf("%s", &emp[i].name.lname);

        gotoxy(30, 6);
        printf("Sal:");
        scanf("%f", &emp[i].sal);

        gotoxy(60, 6);
        printf("Bonus:");
        scanf("%f", &emp[i].bonus);

        gotoxy(30, 7);
        printf("Tax:");
        scanf("%f", &emp[i].tax);

        if (i<em-1) {
            gotoxy(30, 9);
            printf("Employee No. %d is added Successfully\n", i+1);
            gotoxy(30, 10);
            printf("Press any key to go to next page...");
        } else {
            gotoxy(30, 10);
            printf("End...");
        }
        getch();
        system("CLS");
    }

    // Printing Data
    gotoxy(30,0);
    printf("Employees Data");
    int i;
    for (i = 0; i < em; i++) {
        printf("\nCode: %d\n", emp[i].code);
        printf("Fullname: %s %s\n", emp[i].name.fname, emp[i].name.lname);
        printf("Age: %d\n", emp[i].age);
        printf("Net Salary: %f\n", emp[i].sal+emp[i].bonus-emp[i].tax);
        printf("\n****************************************\n");
    }

    printf("\nPress any key to end program...");
    getch();
    system("CLS");
    printf("Thanks =)");
}
