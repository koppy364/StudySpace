#include <stdio.h>

int main()
{
	int num, sum = 0;

	scanf("%d", &num);
	for (int i = 0; ; i++)
	{
		sum += i;
		if (sum >= num)
		{
			printf("%d\n", sum);
			break;
		}
	}
	return 0;
}