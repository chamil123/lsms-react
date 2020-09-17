import React, { useState, Component } from 'react';
import SupplierServices from '../services/SupplierServices';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
// import Modal from 'react-bootstrap/Modal';

class ListSupplierComponents extends Component {
    constructor(props) {
        super(props)


        this.state = {
            show: false,
            supfullname: '',
            supofficenumber: '',
            supmobilenumber: '',
            supemail: '',
            supaddress: '',
            supremark:'',
            id: this.props.match.params.id,
            suppliers: []
        }
        this.editSupplier = this.editSupplier.bind(this);
        this.getDataById = this.getDataById.bind(this);


    }
    componentDidMount() {
        SupplierServices.getSuppliers().then((res) => {
            this.setState({ suppliers: res.data });
        });
    }
    editSupplier(id) {

        this.props.history.push(`/update-supplier/${id}`);
    }
    getDataById(id) {

        // console.log(id);
        SupplierServices.getSupplierById(id).then((res) => {
            let supplier = res.data;

            
           
            this.setState({
                show: !this.state.show,
                supfullname: supplier.supfullname,
                supofficenumber: supplier.supofficenumber,
                supmobilenumber: supplier.supmobilenumber,
                supemail: supplier.supemail,
                supaddress: supplier.supaddress,
                supremark: supplier.supremark,
            });
            // console.log(customer);
        });
        // EmployeeServices.getEmployeeById().then((res)=>{
        //     let customer=res.data;
        //     console.log(customer);
        // });

    }
    handleModal() {
        this.setState({
            show: !this.state.show
        });
    }
    render() {

        return (
            <div>
                <div>
                    <div className="content-wrapper">
                        {/* Content Header (Page header) */}
                        <div className="content-header">
                            <div className="container-fluid">
                                <div className="row mb-2">
                                    <div className="col-sm-6">
                                        <h4>Supplier list</h4>
                                    </div>{/* /.col */}
                                    <div className="col-sm-6">
                                        <ol className="breadcrumb float-sm-right">
                                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                                            <li className="breadcrumb-item active">Dashboard v2</li>
                                        </ol>


                                    </div>{/* /.col */}
                                </div>{/* /.row */}
                            </div>{/* /.container-fluid */}
                        </div>

                        <section className="content">
                            <div className="container-fluid">
                                {/* Info boxes */}


                                <div className="row">
                                    <div className="col-12">
                                        <div className="card">
                                            <div className="card-header">
                                                <h3 className="card-title">DataTable with minimal features & hover style</h3>
                                            </div>

                                            <div className="card-body">
                                                <table id="example2" className="table table-striped table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th>ID</th>
                                                            <th>Full Name</th>
                                                            <th>Mobile Number</th>
                                                            <th>Email address</th>
                                                            <th>Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            this.state.suppliers.map(
                                                                supplier => <tr key={supplier.sup_id}>
                                                                    <td>{supplier.supfullname}</td>
                                                                    <td>{supplier.supmobilenumber}</td>
                                                                    <td>{supplier.supemail}</td>
                                                                    
                                                                    <td>
                                                                        <button onClick={() => this.getDataById(supplier.id)} className="btn btn-info btn-sm" style={{ marginRight: 10 }}><i className="far fa-file"></i></button>
                                                                        <button onClick={() => this.editSupplier(supplier.id)} className="btn btn-warning btn-sm" style={{ marginRight: 10 }}><i className="fas fa-pencil-alt"></i></button>
                                                                        <button onClick={() => this.editSupplier(supplier.id)} className="btn btn-danger btn-sm"><i className="fas fa-trash-alt"></i></button>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        }
                                                    </tbody>
                                                    {/* <tfoot>
                                                        <tr>
                                                            <th>Rendering engine</th>
                                                            <th>Browser</th>
                                                            <th>Platform(s)</th>
                                                            <th>Engine version</th>
                                                            <th>CSS grade</th>
                                                        </tr>
                                                    </tfoot> */}
                                                </table>
                                            </div>
                                            {/* <!-- /.card-body --> */}
                                        </div>
                                        {/* <!-- /.card --> */}

                                    </div>

                                </div>



                            </div>
                        </section>
                        <>


                            <Modal
                                size="lg"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                                show={this.state.show}>
                                <Modal.Header closeButton onClick={() => this.handleModal()}>
                                    <Modal.Title>Modal heading</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    {/* Woohoo, you're reading this text in a modal! */}




                                    <div className="col-md-12">
                                        <div className="row">
                                            <div className="col-md-6">

                                                {/* <center> */}
                                                <img src="dist/img/blank_user_icon.png" alt="User Avatar" width="150" className="mr-3 img-circle " style={{ marginLeft: 30 }} />
                                                {/* </center> */}
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="formGroupExampleInput">Supplier full name</label>
                                                    <input type="text" disabled className="form-control" id="formGroupExampleInput" placeholder="Example input" value={this.state.supfullname} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="formGroupExampleInput2">Supplier Office Number</label>
                                                    <input type="number" disabled className="form-control" id="formGroupExampleInput2" placeholder="Another input" value={this.state.supofficenumber} />
                                                </div>
                                            </div>

                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">

                                                <div className="form-group">
                                                    <label htmlFor="formGroupExampleInput2">Supplier Mobile Number</label>
                                                    <input type="number" disabled className="form-control" id="formGroupExampleInput2" placeholder="Another input" value={this.state.supmobilenumber} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="formGroupExampleInput">Email</label>
                                                    <input type="email"disabled className="form-control" id="formGroupExampleInput" placeholder="Example input" value={this.state.supemail} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="formGroupExampleInput2">Remark</label>
                                                    <input type="text"disabled className="form-control" id="formGroupExampleInput2" placeholder="Another input" value={this.state.supremark} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">


                                                
                                                <div className="form-group">
                                                    <label htmlFor="formGroupExampleInput2">Address</label>
                                                    <textarea name="" disabled id=""  className="form-control" id="formGroupExampleInput2" placeholder="Supplier address"  cols="30" rows="6" value={this.state.supaddress}/>
                                                    {/* <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input"  /> */}
                                                </div>


                                            </div>
                                        </div>
                                    </div>

                                    {/* <input type="text" className="form-control" id="cusemail" placeholder="Enter email" value={this.state.cusfullname} /> */}
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button onClick={() => this.handleModal()} variant="secondary" >
                                        Close
          </Button>
                                    <Button onClick={() => this.handleModal()} variant="primary" >
                                        Save Changes
          </Button>
                                </Modal.Footer>
                            </Modal>
                        </>

                    </div>

                </div>
            </div>
        );
    }
}

export default ListSupplierComponents;