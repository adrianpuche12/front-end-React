import React from "react";
import Caja_metrica from "./caja_metrica";

function Props() {


    return (

        <div>

            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>

                <Caja_metrica titulo="Products in Data Base"  valor="135" icono="fas fa-clipboard-list fa-2x text-gray-300" clase1="col-md-4 mb-4" clase2="card border-left-primary shadow h-100 py-2" clase3="card-body" clase4="row no-gutters align-items-center" clase5="col mr-2" clase6="text-xs font-weight-bold text-primary text-uppercase mb-1" clase7="h5 mb-0 font-weight-bold text-gray-800" clase8="col-auto"/>

                <Caja_metrica titulo="Amount in products" valor="$546.456" icono="fas fa-dollar-sign fa-2x text-gray-300" clase1="col-md-4 mb-4" clase2="card border-left-primary shadow h-100 py-2" clase3="card-body" clase4="row no-gutters align-items-center" clase5="col mr-2" clase6="text-xs font-weight-bold text-primary text-uppercase mb-1" clase7="h5 mb-0 font-weight-bold text-gray-800" clase8="col-auto" />

                <Caja_metrica titulo="Users quantity" valor="38" icono="fas fa-user-check fa-2x text-gray-300" clase1="col-md-4 mb-4" clase2="card border-left-primary shadow h-100 py-2" clase3="card-body" clase4="row no-gutters align-items-center" clase5="col mr-2" clase6="text-xs font-weight-bold text-primary text-uppercase mb-1" clase7="h5 mb-0 font-weight-bold text-gray-800" clase8="col-auto" />
                </div>

    )
}

export default Props;