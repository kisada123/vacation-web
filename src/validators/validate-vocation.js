import Joi from "joi";

const vacationSchema = Joi.object({
  typeOfLeave: Joi.string().trim().required().messages({
    "string.empty": "กรุณา ใส่ประเภท",
  }),
  department: Joi.string().trim().required().messages({
    "string.empty": "กรุณา ใส่แผนก",
  }),
  reason: Joi.string().trim().required().messages({
    "string.empty": "กรุณา เหตุผล",
  }),
  createdAt: Joi.string().trim().required().messages({
    "string.empty": "กรุณา วันที่เริ่มต้นลา",
  }),
  updatedAt: Joi.string().trim().required().messages({
    "string.empty": "กรุณา วันที่สิ้นสุดลา",
  }),
  type: Joi.string().trim().required().messages({}),
});

const vacationEditSchema = Joi.object({
  typeOfLeave: Joi.string().trim().required().messages({
    "string.empty": "กรุณา ใส่ประเภท",
  }),
  department: Joi.string().trim().required().messages({
    "string.empty": "กรุณา ใส่แผนก",
  }),
  reason: Joi.string().trim().required().messages({
    "string.empty": "กรุณา เหตุผล",
  }),
  createdAt: Joi.string().trim().required().messages({
    "string.empty": "กรุณา วันที่เริ่มต้นลา",
  }),
  updatedAt: Joi.string().trim().required().messages({
    "string.empty": "กรุณา วันที่สิ้นสุดลา",
  }),
  status: Joi.string().trim().required().messages({}),
  id: Joi.required().messages({}),
  userId: Joi.required().messages({}),
});

const validateVacation = (input) => {
  let error;
  if (input?.type === "create") {
    error = vacationSchema.validate(input, {
      abortEarly: false,
    });
  } else {
    error = vacationEditSchema.validate(input, {
      abortEarly: false,
    });
  }
  console.log("error", error);
  delete input.type;

  if (error) {
    console.log("a");
    console.log("error.datails", error.datails);
    const result = error?.details?.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
    console.log("b");
    return result;
  }
};

export default validateVacation;
