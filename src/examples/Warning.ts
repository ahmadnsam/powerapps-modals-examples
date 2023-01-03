export const WarningObject = {
  icon: "warning",
  labels: [
    { text: "Confirmation", type: "h1" },
    {
      text: "Are you sure you want to submit the record details?",
      type: "h2",
    },
  ],
  buttons: [
    {
      id: "button-cancel", //used to know what button was clicked, retunred with modal return object
      label: "No",
      cancel: true,
      type: "white", //blue //red
    },
    {
      id: "button-submit",
      label: "Yes",
      type: "blue",
    },
  ],
};
