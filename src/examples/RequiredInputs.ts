export const RequiredInputObject = {
  icon: "success",
  labels: [
    { text: "Published!", type: "h1" },
    {
      text: "Your record is published, please identify the category",
      type: "h2",
    },
  ],
  inputs: [
    {
      id: "choiceexample",
      label: "Category",
      type: "choice",
      required: true,
      errorMessage: "Custom error message here!",
      options: [
        { id: "opt1", label: "Customer" },
        { id: "opt2", label: "Prospect" },
        { id: "opt3", label: "Partner" },
      ],
    },
  ],
  buttons: [
    {
      id: "button-cancel", //used to know what button was clicked, retunred with modal return object
      label: "Cancel",
      cancel: true,
      type: "white", //blue //red
    },
    {
      id: "button-submit",
      label: "Submit",
      type: "blue",
    },
  ],
};
