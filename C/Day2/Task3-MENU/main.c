#include <stdio.h>
#include <stdlib.h>

int main()
{
    char ch;
    int i=1;
    do {
        printf("Hello!!\nPlease Choose One Option from the Menu Below.\n");
        printf("**************************************\n\tPress \"N\" for New\n\tPress \"D\" for Display\n\tPress \"E\" for Exit\n**************************************\n\n");
        ch = getch();
        switch (ch) {
            case 'N':
                system("CLS");
                printf("New\n");
                break;
            case 'n':
                system("CLS");
                printf("New\n");
                break;
            case 'D':
                system("CLS");
                printf("Display\n");
                break;
            case 'd':
                system("CLS");
                printf("Display\n");
                break;
            case 'E':
                system("CLS");
                printf("Exit");
                i = 0;
                break;
            case 'e':
                system("CLS");
                printf("Exit");
                i = 0;
                break;
            default:
                printf("Invalid Option\nPlease Enter an Option\n");
        }
        printf("Press any key to return to the menu...");
        getch();
        system("CLS");
    } while (i);
}
