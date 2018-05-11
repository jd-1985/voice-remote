/**
 * @fileoverview Description of this file.
 */

require('./cloud/smart-home-provider-cloud.js');

var mqtt = require('mqtt'), url = require('url');
// Parse
var mqtt_url = url.parse(process.env.CLOUDMQTT_URL || 'mqtt://localhost:1883');
var auth = (mqtt_url.auth || ':').split(':');
// Create a client connection
const options = {

};
var client = mqtt.connect(mqtt_url, {
    username: auth[0],
    password: auth[1]
});

client.on('connect', function() { // When connected

    // subscribe to a topic
    client.subscribe('hello/world', function() {
        // when a message arrives, do something with it
        client.on('message', function(topic, message, packet) {
            console.log("Received '" + message + "' on '" + topic + "'");
        });
    });

    // publish a message to a topic
    client.publish('/feeds/irSend', 'my random message', function() {
        console.log("Message is published");
        client.end(); // Close the connection when published
    });
});
