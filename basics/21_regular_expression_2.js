let pattern = /hello/i;

// Metacharacter symbols
pattern = /^h/i; // Must start with
pattern = /d$/i; // Must end with
pattern = /^hello$/i; // Must start and end with
pattern = /h.llo/i; // (.) Matches any ONE character (wild card)
pattern = /h*llo/i; // (*) Matches any character ZERO OR MORE times
pattern = /gra?e?y/i; // (?) Optional character
pattern = /gra?e?y\?/i; // Escaping special characters

// Brackets [] - Character sets
pattern = /gr[ae]y/i; // Must be ONE of a or e
pattern = /[GF]ray/i; // Must be ONE of G or F
pattern = /[^GF]ray/i; // Match anything except G or F
pattern = /[A-Z]ray/; // Match any uppercase letter
pattern = /[a-z]ray/; // Match any lowercase letter
pattern = /[A-Za-z]ray/; // Match any letter
pattern = /[0-9]ray/; // Match any letter


// Braces {} - quantifiers
pattern = /hel{2}o/i; // Must occur exactly {m} times
pattern = /hel{2,4}o/i; // Must occur between m and n times
pattern = /hel{2,}o/i; // Must occur atleast between m times

// Parantheses () - Grouping
pattern = /^([0-9]x){3}$/;

// Shorthand character classes
pattern = /\w+/; // Matches any word character - alphanumeric or _
pattern = /\W+/; // Matches any word which is NOT character - alphanumeric or _
pattern = /\d+/; // Matches any digit (0-9)
pattern = /\D+/; // Matches any character which is NOT digit (0-9)
pattern = /\s+/;  // Matches any whitespace character
pattern = /\S+/;  // Matches any character which is NOT whitespace
pattern = /Hell\b/i; // Word boundary

// Assertions
pattern = /x(?=y)/; // Match x only if follwed by y
pattern = /x(?!y)/; // Match x only if NOT follwed by y


let str = 'xnxyjqlj';

reTest(pattern, str);

function reTest(pattern, matcher) {
    console.log(pattern.exec(matcher));
    if (pattern.test(matcher)) {
        console.log(`\"${matcher}\" matches regex \"${pattern.source}\"`);
    } else {
        console.log(`\"${matcher}\" does NOT match regex \"${pattern.source}\"`);
    }
}