import {Col, Form, Input, Row} from 'antd'
import {FC} from 'react'

import { Button, SvgIcon } from '../../components/ui'
import './SubscribeForm.less'

const SubscribeForm: FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form form={form} name="control-hooks" onFinish={onFinish}>
      <Row className={'subscribe-form-content'}>
        <Col span={18}>
          <Form.Item name={'email'}>
            <Input
              placeholder={'Your email here'}
              prefix={<SvgIcon type={'email'} />}
            />
          </Form.Item>
        </Col>

        <Col span={6}>
          <Form.Item>
            <Button type={'primary'} htmlType={'submit'} onClick={onReset}>
              {'Subsribe Now'}
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}

export { SubscribeForm }
