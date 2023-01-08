#include <stdio.h>
#include <stdlib.h>
#define STRS 5

int main() {
    // Array of Strings
    char strings[STRS][10] = {{"Ziad"}, {"Ahmed"}, {"Mohamed"},{"Ahmed"}, {"Eleraky"}};
    char str = 'm';
    int count = 0;

    for (int i = 0; i < STRS; i++) {
        for (int j = 0; j < 10; j++) {
            if (strings[i][j] == str) {
                puts(strings[i]);
                count++;
            }
        }
    }
    printf("---------\n");
    printf("Found %d Words\n", count);
}
