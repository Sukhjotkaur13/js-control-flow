document.write('<h4> Write a javascript program that takes number as input and prints whehter the number is positive, negative or zero.</h4>')

function checkNumber(n)
{
    if(n>0)
    {
        document.write('Number is: Positive <br>');
    }
    else if(n<0)
    {
        document.write('Number is :Negative <br>');
    }
    else{
        document.write('Number is:Zero <br>');
    }
}
checkNumber(5);
checkNumber(-5);
checkNumber(0);