import Joi from "joi";

const RegisterSchema = Joi.object({
  firstName: Joi.string().trim().required().messages({
    "string.empty": "กรุณา ใส่ชื่อ",
  }),
  lastName: Joi.string().trim().required().messages({
    "string.empty": "กรุณา ใส่นามสกุล",
  }),
  username: Joi.string().trim().required().messages({
    "string.empty": "กรุณา ใส่ชื่อเล่น",
  }),
  email: Joi.string().email({ tlds: false }).trim().messages({
    "string.empty": "กรุณา ใส่อีเมล",
  }),
  password: Joi.string().alphanum().min(6).trim().required().messages({
    "string.empty": "กรุณา ใส่รหัสผ่าน",
    "string.min": "กรุณา ใส่รหัสผ่าน 6 ตัวอักษร",
    "string.alphanum": "กรุณา ใส่รหัสผ่านตัวเลข หรือ ตัวอักษร",
  }),
  confirmPassword: Joi.string()
    .valid(Joi.ref("password"))
    .required()
    .trim()
    .messages({
      "any.only": "รหัสผ่านและยืนยันรหัสผ่านไม่ตรงกัน",
      "string.empty": "กรุณา ใส่ยืนยันรหัสผ่าน",
    }),
});

const validateRegister = (input) => {
  const { error } = RegisterSchema.validate(input, {
    abortEarly: false,
  });

  if (error) {
    const result = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
    return result;
  }
};

export default validateRegister;
