#include <stdio.h>

int main()
{
	int num, sum = 0;
	scanf("%d", &num);

	for (int i = 0; i <= num; i++)
	{
		if (i % 3 != 0)
			printf("%d ", i);
	}

	return 0;
}
