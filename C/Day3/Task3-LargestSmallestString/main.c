#include <stdio.h>
#include <string.h>
#define num 5

int main()
{
   // program variables
    int count,largest,smallest;
    char names[num][11];

    // starting of the program
    printf("******\tPlease Enter 10 Names\t******\n");

    // loop for taking 10 parameters from user
    for (int i = 0; i < num;i++) {
        printf("Enter Name No. %d: ", i+1);
        gets(names[i]);
    }
    // first loop to iterate around each name
    for (int i=0; i<num; i++) {
        count = strlen(names[i]);
        if (largest < count) {
            largest = count;
        }
        if (smallest > count) {
            smallest = count;
        }
    }
    printf("\n\tLargest String is %d Chars\n", largest);
    printf("\n\tSmallest String is %d Chars\n", smallest);


}

/*
    // program variables
    int count=0,largest=0,smallest=0;
    char names[num][11];

    // starting of the program
    printf("******\tPlease Enter 10 Names\t******\n");

    // loop for taking 10 parameters from user
    for (int i = 0; i < num;i++) {
        printf("Enter Name No. %d: ", i+1);
        gets(names[i]);
    }

    // first loop to iterate around each name
    for (int i=0; i<num;i++) {
        // reset count to start count from zero
        count = 0;
        // second loop iterating on each char in the string
        for (int j=0; names[i][j] != '\0'; j++) {
            count++;
        }
        // checking if the count is smaller than the previous one -> skip
        if (largest < count) {
            largest = count;
        }
        if (smallest > count) {
            smallest = count;
        }
    }
    printf("\n\tLargest String is %d Chars\n", largest);
    printf("\n\tSmallest String is %d Chars\n", smallest);

*/
