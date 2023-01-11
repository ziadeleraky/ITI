#include <stdio.h>
#include <conio.h>
#include <windows.h>

#define MAX_LINES 5
#define IX 20
#define IY 5
#define MAX 100

#define NORMAL 0X07
#define SELECTED 0X30

void textattr(int i);
void gotoxy(int x, int y);
void Frame();
void Printing(char *s, char *l);


int main(){
    char str[MAX] = {0};
    char *currentPtr= str;
    char *firstPtr= str;
    char *endPtr= str;
    char key;
    int x = IX , y = IY, loop;
    int lines, size;

    printf("Enter No. of Lines: \n");
    scanf("%d", &lines);
    printf("Enter size of Sentence: \n");
    scanf("%d", &size);
    system("cls");

    char **ptr_lines = (char**)malloc(lines*sizeof(char*));

    for (int i = 0; i < lines; i++) {
        ptr_lines[i] = (char*)malloc(size*sizeof(char));
        for(int j = 0; j < size; j++){
            ptr_lines[i][j] = ' ';
        }
    }

    Frame();
    textattr(SELECTED);

    do{
        gotoxy(x,y);
        key = getch();

        switch(key){
            // Backspace
            case 8:
                loop = endPtr - currentPtr;
                if ( currentPtr != firstPtr ) {
                    for (int i = 0; i < loop; i++) {
                        *(currentPtr+i-1) = *(currentPtr+i);
                    }
                    currentPtr--;
                    endPtr--;
                    x--;
                    Printing(str, endPtr);
                    gotoxy(x,y);
                    if (x < IX){
                        if (y > IY){
                            x=50;
                            y--;
                        } else {
                            x=IX;
                        }
                    }
                }
                break;

            // Extended
            case -32:
                key = getch();
                switch (key) {
                    // Left
                    case 75:
                        if (currentPtr != str){
                            x--;
                            if (x < IX){
                                if(y > IY){
                                    x=50;
                                    y--;
                                } else {
                                    x = IX;
                                }
                            }
                            currentPtr--;
                        }
                        break;

                    // Right
                    case 77:
                        if(currentPtr < endPtr){
                            x++;
                            if (x > 50){
                                if(y < IY+4){
                                    x=IX;
                                    y++;
                                } else {
                                    x=50;
                                }
                            }
                            currentPtr++;
                        }
                        break;
                    // Up
                    case 72:
                        break;
                    // Down
                    case 80:
                        break;

                    // Delete
                    case 83:
                        loop = endPtr - currentPtr;
                        if(currentPtr != endPtr){
                            for(int i = 0; i < loop; i++){
                                *(currentPtr+i) = *(currentPtr+1+i);
                            }
                            endPtr--;
                            Printing(str,endPtr);
                            gotoxy(x,y);
                        }
                        break;
                }
                break;
            case 13:
                break;
            default:
                if (currentPtr < str+MAX-1) {
                    printf("%c", key);
                    *currentPtr = key;
                    if (currentPtr == endPtr){
                        endPtr++;
                    }
                    currentPtr++;
                    x++;
                    if (x > 50) {
                        x=IX;
                        y+=1;
                    }
                }
        };
    } while(key != 13);

    textattr(NORMAL);
    gotoxy(IX-5,MAX_LINES+10);
    printf("\nYour string is: ");

    // Result
    textattr(0x04);
    for (int i = 0; i < (endPtr-firstPtr); i++){
        printf("%c", str[i]);
    }

    textattr(NORMAL);
    printf("\n\n");
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

void Frame(){
    printf("\n\n\t\t Please Enter your sentence:- \n");
    printf("\t\t----------------------------------------\n");
    textattr(SELECTED);

    for (int j = IY; j < IY + MAX_LINES-1; j++) {
        for (int i = IX; i < 51; i++) {
             gotoxy(i,j);
             printf(" ");
        }
    }

    textattr(NORMAL);
    printf(" ");

    for(int i= 0; i < MAX_LINES+1; i++){
        gotoxy(IX-4,IY-1+i);
        printf("|");
        gotoxy(55,IY-1+i);
        printf("|");
    }
    printf("\n\t\t----------------------------------------\n");
}

void Printing(char *s,char *l){
    int xx=IX , yy= IY;

    for (int j = IY; j < IY + MAX_LINES-1; j++){
        for (int i = IX; i < 51; i++){
             gotoxy(i,j);
             printf(" ");
        }
    }

    for (int i = 0; i < (l-s); i++){
        gotoxy(xx,yy);
        printf("%c", s[i]);
        xx++;
        if(xx > 50) {
            xx = IX;
            yy += 1;
        }
    }
}
