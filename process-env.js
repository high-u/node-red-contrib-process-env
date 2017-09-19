module.exports = function (RED) {
    function envNode(config) {
        RED.nodes.createNode(this, config);
        this.into = config.into;
        var node = this;
        this.on('input', function (msg) {
            msg[node.into] = process.env;
            node.send(msg);
        });
    }
    RED.nodes.registerType('process-env', envNode);
};