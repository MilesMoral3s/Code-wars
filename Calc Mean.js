/*

You will be given an array which will include both integers and characters.

Return an array of length 2 with a[0] representing the mean of the ten integers as a floating point number. There will always be 10 integers and 10 characters. Create a single string with the characters and return it as a[1] while maintaining the original order.

lst = ['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0']
Here is an example of your return

[3.6, "udiwstagwo"]
In C# and Java the mean return is a double.






*/




function mean(lst){
     let endresult = [];
    let letters = [];
    let numbers =[];
   
    lst.map(elements => { // from lines 14 to 18, we are sorting out our original array lst. WE use .map to run functions or methods for each of our array elements 
          if(isNaN(elements)){ //we check not a number, we push into our array char or num, 
      letters.push(elements);
    }else{
      numbers.push(parseInt(elements)); // for some reason we also part as int becuase somewhere down the line our array may be recognised as a string
    } 
    });
    let mean = (numbers.reduce((a,b) => a+b)) / numbers.length; //mean arr will be the array we 
    letters = letters.join('') // we get the array full of characters and put it into one element by putting into speach marks
    endresult.push(mean, letters) // using .push to sort aray elemtns 0 and 1 into our final array 
    return endresult;
   
   
}