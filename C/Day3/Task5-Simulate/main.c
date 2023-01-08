#include <stdio.h>
#include <stdlib.h>

int main()
{
    char arr[21];
    int i = 0;
    printf("Enter char\n");
    for(int i = 0; i < 20; i++) {
        arr[i]=getche();
        printf("\n");

        // Check ENTER
        if(arr[i]==13) {
            break;
        }
    }
    printf("String is %s",arr);
}
