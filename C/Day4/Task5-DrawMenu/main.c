#include <stdio.h>
#include <windows.h>
#include <conio.h>

void textattr(int i);
void gotoxy(int x, int y);


int main() {
    // MENU Variables
    char arr[3][11] = {{"NEW"}, {"DISPLAY"}, {"EXIT"}}, key;
    int se = 0, j = 1;

    // Highlighting MENU
    do {
        // MENU Header
        gotoxy(50, 0);
        printf("**********");
        gotoxy(50, 1);
        printf("** MENU **");
        gotoxy(50, 2);
        printf("**********");

        // MENU Body
        for (int i = 0; i < 3; i++) {
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
        gotoxy(30, 16);
        textattr(7);
        printf("-------------------------------------------------");
        gotoxy(30, 17);        printf("| UP/DOWN | TAP |  Home  |  End  | ENTER | EXIT |");
        gotoxy(30, 18);
        printf("-------------------------------------------------\n");

        // Take input from user
        key = getch();
        // Enter
        if (key == 13) {
            if (se == 0) {
                system("CLS");
                printf("----> NEW <----\n");
                printf("Press any key to return to the main menu...");
                getch();
            } else if (se == 1) {
                system("CLS");
                printf("----> DISPLAY <----\n");
                printf("Press any key to return to the main menu...");
                getch();
            } else if (se == 2) {
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
                se = 2;
            // Enter
            } else if (key == 13) {
                if (se == 0) {
                    printf("----> NEW <----");
                    j = 0;
                } else if (se == 1) {
                    printf("----> DISPLAY <----");
                    j = 0;
                } else if (se == 2) {
                    j = 0;
                }
            }
        }

        // Circular Loop Up/Down
        if (se > 2) {
            se = 0;
        } else if (se < 0) {
            se = 2;
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

