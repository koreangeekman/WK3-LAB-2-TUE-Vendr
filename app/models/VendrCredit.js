
export class VendrCredit {
  constructor(data) {
    console.log('vender coin triggered');
    this.type = data.type // via mdi defined name
    this.qty = data.qty
  }

  get creditImg() {
    return `
          <i class="cash mdi mdi-${this.type}"></i>
    `
  }
}