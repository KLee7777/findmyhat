const prompt = require('prompt-sync')({sigint: true});
const clear = require('clear-screen');


var hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
const row = 10;
const col = 10;

const height= 11;
const width= 11;
const space = "░";
const field = [];

 function generateField() {
        // outer array-row


        for(let row=0; row< height; row++)
        {
            field [row]= [];
        // inner array-row
        for(let col=0; col< width; col++)
        {
            field[row][col]= space;
        }

        
        /*{let y= Math.floor(Math.random() * (height - 1 + 1)) + 1;
        let x= Math.floor(Math.random() * (width - 1)) + 1;

            field[y][x]== hat;}

        */
        

        field [0] [5]= hat;

        field[0][0]= pathCharacter;

        


     }
    }
    

    function print() {

        clear();
       
       const displayString = field.map(row => {
       
       return row.join('');
       
        }).join('\n');
       
       console.log(displayString);
       
       // map method first join is to join all the columns and the next join is to join the rows through next line \n.
       
             
       }

       function askQuestion () {

        let way = prompt('Which way? (u,d,r,l): ').toLowerCase;
       }

       function startGame() {

        let getflag= true;
        let row=0;
        let col=0;

        while (getflag) {

        let way = "";
        
        generateField();

        print();

        askQuestion ();

        switch(way){
          case 'u':
              row--;
              break;
          case 'd':
              row++;
              break;
          case 'r':
              col++;
              break;
          case 'l':
              col--;
              break;
         default:
          console.log("Invalid Entry, Try Again");
          askQuestion()
        }
      if (row<0 || row>height || col<0|| col>width) {
        console.log ("Out of bounds - Game End!");
        getflag=false;
       }
       else if (field[row][col]==hat){
        console.log('Congratulations, you found your hat!');
        getflag =false;
       }
       else{
        askQuestion()
       }

        }

    }
        
    
     startGame()
     
      




