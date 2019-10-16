#include <stdio.h>

int main()
{
	int n, random;
	int arr[24] = {};

	scanf("%d", &n);

	for (int i = 1; i <= n; i++)
	{
		scanf("%d", &random);
		arr[random]++;
	}

	for (int i = 1; i <= 23; i++)
	{
		if (i < 23)
		{
			printf("%d ", arr[i]);
		}
		if (i == 23)
		{
			printf("%d\n", arr[i]);
		}
	}

	return 0;
}