/* 
// Saadiq Abubakar 
// Last update: July 3, 2022 
// */  
function fizzBuzz(number){     
    let outputArray = [];     
    for(let i = 1; i <= number; i++){         
        if(i % 3 === 0 && i % 5 === 0){             
            outputArray.push("FizzBuzz")         
        }else if(i % 3 === 0) {             
            outputArray.push("Fizz")         
        }else if(i % 5 === 0){             
            outputArray.push("Buzz")         
        }else {             
            outputArray.push(i)         
        }     
    }     
    return outputArray; 
}