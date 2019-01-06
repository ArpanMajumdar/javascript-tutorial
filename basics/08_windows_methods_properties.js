// Windows methods / Objects / Properties

// Alert
// alert('Hello world !')

// Prompt
// let input = prompt();
// alert(input);

// Confirm
// if (confirm('Are you sure?')) {
//     console.log('YES')
// } else {
//     console.log('NO')
// }

let val;

// Outer height and width
val = window.outerHeight;
val = window.outerWidth;

// Inner height and width
val = window.innerHeight;
val = window.innerWidth;

// Scroll points
val = window.scrollX;
val = window.scrollY;

// Location object
val = window.location;
val = window.location.hostname;
val = window.location.host;
val = window.location.href;
val = window.location.search; // Gives search params

// Redirect
// window.location.href='https://google.com'

// Reload
// window.location.reload();

// History object
// window.history(-1);

// Navigator object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform; // OS info
val = window.navigator.language; // Browser language

console.log(val)

