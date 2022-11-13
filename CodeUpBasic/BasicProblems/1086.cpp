#include <stdio.h>

int main()
{
	int w, h, b;
	double result;
	scanf("%d %d %d", &w, &h, &b);
	result = w * h * b;
	printf("%.2lf MB\n", result / 8 / 1024 / 1024);
	return 0;
}
