#include <stdio.h>
#include <stdlib.h>

int decimalToBinary(int dec);

void main() {
    int num;
    printf("Decimal: ");
    scanf("%d" , &num);
    printf("Binary = %d" , decimalToBinary(num));
}

int decimalToBinary(int dec){
        if (dec == 0) return 0;
        else return decimalToBinary(dec/2)*10 + dec%2;
}
