#include <stdio.h>
#include <stdlib.h>
#define STD 2

int main() {
    char courses[4][10] = {"DB","OS","DS","JS"};
    // Marks Table is 2 students as rows * 4 courses as columns
    int marks[STD][4], total[STD] = {0}, temp;
    for (int i = 0; i < STD; i++) {
        for (int j = 0; j < 4; j++) {
            printf("Student No.%d, Enter %s Mark: ", i+1, courses[j]);
            scanf("%d", &marks[i][j]);
        }
        system("CLS");
    }

    // Loop over students
    for (int i = 0; i < STD; i++) {
        printf("Student No. %d\n", i+1);
        printf("----------------\n");
        // Loop over courses
        for (int j = 0; j < 4; j++) {
            printf("%s Marks = %d\n", courses[j], marks[i][j]);
            total[i] += marks[i][j];
        }
        printf("--> Total is %d\n", total[i]);
        if (total[i]*0.25 >= 85) {
            printf("Degree = %f & A\n", total[i]*0.25);
        } else if (total[i]*0.25 < 85 && total[i]*0.25 >= 75) {
            printf("Degree = %f & B\n", total[i]*0.25);
        } else if (total[i]*0.25 < 75 && total[i]*0.25 >= 65) {
            printf("Degree = %f & C\n", total[i]*0.25);
        } else if (total[i]*0.25 < 65 && total[i]*0.25 >= 55) {
            printf("Degree = %f & D\n", total[i]*0.25);
        } else {
            printf("Degree = %f & F\n", total[i]*0.25);
        }        printf("----------------\n\n");
    }

    // Arrangement
    for (int i = 0; i < STD; i++) {
        for (int j = 1; j < STD; j++) {
            if(total[j] > total[i]) {
                temp = total[i];
                total[i] = total[j];
                total[j] = temp;
            }
        }
    }

    // Print Arrangement
    for (int i = 0; i < STD; i++) {
        printf("%d - %d\n", i+1 ,total[i]);
    }
}
