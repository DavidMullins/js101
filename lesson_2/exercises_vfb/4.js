/*
["red", "green", "blue", "purple", "pink"]

As with Exercise 3, this again logs the array
['red', 'green', 'blue', 'purple', 'pink']. There's a difference here in that
we return the value of the colors parameter when we invoke the function, and
also declare and assign another global variable newColors to that return value.
The underlying principles at work are the same, however.

When updateColors is first invoked, we pass in the global colors variable.
colors references an array, which at this point has a value of
['red', 'green', 'blue']. We also pass in color1 which has a value of 'purple'.
When the function is invoked on line 10, the color parameter is initialized to
'purple' and is appended to the array referenced by the colors parameter. At
this point the array referenced by both the colors parameter and the global
colors variable has a value of ['red', 'green', 'blue', 'purple']. We then
return the value of the colors parameter.

On line 10, we declare and initialize the variable newColors to the return
value of the function. Since, within the scope of the function, the colors
parameter was assigned to a reference value, the value that the function
returns (and hence the value to which newColors is assigned) is a reference to
the array. So at this point, the global variables colors and newColors both
reference the same array.

On line 11 we again invoke updateColors, passing in newColors as the first
argument. We could have also passed in colors, since both variables reference
the same array. For the second argument, we pass in color2, which has a value
of 'pink'. Just as in Exercise 3, this value is appended to the array
referenced by both colors and newColors.

NOTE: I had gotten this one wrong. I thought it would log 
["red", "green", "blue", "purple"]
*/