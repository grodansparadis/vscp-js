// VSCP common javascript library
//
// Copyright (C) 2012-2019 Ake Hedman, Grodans Paradis AB
// <akhe@grodansparadis.com>
// Copyright (c) 2015-2019 Andreas Merkle
// <vscp@blue-andi.de>
//
// Licence:
// The MIT License (MIT)
// [OSI Approved License]
//
// The MIT License (MIT)
//
// Copyright (c) 2012-2019 Grodans Paradis AB (Paradise of the Frog)
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

namespace vscp {

    /** VSCP core javascript library version
     * @property {number} major - Major version number
     * @property {number} minor - Minor version number
     * @property {number} patch - Sub-minor version number
     */
    export const version = {
        major: 1,
        minor: 0,
        patch: 0
    };

    export namespace constants {

        /** VSCP class priorities
         * @enum {number}
         * @const
         */
        export enum Priority {
            PRIORITY_0_HIGH = 0,
            PRIORITY_1 = 1,
            PRIORITY_2 = 2,
            PRIORITY_3_NORMAL = 3,
            PRIORITY_4 = 4,
            PRIORITY_5 = 5,
            PRIORITY_6 = 6,
            PRIORITY_7_LOW = 7
        }

        /** VSCP variable types
         * @enum {number}
         * @const
         */
        export enum VarType {
            UNASSIGNED = 0, // Unassigned variable
            STRING = 1, // String value (Base64 encoded)
            BOOLEAN = 2, // Boolean value (true, false, 0 or 1)
            INTEGER = 3, // Integer value
            LONG = 4, // Long value
            DOUBLE = 5, // Double value
            MEASUREMENT = 6, // String representation of the measurement.
            EVENT = 7, // VSCP event head, class, type, obId, timestamp, GUID, data 1, data 2, data ...
            GUID = 8, // Standard GUID string format: FF:FF:FF:FF:FF:FF:FF:FF:FF:FF:FF:FF:FF:FF:FF:FF
            EVENT_DATA = 9, // Comma separated list with decimal values. 1,2,3,4,5,6,7,8, ...
            EVENT_CLASS = 10, // Integer value for VSCP class
            EVENT_TYPE = 11, // Integer value for VSCP type
            EVENT_TIMESTAMP = 12, // Time when event was received in ms
            DATE_TIME = 13, // Date + Time in ISO format 2008-11-07T20:10.00
            DATE = 14, //  ISO date 2008-11-07
            TIME = 15, //  ISO Time 20:10.00
            BLOB = 16, //  Base64 encoded binary data.
            MIME = 100, //  Base64 mime types data base64(mimetype;data)
            HTML = 101, //  Base64 encoded HTML data.
            JAVASCIPT = 102, //  Base64 encoded Javascript data.
            JSON = 103, //  Base64 encoded JSON data.
            XML = 104, //  Base64 encoded XML data.
            SQL = 105, //  Base64 encoded SQL data.
            LUA = 201, //  Base64 encoded LUA data.
            LUARES = 202, //  Base64 encoded LUA result data.
            UXTYPE1 = 300, //  Base64 encoded UX Type 1 data.
            DMROW = 500, //  Base64 encoded DM data row.
            DRIVER = 501, //  Base64 encoded Driver data row.
            USER = 502, //  Base64 encoded User data row.
            FILTER = 503 //  Base64 encoded Filter data data.
        }

        /** VSCP variable type names as string. Use to fill drop down boxes and similar.
         * @const
         */
        export const varTypeNames: string[] = [
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
    }

    /** Get variable type name as string by numerical code.
     * @param {number} n    - Numerical code
     * @return {string} Variable type name
     */
    export function getVarTypeName(n: vscp.constants.VarType): string {

        let varTypeName: string = "Unknown variable type";

        if (vscp.constants.VarType.UNASSIGNED === n) {
            varTypeName = "unassigned";
        } else if (vscp.constants.VarType.STRING === n) {
            varTypeName = "String";
        } else if (vscp.constants.VarType.BOOLEAN === n) {
            varTypeName = "Boolean";
        } else if (vscp.constants.VarType.INTEGER === n) {
            varTypeName = "Integer";
        } else if (vscp.constants.VarType.LONG === n) {
            varTypeName = "Long";
        } else if (vscp.constants.VarType.DOUBLE === n) {
            varTypeName = "Double";
        } else if (vscp.constants.VarType.MEASUREMENT === n) {
            varTypeName = "Measurement";
        } else if (vscp.constants.VarType.EVENT === n) {
            varTypeName = "Event";
        } else if (vscp.constants.VarType.GUID === n) {
            varTypeName = "GUID";
        } else if (vscp.constants.VarType.EVENT_DATA === n) {
            varTypeName = "Event data";
        } else if (vscp.constants.VarType.EVENT_CLASS === n) {
            varTypeName = "Event class";
        } else if (vscp.constants.VarType.EVENT_TYPE === n) {
            varTypeName = "Event type";
        } else if (vscp.constants.VarType.EVENT_TIMESTAMP === n) {
            varTypeName = "Event timestamp";
        } else if (vscp.constants.VarType.DATE_TIME === n) {
            varTypeName = "Date and Time";
        } else if (vscp.constants.VarType.DATE === n) {
            varTypeName = "Date";
        } else if (vscp.constants.VarType.TIME === n) {
            varTypeName = "Time";
        } else if (vscp.constants.VarType.BLOB === n) {
            varTypeName = "Blob";
        } else if (vscp.constants.VarType.MIME === n) {
            varTypeName = "Mime";
        } else if (vscp.constants.VarType.HTML === n) {
            varTypeName = "HTML";
        } else if (vscp.constants.VarType.JAVASCIPT === n) {
            varTypeName = "Javascript";
        } else if (vscp.constants.VarType.JSON === n) {
            varTypeName = "JSON";
        } else if (vscp.constants.VarType.XML === n) {
            varTypeName = "XML";
        } else if (vscp.constants.VarType.SQL === n) {
            varTypeName = "SQL";
        } else if (vscp.constants.VarType.LUA === n) {
            varTypeName = "LUA";
        } else if (vscp.constants.VarType.LUARES === n) {
            varTypeName = "LUA result";
        } else if (vscp.constants.VarType.UXTYPE1 === n) {
            varTypeName = "UX Type 1";
        } else if (vscp.constants.VarType.DMROW === n) {
            varTypeName = "DM-row";
        } else if (vscp.constants.VarType.DRIVER === n) {
            varTypeName = "Driver";
        } else if (vscp.constants.VarType.USER === n) {
            varTypeName = "User";
        } else if (vscp.constants.VarType.FILTER === n) {
            varTypeName = "Filter";
        } else {
            console.error(vscp.utility.getTime() + " Invalid variable type id: " + n);
        }

        return varTypeName;
    }

    /** Get numerical code of variable type from string.
     * @param {string} str  - Variable type name
     * @return {number} Variable type numerical code
     */
    export function getVarTypeNumerical(str: string): vscp.constants.VarType {
        let varType: vscp.constants.VarType = vscp.constants.VarType.UNASSIGNED;

        if ("unassigned" === str.toLowerCase()) {
            varType = vscp.constants.VarType.UNASSIGNED;
        } else if ("string" === str.toLowerCase()) {
            varType = vscp.constants.VarType.STRING;
        } else if ("boolean" === str.toLowerCase()) {
            varType = vscp.constants.VarType.BOOLEAN;
        } else if ("integer" === str.toLowerCase()) {
            varType = vscp.constants.VarType.INTEGER;
        } else if ("long" === str.toLowerCase()) {
            varType = vscp.constants.VarType.LONG;
        } else if ("double" === str.toLowerCase()) {
            varType = vscp.constants.VarType.DOUBLE;
        } else if ("measurement" === str.toLowerCase()) {
            varType = vscp.constants.VarType.MEASUREMENT;
        } else if ("event" === str.toLowerCase()) {
            varType = vscp.constants.VarType.EVENT;
        } else if ("guid" === str.toLowerCase()) {
            varType = vscp.constants.VarType.GUID;
        } else if ("event data" === str.toLowerCase()) {
            varType = vscp.constants.VarType.EVENT_DATA;
        } else if ("event class" === str.toLowerCase()) {
            varType = vscp.constants.VarType.EVENT_CLASS;
        } else if ("event type" === str.toLowerCase()) {
            varType = vscp.constants.VarType.EVENT_TYPE;
        } else if ("event timestamp" === str.toLowerCase()) {
            varType = vscp.constants.VarType.EVENT_TIMESTAMP;
        } else if ("date and time" === str.toLowerCase()) {
            varType = vscp.constants.VarType.DATE_TIME;
        } else if ("date" === str.toLowerCase()) {
            varType = vscp.constants.VarType.DATE;
        } else if ("time" === str.toLowerCase()) {
            varType = vscp.constants.VarType.TIME;
        } else if ("blob" === str.toLowerCase()) {
            varType = vscp.constants.VarType.BLOB;
        } else if ("mime" === str.toLowerCase()) {
            varType = vscp.constants.VarType.MIME;
        } else if ("html" === str.toLowerCase()) {
            varType = vscp.constants.VarType.HTML;
        } else if ("javascript" === str.toLowerCase()) {
            varType = vscp.constants.VarType.JAVASCIPT;
        } else if ("json" === str.toLowerCase()) {
            varType = vscp.constants.VarType.JSON;
        } else if ("xml" === str.toLowerCase()) {
            varType = vscp.constants.VarType.XML;
        } else if ("sql" === str.toLowerCase()) {
            varType = vscp.constants.VarType.SQL;
        } else if ("lua" === str.toLowerCase()) {
            varType = vscp.constants.VarType.LUA;
        } else if ("lua result" === str.toLowerCase()) {
            varType = vscp.constants.VarType.LUARES;
        } else if ("ux Type 1" === str.toLowerCase()) {
            varType = vscp.constants.VarType.UXTYPE1;
        } else if ("dm-row" === str.toLowerCase()) {
            varType = vscp.constants.VarType.DMROW;
        } else if ("driver" === str.toLowerCase()) {
            varType = vscp.constants.VarType.DRIVER;
        } else if ("user" === str.toLowerCase()) {
            varType = vscp.constants.VarType.USER;
        } else if ("filter" === str.toLowerCase()) {
            varType = vscp.constants.VarType.FILTER;
        } else {
            console.error(vscp.utility.getTime() + " Invalid variable type: " + str);
        }
        
        return varType;
    }

    /** Get ace editor formation mode string from numerical variable type code.
     * @param {number} n    - Variable type numerical code
     * @return {string} Ace editor formation mode string
     */
    export function getEditorModeFromType(n: vscp.constants.VarType): string {
        let formatModeStr: string = "text";

        if (vscp.constants.VarType.UNASSIGNED === n) {
            formatModeStr = "text";
        } else if (vscp.constants.VarType.STRING === n) {
            formatModeStr = "text";
        } else if (vscp.constants.VarType.BOOLEAN === n) {
            formatModeStr = "text";
        } else if (vscp.constants.VarType.INTEGER === n) {
            formatModeStr = "text";
        } else if (vscp.constants.VarType.LONG === n) {
            formatModeStr = "text";
        } else if (vscp.constants.VarType.DOUBLE === n) {
            formatModeStr = "text";
        } else if (vscp.constants.VarType.MEASUREMENT === n) {
            formatModeStr = "c_cpp";
        } else if (vscp.constants.VarType.EVENT === n) {
            formatModeStr = "c_cpp";
        } else if (vscp.constants.VarType.GUID === n) {
            formatModeStr = "asciidoc";
        } else if (vscp.constants.VarType.EVENT_DATA === n) {
            formatModeStr = "c_cpp";
        } else if (vscp.constants.VarType.EVENT_CLASS === n) {
            formatModeStr = "c_cpp";
        } else if (vscp.constants.VarType.EVENT_TYPE === n) {
            formatModeStr = "c_cpp";
        } else if (vscp.constants.VarType.EVENT_TIMESTAMP === n) {
            formatModeStr = "c_cpp";
        } else if (vscp.constants.VarType.DATE_TIME === n) {
            formatModeStr = "text";
        } else if (vscp.constants.VarType.DATE === n) {
            formatModeStr = "c_cpp";
        } else if (vscp.constants.VarType.TIME === n) {
            formatModeStr = "c_cpp";
        } else if (vscp.constants.VarType.BLOB === n) {
            formatModeStr = "c_cpp";
        } else if (vscp.constants.VarType.MIME === n) {
            formatModeStr = "c_cpp";
        } else if (vscp.constants.VarType.HTML === n) {
            formatModeStr = "html";
        } else if (vscp.constants.VarType.JAVASCIPT === n) {
            formatModeStr = "javascript";
        } else if (vscp.constants.VarType.JSON === n) {
            formatModeStr = "json";
        } else if (vscp.constants.VarType.XML === n) {
            formatModeStr = "xml";
        } else if (vscp.constants.VarType.SQL === n) {
            formatModeStr = "sql";
        } else if (vscp.constants.VarType.LUA === n) {
            formatModeStr = "lua";
        } else if (vscp.constants.VarType.LUARES === n) {
            formatModeStr = "lua";
        } else if (vscp.constants.VarType.UXTYPE1 === n) {
            formatModeStr = "xml";
        } else if (vscp.constants.VarType.DMROW === n) {
            formatModeStr = "c_cpp";
        } else if (vscp.constants.VarType.DRIVER === n) {
            formatModeStr = "c_cpp";
        } else if (vscp.constants.VarType.USER === n) {
            formatModeStr = "c_cpp";
        } else if (vscp.constants.VarType.FILTER === n) {
            formatModeStr = "c_cpp";
        } else {
            console.error(vscp.utility.getTime() + " Invalid variable type id: " + n);
        }

        return formatModeStr;
    }

    /* ---------------------------------------------------------------------- */

    // https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
    // Since DOMStrings are 16-bit-encoded strings, in most browsers calling window.btoa
    // on a Unicode string will cause a Character Out Of Range exception if a character
    // exceeds the range of a 8-bit ASCII-encoded character.

    /** Encode base64 unicode safe.
     * @param {string} str  - Unicode string
     * @return {string} Base64
     */
    export function b64EncodeUnicode(str: string): string {
        return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match : string, p1 : string) {
            return String.fromCharCode(parseInt("0x" + p1));
        }));
    }

    /** Decode base64 unicode safe.
     * @param {string} str  - Base64
     * @return {string} Unicode string
     */
    export function b64DecodeUnicode(str: string): string {
        return decodeURIComponent(Array.prototype.map.call(atob(str), function(c: string) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(""));
    }

    /** Determine whether the given variable type is a type stored base64 encoded or not.
     * @param {number} type - Variable type numerical code
     * @return {bool} Stored base64 encoded (true) or not (false).
     */
    export function isBase64Type(type: number): boolean {

        // Always true, because right now all types are base64 encoded.
        return true;
    }

    /** Decode the value if its base64 encoded.
     * @param {number} type     - Variable type numerical code
     * @param {string} value    - Value
     * @return {string} Decoded value if type is base64 encoded type otherwise original value.
     */
    export function decodeValueIfBase64(type: number, value: string): string {
        if (vscp.isBase64Type(type)) {
            return vscp.b64DecodeUnicode(value);
        }

        return value;
    }

    /** Encode the value if its stored in base64.
     * @param {number} type     - Variable type numerical code
     * @param {string} value    - Value
     * @return {string} Encoded value if type is base64 encoded type otherwise original value.
     */
    export function encodeValueIfBase64(type: number, value: string): string {
        if (vscp.isBase64Type(type)) {
            return vscp.b64EncodeUnicode(value);
        }

        return value;
    }

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
    export class Event {

        /** VSCP event head
         * @member {number}
         */
        vscpHead: number;

        /** VSCP class
         * @member {number}
         */
        vscpClass: number;

        /** VSCP type
         * @member {number}
         */
        vscpType: number;

        /** VSCP object id used by driver for channel info and etc.
         * @member {number}
         */
        vscpObId: number;

        /** Relative timestamp for package in us
         * @member {number}
         */
        vscpTimeStamp: number;

        /** Date/Time for package
         * @member {date}
         */
        vscpDateTime: Date;

        /** Node global unique id LSB(15) -> MSB(0)
         * @member {string}
         */
        vscpGuid: string;

        /** Data array or string
         * @member {(number[]|string)}
         */
        vscpData: number[] | string;

        constructor(options?: any) {
            this.vscpHead       = 0;
            this.vscpClass      = 0;
            this.vscpType       = 0;
            this.vscpObId       = 0;
            this.vscpTimeStamp  = 0;
            this.vscpDateTime   = new Date();
            this.vscpGuid       = "-";
            this.vscpData       = [];

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
        }

        /**
         * Set GUID as IP v6 address
         */
        setIPV6Addr() {
            this.vscpHead |= 0x8000;
        }

        /**
         * Is GUID a IP v6 address or not?
         *
         * @return {boolean} If the GUID is a IP v6 address, it will return true, otherwise false.
         */
        isIPV6Addr(): boolean {
            var result = false;

            if (0 < (this.vscpHead & 0x8000)) {
                result = true;
            }

            return result;
        }

        /**
         * Set dumb node. No MDF, registers, nothing.
         */
        setDumbNode() {
            this.vscpHead |= 0x4000;
        }

        /**
         * Is node a dump node or not?
         * Dumb node means no MDF, registers, nothing.
         *
         * @return {boolean} If the node is a dumb node, it will return true, otherwise false.
         */
        isDumbNode(): boolean {
            var result = false;

            if (0 < (this.vscpHead & 0x4000)) {
                result = true;
            }

            return result;
        }

        /**
         * Set the VSCP event priority.
         *
         * @param {number} priority  -  Priority
         */
        setPriority(priority : vscp.constants.Priority) {
            if ((0 <= priority) && (7 >= priority)) {
                this.vscpHead &= 0xff1f;
                this.vscpHead |= (priority << 5);
            }
        }

        /**
         * Get the VSCP event priority.
         *
         * @return {number} Priority of the event.
         */
        getPriority(): vscp.constants.Priority {
            return (this.vscpHead >> 5) & 0x0007;
        }

        /**
         * Set the node id of the event sender as hard coded?
         */
        setHardCodedAddr() {
            this.vscpHead |= 0x0010;
        }

        /**
         * Is the node id of the event sender hard coded or not?
         *
         * @return {boolean} If the node id is hard coded, it will return true, otherwise false.
         */
        isHardCodedAddr(): boolean {
            var result = false;

            if (0 < (this.vscpHead & 0x0010)) {
                result = true;
            }

            return result;
        }

        /**
         * Set flag for no CRC calculation?
         */
        setDoNotCalcCRC() {
            this.vscpHead |= 0x0008;
        }

        /**
         * Is CRC calculated or not?
         *
         * @return {boolean} If nor CRC should be calculated true is returned.
         */
        isDoNotCalcCRC(): boolean {
            var result = false;

            if (0 < (this.vscpHead & 0x0008)) {
                result = true;
            }

            return result;
        }

        /**
         * Get event as string.
         * @return {string} Event as string
         */
        getText(): string {
            var index = 0;
            var str = "";

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
        }

    }

    /* ---------------------------------------------------------------------- */

    export namespace utility {

        /** Read a hex or decimal value and return as an integer.
         * @param {string} input    - Hex or decimal value as string
         * @return {number} Value
         */
        export function readValue(input : string): number {
            let txtvalue: string = input.toLowerCase();
            let pos: number = txtvalue.indexOf("0x");

            if (-1 === pos) {
                return parseInt(txtvalue);
            } else {
                txtvalue = txtvalue.substring(pos + 2);
                return parseInt(txtvalue, 16);
            }
        }

        /**
         * Utility function which returns the current time in the following format: hh:mm:ss.us
         *
         * @return {string} Current time in the format hh:mm:ss.us
         */
        export function getTime(): string {

            let now: Date = new Date();

            let paddingHead: Function = function(num: number, size: number) {
                let str: string = num + "";

                while (str.length < size) {
                    str = "0" + str;
                }

                return str;
            };

            let paddingTail: Function = function(num: number, size: number) {
                let str: string = num + "";

                while (str.length < size) {
                    str = str + "0";
                }

                return str;
            };

            return "" + paddingHead(now.getHours(), 2) + ":" +
                paddingHead(now.getMinutes(), 2) + ":" +
                paddingHead(now.getSeconds(), 2) + "." +
                paddingTail(now.getMilliseconds(), 3);
        }

        /**
         * Converts a GUID number array to a GUID string.
         *
         * @param {number[]} guid - GUID number array
         * @return {string} GUID string, e.g. 00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00
         */
        export function guidToStr(guid : number[]): string {

            let guidStr: string = "";
            let index: number = 0;
            let hexValue: string = "";

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
        }

        /**
         * Converts a GUID string to a GUID number array.
         *
         * @param {string} str - GUID string, e.g. 00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00
         * @return {number[]} GUID number array
         */
        export function strToGuid(str : string): number[] {

            let guid: number[] = [];
            let items: string[] = [];
            let index: number = 0;

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
        }

        /**
         * Get node id from a node GUID string.
         *
         * @param {string} guid - GUID string, e.g. 00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00
         * @return {number} Node id
         */
        export function getNodeId(guid : string): number {

            if ("undefined" === typeof guid) {
                return 0;
            }

            if ("string" !== typeof guid) {
                return 0;
            }

            return parseInt(guid.split(":")[15], 16);
        }

    }

}