#include <stdio.h>

int main()
{
	int arr[20][20] = { 0, };
	int x, y, n;

	for (int i = 1; i <= 19; i++)
	{
		for (int j = 1; j <= 19; j++)
		{
			scanf("%d", &arr[i][j]);
		}
	}

	scanf("%d", &n);

	for (int i = 0; i < n; i++)
	{
		scanf("%d %d", &x, &y);
		for (int j = 1; j <= 19; j++)
		{
			if (arr[x][j] == 0)
			{
				arr[x][j] = 1;
			}
			else
			{
				arr[x][j] = 0;
			}
		}
		for (int k = 0; k <= 19; k++)
		{
			if (arr[k][y] == 0)
			{
				arr[k][y] = 1;
			}
			else
			{
				arr[k][y] = 0;
			}
		}
	}

	for (int i = 1; i <= 19; i++)
	{
		for (int j = 1; j <= 19; j++)
		{
			printf("%d ", arr[i][j]);
		}
		printf("\n");
	}
}