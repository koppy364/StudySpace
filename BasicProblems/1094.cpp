#include <stdio.h>

int main()
{
	int n;
	int arr[10001];

	scanf("%d", &n);
	for (int i = 1; i <= n; i++)
	{
		scanf("%d", &arr[i]);
	}

	for (int i = n; i >= 1; i--)
	{
		printf("%d ", arr[i]);
	}
}