#include <stdio.h>

int main() {
	int h, b, c, s;
	double result1, result2;
	scanf("%d %d %d %d", &h, &b, &c, &s);
	result1 = (h / 8) * b * c * s;
	result2 = result1 / 1024 / 1024;
	printf("%.1lf MB", result2);
	return 0;
}
