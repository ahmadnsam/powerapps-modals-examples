import { ErrorObject } from "../examples/Error";
import { MultiSelectObject } from "../examples/MultiSelect";
import { RequiredInputObject } from "../examples/RequiredInputs";
import { SideObject } from "../examples/Side";
import { SuccessObject } from "../examples/Success";
import { WarningObject } from "../examples/Warning";
import { PopupHelper } from "../helpers/popup";

export class ContactForm {
  static onSuccess() {
    PopupHelper.display(SuccessObject, 400, 400, 1);
  }
  static onWarning() {
    PopupHelper.display(WarningObject, 400, 300, 1);
  }
  static onError() {
    PopupHelper.display(ErrorObject, 400, 500, 1);
  }
  static onSide() {
    PopupHelper.display(SideObject, 400, "100%", 2);
  }
  static required() {
    PopupHelper.display(RequiredInputObject, 400, 400, 1);
  }
  static multi() {
    PopupHelper.display(MultiSelectObject, 400, 400, 1);
  }
}
