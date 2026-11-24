// TODO: Create an array called numbers with values 1 through 5
const numbers = [1, 2, 3, 4, 5]

// TODO: Write a for loop that prints each number in the array
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i])
}

// TODO: Write a while loop that counts down from 5 to 1
let i = 4 
while(i >= 0){
    console.log("number is:",numbers[i])
    i--;
}

// TODO: Create a loop that prints only even numbers from the numbers array
for (const number of numbers) {
  if (number % 2 === 0) {
    console.log(number)
  }
}

// TODO: Create a loop that calculates the sum of all numbers in the array
let sum = 0
for (const number of numbers) {
  sum += number
}
console.log("sum is:", sum)
