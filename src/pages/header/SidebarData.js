import React from 'react';
import * as FaIcons from 'react-icons/fa'
import * as IoIcons from 'react-icons/io'

export const SidebarData = [
    {
        title: 'Beranda',
        path: '/beranda',
        icon: <FaIcons.FaHome/>
    },
    {
        title: 'Master Produk',
        path: '/master-produk',
        icon: <IoIcons.IoIosPaper/>,
    },
    {
        title: 'Monitoring Produk',
        path: '/monitoring-produk',
        icon: <IoIcons.IoMdCalendar/>
    }
];