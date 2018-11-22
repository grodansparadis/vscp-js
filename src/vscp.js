// VSCP common javascript library
//
// Copyright (C) 2012-2018 Ake Hedman, Grodans Paradis AB
// <akhe@grodansparadis.com>
// Copyright (c) 2015-2018 Andreas Merkle
// <vscp@blue-andi.de>
//
// Licence:
// The MIT License (MIT)
// [OSI Approved License]
//
// The MIT License (MIT)
//
// Copyright (c) 2012-2018 Grodans Paradis AB (Paradise of the Frog)
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
//
// Alternative licenses for VSCP & Friends may be arranged by contacting
// Grodans Paradis AB at info@grodansparadis.com, http://www.grodansparadis.com
//

/** Namespace for all functionality of the VSCP provided libraries.
 * @namespace vscp
 */
var vscp = vscp || {};

/** VSCP core javascript library version
 * @property {number} major - Major version number
 * @property {number} minor - Minor version number
 * @property {number} patch - Sub-minor version number
 */
vscp.version = {
    major: 1,
    minor: 0,
    patch: 0
};

/** Create a general purpose namespace method. This will allow us to create
 * namespace a bit easier.
 *
 * @private
 * @param {string} namespace Complete namespace, e.g. "a.b.c.d"
 */
vscp._createNS = function(namespace) {

    var nsparts = namespace.split(".");
    var parent = vscp;

    /* We want to be able to include or exclude the root namespace .
     * So we strip it if it's in the namespace.
     */
    if (nsparts[0] === "vscp") {
        nsparts = nsparts.slice(1);
    }

    /* Loop through the parts and create a nested namespace if necessary */
    for (var i = 0; i < nsparts.length; i++) {
        var partname = nsparts[i];

        /* Check if the current parent already has the namespace declared, if
         * not create it.
         */
        if ("undefined" === typeof parent[partname]) {
            parent[partname] = {};
        }

        /* Get a reference to the deepest element in the hierarchy so far */
        parent = parent[partname];
    }

    /* The parent is now completely constructed with empty namespaces and can be used. */
    return parent;
};

/** VSCP constants
 * @namespace vscp.constants
 */
vscp._createNS("vscp.constants");

/* !!! VSCP classes and types see in the autogenerated files vscp_class.js and vscp_type.js !!! */

/** VSCP class priorities
 * @enum {number}
 * @const
 */
vscp.constants.priorities = {
    PRIORITY_0_HIGH: 0,
    PRIORITY_1: 1,
    PRIORITY_2: 2,
    PRIORITY_3_NORMAL: 3,
    PRIORITY_4: 4,
    PRIORITY_5: 5,
    PRIORITY_6: 6,
    PRIORITY_7_LOW: 7
};


/** VSCP variable types
 * @enum {number}
 * @const
 */
vscp.constants.varTypes = {
    UNASSIGNED: 0, // Unassigned variable
    STRING: 1, // String value (Base64 encoded)
    BOOLEAN: 2, // Boolean value (true, false, 0 or 1)
    INTEGER: 3, // Integer value
    LONG: 4, // Long value
    DOUBLE: 5, // Double value
    MEASUREMENT: 6, // String representation of the measurement.
    EVENT: 7, // VSCP event head, class, type, obId, timestamp, GUID, data 1, data 2, data ...
    GUID: 8, // Standard GUID string format: FF:FF:FF:FF:FF:FF:FF:FF:FF:FF:FF:FF:FF:FF:FF:FF
    EVENT_DATA: 9, // Comma separated list with decimal values. 1,2,3,4,5,6,7,8, ...
    EVENT_CLASS: 10, // Integer value for VSCP class
    EVENT_TYPE: 11, // Integer value for VSCP type
    EVENT_TIMESTAMP: 12, // Time when event was received in ms
    DATE_TIME: 13, // Date + Time in ISO format 2008-11-07T20:10.00
    DATE: 14, //  ISO date 2008-11-07
    TIME: 15, //  ISO Time 20:10.00
    BLOB: 16, //  Base64 encoded binary data.
    MIME: 100, //  Base64 mime types data base64(mimetype;data)
    HTML: 101, //  Base64 encoded HTML data.
    JAVASCIPT: 102, //  Base64 encoded Javascript data.
    JSON: 103, //  Base64 encoded JSON data.
    XML: 104, //  Base64 encoded XML data.
    SQL: 105, //  Base64 encoded SQL data.
    LUA: 201, //  Base64 encoded LUA data.
    LUARES: 202, //  Base64 encoded LUA result data.
    UXTYPE1: 300, //  Base64 encoded UX Type 1 data.
    DMROW: 500, //  Base64 encoded DM data row.
    DRIVER: 501, //  Base64 encoded Driver data row.
    USER: 502, //  Base64 encoded User data row.
    FILTER: 503 //  Base64 encoded Filter data data.
};

/** VSCP variable type names as string. Use to fill drop down boxes and similar.
 * @const
 */
vscp.constants.varTypeNames = [
    "Unassigned", // Unassigned variable
    "String", // String value (Base64 encoded)
    "Boolean", // Boolean value (true, false, 0 or 1)
    "Integer", // Integer value
    "Long", // Long value
    "Double", // Double value
    "Measurement", // String representation of the measurement.
    "Event", // VSCP event head, class, type, obId, timestamp, GUID, data 1, data 2, data ...
    "GUID", // Standard GUID string format: FF:FF:FF:FF:FF:FF:FF:FF:FF:FF:FF:FF:FF:FF:FF:FF
    "Event Data", // Comma separated list with decimal values. 1,2,3,4,5,6,7,8, ...
    "Event Class", // Integer value for VSCP class
    "Event Type", // Integer value for VSCP type
    "Event Timestamp", // Time when event was received in ms
    "Data/Time", // Date + Time in ISO format 2008-11-07T20:10.00
    "Date", //  ISO date 2008-11-07
    "Time", //  ISO Time 20:10.00
    "Blob", //  Base64 encoded binary data.
    "Mime", //  Base64 mime types data base64(mimetype;data)
    "HTML", //  Base64 encoded HTML data.
    "JavaScript", //  Base64 encoded Javascript data.
    "JSON", //  Base64 encoded JSON data.
    "XML", //  Base64 encoded XML data.
    "SQL", //  Base64 encoded SQL data.
    "LUA", //  Base64 encoded LUA data.
    "LUARES", //  Base64 encoded LUA result data.
    "UXType1", //  Base64 encoded UX Type 1 data.
    "DMRow", //  Base64 encoded DM data row.
    "Driver", //  Base64 encoded Driver data row.
    "User", //  Base64 encoded User data row.
    "Filter"  // Filter for channel
];

/** Get variable type name as string by numerical code.
 * @param {number} n    - Numerical code
 * @return {string} Variable type name
 */
vscp.getVarTypeName = function(n) {
    if (vscp.constants.varTypes.UNASSIGNED == n) {
        return "unassigned";
    } else if (vscp.constants.varTypes.STRING == n) {
        return "String";
    } else if (vscp.constants.varTypes.BOOLEAN == n) {
        return "Boolean";
    } else if (vscp.constants.varTypes.INTEGER == n) {
        return "Integer";
    } else if (vscp.constants.varTypes.LONG == n) {
        return "Long";
    } else if (vscp.constants.varTypes.DOUBLE == n) {
        return "Double";
    } else if (vscp.constants.varTypes.MEASUREMENT == n) {
        return "Measurement";
    } else if (vscp.constants.varTypes.EVENT == n) {
        return "Event";
    } else if (vscp.constants.varTypes.GUID == n) {
        return "GUID";
    } else if (vscp.constants.varTypes.EVENT_DATA == n) {
        return "Event data";
    } else if (vscp.constants.varTypes.EVENT_CLASS == n) {
        return "Event class";
    } else if (vscp.constants.varTypes.EVENT_TYPE == n) {
        return "Event type";
    } else if (vscp.constants.varTypes.EVENT_TIMESTAMP == n) {
        return "Event timestamp";
    } else if (vscp.constants.varTypes.DATE_TIME == n) {
        return "Date and Time";
    } else if (vscp.constants.varTypes.DATE == n) {
        return "Date";
    } else if (vscp.constants.varTypes.TIME == n) {
        return "Time";
    } else if (vscp.constants.varTypes.BLOB == n) {
        return "Blob";
    } else if (vscp.constants.varTypes.MIME == n) {
        return "Mime";
    } else if (vscp.constants.varTypes.HTML == n) {
        return "HTML";
    } else if (vscp.constants.varTypes.JAVASCIPT == n) {
        return "Javascript";
    } else if (vscp.constants.varTypes.JSON == n) {
        return "JSON";
    } else if (vscp.constants.varTypes.XML == n) {
        return "XML";
    } else if (vscp.constants.varTypes.SQL == n) {
        return "SQL";
    } else if (vscp.constants.varTypes.LUA == n) {
        return "LUA";
    } else if (vscp.constants.varTypes.LUARES == n) {
        return "LUA result";
    } else if (vscp.constants.varTypes.UXTYPE1 == n) {
        return "UX Type 1";
    } else if (vscp.constants.varTypes.DMROW == n) {
        return "DM-row";
    } else if (vscp.constants.varTypes.DRIVER == n) {
        return "Driver";
    } else if (vscp.constants.varTypes.USER == n) {
        return "User";
    } else if (vscp.constants.varTypes.FILTER == n) {
        return "Filter";
    } else {
        return "Unknown variable type";
    }
};

/** Get numerical code of variable type from string.
 * @param {string} str  - Variable type name
 * @return {number} Variable type numerical code
 */
vscp.getVarTypeNumerical = function(str) {
    if ("unassigned" === str.toLowerCase()) {
        return vscp.constants.varTypes.UNASSIGNED;
    } else if ("string" === str.toLowerCase()) {
        return vscp.constants.varTypes.STRING;
    } else if ("boolean" == str.toLowerCase()) {
        return vscp.constants.varTypes.BOOLEAN;
    } else if ("integer" == str.toLowerCase()) {
        return vscp.constants.varTypes.INTEGER;
    } else if ("long" == str.toLowerCase()) {
        return vscp.constants.varTypes.LONG;
    } else if ("double" == str.toLowerCase()) {
        return vscp.constants.varTypes.DOUBLE;
    } else if ("measurement" == str.toLowerCase()) {
        return vscp.constants.varTypes.MEASUREMENT;
    } else if ("event" == str.toLowerCase()) {
        return vscp.constants.varTypes.EVENT;
    } else if ("guid" == str.toLowerCase()) {
        return vscp.constants.varTypes.GUID;
    } else if ("event data" == str.toLowerCase()) {
        return vscp.constants.varTypes.EVENT_DATA;
    } else if ("event class" == str.toLowerCase()) {
        return vscp.constants.varTypes.EVENT_CLASS;
    } else if ("event type" == str.toLowerCase()) {
        return vscp.constants.varTypes.EVENT_TYPE;
    } else if ("event timestamp" == str.toLowerCase()) {
        return vscp.constants.varTypes.EVENT_TIMESTAMP;
    } else if ("date and time" == str.toLowerCase()) {
        return vscp.constants.varTypes.DATE_TIME;
    } else if ("date" == str.toLowerCase()) {
        return vscp.constants.varTypes.DATE;
    } else if ("time" == str.toLowerCase()) {
        return vscp.constants.varTypes.TIME;
    } else if ("blob" == str.toLowerCase()) {
        return vscp.constants.varTypes.BLOB;
    } else if ("mime" == str.toLowerCase()) {
        return vscp.constants.varTypes.MIME;
    } else if ("html" == str.toLowerCase()) {
        return vscp.constants.varTypes.HTML;
    } else if ("javascript" == str.toLowerCase()) {
        return vscp.constants.varTypes.JAVASCIPT;
    } else if ("json" == str.toLowerCase()) {
        return vscp.constants.varTypes.JSON;
    } else if ("xml" == str.toLowerCase()) {
        return vscp.constants.varTypes.XML;
    } else if ("sql" == str.toLowerCase()) {
        return vscp.constants.varTypes.SQL;
    } else if ("lua" == str.toLowerCase()) {
        return vscp.constants.varTypes.LUA;
    } else if ("lua result" == str.toLowerCase()) {
        return vscp.constants.varTypes.LUARES;
    } else if ("ux Type 1" == str.toLowerCase()) {
        return vscp.constants.varTypes.UXTYPE1;
    } else if ("dm-row" == str.toLowerCase()) {
        return vscp.constants.varTypes.DMROW;
    } else if ("driver" == str.toLowerCase()) {
        return vscp.constants.varTypes.DRIVER;
    } else if ("user" == str.toLowerCase()) {
        return vscp.constants.varTypes.USER;
    } else if ("filter" == str.toLowerCase()) {
        return vscp.constants.varTypes.FILTER;
    }
};

/** Get ace editor formation mode string from numerical variable type code.
 * @param {number} n    - Variable type numerical code
 * @return {string} Ace editro formation mode string
 */
vscp.getEditorModeFromType = function(n) {
    if (vscp.constants.varTypes.UNASSIGNED == n) {
        return "text";
    } else if (vscp.constants.varTypes.STRING == n) {
        return "text";
    } else if (vscp.constants.varTypes.BOOLEAN == n) {
        return "text";
    } else if (vscp.constants.varTypes.INTEGER == n) {
        return "text";
    } else if (vscp.constants.varTypes.LONG == n) {
        return "text";
    } else if (vscp.constants.varTypes.DOUBLE == n) {
        return "text";
    } else if (vscp.constants.varTypes.MEASUREMENT == n) {
        return "c_cpp";
    } else if (vscp.constants.varTypes.EVENT == n) {
        return "c_cpp";
    } else if (vscp.constants.varTypes.GUID == n) {
        return "asciidoc";
    } else if (vscp.constants.varTypes.EVENT_DATA == n) {
        return "c_cpp";
    } else if (vscp.constants.varTypes.EVENT_CLASS == n) {
        return "c_cpp";
    } else if (vscp.constants.varTypes.EVENT_TYPE == n) {
        return "c_cpp";
    } else if (vscp.constants.varTypes.EVENT_TIMESTAMP == n) {
        return "c_cpp";
    } else if (vscp.constants.varTypes.DATE_TIME == n) {
        return "text";
    } else if (vscp.constants.varTypes.DATE == n) {
        return "c_cpp";
    } else if (vscp.constants.varTypes.TIME == n) {
        return "c_cpp";
    } else if (vscp.constants.varTypes.BLOB == n) {
        return "c_cpp";
    } else if (vscp.constants.varTypes.MIME == n) {
        return "c_cpp";
    } else if (vscp.constants.varTypes.HTML == n) {
        return "html";
    } else if (vscp.constants.varTypes.JAVASCIPT == n) {
        return "javascript";
    } else if (vscp.constants.varTypes.JSON == n) {
        return "json";
    } else if (vscp.constants.varTypes.XML == n) {
        return "xml";
    } else if (vscp.constants.varTypes.SQL == n) {
        return "sql";
    } else if (vscp.constants.varTypes.LUA == n) {
        return "lua";
    } else if (vscp.constants.varTypes.LUARES == n) {
        return "lua";
    } else if (vscp.constants.varTypes.UXTYPE1 == n) {
        return "xml";
    } else if (vscp.constants.varTypes.DMROW == n) {
        return "c_cpp";
    } else if (vscp.constants.varTypes.DRIVER == n) {
        return "c_cpp";
    } else if (vscp.constants.varTypes.USER == n) {
        return "c_cpp";
    } else if (vscp.constants.varTypes.FILTER == n) {
        return "c_cpp";
    } else {
        return "text";
    }
};

/* ---------------------------------------------------------------------- */

// https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
// Since DOMStrings are 16-bit-encoded strings, in most browsers calling window.btoa
// on a Unicode string will cause a Character Out Of Range exception if a character
// exceeds the range of a 8-bit ASCII-encoded character.

/** Encode base64 unicode safe.
 * @param {string} str  - Unicode string
 * @return {string} Base64
 */
vscp.b64EncodeUnicode = function(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
        return String.fromCharCode('0x' + p1);
    }));
};

/** Decode base64 unicode safe.
 * @param {string} str  - Base64
 * @return {string} Unicode string
 */
vscp.b64DecodeUnicode = function(str) {
    return decodeURIComponent(Array.prototype.map.call(atob(str), function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
};

/** Determine whether the given variable type is a type stored base64 encoded or not.
 * @param {number} type - Variable type numerical code
 * @return {bool} Stored base64 encoded (true) or not (false).
 */
vscp.isBase64Type = function(type) {
    type=type;  // To get rid of Travis complaint
    return true;
};

/** Decode the value if its base64 encoded.
 * @param {number} type     - Variable type numerical code
 * @param {string} value    - Value
 * @return {string} Decoded value if type is base64 encoded type otherwise original value.
 */
vscp.decodeValueIfBase64 = function(type, value) {
    if (vscp.isBase64Type(type)) {
        return vscp.b64DecodeUnicode(value);
    }

    return value;
};

/** Encode the value if its stored in base64.
 * @param {number} type     - Variable type numerical code
 * @param {string} value    - Value
 * @return {string} Encoded value if type is base64 encoded type otherwise original value.
 */
vscp.encodeValueIfBase64 = function(type, value) {
    if (vscp.isBase64Type(type)) {
        return vscp.b64EncodeUnicode(value);
    }

    return value;
};

/**
 * VSCP event.
 * @class
 *
 * @param {object} options                              - Options
 * @param {number} options.vscpHead                     - Event head
 * @param {boolean} options.guidIsIpV6Addr              - GUID is a IPv6 address
 * @param {boolean} options.dumpNode                    - Node is a dump node
 * @param {number} options.vscpPriority                 - Priority
 * @param {boolean} options.vscpHardCoded               - Hard coded node id
 * @param {boolean} options.vscpCalcCRC                 - Calculate CRC
 * @param {number} options.vscpClass                    - VSCP class
 * @param {number} options.vscpType                     - VSCP type
 * @param {number} options.vscpObId                     - Object id
 * @param {number} options.vscpTimeStamp                - Timestamp
 * @param {string} options.vscpGuid                     - GUID string
 * @param {(number[]|string)} options.vscpData          - Event data
 */
vscp.Event = function(options) {

    /** VSCP event head
     * @member {number}
     */
    this.vscpHead = 0;

    /** VSCP class
     * @member {number}
     */
    this.vscpClass = 0;

    /** VSCP type
     * @member {number}
     */
    this.vscpType = 0;

    /** VSCP object id used by driver for channel info and etc.
     * @member {number}
     */
    this.vscpObId = 0;

    /** Relative timestamp for package in us
     * @member {number}
     */
    this.vscpTimeStamp = 0;

    /** Date/Time for package
     * @member {date}
     */
    this.vscpDateTime = new Date();

    /** Node global unique id LSB(15) -> MSB(0)
     * @member {string}
     */
    this.vscpGuid = "-";

    /** Data array or string
     * @member {(number[]|string)}
     */
    this.vscpData = [];

    if ("undefined" !== typeof options) {

        if ("number" === typeof options.vscpHead) {
            this.vscpHead = options.vscpHead;
        }

        if ("boolean" === typeof options.guidIsIpV6Addr) {
            if (false === options.guidIsIpV6Addr) {
                this.vscpHead &= 0xefff;
            } else {
                this.vscpHead |= 0x8000;
            }
        }
        
        if ("boolean" === typeof options.dumpNode) {
            if (false === options.dumpNode) {
                this.vscpHead &= 0xbfff;
            } else {
                this.vscpHead |= 0x4000;
            }
        }
        
        if ("number" === typeof options.vscpPriority) {
            if ((0 <= options.vscpPriority) && (7 >= options.vscpPriority)) {
                this.vscpHead &= 0xff1f;
                this.vscpHead |= (options.vscpPriority << 5);
            }
        }

        if ("boolean" === typeof options.vscpHardCoded) {
            if (false === options.vscpHardCoded) {
                this.vscpHead &= 0xffef;
            } else {
                this.vscpHead |= 0x0010;
            }
        }

        if ("boolean" === typeof options.vscpCalcCRC) {
            if (false === options.vscpCalcCRC) {
                this.vscpHead &= 0xfff7;
            } else {
                this.vscpHead |= 0x0008;
            }
        }

        if ("number" === typeof options.vscpClass) {
            this.vscpClass = options.vscpClass;
        }

        if ("number" === typeof options.vscpType) {
            this.vscpType = options.vscpType;
        }

        if ("number" === typeof options.vscpObId) {
            this.vscpObId = options.vscpObId;
        }

        if ("number" === typeof options.vscpTimeStamp) {
            this.vscpTimeStamp = options.vscpTimeStamp;
        }

        if ("string" === typeof options.vscpDateTime) {
            // Time in UTC for events but conversion
            // is done in send routine
            this.vscpDateTime  = new Date(options.vscpDateTime);
        } else if (true === (options.vscpDateTime instanceof Date)) {
            // Time should be local
            this.vscpDateTime = options.vscpDateTime;
        }

        if ("string" === typeof options.vscpGuid) {
            this.vscpGuid = options.vscpGuid;
        }

        if (("string" === typeof options.vscpData) ||
            (true === (options.vscpData instanceof Array))) {
            this.vscpData = options.vscpData;
        }
    }
};

/**
 * Set GUID as IP v6 address
 */
vscp.Event.prototype.setIPV6Addr = function() {
    this.vscpHead |= 0x8000;
};

/**
 * Is GUID a IP v6 address or not?
 *
 * @return {boolean} If the GUID is a IP v6 address, it will return true, otherwise false.
 */
vscp.Event.prototype.isIPV6Addr = function() {
    var result = false;

    if (0 < (this.vscpHead & 0x8000)) {
        result = true;
    }

    return result;
};

/**
 * Set dumb node. No MDF, registers, nothing.
 */
vscp.Event.prototype.setDumbNode = function() {
    this.vscpHead |= 0x4000;
};

/**
 * Is node a dump node or not?
 * Dumb node means no MDF, registers, nothing.
 *
 * @return {boolean} If the node is a dumb node, it will return true, otherwise false.
 */
vscp.Event.prototype.isDumbNode = function() {
    var result = false;

    if (0 < (this.vscpHead & 0x4000)) {
        result = true;
    }

    return result;
};

/**
 * Set the VSCP event priority.
 *
 * @param {number} priority  -  Priority
 */
vscp.Event.prototype.setPriority = function(priority) {
    if ((0 <= priority) && (7 >= priority)) {
        this.vscpHead &= 0xff1f;
        this.vscpHead |= (priority << 5);
    }
};

/**
 * Get the VSCP event priority.
 *
 * @return {number} Priority of the event.
 */
vscp.Event.prototype.getPriority = function() {
    return (this.vscpHead >> 5) & 0x0007;
};

/**
 * Set the node id of the event sender as hard coded?
 */
vscp.Event.prototype.setHardCodedAddr = function() {
    this.vscpHead |= 0x0010;
};

/**
 * Is the node id of the event sender hard coded or not?
 *
 * @return {boolean} If the node id is hard coded, it will return true, otherwise false.
 */
vscp.Event.prototype.isHardCodedAddr = function() {
    var result = false;

    if (0 < (this.vscpHead & 0x0010)) {
        result = true;
    }

    return result;
};

/**
 * Set flag for no CRC calculation?
 */
vscp.Event.prototype.setDoNotCalcCRC = function() {
    this.vscpHead |= 0x0008;
};

/**
 * Is CRC calculated or not?
 *
 * @return {boolean} If nor CRC should be calculated true is returned.
 */
vscp.Event.prototype.isDoNotCalcCRC = function() {
    var result = false;

    if (0 < (this.vscpHead & 0x0008)) {
        result = true;
    }

    return result;
};

/**
 * Get event as string.
 * @return {string} Event as string
 */
vscp.Event.prototype.getText = function() {
    var index = 0;
    var str = '';

    str += this.vscpHead.toString() + ",";
    str += this.vscpClass.toString() + ",";
    str += this.vscpType.toString() + ",";
    str += this.vscpObId.toString() + ",";
    str += this.vscpDateTime.toISOString() + ",";
    str += this.vscpTimeStamp.toString() + ",";
    str += this.vscpGuid;

    if (this.vscpData instanceof Array) {

        if (0 < this.vscpData.length) {
            str += ",";
        }

        for (index = 0; index < this.vscpData.length; ++index) {
            str += this.vscpData[index].toString();

            if ((this.vscpData.length - 1) > index) {
                str += ",";
            }
        }

    } else if ("string" === typeof this.vscpData) {

        if (0 < this.vscpData.length) {
            str += ",";
        }

        str += this.vscpData;
    } else {

        console.error(vscp.utility.getTime() + " Invalid VSCP event data.");
    }

    return str;
};

/* ---------------------------------------------------------------------- */

/**
 * Utility functions
 * @namespace vscp.utility
 */
vscp._createNS("vscp.utility");

/** Read a hex or decimal value and return as an integer.
 * @param {string} input    - Hex or decimal value as string
 * @return {number} Value
 */
vscp.utility.readValue = function(input) {
    var txtvalue = input.toLowerCase();
    var pos = txtvalue.indexOf("0x");
    if (-1 == pos) {
        return parseInt(txtvalue);
    } else {
        txtvalue = txtvalue.substring(pos + 2);
        return parseInt(txtvalue, 16);
    }
};

/**
 * Utility function which returns the current time in the following format: hh:mm:ss.us
 *
 * @return {string} Current time in the format hh:mm:ss.us
 */
vscp.utility.getTime = function() {

    var now = new Date();

    var paddingHead = function(num, size) {
        var str = num + "";

        while (str.length < size) {
            str = "0" + str;
        }

        return str;
    };

    var paddingTail = function(num, size) {
        var str = num + "";

        while (str.length < size) {
            str = str + "0";
        }

        return str;
    };

    return "" + paddingHead(now.getHours(), 2) + ":" +
        paddingHead(now.getMinutes(), 2) + ":" +
        paddingHead(now.getSeconds(), 2) + "." +
        paddingTail(now.getMilliseconds(), 3);
};

/**
 * Converts a GUID number array to a GUID string.
 *
 * @param {number[]} guid - GUID number array
 * @return {string} GUID string, e.g. 00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00
 */
vscp.utility.guidToStr = function(guid) {

    var guidStr = "";
    var index = 0;
    var hexValue = "";

    for (index = 0; index < guid.length; ++index) {
        hexValue = guid[index].toString(16).toUpperCase();
        if (2 > hexValue.length) {
            hexValue = "0" + hexValue;
        }

        guidStr += hexValue;

        if (index < (guid.length - 1)) {
            guidStr += ":";
        }
    }

    return guidStr;
};

/**
 * Converts a GUID string to a GUID number array.
 *
 * @param {string} guid - GUID string, e.g. 00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00
 * @return {number[]} GUID number array
 */
vscp.utility.strToGuid = function(str) {

    var guid = [];
    var items = [];
    var index = 0;

    if ("undefined" === typeof str) {
        return guid;
    }

    if ("string" !== typeof str) {
        return guid;
    }

    // If GUID is "-" use interface GUID
    if ("-" === str) {
        str = "00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00";
    }

    items = str.split(":");

    if (16 !== items.length) {
        return guid;
    }

    for (index = 0; index < items.length; ++index) {
        guid.push(parseInt(items[index], 16));
    }

    return guid;
};

/**
 * Get node id from a node GUID string.
 *
 * @param {string} guid - GUID string, e.g. 00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00
 * @return {number} Node id
 */
vscp.utility.getNodeId = function(guid) {

    if ("undefined" === typeof guid) {
        return 0;
    }

    if ("string" !== typeof guid) {
        return 0;
    }

    return parseInt(guid.split(":")[15], 16);
};
