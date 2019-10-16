#include <stdio.h>

int main()
{
	int a, d, n, result;

	scanf("%d %d %d", &a, &d, &n);

	result = a + d * (n - 1);

	printf("%d\n", result);
	return 0;
}