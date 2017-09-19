# node-red-contrib-process-env

## Released

|Date|Version|Description|
|:--:|:-----:|:----------|
|2017-09-19|0.1.4|Enabled to specify payload.|

## Feature

* get process.env

## Install

```bash
npm install --save node-red-contrib-process-env
```

## Usage

Just put it.

## Example Flow

![Flow](./screenshots/example-flow.png)

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

## Environment

* Node-RED
