import { Table } from "antd";
import { useEffect, useState } from "react";
import { getUserApi } from "../util/api";
const UserPage = () => {
    const [dataSource, setDataSource] = useState([]);
    useEffect(()=> {
        const fetchUser = async() => {
            const res = await getUserApi();
            if(res){
                setDataSource(res)
            }
        }
        fetchUser();
    }, [])

    // const dataSource = [
    //     {
    //         "_id": "68104350ace44072c48f2789",
    //         "name": "tranlocal",
    //         "email": "donaweb@gmail.com",
    //         "role": "Donaweb",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "6814922e7d651cbe7b080cdb",
    //         "name": "tranlocal2",
    //         "email": "tttt2@gmail.com",
    //         "role": "Donaweb",
    //         "__v": 0
    //     }
    //   ];
      
      const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
        },
        {
          title: 'Email',
          dataIndex: 'email',
        },
        {
          title: 'Name',
          dataIndex: 'name',
        },
        {
          title: 'Role',
          dataIndex: 'role',
        }
      ];
      
    
    return (
        <div style={{ padding: 30 }}>
            <Table
                bordered
                dataSource={dataSource} columns={columns} 
                rowKey={"_id"}
                />
                
        </div>
    )
}

export default UserPage;