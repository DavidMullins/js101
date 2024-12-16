/*

A) It will log:
'one is: ['one']'
'two is: ['two']'
'three is: ['three']'

This is due to the parameters of the function shadowing the global variables.

B)It will log:
'one is: ['one']'
'two is: ['two']'
'three is: ['three']'

For the same reason as above, due to shadowing global variables, the global values will not change

C)

B) It will log:
'one is: ['two']'
'two is: ['three']'
'three is: ['one']'

Due to splice mutating the objects, their values would change
*/