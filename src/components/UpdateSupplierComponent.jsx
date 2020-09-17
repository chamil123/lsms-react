import React, { Component } from 'react';
import SupplierServices from '../services/SupplierServices';

class UpdateSupplierComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {

            id:this.props.match.params.id ,
            supfullname: '',
            supofficenumber: '',
            supmobilenumber: '',
            supemail: '',
            supaddress: '',
            supremark:'',
            supstatus:'',
            updatedat:'',
            supcreateddate:'',
           
        }
        

        this.changeNameHandlter = this.changeNameHandlter.bind(this);
        this.changeOfficeandlter = this.changeOfficeandlter.bind(this);
        this.changeMobileHandlter = this.changeMobileHandlter.bind(this);
        this.changeEmailHandlter = this.changeEmailHandlter.bind(this);
        this.changeAddressHandlter = this.changeAddressHandlter.bind(this);
        this.changeRemarkHandlter = this.changeRemarkHandlter.bind(this);
        this.updateSupplier = this.updateSupplier.bind(this);


        
    }
    componentDidMount(){
        SupplierServices.getSupplierById(this.state.id)
        .then((res)=>{
            let supplier=res.data;
            this.setState({
                supfullname:supplier.supfullname,
                supofficenumber:supplier.supofficenumber,
                supmobilenumber:supplier.supmobilenumber,
                supemail:supplier.supemail,
                supaddress:supplier.supaddress,
                supremark:supplier.supremark,
                supcreateddate:supplier.supcreateddate,
                updatedat:supplier.updatedat,
                supstatus:supplier.supstatus,
             
            
            });
        });
    }
    updateSupplier = (e) => {
        e.preventDefault();
        let supplier = { supfullname: this.state.supfullname, supofficenumber: this.state.supofficenumber, supmobilenumber: this.state.supmobilenumber, supemail: this.state.supemail, supaddress: this.state.supaddress,supstatus:1,supcreateddate:'2020-09-16',updatedat:'2020-09-16'};
        console.log('supplier=>' + JSON.stringify(supplier));
        SupplierServices.updateSupplier(supplier,this.state.id).then(res => {
            this.props.history.push('/supplier');
        });
    }
    changeNameHandlter = (event) => {
        this.setState({
            supfullname: event.target.value
        });
    }
    changeOfficeHandlter = (event) => {
        this.setState({
            supofficenumber: event.target.value
        });
    }
    changeMobileHandlter = (event) => {
        this.setState({
            supmobilenumber: event.target.value
        });
    }
    changeEmailHandlter = (event) => {
        this.setState({
            supemail: event.target.value
        });
    }
    changeAddressHandlter = (event) => {
        this.setState({
            supaddress: event.target.value
        });
    }
    changeRemarkHandlter=(event)=>{
        this.setState({
            supremark: event.target.value
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
                                        <h4>Update Supplier</h4>
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
                                                        <label htmlFor="exampleInputEmail1">Supplier Name</label>
                                                        <input type="text" className="form-control" id="supfullname" placeholder="Enter Supplier Full name" value={this.state.supfullname} onChange={this.changeNameHandlter} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">Supplier Office Number</label>
                                                        <input type="number" className="form-control" id="supofficenumber" placeholder="Enter Office number" value={this.state.supofficenumber} onChange={this.changeOfficeHandlter} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">Supplier Mobile Number</label>
                                                        <input type="number" className="form-control" id="supmobilenumber" placeholder="Enter Mobile number" value={this.state.supmobilenumber} onChange={this.changeMobileHandlter} />
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
                                                        <label htmlFor="exampleInputEmail1">Supplier Email</label>
                                                        <input type="email" className="form-control" id="supemail" placeholder="Enter Email" value={this.state.supemail} onChange={this.changeEmailHandlter} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">Supplier Address</label>
                                                        <input type="text" className="form-control" id="supaddress" placeholder="Enter Address" value={this.state.supaddress} onChange={this.changeAddressHandlter} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">Supplier Remark</label>
                                                        <textarea type="text" className="form-control" id="supremark" placeholder="Enter Remark" value={this.state.supremark} onChange={this.changeRemarkHandlter}/>
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
                                    <button type="submit" className="btn btn-warning" onClick={this.updateSupplier}>Update Supplier</button>

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

export default UpdateSupplierComponent;
