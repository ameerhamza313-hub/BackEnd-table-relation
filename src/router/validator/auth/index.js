import joi from "joi";
const authValidator = {
  signIn: (req, res, next) => {
    const schema = joi.object({
      email: joi.string().email().required(),
      password: joi.string().min(5).max(10).uppercase(1).numeric(1).required(),
    });
    const { error, value } = schema.validate(req.body);
    if(password !== min()){
        res.json({message:"password must be greater then 5 "});
    }
    if (error) {
      res.status(400).json({ message: "invalid data", error });
    }
    next();
  },
};

export default authValidator;
