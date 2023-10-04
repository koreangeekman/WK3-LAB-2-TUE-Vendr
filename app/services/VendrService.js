import { AppState } from "../AppState.js";
import { Pop } from "../utils/Pop.js";

function _calcMonies() {
  let totalCredits = 0;
  AppState.vendrCredits.forEach(credit => totalCredits += credit.qty)
  return totalCredits
}

function _divMonies(monies) {
  let hundreds = Math.floor(monies / 100) * 100;
  let remainder = monies - hundreds;
  AppState.vendrCredits.find(credit => credit.type == 'cash-100' ? credit.qty = hundreds : null);
  AppState.vendrCredits.find(credit => credit.type == 'cash' ? credit.qty = remainder : null);
}

function _spendMonies(snackPrice) {
  let monies = _calcMonies();
  monies -= snackPrice;
  _divMonies(monies);
}

class VendrService {
  constructor() {
    console.log('Vendr Service module loaded');
  }

  addMonies() {
    AppState.vendrCredits.find(credit => credit.name == 'cash-100' ? credit.qty += 100 : null)
  }

  buySnack(snackName) {
    let snackPrice = (AppState.vendrSnacks.find(snack => snack.name == snackName)).price;
    if (_calcMonies() >= snackPrice) {
      AppState.vendrSnacks.find(snack => snack.name == snackName ? snack.qty-- : null);
      _spendMonies(snackPrice);
      Pop.success("Thank you for your purchase! 😎");
    } else {
      Pop.error("Sorry, you don't have enough credits! 😎");
    }
  }
}
export const vendrService = new VendrService(); 