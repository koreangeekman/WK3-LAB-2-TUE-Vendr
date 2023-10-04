import { AppState } from "../AppState.js";
import { vendrService } from "../services/VendrService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawSnacks() {
  let contentHTML = '';
  AppState.vendrSnacks.forEach(snack => contentHTML += snack.snackCard);
  setHTML('vendingMachine', contentHTML)
}

function _drawMonies() {
  let contentHTML = '';
  let totalCredits = 0;
  AppState.vendrCredits.forEach(credit => {
    totalCredits += credit.qty;
    let c = credit.qty;
    while (c > 0) {
      contentHTML += credit.creditImg
      if (credit.type == 'cash-100') {
        c -= 100;
      } else {
        c--;
      }
    }
    setHTML('totalCredits', `$${totalCredits}`)
  })

  setHTML('cashFlow', contentHTML)
}

function _drawALL() {
  _drawMonies()
  _drawSnacks()
}

export class VendrController {
  constructor() {
    Pop.success('Welcome to the Vendr Machine! 😎');
    _drawALL();
  }

  addMonies100() {
    vendrService.addMonies100();
    _drawMonies();
  }
  addMonies() {
    vendrService.addMonies();
    _drawMonies();
  }

  buySnack(snackName) {
    vendrService.buySnack(snackName);
    _drawALL();
  }
}