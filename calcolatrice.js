class Calcolatrice {
  constructor() {
    // Associa l'elemento HTML con id "display" all'attributo displayElement
    // Questo elemento sarà utilizzato per mostrare i numeri e i risultati della calcolatrice
    this.displayElement = document.getElementById('display');

    // Richiama il metodo clear() per inizializzare i valori della calcolatrice
    this.clear();

    // Variabili per memorizzare l'ultimo operando inserito, l'ultima operazione eseguita
    // e il risultato corrente
    this.lastOperand = '';
    this.lastOperation = undefined;
    this.result = '';

    // Ottiene gli stili CSS calcolati dell'elemento displayElement
    const computedDisplayElement = window.getComputedStyle(this.displayElement, null);

    // Memorizza la dimensione del font dell'elemento displayElement in un numero intero
    this.defaultDisplayElementFontSize = parseInt(computedDisplayElement.getPropertyValue('font-size'));

    // Calcola il numero massimo di caratteri che possono essere visualizzati nel displayElement
    // senza che il testo trabocchi. Questo calcolo è basato sulla larghezza dell'elemento,
    // il padding interno e una stima della larghezza di un carattere.
    this.defaultDisplayElementMaxChars = Math.ceil(
      (parseInt(computedDisplayElement.getPropertyValue('width'))  // Larghezza dell'elemento
        - parseInt(computedDisplayElement.getPropertyValue('padding')) * 2)  // Sottrae il padding
      / (this.defaultDisplayElementFontSize * 0.6)  // Stima della larghezza di un carattere
    );
  }

  // Metodo per reimpostare la calcolatrice ai valori di default
  clear() {
    // Imposta l'operando corrente a '0'
    this.currentOperand = '0';
    // Resetta l'operando precedente e l'operazione corrente
    this.previousOperand = '';
    this.operation = undefined;
  }

  // Metodo per aggiungere un numero o un punto decimale all'operando corrente
  appendNumber(number) {
    // Evita di aggiungere un secondo punto decimale se già presente nell'operando corrente
    if (number === '.' && this.currentOperand.includes('.')) return;
    // Se l'operando corrente è '0', sostituiscilo con il numero, altrimenti aggiungi il nuovo numero alla stringa
    this.currentOperand = this.currentOperand === '0' ? number : this.currentOperand + number;
    // Aggiorna il display dopo aver aggiunto il numero
    this.updateDisplay();
  }

}

// Crea una nuova istanza della classe Calcolatrice e la memorizza nella variabile calcolatrice
const calcolatrice = new Calcolatrice();

// Aggiunge un event listener al pulsante "clear" che chiama il metodo clear()
// della calcolatrice quando il pulsante viene cliccato
document.getElementById('clear').addEventListener('click', () => {
  calcolatrice.clear();
});
