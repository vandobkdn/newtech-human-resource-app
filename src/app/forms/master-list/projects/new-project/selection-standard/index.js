import React from 'react';
import 'antd/dist/antd.css';
import { Button, Checkbox, Col, Collapse, DatePicker, Form, Input, Radio, Row, Select, Space } from 'antd';
import { Well } from '../../../../../components/common/Well';
import { ArrowRightOutlined } from '@ant-design/icons';

export const NewProjectSelectionStandard = () => {
  const handleChange = (value) => ({

  });

  return (<Well >
    <Form>
      <Form.Item>
        <Space>
          <Button type="primary" onClick={() => handleChange('all')}>{'Add'}</Button>
          <Button type="primary" onClick={() => handleChange('create')}>{'Edit'}</Button>
          <Button type="primary" danger onClick={() => handleChange('active')}>{'Delete'}</Button>
          <Button type="primary" ghost onClick={() => handleChange('finished')}>{'Cancel'}</Button>
          <Button type="primary" onClick={() => handleChange('finished')}>{'Submit'}</Button>
        </Space>
      </Form.Item>
      <Collapse onChange={() => ({})}>
        <Collapse.Panel header="Tiêu chuẩn lựa chọn" key="1">
          <Row>
            <Col span={24}>
              <p><b>{'Chọn 01 câu trả lời cho mỗi câu hỏi, nếu có bất kỳ câu trả lời ' +
              '"KHÔNG" nào, NTN không thể được chọn tham gia nghiên cứu.'}</b></p>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Row>
                <Col span={15}>
                  <p><b>{'1. '}</b>{'NTN khỏe mạnh có tuổi từ 18 - 50?'}</p>
                </Col>
                <Col span={8} offset={1}>
                  <Form.Item name="gender">
                    <Radio>Có</Radio>
                    <Radio>Không</Radio>
                    <Radio>KAD</Radio>
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={15}>
                  <p><b>{'2. '}</b>{'NTN có chỉ số cơ thể nằm trong khoảng 18 - 50 kg/m2'}</p>
                </Col>
                <Col span={8} offset={1}>
                  <Form.Item name="gender">
                    <Radio>Có</Radio>
                    <Radio>Không</Radio>
                    <Radio>KAD</Radio>
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={15}>
                  <p><b>{'3. '}</b>{'Cân nặng ít nhất là 44kg đối với nữ, 47kg đối với nam.'}</p>
                </Col>
                <Col span={8} offset={1}>
                  <Form.Item name="gender">
                    <Radio>Có</Radio>
                    <Radio>Không</Radio>
                    <Radio>KAD</Radio>
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={15}>
                  <p><b>{'4. '}</b>{'Huyết áp tâm thu 100 - 140 mmHg và tâm trương 60 - 90 mmHg.'}</p>
                </Col>
                <Col span={8} offset={1}>
                  <Form.Item name="gender">
                    <Radio>Có</Radio>
                    <Radio>Không</Radio>
                    <Radio>KAD</Radio>
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={16}>
                  <p><b>{'5. '}</b>{'Nhịp tim đều, tần số trong khoảng từ 60 lần tới 90 lần/phút.'}</p>
                </Col>
                <Col span={8}>
                  <Form.Item name="gender">
                    <Radio>Có</Radio>
                    <Radio>Không</Radio>
                    <Radio>KAD</Radio>
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={15}>
                  <p><b>{'6. '}</b>{'Không nghiện rượu, thuốc lá, không sử dụng chất gây nghiện.'}</p>
                </Col>
                <Col span={8} offset={1}>
                  <Form.Item name="gender">
                    <Radio>Có</Radio>
                    <Radio>Không</Radio>
                    <Radio>KAD</Radio>
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={15}>
                  <p><b>{'7. '}</b>{'Không có tiền sử bệnh và hiện tại không mắc các bệnh cao huyết áp, ' +
                  'hạ huyết áp thể đứng, hạ đường huyết khi đối, khó nuốt, tiểu đường, ' +
                  'bệnh về tim mạch, hô hấp, tiêu hóa, suy giảm chức năng gan, thận, nội tiết, ' +
                  'hệ thần kinh hoặc bệnh tâm thần, miễn dịch, huyết học, bệnh duy truyền, lao.'}</p>
                </Col>
                <Col span={8} offset={1}>
                  <Form.Item name="gender">
                    <Radio>Có</Radio>
                    <Radio>Không</Radio>
                    <Radio>KAD</Radio>
                  </Form.Item>
                </Col>
              </Row>
            </Col>
            <Col span={12}>
              <Row>
                <Col span={15}>
                  <p><b>{'8. '}</b>{'Không có tiền sử bị dị ứng với thuốc nghiên cứu hoặc các thuốc tương tư.'}</p>
                </Col>
                <Col span={8} offset={1}>
                  <Form.Item name="gender">
                    <Radio>Có</Radio>
                    <Radio>Không</Radio>
                    <Radio>KAD</Radio>
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={15}>
                  <p><b>{'9. '}</b>{'Nếu là phụ nữ, không đang thời kỳ có thai, không đang dự định có thai ' +
                  'hoặc không đang thời kỳ cho con bú.'}</p>
                </Col>
                <Col span={8} offset={1}>
                  <Form.Item name="gender">
                    <Radio>Có</Radio>
                    <Radio>Không</Radio>
                    <Radio>KAD</Radio>
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={15}>
                  <p><b>{'10. '}</b>{'Không đang mắc các bệnh nhiễm trùng.'}</p>
                </Col>
                <Col span={8} offset={1}>
                  <Form.Item name="gender">
                    <Radio>Có</Radio>
                    <Radio>Không</Radio>
                    <Radio>KAD</Radio>
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={15}>
                  <p><b>{'11. '}</b>{'Xét nghiệm HIV/AIDS, HBsAg, anti-HCV âm tính.'}</p>
                </Col>
                <Col span={8} offset={1}>
                  <Form.Item name="gender">
                    <Radio>Có</Radio>
                    <Radio>Không</Radio>
                    <Radio>KAD</Radio>
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={15}>
                  <p><b>{'12. '}</b>{'Theo ý kiến của bác sĩ lâm sàng, NTN có đủ sức khỏe dựa trên dấu ' +
                  'hiệu sinh tồn, tiền sử bệnh, và kết quả xét nghiệm.'}</p>
                </Col>
                <Col span={8} offset={1}>
                  <Form.Item name="gender">
                    <Radio>Có</Radio>
                    <Radio>Không</Radio>
                    <Radio>KAD</Radio>
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={15}>
                  <p><b>{'13. '}</b>{'NTN đã ký và ghi ngày giấy chấp thuận tham gia nghiên cứu trước ' +
                  'khi tham gia đề tài?'}</p>
                </Col>
                <Col span={8} offset={1}>
                  <Form.Item name="gender">
                    <Radio>Có</Radio>
                    <Radio>Không</Radio>
                    <Radio>KAD</Radio>
                  </Form.Item>
                </Col>
              </Row>
            </Col>
          </Row>
        </Collapse.Panel>
        <Collapse.Panel header="Tiêu  chuẩn  loại bỏ" key="2">
          <Row>
            <Col span={24}>
              <p><b>{'Chọn 01 câu trả lời cho mỗi câu hỏi, nếu có bất kỳ câu trả lời ' +
              '"KHÔNG" nào, NTN không thể được chọn tham gia nghiên cứu.'}</b></p>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Row>
                <Col span={15}>
                  <p><b>{'1. '}</b>{'Kết quả xét nghiệm có các chỉ số vượt ngoài ' +
                  'giới hạn bình thường có ý nghĩa về mặt lâm sàng.'}</p>
                </Col>
                <Col span={8} offset={1}>
                  <Form.Item name="gender">
                    <Radio>Có</Radio>
                    <Radio>Không</Radio>
                    <Radio>KAD</Radio>
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={15}>
                  <p><b>{'2. '}</b>{'Bị bệnh nặng 8 tuần trước khi tham gia uống thuốc nghiên cứu.'}</p>
                </Col>
                <Col span={8} offset={1}>
                  <Form.Item name="gender">
                    <Radio>Có</Radio>
                    <Radio>Không</Radio>
                    <Radio>KAD</Radio>
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={15}>
                  <p><b>{'3. '}</b>{'Mới tình nguyện hiến máu hoặc tham gia các thử nghiệm lâm ' +
                  'sàng khác trong vòng 3 tháng trước khi tham gia uống thuốc nghiên cứu.'}</p>
                </Col>
                <Col span={8} offset={1}>
                  <Form.Item name="gender">
                    <Radio>Có</Radio>
                    <Radio>Không</Radio>
                    <Radio>KAD</Radio>
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={15}>
                  <p><b>{'4. '}</b>{'Không tình nguyện tham gia nghiên cứu.'}</p>
                </Col>
                <Col span={8} offset={1}>
                  <Form.Item name="gender">
                    <Radio>Có</Radio>
                    <Radio>Không</Radio>
                    <Radio>KAD</Radio>
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={16}>
                  <p><b>{'5. '}</b>{'Không chấp nhận tuân theo các tiến trình nghiên cứu.'}</p>
                </Col>
                <Col span={8}>
                  <Form.Item name="gender">
                    <Radio>Có</Radio>
                    <Radio>Không</Radio>
                    <Radio>KAD</Radio>
                  </Form.Item>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <p><b>{'Kết luận về khả năng tham gia nghiên cứu của người tình nguyện.'}</b></p>
            </Col>
          </Row>
          <Row>
            <Col span={7}>
              <Form.Item name="gender">
                <Checkbox >{'Không đủ điều kiện và không được chấp thuận tham gia nghiên cứu.'}</Checkbox>
              </Form.Item>
            </Col>
            <Col span={1}>
              <Form.Item >
                <ArrowRightOutlined />
              </Form.Item>
            </Col>
            <Col span={11}>
              <Form.Item  label="Lý do">
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={7}>
              <Form.Item name="gender">
                <Checkbox >{'Đủ điều kiện và được chấp thuận tham gia nghiên cứu.'}</Checkbox>
              </Form.Item>
            </Col>
            <Col span={1}>
              <Form.Item >
                <ArrowRightOutlined />
              </Form.Item>
            </Col>
            <Col span={11}>
              <Form.Item  label="Mã số">
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={7}>
              <Form.Item name="gender">
                <Checkbox >{'Đủ điều kiện và được cho vào nhóm dự bị.'}</Checkbox>
              </Form.Item>
            </Col>
            <Col span={1}>
              <Form.Item >
                <ArrowRightOutlined />
              </Form.Item>
            </Col>
            <Col span={11}>
              <Form.Item  label="Mã số dự bị">
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={7}>
              <Form.Item label="NTN bỏ cuộc" name="gender">
                <Checkbox >{'Có'}</Checkbox>
                <Checkbox >{'Không'}</Checkbox>
              </Form.Item>
            </Col>
            <Col span={1}>
              <Form.Item >
                <ArrowRightOutlined />
              </Form.Item>
            </Col>
            <Col span={11}>
              <Form.Item  label="Ghi chú">
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={3}>
              <Form.Item label="Ngày" name="gender">
                <DatePicker />
              </Form.Item>
            </Col>
            <Col span={15} offset={1}>
              <Form.Item  label="Nghiên cứu viên chính">
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </Collapse.Panel>
      </Collapse>
    </Form>
  </Well>);
};


