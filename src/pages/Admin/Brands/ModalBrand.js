import { Form, Input, Modal } from "antd";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { rules,layout } from "../../../common/form";
import { addBrand, editBrand  } from "../../../apis/brandApi";
import { actGetAllBrand } from "../../../redux/actions/brandAction";
import { useDispatch } from "react-redux";

export default function ModalBrand(props) {
  const { isModalVisible, setIsModalVisible, modalTitle, brandEdit } = props;
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const handleSubmit = async (brand) => {
    if (modalTitle === "Add") {
      toast.success("Add Success", { autoClose: 1000 });
      await addBrand({ ...brand, dateAdd: new Date().getTime() });
      dispatch(actGetAllBrand());
      form.resetFields();
      setIsModalVisible(false);
    } else {
      toast.success("Edit success", { autoClose: 1000 });
      await editBrand(brand, brandEdit.id);
      dispatch(actGetAllBrand());

      setIsModalVisible(false);
    }
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    if (!isModalVisible) return;
    if (modalTitle === "Edit") {
      form.setFieldsValue(brandEdit);
    } else if (modalTitle === "Add") {
      form.resetFields();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModalVisible]);

  return (
    <Modal
      title={modalTitle === "Add" ? "Add Form" : "Edit Form"}
      visible={isModalVisible}
      onOk={() => form.submit()}
      onCancel={handleCancel}
    >
      <Form {...layout} form={form} onFinish={handleSubmit}>
        <Form.Item
          label="Name"
          name={["brandName"]}
          rules={[...rules.ruleProductName]}
        >
          <Input />
        </Form.Item>

        <Form.Item name={["image"]} label="Image" rules={[...rules.ruleImage]}>
          <Input />
        </Form.Item>

        <Form.Item name={["dateAdd"]} className="d-none">
          <Input type={"hidden"} />
        </Form.Item>
      </Form>
    </Modal>
  );
}
