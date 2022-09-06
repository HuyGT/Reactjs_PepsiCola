import { Form, Input, InputNumber, Modal, Select } from "antd";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { rules,layout } from "../../../common/form";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, editProduct } from "../../../apis/productApi";
import { actGetAllProduct } from "../../../redux/actions/productAction";

export default function ModalProduct(props) {
  const { isModalVisible, setIsModalVisible, modalTitle, proEdit } = props;
  const { listBrand } = useSelector((state) => state?.brandReducer);
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const handleSubmit = async (pro) => {
    if (modalTitle === "Add") {
      toast.success("Add Success", { autoClose: 1000 });
      await addProduct({ ...pro, dateAdd: new Date().getTime(), sold:0 });
      dispatch(actGetAllProduct());
      form.resetFields();
      setIsModalVisible(false);
    } else {
      toast.success("Edit success", { autoClose: 1000 });
      await editProduct(pro, proEdit.id);
      dispatch(actGetAllProduct());
      setIsModalVisible(false);
    }
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    if (!isModalVisible) return;
    if (modalTitle === "Edit") {
      form.setFieldsValue(proEdit);
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
          name={["productName"]}
          rules={[...rules.ruleProductName]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Price" name={["price"]} rules={[...rules.rulePrice]}>
          <InputNumber min={0.1} max={100}  stringMode/>
        </Form.Item>
        <Form.Item
          label="Quantity"
          name={["quantity"]}
          rules={[...rules.ruleQuantity]}
        >
          <InputNumber min={1} max={10000000} />
        </Form.Item>


        <Form.Item
          name={["brandId"]}
          label="Brand"
          rules={[...rules.ruleBrand]}
        >
          <Select placeholder="Please select a brand">
            {listBrand.map((brand) => {
              return (
                <Select.Option value={brand.id} key={brand.id}>
                  {brand.brandName}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item
          label="Description"
          name={["description"]}
          rules={[...rules.ruleDescription]}
        >
          <Input />
        </Form.Item>
        <Form.Item name={["image"]} label="Image" rules={[...rules.ruleImage]}>
          <Input />
        </Form.Item>

        <Form.Item name={["sold"]} className="d-none">
          <Input type={"hidden"} />
        </Form.Item>
        <Form.Item name={["dateAdd"]} className="d-none">
          <Input type={"hidden"} />
        </Form.Item>
      </Form>
    </Modal>
  );
}
