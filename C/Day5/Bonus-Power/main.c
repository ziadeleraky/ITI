#include <stdio.h>
#include <stdlib.h>

int power(int num, int p);

void main() {
    int number , p;
    printf("Enter the number: ");
    scanf("%d", &number);

    printf("Enter the power of the number: ");
    scanf("%d", &p);

    printf("Calc = %d" , power(number , p));
}

int power (int num , int p){
    if (p == 0) return 1;
    else return power(num,p - 1)*num;
}
