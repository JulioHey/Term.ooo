class KeyBoardStylesConstructor {
    constructor(currentPage) {
        this.currentPage = currentPage;
    }

    stylesLettersForCurrentPage() {
        const stringMethod = `${this.currentPage}KeyBoardStyles`;
        const letterStylesMethods = new LetterStylesMethods();
        return letterStylesMethods[stringMethod]();
    }

    stylesBackspaceForCurrentPage() {
        const stringMethod = `${this.currentPage}KeyBoardStyles`;
        const backSpaceStylesMethods = new BackSpaceStylesMethods();
        return backSpaceStylesMethods[stringMethod]();
    }

    stylesEnterForCurrentPage() {
        const stringMethod = `${this.currentPage}KeyBoardStyles`;
        const enterStylesMethods = new EnterStylesMethods();
        return enterStylesMethods[stringMethod]();
    }
}

class LetterStylesMethods {
    termoKeyBoardStyles() {
        return {
            width: "60px",
            height: "45px",
            fontSize: "22px"
        };
    }

    duetoKeyBoardStyles() {
        return {
            width: "60px",
            height: "45px",
            fontSize: "22px"
        };
    }

    quartetoKeyBoardStyles() {
        return {
            width: "60px",
            height: "45px",
            fontSize: "22px"
        };
    }
}

class BackSpaceStylesMethods {
    termoKeyBoardStyles() {
        return {
            width: "60px",
            height: "45px",
            fontSize: "22px",
            margin: "2px 4px 2px 30px"
        };
    }

    duetoKeyBoardStyles() {
        return {
            width: "60px",
            height: "45px",
            fontSize: "22px",
            margin: "2px 4px 2px 30px"
        };
    }

    quartetoKeyBoardStyles() {
        return {
            width: "60px",
            height: "45px",
            fontSize: "22px",
            margin: "2px 4px 2px 30px"
        };
    }
}

class EnterStylesMethods {
    termoKeyBoardStyles() {
        return {
            width: "120px",
            height: "45px",
            fontSize: "22px",
            margin: "2px 4px 2px 30px"
        };
    }

    duetoKeyBoardStyles() {
        return {
            width: "120px",
            height: "45px",
            fontSize: "22px",
            margin: "2px 4px 2px 30px"
        };
    }

    quartetoKeyBoardStyles() {
        return {
            width: "120px",
            height: "45px",
            fontSize: "22px",
            margin: "2px 4px 2px 30px"
        };
    }
}

export default KeyBoardStylesConstructor;