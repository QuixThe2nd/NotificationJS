function initNotifications(){
    const close_notification_trigger = new Event('close_notification_trigger');
    if(!("Notification" in window)){
        return 'unsupported';
    }else if(Notification.permission === "granted" || Notification.permission === "denied"){
        return Notification.permission;
    }else{
        Notification.requestPermission().then(function (permission) {
            return permission;
        });
    }
}
function sendNotification(title, configobj){
    var config = JSON.parse(configobj);
    permission = initNotifications();
    if(permission == "granted"){
        var notification = new Notification(title, {
            body: config.body,
            icon: config.icon,
            dir: config.dir,
            lang: config.lang,
            requireInteraction: config.requireInteraction,
            silent: config.silent
        });
    }else{
        console.log(permission);
    }
    notification.onclick = function(e){
        if(typeof notificationClicked === 'function')
            notificationClicked();
    }
    notification.onclose = function(){
        if(typeof notificationClosed === 'function')
            notificationClosed();
    };
    notification.onshow = function(){
        if(typeof notificationShown === 'function')
            notificationShown();
    };
    window.addEventListener('close_notification_trigger', function (e) {
        notification.close();
    }, false);
    
}
function closeNotification(){
    window.dispatchEvent(close_notification_trigger);
}
