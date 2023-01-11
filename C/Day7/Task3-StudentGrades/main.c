#include <stdio.h>
#include <stdlib.h>
#include <windows.h>
#define SIZE 3

void textattr(int i);
void gotoxy(int x, int y);

void main() {
    int *arr[SIZE], s;

    textattr(0x04);
    printf("Enter No. Grades: ");
    scanf("%d",&s);
    printf("*******************\n");

    textattr(7);
    gotoxy(0,4);
    for (int i = 0; i < SIZE; i++) {
        arr[i]=(int)malloc(s*(sizeof(int)));
        if(!arr[i]){
            exit(1);
        } else {
            printf("\nGrades for student No. %d\n", i+1);
            printf("~~~~~~~~~~~~~~~~~~~~~~~~\n");
            for(int j = 0; j < s; j++){
                printf("Enter Grade No. %d: ", j+1);
                scanf("%d",&arr[i][j]);
            }
        }
    }

    textattr(3);
    printf("\n\t\t\t---------------<DISPLAY RESULTS>---------------\n");

    // Displaying Results
    for (int i = 0; i < SIZE; i++){
            printf("\nGrades for student No. %d\n", i+1);
            printf("------------------------\n");
        for (int j = 0; j < s; j++){
            printf("Grade No. %d is %d\n", j+1, arr[i][j]);
        }
    }
    textattr(7);

    // Deallocating Memory
    for(int i = 0; i < SIZE; i++){
        free(arr[i]);
    }
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
