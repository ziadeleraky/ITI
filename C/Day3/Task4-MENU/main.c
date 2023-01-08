#include <stdio.h>
#include <stdlib.h>


int main()
{
    char ch;
    int j = 1;
    do {
        printf("Hello!!\nPlease Choose One Option from the Menu Below.\n");
        printf("\tPress f For Filling an Array\n");
        printf("\tPress s For Sorting an Array\n");
        printf("\tPress r For Reversed an Array\n");
        printf("\tPress g For Getting Sum & Avg of Array\n");
        printf("\tPress m For Max Number of Array\n");
        printf("\tPress n For Min Number of Array\n");
        printf("\tPress e For Exiting the Program\n");
        scanf("%s", &ch);

        // Fill Array
        if (ch == 'f' || ch == 'F') {
            system("CLS");
            printf("Enter Size of The Array: ");
            int s;
            scanf("%d", &s);
            int arr[s];
            for (int i = 0; i<s; i++) {
                printf("Please Enter No. %d: ", i+1);
                scanf("%d", &arr[i]);
            }
            printf("your array is: ");
            for (int i = 0; i<s; i++) {
                printf( "\t%d", arr[i]);
            }

        // Sort Array
        } else if (ch == 's' || ch == 'S') {
            system("CLS");
            printf("Enter Size of The Array: ");
            int n;
            scanf("%d", &n);
            int arr[n];
            for (int i = 0; i < n; i++) {
                printf("Please Enter No. %d: ", i+1);
                scanf("%d", &arr[i]);
            }
            int swap;
            for (int i = 0; i < n; i++) {
                for (int j = i+1; j < n; j++) {
                    if (arr[i] > arr[j]) {
                        swap = arr[i];
                        arr[i] = arr[j];
                        arr[j] = swap;
                    }
                }
            }
            for (int i = 0; i < n; i++) {
                printf("\t%d", arr[i]);
            }

        // Reversed Array
        } else if (ch == 'r' || ch == 'R') {
            system("CLS");
            printf("Enter Size of The Array: ");
            int n;
            scanf("%d", &n);
            int arr[n];
            for (int i = 0; i < n; i++) {
                printf("Please Enter No. %d: ", i+1);
                scanf("%d", &arr[i]);
            }
            int arrCo[n];
            for (int i = n; i > 0; i--) {
                arrCo[n-i] = arr[i-1];
            }
            for (int i = 0; i < n; i++) {
                printf("%d\t", arrCo[i]);
            }

        // Get Sum & Avg.
        } else if (ch == 'g' || ch == 'G') {
            system("CLS");
            printf("Enter Size of The Array: ");
            int n, sum;
            scanf("%d", &n);
            int arr[n];
            for (int i = 0; i < n; i++) {
                printf("Please Enter No. %d: ", i+1);
                scanf("%d", &arr[i]);
            }
            for (int i = 0; i < n; i++) {
                sum += arr[i];
            }
            printf("Sum = %d\n", sum);
            printf("Avg = %d\n", sum/n);

        // Get Max
        } else if (ch == 'm' || ch == 'M') {
            system("CLS");
            printf("Enter Size of The Array: ");
            int n, max = 0;
            scanf("%d", &n);
            int arr[n];
            for (int i = 0; i < n; i++) {
                printf("Please Enter No. %d: ", i+1);
                scanf("%d", &arr[i]);
            }
            for (int i = 0; i < n; i++) {
                if (max < arr[i]) {
                    max = arr[i];
                }
            }
            printf("Max Num = %d\n", max);

        // Get Min
        } else if (ch == 'n' || ch == 'N') {
            system("CLS");
            printf("Enter Size of The Array: ");
            int n, min = 0;
            scanf("%d", &n);
            int arr[n];
            for (int i = 0; i < n; i++) {
                printf("Please Enter No. %d: ", i+1);
                scanf("%d", &arr[i]);
            }
            for (int i = 0; i < n; i++) {
                    min = arr[0];
                if (min > arr[i]) {
                    min = arr[i];
                }
            }
            printf("Min Num = %d\n", min);

        // Exit
        } else if (ch == 'e' || ch == 'E') {
            printf("************ Goodbye! ************\n");
            j--;
        }
        printf("Press any key to return to the Menu...");
        getch();
        system("CLS");
    } while (j);
}

 /*
    switch (ch) {
        // Fill Array
        case 'f':
            printf("Enter Size of The Array: ");
            int s;
            scanf("%d", &s);
            int arr[s];
            for (int i = 0; i<s; i++) {
                printf("Please Enter No. %d: ", i+1);
                scanf("%d", &arr[i]);
            }
            printf("your array is: ");
            for (int i = 0; i<s; i++) {
                printf( "\t%d", arr[i]);
            }
            break;

        // Sort Array
        case 's':
            printf("Enter Size of The Array: ");
            int n;
            scanf("%d", &n);
            int arr[n];
            for (int i = 0; i < n; i++) {
                printf("Please Enter No. %d: ", i+1);
                scanf("%d", &arr[i]);
            }
            int swap;
            for (int i = 0; i < n; i++) {
                for (int j = i+1; j < n; j++) {
                    if (arr[i] > arr[j]) {
                        swap = arr[i];
                        arr[i] = arr[j];
                        arr[j] = swap;
                    }
                }
            }
            break;
    }
*/
