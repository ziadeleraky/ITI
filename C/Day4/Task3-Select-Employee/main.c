#include <stdio.h>
#include <stdlib.h>
#include <windows.h>
#define em 10

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
    int n, j = 1,i = 0, arr[em] = {0};
    struct Employee emp[em];
    do {
        printf("Please Enter Employee Index: ");
        scanf("%d", &n);
        arr[i] = n;
        i++;
        system("CLS");
        if (n != 0 && n < 11) {
            // Menu Header
            gotoxy(40, 0);
            printf("********************");
            gotoxy(40, 1);
            printf("** Employee No. %d **", n);
            gotoxy(40, 2);
            printf("********************");

            // Menu Body
            gotoxy(30, 4);
            printf("Code:");
            scanf("%d", &emp[n].code);
            gotoxy(60, 4);

            printf("Age:");
            scanf("%d", &emp[n].age);

            gotoxy(30, 5);
            printf("Fname:");
            scanf("%s", &emp[n].name.fname);

            gotoxy(60, 5);
            printf("Lname:");
            scanf("%s", &emp[n].name.lname);

            gotoxy(30, 6);
            printf("Sal:");
            scanf("%f", &emp[n].sal);

            gotoxy(60, 6);
            printf("Bonus:");
            scanf("%f", &emp[n].bonus);

            gotoxy(30, 7);
            printf("Tax:");
            scanf("%f", &emp[n].tax);

            gotoxy(30, 9);
            printf("Employee No. %d is added Successfully\n", n);
            gotoxy(30, 10);
            printf("Press any key to go to continue...");
            getch();
            system("CLS");
        } else {
            j = 0;
        }
    } while (j);

    if (n < em) {
        for (int i = 0; i < em; i++) {
            if (arr[i]) {
                printf("Employee No. %d", arr[i]);
                printf("\nCode: %d\n", emp[arr[i]].code);
                printf("Fullname: %s %s\n", emp[arr[i]].name.fname, emp[arr[i]].name.lname);
                printf("Age: %d\n", emp[arr[i]].age);
                printf("Net Salary: %f\n", emp[arr[i]].sal+emp[arr[i]].bonus-emp[arr[i]].tax);
                printf("\n****************************************\n");
            }
        }
    }
    printf("Happy Coding =)\n");
}
