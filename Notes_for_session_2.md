### factorial 
```
const factorial = (n) => {
    const calculateFactorial = (x) => {
        if (x < 1) {
            return 1;
        }
        return x * calculateFactorial(x - 1);
    };

    return calculateFactorial(n);
};
```
Encapsulation: By nesting the recursive function within factorial, you encapsulate the implementation details of calculating the factorial within the scope of the factorial function. This makes the code more modular and easier to understand, as users of the factorial function don't need to be concerned with the recursive logic used to calculate the factorial.

Scope Isolation: The nested function calculateFactorial is only accessible within the scope of the factorial function. This prevents potential naming conflicts with other functions or variables in the global scope or outer scope. It also ensures that the calculateFactorial function is only used for the purpose of calculating factorials within the context of the factorial function.

Readability: Nesting the recursive function within factorial can improve readability by making it clear that the purpose of the nested function is to calculate factorials. It also reduces clutter in the global scope by limiting the visibility of the calculateFactorial function.

Closure: The nested function calculateFactorial has access to variables in the outer scope, such as the parameter n of the factorial function. This allows the recursive function to access and utilize these variables without needing to pass them explicitly as arguments, which can simplify the function signature and usage.

So, when you call factorial(5), for example, there will be one stack frame on the outer call stack for the factorial function and five stack frames on the inner call stack for the calculateFactorial function (one for each recursive call).

Each stack operates independently, managing the execution context for its respective function. The outer call stack manages the execution of the factorial function, while the inner call stack manages the execution of the calculateFactorial function within each invocation of factorial.

Whether you nest the recursive function within another function or not, the number of recursive calls and the time complexity for calculating the factorial remains unchanged. The nesting primarily affects readability, encapsulation, and scope isolation, but it doesn't affect the fundamental time complexity of the algorithm.
--------------------------------------------------
### fibonacci
```
const fib = (n)=>{
    let [a,b]=[0,1];
    let next = 0;
    if(n===2){
        return 1;
    }
    for(let i = 1; i< n; i++){
        // console.log(a,b)
        next = a + b;
        a = b;
        b = next;
    }
    return next;
}
function fibonacci(n){
    let [a,b]=[0,1];
    let next = 0;
    function calculateNextValue(a, b, n){
        if(n > 0){
            next = a + b;
            return calculateNextValue(b, next, n - 1);
        }
        return a;
    }
    return calculateNextValue(a, b, n);
}

console.log(fib(5), fibonacci(5))
```
--------------------------------------------------
### palindrome 
```
const palindrrome = (str) => {
    let reversed = '';
    function reverseStr(str){
        reversed = str.split('').reverse().join().replaceAll(',', '');
        return reversed;
    }
    return str === reverseStr(str);
}
console.log(pal('anastasia'), palindrrome('ana'))
```
----------------------------------------------------
### counter
The counter function returns the counting function without executing it.
When counter is called, it initializes count to 0 and returns the counting function, which captures the count variable in its closure.
Each time the returned counting function is called, it increments the count variable and returns the updated count. The state of count is preserved between function calls due to closure.
```
function counter(){
    let count = 0;
    function counting(){
        return ++count;
    }
    return counting;
}
const countFunc = counter();

console.log(countFunc()); // Output: 1
console.log(countFunc()); // Output: 2
console.log(countFunc()); // Output: 3
```
Returning counting without Execution:In JavaScript, functions create closures, which means they can retain access to the variables from the scope in which they were created, even after that scope has closed. In the counter function, counting is declared within the scope of counter, so it has access to the count variable.By returning counting without executing it (return counting; instead of return counting();), we're returning a reference to the counting function itself. This allows the counting function to maintain its closure over the count variable, preserving its state between function calls.
Starting Over if Returning a Called counting:When we return a called counting, it effectively executes the counting function and returns the result (the incremented count). However, this approach doesn't preserve the closure over the count variable, as the function has already been executed and has lost its connection to the counter function's scope.Consequently, if we return a called counting, each time we call counter, it will create a new closure with a new count variable initialized to 0. This results in the count starting over from 1 each time counter is called.
In summary, by returning the counting function without execution, we ensure that it retains access to the count variable via closure, allowing it to increment the count consistently across multiple function calls. Returning a called counting loses this closure, resulting in the count starting over on each invocation of counter.
