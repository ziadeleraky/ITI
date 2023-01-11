#include <stdio.h>

// recieve addresses here in pointers
void swap(int*,int*);

int main() {
    int x, y;
    printf("Enter X: ");
    scanf("%d", &x);
    printf("Enter Y: ");
    scanf("%d", &y);

    // send addresses of the variables - must recieve them into pointers
    swap(&x,&y);
    printf("X = %d, Y = %d\n", x , y);
    printf("\nSwapped Successfully!!\nHappy Coding =)\n\n");
}

void swap(int *n1, int *n2) {
    int temp = *n2;
    *n2 = *n1;
    *n1 = temp;
}
