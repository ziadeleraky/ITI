#include <stdio.h>
#include <stdlib.h>

#define SIZE 5

void fillArray(int[]);
void sortArray(int[]);
void reversedArray(int[]);
void getSumAvg(int[]);
void getMax(int[]);
void getMin(int[]);

int main() {
    char ch;
    int *arr;
    arr = (int *)malloc(SIZE*sizeof(int));
    int flag = 1;
    do {
        printf("Please Choose One Option from the Menu Below.\n");
        printf("\tPress f For Filling an Array\n");
        printf("\tPress s For Sorting an Array\n");
        printf("\tPress r For Reversed an Array\n");
        printf("\tPress g For Getting Sum & Avg of Array\n");
        printf("\tPress m For Max Number of Array\n");
        printf("\tPress n For Min Number of Array\n");
        printf("\tPress e For Exiting the Program\n");
        printf("\n\nEnter Your Choice: ");
        scanf("%s", &ch);

        // Fill Array
        if (ch == 'f' || ch == 'F') {
            system("CLS");
            fillArray(arr);

        // Sort Array
        } else if (ch == 's' || ch == 'S') {
            system("CLS");
            sortArray(arr);

        // Reversed Array
        } else if (ch == 'r' || ch == 'R') {
            system("CLS");
            reversedArray(arr);

        // Get Sum & Avg.
        } else if (ch == 'g' || ch == 'G') {
            system("CLS");
            getSumAvg(arr);

        // Get Max
        } else if (ch == 'm' || ch == 'M') {
            system("CLS");
            getMax(arr);

        // Get Min
        } else if (ch == 'n' || ch == 'N') {
            system("CLS");
            getMin(arr);

        // Exit
        } else if (ch == 'e' || ch == 'E') {
            printf("************ Goodbye! ************\n");
            flag = 0;
        }
        printf("\nPress any key to return to the Menu...");
        getch();
        system("CLS");
    } while (flag);
}


void fillArray(int *arr) {
    for (int i = 0; i < SIZE; i++) {
        printf("Please Enter No. %d: ", i+1);
        scanf("%d", &arr[i]);
    }
    printf("your array is: ");
    for (int i = 0; i < SIZE; i++) {
        printf( "\t%d", arr[i]);
    }
}

void sortArray(int *arr) {
    int swap;
    for (int i = 0; i < SIZE; i++) {
        for (int j = i+1; j < SIZE; j++) {
            if (arr[i] > arr[j]) {
                swap = arr[i];
                arr[i] = arr[j];
                arr[j] = swap;
            }
        }
    }
    for (int i = 0; i < SIZE; i++) {
        printf("\t%d", arr[i]);
    }
}

void reversedArray(int *arr) {
    int arrCo[SIZE];
    for (int i = SIZE; i > 0; i--) {
        arrCo[SIZE-i] = arr[i-1];
    }
    for (int i = 0; i < SIZE; i++) {
        printf("%d\t", arrCo[i]);
    }
}

void getSumAvg(int *arr) {
    int sum = 0;
    for (int i = 0; i < SIZE; i++) {
        sum += arr[i];
    }
    printf("Sum = %d\n", sum);
    printf("Avg = %d\n", sum/SIZE);
}

void getMax(int *arr) {
    int max = 0;
    for (int i = 0; i < SIZE; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    printf("Max Num = %d\n", max);
}

void getMin(int *arr) {
    int min = 0;
    for (int i = 0; i < SIZE; i++) {
            min = arr[0];
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    printf("Min Num = %d\n", min);

}
