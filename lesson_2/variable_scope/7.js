/*
Not sure but i'd guess it'd log 1.
*/

/*
Got it wrong.
This doesn't log anything to the console. This code results in an infinite
loop, which will eventually time out. Line 4 declares and initializes a
variable num to the number 5. This is a different variable to the num declared
and initialized to 1 on line 1, and exists within the scope of the block
defined by the curly braces; it is this num that is incremented on line 5. The
condition for the while loop, however, references the num declared on line 1,
not the one within the scope of the block. The condition for ending the while
loop is therefore never met, resulting in an infinite loop.
*/