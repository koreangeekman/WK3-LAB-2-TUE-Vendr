import { AppState } from "../AppState.js";
import { VendrSnack } from "../models/VendrSnack.js";
import { setHTML } from "../utils/Writer.js";

function _drawSnacks() {
  console.log('draw snacks')
  let contentHTML = '';
  AppState.vendrSnacks.forEach(snack => contentHTML += snack.snackCard);
  setHTML('vendingMachine', contentHTML)
}

function _updateQty() {
  console.log('update qty')
  let contentHTML = '';

  setHTML('itemQty', contentHTML)
}

function _updateMonies() {
  console.log('update monies')
  let contentHTML = '';

  setHTML('visualMonies', contentHTML)
}

function _onPurchase() {
  _updateMonies();
  _updateQty();
}

export class VendrController {
  constructor() {
    console.log('Vendr Controller module loaded')
    _drawSnacks();
  }

  addMonies() {
    console.log('add monies')
  }

  spendMonies() {
    console.log('add monies')

    _onPurchase();
  }
}