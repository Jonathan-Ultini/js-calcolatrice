class Calcolatrice {
  constructor() {
    // Associa l'elemento HTML con id "display" all'attributo displayElement
    // Questo elemento sarà utilizzato per mostrare i numeri e i risultati della calcolatrice
    this.displayElement = document.getElementById('display');

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

  clear() {
    this.currentOperand = '0';
    this.previousOperand = '';
    this.operation = undefined;
  }

}

// Crea una nuova istanza della classe Calcolatrice e la memorizza nella variabile calcolatrice
const calcolatrice = new Calcolatrice();


document.getElementById('clear').addEventListener('click', () => {
  calcolatrice.clear();
})