The easiest way to think about events is that they let you subscribe to things. 
You can say 'when X do Y', whereas with plain callbacks it is 'do X then Y'.

Here are few common use cases for using events instead of plain callbacks:

Chat room where you want to broadcast messages to many listeners
Game server that needs to know when new players connect, disconnect, move, shoot and jump
Game engine where you want to let game developers subscribe to events like .on('jump', function() {})
A low level web server that wants to expose an API to easily hook into events that happen like .on('incomingRequest') or .on('serverError')