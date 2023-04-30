import React from 'react';
function Cuerpo_principal() {
    return (

        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-6 mb-4">
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Last product in Data Dase</h6>
                        </div>
                        <div class="card-body">
                            <div class="text-center">
                                <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" src="../../img/product_dummy.svg" alt='some value' />
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
                            <a target="_blank" rel="nofollow" href="/">View product detail</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 mb-4">
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-lg-6 mb-4">
                                    <div class="card bg-info text-white shadow">
                                        <div class="card-body">
                                            Category 01
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-4">
                                    <div class="card bg-info text-white shadow">
                                        <div class="card-body">
                                            Category 02
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-4">
                                    <div class="card bg-info text-white shadow">
                                        <div class="card-body">
                                            Category 03
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-4">
                                    <div class="card bg-info text-white shadow">
                                        <div class="card-body">
                                            Category 04
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-4">
                                    <div class="card bg-info text-white shadow">
                                        <div class="card-body">
                                            Category 05
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-4">
                                    <div class="card bg-info text-white shadow">
                                        <div class="card-body">
                                            Category 06
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h1 class="h3 mb-2 text-gray-800">All the products in the Database</h1>

            <div class="card shadow mb-4">
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">

                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                    <th>Categories</th>
                                    <th>Colors</th>
                                    <th>Stock</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                    <th>Categories</th>
                                    <th>Colors</th>
                                    <th>Stock</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                <tr>
                                    <td>Tiger Nixon</td>
                                    <td>System Architect</td>
                                    <td>$320,800</td>
                                    <td>
                                        <ul>
                                            <li>Category 01</li>
                                            <li>Category 02</li>
                                            <li>Category 03</li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>
                                            <li><span class="text-danger">Red</span></li>
                                            <li><span class="text-primary">Blue</span></li>
                                            <li><span class="text-success">Green</span></li>
                                        </ul>
                                    </td>
                                    <td>245</td>
                                </tr>
                                <tr>
                                    <td>Jane Doe</td>
                                    <td>Fullstack developer</td>
                                    <td>$320,800</td>
                                    <td>
                                        <ul>
                                            <li>Category 01</li>
                                            <li>Category 02</li>
                                            <li>Category 03</li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>
                                            <li><span class="text-danger">Red</span></li>
                                            <li><span class="text-primary">Blue</span></li>
                                            <li><span class="text-success">Green</span></li>
                                        </ul>
                                    </td>
                                    <td>245</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cuerpo_principal;




