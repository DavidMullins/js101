/*
It will raise an error since myFunc() has 1 parameter but is not passed an
arguement on line 7.
*/

/*
I got this one wrong.
This logs 5 to the console. When the myFunc function is invoked, due to the
function parameter num JavaScript creates a new variable num within the scope
of the function. This variable blocks access to the variable of the same name
declared and initialized in the global scope on line 1. That variable cannot
therefore be reassigned by the function and so retains its initial value of 5,
which is what is logged.
*/