module.exports = function (RED) {
    function envNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        this.on('input', function (msg) {
            msg.payload = process.env;
            node.send(msg);
        });
    }
    RED.nodes.registerType('process-env', envNode);
};