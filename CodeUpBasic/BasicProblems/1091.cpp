#include <stdio.h>

int main()
{
	int a, m, d, n;
	long long int result;

	scanf("%d %d %d %d", &a, &m, &d, &n);

	result = a;

	if (n == 1)
	{
		printf("%d\n", result);
	}
	else
	{
		for (int i = 1; i < n; i++)
		{
			result = (result * m) + d;
		}
		printf("%lld\n", result);
	}
}