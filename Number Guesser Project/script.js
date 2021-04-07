let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = target => Math.floor(Math.random(target) * 9);

const getAbsoluteDistance = (num, targ) => {
    return Math.abs(num - targ);
}

const compareGuesses = (human, computer, target) => {

    if (Math.abs(human === computer)) {
        return true;
    } else if (getAbsoluteDistance(human, target) > getAbsoluteDistance(computer, target)){
        return false;
    } else if (getAbsoluteDistance(human, target) < getAbsoluteDistance(computer, target)){
        return true;
    }
};
 
const updateScore = winner => {
    if (winner === 'human'){
        return humanScore =+ 1;
    } else if (winner === 'computer'){
        return computerScore =+ 1;
    }
};

const advanceRound = () => {
    return currentRoundNumber++;
};

