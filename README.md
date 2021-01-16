# NotificationJS
A simple library for handling web notifications. Check index.html for a demo.
## Examples
### Simple Notification
```sendNotification("Notification Title", "{}");```
### Options
You can set extra parameters using JSON. Each paramater is optional. Here is a list of parameters:
```{
    "body":"Body text",
    "icon":"https://openmoji.org/data/color/svg/1F643.svg",
    "dir":"ltr",
    "lang":"en",
    "requireInteraction":false,
    "silent":true
}```
Set the json as a JS variable and call it in the function:
```var notification_data = {};
sendNotification("Notification", notification_data)```
### Events
Events are handled using functions.
#### Notification Clicked
When a notification gets clicked, the function notificationClicked is called.
Example usage:
```function notificationClicked(e){
    e.preventDefault(); // Prevent the browser from focusing the notification's tab
    window.open('https://example.com', '_blank');
    closeNotification();
}```
#### Notification Shown
When a notification is shown, the function notificationShown is called.
Example usage:
```function notificationShown(){
    console.log('Notification shown');
}```
#### Notification Closed
When a notification is closed, the function notificationClosed is called.
Example usage:
```function notificationClosed(){
    console.log('Notification closed');
}```
