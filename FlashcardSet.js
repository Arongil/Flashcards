class FlashcardSet {

    constructor(text) {
        this.entries = text.split("\n");
        this.flashcards = [];
        for (var i = 0, split; i < this.entries.length; i++) {
            split = this.entries[i].split("=");
            if (split.length !== 2) continue; // If the flashcard set file has a line without an =, skip the line.
            this.flashcards.push(new Flashcard(
                split[0].trim(),
                split[1].trim()
            ));
        }
        this.currentFlashcard;
    }

    randomizeFlashcard() {
        this.currentFlashcard = this.flashcards[Math.floor( Math.random() * this.flashcards.length )];
        this.currentFlashcard.init();
    }

}
