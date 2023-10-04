export const VendrView = `
<div class="container-fluid">
    <div class="row">
    <div class="col-12 d-flex justify-content-start align-items-center p-2">
        <i class="btn cashPlus fs-1 p-2 mdi mdi-cash-multiple" onclick="app.VendrController.addMonies100()"></i>
        <i class="btn cashPlus fs-1 p-2 mdi mdi-cash-plus" onclick="app.VendrController.addMonies()"></i>
        <span class="text-center p-2">
        <p>CREDITS:</p>
        <p id="totalCredits">0</p>
        </span>
        <span class="d-flex flex-wrap m-0 p-0" id="cashFlow">
        <!-- CASH FLOW VIEWPORT - Shows # of Credits by type -->
        </span>
    </div>
    </div>

    <div class="row p-md-5 p-3" id="vendingMachine">
    <!-- VENDING MACHINE VIEWPORT -->
    </div>
</div>
`