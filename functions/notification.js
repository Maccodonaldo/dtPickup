// This registration token comes from the client FCM SDKs.
var registrationToken = deviceToken;
var routeID = active_routeID;


// See the "Defining the message payload" section below for details
// on how to define a message payload.
// Send a message to the device corresponding to the provided
// registration token.
admin.messaging().sendToDevice(registrationToken, routeID)
  .then(function(response) {
    // See the MessagingDevicesResponse reference documentation for
    // the contents of response.
    console.log("Successfully sent message:", response);
  })
  .catch(function(error) {
    console.log("Error sending message:", error);
  });
