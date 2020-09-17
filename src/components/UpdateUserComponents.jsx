import React, { Component } from 'react';
import EmployeeServices from '../services/EmployeeServices';
class UpdateCustomerComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id:this.props.match.params.id ,
            userFullName: '',
            userEmail: '',
            userImage: '',
            userContactNumber: '',
            userGender: '',
            userDob:'',
            userNic:'',
            userAddress:'',
            userName:'',
            role:'',
            userStatus:'',
            updatedat:'',
            userJoinedDate:''

        }
        
        
        this.changeNameHandlter = this.changeNameHandlter.bind(this);
        this.changeEmailHandlter = this.changeEmailHandlter.bind(this);
        this.changeImageHandlter = this.changeImageHandlter.bind(this);
        this.changeContactHandlter = this.changeContactHandlter.bind(this);
        this.changeGendertHandlter = this.changeGendertHandlter.bind(this);
        this.changeDobHandlter = this.changeDobHandlter.bind(this);
        this.changeNicHandlter = this.changeNicHandlter.bind(this);
        this.changeAddressbHandlter = this.changeAddressbHandlter.bind(this);
        this.changeUserNamebHandlter = this.changeNamebHandlter.bind(this);
        this.changerolebHandlter = this.changerolebHandlter.bind(this);
        this.updateUser = this.updateUser.bind(this);

    }
    componentDidMount(){
        UserServices.getUserById(this.state.id)
        .then((res)=>{
            let user=res.data;
            this.setState({
                userFullName:user.userFullName,
                userEmail:user.userEmail,
                userImage:user.userImage,
                userContactNumber:user.userContactNumber,
                userGender:user.userGender,
                userDob:user.userDob,
                userNic:user.userNic,
                userAddress:user.userAddress,
                userName:user.userName,
                role:user.role,
                userStatus:user.userStatus,
                updatedat:user.updatedat,
                userJoinedDate:user.userJoinedDate,



            });
        });
    }
    updateUser = (e) => {
        e.preventDefault();
        let user = { userFullName: this.state.userFullName, userEmail: this.state.userEmail, userImage: this.state.userImage, userContactNumber: this.state.userContactNumber, userGender: this.state.userGender,userDob: this.state.userDob,userNic: this.state.userNic,userAddress: this.state.userAddress,userName: this.state.userName,role: this.state.role,userStatus:1,updatedat:'2020-09-16',userJoinedDate:'2020-09-15' };
        console.log('user=>' + JSON.stringify(user));
        UserServices.updateUser(user,this.state.id).then(res => {
            this.props.history.push('/user');
        });
    }

    
    changeNameHandlter = (event) => {
        this.setState({
            userFullName: event.target.value
        });
    }
    changeEmailHandlter = (event) => {
        this.setState({
            userEmail: event.target.value
        });
    }
    changeImageHandlter = (event) => {
        this.setState({
            userImage: event.target.value
        });
    }
    changeContactHandlter = (event) => {
        this.setState({
            userContactNumber: event.target.value
        });
    }
    changeGendertHandlter = (event) => {
        this.setState({
            userGender: event.target.value
        });
    }
    changeDobHandlter=(event)=>{
        this.setState({
            userDob: event.target.value
        });
    }
    changeNicHandlter=(event)=>{
        this.setState({
            userNic: event.target.value
        });
    }
    changeAddressbHandlter=(event)=>{
        this.setState({
            userAddress: event.target.value
        });
    }
    changeUserNamebHandlter=(event)=>{
        this.setState({
            userName: event.target.value
        });
    }
    changerolebHandlter=(event)=>{
        this.setState({
            role: event.target.value
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
                                        <h4>Update Customer</h4>
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
                                                        <label htmlFor="exampleInputEmail1">User Full Name</label>
                                                        <input type="text" className="form-control" id="userFullName" placeholder="Enter Full name" value={this.state.userFullName} onChange={this.changeNameHandlter} />
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">User NIC</label>
                                                        <input type="text" className="form-control" id="userNic" placeholder="Enter User NIC" value={this.state.userNic} onChange={this.changeNicHandlter} />
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">Gender</label>

                                                        <div className="form-control" style="border: hidden">
                                                            <label class="radio-inline"><input type="radio" id="userGender" name="userGender" value={this.state.userGender} onChange={this.changeGendertHandlter}/>Male</label>
                                                            <label class="radio-inline"><input type="radio" id="userGender" name="userGender" value={this.state.userGender} onChange={this.changeGendertHandlter}/>Female</label>
                                                        </div>

                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">Date of Birth</label>
                                                        <input type="date" className="form-control" id="userDob" value={this.state.userDob} onChange={this.changeDobHandlter} />
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">User Name</label>
                                                        <input type="text" className="form-control" id="userName" placeholder="Enter User Name" value={this.state.userName} onChange={this.changeUserNamebHandlter} />
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
                                                        <label htmlFor="exampleInputEmail1">Contact Number</label>
                                                        <input type="number" className="form-control" id="userContactNumber" placeholder="Enter Contact Details" value={this.state.userContactNumber} onChange={this.changeContactHandlter} />
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">Email</label>
                                                        <input type="email" className="form-control" id="userEmail" placeholder="Enter Email" value={this.state.userEmail} onChange={this.changeEmailHandlter} />
                                                    </div>

                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">Address</label>
                                                        <input type="text" className="form-control" id="userAddress" placeholder="Enter Address" value={this.state.userAddress} onChange={this.changeAddressbHandlter} />
                                                    </div>
                                                   
                                                    <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Please Select Role</label>
                                                        <select className="form-control" id="role" name="role" value={this.state.role} onChange={this.changerolebHandlter}>
                                                            <option value="">Please Select Role</option>
                                                                                                        
                                                            <option value=""></option>
 
                                                        </select>

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
                                    <button type="submit" className="btn btn-warning" onClick={this.updateUser}>Update User</button>

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

export default UpdateUserComponent;
