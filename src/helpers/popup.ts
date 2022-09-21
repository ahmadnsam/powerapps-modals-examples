export class PopupHelper {
  static display = (modalObject: any, width, height, position) => {
    var pageInput: Xrm.Navigation.PageInputHtmlWebResource = {
      pageType: "webresource",
      webresourceName: "vite_/viteapps/pages/modals.html",
      data: JSON.stringify(modalObject),
    };
    var navigationOptions: Xrm.Navigation.NavigationOptions = {
      target: 2, // 2 is for opening the page as a dialog.
      width: width, // default is px. can be specified in % as well. 400
      height: height, // default is px. can be specified in % as well. 500
      position: position, // Specify 1 to open the dialog in center; 2 to open the dialog on the side. Default is 1 (center). 1
      title: "Record activation modal", //recommended to enter title here
    };
    Xrm.Navigation.navigateTo(pageInput, navigationOptions).then(
      function success(returnedValues) {
        console.log(returnedValues);
      },
      function error(e) {
        // Handle errors
      }
    );
  };
}
