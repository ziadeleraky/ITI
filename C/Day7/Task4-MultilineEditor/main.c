#include <stdio.h>
#include <stdlib.h>
#include <windows.h>

void textattr(int i);
void gotoxy(int x, int y);

void main() {
    int l = 0, rows, s, flag = 1;
    char key;

    // Rows & Size
    textattr(4);
    printf("Enter No. Rows: ");
    scanf("%d",&rows);
    printf("Enter Size of Sentence: ");
    scanf("%d",&s);
    textattr(3);

    // Clear Screen Data
    system("CLS");

    char **rowsPtr = (char**)malloc(rows*sizeof(char*));

    for(int i = 0; i < rows; i++) {
        rowsPtr[i] = (char*)malloc(s*sizeof(char));
        for(int j = 0; j < s; j++) {
            rowsPtr[i][j] = ' ';
        }
    }

    int x = 0, y = 0;

    gotoxy(0+x,0+y);

    do {
        key = getch();
        switch (key) {
        // Extended
        case -32:
            key = getch();
            switch (key) {
            // Up
            case 72:
                if (y > 0) {
                    y--;
                    gotoxy(x,y);
                }
                break;

            // Down
            case 80:
                if(y < rows-1) {
                    y++;
                    gotoxy(x,y);
                }
                break;

            // Home
            case 71:
                x=0;
                y=0;
                gotoxy(x,y);
                break;

            // End
            case 79:
                x = s - 1;
                y = rows-1;
                gotoxy(x,y);

                break;

            // Left
            case 75:
                if (x > 0) {
                    x--;
                    gotoxy(x,y);
                }
                break;

            // Right
            case 77:
                if (x < s-1) {
                    x++;
                    gotoxy(x,y);
                }
                break;
            }
            break;

        case 13:
        case 27:
            flag = 0;
            break;

        default:
            if((x < s-1) && (y < rows)){
                printf("%c", key);
                rowsPtr[y][x] = key;
                x++;
                gotoxy(x,y);
                if ( x < s-1 ) {
                    break;
                }
                gotoxy(x,y);
            }
            break;
        }
    } while(flag);

    printf("\n\n");

    textattr(7);
    printf("Your Sentence is: ");

    textattr(2);
    for(int i=0; i < rows; i++) {
        for(int j = 0; j < s; j++) {
            printf("%c", rowsPtr[i][j]);
        }
        printf("\n");
    }
    textattr(7);

    for (int i = 0; i < rows; i++) {
        free(rowsPtr[i]);
    }
    free(rowsPtr);
}

void textattr(int i) {
    SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), i);
}

void gotoxy( int column, int line ) {
    COORD coord;
    coord.X = column;
    coord.Y = line;
    SetConsoleCursorPosition(
        GetStdHandle( STD_OUTPUT_HANDLE ),
        coord
    );
}



