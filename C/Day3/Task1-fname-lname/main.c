#include <stdio.h>
#include <string.h>
#define STD 5

int main()
{
    char fname[STD][10], lname[STD][10], fullname[STD][20];
    for (int i = 0; i < STD; i++) {
        printf("Enter First Name of Student %d\n", i+1);
        gets(fname[i]);
        printf("Enter Last Name of Student %d\n", i+1);
        gets(lname[i]);
        if (i+2<=5) {
            printf("*******\tPress Any Key to go to Student %d *******\n", i+2);
        } else {
            printf("*******\tPress Any Key to Display Students Names *******\n");
        }
        getch();
        system("CLS");
        strcpy(fullname[i], fname[i]);
        strcat(fullname[i], " ");
        strcat(fullname[i], lname[i]);
    }
    for (int i = 0; i<STD; i++) {
        printf("Fullname of Student No.%d: %s\n", i+1, fullname[i]);
    }
}
