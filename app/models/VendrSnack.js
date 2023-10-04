
export class VendrSnack {
  constructor(data) {
    // console.log('Vendr Snack module loaded - creating object')
    this.name = data.name
    this.price = data.price
    this.qty = data.qty
    this.imgUrl = data.imgUrl
  }

  get snackCard() {
    // console.log(this)
    return `
        <div class="col-6 col-md-3 p-3" >
          <div class="btn card shadow bg-primary text-white px-3" onclick="app.VendrController.buySnack('${this.name}')">
            <span class="d-flex justify-content-between align-items-center">
              <p class="fs-3 fw-bold p-2">${this.name}</p>
              <p class="p-2 qty">Qty: ${this.qty}</p>
            </span>
            <img src="${this.imgUrl}" alt="${this.name}">
            <p class="text-center p-2">Unit Price: $${this.price}</p>
          </div>
        </div>
    `
  }
}