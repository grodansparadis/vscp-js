// VSCP type definition file
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

/*
            !!!!!!!!!!!!!!!!!!!!  W A R N I N G  !!!!!!!!!!!!!!!!!!!!
                           This file is auto-generated
                see https://github.com/grodansparadis/vscp-classes
                        Generated: 2019-11-27 10:24:50.262598
*/

/** Namespace for all functionality of the VSCP provided libraries.
 * @namespace vscp
 */
var vscp = vscp || {};

/** VSCP class types
 * @enum {number}
 * @const
 */
vscp.constants.types = {

    VSCP_TYPE_UNDEFINED: 0,

//  CLASS1.PROTOCOL = 0  -  VSCP Protocol Functionality
    VSCP_TYPE_PROTOCOL_GENERAL: 0,
    VSCP_TYPE_PROTOCOL_SEGCTRL_HEARTBEAT: 1,
    VSCP_TYPE_PROTOCOL_NEW_NODE_ONLINE: 2,
    VSCP_TYPE_PROTOCOL_PROBE_ACK: 3,
    VSCP_TYPE_PROTOCOL_RESERVED4: 4,
    VSCP_TYPE_PROTOCOL_RESERVED5: 5,
    VSCP_TYPE_PROTOCOL_SET_NICKNAME: 6,
    VSCP_TYPE_PROTOCOL_NICKNAME_ACCEPTED: 7,
    VSCP_TYPE_PROTOCOL_DROP_NICKNAME: 8,
    VSCP_TYPE_PROTOCOL_READ_REGISTER: 9,
    VSCP_TYPE_PROTOCOL_RW_RESPONSE: 10,
    VSCP_TYPE_PROTOCOL_WRITE_REGISTER: 11,
    VSCP_TYPE_PROTOCOL_ENTER_BOOT_LOADER: 12,
    VSCP_TYPE_PROTOCOL_ACK_BOOT_LOADER: 13,
    VSCP_TYPE_PROTOCOL_NACK_BOOT_LOADER: 14,
    VSCP_TYPE_PROTOCOL_START_BLOCK: 15,
    VSCP_TYPE_PROTOCOL_BLOCK_DATA: 16,
    VSCP_TYPE_PROTOCOL_BLOCK_DATA_ACK: 17,
    VSCP_TYPE_PROTOCOL_BLOCK_DATA_NACK: 18,
    VSCP_TYPE_PROTOCOL_PROGRAM_BLOCK_DATA: 19,
    VSCP_TYPE_PROTOCOL_PROGRAM_BLOCK_DATA_ACK: 20,
    VSCP_TYPE_PROTOCOL_PROGRAM_BLOCK_DATA_NACK: 21,
    VSCP_TYPE_PROTOCOL_ACTIVATE_NEW_IMAGE: 22,
    VSCP_TYPE_PROTOCOL_RESET_DEVICE: 23,
    VSCP_TYPE_PROTOCOL_PAGE_READ: 24,
    VSCP_TYPE_PROTOCOL_PAGE_WRITE: 25,
    VSCP_TYPE_PROTOCOL_RW_PAGE_RESPONSE: 26,
    VSCP_TYPE_PROTOCOL_HIGH_END_SERVER_PROBE: 27,
    VSCP_TYPE_PROTOCOL_HIGH_END_SERVER_RESPONSE: 28,
    VSCP_TYPE_PROTOCOL_INCREMENT_REGISTER: 29,
    VSCP_TYPE_PROTOCOL_DECREMENT_REGISTER: 30,
    VSCP_TYPE_PROTOCOL_WHO_IS_THERE: 31,
    VSCP_TYPE_PROTOCOL_WHO_IS_THERE_RESPONSE: 32,
    VSCP_TYPE_PROTOCOL_GET_MATRIX_INFO: 33,
    VSCP_TYPE_PROTOCOL_GET_MATRIX_INFO_RESPONSE: 34,
    VSCP_TYPE_PROTOCOL_GET_EMBEDDED_MDF: 35,
    VSCP_TYPE_PROTOCOL_GET_EMBEDDED_MDF_RESPONSE: 36,
    VSCP_TYPE_PROTOCOL_EXTENDED_PAGE_READ: 37,
    VSCP_TYPE_PROTOCOL_EXTENDED_PAGE_WRITE: 38,
    VSCP_TYPE_PROTOCOL_EXTENDED_PAGE_RESPONSE: 39,
    VSCP_TYPE_PROTOCOL_GET_EVENT_INTEREST: 40,
    VSCP_TYPE_PROTOCOL_GET_EVENT_INTEREST_RESPONSE: 41,
    VSCP_TYPE_PROTOCOL_ACTIVATE_NEW_IMAGE_ACK: 48,
    VSCP_TYPE_PROTOCOL_ACTIVATE_NEW_IMAGE_NACK: 49,
    VSCP_TYPE_PROTOCOL_START_BLOCK_ACK: 50,
    VSCP_TYPE_PROTOCOL_START_BLOCK_NACK: 51,
 
//  CLASS1.ALARM = 1  -  Alarm functionality
    VSCP_TYPE_ALARM_GENERAL: 0,
    VSCP_TYPE_ALARM_WARNING: 1,
    VSCP_TYPE_ALARM_ALARM: 2,
    VSCP_TYPE_ALARM_SOUND: 3,
    VSCP_TYPE_ALARM_LIGHT: 4,
    VSCP_TYPE_ALARM_POWER: 5,
    VSCP_TYPE_ALARM_EMERGENCY_STOP: 6,
    VSCP_TYPE_ALARM_EMERGENCY_PAUSE: 7,
    VSCP_TYPE_ALARM_EMERGENCY_RESET: 8,
    VSCP_TYPE_ALARM_EMERGENCY_RESUME: 9,
    VSCP_TYPE_ALARM_ARM: 10,
    VSCP_TYPE_ALARM_DISARM: 11,
    VSCP_TYPE_ALARM_WATCHDOG: 12,
 
//  CLASS1.SECURITY = 2  -  Security
    VSCP_TYPE_SECURITY_GENERAL: 0,
    VSCP_TYPE_SECURITY_MOTION: 1,
    VSCP_TYPE_SECURITY_GLASS_BREAK: 2,
    VSCP_TYPE_SECURITY_BEAM_BREAK: 3,
    VSCP_TYPE_SECURITY_SENSOR_TAMPER: 4,
    VSCP_TYPE_SECURITY_SHOCK_SENSOR: 5,
    VSCP_TYPE_SECURITY_SMOKE_SENSOR: 6,
    VSCP_TYPE_SECURITY_HEAT_SENSOR: 7,
    VSCP_TYPE_SECURITY_PANIC_SWITCH: 8,
    VSCP_TYPE_SECURITY_DOOR_OPEN: 9,
    VSCP_TYPE_SECURITY_WINDOW_OPEN: 10,
    VSCP_TYPE_SECURITY_CO_SENSOR: 11,
    VSCP_TYPE_SECURITY_FROST_DETECTED: 12,
    VSCP_TYPE_SECURITY_FLAME_DETECTED: 13,
    VSCP_TYPE_SECURITY_OXYGEN_LOW: 14,
    VSCP_TYPE_SECURITY_WEIGHT_DETECTED: 15,
    VSCP_TYPE_SECURITY_WATER_DETECTED: 16,
    VSCP_TYPE_SECURITY_CONDENSATION_DETECTED: 17,
    VSCP_TYPE_SECURITY_SOUND_DETECTED: 18,
    VSCP_TYPE_SECURITY_HARMFUL_SOUND_LEVEL: 19,
    VSCP_TYPE_SECURITY_TAMPER: 20,
    VSCP_TYPE_SECURITY_AUTHENTICATED: 21,
    VSCP_TYPE_SECURITY_UNAUTHENTICATED: 22,
    VSCP_TYPE_SECURITY_AUTHORIZED: 23,
    VSCP_TYPE_SECURITY_UNAUTHORIZED: 24,
    VSCP_TYPE_SECURITY_ID_CHECK: 25,
    VSCP_TYPE_SECURITY_PIN_OK: 26,
    VSCP_TYPE_SECURITY_PIN_FAIL: 27,
    VSCP_TYPE_SECURITY_PIN_WARNING: 28,
    VSCP_TYPE_SECURITY_PIN_ERROR: 29,
    VSCP_TYPE_SECURITY_PASSWORD_OK: 30,
    VSCP_TYPE_SECURITY_PASSWORD_FAIL: 31,
    VSCP_TYPE_SECURITY_PASSWORD_WARNING: 32,
    VSCP_TYPE_SECURITY_PASSWORD_ERROR: 33,
 
//  CLASS1.MEASUREMENT = 10  -  Measurement
    VSCP_TYPE_MEASUREMENT_GENERAL: 0,
    VSCP_TYPE_MEASUREMENT_COUNT: 1,
    VSCP_TYPE_MEASUREMENT_LENGTH: 2,
    VSCP_TYPE_MEASUREMENT_MASS: 3,
    VSCP_TYPE_MEASUREMENT_TIME: 4,
    VSCP_TYPE_MEASUREMENT_ELECTRIC_CURRENT: 5,
    VSCP_TYPE_MEASUREMENT_TEMPERATURE: 6,
    VSCP_TYPE_MEASUREMENT_AMOUNT_OF_SUBSTANCE: 7,
    VSCP_TYPE_MEASUREMENT_INTENSITY_OF_LIGHT: 8,
    VSCP_TYPE_MEASUREMENT_FREQUENCY: 9,
    VSCP_TYPE_MEASUREMENT_RADIOACTIVITY: 10,
    VSCP_TYPE_MEASUREMENT_FORCE: 11,
    VSCP_TYPE_MEASUREMENT_PRESSURE: 12,
    VSCP_TYPE_MEASUREMENT_ENERGY: 13,
    VSCP_TYPE_MEASUREMENT_POWER: 14,
    VSCP_TYPE_MEASUREMENT_ELECTRICAL_CHARGE: 15,
    VSCP_TYPE_MEASUREMENT_ELECTRICAL_POTENTIAL: 16,
    VSCP_TYPE_MEASUREMENT_ELECTRICAL_CAPACITANCE: 17,
    VSCP_TYPE_MEASUREMENT_ELECTRICAL_RESISTANCE: 18,
    VSCP_TYPE_MEASUREMENT_ELECTRICAL_CONDUCTANCE: 19,
    VSCP_TYPE_MEASUREMENT_MAGNETIC_FIELD_STRENGTH: 20,
    VSCP_TYPE_MEASUREMENT_MAGNETIC_FLUX: 21,
    VSCP_TYPE_MEASUREMENT_MAGNETIC_FLUX_DENSITY: 22,
    VSCP_TYPE_MEASUREMENT_INDUCTANCE: 23,
    VSCP_TYPE_MEASUREMENT_FLUX_OF_LIGHT: 24,
    VSCP_TYPE_MEASUREMENT_ILLUMINANCE: 25,
    VSCP_TYPE_MEASUREMENT_RADIATION_DOSE: 26,
    VSCP_TYPE_MEASUREMENT_CATALYTIC_ACITIVITY: 27,
    VSCP_TYPE_MEASUREMENT_VOLUME: 28,
    VSCP_TYPE_MEASUREMENT_SOUND_INTENSITY: 29,
    VSCP_TYPE_MEASUREMENT_ANGLE: 30,
    VSCP_TYPE_MEASUREMENT_POSITION: 31,
    VSCP_TYPE_MEASUREMENT_SPEED: 32,
    VSCP_TYPE_MEASUREMENT_ACCELERATION: 33,
    VSCP_TYPE_MEASUREMENT_TENSION: 34,
    VSCP_TYPE_MEASUREMENT_HUMIDITY: 35,
    VSCP_TYPE_MEASUREMENT_FLOW: 36,
    VSCP_TYPE_MEASUREMENT_THERMAL_RESISTANCE: 37,
    VSCP_TYPE_MEASUREMENT_REFRACTIVE_POWER: 38,
    VSCP_TYPE_MEASUREMENT_DYNAMIC_VISCOSITY: 39,
    VSCP_TYPE_MEASUREMENT_SOUND_IMPEDANCE: 40,
    VSCP_TYPE_MEASUREMENT_SOUND_RESISTANCE: 41,
    VSCP_TYPE_MEASUREMENT_ELECTRIC_ELASTANCE: 42,
    VSCP_TYPE_MEASUREMENT_LUMINOUS_ENERGY: 43,
    VSCP_TYPE_MEASUREMENT_LUMINANCE: 44,
    VSCP_TYPE_MEASUREMENT_CHEMICAL_CONCENTRATION: 45,
    VSCP_TYPE_MEASUREMENT_RESERVED46: 46,
    VSCP_TYPE_MEASUREMENT_DOSE_EQVIVALENT: 47,
    VSCP_TYPE_MEASUREMENT_RESERVED48: 48,
    VSCP_TYPE_MEASUREMENT_DEWPOINT: 49,
    VSCP_TYPE_MEASUREMENT_RELATIVE_LEVEL: 50,
    VSCP_TYPE_MEASUREMENT_ALTITUDE: 51,
    VSCP_TYPE_MEASUREMENT_AREA: 52,
    VSCP_TYPE_MEASUREMENT_RADIANT_INTENSITY: 53,
    VSCP_TYPE_MEASUREMENT_RADIANCE: 54,
    VSCP_TYPE_MEASUREMENT_IRRADIANCE: 55,
    VSCP_TYPE_MEASUREMENT_SPECTRAL_RADIANCE: 56,
    VSCP_TYPE_MEASUREMENT_SPECTRAL_IRRADIANCE: 57,
    VSCP_TYPE_MEASUREMENT_SOUND_PRESSURE: 58,
    VSCP_TYPE_MEASUREMENT_SOUND_DENSITY: 59,
    VSCP_TYPE_MEASUREMENT_SOUND_LEVEL: 60,
 
//  CLASS1.MEASUREMENTX1 = 11  -  Measurement
    VSCP_TYPE_MEASUREMENTX1_GENERAL: 0,
 
//  CLASS1.MEASUREMENTX2 = 12  -  Measurement
    VSCP_TYPE_MEASUREMENTX2_GENERAL: 0,
 
//  CLASS1.MEASUREMENTX3 = 13  -  Measurement
    VSCP_TYPE_MEASUREMENTX3_GENERAL: 0,
 
//  CLASS1.MEASUREMENTX4 = 14  -  Measurement
    VSCP_TYPE_MEASUREMENTX4_GENERAL: 0,
 
//  CLASS1.DATA = 15  -  Data
    VSCP_TYPE_DATA_GENERAL: 0,
    VSCP_TYPE_DATA_IO: 1,
    VSCP_TYPE_DATA_AD: 2,
    VSCP_TYPE_DATA_DA: 3,
    VSCP_TYPE_DATA_RELATIVE_STRENGTH: 4,
    VSCP_TYPE_DATA_SIGNAL_LEVEL: 5,
    VSCP_TYPE_DATA_SIGNAL_QUALITY: 6,
 
//  CLASS1.INFORMATION = 20  -  Information
    VSCP_TYPE_INFORMATION_GENERAL: 0,
    VSCP_TYPE_INFORMATION_BUTTON: 1,
    VSCP_TYPE_INFORMATION_MOUSE: 2,
    VSCP_TYPE_INFORMATION_ON: 3,
    VSCP_TYPE_INFORMATION_OFF: 4,
    VSCP_TYPE_INFORMATION_ALIVE: 5,
    VSCP_TYPE_INFORMATION_TERMINATING: 6,
    VSCP_TYPE_INFORMATION_OPENED: 7,
    VSCP_TYPE_INFORMATION_CLOSED: 8,
    VSCP_TYPE_INFORMATION_NODE_HEARTBEAT: 9,
    VSCP_TYPE_INFORMATION_BELOW_LIMIT: 10,
    VSCP_TYPE_INFORMATION_ABOVE_LIMIT: 11,
    VSCP_TYPE_INFORMATION_PULSE: 12,
    VSCP_TYPE_INFORMATION_ERROR: 13,
    VSCP_TYPE_INFORMATION_RESUMED: 14,
    VSCP_TYPE_INFORMATION_PAUSED: 15,
    VSCP_TYPE_INFORMATION_SLEEP: 16,
    VSCP_TYPE_INFORMATION_GOOD_MORNING: 17,
    VSCP_TYPE_INFORMATION_GOOD_DAY: 18,
    VSCP_TYPE_INFORMATION_GOOD_AFTERNOON: 19,
    VSCP_TYPE_INFORMATION_GOOD_EVENING: 20,
    VSCP_TYPE_INFORMATION_GOOD_NIGHT: 21,
    VSCP_TYPE_INFORMATION_SEE_YOU_SOON: 22,
    VSCP_TYPE_INFORMATION_GOODBYE: 23,
    VSCP_TYPE_INFORMATION_STOP: 24,
    VSCP_TYPE_INFORMATION_START: 25,
    VSCP_TYPE_INFORMATION_RESET_COMPLETED: 26,
    VSCP_TYPE_INFORMATION_INTERRUPTED: 27,
    VSCP_TYPE_INFORMATION_PREPARING_TO_SLEEP: 28,
    VSCP_TYPE_INFORMATION_WOKEN_UP: 29,
    VSCP_TYPE_INFORMATION_DUSK: 30,
    VSCP_TYPE_INFORMATION_DAWN: 31,
    VSCP_TYPE_INFORMATION_ACTIVE: 32,
    VSCP_TYPE_INFORMATION_INACTIVE: 33,
    VSCP_TYPE_INFORMATION_BUSY: 34,
    VSCP_TYPE_INFORMATION_IDLE: 35,
    VSCP_TYPE_INFORMATION_STREAM_DATA: 36,
    VSCP_TYPE_INFORMATION_TOKEN_ACTIVITY: 37,
    VSCP_TYPE_INFORMATION_STREAM_DATA_WITH_ZONE: 38,
    VSCP_TYPE_INFORMATION_CONFIRM: 39,
    VSCP_TYPE_INFORMATION_LEVEL_CHANGED: 40,
    VSCP_TYPE_INFORMATION_WARNING: 41,
    VSCP_TYPE_INFORMATION_STATE: 42,
    VSCP_TYPE_INFORMATION_ACTION_TRIGGER: 43,
    VSCP_TYPE_INFORMATION_SUNRISE: 44,
    VSCP_TYPE_INFORMATION_SUNSET: 45,
    VSCP_TYPE_INFORMATION_START_OF_RECORD: 46,
    VSCP_TYPE_INFORMATION_END_OF_RECORD: 47,
    VSCP_TYPE_INFORMATION_PRESET_ACTIVE: 48,
    VSCP_TYPE_INFORMATION_DETECT: 49,
    VSCP_TYPE_INFORMATION_OVERFLOW: 50,
    VSCP_TYPE_INFORMATION_BIG_LEVEL_CHANGED: 51,
    VSCP_TYPE_INFORMATION_SUNRISE_TWILIGHT_START: 52,
    VSCP_TYPE_INFORMATION_SUNSET_TWILIGHT_START: 53,
    VSCP_TYPE_INFORMATION_NAUTICAL_SUNRISE_TWILIGHT_START: 54,
    VSCP_TYPE_INFORMATION_NAUTICAL_SUNSET_TWILIGHT_START: 55,
    VSCP_TYPE_INFORMATION_ASTRONOMICAL_SUNRISE_TWILIGHT_START: 56,
    VSCP_TYPE_INFORMATION_ASTRONOMICAL_SUNSET_TWILIGHT_START: 57,
    VSCP_TYPE_INFORMATION_CALCULATED_NOON: 58,
    VSCP_TYPE_INFORMATION_SHUTTER_UP: 59,
    VSCP_TYPE_INFORMATION_SHUTTER_DOWN: 60,
    VSCP_TYPE_INFORMATION_SHUTTER_LEFT: 61,
    VSCP_TYPE_INFORMATION_SHUTTER_RIGHT: 62,
    VSCP_TYPE_INFORMATION_SHUTTER_END_TOP: 63,
    VSCP_TYPE_INFORMATION_SHUTTER_END_BOTTOM: 64,
    VSCP_TYPE_INFORMATION_SHUTTER_END_MIDDLE: 65,
    VSCP_TYPE_INFORMATION_SHUTTER_END_PRESET: 66,
    VSCP_TYPE_INFORMATION_SHUTTER_END_LEFT: 67,
    VSCP_TYPE_INFORMATION_SHUTTER_END_RIGHT: 68,
    VSCP_TYPE_INFORMATION_LONG_CLICK: 69,
    VSCP_TYPE_INFORMATION_SINGLE_CLICK: 70,
    VSCP_TYPE_INFORMATION_DOUBLE_CLICK: 71,
    VSCP_TYPE_INFORMATION_DATE: 72,
    VSCP_TYPE_INFORMATION_TIME: 73,
    VSCP_TYPE_INFORMATION_WEEKDAY: 74,
    VSCP_TYPE_INFORMATION_LOCK: 75,
    VSCP_TYPE_INFORMATION_UNLOCK: 76,
    VSCP_TYPE_INFORMATION_DATETIME: 77,
    VSCP_TYPE_INFORMATION_RISING: 78,
    VSCP_TYPE_INFORMATION_FALLING: 79,
    VSCP_TYPE_INFORMATION_UPDATED: 80,
 
//  CLASS1.CONTROL = 30  -  Control
    VSCP_TYPE_CONTROL_GENERAL: 0,
    VSCP_TYPE_CONTROL_MUTE: 1,
    VSCP_TYPE_CONTROL_ALL_LAMPS: 2,
    VSCP_TYPE_CONTROL_OPEN: 3,
    VSCP_TYPE_CONTROL_CLOSE: 4,
    VSCP_TYPE_CONTROL_TURNON: 5,
    VSCP_TYPE_CONTROL_TURNOFF: 6,
    VSCP_TYPE_CONTROL_START: 7,
    VSCP_TYPE_CONTROL_STOP: 8,
    VSCP_TYPE_CONTROL_RESET: 9,
    VSCP_TYPE_CONTROL_INTERRUPT: 10,
    VSCP_TYPE_CONTROL_SLEEP: 11,
    VSCP_TYPE_CONTROL_WAKEUP: 12,
    VSCP_TYPE_CONTROL_RESUME: 13,
    VSCP_TYPE_CONTROL_PAUSE: 14,
    VSCP_TYPE_CONTROL_ACTIVATE: 15,
    VSCP_TYPE_CONTROL_DEACTIVATE: 16,
    VSCP_TYPE_CONTROL_RESERVED17: 17,
    VSCP_TYPE_CONTROL_RESERVED18: 18,
    VSCP_TYPE_CONTROL_RESERVED19: 19,
    VSCP_TYPE_CONTROL_DIM_LAMPS: 20,
    VSCP_TYPE_CONTROL_CHANGE_CHANNEL: 21,
    VSCP_TYPE_CONTROL_CHANGE_LEVEL: 22,
    VSCP_TYPE_CONTROL_RELATIVE_CHANGE_LEVEL: 23,
    VSCP_TYPE_CONTROL_MEASUREMENT_REQUEST: 24,
    VSCP_TYPE_CONTROL_STREAM_DATA: 25,
    VSCP_TYPE_CONTROL_SYNC: 26,
    VSCP_TYPE_CONTROL_ZONED_STREAM_DATA: 27,
    VSCP_TYPE_CONTROL_SET_PRESET: 28,
    VSCP_TYPE_CONTROL_TOGGLE_STATE: 29,
    VSCP_TYPE_CONTROL_TIMED_PULSE_ON: 30,
    VSCP_TYPE_CONTROL_TIMED_PULSE_OFF: 31,
    VSCP_TYPE_CONTROL_SET_COUNTRY_LANGUAGE: 32,
    VSCP_TYPE_CONTROL_BIG_CHANGE_LEVEL: 33,
    VSCP_TYPE_CONTROL_SHUTTER_UP: 34,
    VSCP_TYPE_CONTROL_SHUTTER_DOWN: 35,
    VSCP_TYPE_CONTROL_SHUTTER_LEFT: 36,
    VSCP_TYPE_CONTROL_SHUTTER_RIGHT: 37,
    VSCP_TYPE_CONTROL_SHUTTER_MIDDLE: 38,
    VSCP_TYPE_CONTROL_SHUTTER_PRESET: 39,
    VSCP_TYPE_CONTROL_ALL_LAMPS_ON: 40,
    VSCP_TYPE_CONTROL_ALL_LAMPS_OFF: 41,
    VSCP_TYPE_CONTROL_LOCK: 42,
    VSCP_TYPE_CONTROL_UNLOCK: 43,
    VSCP_TYPE_CONTROL_PWM: 44,
    VSCP_TYPE_CONTROL_TOKEN_LOCK: 45,
    VSCP_TYPE_CONTROL_TOKEN_UNLOCK: 46,
    VSCP_TYPE_CONTROL_SET_SECURITY_LEVEL: 47,
    VSCP_TYPE_CONTROL_SET_SECURITY_PIN: 48,
    VSCP_TYPE_CONTROL_SET_SECURITY_PASSWORD: 49,
    VSCP_TYPE_CONTROL_SET_SECURITY_TOKEN: 50,
    VSCP_TYPE_CONTROL_REQUEST_SECURITY_TOKEN: 51,
 
//  CLASS1.MULTIMEDIA = 40  -  Multimedia
    VSCP_TYPE_MULTIMEDIA_GENERAL: 0,
    VSCP_TYPE_MULTIMEDIA_PLAYBACK: 1,
    VSCP_TYPE_MULTIMEDIA_NAVIGATOR_KEY_ENG: 2,
    VSCP_TYPE_MULTIMEDIA_ADJUST_CONTRAST: 3,
    VSCP_TYPE_MULTIMEDIA_ADJUST_FOCUS: 4,
    VSCP_TYPE_MULTIMEDIA_ADJUST_TINT: 5,
    VSCP_TYPE_MULTIMEDIA_ADJUST_COLOUR_BALANCE: 6,
    VSCP_TYPE_MULTIMEDIA_ADJUST_BRIGHTNESS: 7,
    VSCP_TYPE_MULTIMEDIA_ADJUST_HUE: 8,
    VSCP_TYPE_MULTIMEDIA_ADJUST_BASS: 9,
    VSCP_TYPE_MULTIMEDIA_ADJUST_TREBLE: 10,
    VSCP_TYPE_MULTIMEDIA_ADJUST_MASTER_VOLUME: 11,
    VSCP_TYPE_MULTIMEDIA_ADJUST_FRONT_VOLUME: 12,
    VSCP_TYPE_MULTIMEDIA_ADJUST_CENTRE_VOLUME: 13,
    VSCP_TYPE_MULTIMEDIA_ADJUST_REAR_VOLUME: 14,
    VSCP_TYPE_MULTIMEDIA_ADJUST_SIDE_VOLUME: 15,
    VSCP_TYPE_MULTIMEDIA_RESERVED16: 16,
    VSCP_TYPE_MULTIMEDIA_RESERVED17: 17,
    VSCP_TYPE_MULTIMEDIA_RESERVED18: 18,
    VSCP_TYPE_MULTIMEDIA_RESERVED19: 19,
    VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_DISK: 20,
    VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_TRACK: 21,
    VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_ALBUM: 22,
    VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_CHANNEL: 23,
    VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_PAGE: 24,
    VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_CHAPTER: 25,
    VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_SCREEN_FORMAT: 26,
    VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_INPUT_SOURCE: 27,
    VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_OUTPUT: 28,
    VSCP_TYPE_MULTIMEDIA_RECORD: 29,
    VSCP_TYPE_MULTIMEDIA_SET_RECORDING_VOLUME: 30,
    VSCP_TYPE_MULTIMEDIA_TIVO_FUNCTION: 40,
    VSCP_TYPE_MULTIMEDIA_GET_CURRENT_TITLE: 50,
    VSCP_TYPE_MULTIMEDIA_SET_POSITION: 51,
    VSCP_TYPE_MULTIMEDIA_GET_MEDIA_INFO: 52,
    VSCP_TYPE_MULTIMEDIA_REMOVE_ITEM: 53,
    VSCP_TYPE_MULTIMEDIA_REMOVE_ALL_ITEMS: 54,
    VSCP_TYPE_MULTIMEDIA_SAVE_ALBUM: 55,
    VSCP_TYPE_MULTIMEDIA_CONTROL: 60,
    VSCP_TYPE_MULTIMEDIA_CONTROL_RESPONSE: 61,
 
//  CLASS1.AOL = 50  -  Alert On LAN
    VSCP_TYPE_AOL_GENERAL: 0,
    VSCP_TYPE_AOL_UNPLUGGED_POWER: 1,
    VSCP_TYPE_AOL_UNPLUGGED_LAN: 2,
    VSCP_TYPE_AOL_CHASSIS_INTRUSION: 3,
    VSCP_TYPE_AOL_PROCESSOR_REMOVAL: 4,
    VSCP_TYPE_AOL_ENVIRONMENT_ERROR: 5,
    VSCP_TYPE_AOL_HIGH_TEMPERATURE: 6,
    VSCP_TYPE_AOL_FAN_SPEED: 7,
    VSCP_TYPE_AOL_VOLTAGE_FLUCTUATIONS: 8,
    VSCP_TYPE_AOL_OS_ERROR: 9,
    VSCP_TYPE_AOL_POWER_ON_ERROR: 10,
    VSCP_TYPE_AOL_SYSTEM_HUNG: 11,
    VSCP_TYPE_AOL_COMPONENT_FAILURE: 12,
    VSCP_TYPE_AOL_REBOOT_UPON_FAILURE: 13,
    VSCP_TYPE_AOL_REPAIR_OPERATING_SYSTEM: 14,
    VSCP_TYPE_AOL_UPDATE_BIOS_IMAGE: 15,
    VSCP_TYPE_AOL_UPDATE_DIAGNOSTIC_PROCEDURE: 16,
 
//  CLASS1.MEASUREMENT64 = 60  -  Double precision floating point measurement
// Event types is the same as  CLASS1.MEASUREMENT = 10  -  Measurement
 
//  CLASS1.MEASUREMENT64X1 = 61  -  Double precision floating point measurement
// Event types is the same as  CLASS1.MEASUREMENTX1 = 11  -  Measurement
 
//  CLASS1.MEASUREMENT64X2 = 62  -  Double precision floating point measurement
// Event types is the same as  CLASS1.MEASUREMENTX2 = 12  -  Measurement
 
//  CLASS1.MEASUREMENT64X3 = 63  -  Double precision floating point measurement
// Event types is the same as  CLASS1.MEASUREMENTX3 = 13  -  Measurement
 
//  CLASS1.MEASUREMENT64X4 = 64  -  Double precision floating point measurement
// Event types is the same as  CLASS1.MEASUREMENTX4 = 14  -  Measurement
 
//  CLASS1.MEASUREZONE = 65  -  Measurement with zone
// Event types is the same as  CLASS1.MEASUREMENT = 10  -  Measurement
 
//  CLASS1.MEASUREZONEX1 = 66  -  Measurement with zone
// Event types is the same as  CLASS1.MEASUREMENTX1 = 11  -  Measurement
 
//  CLASS1.MEASUREZONEX2 = 67  -  Measurement with zone
// Event types is the same as  CLASS1.MEASUREMENTX2 = 12  -  Measurement
 
//  CLASS1.MEASUREZONEX3 = 68  -  Measurement with zone
// Event types is the same as  CLASS1.MEASUREMENTX3 = 13  -  Measurement
 
//  CLASS1.MEASUREZONEX4 = 69  -  Measurement with zone
// Event types is the same as  CLASS1.MEASUREMENTX4 = 14  -  Measurement
 
//  CLASS1.MEASUREMENT32 = 70  -  Single precision floating point measurement
// Event types is the same as  CLASS1.MEASUREMENT = 10  -  Measurement
 
//  CLASS1.MEASUREMENT32X1 = 71  -  Single precision floating point measurement
// Event types is the same as  CLASS1.MEASUREMENTX1 = 11  -  Measurement
 
//  CLASS1.MEASUREMENT32X2 = 72  -  Single precision floating point measurement
// Event types is the same as  CLASS1.MEASUREMENTX2 = 12  -  Measurement
 
//  CLASS1.MEASUREMENT32X3 = 73  -  Single precision floating point measurement
// Event types is the same as  CLASS1.MEASUREMENTX3 = 13  -  Measurement
 
//  CLASS1.MEASUREMENT32X4 = 74  -  Single precision floating point measurement
// Event types is the same as  CLASS1.MEASUREMENTX4 = 14  -  Measurement
 
//  CLASS1.SETVALUEZONE = 85  -  Set value with zone
// Event types is the same as  CLASS1.MEASUREMENT = 10  -  Measurement
 
//  CLASS1.SETVALUEZONEX1 = 86  -  Set value with zone
// Event types is the same as  CLASS1.MEASUREMENTX1 = 11  -  Measurement
 
//  CLASS1.SETVALUEZONEX2 = 87  -  Set value with zone
// Event types is the same as  CLASS1.MEASUREMENTX2 = 12  -  Measurement
 
//  CLASS1.SETVALUEZONEX3 = 88  -  Set value with zone
// Event types is the same as  CLASS1.MEASUREMENTX3 = 13  -  Measurement
 
//  CLASS1.SETVALUEZONEX4 = 89  -  Set value with zone
// Event types is the same as  CLASS1.MEASUREMENTX4 = 14  -  Measurement
 
//  CLASS1.WEATHER = 90  -  Weather
    VSCP_TYPE_WEATHER_GENERAL: 0,
    VSCP_TYPE_WEATHER_SEASONS_WINTER: 1,
    VSCP_TYPE_WEATHER_SEASONS_SPRING: 2,
    VSCP_TYPE_WEATHER_SEASONS_SUMMER: 3,
    VSCP_TYPE_WEATHER_SEASONS_AUTUMN: 4,
    VSCP_TYPE_WEATHER_WIND_NONE: 5,
    VSCP_TYPE_WEATHER_WIND_LOW: 6,
    VSCP_TYPE_WEATHER_WIND_MEDIUM: 7,
    VSCP_TYPE_WEATHER_WIND_HIGH: 8,
    VSCP_TYPE_WEATHER_WIND_VERY_HIGH: 9,
    VSCP_TYPE_WEATHER_AIR_FOGGY: 10,
    VSCP_TYPE_WEATHER_AIR_FREEZING: 11,
    VSCP_TYPE_WEATHER_AIR_VERY_COLD: 12,
    VSCP_TYPE_WEATHER_AIR_COLD: 13,
    VSCP_TYPE_WEATHER_AIR_NORMAL: 14,
    VSCP_TYPE_WEATHER_AIR_HOT: 15,
    VSCP_TYPE_WEATHER_AIR_VERY_HOT: 16,
    VSCP_TYPE_WEATHER_AIR_POLLUTION_LOW: 17,
    VSCP_TYPE_WEATHER_AIR_POLLUTION_MEDIUM: 18,
    VSCP_TYPE_WEATHER_AIR_POLLUTION_HIGH: 19,
    VSCP_TYPE_WEATHER_AIR_HUMID: 20,
    VSCP_TYPE_WEATHER_AIR_DRY: 21,
    VSCP_TYPE_WEATHER_SOIL_HUMID: 22,
    VSCP_TYPE_WEATHER_SOIL_DRY: 23,
    VSCP_TYPE_WEATHER_RAIN_NONE: 24,
    VSCP_TYPE_WEATHER_RAIN_LIGHT: 25,
    VSCP_TYPE_WEATHER_RAIN_HEAVY: 26,
    VSCP_TYPE_WEATHER_RAIN_VERY_HEAVY: 27,
    VSCP_TYPE_WEATHER_SUN_NONE: 28,
    VSCP_TYPE_WEATHER_SUN_LIGHT: 29,
    VSCP_TYPE_WEATHER_SUN_HEAVY: 30,
    VSCP_TYPE_WEATHER_SNOW_NONE: 31,
    VSCP_TYPE_WEATHER_SNOW_LIGHT: 32,
    VSCP_TYPE_WEATHER_SNOW_HEAVY: 33,
    VSCP_TYPE_WEATHER_DEW_POINT: 34,
    VSCP_TYPE_WEATHER_STORM: 35,
    VSCP_TYPE_WEATHER_FLOOD: 36,
    VSCP_TYPE_WEATHER_EARTHQUAKE: 37,
    VSCP_TYPE_WEATHER_NUCLEAR_DISASTER: 38,
    VSCP_TYPE_WEATHER_FIRE: 39,
    VSCP_TYPE_WEATHER_LIGHTNING: 40,
    VSCP_TYPE_WEATHER_UV_RADIATION_LOW: 41,
    VSCP_TYPE_WEATHER_UV_RADIATION_MEDIUM: 42,
    VSCP_TYPE_WEATHER_UV_RADIATION_NORMAL: 43,
    VSCP_TYPE_WEATHER_UV_RADIATION_HIGH: 44,
    VSCP_TYPE_WEATHER_UV_RADIATION_VERY_HIGH: 45,
    VSCP_TYPE_WEATHER_WARNING_LEVEL1: 46,
    VSCP_TYPE_WEATHER_WARNING_LEVEL2: 47,
    VSCP_TYPE_WEATHER_WARNING_LEVEL3: 48,
    VSCP_TYPE_WEATHER_WARNING_LEVEL4: 49,
    VSCP_TYPE_WEATHER_WARNING_LEVEL5: 50,
    VSCP_TYPE_WEATHER_ARMAGEDON: 51,
    VSCP_TYPE_WEATHER_UV_INDEX: 52,
 
//  CLASS1.WEATHER_FORECAST = 95  -  Weather forecast
// Event types is the same as  CLASS1.WEATHER = 90  -  Weather
 
//  CLASS1.PHONE = 100  -  Phone
    VSCP_TYPE_PHONE_GENERAL: 0,
    VSCP_TYPE_PHONE_INCOMING_CALL: 1,
    VSCP_TYPE_PHONE_OUTGOING_CALL: 2,
    VSCP_TYPE_PHONE_RING: 3,
    VSCP_TYPE_PHONE_ANSWER: 4,
    VSCP_TYPE_PHONE_HANGUP: 5,
    VSCP_TYPE_PHONE_GIVEUP: 6,
    VSCP_TYPE_PHONE_TRANSFER: 7,
    VSCP_TYPE_PHONE_DATABASE_INFO: 8,
 
//  CLASS1.DISPLAY = 102  -  Display
    VSCP_TYPE_DISPLAY_GENERAL: 0,
    VSCP_TYPE_DISPLAY_CLEAR_DISPLAY: 1,
    VSCP_TYPE_DISPLAY_POSITION_CURSOR: 2,
    VSCP_TYPE_DISPLAY_WRITE_DISPLAY: 3,
    VSCP_TYPE_DISPLAY_WRITE_DISPLAY_BUFFER: 4,
    VSCP_TYPE_DISPLAY_SHOW_DISPLAY_BUFFER: 5,
    VSCP_TYPE_DISPLAY_SET_DISPLAY_BUFFER_PARAM: 6,
    VSCP_TYPE_DISPLAY_SHOW_TEXT: 32,
    VSCP_TYPE_DISPLAY_SHOW_LED: 48,
    VSCP_TYPE_DISPLAY_SHOW_LED_COLOR: 49,
 
//  CLASS1.IR = 110  -  IR Remote I/f
    VSCP_TYPE_REMOTE_GENERAL: 0,
    VSCP_TYPE_REMOTE_RC5: 1,
    VSCP_TYPE_REMOTE_SONY12: 3,
    VSCP_TYPE_REMOTE_LIRC: 32,
    VSCP_TYPE_REMOTE_VSCP: 48,
    VSCP_TYPE_REMOTE_MAPITO: 49,
 
//  CLASS1.GNSS = 206  -  Position (GNSS)
    VSCP_TYPE_GNSS_GENERAL: 0,
    VSCP_TYPE_GNSS_POSITION: 1,
    VSCP_TYPE_GNSS_SATELLITES: 2,
 
//  CLASS1.WIRELESS = 212  -  Wireless
    VSCP_TYPE_WIRELESS_GENERAL: 0,
    VSCP_TYPE_WIRELESS_GSM_CELL: 1,
 
//  CLASS1.DIAGNOSTIC = 506  -  Diagnostic
    VSCP_TYPE_DIAGNOSTIC_GENERAL: 0,
    VSCP_TYPE_DIAGNOSTIC_OVERVOLTAGE: 1,
    VSCP_TYPE_DIAGNOSTIC_UNDERVOLTAGE: 2,
    VSCP_TYPE_DIAGNOSTIC_VBUS_LOW: 3,
    VSCP_TYPE_DIAGNOSTIC_BATTERY_LOW: 4,
    VSCP_TYPE_DIAGNOSTIC_BATTERY_FULL: 5,
    VSCP_TYPE_DIAGNOSTIC_BATTERY_ERROR: 6,
    VSCP_TYPE_DIAGNOSTIC_BATTERY_OK: 7,
    VSCP_TYPE_DIAGNOSTIC_OVERCURRENT: 8,
    VSCP_TYPE_DIAGNOSTIC_CIRCUIT_ERROR: 9,
    VSCP_TYPE_DIAGNOSTIC_SHORT_CIRCUIT: 10,
    VSCP_TYPE_DIAGNOSTIC_OPEN_CIRCUIT: 11,
    VSCP_TYPE_DIAGNOSTIC_MOIST: 12,
    VSCP_TYPE_DIAGNOSTIC_WIRE_FAIL: 13,
    VSCP_TYPE_DIAGNOSTIC_WIRELESS_FAIL: 14,
    VSCP_TYPE_DIAGNOSTIC_IR_FAIL: 15,
    VSCP_TYPE_DIAGNOSTIC_1WIRE_FAIL: 16,
    VSCP_TYPE_DIAGNOSTIC_RS222_FAIL: 17,
    VSCP_TYPE_DIAGNOSTIC_RS232_FAIL: 18,
    VSCP_TYPE_DIAGNOSTIC_RS423_FAIL: 19,
    VSCP_TYPE_DIAGNOSTIC_RS485_FAIL: 20,
    VSCP_TYPE_DIAGNOSTIC_CAN_FAIL: 21,
    VSCP_TYPE_DIAGNOSTIC_LAN_FAIL: 22,
    VSCP_TYPE_DIAGNOSTIC_USB_FAIL: 23,
    VSCP_TYPE_DIAGNOSTIC_WIFI_FAIL: 24,
    VSCP_TYPE_DIAGNOSTIC_NFC_RFID_FAIL: 25,
    VSCP_TYPE_DIAGNOSTIC_LOW_SIGNAL: 26,
    VSCP_TYPE_DIAGNOSTIC_HIGH_SIGNAL: 27,
    VSCP_TYPE_DIAGNOSTIC_ADC_FAIL: 28,
    VSCP_TYPE_DIAGNOSTIC_ALU_FAIL: 29,
    VSCP_TYPE_DIAGNOSTIC_ASSERT: 30,
    VSCP_TYPE_DIAGNOSTIC_DAC_FAIL: 31,
    VSCP_TYPE_DIAGNOSTIC_DMA_FAIL: 32,
    VSCP_TYPE_DIAGNOSTIC_ETH_FAIL: 33,
    VSCP_TYPE_DIAGNOSTIC_EXCEPTION: 34,
    VSCP_TYPE_DIAGNOSTIC_FPU_FAIL: 35,
    VSCP_TYPE_DIAGNOSTIC_GPIO_FAIL: 36,
    VSCP_TYPE_DIAGNOSTIC_I2C_FAIL: 37,
    VSCP_TYPE_DIAGNOSTIC_I2S_FAIL: 38,
    VSCP_TYPE_DIAGNOSTIC_INVALID_CONFIG: 39,
    VSCP_TYPE_DIAGNOSTIC_MMU_FAIL: 40,
    VSCP_TYPE_DIAGNOSTIC_NMI: 41,
    VSCP_TYPE_DIAGNOSTIC_OVERHEAT: 42,
    VSCP_TYPE_DIAGNOSTIC_PLL_FAIL: 43,
    VSCP_TYPE_DIAGNOSTIC_POR_FAIL: 44,
    VSCP_TYPE_DIAGNOSTIC_PWM_FAIL: 45,
    VSCP_TYPE_DIAGNOSTIC_RAM_FAIL: 46,
    VSCP_TYPE_DIAGNOSTIC_ROM_FAIL: 47,
    VSCP_TYPE_DIAGNOSTIC_SPI_FAIL: 48,
    VSCP_TYPE_DIAGNOSTIC_STACK_FAIL: 49,
    VSCP_TYPE_DIAGNOSTIC_LIN_FAIL: 50,
    VSCP_TYPE_DIAGNOSTIC_UART_FAIL: 51,
    VSCP_TYPE_DIAGNOSTIC_UNHANDLED_INT: 52,
    VSCP_TYPE_DIAGNOSTIC_MEMORY_FAIL: 53,
    VSCP_TYPE_DIAGNOSTIC_VARIABLE_RANGE: 54,
    VSCP_TYPE_DIAGNOSTIC_WDT: 55,
    VSCP_TYPE_DIAGNOSTIC_EEPROM_FAIL: 56,
    VSCP_TYPE_DIAGNOSTIC_ENCRYPTION_FAIL: 57,
    VSCP_TYPE_DIAGNOSTIC_BAD_USER_INPUT: 58,
    VSCP_TYPE_DIAGNOSTIC_DECRYPTION_FAIL: 59,
    VSCP_TYPE_DIAGNOSTIC_NOISE: 60,
    VSCP_TYPE_DIAGNOSTIC_BOOTLOADER_FAIL: 61,
    VSCP_TYPE_DIAGNOSTIC_PROGRAMFLOW_FAIL: 62,
    VSCP_TYPE_DIAGNOSTIC_RTC_FAIL: 63,
    VSCP_TYPE_DIAGNOSTIC_SYSTEM_TEST_FAIL: 64,
    VSCP_TYPE_DIAGNOSTIC_SENSOR_FAIL: 65,
    VSCP_TYPE_DIAGNOSTIC_SAFESTATE: 66,
    VSCP_TYPE_DIAGNOSTIC_SIGNAL_IMPLAUSIBLE: 67,
    VSCP_TYPE_DIAGNOSTIC_STORAGE_FAIL: 68,
    VSCP_TYPE_DIAGNOSTIC_SELFTEST_FAIL: 69,
    VSCP_TYPE_DIAGNOSTIC_ESD_EMC_EMI: 70,
    VSCP_TYPE_DIAGNOSTIC_TIMEOUT: 71,
    VSCP_TYPE_DIAGNOSTIC_LCD_FAIL: 72,
    VSCP_TYPE_DIAGNOSTIC_TOUCHPANEL_FAIL: 73,
    VSCP_TYPE_DIAGNOSTIC_NOLOAD: 74,
    VSCP_TYPE_DIAGNOSTIC_COOLING_FAIL: 75,
    VSCP_TYPE_DIAGNOSTIC_HEATING_FAIL: 76,
    VSCP_TYPE_DIAGNOSTIC_TX_FAIL: 77,
    VSCP_TYPE_DIAGNOSTIC_RX_FAIL: 78,
    VSCP_TYPE_DIAGNOSTIC_EXT_IC_FAIL: 79,
 
//  CLASS1.ERROR = 508  -  Error
    VSCP_TYPE_ERROR_SUCCESS: 0,
    VSCP_TYPE_ERROR_ERROR: 1,
    VSCP_TYPE_ERROR_CHANNEL: 7,
    VSCP_TYPE_ERROR_FIFO_EMPTY: 8,
    VSCP_TYPE_ERROR_FIFO_FULL: 9,
    VSCP_TYPE_ERROR_FIFO_SIZE: 10,
    VSCP_TYPE_ERROR_FIFO_WAIT: 11,
    VSCP_TYPE_ERROR_GENERIC: 12,
    VSCP_TYPE_ERROR_HARDWARE: 13,
    VSCP_TYPE_ERROR_INIT_FAIL: 14,
    VSCP_TYPE_ERROR_INIT_MISSING: 15,
    VSCP_TYPE_ERROR_INIT_READY: 16,
    VSCP_TYPE_ERROR_NOT_SUPPORTED: 17,
    VSCP_TYPE_ERROR_OVERRUN: 18,
    VSCP_TYPE_ERROR_RCV_EMPTY: 19,
    VSCP_TYPE_ERROR_REGISTER: 20,
    VSCP_TYPE_ERROR_TRM_FULL: 21,
    VSCP_TYPE_ERROR_LIBRARY: 28,
    VSCP_TYPE_ERROR_PROCADDRESS: 29,
    VSCP_TYPE_ERROR_ONLY_ONE_INSTANCE: 30,
    VSCP_TYPE_ERROR_SUB_DRIVER: 31,
    VSCP_TYPE_ERROR_TIMEOUT: 32,
    VSCP_TYPE_ERROR_NOT_OPEN: 33,
    VSCP_TYPE_ERROR_PARAMETER: 34,
    VSCP_TYPE_ERROR_MEMORY: 35,
    VSCP_TYPE_ERROR_INTERNAL: 36,
    VSCP_TYPE_ERROR_COMMUNICATION: 37,
    VSCP_TYPE_ERROR_USER: 38,
    VSCP_TYPE_ERROR_PASSWORD: 39,
    VSCP_TYPE_ERROR_CONNECTION: 40,
    VSCP_TYPE_ERROR_INVALID_HANDLE: 41,
    VSCP_TYPE_ERROR_OPERATION_FAILED: 42,
    VSCP_TYPE_ERROR_BUFFER_SMALL: 43,
    VSCP_TYPE_ERROR_ITEM_UNKNOWN: 44,
    VSCP_TYPE_ERROR_NAME_USED: 45,
    VSCP_TYPE_ERROR_DATA_WRITE: 46,
    VSCP_TYPE_ERROR_ABORTED: 47,
    VSCP_TYPE_ERROR_INVALID_POINTER: 48,
 
//  CLASS1.LOG = 509  -  Logging
    VSCP_TYPE_LOG_GENERAL: 0,
    VSCP_TYPE_LOG_MESSAGE: 1,
    VSCP_TYPE_LOG_START: 2,
    VSCP_TYPE_LOG_STOP: 3,
    VSCP_TYPE_LOG_LEVEL: 4,
 
//  CLASS1.LABORATORY = 510  -  Laboratory use
    VSCP_TYPE_LABORATORY_GENERAL: 0,
 
//  CLASS1.LOCAL = 511  -  Local use
    VSCP_TYPE_LOCAL_GENERAL: 0,
 
//  CLASS2.LEVEL1.PROTOCOL = 512  -  Class2 Level I Protocol
// Event types is the same as  CLASS1.PROTOCOL = 0  -  VSCP Protocol Functionality
 
//  CLASS2.LEVEL1.ALARM = 513  -  Class2 Level I Alarm
// Event types is the same as  CLASS1.ALARM = 1  -  Alarm functionality
 
//  CLASS2.LEVEL1.SECURITY = 514  -  Class2 Level I Security
// Event types is the same as  CLASS1.SECURITY = 2  -  Security
 
//  CLASS2.LEVEL1.MEASUREMENT = 522  -  Class2 Level I Measurements
// Event types is the same as  CLASS1.MEASUREMENT = 10  -  Measurement
 
//  CLASS2.LEVEL1.DATA = 527  -  Class2 Level I Data
// Event types is the same as  CLASS1.DATA = 15  -  Data
 
//  CLASS2.LEVEL1.INFORMATION1 = 532  -  Class2 Level I Information
// Event types is the same as  CLASS1.INFORMATION = 20  -  Information
 
//  CLASS2.LEVEL1.CONTROL = 542  -  Class2 Level I Control
// Event types is the same as  CLASS1.CONTROL = 30  -  Control
 
//  CLASS2.LEVEL1.MULTIMEDIA = 552  -  Class2 Level I Multimedia
// Event types is the same as  CLASS1.MULTIMEDIA = 40  -  Multimedia
 
//  CLASS2.LEVEL1.AOL = 562  -  Class2 Level I AOL
// Event types is the same as  CLASS1.AOL = 50  -  Alert On LAN
 
//  CLASS2.LEVEL1.MEASUREMENT64 = 572  -  Class2 Level I Measurement64
// Event types is the same as  CLASS1.MEASUREMENT = 10  -  Measurement
 
//  CLASS2.LEVEL1.MEASUREZONE = 577  -  Class2 Level I Measurementzone
// Event types is the same as  CLASS1.MEASUREMENT = 10  -  Measurement
 
//  CLASS2.LEVEL1.MEASUREMENT32 = 582  -  Class2 Level I Measuremet32
// Event types is the same as  CLASS1.MEASUREMENT = 10  -  Measurement
 
//  CLASS2.LEVEL1.SETVALUEZONE = 597  -  Class2 Level I SetValueZone
// Event types is the same as  CLASS1.MEASUREMENT = 10  -  Measurement
 
//  CLASS2.LEVEL1.WEATHER = 602  -  Class2 Level I Weather
// Event types is the same as  CLASS1.WEATHER = 90  -  Weather
 
//  CLASS2.LEVEL1.WEATHERFORECAST = 607  -  Class2 Level I Weather Forecast
// Event types is the same as  CLASS1.WEATHER = 90  -  Weather
 
//  CLASS2.LEVEL1.PHONE = 612  -  Class2 Level I Phone
// Event types is the same as  CLASS1.PHONE = 100  -  Phone
 
//  CLASS2.LEVEL1.DISPLAY = 614  -  Class2 Level I Display
// Event types is the same as  CLASS1.DISPLAY = 102  -  Display
 
//  CLASS2.LEVEL1.IR = 622  -  Class2 Level I IR
// Event types is the same as  CLASS1.IR = 110  -  IR Remote I/f
 
//  CLASS2.LEVEL1.GNSS = 718  -  Class2 Level I GNSS
// Event types is the same as  CLASS1.GNSS = 206  -  Position (GNSS)
 
//  CLASS2.LEVEL1.WIRELESS = 724  -  Class2 Level I Wireless
// Event types is the same as  CLASS1.WIRELESS = 212  -  Wireless
 
//  CLASS2.LEVEL1.DIAGNOSTIC = 1018  -  Class2 Level I Diagnostic
// Event types is the same as  CLASS1.DIAGNOSTIC = 506  -  Diagnostic
 
//  CLASS2.LEVEL1.ERROR = 1020  -  Class2 Level I Error
// Event types is the same as  CLASS1.ERROR = 508  -  Error
 
//  CLASS2.LEVEL1.LOG = 1021  -  Class2 Level I Log
// Event types is the same as  CLASS1.LOG = 509  -  Logging
 
//  CLASS2.LEVEL1.LABORATORY = 1022  -  Class2 Level I Laboratory
// Event types is the same as  CLASS1.LABORATORY = 510  -  Laboratory use
 
//  CLASS2.LEVEL1.LOCAL = 1023  -  Class2 Level I Local
// Event types is the same as  CLASS1.LOCAL = 511  -  Local use
 
//  CLASS2.PROTOCOL = 1024  -  Level II Protocol Functionality
    VSCP2_TYPE_PROTOCOL_GENERAL: 0,
    VSCP2_TYPE_PROTOCOL_READ_REGISTER: 1,
    VSCP2_TYPE_PROTOCOL_WRITE_REGISTER: 2,
    VSCP2_TYPE_PROTOCOL_READ_WRITE_RESPONSE: 3,
    VSCP2_TYPE_PROTOCOL_HIGH_END_SERVER_CAPS: 20,
    VSCP2_TYPE_PROTOCOL_WHO_IS_THERE_RESPONSE: 32,
    VSCP2_TYPE_PROTOCOL_HIGH_LEVEL_OBJECT: 42,
 
//  CLASS2.CONTROL = 1025  -  Level II Control
    VSCP2_TYPE_CONTROL_GENERAL: 0,
 
//  CLASS2.INFORMATION = 1026  -  Level II Information
    VSCP2_TYPE_INFORMATION_GENERAL: 0,
    VSCP2_TYPE_INFORMATION_TOKEN_ACTIVITY: 1,
    VSCP2_TYPE_INFORMATION_HEART_BEAT: 2,
    VSCP2_TYPE_INFORMATION_PROXY_HEART_BEAT: 3,
    VSCP2_TYPE_INFORMATION_CHANNEL_ANNOUNCE: 4,
 
//  CLASS2.TEXT2SPEECH = 1027  -  Text to speech
    VSCP2_TYPE_TEXT2SPEECH_GENERAL: 0,
    VSCP2_TYPE_TEXT2SPEECH_TALK: 1,
 
//  CLASS2.CUSTOM = 1029  -  Level II Custom
    VSCP2_TYPE_CUSTOM_GENERAL: 0,
 
//  CLASS2.DISPLAY = 1030  -  Level II Display
    VSCP2_TYPE_DISPLAY_GENERAL: 0,
 
//  CLASS2.MEASUREMENT_STR = 1040  -  Measurement string
// Event types is the same as  CLASS1.MEASUREMENT = 10  -  Measurement
 
//  CLASS2.MEASUREMENT_FLOAT = 1060  -  Measurement float
// Event types is the same as  CLASS1.MEASUREMENT = 10  -  Measurement
 
//  CLASS2.VSCPD = 65535  -  VSCP Daemon internal events
    VSCP2_TYPE_VSCPD_GENERAL: 0,
    VSCP2_TYPE_VSCPD_LOOP: 1,
    VSCP2_TYPE_VSCPD_PAUSE: 3,
    VSCP2_TYPE_VSCPD_ACTIVATE: 4,
    VSCP2_TYPE_VSCPD_SECOND: 5,
    VSCP2_TYPE_VSCPD_MINUTE: 6,
    VSCP2_TYPE_VSCPD_HOUR: 7,
    VSCP2_TYPE_VSCPD_NOON: 8,
    VSCP2_TYPE_VSCPD_MIDNIGHT: 9,
    VSCP2_TYPE_VSCPD_WEEK: 11,
    VSCP2_TYPE_VSCPD_MONTH: 12,
    VSCP2_TYPE_VSCPD_QUARTER: 13,
    VSCP2_TYPE_VSCPD_YEAR: 14,
    VSCP2_TYPE_VSCPD_RANDOM_MINUTE: 15,
    VSCP2_TYPE_VSCPD_RANDOM_HOUR: 16,
    VSCP2_TYPE_VSCPD_RANDOM_DAY: 17,
    VSCP2_TYPE_VSCPD_RANDOM_WEEK: 18,
    VSCP2_TYPE_VSCPD_RANDOM_MONTH: 19,
    VSCP2_TYPE_VSCPD_RANDOM_YEAR: 20,
    VSCP2_TYPE_VSCPD_DUSK: 21,
    VSCP2_TYPE_VSCPD_DAWN: 22,
    VSCP2_TYPE_VSCPD_STARTING_UP: 23,
    VSCP2_TYPE_VSCPD_SHUTTING_DOWN: 24,
    VSCP2_TYPE_VSCPD_TIMER_STARTED: 25,
    VSCP2_TYPE_VSCPD_TIMER_PAUSED: 26,
    VSCP2_TYPE_VSCPD_TIMER_RESUMED: 27,
    VSCP2_TYPE_VSCPD_TIMER_STOPPED: 28,
    VSCP2_TYPE_VSCPD_TIMER_ELLAPSED: 29,
    VSCP2_TYPE_VSCPD_NEW_CALCULATION: 30,
    VSCP2_TYPE_VSCPD_DRV3_START: 31,
    VSCP2_TYPE_VSCPD_DRV3_STOP: 32,
    VSCP2_TYPE_VSCPD_DRV3_PAUSE: 33,
    VSCP2_TYPE_VSCPD_DRV3_RESUME: 34,
    VSCP2_TYPE_VSCPD_DRV3_RESTART: 35,
    VSCP2_TYPE_VSCPD_DRV3_CONFIG: 36 
 
};
