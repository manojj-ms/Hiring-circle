import React from 'react';
import { TabBar } from 'antd-mobile';
import { useHistory, useLocation } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiHome, mdiAccountGroup, mdiArchive, mdiStarSettings, mdiAccountEdit } from '@mdi/js';

const TabLayout = ({ children }) => {

    const history = useHistory();
    const location = useLocation();

    return (
        <div className="h-screen">
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#8E24AA"
                barTintColor="white"
            >
                <TabBar.Item
                    title="Home"
                    key="home"
                    selected={location.pathname === "/employer/home"}
                    icon={<Icon path={mdiHome} size={1}/>}
                    selectedIcon={<Icon path={mdiHome} size={1}/>}
                    onPress={() => history.push('/employer/home')}
                >
                    {children}
                </TabBar.Item>
                <TabBar.Item
                    title="Employees"
                    key="employees"
                    selected={location.pathname === "/employer/employees"}
                    icon={<Icon path={mdiAccountGroup} size={1}/>}
                    selectedIcon={<Icon path={mdiAccountGroup} size={1}/>}
                    onPress={() => history.push('/employer/employees')} 
                >
                    {children}
                </TabBar.Item>
                <TabBar.Item
                    title="Jobs"
                    key="jobs"
                    selected={location.pathname === "/employer/jobs"}
                    icon={<Icon path={mdiArchive} size={1}/>}
                    selectedIcon={<Icon path={mdiArchive} size={1}/>}
                    onPress={() => history.push('/employer/jobs')}
                >
                    {children}
                </TabBar.Item>
                <TabBar.Item
                    title="Reviews"
                    key="reviews"
                    selected={location.pathname === "/employer/reviews"}
                    icon={<Icon path={mdiStarSettings} size={1}/>}
                    selectedIcon={<Icon path={mdiStarSettings} size={1}/>}
                    onPress={() => history.push('/employer/reviews')}
                >
                    {children}
                </TabBar.Item>
                <TabBar.Item
                    title="Profile"
                    key="profile"
                    selected={location.pathname === "/employer/profile"}
                    icon={<Icon path={mdiAccountEdit} size={1}/>}
                    selectedIcon={<Icon path={mdiAccountEdit} size={1}/>}
                    onPress={() => history.push('/employer/profile')}
                >
                    {children}
                </TabBar.Item>
            </TabBar>
        </div>
    )
}

export default TabLayout;