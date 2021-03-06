import React from 'react';
import Nav from '../common/Nav';

const Admin = ({ role }) => {
    const links = [
        {
            id: 1,
            href: "/dashboard",
            name: "Home",
            side: "left"
        },
        {
            id: 2,
            href: "/list-users",
            name: "List users",
            side: "left"
        },
        {
            id: 3,
            href: "/loan-requests",
            name: "Loan requests",
            side: "left"
        }
    ]

    return (
        <React.Fragment>
            <Nav links={links}/>
            {role}
        </React.Fragment>
    );
};

export default Admin;