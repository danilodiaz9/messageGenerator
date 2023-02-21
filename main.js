console.log(`

    ==================================================================
    |                                                                |
    |                                                                |
    |                                                                |
    |                      The Weather Lottery                       |
    |                                                                |
    |                              Try                               |
    |                           Your Luck                            |
    |                                                                |
    |                                                                |
    |          Type "Go" to Create Your Weather for Today            |
    |                                                                |
    ==================================================================
`)
let forecastnumber='';
let suggestnumber='';
let safetynumber='';
const randomNumGeneratorForecast = () => Math.floor(Math.random() * 5);
const randomNumGeneratorSuggestion = () => Math.floor(Math.random() * 3);
const randomNumGeneratorSafety = () => Math.floor(Math.random() * 3);
const forecastGenerator = () => {
number = randomNumGeneratorForecast();
switch (number){
    case 0:
        return console.log('\nIts looking a litte windy today.\n')
    case 1:
        return console.log('\nIts gonna be a clear sunny day today!\n')
    case 2:
        return console.log('\nWe see rain in your future today.\n')
    case 3:
        return console.log('\nThe snows a comin\n')
    case 4:
        return console.log('\nFog, fog and more fog for today\n')
}
}

const suggestionGenerator = (number) => {
   suggestnumber = randomNumGeneratorSuggestion();
   
    switch (`${number}${suggestnumber}`){
        case '00':
            return console.log('Hold on to your hats!\n')
        case '01':
            return console.log('Probably not a great day to wear a dress.\n')
        case '02':
            return console.log('Break out your windbreaker jackets\n')
        case '10':
            return console.log('Its time for some sunglasses!\n')
        case '11':
            return console.log('Beach day, here I come!\n')
        case '12':
            return console.log('Its a great day for a picnic!\n')
        case '20':
            return console.log('Don\'t forget your umbrella\n')
        case '21':
            return console.log('No need to water your plants today\n')
        case '22':
            return console.log('Forget about washing your car today\n')
        case '30':
            return console.log('Snowball fight everybody\n')
        case '31':
            return console.log('Good day for leg warmers\n')
        case '32':
            return console.log('Hot cocoa is screaming your name today\n')
        case '40':
            return console.log('It\'s gonna feel mysterious today\n')
        case '41':
            return console.log('You know what they say about fog...........me either\n')
        case '42':
            return console.log('Foggy days can make for great photography\n')
        
        default:
            return console.log('unknown\n')
    }
    }

    const safetyTipGenerator = (number) => {
        safetynumber = randomNumGeneratorSafety();
        
         switch (`${number}${safetynumber}`){
             case '00':
                 return console.log('Strong Winds, Drive Safe\n')
             case '01':
                 return console.log('Tie down anything that can be blown away\n')
             case '02':
                 return console.log('Close any open umbrellas\n')
             case '10':
                 return console.log('Make sure and wear sun block\n')
             case '11':
                 return console.log('Drink plenty of water today\n')
             case '12':
                 return console.log('Be intentional about taking breaks in the shade\n')
             case '20':
                 return console.log('Watch your step, slippery conditions\n')
             case '21':
                 return console.log('Reduce your speed when driving due to wet roads\n')
             case '22':
                 return console.log('Use sand bags for flooding areas\n')
             case '30':
                 return console.log('Please bundle up and protect exposed skin from cold\n')
             case '31':
                 return console.log('Icy walkways and stairs can be hazardous, be careful\n')
             case '32':
                 return console.log('Take precautions for plumbing, exposed plants, or elderly people due to cold\n')
             case '40':
                 return console.log('Visibility is minimal, so create space around you\n')
             case '41':
                 return console.log('Turn on fog lights when driving\n')
             case '42':
                 return console.log('Avoid traveling if possible until fog clears\n')
             
             default:
                 return console.log('unknown\n')
         }
         }

const prompt = require('prompt-sync')();
const input = prompt('Type "Go" here:  ');



if(input === 'Go' || input === "go"){

forecastGenerator();
suggestionGenerator(number);
safetyTipGenerator(number); 
}