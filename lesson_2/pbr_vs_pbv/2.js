/*
'Hello'
'HELLO'

This happens because when changeMyWord is called on line 8, It will run and
end up logging the value passed to it on line 2. It then will uppercase it and
return the new string, myWord is reassigned on line 8 to that return value. The
uppercase version is then loogged on line 9.
*/