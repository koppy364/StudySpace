#include <stdio.h>

int main()
{
	int sum = 0;
	int n;

	scanf("%d", &n);

	for (int i = 0; i <= n; i++)
	{
		if (i % 2 == 0)
			sum += i;
	}
	printf("%d\n", sum);
	return 0;
}