export const layout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 20,
    },
  },
};

export const rules = {
  rulePayment: [
    {
      required: true,
      message: "Please choose payment method!",
    },
  ],
  rulePhone: [
    {
      required: true,
      message: "Please input your phone!",
    },
  ],

  ruleBrand: [
    {
      required: true,
      message: "Please input brand name!",
    },
  ],
  ruleProductName: [
    {
      required: true,
      message: "Please input product name!",
    },
  ],
  rulePrice: [
    {
      required: true,
      message: "Please input price!",
    },
  ],
  ruleSales: [
    {
      required: true,
      message: "Please input sales!",
    },
  ],
  ruleQuantity: [
    {
      required: true,
      message: "Please input quantity!",
    },
  ],
  ruleDescription: [
    {
      required: true,
      message: "Please input description!",
    },
  ],
  ruleImage: [
    {
      required: true,
      message: "Please input image!",
    },
  ],
  ruleEmail: [
    {
      required: true,
      message: "Please input email!",
    },
    {
      type: "email",
      message: "Please input valid email",
    },
  ],
  ruleFullName: [
    {
      required: true,
      message: "Please input full name!",
    },
  ],
  rulePassword: [
    {
      required: true,
      message: "Please input password!",
    },
  ],
  ruleRole: [
    {
      required: true,
      message: "Please input role!",
    },
  ],
  ruleSize: [
    {
      required: true,
      message: "Please select size!",
      type: "array",
    },
  ],
  ruleColor: [
    {
      required: true,
      message: "Please select color!",
      type: "array",
    },
  ],
  ruleGender: [
    {
      required: true,
      message: "Please select gender!",
    },
  ],
  ruleAddress: [
    {
      required: true,
      message: "Please input address!",
    },
  ],
  ruleRate: [
    {
      required: true,
      message: "Please choose star!",
    },
  ],
};
