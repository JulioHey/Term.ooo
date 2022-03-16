class CreatePattern {
    constructor(correct, attempt) {
        this.correct = correct.split("")
        this.attempt = attempt.split("")
        this.pattern = 'CCCCC'.split("")
        this.correctIndexes = []
    }

    definyPattern() {
        this.findGreen()
        this.findYellow()
        return this.pattern
    }

    findGreen()
    {
        for (let index = 0; index < 5; index ++)
        {
            if (this.attempt[index] === this.correct[index])
            {
                this.pattern[index] = 'G'
                this.correctIndexes.push(index)
                this.correct[index] = '1'
            }
        }
    }
    
    findYellow()
    {
        for (let index = 0; index < 5; index ++)
        {
            if (
                this.correct.includes(this.attempt[index]) 
                && !this.correctIndexes.includes(index)
            )
            {
                const indexAchado = this.correct.indexOf(this.attempt[index])
                if (!this.correctIndexes.includes(indexAchado)) this.pattern[index] = 'Y'
                this.correct.splice(indexAchado, indexAchado)
            }
        }
    }
}

const patternMap = {
    "G": "success",
    "Y": "place",
    "C": "error"
}

export {CreatePattern, patternMap}