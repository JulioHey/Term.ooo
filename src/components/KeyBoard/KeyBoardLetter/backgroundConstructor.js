import { CreatePattern, patternMap } from "../../../utils/pattern";

class BackgroundConstructor {
    constructor(
        letter,
        awnsers,
        tries,
    )
    {
        this.letter = letter;
        this.awnsers = awnsers;
        this.tries = tries;
    };

    constructStatusForAwnser(currentAwnser, currentTry)
    {
        let status = "error";
        currentTry.forEach((letter, index) => {
            if (letter === this.letter)
            {
                if (currentAwnser[index] === currentTry[index]) {
                    status = "success"
                };
                if (currentAwnser.includes(letter) && status != "success") status = "place";
            }
        });

        return status;
    }

    getGreatestStatus(awnserStatusList)
    {
        if (awnserStatusList.includes("success")) return "success";
        if (awnserStatusList.includes("place")) return "place";
        if (awnserStatusList.includes("error")) return "error";
        else return "none";
    }

    constructStatus(letter)
    {
        let statusList = [];

        this.awnsers.forEach((awnser) => {
            let awnserStatusList = []
            this.tries.forEach((currentTry) => {
                if (currentTry.includes(letter)) {
                    awnserStatusList.push(this.constructStatusForAwnser(awnser, currentTry));
                } else awnserStatusList.push("none");
            });
            const greatestStatus = this.getGreatestStatus(awnserStatusList);
            statusList.push(greatestStatus);
        });

        this.tries.forEach((currentTry) => {
            if (currentTry.join("").length !== 0)
            {
                let awnserStatusList = []
                this.awnsers.forEach((awnser) => {
                    if (currentTry.includes(letter)) {
                        awnserStatusList.push(this.constructStatusForAwnser(awnser, currentTry));
                    } else awnserStatusList.push("none");
                });
                const greatestStatus = this.getGreatestStatus(awnserStatusList);
                statusList.push(greatestStatus);
            }

        });
        return statusList;
    }

    colorFromStatus(status)
    {
        if (status === "place") {
            return "#d3ad69";
        } else if (status === "success") {
            return "#3aa394";
        } else if (status === "error") {
            return "#191516"
        } else {
            return "#4C4347"
        }
    }

    termoBackgrounds()
    {
        return this.colorFromStatus(
            this.constructStatus(this.letter)[0]
        );
    }

    duetoBackgrounds()
    {
        const statusList = this.constructStatus(this.letter);
        const colorList = statusList.map((status) => this.colorFromStatus(status));

        return `linear-gradient(
            to right, ${colorList[0]} 
            50%,${colorList[1]} 50%)`;
    }

    quartetoBackgrounds()
    {
        const statusList = this.constructStatus(this.letter);
        const colorList = statusList.map((status) => this.colorFromStatus(status));
        return `conic-gradient(
            ${colorList[0]} 90deg,
            ${colorList[1]} 90deg 180deg,
            ${colorList[2]} 180deg 270deg,
            ${colorList[3]} 270deg)`;
    }
}

export default BackgroundConstructor;
