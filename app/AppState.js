import { Value } from "./models/Value.js"
import { VendrSnack } from "./models/VendrSnack.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"

class ObservableAppState extends EventEmitter {
  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])

  // SECTION GLOBAL VARIABLES

  vendrSnacks = [
    new VendrSnack({ name: 'Lollipop', price: 100, qty: 9, imgUrl: 'https://images.unsplash.com/photo-1575224300306-1b8da36134ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' }),
    new VendrSnack({ name: 'Candy Bar', price: 300, qty: 10, imgUrl: 'https://images.unsplash.com/photo-1534640076976-2ffafd40fe07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' }),
    new VendrSnack({ name: 'Chips', price: 200, qty: 5, imgUrl: 'https://images.unsplash.com/photo-1694101493160-10f1257fe9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80' }),
  ]

  // !SECTION GLOBAL VARIABLES


  // NOTE Used to load initial data
  init() {

  }
}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
