#include <stdio.h>
#include <windows.h>
#include <conio.h>
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

void textattr(int i);
void gotoxy(int x, int y);
void selectIndex(struct Employee emp[]);
void display(struct Employee emp[]);
void displayAll(struct Employee emp[]);
void search(struct Employee emp[]);


int main() {
    // MENU Variables
    char arr[5][15] = {{"NEW"}, {"DISPLAY"}, {"DISPLAY ALL"}, {"SEARCH"}, {"EXIT"}}, key;
    int *arrPtr;
    struct Employee emp[em] = {0};
    arrPtr = emp;
    int se = 0, j = 1;

    // Highlighting MENU
    do {
        // MENU Header
        gotoxy(48, 0);
        printf("**********");
        gotoxy(48, 1);
        printf("** MENU **");
        gotoxy(48, 2);
        printf("**********");

        // MENU Body
        for (int i = 0; i < 5; i++) {
            if (i == se) {
                gotoxy(32, 4*(i+1));
                textattr(2);
                // print highlighted one -> overwrite
                puts(arr[i]);
            } else {
                gotoxy(30, 4*(i+1));
                // if not selected -> print it as normal
                textattr(7);
                puts(arr[i]);
            }
        }

        // HELP
        gotoxy(30, 25);
        textattr(7);
        printf("-------------------------------------------------");
        gotoxy(30, 26);
        printf("| UP/DOWN | Tap |  Home  |  End  | Enter | Exit |");
        gotoxy(30, 27);
        printf("-------------------------------------------------\n");

        // Take input from user
        key = getch();
        // Enter
        if (key == 13) {

            // New Employee
            if (se == 0) {
                system("CLS");
                selectIndex(arrPtr);

            // Display
            } else if (se == 1) {
                system("CLS");
                display(arrPtr);
                printf("Press any key to return to the main menu...");
                getch();

            // Display All
            } else if (se == 2) {
                system("CLS");
                displayAll(arrPtr);
                printf("Press any key to return to the main menu...");
                getch();

            // Search
            } else if (se == 3) {
                system("CLS");
                search(arrPtr);
                printf("Press any key to return to the main menu...");
                getch();

            // Exit
            } else if (se == 4) {
                printf("Happy Coding =)\n");
                printf("----> EXIT <----");
                j = 0;
            }

        // TAP
        } else if (key == 9) {
            se++;
        // ESC
        } else if (key == 27) {
            j = 0;
        }

        // Extended Keys
        else if (key == -32) {
            key = getch();
            // Down
            if (key == 80) {
                se++;
            // Up
            } else if (key == 72) {
                se--;
            // Home
            } else if (key == 73) {
                se = 0;
            // End
            } else if (key == 81) {
                se = 4;
            }
        }

        // Circular Loop Up/Down
        if (se > 4) {
            se = 0;
        } else if (se < 0) {
            se = 4;
        }

        // Checking ESC
        if (j) {
            system("CLS");
        }
    } while (j);
}


void textattr(int i) {
    SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), i);
}

void gotoxy(int x, int y) {
    COORD coordinate;
    coordinate.X = x;
    coordinate.Y = y;
    SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE), coordinate);
}

void selectIndex(struct Employee *emp) {
    int n, j = 1,i = 0, arr[em] = {0};
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
            printf("Press any key to go to return to the main menu...");
            getch();
            j = 0;
            system("CLS");
        } else {
            j = 0;
        }
    } while (j);
}

void display(struct Employee *emp) {
    int index;
    gotoxy(30,0);
    printf("Please Enter Index of the employee: ");
    scanf("%d", &index);

    gotoxy(30,0);
    printf("Employees Data");
    printf("\nCode: %d\n", emp[index].code);
    printf("Fullname: %s %s\n", emp[index].name.fname, emp[index].name.lname);
    printf("Age: %d\n", emp[index].age);
    printf("Net Salary: %f\n", emp[index].sal+emp[index].bonus-emp[index].tax);
    printf("\n****************************************\n");
}

void displayAll(struct Employee *emp) {
    gotoxy(30,0);
    printf("Employees Data\n");
    int i;
    for (i = 0; i < em; i++) {
        if (emp[i].code != 0) {
            printf("\nCode: %d\n", emp[i].code);
            printf("Fullname: %s %s\n", emp[i].name.fname, emp[i].name.lname);
            printf("Age: %d\n", emp[i].age);
            printf("Net Salary: %f\n", emp[i].sal+emp[i].bonus-emp[i].tax);
            printf("\n****************************************\n");
        }
    }
}

void search(struct Employee *emp) {
    int ns;
    printf("Enter Net Salary of employees that you want to show: ");
    scanf("%d", &ns);
    printf("Employees Data\n");
    int i;
    for (i = 0; i < em; i++) {
        if ( (emp[i].sal + emp[i].bonus - emp[i].tax) > ns) {
            printf("\nCode: %d\n", emp[i].code);
            printf("Fullname: %s %s\n", emp[i].name.fname, emp[i].name.lname);
            printf("Age: %d\n", emp[i].age);
            printf("Net Salary: %f\n", emp[i].sal+emp[i].bonus-emp[i].tax);
            printf("\n****************************************\n");
        }
    }
}
