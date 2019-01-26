const user = {
    email: 'abc@gmail.com'
};

try {
    // ReferenceError
    // myFunction();

    // TypeError
    // null.myFunction();

    // SyntaxError
    // eval('Hello world');

    // URIError
    // decodeURIComponent('%HelloWorld');

    // Throw custom error
    if (!user.name) {
        throw new SyntaxError('Required field name not present');
    }

} catch (error) {
    console.log(error);
    console.log(error.name);
    console.log(error.message);
    console.log(error instanceof URIError); // To check the type of Error
} finally {
    console.log('Finally runs regardless of result');
}

// Program resumes after error is caught and handled. Error doesn't stop the execution of program
console.log('Program continues ...');