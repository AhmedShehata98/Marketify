import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);

export const schema = Yup.object({
  "full-name": Yup.string().required(),
  email: Yup.string().email(),
  "confirm-email": Yup.string().oneOf([Yup.ref("confirm-email")]),
  password: Yup.string().password().required(),
  "confirm-password": Yup.string()
    .password()
    .required()
    .oneOf([Yup.ref("confirm-password")]),
  "phone-number": Yup.number().required(),
  username: Yup.string().required(),
});
