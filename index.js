/**
 * @fileoverview Description of this file.
 */

require('./cloud/smart-home-provider-cloud.js');
/*

const MqttClient = {};

var mqtt = require('mqtt'), url = require('url');
// Parse
var mqtt_url = url.parse(process.env.CLOUDMQTT_URL || 'mqtt://localhost:1883');
var auth = (mqtt_url.auth || ':').split(':');
// Create a client connection
MqttClient.client = mqtt.connect(mqtt_url, {
    username: auth[0],
    password: auth[1]
});



MqttClient.client.on('connect', function() { // When connected

    // subscribe to a topic
    MqttClient.client.subscribe('hello/world', function() {
        // when a message arrives, do something with it
        MqttClient.client.on('message', function(topic, message, packet) {
            console.log("Received '" + message + "' on '" + topic + "'");
        });
    });

    // publish a message to a topic
    MqttClient.client.publish('/feeds/irSend', 'my random message', function() {
        console.log("Message is published");
        MqttClient.client.end(); // Close the connection when published
    });
});
exports.MqttClient = MqttClient;*/
