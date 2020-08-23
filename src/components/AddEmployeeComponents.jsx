import React, { Component } from 'react';
import EmployeeServices from '../services/EmployeeServices';

class AddEmployeeComponents extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cusfullname: '',
            cusNicNumber: '',
            cusdob: '',
            cuscontactnumber: '',
            cusemail: '',
            cusage:'',
            cusstatus:'',
            createdat:'',
            updatedat:'',
            cusaddress:''


        }
        this.changeNameHandlter = this.changeNameHandlter.bind(this);
        this.changeNICHandlter = this.changeNICHandlter.bind(this);
        this.changeDateHandlter = this.changeDateHandlter.bind(this);
        this.changeContactHandlter = this.changeContactHandlter.bind(this);
        this.changeEmailtHandlter = this.changeEmailtHandlter.bind(this);
        this.changeaddressHandlter = this.changeaddressHandlter.bind(this);
        this.saveCustomer = this.saveCustomer.bind(this);

    }
    saveCustomer = (e) => {
        e.preventDefault();
        let customer = { cusfullname: this.state.cusfullname, cusNicNumber: this.state.cusNicNumber, cusdob: this.state.cusdob, cuscontactnumber: this.state.cuscontactnumber, cusemail: this.state.cusemail,cusage:25,cusaddress:this.state.cusaddress,cusstatus:1,createdat:'2020-07-25',updatedat:'2020-07-25' };
        console.log('customer=>' + JSON.stringify(customer));
        EmployeeServices.createCustomer(customer).then(res => {
            this.props.history.push('/customer');
        });
    }
    changeNameHandlter = (event) => {
        this.setState({
            cusfullname: event.target.value
        });
    }
    changeNICHandlter = (event) => {
        this.setState({
            cusNicNumber: event.target.value
        });
    }
    changeDateHandlter = (event) => {
        this.setState({
            cusdob: event.target.value
        });
    }
    changeContactHandlter = (event) => {
        this.setState({
            cuscontactnumber: event.target.value
        });
    }
    changeEmailtHandlter = (event) => {
        this.setState({
            cusemail: event.target.value
        });
    }
    changeaddressHandlter=(event)=>{
        this.setState({
            cusaddress: event.target.value
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
                                        <h4>Add Customer</h4>
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
                            <form role="form">
                                <div className="container-fluid">
                                    {/* Info boxes */}





                                    <div className="row">
                                        {/* left column */}
                                        <div className="col-md-6">
                                            {/* general form elements */}
                                            <div className="card card-default">
                                                <div className="card-header">
                                                    <h3 className="card-title">Quick Example</h3>
                                                </div>
                                                {/* /.card-header */}
                                                {/* form start */}

                                                <div className="card-body">
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">Customer Name</label>
                                                        <input type="text" className="form-control" id="cusfullname" placeholder="Enter Full name" value={this.state.cusfullname} onChange={this.changeNameHandlter} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">NIC Number</label>
                                                        <input type="text" className="form-control" id="cusNicNumber" placeholder="Enter NIC number" value={this.state.cusNicNumber} onChange={this.changeNICHandlter} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">Date of birth</label>
                                                        <input type="date" className="form-control" id="cusdob" value={this.state.cusdob} onChange={this.changeDateHandlter} />
                                                    </div>



                                                </div>
                                                {/* /.card-body */}


                                            </div>


                                        </div>
                                        {/*/.col (left) */}
                                        {/* right column */}
                                        <div className="col-md-6">
                                            {/* general form elements disabled */}
                                            <div className="card card-default">
                                                <div className="card-header">
                                                    <h3 className="card-title">General Elements</h3>
                                                </div>
                                                {/* /.card-header */}
                                                <div className="card-body">

                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">Contact number</label>
                                                        <input type="number" className="form-control" id="cuscontactnumber" placeholder="Enter Contact number" value={this.state.cuscontactnumber} onChange={this.changeContactHandlter} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">Email</label>
                                                        <input type="text" className="form-control" id="cusemail" placeholder="Enter email" value={this.state.cusemail} onChange={this.changeEmailtHandlter} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">Address</label>
                                                        <textarea type="text" className="form-control" id="cusaddress" placeholder="Enter Address" value={this.state.cusaddress} onChange={this.changeaddressHandlter}/>
                                                        {/* <input  /> */}
                                                    </div>






                                                </div>
                                                {/* /.card-body */}
                                            </div>
                                            {/* /.card */}
                                            {/* general form elements disabled */}

                                        </div>
                                        {/*/.col (right) */}
                                    </div>

                                    {/* <div className="card-footer"> */}
                                    <button type="submit" className="btn btn-success" onClick={this.saveCustomer}>Add customer</button>

                                    {/* </div> */}







                                </div>
                            </form>
                        </section>
                    </div>

                </div>
            </div>
        );
    }
}

export default AddEmployeeComponents;