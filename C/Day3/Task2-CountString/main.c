#include <stdio.h>
#include <stdlib.h>

int main()
{
    char n[15];
    int i;
    printf("Please Enter a Name: ");
    gets(n);
    for ( i = 0; n[i] != '\0'; ++i);
    printf("Length Of The Name is %d\n",i);
}
