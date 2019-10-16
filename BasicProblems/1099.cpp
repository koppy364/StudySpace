#include <stdio.h>

int main()
{
	int arr[10][10];
	int right = 1, down = 1;

	for (int i = 0; i < 10; i++)
	{
		for (int j = 0; j < 10; j++)
		{
			scanf("%d", &arr[i][j]);
		}
	}

	while (arr[down][right] != 2)
	{
		arr[down][right] = 9;

		if (arr[down][right + 1] != 1)
		{
			right++;

			if (arr[down][right] == 2)
			{
				arr[down][right] = 9;
				break;
			}
		}
		else if (arr[down][right + 1] == 1 && arr[down + 1][right] != 1)
		{
			down++;

			if (arr[down][right] == 2)
			{
				arr[down][right] = 9;
				break;
			}
		}
		else
		{
			break;
		}
	}

	arr[down][right] = 9;


	for (int i = 0; i < 10; i++)
	{
		for (int j = 0; j < 10; j++)
		{
			printf("%d ", arr[i][j]);
		}
		printf("\n");
	}
}