import joi from "joi";

const authValidator = {
  signUp: (req, res, next) => {
    const schema = joi.object({
      firstName: joi.string().required(),
      lastName: joi.string().required(),
      email: joi.string().email().required(),
      password: joi.string().min(3).max(10).required(),
    });
    const { error, value } = schema.validate(req.body);

    if (error) {
      // console.log("validation error",error.details)

      return res.status(400).json({ message: "validation error", error });
    }

    console.log(" Validate successfully");
    next();
  },

  signIn: (req, res, next) => {
    const schema = joi.object({
      email: joi.string().email().required(),
      password: joi.string().required(),
    });
    const { error, value } = schema.validate(req.body);

    if (error) {
      return res.status(400).json({ message: "invalid credential", error });
    }
    next();
  },
};

export default authValidator;
