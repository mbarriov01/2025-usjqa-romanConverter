For executing the tests you only need to open the test.html file and the tests will run automatically. I have used the ones that I did for the
task #4, and I have encountered a challenge related to the last test for the integerToRoman function.

In that test case, when introducing some text (like 'Veinte' in my case) it should throw an error telling "Please enter a valid integer number." and 
it was failing all the time because it was not recognizing the error. First, I thought that was because the error was thrown surrounded by a try/catch,
but if I removed it, the error continued appearing, until I realized that this error is thrown in the handleConversion function, and is never reached
when we execute the tests, that function is meant to work when we press the button on the index.html file.

So that test case fails, but I have introduced a section of commented code in the integerToRoman function that throws the error when "num" is not a number,
it is located in the line 15 of the script.js file, that would be the solution to make the test pass, but the conversor works the same, as we are
supposed to use the "Convert" button to make the conversion.