import React from 'react';

import admin_routes from '../../../jasonData/admin_routes.json'
import './sidebar.css';
import {Link} from 'react-router-dom';

const SidebarItem = props => {
    const active = props.active ? 'active' : ''
    return (
        <div className="sidebar__item">
            <div className={`sidebar__item-inner ${active}`}>
                <i className={props.icon}></i>
                <span>
                    {props.title}
                </span>  
            </div>
        </div>
        )
}


const Sidebar = props => {
    const activeItem = admin_routes.findIndex(item=>item.route === props.location.pathname)
    return (
        <div className="sidebar">
            {
                admin_routes.map((item,index)=>(
                    <Link to={item.route} key={index}>
                        <SidebarItem
                        title={item.display_name}
                        icon ={item.icon}
                        active={index === activeItem}
                        />
                    </Link>
                ))
            }
        </div>
    )
}

export default Sidebar;