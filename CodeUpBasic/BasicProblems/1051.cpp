#include <stdio.h>

int main()
{
	long long int a, b;
	scanf("%lld %lld", &a, &b);
	if (b >= a)
	{
		printf("1\n");
	}
	else
	{
		printf("0\n");
	}
	return 0;
}