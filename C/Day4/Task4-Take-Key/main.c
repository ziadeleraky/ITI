#include <stdio.h>
#include <stdlib.h>
#include <windows.h>

void gotoxy(int x, int y)
{
    COORD coordinate;
    coordinate.X = x;
    coordinate.Y = y;
    SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE), coordinate);
}

int main()
{
    char key, exitKey;
    do {
        printf("Press any key to know ASCII \tOR\t ESC to end Program\n");
        key = getch();
        exitKey = key;

        // ESC condition
        if (exitKey == 27) {
            printf("\nHappy Coding =)\n");

        // Extended Keys Condition
        } else if (key == -32) {
            gotoxy(20,2);
            // will take first byte (NULL) -> assignment byte
            printf("Extended\n");
            // getch below will not take any key because the buffer is full and it has to be read by any variable
            key = getch();
            gotoxy(20,3);
            printf("ASCII is %d\n", key);
            printf("Press any key to continue...");
            getch();
            system("CLS");

        // Normal Keys Condition
        } else {
            gotoxy(20,2);
            // if it's normal key then ASCII will be stored in one byte
            printf("Normal Key & ACSII is %d\n", key);
            printf("Press any key to continue...");
            getch();
            system("CLS");
        }

    } while (exitKey != 27);
}
