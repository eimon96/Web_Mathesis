// Τα ερωτήματα 2 έως 7 θα απαντηθούν στο αρχείο αυτό

const newGuess = document.querySelector("#new-guess");
const message = document.querySelector("#message");
const lowHigh = document.querySelector("#low-high");
const checkButton = document.querySelector("#check");
const restartButton = document.querySelector("#restart");
const root = document.querySelector(":root");

const prev = document.querySelector("#prev");

// 2. να ορίσετε τους σχετικούς χειριστές συμβάντων
checkButton.addEventListener("click", checkGuess);
restartButton.addEventListener("click", restart);
newGuess.addEventListener("keyup", checkKey); 

let previousGuesses = [];
let theGuess;
window.onload = newRandom();
newGuess.focus();

let counter = 0;

function newRandom(){
/* 3. συνάρτηση που βρίσκει ένα τυχαίο αριθμό μεταξύ 1 και 100
 και τον εκχωρεί στη μεταβλητή theGuess */
    theGuess = Math.floor(Math.random()*100 + 1);
    //console.log(theGuess);
}

function checkKey(e){
/* 4. συνάρτηση που όταν ο χρήστης πατήσει <<enter>>
 να καλεί τη συνάρτηση που αποτελεί τον κεντρικό ελεγκτή του παιχνιδιού.
 */
    //console.log(e.code);
    if (e.code === "Enter"){
        checkGuess();
    }
}

function checkGuess(){
/* 5. Να ορίσετε συνάρτηση checkGuess η οποία καλείται είτε όταν ο χρήστης πατήσει <<enter>>
στο πεδίο "new-guess" είτε όταν πατήσει το πλήκτρο "check", η οποία είναι ο κεντρικός ελεγκτής,
καλεί τη συνάρτηση processGuess (η οποία αποφαίνεται για την ορθότητα του αριθμού) και κάνει
τις κατάλληλες ενέργειες για να μην μπορεί να εισάγει ο χρήστης νέο αριθμό ή να ανασταλεί η
λειτουργία του <<enter>>, εμφάνιση του πλήκτρου 'restart' και την εξαφάνιση του πλήκτρου 'check'
σε περίπτωση ολοκλήρωσης του παιχνιδιού. */
// Και το 6. εδώ.
    //processGuess(parseInt(newGuess.value));
    if (isNaN(parseInt(newGuess.value))){
        lowHigh.innerHTML = "ΑΡΙΘΜΟ ΕΙΠΑΜΕ";
        newGuess.value = "";
    } else if (parseInt(newGuess.value) == parseInt(theGuess)){
        lowHigh.innerHTML = "";
        message.innerHTML = "Εύρηκα!!";
        checkButton.style.visibility = "hidden";
        newGuess.removeEventListener("keyup", checkKey);
        counter += 1;
    } else {
        message.innerHTML = "";
        previousGuesses.push(parseInt(newGuess.value));
        if (parseInt(newGuess.value) > parseInt(theGuess)){
            lowHigh.innerHTML = "Κατέβα!";
        } else {
            lowHigh.innerHTML = "Ανέβα!"; 
        }
        newGuess.value = "";
        counter += 1;
    } 
    prev.innerHTML = "Προηγούμενες προσπάθειες: " + previousGuesses + "<br>" + "Συνολικά: " + counter;
}


//function processGuess(newValue){
 /* 6.  Να ορίσετε συνάρτηση processGuess(newValue) η οποία καλείται από τη συνάρτηση checkGuess,
 περιέχει τη λογική του παιχνιδιού, ελέγχει αν η τιμή του χρήστη είναι σωστή, ή αν το παιχνίδι έχει
 τελειώσει χωρίς ο χρήστης να έχει βρει τον αριθμό, και επιστρέφει αντίστοιχα την τιμή "win", ή "lost",
 δημιουργεί και εμφανίζει τα κατάλληλα μηνύματα, αλλάζοντας το χρώμα του στοιχείου μηνυμάτων.
 Όλα τα μηνύματα του προγράμματος εμανίζονται από την processGuess().
 Σε περίπτωση που το παιχνίδι δεν έχει ακόμα τελειώσει, η συνάρτηση μπορεί είτε να μην επιστρέφει κάποια ιδιαίτερη τιμή,
 είτε να επιστρέφει κάποια τιμή της επιλογής σας */
//}

function restart(){
/* 7. Να ορίσετε συνάρτηση restart η οποία καλείται όταν ο χρήστης πατήσει το πλήκτρο
'restart' και επανεκινεί τη διαδικασία */
    newGuess.addEventListener("keyup", checkKey); 
    newRandom();
    checkButton.style.visibility = "visible";
    newGuess.value = "";
    message.innerHTML = "";
    lowHigh.innerHTML = "";
    previousGuesses = [];
    prev.innerHTML = "";
    counter = 0;
}