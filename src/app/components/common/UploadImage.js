import React, {useState} from 'react';
import {Modal, Upload} from 'antd';
import ImgCrop from 'antd-img-crop';
import '../../index.scss'

const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

export const UploadImage = ({ label }) => {
  const [fileList, setFileList] = useState([]);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewTitle, setPreviewTitle] = useState('');
  const [previewImage, setPreviewImage] = useState(null);

  const onChange = ({fileList: newFileList}) => {
    setFileList(newFileList);
  };

  const onPreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
      setPreviewTitle(file.name);
      setPreviewImage(file.preview);
      setPreviewVisible(true);
    }
  };

  return (
    <div className={'component upload-image'}>
      <span>{label}</span>
      <ImgCrop rotate>
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          fileList={fileList}
          onChange={onChange}
          onPreview={onPreview}
        >
          {fileList.length < 1 && <img alt="Icon" height={64} width={64} src={require("../../icons/camera.svg")?.default} />}
        </Upload>
      </ImgCrop>
      <Modal
        visible={previewVisible}
        title={previewTitle}
        footer={null}
        onCancel={() => setPreviewVisible(false)}
      >
        <img style={{ width: '100%' }} src={previewImage}/>
      </Modal>
    </div>
  );
};
