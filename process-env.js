module.exports = function (RED) {
    function envNode(config) {
        RED.nodes.createNode(this, config);
        this.into = config.into;
        var node = this;
        this.on('input', function (msg) {
            try {
                if (msg.env) {
                    var env = msg.env;
                    msg[node.into] = {};
                    Object.keys(env).forEach(function (key) {
                        msg[node.into][key] = process.env[env[key]];
                    });
                } else {
                    msg[node.into] = process.env;
                }
                node.send(msg);
            } catch(e) {
                node.error(e);
            }
        });
    }
    RED.nodes.registerType('process-env', envNode);
};