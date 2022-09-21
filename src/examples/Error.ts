export const ErrorObject = {
  icon: "error", //warning //error
  labels: [
    { text: "Error", type: "h1" },
    {
      text: "You can't deactivate the record without entering the record type",
      type: "h2",
    },
  ],
  inputs: [
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
      type: "white", //blue //red
    },
    {
      id: "button-submit",
      label: "Deactivate",
      type: "red",
    },
  ],
};
