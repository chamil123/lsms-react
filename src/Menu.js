import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
class Menu extends Component {
    constructor(props) {
        super(props)

        this.addCustomer = this.addCustomer.bind(this);
        this.addSupplier = this.addSupplier.bind(this);
    }
    addCustomer() {
        this.props.history.push('/add-customer');
    }
    addSupplier() {
        this.props.history.push('/add-supplier');
    }
    render() {
        return (
            <div>

                <aside className="main-sidebar sidebar-dark-primary elevation-4">
                    {/* Brand Logo */}
                    <a href="index3.html" className="brand-link">
                        <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                        <span className="brand-text font-weight-light">LSMS</span>
                    </a>
                    {/* Sidebar */}
                    <div className="sidebar">
                        {/* Sidebar user panel (optional) */}
                        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                            <div className="image">
                                <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                            </div>
                            <div className="info">
                                <a href="#" className="d-block">Test User</a>
                            </div>
                        </div>
                        {/* Sidebar Menu */}
                        <nav className="mt-2">
                            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
                                <li className="nav-item has-treeview menu-open">
                                    <a href="#" className="nav-link active">
                                        <i className="nav-icon fas fa-tachometer-alt" />
                                        <p>
                                            Dashboard
              {/* <i className="right fas fa-angle-left" /> */}
                                        </p>
                                    </a>

                                </li>
                                {/* <li className="nav-item">
                                    <a href="pages/widgets.html" className="nav-link">
                                        <i className="nav-icon fas fa-th" />
                                        <p>
                                            Widgets
              <span className="right badge badge-danger">New</span>
                                        </p>
                                    </a>
                                </li> */}

                                <li className="nav-item has-treeview">
                                    
                                    <a href="#" className="nav-link">

                                        <i className="nav-icon fas fa-copy" />
                                        <p>Customer Management<i className="fas fa-angle-left right" />
                                        <span className="badge badge-info right"></span>
                                        </p>

                                    </a>

                                    

                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                        <Link to="/customer"  className="nav-link">
                                            {/* <a href="pages/layout/top-nav.html" className="nav-link"> */}
                                                <i className="far fa-circle nav-icon" />
                                                <p>View customers</p>
                                            {/* </a> */}
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                        <Link to="/add-customer"  className="nav-link">
                                            {/* <a href={this.addCustomer} onClick={this.addCustomer} className="nav-link"> */}
                                                <i className="far fa-circle nav-icon" />
                                                <p>Add customer</p>
                                            {/* </a> */}
                                            </Link>
                                        </li>

                                        


                                        
                                        


                                        



                                        {/* <li className="nav-item">
                                            <a href="pages/layout/boxed.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Boxed</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/layout/fixed-sidebar.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Fixed Sidebar</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/layout/fixed-topnav.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Fixed Navbar</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/layout/fixed-footer.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Fixed Footer</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/layout/collapsed-sidebar.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Collapsed Sidebar</p>
                                            </a>
                                        </li> */}
                                    </ul>
                                </li>


                                <li className="nav-item has-treeview">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-chart-pie" />
                                        <p>Supplier Management<i className="right fas fa-angle-left" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="pages/charts/chartjs.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Add Supplier</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/charts/flot.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>View Supplier</p>
                                            </a>
                                        </li>
                                       
                                    </ul>
                                </li> 
                                <li className="nav-item has-treeview">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-tree" />
                                        <p>User Management<i className="fas fa-angle-left right" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="pages/UI/general.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Add User</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/UI/icons.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>View User</p>
                                            </a>
                                        </li>
                                        {/* <li className="nav-item">
                                            <a href="pages/UI/buttons.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Buttons</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/UI/sliders.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Sliders</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/UI/modals.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Modals &amp; Alerts</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/UI/navbar.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Navbar &amp; Tabs</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/UI/timeline.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Timeline</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/UI/ribbons.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Ribbons</p>
                                            </a>
                                        </li> */}
                                    </ul>
                                </li> 
                                <li className="nav-item has-treeview">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-edit" />
                                        <p>Property Management<i className="fas fa-angle-left right" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="pages/forms/general.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Add Property</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/forms/advanced.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>View Property</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/forms/editors.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Editors</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/forms/validation.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Validation</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item has-treeview">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-table" />
                                        <p>Expense Management<i className="fas fa-angle-left right" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="pages/tables/simple.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Simple Tables</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/tables/data.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>DataTables</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/tables/jsgrid.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>jsGrid</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item has-treeview">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-table" />
                                        <p>Agents & Sales Rep<i className="fas fa-angle-left right" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="pages/tables/simple.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Add Agent & Sales Rep</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/tables/data.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>View Sales Rep</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/tables/jsgrid.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>View Agents</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li> 

                                <li className="nav-item has-treeview">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-table" />
                                        <p>Invoicing<i className="fas fa-angle-left right" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="pages/tables/simple.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Make Invoice</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/tables/data.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>View Invoice</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/tables/jsgrid.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>View Agents</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>   




                                <li className="nav-header">EXAMPLES</li>
                                <li className="nav-item">
                                    <a href="pages/calendar.html" className="nav-link">
                                        <i className="nav-icon fas fa-calendar-alt" />
                                        <p>
                                            Calendar
              <span className="badge badge-info right">2</span>
                                        </p>
                                    </a>
                                </li> 








                            </ul>
                        </nav>
                        {/* /.sidebar-menu */}
                    </div>
                    {/* /.sidebar */}
                </aside>


            </div>
        );
    }
}

export default Menu;