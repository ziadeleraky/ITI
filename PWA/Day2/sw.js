

self.addEventListener('push', function(event) {
    console.log('Push message received!');
    if (event.data) {
      const payload = event.data.text();
      console.log('Push message payload:', payload);
      // Display notification or take other actions based on payload
    } else {
      console.log('Push message has no payload.');
    }
  });


self.addEventListener('notificationclick',event=>{
    const notification = event.notification
    const primaryKey = notification.data.primaryKey
    const action = event.action
    console.log('action',action)
    if(action === 'close'){
        console.log('close')
        notification.close()
    }
    else{
    clients.openWindow('samples/page'+primaryKey+'.html')
        notification.close()
}
})