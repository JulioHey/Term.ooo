import { wordList } from "../utils/wordList";
import { CreatePattern, patternMap } from "../utils/pattern";

class InputController {
    constructor(
        args
    )
    {
        this.inputHandler = new InputHandler(args);

        this.letters = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
        'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',
        'z', 'x', 'c', 'v', 'b', 'n', 'm',];

        this.actions = [
            "Backspace",
            "Enter",
            "ArrowLeft",
            "ArrowRight",
        ]
    }

    handleInput(key)
    {
        if (this.letters.includes(key)) return this.inputHandler.letterInput(key);
        if (this.actions.includes(key)) return this.inputHandler[key]();
    }
}

class InputHandler {
    constructor(args)
    {
        const {
            win,
            currDay,
            currentPage,
            currentInput, 
            tries, 
            currentIndex, 
            currentTry, 
            gamesStatus, 
            awnsers,
            numberOfTries 
        } = args;

        this.win = win; 
        this.currDay = currDay; 
        this.currentPage = currentPage; 
        this.currentInput = currentInput; 
        this.tries = tries; 
        this.currentIndex = currentIndex; 
        this.currentTry = currentTry; 
        this.gamesStatus = gamesStatus; 
        this.awnsers = awnsers;
        this.numberOfTries = numberOfTries;
    }

    allStates()
    {
        return {
            win: this.win, 
            currDay: this.currDay, 
            currentPage: this.currentPage, 
            currentInput: this.currentInput, 
            tries: this.tries, 
            currentIndex: this.currentIndex, 
            currentTry: this.currentTry, 
            gamesStatus: this.gamesStatus, 
            awnsers: this.awnsers,
            numberOfTries: this.numberOfTries,
        }
    }

    newStates()
    {
        return {
            win: this.win, 
            currentInput: this.currentInput.slice(0,5), 
            tries: this.tries, 
            currentIndex: this.currentIndex, 
            currentTry: this.currentTry, 
            gamesStatus: this.gamesStatus,
        }
    }

    letterInput = (key) =>
    {
        if (this.currentIndex === 5) return this.newStates();
        this.currentInput[this.currentIndex] = key;
        this.currentIndex = this.currentIndex + 1;
        // this.currentIndex = (this.currentIndex < 5 ? this.currentIndex + 1 : this.currentIndex);
    
        return this.newStates();
    }

    Backspace() 
    {
        if ([4,5].includes(this.currentIndex)) {
            this.currentInput[4] = "";
            this.currentIndex = 3;
        }
        else {
            this.currentInput[this.currentIndex] = "";
            this.currentIndex = this.currentIndex ? this.currentIndex - 1 : this.currentIndex;
        }

        this.currentInput = this.currentInput.slice(0,5);
        return this.newStates();
    }

    Enter() 
    {
        if (!wordList.includes(this.currentInput.join("")))
        {
            console.log("OPA NÃO TEMOS ESSA PALAVRA");
        }
        else if (
            !this.currentInput.includes("")
        )
        {
            Object.values(this.awnsers).forEach((awnser, index) => 
            {
                let wordPattern = this.getWordInputPattern(awnser);
                
                this.tries[this.currentTry] = this.currentInput.slice(0, 5);
                   
                if (wordPattern.filter(status => status === "success").length === 5)
                {
                    this.gamesStatus[index] = this.currentTry;
                }

                return;
            });

            this.currentTry += 1;
            this.currentInput = ["", "", "", "", ""];
            this.currentIndex = 0;
        }

        if (this.gamesStatus.filter(x => x !== 100).length === this.awnsers.length)
        {
            this.win = 2;
            console.log("PORRA tu conseguiu lindao");
        }
        else if (this.numberOfTries === this.currentTry)
        {
            this.win = 1;
            console.log("Infelizmente você não conseguiu as palavras eram: ", this.awnsers);
        }  

        localStorage.setItem(this.currentPage, JSON.stringify(this.allStates()));
        return this.newStates();
    }

    ArrowLeft() 
    {
        if (this.currentIndex > 0) this.currentIndex -= 1;
        
        return this.newStates();
    }

    ArrowRight() 
    {
        if (this.currentIndex < 5) this.currentIndex += 1;
        
        return this.newStates();
    }

    getWordInputPattern(awnser) 
    {
        const patterClass = new CreatePattern(awnser, this.currentInput.join(""));

        const patternColor = patterClass.definyPattern()

        return patternColor.map((color) => patternMap[color]);
    }
}

export default InputController;
