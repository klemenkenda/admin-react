// react
import React, { Component } from 'react';


class Menu extends Component {
    render() {
        return(
            <aside id="aside">
            <nav id="sideNav">
                <ul className="nav nav-list">
                    <li className="active">
                        <a className="dashboard" href="index.html">
                            <i className="main-icon fa fa-dashboard"></i> <span>Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-menu-arrow pull-right"></i>
                            <i className="main-icon fa fa-bar-chart-o"></i> <span>Graphs</span>
                        </a>
                        <ul>
                            <li><a href="graphs-flot.html">Flot Charts</a></li>
                            <li><a href="graphs-morris.html">Morris Charts</a></li>
                            <li><a href="graphs-inline.html">Inline Charts</a></li>
                            <li><a href="graphs-chartjs.html">Chart.js</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-menu-arrow pull-right"></i>
                            <i className="main-icon fa fa-table"></i> <span>Tables</span>
                        </a>
                        <ul>
                            <li><a href="tables-bootstrap.html">Bootstrap Tables</a></li>
                            <li><a href="tables-jqgrid.html">jQuery Grid</a></li>
                            <li><a href="tables-footable.html">jQuery Footable</a></li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-menu-arrow pull-right"></i>
                                    Datatables
                                </a>
                                <ul>
                                    <li><a href="tables-datatable-managed.html">Managed Datatables</a></li>
                                    <li><a href="tables-datatable-editable.html">Editable Datatables</a></li>
                                    <li><a href="tables-datatable-advanced.html">Advanced Datatables</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-menu-arrow pull-right"></i>
                            <i className="main-icon fa fa-pencil-square-o"></i> <span>Forms</span>
                        </a>
                        <ul>
                            <li><a href="form-elements.html">Smarty Elements</a></li>
                            <li><a href="form-masked-inputs.html">Masked Inputs</a></li>
                            <li><a href="form-pickers.html">Pickers</a></li>
                            <li><a href="form-ui-sliders.html">UI Sliders</a></li>
                            <li><a href="form-validation.html">Validation Form</a></li>
                            <li><a href="form-html-editors.html">Html Editors</a></li>
                            <li><a href="form-autosuggest.html">Autosuggest</a></li>
                            <li><a href="form-x-editable.html">Form X-Editable</a></li>
                            <li><a href="form-dropzone.html">Dropzone File Upload</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-menu-arrow pull-right"></i>
                            <i className="main-icon fa fa-gears"></i> <span>UI Features</span>
                        </a>
                        <ul>
                            <li><a href="ui-portlets.html">Portlets</a></li>
                            <li><a href="ui-buttons.html">Buttons</a></li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-menu-arrow pull-right"></i>
                                    Icons
                                </a>
                                <ul>
                                    <li><a href="ui-icons-fontawsome.html">Fontawsome</a></li>
                                    <li><a href="ui-icons-etline.html">Et-Line Icons</a></li>
                                    <li><a href="ui-icons-glyphicons.html">Glyph Icons</a></li>
                                    <li><a href="ui-icons-flags.html">Flags</a></li>
                                </ul>
                            </li>
                            <li><a href="ui-alerts-dialogs.html">Alerts &amp; Dialogs</a></li>
                            <li><a href="ui-tabs-acordion-navs.html">Tabs, Acordion &amp; Navs</a></li>
                            <li><a href="ui-knob.html">Knob Circles</a></li>
                            <li><a href="ui-nestable.html">Nestable List</a></li>
                            <li><a href="ui-toastr.html">Toastr Notifications</a></li>
                            <li><a href="ui-modals.html">Modals</a></li>
                            <li><a href="ui-grid.html">Grid</a></li>
                            <li><a href="ui-google-maps.html">Google Maps</a></li>
                            <li><a href="ui-vector-maps.html">Vector Maps</a></li>
                            <li><a href="ui-essentials.html">Essentials</a></li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-menu-arrow pull-right"></i>
                                    <i className="fa fa-folder-open"></i>
                                    Deep Navigation
                                </a>
                                <ul>
                                    <li>
                                        <a href="#">
                                            3rd Level
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-menu-arrow pull-right"></i>
                                            <i className="fa fa-folder-open"></i>
                                            4rd Level
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    4th Level
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-menu-arrow pull-right"></i>
                                                    <i className="fa fa-folder-open"></i>
                                                    5th Level
                                                </a>
                                                <ul>
                                                    <li>
                                                        <a href="#">
                                                            5th level
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa fa-menu-arrow pull-right"></i>
                                                            <i className="fa fa-folder-open"></i>
                                                            6th level
                                                        </a>
                                                        <ul>
                                                            <li>
                                                                <a href="#">
                                                                    6th level
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    6th level
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-menu-arrow pull-right"></i>
                            <i className="main-icon fa fa-book"></i> <span>Pages</span>
                        </a>
                        <ul>
                            <li><a href="page-invoice.html">Invoice</a></li>
                            <li><a href="page-login.html">Login</a></li>
                            <li><a href="page-register.html">Register</a></li>
                            <li><a href="page-lock.html">Lock Screen</a></li>
                            <li><a href="page-forum.html">Forum</a></li>
                            <li><a href="page-404.html">Error 404</a></li>
                            <li><a href="page-500.html">Error 500</a></li>
                            <li><a href="page-pricing.html">Pricing Table</a></li>
                            <li><a href="page-search.html">Search Result</a></li>
                            <li><a href="page-sidebar.html">Sidebar Page</a></li>
                            <li><a href="page-user-profile.html">User Profile</a></li>
                            <li><a href="page-blank-1.html">Blank Page</a></li>
                        </ul>
                    </li>
                </ul>

                <h3>MORE</h3>
                <ul className="nav nav-list">
                    <li>
                        <a href="calendar.html">
                            <i className="main-icon fa fa-calendar"></i>
                            <span className="label label-warning pull-right">2</span> <span>Calendar</span>
                        </a>
                    </li>
                    <li>
                        <a href="../../HTML_BS4/start.html">
                            <i className="main-icon fa fa-link"></i>
                            <span className="label label-danger pull-right">PRO</span> <span>Frontend</span>
                        </a>
                    </li>
                </ul>

            </nav>

            <span id="asidebg"></span>
        </aside>
        )
    }
}

export default Menu;