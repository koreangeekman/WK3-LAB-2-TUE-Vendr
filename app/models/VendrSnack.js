


export class VendrSnack {
  constructor(data) {
    // console.log('Vendr Snack module loaded - creating object')
    this.name = data.name
    this.price = data.price
    this.qty = data.qty
    this.imgUrl = data.imgUrl
  }

  get snackCard() {
    return `
        <div class="col-6 col-md-3" >
          <div class="card shadow bg-primary text-white px-3">
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