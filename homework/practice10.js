
/*
-Create a class called as Player
-Create a constructor for this class which takes 2 arguments:
    nickName
    score
-Create a method called as getInfo() which returns the score for the player object info in the format: 
{nickName}'s score is {score}.
-Create a method called as attack() which takes a player object as argument and
increases the attacking player's score by 1 while it decreases the attacked player's score by 1
-Create a method called as damage() which decreases the score of the player object by 1
*/

class Player {
    constructor(nickName, score) {
        this.nickName = nickName;
        this.score = score;
    }

    getInfo() {
        return `${this.nickName}'s score is ${this.score}`;
    }

    attack(player) {
        this.score += 1;
        player.score -= 1;
    }

    damage() {
        this.score -= 1;
    }
}

/*
-Create a class called as SuperPlayer and inherit the Player class
-Create a constructor for this class which takes 2 arguments:
    nickName
    score
    -Inherit the Player class constructor and the other methods
-Create a method called as superAttack() which takes a player object as argument and
increases the attacking player's score by 2 while it decreases the attacked player's score by 2
*/

class SuperPlayer extends Player {
    constructor(nickName, score) {
        super(nickName, score);
    }

    superAttack(player) {
        this.score += 2;
        player.score -= 2;
    }
}

/*
-Create a class called as HeroPlayer and inherit the Player class
-Create a constructor for this class which takes 2 arguments:
    nickName
    score
    -Inherit the Player class constructor and the other methods
-Create a method called as heal() which takes a player object as argument and
increases the healed player's score by 1.
*/

class HeroPlayer extends Player {
    constructor(nickName, score) {
        super(nickName, score);
    }

    heal(player) {
        player.score += 1;
    }
}


/*
Create 2 player objects with below information
1
www.techglobalschool.com
player1 = { nickName: 'Player 1', score: 5 }
player1 = { nickName: 'Player 2', score: 5 }
Create a superPlayer object with below information
superPlayer = { nickName: 'Super Player', score: 3 }
Create a heroPlayer object with below information
heroPlayer = { nickName: 'Hero Player', score: 10 }
*/

const player1 = new Player('Player 1', 5);
const player2 = new Player('Player 2', 5);

const superPlayer = new SuperPlayer('Super Player', 3);

const heroPlayer = new HeroPlayer('Hero Player', 10);

/*
Execute the attack() method for player1 over player2
    -this will decrease player2's score by 1 and increase player1's score by 1
Execute the attack() method for player1 over superPlayer
    -this will decrease superPlayer's score by 1 and increase player1's score by 1
Execute the superAttack() method for superPlayer over player2, player1 and heroPlayer
    -this will decrease player2, player1 and heroPlayer's score by 2 and increase superPlayer's score by 
6
Execute the heal() method for heroPlayer over player1 and player2
    -this will increase player1 and player2's score by 1
Execute the attack() method for player1, player2 and heroPlayer over superPlayer
    -this will decrease superPlayer's score by 3 and increase player1, player2 and heroPlayer's score by 
1
Execute the damage() method for player1 and player2
    -this will decrease player1 and player2's score by 1
*/

player1.attack(player2);

player1.attack(superPlayer);

superPlayer.superAttack(player1);
superPlayer.superAttack(player2);
superPlayer.superAttack(heroPlayer);

heroPlayer.heal(player1);
heroPlayer.heal(player2);

player1.attack(superPlayer);
player2.attack(superPlayer);
heroPlayer.attack(superPlayer);

player1.damage();
player2.damage();

/*
Print information of all the players using getInfo() method
EXPECTED OUTPUT:
Player 1's score is 6
Player 2's score is 3
Super Player's score is 5
Hero Player's score is 9
*/

console.log(player1.getInfo());
console.log(player2.getInfo());
console.log(superPlayer.getInfo());
console.log(heroPlayer.getInfo());

