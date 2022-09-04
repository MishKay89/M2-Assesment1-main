var name;
var university;
var githubusername;

var arrCatagories = [
    'Best Consumer Solution',
    'Best Enterprise Solution',
    'Best African Solution',
    'Most Innovative Solution',
    'Best Gaming Solution',
    'Best Health Solution',
    'Best Agricultural Solution',
    'Best Educational Solution',
    'Best Financial Solution',
    'Best Hackathon Solution',
    'Best South African Solution',
    'Best Campus Cup Solution',
    'Huawei AppGallery Category 15'
];
 // Question A
function logInfo() {
    name = prompt('Enter your name');
    university = prompt('Enter the name of your institution');
    githubusername = prompt('Enter your Github Username');

    console.log('My name is ' + name + ', a student from ' + university + ' and my Github username is ' + githubusername);
} 
 // Question B
function rollDice() {
    var dice;
    var total;
    var winner;

    dice = Math.floor(Math.random() * 13) + 1;

    console.log(dice);

    total = dice;
    winner = arrCatagories[total];

    console.log(winner);
    alert(winner);
}
