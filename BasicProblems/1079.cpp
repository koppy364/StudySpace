#include <stdio.h>

int main()
{
	char ch = 0;

	while (ch != 'q')
	{
		scanf(" %c", &ch);
		printf("%c\n", ch);
	}
}