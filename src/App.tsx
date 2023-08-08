import React from 'react';
import { AppstoreOutlined, BarsOutlined,HistoryOutlined } from '@ant-design/icons';
import { Segmented } from 'antd';
 
function App() {
 return (
  <Segmented
    block
    onChange={(value)=>{
        alert(value)
    }}
    options={[
      {
        label: 'List',
        value: 'List',
        icon: <BarsOutlined />,
      },
      {
        label: 'Kanban',
        value: 'Kanban',
        icon: <AppstoreOutlined />,
      },
      {
        label: 'History',
        value: 'Hisotry',
        icon: <HistoryOutlined />,
      },
    ]}
  />
 );
}
 
export default App;

