#include <stdio.h>
#include <stdlib.h>
#define SIZE 5

int sum(int *);
float avg(int *);
void reversedOrd(int *);

int main() {
    // Create array then assign its address to a pointer
    int arr[SIZE], *arrPtr = arr;
    for (int i = 0; i < SIZE; i++) {
        printf("Enter Num %d: ", i+1);
        scanf("%d", arrPtr+i);
    }
    printf("\nSum = %d\n", sum(arrPtr));
    printf("Avg = %f\n", avg(arrPtr));
    reversedOrd(arrPtr);
}

int sum(int *p) {
    int sum = 0;
    for (int i = 0; i < SIZE; i++) {
        sum += *p;
        p++;
    }
    return sum;
}

float avg(int *p) {
    return sum(p)/SIZE;
}

void reversedOrd(int *p) {
    int i;
    for (i = 0, p = &p[SIZE-1]; i < SIZE; i++) {
        printf("%d\t", *p);
        p--;
    }
}

/*
#include <stdio.h>
#include <stdlib.h>
#define SIZE 5

int sum(int *);
float avg(int *);
void reversedOrd(int *);

int main()
{
    int arr[SIZE];
    for (int i = 0; i < SIZE; i++) {
        printf("Enter Num %d: ", i+1);
        scanf("%d", &arr[i]);
    }
    printf("Sum = %d\n", sum(&arr));
    printf("Avg. = %f\n", avg(&arr));
    reversedOrd(&arr);
}

int sum(int *arr) {
    int sum = 0, i = 0;
    while (i < SIZE) {
        sum += arr[i];
        i++;
    }
    return sum;
}

float avg(int *arr) {
    int summ;
    summ = sum(arr);
    return summ/SIZE;
}

void reversedOrd(int *arr) {
    for (int i = SIZE-1; i >= 0; i--) {
        printf("%d \t", arr[i]);
    }
}

*/
