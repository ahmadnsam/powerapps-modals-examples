export const SideObject = {
  icon: "success",
  labels: [
    { text: "Great!", type: "h1" },
    {
      text: "Enter details here",
      type: "h2",
    },
  ],
  inputs: [
    {
      id: "choiceexample",
      label: "Category",
      type: "choice",
      options: [
        { id: "opt1", label: "Customer" },
        { id: "opt2", label: "Prospect" },
        { id: "opt3", label: "Partner" },
      ],
    },
    {
      id: "customername", //used to get the value when the modal object is returned
      label: "Customer Name",
    },
    {
      id: "customeremail",
      label: "Customer Email",
    },
    {
      id: "radioexample",
      label: "Type",
      type: "radio",
      options: [
        { id: "opt1", label: "One time" },
        { id: "opt2", label: "Regular" },
        { id: "opt3", label: "Premium" },
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
