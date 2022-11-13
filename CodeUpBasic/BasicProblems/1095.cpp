#include <stdio.h>

int main()
{
	int n, min;
	int arr[10001];

	scanf("%d", &n);
	for (int i = 1; i <= n; i++)
	{
		scanf("%d", &arr[i]);
	}

	min = arr[1];

	for (int i = 1; i <= n; i++)
	{
		if (arr[i] < min)
		{
			min = arr[i];
		}
	}

	printf("%d ", min);

}