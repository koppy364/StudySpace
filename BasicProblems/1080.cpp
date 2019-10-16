#include <stdio.h>

int main()
{
	int n;
	int plus = 0;
	int sum = 0;
	scanf("%d", &n);

	while (sum < n)
	{
		plus++;
		sum += plus;
	}
	printf("%d\n", plus);
}