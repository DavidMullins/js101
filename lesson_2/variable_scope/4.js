/*
It will log 5, and then 5 again. This is due to line 7 calling myFunc()
and line 4 executing which logs the gloabl scopeed num value from line 1, 5.
then line 8 logs num, which again can only see the global scoped value of num
on line 1 due to line 5 not being a reassignment within the scope of the
function, but instead the inititialization of a new variable num that is only
accessible within the scope of the function.
*/

/*
I got this one wrong. It seems if a new variable is made within the function
and is shadowing a global variable, that any reference to that variable
within the function will attempt to refer too the inner scoped variable,
regardless of the positioning. I would have though since it was referenced
before the new variable was initialized within the scope that it would
have defaulted to using thee gloabl version of the variable. seems odd.
*/