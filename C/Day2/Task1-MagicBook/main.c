#include <stdio.h>
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
    int s,c,r=1;
    printf("Enter Size of The Magic Book\n");
    scanf("%d", &s);
    //printf("The Size of The Magic Book is %d\n", s);
    c  = (s+1)/2;
    //printf("Column is %d", c);
    for (int i=1; i<=s*s; i++) {
        gotoxy(c*3,r*3);
        printf("%d", i);
        if (i%s == 0) {
            r++;
        } else {
            c--;
            r--;
        }
        if (c<=0) c=s;
        if (r<=0) r=s;
        if (r>s) r=1;
        if (c>s) c=1;
    }
}
