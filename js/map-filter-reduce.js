
// const numbers = [1,2,3,4,5];

// const newNumbers = numbers.map(n => n + numbers.indexOf(n));
//
// console.log(newNumbers);



// const binary = [1,1,0,1,0];
//
// const ones = binary.filter(n => n == true);
// console.log(ones);
//
// const zeroes = binary.filter(n => n == false);
// console.log(zeroes);


const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


let language = users.filter(function (lan) {

    return lan.languages.length >= 3;

});
console.log(language);


let email = users.map(function (mail) {

    return mail.email

});
console.log(email);


let years = users.reduce(function (totalYear,personYear) {

    return totalYear + personYear.yearsOfExperience

},0);
console.log(years);


let average = users.reduce(function (totalYear,personYear) {

    return totalYear + personYear.yearsOfExperience / users.length

},0);
console.log(average);


let longestEmail = users.reduce(function (emails,personEmail) {

   return emails.length > personEmail.email.length ? emails : personEmail.email

},);

console.log(longestEmail);


let userNames = users.reduce ((instructors,names) => {
   return instructors + names.name+" ";
},"");

let answer = "Your instructors are: " + userNames.trim().split(" ").join(",");

console.log(answer);




let listOfLan = (list,user) => {list.push(user.languages);
return list
};

let languages = users.reduce(listOfLan,[]);
// turn the array to string
languages = languages.flat();
// take unique value and creates a list of object
languages = new Set(languages);
console.log(languages);
// making array
languages = Array.from(languages);
console.log(languages);
