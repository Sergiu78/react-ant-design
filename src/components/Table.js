import { Table, Typography, Image } from 'antd'
import {pokemons} from '../data'

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <Typography.Text copyable>{text}</Typography.Text>,
    },
    {
      title: 'Number',
      dataIndex: 'number',
      key: 'number',
    },
    {
      title: 'Class',
      dataIndex: 'classification',
      key: 'class',
      filters: [
          {
            text: 'Seed Pakemon',
            value: 'Seed Pakemon'
          },
          {
              text: 'Poison Pin Pokemon',
              value: 'Poison Pin Pokemon'
          },
          {
            text: 'Lizard Pakemon',
            value: 'Lizard Pakemon'
        },
         
      ],
      onFilter: (value, item) => item.classification.includes(value)
    },
    {
        title: 'Rate',
        dataIndex: 'fleeRate',
        key: 'fleeRate',
        sorter: (a, b) => a.fleeRate - b.fleeRate,
      },
      {
        title: 'Image',
        dataIndex: 'image',
        key: 'image',
        render: (image) => <Image src={image} alt="pokemon" width={150}/>
      },
  ];

  const dataSource = pokemons.map(item => ({ ...item, key: item.id}))

const _Table = () => {
    return (
        <div>
            <Table 
            dataSource={dataSource} 
            columns={columns}
            pagination={{
                defaultpageSize: '4',
                showSizeChanger: true,
                pageSizeOptions: [2,4,6],
            }} />;
        </div>
    )
}

export default _Table