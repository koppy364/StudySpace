#include <stdio.h>

int main()
{
	char str[2001];
	fgets(str, 2000, stdin);
	printf("%s", str);
	return 0;
}