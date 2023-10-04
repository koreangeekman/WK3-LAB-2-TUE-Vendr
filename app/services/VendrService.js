import { AppState } from "../AppState.js";
import { Pop } from "../utils/Pop.js";

function _calcMonies() {
  let totalCredits = 0;
  AppState.vendrCredits.forEach(credit => totalCredits += credit.qty);
  return totalCredits;
}

function _divMonies(monies) { //redivide monies between money types
  let hundreds = Math.floor(monies / 100) * 100;
  let remainder = monies - hundreds;
  AppState.vendrCredits.find(credit => credit.type == 'cash-100' ? credit.qty = hundreds : null);
  AppState.vendrCredits.find(credit => credit.type == 'cash' ? credit.qty = remainder : null);
}

function _spendMonies(snackPrice) { //sum monies of all types and subtract unit price
  let monies = _calcMonies();
  monies -= snackPrice;
  _divMonies(monies);
}

class VendrService {
  constructor() {
    // console.log('Vendr Service module loaded');
  }

  addMonies100() {
    AppState.vendrCredits.find(credit => credit.type == 'cash-100' ? credit.qty += 100 : null)
  }

  addMonies() {
    AppState.vendrCredits.find(credit => credit.type == 'cash' ? credit.qty += 1 : null)
  }

  buySnack(snackName) {
    // let snackPrice = (AppState.vendrSnacks.find(snack => snack.name == snackName)).price;
    let snackObj = AppState.vendrSnacks.find(snack => snack.name == snackName);
    let availableMonies = _calcMonies();
    if (availableMonies >= snackObj.price && snackObj.qty > 0) {
      // AppState.vendrSnacks.find(snack => snack.name == snackName ? snack.qty-- : null);
      snackObj.qty--;
      _spendMonies(snackObj.price);
      Pop.success("Thank you for your purchase! 😎");
    } else if (availableMonies < snackObj.price) {
      Pop.error("Sorry, you don't have enough credits! 😟");
    } else if (snackObj.qty <= 0) {
      Pop.error("Sorry, we are out of that item! 😢");
    } else {
      console.log("what? you shouldn't see this")
    }
  }
}
export const vendrService = new VendrService(); 