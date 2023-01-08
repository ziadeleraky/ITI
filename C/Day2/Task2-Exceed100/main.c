#include <stdio.h>
#include <stdlib.h>

int main()
{
    int n, sum=10, i=0;
    while (sum <= 100) {
        printf("Enter Number %d: ", ++i);
        scanf("%d", &n);
        sum += n;
        printf("Sum = %d\n", sum);
    }
    printf("Sum Exceeded 100 !!\n*************************************\n************** GOODBYE **************\n*************************************\n");
}
