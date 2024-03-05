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

document.write('<h4> Write a js program that takes a day of the week as input using num,ber 1 to 7 where 1 represents Monday and 7 represents snday and prints whether it is a weekday or weekend </h4>');

function checkDay(day)
{
    if(day >=1 && day<=5)
    {
        document.write(' This a WeekDay <br>');
    }
    else if(day>=6 && day<=7)
    {
        document.write('This is WeekEnd <br>');
    }
    else{
        document.write('This is Invalid day <br>');
    }
}
checkDay(2);
checkDay(0);
checkDay(7);

document.write('<h4>Write a js program that take three numbers as input and return the largest one. </h4>');

function checkGreater(a,b,c)
{
    if(a>b){
        if(a>c)
        {
            document.write('Greater is:'+a +'<br>');
        }
        else {
            document.write('Greater is:'+c +'<br>');
        }
    }
    else{
        if(b>c)
        {
            document.write('Greater is:'+b +'<br>');
        }
        else {
            document.write('Greater is:'+c +'<br>');
        }
    }
}
checkGreater(5,3,2);
