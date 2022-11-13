#include <stdio.h>

int main()
{
	int num = 0;
	int result = 0;
	scanf("%d", &num);

	for (int i = 10000; i >= 1; i /= 10)
	{
		result = num / i;
		num = num % i;
		printf("[%d]\n", result * i);
	}
}