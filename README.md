# node-red-contrib-process-env

## Released

|Date|Version|Description|
|:--:|:-----:|:----------|
|2018-07-02|0.2.0|Add selection function.|
|2017-09-19|0.1.4|Enabled to specify payload.|

## Feature

- Package for Node-RED.
- Get All ENV.
- Select and get ENV.

## Install

```bash
npm install --save node-red-contrib-process-env
```

## Usage

### Case 1

- Just put it.

### Case 2

#### Input

Set "payload" to "Into".

```
msg.env = {
    "lang": "LANG",
    "shell": "SHELL",
    "path": "PATH"
}
```


#### Output

```
msg.payload = {
    lang: "ja_JP.UTF-8",
    shell: "/bin/bash",
    path: "/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"
}
```


## Example Flow

### Case 1

![Example Flow Case 1](https://raw.githubusercontent.com/high-u/node-red-contrib-process-env/master/screenshots/example-flow.png)

```json
[
    {
        "id": "e7284760.290928",
        "type": "process-env",
        "z": "3b5b5291.aa56ae",
        "name": "process.env",
        "x": 350,
        "y": 220,
        "wires": [
            [
                "a5041749.a6f138"
            ]
        ]
    },
    {
        "id": "5deef14b.acfb3",
        "type": "inject",
        "z": "3b5b5291.aa56ae",
        "name": "",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "",
        "crontab": "",
        "once": false,
        "x": 180,
        "y": 220,
        "wires": [
            [
                "e7284760.290928"
            ]
        ]
    },
    {
        "id": "a5041749.a6f138",
        "type": "debug",
        "z": "3b5b5291.aa56ae",
        "name": "",
        "active": true,
        "console": "false",
        "complete": "false",
        "x": 530,
        "y": 220,
        "wires": []
    }
]
```

### Case 2

![Example Flow Case 2](https://raw.githubusercontent.com/high-u/node-red-contrib-process-env/master/screenshots/example-flow2.png)

```
[
    {
        "id": "3cbf45c7.20205a",
        "type": "process-env",
        "z": "4fd54dd0.9ec404",
        "name": "",
        "into": "payload",
        "x": 438,
        "y": 64,
        "wires": [
            [
                "7219f5fd.b41e4c"
            ]
        ]
    },
    {
        "id": "aae536f7.06c948",
        "type": "inject",
        "z": "4fd54dd0.9ec404",
        "name": "Inject",
        "topic": "",
        "payload": "",
        "payloadType": "str",
        "repeat": "",
        "crontab": "",
        "once": false,
        "x": 114,
        "y": 64,
        "wires": [
            [
                "72164832.140208"
            ]
        ]
    },
    {
        "id": "7219f5fd.b41e4c",
        "type": "debug",
        "z": "4fd54dd0.9ec404",
        "name": "",
        "active": true,
        "console": "false",
        "complete": "true",
        "x": 610,
        "y": 64,
        "wires": []
    },
    {
        "id": "72164832.140208",
        "type": "template",
        "z": "4fd54dd0.9ec404",
        "name": "set env",
        "field": "env",
        "fieldType": "msg",
        "format": "json",
        "syntax": "mustache",
        "template": "{\n    \"lang\": \"LANG\",\n    \"path\": \"PATH\",\n    \"shell\": \"SHELL\"\n}",
        "output": "json",
        "x": 268,
        "y": 64,
        "wires": [
            [
                "3cbf45c7.20205a"
            ]
        ]
    }
]
```
