import React from 'react';
import { Button, Space } from 'antd';
import { MysqlFieldItem, MysqlFieldTable, MysqlFieldTableRef } from 'antd-mysql';

const DuoPage: React.FC<{ title: string }> = (props) => {
  const [value, setValue] = React.useState<MysqlFieldItem[]>([{
    name: 'id',
    type: 'int',
    size: 10,
    key: true,
    comment: 'ID',
    nullable: false,
  }]);
  const ref = React.useRef<MysqlFieldTableRef | undefined>();
  return <div>
    <MysqlFieldTable ref={ref} defaultValue={value} onChange={value => {
      setValue(value);
      console.log(value);
    }} />
    <div style={{ marginTop: 16 }}>
      <Space>
        <Button onClick={_ => {
          console.log(ref.current?.data);
        }}>获取数据</Button>
        <Button onClick={_ => {
          ref.current?.add();
        }}>新增数据</Button>
      </Space>
    </div>
    <div>
      {JSON.stringify(value)}
    </div>

  </div>;
};

export default DuoPage;
