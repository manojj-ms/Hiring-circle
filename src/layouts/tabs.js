import React from 'react';
import { TabBar } from 'antd-mobile';
import { useHistory } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiHome } from '@mdi/js';

const TabLayout = ({ children }) => {

    const history = useHistory();

    return (
        <div className="h-screen">
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
                
            >
                <TabBar.Item
                    title="Home"
                    key="home"
                    selected={false}
                    icon={<Icon path={mdiHome} />}
                    selectedIcon={<Icon path={mdiHome} />}
                    onPress={() => history.push('/employer/home')}
                >
                    {children}
                </TabBar.Item>
                <TabBar.Item
                    title="Employees"
                    key="employees"
                    selected={false}
                    icon={<Icon path={mdiHome} />}
                    selectedIcon={<Icon path={mdiHome} />}
                    onPress={() => history.push('/employer/employees')}
                >
                    {children}
                </TabBar.Item>
                <TabBar.Item
                    title="Jobs"
                    key="jobs"
                    selected={false}
                    icon={<Icon path={mdiHome} />}
                    selectedIcon={<Icon path={mdiHome} />}
                    onPress={() => history.push('/employer/jobs')}
                >
                    {children}
                </TabBar.Item>
                <TabBar.Item
                    title="Reviews"
                    key="reviews"
                    selected={false}
                    icon={<Icon path={mdiHome} />}
                    selectedIcon={<Icon path={mdiHome} />}
                    onPress={() => history.push('/employer/reviews')}
                >
                    {children}
                </TabBar.Item>
                <TabBar.Item
                    title="Profile"
                    key="profile"
                    selected={false}
                    icon={<Icon path={mdiHome} />}
                    selectedIcon={<Icon path={mdiHome} />}
                    onPress={() => history.push('/employer/profile')}
                >
                    {children}
                </TabBar.Item>
            </TabBar>
        </div>
    )
}

export default TabLayout;