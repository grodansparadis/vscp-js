<a id="vscp"></a>

## vscp : `object`
Namespace for all functionality of the VSCP provided libraries.

**Kind**: global namespace  

* [vscp](#vscp_dot_Event) : `object`
    * [.Event](#vscp_dot_events)
        * [new vscp.Event(options)](#new_vscp_dot_Event_new)
        * [.vscpHead](#vscp_dot_Event_plus_vscpHead) : `number`
        * [.vscpClass](#vscp_dot_Event_plus_vscpClass) : `number`
        * [.vscpType](#vscp_dot_Event_plus_vscpType) : `number`
        * [.vscpObId](#vscp_dot_Event_plus_vscpObId) : `number`
        * [.vscpTimeStamp](#vscp_dot_Event_plus_vscpTimeStamp) : `number`
        * [.vscpDateTime](#vscp_dot_Event_plus_vscpDateTime) : `date`
        * [.vscpGuid](#vscp_dot_Event_plus_vscpGuid) : `string`
        * [.vscpData](#vscp_dot_Event_plus_vscpData) : `Array.&lt;number&gt;` \| `string`
        * [.setIPV6Addr()](#vscp_dot_Event_plus_setIPV6Addr)
        * [.isIPV6Addr()](#vscp_dot_Event_plus_isIPV6Addr) ⇒ `boolean`
        * [.setDumbNode()](#vscp_dot_Event_plus_setDumbNode)
        * [.isDumbNode()](#vscp_dot_Event_plus_isDumbNode) ⇒ `boolean`
        * [.setPriority(priority)](#vscp_dot_Event_plus_setPriority)
        * [.getPriority()](#vscp_dot_Event_plus_getPriority) ⇒ `number`
        * [.setHardCodedAddr()](#vscp_dot_Event_plus_setHardCodedAddr)
        * [.isHardCodedAddr()](#vscp_dot_Event_plus_isHardCodedAddr) ⇒ `boolean`
        * [.setDoNotCalcCRC()](#vscp_dot_Event_plus_setDoNotCalcCRC)
        * [.isDoNotCalcCRC()](#vscp_dot_Event_plus_isDoNotCalcCRC) ⇒ `boolean`
        * [.getText()](#vscp_dot_Event_plus_getText) ⇒ `string`
    * [.version](#vscp_dot_version)
    * [.constants](#vscp_dot_constants) : `object`
        * [.classes](#vscp_dot_constants_dot_classes) : `enum`
        * [.types](#vscp_dot_constants_dot_types) : `enum`
        * [.priorities](#vscp_dot_constants_dot_priorities) : `enum`
        * [.varTypes](#vscp_dot_constants_dot_varTypes) : `enum`
        * [.varTypeNames](#vscp_dot_constants_dot_varTypeNames)
    * [.utility](#vscp_dot_utility) : `object`
        * [.readValue(input)](#vscp_dot_utility_dot_readValue) ⇒ `number`
        * [.getTime()](#vscp_dot_utility_dot_getTime) ⇒ `string`
        * [.guidToStr(guid)](#vscp_dot_utility_dot_guidToStr) ⇒ `string`
        * [.strToGuid(guid)](#vscp_dot_utility_dot_strToGuid) ⇒ `Array.&lt;number&gt;`
        * [.getNodeId(guid)](#vscp_dot_utility_dot_getNodeId) ⇒ `number`
    * [.mdf](#vscp_dot_mdf) : `object`
        * [.Register](#vscp_dot_mdf_dot_Register)
            * [new vscp.mdf.Register()](#new_vscp_dot_mdf_dot_Register_new)
            * [.name](#vscp_dot_mdf_dot_Register_plus_name) : `string`
            * [.description](#vscp_dot_mdf_dot_Register_plus_description) : `string`
            * [.readAccess](#vscp_dot_mdf_dot_Register_plus_readAccess) : `boolean`
            * [.writeAccess](#vscp_dot_mdf_dot_Register_plus_writeAccess) : `boolean`
            * [.page](#vscp_dot_mdf_dot_Register_plus_page) : `number`
            * [.offset](#vscp_dot_mdf_dot_Register_plus_offset) : `number`
            * [.value](#vscp_dot_mdf_dot_Register_plus_value) : `number`
            * [.dirty](#vscp_dot_mdf_dot_Register_plus_dirty) : `number`
            * [.userData](#vscp_dot_mdf_dot_Register_plus_userData) : `object`
            * [.setValue(value)](#vscp_dot_mdf_dot_Register_plus_setValue)
        * [.Abstraction](#vscp_dot_mdf_dot_Abstraction)
            * [new vscp.mdf.Abstraction()](#new_vscp_dot_mdf_dot_Abstraction_new)
            * [.name](#vscp_dot_mdf_dot_Abstraction_plus_name) : `string`
            * [.description](#vscp_dot_mdf_dot_Abstraction_plus_description) : `string`
            * [.readAccess](#vscp_dot_mdf_dot_Abstraction_plus_readAccess) : `boolean`
            * [.writeAccess](#vscp_dot_mdf_dot_Abstraction_plus_writeAccess) : `boolean`
            * [.id](#vscp_dot_mdf_dot_Abstraction_plus_id) : `string`
            * [.page](#vscp_dot_mdf_dot_Abstraction_plus_page) : `number`
            * [.offset](#vscp_dot_mdf_dot_Abstraction_plus_offset) : `number`
            * [.value](#vscp_dot_mdf_dot_Abstraction_plus_value) : `number`
            * [.type](#vscp_dot_mdf_dot_Abstraction_plus_type) : `string`
            * [.defValue](#vscp_dot_mdf_dot_Abstraction_plus_defValue) : `number`
            * [.dirty](#vscp_dot_mdf_dot_Abstraction_plus_dirty) : `number`
            * [.userData](#vscp_dot_mdf_dot_Abstraction_plus_userData) : `object`
            * [.setValue(value)](#vscp_dot_mdf_dot_Abstraction_plus_setValue)
        * [.constants](#vscp_dot_mdf_dot_constants) : `object`
            * [.TYPE_SIZES](#vscp_dot_mdf_dot_constants_dot_TYPE_SIZES) : `enum`
            * [.CONVERSION_FROM_DECIMAL](#vscp_dot_mdf_dot_constants_dot_CONVERSION_FROM_DECIMAL)
            * [.CONVERSION_TO_DECIMAL](#vscp_dot_mdf_dot_constants_dot_CONVERSION_TO_DECIMAL)
            * [.RANGE](#vscp_dot_mdf_dot_constants_dot_RANGE)
        * [.timeout](#vscp_dot_mdf_dot_timeout) : `number`
        * [.load(options)](#vscp_dot_mdf_dot_load)
        * [.loadLocal(options)](#vscp_dot_mdf_dot_loadLocal)
        * [.readAbstractValue(options)](#vscp_dot_mdf_dot_readAbstractValue)
        * [.writeAbstractValue(options)](#vscp_dot_mdf_dot_writeAbstractValue)
        * [.writeAbstractBits(options)](#vscp_dot_mdf_dot_writeAbstractBits)
        * [.getRegisters(options)](#vscp_dot_mdf_dot_getRegisters) ⇒ [`Array.&lt;Register&gt;`](#vscp.mdf.Register)
        * [.getAbstractions(options)](#vscp_dot_mdf_dot_getAbstractions) ⇒ [`Array.&lt;Abstraction&gt;`](#vscp.mdf.Abstraction)
    * [.measurement](#vscp_dot_measurement) : `object`
        * [.Decoder](#vscp_dot_measurement_dot_Decoder)
            * [new vscp.measurement.Decoder(options)](#new_vscp_dot_measurement_dot_Decoder_new)
            * [.client](#vscp_dot_measurement_dot_Decoder_plus_client) : [`Client`](#vscp.ws.Client)
            * [.onValue](#vscp_dot_measurement_dot_Decoder_plus_onValue) : `function`
            * [.filter](#vscp_dot_measurement_dot_Decoder_plus_filter) : `object`
        * [.constants](#vscp_dot_measurement_dot_constants) : `object`
            * [.units](#vscp_dot_measurement_dot_constants_dot_units) : `Array.&lt;string&gt;`
        * [.timeout](#vscp_dot_measurement_dot_timeout) : `number`
        * [.toFixed(value, precision)](#vscp_dot_measurement_dot_toFixed) ⇒ `number`
        * [.varInteger2Float(data)](#vscp_dot_measurement_dot_varInteger2Float) ⇒ `number`
        * [.getDataCoding(data)](#vscp_dot_measurement_dot_getDataCoding) ⇒ `number`
        * [.getUnitFromDataCoding(data)](#vscp_dot_measurement_dot_getUnitFromDataCoding) ⇒ `number`
        * [.getSensorIndexFromDataCoding(data)](#vscp_dot_measurement_dot_getSensorIndexFromDataCoding) ⇒ `number`
        * [.decodeClass10(data)](#vscp_dot_measurement_dot_decodeClass10) ⇒ `number`
        * [.decodeClass60Number(data)](#vscp_dot_measurement_dot_decodeClass60Number) ⇒ `number`
        * [.decodeClass65Number(data)](#vscp_dot_measurement_dot_decodeClass65Number) ⇒ `number`
        * [.convertFahrenheitToKelvin(value)](#vscp_dot_measurement_dot_convertFahrenheitToKelvin) ⇒ `number`
        * [.convertFahrenheitToCelsius(value)](#vscp_dot_measurement_dot_convertFahrenheitToCelsius) ⇒ `number`
        * [.convertCelsiusToFahrenheit(value)](#vscp_dot_measurement_dot_convertCelsiusToFahrenheit) ⇒ `number`
        * [.convertKelvinToCelsius(value)](#vscp_dot_measurement_dot_convertKelvinToCelsius) ⇒ `number`
        * [.convertCelsiusToKelvin(value)](#vscp_dot_measurement_dot_convertCelsiusToKelvin) ⇒ `number`
        * [.convertKelvinToFahrenheit(value)](#vscp_dot_measurement_dot_convertKelvinToFahrenheit) ⇒ `number`
        * [.convertMeterToFeet(value)](#vscp_dot_measurement_dot_convertMeterToFeet) ⇒ `number`
        * [.convertFeetToMeter(value)](#vscp_dot_measurement_dot_convertFeetToMeter) ⇒ `number`
        * [.convertMeterToInch(value)](#vscp_dot_measurement_dot_convertMeterToInch) ⇒ `number`
        * [.convertInchToMeter(value)](#vscp_dot_measurement_dot_convertInchToMeter) ⇒ `number`
    * [.register](#vscp_dot_register) : `object`
        * [.constants](#vscp_dot_register_dot_constants) : `enum`
        * [.timeout](#vscp_dot_register_dot_timeout) : `number`
        * [.read(options)](#vscp_dot_register_dot_read)
        * [.write(options)](#vscp_dot_register_dot_write)
        * [.writeBits(options)](#vscp_dot_register_dot_writeBits)
        * [.readAlarmStatus(options)](#vscp_dot_register_dot_readAlarmStatus)
        * [.readVscpVersion(options)](#vscp_dot_register_dot_readVscpVersion)
        * [.readNodeControlFlags(options)](#vscp_dot_register_dot_readNodeControlFlags)
        * [.readUserId(options)](#vscp_dot_register_dot_readUserId)
        * [.readManufacturerDevId(options)](#vscp_dot_register_dot_readManufacturerDevId)
        * [.readManufacturerSubDevId(options)](#vscp_dot_register_dot_readManufacturerSubDevId)
        * [.readNicknameId(options)](#vscp_dot_register_dot_readNicknameId)
        * [.readSelectedPage(options)](#vscp_dot_register_dot_readSelectedPage)
        * [.readFirmwareVersion(options)](#vscp_dot_register_dot_readFirmwareVersion)
        * [.readBootloaderAlgorithm(options)](#vscp_dot_register_dot_readBootloaderAlgorithm)
        * [.readUsedPages(options)](#vscp_dot_register_dot_readUsedPages)
        * [.readStdDevFamCode(options)](#vscp_dot_register_dot_readStdDevFamCode)
        * [.readStdDevType(options)](#vscp_dot_register_dot_readStdDevType)
        * [.readGUID(options)](#vscp_dot_register_dot_readGUID)
        * [.readMdfUrl(options)](#vscp_dot_register_dot_readMdfUrl)
    * [.rest](#vscp_dot_rest) : `object`
        * [.Client](#vscp_dot_rest_dot_Client)
            * [new vscp.rest.Client(config)](#new_vscp_dot_rest_dot_Client_new)
            * [.baseUrl](#vscp_dot_rest_dot_Client_plus_baseUrl) : `string`
            * [.pathPrefix](#vscp_dot_rest_dot_Client_plus_pathPrefix) : `string`
            * [.apiVersion](#vscp_dot_rest_dot_Client_plus_apiVersion) : `string`
            * [.sessionKey](#vscp_dot_rest_dot_Client_plus_sessionKey) : `string`
            * [.openSession(options)](#vscp_dot_rest_dot_Client_plus_openSession) ⇒ `object`
            * [.closeSession([options])](#vscp_dot_rest_dot_Client_plus_closeSession) ⇒ `object`
            * [.getStatus([options])](#vscp_dot_rest_dot_Client_plus_getStatus) ⇒ `object`
            * [.sendEvent(options)](#vscp_dot_rest_dot_Client_plus_sendEvent) ⇒ `object`
            * [.readEvent([options])](#vscp_dot_rest_dot_Client_plus_readEvent) ⇒ `object`
            * [.setFilter(options)](#vscp_dot_rest_dot_Client_plus_setFilter) ⇒ `object`
            * [.clearQueue([options])](#vscp_dot_rest_dot_Client_plus_clearQueue) ⇒ `object`
            * [.createVar(options)](#vscp_dot_rest_dot_Client_plus_createVar) ⇒ `object`
            * [.readVar(options)](#vscp_dot_rest_dot_Client_plus_readVar) ⇒ `object`
            * [.writeVar(options)](#vscp_dot_rest_dot_Client_plus_writeVar) ⇒ `object`
            * [.removeVar(options)](#vscp_dot_rest_dot_Client_plus_removeVar) ⇒ `object`
            * [.listVar(options)](#vscp_dot_rest_dot_Client_plus_listVar) ⇒ `object`
    * [.service](#vscp_dot_service) : `object`
        * [.Container](#vscp_dot_service_dot_Container)
            * [new vscp.service.Container(options)](#new_vscp_dot_service_dot_Container_new)
            * [.client](#vscp_dot_service_dot_Container_plus_client) : [`Client`](#vscp.ws.Client)
            * [.name](#vscp_dot_service_dot_Container_plus_name) : `string`
            * [.data](#vscp_dot_service_dot_Container_plus_data) : `Array.&lt;object&gt;`
            * [.separator](#vscp_dot_service_dot_Container_plus_separator) : `Array.&lt;object&gt;`
            * [.create(options)](#vscp_dot_service_dot_Container_plus_create)
            * [.write(options)](#vscp_dot_service_dot_Container_plus_write)
            * [.read(options)](#vscp_dot_service_dot_Container_plus_read)
        * [.timeout](#vscp_dot_service_dot_timeout) : `number`
        * [.whoIsThere(options)](#vscp_dot_service_dot_whoIsThere)
        * [.scan(options)](#vscp_dot_service_dot_scan)
    * [.widget](#vscp_dot_widget) : `object`
        * [.Button](#vscp_dot_widget_dot_Button)
            * [new vscp.widget.Button(options)](#new_vscp_dot_widget_dot_Button_new)
            * [.draw()](#vscp_dot_widget_dot_Button_plus_draw)
            * [.setEnabled(value)](#vscp_dot_widget_dot_Button_plus_setEnabled)
        * [.Thermometer](#vscp_dot_widget_dot_Thermometer)
            * [new vscp.widget.Thermometer(options)](#new_vscp_dot_widget_dot_Thermometer_new)
            * [.draw()](#vscp_dot_widget_dot_Thermometer_plus_draw)
            * [.setEnabled(value)](#vscp_dot_widget_dot_Thermometer_plus_setEnabled)
        * [.generateUUID()](#vscp_dot_widget_dot_generateUUID) ⇒ `string`
        * [.Image(options)](#vscp_dot_widget_dot_Image)
    * [.wizard](#vscp_dot_wizard) : `object`
        * [.MessageBox](#vscp_dot_wizard_dot_MessageBox)
            * [new vscp.wizard.MessageBox(options)](#new_vscp_dot_wizard_dot_MessageBox_new)
            * [.func](#vscp_dot_wizard_dot_MessageBox_plus_func) : `string`
            * [.head](#vscp_dot_wizard_dot_MessageBox_plus_head) : `string`
            * [.description](#vscp_dot_wizard_dot_MessageBox_plus_description) : `string`
            * [.variableType](#vscp_dot_wizard_dot_MessageBox_plus_variableType) : `string`
            * [.variableName](#vscp_dot_wizard_dot_MessageBox_plus_variableName) : `string`
            * [.variableValue](#vscp_dot_wizard_dot_MessageBox_plus_variableValue) : `string`
            * [.parse($messageBox)](#vscp_dot_wizard_dot_MessageBox_plus_parse)
        * [.WriteBitInReg](#vscp_dot_wizard_dot_WriteBitInReg)
            * [new vscp.wizard.WriteBitInReg(options)](#new_vscp_dot_wizard_dot_WriteBitInReg_new)
            * [.pos](#vscp_dot_wizard_dot_WriteBitInReg_plus_pos) : `number`
            * [.page](#vscp_dot_wizard_dot_WriteBitInReg_plus_page) : `number`
            * [.offset](#vscp_dot_wizard_dot_WriteBitInReg_plus_offset) : `number`
            * [.width](#vscp_dot_wizard_dot_WriteBitInReg_plus_width) : `number`
            * [.value](#vscp_dot_wizard_dot_WriteBitInReg_plus_value) : `number`
            * [.variableName](#vscp_dot_wizard_dot_WriteBitInReg_plus_variableName) : `string`
            * [.parse(writeBitInReg)](#vscp_dot_wizard_dot_WriteBitInReg_plus_parse)
        * [.WriteBitInAbstraction](#vscp_dot_wizard_dot_WriteBitInAbstraction)
            * [new vscp.wizard.WriteBitInAbstraction(options)](#new_vscp_dot_wizard_dot_WriteBitInAbstraction_new)
            * [.id](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_id) : `string`
            * [.pos](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_pos) : `number`
            * [.width](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_width) : `number`
            * [.value](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_value) : `number`
            * [.variableName](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_variableName) : `string`
            * [.parse($writeBitInAbstraction)](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_parse)
        * [.WriteRegister](#vscp_dot_wizard_dot_WriteRegister)
            * [new vscp.wizard.WriteRegister(options)](#new_vscp_dot_wizard_dot_WriteRegister_new)
            * [.page](#vscp_dot_wizard_dot_WriteRegister_plus_page) : `number`
            * [.offset](#vscp_dot_wizard_dot_WriteRegister_plus_offset) : `number`
            * [.value](#vscp_dot_wizard_dot_WriteRegister_plus_value) : `number`
            * [.variableName](#vscp_dot_wizard_dot_WriteRegister_plus_variableName) : `string`
            * [.parse($writeRegister)](#vscp_dot_wizard_dot_WriteRegister_plus_parse)
        * [.WriteAbstraction](#vscp_dot_wizard_dot_WriteAbstraction)
            * [new vscp.wizard.WriteAbstraction(options)](#new_vscp_dot_wizard_dot_WriteAbstraction_new)
            * [.id](#vscp_dot_wizard_dot_WriteAbstraction_plus_id) : `string`
            * [.value](#vscp_dot_wizard_dot_WriteAbstraction_plus_value) : `number`
            * [.variableName](#vscp_dot_wizard_dot_WriteAbstraction_plus_variableName) : `number`
            * [.parse($writeAbstraction)](#vscp_dot_wizard_dot_WriteAbstraction_plus_parse)
        * [.Recipe](#vscp_dot_wizard_dot_Recipe)
            * [new vscp.wizard.Recipe(options)](#new_vscp_dot_wizard_dot_Recipe_new)
            * [.name](#vscp_dot_wizard_dot_Recipe_plus_name) : `string`
            * [.description](#vscp_dot_wizard_dot_Recipe_plus_description) : `string`
            * [.writeBitInRegs](#vscp_dot_wizard_dot_Recipe_plus_writeBitInRegs) : [`Array.&lt;WriteBitInReg&gt;`](#vscp.wizard.WriteBitInReg)
            * [.writeBitInAbstractions](#vscp_dot_wizard_dot_Recipe_plus_writeBitInAbstractions) : `Array.&lt;vscp.wizard.WriteBitAbstractions&gt;`
            * [.writeRegisters](#vscp_dot_wizard_dot_Recipe_plus_writeRegisters) : [`Array.&lt;WriteRegister&gt;`](#vscp.wizard.WriteRegister)
            * [.writeAbstractions](#vscp_dot_wizard_dot_Recipe_plus_writeAbstractions) : [`Array.&lt;WriteAbstraction&gt;`](#vscp.wizard.WriteAbstraction)
            * [.messageBoxes](#vscp_dot_wizard_dot_Recipe_plus_messageBoxes) : [`Array.&lt;MessageBox&gt;`](#vscp.wizard.MessageBox)
            * [.mdf](#vscp_dot_wizard_dot_Recipe_plus_mdf) : `object`
            * [.parse($recipe)](#vscp_dot_wizard_dot_Recipe_plus_parse)
            * [.write(options)](#vscp_dot_wizard_dot_Recipe_plus_write)
        * [.getRecipes(options)](#vscp_dot_wizard_dot_getRecipes) ⇒ [`Array.&lt;Recipe&gt;`](#vscp.wizard.Recipe)
    * [.ws](#vscp_dot_ws) : `object`
        * [.Client](#vscp_dot_ws_dot_Client)
            * [new vscp.ws.Client()](#new_vscp_dot_ws_dot_Client_new)
            * [.socket](#vscp_dot_ws_dot_Client_plus_socket) : `object`
            * [.url](#vscp_dot_ws_dot_Client_plus_url) : `string`
            * [.userName](#vscp_dot_ws_dot_Client_plus_userName) : `string`
            * [.userId](#vscp_dot_ws_dot_Client_plus_userId) : `number`
            * [.userFullname](#vscp_dot_ws_dot_Client_plus_userFullname) : `string`
            * [.userRights](#vscp_dot_ws_dot_Client_plus_userRights) : `array`
            * [.userRemotes](#vscp_dot_ws_dot_Client_plus_userRemotes) : `array`
            * [.userEvents](#vscp_dot_ws_dot_Client_plus_userEvents) : `array`
            * [.userNote](#vscp_dot_ws_dot_Client_plus_userNote) : `string`
            * [.password](#vscp_dot_ws_dot_Client_plus_password) : `string`
            * [.vscpkey](#vscp_dot_ws_dot_Client_plus_vscpkey) : `string`
            * [.onConnError](#vscp_dot_ws_dot_Client_plus_onConnError) : `function`
            * [.onMessage](#vscp_dot_ws_dot_Client_plus_onMessage) : `function`
            * [.onEvent](#vscp_dot_ws_dot_Client_plus_onEvent) : `Array.&lt;function()&gt;`
            * [.onVariable](#vscp_dot_ws_dot_Client_plus_onVariable) : `function`
            * [.onTableRow](#vscp_dot_ws_dot_Client_plus_onTableRow) : `function`
            * [.state](#vscp_dot_ws_dot_Client_plus_state) : `number`
            * [.substate](#vscp_dot_ws_dot_Client_plus_substate) : `number`
            * [.states](#vscp_dot_ws_dot_Client_plus_states) : `enum`
            * [.substates](#vscp_dot_ws_dot_Client_plus_substates) : `enum`
            * [.addEventListener(eventListener)](#vscp_dot_ws_dot_Client_plus_addEventListener)
            * [.removeEventListener(eventListener)](#vscp_dot_ws_dot_Client_plus_removeEventListener)
            * [.getAuthHash(userName, password, str_iv)](#vscp_dot_ws_dot_Client_plus_getAuthHash) ⇒ `string`
            * [.onWebSocketOpen()](#vscp_dot_ws_dot_Client_plus_onWebSocketOpen)
            * [.onWebSocketClose()](#vscp_dot_ws_dot_Client_plus_onWebSocketClose)
            * [.onWebSocketMessage(msg)](#vscp_dot_ws_dot_Client_plus_onWebSocketMessage)
            * [.connect(options)](#vscp_dot_ws_dot_Client_plus_connect) ⇒ `object`
            * [.disconnect(options)](#vscp_dot_ws_dot_Client_plus_disconnect) ⇒ `object`
            * [.start(options)](#vscp_dot_ws_dot_Client_plus_start) ⇒ `object`
            * [.stop(options)](#vscp_dot_ws_dot_Client_plus_stop) ⇒ `object`
            * [.clearQueue(options)](#vscp_dot_ws_dot_Client_plus_clearQueue) ⇒ `object`
            * [.sendEvent(options)](#vscp_dot_ws_dot_Client_plus_sendEvent) ⇒ `object`
            * [.setFilter(options)](#vscp_dot_ws_dot_Client_plus_setFilter) ⇒ `object`
            * [.createVar(options)](#vscp_dot_ws_dot_Client_plus_createVar) ⇒ `object`
            * [.readVar(options)](#vscp_dot_ws_dot_Client_plus_readVar) ⇒ `object`
            * [.writeVar(options)](#vscp_dot_ws_dot_Client_plus_writeVar) ⇒ `object`
            * [.resetVar(options)](#vscp_dot_ws_dot_Client_plus_resetVar) ⇒ `object`
            * [.removeVar(options)](#vscp_dot_ws_dot_Client_plus_removeVar) ⇒ `object`
            * [.lengthVar(options)](#vscp_dot_ws_dot_Client_plus_lengthVar) ⇒ `object`
            * [.lastChangeVar(options)](#vscp_dot_ws_dot_Client_plus_lastChangeVar) ⇒ `object`
            * [.listVar(options)](#vscp_dot_ws_dot_Client_plus_listVar) ⇒ `object`
            * [.readTable(options)](#vscp_dot_ws_dot_Client_plus_readTable) ⇒ `object`
    * [.getVarTypeName(n)](#vscp_dot_getVarTypeName) ⇒ `string`
    * [.getVarTypeNumerical(str)](#vscp_dot_getVarTypeNumerical) ⇒ `number`
    * [.getEditorModeFromType(n)](#vscp_dot_getEditorModeFromType) ⇒ `string`
    * [.b64EncodeUnicode(str)](#vscp_dot_b64EncodeUnicode) ⇒ `string`
    * [.b64DecodeUnicode(str)](#vscp_dot_b64DecodeUnicode) ⇒ `string`
    * [.isBase64Type(type)](#vscp_dot_isBase64Type) ⇒ `bool`
    * [.decodeValueIfBase64(type, value)](#vscp_dot_decodeValueIfBase64) ⇒ `string`
    * [.encodeValueIfBase64(type, value)](#vscp_dot_encodeValueIfBase64) ⇒ `string`

<a id="vscpevents"></a>

### vscp.Event
**Kind**: static class of [`vscp`](#vscp)  

* [.Event](#vscp_dot_Event)
    * [new vscp.Event(options)](#new_vscp_dot_Event_new)
    * [.vscpHead](#vscp_dot_Event_plus_vscpHead) : `number`
    * [.vscpClass](#vscp_dot_Event_plus_vscpClass) : `number`
    * [.vscpType](#vscp_dot_Event_plus_vscpType) : `number`
    * [.vscpObId](#vscp_dot_Event_plus_vscpObId) : `number`
    * [.vscpTimeStamp](#vscp_dot_Event_plus_vscpTimeStamp) : `number`
    * [.vscpDateTime](#vscp_dot_Event_plus_vscpDateTime) : `date`
    * [.vscpGuid](#vscp_dot_Event_plus_vscpGuid) : `string`
    * [.vscpData](#vscp_dot_Event_plus_vscpData) : `Array.&lt;number&gt;` \| `string`
    * [.setIPV6Addr()](#vscp_dot_Event_plus_setIPV6Addr)
    * [.isIPV6Addr()](#vscp_dot_Event_plus_isIPV6Addr) ⇒ `boolean`
    * [.setDumbNode()](#vscp_dot_Event_plus_setDumbNode)
    * [.isDumbNode()](#vscp_dot_Event_plus_isDumbNode) ⇒ `boolean`
    * [.setPriority(priority)](#vscp_dot_Event_plus_setPriority)
    * [.getPriority()](#vscp_dot_Event_plus_getPriority) ⇒ `number`
    * [.setHardCodedAddr()](#vscp_dot_Event_plus_setHardCodedAddr)
    * [.isHardCodedAddr()](#vscp_dot_Event_plus_isHardCodedAddr) ⇒ `boolean`
    * [.setDoNotCalcCRC()](#vscp_dot_Event_plus_setDoNotCalcCRC)
    * [.isDoNotCalcCRC()](#vscp_dot_Event_plus_isDoNotCalcCRC) ⇒ `boolean`
    * [.getText()](#vscp_dot_Event_plus_getText) ⇒ `string`

<a id="new_vscp_dot_Event_new"></a>

#### new vscp.Event(options)
VSCP event.


| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.vscpHead | `number` | Event head |
| options.guidIsIpV6Addr | `boolean` | GUID is a IPv6 address |
| options.dumpNode | `boolean` | Node is a dump node |
| options.vscpPriority | `number` | Priority |
| options.vscpHardCoded | `boolean` | Hard coded node id |
| options.vscpCalcCRC | `boolean` | Calculate CRC |
| options.vscpClass | `number` | VSCP class |
| options.vscpType | `number` | VSCP type |
| options.vscpObId | `number` | Object id |
| options.vscpTimeStamp | `number` | Timestamp |
| options.vscpGuid | `string` | GUID string |
| options.vscpData | `Array.&lt;number&gt;` \| `string` | Event data |

<a id="vscp_dot_Event_plus_vscpHead"></a>

#### event.vscpHead : `number`
VSCP event head

**Kind**: instance property of [`Event`](#vscp.Event)  
<a id="vscp_dot_Event_plus_vscpClass"></a>

#### event.vscpClass : `number`
VSCP class

**Kind**: instance property of [`Event`](#vscp.Event)  
<a id="vscp_dot_Event_plus_vscpType"></a>

#### event.vscpType : `number`
VSCP type

**Kind**: instance property of [`Event`](#vscp.Event)  
<a id="vscp_dot_Event_plus_vscpObId"></a>

#### event.vscpObId : `number`
VSCP object id used by driver for channel info and etc.

**Kind**: instance property of [`Event`](#vscp.Event)  
<a id="vscp_dot_Event_plus_vscpTimeStamp"></a>

#### event.vscpTimeStamp : `number`
Relative timestamp for package in us

**Kind**: instance property of [`Event`](#vscp.Event)  
<a id="vscp_dot_Event_plus_vscpDateTime"></a>

#### event.vscpDateTime : `date`
Date/Time for package

**Kind**: instance property of [`Event`](#vscp.Event)  
<a id="vscp_dot_Event_plus_vscpGuid"></a>

#### event.vscpGuid : `string`
Node global unique id LSB(15) -> MSB(0)

**Kind**: instance property of [`Event`](#vscp.Event)  
<a id="vscp_dot_Event_plus_vscpData"></a>

#### event.vscpData : `Array.&lt;number&gt;` \| `string`
Data array or string

**Kind**: instance property of [`Event`](#vscp.Event)  
<a id="vscp_dot_Event_plus_setIPV6Addr"></a>

#### event.setIPV6Addr()
Set GUID as IP v6 address

**Kind**: instance method of [`Event`](#vscp.Event)  
<a id="vscp_dot_Event_plus_isIPV6Addr"></a>

#### event.isIPV6Addr() ⇒ `boolean`
Is GUID a IP v6 address or not?

**Kind**: instance method of [`Event`](#vscp.Event)  
**Returns**: `boolean` - If the GUID is a IP v6 address, it will return true, otherwise false.  
<a id="vscp_dot_Event_plus_setDumbNode"></a>

#### event.setDumbNode()
Set dumb node. No MDF, registers, nothing.

**Kind**: instance method of [`Event`](#vscp.Event)  
<a id="vscp_dot_Event_plus_isDumbNode"></a>

#### event.isDumbNode() ⇒ `boolean`
Is node a dump node or not?
Dumb node means no MDF, registers, nothing.

**Kind**: instance method of [`Event`](#vscp.Event)  
**Returns**: `boolean` - If the node is a dumb node, it will return true, otherwise false.  
<a id="vscp_dot_Event_plus_setPriority"></a>

#### event.setPriority(priority)
Set the VSCP event priority.

**Kind**: instance method of [`Event`](#vscp.Event)  

| Param | Type | Description |
| --- | --- | --- |
| priority | `number` | Priority |

<a id="vscp_dot_Event_plus_getPriority"></a>

#### event.getPriority() ⇒ `number`
Get the VSCP event priority.

**Kind**: instance method of [`Event`](#vscp.Event)  
**Returns**: `number` - Priority of the event.  
<a id="vscp_dot_Event_plus_setHardCodedAddr"></a>

#### event.setHardCodedAddr()
Set the node id of the event sender as hard coded?

**Kind**: instance method of [`Event`](#vscp.Event)  
<a id="vscp_dot_Event_plus_isHardCodedAddr"></a>

#### event.isHardCodedAddr() ⇒ `boolean`
Is the node id of the event sender hard coded or not?

**Kind**: instance method of [`Event`](#vscp.Event)  
**Returns**: `boolean` - If the node id is hard coded, it will return true, otherwise false.  
<a id="vscp_dot_Event_plus_setDoNotCalcCRC"></a>

#### event.setDoNotCalcCRC()
Set flag for no CRC calculation?

**Kind**: instance method of [`Event`](#vscp.Event)  
<a id="vscp_dot_Event_plus_isDoNotCalcCRC"></a>

#### event.isDoNotCalcCRC() ⇒ `boolean`
Is CRC calculated or not?

**Kind**: instance method of [`Event`](#vscp.Event)  
**Returns**: `boolean` - If nor CRC should be calculated true is returned.  
<a id="vscp_dot_Event_plus_getText"></a>

#### event.getText() ⇒ `string`
Get event as string.

**Kind**: instance method of [`Event`](#vscp.Event)  
**Returns**: `string` - Event as string  
<a id="vscp_dot_version"></a>

### vscp.version
VSCP core javascript library version

**Kind**: static property of [`vscp`](#vscp)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| major | `number` | Major version number |
| minor | `number` | Minor version number |
| patch | `number` | Sub-minor version number |

<a id="vscp_dot_constants"></a>

### vscp.constants : `object`
VSCP constants

**Kind**: static namespace of [`vscp`](#vscp)  

* [.constants](#vscp_dot_constants) : `object`
    * [.classes](#vscp_dot_constants_dot_classes) : `enum`
    * [.types](#vscp_dot_constants_dot_types) : `enum`
    * [.priorities](#vscp_dot_constants_dot_priorities) : `enum`
    * [.varTypes](#vscp_dot_constants_dot_varTypes) : `enum`
    * [.varTypeNames](#vscp_dot_constants_dot_varTypeNames)

<a id="vscp_dot_constants_dot_classes"></a>

#### constants.classes : `enum`
VSCP classes

**Kind**: static enum of [`constants`](#vscp.constants)  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| CLASS1_PROTOCOL | `number` | <code>0</code> | 
| CLASS1_ALARM | `number` | <code>1</code> | 
| CLASS1_SECURITY | `number` | <code>2</code> | 
| CLASS1_MEASUREMENT | `number` | <code>10</code> | 
| CLASS1_DATA | `number` | <code>15</code> | 
| CLASS1_INFORMATION | `number` | <code>20</code> | 
| CLASS1_CONTROL | `number` | <code>30</code> | 
| CLASS1_MULTIMEDIA | `number` | <code>40</code> | 
| CLASS1_AOL | `number` | <code>50</code> | 
| CLASS1_MEASUREMENT64 | `number` | <code>60</code> | 
| CLASS1_MEASUREZONE | `number` | <code>65</code> | 
| CLASS1_MEASUREMENT32 | `number` | <code>70</code> | 
| CLASS1_SETVALUEZONE | `number` | <code>85</code> | 
| CLASS1_WEATHER | `number` | <code>90</code> | 
| CLASS1_WEATHER_FORECAST | `number` | <code>95</code> | 
| CLASS1_PHONE | `number` | <code>100</code> | 
| CLASS1_DISPLAY | `number` | <code>102</code> | 
| CLASS1_IR | `number` | <code>110</code> | 
| CLASS1_GNSS | `number` | <code>206</code> | 
| CLASS1_WIRELESS | `number` | <code>212</code> | 
| CLASS1_DIAGNOSTIC | `number` | <code>506</code> | 
| CLASS1_ERROR | `number` | <code>508</code> | 
| CLASS1_LOG | `number` | <code>509</code> | 
| CLASS1_LABORATORY | `number` | <code>510</code> | 
| CLASS1_LOCAL | `number` | <code>511</code> | 
| CLASS2_LEVEL1_PROTOCOL | `number` | <code>512</code> | 
| CLASS2_LEVEL1_ALARM | `number` | <code>513</code> | 
| CLASS2_LEVEL1_SECURITY | `number` | <code>514</code> | 
| CLASS2_LEVEL1_MEASUREMENT | `number` | <code>522</code> | 
| CLASS2_LEVEL1_DATA | `number` | <code>527</code> | 
| CLASS2_LEVEL1_INFORMATION1 | `number` | <code>532</code> | 
| CLASS2_LEVEL1_CONTROL | `number` | <code>542</code> | 
| CLASS2_LEVEL1_MULTIMEDIA | `number` | <code>552</code> | 
| CLASS2_LEVEL1_AOL | `number` | <code>562</code> | 
| CLASS2_LEVEL1_MEASUREMENT64 | `number` | <code>572</code> | 
| CLASS2_LEVEL1_MEASUREZONE | `number` | <code>577</code> | 
| CLASS2_LEVEL1_MEASUREMENT32 | `number` | <code>582</code> | 
| CLASS2_LEVEL1_SETVALUEZONE | `number` | <code>597</code> | 
| CLASS2_LEVEL1_WEATHER | `number` | <code>602</code> | 
| CLASS2_LEVEL1_WEATHERFORECAST | `number` | <code>607</code> | 
| CLASS2_LEVEL1_PHONE | `number` | <code>612</code> | 
| CLASS2_LEVEL1_DISPLAY | `number` | <code>614</code> | 
| CLASS2_LEVEL1_IR | `number` | <code>622</code> | 
| CLASS2_LEVEL1_GNSS | `number` | <code>718</code> | 
| CLASS2_LEVEL1_WIRELESS | `number` | <code>724</code> | 
| CLASS2_LEVEL1_DIAGNOSTIC | `number` | <code>1018</code> | 
| CLASS2_LEVEL1_ERROR | `number` | <code>1020</code> | 
| CLASS2_LEVEL1_LOG | `number` | <code>1021</code> | 
| CLASS2_LEVEL1_LABORATORY | `number` | <code>1022</code> | 
| CLASS2_LEVEL1_LOCAL | `number` | <code>1023</code> | 
| CLASS2_PROTOCOL | `number` | <code>1024</code> | 
| CLASS2_CONTROL | `number` | <code>1025</code> | 
| CLASS2_INFORMATION | `number` | <code>1026</code> | 
| CLASS2_TEXT2SPEECH | `number` | <code>1027</code> | 
| CLASS2_CUSTOM | `number` | <code>1029</code> | 
| CLASS2_DISPLAY | `number` | <code>1030</code> | 
| CLASS2_MEASUREMENT_STR | `number` | <code>1040</code> | 
| CLASS2_MEASUREMENT_FLOAT | `number` | <code>1060</code> | 
| CLASS2_VSCPD | `number` | <code>65535</code> | 

<a id="vscp_dot_constants_dot_types"></a>

#### constants.types : `enum`
VSCP class types

**Kind**: static enum of [`constants`](#vscp.constants)  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| VSCP_TYPE_UNDEFINED | `number` | <code>0</code> | 
| VSCP_TYPE_PROTOCOL_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_PROTOCOL_SEGCTRL_HEARTBEAT | `number` | <code>1</code> | 
| VSCP_TYPE_PROTOCOL_NEW_NODE_ONLINE | `number` | <code>2</code> | 
| VSCP_TYPE_PROTOCOL_PROBE_ACK | `number` | <code>3</code> | 
| VSCP_TYPE_PROTOCOL_RESERVED4 | `number` | <code>4</code> | 
| VSCP_TYPE_PROTOCOL_RESERVED5 | `number` | <code>5</code> | 
| VSCP_TYPE_PROTOCOL_SET_NICKNAME | `number` | <code>6</code> | 
| VSCP_TYPE_PROTOCOL_NICKNAME_ACCEPTED | `number` | <code>7</code> | 
| VSCP_TYPE_PROTOCOL_DROP_NICKNAME | `number` | <code>8</code> | 
| VSCP_TYPE_PROTOCOL_READ_REGISTER | `number` | <code>9</code> | 
| VSCP_TYPE_PROTOCOL_RW_RESPONSE | `number` | <code>10</code> | 
| VSCP_TYPE_PROTOCOL_WRITE_REGISTER | `number` | <code>11</code> | 
| VSCP_TYPE_PROTOCOL_ENTER_BOOT_LOADER | `number` | <code>12</code> | 
| VSCP_TYPE_PROTOCOL_ACK_BOOT_LOADER | `number` | <code>13</code> | 
| VSCP_TYPE_PROTOCOL_NACK_BOOT_LOADER | `number` | <code>14</code> | 
| VSCP_TYPE_PROTOCOL_START_BLOCK | `number` | <code>15</code> | 
| VSCP_TYPE_PROTOCOL_BLOCK_DATA | `number` | <code>16</code> | 
| VSCP_TYPE_PROTOCOL_BLOCK_DATA_ACK | `number` | <code>17</code> | 
| VSCP_TYPE_PROTOCOL_BLOCK_DATA_NACK | `number` | <code>18</code> | 
| VSCP_TYPE_PROTOCOL_PROGRAM_BLOCK_DATA | `number` | <code>19</code> | 
| VSCP_TYPE_PROTOCOL_PROGRAM_BLOCK_DATA_ACK | `number` | <code>20</code> | 
| VSCP_TYPE_PROTOCOL_PROGRAM_BLOCK_DATA_NACK | `number` | <code>21</code> | 
| VSCP_TYPE_PROTOCOL_ACTIVATE_NEW_IMAGE | `number` | <code>22</code> | 
| VSCP_TYPE_PROTOCOL_RESET_DEVICE | `number` | <code>23</code> | 
| VSCP_TYPE_PROTOCOL_PAGE_READ | `number` | <code>24</code> | 
| VSCP_TYPE_PROTOCOL_PAGE_WRITE | `number` | <code>25</code> | 
| VSCP_TYPE_PROTOCOL_RW_PAGE_RESPONSE | `number` | <code>26</code> | 
| VSCP_TYPE_PROTOCOL_HIGH_END_SERVER_PROBE | `number` | <code>27</code> | 
| VSCP_TYPE_PROTOCOL_HIGH_END_SERVER_RESPONSE | `number` | <code>28</code> | 
| VSCP_TYPE_PROTOCOL_INCREMENT_REGISTER | `number` | <code>29</code> | 
| VSCP_TYPE_PROTOCOL_DECREMENT_REGISTER | `number` | <code>30</code> | 
| VSCP_TYPE_PROTOCOL_WHO_IS_THERE | `number` | <code>31</code> | 
| VSCP_TYPE_PROTOCOL_WHO_IS_THERE_RESPONSE | `number` | <code>32</code> | 
| VSCP_TYPE_PROTOCOL_GET_MATRIX_INFO | `number` | <code>33</code> | 
| VSCP_TYPE_PROTOCOL_GET_MATRIX_INFO_RESPONSE | `number` | <code>34</code> | 
| VSCP_TYPE_PROTOCOL_GET_EMBEDDED_MDF | `number` | <code>35</code> | 
| VSCP_TYPE_PROTOCOL_GET_EMBEDDED_MDF_RESPONSE | `number` | <code>36</code> | 
| VSCP_TYPE_PROTOCOL_EXTENDED_PAGE_READ | `number` | <code>37</code> | 
| VSCP_TYPE_PROTOCOL_EXTENDED_PAGE_WRITE | `number` | <code>38</code> | 
| VSCP_TYPE_PROTOCOL_EXTENDED_PAGE_RESPONSE | `number` | <code>39</code> | 
| VSCP_TYPE_PROTOCOL_GET_EVENT_INTEREST | `number` | <code>40</code> | 
| VSCP_TYPE_PROTOCOL_GET_EVENT_INTEREST_RESPONSE | `number` | <code>41</code> | 
| VSCP_TYPE_PROTOCOL_ACTIVATE_NEW_IMAGE_ACK | `number` | <code>48</code> | 
| VSCP_TYPE_PROTOCOL_ACTIVATE_NEW_IMAGE_NACK | `number` | <code>49</code> | 
| VSCP_TYPE_PROTOCOL_START_BLOCK_ACK | `number` | <code>50</code> | 
| VSCP_TYPE_PROTOCOL_START_BLOCK_NACK | `number` | <code>51</code> | 
| VSCP_TYPE_ALARM_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_ALARM_WARNING | `number` | <code>1</code> | 
| VSCP_TYPE_ALARM_ALARM | `number` | <code>2</code> | 
| VSCP_TYPE_ALARM_SOUND | `number` | <code>3</code> | 
| VSCP_TYPE_ALARM_LIGHT | `number` | <code>4</code> | 
| VSCP_TYPE_ALARM_POWER | `number` | <code>5</code> | 
| VSCP_TYPE_ALARM_EMERGENCY_STOP | `number` | <code>6</code> | 
| VSCP_TYPE_ALARM_EMERGENCY_PAUSE | `number` | <code>7</code> | 
| VSCP_TYPE_ALARM_EMERGENCY_RESET | `number` | <code>8</code> | 
| VSCP_TYPE_ALARM_EMERGENCY_RESUME | `number` | <code>9</code> | 
| VSCP_TYPE_ALARM_ARM | `number` | <code>10</code> | 
| VSCP_TYPE_ALARM_DISARM | `number` | <code>11</code> | 
| VSCP_TYPE_SECURITY_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_SECURITY_MOTION | `number` | <code>1</code> | 
| VSCP_TYPE_SECURITY_GLASS_BREAK | `number` | <code>2</code> | 
| VSCP_TYPE_SECURITY_BEAM_BREAK | `number` | <code>3</code> | 
| VSCP_TYPE_SECURITY_SENSOR_TAMPER | `number` | <code>4</code> | 
| VSCP_TYPE_SECURITY_SHOCK_SENSOR | `number` | <code>5</code> | 
| VSCP_TYPE_SECURITY_SMOKE_SENSOR | `number` | <code>6</code> | 
| VSCP_TYPE_SECURITY_HEAT_SENSOR | `number` | <code>7</code> | 
| VSCP_TYPE_SECURITY_PANIC_SWITCH | `number` | <code>8</code> | 
| VSCP_TYPE_SECURITY_DOOR_OPEN | `number` | <code>9</code> | 
| VSCP_TYPE_SECURITY_WINDOW_OPEN | `number` | <code>10</code> | 
| VSCP_TYPE_SECURITY_CO_SENSOR | `number` | <code>11</code> | 
| VSCP_TYPE_SECURITY_FROST_DETECTED | `number` | <code>12</code> | 
| VSCP_TYPE_SECURITY_FLAME_DETECTED | `number` | <code>13</code> | 
| VSCP_TYPE_SECURITY_OXYGEN_LOW | `number` | <code>14</code> | 
| VSCP_TYPE_SECURITY_WEIGHT_DETECTED | `number` | <code>15</code> | 
| VSCP_TYPE_SECURITY_WATER_DETECTED | `number` | <code>16</code> | 
| VSCP_TYPE_SECURITY_CONDENSATION_DETECTED | `number` | <code>17</code> | 
| VSCP_TYPE_SECURITY_SOUND_DETECTED | `number` | <code>18</code> | 
| VSCP_TYPE_SECURITY_HARMFUL_SOUND_LEVEL | `number` | <code>19</code> | 
| VSCP_TYPE_SECURITY_TAMPER | `number` | <code>20</code> | 
| VSCP_TYPE_MEASUREMENT_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_MEASUREMENT_COUNT | `number` | <code>1</code> | 
| VSCP_TYPE_MEASUREMENT_LENGTH | `number` | <code>2</code> | 
| VSCP_TYPE_MEASUREMENT_MASS | `number` | <code>3</code> | 
| VSCP_TYPE_MEASUREMENT_TIME | `number` | <code>4</code> | 
| VSCP_TYPE_MEASUREMENT_ELECTRIC_CURRENT | `number` | <code>5</code> | 
| VSCP_TYPE_MEASUREMENT_TEMPERATURE | `number` | <code>6</code> | 
| VSCP_TYPE_MEASUREMENT_AMOUNT_OF_SUBSTANCE | `number` | <code>7</code> | 
| VSCP_TYPE_MEASUREMENT_INTENSITY_OF_LIGHT | `number` | <code>8</code> | 
| VSCP_TYPE_MEASUREMENT_FREQUENCY | `number` | <code>9</code> | 
| VSCP_TYPE_MEASUREMENT_RADIOACTIVITY | `number` | <code>10</code> | 
| VSCP_TYPE_MEASUREMENT_FORCE | `number` | <code>11</code> | 
| VSCP_TYPE_MEASUREMENT_PRESSURE | `number` | <code>12</code> | 
| VSCP_TYPE_MEASUREMENT_ENERGY | `number` | <code>13</code> | 
| VSCP_TYPE_MEASUREMENT_POWER | `number` | <code>14</code> | 
| VSCP_TYPE_MEASUREMENT_ELECTRICAL_CHARGE | `number` | <code>15</code> | 
| VSCP_TYPE_MEASUREMENT_ELECTRICAL_POTENTIAL | `number` | <code>16</code> | 
| VSCP_TYPE_MEASUREMENT_ELECTRICAL_CAPACITANCE | `number` | <code>17</code> | 
| VSCP_TYPE_MEASUREMENT_ELECTRICAL_RESISTANCE | `number` | <code>18</code> | 
| VSCP_TYPE_MEASUREMENT_ELECTRICAL_CONDUCTANCE | `number` | <code>19</code> | 
| VSCP_TYPE_MEASUREMENT_MAGNETIC_FIELD_STRENGTH | `number` | <code>20</code> | 
| VSCP_TYPE_MEASUREMENT_MAGNETIC_FLUX | `number` | <code>21</code> | 
| VSCP_TYPE_MEASUREMENT_MAGNETIC_FLUX_DENSITY | `number` | <code>22</code> | 
| VSCP_TYPE_MEASUREMENT_INDUCTANCE | `number` | <code>23</code> | 
| VSCP_TYPE_MEASUREMENT_FLUX_OF_LIGHT | `number` | <code>24</code> | 
| VSCP_TYPE_MEASUREMENT_ILLUMINANCE | `number` | <code>25</code> | 
| VSCP_TYPE_MEASUREMENT_RADIATION_DOSE | `number` | <code>26</code> | 
| VSCP_TYPE_MEASUREMENT_CATALYTIC_ACITIVITY | `number` | <code>27</code> | 
| VSCP_TYPE_MEASUREMENT_VOLUME | `number` | <code>28</code> | 
| VSCP_TYPE_MEASUREMENT_SOUND_INTENSITY | `number` | <code>29</code> | 
| VSCP_TYPE_MEASUREMENT_ANGLE | `number` | <code>30</code> | 
| VSCP_TYPE_MEASUREMENT_POSITION | `number` | <code>31</code> | 
| VSCP_TYPE_MEASUREMENT_SPEED | `number` | <code>32</code> | 
| VSCP_TYPE_MEASUREMENT_ACCELERATION | `number` | <code>33</code> | 
| VSCP_TYPE_MEASUREMENT_TENSION | `number` | <code>34</code> | 
| VSCP_TYPE_MEASUREMENT_HUMIDITY | `number` | <code>35</code> | 
| VSCP_TYPE_MEASUREMENT_FLOW | `number` | <code>36</code> | 
| VSCP_TYPE_MEASUREMENT_THERMAL_RESISTANCE | `number` | <code>37</code> | 
| VSCP_TYPE_MEASUREMENT_REFRACTIVE_POWER | `number` | <code>38</code> | 
| VSCP_TYPE_MEASUREMENT_DYNAMIC_VISCOSITY | `number` | <code>39</code> | 
| VSCP_TYPE_MEASUREMENT_SOUND_IMPEDANCE | `number` | <code>40</code> | 
| VSCP_TYPE_MEASUREMENT_SOUND_RESISTANCE | `number` | <code>41</code> | 
| VSCP_TYPE_MEASUREMENT_ELECTRIC_ELASTANCE | `number` | <code>42</code> | 
| VSCP_TYPE_MEASUREMENT_LUMINOUS_ENERGY | `number` | <code>43</code> | 
| VSCP_TYPE_MEASUREMENT_LUMINANCE | `number` | <code>44</code> | 
| VSCP_TYPE_MEASUREMENT_CHEMICAL_CONCENTRATION | `number` | <code>45</code> | 
| VSCP_TYPE_MEASUREMENT_RESERVED46 | `number` | <code>46</code> | 
| VSCP_TYPE_MEASUREMENT_DOSE_EQVIVALENT | `number` | <code>47</code> | 
| VSCP_TYPE_MEASUREMENT_RESERVED48 | `number` | <code>48</code> | 
| VSCP_TYPE_MEASUREMENT_DEWPOINT | `number` | <code>49</code> | 
| VSCP_TYPE_MEASUREMENT_RELATIVE_LEVEL | `number` | <code>50</code> | 
| VSCP_TYPE_MEASUREMENT_ALTITUDE | `number` | <code>51</code> | 
| VSCP_TYPE_MEASUREMENT_AREA | `number` | <code>52</code> | 
| VSCP_TYPE_MEASUREMENT_RADIANT_INTENSITY | `number` | <code>53</code> | 
| VSCP_TYPE_MEASUREMENT_RADIANCE | `number` | <code>54</code> | 
| VSCP_TYPE_MEASUREMENT_IRRADIANCE | `number` | <code>55</code> | 
| VSCP_TYPE_MEASUREMENT_SPECTRAL_RADIANCE | `number` | <code>56</code> | 
| VSCP_TYPE_MEASUREMENT_SPECTRAL_IRRADIANCE | `number` | <code>57</code> | 
| VSCP_TYPE_MEASUREMENT_SOUND_PRESSURE | `number` | <code>58</code> | 
| VSCP_TYPE_MEASUREMENT_SOUND_DENSITY | `number` | <code>59</code> | 
| VSCP_TYPE_MEASUREMENT_SOUND_LEVEL | `number` | <code>60</code> | 
| VSCP_TYPE_DATA_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_DATA_IO | `number` | <code>1</code> | 
| VSCP_TYPE_DATA_AD | `number` | <code>2</code> | 
| VSCP_TYPE_DATA_DA | `number` | <code>3</code> | 
| VSCP_TYPE_DATA_RELATIVE_STRENGTH | `number` | <code>4</code> | 
| VSCP_TYPE_DATA_SIGNAL_LEVEL | `number` | <code>5</code> | 
| VSCP_TYPE_DATA_SIGNAL_QUALITY | `number` | <code>6</code> | 
| VSCP_TYPE_DATA_COUNT | `number` | <code>7</code> | 
| VSCP_TYPE_INFORMATION_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_INFORMATION_BUTTON | `number` | <code>1</code> | 
| VSCP_TYPE_INFORMATION_MOUSE | `number` | <code>2</code> | 
| VSCP_TYPE_INFORMATION_ON | `number` | <code>3</code> | 
| VSCP_TYPE_INFORMATION_OFF | `number` | <code>4</code> | 
| VSCP_TYPE_INFORMATION_ALIVE | `number` | <code>5</code> | 
| VSCP_TYPE_INFORMATION_TERMINATING | `number` | <code>6</code> | 
| VSCP_TYPE_INFORMATION_OPENED | `number` | <code>7</code> | 
| VSCP_TYPE_INFORMATION_CLOSED | `number` | <code>8</code> | 
| VSCP_TYPE_INFORMATION_NODE_HEARTBEAT | `number` | <code>9</code> | 
| VSCP_TYPE_INFORMATION_BELOW_LIMIT | `number` | <code>10</code> | 
| VSCP_TYPE_INFORMATION_ABOVE_LIMIT | `number` | <code>11</code> | 
| VSCP_TYPE_INFORMATION_PULSE | `number` | <code>12</code> | 
| VSCP_TYPE_INFORMATION_ERROR | `number` | <code>13</code> | 
| VSCP_TYPE_INFORMATION_RESUMED | `number` | <code>14</code> | 
| VSCP_TYPE_INFORMATION_PAUSED | `number` | <code>15</code> | 
| VSCP_TYPE_INFORMATION_SLEEP | `number` | <code>16</code> | 
| VSCP_TYPE_INFORMATION_GOOD_MORNING | `number` | <code>17</code> | 
| VSCP_TYPE_INFORMATION_GOOD_DAY | `number` | <code>18</code> | 
| VSCP_TYPE_INFORMATION_GOOD_AFTERNOON | `number` | <code>19</code> | 
| VSCP_TYPE_INFORMATION_GOOD_EVENING | `number` | <code>20</code> | 
| VSCP_TYPE_INFORMATION_GOOD_NIGHT | `number` | <code>21</code> | 
| VSCP_TYPE_INFORMATION_SEE_YOU_SOON | `number` | <code>22</code> | 
| VSCP_TYPE_INFORMATION_GOODBYE | `number` | <code>23</code> | 
| VSCP_TYPE_INFORMATION_STOP | `number` | <code>24</code> | 
| VSCP_TYPE_INFORMATION_START | `number` | <code>25</code> | 
| VSCP_TYPE_INFORMATION_RESET_COMPLETED | `number` | <code>26</code> | 
| VSCP_TYPE_INFORMATION_INTERRUPTED | `number` | <code>27</code> | 
| VSCP_TYPE_INFORMATION_PREPARING_TO_SLEEP | `number` | <code>28</code> | 
| VSCP_TYPE_INFORMATION_WOKEN_UP | `number` | <code>29</code> | 
| VSCP_TYPE_INFORMATION_DUSK | `number` | <code>30</code> | 
| VSCP_TYPE_INFORMATION_DAWN | `number` | <code>31</code> | 
| VSCP_TYPE_INFORMATION_ACTIVE | `number` | <code>32</code> | 
| VSCP_TYPE_INFORMATION_INACTIVE | `number` | <code>33</code> | 
| VSCP_TYPE_INFORMATION_BUSY | `number` | <code>34</code> | 
| VSCP_TYPE_INFORMATION_IDLE | `number` | <code>35</code> | 
| VSCP_TYPE_INFORMATION_STREAM_DATA | `number` | <code>36</code> | 
| VSCP_TYPE_INFORMATION_TOKEN_ACTIVITY | `number` | <code>37</code> | 
| VSCP_TYPE_INFORMATION_STREAM_DATA_WITH_ZONE | `number` | <code>38</code> | 
| VSCP_TYPE_INFORMATION_CONFIRM | `number` | <code>39</code> | 
| VSCP_TYPE_INFORMATION_LEVEL_CHANGED | `number` | <code>40</code> | 
| VSCP_TYPE_INFORMATION_WARNING | `number` | <code>41</code> | 
| VSCP_TYPE_INFORMATION_STATE | `number` | <code>42</code> | 
| VSCP_TYPE_INFORMATION_ACTION_TRIGGER | `number` | <code>43</code> | 
| VSCP_TYPE_INFORMATION_SUNRISE | `number` | <code>44</code> | 
| VSCP_TYPE_INFORMATION_SUNSET | `number` | <code>45</code> | 
| VSCP_TYPE_INFORMATION_START_OF_RECORD | `number` | <code>46</code> | 
| VSCP_TYPE_INFORMATION_END_OF_RECORD | `number` | <code>47</code> | 
| VSCP_TYPE_INFORMATION_PRESET_ACTIVE | `number` | <code>48</code> | 
| VSCP_TYPE_INFORMATION_DETECT | `number` | <code>49</code> | 
| VSCP_TYPE_INFORMATION_OVERFLOW | `number` | <code>50</code> | 
| VSCP_TYPE_INFORMATION_BIG_LEVEL_CHANGED | `number` | <code>51</code> | 
| VSCP_TYPE_INFORMATION_SUNRISE_TWILIGHT_START | `number` | <code>52</code> | 
| VSCP_TYPE_INFORMATION_SUNSET_TWILIGHT_START | `number` | <code>53</code> | 
| VSCP_TYPE_INFORMATION_NAUTICAL_SUNRISE_TWILIGHT_START | `number` | <code>54</code> | 
| VSCP_TYPE_INFORMATION_NAUTICAL_SUNSET_TWILIGHT_START | `number` | <code>55</code> | 
| VSCP_TYPE_INFORMATION_ASTRONOMICAL_SUNRISE_TWILIGHT_START | `number` | <code>56</code> | 
| VSCP_TYPE_INFORMATION_ASTRONOMICAL_SUNSET_TWILIGHT_START | `number` | <code>57</code> | 
| VSCP_TYPE_INFORMATION_CALCULATED_NOON | `number` | <code>58</code> | 
| VSCP_TYPE_INFORMATION_SHUTTER_UP | `number` | <code>59</code> | 
| VSCP_TYPE_INFORMATION_SHUTTER_DOWN | `number` | <code>60</code> | 
| VSCP_TYPE_INFORMATION_SHUTTER_LEFT | `number` | <code>61</code> | 
| VSCP_TYPE_INFORMATION_SHUTTER_RIGHT | `number` | <code>62</code> | 
| VSCP_TYPE_INFORMATION_SHUTTER_END_TOP | `number` | <code>63</code> | 
| VSCP_TYPE_INFORMATION_SHUTTER_END_BOTTOM | `number` | <code>64</code> | 
| VSCP_TYPE_INFORMATION_SHUTTER_END_MIDDLE | `number` | <code>65</code> | 
| VSCP_TYPE_INFORMATION_SHUTTER_END_PRESET | `number` | <code>66</code> | 
| VSCP_TYPE_INFORMATION_SHUTTER_END_LEFT | `number` | <code>67</code> | 
| VSCP_TYPE_INFORMATION_SHUTTER_END_RIGHT | `number` | <code>68</code> | 
| VSCP_TYPE_INFORMATION_LONG_CLICK | `number` | <code>69</code> | 
| VSCP_TYPE_INFORMATION_SINGLE_CLICK | `number` | <code>70</code> | 
| VSCP_TYPE_INFORMATION_DOUBLE_CLICK | `number` | <code>71</code> | 
| VSCP_TYPE_INFORMATION_DATE | `number` | <code>72</code> | 
| VSCP_TYPE_INFORMATION_TIME | `number` | <code>73</code> | 
| VSCP_TYPE_INFORMATION_WEEKDAY | `number` | <code>74</code> | 
| VSCP_TYPE_INFORMATION_LOCK | `number` | <code>75</code> | 
| VSCP_TYPE_INFORMATION_UNLOCK | `number` | <code>76</code> | 
| VSCP_TYPE_INFORMATION_DATETIME | `number` | <code>77</code> | 
| VSCP_TYPE_CONTROL_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_CONTROL_MUTE | `number` | <code>1</code> | 
| VSCP_TYPE_CONTROL_ALL_LAMPS | `number` | <code>2</code> | 
| VSCP_TYPE_CONTROL_OPEN | `number` | <code>3</code> | 
| VSCP_TYPE_CONTROL_CLOSE | `number` | <code>4</code> | 
| VSCP_TYPE_CONTROL_TURNON | `number` | <code>5</code> | 
| VSCP_TYPE_CONTROL_TURNOFF | `number` | <code>6</code> | 
| VSCP_TYPE_CONTROL_START | `number` | <code>7</code> | 
| VSCP_TYPE_CONTROL_STOP | `number` | <code>8</code> | 
| VSCP_TYPE_CONTROL_RESET | `number` | <code>9</code> | 
| VSCP_TYPE_CONTROL_INTERRUPT | `number` | <code>10</code> | 
| VSCP_TYPE_CONTROL_SLEEP | `number` | <code>11</code> | 
| VSCP_TYPE_CONTROL_WAKEUP | `number` | <code>12</code> | 
| VSCP_TYPE_CONTROL_RESUME | `number` | <code>13</code> | 
| VSCP_TYPE_CONTROL_PAUSE | `number` | <code>14</code> | 
| VSCP_TYPE_CONTROL_ACTIVATE | `number` | <code>15</code> | 
| VSCP_TYPE_CONTROL_DEACTIVATE | `number` | <code>16</code> | 
| VSCP_TYPE_CONTROL_RESERVED17 | `number` | <code>17</code> | 
| VSCP_TYPE_CONTROL_RESERVED18 | `number` | <code>18</code> | 
| VSCP_TYPE_CONTROL_RESERVED19 | `number` | <code>19</code> | 
| VSCP_TYPE_CONTROL_DIM_LAMPS | `number` | <code>20</code> | 
| VSCP_TYPE_CONTROL_CHANGE_CHANNEL | `number` | <code>21</code> | 
| VSCP_TYPE_CONTROL_CHANGE_LEVEL | `number` | <code>22</code> | 
| VSCP_TYPE_CONTROL_RELATIVE_CHANGE_LEVEL | `number` | <code>23</code> | 
| VSCP_TYPE_CONTROL_MEASUREMENT_REQUEST | `number` | <code>24</code> | 
| VSCP_TYPE_CONTROL_STREAM_DATA | `number` | <code>25</code> | 
| VSCP_TYPE_CONTROL_SYNC | `number` | <code>26</code> | 
| VSCP_TYPE_CONTROL_ZONED_STREAM_DATA | `number` | <code>27</code> | 
| VSCP_TYPE_CONTROL_SET_PRESET | `number` | <code>28</code> | 
| VSCP_TYPE_CONTROL_TOGGLE_STATE | `number` | <code>29</code> | 
| VSCP_TYPE_CONTROL_TIMED_PULSE_ON | `number` | <code>30</code> | 
| VSCP_TYPE_CONTROL_TIMED_PULSE_OFF | `number` | <code>31</code> | 
| VSCP_TYPE_CONTROL_SET_COUNTRY_LANGUAGE | `number` | <code>32</code> | 
| VSCP_TYPE_CONTROL_BIG_CHANGE_LEVEL | `number` | <code>33</code> | 
| VSCP_TYPE_CONTROL_SHUTTER_UP | `number` | <code>34</code> | 
| VSCP_TYPE_CONTROL_SHUTTER_DOWN | `number` | <code>35</code> | 
| VSCP_TYPE_CONTROL_SHUTTER_LEFT | `number` | <code>36</code> | 
| VSCP_TYPE_CONTROL_SHUTTER_RIGHT | `number` | <code>37</code> | 
| VSCP_TYPE_CONTROL_SHUTTER_MIDDLE | `number` | <code>38</code> | 
| VSCP_TYPE_CONTROL_SHUTTER_PRESET | `number` | <code>39</code> | 
| VSCP_TYPE_CONTROL_ALL_LAMPS_ON | `number` | <code>40</code> | 
| VSCP_TYPE_CONTROL_ALL_LAMPS_OFF | `number` | <code>41</code> | 
| VSCP_TYPE_CONTROL_LOCK | `number` | <code>42</code> | 
| VSCP_TYPE_CONTROL_UNLOCK | `number` | <code>43</code> | 
| VSCP_TYPE_MULTIMEDIA_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_MULTIMEDIA_PLAYBACK | `number` | <code>1</code> | 
| VSCP_TYPE_MULTIMEDIA_NAVIGATOR_KEY_ENG | `number` | <code>2</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_CONTRAST | `number` | <code>3</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_FOCUS | `number` | <code>4</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_TINT | `number` | <code>5</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_COLOUR_BALANCE | `number` | <code>6</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_BRIGHTNESS | `number` | <code>7</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_HUE | `number` | <code>8</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_BASS | `number` | <code>9</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_TREBLE | `number` | <code>10</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_MASTER_VOLUME | `number` | <code>11</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_FRONT_VOLUME | `number` | <code>12</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_CENTRE_VOLUME | `number` | <code>13</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_REAR_VOLUME | `number` | <code>14</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_SIDE_VOLUME | `number` | <code>15</code> | 
| VSCP_TYPE_MULTIMEDIA_RESERVED16 | `number` | <code>16</code> | 
| VSCP_TYPE_MULTIMEDIA_RESERVED17 | `number` | <code>17</code> | 
| VSCP_TYPE_MULTIMEDIA_RESERVED18 | `number` | <code>18</code> | 
| VSCP_TYPE_MULTIMEDIA_RESERVED19 | `number` | <code>19</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_DISK | `number` | <code>20</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_TRACK | `number` | <code>21</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_ALBUM | `number` | <code>22</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_CHANNEL | `number` | <code>23</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_PAGE | `number` | <code>24</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_CHAPTER | `number` | <code>25</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_SCREEN_FORMAT | `number` | <code>26</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_INPUT_SOURCE | `number` | <code>27</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_OUTPUT | `number` | <code>28</code> | 
| VSCP_TYPE_MULTIMEDIA_RECORD | `number` | <code>29</code> | 
| VSCP_TYPE_MULTIMEDIA_SET_RECORDING_VOLUME | `number` | <code>30</code> | 
| VSCP_TYPE_MULTIMEDIA_TIVO_FUNCTION | `number` | <code>40</code> | 
| VSCP_TYPE_MULTIMEDIA_GET_CURRENT_TITLE | `number` | <code>50</code> | 
| VSCP_TYPE_MULTIMEDIA_SET_POSITION | `number` | <code>51</code> | 
| VSCP_TYPE_MULTIMEDIA_GET_MEDIA_INFO | `number` | <code>52</code> | 
| VSCP_TYPE_MULTIMEDIA_REMOVE_ITEM | `number` | <code>53</code> | 
| VSCP_TYPE_MULTIMEDIA_REMOVE_ALL_ITEMS | `number` | <code>54</code> | 
| VSCP_TYPE_MULTIMEDIA_SAVE_ALBUM | `number` | <code>55</code> | 
| VSCP_TYPE_MULTIMEDIA_CONTROL | `number` | <code>60</code> | 
| VSCP_TYPE_MULTIMEDIA_CONTROL_RESPONSE | `number` | <code>61</code> | 
| VSCP_TYPE_AOL_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_AOL_UNPLUGGED_POWER | `number` | <code>1</code> | 
| VSCP_TYPE_AOL_UNPLUGGED_LAN | `number` | <code>2</code> | 
| VSCP_TYPE_AOL_CHASSIS_INTRUSION | `number` | <code>3</code> | 
| VSCP_TYPE_AOL_PROCESSOR_REMOVAL | `number` | <code>4</code> | 
| VSCP_TYPE_AOL_ENVIRONMENT_ERROR | `number` | <code>5</code> | 
| VSCP_TYPE_AOL_HIGH_TEMPERATURE | `number` | <code>6</code> | 
| VSCP_TYPE_AOL_FAN_SPEED | `number` | <code>7</code> | 
| VSCP_TYPE_AOL_VOLTAGE_FLUCTUATIONS | `number` | <code>8</code> | 
| VSCP_TYPE_AOL_OS_ERROR | `number` | <code>9</code> | 
| VSCP_TYPE_AOL_POWER_ON_ERROR | `number` | <code>10</code> | 
| VSCP_TYPE_AOL_SYSTEM_HUNG | `number` | <code>11</code> | 
| VSCP_TYPE_AOL_COMPONENT_FAILURE | `number` | <code>12</code> | 
| VSCP_TYPE_AOL_REBOOT_UPON_FAILURE | `number` | <code>13</code> | 
| VSCP_TYPE_AOL_REPAIR_OPERATING_SYSTEM | `number` | <code>14</code> | 
| VSCP_TYPE_AOL_UPDATE_BIOS_IMAGE | `number` | <code>15</code> | 
| VSCP_TYPE_AOL_UPDATE_DIAGNOSTIC_PROCEDURE | `number` | <code>16</code> | 
| VSCP_TYPE_WEATHER_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_WEATHER_SEASONS_WINTER | `number` | <code>1</code> | 
| VSCP_TYPE_WEATHER_SEASONS_SPRING | `number` | <code>2</code> | 
| VSCP_TYPE_WEATHER_SEASONS_SUMMER | `number` | <code>3</code> | 
| VSCP_TYPE_WEATHER_SEASONS_AUTUMN | `number` | <code>4</code> | 
| VSCP_TYPE_WEATHER_WIND_NONE | `number` | <code>5</code> | 
| VSCP_TYPE_WEATHER_WIND_LOW | `number` | <code>6</code> | 
| VSCP_TYPE_WEATHER_WIND_MEDIUM | `number` | <code>7</code> | 
| VSCP_TYPE_WEATHER_WIND_HIGH | `number` | <code>8</code> | 
| VSCP_TYPE_WEATHER_WIND_VERY_HIGH | `number` | <code>9</code> | 
| VSCP_TYPE_WEATHER_AIR_FOGGY | `number` | <code>10</code> | 
| VSCP_TYPE_WEATHER_AIR_FREEZING | `number` | <code>11</code> | 
| VSCP_TYPE_WEATHER_AIR_VERY_COLD | `number` | <code>12</code> | 
| VSCP_TYPE_WEATHER_AIR_COLD | `number` | <code>13</code> | 
| VSCP_TYPE_WEATHER_AIR_NORMAL | `number` | <code>14</code> | 
| VSCP_TYPE_WEATHER_AIR_HOT | `number` | <code>15</code> | 
| VSCP_TYPE_WEATHER_AIR_VERY_HOT | `number` | <code>16</code> | 
| VSCP_TYPE_WEATHER_AIR_POLLUTION_LOW | `number` | <code>17</code> | 
| VSCP_TYPE_WEATHER_AIR_POLLUTION_MEDIUM | `number` | <code>18</code> | 
| VSCP_TYPE_WEATHER_AIR_POLLUTION_HIGH | `number` | <code>19</code> | 
| VSCP_TYPE_WEATHER_AIR_HUMID | `number` | <code>20</code> | 
| VSCP_TYPE_WEATHER_AIR_DRY | `number` | <code>21</code> | 
| VSCP_TYPE_WEATHER_SOIL_HUMID | `number` | <code>22</code> | 
| VSCP_TYPE_WEATHER_SOIL_DRY | `number` | <code>23</code> | 
| VSCP_TYPE_WEATHER_RAIN_NONE | `number` | <code>24</code> | 
| VSCP_TYPE_WEATHER_RAIN_LIGHT | `number` | <code>25</code> | 
| VSCP_TYPE_WEATHER_RAIN_HEAVY | `number` | <code>26</code> | 
| VSCP_TYPE_WEATHER_RAIN_VERY_HEAVY | `number` | <code>27</code> | 
| VSCP_TYPE_WEATHER_SUN_NONE | `number` | <code>28</code> | 
| VSCP_TYPE_WEATHER_SUN_LIGHT | `number` | <code>29</code> | 
| VSCP_TYPE_WEATHER_SUN_HEAVY | `number` | <code>30</code> | 
| VSCP_TYPE_WEATHER_SNOW_NONE | `number` | <code>31</code> | 
| VSCP_TYPE_WEATHER_SNOW_LIGHT | `number` | <code>32</code> | 
| VSCP_TYPE_WEATHER_SNOW_HEAVY | `number` | <code>33</code> | 
| VSCP_TYPE_WEATHER_DEW_POINT | `number` | <code>34</code> | 
| VSCP_TYPE_WEATHER_STORM | `number` | <code>35</code> | 
| VSCP_TYPE_WEATHER_FLOOD | `number` | <code>36</code> | 
| VSCP_TYPE_WEATHER_EARTHQUAKE | `number` | <code>37</code> | 
| VSCP_TYPE_WEATHER_NUCLEAR_DISASTER | `number` | <code>38</code> | 
| VSCP_TYPE_WEATHER_FIRE | `number` | <code>39</code> | 
| VSCP_TYPE_WEATHER_LIGHTNING | `number` | <code>40</code> | 
| VSCP_TYPE_WEATHER_UV_RADIATION_LOW | `number` | <code>41</code> | 
| VSCP_TYPE_WEATHER_UV_RADIATION_MEDIUM | `number` | <code>42</code> | 
| VSCP_TYPE_WEATHER_UV_RADIATION_NORMAL | `number` | <code>43</code> | 
| VSCP_TYPE_WEATHER_UV_RADIATION_HIGH | `number` | <code>44</code> | 
| VSCP_TYPE_WEATHER_UV_RADIATION_VERY_HIGH | `number` | <code>45</code> | 
| VSCP_TYPE_WEATHER_WARNING_LEVEL1 | `number` | <code>46</code> | 
| VSCP_TYPE_WEATHER_WARNING_LEVEL2 | `number` | <code>47</code> | 
| VSCP_TYPE_WEATHER_WARNING_LEVEL3 | `number` | <code>48</code> | 
| VSCP_TYPE_WEATHER_WARNING_LEVEL4 | `number` | <code>49</code> | 
| VSCP_TYPE_WEATHER_WARNING_LEVEL5 | `number` | <code>50</code> | 
| VSCP_TYPE_WEATHER_ARMAGEDON | `number` | <code>51</code> | 
| VSCP_TYPE_PHONE_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_PHONE_INCOMING_CALL | `number` | <code>1</code> | 
| VSCP_TYPE_PHONE_OUTGOING_CALL | `number` | <code>2</code> | 
| VSCP_TYPE_PHONE_RING | `number` | <code>3</code> | 
| VSCP_TYPE_PHONE_ANSWER | `number` | <code>4</code> | 
| VSCP_TYPE_PHONE_HANGUP | `number` | <code>5</code> | 
| VSCP_TYPE_PHONE_GIVEUP | `number` | <code>6</code> | 
| VSCP_TYPE_PHONE_TRANSFER | `number` | <code>7</code> | 
| VSCP_TYPE_PHONE_DATABASE_INFO | `number` | <code>8</code> | 
| VSCP_TYPE_DISPLAY_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_DISPLAY_CLEAR_DISPLAY | `number` | <code>1</code> | 
| VSCP_TYPE_DISPLAY_POSITION_CURSOR | `number` | <code>2</code> | 
| VSCP_TYPE_DISPLAY_WRITE_DISPLAY | `number` | <code>3</code> | 
| VSCP_TYPE_DISPLAY_WRITE_DISPLAY_BUFFER | `number` | <code>4</code> | 
| VSCP_TYPE_DISPLAY_SHOW_DISPLAY_BUFFER | `number` | <code>5</code> | 
| VSCP_TYPE_DISPLAY_SET_DISPLAY_BUFFER_PARAM | `number` | <code>6</code> | 
| VSCP_TYPE_DISPLAY_SHOW_TEXT | `number` | <code>32</code> | 
| VSCP_TYPE_DISPLAY_SHOW_LED | `number` | <code>48</code> | 
| VSCP_TYPE_DISPLAY_SHOW_LED_COLOR | `number` | <code>49</code> | 
| VSCP_TYPE_REMOTE_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_REMOTE_RC5 | `number` | <code>1</code> | 
| VSCP_TYPE_REMOTE_SONY12 | `number` | <code>3</code> | 
| VSCP_TYPE_REMOTE_LIRC | `number` | <code>32</code> | 
| VSCP_TYPE_REMOTE_VSCP | `number` | <code>48</code> | 
| VSCP_TYPE_REMOTE_MAPITO | `number` | <code>49</code> | 
| VSCP_TYPE_GNSS_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_GNSS_POSITION | `number` | <code>1</code> | 
| VSCP_TYPE_GNSS_SATELLITES | `number` | <code>2</code> | 
| VSCP_TYPE_WIRELESS_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_WIRELESS_GSM_CELL | `number` | <code>1</code> | 
| VSCP_TYPE_DIAGNOSTIC_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_DIAGNOSTIC_OVERVOLTAGE | `number` | <code>1</code> | 
| VSCP_TYPE_DIAGNOSTIC_UNDERVOLTAGE | `number` | <code>2</code> | 
| VSCP_TYPE_DIAGNOSTIC_VBUS_LOW | `number` | <code>3</code> | 
| VSCP_TYPE_DIAGNOSTIC_BATTERY_LOW | `number` | <code>4</code> | 
| VSCP_TYPE_DIAGNOSTIC_BATTERY_FULL | `number` | <code>5</code> | 
| VSCP_TYPE_DIAGNOSTIC_BATTERY_ERROR | `number` | <code>6</code> | 
| VSCP_TYPE_DIAGNOSTIC_BATTERY_OK | `number` | <code>7</code> | 
| VSCP_TYPE_DIAGNOSTIC_OVERCURRENT | `number` | <code>8</code> | 
| VSCP_TYPE_DIAGNOSTIC_CIRCUIT_ERROR | `number` | <code>9</code> | 
| VSCP_TYPE_DIAGNOSTIC_SHORT_CIRCUIT | `number` | <code>10</code> | 
| VSCP_TYPE_DIAGNOSTIC_OPEN_CIRCUIT | `number` | <code>11</code> | 
| VSCP_TYPE_DIAGNOSTIC_MOIST | `number` | <code>12</code> | 
| VSCP_TYPE_DIAGNOSTIC_WIRE_FAIL | `number` | <code>13</code> | 
| VSCP_TYPE_DIAGNOSTIC_WIRELESS_FAIL | `number` | <code>14</code> | 
| VSCP_TYPE_DIAGNOSTIC_IR_FAIL | `number` | <code>15</code> | 
| VSCP_TYPE_DIAGNOSTIC_1WIRE_FAIL | `number` | <code>16</code> | 
| VSCP_TYPE_DIAGNOSTIC_RS222_FAIL | `number` | <code>17</code> | 
| VSCP_TYPE_DIAGNOSTIC_RS232_FAIL | `number` | <code>18</code> | 
| VSCP_TYPE_DIAGNOSTIC_RS423_FAIL | `number` | <code>19</code> | 
| VSCP_TYPE_DIAGNOSTIC_RS485_FAIL | `number` | <code>20</code> | 
| VSCP_TYPE_DIAGNOSTIC_CAN_FAIL | `number` | <code>21</code> | 
| VSCP_TYPE_DIAGNOSTIC_LAN_FAIL | `number` | <code>22</code> | 
| VSCP_TYPE_DIAGNOSTIC_USB_FAIL | `number` | <code>23</code> | 
| VSCP_TYPE_DIAGNOSTIC_WIFI_FAIL | `number` | <code>24</code> | 
| VSCP_TYPE_DIAGNOSTIC_NFC_RFID_FAIL | `number` | <code>25</code> | 
| VSCP_TYPE_DIAGNOSTIC_LOW_SIGNAL | `number` | <code>26</code> | 
| VSCP_TYPE_DIAGNOSTIC_HIGH_SIGNAL | `number` | <code>27</code> | 
| VSCP_TYPE_DIAGNOSTIC_ADC_FAIL | `number` | <code>28</code> | 
| VSCP_TYPE_DIAGNOSTIC_ALU_FAIL | `number` | <code>29</code> | 
| VSCP_TYPE_DIAGNOSTIC_ASSERT | `number` | <code>30</code> | 
| VSCP_TYPE_DIAGNOSTIC_DAC_FAIL | `number` | <code>31</code> | 
| VSCP_TYPE_DIAGNOSTIC_DMA_FAIL | `number` | <code>32</code> | 
| VSCP_TYPE_DIAGNOSTIC_ETH_FAIL | `number` | <code>33</code> | 
| VSCP_TYPE_DIAGNOSTIC_EXCEPTION | `number` | <code>34</code> | 
| VSCP_TYPE_DIAGNOSTIC_FPU_FAIL | `number` | <code>35</code> | 
| VSCP_TYPE_DIAGNOSTIC_GPIO_FAIL | `number` | <code>36</code> | 
| VSCP_TYPE_DIAGNOSTIC_I2C_FAIL | `number` | <code>37</code> | 
| VSCP_TYPE_DIAGNOSTIC_I2S_FAIL | `number` | <code>38</code> | 
| VSCP_TYPE_DIAGNOSTIC_INVALID_CONFIG | `number` | <code>39</code> | 
| VSCP_TYPE_DIAGNOSTIC_MMU_FAIL | `number` | <code>40</code> | 
| VSCP_TYPE_DIAGNOSTIC_NMI | `number` | <code>41</code> | 
| VSCP_TYPE_DIAGNOSTIC_OVERHEAT | `number` | <code>42</code> | 
| VSCP_TYPE_DIAGNOSTIC_PLL_FAIL | `number` | <code>43</code> | 
| VSCP_TYPE_DIAGNOSTIC_POR_FAIL | `number` | <code>44</code> | 
| VSCP_TYPE_DIAGNOSTIC_PWM_FAIL | `number` | <code>45</code> | 
| VSCP_TYPE_DIAGNOSTIC_RAM_FAIL | `number` | <code>46</code> | 
| VSCP_TYPE_DIAGNOSTIC_ROM_FAIL | `number` | <code>47</code> | 
| VSCP_TYPE_DIAGNOSTIC_SPI_FAIL | `number` | <code>48</code> | 
| VSCP_TYPE_DIAGNOSTIC_STACK_FAIL | `number` | <code>49</code> | 
| VSCP_TYPE_DIAGNOSTIC_LIN_FAIL | `number` | <code>50</code> | 
| VSCP_TYPE_DIAGNOSTIC_UART_FAIL | `number` | <code>51</code> | 
| VSCP_TYPE_DIAGNOSTIC_UNHANDLED_INT | `number` | <code>52</code> | 
| VSCP_TYPE_DIAGNOSTIC_MEMORY_FAIL | `number` | <code>53</code> | 
| VSCP_TYPE_DIAGNOSTIC_VARIABLE_RANGE | `number` | <code>54</code> | 
| VSCP_TYPE_DIAGNOSTIC_WDT | `number` | <code>55</code> | 
| VSCP_TYPE_DIAGNOSTIC_EEPROM_FAIL | `number` | <code>56</code> | 
| VSCP_TYPE_DIAGNOSTIC_ENCRYPTION_FAIL | `number` | <code>57</code> | 
| VSCP_TYPE_DIAGNOSTIC_BAD_USER_INPUT | `number` | <code>58</code> | 
| VSCP_TYPE_DIAGNOSTIC_DECRYPTION_FAIL | `number` | <code>59</code> | 
| VSCP_TYPE_DIAGNOSTIC_NOISE | `number` | <code>60</code> | 
| VSCP_TYPE_DIAGNOSTIC_BOOTLOADER_FAIL | `number` | <code>61</code> | 
| VSCP_TYPE_DIAGNOSTIC_PROGRAMFLOW_FAIL | `number` | <code>62</code> | 
| VSCP_TYPE_DIAGNOSTIC_RTC_FAIL | `number` | <code>63</code> | 
| VSCP_TYPE_DIAGNOSTIC_SYSTEM_TEST_FAIL | `number` | <code>64</code> | 
| VSCP_TYPE_DIAGNOSTIC_SENSOR_FAIL | `number` | <code>65</code> | 
| VSCP_TYPE_DIAGNOSTIC_SAFESTATE | `number` | <code>66</code> | 
| VSCP_TYPE_DIAGNOSTIC_SIGNAL_IMPLAUSIBLE | `number` | <code>67</code> | 
| VSCP_TYPE_DIAGNOSTIC_STORAGE_FAIL | `number` | <code>68</code> | 
| VSCP_TYPE_DIAGNOSTIC_SELFTEST_FAIL | `number` | <code>69</code> | 
| VSCP_TYPE_DIAGNOSTIC_ESD_EMC_EMI | `number` | <code>70</code> | 
| VSCP_TYPE_DIAGNOSTIC_TIMEOUT | `number` | <code>71</code> | 
| VSCP_TYPE_DIAGNOSTIC_LCD_FAIL | `number` | <code>72</code> | 
| VSCP_TYPE_DIAGNOSTIC_TOUCHPANEL_FAIL | `number` | <code>73</code> | 
| VSCP_TYPE_DIAGNOSTIC_NOLOAD | `number` | <code>74</code> | 
| VSCP_TYPE_DIAGNOSTIC_COOLING_FAIL | `number` | <code>75</code> | 
| VSCP_TYPE_DIAGNOSTIC_HEATING_FAIL | `number` | <code>76</code> | 
| VSCP_TYPE_DIAGNOSTIC_TX_FAIL | `number` | <code>77</code> | 
| VSCP_TYPE_DIAGNOSTIC_RX_FAIL | `number` | <code>78</code> | 
| VSCP_TYPE_DIAGNOSTIC_EXT_IC_FAIL | `number` | <code>79</code> | 
| VSCP_TYPE_ERROR_SUCCESS | `number` | <code>0</code> | 
| VSCP_TYPE_ERROR_ERROR | `number` | <code>1</code> | 
| VSCP_TYPE_ERROR_CHANNEL | `number` | <code>7</code> | 
| VSCP_TYPE_ERROR_FIFO_EMPTY | `number` | <code>8</code> | 
| VSCP_TYPE_ERROR_FIFO_FULL | `number` | <code>9</code> | 
| VSCP_TYPE_ERROR_FIFO_SIZE | `number` | <code>10</code> | 
| VSCP_TYPE_ERROR_FIFO_WAIT | `number` | <code>11</code> | 
| VSCP_TYPE_ERROR_GENERIC | `number` | <code>12</code> | 
| VSCP_TYPE_ERROR_HARDWARE | `number` | <code>13</code> | 
| VSCP_TYPE_ERROR_INIT_FAIL | `number` | <code>14</code> | 
| VSCP_TYPE_ERROR_INIT_MISSING | `number` | <code>15</code> | 
| VSCP_TYPE_ERROR_INIT_READY | `number` | <code>16</code> | 
| VSCP_TYPE_ERROR_NOT_SUPPORTED | `number` | <code>17</code> | 
| VSCP_TYPE_ERROR_OVERRUN | `number` | <code>18</code> | 
| VSCP_TYPE_ERROR_RCV_EMPTY | `number` | <code>19</code> | 
| VSCP_TYPE_ERROR_REGISTER | `number` | <code>20</code> | 
| VSCP_TYPE_ERROR_TRM_FULL | `number` | <code>21</code> | 
| VSCP_TYPE_ERROR_LIBRARY | `number` | <code>28</code> | 
| VSCP_TYPE_ERROR_PROCADDRESS | `number` | <code>29</code> | 
| VSCP_TYPE_ERROR_ONLY_ONE_INSTANCE | `number` | <code>30</code> | 
| VSCP_TYPE_ERROR_SUB_DRIVER | `number` | <code>31</code> | 
| VSCP_TYPE_ERROR_TIMEOUT | `number` | <code>32</code> | 
| VSCP_TYPE_ERROR_NOT_OPEN | `number` | <code>33</code> | 
| VSCP_TYPE_ERROR_PARAMETER | `number` | <code>34</code> | 
| VSCP_TYPE_ERROR_MEMORY | `number` | <code>35</code> | 
| VSCP_TYPE_ERROR_INTERNAL | `number` | <code>36</code> | 
| VSCP_TYPE_ERROR_COMMUNICATION | `number` | <code>37</code> | 
| VSCP_TYPE_ERROR_USER | `number` | <code>38</code> | 
| VSCP_TYPE_ERROR_PASSWORD | `number` | <code>39</code> | 
| VSCP_TYPE_ERROR_CONNECTION | `number` | <code>40</code> | 
| VSCP_TYPE_ERROR_INVALID_HANDLE | `number` | <code>41</code> | 
| VSCP_TYPE_ERROR_OPERATION_FAILED | `number` | <code>42</code> | 
| VSCP_TYPE_ERROR_BUFFER_SMALL | `number` | <code>43</code> | 
| VSCP_TYPE_ERROR_ITEM_UNKNOWN | `number` | <code>44</code> | 
| VSCP_TYPE_ERROR_NAME_USED | `number` | <code>45</code> | 
| VSCP_TYPE_LOG_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_LOG_MESSAGE | `number` | <code>1</code> | 
| VSCP_TYPE_LOG_START | `number` | <code>2</code> | 
| VSCP_TYPE_LOG_STOP | `number` | <code>3</code> | 
| VSCP_TYPE_LOG_LEVEL | `number` | <code>4</code> | 
| VSCP_TYPE_LABORATORY_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_LOCAL_GENERAL | `number` | <code>0</code> | 
| VSCP2_TYPE_PROTOCOL_GENERAL | `number` | <code>0</code> | 
| VSCP2_TYPE_PROTOCOL_READ_REGISTER | `number` | <code>1</code> | 
| VSCP2_TYPE_PROTOCOL_WRITE_REGISTER | `number` | <code>2</code> | 
| VSCP2_TYPE_PROTOCOL_READ_WRITE_RESPONSE | `number` | <code>3</code> | 
| VSCP2_TYPE_PROTOCOL_HIGH_END_SERVER_CAPS | `number` | <code>20</code> | 
| VSCP2_TYPE_PROTOCOL_WHO_IS_THERE_RESPONSE | `number` | <code>32</code> | 
| VSCP2_TYPE_CONTROL_GENERAL | `number` | <code>0</code> | 
| VSCP2_TYPE_INFORMATION_GENERAL | `number` | <code>0</code> | 
| VSCP2_TYPE_INFORMATION_TOKEN_ACTIVITY | `number` | <code>1</code> | 
| VSCP2_TYPE_INFORMATION_HEART_BEAT | `number` | <code>2</code> | 
| VSCP2_TYPE_INFORMATION_PROXY_HEART_BEAT | `number` | <code>3</code> | 
| VSCP2_TYPE_INFORMATION_CHANNEL_ANNOUNCE | `number` | <code>4</code> | 
| VSCP2_TYPE_TEXT2SPEECH_GENERAL | `number` | <code>0</code> | 
| VSCP2_TYPE_TEXT2SPEECH_TALK | `number` | <code>1</code> | 
| VSCP2_TYPE_CUSTOM_GENERAL | `number` | <code>0</code> | 
| VSCP2_TYPE_DISPLAY_GENERAL | `number` | <code>0</code> | 
| VSCP2_TYPE_VSCPD_GENERAL | `number` | <code>0</code> | 
| VSCP2_TYPE_VSCPD_LOOP | `number` | <code>1</code> | 
| VSCP2_TYPE_VSCPD_PAUSE | `number` | <code>3</code> | 
| VSCP2_TYPE_VSCPD_ACTIVATE | `number` | <code>4</code> | 
| VSCP2_TYPE_VSCPD_SECOND | `number` | <code>5</code> | 
| VSCP2_TYPE_VSCPD_MINUTE | `number` | <code>6</code> | 
| VSCP2_TYPE_VSCPD_HOUR | `number` | <code>7</code> | 
| VSCP2_TYPE_VSCPD_NOON | `number` | <code>8</code> | 
| VSCP2_TYPE_VSCPD_MIDNIGHT | `number` | <code>9</code> | 
| VSCP2_TYPE_VSCPD_WEEK | `number` | <code>11</code> | 
| VSCP2_TYPE_VSCPD_MONTH | `number` | <code>12</code> | 
| VSCP2_TYPE_VSCPD_QUARTER | `number` | <code>13</code> | 
| VSCP2_TYPE_VSCPD_YEAR | `number` | <code>14</code> | 
| VSCP2_TYPE_VSCPD_RANDOM_MINUTE | `number` | <code>15</code> | 
| VSCP2_TYPE_VSCPD_RANDOM_HOUR | `number` | <code>16</code> | 
| VSCP2_TYPE_VSCPD_RANDOM_DAY | `number` | <code>17</code> | 
| VSCP2_TYPE_VSCPD_RANDOM_WEEK | `number` | <code>18</code> | 
| VSCP2_TYPE_VSCPD_RANDOM_MONTH | `number` | <code>19</code> | 
| VSCP2_TYPE_VSCPD_RANDOM_YEAR | `number` | <code>20</code> | 
| VSCP2_TYPE_VSCPD_DUSK | `number` | <code>21</code> | 
| VSCP2_TYPE_VSCPD_DAWN | `number` | <code>22</code> | 
| VSCP2_TYPE_VSCPD_STARTING_UP | `number` | <code>23</code> | 
| VSCP2_TYPE_VSCPD_SHUTTING_DOWN | `number` | <code>24</code> | 
| VSCP2_TYPE_VSCPD_TIMER_STARTED | `number` | <code>25</code> | 
| VSCP2_TYPE_VSCPD_TIMER_PAUSED | `number` | <code>26</code> | 
| VSCP2_TYPE_VSCPD_TIMER_RESUMED | `number` | <code>27</code> | 
| VSCP2_TYPE_VSCPD_TIMER_STOPPED | `number` | <code>28</code> | 
| VSCP2_TYPE_VSCPD_TIMER_ELLAPSED | `number` | <code>29</code> | 
| VSCP2_TYPE_VSCPD_NEW_CALCULATION | `number` | <code>30</code> | 

<a id="vscp_dot_constants_dot_priorities"></a>

#### constants.priorities : `enum`
VSCP class priorities

**Kind**: static enum of [`constants`](#vscp.constants)  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| PRIORITY_0_HIGH | `number` | <code>0</code> | 
| PRIORITY_1 | `number` | <code>1</code> | 
| PRIORITY_2 | `number` | <code>2</code> | 
| PRIORITY_3_NORMAL | `number` | <code>3</code> | 
| PRIORITY_4 | `number` | <code>4</code> | 
| PRIORITY_5 | `number` | <code>5</code> | 
| PRIORITY_6 | `number` | <code>6</code> | 
| PRIORITY_7_LOW | `number` | <code>7</code> | 

<a id="vscp_dot_constants_dot_varTypes"></a>

#### constants.varTypes : `enum`
VSCP variable types

**Kind**: static enum of [`constants`](#vscp.constants)  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| UNASSIGNED | `number` | <code>0</code> | 
| STRING | `number` | <code>1</code> | 
| BOOLEAN | `number` | <code>2</code> | 
| INTEGER | `number` | <code>3</code> | 
| LONG | `number` | <code>4</code> | 
| DOUBLE | `number` | <code>5</code> | 
| MEASUREMENT | `number` | <code>6</code> | 
| EVENT | `number` | <code>7</code> | 
| GUID | `number` | <code>8</code> | 
| EVENT_DATA | `number` | <code>9</code> | 
| EVENT_CLASS | `number` | <code>10</code> | 
| EVENT_TYPE | `number` | <code>11</code> | 
| EVENT_TIMESTAMP | `number` | <code>12</code> | 
| DATE_TIME | `number` | <code>13</code> | 
| DATE | `number` | <code>14</code> | 
| TIME | `number` | <code>15</code> | 
| BLOB | `number` | <code>16</code> | 
| MIME | `number` | <code>100</code> | 
| HTML | `number` | <code>101</code> | 
| JAVASCIPT | `number` | <code>102</code> | 
| JSON | `number` | <code>103</code> | 
| XML | `number` | <code>104</code> | 
| SQL | `number` | <code>105</code> | 
| LUA | `number` | <code>201</code> | 
| LUARES | `number` | <code>202</code> | 
| UXTYPE1 | `number` | <code>300</code> | 
| DMROW | `number` | <code>500</code> | 
| DRIVER | `number` | <code>501</code> | 
| USER | `number` | <code>502</code> | 
| FILTER | `number` | <code>503</code> | 

<a id="vscp_dot_constants_dot_varTypeNames"></a>

#### constants.varTypeNames
VSCP variable type names as string. Use to fill drop down boxes and similar.

**Kind**: static constant of [`constants`](#vscp.constants)  
<a id="vscp_dot_utility"></a>

### vscp.utility : `object`
Utility functions

**Kind**: static namespace of [`vscp`](#vscp)  

* [.utility](#vscp_dot_utility) : `object`
    * [.readValue(input)](#vscp_dot_utility_dot_readValue) ⇒ `number`
    * [.getTime()](#vscp_dot_utility_dot_getTime) ⇒ `string`
    * [.guidToStr(guid)](#vscp_dot_utility_dot_guidToStr) ⇒ `string`
    * [.strToGuid(guid)](#vscp_dot_utility_dot_strToGuid) ⇒ `Array.&lt;number&gt;`
    * [.getNodeId(guid)](#vscp_dot_utility_dot_getNodeId) ⇒ `number`

<a id="vscp_dot_utility_dot_readValue"></a>

#### utility.readValue(input) ⇒ `number`
Read a hex or decimal value and return as an integer.

**Kind**: static method of [`utility`](#vscp.utility)  
**Returns**: `number` - Value  

| Param | Type | Description |
| --- | --- | --- |
| input | `string` | Hex or decimal value as string |

<a id="vscp_dot_utility_dot_getTime"></a>

#### utility.getTime() ⇒ `string`
Utility function which returns the current time in the following format: hh:mm:ss.us

**Kind**: static method of [`utility`](#vscp.utility)  
**Returns**: `string` - Current time in the format hh:mm:ss.us  
<a id="vscp_dot_utility_dot_guidToStr"></a>

#### utility.guidToStr(guid) ⇒ `string`
Converts a GUID number array to a GUID string.

**Kind**: static method of [`utility`](#vscp.utility)  
**Returns**: `string` - GUID string, e.g. 00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00  

| Param | Type | Description |
| --- | --- | --- |
| guid | `Array.&lt;number&gt;` | GUID number array |

<a id="vscp_dot_utility_dot_strToGuid"></a>

#### utility.strToGuid(guid) ⇒ `Array.&lt;number&gt;`
Converts a GUID string to a GUID number array.

**Kind**: static method of [`utility`](#vscp.utility)  
**Returns**: `Array.&lt;number&gt;` - GUID number array  

| Param | Type | Description |
| --- | --- | --- |
| guid | `string` | GUID string, e.g. 00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00 |

<a id="vscp_dot_utility_dot_getNodeId"></a>

#### utility.getNodeId(guid) ⇒ `number`
Get node id from a node GUID string.

**Kind**: static method of [`utility`](#vscp.utility)  
**Returns**: `number` - Node id  

| Param | Type | Description |
| --- | --- | --- |
| guid | `string` | GUID string, e.g. 00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00 |

<a id="vscp_dot_mdf"></a>

### vscp.mdf : `object`
VSCP module description file handling functionality

**Kind**: static namespace of [`vscp`](#vscp)  

* [.mdf](#vscp_dot_mdf) : `object`
    * [.Register](#vscp_dot_mdf_dot_Register)
        * [new vscp.mdf.Register()](#new_vscp_dot_mdf_dot_Register_new)
        * [.name](#vscp_dot_mdf_dot_Register_plus_name) : `string`
        * [.description](#vscp_dot_mdf_dot_Register_plus_description) : `string`
        * [.readAccess](#vscp_dot_mdf_dot_Register_plus_readAccess) : `boolean`
        * [.writeAccess](#vscp_dot_mdf_dot_Register_plus_writeAccess) : `boolean`
        * [.page](#vscp_dot_mdf_dot_Register_plus_page) : `number`
        * [.offset](#vscp_dot_mdf_dot_Register_plus_offset) : `number`
        * [.value](#vscp_dot_mdf_dot_Register_plus_value) : `number`
        * [.dirty](#vscp_dot_mdf_dot_Register_plus_dirty) : `number`
        * [.userData](#vscp_dot_mdf_dot_Register_plus_userData) : `object`
        * [.setValue(value)](#vscp_dot_mdf_dot_Register_plus_setValue)
    * [.Abstraction](#vscp_dot_mdf_dot_Abstraction)
        * [new vscp.mdf.Abstraction()](#new_vscp_dot_mdf_dot_Abstraction_new)
        * [.name](#vscp_dot_mdf_dot_Abstraction_plus_name) : `string`
        * [.description](#vscp_dot_mdf_dot_Abstraction_plus_description) : `string`
        * [.readAccess](#vscp_dot_mdf_dot_Abstraction_plus_readAccess) : `boolean`
        * [.writeAccess](#vscp_dot_mdf_dot_Abstraction_plus_writeAccess) : `boolean`
        * [.id](#vscp_dot_mdf_dot_Abstraction_plus_id) : `string`
        * [.page](#vscp_dot_mdf_dot_Abstraction_plus_page) : `number`
        * [.offset](#vscp_dot_mdf_dot_Abstraction_plus_offset) : `number`
        * [.value](#vscp_dot_mdf_dot_Abstraction_plus_value) : `number`
        * [.type](#vscp_dot_mdf_dot_Abstraction_plus_type) : `string`
        * [.defValue](#vscp_dot_mdf_dot_Abstraction_plus_defValue) : `number`
        * [.dirty](#vscp_dot_mdf_dot_Abstraction_plus_dirty) : `number`
        * [.userData](#vscp_dot_mdf_dot_Abstraction_plus_userData) : `object`
        * [.setValue(value)](#vscp_dot_mdf_dot_Abstraction_plus_setValue)
    * [.constants](#vscp_dot_mdf_dot_constants) : `object`
        * [.TYPE_SIZES](#vscp_dot_mdf_dot_constants_dot_TYPE_SIZES) : `enum`
        * [.CONVERSION_FROM_DECIMAL](#vscp_dot_mdf_dot_constants_dot_CONVERSION_FROM_DECIMAL)
        * [.CONVERSION_TO_DECIMAL](#vscp_dot_mdf_dot_constants_dot_CONVERSION_TO_DECIMAL)
        * [.RANGE](#vscp_dot_mdf_dot_constants_dot_RANGE)
    * [.timeout](#vscp_dot_mdf_dot_timeout) : `number`
    * [.load(options)](#vscp_dot_mdf_dot_load)
    * [.loadLocal(options)](#vscp_dot_mdf_dot_loadLocal)
    * [.readAbstractValue(options)](#vscp_dot_mdf_dot_readAbstractValue)
    * [.writeAbstractValue(options)](#vscp_dot_mdf_dot_writeAbstractValue)
    * [.writeAbstractBits(options)](#vscp_dot_mdf_dot_writeAbstractBits)
    * [.getRegisters(options)](#vscp_dot_mdf_dot_getRegisters) ⇒ [`Array.&lt;Register&gt;`](#vscp.mdf.Register)
    * [.getAbstractions(options)](#vscp_dot_mdf_dot_getAbstractions) ⇒ [`Array.&lt;Abstraction&gt;`](#vscp.mdf.Abstraction)

<a id="vscp_dot_mdf_dot_Register"></a>

#### mdf.Register
**Kind**: static class of [`mdf`](#vscp.mdf)  

* [.Register](#vscp_dot_mdf_dot_Register)
    * [new vscp.mdf.Register()](#new_vscp_dot_mdf_dot_Register_new)
    * [.name](#vscp_dot_mdf_dot_Register_plus_name) : `string`
    * [.description](#vscp_dot_mdf_dot_Register_plus_description) : `string`
    * [.readAccess](#vscp_dot_mdf_dot_Register_plus_readAccess) : `boolean`
    * [.writeAccess](#vscp_dot_mdf_dot_Register_plus_writeAccess) : `boolean`
    * [.page](#vscp_dot_mdf_dot_Register_plus_page) : `number`
    * [.offset](#vscp_dot_mdf_dot_Register_plus_offset) : `number`
    * [.value](#vscp_dot_mdf_dot_Register_plus_value) : `number`
    * [.dirty](#vscp_dot_mdf_dot_Register_plus_dirty) : `number`
    * [.userData](#vscp_dot_mdf_dot_Register_plus_userData) : `object`
    * [.setValue(value)](#vscp_dot_mdf_dot_Register_plus_setValue)

<a id="new_vscp_dot_mdf_dot_Register_new"></a>

##### new vscp.mdf.Register()
MDF register with all parameters.

<a id="vscp_dot_mdf_dot_Register_plus_name"></a>

##### register.name : `string`
Register name

**Kind**: instance property of [`Register`](#vscp.mdf.Register)  
<a id="vscp_dot_mdf_dot_Register_plus_description"></a>

##### register.description : `string`
Register description

**Kind**: instance property of [`Register`](#vscp.mdf.Register)  
<a id="vscp_dot_mdf_dot_Register_plus_readAccess"></a>

##### register.readAccess : `boolean`
Read access to the register allowed or not

**Kind**: instance property of [`Register`](#vscp.mdf.Register)  
<a id="vscp_dot_mdf_dot_Register_plus_writeAccess"></a>

##### register.writeAccess : `boolean`
Write access to the register allowed or not

**Kind**: instance property of [`Register`](#vscp.mdf.Register)  
<a id="vscp_dot_mdf_dot_Register_plus_page"></a>

##### register.page : `number`
Page where the register is located

**Kind**: instance property of [`Register`](#vscp.mdf.Register)  
<a id="vscp_dot_mdf_dot_Register_plus_offset"></a>

##### register.offset : `number`
Offset where the register is located on the page

**Kind**: instance property of [`Register`](#vscp.mdf.Register)  
<a id="vscp_dot_mdf_dot_Register_plus_value"></a>

##### register.value : `number`
Register value

**Kind**: instance property of [`Register`](#vscp.mdf.Register)  
<a id="vscp_dot_mdf_dot_Register_plus_dirty"></a>

##### register.dirty : `number`
Marks the register value dirty, which means the user changed it.
It can be used to detect which registers have to be written to the node.

**Kind**: instance property of [`Register`](#vscp.mdf.Register)  
<a id="vscp_dot_mdf_dot_Register_plus_userData"></a>

##### register.userData : `object`
User specific data

**Kind**: instance property of [`Register`](#vscp.mdf.Register)  
<a id="vscp_dot_mdf_dot_Register_plus_setValue"></a>

##### register.setValue(value)
This function set a register value and marks it dirty.

**Kind**: instance method of [`Register`](#vscp.mdf.Register)  

| Param | Type | Description |
| --- | --- | --- |
| value | `number` | New value |

<a id="vscp_dot_mdf_dot_Abstraction"></a>

#### mdf.Abstraction
**Kind**: static class of [`mdf`](#vscp.mdf)  

* [.Abstraction](#vscp_dot_mdf_dot_Abstraction)
    * [new vscp.mdf.Abstraction()](#new_vscp_dot_mdf_dot_Abstraction_new)
    * [.name](#vscp_dot_mdf_dot_Abstraction_plus_name) : `string`
    * [.description](#vscp_dot_mdf_dot_Abstraction_plus_description) : `string`
    * [.readAccess](#vscp_dot_mdf_dot_Abstraction_plus_readAccess) : `boolean`
    * [.writeAccess](#vscp_dot_mdf_dot_Abstraction_plus_writeAccess) : `boolean`
    * [.id](#vscp_dot_mdf_dot_Abstraction_plus_id) : `string`
    * [.page](#vscp_dot_mdf_dot_Abstraction_plus_page) : `number`
    * [.offset](#vscp_dot_mdf_dot_Abstraction_plus_offset) : `number`
    * [.value](#vscp_dot_mdf_dot_Abstraction_plus_value) : `number`
    * [.type](#vscp_dot_mdf_dot_Abstraction_plus_type) : `string`
    * [.defValue](#vscp_dot_mdf_dot_Abstraction_plus_defValue) : `number`
    * [.dirty](#vscp_dot_mdf_dot_Abstraction_plus_dirty) : `number`
    * [.userData](#vscp_dot_mdf_dot_Abstraction_plus_userData) : `object`
    * [.setValue(value)](#vscp_dot_mdf_dot_Abstraction_plus_setValue)

<a id="new_vscp_dot_mdf_dot_Abstraction_new"></a>

##### new vscp.mdf.Abstraction()
MDF abstraction with all parameters.

<a id="vscp_dot_mdf_dot_Abstraction_plus_name"></a>

##### abstraction.name : `string`
Abstraction name

**Kind**: instance property of [`Abstraction`](#vscp.mdf.Abstraction)  
<a id="vscp_dot_mdf_dot_Abstraction_plus_description"></a>

##### abstraction.description : `string`
Abstraction description

**Kind**: instance property of [`Abstraction`](#vscp.mdf.Abstraction)  
<a id="vscp_dot_mdf_dot_Abstraction_plus_readAccess"></a>

##### abstraction.readAccess : `boolean`
Read access to the abstraction allowed or not

**Kind**: instance property of [`Abstraction`](#vscp.mdf.Abstraction)  
<a id="vscp_dot_mdf_dot_Abstraction_plus_writeAccess"></a>

##### abstraction.writeAccess : `boolean`
Write access to the abstraction allowed or not

**Kind**: instance property of [`Abstraction`](#vscp.mdf.Abstraction)  
<a id="vscp_dot_mdf_dot_Abstraction_plus_id"></a>

##### abstraction.id : `string`
Abstraction id

**Kind**: instance property of [`Abstraction`](#vscp.mdf.Abstraction)  
<a id="vscp_dot_mdf_dot_Abstraction_plus_page"></a>

##### abstraction.page : `number`
Page where the abstraction is located

**Kind**: instance property of [`Abstraction`](#vscp.mdf.Abstraction)  
<a id="vscp_dot_mdf_dot_Abstraction_plus_offset"></a>

##### abstraction.offset : `number`
Offset where the abstraction is located

**Kind**: instance property of [`Abstraction`](#vscp.mdf.Abstraction)  
<a id="vscp_dot_mdf_dot_Abstraction_plus_value"></a>

##### abstraction.value : `number`
Abstraction value

**Kind**: instance property of [`Abstraction`](#vscp.mdf.Abstraction)  
<a id="vscp_dot_mdf_dot_Abstraction_plus_type"></a>

##### abstraction.type : `string`
Abstraction type

**Kind**: instance property of [`Abstraction`](#vscp.mdf.Abstraction)  
<a id="vscp_dot_mdf_dot_Abstraction_plus_defValue"></a>

##### abstraction.defValue : `number`
Abstraction default value

**Kind**: instance property of [`Abstraction`](#vscp.mdf.Abstraction)  
<a id="vscp_dot_mdf_dot_Abstraction_plus_dirty"></a>

##### abstraction.dirty : `number`
Marks the abstraction value dirty, which means the user changed it.
It can be used to detect which abstractions have to be written to the node.

**Kind**: instance property of [`Abstraction`](#vscp.mdf.Abstraction)  
<a id="vscp_dot_mdf_dot_Abstraction_plus_userData"></a>

##### abstraction.userData : `object`
User specific data

**Kind**: instance property of [`Abstraction`](#vscp.mdf.Abstraction)  
<a id="vscp_dot_mdf_dot_Abstraction_plus_setValue"></a>

##### abstraction.setValue(value)
This function set a abstraction value and marks it dirty.

**Kind**: instance method of [`Abstraction`](#vscp.mdf.Abstraction)  

| Param | Type | Description |
| --- | --- | --- |
| value | `number` | New value |

<a id="vscp_dot_mdf_dot_constants"></a>

#### mdf.constants : `object`
MDF specific constants

**Kind**: static namespace of [`mdf`](#vscp.mdf)  

* [.constants](#vscp_dot_mdf_dot_constants) : `object`
    * [.TYPE_SIZES](#vscp_dot_mdf_dot_constants_dot_TYPE_SIZES) : `enum`
    * [.CONVERSION_FROM_DECIMAL](#vscp_dot_mdf_dot_constants_dot_CONVERSION_FROM_DECIMAL)
    * [.CONVERSION_TO_DECIMAL](#vscp_dot_mdf_dot_constants_dot_CONVERSION_TO_DECIMAL)
    * [.RANGE](#vscp_dot_mdf_dot_constants_dot_RANGE)

<a id="vscp_dot_mdf_dot_constants_dot_TYPE_SIZES"></a>

##### constants.TYPE_SIZES : `enum`
MDF type sizes in bytes

**Kind**: static enum of [`constants`](#vscp.mdf.constants)  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| string | `number` | <code>0</code> | 
| bitfield | `number` | <code>1</code> | 
| bool | `number` | <code>1</code> | 
| int8_t | `number` | <code>1</code> | 
| uint8_t | `number` | <code>1</code> | 
| int16_t | `number` | <code>2</code> | 
| uint16_t | `number` | <code>2</code> | 
| int32_t | `number` | <code>4</code> | 
| uint32_t | `number` | <code>4</code> | 
| int64_t | `number` | <code>8</code> | 
| uint64_t | `number` | <code>8</code> | 
| float | `number` | <code>4</code> | 
| double | `number` | <code>8</code> | 
| date | `number` | <code>4</code> | 
| time | `number` | <code>4</code> | 
| guid | `number` | <code>16</code> | 
| char | `number` | <code>1</code> | 
| byte | `number` | <code>1</code> | 
| short | `number` | <code>2</code> | 
| integer | `number` | <code>2</code> | 
| long | `number` | <code>4</code> | 

<a id="vscp_dot_mdf_dot_constants_dot_CONVERSION_FROM_DECIMAL"></a>

##### constants.CONVERSION_FROM_DECIMAL
Conversion functions from decimal

**Kind**: static constant of [`constants`](#vscp.mdf.constants)  
<a id="vscp_dot_mdf_dot_constants_dot_CONVERSION_TO_DECIMAL"></a>

##### constants.CONVERSION_TO_DECIMAL
Conversion functions to decimal

**Kind**: static constant of [`constants`](#vscp.mdf.constants)  
<a id="vscp_dot_mdf_dot_constants_dot_RANGE"></a>

##### constants.RANGE
Type ranges

**Kind**: static constant of [`constants`](#vscp.mdf.constants)  
<a id="vscp_dot_mdf_dot_timeout"></a>

#### mdf.timeout : `number`
VSCP response timeout in ms

**Kind**: static constant of [`mdf`](#vscp.mdf)  
<a id="vscp_dot_mdf_dot_load"></a>

#### mdf.load(options)
Get the MDF as xml document from a URL.

**Kind**: static method of [`mdf`](#vscp.mdf)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.url | `function` | URL to MDF file |
| options.onSuccess | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_mdf_dot_loadLocal"></a>

#### mdf.loadLocal(options)
Get the MDF as xml document from local file system.

**Kind**: static method of [`mdf`](#vscp.mdf)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.fileRef | `function` | File reference to MDF file |
| options.onSuccess | `function` | If the xml file is successful loaded, this function will be called. |
| [options.onError] | `function` | If loading the xml file failed, this function will be called. |

<a id="vscp_dot_mdf_dot_readAbstractValue"></a>

#### mdf.readAbstractValue(options)
Read a abstract value.

**Kind**: static method of [`mdf`](#vscp.mdf)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.mdf | `object` | MDF as xml jquery object |
| options.id | `number` | Abstract value id |
| options.onSuccess | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_mdf_dot_writeAbstractValue"></a>

#### mdf.writeAbstractValue(options)
Write a abstract value.

**Kind**: static method of [`mdf`](#vscp.mdf)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.mdf | `object` | MDF as xml jquery object |
| options.id | `number` | Abstract value id |
| options.value | `string` | Abstract value |
| options.onSuccess | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_mdf_dot_writeAbstractBits"></a>

#### mdf.writeAbstractBits(options)
Change some bits in a abstract value.

**Kind**: static method of [`mdf`](#vscp.mdf)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.mdf | `object` | MDF as xml jquery object |
| options.id | `number` | Abstract value id |
| options.pos | `number` | Bit position |
| options.width | `number` | Bit width |
| options.value | `string` | Abstract value |
| options.onSuccess | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_mdf_dot_getRegisters"></a>

#### mdf.getRegisters(options) ⇒ [`Array.&lt;Register&gt;`](#vscp.mdf.Register)
This function retrieves all register informations from a mdf.

**Kind**: static method of [`mdf`](#vscp.mdf)  
**Returns**: [`Array.&lt;Register&gt;`](#vscp.mdf.Register) - Array of MDF registers  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.mdf | `object` | MDF as jquery object |

<a id="vscp_dot_mdf_dot_getAbstractions"></a>

#### mdf.getAbstractions(options) ⇒ [`Array.&lt;Abstraction&gt;`](#vscp.mdf.Abstraction)
This function retrieves all abstraction informations from a mdf.

**Kind**: static method of [`mdf`](#vscp.mdf)  
**Returns**: [`Array.&lt;Abstraction&gt;`](#vscp.mdf.Abstraction) - Array of MDF abstractions  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.mdf | `object` | MDF as jquery object |

<a id="vscp_dot_measurement"></a>

### vscp.measurement : `object`
VSCP measurement stuff

**Kind**: static namespace of [`vscp`](#vscp)  

* [.measurement](#vscp_dot_measurement) : `object`
    * [.Decoder](#vscp_dot_measurement_dot_Decoder)
        * [new vscp.measurement.Decoder(options)](#new_vscp_dot_measurement_dot_Decoder_new)
        * [.client](#vscp_dot_measurement_dot_Decoder_plus_client) : [`Client`](#vscp.ws.Client)
        * [.onValue](#vscp_dot_measurement_dot_Decoder_plus_onValue) : `function`
        * [.filter](#vscp_dot_measurement_dot_Decoder_plus_filter) : `object`
    * [.constants](#vscp_dot_measurement_dot_constants) : `object`
        * [.units](#vscp_dot_measurement_dot_constants_dot_units) : `Array.&lt;string&gt;`
    * [.timeout](#vscp_dot_measurement_dot_timeout) : `number`
    * [.toFixed(value, precision)](#vscp_dot_measurement_dot_toFixed) ⇒ `number`
    * [.varInteger2Float(data)](#vscp_dot_measurement_dot_varInteger2Float) ⇒ `number`
    * [.getDataCoding(data)](#vscp_dot_measurement_dot_getDataCoding) ⇒ `number`
    * [.getUnitFromDataCoding(data)](#vscp_dot_measurement_dot_getUnitFromDataCoding) ⇒ `number`
    * [.getSensorIndexFromDataCoding(data)](#vscp_dot_measurement_dot_getSensorIndexFromDataCoding) ⇒ `number`
    * [.decodeClass10(data)](#vscp_dot_measurement_dot_decodeClass10) ⇒ `number`
    * [.decodeClass60Number(data)](#vscp_dot_measurement_dot_decodeClass60Number) ⇒ `number`
    * [.decodeClass65Number(data)](#vscp_dot_measurement_dot_decodeClass65Number) ⇒ `number`
    * [.convertFahrenheitToKelvin(value)](#vscp_dot_measurement_dot_convertFahrenheitToKelvin) ⇒ `number`
    * [.convertFahrenheitToCelsius(value)](#vscp_dot_measurement_dot_convertFahrenheitToCelsius) ⇒ `number`
    * [.convertCelsiusToFahrenheit(value)](#vscp_dot_measurement_dot_convertCelsiusToFahrenheit) ⇒ `number`
    * [.convertKelvinToCelsius(value)](#vscp_dot_measurement_dot_convertKelvinToCelsius) ⇒ `number`
    * [.convertCelsiusToKelvin(value)](#vscp_dot_measurement_dot_convertCelsiusToKelvin) ⇒ `number`
    * [.convertKelvinToFahrenheit(value)](#vscp_dot_measurement_dot_convertKelvinToFahrenheit) ⇒ `number`
    * [.convertMeterToFeet(value)](#vscp_dot_measurement_dot_convertMeterToFeet) ⇒ `number`
    * [.convertFeetToMeter(value)](#vscp_dot_measurement_dot_convertFeetToMeter) ⇒ `number`
    * [.convertMeterToInch(value)](#vscp_dot_measurement_dot_convertMeterToInch) ⇒ `number`
    * [.convertInchToMeter(value)](#vscp_dot_measurement_dot_convertInchToMeter) ⇒ `number`

<a id="vscp_dot_measurement_dot_Decoder"></a>

#### measurement.Decoder
**Kind**: static class of [`measurement`](#vscp.measurement)  

* [.Decoder](#vscp_dot_measurement_dot_Decoder)
    * [new vscp.measurement.Decoder(options)](#new_vscp_dot_measurement_dot_Decoder_new)
    * [.client](#vscp_dot_measurement_dot_Decoder_plus_client) : [`Client`](#vscp.ws.Client)
    * [.onValue](#vscp_dot_measurement_dot_Decoder_plus_onValue) : `function`
    * [.filter](#vscp_dot_measurement_dot_Decoder_plus_filter) : `object`

<a id="new_vscp_dot_measurement_dot_Decoder_new"></a>

##### new vscp.measurement.Decoder(options)
Measurement decoder


| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.onValue | `function` | Function which will be called for every received measurement value. |
| options.filter | `object` | Filter |
| options.filter.vscpGuid | `string` | Node GUID string |
| options.filter.vscpClass | `number` | VSCP class |
| options.filter.vscpType | `number` | VSCP type |
| options.filter.sensorIndex | `number` | Sensor index |
| options.filter.zone | `number` | Zone |
| options.filter.subZone | `number` | Sub-zone |

<a id="vscp_dot_measurement_dot_Decoder_plus_client"></a>

##### decoder.client : [`Client`](#vscp.ws.Client)
VSCP websocket client

**Kind**: instance property of [`Decoder`](#vscp.measurement.Decoder)  
<a id="vscp_dot_measurement_dot_Decoder_plus_onValue"></a>

##### decoder.onValue : `function`
Callback which will be called for every received value.

**Kind**: instance property of [`Decoder`](#vscp.measurement.Decoder)  
<a id="vscp_dot_measurement_dot_Decoder_plus_filter"></a>

##### decoder.filter : `object`
Filter

**Kind**: instance property of [`Decoder`](#vscp.measurement.Decoder)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| vscpGuid | `string` | Node GUID string |
| vscpClass | `number` | VSCP class |
| vscpType | `number` | VSCP type |
| datetime | `date` | datetime |
| sensorIndex | `number` | Sensor index |
| zone | `number` | Zone |
| subZone | `number` | Sub-zone |

<a id="vscp_dot_measurement_dot_constants"></a>

#### measurement.constants : `object`
Measurement specific constants

**Kind**: static namespace of [`measurement`](#vscp.measurement)  
<a id="vscp_dot_measurement_dot_constants_dot_units"></a>

##### constants.units : `Array.&lt;string&gt;`
VSCP units

**Kind**: static property of [`constants`](#vscp.measurement.constants)  
<a id="vscp_dot_measurement_dot_timeout"></a>

#### measurement.timeout : `number`
VSCP response timeout in ms

**Kind**: static constant of [`measurement`](#vscp.measurement)  
<a id="vscp_dot_measurement_dot_toFixed"></a>

#### measurement.toFixed(value, precision) ⇒ `number`
Round value to a fixed precision.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Rounded value  

| Param | Type | Description |
| --- | --- | --- |
| value | `number` | Value |
| precision | `number` | Precision |

<a id="vscp_dot_measurement_dot_varInteger2Float"></a>

#### measurement.varInteger2Float(data) ⇒ `number`
Convert a integer value to float

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Float value  

| Param | Type | Description |
| --- | --- | --- |
| data | `Array.&lt;number&gt;` | Byte array |

<a id="vscp_dot_measurement_dot_getDataCoding"></a>

#### measurement.getDataCoding(data) ⇒ `number`
Get data coding.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Coding  

| Param | Type | Description |
| --- | --- | --- |
| data | `number` | Data |

<a id="vscp_dot_measurement_dot_getUnitFromDataCoding"></a>

#### measurement.getUnitFromDataCoding(data) ⇒ `number`
Get unit from data coding.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Unit  

| Param | Type | Description |
| --- | --- | --- |
| data | `number` | Data coding |

<a id="vscp_dot_measurement_dot_getSensorIndexFromDataCoding"></a>

#### measurement.getSensorIndexFromDataCoding(data) ⇒ `number`
Get sensor index from data coding.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Sensor index  

| Param | Type | Description |
| --- | --- | --- |
| data | `number` | Data coding |

<a id="vscp_dot_measurement_dot_decodeClass10"></a>

#### measurement.decodeClass10(data) ⇒ `number`
Decode a class 10 measurement.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Value as float  

| Param | Type | Description |
| --- | --- | --- |
| data | `Array.&lt;number&gt;` | Data (event data array where first data byte is the data coding) |

<a id="vscp_dot_measurement_dot_decodeClass60Number"></a>

#### measurement.decodeClass60Number(data) ⇒ `number`
Decode a class 60 measurement.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Value as float  

| Param | Type | Description |
| --- | --- | --- |
| data | `number` | Data |

<a id="vscp_dot_measurement_dot_decodeClass65Number"></a>

#### measurement.decodeClass65Number(data) ⇒ `number`
Decode a class 65 measurement.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Value as float  

| Param | Type | Description |
| --- | --- | --- |
| data | `number` | Data |

<a id="vscp_dot_measurement_dot_convertFahrenheitToKelvin"></a>

#### measurement.convertFahrenheitToKelvin(value) ⇒ `number`
Convert from unit fahrenheit to unit kelvin.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Converted value  

| Param | Type | Description |
| --- | --- | --- |
| value | `string` \| `number` | Value |

<a id="vscp_dot_measurement_dot_convertFahrenheitToCelsius"></a>

#### measurement.convertFahrenheitToCelsius(value) ⇒ `number`
Convert from unit fahrenheit to unit celsius.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Converted value  

| Param | Type | Description |
| --- | --- | --- |
| value | `string` \| `number` | Value |

<a id="vscp_dot_measurement_dot_convertCelsiusToFahrenheit"></a>

#### measurement.convertCelsiusToFahrenheit(value) ⇒ `number`
Convert from unit celsius to unit fahrenheit.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Converted value  

| Param | Type | Description |
| --- | --- | --- |
| value | `string` \| `number` | Value |

<a id="vscp_dot_measurement_dot_convertKelvinToCelsius"></a>

#### measurement.convertKelvinToCelsius(value) ⇒ `number`
Convert from unit kelvin to unit celsius.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Converted value  

| Param | Type | Description |
| --- | --- | --- |
| value | `string` \| `number` | Value |

<a id="vscp_dot_measurement_dot_convertCelsiusToKelvin"></a>

#### measurement.convertCelsiusToKelvin(value) ⇒ `number`
Convert from unit celsius to unit kelvin.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Converted value  

| Param | Type | Description |
| --- | --- | --- |
| value | `string` \| `number` | Value |

<a id="vscp_dot_measurement_dot_convertKelvinToFahrenheit"></a>

#### measurement.convertKelvinToFahrenheit(value) ⇒ `number`
Convert from unit kelvin to unit fahrenheit.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Converted value  

| Param | Type | Description |
| --- | --- | --- |
| value | `string` \| `number` | Value |

<a id="vscp_dot_measurement_dot_convertMeterToFeet"></a>

#### measurement.convertMeterToFeet(value) ⇒ `number`
Convert from unit meter to unit feet.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Converted value  

| Param | Type | Description |
| --- | --- | --- |
| value | `string` \| `number` | Value |

<a id="vscp_dot_measurement_dot_convertFeetToMeter"></a>

#### measurement.convertFeetToMeter(value) ⇒ `number`
Convert from unit feet to unit meter.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Converted value  

| Param | Type | Description |
| --- | --- | --- |
| value | `string` \| `number` | Value |

<a id="vscp_dot_measurement_dot_convertMeterToInch"></a>

#### measurement.convertMeterToInch(value) ⇒ `number`
Convert from unit meter to unit inch.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Converted value  

| Param | Type | Description |
| --- | --- | --- |
| value | `string` \| `number` | Value |

<a id="vscp_dot_measurement_dot_convertInchToMeter"></a>

#### measurement.convertInchToMeter(value) ⇒ `number`
Convert from unit inch to unit meter.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Converted value  

| Param | Type | Description |
| --- | --- | --- |
| value | `string` \| `number` | Value |

<a id="vscp_dot_register"></a>

### vscp.register : `object`
VSCP register access functions

**Kind**: static namespace of [`vscp`](#vscp)  

* [.register](#vscp_dot_register) : `object`
    * [.constants](#vscp_dot_register_dot_constants) : `enum`
    * [.timeout](#vscp_dot_register_dot_timeout) : `number`
    * [.read(options)](#vscp_dot_register_dot_read)
    * [.write(options)](#vscp_dot_register_dot_write)
    * [.writeBits(options)](#vscp_dot_register_dot_writeBits)
    * [.readAlarmStatus(options)](#vscp_dot_register_dot_readAlarmStatus)
    * [.readVscpVersion(options)](#vscp_dot_register_dot_readVscpVersion)
    * [.readNodeControlFlags(options)](#vscp_dot_register_dot_readNodeControlFlags)
    * [.readUserId(options)](#vscp_dot_register_dot_readUserId)
    * [.readManufacturerDevId(options)](#vscp_dot_register_dot_readManufacturerDevId)
    * [.readManufacturerSubDevId(options)](#vscp_dot_register_dot_readManufacturerSubDevId)
    * [.readNicknameId(options)](#vscp_dot_register_dot_readNicknameId)
    * [.readSelectedPage(options)](#vscp_dot_register_dot_readSelectedPage)
    * [.readFirmwareVersion(options)](#vscp_dot_register_dot_readFirmwareVersion)
    * [.readBootloaderAlgorithm(options)](#vscp_dot_register_dot_readBootloaderAlgorithm)
    * [.readUsedPages(options)](#vscp_dot_register_dot_readUsedPages)
    * [.readStdDevFamCode(options)](#vscp_dot_register_dot_readStdDevFamCode)
    * [.readStdDevType(options)](#vscp_dot_register_dot_readStdDevType)
    * [.readGUID(options)](#vscp_dot_register_dot_readGUID)
    * [.readMdfUrl(options)](#vscp_dot_register_dot_readMdfUrl)

<a id="vscp_dot_register_dot_constants"></a>

#### register.constants : `enum`
VSCP registers

**Kind**: static enum of [`register`](#vscp.register)  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| ALARM_STATUS | `number` | <code>128</code> | 
| VSCP_VERSION_MAJOR | `number` | <code>129</code> | 
| VSCP_VERSION_MINOR | `number` | <code>130</code> | 
| NODE_CONTROL_FLAGS | `number` | <code>131</code> | 
| USER_ID_0 | `number` | <code>132</code> | 
| USER_ID_1 | `number` | <code>133</code> | 
| USER_ID_2 | `number` | <code>134</code> | 
| USER_ID_3 | `number` | <code>135</code> | 
| USER_ID_4 | `number` | <code>136</code> | 
| MANUFACTURER_DEV_ID_0 | `number` | <code>137</code> | 
| MANUFACTURER_DEV_ID_1 | `number` | <code>138</code> | 
| MANUFACTURER_DEV_ID_2 | `number` | <code>139</code> | 
| MANUFACTURER_DEV_ID_3 | `number` | <code>140</code> | 
| MANUFACTURER_SUB_DEV_ID_0 | `number` | <code>141</code> | 
| MANUFACTURER_SUB_DEV_ID_1 | `number` | <code>142</code> | 
| MANUFACTURER_SUB_DEV_ID_2 | `number` | <code>143</code> | 
| MANUFACTURER_SUB_DEV_ID_3 | `number` | <code>144</code> | 
| NICKNAME_ID | `number` | <code>145</code> | 
| PAGE_SELECT_MSB | `number` | <code>146</code> | 
| PAGE_SELECT_LSB | `number` | <code>147</code> | 
| FIRMWARE_VERSION_MAJOR | `number` | <code>148</code> | 
| FIRMWARE_VERSION_MINOR | `number` | <code>149</code> | 
| FIRMWARE_VERSION_SUB_MINOR | `number` | <code>150</code> | 
| BOOT_LOADER_ALGORITHM | `number` | <code>151</code> | 
| BUFFER_SIZE | `number` | <code>152</code> | 
| PAGES_USED | `number` | <code>153</code> | 
| STD_DEV_FAMILY_CODE_3 | `number` | <code>154</code> | 
| STD_DEV_FAMILY_CODE_2 | `number` | <code>155</code> | 
| STD_DEV_FAMILY_CODE_1 | `number` | <code>156</code> | 
| STD_DEV_FAMILY_CODE_0 | `number` | <code>157</code> | 
| STD_DEV_TYPE_3 | `number` | <code>158</code> | 
| STD_DEV_TYPE_2 | `number` | <code>159</code> | 
| STD_DEV_TYPE_1 | `number` | <code>160</code> | 
| STD_DEV_TYPE_0 | `number` | <code>161</code> | 
| RESTORE_STD_CFG | `number` | <code>162</code> | 
| GUID | `number` | <code>208</code> | 
| MDF_URL | `number` | <code>224</code> | 

<a id="vscp_dot_register_dot_timeout"></a>

#### register.timeout : `number`
VSCP response timeout in ms

**Kind**: static constant of [`register`](#vscp.register)  
<a id="vscp_dot_register_dot_read"></a>

#### register.read(options)
Read one or more register values.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| [options.page] | `number` | Register page |
| options.offset | `number` | Register page offset |
| options.count | `number` | Number of registers to read |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_write"></a>

#### register.write(options)
Write one or more register values.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.page | `number` | Register page |
| options.offset | `number` | Register page offset |
| options.data | `Array.&lt;number&gt;` | Data array |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_writeBits"></a>

#### register.writeBits(options)
Change some bits of a register.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP connection |
| options.nodeId | `number` | Node id |
| options.page | `number` | Register page |
| options.offset | `number` | Register page offset |
| options.pos | `number` | Bit position |
| options.width | `number` | Bit width |
| options.data | `Array.&lt;number&gt;` | Data array |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_readAlarmStatus"></a>

#### register.readAlarmStatus(options)
Read the alarm status from a node.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_readVscpVersion"></a>

#### register.readVscpVersion(options)
Read the supported VSCP version from a node.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_readNodeControlFlags"></a>

#### register.readNodeControlFlags(options)
Read the node control flags from a node.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_readUserId"></a>

#### register.readUserId(options)
Read the user id from a node.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_readManufacturerDevId"></a>

#### register.readManufacturerDevId(options)
Read the manufacturer device id from a node.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_readManufacturerSubDevId"></a>

#### register.readManufacturerSubDevId(options)
Read the manufacturer sub device id from a node.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_readNicknameId"></a>

#### register.readNicknameId(options)
Read the nickname id from a node.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_readSelectedPage"></a>

#### register.readSelectedPage(options)
Read the current selected page from a node.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_readFirmwareVersion"></a>

#### register.readFirmwareVersion(options)
Read the firmware version from a node.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_readBootloaderAlgorithm"></a>

#### register.readBootloaderAlgorithm(options)
Read the bootloader algorithm from a node.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_readUsedPages"></a>

#### register.readUsedPages(options)
Read the number of used pages from a node.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_readStdDevFamCode"></a>

#### register.readStdDevFamCode(options)
Read the standard device family code from a node.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_readStdDevType"></a>

#### register.readStdDevType(options)
Read the standard device type from a node.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_readGUID"></a>

#### register.readGUID(options)
Read the GUID from a node.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_readMdfUrl"></a>

#### register.readMdfUrl(options)
Read the MDF URL from a node.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_rest"></a>

### vscp.rest : `object`
VSCP REST api functions

**Kind**: static namespace of [`vscp`](#vscp)  

* [.rest](#vscp_dot_rest) : `object`
    * [.Client](#vscp_dot_rest_dot_Client)
        * [new vscp.rest.Client(config)](#new_vscp_dot_rest_dot_Client_new)
        * [.baseUrl](#vscp_dot_rest_dot_Client_plus_baseUrl) : `string`
        * [.pathPrefix](#vscp_dot_rest_dot_Client_plus_pathPrefix) : `string`
        * [.apiVersion](#vscp_dot_rest_dot_Client_plus_apiVersion) : `string`
        * [.sessionKey](#vscp_dot_rest_dot_Client_plus_sessionKey) : `string`
        * [.openSession(options)](#vscp_dot_rest_dot_Client_plus_openSession) ⇒ `object`
        * [.closeSession([options])](#vscp_dot_rest_dot_Client_plus_closeSession) ⇒ `object`
        * [.getStatus([options])](#vscp_dot_rest_dot_Client_plus_getStatus) ⇒ `object`
        * [.sendEvent(options)](#vscp_dot_rest_dot_Client_plus_sendEvent) ⇒ `object`
        * [.readEvent([options])](#vscp_dot_rest_dot_Client_plus_readEvent) ⇒ `object`
        * [.setFilter(options)](#vscp_dot_rest_dot_Client_plus_setFilter) ⇒ `object`
        * [.clearQueue([options])](#vscp_dot_rest_dot_Client_plus_clearQueue) ⇒ `object`
        * [.createVar(options)](#vscp_dot_rest_dot_Client_plus_createVar) ⇒ `object`
        * [.readVar(options)](#vscp_dot_rest_dot_Client_plus_readVar) ⇒ `object`
        * [.writeVar(options)](#vscp_dot_rest_dot_Client_plus_writeVar) ⇒ `object`
        * [.removeVar(options)](#vscp_dot_rest_dot_Client_plus_removeVar) ⇒ `object`
        * [.listVar(options)](#vscp_dot_rest_dot_Client_plus_listVar) ⇒ `object`

<a id="vscp_dot_rest_dot_Client"></a>

#### rest.Client
**Kind**: static class of [`rest`](#vscp.rest)  

* [.Client](#vscp_dot_rest_dot_Client)
    * [new vscp.rest.Client(config)](#new_vscp_dot_rest_dot_Client_new)
    * [.baseUrl](#vscp_dot_rest_dot_Client_plus_baseUrl) : `string`
    * [.pathPrefix](#vscp_dot_rest_dot_Client_plus_pathPrefix) : `string`
    * [.apiVersion](#vscp_dot_rest_dot_Client_plus_apiVersion) : `string`
    * [.sessionKey](#vscp_dot_rest_dot_Client_plus_sessionKey) : `string`
    * [.openSession(options)](#vscp_dot_rest_dot_Client_plus_openSession) ⇒ `object`
    * [.closeSession([options])](#vscp_dot_rest_dot_Client_plus_closeSession) ⇒ `object`
    * [.getStatus([options])](#vscp_dot_rest_dot_Client_plus_getStatus) ⇒ `object`
    * [.sendEvent(options)](#vscp_dot_rest_dot_Client_plus_sendEvent) ⇒ `object`
    * [.readEvent([options])](#vscp_dot_rest_dot_Client_plus_readEvent) ⇒ `object`
    * [.setFilter(options)](#vscp_dot_rest_dot_Client_plus_setFilter) ⇒ `object`
    * [.clearQueue([options])](#vscp_dot_rest_dot_Client_plus_clearQueue) ⇒ `object`
    * [.createVar(options)](#vscp_dot_rest_dot_Client_plus_createVar) ⇒ `object`
    * [.readVar(options)](#vscp_dot_rest_dot_Client_plus_readVar) ⇒ `object`
    * [.writeVar(options)](#vscp_dot_rest_dot_Client_plus_writeVar) ⇒ `object`
    * [.removeVar(options)](#vscp_dot_rest_dot_Client_plus_removeVar) ⇒ `object`
    * [.listVar(options)](#vscp_dot_rest_dot_Client_plus_listVar) ⇒ `object`

<a id="new_vscp_dot_rest_dot_Client_new"></a>

##### new vscp.rest.Client(config)
The VSCP client class handles the basic REST api of the VSCP daemon.
The function interface uses jquery ajax call in the background and will
return a Promise.


| Param | Type | Description |
| --- | --- | --- |
| config | `string` | Configuration |
| [config.baseUrl] | `string` | VSCP daemon URL (protocol + hostname + port) |
| [options.pathPrefix] | `string` | Path prefix (default: '/vscp'), which comes right after the base url. |
| [options.apiVersion] | `string` | API version (for future use) |

<a id="vscp_dot_rest_dot_Client_plus_baseUrl"></a>

##### client.baseUrl : `string`
Base URL

**Kind**: instance property of [`Client`](#vscp.rest.Client)  
<a id="vscp_dot_rest_dot_Client_plus_pathPrefix"></a>

##### client.pathPrefix : `string`
Path prefix

**Kind**: instance property of [`Client`](#vscp.rest.Client)  
<a id="vscp_dot_rest_dot_Client_plus_apiVersion"></a>

##### client.apiVersion : `string`
REST API version (future use)

**Kind**: instance property of [`Client`](#vscp.rest.Client)  
<a id="vscp_dot_rest_dot_Client_plus_sessionKey"></a>

##### client.sessionKey : `string`
Session key

**Kind**: instance property of [`Client`](#vscp.rest.Client)  
<a id="vscp_dot_rest_dot_Client_plus_openSession"></a>

##### client.openSession(options) ⇒ `object`
Open a session.

**Kind**: instance method of [`Client`](#vscp.rest.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.user | `string` | User name |
| options.password | `string` | Password |
| [options.onSuccess] | `function` | Callback, which is called for successful request. |
| [options.onError] | `function` | Callback, which is called for failed request. |

<a id="vscp_dot_rest_dot_Client_plus_closeSession"></a>

##### client.closeSession([options]) ⇒ `object`
Close a session.

**Kind**: instance method of [`Client`](#vscp.rest.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| [options] | `object` | Options |
| [options.onSuccess] | `function` | Callback, which is called for successful request. |
| [options.onError] | `function` | Callback, which is called for failed request. |

<a id="vscp_dot_rest_dot_Client_plus_getStatus"></a>

##### client.getStatus([options]) ⇒ `object`
Get status and how many events are in the queue.

**Kind**: instance method of [`Client`](#vscp.rest.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| [options] | `object` | Options |
| [options.onSuccess] | `function` | Callback, which is called for successful request. |
| [options.onError] | `function` | Callback, which is called for failed request. |

<a id="vscp_dot_rest_dot_Client_plus_sendEvent"></a>

##### client.sendEvent(options) ⇒ `object`
Send a VSCP event.

**Kind**: instance method of [`Client`](#vscp.rest.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.event | `object` | VSCP event |
| [options.onSuccess] | `function` | Callback, which is called for successful request. |
| [options.onError] | `function` | Callback, which is called for failed request. |

<a id="vscp_dot_rest_dot_Client_plus_readEvent"></a>

##### client.readEvent([options]) ⇒ `object`
Read one or more VSCP events.

**Kind**: instance method of [`Client`](#vscp.rest.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| [options] | `object` | Options |
| [options.count] | `object` | Number of events to read |
| [options.onSuccess] | `function` | Callback, which is called for successful request. |
| [options.onError] | `function` | Callback, which is called for failed request. |

<a id="vscp_dot_rest_dot_Client_plus_setFilter"></a>

##### client.setFilter(options) ⇒ `object`
Set filter.

**Kind**: instance method of [`Client`](#vscp.rest.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| [options.filterPriority] | `number` | Priority filter |
| [options.filterClass] | `number` | Class filter |
| [options.filterType] | `number` | Type filter |
| [options.filterGuid] | `Array.&lt;number&gt;` \| `string` | GUID filter |
| [options.maskPriority] | `number` | Priority mask |
| [options.maskClass] | `number` | Class mask |
| [options.maskType] | `number` | Type mask |
| [options.maskGuid] | `Array.&lt;number&gt;` \| `string` | GUID mask |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_rest_dot_Client_plus_clearQueue"></a>

##### client.clearQueue([options]) ⇒ `object`
Clear the VSCP event queue on the server side.

**Kind**: instance method of [`Client`](#vscp.rest.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| [options] | `object` | Options |
| [options.onSuccess] | `function` | Callback, which is called for successful request. |
| [options.onError] | `function` | Callback, which is called for failed request. |

<a id="vscp_dot_rest_dot_Client_plus_createVar"></a>

##### client.createVar(options) ⇒ `object`
Create a a VSCP remote variable.

**Kind**: instance method of [`Client`](#vscp.rest.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.name | `string` | Variable name |
| [options.type] | `number` | Variable type (default: string) |
| [options.accessrights] | `number` | Variable value (default: 744) |
| options.persistency | `boolean` | Variable is persistent (true) or not (false) |
| options.value | `string` | Variable Value |
| [options.note] | `string` | Variable note (optional) |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_rest_dot_Client_plus_readVar"></a>

##### client.readVar(options) ⇒ `object`
Read a value from a VSCP server variable.

**Kind**: instance method of [`Client`](#vscp.rest.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.name | `string` | Variable name |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_rest_dot_Client_plus_writeVar"></a>

##### client.writeVar(options) ⇒ `object`
Write a value to a VSCP server variable.

**Kind**: instance method of [`Client`](#vscp.rest.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.name | `string` | Variable name |
| options.value | `string` | Variable value |
| options.type | `number` | Variable type |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_rest_dot_Client_plus_removeVar"></a>

##### client.removeVar(options) ⇒ `object`
Remove a VSCP server variable.

**Kind**: instance method of [`Client`](#vscp.rest.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.name | `string` | Variable name |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_rest_dot_Client_plus_listVar"></a>

##### client.listVar(options) ⇒ `object`
List all VSCP server variables.

**Kind**: instance method of [`Client`](#vscp.rest.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.listLong | `boolean` | When false the variable list dos not include value and note. If set to true value and note is included. |
| [options.regex] | `string` | Regular expression to filter variables |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_service"></a>

### vscp.service : `object`
VSCP service supporting functions

**Kind**: static namespace of [`vscp`](#vscp)  

* [.service](#vscp_dot_service) : `object`
    * [.Container](#vscp_dot_service_dot_Container)
        * [new vscp.service.Container(options)](#new_vscp_dot_service_dot_Container_new)
        * [.client](#vscp_dot_service_dot_Container_plus_client) : [`Client`](#vscp.ws.Client)
        * [.name](#vscp_dot_service_dot_Container_plus_name) : `string`
        * [.data](#vscp_dot_service_dot_Container_plus_data) : `Array.&lt;object&gt;`
        * [.separator](#vscp_dot_service_dot_Container_plus_separator) : `Array.&lt;object&gt;`
        * [.create(options)](#vscp_dot_service_dot_Container_plus_create)
        * [.write(options)](#vscp_dot_service_dot_Container_plus_write)
        * [.read(options)](#vscp_dot_service_dot_Container_plus_read)
    * [.timeout](#vscp_dot_service_dot_timeout) : `number`
    * [.whoIsThere(options)](#vscp_dot_service_dot_whoIsThere)
    * [.scan(options)](#vscp_dot_service_dot_scan)

<a id="vscp_dot_service_dot_Container"></a>

#### service.Container
**Kind**: static class of [`service`](#vscp.service)  

* [.Container](#vscp_dot_service_dot_Container)
    * [new vscp.service.Container(options)](#new_vscp_dot_service_dot_Container_new)
    * [.client](#vscp_dot_service_dot_Container_plus_client) : [`Client`](#vscp.ws.Client)
    * [.name](#vscp_dot_service_dot_Container_plus_name) : `string`
    * [.data](#vscp_dot_service_dot_Container_plus_data) : `Array.&lt;object&gt;`
    * [.separator](#vscp_dot_service_dot_Container_plus_separator) : `Array.&lt;object&gt;`
    * [.create(options)](#vscp_dot_service_dot_Container_plus_create)
    * [.write(options)](#vscp_dot_service_dot_Container_plus_write)
    * [.read(options)](#vscp_dot_service_dot_Container_plus_read)

<a id="new_vscp_dot_service_dot_Container_new"></a>

##### new vscp.service.Container(options)
The container is used to store javascript objects in a daemon variable as string.
It supports one or more objects in a single variable!


| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.name | `string` | Container name |

<a id="vscp_dot_service_dot_Container_plus_client"></a>

##### container.client : [`Client`](#vscp.ws.Client)
VSCP websocket client

**Kind**: instance property of [`Container`](#vscp.service.Container)  
<a id="vscp_dot_service_dot_Container_plus_name"></a>

##### container.name : `string`
Complete container name (prefix + user defined name)

**Kind**: instance property of [`Container`](#vscp.service.Container)  
<a id="vscp_dot_service_dot_Container_plus_data"></a>

##### container.data : `Array.&lt;object&gt;`
Data container itself

**Kind**: instance property of [`Container`](#vscp.service.Container)  
<a id="vscp_dot_service_dot_Container_plus_separator"></a>

##### container.separator : `Array.&lt;object&gt;`
Data element separator

**Kind**: instance property of [`Container`](#vscp.service.Container)  
<a id="vscp_dot_service_dot_Container_plus_create"></a>

##### container.create(options)
Create a container at the daemon.

**Kind**: instance method of [`Container`](#vscp.service.Container)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_service_dot_Container_plus_write"></a>

##### container.write(options)
Write the container to a daemon variable.
The container must exist at the daemon!

**Kind**: instance method of [`Container`](#vscp.service.Container)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_service_dot_Container_plus_read"></a>

##### container.read(options)
Read the container from the daemon variable.

**Kind**: instance method of [`Container`](#vscp.service.Container)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_service_dot_timeout"></a>

#### service.timeout : `number`
VSCP response timeout in ms

**Kind**: static constant of [`service`](#vscp.service)  
<a id="vscp_dot_service_dot_whoIsThere"></a>

#### service.whoIsThere(options)
Request a response from all nodes on the communication bus and returns
their GUID and MDF URL.

**Kind**: static method of [`service`](#vscp.service)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_service_dot_scan"></a>

#### service.scan(options)
Scan for nodes.

**Kind**: static method of [`service`](#vscp.service)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.begin | `number` | Node id where to start scanning |
| options.end | `number` | Node id where to stop scanning |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_widget"></a>

### vscp.widget : `object`
VSCP widgets

**Kind**: static namespace of [`vscp`](#vscp)  

* [.widget](#vscp_dot_widget) : `object`
    * [.Button](#vscp_dot_widget_dot_Button)
        * [new vscp.widget.Button(options)](#new_vscp_dot_widget_dot_Button_new)
        * [.draw()](#vscp_dot_widget_dot_Button_plus_draw)
        * [.setEnabled(value)](#vscp_dot_widget_dot_Button_plus_setEnabled)
    * [.Thermometer](#vscp_dot_widget_dot_Thermometer)
        * [new vscp.widget.Thermometer(options)](#new_vscp_dot_widget_dot_Thermometer_new)
        * [.draw()](#vscp_dot_widget_dot_Thermometer_plus_draw)
        * [.setEnabled(value)](#vscp_dot_widget_dot_Thermometer_plus_setEnabled)
    * [.generateUUID()](#vscp_dot_widget_dot_generateUUID) ⇒ `string`
    * [.Image(options)](#vscp_dot_widget_dot_Image)

<a id="vscp_dot_widget_dot_Button"></a>

#### widget.Button
**Kind**: static class of [`widget`](#vscp.widget)  

* [.Button](#vscp_dot_widget_dot_Button)
    * [new vscp.widget.Button(options)](#new_vscp_dot_widget_dot_Button_new)
    * [.draw()](#vscp_dot_widget_dot_Button_plus_draw)
    * [.setEnabled(value)](#vscp_dot_widget_dot_Button_plus_setEnabled)

<a id="new_vscp_dot_widget_dot_Button_new"></a>

##### new vscp.widget.Button(options)
A button widget.


| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.canvasName | `string` | Name of the canvas, normally the canvas id |
| options.offImageUrl | `number` | URL to button which is in off state |
| options.onImageUrl | `number` | URL to button which is in on state |
| options.x | `number` | x position of the image in the canvas |
| options.y | `number` | y position of the image in the canvas |
| [options.scale] | `number` | Scale factor applied to the button image (default: 1.0) |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client, used for event communication |
| [options.bindToRemoteState] | `boolean` | Bind the button state to the remote state or not (default: false) |
| [options.receiveZone] | `number` | Zone where state events will come from (default: 255) |
| [options.receiveSubZone] | `number` | Sub-zone where state events will come from (default: 255) |
| [options.transmitZone] | `number` | Zone where button event will be sent to (default: 255) |
| [options.transmitSubZone] | `number` | Sub-zone where button event will be sent to (default: 255) |
| [options.index] | `number` | Button index (instance number)  (default: 0) |
| [options.enable] | `boolean` | Enable or disable button  (default: false) |

<a id="vscp_dot_widget_dot_Button_plus_draw"></a>

##### button.draw()
Draw the button depended on its current state.

**Kind**: instance method of [`Button`](#vscp.widget.Button)  
<a id="vscp_dot_widget_dot_Button_plus_setEnabled"></a>

##### button.setEnabled(value)
Enable or disable the button.

**Kind**: instance method of [`Button`](#vscp.widget.Button)  

| Param | Type | Description |
| --- | --- | --- |
| value | `boolean` | Enable (true) or disable (false) it |

<a id="vscp_dot_widget_dot_Thermometer"></a>

#### widget.Thermometer
**Kind**: static class of [`widget`](#vscp.widget)  

* [.Thermometer](#vscp_dot_widget_dot_Thermometer)
    * [new vscp.widget.Thermometer(options)](#new_vscp_dot_widget_dot_Thermometer_new)
    * [.draw()](#vscp_dot_widget_dot_Thermometer_plus_draw)
    * [.setEnabled(value)](#vscp_dot_widget_dot_Thermometer_plus_setEnabled)

<a id="new_vscp_dot_widget_dot_Thermometer_new"></a>

##### new vscp.widget.Thermometer(options)
A thermometer widget.


| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.canvasName | `string` | Name of the canvas, normally the canvas id |
| options.imageUrl | `number` | URL to thermometer image |
| options.x | `number` | x position of the image in the canvas |
| options.y | `number` | y position of the image in the canvas |
| options.data | `object` | Thermometer data |
| options.data.maxT | `number` | Max. temperature in degree celsius |
| options.data.minT | `number` | Min. temperature in degree celsius |
| options.data.x | `number` | x position of the lower left begin of the thermometer column in image |
| options.data.y | `number` | y position of the lower left begin of the thermometer column in image |
| options.data.height | `number` | Thermometer column height (only between numbers) |
| options.data.width | `number` | Thermometer column width |
| options.data.yOffset | `number` | Thermometer column height offset from the begin to the first number |
| options.data.color | `string` | HTML color, e.g. '#8A0000' |
| [options.scale] | `number` | Scale factor applied to the thermometer image (default: 1.0) |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client, used for event communication |
| [options.receiveZone] | `number` | Zone where state events will come from (default: 255) |
| [options.receiveSubZone] | `number` | Sub-zone where state events will come from (default: 255) |
| [options.sensorIndex] | `number` | Sensor index (default: 0) |
| [options.vscpClass] | `number` | VSCP measurement class (default: CLASS1.MEASUREMENT) |
| [options.vscpType] | `number` | VSCP measurement type (default: CLASS1.MEASUREMENT.TERMPERATURE) |
| [options.enable] | `boolean` | Enable or disable thermometer (default: true) |

<a id="vscp_dot_widget_dot_Thermometer_plus_draw"></a>

##### thermometer.draw()
Draw the thermometer depended on its current state.

**Kind**: instance method of [`Thermometer`](#vscp.widget.Thermometer)  
<a id="vscp_dot_widget_dot_Thermometer_plus_setEnabled"></a>

##### thermometer.setEnabled(value)
Enable or disable the thermometer.

**Kind**: instance method of [`Thermometer`](#vscp.widget.Thermometer)  

| Param | Type | Description |
| --- | --- | --- |
| value | `boolean` | Enable (true) or disable (false) it |

<a id="vscp_dot_widget_dot_generateUUID"></a>

#### widget.generateUUID() ⇒ `string`
Generate a UUID.

**Kind**: static method of [`widget`](#vscp.widget)  
**Returns**: `string` - UUID  
<a id="vscp_dot_widget_dot_Image"></a>

#### widget.Image(options)
Add a image to the canvas.

**Kind**: static method of [`widget`](#vscp.widget)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.canvasName | `string` | Name of the canvas, normally the canvas id |
| options.url | `string` | Path to the image |
| options.x | `number` | x position of the image in the canvas |
| options.y | `number` | y position of the image in the canvas |

<a id="vscp_dot_wizard"></a>

### vscp.wizard : `object`
VSCP wizard functionality based on a MDF

**Kind**: static namespace of [`vscp`](#vscp)  

* [.wizard](#vscp_dot_wizard) : `object`
    * [.MessageBox](#vscp_dot_wizard_dot_MessageBox)
        * [new vscp.wizard.MessageBox(options)](#new_vscp_dot_wizard_dot_MessageBox_new)
        * [.func](#vscp_dot_wizard_dot_MessageBox_plus_func) : `string`
        * [.head](#vscp_dot_wizard_dot_MessageBox_plus_head) : `string`
        * [.description](#vscp_dot_wizard_dot_MessageBox_plus_description) : `string`
        * [.variableType](#vscp_dot_wizard_dot_MessageBox_plus_variableType) : `string`
        * [.variableName](#vscp_dot_wizard_dot_MessageBox_plus_variableName) : `string`
        * [.variableValue](#vscp_dot_wizard_dot_MessageBox_plus_variableValue) : `string`
        * [.parse($messageBox)](#vscp_dot_wizard_dot_MessageBox_plus_parse)
    * [.WriteBitInReg](#vscp_dot_wizard_dot_WriteBitInReg)
        * [new vscp.wizard.WriteBitInReg(options)](#new_vscp_dot_wizard_dot_WriteBitInReg_new)
        * [.pos](#vscp_dot_wizard_dot_WriteBitInReg_plus_pos) : `number`
        * [.page](#vscp_dot_wizard_dot_WriteBitInReg_plus_page) : `number`
        * [.offset](#vscp_dot_wizard_dot_WriteBitInReg_plus_offset) : `number`
        * [.width](#vscp_dot_wizard_dot_WriteBitInReg_plus_width) : `number`
        * [.value](#vscp_dot_wizard_dot_WriteBitInReg_plus_value) : `number`
        * [.variableName](#vscp_dot_wizard_dot_WriteBitInReg_plus_variableName) : `string`
        * [.parse(writeBitInReg)](#vscp_dot_wizard_dot_WriteBitInReg_plus_parse)
    * [.WriteBitInAbstraction](#vscp_dot_wizard_dot_WriteBitInAbstraction)
        * [new vscp.wizard.WriteBitInAbstraction(options)](#new_vscp_dot_wizard_dot_WriteBitInAbstraction_new)
        * [.id](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_id) : `string`
        * [.pos](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_pos) : `number`
        * [.width](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_width) : `number`
        * [.value](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_value) : `number`
        * [.variableName](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_variableName) : `string`
        * [.parse($writeBitInAbstraction)](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_parse)
    * [.WriteRegister](#vscp_dot_wizard_dot_WriteRegister)
        * [new vscp.wizard.WriteRegister(options)](#new_vscp_dot_wizard_dot_WriteRegister_new)
        * [.page](#vscp_dot_wizard_dot_WriteRegister_plus_page) : `number`
        * [.offset](#vscp_dot_wizard_dot_WriteRegister_plus_offset) : `number`
        * [.value](#vscp_dot_wizard_dot_WriteRegister_plus_value) : `number`
        * [.variableName](#vscp_dot_wizard_dot_WriteRegister_plus_variableName) : `string`
        * [.parse($writeRegister)](#vscp_dot_wizard_dot_WriteRegister_plus_parse)
    * [.WriteAbstraction](#vscp_dot_wizard_dot_WriteAbstraction)
        * [new vscp.wizard.WriteAbstraction(options)](#new_vscp_dot_wizard_dot_WriteAbstraction_new)
        * [.id](#vscp_dot_wizard_dot_WriteAbstraction_plus_id) : `string`
        * [.value](#vscp_dot_wizard_dot_WriteAbstraction_plus_value) : `number`
        * [.variableName](#vscp_dot_wizard_dot_WriteAbstraction_plus_variableName) : `number`
        * [.parse($writeAbstraction)](#vscp_dot_wizard_dot_WriteAbstraction_plus_parse)
    * [.Recipe](#vscp_dot_wizard_dot_Recipe)
        * [new vscp.wizard.Recipe(options)](#new_vscp_dot_wizard_dot_Recipe_new)
        * [.name](#vscp_dot_wizard_dot_Recipe_plus_name) : `string`
        * [.description](#vscp_dot_wizard_dot_Recipe_plus_description) : `string`
        * [.writeBitInRegs](#vscp_dot_wizard_dot_Recipe_plus_writeBitInRegs) : [`Array.&lt;WriteBitInReg&gt;`](#vscp.wizard.WriteBitInReg)
        * [.writeBitInAbstractions](#vscp_dot_wizard_dot_Recipe_plus_writeBitInAbstractions) : `Array.&lt;vscp.wizard.WriteBitAbstractions&gt;`
        * [.writeRegisters](#vscp_dot_wizard_dot_Recipe_plus_writeRegisters) : [`Array.&lt;WriteRegister&gt;`](#vscp.wizard.WriteRegister)
        * [.writeAbstractions](#vscp_dot_wizard_dot_Recipe_plus_writeAbstractions) : [`Array.&lt;WriteAbstraction&gt;`](#vscp.wizard.WriteAbstraction)
        * [.messageBoxes](#vscp_dot_wizard_dot_Recipe_plus_messageBoxes) : [`Array.&lt;MessageBox&gt;`](#vscp.wizard.MessageBox)
        * [.mdf](#vscp_dot_wizard_dot_Recipe_plus_mdf) : `object`
        * [.parse($recipe)](#vscp_dot_wizard_dot_Recipe_plus_parse)
        * [.write(options)](#vscp_dot_wizard_dot_Recipe_plus_write)
    * [.getRecipes(options)](#vscp_dot_wizard_dot_getRecipes) ⇒ [`Array.&lt;Recipe&gt;`](#vscp.wizard.Recipe)

<a id="vscp_dot_wizard_dot_MessageBox"></a>

#### wizard.MessageBox
**Kind**: static class of [`wizard`](#vscp.wizard)  

* [.MessageBox](#vscp_dot_wizard_dot_MessageBox)
    * [new vscp.wizard.MessageBox(options)](#new_vscp_dot_wizard_dot_MessageBox_new)
    * [.func](#vscp_dot_wizard_dot_MessageBox_plus_func) : `string`
    * [.head](#vscp_dot_wizard_dot_MessageBox_plus_head) : `string`
    * [.description](#vscp_dot_wizard_dot_MessageBox_plus_description) : `string`
    * [.variableType](#vscp_dot_wizard_dot_MessageBox_plus_variableType) : `string`
    * [.variableName](#vscp_dot_wizard_dot_MessageBox_plus_variableName) : `string`
    * [.variableValue](#vscp_dot_wizard_dot_MessageBox_plus_variableValue) : `string`
    * [.parse($messageBox)](#vscp_dot_wizard_dot_MessageBox_plus_parse)

<a id="new_vscp_dot_wizard_dot_MessageBox_new"></a>

##### new vscp.wizard.MessageBox(options)
A message box.


| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.messageBox | `object` | Messagebox as jquery xml object |

<a id="vscp_dot_wizard_dot_MessageBox_plus_func"></a>

##### messageBox.func : `string`
Function input or output

**Kind**: instance property of [`MessageBox`](#vscp.wizard.MessageBox)  
<a id="vscp_dot_wizard_dot_MessageBox_plus_head"></a>

##### messageBox.head : `string`
Head

**Kind**: instance property of [`MessageBox`](#vscp.wizard.MessageBox)  
<a id="vscp_dot_wizard_dot_MessageBox_plus_description"></a>

##### messageBox.description : `string`
Description

**Kind**: instance property of [`MessageBox`](#vscp.wizard.MessageBox)  
<a id="vscp_dot_wizard_dot_MessageBox_plus_variableType"></a>

##### messageBox.variableType : `string`
Variable type

**Kind**: instance property of [`MessageBox`](#vscp.wizard.MessageBox)  
<a id="vscp_dot_wizard_dot_MessageBox_plus_variableName"></a>

##### messageBox.variableName : `string`
Variable name

**Kind**: instance property of [`MessageBox`](#vscp.wizard.MessageBox)  
<a id="vscp_dot_wizard_dot_MessageBox_plus_variableValue"></a>

##### messageBox.variableValue : `string`
Variable value

**Kind**: instance property of [`MessageBox`](#vscp.wizard.MessageBox)  
<a id="vscp_dot_wizard_dot_MessageBox_plus_parse"></a>

##### messageBox.parse($messageBox)
Parse a messagebox object.

**Kind**: instance method of [`MessageBox`](#vscp.wizard.MessageBox)  

| Param | Type | Description |
| --- | --- | --- |
| $messageBox | `object` | Messagebox as jquery xml object |

<a id="vscp_dot_wizard_dot_WriteBitInReg"></a>

#### wizard.WriteBitInReg
**Kind**: static class of [`wizard`](#vscp.wizard)  

* [.WriteBitInReg](#vscp_dot_wizard_dot_WriteBitInReg)
    * [new vscp.wizard.WriteBitInReg(options)](#new_vscp_dot_wizard_dot_WriteBitInReg_new)
    * [.pos](#vscp_dot_wizard_dot_WriteBitInReg_plus_pos) : `number`
    * [.page](#vscp_dot_wizard_dot_WriteBitInReg_plus_page) : `number`
    * [.offset](#vscp_dot_wizard_dot_WriteBitInReg_plus_offset) : `number`
    * [.width](#vscp_dot_wizard_dot_WriteBitInReg_plus_width) : `number`
    * [.value](#vscp_dot_wizard_dot_WriteBitInReg_plus_value) : `number`
    * [.variableName](#vscp_dot_wizard_dot_WriteBitInReg_plus_variableName) : `string`
    * [.parse(writeBitInReg)](#vscp_dot_wizard_dot_WriteBitInReg_plus_parse)

<a id="new_vscp_dot_wizard_dot_WriteBitInReg_new"></a>

##### new vscp.wizard.WriteBitInReg(options)
Bit in register access method.


| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.writeBitInReg | `object` | write-bit-in-reg as jquery xml object |

<a id="vscp_dot_wizard_dot_WriteBitInReg_plus_pos"></a>

##### writeBitInReg.pos : `number`
Bit position

**Kind**: instance property of [`WriteBitInReg`](#vscp.wizard.WriteBitInReg)  
<a id="vscp_dot_wizard_dot_WriteBitInReg_plus_page"></a>

##### writeBitInReg.page : `number`
Register page

**Kind**: instance property of [`WriteBitInReg`](#vscp.wizard.WriteBitInReg)  
<a id="vscp_dot_wizard_dot_WriteBitInReg_plus_offset"></a>

##### writeBitInReg.offset : `number`
Register offset

**Kind**: instance property of [`WriteBitInReg`](#vscp.wizard.WriteBitInReg)  
<a id="vscp_dot_wizard_dot_WriteBitInReg_plus_width"></a>

##### writeBitInReg.width : `number`
Bit width

**Kind**: instance property of [`WriteBitInReg`](#vscp.wizard.WriteBitInReg)  
<a id="vscp_dot_wizard_dot_WriteBitInReg_plus_value"></a>

##### writeBitInReg.value : `number`
Value of bit width

**Kind**: instance property of [`WriteBitInReg`](#vscp.wizard.WriteBitInReg)  
<a id="vscp_dot_wizard_dot_WriteBitInReg_plus_variableName"></a>

##### writeBitInReg.variableName : `string`
Variable name

**Kind**: instance property of [`WriteBitInReg`](#vscp.wizard.WriteBitInReg)  
<a id="vscp_dot_wizard_dot_WriteBitInReg_plus_parse"></a>

##### writeBitInReg.parse(writeBitInReg)
Parse a bit in register access method object.

**Kind**: instance method of [`WriteBitInReg`](#vscp.wizard.WriteBitInReg)  

| Param | Type | Description |
| --- | --- | --- |
| writeBitInReg | `object` | write-bit-in-reg as jquery xml object |

<a id="vscp_dot_wizard_dot_WriteBitInAbstraction"></a>

#### wizard.WriteBitInAbstraction
**Kind**: static class of [`wizard`](#vscp.wizard)  

* [.WriteBitInAbstraction](#vscp_dot_wizard_dot_WriteBitInAbstraction)
    * [new vscp.wizard.WriteBitInAbstraction(options)](#new_vscp_dot_wizard_dot_WriteBitInAbstraction_new)
    * [.id](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_id) : `string`
    * [.pos](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_pos) : `number`
    * [.width](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_width) : `number`
    * [.value](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_value) : `number`
    * [.variableName](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_variableName) : `string`
    * [.parse($writeBitInAbstraction)](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_parse)

<a id="new_vscp_dot_wizard_dot_WriteBitInAbstraction_new"></a>

##### new vscp.wizard.WriteBitInAbstraction(options)
Bit in abstraction access method.


| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.writeBitInAbstraction | `object` | write-bit-in-abstraction as jquery xml object |

<a id="vscp_dot_wizard_dot_WriteBitInAbstraction_plus_id"></a>

##### writeBitInAbstraction.id : `string`
Abstract value id

**Kind**: instance property of [`WriteBitInAbstraction`](#vscp.wizard.WriteBitInAbstraction)  
<a id="vscp_dot_wizard_dot_WriteBitInAbstraction_plus_pos"></a>

##### writeBitInAbstraction.pos : `number`
Bit position

**Kind**: instance property of [`WriteBitInAbstraction`](#vscp.wizard.WriteBitInAbstraction)  
<a id="vscp_dot_wizard_dot_WriteBitInAbstraction_plus_width"></a>

##### writeBitInAbstraction.width : `number`
Bit width

**Kind**: instance property of [`WriteBitInAbstraction`](#vscp.wizard.WriteBitInAbstraction)  
<a id="vscp_dot_wizard_dot_WriteBitInAbstraction_plus_value"></a>

##### writeBitInAbstraction.value : `number`
Value of bit width

**Kind**: instance property of [`WriteBitInAbstraction`](#vscp.wizard.WriteBitInAbstraction)  
<a id="vscp_dot_wizard_dot_WriteBitInAbstraction_plus_variableName"></a>

##### writeBitInAbstraction.variableName : `string`
Variable name

**Kind**: instance property of [`WriteBitInAbstraction`](#vscp.wizard.WriteBitInAbstraction)  
<a id="vscp_dot_wizard_dot_WriteBitInAbstraction_plus_parse"></a>

##### writeBitInAbstraction.parse($writeBitInAbstraction)
Parse a bit in abstraction access method object.

**Kind**: instance method of [`WriteBitInAbstraction`](#vscp.wizard.WriteBitInAbstraction)  

| Param | Type | Description |
| --- | --- | --- |
| $writeBitInAbstraction | `object` | write-bit-in-abstraction as jquery xml object |

<a id="vscp_dot_wizard_dot_WriteRegister"></a>

#### wizard.WriteRegister
**Kind**: static class of [`wizard`](#vscp.wizard)  

* [.WriteRegister](#vscp_dot_wizard_dot_WriteRegister)
    * [new vscp.wizard.WriteRegister(options)](#new_vscp_dot_wizard_dot_WriteRegister_new)
    * [.page](#vscp_dot_wizard_dot_WriteRegister_plus_page) : `number`
    * [.offset](#vscp_dot_wizard_dot_WriteRegister_plus_offset) : `number`
    * [.value](#vscp_dot_wizard_dot_WriteRegister_plus_value) : `number`
    * [.variableName](#vscp_dot_wizard_dot_WriteRegister_plus_variableName) : `string`
    * [.parse($writeRegister)](#vscp_dot_wizard_dot_WriteRegister_plus_parse)

<a id="new_vscp_dot_wizard_dot_WriteRegister_new"></a>

##### new vscp.wizard.WriteRegister(options)
Register access method.


| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.writeRegister | `object` | write-register as jquery xml object |

<a id="vscp_dot_wizard_dot_WriteRegister_plus_page"></a>

##### writeRegister.page : `number`
Register page

**Kind**: instance property of [`WriteRegister`](#vscp.wizard.WriteRegister)  
<a id="vscp_dot_wizard_dot_WriteRegister_plus_offset"></a>

##### writeRegister.offset : `number`
Register offset

**Kind**: instance property of [`WriteRegister`](#vscp.wizard.WriteRegister)  
<a id="vscp_dot_wizard_dot_WriteRegister_plus_value"></a>

##### writeRegister.value : `number`
Register value

**Kind**: instance property of [`WriteRegister`](#vscp.wizard.WriteRegister)  
<a id="vscp_dot_wizard_dot_WriteRegister_plus_variableName"></a>

##### writeRegister.variableName : `string`
Variable name

**Kind**: instance property of [`WriteRegister`](#vscp.wizard.WriteRegister)  
<a id="vscp_dot_wizard_dot_WriteRegister_plus_parse"></a>

##### writeRegister.parse($writeRegister)
Parse a register access method object.

**Kind**: instance method of [`WriteRegister`](#vscp.wizard.WriteRegister)  

| Param | Type | Description |
| --- | --- | --- |
| $writeRegister | `object` | write-register as jquery xml object |

<a id="vscp_dot_wizard_dot_WriteAbstraction"></a>

#### wizard.WriteAbstraction
**Kind**: static class of [`wizard`](#vscp.wizard)  

* [.WriteAbstraction](#vscp_dot_wizard_dot_WriteAbstraction)
    * [new vscp.wizard.WriteAbstraction(options)](#new_vscp_dot_wizard_dot_WriteAbstraction_new)
    * [.id](#vscp_dot_wizard_dot_WriteAbstraction_plus_id) : `string`
    * [.value](#vscp_dot_wizard_dot_WriteAbstraction_plus_value) : `number`
    * [.variableName](#vscp_dot_wizard_dot_WriteAbstraction_plus_variableName) : `number`
    * [.parse($writeAbstraction)](#vscp_dot_wizard_dot_WriteAbstraction_plus_parse)

<a id="new_vscp_dot_wizard_dot_WriteAbstraction_new"></a>

##### new vscp.wizard.WriteAbstraction(options)
Abstraction access method.


| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.writeAbstraction | `object` | write-abstraction as jquery xml object |

<a id="vscp_dot_wizard_dot_WriteAbstraction_plus_id"></a>

##### writeAbstraction.id : `string`
Abstract value id

**Kind**: instance property of [`WriteAbstraction`](#vscp.wizard.WriteAbstraction)  
<a id="vscp_dot_wizard_dot_WriteAbstraction_plus_value"></a>

##### writeAbstraction.value : `number`
Abstract value

**Kind**: instance property of [`WriteAbstraction`](#vscp.wizard.WriteAbstraction)  
<a id="vscp_dot_wizard_dot_WriteAbstraction_plus_variableName"></a>

##### writeAbstraction.variableName : `number`
Variable name

**Kind**: instance property of [`WriteAbstraction`](#vscp.wizard.WriteAbstraction)  
<a id="vscp_dot_wizard_dot_WriteAbstraction_plus_parse"></a>

##### writeAbstraction.parse($writeAbstraction)
Parse a abstraction access method object.

**Kind**: instance method of [`WriteAbstraction`](#vscp.wizard.WriteAbstraction)  

| Param | Type | Description |
| --- | --- | --- |
| $writeAbstraction | `object` | write-abstraction as jquery xml object |

<a id="vscp_dot_wizard_dot_Recipe"></a>

#### wizard.Recipe
**Kind**: static class of [`wizard`](#vscp.wizard)  

* [.Recipe](#vscp_dot_wizard_dot_Recipe)
    * [new vscp.wizard.Recipe(options)](#new_vscp_dot_wizard_dot_Recipe_new)
    * [.name](#vscp_dot_wizard_dot_Recipe_plus_name) : `string`
    * [.description](#vscp_dot_wizard_dot_Recipe_plus_description) : `string`
    * [.writeBitInRegs](#vscp_dot_wizard_dot_Recipe_plus_writeBitInRegs) : [`Array.&lt;WriteBitInReg&gt;`](#vscp.wizard.WriteBitInReg)
    * [.writeBitInAbstractions](#vscp_dot_wizard_dot_Recipe_plus_writeBitInAbstractions) : `Array.&lt;vscp.wizard.WriteBitAbstractions&gt;`
    * [.writeRegisters](#vscp_dot_wizard_dot_Recipe_plus_writeRegisters) : [`Array.&lt;WriteRegister&gt;`](#vscp.wizard.WriteRegister)
    * [.writeAbstractions](#vscp_dot_wizard_dot_Recipe_plus_writeAbstractions) : [`Array.&lt;WriteAbstraction&gt;`](#vscp.wizard.WriteAbstraction)
    * [.messageBoxes](#vscp_dot_wizard_dot_Recipe_plus_messageBoxes) : [`Array.&lt;MessageBox&gt;`](#vscp.wizard.MessageBox)
    * [.mdf](#vscp_dot_wizard_dot_Recipe_plus_mdf) : `object`
    * [.parse($recipe)](#vscp_dot_wizard_dot_Recipe_plus_parse)
    * [.write(options)](#vscp_dot_wizard_dot_Recipe_plus_write)

<a id="new_vscp_dot_wizard_dot_Recipe_new"></a>

##### new vscp.wizard.Recipe(options)
A recipe.


| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.recipe | `object` | Recipe as jquery xml object |
| options.mdf | `object` | MDF as jquery xml object |

<a id="vscp_dot_wizard_dot_Recipe_plus_name"></a>

##### recipe.name : `string`
Recipe name

**Kind**: instance property of [`Recipe`](#vscp.wizard.Recipe)  
<a id="vscp_dot_wizard_dot_Recipe_plus_description"></a>

##### recipe.description : `string`
Recipe description

**Kind**: instance property of [`Recipe`](#vscp.wizard.Recipe)  
<a id="vscp_dot_wizard_dot_Recipe_plus_writeBitInRegs"></a>

##### recipe.writeBitInRegs : [`Array.&lt;WriteBitInReg&gt;`](#vscp.wizard.WriteBitInReg)
Bit access methods in registers

**Kind**: instance property of [`Recipe`](#vscp.wizard.Recipe)  
<a id="vscp_dot_wizard_dot_Recipe_plus_writeBitInAbstractions"></a>

##### recipe.writeBitInAbstractions : `Array.&lt;vscp.wizard.WriteBitAbstractions&gt;`
Bit access methods in abstract value

**Kind**: instance property of [`Recipe`](#vscp.wizard.Recipe)  
<a id="vscp_dot_wizard_dot_Recipe_plus_writeRegisters"></a>

##### recipe.writeRegisters : [`Array.&lt;WriteRegister&gt;`](#vscp.wizard.WriteRegister)
Register access methods

**Kind**: instance property of [`Recipe`](#vscp.wizard.Recipe)  
<a id="vscp_dot_wizard_dot_Recipe_plus_writeAbstractions"></a>

##### recipe.writeAbstractions : [`Array.&lt;WriteAbstraction&gt;`](#vscp.wizard.WriteAbstraction)
Abstract access methods

**Kind**: instance property of [`Recipe`](#vscp.wizard.Recipe)  
<a id="vscp_dot_wizard_dot_Recipe_plus_messageBoxes"></a>

##### recipe.messageBoxes : [`Array.&lt;MessageBox&gt;`](#vscp.wizard.MessageBox)
Messageboxes

**Kind**: instance property of [`Recipe`](#vscp.wizard.Recipe)  
<a id="vscp_dot_wizard_dot_Recipe_plus_mdf"></a>

##### recipe.mdf : `object`
MDF

**Kind**: instance property of [`Recipe`](#vscp.wizard.Recipe)  
<a id="vscp_dot_wizard_dot_Recipe_plus_parse"></a>

##### recipe.parse($recipe)
Parse a recipe object.

**Kind**: instance method of [`Recipe`](#vscp.wizard.Recipe)  

| Param | Type | Description |
| --- | --- | --- |
| $recipe | `object` | Recipe as jquery xml object |

<a id="vscp_dot_wizard_dot_Recipe_plus_write"></a>

##### recipe.write(options)
Write a recipe.

**Kind**: instance method of [`Recipe`](#vscp.wizard.Recipe)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |

<a id="vscp_dot_wizard_dot_getRecipes"></a>

#### wizard.getRecipes(options) ⇒ [`Array.&lt;Recipe&gt;`](#vscp.wizard.Recipe)
Get recipes from a MDF in JSON format.

**Kind**: static method of [`wizard`](#vscp.wizard)  
**Returns**: [`Array.&lt;Recipe&gt;`](#vscp.wizard.Recipe) - Recipe array  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.mdf | `object` | The mdf as jquery xml object |

<a id="vscp_dot_ws"></a>

### vscp.ws : `object`
VSCP websocket api functions

**Kind**: static namespace of [`vscp`](#vscp)  

* [.ws](#vscp_dot_ws) : `object`
    * [.Client](#vscp_dot_ws_dot_Client)
        * [new vscp.ws.Client()](#new_vscp_dot_ws_dot_Client_new)
        * [.socket](#vscp_dot_ws_dot_Client_plus_socket) : `object`
        * [.url](#vscp_dot_ws_dot_Client_plus_url) : `string`
        * [.userName](#vscp_dot_ws_dot_Client_plus_userName) : `string`
        * [.userId](#vscp_dot_ws_dot_Client_plus_userId) : `number`
        * [.userFullname](#vscp_dot_ws_dot_Client_plus_userFullname) : `string`
        * [.userRights](#vscp_dot_ws_dot_Client_plus_userRights) : `array`
        * [.userRemotes](#vscp_dot_ws_dot_Client_plus_userRemotes) : `array`
        * [.userEvents](#vscp_dot_ws_dot_Client_plus_userEvents) : `array`
        * [.userNote](#vscp_dot_ws_dot_Client_plus_userNote) : `string`
        * [.password](#vscp_dot_ws_dot_Client_plus_password) : `string`
        * [.vscpkey](#vscp_dot_ws_dot_Client_plus_vscpkey) : `string`
        * [.onConnError](#vscp_dot_ws_dot_Client_plus_onConnError) : `function`
        * [.onMessage](#vscp_dot_ws_dot_Client_plus_onMessage) : `function`
        * [.onEvent](#vscp_dot_ws_dot_Client_plus_onEvent) : `Array.&lt;function()&gt;`
        * [.onVariable](#vscp_dot_ws_dot_Client_plus_onVariable) : `function`
        * [.onTableRow](#vscp_dot_ws_dot_Client_plus_onTableRow) : `function`
        * [.state](#vscp_dot_ws_dot_Client_plus_state) : `number`
        * [.substate](#vscp_dot_ws_dot_Client_plus_substate) : `number`
        * [.states](#vscp_dot_ws_dot_Client_plus_states) : `enum`
        * [.substates](#vscp_dot_ws_dot_Client_plus_substates) : `enum`
        * [.addEventListener(eventListener)](#vscp_dot_ws_dot_Client_plus_addEventListener)
        * [.removeEventListener(eventListener)](#vscp_dot_ws_dot_Client_plus_removeEventListener)
        * [.getAuthHash(userName, password, str_iv)](#vscp_dot_ws_dot_Client_plus_getAuthHash) ⇒ `string`
        * [.onWebSocketOpen()](#vscp_dot_ws_dot_Client_plus_onWebSocketOpen)
        * [.onWebSocketClose()](#vscp_dot_ws_dot_Client_plus_onWebSocketClose)
        * [.onWebSocketMessage(msg)](#vscp_dot_ws_dot_Client_plus_onWebSocketMessage)
        * [.connect(options)](#vscp_dot_ws_dot_Client_plus_connect) ⇒ `object`
        * [.disconnect(options)](#vscp_dot_ws_dot_Client_plus_disconnect) ⇒ `object`
        * [.start(options)](#vscp_dot_ws_dot_Client_plus_start) ⇒ `object`
        * [.stop(options)](#vscp_dot_ws_dot_Client_plus_stop) ⇒ `object`
        * [.clearQueue(options)](#vscp_dot_ws_dot_Client_plus_clearQueue) ⇒ `object`
        * [.sendEvent(options)](#vscp_dot_ws_dot_Client_plus_sendEvent) ⇒ `object`
        * [.setFilter(options)](#vscp_dot_ws_dot_Client_plus_setFilter) ⇒ `object`
        * [.createVar(options)](#vscp_dot_ws_dot_Client_plus_createVar) ⇒ `object`
        * [.readVar(options)](#vscp_dot_ws_dot_Client_plus_readVar) ⇒ `object`
        * [.writeVar(options)](#vscp_dot_ws_dot_Client_plus_writeVar) ⇒ `object`
        * [.resetVar(options)](#vscp_dot_ws_dot_Client_plus_resetVar) ⇒ `object`
        * [.removeVar(options)](#vscp_dot_ws_dot_Client_plus_removeVar) ⇒ `object`
        * [.lengthVar(options)](#vscp_dot_ws_dot_Client_plus_lengthVar) ⇒ `object`
        * [.lastChangeVar(options)](#vscp_dot_ws_dot_Client_plus_lastChangeVar) ⇒ `object`
        * [.listVar(options)](#vscp_dot_ws_dot_Client_plus_listVar) ⇒ `object`
        * [.readTable(options)](#vscp_dot_ws_dot_Client_plus_readTable) ⇒ `object`

<a id="vscp_dot_ws_dot_Client"></a>

#### ws.Client
**Kind**: static class of [`ws`](#vscp.ws)  

* [.Client](#vscp_dot_ws_dot_Client)
    * [new vscp.ws.Client()](#new_vscp_dot_ws_dot_Client_new)
    * [.socket](#vscp_dot_ws_dot_Client_plus_socket) : `object`
    * [.url](#vscp_dot_ws_dot_Client_plus_url) : `string`
    * [.userName](#vscp_dot_ws_dot_Client_plus_userName) : `string`
    * [.userId](#vscp_dot_ws_dot_Client_plus_userId) : `number`
    * [.userFullname](#vscp_dot_ws_dot_Client_plus_userFullname) : `string`
    * [.userRights](#vscp_dot_ws_dot_Client_plus_userRights) : `array`
    * [.userRemotes](#vscp_dot_ws_dot_Client_plus_userRemotes) : `array`
    * [.userEvents](#vscp_dot_ws_dot_Client_plus_userEvents) : `array`
    * [.userNote](#vscp_dot_ws_dot_Client_plus_userNote) : `string`
    * [.password](#vscp_dot_ws_dot_Client_plus_password) : `string`
    * [.vscpkey](#vscp_dot_ws_dot_Client_plus_vscpkey) : `string`
    * [.onConnError](#vscp_dot_ws_dot_Client_plus_onConnError) : `function`
    * [.onMessage](#vscp_dot_ws_dot_Client_plus_onMessage) : `function`
    * [.onEvent](#vscp_dot_ws_dot_Client_plus_onEvent) : `Array.&lt;function()&gt;`
    * [.onVariable](#vscp_dot_ws_dot_Client_plus_onVariable) : `function`
    * [.onTableRow](#vscp_dot_ws_dot_Client_plus_onTableRow) : `function`
    * [.state](#vscp_dot_ws_dot_Client_plus_state) : `number`
    * [.substate](#vscp_dot_ws_dot_Client_plus_substate) : `number`
    * [.states](#vscp_dot_ws_dot_Client_plus_states) : `enum`
    * [.substates](#vscp_dot_ws_dot_Client_plus_substates) : `enum`
    * [.addEventListener(eventListener)](#vscp_dot_ws_dot_Client_plus_addEventListener)
    * [.removeEventListener(eventListener)](#vscp_dot_ws_dot_Client_plus_removeEventListener)
    * [.getAuthHash(userName, password, str_iv)](#vscp_dot_ws_dot_Client_plus_getAuthHash) ⇒ `string`
    * [.onWebSocketOpen()](#vscp_dot_ws_dot_Client_plus_onWebSocketOpen)
    * [.onWebSocketClose()](#vscp_dot_ws_dot_Client_plus_onWebSocketClose)
    * [.onWebSocketMessage(msg)](#vscp_dot_ws_dot_Client_plus_onWebSocketMessage)
    * [.connect(options)](#vscp_dot_ws_dot_Client_plus_connect) ⇒ `object`
    * [.disconnect(options)](#vscp_dot_ws_dot_Client_plus_disconnect) ⇒ `object`
    * [.start(options)](#vscp_dot_ws_dot_Client_plus_start) ⇒ `object`
    * [.stop(options)](#vscp_dot_ws_dot_Client_plus_stop) ⇒ `object`
    * [.clearQueue(options)](#vscp_dot_ws_dot_Client_plus_clearQueue) ⇒ `object`
    * [.sendEvent(options)](#vscp_dot_ws_dot_Client_plus_sendEvent) ⇒ `object`
    * [.setFilter(options)](#vscp_dot_ws_dot_Client_plus_setFilter) ⇒ `object`
    * [.createVar(options)](#vscp_dot_ws_dot_Client_plus_createVar) ⇒ `object`
    * [.readVar(options)](#vscp_dot_ws_dot_Client_plus_readVar) ⇒ `object`
    * [.writeVar(options)](#vscp_dot_ws_dot_Client_plus_writeVar) ⇒ `object`
    * [.resetVar(options)](#vscp_dot_ws_dot_Client_plus_resetVar) ⇒ `object`
    * [.removeVar(options)](#vscp_dot_ws_dot_Client_plus_removeVar) ⇒ `object`
    * [.lengthVar(options)](#vscp_dot_ws_dot_Client_plus_lengthVar) ⇒ `object`
    * [.lastChangeVar(options)](#vscp_dot_ws_dot_Client_plus_lastChangeVar) ⇒ `object`
    * [.listVar(options)](#vscp_dot_ws_dot_Client_plus_listVar) ⇒ `object`
    * [.readTable(options)](#vscp_dot_ws_dot_Client_plus_readTable) ⇒ `object`

<a id="new_vscp_dot_ws_dot_Client_new"></a>

##### new vscp.ws.Client()
VSCP websocket client, used for connection establishment to a VSCP server.

<a id="vscp_dot_ws_dot_Client_plus_socket"></a>

##### client.socket : `object`
Websocket

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_url"></a>

##### client.url : `string`
url used for connection establishment

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_userName"></a>

##### client.userName : `string`
User name used for connection establishment

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_userId"></a>

##### client.userId : `number`
User id from authentication AUTH1

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_userFullname"></a>

##### client.userFullname : `string`
User full name from authentication AUTH1

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_userRights"></a>

##### client.userRights : `array`
User rights from authentication AUTH1

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_userRemotes"></a>

##### client.userRemotes : `array`
User allowed remotes from authentication AUTH1

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_userEvents"></a>

##### client.userEvents : `array`
User allowed events from authentication AUTH1

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_userNote"></a>

##### client.userNote : `string`
User note from authentication AUTH1

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_password"></a>

##### client.password : `string`
Password used for connection establishment

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_vscpkey"></a>

##### client.vscpkey : `string`
Secret key used for connection establishment

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_onConnError"></a>

##### client.onConnError : `function`
Callback called on any connection error

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_onMessage"></a>

##### client.onMessage : `function`
Callback called on any received VSCP response message

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_onEvent"></a>

##### client.onEvent : `Array.&lt;function()&gt;`
Callbacks called on any received VSCP event message

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_onVariable"></a>

##### client.onVariable : `function`
Callback called on any received variable (see LSTVAR command)

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_onTableRow"></a>

##### client.onTableRow : `function`
Callback called on any received table row (see GT command)

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_state"></a>

##### client.state : `number`
VSCP websocket is not connected right now

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_substate"></a>

##### client.substate : `number`
VSCP event traffic is closed

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_states"></a>

##### client.states : `enum`
States of the VSCP websocket

**Kind**: instance enum of [`Client`](#vscp.ws.Client)  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| DISCONNECTED | `number` | <code>0</code> | Not connected |
| CONNECTED | `number` | <code>1</code> | Standard websocket connection established |
| AUTHENTICATED | `number` | <code>2</code> | Authentication with VSCP server successful |

<a id="vscp_dot_ws_dot_Client_plus_substates"></a>

##### client.substates : `enum`
Substates of the VSCP websocket

**Kind**: instance enum of [`Client`](#vscp.ws.Client)  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| CLOSED | `number` | <code>0</code> | No events sent from server |
| OPEN | `number` | <code>1</code> | Events sent from server |

<a id="vscp_dot_ws_dot_Client_plus_addEventListener"></a>

##### client.addEventListener(eventListener)
Add a event listener.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  

| Param | Type | Description |
| --- | --- | --- |
| eventListener | `function` | Event listener function |

<a id="vscp_dot_ws_dot_Client_plus_removeEventListener"></a>

##### client.removeEventListener(eventListener)
Remove a event listener.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  

| Param | Type | Description |
| --- | --- | --- |
| eventListener | `function` | Event listener function |

<a id="vscp_dot_ws_dot_Client_plus_getAuthHash"></a>

##### client.getAuthHash(userName, password, str_iv) ⇒ `string`
Calculates the VSCP server websocket authentication hash.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `string` - Authentication ("encrypted user:password")  

| Param | Type | Description |
| --- | --- | --- |
| userName | `string` | User name |
| password | `string` | Password |
| str_iv | `string` | 16 random byte iv in hex form |

<a id="vscp_dot_ws_dot_Client_plus_onWebSocketOpen"></a>

##### client.onWebSocketOpen()
This function is called by the websocket in case the connection is established.
It will initiate the authentication with the VSCP server.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_onWebSocketClose"></a>

##### client.onWebSocketClose()
This function is called by the websocket in case that the connection is closed.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_onWebSocketMessage"></a>

##### client.onWebSocketMessage(msg)
This function is called for any websocket message (VSCP server response message).

**Kind**: instance method of [`Client`](#vscp.ws.Client)  

| Param | Type | Description |
| --- | --- | --- |
| msg | `string` | VSCP server response message |

<a id="vscp_dot_ws_dot_Client_plus_connect"></a>

##### client.connect(options) ⇒ `object`
Connect to a VSCP server with the given URL.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.url | `string` | URL to the VSCP server, e.g. ws:// |
| options.userName | `string` | User name used for authentication |
| options.password | `string` | Password used for authentication |
| options.vscpkey | `string` | Secret key used for authentication |
| [options.onMessage] | `function` | Function which is called on any received VSCP response message. |
| [options.onSuccess] | `function` | Function which is called on a successful connection establishment. |
| [options.onError] | `function` | Function which is called on a failed connection establishment or in case the connection is lost during the session. |

<a id="vscp_dot_ws_dot_Client_plus_disconnect"></a>

##### client.disconnect(options) ⇒ `object`
Disconnect from a VSCP server.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| [options.onSuccess] | `function` | Function which is called on a successful disconnection. |

<a id="vscp_dot_ws_dot_Client_plus_start"></a>

##### client.start(options) ⇒ `object`
Start receiving events.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_ws_dot_Client_plus_stop"></a>

##### client.stop(options) ⇒ `object`
Stop receiving events.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_ws_dot_Client_plus_clearQueue"></a>

##### client.clearQueue(options) ⇒ `object`
Clear the VSCP event queue on the server side.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_ws_dot_Client_plus_sendEvent"></a>

##### client.sendEvent(options) ⇒ `object`
Send a VSCP event to the VSCP server.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.event | [`Event`](#vscp.Event) | VSCP event to send |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_ws_dot_Client_plus_setFilter"></a>

##### client.setFilter(options) ⇒ `object`
Set a filter in the VSCP server for VSCP events.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| [options.filterPriority] | `number` | Priority filter (default: 0) |
| [options.filterClass] | `number` | Class filter (default: 0) |
| [options.filterType] | `number` | Type filter (default: 0) |
| [options.filterGuid] | `Array.&lt;number&gt;` \| `string` | GUID filter (default: 0) |
| [options.maskPriority] | `number` | Priority mask (default: 0) |
| [options.maskClass] | `number` | Class mask (default: 0xffff) |
| [options.maskType] | `number` | Type mask (default: 0xffff) |
| [options.maskGuid] | `Array.&lt;number&gt;` \| `string` | GUID mask (default: 0) |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_ws_dot_Client_plus_createVar"></a>

##### client.createVar(options) ⇒ `object`
Create a a VSCP remote variable.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.name | `string` | Variable name |
| [options.type] | `number` | Variable type (default: string) |
| [options.accessrights] | `number` | Variable value (default: 744) |
| options.persistency | `boolean` | Variable is persistent (true) or not (false) |
| options.value | `string` | Variable Value |
| [options.note] | `string` | Variable note (optional) |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_ws_dot_Client_plus_readVar"></a>

##### client.readVar(options) ⇒ `object`
Read a value from a VSCP server variable.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.name | `string` | Variable name |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_ws_dot_Client_plus_writeVar"></a>

##### client.writeVar(options) ⇒ `object`
Write a value to a VSCP server variable.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.name | `string` | Variable name |
| options.value | `string` | Variable value |
| options.type | `number` | Variable type |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_ws_dot_Client_plus_resetVar"></a>

##### client.resetVar(options) ⇒ `object`
Reset a VSCP server variable.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.name | `string` | Variable name |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_ws_dot_Client_plus_removeVar"></a>

##### client.removeVar(options) ⇒ `object`
Remove a VSCP server variable.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.name | `string` | Variable name |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_ws_dot_Client_plus_lengthVar"></a>

##### client.lengthVar(options) ⇒ `object`
Get a VSCP server variable length.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.name | `string` | Variable name |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_ws_dot_Client_plus_lastChangeVar"></a>

##### client.lastChangeVar(options) ⇒ `object`
Get last change of a VSCP server variable.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.name | `string` | Variable name |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_ws_dot_Client_plus_listVar"></a>

##### client.listVar(options) ⇒ `object`
List all VSCP server variables.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| [options.regex] | `string` | Regular expression to filter variables |
| options.onVariable | `function` | Function which is called per variable |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_ws_dot_Client_plus_readTable"></a>

##### client.readTable(options) ⇒ `object`
Get data from a table.
If "begin" and "end" are omitted, the whole table is returned.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.name | `string` | Table name |
| options.begin | `string` | Date when to begin ( ISO form YY-MM-DD HH:MM:SS ) |
| options.end | `string` | Date when to end ( ISO form YY-MM-DD HH:MM:SS ) |
| options.onTableRow | `function` | Function which is called on every received table row |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_getVarTypeName"></a>

### vscp.getVarTypeName(n) ⇒ `string`
Get variable type name as string by numerical code.

**Kind**: static method of [`vscp`](#vscp)  
**Returns**: `string` - Variable type name  

| Param | Type | Description |
| --- | --- | --- |
| n | `number` | Numerical code |

<a id="vscp_dot_getVarTypeNumerical"></a>

### vscp.getVarTypeNumerical(str) ⇒ `number`
Get numerical code of variable type from string.

**Kind**: static method of [`vscp`](#vscp)  
**Returns**: `number` - Variable type numerical code  

| Param | Type | Description |
| --- | --- | --- |
| str | `string` | Variable type name |

<a id="vscp_dot_getEditorModeFromType"></a>

### vscp.getEditorModeFromType(n) ⇒ `string`
Get ace editor formation mode string from numerical variable type code.

**Kind**: static method of [`vscp`](#vscp)  
**Returns**: `string` - Ace editro formation mode string  

| Param | Type | Description |
| --- | --- | --- |
| n | `number` | Variable type numerical code |

<a id="vscp_dot_b64EncodeUnicode"></a>

### vscp.b64EncodeUnicode(str) ⇒ `string`
Encode base64 unicode safe.

**Kind**: static method of [`vscp`](#vscp)  
**Returns**: `string` - Base64  

| Param | Type | Description |
| --- | --- | --- |
| str | `string` | Unicode string |

<a id="vscp_dot_b64DecodeUnicode"></a>

### vscp.b64DecodeUnicode(str) ⇒ `string`
Decode base64 unicode safe.

**Kind**: static method of [`vscp`](#vscp)  
**Returns**: `string` - Unicode string  

| Param | Type | Description |
| --- | --- | --- |
| str | `string` | Base64 |

<a id="vscp_dot_isBase64Type"></a>

### vscp.isBase64Type(type) ⇒ `bool`
Determine whether the given variable type is a type stored base64 encoded or not.

**Kind**: static method of [`vscp`](#vscp)  
**Returns**: `bool` - Stored base64 encoded (true) or not (false).  

| Param | Type | Description |
| --- | --- | --- |
| type | `number` | Variable type numerical code |

<a id="vscp_dot_decodeValueIfBase64"></a>

### vscp.decodeValueIfBase64(type, value) ⇒ `string`
Decode the value if its base64 encoded.

**Kind**: static method of [`vscp`](#vscp)  
**Returns**: `string` - Decoded value if type is base64 encoded type otherwise original value.  

| Param | Type | Description |
| --- | --- | --- |
| type | `number` | Variable type numerical code |
| value | `string` | Value |

<a id="vscp_dot_encodeValueIfBase64"></a>

### vscp.encodeValueIfBase64(type, value) ⇒ `string`
Encode the value if its stored in base64.

**Kind**: static method of [`vscp`](#vscp)  
**Returns**: `string` - Encoded value if type is base64 encoded type otherwise original value.  

| Param | Type | Description |
| --- | --- | --- |
| type | `number` | Variable type numerical code |
| value | `string` | Value |

<a id="vscp"></a>

## vscp : `object`
Namespace for all functionality of the VSCP provided libraries.

**Kind**: global namespace  

* [vscp](#vscp) : `object`
    * [.Event](#vscp_dot_Event)
        * [new vscp.Event(options)](#new_vscp_dot_Event_new)
        * [.vscpHead](#vscp_dot_Event_plus_vscpHead) : `number`
        * [.vscpClass](#vscp_dot_Event_plus_vscpClass) : `number`
        * [.vscpType](#vscp_dot_Event_plus_vscpType) : `number`
        * [.vscpObId](#vscp_dot_Event_plus_vscpObId) : `number`
        * [.vscpTimeStamp](#vscp_dot_Event_plus_vscpTimeStamp) : `number`
        * [.vscpDateTime](#vscp_dot_Event_plus_vscpDateTime) : `date`
        * [.vscpGuid](#vscp_dot_Event_plus_vscpGuid) : `string`
        * [.vscpData](#vscp_dot_Event_plus_vscpData) : `Array.&lt;number&gt;` \| `string`
        * [.setIPV6Addr()](#vscp_dot_Event_plus_setIPV6Addr)
        * [.isIPV6Addr()](#vscp_dot_Event_plus_isIPV6Addr) ⇒ `boolean`
        * [.setDumbNode()](#vscp_dot_Event_plus_setDumbNode)
        * [.isDumbNode()](#vscp_dot_Event_plus_isDumbNode) ⇒ `boolean`
        * [.setPriority(priority)](#vscp_dot_Event_plus_setPriority)
        * [.getPriority()](#vscp_dot_Event_plus_getPriority) ⇒ `number`
        * [.setHardCodedAddr()](#vscp_dot_Event_plus_setHardCodedAddr)
        * [.isHardCodedAddr()](#vscp_dot_Event_plus_isHardCodedAddr) ⇒ `boolean`
        * [.setDoNotCalcCRC()](#vscp_dot_Event_plus_setDoNotCalcCRC)
        * [.isDoNotCalcCRC()](#vscp_dot_Event_plus_isDoNotCalcCRC) ⇒ `boolean`
        * [.getText()](#vscp_dot_Event_plus_getText) ⇒ `string`
    * [.version](#vscp_dot_version)
    * [.constants](#vscp_dot_constants) : `object`
        * [.classes](#vscp_dot_constants_dot_classes) : `enum`
        * [.types](#vscp_dot_constants_dot_types) : `enum`
        * [.priorities](#vscp_dot_constants_dot_priorities) : `enum`
        * [.varTypes](#vscp_dot_constants_dot_varTypes) : `enum`
        * [.varTypeNames](#vscp_dot_constants_dot_varTypeNames)
    * [.utility](#vscp_dot_utility) : `object`
        * [.readValue(input)](#vscp_dot_utility_dot_readValue) ⇒ `number`
        * [.getTime()](#vscp_dot_utility_dot_getTime) ⇒ `string`
        * [.guidToStr(guid)](#vscp_dot_utility_dot_guidToStr) ⇒ `string`
        * [.strToGuid(guid)](#vscp_dot_utility_dot_strToGuid) ⇒ `Array.&lt;number&gt;`
        * [.getNodeId(guid)](#vscp_dot_utility_dot_getNodeId) ⇒ `number`
    * [.mdf](#vscp_dot_mdf) : `object`
        * [.Register](#vscp_dot_mdf_dot_Register)
            * [new vscp.mdf.Register()](#new_vscp_dot_mdf_dot_Register_new)
            * [.name](#vscp_dot_mdf_dot_Register_plus_name) : `string`
            * [.description](#vscp_dot_mdf_dot_Register_plus_description) : `string`
            * [.readAccess](#vscp_dot_mdf_dot_Register_plus_readAccess) : `boolean`
            * [.writeAccess](#vscp_dot_mdf_dot_Register_plus_writeAccess) : `boolean`
            * [.page](#vscp_dot_mdf_dot_Register_plus_page) : `number`
            * [.offset](#vscp_dot_mdf_dot_Register_plus_offset) : `number`
            * [.value](#vscp_dot_mdf_dot_Register_plus_value) : `number`
            * [.dirty](#vscp_dot_mdf_dot_Register_plus_dirty) : `number`
            * [.userData](#vscp_dot_mdf_dot_Register_plus_userData) : `object`
            * [.setValue(value)](#vscp_dot_mdf_dot_Register_plus_setValue)
        * [.Abstraction](#vscp_dot_mdf_dot_Abstraction)
            * [new vscp.mdf.Abstraction()](#new_vscp_dot_mdf_dot_Abstraction_new)
            * [.name](#vscp_dot_mdf_dot_Abstraction_plus_name) : `string`
            * [.description](#vscp_dot_mdf_dot_Abstraction_plus_description) : `string`
            * [.readAccess](#vscp_dot_mdf_dot_Abstraction_plus_readAccess) : `boolean`
            * [.writeAccess](#vscp_dot_mdf_dot_Abstraction_plus_writeAccess) : `boolean`
            * [.id](#vscp_dot_mdf_dot_Abstraction_plus_id) : `string`
            * [.page](#vscp_dot_mdf_dot_Abstraction_plus_page) : `number`
            * [.offset](#vscp_dot_mdf_dot_Abstraction_plus_offset) : `number`
            * [.value](#vscp_dot_mdf_dot_Abstraction_plus_value) : `number`
            * [.type](#vscp_dot_mdf_dot_Abstraction_plus_type) : `string`
            * [.defValue](#vscp_dot_mdf_dot_Abstraction_plus_defValue) : `number`
            * [.dirty](#vscp_dot_mdf_dot_Abstraction_plus_dirty) : `number`
            * [.userData](#vscp_dot_mdf_dot_Abstraction_plus_userData) : `object`
            * [.setValue(value)](#vscp_dot_mdf_dot_Abstraction_plus_setValue)
        * [.constants](#vscp_dot_mdf_dot_constants) : `object`
            * [.TYPE_SIZES](#vscp_dot_mdf_dot_constants_dot_TYPE_SIZES) : `enum`
            * [.CONVERSION_FROM_DECIMAL](#vscp_dot_mdf_dot_constants_dot_CONVERSION_FROM_DECIMAL)
            * [.CONVERSION_TO_DECIMAL](#vscp_dot_mdf_dot_constants_dot_CONVERSION_TO_DECIMAL)
            * [.RANGE](#vscp_dot_mdf_dot_constants_dot_RANGE)
        * [.timeout](#vscp_dot_mdf_dot_timeout) : `number`
        * [.load(options)](#vscp_dot_mdf_dot_load)
        * [.loadLocal(options)](#vscp_dot_mdf_dot_loadLocal)
        * [.readAbstractValue(options)](#vscp_dot_mdf_dot_readAbstractValue)
        * [.writeAbstractValue(options)](#vscp_dot_mdf_dot_writeAbstractValue)
        * [.writeAbstractBits(options)](#vscp_dot_mdf_dot_writeAbstractBits)
        * [.getRegisters(options)](#vscp_dot_mdf_dot_getRegisters) ⇒ [`Array.&lt;Register&gt;`](#vscp.mdf.Register)
        * [.getAbstractions(options)](#vscp_dot_mdf_dot_getAbstractions) ⇒ [`Array.&lt;Abstraction&gt;`](#vscp.mdf.Abstraction)
    * [.measurement](#vscp_dot_measurement) : `object`
        * [.Decoder](#vscp_dot_measurement_dot_Decoder)
            * [new vscp.measurement.Decoder(options)](#new_vscp_dot_measurement_dot_Decoder_new)
            * [.client](#vscp_dot_measurement_dot_Decoder_plus_client) : [`Client`](#vscp.ws.Client)
            * [.onValue](#vscp_dot_measurement_dot_Decoder_plus_onValue) : `function`
            * [.filter](#vscp_dot_measurement_dot_Decoder_plus_filter) : `object`
        * [.constants](#vscp_dot_measurement_dot_constants) : `object`
            * [.units](#vscp_dot_measurement_dot_constants_dot_units) : `Array.&lt;string&gt;`
        * [.timeout](#vscp_dot_measurement_dot_timeout) : `number`
        * [.toFixed(value, precision)](#vscp_dot_measurement_dot_toFixed) ⇒ `number`
        * [.varInteger2Float(data)](#vscp_dot_measurement_dot_varInteger2Float) ⇒ `number`
        * [.getDataCoding(data)](#vscp_dot_measurement_dot_getDataCoding) ⇒ `number`
        * [.getUnitFromDataCoding(data)](#vscp_dot_measurement_dot_getUnitFromDataCoding) ⇒ `number`
        * [.getSensorIndexFromDataCoding(data)](#vscp_dot_measurement_dot_getSensorIndexFromDataCoding) ⇒ `number`
        * [.decodeClass10(data)](#vscp_dot_measurement_dot_decodeClass10) ⇒ `number`
        * [.decodeClass60Number(data)](#vscp_dot_measurement_dot_decodeClass60Number) ⇒ `number`
        * [.decodeClass65Number(data)](#vscp_dot_measurement_dot_decodeClass65Number) ⇒ `number`
        * [.convertFahrenheitToKelvin(value)](#vscp_dot_measurement_dot_convertFahrenheitToKelvin) ⇒ `number`
        * [.convertFahrenheitToCelsius(value)](#vscp_dot_measurement_dot_convertFahrenheitToCelsius) ⇒ `number`
        * [.convertCelsiusToFahrenheit(value)](#vscp_dot_measurement_dot_convertCelsiusToFahrenheit) ⇒ `number`
        * [.convertKelvinToCelsius(value)](#vscp_dot_measurement_dot_convertKelvinToCelsius) ⇒ `number`
        * [.convertCelsiusToKelvin(value)](#vscp_dot_measurement_dot_convertCelsiusToKelvin) ⇒ `number`
        * [.convertKelvinToFahrenheit(value)](#vscp_dot_measurement_dot_convertKelvinToFahrenheit) ⇒ `number`
        * [.convertMeterToFeet(value)](#vscp_dot_measurement_dot_convertMeterToFeet) ⇒ `number`
        * [.convertFeetToMeter(value)](#vscp_dot_measurement_dot_convertFeetToMeter) ⇒ `number`
        * [.convertMeterToInch(value)](#vscp_dot_measurement_dot_convertMeterToInch) ⇒ `number`
        * [.convertInchToMeter(value)](#vscp_dot_measurement_dot_convertInchToMeter) ⇒ `number`
    * [.register](#vscp_dot_register) : `object`
        * [.constants](#vscp_dot_register_dot_constants) : `enum`
        * [.timeout](#vscp_dot_register_dot_timeout) : `number`
        * [.read(options)](#vscp_dot_register_dot_read)
        * [.write(options)](#vscp_dot_register_dot_write)
        * [.writeBits(options)](#vscp_dot_register_dot_writeBits)
        * [.readAlarmStatus(options)](#vscp_dot_register_dot_readAlarmStatus)
        * [.readVscpVersion(options)](#vscp_dot_register_dot_readVscpVersion)
        * [.readNodeControlFlags(options)](#vscp_dot_register_dot_readNodeControlFlags)
        * [.readUserId(options)](#vscp_dot_register_dot_readUserId)
        * [.readManufacturerDevId(options)](#vscp_dot_register_dot_readManufacturerDevId)
        * [.readManufacturerSubDevId(options)](#vscp_dot_register_dot_readManufacturerSubDevId)
        * [.readNicknameId(options)](#vscp_dot_register_dot_readNicknameId)
        * [.readSelectedPage(options)](#vscp_dot_register_dot_readSelectedPage)
        * [.readFirmwareVersion(options)](#vscp_dot_register_dot_readFirmwareVersion)
        * [.readBootloaderAlgorithm(options)](#vscp_dot_register_dot_readBootloaderAlgorithm)
        * [.readUsedPages(options)](#vscp_dot_register_dot_readUsedPages)
        * [.readStdDevFamCode(options)](#vscp_dot_register_dot_readStdDevFamCode)
        * [.readStdDevType(options)](#vscp_dot_register_dot_readStdDevType)
        * [.readGUID(options)](#vscp_dot_register_dot_readGUID)
        * [.readMdfUrl(options)](#vscp_dot_register_dot_readMdfUrl)
    * [.rest](#vscp_dot_rest) : `object`
        * [.Client](#vscp_dot_rest_dot_Client)
            * [new vscp.rest.Client(config)](#new_vscp_dot_rest_dot_Client_new)
            * [.baseUrl](#vscp_dot_rest_dot_Client_plus_baseUrl) : `string`
            * [.pathPrefix](#vscp_dot_rest_dot_Client_plus_pathPrefix) : `string`
            * [.apiVersion](#vscp_dot_rest_dot_Client_plus_apiVersion) : `string`
            * [.sessionKey](#vscp_dot_rest_dot_Client_plus_sessionKey) : `string`
            * [.openSession(options)](#vscp_dot_rest_dot_Client_plus_openSession) ⇒ `object`
            * [.closeSession([options])](#vscp_dot_rest_dot_Client_plus_closeSession) ⇒ `object`
            * [.getStatus([options])](#vscp_dot_rest_dot_Client_plus_getStatus) ⇒ `object`
            * [.sendEvent(options)](#vscp_dot_rest_dot_Client_plus_sendEvent) ⇒ `object`
            * [.readEvent([options])](#vscp_dot_rest_dot_Client_plus_readEvent) ⇒ `object`
            * [.setFilter(options)](#vscp_dot_rest_dot_Client_plus_setFilter) ⇒ `object`
            * [.clearQueue([options])](#vscp_dot_rest_dot_Client_plus_clearQueue) ⇒ `object`
            * [.createVar(options)](#vscp_dot_rest_dot_Client_plus_createVar) ⇒ `object`
            * [.readVar(options)](#vscp_dot_rest_dot_Client_plus_readVar) ⇒ `object`
            * [.writeVar(options)](#vscp_dot_rest_dot_Client_plus_writeVar) ⇒ `object`
            * [.removeVar(options)](#vscp_dot_rest_dot_Client_plus_removeVar) ⇒ `object`
            * [.listVar(options)](#vscp_dot_rest_dot_Client_plus_listVar) ⇒ `object`
    * [.service](#vscp_dot_service) : `object`
        * [.Container](#vscp_dot_service_dot_Container)
            * [new vscp.service.Container(options)](#new_vscp_dot_service_dot_Container_new)
            * [.client](#vscp_dot_service_dot_Container_plus_client) : [`Client`](#vscp.ws.Client)
            * [.name](#vscp_dot_service_dot_Container_plus_name) : `string`
            * [.data](#vscp_dot_service_dot_Container_plus_data) : `Array.&lt;object&gt;`
            * [.separator](#vscp_dot_service_dot_Container_plus_separator) : `Array.&lt;object&gt;`
            * [.create(options)](#vscp_dot_service_dot_Container_plus_create)
            * [.write(options)](#vscp_dot_service_dot_Container_plus_write)
            * [.read(options)](#vscp_dot_service_dot_Container_plus_read)
        * [.timeout](#vscp_dot_service_dot_timeout) : `number`
        * [.whoIsThere(options)](#vscp_dot_service_dot_whoIsThere)
        * [.scan(options)](#vscp_dot_service_dot_scan)
    * [.widget](#vscp_dot_widget) : `object`
        * [.Button](#vscp_dot_widget_dot_Button)
            * [new vscp.widget.Button(options)](#new_vscp_dot_widget_dot_Button_new)
            * [.draw()](#vscp_dot_widget_dot_Button_plus_draw)
            * [.setEnabled(value)](#vscp_dot_widget_dot_Button_plus_setEnabled)
        * [.Thermometer](#vscp_dot_widget_dot_Thermometer)
            * [new vscp.widget.Thermometer(options)](#new_vscp_dot_widget_dot_Thermometer_new)
            * [.draw()](#vscp_dot_widget_dot_Thermometer_plus_draw)
            * [.setEnabled(value)](#vscp_dot_widget_dot_Thermometer_plus_setEnabled)
        * [.generateUUID()](#vscp_dot_widget_dot_generateUUID) ⇒ `string`
        * [.Image(options)](#vscp_dot_widget_dot_Image)
    * [.wizard](#vscp_dot_wizard) : `object`
        * [.MessageBox](#vscp_dot_wizard_dot_MessageBox)
            * [new vscp.wizard.MessageBox(options)](#new_vscp_dot_wizard_dot_MessageBox_new)
            * [.func](#vscp_dot_wizard_dot_MessageBox_plus_func) : `string`
            * [.head](#vscp_dot_wizard_dot_MessageBox_plus_head) : `string`
            * [.description](#vscp_dot_wizard_dot_MessageBox_plus_description) : `string`
            * [.variableType](#vscp_dot_wizard_dot_MessageBox_plus_variableType) : `string`
            * [.variableName](#vscp_dot_wizard_dot_MessageBox_plus_variableName) : `string`
            * [.variableValue](#vscp_dot_wizard_dot_MessageBox_plus_variableValue) : `string`
            * [.parse($messageBox)](#vscp_dot_wizard_dot_MessageBox_plus_parse)
        * [.WriteBitInReg](#vscp_dot_wizard_dot_WriteBitInReg)
            * [new vscp.wizard.WriteBitInReg(options)](#new_vscp_dot_wizard_dot_WriteBitInReg_new)
            * [.pos](#vscp_dot_wizard_dot_WriteBitInReg_plus_pos) : `number`
            * [.page](#vscp_dot_wizard_dot_WriteBitInReg_plus_page) : `number`
            * [.offset](#vscp_dot_wizard_dot_WriteBitInReg_plus_offset) : `number`
            * [.width](#vscp_dot_wizard_dot_WriteBitInReg_plus_width) : `number`
            * [.value](#vscp_dot_wizard_dot_WriteBitInReg_plus_value) : `number`
            * [.variableName](#vscp_dot_wizard_dot_WriteBitInReg_plus_variableName) : `string`
            * [.parse(writeBitInReg)](#vscp_dot_wizard_dot_WriteBitInReg_plus_parse)
        * [.WriteBitInAbstraction](#vscp_dot_wizard_dot_WriteBitInAbstraction)
            * [new vscp.wizard.WriteBitInAbstraction(options)](#new_vscp_dot_wizard_dot_WriteBitInAbstraction_new)
            * [.id](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_id) : `string`
            * [.pos](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_pos) : `number`
            * [.width](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_width) : `number`
            * [.value](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_value) : `number`
            * [.variableName](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_variableName) : `string`
            * [.parse($writeBitInAbstraction)](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_parse)
        * [.WriteRegister](#vscp_dot_wizard_dot_WriteRegister)
            * [new vscp.wizard.WriteRegister(options)](#new_vscp_dot_wizard_dot_WriteRegister_new)
            * [.page](#vscp_dot_wizard_dot_WriteRegister_plus_page) : `number`
            * [.offset](#vscp_dot_wizard_dot_WriteRegister_plus_offset) : `number`
            * [.value](#vscp_dot_wizard_dot_WriteRegister_plus_value) : `number`
            * [.variableName](#vscp_dot_wizard_dot_WriteRegister_plus_variableName) : `string`
            * [.parse($writeRegister)](#vscp_dot_wizard_dot_WriteRegister_plus_parse)
        * [.WriteAbstraction](#vscp_dot_wizard_dot_WriteAbstraction)
            * [new vscp.wizard.WriteAbstraction(options)](#new_vscp_dot_wizard_dot_WriteAbstraction_new)
            * [.id](#vscp_dot_wizard_dot_WriteAbstraction_plus_id) : `string`
            * [.value](#vscp_dot_wizard_dot_WriteAbstraction_plus_value) : `number`
            * [.variableName](#vscp_dot_wizard_dot_WriteAbstraction_plus_variableName) : `number`
            * [.parse($writeAbstraction)](#vscp_dot_wizard_dot_WriteAbstraction_plus_parse)
        * [.Recipe](#vscp_dot_wizard_dot_Recipe)
            * [new vscp.wizard.Recipe(options)](#new_vscp_dot_wizard_dot_Recipe_new)
            * [.name](#vscp_dot_wizard_dot_Recipe_plus_name) : `string`
            * [.description](#vscp_dot_wizard_dot_Recipe_plus_description) : `string`
            * [.writeBitInRegs](#vscp_dot_wizard_dot_Recipe_plus_writeBitInRegs) : [`Array.&lt;WriteBitInReg&gt;`](#vscp.wizard.WriteBitInReg)
            * [.writeBitInAbstractions](#vscp_dot_wizard_dot_Recipe_plus_writeBitInAbstractions) : `Array.&lt;vscp.wizard.WriteBitAbstractions&gt;`
            * [.writeRegisters](#vscp_dot_wizard_dot_Recipe_plus_writeRegisters) : [`Array.&lt;WriteRegister&gt;`](#vscp.wizard.WriteRegister)
            * [.writeAbstractions](#vscp_dot_wizard_dot_Recipe_plus_writeAbstractions) : [`Array.&lt;WriteAbstraction&gt;`](#vscp.wizard.WriteAbstraction)
            * [.messageBoxes](#vscp_dot_wizard_dot_Recipe_plus_messageBoxes) : [`Array.&lt;MessageBox&gt;`](#vscp.wizard.MessageBox)
            * [.mdf](#vscp_dot_wizard_dot_Recipe_plus_mdf) : `object`
            * [.parse($recipe)](#vscp_dot_wizard_dot_Recipe_plus_parse)
            * [.write(options)](#vscp_dot_wizard_dot_Recipe_plus_write)
        * [.getRecipes(options)](#vscp_dot_wizard_dot_getRecipes) ⇒ [`Array.&lt;Recipe&gt;`](#vscp.wizard.Recipe)
    * [.ws](#vscp_dot_ws) : `object`
        * [.Client](#vscp_dot_ws_dot_Client)
            * [new vscp.ws.Client()](#new_vscp_dot_ws_dot_Client_new)
            * [.socket](#vscp_dot_ws_dot_Client_plus_socket) : `object`
            * [.url](#vscp_dot_ws_dot_Client_plus_url) : `string`
            * [.userName](#vscp_dot_ws_dot_Client_plus_userName) : `string`
            * [.userId](#vscp_dot_ws_dot_Client_plus_userId) : `number`
            * [.userFullname](#vscp_dot_ws_dot_Client_plus_userFullname) : `string`
            * [.userRights](#vscp_dot_ws_dot_Client_plus_userRights) : `array`
            * [.userRemotes](#vscp_dot_ws_dot_Client_plus_userRemotes) : `array`
            * [.userEvents](#vscp_dot_ws_dot_Client_plus_userEvents) : `array`
            * [.userNote](#vscp_dot_ws_dot_Client_plus_userNote) : `string`
            * [.password](#vscp_dot_ws_dot_Client_plus_password) : `string`
            * [.vscpkey](#vscp_dot_ws_dot_Client_plus_vscpkey) : `string`
            * [.onConnError](#vscp_dot_ws_dot_Client_plus_onConnError) : `function`
            * [.onMessage](#vscp_dot_ws_dot_Client_plus_onMessage) : `function`
            * [.onEvent](#vscp_dot_ws_dot_Client_plus_onEvent) : `Array.&lt;function()&gt;`
            * [.onVariable](#vscp_dot_ws_dot_Client_plus_onVariable) : `function`
            * [.onTableRow](#vscp_dot_ws_dot_Client_plus_onTableRow) : `function`
            * [.state](#vscp_dot_ws_dot_Client_plus_state) : `number`
            * [.substate](#vscp_dot_ws_dot_Client_plus_substate) : `number`
            * [.states](#vscp_dot_ws_dot_Client_plus_states) : `enum`
            * [.substates](#vscp_dot_ws_dot_Client_plus_substates) : `enum`
            * [.addEventListener(eventListener)](#vscp_dot_ws_dot_Client_plus_addEventListener)
            * [.removeEventListener(eventListener)](#vscp_dot_ws_dot_Client_plus_removeEventListener)
            * [.getAuthHash(userName, password, str_iv)](#vscp_dot_ws_dot_Client_plus_getAuthHash) ⇒ `string`
            * [.onWebSocketOpen()](#vscp_dot_ws_dot_Client_plus_onWebSocketOpen)
            * [.onWebSocketClose()](#vscp_dot_ws_dot_Client_plus_onWebSocketClose)
            * [.onWebSocketMessage(msg)](#vscp_dot_ws_dot_Client_plus_onWebSocketMessage)
            * [.connect(options)](#vscp_dot_ws_dot_Client_plus_connect) ⇒ `object`
            * [.disconnect(options)](#vscp_dot_ws_dot_Client_plus_disconnect) ⇒ `object`
            * [.start(options)](#vscp_dot_ws_dot_Client_plus_start) ⇒ `object`
            * [.stop(options)](#vscp_dot_ws_dot_Client_plus_stop) ⇒ `object`
            * [.clearQueue(options)](#vscp_dot_ws_dot_Client_plus_clearQueue) ⇒ `object`
            * [.sendEvent(options)](#vscp_dot_ws_dot_Client_plus_sendEvent) ⇒ `object`
            * [.setFilter(options)](#vscp_dot_ws_dot_Client_plus_setFilter) ⇒ `object`
            * [.createVar(options)](#vscp_dot_ws_dot_Client_plus_createVar) ⇒ `object`
            * [.readVar(options)](#vscp_dot_ws_dot_Client_plus_readVar) ⇒ `object`
            * [.writeVar(options)](#vscp_dot_ws_dot_Client_plus_writeVar) ⇒ `object`
            * [.resetVar(options)](#vscp_dot_ws_dot_Client_plus_resetVar) ⇒ `object`
            * [.removeVar(options)](#vscp_dot_ws_dot_Client_plus_removeVar) ⇒ `object`
            * [.lengthVar(options)](#vscp_dot_ws_dot_Client_plus_lengthVar) ⇒ `object`
            * [.lastChangeVar(options)](#vscp_dot_ws_dot_Client_plus_lastChangeVar) ⇒ `object`
            * [.listVar(options)](#vscp_dot_ws_dot_Client_plus_listVar) ⇒ `object`
            * [.readTable(options)](#vscp_dot_ws_dot_Client_plus_readTable) ⇒ `object`
    * [.getVarTypeName(n)](#vscp_dot_getVarTypeName) ⇒ `string`
    * [.getVarTypeNumerical(str)](#vscp_dot_getVarTypeNumerical) ⇒ `number`
    * [.getEditorModeFromType(n)](#vscp_dot_getEditorModeFromType) ⇒ `string`
    * [.b64EncodeUnicode(str)](#vscp_dot_b64EncodeUnicode) ⇒ `string`
    * [.b64DecodeUnicode(str)](#vscp_dot_b64DecodeUnicode) ⇒ `string`
    * [.isBase64Type(type)](#vscp_dot_isBase64Type) ⇒ `bool`
    * [.decodeValueIfBase64(type, value)](#vscp_dot_decodeValueIfBase64) ⇒ `string`
    * [.encodeValueIfBase64(type, value)](#vscp_dot_encodeValueIfBase64) ⇒ `string`

<a id="vscp_dot_Event"></a>

### vscp.Event
**Kind**: static class of [`vscp`](#vscp)  

* [.Event](#vscp_dot_Event)
    * [new vscp.Event(options)](#new_vscp_dot_Event_new)
    * [.vscpHead](#vscp_dot_Event_plus_vscpHead) : `number`
    * [.vscpClass](#vscp_dot_Event_plus_vscpClass) : `number`
    * [.vscpType](#vscp_dot_Event_plus_vscpType) : `number`
    * [.vscpObId](#vscp_dot_Event_plus_vscpObId) : `number`
    * [.vscpTimeStamp](#vscp_dot_Event_plus_vscpTimeStamp) : `number`
    * [.vscpDateTime](#vscp_dot_Event_plus_vscpDateTime) : `date`
    * [.vscpGuid](#vscp_dot_Event_plus_vscpGuid) : `string`
    * [.vscpData](#vscp_dot_Event_plus_vscpData) : `Array.&lt;number&gt;` \| `string`
    * [.setIPV6Addr()](#vscp_dot_Event_plus_setIPV6Addr)
    * [.isIPV6Addr()](#vscp_dot_Event_plus_isIPV6Addr) ⇒ `boolean`
    * [.setDumbNode()](#vscp_dot_Event_plus_setDumbNode)
    * [.isDumbNode()](#vscp_dot_Event_plus_isDumbNode) ⇒ `boolean`
    * [.setPriority(priority)](#vscp_dot_Event_plus_setPriority)
    * [.getPriority()](#vscp_dot_Event_plus_getPriority) ⇒ `number`
    * [.setHardCodedAddr()](#vscp_dot_Event_plus_setHardCodedAddr)
    * [.isHardCodedAddr()](#vscp_dot_Event_plus_isHardCodedAddr) ⇒ `boolean`
    * [.setDoNotCalcCRC()](#vscp_dot_Event_plus_setDoNotCalcCRC)
    * [.isDoNotCalcCRC()](#vscp_dot_Event_plus_isDoNotCalcCRC) ⇒ `boolean`
    * [.getText()](#vscp_dot_Event_plus_getText) ⇒ `string`

<a id="new_vscp_dot_Event_new"></a>

#### new vscp.Event(options)
VSCP event.


| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.vscpHead | `number` | Event head |
| options.guidIsIpV6Addr | `boolean` | GUID is a IPv6 address |
| options.dumpNode | `boolean` | Node is a dump node |
| options.vscpPriority | `number` | Priority |
| options.vscpHardCoded | `boolean` | Hard coded node id |
| options.vscpCalcCRC | `boolean` | Calculate CRC |
| options.vscpClass | `number` | VSCP class |
| options.vscpType | `number` | VSCP type |
| options.vscpObId | `number` | Object id |
| options.vscpTimeStamp | `number` | Timestamp |
| options.vscpGuid | `string` | GUID string |
| options.vscpData | `Array.&lt;number&gt;` \| `string` | Event data |

<a id="vscp_dot_Event_plus_vscpHead"></a>

#### event.vscpHead : `number`
VSCP event head

**Kind**: instance property of [`Event`](#vscp.Event)  
<a id="vscp_dot_Event_plus_vscpClass"></a>

#### event.vscpClass : `number`
VSCP class

**Kind**: instance property of [`Event`](#vscp.Event)  
<a id="vscp_dot_Event_plus_vscpType"></a>

#### event.vscpType : `number`
VSCP type

**Kind**: instance property of [`Event`](#vscp.Event)  
<a id="vscp_dot_Event_plus_vscpObId"></a>

#### event.vscpObId : `number`
VSCP object id used by driver for channel info and etc.

**Kind**: instance property of [`Event`](#vscp.Event)  
<a id="vscp_dot_Event_plus_vscpTimeStamp"></a>

#### event.vscpTimeStamp : `number`
Relative timestamp for package in us

**Kind**: instance property of [`Event`](#vscp.Event)  
<a id="vscp_dot_Event_plus_vscpDateTime"></a>

#### event.vscpDateTime : `date`
Date/Time for package

**Kind**: instance property of [`Event`](#vscp.Event)  
<a id="vscp_dot_Event_plus_vscpGuid"></a>

#### event.vscpGuid : `string`
Node global unique id LSB(15) -> MSB(0)

**Kind**: instance property of [`Event`](#vscp.Event)  
<a id="vscp_dot_Event_plus_vscpData"></a>

#### event.vscpData : `Array.&lt;number&gt;` \| `string`
Data array or string

**Kind**: instance property of [`Event`](#vscp.Event)  
<a id="vscp_dot_Event_plus_setIPV6Addr"></a>

#### event.setIPV6Addr()
Set GUID as IP v6 address

**Kind**: instance method of [`Event`](#vscp.Event)  
<a id="vscp_dot_Event_plus_isIPV6Addr"></a>

#### event.isIPV6Addr() ⇒ `boolean`
Is GUID a IP v6 address or not?

**Kind**: instance method of [`Event`](#vscp.Event)  
**Returns**: `boolean` - If the GUID is a IP v6 address, it will return true, otherwise false.  
<a id="vscp_dot_Event_plus_setDumbNode"></a>

#### event.setDumbNode()
Set dumb node. No MDF, registers, nothing.

**Kind**: instance method of [`Event`](#vscp.Event)  
<a id="vscp_dot_Event_plus_isDumbNode"></a>

#### event.isDumbNode() ⇒ `boolean`
Is node a dump node or not?
Dumb node means no MDF, registers, nothing.

**Kind**: instance method of [`Event`](#vscp.Event)  
**Returns**: `boolean` - If the node is a dumb node, it will return true, otherwise false.  
<a id="vscp_dot_Event_plus_setPriority"></a>

#### event.setPriority(priority)
Set the VSCP event priority.

**Kind**: instance method of [`Event`](#vscp.Event)  

| Param | Type | Description |
| --- | --- | --- |
| priority | `number` | Priority |

<a id="vscp_dot_Event_plus_getPriority"></a>

#### event.getPriority() ⇒ `number`
Get the VSCP event priority.

**Kind**: instance method of [`Event`](#vscp.Event)  
**Returns**: `number` - Priority of the event.  
<a id="vscp_dot_Event_plus_setHardCodedAddr"></a>

#### event.setHardCodedAddr()
Set the node id of the event sender as hard coded?

**Kind**: instance method of [`Event`](#vscp.Event)  
<a id="vscp_dot_Event_plus_isHardCodedAddr"></a>

#### event.isHardCodedAddr() ⇒ `boolean`
Is the node id of the event sender hard coded or not?

**Kind**: instance method of [`Event`](#vscp.Event)  
**Returns**: `boolean` - If the node id is hard coded, it will return true, otherwise false.  
<a id="vscp_dot_Event_plus_setDoNotCalcCRC"></a>

#### event.setDoNotCalcCRC()
Set flag for no CRC calculation?

**Kind**: instance method of [`Event`](#vscp.Event)  
<a id="vscp_dot_Event_plus_isDoNotCalcCRC"></a>

#### event.isDoNotCalcCRC() ⇒ `boolean`
Is CRC calculated or not?

**Kind**: instance method of [`Event`](#vscp.Event)  
**Returns**: `boolean` - If nor CRC should be calculated true is returned.  
<a id="vscp_dot_Event_plus_getText"></a>

#### event.getText() ⇒ `string`
Get event as string.

**Kind**: instance method of [`Event`](#vscp.Event)  
**Returns**: `string` - Event as string  
<a id="vscp_dot_version"></a>

### vscp.version
VSCP core javascript library version

**Kind**: static property of [`vscp`](#vscp)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| major | `number` | Major version number |
| minor | `number` | Minor version number |
| patch | `number` | Sub-minor version number |

<a id="vscp_dot_constants"></a>

### vscp.constants : `object`
VSCP constants

**Kind**: static namespace of [`vscp`](#vscp)  

* [.constants](#vscp_dot_constants) : `object`
    * [.classes](#vscp_dot_constants_dot_classes) : `enum`
    * [.types](#vscp_dot_constants_dot_types) : `enum`
    * [.priorities](#vscp_dot_constants_dot_priorities) : `enum`
    * [.varTypes](#vscp_dot_constants_dot_varTypes) : `enum`
    * [.varTypeNames](#vscp_dot_constants_dot_varTypeNames)

<a id="vscp_dot_constants_dot_classes"></a>

#### constants.classes : `enum`
VSCP classes

**Kind**: static enum of [`constants`](#vscp.constants)  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| CLASS1_PROTOCOL | `number` | <code>0</code> | 
| CLASS1_ALARM | `number` | <code>1</code> | 
| CLASS1_SECURITY | `number` | <code>2</code> | 
| CLASS1_MEASUREMENT | `number` | <code>10</code> | 
| CLASS1_DATA | `number` | <code>15</code> | 
| CLASS1_INFORMATION | `number` | <code>20</code> | 
| CLASS1_CONTROL | `number` | <code>30</code> | 
| CLASS1_MULTIMEDIA | `number` | <code>40</code> | 
| CLASS1_AOL | `number` | <code>50</code> | 
| CLASS1_MEASUREMENT64 | `number` | <code>60</code> | 
| CLASS1_MEASUREZONE | `number` | <code>65</code> | 
| CLASS1_MEASUREMENT32 | `number` | <code>70</code> | 
| CLASS1_SETVALUEZONE | `number` | <code>85</code> | 
| CLASS1_WEATHER | `number` | <code>90</code> | 
| CLASS1_WEATHER_FORECAST | `number` | <code>95</code> | 
| CLASS1_PHONE | `number` | <code>100</code> | 
| CLASS1_DISPLAY | `number` | <code>102</code> | 
| CLASS1_IR | `number` | <code>110</code> | 
| CLASS1_GNSS | `number` | <code>206</code> | 
| CLASS1_WIRELESS | `number` | <code>212</code> | 
| CLASS1_DIAGNOSTIC | `number` | <code>506</code> | 
| CLASS1_ERROR | `number` | <code>508</code> | 
| CLASS1_LOG | `number` | <code>509</code> | 
| CLASS1_LABORATORY | `number` | <code>510</code> | 
| CLASS1_LOCAL | `number` | <code>511</code> | 
| CLASS2_LEVEL1_PROTOCOL | `number` | <code>512</code> | 
| CLASS2_LEVEL1_ALARM | `number` | <code>513</code> | 
| CLASS2_LEVEL1_SECURITY | `number` | <code>514</code> | 
| CLASS2_LEVEL1_MEASUREMENT | `number` | <code>522</code> | 
| CLASS2_LEVEL1_DATA | `number` | <code>527</code> | 
| CLASS2_LEVEL1_INFORMATION1 | `number` | <code>532</code> | 
| CLASS2_LEVEL1_CONTROL | `number` | <code>542</code> | 
| CLASS2_LEVEL1_MULTIMEDIA | `number` | <code>552</code> | 
| CLASS2_LEVEL1_AOL | `number` | <code>562</code> | 
| CLASS2_LEVEL1_MEASUREMENT64 | `number` | <code>572</code> | 
| CLASS2_LEVEL1_MEASUREZONE | `number` | <code>577</code> | 
| CLASS2_LEVEL1_MEASUREMENT32 | `number` | <code>582</code> | 
| CLASS2_LEVEL1_SETVALUEZONE | `number` | <code>597</code> | 
| CLASS2_LEVEL1_WEATHER | `number` | <code>602</code> | 
| CLASS2_LEVEL1_WEATHERFORECAST | `number` | <code>607</code> | 
| CLASS2_LEVEL1_PHONE | `number` | <code>612</code> | 
| CLASS2_LEVEL1_DISPLAY | `number` | <code>614</code> | 
| CLASS2_LEVEL1_IR | `number` | <code>622</code> | 
| CLASS2_LEVEL1_GNSS | `number` | <code>718</code> | 
| CLASS2_LEVEL1_WIRELESS | `number` | <code>724</code> | 
| CLASS2_LEVEL1_DIAGNOSTIC | `number` | <code>1018</code> | 
| CLASS2_LEVEL1_ERROR | `number` | <code>1020</code> | 
| CLASS2_LEVEL1_LOG | `number` | <code>1021</code> | 
| CLASS2_LEVEL1_LABORATORY | `number` | <code>1022</code> | 
| CLASS2_LEVEL1_LOCAL | `number` | <code>1023</code> | 
| CLASS2_PROTOCOL | `number` | <code>1024</code> | 
| CLASS2_CONTROL | `number` | <code>1025</code> | 
| CLASS2_INFORMATION | `number` | <code>1026</code> | 
| CLASS2_TEXT2SPEECH | `number` | <code>1027</code> | 
| CLASS2_CUSTOM | `number` | <code>1029</code> | 
| CLASS2_DISPLAY | `number` | <code>1030</code> | 
| CLASS2_MEASUREMENT_STR | `number` | <code>1040</code> | 
| CLASS2_MEASUREMENT_FLOAT | `number` | <code>1060</code> | 
| CLASS2_VSCPD | `number` | <code>65535</code> | 

<a id="vscp_dot_constants_dot_types"></a>

#### constants.types : `enum`
VSCP class types

**Kind**: static enum of [`constants`](#vscp.constants)  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| VSCP_TYPE_UNDEFINED | `number` | <code>0</code> | 
| VSCP_TYPE_PROTOCOL_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_PROTOCOL_SEGCTRL_HEARTBEAT | `number` | <code>1</code> | 
| VSCP_TYPE_PROTOCOL_NEW_NODE_ONLINE | `number` | <code>2</code> | 
| VSCP_TYPE_PROTOCOL_PROBE_ACK | `number` | <code>3</code> | 
| VSCP_TYPE_PROTOCOL_RESERVED4 | `number` | <code>4</code> | 
| VSCP_TYPE_PROTOCOL_RESERVED5 | `number` | <code>5</code> | 
| VSCP_TYPE_PROTOCOL_SET_NICKNAME | `number` | <code>6</code> | 
| VSCP_TYPE_PROTOCOL_NICKNAME_ACCEPTED | `number` | <code>7</code> | 
| VSCP_TYPE_PROTOCOL_DROP_NICKNAME | `number` | <code>8</code> | 
| VSCP_TYPE_PROTOCOL_READ_REGISTER | `number` | <code>9</code> | 
| VSCP_TYPE_PROTOCOL_RW_RESPONSE | `number` | <code>10</code> | 
| VSCP_TYPE_PROTOCOL_WRITE_REGISTER | `number` | <code>11</code> | 
| VSCP_TYPE_PROTOCOL_ENTER_BOOT_LOADER | `number` | <code>12</code> | 
| VSCP_TYPE_PROTOCOL_ACK_BOOT_LOADER | `number` | <code>13</code> | 
| VSCP_TYPE_PROTOCOL_NACK_BOOT_LOADER | `number` | <code>14</code> | 
| VSCP_TYPE_PROTOCOL_START_BLOCK | `number` | <code>15</code> | 
| VSCP_TYPE_PROTOCOL_BLOCK_DATA | `number` | <code>16</code> | 
| VSCP_TYPE_PROTOCOL_BLOCK_DATA_ACK | `number` | <code>17</code> | 
| VSCP_TYPE_PROTOCOL_BLOCK_DATA_NACK | `number` | <code>18</code> | 
| VSCP_TYPE_PROTOCOL_PROGRAM_BLOCK_DATA | `number` | <code>19</code> | 
| VSCP_TYPE_PROTOCOL_PROGRAM_BLOCK_DATA_ACK | `number` | <code>20</code> | 
| VSCP_TYPE_PROTOCOL_PROGRAM_BLOCK_DATA_NACK | `number` | <code>21</code> | 
| VSCP_TYPE_PROTOCOL_ACTIVATE_NEW_IMAGE | `number` | <code>22</code> | 
| VSCP_TYPE_PROTOCOL_RESET_DEVICE | `number` | <code>23</code> | 
| VSCP_TYPE_PROTOCOL_PAGE_READ | `number` | <code>24</code> | 
| VSCP_TYPE_PROTOCOL_PAGE_WRITE | `number` | <code>25</code> | 
| VSCP_TYPE_PROTOCOL_RW_PAGE_RESPONSE | `number` | <code>26</code> | 
| VSCP_TYPE_PROTOCOL_HIGH_END_SERVER_PROBE | `number` | <code>27</code> | 
| VSCP_TYPE_PROTOCOL_HIGH_END_SERVER_RESPONSE | `number` | <code>28</code> | 
| VSCP_TYPE_PROTOCOL_INCREMENT_REGISTER | `number` | <code>29</code> | 
| VSCP_TYPE_PROTOCOL_DECREMENT_REGISTER | `number` | <code>30</code> | 
| VSCP_TYPE_PROTOCOL_WHO_IS_THERE | `number` | <code>31</code> | 
| VSCP_TYPE_PROTOCOL_WHO_IS_THERE_RESPONSE | `number` | <code>32</code> | 
| VSCP_TYPE_PROTOCOL_GET_MATRIX_INFO | `number` | <code>33</code> | 
| VSCP_TYPE_PROTOCOL_GET_MATRIX_INFO_RESPONSE | `number` | <code>34</code> | 
| VSCP_TYPE_PROTOCOL_GET_EMBEDDED_MDF | `number` | <code>35</code> | 
| VSCP_TYPE_PROTOCOL_GET_EMBEDDED_MDF_RESPONSE | `number` | <code>36</code> | 
| VSCP_TYPE_PROTOCOL_EXTENDED_PAGE_READ | `number` | <code>37</code> | 
| VSCP_TYPE_PROTOCOL_EXTENDED_PAGE_WRITE | `number` | <code>38</code> | 
| VSCP_TYPE_PROTOCOL_EXTENDED_PAGE_RESPONSE | `number` | <code>39</code> | 
| VSCP_TYPE_PROTOCOL_GET_EVENT_INTEREST | `number` | <code>40</code> | 
| VSCP_TYPE_PROTOCOL_GET_EVENT_INTEREST_RESPONSE | `number` | <code>41</code> | 
| VSCP_TYPE_PROTOCOL_ACTIVATE_NEW_IMAGE_ACK | `number` | <code>48</code> | 
| VSCP_TYPE_PROTOCOL_ACTIVATE_NEW_IMAGE_NACK | `number` | <code>49</code> | 
| VSCP_TYPE_PROTOCOL_START_BLOCK_ACK | `number` | <code>50</code> | 
| VSCP_TYPE_PROTOCOL_START_BLOCK_NACK | `number` | <code>51</code> | 
| VSCP_TYPE_ALARM_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_ALARM_WARNING | `number` | <code>1</code> | 
| VSCP_TYPE_ALARM_ALARM | `number` | <code>2</code> | 
| VSCP_TYPE_ALARM_SOUND | `number` | <code>3</code> | 
| VSCP_TYPE_ALARM_LIGHT | `number` | <code>4</code> | 
| VSCP_TYPE_ALARM_POWER | `number` | <code>5</code> | 
| VSCP_TYPE_ALARM_EMERGENCY_STOP | `number` | <code>6</code> | 
| VSCP_TYPE_ALARM_EMERGENCY_PAUSE | `number` | <code>7</code> | 
| VSCP_TYPE_ALARM_EMERGENCY_RESET | `number` | <code>8</code> | 
| VSCP_TYPE_ALARM_EMERGENCY_RESUME | `number` | <code>9</code> | 
| VSCP_TYPE_ALARM_ARM | `number` | <code>10</code> | 
| VSCP_TYPE_ALARM_DISARM | `number` | <code>11</code> | 
| VSCP_TYPE_SECURITY_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_SECURITY_MOTION | `number` | <code>1</code> | 
| VSCP_TYPE_SECURITY_GLASS_BREAK | `number` | <code>2</code> | 
| VSCP_TYPE_SECURITY_BEAM_BREAK | `number` | <code>3</code> | 
| VSCP_TYPE_SECURITY_SENSOR_TAMPER | `number` | <code>4</code> | 
| VSCP_TYPE_SECURITY_SHOCK_SENSOR | `number` | <code>5</code> | 
| VSCP_TYPE_SECURITY_SMOKE_SENSOR | `number` | <code>6</code> | 
| VSCP_TYPE_SECURITY_HEAT_SENSOR | `number` | <code>7</code> | 
| VSCP_TYPE_SECURITY_PANIC_SWITCH | `number` | <code>8</code> | 
| VSCP_TYPE_SECURITY_DOOR_OPEN | `number` | <code>9</code> | 
| VSCP_TYPE_SECURITY_WINDOW_OPEN | `number` | <code>10</code> | 
| VSCP_TYPE_SECURITY_CO_SENSOR | `number` | <code>11</code> | 
| VSCP_TYPE_SECURITY_FROST_DETECTED | `number` | <code>12</code> | 
| VSCP_TYPE_SECURITY_FLAME_DETECTED | `number` | <code>13</code> | 
| VSCP_TYPE_SECURITY_OXYGEN_LOW | `number` | <code>14</code> | 
| VSCP_TYPE_SECURITY_WEIGHT_DETECTED | `number` | <code>15</code> | 
| VSCP_TYPE_SECURITY_WATER_DETECTED | `number` | <code>16</code> | 
| VSCP_TYPE_SECURITY_CONDENSATION_DETECTED | `number` | <code>17</code> | 
| VSCP_TYPE_SECURITY_SOUND_DETECTED | `number` | <code>18</code> | 
| VSCP_TYPE_SECURITY_HARMFUL_SOUND_LEVEL | `number` | <code>19</code> | 
| VSCP_TYPE_SECURITY_TAMPER | `number` | <code>20</code> | 
| VSCP_TYPE_MEASUREMENT_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_MEASUREMENT_COUNT | `number` | <code>1</code> | 
| VSCP_TYPE_MEASUREMENT_LENGTH | `number` | <code>2</code> | 
| VSCP_TYPE_MEASUREMENT_MASS | `number` | <code>3</code> | 
| VSCP_TYPE_MEASUREMENT_TIME | `number` | <code>4</code> | 
| VSCP_TYPE_MEASUREMENT_ELECTRIC_CURRENT | `number` | <code>5</code> | 
| VSCP_TYPE_MEASUREMENT_TEMPERATURE | `number` | <code>6</code> | 
| VSCP_TYPE_MEASUREMENT_AMOUNT_OF_SUBSTANCE | `number` | <code>7</code> | 
| VSCP_TYPE_MEASUREMENT_INTENSITY_OF_LIGHT | `number` | <code>8</code> | 
| VSCP_TYPE_MEASUREMENT_FREQUENCY | `number` | <code>9</code> | 
| VSCP_TYPE_MEASUREMENT_RADIOACTIVITY | `number` | <code>10</code> | 
| VSCP_TYPE_MEASUREMENT_FORCE | `number` | <code>11</code> | 
| VSCP_TYPE_MEASUREMENT_PRESSURE | `number` | <code>12</code> | 
| VSCP_TYPE_MEASUREMENT_ENERGY | `number` | <code>13</code> | 
| VSCP_TYPE_MEASUREMENT_POWER | `number` | <code>14</code> | 
| VSCP_TYPE_MEASUREMENT_ELECTRICAL_CHARGE | `number` | <code>15</code> | 
| VSCP_TYPE_MEASUREMENT_ELECTRICAL_POTENTIAL | `number` | <code>16</code> | 
| VSCP_TYPE_MEASUREMENT_ELECTRICAL_CAPACITANCE | `number` | <code>17</code> | 
| VSCP_TYPE_MEASUREMENT_ELECTRICAL_RESISTANCE | `number` | <code>18</code> | 
| VSCP_TYPE_MEASUREMENT_ELECTRICAL_CONDUCTANCE | `number` | <code>19</code> | 
| VSCP_TYPE_MEASUREMENT_MAGNETIC_FIELD_STRENGTH | `number` | <code>20</code> | 
| VSCP_TYPE_MEASUREMENT_MAGNETIC_FLUX | `number` | <code>21</code> | 
| VSCP_TYPE_MEASUREMENT_MAGNETIC_FLUX_DENSITY | `number` | <code>22</code> | 
| VSCP_TYPE_MEASUREMENT_INDUCTANCE | `number` | <code>23</code> | 
| VSCP_TYPE_MEASUREMENT_FLUX_OF_LIGHT | `number` | <code>24</code> | 
| VSCP_TYPE_MEASUREMENT_ILLUMINANCE | `number` | <code>25</code> | 
| VSCP_TYPE_MEASUREMENT_RADIATION_DOSE | `number` | <code>26</code> | 
| VSCP_TYPE_MEASUREMENT_CATALYTIC_ACITIVITY | `number` | <code>27</code> | 
| VSCP_TYPE_MEASUREMENT_VOLUME | `number` | <code>28</code> | 
| VSCP_TYPE_MEASUREMENT_SOUND_INTENSITY | `number` | <code>29</code> | 
| VSCP_TYPE_MEASUREMENT_ANGLE | `number` | <code>30</code> | 
| VSCP_TYPE_MEASUREMENT_POSITION | `number` | <code>31</code> | 
| VSCP_TYPE_MEASUREMENT_SPEED | `number` | <code>32</code> | 
| VSCP_TYPE_MEASUREMENT_ACCELERATION | `number` | <code>33</code> | 
| VSCP_TYPE_MEASUREMENT_TENSION | `number` | <code>34</code> | 
| VSCP_TYPE_MEASUREMENT_HUMIDITY | `number` | <code>35</code> | 
| VSCP_TYPE_MEASUREMENT_FLOW | `number` | <code>36</code> | 
| VSCP_TYPE_MEASUREMENT_THERMAL_RESISTANCE | `number` | <code>37</code> | 
| VSCP_TYPE_MEASUREMENT_REFRACTIVE_POWER | `number` | <code>38</code> | 
| VSCP_TYPE_MEASUREMENT_DYNAMIC_VISCOSITY | `number` | <code>39</code> | 
| VSCP_TYPE_MEASUREMENT_SOUND_IMPEDANCE | `number` | <code>40</code> | 
| VSCP_TYPE_MEASUREMENT_SOUND_RESISTANCE | `number` | <code>41</code> | 
| VSCP_TYPE_MEASUREMENT_ELECTRIC_ELASTANCE | `number` | <code>42</code> | 
| VSCP_TYPE_MEASUREMENT_LUMINOUS_ENERGY | `number` | <code>43</code> | 
| VSCP_TYPE_MEASUREMENT_LUMINANCE | `number` | <code>44</code> | 
| VSCP_TYPE_MEASUREMENT_CHEMICAL_CONCENTRATION | `number` | <code>45</code> | 
| VSCP_TYPE_MEASUREMENT_RESERVED46 | `number` | <code>46</code> | 
| VSCP_TYPE_MEASUREMENT_DOSE_EQVIVALENT | `number` | <code>47</code> | 
| VSCP_TYPE_MEASUREMENT_RESERVED48 | `number` | <code>48</code> | 
| VSCP_TYPE_MEASUREMENT_DEWPOINT | `number` | <code>49</code> | 
| VSCP_TYPE_MEASUREMENT_RELATIVE_LEVEL | `number` | <code>50</code> | 
| VSCP_TYPE_MEASUREMENT_ALTITUDE | `number` | <code>51</code> | 
| VSCP_TYPE_MEASUREMENT_AREA | `number` | <code>52</code> | 
| VSCP_TYPE_MEASUREMENT_RADIANT_INTENSITY | `number` | <code>53</code> | 
| VSCP_TYPE_MEASUREMENT_RADIANCE | `number` | <code>54</code> | 
| VSCP_TYPE_MEASUREMENT_IRRADIANCE | `number` | <code>55</code> | 
| VSCP_TYPE_MEASUREMENT_SPECTRAL_RADIANCE | `number` | <code>56</code> | 
| VSCP_TYPE_MEASUREMENT_SPECTRAL_IRRADIANCE | `number` | <code>57</code> | 
| VSCP_TYPE_MEASUREMENT_SOUND_PRESSURE | `number` | <code>58</code> | 
| VSCP_TYPE_MEASUREMENT_SOUND_DENSITY | `number` | <code>59</code> | 
| VSCP_TYPE_MEASUREMENT_SOUND_LEVEL | `number` | <code>60</code> | 
| VSCP_TYPE_DATA_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_DATA_IO | `number` | <code>1</code> | 
| VSCP_TYPE_DATA_AD | `number` | <code>2</code> | 
| VSCP_TYPE_DATA_DA | `number` | <code>3</code> | 
| VSCP_TYPE_DATA_RELATIVE_STRENGTH | `number` | <code>4</code> | 
| VSCP_TYPE_DATA_SIGNAL_LEVEL | `number` | <code>5</code> | 
| VSCP_TYPE_DATA_SIGNAL_QUALITY | `number` | <code>6</code> | 
| VSCP_TYPE_DATA_COUNT | `number` | <code>7</code> | 
| VSCP_TYPE_INFORMATION_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_INFORMATION_BUTTON | `number` | <code>1</code> | 
| VSCP_TYPE_INFORMATION_MOUSE | `number` | <code>2</code> | 
| VSCP_TYPE_INFORMATION_ON | `number` | <code>3</code> | 
| VSCP_TYPE_INFORMATION_OFF | `number` | <code>4</code> | 
| VSCP_TYPE_INFORMATION_ALIVE | `number` | <code>5</code> | 
| VSCP_TYPE_INFORMATION_TERMINATING | `number` | <code>6</code> | 
| VSCP_TYPE_INFORMATION_OPENED | `number` | <code>7</code> | 
| VSCP_TYPE_INFORMATION_CLOSED | `number` | <code>8</code> | 
| VSCP_TYPE_INFORMATION_NODE_HEARTBEAT | `number` | <code>9</code> | 
| VSCP_TYPE_INFORMATION_BELOW_LIMIT | `number` | <code>10</code> | 
| VSCP_TYPE_INFORMATION_ABOVE_LIMIT | `number` | <code>11</code> | 
| VSCP_TYPE_INFORMATION_PULSE | `number` | <code>12</code> | 
| VSCP_TYPE_INFORMATION_ERROR | `number` | <code>13</code> | 
| VSCP_TYPE_INFORMATION_RESUMED | `number` | <code>14</code> | 
| VSCP_TYPE_INFORMATION_PAUSED | `number` | <code>15</code> | 
| VSCP_TYPE_INFORMATION_SLEEP | `number` | <code>16</code> | 
| VSCP_TYPE_INFORMATION_GOOD_MORNING | `number` | <code>17</code> | 
| VSCP_TYPE_INFORMATION_GOOD_DAY | `number` | <code>18</code> | 
| VSCP_TYPE_INFORMATION_GOOD_AFTERNOON | `number` | <code>19</code> | 
| VSCP_TYPE_INFORMATION_GOOD_EVENING | `number` | <code>20</code> | 
| VSCP_TYPE_INFORMATION_GOOD_NIGHT | `number` | <code>21</code> | 
| VSCP_TYPE_INFORMATION_SEE_YOU_SOON | `number` | <code>22</code> | 
| VSCP_TYPE_INFORMATION_GOODBYE | `number` | <code>23</code> | 
| VSCP_TYPE_INFORMATION_STOP | `number` | <code>24</code> | 
| VSCP_TYPE_INFORMATION_START | `number` | <code>25</code> | 
| VSCP_TYPE_INFORMATION_RESET_COMPLETED | `number` | <code>26</code> | 
| VSCP_TYPE_INFORMATION_INTERRUPTED | `number` | <code>27</code> | 
| VSCP_TYPE_INFORMATION_PREPARING_TO_SLEEP | `number` | <code>28</code> | 
| VSCP_TYPE_INFORMATION_WOKEN_UP | `number` | <code>29</code> | 
| VSCP_TYPE_INFORMATION_DUSK | `number` | <code>30</code> | 
| VSCP_TYPE_INFORMATION_DAWN | `number` | <code>31</code> | 
| VSCP_TYPE_INFORMATION_ACTIVE | `number` | <code>32</code> | 
| VSCP_TYPE_INFORMATION_INACTIVE | `number` | <code>33</code> | 
| VSCP_TYPE_INFORMATION_BUSY | `number` | <code>34</code> | 
| VSCP_TYPE_INFORMATION_IDLE | `number` | <code>35</code> | 
| VSCP_TYPE_INFORMATION_STREAM_DATA | `number` | <code>36</code> | 
| VSCP_TYPE_INFORMATION_TOKEN_ACTIVITY | `number` | <code>37</code> | 
| VSCP_TYPE_INFORMATION_STREAM_DATA_WITH_ZONE | `number` | <code>38</code> | 
| VSCP_TYPE_INFORMATION_CONFIRM | `number` | <code>39</code> | 
| VSCP_TYPE_INFORMATION_LEVEL_CHANGED | `number` | <code>40</code> | 
| VSCP_TYPE_INFORMATION_WARNING | `number` | <code>41</code> | 
| VSCP_TYPE_INFORMATION_STATE | `number` | <code>42</code> | 
| VSCP_TYPE_INFORMATION_ACTION_TRIGGER | `number` | <code>43</code> | 
| VSCP_TYPE_INFORMATION_SUNRISE | `number` | <code>44</code> | 
| VSCP_TYPE_INFORMATION_SUNSET | `number` | <code>45</code> | 
| VSCP_TYPE_INFORMATION_START_OF_RECORD | `number` | <code>46</code> | 
| VSCP_TYPE_INFORMATION_END_OF_RECORD | `number` | <code>47</code> | 
| VSCP_TYPE_INFORMATION_PRESET_ACTIVE | `number` | <code>48</code> | 
| VSCP_TYPE_INFORMATION_DETECT | `number` | <code>49</code> | 
| VSCP_TYPE_INFORMATION_OVERFLOW | `number` | <code>50</code> | 
| VSCP_TYPE_INFORMATION_BIG_LEVEL_CHANGED | `number` | <code>51</code> | 
| VSCP_TYPE_INFORMATION_SUNRISE_TWILIGHT_START | `number` | <code>52</code> | 
| VSCP_TYPE_INFORMATION_SUNSET_TWILIGHT_START | `number` | <code>53</code> | 
| VSCP_TYPE_INFORMATION_NAUTICAL_SUNRISE_TWILIGHT_START | `number` | <code>54</code> | 
| VSCP_TYPE_INFORMATION_NAUTICAL_SUNSET_TWILIGHT_START | `number` | <code>55</code> | 
| VSCP_TYPE_INFORMATION_ASTRONOMICAL_SUNRISE_TWILIGHT_START | `number` | <code>56</code> | 
| VSCP_TYPE_INFORMATION_ASTRONOMICAL_SUNSET_TWILIGHT_START | `number` | <code>57</code> | 
| VSCP_TYPE_INFORMATION_CALCULATED_NOON | `number` | <code>58</code> | 
| VSCP_TYPE_INFORMATION_SHUTTER_UP | `number` | <code>59</code> | 
| VSCP_TYPE_INFORMATION_SHUTTER_DOWN | `number` | <code>60</code> | 
| VSCP_TYPE_INFORMATION_SHUTTER_LEFT | `number` | <code>61</code> | 
| VSCP_TYPE_INFORMATION_SHUTTER_RIGHT | `number` | <code>62</code> | 
| VSCP_TYPE_INFORMATION_SHUTTER_END_TOP | `number` | <code>63</code> | 
| VSCP_TYPE_INFORMATION_SHUTTER_END_BOTTOM | `number` | <code>64</code> | 
| VSCP_TYPE_INFORMATION_SHUTTER_END_MIDDLE | `number` | <code>65</code> | 
| VSCP_TYPE_INFORMATION_SHUTTER_END_PRESET | `number` | <code>66</code> | 
| VSCP_TYPE_INFORMATION_SHUTTER_END_LEFT | `number` | <code>67</code> | 
| VSCP_TYPE_INFORMATION_SHUTTER_END_RIGHT | `number` | <code>68</code> | 
| VSCP_TYPE_INFORMATION_LONG_CLICK | `number` | <code>69</code> | 
| VSCP_TYPE_INFORMATION_SINGLE_CLICK | `number` | <code>70</code> | 
| VSCP_TYPE_INFORMATION_DOUBLE_CLICK | `number` | <code>71</code> | 
| VSCP_TYPE_INFORMATION_DATE | `number` | <code>72</code> | 
| VSCP_TYPE_INFORMATION_TIME | `number` | <code>73</code> | 
| VSCP_TYPE_INFORMATION_WEEKDAY | `number` | <code>74</code> | 
| VSCP_TYPE_INFORMATION_LOCK | `number` | <code>75</code> | 
| VSCP_TYPE_INFORMATION_UNLOCK | `number` | <code>76</code> | 
| VSCP_TYPE_INFORMATION_DATETIME | `number` | <code>77</code> | 
| VSCP_TYPE_CONTROL_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_CONTROL_MUTE | `number` | <code>1</code> | 
| VSCP_TYPE_CONTROL_ALL_LAMPS | `number` | <code>2</code> | 
| VSCP_TYPE_CONTROL_OPEN | `number` | <code>3</code> | 
| VSCP_TYPE_CONTROL_CLOSE | `number` | <code>4</code> | 
| VSCP_TYPE_CONTROL_TURNON | `number` | <code>5</code> | 
| VSCP_TYPE_CONTROL_TURNOFF | `number` | <code>6</code> | 
| VSCP_TYPE_CONTROL_START | `number` | <code>7</code> | 
| VSCP_TYPE_CONTROL_STOP | `number` | <code>8</code> | 
| VSCP_TYPE_CONTROL_RESET | `number` | <code>9</code> | 
| VSCP_TYPE_CONTROL_INTERRUPT | `number` | <code>10</code> | 
| VSCP_TYPE_CONTROL_SLEEP | `number` | <code>11</code> | 
| VSCP_TYPE_CONTROL_WAKEUP | `number` | <code>12</code> | 
| VSCP_TYPE_CONTROL_RESUME | `number` | <code>13</code> | 
| VSCP_TYPE_CONTROL_PAUSE | `number` | <code>14</code> | 
| VSCP_TYPE_CONTROL_ACTIVATE | `number` | <code>15</code> | 
| VSCP_TYPE_CONTROL_DEACTIVATE | `number` | <code>16</code> | 
| VSCP_TYPE_CONTROL_RESERVED17 | `number` | <code>17</code> | 
| VSCP_TYPE_CONTROL_RESERVED18 | `number` | <code>18</code> | 
| VSCP_TYPE_CONTROL_RESERVED19 | `number` | <code>19</code> | 
| VSCP_TYPE_CONTROL_DIM_LAMPS | `number` | <code>20</code> | 
| VSCP_TYPE_CONTROL_CHANGE_CHANNEL | `number` | <code>21</code> | 
| VSCP_TYPE_CONTROL_CHANGE_LEVEL | `number` | <code>22</code> | 
| VSCP_TYPE_CONTROL_RELATIVE_CHANGE_LEVEL | `number` | <code>23</code> | 
| VSCP_TYPE_CONTROL_MEASUREMENT_REQUEST | `number` | <code>24</code> | 
| VSCP_TYPE_CONTROL_STREAM_DATA | `number` | <code>25</code> | 
| VSCP_TYPE_CONTROL_SYNC | `number` | <code>26</code> | 
| VSCP_TYPE_CONTROL_ZONED_STREAM_DATA | `number` | <code>27</code> | 
| VSCP_TYPE_CONTROL_SET_PRESET | `number` | <code>28</code> | 
| VSCP_TYPE_CONTROL_TOGGLE_STATE | `number` | <code>29</code> | 
| VSCP_TYPE_CONTROL_TIMED_PULSE_ON | `number` | <code>30</code> | 
| VSCP_TYPE_CONTROL_TIMED_PULSE_OFF | `number` | <code>31</code> | 
| VSCP_TYPE_CONTROL_SET_COUNTRY_LANGUAGE | `number` | <code>32</code> | 
| VSCP_TYPE_CONTROL_BIG_CHANGE_LEVEL | `number` | <code>33</code> | 
| VSCP_TYPE_CONTROL_SHUTTER_UP | `number` | <code>34</code> | 
| VSCP_TYPE_CONTROL_SHUTTER_DOWN | `number` | <code>35</code> | 
| VSCP_TYPE_CONTROL_SHUTTER_LEFT | `number` | <code>36</code> | 
| VSCP_TYPE_CONTROL_SHUTTER_RIGHT | `number` | <code>37</code> | 
| VSCP_TYPE_CONTROL_SHUTTER_MIDDLE | `number` | <code>38</code> | 
| VSCP_TYPE_CONTROL_SHUTTER_PRESET | `number` | <code>39</code> | 
| VSCP_TYPE_CONTROL_ALL_LAMPS_ON | `number` | <code>40</code> | 
| VSCP_TYPE_CONTROL_ALL_LAMPS_OFF | `number` | <code>41</code> | 
| VSCP_TYPE_CONTROL_LOCK | `number` | <code>42</code> | 
| VSCP_TYPE_CONTROL_UNLOCK | `number` | <code>43</code> | 
| VSCP_TYPE_MULTIMEDIA_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_MULTIMEDIA_PLAYBACK | `number` | <code>1</code> | 
| VSCP_TYPE_MULTIMEDIA_NAVIGATOR_KEY_ENG | `number` | <code>2</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_CONTRAST | `number` | <code>3</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_FOCUS | `number` | <code>4</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_TINT | `number` | <code>5</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_COLOUR_BALANCE | `number` | <code>6</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_BRIGHTNESS | `number` | <code>7</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_HUE | `number` | <code>8</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_BASS | `number` | <code>9</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_TREBLE | `number` | <code>10</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_MASTER_VOLUME | `number` | <code>11</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_FRONT_VOLUME | `number` | <code>12</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_CENTRE_VOLUME | `number` | <code>13</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_REAR_VOLUME | `number` | <code>14</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_SIDE_VOLUME | `number` | <code>15</code> | 
| VSCP_TYPE_MULTIMEDIA_RESERVED16 | `number` | <code>16</code> | 
| VSCP_TYPE_MULTIMEDIA_RESERVED17 | `number` | <code>17</code> | 
| VSCP_TYPE_MULTIMEDIA_RESERVED18 | `number` | <code>18</code> | 
| VSCP_TYPE_MULTIMEDIA_RESERVED19 | `number` | <code>19</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_DISK | `number` | <code>20</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_TRACK | `number` | <code>21</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_ALBUM | `number` | <code>22</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_CHANNEL | `number` | <code>23</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_PAGE | `number` | <code>24</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_CHAPTER | `number` | <code>25</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_SCREEN_FORMAT | `number` | <code>26</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_INPUT_SOURCE | `number` | <code>27</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_OUTPUT | `number` | <code>28</code> | 
| VSCP_TYPE_MULTIMEDIA_RECORD | `number` | <code>29</code> | 
| VSCP_TYPE_MULTIMEDIA_SET_RECORDING_VOLUME | `number` | <code>30</code> | 
| VSCP_TYPE_MULTIMEDIA_TIVO_FUNCTION | `number` | <code>40</code> | 
| VSCP_TYPE_MULTIMEDIA_GET_CURRENT_TITLE | `number` | <code>50</code> | 
| VSCP_TYPE_MULTIMEDIA_SET_POSITION | `number` | <code>51</code> | 
| VSCP_TYPE_MULTIMEDIA_GET_MEDIA_INFO | `number` | <code>52</code> | 
| VSCP_TYPE_MULTIMEDIA_REMOVE_ITEM | `number` | <code>53</code> | 
| VSCP_TYPE_MULTIMEDIA_REMOVE_ALL_ITEMS | `number` | <code>54</code> | 
| VSCP_TYPE_MULTIMEDIA_SAVE_ALBUM | `number` | <code>55</code> | 
| VSCP_TYPE_MULTIMEDIA_CONTROL | `number` | <code>60</code> | 
| VSCP_TYPE_MULTIMEDIA_CONTROL_RESPONSE | `number` | <code>61</code> | 
| VSCP_TYPE_AOL_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_AOL_UNPLUGGED_POWER | `number` | <code>1</code> | 
| VSCP_TYPE_AOL_UNPLUGGED_LAN | `number` | <code>2</code> | 
| VSCP_TYPE_AOL_CHASSIS_INTRUSION | `number` | <code>3</code> | 
| VSCP_TYPE_AOL_PROCESSOR_REMOVAL | `number` | <code>4</code> | 
| VSCP_TYPE_AOL_ENVIRONMENT_ERROR | `number` | <code>5</code> | 
| VSCP_TYPE_AOL_HIGH_TEMPERATURE | `number` | <code>6</code> | 
| VSCP_TYPE_AOL_FAN_SPEED | `number` | <code>7</code> | 
| VSCP_TYPE_AOL_VOLTAGE_FLUCTUATIONS | `number` | <code>8</code> | 
| VSCP_TYPE_AOL_OS_ERROR | `number` | <code>9</code> | 
| VSCP_TYPE_AOL_POWER_ON_ERROR | `number` | <code>10</code> | 
| VSCP_TYPE_AOL_SYSTEM_HUNG | `number` | <code>11</code> | 
| VSCP_TYPE_AOL_COMPONENT_FAILURE | `number` | <code>12</code> | 
| VSCP_TYPE_AOL_REBOOT_UPON_FAILURE | `number` | <code>13</code> | 
| VSCP_TYPE_AOL_REPAIR_OPERATING_SYSTEM | `number` | <code>14</code> | 
| VSCP_TYPE_AOL_UPDATE_BIOS_IMAGE | `number` | <code>15</code> | 
| VSCP_TYPE_AOL_UPDATE_DIAGNOSTIC_PROCEDURE | `number` | <code>16</code> | 
| VSCP_TYPE_WEATHER_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_WEATHER_SEASONS_WINTER | `number` | <code>1</code> | 
| VSCP_TYPE_WEATHER_SEASONS_SPRING | `number` | <code>2</code> | 
| VSCP_TYPE_WEATHER_SEASONS_SUMMER | `number` | <code>3</code> | 
| VSCP_TYPE_WEATHER_SEASONS_AUTUMN | `number` | <code>4</code> | 
| VSCP_TYPE_WEATHER_WIND_NONE | `number` | <code>5</code> | 
| VSCP_TYPE_WEATHER_WIND_LOW | `number` | <code>6</code> | 
| VSCP_TYPE_WEATHER_WIND_MEDIUM | `number` | <code>7</code> | 
| VSCP_TYPE_WEATHER_WIND_HIGH | `number` | <code>8</code> | 
| VSCP_TYPE_WEATHER_WIND_VERY_HIGH | `number` | <code>9</code> | 
| VSCP_TYPE_WEATHER_AIR_FOGGY | `number` | <code>10</code> | 
| VSCP_TYPE_WEATHER_AIR_FREEZING | `number` | <code>11</code> | 
| VSCP_TYPE_WEATHER_AIR_VERY_COLD | `number` | <code>12</code> | 
| VSCP_TYPE_WEATHER_AIR_COLD | `number` | <code>13</code> | 
| VSCP_TYPE_WEATHER_AIR_NORMAL | `number` | <code>14</code> | 
| VSCP_TYPE_WEATHER_AIR_HOT | `number` | <code>15</code> | 
| VSCP_TYPE_WEATHER_AIR_VERY_HOT | `number` | <code>16</code> | 
| VSCP_TYPE_WEATHER_AIR_POLLUTION_LOW | `number` | <code>17</code> | 
| VSCP_TYPE_WEATHER_AIR_POLLUTION_MEDIUM | `number` | <code>18</code> | 
| VSCP_TYPE_WEATHER_AIR_POLLUTION_HIGH | `number` | <code>19</code> | 
| VSCP_TYPE_WEATHER_AIR_HUMID | `number` | <code>20</code> | 
| VSCP_TYPE_WEATHER_AIR_DRY | `number` | <code>21</code> | 
| VSCP_TYPE_WEATHER_SOIL_HUMID | `number` | <code>22</code> | 
| VSCP_TYPE_WEATHER_SOIL_DRY | `number` | <code>23</code> | 
| VSCP_TYPE_WEATHER_RAIN_NONE | `number` | <code>24</code> | 
| VSCP_TYPE_WEATHER_RAIN_LIGHT | `number` | <code>25</code> | 
| VSCP_TYPE_WEATHER_RAIN_HEAVY | `number` | <code>26</code> | 
| VSCP_TYPE_WEATHER_RAIN_VERY_HEAVY | `number` | <code>27</code> | 
| VSCP_TYPE_WEATHER_SUN_NONE | `number` | <code>28</code> | 
| VSCP_TYPE_WEATHER_SUN_LIGHT | `number` | <code>29</code> | 
| VSCP_TYPE_WEATHER_SUN_HEAVY | `number` | <code>30</code> | 
| VSCP_TYPE_WEATHER_SNOW_NONE | `number` | <code>31</code> | 
| VSCP_TYPE_WEATHER_SNOW_LIGHT | `number` | <code>32</code> | 
| VSCP_TYPE_WEATHER_SNOW_HEAVY | `number` | <code>33</code> | 
| VSCP_TYPE_WEATHER_DEW_POINT | `number` | <code>34</code> | 
| VSCP_TYPE_WEATHER_STORM | `number` | <code>35</code> | 
| VSCP_TYPE_WEATHER_FLOOD | `number` | <code>36</code> | 
| VSCP_TYPE_WEATHER_EARTHQUAKE | `number` | <code>37</code> | 
| VSCP_TYPE_WEATHER_NUCLEAR_DISASTER | `number` | <code>38</code> | 
| VSCP_TYPE_WEATHER_FIRE | `number` | <code>39</code> | 
| VSCP_TYPE_WEATHER_LIGHTNING | `number` | <code>40</code> | 
| VSCP_TYPE_WEATHER_UV_RADIATION_LOW | `number` | <code>41</code> | 
| VSCP_TYPE_WEATHER_UV_RADIATION_MEDIUM | `number` | <code>42</code> | 
| VSCP_TYPE_WEATHER_UV_RADIATION_NORMAL | `number` | <code>43</code> | 
| VSCP_TYPE_WEATHER_UV_RADIATION_HIGH | `number` | <code>44</code> | 
| VSCP_TYPE_WEATHER_UV_RADIATION_VERY_HIGH | `number` | <code>45</code> | 
| VSCP_TYPE_WEATHER_WARNING_LEVEL1 | `number` | <code>46</code> | 
| VSCP_TYPE_WEATHER_WARNING_LEVEL2 | `number` | <code>47</code> | 
| VSCP_TYPE_WEATHER_WARNING_LEVEL3 | `number` | <code>48</code> | 
| VSCP_TYPE_WEATHER_WARNING_LEVEL4 | `number` | <code>49</code> | 
| VSCP_TYPE_WEATHER_WARNING_LEVEL5 | `number` | <code>50</code> | 
| VSCP_TYPE_WEATHER_ARMAGEDON | `number` | <code>51</code> | 
| VSCP_TYPE_PHONE_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_PHONE_INCOMING_CALL | `number` | <code>1</code> | 
| VSCP_TYPE_PHONE_OUTGOING_CALL | `number` | <code>2</code> | 
| VSCP_TYPE_PHONE_RING | `number` | <code>3</code> | 
| VSCP_TYPE_PHONE_ANSWER | `number` | <code>4</code> | 
| VSCP_TYPE_PHONE_HANGUP | `number` | <code>5</code> | 
| VSCP_TYPE_PHONE_GIVEUP | `number` | <code>6</code> | 
| VSCP_TYPE_PHONE_TRANSFER | `number` | <code>7</code> | 
| VSCP_TYPE_PHONE_DATABASE_INFO | `number` | <code>8</code> | 
| VSCP_TYPE_DISPLAY_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_DISPLAY_CLEAR_DISPLAY | `number` | <code>1</code> | 
| VSCP_TYPE_DISPLAY_POSITION_CURSOR | `number` | <code>2</code> | 
| VSCP_TYPE_DISPLAY_WRITE_DISPLAY | `number` | <code>3</code> | 
| VSCP_TYPE_DISPLAY_WRITE_DISPLAY_BUFFER | `number` | <code>4</code> | 
| VSCP_TYPE_DISPLAY_SHOW_DISPLAY_BUFFER | `number` | <code>5</code> | 
| VSCP_TYPE_DISPLAY_SET_DISPLAY_BUFFER_PARAM | `number` | <code>6</code> | 
| VSCP_TYPE_DISPLAY_SHOW_TEXT | `number` | <code>32</code> | 
| VSCP_TYPE_DISPLAY_SHOW_LED | `number` | <code>48</code> | 
| VSCP_TYPE_DISPLAY_SHOW_LED_COLOR | `number` | <code>49</code> | 
| VSCP_TYPE_REMOTE_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_REMOTE_RC5 | `number` | <code>1</code> | 
| VSCP_TYPE_REMOTE_SONY12 | `number` | <code>3</code> | 
| VSCP_TYPE_REMOTE_LIRC | `number` | <code>32</code> | 
| VSCP_TYPE_REMOTE_VSCP | `number` | <code>48</code> | 
| VSCP_TYPE_REMOTE_MAPITO | `number` | <code>49</code> | 
| VSCP_TYPE_GNSS_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_GNSS_POSITION | `number` | <code>1</code> | 
| VSCP_TYPE_GNSS_SATELLITES | `number` | <code>2</code> | 
| VSCP_TYPE_WIRELESS_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_WIRELESS_GSM_CELL | `number` | <code>1</code> | 
| VSCP_TYPE_DIAGNOSTIC_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_DIAGNOSTIC_OVERVOLTAGE | `number` | <code>1</code> | 
| VSCP_TYPE_DIAGNOSTIC_UNDERVOLTAGE | `number` | <code>2</code> | 
| VSCP_TYPE_DIAGNOSTIC_VBUS_LOW | `number` | <code>3</code> | 
| VSCP_TYPE_DIAGNOSTIC_BATTERY_LOW | `number` | <code>4</code> | 
| VSCP_TYPE_DIAGNOSTIC_BATTERY_FULL | `number` | <code>5</code> | 
| VSCP_TYPE_DIAGNOSTIC_BATTERY_ERROR | `number` | <code>6</code> | 
| VSCP_TYPE_DIAGNOSTIC_BATTERY_OK | `number` | <code>7</code> | 
| VSCP_TYPE_DIAGNOSTIC_OVERCURRENT | `number` | <code>8</code> | 
| VSCP_TYPE_DIAGNOSTIC_CIRCUIT_ERROR | `number` | <code>9</code> | 
| VSCP_TYPE_DIAGNOSTIC_SHORT_CIRCUIT | `number` | <code>10</code> | 
| VSCP_TYPE_DIAGNOSTIC_OPEN_CIRCUIT | `number` | <code>11</code> | 
| VSCP_TYPE_DIAGNOSTIC_MOIST | `number` | <code>12</code> | 
| VSCP_TYPE_DIAGNOSTIC_WIRE_FAIL | `number` | <code>13</code> | 
| VSCP_TYPE_DIAGNOSTIC_WIRELESS_FAIL | `number` | <code>14</code> | 
| VSCP_TYPE_DIAGNOSTIC_IR_FAIL | `number` | <code>15</code> | 
| VSCP_TYPE_DIAGNOSTIC_1WIRE_FAIL | `number` | <code>16</code> | 
| VSCP_TYPE_DIAGNOSTIC_RS222_FAIL | `number` | <code>17</code> | 
| VSCP_TYPE_DIAGNOSTIC_RS232_FAIL | `number` | <code>18</code> | 
| VSCP_TYPE_DIAGNOSTIC_RS423_FAIL | `number` | <code>19</code> | 
| VSCP_TYPE_DIAGNOSTIC_RS485_FAIL | `number` | <code>20</code> | 
| VSCP_TYPE_DIAGNOSTIC_CAN_FAIL | `number` | <code>21</code> | 
| VSCP_TYPE_DIAGNOSTIC_LAN_FAIL | `number` | <code>22</code> | 
| VSCP_TYPE_DIAGNOSTIC_USB_FAIL | `number` | <code>23</code> | 
| VSCP_TYPE_DIAGNOSTIC_WIFI_FAIL | `number` | <code>24</code> | 
| VSCP_TYPE_DIAGNOSTIC_NFC_RFID_FAIL | `number` | <code>25</code> | 
| VSCP_TYPE_DIAGNOSTIC_LOW_SIGNAL | `number` | <code>26</code> | 
| VSCP_TYPE_DIAGNOSTIC_HIGH_SIGNAL | `number` | <code>27</code> | 
| VSCP_TYPE_DIAGNOSTIC_ADC_FAIL | `number` | <code>28</code> | 
| VSCP_TYPE_DIAGNOSTIC_ALU_FAIL | `number` | <code>29</code> | 
| VSCP_TYPE_DIAGNOSTIC_ASSERT | `number` | <code>30</code> | 
| VSCP_TYPE_DIAGNOSTIC_DAC_FAIL | `number` | <code>31</code> | 
| VSCP_TYPE_DIAGNOSTIC_DMA_FAIL | `number` | <code>32</code> | 
| VSCP_TYPE_DIAGNOSTIC_ETH_FAIL | `number` | <code>33</code> | 
| VSCP_TYPE_DIAGNOSTIC_EXCEPTION | `number` | <code>34</code> | 
| VSCP_TYPE_DIAGNOSTIC_FPU_FAIL | `number` | <code>35</code> | 
| VSCP_TYPE_DIAGNOSTIC_GPIO_FAIL | `number` | <code>36</code> | 
| VSCP_TYPE_DIAGNOSTIC_I2C_FAIL | `number` | <code>37</code> | 
| VSCP_TYPE_DIAGNOSTIC_I2S_FAIL | `number` | <code>38</code> | 
| VSCP_TYPE_DIAGNOSTIC_INVALID_CONFIG | `number` | <code>39</code> | 
| VSCP_TYPE_DIAGNOSTIC_MMU_FAIL | `number` | <code>40</code> | 
| VSCP_TYPE_DIAGNOSTIC_NMI | `number` | <code>41</code> | 
| VSCP_TYPE_DIAGNOSTIC_OVERHEAT | `number` | <code>42</code> | 
| VSCP_TYPE_DIAGNOSTIC_PLL_FAIL | `number` | <code>43</code> | 
| VSCP_TYPE_DIAGNOSTIC_POR_FAIL | `number` | <code>44</code> | 
| VSCP_TYPE_DIAGNOSTIC_PWM_FAIL | `number` | <code>45</code> | 
| VSCP_TYPE_DIAGNOSTIC_RAM_FAIL | `number` | <code>46</code> | 
| VSCP_TYPE_DIAGNOSTIC_ROM_FAIL | `number` | <code>47</code> | 
| VSCP_TYPE_DIAGNOSTIC_SPI_FAIL | `number` | <code>48</code> | 
| VSCP_TYPE_DIAGNOSTIC_STACK_FAIL | `number` | <code>49</code> | 
| VSCP_TYPE_DIAGNOSTIC_LIN_FAIL | `number` | <code>50</code> | 
| VSCP_TYPE_DIAGNOSTIC_UART_FAIL | `number` | <code>51</code> | 
| VSCP_TYPE_DIAGNOSTIC_UNHANDLED_INT | `number` | <code>52</code> | 
| VSCP_TYPE_DIAGNOSTIC_MEMORY_FAIL | `number` | <code>53</code> | 
| VSCP_TYPE_DIAGNOSTIC_VARIABLE_RANGE | `number` | <code>54</code> | 
| VSCP_TYPE_DIAGNOSTIC_WDT | `number` | <code>55</code> | 
| VSCP_TYPE_DIAGNOSTIC_EEPROM_FAIL | `number` | <code>56</code> | 
| VSCP_TYPE_DIAGNOSTIC_ENCRYPTION_FAIL | `number` | <code>57</code> | 
| VSCP_TYPE_DIAGNOSTIC_BAD_USER_INPUT | `number` | <code>58</code> | 
| VSCP_TYPE_DIAGNOSTIC_DECRYPTION_FAIL | `number` | <code>59</code> | 
| VSCP_TYPE_DIAGNOSTIC_NOISE | `number` | <code>60</code> | 
| VSCP_TYPE_DIAGNOSTIC_BOOTLOADER_FAIL | `number` | <code>61</code> | 
| VSCP_TYPE_DIAGNOSTIC_PROGRAMFLOW_FAIL | `number` | <code>62</code> | 
| VSCP_TYPE_DIAGNOSTIC_RTC_FAIL | `number` | <code>63</code> | 
| VSCP_TYPE_DIAGNOSTIC_SYSTEM_TEST_FAIL | `number` | <code>64</code> | 
| VSCP_TYPE_DIAGNOSTIC_SENSOR_FAIL | `number` | <code>65</code> | 
| VSCP_TYPE_DIAGNOSTIC_SAFESTATE | `number` | <code>66</code> | 
| VSCP_TYPE_DIAGNOSTIC_SIGNAL_IMPLAUSIBLE | `number` | <code>67</code> | 
| VSCP_TYPE_DIAGNOSTIC_STORAGE_FAIL | `number` | <code>68</code> | 
| VSCP_TYPE_DIAGNOSTIC_SELFTEST_FAIL | `number` | <code>69</code> | 
| VSCP_TYPE_DIAGNOSTIC_ESD_EMC_EMI | `number` | <code>70</code> | 
| VSCP_TYPE_DIAGNOSTIC_TIMEOUT | `number` | <code>71</code> | 
| VSCP_TYPE_DIAGNOSTIC_LCD_FAIL | `number` | <code>72</code> | 
| VSCP_TYPE_DIAGNOSTIC_TOUCHPANEL_FAIL | `number` | <code>73</code> | 
| VSCP_TYPE_DIAGNOSTIC_NOLOAD | `number` | <code>74</code> | 
| VSCP_TYPE_DIAGNOSTIC_COOLING_FAIL | `number` | <code>75</code> | 
| VSCP_TYPE_DIAGNOSTIC_HEATING_FAIL | `number` | <code>76</code> | 
| VSCP_TYPE_DIAGNOSTIC_TX_FAIL | `number` | <code>77</code> | 
| VSCP_TYPE_DIAGNOSTIC_RX_FAIL | `number` | <code>78</code> | 
| VSCP_TYPE_DIAGNOSTIC_EXT_IC_FAIL | `number` | <code>79</code> | 
| VSCP_TYPE_ERROR_SUCCESS | `number` | <code>0</code> | 
| VSCP_TYPE_ERROR_ERROR | `number` | <code>1</code> | 
| VSCP_TYPE_ERROR_CHANNEL | `number` | <code>7</code> | 
| VSCP_TYPE_ERROR_FIFO_EMPTY | `number` | <code>8</code> | 
| VSCP_TYPE_ERROR_FIFO_FULL | `number` | <code>9</code> | 
| VSCP_TYPE_ERROR_FIFO_SIZE | `number` | <code>10</code> | 
| VSCP_TYPE_ERROR_FIFO_WAIT | `number` | <code>11</code> | 
| VSCP_TYPE_ERROR_GENERIC | `number` | <code>12</code> | 
| VSCP_TYPE_ERROR_HARDWARE | `number` | <code>13</code> | 
| VSCP_TYPE_ERROR_INIT_FAIL | `number` | <code>14</code> | 
| VSCP_TYPE_ERROR_INIT_MISSING | `number` | <code>15</code> | 
| VSCP_TYPE_ERROR_INIT_READY | `number` | <code>16</code> | 
| VSCP_TYPE_ERROR_NOT_SUPPORTED | `number` | <code>17</code> | 
| VSCP_TYPE_ERROR_OVERRUN | `number` | <code>18</code> | 
| VSCP_TYPE_ERROR_RCV_EMPTY | `number` | <code>19</code> | 
| VSCP_TYPE_ERROR_REGISTER | `number` | <code>20</code> | 
| VSCP_TYPE_ERROR_TRM_FULL | `number` | <code>21</code> | 
| VSCP_TYPE_ERROR_LIBRARY | `number` | <code>28</code> | 
| VSCP_TYPE_ERROR_PROCADDRESS | `number` | <code>29</code> | 
| VSCP_TYPE_ERROR_ONLY_ONE_INSTANCE | `number` | <code>30</code> | 
| VSCP_TYPE_ERROR_SUB_DRIVER | `number` | <code>31</code> | 
| VSCP_TYPE_ERROR_TIMEOUT | `number` | <code>32</code> | 
| VSCP_TYPE_ERROR_NOT_OPEN | `number` | <code>33</code> | 
| VSCP_TYPE_ERROR_PARAMETER | `number` | <code>34</code> | 
| VSCP_TYPE_ERROR_MEMORY | `number` | <code>35</code> | 
| VSCP_TYPE_ERROR_INTERNAL | `number` | <code>36</code> | 
| VSCP_TYPE_ERROR_COMMUNICATION | `number` | <code>37</code> | 
| VSCP_TYPE_ERROR_USER | `number` | <code>38</code> | 
| VSCP_TYPE_ERROR_PASSWORD | `number` | <code>39</code> | 
| VSCP_TYPE_ERROR_CONNECTION | `number` | <code>40</code> | 
| VSCP_TYPE_ERROR_INVALID_HANDLE | `number` | <code>41</code> | 
| VSCP_TYPE_ERROR_OPERATION_FAILED | `number` | <code>42</code> | 
| VSCP_TYPE_ERROR_BUFFER_SMALL | `number` | <code>43</code> | 
| VSCP_TYPE_ERROR_ITEM_UNKNOWN | `number` | <code>44</code> | 
| VSCP_TYPE_ERROR_NAME_USED | `number` | <code>45</code> | 
| VSCP_TYPE_LOG_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_LOG_MESSAGE | `number` | <code>1</code> | 
| VSCP_TYPE_LOG_START | `number` | <code>2</code> | 
| VSCP_TYPE_LOG_STOP | `number` | <code>3</code> | 
| VSCP_TYPE_LOG_LEVEL | `number` | <code>4</code> | 
| VSCP_TYPE_LABORATORY_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_LOCAL_GENERAL | `number` | <code>0</code> | 
| VSCP2_TYPE_PROTOCOL_GENERAL | `number` | <code>0</code> | 
| VSCP2_TYPE_PROTOCOL_READ_REGISTER | `number` | <code>1</code> | 
| VSCP2_TYPE_PROTOCOL_WRITE_REGISTER | `number` | <code>2</code> | 
| VSCP2_TYPE_PROTOCOL_READ_WRITE_RESPONSE | `number` | <code>3</code> | 
| VSCP2_TYPE_PROTOCOL_HIGH_END_SERVER_CAPS | `number` | <code>20</code> | 
| VSCP2_TYPE_PROTOCOL_WHO_IS_THERE_RESPONSE | `number` | <code>32</code> | 
| VSCP2_TYPE_CONTROL_GENERAL | `number` | <code>0</code> | 
| VSCP2_TYPE_INFORMATION_GENERAL | `number` | <code>0</code> | 
| VSCP2_TYPE_INFORMATION_TOKEN_ACTIVITY | `number` | <code>1</code> | 
| VSCP2_TYPE_INFORMATION_HEART_BEAT | `number` | <code>2</code> | 
| VSCP2_TYPE_INFORMATION_PROXY_HEART_BEAT | `number` | <code>3</code> | 
| VSCP2_TYPE_INFORMATION_CHANNEL_ANNOUNCE | `number` | <code>4</code> | 
| VSCP2_TYPE_TEXT2SPEECH_GENERAL | `number` | <code>0</code> | 
| VSCP2_TYPE_TEXT2SPEECH_TALK | `number` | <code>1</code> | 
| VSCP2_TYPE_CUSTOM_GENERAL | `number` | <code>0</code> | 
| VSCP2_TYPE_DISPLAY_GENERAL | `number` | <code>0</code> | 
| VSCP2_TYPE_VSCPD_GENERAL | `number` | <code>0</code> | 
| VSCP2_TYPE_VSCPD_LOOP | `number` | <code>1</code> | 
| VSCP2_TYPE_VSCPD_PAUSE | `number` | <code>3</code> | 
| VSCP2_TYPE_VSCPD_ACTIVATE | `number` | <code>4</code> | 
| VSCP2_TYPE_VSCPD_SECOND | `number` | <code>5</code> | 
| VSCP2_TYPE_VSCPD_MINUTE | `number` | <code>6</code> | 
| VSCP2_TYPE_VSCPD_HOUR | `number` | <code>7</code> | 
| VSCP2_TYPE_VSCPD_NOON | `number` | <code>8</code> | 
| VSCP2_TYPE_VSCPD_MIDNIGHT | `number` | <code>9</code> | 
| VSCP2_TYPE_VSCPD_WEEK | `number` | <code>11</code> | 
| VSCP2_TYPE_VSCPD_MONTH | `number` | <code>12</code> | 
| VSCP2_TYPE_VSCPD_QUARTER | `number` | <code>13</code> | 
| VSCP2_TYPE_VSCPD_YEAR | `number` | <code>14</code> | 
| VSCP2_TYPE_VSCPD_RANDOM_MINUTE | `number` | <code>15</code> | 
| VSCP2_TYPE_VSCPD_RANDOM_HOUR | `number` | <code>16</code> | 
| VSCP2_TYPE_VSCPD_RANDOM_DAY | `number` | <code>17</code> | 
| VSCP2_TYPE_VSCPD_RANDOM_WEEK | `number` | <code>18</code> | 
| VSCP2_TYPE_VSCPD_RANDOM_MONTH | `number` | <code>19</code> | 
| VSCP2_TYPE_VSCPD_RANDOM_YEAR | `number` | <code>20</code> | 
| VSCP2_TYPE_VSCPD_DUSK | `number` | <code>21</code> | 
| VSCP2_TYPE_VSCPD_DAWN | `number` | <code>22</code> | 
| VSCP2_TYPE_VSCPD_STARTING_UP | `number` | <code>23</code> | 
| VSCP2_TYPE_VSCPD_SHUTTING_DOWN | `number` | <code>24</code> | 
| VSCP2_TYPE_VSCPD_TIMER_STARTED | `number` | <code>25</code> | 
| VSCP2_TYPE_VSCPD_TIMER_PAUSED | `number` | <code>26</code> | 
| VSCP2_TYPE_VSCPD_TIMER_RESUMED | `number` | <code>27</code> | 
| VSCP2_TYPE_VSCPD_TIMER_STOPPED | `number` | <code>28</code> | 
| VSCP2_TYPE_VSCPD_TIMER_ELLAPSED | `number` | <code>29</code> | 
| VSCP2_TYPE_VSCPD_NEW_CALCULATION | `number` | <code>30</code> | 

<a id="vscp_dot_constants_dot_priorities"></a>

#### constants.priorities : `enum`
VSCP class priorities

**Kind**: static enum of [`constants`](#vscp.constants)  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| PRIORITY_0_HIGH | `number` | <code>0</code> | 
| PRIORITY_1 | `number` | <code>1</code> | 
| PRIORITY_2 | `number` | <code>2</code> | 
| PRIORITY_3_NORMAL | `number` | <code>3</code> | 
| PRIORITY_4 | `number` | <code>4</code> | 
| PRIORITY_5 | `number` | <code>5</code> | 
| PRIORITY_6 | `number` | <code>6</code> | 
| PRIORITY_7_LOW | `number` | <code>7</code> | 

<a id="vscp_dot_constants_dot_varTypes"></a>

#### constants.varTypes : `enum`
VSCP variable types

**Kind**: static enum of [`constants`](#vscp.constants)  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| UNASSIGNED | `number` | <code>0</code> | 
| STRING | `number` | <code>1</code> | 
| BOOLEAN | `number` | <code>2</code> | 
| INTEGER | `number` | <code>3</code> | 
| LONG | `number` | <code>4</code> | 
| DOUBLE | `number` | <code>5</code> | 
| MEASUREMENT | `number` | <code>6</code> | 
| EVENT | `number` | <code>7</code> | 
| GUID | `number` | <code>8</code> | 
| EVENT_DATA | `number` | <code>9</code> | 
| EVENT_CLASS | `number` | <code>10</code> | 
| EVENT_TYPE | `number` | <code>11</code> | 
| EVENT_TIMESTAMP | `number` | <code>12</code> | 
| DATE_TIME | `number` | <code>13</code> | 
| DATE | `number` | <code>14</code> | 
| TIME | `number` | <code>15</code> | 
| BLOB | `number` | <code>16</code> | 
| MIME | `number` | <code>100</code> | 
| HTML | `number` | <code>101</code> | 
| JAVASCIPT | `number` | <code>102</code> | 
| JSON | `number` | <code>103</code> | 
| XML | `number` | <code>104</code> | 
| SQL | `number` | <code>105</code> | 
| LUA | `number` | <code>201</code> | 
| LUARES | `number` | <code>202</code> | 
| UXTYPE1 | `number` | <code>300</code> | 
| DMROW | `number` | <code>500</code> | 
| DRIVER | `number` | <code>501</code> | 
| USER | `number` | <code>502</code> | 
| FILTER | `number` | <code>503</code> | 

<a id="vscp_dot_constants_dot_varTypeNames"></a>

#### constants.varTypeNames
VSCP variable type names as string. Use to fill drop down boxes and similar.

**Kind**: static constant of [`constants`](#vscp.constants)  
<a id="vscp_dot_utility"></a>

### vscp.utility : `object`
Utility functions

**Kind**: static namespace of [`vscp`](#vscp)  

* [.utility](#vscp_dot_utility) : `object`
    * [.readValue(input)](#vscp_dot_utility_dot_readValue) ⇒ `number`
    * [.getTime()](#vscp_dot_utility_dot_getTime) ⇒ `string`
    * [.guidToStr(guid)](#vscp_dot_utility_dot_guidToStr) ⇒ `string`
    * [.strToGuid(guid)](#vscp_dot_utility_dot_strToGuid) ⇒ `Array.&lt;number&gt;`
    * [.getNodeId(guid)](#vscp_dot_utility_dot_getNodeId) ⇒ `number`

<a id="vscp_dot_utility_dot_readValue"></a>

#### utility.readValue(input) ⇒ `number`
Read a hex or decimal value and return as an integer.

**Kind**: static method of [`utility`](#vscp.utility)  
**Returns**: `number` - Value  

| Param | Type | Description |
| --- | --- | --- |
| input | `string` | Hex or decimal value as string |

<a id="vscp_dot_utility_dot_getTime"></a>

#### utility.getTime() ⇒ `string`
Utility function which returns the current time in the following format: hh:mm:ss.us

**Kind**: static method of [`utility`](#vscp.utility)  
**Returns**: `string` - Current time in the format hh:mm:ss.us  
<a id="vscp_dot_utility_dot_guidToStr"></a>

#### utility.guidToStr(guid) ⇒ `string`
Converts a GUID number array to a GUID string.

**Kind**: static method of [`utility`](#vscp.utility)  
**Returns**: `string` - GUID string, e.g. 00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00  

| Param | Type | Description |
| --- | --- | --- |
| guid | `Array.&lt;number&gt;` | GUID number array |

<a id="vscp_dot_utility_dot_strToGuid"></a>

#### utility.strToGuid(guid) ⇒ `Array.&lt;number&gt;`
Converts a GUID string to a GUID number array.

**Kind**: static method of [`utility`](#vscp.utility)  
**Returns**: `Array.&lt;number&gt;` - GUID number array  

| Param | Type | Description |
| --- | --- | --- |
| guid | `string` | GUID string, e.g. 00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00 |

<a id="vscp_dot_utility_dot_getNodeId"></a>

#### utility.getNodeId(guid) ⇒ `number`
Get node id from a node GUID string.

**Kind**: static method of [`utility`](#vscp.utility)  
**Returns**: `number` - Node id  

| Param | Type | Description |
| --- | --- | --- |
| guid | `string` | GUID string, e.g. 00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00 |

<a id="vscp_dot_mdf"></a>

### vscp.mdf : `object`
VSCP module description file handling functionality

**Kind**: static namespace of [`vscp`](#vscp)  

* [.mdf](#vscp_dot_mdf) : `object`
    * [.Register](#vscp_dot_mdf_dot_Register)
        * [new vscp.mdf.Register()](#new_vscp_dot_mdf_dot_Register_new)
        * [.name](#vscp_dot_mdf_dot_Register_plus_name) : `string`
        * [.description](#vscp_dot_mdf_dot_Register_plus_description) : `string`
        * [.readAccess](#vscp_dot_mdf_dot_Register_plus_readAccess) : `boolean`
        * [.writeAccess](#vscp_dot_mdf_dot_Register_plus_writeAccess) : `boolean`
        * [.page](#vscp_dot_mdf_dot_Register_plus_page) : `number`
        * [.offset](#vscp_dot_mdf_dot_Register_plus_offset) : `number`
        * [.value](#vscp_dot_mdf_dot_Register_plus_value) : `number`
        * [.dirty](#vscp_dot_mdf_dot_Register_plus_dirty) : `number`
        * [.userData](#vscp_dot_mdf_dot_Register_plus_userData) : `object`
        * [.setValue(value)](#vscp_dot_mdf_dot_Register_plus_setValue)
    * [.Abstraction](#vscp_dot_mdf_dot_Abstraction)
        * [new vscp.mdf.Abstraction()](#new_vscp_dot_mdf_dot_Abstraction_new)
        * [.name](#vscp_dot_mdf_dot_Abstraction_plus_name) : `string`
        * [.description](#vscp_dot_mdf_dot_Abstraction_plus_description) : `string`
        * [.readAccess](#vscp_dot_mdf_dot_Abstraction_plus_readAccess) : `boolean`
        * [.writeAccess](#vscp_dot_mdf_dot_Abstraction_plus_writeAccess) : `boolean`
        * [.id](#vscp_dot_mdf_dot_Abstraction_plus_id) : `string`
        * [.page](#vscp_dot_mdf_dot_Abstraction_plus_page) : `number`
        * [.offset](#vscp_dot_mdf_dot_Abstraction_plus_offset) : `number`
        * [.value](#vscp_dot_mdf_dot_Abstraction_plus_value) : `number`
        * [.type](#vscp_dot_mdf_dot_Abstraction_plus_type) : `string`
        * [.defValue](#vscp_dot_mdf_dot_Abstraction_plus_defValue) : `number`
        * [.dirty](#vscp_dot_mdf_dot_Abstraction_plus_dirty) : `number`
        * [.userData](#vscp_dot_mdf_dot_Abstraction_plus_userData) : `object`
        * [.setValue(value)](#vscp_dot_mdf_dot_Abstraction_plus_setValue)
    * [.constants](#vscp_dot_mdf_dot_constants) : `object`
        * [.TYPE_SIZES](#vscp_dot_mdf_dot_constants_dot_TYPE_SIZES) : `enum`
        * [.CONVERSION_FROM_DECIMAL](#vscp_dot_mdf_dot_constants_dot_CONVERSION_FROM_DECIMAL)
        * [.CONVERSION_TO_DECIMAL](#vscp_dot_mdf_dot_constants_dot_CONVERSION_TO_DECIMAL)
        * [.RANGE](#vscp_dot_mdf_dot_constants_dot_RANGE)
    * [.timeout](#vscp_dot_mdf_dot_timeout) : `number`
    * [.load(options)](#vscp_dot_mdf_dot_load)
    * [.loadLocal(options)](#vscp_dot_mdf_dot_loadLocal)
    * [.readAbstractValue(options)](#vscp_dot_mdf_dot_readAbstractValue)
    * [.writeAbstractValue(options)](#vscp_dot_mdf_dot_writeAbstractValue)
    * [.writeAbstractBits(options)](#vscp_dot_mdf_dot_writeAbstractBits)
    * [.getRegisters(options)](#vscp_dot_mdf_dot_getRegisters) ⇒ [`Array.&lt;Register&gt;`](#vscp.mdf.Register)
    * [.getAbstractions(options)](#vscp_dot_mdf_dot_getAbstractions) ⇒ [`Array.&lt;Abstraction&gt;`](#vscp.mdf.Abstraction)

<a id="vscp_dot_mdf_dot_Register"></a>

#### mdf.Register
**Kind**: static class of [`mdf`](#vscp.mdf)  

* [.Register](#vscp_dot_mdf_dot_Register)
    * [new vscp.mdf.Register()](#new_vscp_dot_mdf_dot_Register_new)
    * [.name](#vscp_dot_mdf_dot_Register_plus_name) : `string`
    * [.description](#vscp_dot_mdf_dot_Register_plus_description) : `string`
    * [.readAccess](#vscp_dot_mdf_dot_Register_plus_readAccess) : `boolean`
    * [.writeAccess](#vscp_dot_mdf_dot_Register_plus_writeAccess) : `boolean`
    * [.page](#vscp_dot_mdf_dot_Register_plus_page) : `number`
    * [.offset](#vscp_dot_mdf_dot_Register_plus_offset) : `number`
    * [.value](#vscp_dot_mdf_dot_Register_plus_value) : `number`
    * [.dirty](#vscp_dot_mdf_dot_Register_plus_dirty) : `number`
    * [.userData](#vscp_dot_mdf_dot_Register_plus_userData) : `object`
    * [.setValue(value)](#vscp_dot_mdf_dot_Register_plus_setValue)

<a id="new_vscp_dot_mdf_dot_Register_new"></a>

##### new vscp.mdf.Register()
MDF register with all parameters.

<a id="vscp_dot_mdf_dot_Register_plus_name"></a>

##### register.name : `string`
Register name

**Kind**: instance property of [`Register`](#vscp.mdf.Register)  
<a id="vscp_dot_mdf_dot_Register_plus_description"></a>

##### register.description : `string`
Register description

**Kind**: instance property of [`Register`](#vscp.mdf.Register)  
<a id="vscp_dot_mdf_dot_Register_plus_readAccess"></a>

##### register.readAccess : `boolean`
Read access to the register allowed or not

**Kind**: instance property of [`Register`](#vscp.mdf.Register)  
<a id="vscp_dot_mdf_dot_Register_plus_writeAccess"></a>

##### register.writeAccess : `boolean`
Write access to the register allowed or not

**Kind**: instance property of [`Register`](#vscp.mdf.Register)  
<a id="vscp_dot_mdf_dot_Register_plus_page"></a>

##### register.page : `number`
Page where the register is located

**Kind**: instance property of [`Register`](#vscp.mdf.Register)  
<a id="vscp_dot_mdf_dot_Register_plus_offset"></a>

##### register.offset : `number`
Offset where the register is located on the page

**Kind**: instance property of [`Register`](#vscp.mdf.Register)  
<a id="vscp_dot_mdf_dot_Register_plus_value"></a>

##### register.value : `number`
Register value

**Kind**: instance property of [`Register`](#vscp.mdf.Register)  
<a id="vscp_dot_mdf_dot_Register_plus_dirty"></a>

##### register.dirty : `number`
Marks the register value dirty, which means the user changed it.
It can be used to detect which registers have to be written to the node.

**Kind**: instance property of [`Register`](#vscp.mdf.Register)  
<a id="vscp_dot_mdf_dot_Register_plus_userData"></a>

##### register.userData : `object`
User specific data

**Kind**: instance property of [`Register`](#vscp.mdf.Register)  
<a id="vscp_dot_mdf_dot_Register_plus_setValue"></a>

##### register.setValue(value)
This function set a register value and marks it dirty.

**Kind**: instance method of [`Register`](#vscp.mdf.Register)  

| Param | Type | Description |
| --- | --- | --- |
| value | `number` | New value |

<a id="vscp_dot_mdf_dot_Abstraction"></a>

#### mdf.Abstraction
**Kind**: static class of [`mdf`](#vscp.mdf)  

* [.Abstraction](#vscp_dot_mdf_dot_Abstraction)
    * [new vscp.mdf.Abstraction()](#new_vscp_dot_mdf_dot_Abstraction_new)
    * [.name](#vscp_dot_mdf_dot_Abstraction_plus_name) : `string`
    * [.description](#vscp_dot_mdf_dot_Abstraction_plus_description) : `string`
    * [.readAccess](#vscp_dot_mdf_dot_Abstraction_plus_readAccess) : `boolean`
    * [.writeAccess](#vscp_dot_mdf_dot_Abstraction_plus_writeAccess) : `boolean`
    * [.id](#vscp_dot_mdf_dot_Abstraction_plus_id) : `string`
    * [.page](#vscp_dot_mdf_dot_Abstraction_plus_page) : `number`
    * [.offset](#vscp_dot_mdf_dot_Abstraction_plus_offset) : `number`
    * [.value](#vscp_dot_mdf_dot_Abstraction_plus_value) : `number`
    * [.type](#vscp_dot_mdf_dot_Abstraction_plus_type) : `string`
    * [.defValue](#vscp_dot_mdf_dot_Abstraction_plus_defValue) : `number`
    * [.dirty](#vscp_dot_mdf_dot_Abstraction_plus_dirty) : `number`
    * [.userData](#vscp_dot_mdf_dot_Abstraction_plus_userData) : `object`
    * [.setValue(value)](#vscp_dot_mdf_dot_Abstraction_plus_setValue)

<a id="new_vscp_dot_mdf_dot_Abstraction_new"></a>

##### new vscp.mdf.Abstraction()
MDF abstraction with all parameters.

<a id="vscp_dot_mdf_dot_Abstraction_plus_name"></a>

##### abstraction.name : `string`
Abstraction name

**Kind**: instance property of [`Abstraction`](#vscp.mdf.Abstraction)  
<a id="vscp_dot_mdf_dot_Abstraction_plus_description"></a>

##### abstraction.description : `string`
Abstraction description

**Kind**: instance property of [`Abstraction`](#vscp.mdf.Abstraction)  
<a id="vscp_dot_mdf_dot_Abstraction_plus_readAccess"></a>

##### abstraction.readAccess : `boolean`
Read access to the abstraction allowed or not

**Kind**: instance property of [`Abstraction`](#vscp.mdf.Abstraction)  
<a id="vscp_dot_mdf_dot_Abstraction_plus_writeAccess"></a>

##### abstraction.writeAccess : `boolean`
Write access to the abstraction allowed or not

**Kind**: instance property of [`Abstraction`](#vscp.mdf.Abstraction)  
<a id="vscp_dot_mdf_dot_Abstraction_plus_id"></a>

##### abstraction.id : `string`
Abstraction id

**Kind**: instance property of [`Abstraction`](#vscp.mdf.Abstraction)  
<a id="vscp_dot_mdf_dot_Abstraction_plus_page"></a>

##### abstraction.page : `number`
Page where the abstraction is located

**Kind**: instance property of [`Abstraction`](#vscp.mdf.Abstraction)  
<a id="vscp_dot_mdf_dot_Abstraction_plus_offset"></a>

##### abstraction.offset : `number`
Offset where the abstraction is located

**Kind**: instance property of [`Abstraction`](#vscp.mdf.Abstraction)  
<a id="vscp_dot_mdf_dot_Abstraction_plus_value"></a>

##### abstraction.value : `number`
Abstraction value

**Kind**: instance property of [`Abstraction`](#vscp.mdf.Abstraction)  
<a id="vscp_dot_mdf_dot_Abstraction_plus_type"></a>

##### abstraction.type : `string`
Abstraction type

**Kind**: instance property of [`Abstraction`](#vscp.mdf.Abstraction)  
<a id="vscp_dot_mdf_dot_Abstraction_plus_defValue"></a>

##### abstraction.defValue : `number`
Abstraction default value

**Kind**: instance property of [`Abstraction`](#vscp.mdf.Abstraction)  
<a id="vscp_dot_mdf_dot_Abstraction_plus_dirty"></a>

##### abstraction.dirty : `number`
Marks the abstraction value dirty, which means the user changed it.
It can be used to detect which abstractions have to be written to the node.

**Kind**: instance property of [`Abstraction`](#vscp.mdf.Abstraction)  
<a id="vscp_dot_mdf_dot_Abstraction_plus_userData"></a>

##### abstraction.userData : `object`
User specific data

**Kind**: instance property of [`Abstraction`](#vscp.mdf.Abstraction)  
<a id="vscp_dot_mdf_dot_Abstraction_plus_setValue"></a>

##### abstraction.setValue(value)
This function set a abstraction value and marks it dirty.

**Kind**: instance method of [`Abstraction`](#vscp.mdf.Abstraction)  

| Param | Type | Description |
| --- | --- | --- |
| value | `number` | New value |

<a id="vscp_dot_mdf_dot_constants"></a>

#### mdf.constants : `object`
MDF specific constants

**Kind**: static namespace of [`mdf`](#vscp.mdf)  

* [.constants](#vscp_dot_mdf_dot_constants) : `object`
    * [.TYPE_SIZES](#vscp_dot_mdf_dot_constants_dot_TYPE_SIZES) : `enum`
    * [.CONVERSION_FROM_DECIMAL](#vscp_dot_mdf_dot_constants_dot_CONVERSION_FROM_DECIMAL)
    * [.CONVERSION_TO_DECIMAL](#vscp_dot_mdf_dot_constants_dot_CONVERSION_TO_DECIMAL)
    * [.RANGE](#vscp_dot_mdf_dot_constants_dot_RANGE)

<a id="vscp_dot_mdf_dot_constants_dot_TYPE_SIZES"></a>

##### constants.TYPE_SIZES : `enum`
MDF type sizes in bytes

**Kind**: static enum of [`constants`](#vscp.mdf.constants)  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| string | `number` | <code>0</code> | 
| bitfield | `number` | <code>1</code> | 
| bool | `number` | <code>1</code> | 
| int8_t | `number` | <code>1</code> | 
| uint8_t | `number` | <code>1</code> | 
| int16_t | `number` | <code>2</code> | 
| uint16_t | `number` | <code>2</code> | 
| int32_t | `number` | <code>4</code> | 
| uint32_t | `number` | <code>4</code> | 
| int64_t | `number` | <code>8</code> | 
| uint64_t | `number` | <code>8</code> | 
| float | `number` | <code>4</code> | 
| double | `number` | <code>8</code> | 
| date | `number` | <code>4</code> | 
| time | `number` | <code>4</code> | 
| guid | `number` | <code>16</code> | 
| char | `number` | <code>1</code> | 
| byte | `number` | <code>1</code> | 
| short | `number` | <code>2</code> | 
| integer | `number` | <code>2</code> | 
| long | `number` | <code>4</code> | 

<a id="vscp_dot_mdf_dot_constants_dot_CONVERSION_FROM_DECIMAL"></a>

##### constants.CONVERSION_FROM_DECIMAL
Conversion functions from decimal

**Kind**: static constant of [`constants`](#vscp.mdf.constants)  
<a id="vscp_dot_mdf_dot_constants_dot_CONVERSION_TO_DECIMAL"></a>

##### constants.CONVERSION_TO_DECIMAL
Conversion functions to decimal

**Kind**: static constant of [`constants`](#vscp.mdf.constants)  
<a id="vscp_dot_mdf_dot_constants_dot_RANGE"></a>

##### constants.RANGE
Type ranges

**Kind**: static constant of [`constants`](#vscp.mdf.constants)  
<a id="vscp_dot_mdf_dot_timeout"></a>

#### mdf.timeout : `number`
VSCP response timeout in ms

**Kind**: static constant of [`mdf`](#vscp.mdf)  
<a id="vscp_dot_mdf_dot_load"></a>

#### mdf.load(options)
Get the MDF as xml document from a URL.

**Kind**: static method of [`mdf`](#vscp.mdf)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.url | `function` | URL to MDF file |
| options.onSuccess | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_mdf_dot_loadLocal"></a>

#### mdf.loadLocal(options)
Get the MDF as xml document from local file system.

**Kind**: static method of [`mdf`](#vscp.mdf)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.fileRef | `function` | File reference to MDF file |
| options.onSuccess | `function` | If the xml file is successful loaded, this function will be called. |
| [options.onError] | `function` | If loading the xml file failed, this function will be called. |

<a id="vscp_dot_mdf_dot_readAbstractValue"></a>

#### mdf.readAbstractValue(options)
Read a abstract value.

**Kind**: static method of [`mdf`](#vscp.mdf)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.mdf | `object` | MDF as xml jquery object |
| options.id | `number` | Abstract value id |
| options.onSuccess | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_mdf_dot_writeAbstractValue"></a>

#### mdf.writeAbstractValue(options)
Write a abstract value.

**Kind**: static method of [`mdf`](#vscp.mdf)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.mdf | `object` | MDF as xml jquery object |
| options.id | `number` | Abstract value id |
| options.value | `string` | Abstract value |
| options.onSuccess | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_mdf_dot_writeAbstractBits"></a>

#### mdf.writeAbstractBits(options)
Change some bits in a abstract value.

**Kind**: static method of [`mdf`](#vscp.mdf)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.mdf | `object` | MDF as xml jquery object |
| options.id | `number` | Abstract value id |
| options.pos | `number` | Bit position |
| options.width | `number` | Bit width |
| options.value | `string` | Abstract value |
| options.onSuccess | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_mdf_dot_getRegisters"></a>

#### mdf.getRegisters(options) ⇒ [`Array.&lt;Register&gt;`](#vscp.mdf.Register)
This function retrieves all register informations from a mdf.

**Kind**: static method of [`mdf`](#vscp.mdf)  
**Returns**: [`Array.&lt;Register&gt;`](#vscp.mdf.Register) - Array of MDF registers  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.mdf | `object` | MDF as jquery object |

<a id="vscp_dot_mdf_dot_getAbstractions"></a>

#### mdf.getAbstractions(options) ⇒ [`Array.&lt;Abstraction&gt;`](#vscp.mdf.Abstraction)
This function retrieves all abstraction informations from a mdf.

**Kind**: static method of [`mdf`](#vscp.mdf)  
**Returns**: [`Array.&lt;Abstraction&gt;`](#vscp.mdf.Abstraction) - Array of MDF abstractions  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.mdf | `object` | MDF as jquery object |

<a id="vscp_dot_measurement"></a>

### vscp.measurement : `object`
VSCP measurement stuff

**Kind**: static namespace of [`vscp`](#vscp)  

* [.measurement](#vscp_dot_measurement) : `object`
    * [.Decoder](#vscp_dot_measurement_dot_Decoder)
        * [new vscp.measurement.Decoder(options)](#new_vscp_dot_measurement_dot_Decoder_new)
        * [.client](#vscp_dot_measurement_dot_Decoder_plus_client) : [`Client`](#vscp.ws.Client)
        * [.onValue](#vscp_dot_measurement_dot_Decoder_plus_onValue) : `function`
        * [.filter](#vscp_dot_measurement_dot_Decoder_plus_filter) : `object`
    * [.constants](#vscp_dot_measurement_dot_constants) : `object`
        * [.units](#vscp_dot_measurement_dot_constants_dot_units) : `Array.&lt;string&gt;`
    * [.timeout](#vscp_dot_measurement_dot_timeout) : `number`
    * [.toFixed(value, precision)](#vscp_dot_measurement_dot_toFixed) ⇒ `number`
    * [.varInteger2Float(data)](#vscp_dot_measurement_dot_varInteger2Float) ⇒ `number`
    * [.getDataCoding(data)](#vscp_dot_measurement_dot_getDataCoding) ⇒ `number`
    * [.getUnitFromDataCoding(data)](#vscp_dot_measurement_dot_getUnitFromDataCoding) ⇒ `number`
    * [.getSensorIndexFromDataCoding(data)](#vscp_dot_measurement_dot_getSensorIndexFromDataCoding) ⇒ `number`
    * [.decodeClass10(data)](#vscp_dot_measurement_dot_decodeClass10) ⇒ `number`
    * [.decodeClass60Number(data)](#vscp_dot_measurement_dot_decodeClass60Number) ⇒ `number`
    * [.decodeClass65Number(data)](#vscp_dot_measurement_dot_decodeClass65Number) ⇒ `number`
    * [.convertFahrenheitToKelvin(value)](#vscp_dot_measurement_dot_convertFahrenheitToKelvin) ⇒ `number`
    * [.convertFahrenheitToCelsius(value)](#vscp_dot_measurement_dot_convertFahrenheitToCelsius) ⇒ `number`
    * [.convertCelsiusToFahrenheit(value)](#vscp_dot_measurement_dot_convertCelsiusToFahrenheit) ⇒ `number`
    * [.convertKelvinToCelsius(value)](#vscp_dot_measurement_dot_convertKelvinToCelsius) ⇒ `number`
    * [.convertCelsiusToKelvin(value)](#vscp_dot_measurement_dot_convertCelsiusToKelvin) ⇒ `number`
    * [.convertKelvinToFahrenheit(value)](#vscp_dot_measurement_dot_convertKelvinToFahrenheit) ⇒ `number`
    * [.convertMeterToFeet(value)](#vscp_dot_measurement_dot_convertMeterToFeet) ⇒ `number`
    * [.convertFeetToMeter(value)](#vscp_dot_measurement_dot_convertFeetToMeter) ⇒ `number`
    * [.convertMeterToInch(value)](#vscp_dot_measurement_dot_convertMeterToInch) ⇒ `number`
    * [.convertInchToMeter(value)](#vscp_dot_measurement_dot_convertInchToMeter) ⇒ `number`

<a id="vscp_dot_measurement_dot_Decoder"></a>

#### measurement.Decoder
**Kind**: static class of [`measurement`](#vscp.measurement)  

* [.Decoder](#vscp_dot_measurement_dot_Decoder)
    * [new vscp.measurement.Decoder(options)](#new_vscp_dot_measurement_dot_Decoder_new)
    * [.client](#vscp_dot_measurement_dot_Decoder_plus_client) : [`Client`](#vscp.ws.Client)
    * [.onValue](#vscp_dot_measurement_dot_Decoder_plus_onValue) : `function`
    * [.filter](#vscp_dot_measurement_dot_Decoder_plus_filter) : `object`

<a id="new_vscp_dot_measurement_dot_Decoder_new"></a>

##### new vscp.measurement.Decoder(options)
Measurement decoder


| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.onValue | `function` | Function which will be called for every received measurement value. |
| options.filter | `object` | Filter |
| options.filter.vscpGuid | `string` | Node GUID string |
| options.filter.vscpClass | `number` | VSCP class |
| options.filter.vscpType | `number` | VSCP type |
| options.filter.sensorIndex | `number` | Sensor index |
| options.filter.zone | `number` | Zone |
| options.filter.subZone | `number` | Sub-zone |

<a id="vscp_dot_measurement_dot_Decoder_plus_client"></a>

##### decoder.client : [`Client`](#vscp.ws.Client)
VSCP websocket client

**Kind**: instance property of [`Decoder`](#vscp.measurement.Decoder)  
<a id="vscp_dot_measurement_dot_Decoder_plus_onValue"></a>

##### decoder.onValue : `function`
Callback which will be called for every received value.

**Kind**: instance property of [`Decoder`](#vscp.measurement.Decoder)  
<a id="vscp_dot_measurement_dot_Decoder_plus_filter"></a>

##### decoder.filter : `object`
Filter

**Kind**: instance property of [`Decoder`](#vscp.measurement.Decoder)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| vscpGuid | `string` | Node GUID string |
| vscpClass | `number` | VSCP class |
| vscpType | `number` | VSCP type |
| datetime | `date` | datetime |
| sensorIndex | `number` | Sensor index |
| zone | `number` | Zone |
| subZone | `number` | Sub-zone |

<a id="vscp_dot_measurement_dot_constants"></a>

#### measurement.constants : `object`
Measurement specific constants

**Kind**: static namespace of [`measurement`](#vscp.measurement)  
<a id="vscp_dot_measurement_dot_constants_dot_units"></a>

##### constants.units : `Array.&lt;string&gt;`
VSCP units

**Kind**: static property of [`constants`](#vscp.measurement.constants)  
<a id="vscp_dot_measurement_dot_timeout"></a>

#### measurement.timeout : `number`
VSCP response timeout in ms

**Kind**: static constant of [`measurement`](#vscp.measurement)  
<a id="vscp_dot_measurement_dot_toFixed"></a>

#### measurement.toFixed(value, precision) ⇒ `number`
Round value to a fixed precision.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Rounded value  

| Param | Type | Description |
| --- | --- | --- |
| value | `number` | Value |
| precision | `number` | Precision |

<a id="vscp_dot_measurement_dot_varInteger2Float"></a>

#### measurement.varInteger2Float(data) ⇒ `number`
Convert a integer value to float

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Float value  

| Param | Type | Description |
| --- | --- | --- |
| data | `Array.&lt;number&gt;` | Byte array |

<a id="vscp_dot_measurement_dot_getDataCoding"></a>

#### measurement.getDataCoding(data) ⇒ `number`
Get data coding.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Coding  

| Param | Type | Description |
| --- | --- | --- |
| data | `number` | Data |

<a id="vscp_dot_measurement_dot_getUnitFromDataCoding"></a>

#### measurement.getUnitFromDataCoding(data) ⇒ `number`
Get unit from data coding.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Unit  

| Param | Type | Description |
| --- | --- | --- |
| data | `number` | Data coding |

<a id="vscp_dot_measurement_dot_getSensorIndexFromDataCoding"></a>

#### measurement.getSensorIndexFromDataCoding(data) ⇒ `number`
Get sensor index from data coding.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Sensor index  

| Param | Type | Description |
| --- | --- | --- |
| data | `number` | Data coding |

<a id="vscp_dot_measurement_dot_decodeClass10"></a>

#### measurement.decodeClass10(data) ⇒ `number`
Decode a class 10 measurement.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Value as float  

| Param | Type | Description |
| --- | --- | --- |
| data | `Array.&lt;number&gt;` | Data (event data array where first data byte is the data coding) |

<a id="vscp_dot_measurement_dot_decodeClass60Number"></a>

#### measurement.decodeClass60Number(data) ⇒ `number`
Decode a class 60 measurement.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Value as float  

| Param | Type | Description |
| --- | --- | --- |
| data | `number` | Data |

<a id="vscp_dot_measurement_dot_decodeClass65Number"></a>

#### measurement.decodeClass65Number(data) ⇒ `number`
Decode a class 65 measurement.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Value as float  

| Param | Type | Description |
| --- | --- | --- |
| data | `number` | Data |

<a id="vscp_dot_measurement_dot_convertFahrenheitToKelvin"></a>

#### measurement.convertFahrenheitToKelvin(value) ⇒ `number`
Convert from unit fahrenheit to unit kelvin.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Converted value  

| Param | Type | Description |
| --- | --- | --- |
| value | `string` \| `number` | Value |

<a id="vscp_dot_measurement_dot_convertFahrenheitToCelsius"></a>

#### measurement.convertFahrenheitToCelsius(value) ⇒ `number`
Convert from unit fahrenheit to unit celsius.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Converted value  

| Param | Type | Description |
| --- | --- | --- |
| value | `string` \| `number` | Value |

<a id="vscp_dot_measurement_dot_convertCelsiusToFahrenheit"></a>

#### measurement.convertCelsiusToFahrenheit(value) ⇒ `number`
Convert from unit celsius to unit fahrenheit.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Converted value  

| Param | Type | Description |
| --- | --- | --- |
| value | `string` \| `number` | Value |

<a id="vscp_dot_measurement_dot_convertKelvinToCelsius"></a>

#### measurement.convertKelvinToCelsius(value) ⇒ `number`
Convert from unit kelvin to unit celsius.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Converted value  

| Param | Type | Description |
| --- | --- | --- |
| value | `string` \| `number` | Value |

<a id="vscp_dot_measurement_dot_convertCelsiusToKelvin"></a>

#### measurement.convertCelsiusToKelvin(value) ⇒ `number`
Convert from unit celsius to unit kelvin.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Converted value  

| Param | Type | Description |
| --- | --- | --- |
| value | `string` \| `number` | Value |

<a id="vscp_dot_measurement_dot_convertKelvinToFahrenheit"></a>

#### measurement.convertKelvinToFahrenheit(value) ⇒ `number`
Convert from unit kelvin to unit fahrenheit.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Converted value  

| Param | Type | Description |
| --- | --- | --- |
| value | `string` \| `number` | Value |

<a id="vscp_dot_measurement_dot_convertMeterToFeet"></a>

#### measurement.convertMeterToFeet(value) ⇒ `number`
Convert from unit meter to unit feet.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Converted value  

| Param | Type | Description |
| --- | --- | --- |
| value | `string` \| `number` | Value |

<a id="vscp_dot_measurement_dot_convertFeetToMeter"></a>

#### measurement.convertFeetToMeter(value) ⇒ `number`
Convert from unit feet to unit meter.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Converted value  

| Param | Type | Description |
| --- | --- | --- |
| value | `string` \| `number` | Value |

<a id="vscp_dot_measurement_dot_convertMeterToInch"></a>

#### measurement.convertMeterToInch(value) ⇒ `number`
Convert from unit meter to unit inch.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Converted value  

| Param | Type | Description |
| --- | --- | --- |
| value | `string` \| `number` | Value |

<a id="vscp_dot_measurement_dot_convertInchToMeter"></a>

#### measurement.convertInchToMeter(value) ⇒ `number`
Convert from unit inch to unit meter.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Converted value  

| Param | Type | Description |
| --- | --- | --- |
| value | `string` \| `number` | Value |

<a id="vscp_dot_register"></a>

### vscp.register : `object`
VSCP register access functions

**Kind**: static namespace of [`vscp`](#vscp)  

* [.register](#vscp_dot_register) : `object`
    * [.constants](#vscp_dot_register_dot_constants) : `enum`
    * [.timeout](#vscp_dot_register_dot_timeout) : `number`
    * [.read(options)](#vscp_dot_register_dot_read)
    * [.write(options)](#vscp_dot_register_dot_write)
    * [.writeBits(options)](#vscp_dot_register_dot_writeBits)
    * [.readAlarmStatus(options)](#vscp_dot_register_dot_readAlarmStatus)
    * [.readVscpVersion(options)](#vscp_dot_register_dot_readVscpVersion)
    * [.readNodeControlFlags(options)](#vscp_dot_register_dot_readNodeControlFlags)
    * [.readUserId(options)](#vscp_dot_register_dot_readUserId)
    * [.readManufacturerDevId(options)](#vscp_dot_register_dot_readManufacturerDevId)
    * [.readManufacturerSubDevId(options)](#vscp_dot_register_dot_readManufacturerSubDevId)
    * [.readNicknameId(options)](#vscp_dot_register_dot_readNicknameId)
    * [.readSelectedPage(options)](#vscp_dot_register_dot_readSelectedPage)
    * [.readFirmwareVersion(options)](#vscp_dot_register_dot_readFirmwareVersion)
    * [.readBootloaderAlgorithm(options)](#vscp_dot_register_dot_readBootloaderAlgorithm)
    * [.readUsedPages(options)](#vscp_dot_register_dot_readUsedPages)
    * [.readStdDevFamCode(options)](#vscp_dot_register_dot_readStdDevFamCode)
    * [.readStdDevType(options)](#vscp_dot_register_dot_readStdDevType)
    * [.readGUID(options)](#vscp_dot_register_dot_readGUID)
    * [.readMdfUrl(options)](#vscp_dot_register_dot_readMdfUrl)

<a id="vscp_dot_register_dot_constants"></a>

#### register.constants : `enum`
VSCP registers

**Kind**: static enum of [`register`](#vscp.register)  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| ALARM_STATUS | `number` | <code>128</code> | 
| VSCP_VERSION_MAJOR | `number` | <code>129</code> | 
| VSCP_VERSION_MINOR | `number` | <code>130</code> | 
| NODE_CONTROL_FLAGS | `number` | <code>131</code> | 
| USER_ID_0 | `number` | <code>132</code> | 
| USER_ID_1 | `number` | <code>133</code> | 
| USER_ID_2 | `number` | <code>134</code> | 
| USER_ID_3 | `number` | <code>135</code> | 
| USER_ID_4 | `number` | <code>136</code> | 
| MANUFACTURER_DEV_ID_0 | `number` | <code>137</code> | 
| MANUFACTURER_DEV_ID_1 | `number` | <code>138</code> | 
| MANUFACTURER_DEV_ID_2 | `number` | <code>139</code> | 
| MANUFACTURER_DEV_ID_3 | `number` | <code>140</code> | 
| MANUFACTURER_SUB_DEV_ID_0 | `number` | <code>141</code> | 
| MANUFACTURER_SUB_DEV_ID_1 | `number` | <code>142</code> | 
| MANUFACTURER_SUB_DEV_ID_2 | `number` | <code>143</code> | 
| MANUFACTURER_SUB_DEV_ID_3 | `number` | <code>144</code> | 
| NICKNAME_ID | `number` | <code>145</code> | 
| PAGE_SELECT_MSB | `number` | <code>146</code> | 
| PAGE_SELECT_LSB | `number` | <code>147</code> | 
| FIRMWARE_VERSION_MAJOR | `number` | <code>148</code> | 
| FIRMWARE_VERSION_MINOR | `number` | <code>149</code> | 
| FIRMWARE_VERSION_SUB_MINOR | `number` | <code>150</code> | 
| BOOT_LOADER_ALGORITHM | `number` | <code>151</code> | 
| BUFFER_SIZE | `number` | <code>152</code> | 
| PAGES_USED | `number` | <code>153</code> | 
| STD_DEV_FAMILY_CODE_3 | `number` | <code>154</code> | 
| STD_DEV_FAMILY_CODE_2 | `number` | <code>155</code> | 
| STD_DEV_FAMILY_CODE_1 | `number` | <code>156</code> | 
| STD_DEV_FAMILY_CODE_0 | `number` | <code>157</code> | 
| STD_DEV_TYPE_3 | `number` | <code>158</code> | 
| STD_DEV_TYPE_2 | `number` | <code>159</code> | 
| STD_DEV_TYPE_1 | `number` | <code>160</code> | 
| STD_DEV_TYPE_0 | `number` | <code>161</code> | 
| RESTORE_STD_CFG | `number` | <code>162</code> | 
| GUID | `number` | <code>208</code> | 
| MDF_URL | `number` | <code>224</code> | 

<a id="vscp_dot_register_dot_timeout"></a>

#### register.timeout : `number`
VSCP response timeout in ms

**Kind**: static constant of [`register`](#vscp.register)  
<a id="vscp_dot_register_dot_read"></a>

#### register.read(options)
Read one or more register values.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| [options.page] | `number` | Register page |
| options.offset | `number` | Register page offset |
| options.count | `number` | Number of registers to read |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_write"></a>

#### register.write(options)
Write one or more register values.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.page | `number` | Register page |
| options.offset | `number` | Register page offset |
| options.data | `Array.&lt;number&gt;` | Data array |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_writeBits"></a>

#### register.writeBits(options)
Change some bits of a register.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP connection |
| options.nodeId | `number` | Node id |
| options.page | `number` | Register page |
| options.offset | `number` | Register page offset |
| options.pos | `number` | Bit position |
| options.width | `number` | Bit width |
| options.data | `Array.&lt;number&gt;` | Data array |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_readAlarmStatus"></a>

#### register.readAlarmStatus(options)
Read the alarm status from a node.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_readVscpVersion"></a>

#### register.readVscpVersion(options)
Read the supported VSCP version from a node.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_readNodeControlFlags"></a>

#### register.readNodeControlFlags(options)
Read the node control flags from a node.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_readUserId"></a>

#### register.readUserId(options)
Read the user id from a node.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_readManufacturerDevId"></a>

#### register.readManufacturerDevId(options)
Read the manufacturer device id from a node.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_readManufacturerSubDevId"></a>

#### register.readManufacturerSubDevId(options)
Read the manufacturer sub device id from a node.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_readNicknameId"></a>

#### register.readNicknameId(options)
Read the nickname id from a node.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_readSelectedPage"></a>

#### register.readSelectedPage(options)
Read the current selected page from a node.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_readFirmwareVersion"></a>

#### register.readFirmwareVersion(options)
Read the firmware version from a node.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_readBootloaderAlgorithm"></a>

#### register.readBootloaderAlgorithm(options)
Read the bootloader algorithm from a node.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_readUsedPages"></a>

#### register.readUsedPages(options)
Read the number of used pages from a node.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_readStdDevFamCode"></a>

#### register.readStdDevFamCode(options)
Read the standard device family code from a node.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_readStdDevType"></a>

#### register.readStdDevType(options)
Read the standard device type from a node.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_readGUID"></a>

#### register.readGUID(options)
Read the GUID from a node.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_readMdfUrl"></a>

#### register.readMdfUrl(options)
Read the MDF URL from a node.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_rest"></a>

### vscp.rest : `object`
VSCP REST api functions

**Kind**: static namespace of [`vscp`](#vscp)  

* [.rest](#vscp_dot_rest) : `object`
    * [.Client](#vscp_dot_rest_dot_Client)
        * [new vscp.rest.Client(config)](#new_vscp_dot_rest_dot_Client_new)
        * [.baseUrl](#vscp_dot_rest_dot_Client_plus_baseUrl) : `string`
        * [.pathPrefix](#vscp_dot_rest_dot_Client_plus_pathPrefix) : `string`
        * [.apiVersion](#vscp_dot_rest_dot_Client_plus_apiVersion) : `string`
        * [.sessionKey](#vscp_dot_rest_dot_Client_plus_sessionKey) : `string`
        * [.openSession(options)](#vscp_dot_rest_dot_Client_plus_openSession) ⇒ `object`
        * [.closeSession([options])](#vscp_dot_rest_dot_Client_plus_closeSession) ⇒ `object`
        * [.getStatus([options])](#vscp_dot_rest_dot_Client_plus_getStatus) ⇒ `object`
        * [.sendEvent(options)](#vscp_dot_rest_dot_Client_plus_sendEvent) ⇒ `object`
        * [.readEvent([options])](#vscp_dot_rest_dot_Client_plus_readEvent) ⇒ `object`
        * [.setFilter(options)](#vscp_dot_rest_dot_Client_plus_setFilter) ⇒ `object`
        * [.clearQueue([options])](#vscp_dot_rest_dot_Client_plus_clearQueue) ⇒ `object`
        * [.createVar(options)](#vscp_dot_rest_dot_Client_plus_createVar) ⇒ `object`
        * [.readVar(options)](#vscp_dot_rest_dot_Client_plus_readVar) ⇒ `object`
        * [.writeVar(options)](#vscp_dot_rest_dot_Client_plus_writeVar) ⇒ `object`
        * [.removeVar(options)](#vscp_dot_rest_dot_Client_plus_removeVar) ⇒ `object`
        * [.listVar(options)](#vscp_dot_rest_dot_Client_plus_listVar) ⇒ `object`

<a id="vscp_dot_rest_dot_Client"></a>

#### rest.Client
**Kind**: static class of [`rest`](#vscp.rest)  

* [.Client](#vscp_dot_rest_dot_Client)
    * [new vscp.rest.Client(config)](#new_vscp_dot_rest_dot_Client_new)
    * [.baseUrl](#vscp_dot_rest_dot_Client_plus_baseUrl) : `string`
    * [.pathPrefix](#vscp_dot_rest_dot_Client_plus_pathPrefix) : `string`
    * [.apiVersion](#vscp_dot_rest_dot_Client_plus_apiVersion) : `string`
    * [.sessionKey](#vscp_dot_rest_dot_Client_plus_sessionKey) : `string`
    * [.openSession(options)](#vscp_dot_rest_dot_Client_plus_openSession) ⇒ `object`
    * [.closeSession([options])](#vscp_dot_rest_dot_Client_plus_closeSession) ⇒ `object`
    * [.getStatus([options])](#vscp_dot_rest_dot_Client_plus_getStatus) ⇒ `object`
    * [.sendEvent(options)](#vscp_dot_rest_dot_Client_plus_sendEvent) ⇒ `object`
    * [.readEvent([options])](#vscp_dot_rest_dot_Client_plus_readEvent) ⇒ `object`
    * [.setFilter(options)](#vscp_dot_rest_dot_Client_plus_setFilter) ⇒ `object`
    * [.clearQueue([options])](#vscp_dot_rest_dot_Client_plus_clearQueue) ⇒ `object`
    * [.createVar(options)](#vscp_dot_rest_dot_Client_plus_createVar) ⇒ `object`
    * [.readVar(options)](#vscp_dot_rest_dot_Client_plus_readVar) ⇒ `object`
    * [.writeVar(options)](#vscp_dot_rest_dot_Client_plus_writeVar) ⇒ `object`
    * [.removeVar(options)](#vscp_dot_rest_dot_Client_plus_removeVar) ⇒ `object`
    * [.listVar(options)](#vscp_dot_rest_dot_Client_plus_listVar) ⇒ `object`

<a id="new_vscp_dot_rest_dot_Client_new"></a>

##### new vscp.rest.Client(config)
The VSCP client class handles the basic REST api of the VSCP daemon.
The function interface uses jquery ajax call in the background and will
return a Promise.


| Param | Type | Description |
| --- | --- | --- |
| config | `string` | Configuration |
| [config.baseUrl] | `string` | VSCP daemon URL (protocol + hostname + port) |
| [options.pathPrefix] | `string` | Path prefix (default: '/vscp'), which comes right after the base url. |
| [options.apiVersion] | `string` | API version (for future use) |

<a id="vscp_dot_rest_dot_Client_plus_baseUrl"></a>

##### client.baseUrl : `string`
Base URL

**Kind**: instance property of [`Client`](#vscp.rest.Client)  
<a id="vscp_dot_rest_dot_Client_plus_pathPrefix"></a>

##### client.pathPrefix : `string`
Path prefix

**Kind**: instance property of [`Client`](#vscp.rest.Client)  
<a id="vscp_dot_rest_dot_Client_plus_apiVersion"></a>

##### client.apiVersion : `string`
REST API version (future use)

**Kind**: instance property of [`Client`](#vscp.rest.Client)  
<a id="vscp_dot_rest_dot_Client_plus_sessionKey"></a>

##### client.sessionKey : `string`
Session key

**Kind**: instance property of [`Client`](#vscp.rest.Client)  
<a id="vscp_dot_rest_dot_Client_plus_openSession"></a>

##### client.openSession(options) ⇒ `object`
Open a session.

**Kind**: instance method of [`Client`](#vscp.rest.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.user | `string` | User name |
| options.password | `string` | Password |
| [options.onSuccess] | `function` | Callback, which is called for successful request. |
| [options.onError] | `function` | Callback, which is called for failed request. |

<a id="vscp_dot_rest_dot_Client_plus_closeSession"></a>

##### client.closeSession([options]) ⇒ `object`
Close a session.

**Kind**: instance method of [`Client`](#vscp.rest.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| [options] | `object` | Options |
| [options.onSuccess] | `function` | Callback, which is called for successful request. |
| [options.onError] | `function` | Callback, which is called for failed request. |

<a id="vscp_dot_rest_dot_Client_plus_getStatus"></a>

##### client.getStatus([options]) ⇒ `object`
Get status and how many events are in the queue.

**Kind**: instance method of [`Client`](#vscp.rest.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| [options] | `object` | Options |
| [options.onSuccess] | `function` | Callback, which is called for successful request. |
| [options.onError] | `function` | Callback, which is called for failed request. |

<a id="vscp_dot_rest_dot_Client_plus_sendEvent"></a>

##### client.sendEvent(options) ⇒ `object`
Send a VSCP event.

**Kind**: instance method of [`Client`](#vscp.rest.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.event | `object` | VSCP event |
| [options.onSuccess] | `function` | Callback, which is called for successful request. |
| [options.onError] | `function` | Callback, which is called for failed request. |

<a id="vscp_dot_rest_dot_Client_plus_readEvent"></a>

##### client.readEvent([options]) ⇒ `object`
Read one or more VSCP events.

**Kind**: instance method of [`Client`](#vscp.rest.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| [options] | `object` | Options |
| [options.count] | `object` | Number of events to read |
| [options.onSuccess] | `function` | Callback, which is called for successful request. |
| [options.onError] | `function` | Callback, which is called for failed request. |

<a id="vscp_dot_rest_dot_Client_plus_setFilter"></a>

##### client.setFilter(options) ⇒ `object`
Set filter.

**Kind**: instance method of [`Client`](#vscp.rest.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| [options.filterPriority] | `number` | Priority filter |
| [options.filterClass] | `number` | Class filter |
| [options.filterType] | `number` | Type filter |
| [options.filterGuid] | `Array.&lt;number&gt;` \| `string` | GUID filter |
| [options.maskPriority] | `number` | Priority mask |
| [options.maskClass] | `number` | Class mask |
| [options.maskType] | `number` | Type mask |
| [options.maskGuid] | `Array.&lt;number&gt;` \| `string` | GUID mask |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_rest_dot_Client_plus_clearQueue"></a>

##### client.clearQueue([options]) ⇒ `object`
Clear the VSCP event queue on the server side.

**Kind**: instance method of [`Client`](#vscp.rest.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| [options] | `object` | Options |
| [options.onSuccess] | `function` | Callback, which is called for successful request. |
| [options.onError] | `function` | Callback, which is called for failed request. |

<a id="vscp_dot_rest_dot_Client_plus_createVar"></a>

##### client.createVar(options) ⇒ `object`
Create a a VSCP remote variable.

**Kind**: instance method of [`Client`](#vscp.rest.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.name | `string` | Variable name |
| [options.type] | `number` | Variable type (default: string) |
| [options.accessrights] | `number` | Variable value (default: 744) |
| options.persistency | `boolean` | Variable is persistent (true) or not (false) |
| options.value | `string` | Variable Value |
| [options.note] | `string` | Variable note (optional) |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_rest_dot_Client_plus_readVar"></a>

##### client.readVar(options) ⇒ `object`
Read a value from a VSCP server variable.

**Kind**: instance method of [`Client`](#vscp.rest.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.name | `string` | Variable name |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_rest_dot_Client_plus_writeVar"></a>

##### client.writeVar(options) ⇒ `object`
Write a value to a VSCP server variable.

**Kind**: instance method of [`Client`](#vscp.rest.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.name | `string` | Variable name |
| options.value | `string` | Variable value |
| options.type | `number` | Variable type |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_rest_dot_Client_plus_removeVar"></a>

##### client.removeVar(options) ⇒ `object`
Remove a VSCP server variable.

**Kind**: instance method of [`Client`](#vscp.rest.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.name | `string` | Variable name |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_rest_dot_Client_plus_listVar"></a>

##### client.listVar(options) ⇒ `object`
List all VSCP server variables.

**Kind**: instance method of [`Client`](#vscp.rest.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.listLong | `boolean` | When false the variable list dos not include value and note. If set to true value and note is included. |
| [options.regex] | `string` | Regular expression to filter variables |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_service"></a>

### vscp.service : `object`
VSCP service supporting functions

**Kind**: static namespace of [`vscp`](#vscp)  

* [.service](#vscp_dot_service) : `object`
    * [.Container](#vscp_dot_service_dot_Container)
        * [new vscp.service.Container(options)](#new_vscp_dot_service_dot_Container_new)
        * [.client](#vscp_dot_service_dot_Container_plus_client) : [`Client`](#vscp.ws.Client)
        * [.name](#vscp_dot_service_dot_Container_plus_name) : `string`
        * [.data](#vscp_dot_service_dot_Container_plus_data) : `Array.&lt;object&gt;`
        * [.separator](#vscp_dot_service_dot_Container_plus_separator) : `Array.&lt;object&gt;`
        * [.create(options)](#vscp_dot_service_dot_Container_plus_create)
        * [.write(options)](#vscp_dot_service_dot_Container_plus_write)
        * [.read(options)](#vscp_dot_service_dot_Container_plus_read)
    * [.timeout](#vscp_dot_service_dot_timeout) : `number`
    * [.whoIsThere(options)](#vscp_dot_service_dot_whoIsThere)
    * [.scan(options)](#vscp_dot_service_dot_scan)

<a id="vscp_dot_service_dot_Container"></a>

#### service.Container
**Kind**: static class of [`service`](#vscp.service)  

* [.Container](#vscp_dot_service_dot_Container)
    * [new vscp.service.Container(options)](#new_vscp_dot_service_dot_Container_new)
    * [.client](#vscp_dot_service_dot_Container_plus_client) : [`Client`](#vscp.ws.Client)
    * [.name](#vscp_dot_service_dot_Container_plus_name) : `string`
    * [.data](#vscp_dot_service_dot_Container_plus_data) : `Array.&lt;object&gt;`
    * [.separator](#vscp_dot_service_dot_Container_plus_separator) : `Array.&lt;object&gt;`
    * [.create(options)](#vscp_dot_service_dot_Container_plus_create)
    * [.write(options)](#vscp_dot_service_dot_Container_plus_write)
    * [.read(options)](#vscp_dot_service_dot_Container_plus_read)

<a id="new_vscp_dot_service_dot_Container_new"></a>

##### new vscp.service.Container(options)
The container is used to store javascript objects in a daemon variable as string.
It supports one or more objects in a single variable!


| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.name | `string` | Container name |

<a id="vscp_dot_service_dot_Container_plus_client"></a>

##### container.client : [`Client`](#vscp.ws.Client)
VSCP websocket client

**Kind**: instance property of [`Container`](#vscp.service.Container)  
<a id="vscp_dot_service_dot_Container_plus_name"></a>

##### container.name : `string`
Complete container name (prefix + user defined name)

**Kind**: instance property of [`Container`](#vscp.service.Container)  
<a id="vscp_dot_service_dot_Container_plus_data"></a>

##### container.data : `Array.&lt;object&gt;`
Data container itself

**Kind**: instance property of [`Container`](#vscp.service.Container)  
<a id="vscp_dot_service_dot_Container_plus_separator"></a>

##### container.separator : `Array.&lt;object&gt;`
Data element separator

**Kind**: instance property of [`Container`](#vscp.service.Container)  
<a id="vscp_dot_service_dot_Container_plus_create"></a>

##### container.create(options)
Create a container at the daemon.

**Kind**: instance method of [`Container`](#vscp.service.Container)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_service_dot_Container_plus_write"></a>

##### container.write(options)
Write the container to a daemon variable.
The container must exist at the daemon!

**Kind**: instance method of [`Container`](#vscp.service.Container)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_service_dot_Container_plus_read"></a>

##### container.read(options)
Read the container from the daemon variable.

**Kind**: instance method of [`Container`](#vscp.service.Container)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_service_dot_timeout"></a>

#### service.timeout : `number`
VSCP response timeout in ms

**Kind**: static constant of [`service`](#vscp.service)  
<a id="vscp_dot_service_dot_whoIsThere"></a>

#### service.whoIsThere(options)
Request a response from all nodes on the communication bus and returns
their GUID and MDF URL.

**Kind**: static method of [`service`](#vscp.service)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_service_dot_scan"></a>

#### service.scan(options)
Scan for nodes.

**Kind**: static method of [`service`](#vscp.service)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.begin | `number` | Node id where to start scanning |
| options.end | `number` | Node id where to stop scanning |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_widget"></a>

### vscp.widget : `object`
VSCP widgets

**Kind**: static namespace of [`vscp`](#vscp)  

* [.widget](#vscp_dot_widget) : `object`
    * [.Button](#vscp_dot_widget_dot_Button)
        * [new vscp.widget.Button(options)](#new_vscp_dot_widget_dot_Button_new)
        * [.draw()](#vscp_dot_widget_dot_Button_plus_draw)
        * [.setEnabled(value)](#vscp_dot_widget_dot_Button_plus_setEnabled)
    * [.Thermometer](#vscp_dot_widget_dot_Thermometer)
        * [new vscp.widget.Thermometer(options)](#new_vscp_dot_widget_dot_Thermometer_new)
        * [.draw()](#vscp_dot_widget_dot_Thermometer_plus_draw)
        * [.setEnabled(value)](#vscp_dot_widget_dot_Thermometer_plus_setEnabled)
    * [.generateUUID()](#vscp_dot_widget_dot_generateUUID) ⇒ `string`
    * [.Image(options)](#vscp_dot_widget_dot_Image)

<a id="vscp_dot_widget_dot_Button"></a>

#### widget.Button
**Kind**: static class of [`widget`](#vscp.widget)  

* [.Button](#vscp_dot_widget_dot_Button)
    * [new vscp.widget.Button(options)](#new_vscp_dot_widget_dot_Button_new)
    * [.draw()](#vscp_dot_widget_dot_Button_plus_draw)
    * [.setEnabled(value)](#vscp_dot_widget_dot_Button_plus_setEnabled)

<a id="new_vscp_dot_widget_dot_Button_new"></a>

##### new vscp.widget.Button(options)
A button widget.


| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.canvasName | `string` | Name of the canvas, normally the canvas id |
| options.offImageUrl | `number` | URL to button which is in off state |
| options.onImageUrl | `number` | URL to button which is in on state |
| options.x | `number` | x position of the image in the canvas |
| options.y | `number` | y position of the image in the canvas |
| [options.scale] | `number` | Scale factor applied to the button image (default: 1.0) |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client, used for event communication |
| [options.bindToRemoteState] | `boolean` | Bind the button state to the remote state or not (default: false) |
| [options.receiveZone] | `number` | Zone where state events will come from (default: 255) |
| [options.receiveSubZone] | `number` | Sub-zone where state events will come from (default: 255) |
| [options.transmitZone] | `number` | Zone where button event will be sent to (default: 255) |
| [options.transmitSubZone] | `number` | Sub-zone where button event will be sent to (default: 255) |
| [options.index] | `number` | Button index (instance number)  (default: 0) |
| [options.enable] | `boolean` | Enable or disable button  (default: false) |

<a id="vscp_dot_widget_dot_Button_plus_draw"></a>

##### button.draw()
Draw the button depended on its current state.

**Kind**: instance method of [`Button`](#vscp.widget.Button)  
<a id="vscp_dot_widget_dot_Button_plus_setEnabled"></a>

##### button.setEnabled(value)
Enable or disable the button.

**Kind**: instance method of [`Button`](#vscp.widget.Button)  

| Param | Type | Description |
| --- | --- | --- |
| value | `boolean` | Enable (true) or disable (false) it |

<a id="vscp_dot_widget_dot_Thermometer"></a>

#### widget.Thermometer
**Kind**: static class of [`widget`](#vscp.widget)  

* [.Thermometer](#vscp_dot_widget_dot_Thermometer)
    * [new vscp.widget.Thermometer(options)](#new_vscp_dot_widget_dot_Thermometer_new)
    * [.draw()](#vscp_dot_widget_dot_Thermometer_plus_draw)
    * [.setEnabled(value)](#vscp_dot_widget_dot_Thermometer_plus_setEnabled)

<a id="new_vscp_dot_widget_dot_Thermometer_new"></a>

##### new vscp.widget.Thermometer(options)
A thermometer widget.


| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.canvasName | `string` | Name of the canvas, normally the canvas id |
| options.imageUrl | `number` | URL to thermometer image |
| options.x | `number` | x position of the image in the canvas |
| options.y | `number` | y position of the image in the canvas |
| options.data | `object` | Thermometer data |
| options.data.maxT | `number` | Max. temperature in degree celsius |
| options.data.minT | `number` | Min. temperature in degree celsius |
| options.data.x | `number` | x position of the lower left begin of the thermometer column in image |
| options.data.y | `number` | y position of the lower left begin of the thermometer column in image |
| options.data.height | `number` | Thermometer column height (only between numbers) |
| options.data.width | `number` | Thermometer column width |
| options.data.yOffset | `number` | Thermometer column height offset from the begin to the first number |
| options.data.color | `string` | HTML color, e.g. '#8A0000' |
| [options.scale] | `number` | Scale factor applied to the thermometer image (default: 1.0) |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client, used for event communication |
| [options.receiveZone] | `number` | Zone where state events will come from (default: 255) |
| [options.receiveSubZone] | `number` | Sub-zone where state events will come from (default: 255) |
| [options.sensorIndex] | `number` | Sensor index (default: 0) |
| [options.vscpClass] | `number` | VSCP measurement class (default: CLASS1.MEASUREMENT) |
| [options.vscpType] | `number` | VSCP measurement type (default: CLASS1.MEASUREMENT.TERMPERATURE) |
| [options.enable] | `boolean` | Enable or disable thermometer (default: true) |

<a id="vscp_dot_widget_dot_Thermometer_plus_draw"></a>

##### thermometer.draw()
Draw the thermometer depended on its current state.

**Kind**: instance method of [`Thermometer`](#vscp.widget.Thermometer)  
<a id="vscp_dot_widget_dot_Thermometer_plus_setEnabled"></a>

##### thermometer.setEnabled(value)
Enable or disable the thermometer.

**Kind**: instance method of [`Thermometer`](#vscp.widget.Thermometer)  

| Param | Type | Description |
| --- | --- | --- |
| value | `boolean` | Enable (true) or disable (false) it |

<a id="vscp_dot_widget_dot_generateUUID"></a>

#### widget.generateUUID() ⇒ `string`
Generate a UUID.

**Kind**: static method of [`widget`](#vscp.widget)  
**Returns**: `string` - UUID  
<a id="vscp_dot_widget_dot_Image"></a>

#### widget.Image(options)
Add a image to the canvas.

**Kind**: static method of [`widget`](#vscp.widget)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.canvasName | `string` | Name of the canvas, normally the canvas id |
| options.url | `string` | Path to the image |
| options.x | `number` | x position of the image in the canvas |
| options.y | `number` | y position of the image in the canvas |

<a id="vscp_dot_wizard"></a>

### vscp.wizard : `object`
VSCP wizard functionality based on a MDF

**Kind**: static namespace of [`vscp`](#vscp)  

* [.wizard](#vscp_dot_wizard) : `object`
    * [.MessageBox](#vscp_dot_wizard_dot_MessageBox)
        * [new vscp.wizard.MessageBox(options)](#new_vscp_dot_wizard_dot_MessageBox_new)
        * [.func](#vscp_dot_wizard_dot_MessageBox_plus_func) : `string`
        * [.head](#vscp_dot_wizard_dot_MessageBox_plus_head) : `string`
        * [.description](#vscp_dot_wizard_dot_MessageBox_plus_description) : `string`
        * [.variableType](#vscp_dot_wizard_dot_MessageBox_plus_variableType) : `string`
        * [.variableName](#vscp_dot_wizard_dot_MessageBox_plus_variableName) : `string`
        * [.variableValue](#vscp_dot_wizard_dot_MessageBox_plus_variableValue) : `string`
        * [.parse($messageBox)](#vscp_dot_wizard_dot_MessageBox_plus_parse)
    * [.WriteBitInReg](#vscp_dot_wizard_dot_WriteBitInReg)
        * [new vscp.wizard.WriteBitInReg(options)](#new_vscp_dot_wizard_dot_WriteBitInReg_new)
        * [.pos](#vscp_dot_wizard_dot_WriteBitInReg_plus_pos) : `number`
        * [.page](#vscp_dot_wizard_dot_WriteBitInReg_plus_page) : `number`
        * [.offset](#vscp_dot_wizard_dot_WriteBitInReg_plus_offset) : `number`
        * [.width](#vscp_dot_wizard_dot_WriteBitInReg_plus_width) : `number`
        * [.value](#vscp_dot_wizard_dot_WriteBitInReg_plus_value) : `number`
        * [.variableName](#vscp_dot_wizard_dot_WriteBitInReg_plus_variableName) : `string`
        * [.parse(writeBitInReg)](#vscp_dot_wizard_dot_WriteBitInReg_plus_parse)
    * [.WriteBitInAbstraction](#vscp_dot_wizard_dot_WriteBitInAbstraction)
        * [new vscp.wizard.WriteBitInAbstraction(options)](#new_vscp_dot_wizard_dot_WriteBitInAbstraction_new)
        * [.id](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_id) : `string`
        * [.pos](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_pos) : `number`
        * [.width](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_width) : `number`
        * [.value](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_value) : `number`
        * [.variableName](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_variableName) : `string`
        * [.parse($writeBitInAbstraction)](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_parse)
    * [.WriteRegister](#vscp_dot_wizard_dot_WriteRegister)
        * [new vscp.wizard.WriteRegister(options)](#new_vscp_dot_wizard_dot_WriteRegister_new)
        * [.page](#vscp_dot_wizard_dot_WriteRegister_plus_page) : `number`
        * [.offset](#vscp_dot_wizard_dot_WriteRegister_plus_offset) : `number`
        * [.value](#vscp_dot_wizard_dot_WriteRegister_plus_value) : `number`
        * [.variableName](#vscp_dot_wizard_dot_WriteRegister_plus_variableName) : `string`
        * [.parse($writeRegister)](#vscp_dot_wizard_dot_WriteRegister_plus_parse)
    * [.WriteAbstraction](#vscp_dot_wizard_dot_WriteAbstraction)
        * [new vscp.wizard.WriteAbstraction(options)](#new_vscp_dot_wizard_dot_WriteAbstraction_new)
        * [.id](#vscp_dot_wizard_dot_WriteAbstraction_plus_id) : `string`
        * [.value](#vscp_dot_wizard_dot_WriteAbstraction_plus_value) : `number`
        * [.variableName](#vscp_dot_wizard_dot_WriteAbstraction_plus_variableName) : `number`
        * [.parse($writeAbstraction)](#vscp_dot_wizard_dot_WriteAbstraction_plus_parse)
    * [.Recipe](#vscp_dot_wizard_dot_Recipe)
        * [new vscp.wizard.Recipe(options)](#new_vscp_dot_wizard_dot_Recipe_new)
        * [.name](#vscp_dot_wizard_dot_Recipe_plus_name) : `string`
        * [.description](#vscp_dot_wizard_dot_Recipe_plus_description) : `string`
        * [.writeBitInRegs](#vscp_dot_wizard_dot_Recipe_plus_writeBitInRegs) : [`Array.&lt;WriteBitInReg&gt;`](#vscp.wizard.WriteBitInReg)
        * [.writeBitInAbstractions](#vscp_dot_wizard_dot_Recipe_plus_writeBitInAbstractions) : `Array.&lt;vscp.wizard.WriteBitAbstractions&gt;`
        * [.writeRegisters](#vscp_dot_wizard_dot_Recipe_plus_writeRegisters) : [`Array.&lt;WriteRegister&gt;`](#vscp.wizard.WriteRegister)
        * [.writeAbstractions](#vscp_dot_wizard_dot_Recipe_plus_writeAbstractions) : [`Array.&lt;WriteAbstraction&gt;`](#vscp.wizard.WriteAbstraction)
        * [.messageBoxes](#vscp_dot_wizard_dot_Recipe_plus_messageBoxes) : [`Array.&lt;MessageBox&gt;`](#vscp.wizard.MessageBox)
        * [.mdf](#vscp_dot_wizard_dot_Recipe_plus_mdf) : `object`
        * [.parse($recipe)](#vscp_dot_wizard_dot_Recipe_plus_parse)
        * [.write(options)](#vscp_dot_wizard_dot_Recipe_plus_write)
    * [.getRecipes(options)](#vscp_dot_wizard_dot_getRecipes) ⇒ [`Array.&lt;Recipe&gt;`](#vscp.wizard.Recipe)

<a id="vscp_dot_wizard_dot_MessageBox"></a>

#### wizard.MessageBox
**Kind**: static class of [`wizard`](#vscp.wizard)  

* [.MessageBox](#vscp_dot_wizard_dot_MessageBox)
    * [new vscp.wizard.MessageBox(options)](#new_vscp_dot_wizard_dot_MessageBox_new)
    * [.func](#vscp_dot_wizard_dot_MessageBox_plus_func) : `string`
    * [.head](#vscp_dot_wizard_dot_MessageBox_plus_head) : `string`
    * [.description](#vscp_dot_wizard_dot_MessageBox_plus_description) : `string`
    * [.variableType](#vscp_dot_wizard_dot_MessageBox_plus_variableType) : `string`
    * [.variableName](#vscp_dot_wizard_dot_MessageBox_plus_variableName) : `string`
    * [.variableValue](#vscp_dot_wizard_dot_MessageBox_plus_variableValue) : `string`
    * [.parse($messageBox)](#vscp_dot_wizard_dot_MessageBox_plus_parse)

<a id="new_vscp_dot_wizard_dot_MessageBox_new"></a>

##### new vscp.wizard.MessageBox(options)
A message box.


| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.messageBox | `object` | Messagebox as jquery xml object |

<a id="vscp_dot_wizard_dot_MessageBox_plus_func"></a>

##### messageBox.func : `string`
Function input or output

**Kind**: instance property of [`MessageBox`](#vscp.wizard.MessageBox)  
<a id="vscp_dot_wizard_dot_MessageBox_plus_head"></a>

##### messageBox.head : `string`
Head

**Kind**: instance property of [`MessageBox`](#vscp.wizard.MessageBox)  
<a id="vscp_dot_wizard_dot_MessageBox_plus_description"></a>

##### messageBox.description : `string`
Description

**Kind**: instance property of [`MessageBox`](#vscp.wizard.MessageBox)  
<a id="vscp_dot_wizard_dot_MessageBox_plus_variableType"></a>

##### messageBox.variableType : `string`
Variable type

**Kind**: instance property of [`MessageBox`](#vscp.wizard.MessageBox)  
<a id="vscp_dot_wizard_dot_MessageBox_plus_variableName"></a>

##### messageBox.variableName : `string`
Variable name

**Kind**: instance property of [`MessageBox`](#vscp.wizard.MessageBox)  
<a id="vscp_dot_wizard_dot_MessageBox_plus_variableValue"></a>

##### messageBox.variableValue : `string`
Variable value

**Kind**: instance property of [`MessageBox`](#vscp.wizard.MessageBox)  
<a id="vscp_dot_wizard_dot_MessageBox_plus_parse"></a>

##### messageBox.parse($messageBox)
Parse a messagebox object.

**Kind**: instance method of [`MessageBox`](#vscp.wizard.MessageBox)  

| Param | Type | Description |
| --- | --- | --- |
| $messageBox | `object` | Messagebox as jquery xml object |

<a id="vscp_dot_wizard_dot_WriteBitInReg"></a>

#### wizard.WriteBitInReg
**Kind**: static class of [`wizard`](#vscp.wizard)  

* [.WriteBitInReg](#vscp_dot_wizard_dot_WriteBitInReg)
    * [new vscp.wizard.WriteBitInReg(options)](#new_vscp_dot_wizard_dot_WriteBitInReg_new)
    * [.pos](#vscp_dot_wizard_dot_WriteBitInReg_plus_pos) : `number`
    * [.page](#vscp_dot_wizard_dot_WriteBitInReg_plus_page) : `number`
    * [.offset](#vscp_dot_wizard_dot_WriteBitInReg_plus_offset) : `number`
    * [.width](#vscp_dot_wizard_dot_WriteBitInReg_plus_width) : `number`
    * [.value](#vscp_dot_wizard_dot_WriteBitInReg_plus_value) : `number`
    * [.variableName](#vscp_dot_wizard_dot_WriteBitInReg_plus_variableName) : `string`
    * [.parse(writeBitInReg)](#vscp_dot_wizard_dot_WriteBitInReg_plus_parse)

<a id="new_vscp_dot_wizard_dot_WriteBitInReg_new"></a>

##### new vscp.wizard.WriteBitInReg(options)
Bit in register access method.


| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.writeBitInReg | `object` | write-bit-in-reg as jquery xml object |

<a id="vscp_dot_wizard_dot_WriteBitInReg_plus_pos"></a>

##### writeBitInReg.pos : `number`
Bit position

**Kind**: instance property of [`WriteBitInReg`](#vscp.wizard.WriteBitInReg)  
<a id="vscp_dot_wizard_dot_WriteBitInReg_plus_page"></a>

##### writeBitInReg.page : `number`
Register page

**Kind**: instance property of [`WriteBitInReg`](#vscp.wizard.WriteBitInReg)  
<a id="vscp_dot_wizard_dot_WriteBitInReg_plus_offset"></a>

##### writeBitInReg.offset : `number`
Register offset

**Kind**: instance property of [`WriteBitInReg`](#vscp.wizard.WriteBitInReg)  
<a id="vscp_dot_wizard_dot_WriteBitInReg_plus_width"></a>

##### writeBitInReg.width : `number`
Bit width

**Kind**: instance property of [`WriteBitInReg`](#vscp.wizard.WriteBitInReg)  
<a id="vscp_dot_wizard_dot_WriteBitInReg_plus_value"></a>

##### writeBitInReg.value : `number`
Value of bit width

**Kind**: instance property of [`WriteBitInReg`](#vscp.wizard.WriteBitInReg)  
<a id="vscp_dot_wizard_dot_WriteBitInReg_plus_variableName"></a>

##### writeBitInReg.variableName : `string`
Variable name

**Kind**: instance property of [`WriteBitInReg`](#vscp.wizard.WriteBitInReg)  
<a id="vscp_dot_wizard_dot_WriteBitInReg_plus_parse"></a>

##### writeBitInReg.parse(writeBitInReg)
Parse a bit in register access method object.

**Kind**: instance method of [`WriteBitInReg`](#vscp.wizard.WriteBitInReg)  

| Param | Type | Description |
| --- | --- | --- |
| writeBitInReg | `object` | write-bit-in-reg as jquery xml object |

<a id="vscp_dot_wizard_dot_WriteBitInAbstraction"></a>

#### wizard.WriteBitInAbstraction
**Kind**: static class of [`wizard`](#vscp.wizard)  

* [.WriteBitInAbstraction](#vscp_dot_wizard_dot_WriteBitInAbstraction)
    * [new vscp.wizard.WriteBitInAbstraction(options)](#new_vscp_dot_wizard_dot_WriteBitInAbstraction_new)
    * [.id](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_id) : `string`
    * [.pos](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_pos) : `number`
    * [.width](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_width) : `number`
    * [.value](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_value) : `number`
    * [.variableName](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_variableName) : `string`
    * [.parse($writeBitInAbstraction)](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_parse)

<a id="new_vscp_dot_wizard_dot_WriteBitInAbstraction_new"></a>

##### new vscp.wizard.WriteBitInAbstraction(options)
Bit in abstraction access method.


| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.writeBitInAbstraction | `object` | write-bit-in-abstraction as jquery xml object |

<a id="vscp_dot_wizard_dot_WriteBitInAbstraction_plus_id"></a>

##### writeBitInAbstraction.id : `string`
Abstract value id

**Kind**: instance property of [`WriteBitInAbstraction`](#vscp.wizard.WriteBitInAbstraction)  
<a id="vscp_dot_wizard_dot_WriteBitInAbstraction_plus_pos"></a>

##### writeBitInAbstraction.pos : `number`
Bit position

**Kind**: instance property of [`WriteBitInAbstraction`](#vscp.wizard.WriteBitInAbstraction)  
<a id="vscp_dot_wizard_dot_WriteBitInAbstraction_plus_width"></a>

##### writeBitInAbstraction.width : `number`
Bit width

**Kind**: instance property of [`WriteBitInAbstraction`](#vscp.wizard.WriteBitInAbstraction)  
<a id="vscp_dot_wizard_dot_WriteBitInAbstraction_plus_value"></a>

##### writeBitInAbstraction.value : `number`
Value of bit width

**Kind**: instance property of [`WriteBitInAbstraction`](#vscp.wizard.WriteBitInAbstraction)  
<a id="vscp_dot_wizard_dot_WriteBitInAbstraction_plus_variableName"></a>

##### writeBitInAbstraction.variableName : `string`
Variable name

**Kind**: instance property of [`WriteBitInAbstraction`](#vscp.wizard.WriteBitInAbstraction)  
<a id="vscp_dot_wizard_dot_WriteBitInAbstraction_plus_parse"></a>

##### writeBitInAbstraction.parse($writeBitInAbstraction)
Parse a bit in abstraction access method object.

**Kind**: instance method of [`WriteBitInAbstraction`](#vscp.wizard.WriteBitInAbstraction)  

| Param | Type | Description |
| --- | --- | --- |
| $writeBitInAbstraction | `object` | write-bit-in-abstraction as jquery xml object |

<a id="vscp_dot_wizard_dot_WriteRegister"></a>

#### wizard.WriteRegister
**Kind**: static class of [`wizard`](#vscp.wizard)  

* [.WriteRegister](#vscp_dot_wizard_dot_WriteRegister)
    * [new vscp.wizard.WriteRegister(options)](#new_vscp_dot_wizard_dot_WriteRegister_new)
    * [.page](#vscp_dot_wizard_dot_WriteRegister_plus_page) : `number`
    * [.offset](#vscp_dot_wizard_dot_WriteRegister_plus_offset) : `number`
    * [.value](#vscp_dot_wizard_dot_WriteRegister_plus_value) : `number`
    * [.variableName](#vscp_dot_wizard_dot_WriteRegister_plus_variableName) : `string`
    * [.parse($writeRegister)](#vscp_dot_wizard_dot_WriteRegister_plus_parse)

<a id="new_vscp_dot_wizard_dot_WriteRegister_new"></a>

##### new vscp.wizard.WriteRegister(options)
Register access method.


| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.writeRegister | `object` | write-register as jquery xml object |

<a id="vscp_dot_wizard_dot_WriteRegister_plus_page"></a>

##### writeRegister.page : `number`
Register page

**Kind**: instance property of [`WriteRegister`](#vscp.wizard.WriteRegister)  
<a id="vscp_dot_wizard_dot_WriteRegister_plus_offset"></a>

##### writeRegister.offset : `number`
Register offset

**Kind**: instance property of [`WriteRegister`](#vscp.wizard.WriteRegister)  
<a id="vscp_dot_wizard_dot_WriteRegister_plus_value"></a>

##### writeRegister.value : `number`
Register value

**Kind**: instance property of [`WriteRegister`](#vscp.wizard.WriteRegister)  
<a id="vscp_dot_wizard_dot_WriteRegister_plus_variableName"></a>

##### writeRegister.variableName : `string`
Variable name

**Kind**: instance property of [`WriteRegister`](#vscp.wizard.WriteRegister)  
<a id="vscp_dot_wizard_dot_WriteRegister_plus_parse"></a>

##### writeRegister.parse($writeRegister)
Parse a register access method object.

**Kind**: instance method of [`WriteRegister`](#vscp.wizard.WriteRegister)  

| Param | Type | Description |
| --- | --- | --- |
| $writeRegister | `object` | write-register as jquery xml object |

<a id="vscp_dot_wizard_dot_WriteAbstraction"></a>

#### wizard.WriteAbstraction
**Kind**: static class of [`wizard`](#vscp.wizard)  

* [.WriteAbstraction](#vscp_dot_wizard_dot_WriteAbstraction)
    * [new vscp.wizard.WriteAbstraction(options)](#new_vscp_dot_wizard_dot_WriteAbstraction_new)
    * [.id](#vscp_dot_wizard_dot_WriteAbstraction_plus_id) : `string`
    * [.value](#vscp_dot_wizard_dot_WriteAbstraction_plus_value) : `number`
    * [.variableName](#vscp_dot_wizard_dot_WriteAbstraction_plus_variableName) : `number`
    * [.parse($writeAbstraction)](#vscp_dot_wizard_dot_WriteAbstraction_plus_parse)

<a id="new_vscp_dot_wizard_dot_WriteAbstraction_new"></a>

##### new vscp.wizard.WriteAbstraction(options)
Abstraction access method.


| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.writeAbstraction | `object` | write-abstraction as jquery xml object |

<a id="vscp_dot_wizard_dot_WriteAbstraction_plus_id"></a>

##### writeAbstraction.id : `string`
Abstract value id

**Kind**: instance property of [`WriteAbstraction`](#vscp.wizard.WriteAbstraction)  
<a id="vscp_dot_wizard_dot_WriteAbstraction_plus_value"></a>

##### writeAbstraction.value : `number`
Abstract value

**Kind**: instance property of [`WriteAbstraction`](#vscp.wizard.WriteAbstraction)  
<a id="vscp_dot_wizard_dot_WriteAbstraction_plus_variableName"></a>

##### writeAbstraction.variableName : `number`
Variable name

**Kind**: instance property of [`WriteAbstraction`](#vscp.wizard.WriteAbstraction)  
<a id="vscp_dot_wizard_dot_WriteAbstraction_plus_parse"></a>

##### writeAbstraction.parse($writeAbstraction)
Parse a abstraction access method object.

**Kind**: instance method of [`WriteAbstraction`](#vscp.wizard.WriteAbstraction)  

| Param | Type | Description |
| --- | --- | --- |
| $writeAbstraction | `object` | write-abstraction as jquery xml object |

<a id="vscp_dot_wizard_dot_Recipe"></a>

#### wizard.Recipe
**Kind**: static class of [`wizard`](#vscp.wizard)  

* [.Recipe](#vscp_dot_wizard_dot_Recipe)
    * [new vscp.wizard.Recipe(options)](#new_vscp_dot_wizard_dot_Recipe_new)
    * [.name](#vscp_dot_wizard_dot_Recipe_plus_name) : `string`
    * [.description](#vscp_dot_wizard_dot_Recipe_plus_description) : `string`
    * [.writeBitInRegs](#vscp_dot_wizard_dot_Recipe_plus_writeBitInRegs) : [`Array.&lt;WriteBitInReg&gt;`](#vscp.wizard.WriteBitInReg)
    * [.writeBitInAbstractions](#vscp_dot_wizard_dot_Recipe_plus_writeBitInAbstractions) : `Array.&lt;vscp.wizard.WriteBitAbstractions&gt;`
    * [.writeRegisters](#vscp_dot_wizard_dot_Recipe_plus_writeRegisters) : [`Array.&lt;WriteRegister&gt;`](#vscp.wizard.WriteRegister)
    * [.writeAbstractions](#vscp_dot_wizard_dot_Recipe_plus_writeAbstractions) : [`Array.&lt;WriteAbstraction&gt;`](#vscp.wizard.WriteAbstraction)
    * [.messageBoxes](#vscp_dot_wizard_dot_Recipe_plus_messageBoxes) : [`Array.&lt;MessageBox&gt;`](#vscp.wizard.MessageBox)
    * [.mdf](#vscp_dot_wizard_dot_Recipe_plus_mdf) : `object`
    * [.parse($recipe)](#vscp_dot_wizard_dot_Recipe_plus_parse)
    * [.write(options)](#vscp_dot_wizard_dot_Recipe_plus_write)

<a id="new_vscp_dot_wizard_dot_Recipe_new"></a>

##### new vscp.wizard.Recipe(options)
A recipe.


| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.recipe | `object` | Recipe as jquery xml object |
| options.mdf | `object` | MDF as jquery xml object |

<a id="vscp_dot_wizard_dot_Recipe_plus_name"></a>

##### recipe.name : `string`
Recipe name

**Kind**: instance property of [`Recipe`](#vscp.wizard.Recipe)  
<a id="vscp_dot_wizard_dot_Recipe_plus_description"></a>

##### recipe.description : `string`
Recipe description

**Kind**: instance property of [`Recipe`](#vscp.wizard.Recipe)  
<a id="vscp_dot_wizard_dot_Recipe_plus_writeBitInRegs"></a>

##### recipe.writeBitInRegs : [`Array.&lt;WriteBitInReg&gt;`](#vscp.wizard.WriteBitInReg)
Bit access methods in registers

**Kind**: instance property of [`Recipe`](#vscp.wizard.Recipe)  
<a id="vscp_dot_wizard_dot_Recipe_plus_writeBitInAbstractions"></a>

##### recipe.writeBitInAbstractions : `Array.&lt;vscp.wizard.WriteBitAbstractions&gt;`
Bit access methods in abstract value

**Kind**: instance property of [`Recipe`](#vscp.wizard.Recipe)  
<a id="vscp_dot_wizard_dot_Recipe_plus_writeRegisters"></a>

##### recipe.writeRegisters : [`Array.&lt;WriteRegister&gt;`](#vscp.wizard.WriteRegister)
Register access methods

**Kind**: instance property of [`Recipe`](#vscp.wizard.Recipe)  
<a id="vscp_dot_wizard_dot_Recipe_plus_writeAbstractions"></a>

##### recipe.writeAbstractions : [`Array.&lt;WriteAbstraction&gt;`](#vscp.wizard.WriteAbstraction)
Abstract access methods

**Kind**: instance property of [`Recipe`](#vscp.wizard.Recipe)  
<a id="vscp_dot_wizard_dot_Recipe_plus_messageBoxes"></a>

##### recipe.messageBoxes : [`Array.&lt;MessageBox&gt;`](#vscp.wizard.MessageBox)
Messageboxes

**Kind**: instance property of [`Recipe`](#vscp.wizard.Recipe)  
<a id="vscp_dot_wizard_dot_Recipe_plus_mdf"></a>

##### recipe.mdf : `object`
MDF

**Kind**: instance property of [`Recipe`](#vscp.wizard.Recipe)  
<a id="vscp_dot_wizard_dot_Recipe_plus_parse"></a>

##### recipe.parse($recipe)
Parse a recipe object.

**Kind**: instance method of [`Recipe`](#vscp.wizard.Recipe)  

| Param | Type | Description |
| --- | --- | --- |
| $recipe | `object` | Recipe as jquery xml object |

<a id="vscp_dot_wizard_dot_Recipe_plus_write"></a>

##### recipe.write(options)
Write a recipe.

**Kind**: instance method of [`Recipe`](#vscp.wizard.Recipe)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |

<a id="vscp_dot_wizard_dot_getRecipes"></a>

#### wizard.getRecipes(options) ⇒ [`Array.&lt;Recipe&gt;`](#vscp.wizard.Recipe)
Get recipes from a MDF in JSON format.

**Kind**: static method of [`wizard`](#vscp.wizard)  
**Returns**: [`Array.&lt;Recipe&gt;`](#vscp.wizard.Recipe) - Recipe array  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.mdf | `object` | The mdf as jquery xml object |

<a id="vscp_dot_ws"></a>

### vscp.ws : `object`
VSCP websocket api functions

**Kind**: static namespace of [`vscp`](#vscp)  

* [.ws](#vscp_dot_ws) : `object`
    * [.Client](#vscp_dot_ws_dot_Client)
        * [new vscp.ws.Client()](#new_vscp_dot_ws_dot_Client_new)
        * [.socket](#vscp_dot_ws_dot_Client_plus_socket) : `object`
        * [.url](#vscp_dot_ws_dot_Client_plus_url) : `string`
        * [.userName](#vscp_dot_ws_dot_Client_plus_userName) : `string`
        * [.userId](#vscp_dot_ws_dot_Client_plus_userId) : `number`
        * [.userFullname](#vscp_dot_ws_dot_Client_plus_userFullname) : `string`
        * [.userRights](#vscp_dot_ws_dot_Client_plus_userRights) : `array`
        * [.userRemotes](#vscp_dot_ws_dot_Client_plus_userRemotes) : `array`
        * [.userEvents](#vscp_dot_ws_dot_Client_plus_userEvents) : `array`
        * [.userNote](#vscp_dot_ws_dot_Client_plus_userNote) : `string`
        * [.password](#vscp_dot_ws_dot_Client_plus_password) : `string`
        * [.vscpkey](#vscp_dot_ws_dot_Client_plus_vscpkey) : `string`
        * [.onConnError](#vscp_dot_ws_dot_Client_plus_onConnError) : `function`
        * [.onMessage](#vscp_dot_ws_dot_Client_plus_onMessage) : `function`
        * [.onEvent](#vscp_dot_ws_dot_Client_plus_onEvent) : `Array.&lt;function()&gt;`
        * [.onVariable](#vscp_dot_ws_dot_Client_plus_onVariable) : `function`
        * [.onTableRow](#vscp_dot_ws_dot_Client_plus_onTableRow) : `function`
        * [.state](#vscp_dot_ws_dot_Client_plus_state) : `number`
        * [.substate](#vscp_dot_ws_dot_Client_plus_substate) : `number`
        * [.states](#vscp_dot_ws_dot_Client_plus_states) : `enum`
        * [.substates](#vscp_dot_ws_dot_Client_plus_substates) : `enum`
        * [.addEventListener(eventListener)](#vscp_dot_ws_dot_Client_plus_addEventListener)
        * [.removeEventListener(eventListener)](#vscp_dot_ws_dot_Client_plus_removeEventListener)
        * [.getAuthHash(userName, password, str_iv)](#vscp_dot_ws_dot_Client_plus_getAuthHash) ⇒ `string`
        * [.onWebSocketOpen()](#vscp_dot_ws_dot_Client_plus_onWebSocketOpen)
        * [.onWebSocketClose()](#vscp_dot_ws_dot_Client_plus_onWebSocketClose)
        * [.onWebSocketMessage(msg)](#vscp_dot_ws_dot_Client_plus_onWebSocketMessage)
        * [.connect(options)](#vscp_dot_ws_dot_Client_plus_connect) ⇒ `object`
        * [.disconnect(options)](#vscp_dot_ws_dot_Client_plus_disconnect) ⇒ `object`
        * [.start(options)](#vscp_dot_ws_dot_Client_plus_start) ⇒ `object`
        * [.stop(options)](#vscp_dot_ws_dot_Client_plus_stop) ⇒ `object`
        * [.clearQueue(options)](#vscp_dot_ws_dot_Client_plus_clearQueue) ⇒ `object`
        * [.sendEvent(options)](#vscp_dot_ws_dot_Client_plus_sendEvent) ⇒ `object`
        * [.setFilter(options)](#vscp_dot_ws_dot_Client_plus_setFilter) ⇒ `object`
        * [.createVar(options)](#vscp_dot_ws_dot_Client_plus_createVar) ⇒ `object`
        * [.readVar(options)](#vscp_dot_ws_dot_Client_plus_readVar) ⇒ `object`
        * [.writeVar(options)](#vscp_dot_ws_dot_Client_plus_writeVar) ⇒ `object`
        * [.resetVar(options)](#vscp_dot_ws_dot_Client_plus_resetVar) ⇒ `object`
        * [.removeVar(options)](#vscp_dot_ws_dot_Client_plus_removeVar) ⇒ `object`
        * [.lengthVar(options)](#vscp_dot_ws_dot_Client_plus_lengthVar) ⇒ `object`
        * [.lastChangeVar(options)](#vscp_dot_ws_dot_Client_plus_lastChangeVar) ⇒ `object`
        * [.listVar(options)](#vscp_dot_ws_dot_Client_plus_listVar) ⇒ `object`
        * [.readTable(options)](#vscp_dot_ws_dot_Client_plus_readTable) ⇒ `object`

<a id="vscp_dot_ws_dot_Client"></a>

#### ws.Client
**Kind**: static class of [`ws`](#vscp.ws)  

* [.Client](#vscp_dot_ws_dot_Client)
    * [new vscp.ws.Client()](#new_vscp_dot_ws_dot_Client_new)
    * [.socket](#vscp_dot_ws_dot_Client_plus_socket) : `object`
    * [.url](#vscp_dot_ws_dot_Client_plus_url) : `string`
    * [.userName](#vscp_dot_ws_dot_Client_plus_userName) : `string`
    * [.userId](#vscp_dot_ws_dot_Client_plus_userId) : `number`
    * [.userFullname](#vscp_dot_ws_dot_Client_plus_userFullname) : `string`
    * [.userRights](#vscp_dot_ws_dot_Client_plus_userRights) : `array`
    * [.userRemotes](#vscp_dot_ws_dot_Client_plus_userRemotes) : `array`
    * [.userEvents](#vscp_dot_ws_dot_Client_plus_userEvents) : `array`
    * [.userNote](#vscp_dot_ws_dot_Client_plus_userNote) : `string`
    * [.password](#vscp_dot_ws_dot_Client_plus_password) : `string`
    * [.vscpkey](#vscp_dot_ws_dot_Client_plus_vscpkey) : `string`
    * [.onConnError](#vscp_dot_ws_dot_Client_plus_onConnError) : `function`
    * [.onMessage](#vscp_dot_ws_dot_Client_plus_onMessage) : `function`
    * [.onEvent](#vscp_dot_ws_dot_Client_plus_onEvent) : `Array.&lt;function()&gt;`
    * [.onVariable](#vscp_dot_ws_dot_Client_plus_onVariable) : `function`
    * [.onTableRow](#vscp_dot_ws_dot_Client_plus_onTableRow) : `function`
    * [.state](#vscp_dot_ws_dot_Client_plus_state) : `number`
    * [.substate](#vscp_dot_ws_dot_Client_plus_substate) : `number`
    * [.states](#vscp_dot_ws_dot_Client_plus_states) : `enum`
    * [.substates](#vscp_dot_ws_dot_Client_plus_substates) : `enum`
    * [.addEventListener(eventListener)](#vscp_dot_ws_dot_Client_plus_addEventListener)
    * [.removeEventListener(eventListener)](#vscp_dot_ws_dot_Client_plus_removeEventListener)
    * [.getAuthHash(userName, password, str_iv)](#vscp_dot_ws_dot_Client_plus_getAuthHash) ⇒ `string`
    * [.onWebSocketOpen()](#vscp_dot_ws_dot_Client_plus_onWebSocketOpen)
    * [.onWebSocketClose()](#vscp_dot_ws_dot_Client_plus_onWebSocketClose)
    * [.onWebSocketMessage(msg)](#vscp_dot_ws_dot_Client_plus_onWebSocketMessage)
    * [.connect(options)](#vscp_dot_ws_dot_Client_plus_connect) ⇒ `object`
    * [.disconnect(options)](#vscp_dot_ws_dot_Client_plus_disconnect) ⇒ `object`
    * [.start(options)](#vscp_dot_ws_dot_Client_plus_start) ⇒ `object`
    * [.stop(options)](#vscp_dot_ws_dot_Client_plus_stop) ⇒ `object`
    * [.clearQueue(options)](#vscp_dot_ws_dot_Client_plus_clearQueue) ⇒ `object`
    * [.sendEvent(options)](#vscp_dot_ws_dot_Client_plus_sendEvent) ⇒ `object`
    * [.setFilter(options)](#vscp_dot_ws_dot_Client_plus_setFilter) ⇒ `object`
    * [.createVar(options)](#vscp_dot_ws_dot_Client_plus_createVar) ⇒ `object`
    * [.readVar(options)](#vscp_dot_ws_dot_Client_plus_readVar) ⇒ `object`
    * [.writeVar(options)](#vscp_dot_ws_dot_Client_plus_writeVar) ⇒ `object`
    * [.resetVar(options)](#vscp_dot_ws_dot_Client_plus_resetVar) ⇒ `object`
    * [.removeVar(options)](#vscp_dot_ws_dot_Client_plus_removeVar) ⇒ `object`
    * [.lengthVar(options)](#vscp_dot_ws_dot_Client_plus_lengthVar) ⇒ `object`
    * [.lastChangeVar(options)](#vscp_dot_ws_dot_Client_plus_lastChangeVar) ⇒ `object`
    * [.listVar(options)](#vscp_dot_ws_dot_Client_plus_listVar) ⇒ `object`
    * [.readTable(options)](#vscp_dot_ws_dot_Client_plus_readTable) ⇒ `object`

<a id="new_vscp_dot_ws_dot_Client_new"></a>

##### new vscp.ws.Client()
VSCP websocket client, used for connection establishment to a VSCP server.

<a id="vscp_dot_ws_dot_Client_plus_socket"></a>

##### client.socket : `object`
Websocket

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_url"></a>

##### client.url : `string`
url used for connection establishment

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_userName"></a>

##### client.userName : `string`
User name used for connection establishment

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_userId"></a>

##### client.userId : `number`
User id from authentication AUTH1

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_userFullname"></a>

##### client.userFullname : `string`
User full name from authentication AUTH1

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_userRights"></a>

##### client.userRights : `array`
User rights from authentication AUTH1

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_userRemotes"></a>

##### client.userRemotes : `array`
User allowed remotes from authentication AUTH1

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_userEvents"></a>

##### client.userEvents : `array`
User allowed events from authentication AUTH1

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_userNote"></a>

##### client.userNote : `string`
User note from authentication AUTH1

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_password"></a>

##### client.password : `string`
Password used for connection establishment

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_vscpkey"></a>

##### client.vscpkey : `string`
Secret key used for connection establishment

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_onConnError"></a>

##### client.onConnError : `function`
Callback called on any connection error

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_onMessage"></a>

##### client.onMessage : `function`
Callback called on any received VSCP response message

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_onEvent"></a>

##### client.onEvent : `Array.&lt;function()&gt;`
Callbacks called on any received VSCP event message

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_onVariable"></a>

##### client.onVariable : `function`
Callback called on any received variable (see LSTVAR command)

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_onTableRow"></a>

##### client.onTableRow : `function`
Callback called on any received table row (see GT command)

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_state"></a>

##### client.state : `number`
VSCP websocket is not connected right now

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_substate"></a>

##### client.substate : `number`
VSCP event traffic is closed

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_states"></a>

##### client.states : `enum`
States of the VSCP websocket

**Kind**: instance enum of [`Client`](#vscp.ws.Client)  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| DISCONNECTED | `number` | <code>0</code> | Not connected |
| CONNECTED | `number` | <code>1</code> | Standard websocket connection established |
| AUTHENTICATED | `number` | <code>2</code> | Authentication with VSCP server successful |

<a id="vscp_dot_ws_dot_Client_plus_substates"></a>

##### client.substates : `enum`
Substates of the VSCP websocket

**Kind**: instance enum of [`Client`](#vscp.ws.Client)  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| CLOSED | `number` | <code>0</code> | No events sent from server |
| OPEN | `number` | <code>1</code> | Events sent from server |

<a id="vscp_dot_ws_dot_Client_plus_addEventListener"></a>

##### client.addEventListener(eventListener)
Add a event listener.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  

| Param | Type | Description |
| --- | --- | --- |
| eventListener | `function` | Event listener function |

<a id="vscp_dot_ws_dot_Client_plus_removeEventListener"></a>

##### client.removeEventListener(eventListener)
Remove a event listener.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  

| Param | Type | Description |
| --- | --- | --- |
| eventListener | `function` | Event listener function |

<a id="vscp_dot_ws_dot_Client_plus_getAuthHash"></a>

##### client.getAuthHash(userName, password, str_iv) ⇒ `string`
Calculates the VSCP server websocket authentication hash.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `string` - Authentication ("encrypted user:password")  

| Param | Type | Description |
| --- | --- | --- |
| userName | `string` | User name |
| password | `string` | Password |
| str_iv | `string` | 16 random byte iv in hex form |

<a id="vscp_dot_ws_dot_Client_plus_onWebSocketOpen"></a>

##### client.onWebSocketOpen()
This function is called by the websocket in case the connection is established.
It will initiate the authentication with the VSCP server.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_onWebSocketClose"></a>

##### client.onWebSocketClose()
This function is called by the websocket in case that the connection is closed.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_onWebSocketMessage"></a>

##### client.onWebSocketMessage(msg)
This function is called for any websocket message (VSCP server response message).

**Kind**: instance method of [`Client`](#vscp.ws.Client)  

| Param | Type | Description |
| --- | --- | --- |
| msg | `string` | VSCP server response message |

<a id="vscp_dot_ws_dot_Client_plus_connect"></a>

##### client.connect(options) ⇒ `object`
Connect to a VSCP server with the given URL.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.url | `string` | URL to the VSCP server, e.g. ws:// |
| options.userName | `string` | User name used for authentication |
| options.password | `string` | Password used for authentication |
| options.vscpkey | `string` | Secret key used for authentication |
| [options.onMessage] | `function` | Function which is called on any received VSCP response message. |
| [options.onSuccess] | `function` | Function which is called on a successful connection establishment. |
| [options.onError] | `function` | Function which is called on a failed connection establishment or in case the connection is lost during the session. |

<a id="vscp_dot_ws_dot_Client_plus_disconnect"></a>

##### client.disconnect(options) ⇒ `object`
Disconnect from a VSCP server.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| [options.onSuccess] | `function` | Function which is called on a successful disconnection. |

<a id="vscp_dot_ws_dot_Client_plus_start"></a>

##### client.start(options) ⇒ `object`
Start receiving events.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_ws_dot_Client_plus_stop"></a>

##### client.stop(options) ⇒ `object`
Stop receiving events.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_ws_dot_Client_plus_clearQueue"></a>

##### client.clearQueue(options) ⇒ `object`
Clear the VSCP event queue on the server side.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_ws_dot_Client_plus_sendEvent"></a>

##### client.sendEvent(options) ⇒ `object`
Send a VSCP event to the VSCP server.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.event | [`Event`](#vscp.Event) | VSCP event to send |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_ws_dot_Client_plus_setFilter"></a>

##### client.setFilter(options) ⇒ `object`
Set a filter in the VSCP server for VSCP events.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| [options.filterPriority] | `number` | Priority filter (default: 0) |
| [options.filterClass] | `number` | Class filter (default: 0) |
| [options.filterType] | `number` | Type filter (default: 0) |
| [options.filterGuid] | `Array.&lt;number&gt;` \| `string` | GUID filter (default: 0) |
| [options.maskPriority] | `number` | Priority mask (default: 0) |
| [options.maskClass] | `number` | Class mask (default: 0xffff) |
| [options.maskType] | `number` | Type mask (default: 0xffff) |
| [options.maskGuid] | `Array.&lt;number&gt;` \| `string` | GUID mask (default: 0) |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_ws_dot_Client_plus_createVar"></a>

##### client.createVar(options) ⇒ `object`
Create a a VSCP remote variable.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.name | `string` | Variable name |
| [options.type] | `number` | Variable type (default: string) |
| [options.accessrights] | `number` | Variable value (default: 744) |
| options.persistency | `boolean` | Variable is persistent (true) or not (false) |
| options.value | `string` | Variable Value |
| [options.note] | `string` | Variable note (optional) |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_ws_dot_Client_plus_readVar"></a>

##### client.readVar(options) ⇒ `object`
Read a value from a VSCP server variable.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.name | `string` | Variable name |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_ws_dot_Client_plus_writeVar"></a>

##### client.writeVar(options) ⇒ `object`
Write a value to a VSCP server variable.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.name | `string` | Variable name |
| options.value | `string` | Variable value |
| options.type | `number` | Variable type |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_ws_dot_Client_plus_resetVar"></a>

##### client.resetVar(options) ⇒ `object`
Reset a VSCP server variable.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.name | `string` | Variable name |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_ws_dot_Client_plus_removeVar"></a>

##### client.removeVar(options) ⇒ `object`
Remove a VSCP server variable.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.name | `string` | Variable name |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_ws_dot_Client_plus_lengthVar"></a>

##### client.lengthVar(options) ⇒ `object`
Get a VSCP server variable length.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.name | `string` | Variable name |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_ws_dot_Client_plus_lastChangeVar"></a>

##### client.lastChangeVar(options) ⇒ `object`
Get last change of a VSCP server variable.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.name | `string` | Variable name |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_ws_dot_Client_plus_listVar"></a>

##### client.listVar(options) ⇒ `object`
List all VSCP server variables.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| [options.regex] | `string` | Regular expression to filter variables |
| options.onVariable | `function` | Function which is called per variable |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_ws_dot_Client_plus_readTable"></a>

##### client.readTable(options) ⇒ `object`
Get data from a table.
If "begin" and "end" are omitted, the whole table is returned.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.name | `string` | Table name |
| options.begin | `string` | Date when to begin ( ISO form YY-MM-DD HH:MM:SS ) |
| options.end | `string` | Date when to end ( ISO form YY-MM-DD HH:MM:SS ) |
| options.onTableRow | `function` | Function which is called on every received table row |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_getVarTypeName"></a>

### vscp.getVarTypeName(n) ⇒ `string`
Get variable type name as string by numerical code.

**Kind**: static method of [`vscp`](#vscp)  
**Returns**: `string` - Variable type name  

| Param | Type | Description |
| --- | --- | --- |
| n | `number` | Numerical code |

<a id="vscp_dot_getVarTypeNumerical"></a>

### vscp.getVarTypeNumerical(str) ⇒ `number`
Get numerical code of variable type from string.

**Kind**: static method of [`vscp`](#vscp)  
**Returns**: `number` - Variable type numerical code  

| Param | Type | Description |
| --- | --- | --- |
| str | `string` | Variable type name |

<a id="vscp_dot_getEditorModeFromType"></a>

### vscp.getEditorModeFromType(n) ⇒ `string`
Get ace editor formation mode string from numerical variable type code.

**Kind**: static method of [`vscp`](#vscp)  
**Returns**: `string` - Ace editro formation mode string  

| Param | Type | Description |
| --- | --- | --- |
| n | `number` | Variable type numerical code |

<a id="vscp_dot_b64EncodeUnicode"></a>

### vscp.b64EncodeUnicode(str) ⇒ `string`
Encode base64 unicode safe.

**Kind**: static method of [`vscp`](#vscp)  
**Returns**: `string` - Base64  

| Param | Type | Description |
| --- | --- | --- |
| str | `string` | Unicode string |

<a id="vscp_dot_b64DecodeUnicode"></a>

### vscp.b64DecodeUnicode(str) ⇒ `string`
Decode base64 unicode safe.

**Kind**: static method of [`vscp`](#vscp)  
**Returns**: `string` - Unicode string  

| Param | Type | Description |
| --- | --- | --- |
| str | `string` | Base64 |

<a id="vscp_dot_isBase64Type"></a>

### vscp.isBase64Type(type) ⇒ `bool`
Determine whether the given variable type is a type stored base64 encoded or not.

**Kind**: static method of [`vscp`](#vscp)  
**Returns**: `bool` - Stored base64 encoded (true) or not (false).  

| Param | Type | Description |
| --- | --- | --- |
| type | `number` | Variable type numerical code |

<a id="vscp_dot_decodeValueIfBase64"></a>

### vscp.decodeValueIfBase64(type, value) ⇒ `string`
Decode the value if its base64 encoded.

**Kind**: static method of [`vscp`](#vscp)  
**Returns**: `string` - Decoded value if type is base64 encoded type otherwise original value.  

| Param | Type | Description |
| --- | --- | --- |
| type | `number` | Variable type numerical code |
| value | `string` | Value |

<a id="vscp_dot_encodeValueIfBase64"></a>

### vscp.encodeValueIfBase64(type, value) ⇒ `string`
Encode the value if its stored in base64.

**Kind**: static method of [`vscp`](#vscp)  
**Returns**: `string` - Encoded value if type is base64 encoded type otherwise original value.  

| Param | Type | Description |
| --- | --- | --- |
| type | `number` | Variable type numerical code |
| value | `string` | Value |

<a id="vscp"></a>

## vscp : `object`
Namespace for all functionality of the VSCP provided libraries.

**Kind**: global namespace  

* [vscp](#vscp) : `object`
    * [.Event](#vscp_dot_Event)
        * [new vscp.Event(options)](#new_vscp_dot_Event_new)
        * [.vscpHead](#vscp_dot_Event_plus_vscpHead) : `number`
        * [.vscpClass](#vscp_dot_Event_plus_vscpClass) : `number`
        * [.vscpType](#vscp_dot_Event_plus_vscpType) : `number`
        * [.vscpObId](#vscp_dot_Event_plus_vscpObId) : `number`
        * [.vscpTimeStamp](#vscp_dot_Event_plus_vscpTimeStamp) : `number`
        * [.vscpDateTime](#vscp_dot_Event_plus_vscpDateTime) : `date`
        * [.vscpGuid](#vscp_dot_Event_plus_vscpGuid) : `string`
        * [.vscpData](#vscp_dot_Event_plus_vscpData) : `Array.&lt;number&gt;` \| `string`
        * [.setIPV6Addr()](#vscp_dot_Event_plus_setIPV6Addr)
        * [.isIPV6Addr()](#vscp_dot_Event_plus_isIPV6Addr) ⇒ `boolean`
        * [.setDumbNode()](#vscp_dot_Event_plus_setDumbNode)
        * [.isDumbNode()](#vscp_dot_Event_plus_isDumbNode) ⇒ `boolean`
        * [.setPriority(priority)](#vscp_dot_Event_plus_setPriority)
        * [.getPriority()](#vscp_dot_Event_plus_getPriority) ⇒ `number`
        * [.setHardCodedAddr()](#vscp_dot_Event_plus_setHardCodedAddr)
        * [.isHardCodedAddr()](#vscp_dot_Event_plus_isHardCodedAddr) ⇒ `boolean`
        * [.setDoNotCalcCRC()](#vscp_dot_Event_plus_setDoNotCalcCRC)
        * [.isDoNotCalcCRC()](#vscp_dot_Event_plus_isDoNotCalcCRC) ⇒ `boolean`
        * [.getText()](#vscp_dot_Event_plus_getText) ⇒ `string`
    * [.version](#vscp_dot_version)
    * [.constants](#vscp_dot_constants) : `object`
        * [.classes](#vscp_dot_constants_dot_classes) : `enum`
        * [.types](#vscp_dot_constants_dot_types) : `enum`
        * [.priorities](#vscp_dot_constants_dot_priorities) : `enum`
        * [.varTypes](#vscp_dot_constants_dot_varTypes) : `enum`
        * [.varTypeNames](#vscp_dot_constants_dot_varTypeNames)
    * [.utility](#vscp_dot_utility) : `object`
        * [.readValue(input)](#vscp_dot_utility_dot_readValue) ⇒ `number`
        * [.getTime()](#vscp_dot_utility_dot_getTime) ⇒ `string`
        * [.guidToStr(guid)](#vscp_dot_utility_dot_guidToStr) ⇒ `string`
        * [.strToGuid(guid)](#vscp_dot_utility_dot_strToGuid) ⇒ `Array.&lt;number&gt;`
        * [.getNodeId(guid)](#vscp_dot_utility_dot_getNodeId) ⇒ `number`
    * [.mdf](#vscp_dot_mdf) : `object`
        * [.Register](#vscp_dot_mdf_dot_Register)
            * [new vscp.mdf.Register()](#new_vscp_dot_mdf_dot_Register_new)
            * [.name](#vscp_dot_mdf_dot_Register_plus_name) : `string`
            * [.description](#vscp_dot_mdf_dot_Register_plus_description) : `string`
            * [.readAccess](#vscp_dot_mdf_dot_Register_plus_readAccess) : `boolean`
            * [.writeAccess](#vscp_dot_mdf_dot_Register_plus_writeAccess) : `boolean`
            * [.page](#vscp_dot_mdf_dot_Register_plus_page) : `number`
            * [.offset](#vscp_dot_mdf_dot_Register_plus_offset) : `number`
            * [.value](#vscp_dot_mdf_dot_Register_plus_value) : `number`
            * [.dirty](#vscp_dot_mdf_dot_Register_plus_dirty) : `number`
            * [.userData](#vscp_dot_mdf_dot_Register_plus_userData) : `object`
            * [.setValue(value)](#vscp_dot_mdf_dot_Register_plus_setValue)
        * [.Abstraction](#vscp_dot_mdf_dot_Abstraction)
            * [new vscp.mdf.Abstraction()](#new_vscp_dot_mdf_dot_Abstraction_new)
            * [.name](#vscp_dot_mdf_dot_Abstraction_plus_name) : `string`
            * [.description](#vscp_dot_mdf_dot_Abstraction_plus_description) : `string`
            * [.readAccess](#vscp_dot_mdf_dot_Abstraction_plus_readAccess) : `boolean`
            * [.writeAccess](#vscp_dot_mdf_dot_Abstraction_plus_writeAccess) : `boolean`
            * [.id](#vscp_dot_mdf_dot_Abstraction_plus_id) : `string`
            * [.page](#vscp_dot_mdf_dot_Abstraction_plus_page) : `number`
            * [.offset](#vscp_dot_mdf_dot_Abstraction_plus_offset) : `number`
            * [.value](#vscp_dot_mdf_dot_Abstraction_plus_value) : `number`
            * [.type](#vscp_dot_mdf_dot_Abstraction_plus_type) : `string`
            * [.defValue](#vscp_dot_mdf_dot_Abstraction_plus_defValue) : `number`
            * [.dirty](#vscp_dot_mdf_dot_Abstraction_plus_dirty) : `number`
            * [.userData](#vscp_dot_mdf_dot_Abstraction_plus_userData) : `object`
            * [.setValue(value)](#vscp_dot_mdf_dot_Abstraction_plus_setValue)
        * [.constants](#vscp_dot_mdf_dot_constants) : `object`
            * [.TYPE_SIZES](#vscp_dot_mdf_dot_constants_dot_TYPE_SIZES) : `enum`
            * [.CONVERSION_FROM_DECIMAL](#vscp_dot_mdf_dot_constants_dot_CONVERSION_FROM_DECIMAL)
            * [.CONVERSION_TO_DECIMAL](#vscp_dot_mdf_dot_constants_dot_CONVERSION_TO_DECIMAL)
            * [.RANGE](#vscp_dot_mdf_dot_constants_dot_RANGE)
        * [.timeout](#vscp_dot_mdf_dot_timeout) : `number`
        * [.load(options)](#vscp_dot_mdf_dot_load)
        * [.loadLocal(options)](#vscp_dot_mdf_dot_loadLocal)
        * [.readAbstractValue(options)](#vscp_dot_mdf_dot_readAbstractValue)
        * [.writeAbstractValue(options)](#vscp_dot_mdf_dot_writeAbstractValue)
        * [.writeAbstractBits(options)](#vscp_dot_mdf_dot_writeAbstractBits)
        * [.getRegisters(options)](#vscp_dot_mdf_dot_getRegisters) ⇒ [`Array.&lt;Register&gt;`](#vscp.mdf.Register)
        * [.getAbstractions(options)](#vscp_dot_mdf_dot_getAbstractions) ⇒ [`Array.&lt;Abstraction&gt;`](#vscp.mdf.Abstraction)
    * [.measurement](#vscp_dot_measurement) : `object`
        * [.Decoder](#vscp_dot_measurement_dot_Decoder)
            * [new vscp.measurement.Decoder(options)](#new_vscp_dot_measurement_dot_Decoder_new)
            * [.client](#vscp_dot_measurement_dot_Decoder_plus_client) : [`Client`](#vscp.ws.Client)
            * [.onValue](#vscp_dot_measurement_dot_Decoder_plus_onValue) : `function`
            * [.filter](#vscp_dot_measurement_dot_Decoder_plus_filter) : `object`
        * [.constants](#vscp_dot_measurement_dot_constants) : `object`
            * [.units](#vscp_dot_measurement_dot_constants_dot_units) : `Array.&lt;string&gt;`
        * [.timeout](#vscp_dot_measurement_dot_timeout) : `number`
        * [.toFixed(value, precision)](#vscp_dot_measurement_dot_toFixed) ⇒ `number`
        * [.varInteger2Float(data)](#vscp_dot_measurement_dot_varInteger2Float) ⇒ `number`
        * [.getDataCoding(data)](#vscp_dot_measurement_dot_getDataCoding) ⇒ `number`
        * [.getUnitFromDataCoding(data)](#vscp_dot_measurement_dot_getUnitFromDataCoding) ⇒ `number`
        * [.getSensorIndexFromDataCoding(data)](#vscp_dot_measurement_dot_getSensorIndexFromDataCoding) ⇒ `number`
        * [.decodeClass10(data)](#vscp_dot_measurement_dot_decodeClass10) ⇒ `number`
        * [.decodeClass60Number(data)](#vscp_dot_measurement_dot_decodeClass60Number) ⇒ `number`
        * [.decodeClass65Number(data)](#vscp_dot_measurement_dot_decodeClass65Number) ⇒ `number`
        * [.convertFahrenheitToKelvin(value)](#vscp_dot_measurement_dot_convertFahrenheitToKelvin) ⇒ `number`
        * [.convertFahrenheitToCelsius(value)](#vscp_dot_measurement_dot_convertFahrenheitToCelsius) ⇒ `number`
        * [.convertCelsiusToFahrenheit(value)](#vscp_dot_measurement_dot_convertCelsiusToFahrenheit) ⇒ `number`
        * [.convertKelvinToCelsius(value)](#vscp_dot_measurement_dot_convertKelvinToCelsius) ⇒ `number`
        * [.convertCelsiusToKelvin(value)](#vscp_dot_measurement_dot_convertCelsiusToKelvin) ⇒ `number`
        * [.convertKelvinToFahrenheit(value)](#vscp_dot_measurement_dot_convertKelvinToFahrenheit) ⇒ `number`
        * [.convertMeterToFeet(value)](#vscp_dot_measurement_dot_convertMeterToFeet) ⇒ `number`
        * [.convertFeetToMeter(value)](#vscp_dot_measurement_dot_convertFeetToMeter) ⇒ `number`
        * [.convertMeterToInch(value)](#vscp_dot_measurement_dot_convertMeterToInch) ⇒ `number`
        * [.convertInchToMeter(value)](#vscp_dot_measurement_dot_convertInchToMeter) ⇒ `number`
    * [.register](#vscp_dot_register) : `object`
        * [.constants](#vscp_dot_register_dot_constants) : `enum`
        * [.timeout](#vscp_dot_register_dot_timeout) : `number`
        * [.read(options)](#vscp_dot_register_dot_read)
        * [.write(options)](#vscp_dot_register_dot_write)
        * [.writeBits(options)](#vscp_dot_register_dot_writeBits)
        * [.readAlarmStatus(options)](#vscp_dot_register_dot_readAlarmStatus)
        * [.readVscpVersion(options)](#vscp_dot_register_dot_readVscpVersion)
        * [.readNodeControlFlags(options)](#vscp_dot_register_dot_readNodeControlFlags)
        * [.readUserId(options)](#vscp_dot_register_dot_readUserId)
        * [.readManufacturerDevId(options)](#vscp_dot_register_dot_readManufacturerDevId)
        * [.readManufacturerSubDevId(options)](#vscp_dot_register_dot_readManufacturerSubDevId)
        * [.readNicknameId(options)](#vscp_dot_register_dot_readNicknameId)
        * [.readSelectedPage(options)](#vscp_dot_register_dot_readSelectedPage)
        * [.readFirmwareVersion(options)](#vscp_dot_register_dot_readFirmwareVersion)
        * [.readBootloaderAlgorithm(options)](#vscp_dot_register_dot_readBootloaderAlgorithm)
        * [.readUsedPages(options)](#vscp_dot_register_dot_readUsedPages)
        * [.readStdDevFamCode(options)](#vscp_dot_register_dot_readStdDevFamCode)
        * [.readStdDevType(options)](#vscp_dot_register_dot_readStdDevType)
        * [.readGUID(options)](#vscp_dot_register_dot_readGUID)
        * [.readMdfUrl(options)](#vscp_dot_register_dot_readMdfUrl)
    * [.rest](#vscp_dot_rest) : `object`
        * [.Client](#vscp_dot_rest_dot_Client)
            * [new vscp.rest.Client(config)](#new_vscp_dot_rest_dot_Client_new)
            * [.baseUrl](#vscp_dot_rest_dot_Client_plus_baseUrl) : `string`
            * [.pathPrefix](#vscp_dot_rest_dot_Client_plus_pathPrefix) : `string`
            * [.apiVersion](#vscp_dot_rest_dot_Client_plus_apiVersion) : `string`
            * [.sessionKey](#vscp_dot_rest_dot_Client_plus_sessionKey) : `string`
            * [.openSession(options)](#vscp_dot_rest_dot_Client_plus_openSession) ⇒ `object`
            * [.closeSession([options])](#vscp_dot_rest_dot_Client_plus_closeSession) ⇒ `object`
            * [.getStatus([options])](#vscp_dot_rest_dot_Client_plus_getStatus) ⇒ `object`
            * [.sendEvent(options)](#vscp_dot_rest_dot_Client_plus_sendEvent) ⇒ `object`
            * [.readEvent([options])](#vscp_dot_rest_dot_Client_plus_readEvent) ⇒ `object`
            * [.setFilter(options)](#vscp_dot_rest_dot_Client_plus_setFilter) ⇒ `object`
            * [.clearQueue([options])](#vscp_dot_rest_dot_Client_plus_clearQueue) ⇒ `object`
            * [.createVar(options)](#vscp_dot_rest_dot_Client_plus_createVar) ⇒ `object`
            * [.readVar(options)](#vscp_dot_rest_dot_Client_plus_readVar) ⇒ `object`
            * [.writeVar(options)](#vscp_dot_rest_dot_Client_plus_writeVar) ⇒ `object`
            * [.removeVar(options)](#vscp_dot_rest_dot_Client_plus_removeVar) ⇒ `object`
            * [.listVar(options)](#vscp_dot_rest_dot_Client_plus_listVar) ⇒ `object`
    * [.service](#vscp_dot_service) : `object`
        * [.Container](#vscp_dot_service_dot_Container)
            * [new vscp.service.Container(options)](#new_vscp_dot_service_dot_Container_new)
            * [.client](#vscp_dot_service_dot_Container_plus_client) : [`Client`](#vscp.ws.Client)
            * [.name](#vscp_dot_service_dot_Container_plus_name) : `string`
            * [.data](#vscp_dot_service_dot_Container_plus_data) : `Array.&lt;object&gt;`
            * [.separator](#vscp_dot_service_dot_Container_plus_separator) : `Array.&lt;object&gt;`
            * [.create(options)](#vscp_dot_service_dot_Container_plus_create)
            * [.write(options)](#vscp_dot_service_dot_Container_plus_write)
            * [.read(options)](#vscp_dot_service_dot_Container_plus_read)
        * [.timeout](#vscp_dot_service_dot_timeout) : `number`
        * [.whoIsThere(options)](#vscp_dot_service_dot_whoIsThere)
        * [.scan(options)](#vscp_dot_service_dot_scan)
    * [.widget](#vscp_dot_widget) : `object`
        * [.Button](#vscp_dot_widget_dot_Button)
            * [new vscp.widget.Button(options)](#new_vscp_dot_widget_dot_Button_new)
            * [.draw()](#vscp_dot_widget_dot_Button_plus_draw)
            * [.setEnabled(value)](#vscp_dot_widget_dot_Button_plus_setEnabled)
        * [.Thermometer](#vscp_dot_widget_dot_Thermometer)
            * [new vscp.widget.Thermometer(options)](#new_vscp_dot_widget_dot_Thermometer_new)
            * [.draw()](#vscp_dot_widget_dot_Thermometer_plus_draw)
            * [.setEnabled(value)](#vscp_dot_widget_dot_Thermometer_plus_setEnabled)
        * [.generateUUID()](#vscp_dot_widget_dot_generateUUID) ⇒ `string`
        * [.Image(options)](#vscp_dot_widget_dot_Image)
    * [.wizard](#vscp_dot_wizard) : `object`
        * [.MessageBox](#vscp_dot_wizard_dot_MessageBox)
            * [new vscp.wizard.MessageBox(options)](#new_vscp_dot_wizard_dot_MessageBox_new)
            * [.func](#vscp_dot_wizard_dot_MessageBox_plus_func) : `string`
            * [.head](#vscp_dot_wizard_dot_MessageBox_plus_head) : `string`
            * [.description](#vscp_dot_wizard_dot_MessageBox_plus_description) : `string`
            * [.variableType](#vscp_dot_wizard_dot_MessageBox_plus_variableType) : `string`
            * [.variableName](#vscp_dot_wizard_dot_MessageBox_plus_variableName) : `string`
            * [.variableValue](#vscp_dot_wizard_dot_MessageBox_plus_variableValue) : `string`
            * [.parse($messageBox)](#vscp_dot_wizard_dot_MessageBox_plus_parse)
        * [.WriteBitInReg](#vscp_dot_wizard_dot_WriteBitInReg)
            * [new vscp.wizard.WriteBitInReg(options)](#new_vscp_dot_wizard_dot_WriteBitInReg_new)
            * [.pos](#vscp_dot_wizard_dot_WriteBitInReg_plus_pos) : `number`
            * [.page](#vscp_dot_wizard_dot_WriteBitInReg_plus_page) : `number`
            * [.offset](#vscp_dot_wizard_dot_WriteBitInReg_plus_offset) : `number`
            * [.width](#vscp_dot_wizard_dot_WriteBitInReg_plus_width) : `number`
            * [.value](#vscp_dot_wizard_dot_WriteBitInReg_plus_value) : `number`
            * [.variableName](#vscp_dot_wizard_dot_WriteBitInReg_plus_variableName) : `string`
            * [.parse(writeBitInReg)](#vscp_dot_wizard_dot_WriteBitInReg_plus_parse)
        * [.WriteBitInAbstraction](#vscp_dot_wizard_dot_WriteBitInAbstraction)
            * [new vscp.wizard.WriteBitInAbstraction(options)](#new_vscp_dot_wizard_dot_WriteBitInAbstraction_new)
            * [.id](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_id) : `string`
            * [.pos](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_pos) : `number`
            * [.width](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_width) : `number`
            * [.value](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_value) : `number`
            * [.variableName](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_variableName) : `string`
            * [.parse($writeBitInAbstraction)](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_parse)
        * [.WriteRegister](#vscp_dot_wizard_dot_WriteRegister)
            * [new vscp.wizard.WriteRegister(options)](#new_vscp_dot_wizard_dot_WriteRegister_new)
            * [.page](#vscp_dot_wizard_dot_WriteRegister_plus_page) : `number`
            * [.offset](#vscp_dot_wizard_dot_WriteRegister_plus_offset) : `number`
            * [.value](#vscp_dot_wizard_dot_WriteRegister_plus_value) : `number`
            * [.variableName](#vscp_dot_wizard_dot_WriteRegister_plus_variableName) : `string`
            * [.parse($writeRegister)](#vscp_dot_wizard_dot_WriteRegister_plus_parse)
        * [.WriteAbstraction](#vscp_dot_wizard_dot_WriteAbstraction)
            * [new vscp.wizard.WriteAbstraction(options)](#new_vscp_dot_wizard_dot_WriteAbstraction_new)
            * [.id](#vscp_dot_wizard_dot_WriteAbstraction_plus_id) : `string`
            * [.value](#vscp_dot_wizard_dot_WriteAbstraction_plus_value) : `number`
            * [.variableName](#vscp_dot_wizard_dot_WriteAbstraction_plus_variableName) : `number`
            * [.parse($writeAbstraction)](#vscp_dot_wizard_dot_WriteAbstraction_plus_parse)
        * [.Recipe](#vscp_dot_wizard_dot_Recipe)
            * [new vscp.wizard.Recipe(options)](#new_vscp_dot_wizard_dot_Recipe_new)
            * [.name](#vscp_dot_wizard_dot_Recipe_plus_name) : `string`
            * [.description](#vscp_dot_wizard_dot_Recipe_plus_description) : `string`
            * [.writeBitInRegs](#vscp_dot_wizard_dot_Recipe_plus_writeBitInRegs) : [`Array.&lt;WriteBitInReg&gt;`](#vscp.wizard.WriteBitInReg)
            * [.writeBitInAbstractions](#vscp_dot_wizard_dot_Recipe_plus_writeBitInAbstractions) : `Array.&lt;vscp.wizard.WriteBitAbstractions&gt;`
            * [.writeRegisters](#vscp_dot_wizard_dot_Recipe_plus_writeRegisters) : [`Array.&lt;WriteRegister&gt;`](#vscp.wizard.WriteRegister)
            * [.writeAbstractions](#vscp_dot_wizard_dot_Recipe_plus_writeAbstractions) : [`Array.&lt;WriteAbstraction&gt;`](#vscp.wizard.WriteAbstraction)
            * [.messageBoxes](#vscp_dot_wizard_dot_Recipe_plus_messageBoxes) : [`Array.&lt;MessageBox&gt;`](#vscp.wizard.MessageBox)
            * [.mdf](#vscp_dot_wizard_dot_Recipe_plus_mdf) : `object`
            * [.parse($recipe)](#vscp_dot_wizard_dot_Recipe_plus_parse)
            * [.write(options)](#vscp_dot_wizard_dot_Recipe_plus_write)
        * [.getRecipes(options)](#vscp_dot_wizard_dot_getRecipes) ⇒ [`Array.&lt;Recipe&gt;`](#vscp.wizard.Recipe)
    * [.ws](#vscp_dot_ws) : `object`
        * [.Client](#vscp_dot_ws_dot_Client)
            * [new vscp.ws.Client()](#new_vscp_dot_ws_dot_Client_new)
            * [.socket](#vscp_dot_ws_dot_Client_plus_socket) : `object`
            * [.url](#vscp_dot_ws_dot_Client_plus_url) : `string`
            * [.userName](#vscp_dot_ws_dot_Client_plus_userName) : `string`
            * [.userId](#vscp_dot_ws_dot_Client_plus_userId) : `number`
            * [.userFullname](#vscp_dot_ws_dot_Client_plus_userFullname) : `string`
            * [.userRights](#vscp_dot_ws_dot_Client_plus_userRights) : `array`
            * [.userRemotes](#vscp_dot_ws_dot_Client_plus_userRemotes) : `array`
            * [.userEvents](#vscp_dot_ws_dot_Client_plus_userEvents) : `array`
            * [.userNote](#vscp_dot_ws_dot_Client_plus_userNote) : `string`
            * [.password](#vscp_dot_ws_dot_Client_plus_password) : `string`
            * [.vscpkey](#vscp_dot_ws_dot_Client_plus_vscpkey) : `string`
            * [.onConnError](#vscp_dot_ws_dot_Client_plus_onConnError) : `function`
            * [.onMessage](#vscp_dot_ws_dot_Client_plus_onMessage) : `function`
            * [.onEvent](#vscp_dot_ws_dot_Client_plus_onEvent) : `Array.&lt;function()&gt;`
            * [.onVariable](#vscp_dot_ws_dot_Client_plus_onVariable) : `function`
            * [.onTableRow](#vscp_dot_ws_dot_Client_plus_onTableRow) : `function`
            * [.state](#vscp_dot_ws_dot_Client_plus_state) : `number`
            * [.substate](#vscp_dot_ws_dot_Client_plus_substate) : `number`
            * [.states](#vscp_dot_ws_dot_Client_plus_states) : `enum`
            * [.substates](#vscp_dot_ws_dot_Client_plus_substates) : `enum`
            * [.addEventListener(eventListener)](#vscp_dot_ws_dot_Client_plus_addEventListener)
            * [.removeEventListener(eventListener)](#vscp_dot_ws_dot_Client_plus_removeEventListener)
            * [.getAuthHash(userName, password, str_iv)](#vscp_dot_ws_dot_Client_plus_getAuthHash) ⇒ `string`
            * [.onWebSocketOpen()](#vscp_dot_ws_dot_Client_plus_onWebSocketOpen)
            * [.onWebSocketClose()](#vscp_dot_ws_dot_Client_plus_onWebSocketClose)
            * [.onWebSocketMessage(msg)](#vscp_dot_ws_dot_Client_plus_onWebSocketMessage)
            * [.connect(options)](#vscp_dot_ws_dot_Client_plus_connect) ⇒ `object`
            * [.disconnect(options)](#vscp_dot_ws_dot_Client_plus_disconnect) ⇒ `object`
            * [.start(options)](#vscp_dot_ws_dot_Client_plus_start) ⇒ `object`
            * [.stop(options)](#vscp_dot_ws_dot_Client_plus_stop) ⇒ `object`
            * [.clearQueue(options)](#vscp_dot_ws_dot_Client_plus_clearQueue) ⇒ `object`
            * [.sendEvent(options)](#vscp_dot_ws_dot_Client_plus_sendEvent) ⇒ `object`
            * [.setFilter(options)](#vscp_dot_ws_dot_Client_plus_setFilter) ⇒ `object`
            * [.createVar(options)](#vscp_dot_ws_dot_Client_plus_createVar) ⇒ `object`
            * [.readVar(options)](#vscp_dot_ws_dot_Client_plus_readVar) ⇒ `object`
            * [.writeVar(options)](#vscp_dot_ws_dot_Client_plus_writeVar) ⇒ `object`
            * [.resetVar(options)](#vscp_dot_ws_dot_Client_plus_resetVar) ⇒ `object`
            * [.removeVar(options)](#vscp_dot_ws_dot_Client_plus_removeVar) ⇒ `object`
            * [.lengthVar(options)](#vscp_dot_ws_dot_Client_plus_lengthVar) ⇒ `object`
            * [.lastChangeVar(options)](#vscp_dot_ws_dot_Client_plus_lastChangeVar) ⇒ `object`
            * [.listVar(options)](#vscp_dot_ws_dot_Client_plus_listVar) ⇒ `object`
            * [.readTable(options)](#vscp_dot_ws_dot_Client_plus_readTable) ⇒ `object`
    * [.getVarTypeName(n)](#vscp_dot_getVarTypeName) ⇒ `string`
    * [.getVarTypeNumerical(str)](#vscp_dot_getVarTypeNumerical) ⇒ `number`
    * [.getEditorModeFromType(n)](#vscp_dot_getEditorModeFromType) ⇒ `string`
    * [.b64EncodeUnicode(str)](#vscp_dot_b64EncodeUnicode) ⇒ `string`
    * [.b64DecodeUnicode(str)](#vscp_dot_b64DecodeUnicode) ⇒ `string`
    * [.isBase64Type(type)](#vscp_dot_isBase64Type) ⇒ `bool`
    * [.decodeValueIfBase64(type, value)](#vscp_dot_decodeValueIfBase64) ⇒ `string`
    * [.encodeValueIfBase64(type, value)](#vscp_dot_encodeValueIfBase64) ⇒ `string`

<a id="vscp_dot_Event"></a>

### vscp.Event
**Kind**: static class of [`vscp`](#vscp)  

* [.Event](#vscp_dot_Event)
    * [new vscp.Event(options)](#new_vscp_dot_Event_new)
    * [.vscpHead](#vscp_dot_Event_plus_vscpHead) : `number`
    * [.vscpClass](#vscp_dot_Event_plus_vscpClass) : `number`
    * [.vscpType](#vscp_dot_Event_plus_vscpType) : `number`
    * [.vscpObId](#vscp_dot_Event_plus_vscpObId) : `number`
    * [.vscpTimeStamp](#vscp_dot_Event_plus_vscpTimeStamp) : `number`
    * [.vscpDateTime](#vscp_dot_Event_plus_vscpDateTime) : `date`
    * [.vscpGuid](#vscp_dot_Event_plus_vscpGuid) : `string`
    * [.vscpData](#vscp_dot_Event_plus_vscpData) : `Array.&lt;number&gt;` \| `string`
    * [.setIPV6Addr()](#vscp_dot_Event_plus_setIPV6Addr)
    * [.isIPV6Addr()](#vscp_dot_Event_plus_isIPV6Addr) ⇒ `boolean`
    * [.setDumbNode()](#vscp_dot_Event_plus_setDumbNode)
    * [.isDumbNode()](#vscp_dot_Event_plus_isDumbNode) ⇒ `boolean`
    * [.setPriority(priority)](#vscp_dot_Event_plus_setPriority)
    * [.getPriority()](#vscp_dot_Event_plus_getPriority) ⇒ `number`
    * [.setHardCodedAddr()](#vscp_dot_Event_plus_setHardCodedAddr)
    * [.isHardCodedAddr()](#vscp_dot_Event_plus_isHardCodedAddr) ⇒ `boolean`
    * [.setDoNotCalcCRC()](#vscp_dot_Event_plus_setDoNotCalcCRC)
    * [.isDoNotCalcCRC()](#vscp_dot_Event_plus_isDoNotCalcCRC) ⇒ `boolean`
    * [.getText()](#vscp_dot_Event_plus_getText) ⇒ `string`

<a id="new_vscp_dot_Event_new"></a>

#### new vscp.Event(options)
VSCP event.


| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.vscpHead | `number` | Event head |
| options.guidIsIpV6Addr | `boolean` | GUID is a IPv6 address |
| options.dumpNode | `boolean` | Node is a dump node |
| options.vscpPriority | `number` | Priority |
| options.vscpHardCoded | `boolean` | Hard coded node id |
| options.vscpCalcCRC | `boolean` | Calculate CRC |
| options.vscpClass | `number` | VSCP class |
| options.vscpType | `number` | VSCP type |
| options.vscpObId | `number` | Object id |
| options.vscpTimeStamp | `number` | Timestamp |
| options.vscpGuid | `string` | GUID string |
| options.vscpData | `Array.&lt;number&gt;` \| `string` | Event data |

<a id="vscp_dot_Event_plus_vscpHead"></a>

#### event.vscpHead : `number`
VSCP event head

**Kind**: instance property of [`Event`](#vscp.Event)  
<a id="vscp_dot_Event_plus_vscpClass"></a>

#### event.vscpClass : `number`
VSCP class

**Kind**: instance property of [`Event`](#vscp.Event)  
<a id="vscp_dot_Event_plus_vscpType"></a>

#### event.vscpType : `number`
VSCP type

**Kind**: instance property of [`Event`](#vscp.Event)  
<a id="vscp_dot_Event_plus_vscpObId"></a>

#### event.vscpObId : `number`
VSCP object id used by driver for channel info and etc.

**Kind**: instance property of [`Event`](#vscp.Event)  
<a id="vscp_dot_Event_plus_vscpTimeStamp"></a>

#### event.vscpTimeStamp : `number`
Relative timestamp for package in us

**Kind**: instance property of [`Event`](#vscp.Event)  
<a id="vscp_dot_Event_plus_vscpDateTime"></a>

#### event.vscpDateTime : `date`
Date/Time for package

**Kind**: instance property of [`Event`](#vscp.Event)  
<a id="vscp_dot_Event_plus_vscpGuid"></a>

#### event.vscpGuid : `string`
Node global unique id LSB(15) -> MSB(0)

**Kind**: instance property of [`Event`](#vscp.Event)  
<a id="vscp_dot_Event_plus_vscpData"></a>

#### event.vscpData : `Array.&lt;number&gt;` \| `string`
Data array or string

**Kind**: instance property of [`Event`](#vscp.Event)  
<a id="vscp_dot_Event_plus_setIPV6Addr"></a>

#### event.setIPV6Addr()
Set GUID as IP v6 address

**Kind**: instance method of [`Event`](#vscp.Event)  
<a id="vscp_dot_Event_plus_isIPV6Addr"></a>

#### event.isIPV6Addr() ⇒ `boolean`
Is GUID a IP v6 address or not?

**Kind**: instance method of [`Event`](#vscp.Event)  
**Returns**: `boolean` - If the GUID is a IP v6 address, it will return true, otherwise false.  
<a id="vscp_dot_Event_plus_setDumbNode"></a>

#### event.setDumbNode()
Set dumb node. No MDF, registers, nothing.

**Kind**: instance method of [`Event`](#vscp.Event)  
<a id="vscp_dot_Event_plus_isDumbNode"></a>

#### event.isDumbNode() ⇒ `boolean`
Is node a dump node or not?
Dumb node means no MDF, registers, nothing.

**Kind**: instance method of [`Event`](#vscp.Event)  
**Returns**: `boolean` - If the node is a dumb node, it will return true, otherwise false.  
<a id="vscp_dot_Event_plus_setPriority"></a>

#### event.setPriority(priority)
Set the VSCP event priority.

**Kind**: instance method of [`Event`](#vscp.Event)  

| Param | Type | Description |
| --- | --- | --- |
| priority | `number` | Priority |

<a id="vscp_dot_Event_plus_getPriority"></a>

#### event.getPriority() ⇒ `number`
Get the VSCP event priority.

**Kind**: instance method of [`Event`](#vscp.Event)  
**Returns**: `number` - Priority of the event.  
<a id="vscp_dot_Event_plus_setHardCodedAddr"></a>

#### event.setHardCodedAddr()
Set the node id of the event sender as hard coded?

**Kind**: instance method of [`Event`](#vscp.Event)  
<a id="vscp_dot_Event_plus_isHardCodedAddr"></a>

#### event.isHardCodedAddr() ⇒ `boolean`
Is the node id of the event sender hard coded or not?

**Kind**: instance method of [`Event`](#vscp.Event)  
**Returns**: `boolean` - If the node id is hard coded, it will return true, otherwise false.  
<a id="vscp_dot_Event_plus_setDoNotCalcCRC"></a>

#### event.setDoNotCalcCRC()
Set flag for no CRC calculation?

**Kind**: instance method of [`Event`](#vscp.Event)  
<a id="vscp_dot_Event_plus_isDoNotCalcCRC"></a>

#### event.isDoNotCalcCRC() ⇒ `boolean`
Is CRC calculated or not?

**Kind**: instance method of [`Event`](#vscp.Event)  
**Returns**: `boolean` - If nor CRC should be calculated true is returned.  
<a id="vscp_dot_Event_plus_getText"></a>

#### event.getText() ⇒ `string`
Get event as string.

**Kind**: instance method of [`Event`](#vscp.Event)  
**Returns**: `string` - Event as string  
<a id="vscp_dot_version"></a>

### vscp.version
VSCP core javascript library version

**Kind**: static property of [`vscp`](#vscp)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| major | `number` | Major version number |
| minor | `number` | Minor version number |
| patch | `number` | Sub-minor version number |

<a id="vscp_dot_constants"></a>

### vscp.constants : `object`
VSCP constants

**Kind**: static namespace of [`vscp`](#vscp)  

* [.constants](#vscp_dot_constants) : `object`
    * [.classes](#vscp_dot_constants_dot_classes) : `enum`
    * [.types](#vscp_dot_constants_dot_types) : `enum`
    * [.priorities](#vscp_dot_constants_dot_priorities) : `enum`
    * [.varTypes](#vscp_dot_constants_dot_varTypes) : `enum`
    * [.varTypeNames](#vscp_dot_constants_dot_varTypeNames)

<a id="vscp_dot_constants_dot_classes"></a>

#### constants.classes : `enum`
VSCP classes

**Kind**: static enum of [`constants`](#vscp.constants)  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| CLASS1_PROTOCOL | `number` | <code>0</code> | 
| CLASS1_ALARM | `number` | <code>1</code> | 
| CLASS1_SECURITY | `number` | <code>2</code> | 
| CLASS1_MEASUREMENT | `number` | <code>10</code> | 
| CLASS1_DATA | `number` | <code>15</code> | 
| CLASS1_INFORMATION | `number` | <code>20</code> | 
| CLASS1_CONTROL | `number` | <code>30</code> | 
| CLASS1_MULTIMEDIA | `number` | <code>40</code> | 
| CLASS1_AOL | `number` | <code>50</code> | 
| CLASS1_MEASUREMENT64 | `number` | <code>60</code> | 
| CLASS1_MEASUREZONE | `number` | <code>65</code> | 
| CLASS1_MEASUREMENT32 | `number` | <code>70</code> | 
| CLASS1_SETVALUEZONE | `number` | <code>85</code> | 
| CLASS1_WEATHER | `number` | <code>90</code> | 
| CLASS1_WEATHER_FORECAST | `number` | <code>95</code> | 
| CLASS1_PHONE | `number` | <code>100</code> | 
| CLASS1_DISPLAY | `number` | <code>102</code> | 
| CLASS1_IR | `number` | <code>110</code> | 
| CLASS1_GNSS | `number` | <code>206</code> | 
| CLASS1_WIRELESS | `number` | <code>212</code> | 
| CLASS1_DIAGNOSTIC | `number` | <code>506</code> | 
| CLASS1_ERROR | `number` | <code>508</code> | 
| CLASS1_LOG | `number` | <code>509</code> | 
| CLASS1_LABORATORY | `number` | <code>510</code> | 
| CLASS1_LOCAL | `number` | <code>511</code> | 
| CLASS2_LEVEL1_PROTOCOL | `number` | <code>512</code> | 
| CLASS2_LEVEL1_ALARM | `number` | <code>513</code> | 
| CLASS2_LEVEL1_SECURITY | `number` | <code>514</code> | 
| CLASS2_LEVEL1_MEASUREMENT | `number` | <code>522</code> | 
| CLASS2_LEVEL1_DATA | `number` | <code>527</code> | 
| CLASS2_LEVEL1_INFORMATION1 | `number` | <code>532</code> | 
| CLASS2_LEVEL1_CONTROL | `number` | <code>542</code> | 
| CLASS2_LEVEL1_MULTIMEDIA | `number` | <code>552</code> | 
| CLASS2_LEVEL1_AOL | `number` | <code>562</code> | 
| CLASS2_LEVEL1_MEASUREMENT64 | `number` | <code>572</code> | 
| CLASS2_LEVEL1_MEASUREZONE | `number` | <code>577</code> | 
| CLASS2_LEVEL1_MEASUREMENT32 | `number` | <code>582</code> | 
| CLASS2_LEVEL1_SETVALUEZONE | `number` | <code>597</code> | 
| CLASS2_LEVEL1_WEATHER | `number` | <code>602</code> | 
| CLASS2_LEVEL1_WEATHERFORECAST | `number` | <code>607</code> | 
| CLASS2_LEVEL1_PHONE | `number` | <code>612</code> | 
| CLASS2_LEVEL1_DISPLAY | `number` | <code>614</code> | 
| CLASS2_LEVEL1_IR | `number` | <code>622</code> | 
| CLASS2_LEVEL1_GNSS | `number` | <code>718</code> | 
| CLASS2_LEVEL1_WIRELESS | `number` | <code>724</code> | 
| CLASS2_LEVEL1_DIAGNOSTIC | `number` | <code>1018</code> | 
| CLASS2_LEVEL1_ERROR | `number` | <code>1020</code> | 
| CLASS2_LEVEL1_LOG | `number` | <code>1021</code> | 
| CLASS2_LEVEL1_LABORATORY | `number` | <code>1022</code> | 
| CLASS2_LEVEL1_LOCAL | `number` | <code>1023</code> | 
| CLASS2_PROTOCOL | `number` | <code>1024</code> | 
| CLASS2_CONTROL | `number` | <code>1025</code> | 
| CLASS2_INFORMATION | `number` | <code>1026</code> | 
| CLASS2_TEXT2SPEECH | `number` | <code>1027</code> | 
| CLASS2_CUSTOM | `number` | <code>1029</code> | 
| CLASS2_DISPLAY | `number` | <code>1030</code> | 
| CLASS2_MEASUREMENT_STR | `number` | <code>1040</code> | 
| CLASS2_MEASUREMENT_FLOAT | `number` | <code>1060</code> | 
| CLASS2_VSCPD | `number` | <code>65535</code> | 

<a id="vscp_dot_constants_dot_types"></a>

#### constants.types : `enum`
VSCP class types

**Kind**: static enum of [`constants`](#vscp.constants)  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| VSCP_TYPE_UNDEFINED | `number` | <code>0</code> | 
| VSCP_TYPE_PROTOCOL_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_PROTOCOL_SEGCTRL_HEARTBEAT | `number` | <code>1</code> | 
| VSCP_TYPE_PROTOCOL_NEW_NODE_ONLINE | `number` | <code>2</code> | 
| VSCP_TYPE_PROTOCOL_PROBE_ACK | `number` | <code>3</code> | 
| VSCP_TYPE_PROTOCOL_RESERVED4 | `number` | <code>4</code> | 
| VSCP_TYPE_PROTOCOL_RESERVED5 | `number` | <code>5</code> | 
| VSCP_TYPE_PROTOCOL_SET_NICKNAME | `number` | <code>6</code> | 
| VSCP_TYPE_PROTOCOL_NICKNAME_ACCEPTED | `number` | <code>7</code> | 
| VSCP_TYPE_PROTOCOL_DROP_NICKNAME | `number` | <code>8</code> | 
| VSCP_TYPE_PROTOCOL_READ_REGISTER | `number` | <code>9</code> | 
| VSCP_TYPE_PROTOCOL_RW_RESPONSE | `number` | <code>10</code> | 
| VSCP_TYPE_PROTOCOL_WRITE_REGISTER | `number` | <code>11</code> | 
| VSCP_TYPE_PROTOCOL_ENTER_BOOT_LOADER | `number` | <code>12</code> | 
| VSCP_TYPE_PROTOCOL_ACK_BOOT_LOADER | `number` | <code>13</code> | 
| VSCP_TYPE_PROTOCOL_NACK_BOOT_LOADER | `number` | <code>14</code> | 
| VSCP_TYPE_PROTOCOL_START_BLOCK | `number` | <code>15</code> | 
| VSCP_TYPE_PROTOCOL_BLOCK_DATA | `number` | <code>16</code> | 
| VSCP_TYPE_PROTOCOL_BLOCK_DATA_ACK | `number` | <code>17</code> | 
| VSCP_TYPE_PROTOCOL_BLOCK_DATA_NACK | `number` | <code>18</code> | 
| VSCP_TYPE_PROTOCOL_PROGRAM_BLOCK_DATA | `number` | <code>19</code> | 
| VSCP_TYPE_PROTOCOL_PROGRAM_BLOCK_DATA_ACK | `number` | <code>20</code> | 
| VSCP_TYPE_PROTOCOL_PROGRAM_BLOCK_DATA_NACK | `number` | <code>21</code> | 
| VSCP_TYPE_PROTOCOL_ACTIVATE_NEW_IMAGE | `number` | <code>22</code> | 
| VSCP_TYPE_PROTOCOL_RESET_DEVICE | `number` | <code>23</code> | 
| VSCP_TYPE_PROTOCOL_PAGE_READ | `number` | <code>24</code> | 
| VSCP_TYPE_PROTOCOL_PAGE_WRITE | `number` | <code>25</code> | 
| VSCP_TYPE_PROTOCOL_RW_PAGE_RESPONSE | `number` | <code>26</code> | 
| VSCP_TYPE_PROTOCOL_HIGH_END_SERVER_PROBE | `number` | <code>27</code> | 
| VSCP_TYPE_PROTOCOL_HIGH_END_SERVER_RESPONSE | `number` | <code>28</code> | 
| VSCP_TYPE_PROTOCOL_INCREMENT_REGISTER | `number` | <code>29</code> | 
| VSCP_TYPE_PROTOCOL_DECREMENT_REGISTER | `number` | <code>30</code> | 
| VSCP_TYPE_PROTOCOL_WHO_IS_THERE | `number` | <code>31</code> | 
| VSCP_TYPE_PROTOCOL_WHO_IS_THERE_RESPONSE | `number` | <code>32</code> | 
| VSCP_TYPE_PROTOCOL_GET_MATRIX_INFO | `number` | <code>33</code> | 
| VSCP_TYPE_PROTOCOL_GET_MATRIX_INFO_RESPONSE | `number` | <code>34</code> | 
| VSCP_TYPE_PROTOCOL_GET_EMBEDDED_MDF | `number` | <code>35</code> | 
| VSCP_TYPE_PROTOCOL_GET_EMBEDDED_MDF_RESPONSE | `number` | <code>36</code> | 
| VSCP_TYPE_PROTOCOL_EXTENDED_PAGE_READ | `number` | <code>37</code> | 
| VSCP_TYPE_PROTOCOL_EXTENDED_PAGE_WRITE | `number` | <code>38</code> | 
| VSCP_TYPE_PROTOCOL_EXTENDED_PAGE_RESPONSE | `number` | <code>39</code> | 
| VSCP_TYPE_PROTOCOL_GET_EVENT_INTEREST | `number` | <code>40</code> | 
| VSCP_TYPE_PROTOCOL_GET_EVENT_INTEREST_RESPONSE | `number` | <code>41</code> | 
| VSCP_TYPE_PROTOCOL_ACTIVATE_NEW_IMAGE_ACK | `number` | <code>48</code> | 
| VSCP_TYPE_PROTOCOL_ACTIVATE_NEW_IMAGE_NACK | `number` | <code>49</code> | 
| VSCP_TYPE_PROTOCOL_START_BLOCK_ACK | `number` | <code>50</code> | 
| VSCP_TYPE_PROTOCOL_START_BLOCK_NACK | `number` | <code>51</code> | 
| VSCP_TYPE_ALARM_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_ALARM_WARNING | `number` | <code>1</code> | 
| VSCP_TYPE_ALARM_ALARM | `number` | <code>2</code> | 
| VSCP_TYPE_ALARM_SOUND | `number` | <code>3</code> | 
| VSCP_TYPE_ALARM_LIGHT | `number` | <code>4</code> | 
| VSCP_TYPE_ALARM_POWER | `number` | <code>5</code> | 
| VSCP_TYPE_ALARM_EMERGENCY_STOP | `number` | <code>6</code> | 
| VSCP_TYPE_ALARM_EMERGENCY_PAUSE | `number` | <code>7</code> | 
| VSCP_TYPE_ALARM_EMERGENCY_RESET | `number` | <code>8</code> | 
| VSCP_TYPE_ALARM_EMERGENCY_RESUME | `number` | <code>9</code> | 
| VSCP_TYPE_ALARM_ARM | `number` | <code>10</code> | 
| VSCP_TYPE_ALARM_DISARM | `number` | <code>11</code> | 
| VSCP_TYPE_SECURITY_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_SECURITY_MOTION | `number` | <code>1</code> | 
| VSCP_TYPE_SECURITY_GLASS_BREAK | `number` | <code>2</code> | 
| VSCP_TYPE_SECURITY_BEAM_BREAK | `number` | <code>3</code> | 
| VSCP_TYPE_SECURITY_SENSOR_TAMPER | `number` | <code>4</code> | 
| VSCP_TYPE_SECURITY_SHOCK_SENSOR | `number` | <code>5</code> | 
| VSCP_TYPE_SECURITY_SMOKE_SENSOR | `number` | <code>6</code> | 
| VSCP_TYPE_SECURITY_HEAT_SENSOR | `number` | <code>7</code> | 
| VSCP_TYPE_SECURITY_PANIC_SWITCH | `number` | <code>8</code> | 
| VSCP_TYPE_SECURITY_DOOR_OPEN | `number` | <code>9</code> | 
| VSCP_TYPE_SECURITY_WINDOW_OPEN | `number` | <code>10</code> | 
| VSCP_TYPE_SECURITY_CO_SENSOR | `number` | <code>11</code> | 
| VSCP_TYPE_SECURITY_FROST_DETECTED | `number` | <code>12</code> | 
| VSCP_TYPE_SECURITY_FLAME_DETECTED | `number` | <code>13</code> | 
| VSCP_TYPE_SECURITY_OXYGEN_LOW | `number` | <code>14</code> | 
| VSCP_TYPE_SECURITY_WEIGHT_DETECTED | `number` | <code>15</code> | 
| VSCP_TYPE_SECURITY_WATER_DETECTED | `number` | <code>16</code> | 
| VSCP_TYPE_SECURITY_CONDENSATION_DETECTED | `number` | <code>17</code> | 
| VSCP_TYPE_SECURITY_SOUND_DETECTED | `number` | <code>18</code> | 
| VSCP_TYPE_SECURITY_HARMFUL_SOUND_LEVEL | `number` | <code>19</code> | 
| VSCP_TYPE_SECURITY_TAMPER | `number` | <code>20</code> | 
| VSCP_TYPE_MEASUREMENT_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_MEASUREMENT_COUNT | `number` | <code>1</code> | 
| VSCP_TYPE_MEASUREMENT_LENGTH | `number` | <code>2</code> | 
| VSCP_TYPE_MEASUREMENT_MASS | `number` | <code>3</code> | 
| VSCP_TYPE_MEASUREMENT_TIME | `number` | <code>4</code> | 
| VSCP_TYPE_MEASUREMENT_ELECTRIC_CURRENT | `number` | <code>5</code> | 
| VSCP_TYPE_MEASUREMENT_TEMPERATURE | `number` | <code>6</code> | 
| VSCP_TYPE_MEASUREMENT_AMOUNT_OF_SUBSTANCE | `number` | <code>7</code> | 
| VSCP_TYPE_MEASUREMENT_INTENSITY_OF_LIGHT | `number` | <code>8</code> | 
| VSCP_TYPE_MEASUREMENT_FREQUENCY | `number` | <code>9</code> | 
| VSCP_TYPE_MEASUREMENT_RADIOACTIVITY | `number` | <code>10</code> | 
| VSCP_TYPE_MEASUREMENT_FORCE | `number` | <code>11</code> | 
| VSCP_TYPE_MEASUREMENT_PRESSURE | `number` | <code>12</code> | 
| VSCP_TYPE_MEASUREMENT_ENERGY | `number` | <code>13</code> | 
| VSCP_TYPE_MEASUREMENT_POWER | `number` | <code>14</code> | 
| VSCP_TYPE_MEASUREMENT_ELECTRICAL_CHARGE | `number` | <code>15</code> | 
| VSCP_TYPE_MEASUREMENT_ELECTRICAL_POTENTIAL | `number` | <code>16</code> | 
| VSCP_TYPE_MEASUREMENT_ELECTRICAL_CAPACITANCE | `number` | <code>17</code> | 
| VSCP_TYPE_MEASUREMENT_ELECTRICAL_RESISTANCE | `number` | <code>18</code> | 
| VSCP_TYPE_MEASUREMENT_ELECTRICAL_CONDUCTANCE | `number` | <code>19</code> | 
| VSCP_TYPE_MEASUREMENT_MAGNETIC_FIELD_STRENGTH | `number` | <code>20</code> | 
| VSCP_TYPE_MEASUREMENT_MAGNETIC_FLUX | `number` | <code>21</code> | 
| VSCP_TYPE_MEASUREMENT_MAGNETIC_FLUX_DENSITY | `number` | <code>22</code> | 
| VSCP_TYPE_MEASUREMENT_INDUCTANCE | `number` | <code>23</code> | 
| VSCP_TYPE_MEASUREMENT_FLUX_OF_LIGHT | `number` | <code>24</code> | 
| VSCP_TYPE_MEASUREMENT_ILLUMINANCE | `number` | <code>25</code> | 
| VSCP_TYPE_MEASUREMENT_RADIATION_DOSE | `number` | <code>26</code> | 
| VSCP_TYPE_MEASUREMENT_CATALYTIC_ACITIVITY | `number` | <code>27</code> | 
| VSCP_TYPE_MEASUREMENT_VOLUME | `number` | <code>28</code> | 
| VSCP_TYPE_MEASUREMENT_SOUND_INTENSITY | `number` | <code>29</code> | 
| VSCP_TYPE_MEASUREMENT_ANGLE | `number` | <code>30</code> | 
| VSCP_TYPE_MEASUREMENT_POSITION | `number` | <code>31</code> | 
| VSCP_TYPE_MEASUREMENT_SPEED | `number` | <code>32</code> | 
| VSCP_TYPE_MEASUREMENT_ACCELERATION | `number` | <code>33</code> | 
| VSCP_TYPE_MEASUREMENT_TENSION | `number` | <code>34</code> | 
| VSCP_TYPE_MEASUREMENT_HUMIDITY | `number` | <code>35</code> | 
| VSCP_TYPE_MEASUREMENT_FLOW | `number` | <code>36</code> | 
| VSCP_TYPE_MEASUREMENT_THERMAL_RESISTANCE | `number` | <code>37</code> | 
| VSCP_TYPE_MEASUREMENT_REFRACTIVE_POWER | `number` | <code>38</code> | 
| VSCP_TYPE_MEASUREMENT_DYNAMIC_VISCOSITY | `number` | <code>39</code> | 
| VSCP_TYPE_MEASUREMENT_SOUND_IMPEDANCE | `number` | <code>40</code> | 
| VSCP_TYPE_MEASUREMENT_SOUND_RESISTANCE | `number` | <code>41</code> | 
| VSCP_TYPE_MEASUREMENT_ELECTRIC_ELASTANCE | `number` | <code>42</code> | 
| VSCP_TYPE_MEASUREMENT_LUMINOUS_ENERGY | `number` | <code>43</code> | 
| VSCP_TYPE_MEASUREMENT_LUMINANCE | `number` | <code>44</code> | 
| VSCP_TYPE_MEASUREMENT_CHEMICAL_CONCENTRATION | `number` | <code>45</code> | 
| VSCP_TYPE_MEASUREMENT_RESERVED46 | `number` | <code>46</code> | 
| VSCP_TYPE_MEASUREMENT_DOSE_EQVIVALENT | `number` | <code>47</code> | 
| VSCP_TYPE_MEASUREMENT_RESERVED48 | `number` | <code>48</code> | 
| VSCP_TYPE_MEASUREMENT_DEWPOINT | `number` | <code>49</code> | 
| VSCP_TYPE_MEASUREMENT_RELATIVE_LEVEL | `number` | <code>50</code> | 
| VSCP_TYPE_MEASUREMENT_ALTITUDE | `number` | <code>51</code> | 
| VSCP_TYPE_MEASUREMENT_AREA | `number` | <code>52</code> | 
| VSCP_TYPE_MEASUREMENT_RADIANT_INTENSITY | `number` | <code>53</code> | 
| VSCP_TYPE_MEASUREMENT_RADIANCE | `number` | <code>54</code> | 
| VSCP_TYPE_MEASUREMENT_IRRADIANCE | `number` | <code>55</code> | 
| VSCP_TYPE_MEASUREMENT_SPECTRAL_RADIANCE | `number` | <code>56</code> | 
| VSCP_TYPE_MEASUREMENT_SPECTRAL_IRRADIANCE | `number` | <code>57</code> | 
| VSCP_TYPE_MEASUREMENT_SOUND_PRESSURE | `number` | <code>58</code> | 
| VSCP_TYPE_MEASUREMENT_SOUND_DENSITY | `number` | <code>59</code> | 
| VSCP_TYPE_MEASUREMENT_SOUND_LEVEL | `number` | <code>60</code> | 
| VSCP_TYPE_DATA_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_DATA_IO | `number` | <code>1</code> | 
| VSCP_TYPE_DATA_AD | `number` | <code>2</code> | 
| VSCP_TYPE_DATA_DA | `number` | <code>3</code> | 
| VSCP_TYPE_DATA_RELATIVE_STRENGTH | `number` | <code>4</code> | 
| VSCP_TYPE_DATA_SIGNAL_LEVEL | `number` | <code>5</code> | 
| VSCP_TYPE_DATA_SIGNAL_QUALITY | `number` | <code>6</code> | 
| VSCP_TYPE_DATA_COUNT | `number` | <code>7</code> | 
| VSCP_TYPE_INFORMATION_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_INFORMATION_BUTTON | `number` | <code>1</code> | 
| VSCP_TYPE_INFORMATION_MOUSE | `number` | <code>2</code> | 
| VSCP_TYPE_INFORMATION_ON | `number` | <code>3</code> | 
| VSCP_TYPE_INFORMATION_OFF | `number` | <code>4</code> | 
| VSCP_TYPE_INFORMATION_ALIVE | `number` | <code>5</code> | 
| VSCP_TYPE_INFORMATION_TERMINATING | `number` | <code>6</code> | 
| VSCP_TYPE_INFORMATION_OPENED | `number` | <code>7</code> | 
| VSCP_TYPE_INFORMATION_CLOSED | `number` | <code>8</code> | 
| VSCP_TYPE_INFORMATION_NODE_HEARTBEAT | `number` | <code>9</code> | 
| VSCP_TYPE_INFORMATION_BELOW_LIMIT | `number` | <code>10</code> | 
| VSCP_TYPE_INFORMATION_ABOVE_LIMIT | `number` | <code>11</code> | 
| VSCP_TYPE_INFORMATION_PULSE | `number` | <code>12</code> | 
| VSCP_TYPE_INFORMATION_ERROR | `number` | <code>13</code> | 
| VSCP_TYPE_INFORMATION_RESUMED | `number` | <code>14</code> | 
| VSCP_TYPE_INFORMATION_PAUSED | `number` | <code>15</code> | 
| VSCP_TYPE_INFORMATION_SLEEP | `number` | <code>16</code> | 
| VSCP_TYPE_INFORMATION_GOOD_MORNING | `number` | <code>17</code> | 
| VSCP_TYPE_INFORMATION_GOOD_DAY | `number` | <code>18</code> | 
| VSCP_TYPE_INFORMATION_GOOD_AFTERNOON | `number` | <code>19</code> | 
| VSCP_TYPE_INFORMATION_GOOD_EVENING | `number` | <code>20</code> | 
| VSCP_TYPE_INFORMATION_GOOD_NIGHT | `number` | <code>21</code> | 
| VSCP_TYPE_INFORMATION_SEE_YOU_SOON | `number` | <code>22</code> | 
| VSCP_TYPE_INFORMATION_GOODBYE | `number` | <code>23</code> | 
| VSCP_TYPE_INFORMATION_STOP | `number` | <code>24</code> | 
| VSCP_TYPE_INFORMATION_START | `number` | <code>25</code> | 
| VSCP_TYPE_INFORMATION_RESET_COMPLETED | `number` | <code>26</code> | 
| VSCP_TYPE_INFORMATION_INTERRUPTED | `number` | <code>27</code> | 
| VSCP_TYPE_INFORMATION_PREPARING_TO_SLEEP | `number` | <code>28</code> | 
| VSCP_TYPE_INFORMATION_WOKEN_UP | `number` | <code>29</code> | 
| VSCP_TYPE_INFORMATION_DUSK | `number` | <code>30</code> | 
| VSCP_TYPE_INFORMATION_DAWN | `number` | <code>31</code> | 
| VSCP_TYPE_INFORMATION_ACTIVE | `number` | <code>32</code> | 
| VSCP_TYPE_INFORMATION_INACTIVE | `number` | <code>33</code> | 
| VSCP_TYPE_INFORMATION_BUSY | `number` | <code>34</code> | 
| VSCP_TYPE_INFORMATION_IDLE | `number` | <code>35</code> | 
| VSCP_TYPE_INFORMATION_STREAM_DATA | `number` | <code>36</code> | 
| VSCP_TYPE_INFORMATION_TOKEN_ACTIVITY | `number` | <code>37</code> | 
| VSCP_TYPE_INFORMATION_STREAM_DATA_WITH_ZONE | `number` | <code>38</code> | 
| VSCP_TYPE_INFORMATION_CONFIRM | `number` | <code>39</code> | 
| VSCP_TYPE_INFORMATION_LEVEL_CHANGED | `number` | <code>40</code> | 
| VSCP_TYPE_INFORMATION_WARNING | `number` | <code>41</code> | 
| VSCP_TYPE_INFORMATION_STATE | `number` | <code>42</code> | 
| VSCP_TYPE_INFORMATION_ACTION_TRIGGER | `number` | <code>43</code> | 
| VSCP_TYPE_INFORMATION_SUNRISE | `number` | <code>44</code> | 
| VSCP_TYPE_INFORMATION_SUNSET | `number` | <code>45</code> | 
| VSCP_TYPE_INFORMATION_START_OF_RECORD | `number` | <code>46</code> | 
| VSCP_TYPE_INFORMATION_END_OF_RECORD | `number` | <code>47</code> | 
| VSCP_TYPE_INFORMATION_PRESET_ACTIVE | `number` | <code>48</code> | 
| VSCP_TYPE_INFORMATION_DETECT | `number` | <code>49</code> | 
| VSCP_TYPE_INFORMATION_OVERFLOW | `number` | <code>50</code> | 
| VSCP_TYPE_INFORMATION_BIG_LEVEL_CHANGED | `number` | <code>51</code> | 
| VSCP_TYPE_INFORMATION_SUNRISE_TWILIGHT_START | `number` | <code>52</code> | 
| VSCP_TYPE_INFORMATION_SUNSET_TWILIGHT_START | `number` | <code>53</code> | 
| VSCP_TYPE_INFORMATION_NAUTICAL_SUNRISE_TWILIGHT_START | `number` | <code>54</code> | 
| VSCP_TYPE_INFORMATION_NAUTICAL_SUNSET_TWILIGHT_START | `number` | <code>55</code> | 
| VSCP_TYPE_INFORMATION_ASTRONOMICAL_SUNRISE_TWILIGHT_START | `number` | <code>56</code> | 
| VSCP_TYPE_INFORMATION_ASTRONOMICAL_SUNSET_TWILIGHT_START | `number` | <code>57</code> | 
| VSCP_TYPE_INFORMATION_CALCULATED_NOON | `number` | <code>58</code> | 
| VSCP_TYPE_INFORMATION_SHUTTER_UP | `number` | <code>59</code> | 
| VSCP_TYPE_INFORMATION_SHUTTER_DOWN | `number` | <code>60</code> | 
| VSCP_TYPE_INFORMATION_SHUTTER_LEFT | `number` | <code>61</code> | 
| VSCP_TYPE_INFORMATION_SHUTTER_RIGHT | `number` | <code>62</code> | 
| VSCP_TYPE_INFORMATION_SHUTTER_END_TOP | `number` | <code>63</code> | 
| VSCP_TYPE_INFORMATION_SHUTTER_END_BOTTOM | `number` | <code>64</code> | 
| VSCP_TYPE_INFORMATION_SHUTTER_END_MIDDLE | `number` | <code>65</code> | 
| VSCP_TYPE_INFORMATION_SHUTTER_END_PRESET | `number` | <code>66</code> | 
| VSCP_TYPE_INFORMATION_SHUTTER_END_LEFT | `number` | <code>67</code> | 
| VSCP_TYPE_INFORMATION_SHUTTER_END_RIGHT | `number` | <code>68</code> | 
| VSCP_TYPE_INFORMATION_LONG_CLICK | `number` | <code>69</code> | 
| VSCP_TYPE_INFORMATION_SINGLE_CLICK | `number` | <code>70</code> | 
| VSCP_TYPE_INFORMATION_DOUBLE_CLICK | `number` | <code>71</code> | 
| VSCP_TYPE_INFORMATION_DATE | `number` | <code>72</code> | 
| VSCP_TYPE_INFORMATION_TIME | `number` | <code>73</code> | 
| VSCP_TYPE_INFORMATION_WEEKDAY | `number` | <code>74</code> | 
| VSCP_TYPE_INFORMATION_LOCK | `number` | <code>75</code> | 
| VSCP_TYPE_INFORMATION_UNLOCK | `number` | <code>76</code> | 
| VSCP_TYPE_INFORMATION_DATETIME | `number` | <code>77</code> | 
| VSCP_TYPE_CONTROL_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_CONTROL_MUTE | `number` | <code>1</code> | 
| VSCP_TYPE_CONTROL_ALL_LAMPS | `number` | <code>2</code> | 
| VSCP_TYPE_CONTROL_OPEN | `number` | <code>3</code> | 
| VSCP_TYPE_CONTROL_CLOSE | `number` | <code>4</code> | 
| VSCP_TYPE_CONTROL_TURNON | `number` | <code>5</code> | 
| VSCP_TYPE_CONTROL_TURNOFF | `number` | <code>6</code> | 
| VSCP_TYPE_CONTROL_START | `number` | <code>7</code> | 
| VSCP_TYPE_CONTROL_STOP | `number` | <code>8</code> | 
| VSCP_TYPE_CONTROL_RESET | `number` | <code>9</code> | 
| VSCP_TYPE_CONTROL_INTERRUPT | `number` | <code>10</code> | 
| VSCP_TYPE_CONTROL_SLEEP | `number` | <code>11</code> | 
| VSCP_TYPE_CONTROL_WAKEUP | `number` | <code>12</code> | 
| VSCP_TYPE_CONTROL_RESUME | `number` | <code>13</code> | 
| VSCP_TYPE_CONTROL_PAUSE | `number` | <code>14</code> | 
| VSCP_TYPE_CONTROL_ACTIVATE | `number` | <code>15</code> | 
| VSCP_TYPE_CONTROL_DEACTIVATE | `number` | <code>16</code> | 
| VSCP_TYPE_CONTROL_RESERVED17 | `number` | <code>17</code> | 
| VSCP_TYPE_CONTROL_RESERVED18 | `number` | <code>18</code> | 
| VSCP_TYPE_CONTROL_RESERVED19 | `number` | <code>19</code> | 
| VSCP_TYPE_CONTROL_DIM_LAMPS | `number` | <code>20</code> | 
| VSCP_TYPE_CONTROL_CHANGE_CHANNEL | `number` | <code>21</code> | 
| VSCP_TYPE_CONTROL_CHANGE_LEVEL | `number` | <code>22</code> | 
| VSCP_TYPE_CONTROL_RELATIVE_CHANGE_LEVEL | `number` | <code>23</code> | 
| VSCP_TYPE_CONTROL_MEASUREMENT_REQUEST | `number` | <code>24</code> | 
| VSCP_TYPE_CONTROL_STREAM_DATA | `number` | <code>25</code> | 
| VSCP_TYPE_CONTROL_SYNC | `number` | <code>26</code> | 
| VSCP_TYPE_CONTROL_ZONED_STREAM_DATA | `number` | <code>27</code> | 
| VSCP_TYPE_CONTROL_SET_PRESET | `number` | <code>28</code> | 
| VSCP_TYPE_CONTROL_TOGGLE_STATE | `number` | <code>29</code> | 
| VSCP_TYPE_CONTROL_TIMED_PULSE_ON | `number` | <code>30</code> | 
| VSCP_TYPE_CONTROL_TIMED_PULSE_OFF | `number` | <code>31</code> | 
| VSCP_TYPE_CONTROL_SET_COUNTRY_LANGUAGE | `number` | <code>32</code> | 
| VSCP_TYPE_CONTROL_BIG_CHANGE_LEVEL | `number` | <code>33</code> | 
| VSCP_TYPE_CONTROL_SHUTTER_UP | `number` | <code>34</code> | 
| VSCP_TYPE_CONTROL_SHUTTER_DOWN | `number` | <code>35</code> | 
| VSCP_TYPE_CONTROL_SHUTTER_LEFT | `number` | <code>36</code> | 
| VSCP_TYPE_CONTROL_SHUTTER_RIGHT | `number` | <code>37</code> | 
| VSCP_TYPE_CONTROL_SHUTTER_MIDDLE | `number` | <code>38</code> | 
| VSCP_TYPE_CONTROL_SHUTTER_PRESET | `number` | <code>39</code> | 
| VSCP_TYPE_CONTROL_ALL_LAMPS_ON | `number` | <code>40</code> | 
| VSCP_TYPE_CONTROL_ALL_LAMPS_OFF | `number` | <code>41</code> | 
| VSCP_TYPE_CONTROL_LOCK | `number` | <code>42</code> | 
| VSCP_TYPE_CONTROL_UNLOCK | `number` | <code>43</code> | 
| VSCP_TYPE_MULTIMEDIA_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_MULTIMEDIA_PLAYBACK | `number` | <code>1</code> | 
| VSCP_TYPE_MULTIMEDIA_NAVIGATOR_KEY_ENG | `number` | <code>2</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_CONTRAST | `number` | <code>3</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_FOCUS | `number` | <code>4</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_TINT | `number` | <code>5</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_COLOUR_BALANCE | `number` | <code>6</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_BRIGHTNESS | `number` | <code>7</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_HUE | `number` | <code>8</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_BASS | `number` | <code>9</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_TREBLE | `number` | <code>10</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_MASTER_VOLUME | `number` | <code>11</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_FRONT_VOLUME | `number` | <code>12</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_CENTRE_VOLUME | `number` | <code>13</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_REAR_VOLUME | `number` | <code>14</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_SIDE_VOLUME | `number` | <code>15</code> | 
| VSCP_TYPE_MULTIMEDIA_RESERVED16 | `number` | <code>16</code> | 
| VSCP_TYPE_MULTIMEDIA_RESERVED17 | `number` | <code>17</code> | 
| VSCP_TYPE_MULTIMEDIA_RESERVED18 | `number` | <code>18</code> | 
| VSCP_TYPE_MULTIMEDIA_RESERVED19 | `number` | <code>19</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_DISK | `number` | <code>20</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_TRACK | `number` | <code>21</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_ALBUM | `number` | <code>22</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_CHANNEL | `number` | <code>23</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_PAGE | `number` | <code>24</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_CHAPTER | `number` | <code>25</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_SCREEN_FORMAT | `number` | <code>26</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_INPUT_SOURCE | `number` | <code>27</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_OUTPUT | `number` | <code>28</code> | 
| VSCP_TYPE_MULTIMEDIA_RECORD | `number` | <code>29</code> | 
| VSCP_TYPE_MULTIMEDIA_SET_RECORDING_VOLUME | `number` | <code>30</code> | 
| VSCP_TYPE_MULTIMEDIA_TIVO_FUNCTION | `number` | <code>40</code> | 
| VSCP_TYPE_MULTIMEDIA_GET_CURRENT_TITLE | `number` | <code>50</code> | 
| VSCP_TYPE_MULTIMEDIA_SET_POSITION | `number` | <code>51</code> | 
| VSCP_TYPE_MULTIMEDIA_GET_MEDIA_INFO | `number` | <code>52</code> | 
| VSCP_TYPE_MULTIMEDIA_REMOVE_ITEM | `number` | <code>53</code> | 
| VSCP_TYPE_MULTIMEDIA_REMOVE_ALL_ITEMS | `number` | <code>54</code> | 
| VSCP_TYPE_MULTIMEDIA_SAVE_ALBUM | `number` | <code>55</code> | 
| VSCP_TYPE_MULTIMEDIA_CONTROL | `number` | <code>60</code> | 
| VSCP_TYPE_MULTIMEDIA_CONTROL_RESPONSE | `number` | <code>61</code> | 
| VSCP_TYPE_AOL_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_AOL_UNPLUGGED_POWER | `number` | <code>1</code> | 
| VSCP_TYPE_AOL_UNPLUGGED_LAN | `number` | <code>2</code> | 
| VSCP_TYPE_AOL_CHASSIS_INTRUSION | `number` | <code>3</code> | 
| VSCP_TYPE_AOL_PROCESSOR_REMOVAL | `number` | <code>4</code> | 
| VSCP_TYPE_AOL_ENVIRONMENT_ERROR | `number` | <code>5</code> | 
| VSCP_TYPE_AOL_HIGH_TEMPERATURE | `number` | <code>6</code> | 
| VSCP_TYPE_AOL_FAN_SPEED | `number` | <code>7</code> | 
| VSCP_TYPE_AOL_VOLTAGE_FLUCTUATIONS | `number` | <code>8</code> | 
| VSCP_TYPE_AOL_OS_ERROR | `number` | <code>9</code> | 
| VSCP_TYPE_AOL_POWER_ON_ERROR | `number` | <code>10</code> | 
| VSCP_TYPE_AOL_SYSTEM_HUNG | `number` | <code>11</code> | 
| VSCP_TYPE_AOL_COMPONENT_FAILURE | `number` | <code>12</code> | 
| VSCP_TYPE_AOL_REBOOT_UPON_FAILURE | `number` | <code>13</code> | 
| VSCP_TYPE_AOL_REPAIR_OPERATING_SYSTEM | `number` | <code>14</code> | 
| VSCP_TYPE_AOL_UPDATE_BIOS_IMAGE | `number` | <code>15</code> | 
| VSCP_TYPE_AOL_UPDATE_DIAGNOSTIC_PROCEDURE | `number` | <code>16</code> | 
| VSCP_TYPE_WEATHER_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_WEATHER_SEASONS_WINTER | `number` | <code>1</code> | 
| VSCP_TYPE_WEATHER_SEASONS_SPRING | `number` | <code>2</code> | 
| VSCP_TYPE_WEATHER_SEASONS_SUMMER | `number` | <code>3</code> | 
| VSCP_TYPE_WEATHER_SEASONS_AUTUMN | `number` | <code>4</code> | 
| VSCP_TYPE_WEATHER_WIND_NONE | `number` | <code>5</code> | 
| VSCP_TYPE_WEATHER_WIND_LOW | `number` | <code>6</code> | 
| VSCP_TYPE_WEATHER_WIND_MEDIUM | `number` | <code>7</code> | 
| VSCP_TYPE_WEATHER_WIND_HIGH | `number` | <code>8</code> | 
| VSCP_TYPE_WEATHER_WIND_VERY_HIGH | `number` | <code>9</code> | 
| VSCP_TYPE_WEATHER_AIR_FOGGY | `number` | <code>10</code> | 
| VSCP_TYPE_WEATHER_AIR_FREEZING | `number` | <code>11</code> | 
| VSCP_TYPE_WEATHER_AIR_VERY_COLD | `number` | <code>12</code> | 
| VSCP_TYPE_WEATHER_AIR_COLD | `number` | <code>13</code> | 
| VSCP_TYPE_WEATHER_AIR_NORMAL | `number` | <code>14</code> | 
| VSCP_TYPE_WEATHER_AIR_HOT | `number` | <code>15</code> | 
| VSCP_TYPE_WEATHER_AIR_VERY_HOT | `number` | <code>16</code> | 
| VSCP_TYPE_WEATHER_AIR_POLLUTION_LOW | `number` | <code>17</code> | 
| VSCP_TYPE_WEATHER_AIR_POLLUTION_MEDIUM | `number` | <code>18</code> | 
| VSCP_TYPE_WEATHER_AIR_POLLUTION_HIGH | `number` | <code>19</code> | 
| VSCP_TYPE_WEATHER_AIR_HUMID | `number` | <code>20</code> | 
| VSCP_TYPE_WEATHER_AIR_DRY | `number` | <code>21</code> | 
| VSCP_TYPE_WEATHER_SOIL_HUMID | `number` | <code>22</code> | 
| VSCP_TYPE_WEATHER_SOIL_DRY | `number` | <code>23</code> | 
| VSCP_TYPE_WEATHER_RAIN_NONE | `number` | <code>24</code> | 
| VSCP_TYPE_WEATHER_RAIN_LIGHT | `number` | <code>25</code> | 
| VSCP_TYPE_WEATHER_RAIN_HEAVY | `number` | <code>26</code> | 
| VSCP_TYPE_WEATHER_RAIN_VERY_HEAVY | `number` | <code>27</code> | 
| VSCP_TYPE_WEATHER_SUN_NONE | `number` | <code>28</code> | 
| VSCP_TYPE_WEATHER_SUN_LIGHT | `number` | <code>29</code> | 
| VSCP_TYPE_WEATHER_SUN_HEAVY | `number` | <code>30</code> | 
| VSCP_TYPE_WEATHER_SNOW_NONE | `number` | <code>31</code> | 
| VSCP_TYPE_WEATHER_SNOW_LIGHT | `number` | <code>32</code> | 
| VSCP_TYPE_WEATHER_SNOW_HEAVY | `number` | <code>33</code> | 
| VSCP_TYPE_WEATHER_DEW_POINT | `number` | <code>34</code> | 
| VSCP_TYPE_WEATHER_STORM | `number` | <code>35</code> | 
| VSCP_TYPE_WEATHER_FLOOD | `number` | <code>36</code> | 
| VSCP_TYPE_WEATHER_EARTHQUAKE | `number` | <code>37</code> | 
| VSCP_TYPE_WEATHER_NUCLEAR_DISASTER | `number` | <code>38</code> | 
| VSCP_TYPE_WEATHER_FIRE | `number` | <code>39</code> | 
| VSCP_TYPE_WEATHER_LIGHTNING | `number` | <code>40</code> | 
| VSCP_TYPE_WEATHER_UV_RADIATION_LOW | `number` | <code>41</code> | 
| VSCP_TYPE_WEATHER_UV_RADIATION_MEDIUM | `number` | <code>42</code> | 
| VSCP_TYPE_WEATHER_UV_RADIATION_NORMAL | `number` | <code>43</code> | 
| VSCP_TYPE_WEATHER_UV_RADIATION_HIGH | `number` | <code>44</code> | 
| VSCP_TYPE_WEATHER_UV_RADIATION_VERY_HIGH | `number` | <code>45</code> | 
| VSCP_TYPE_WEATHER_WARNING_LEVEL1 | `number` | <code>46</code> | 
| VSCP_TYPE_WEATHER_WARNING_LEVEL2 | `number` | <code>47</code> | 
| VSCP_TYPE_WEATHER_WARNING_LEVEL3 | `number` | <code>48</code> | 
| VSCP_TYPE_WEATHER_WARNING_LEVEL4 | `number` | <code>49</code> | 
| VSCP_TYPE_WEATHER_WARNING_LEVEL5 | `number` | <code>50</code> | 
| VSCP_TYPE_WEATHER_ARMAGEDON | `number` | <code>51</code> | 
| VSCP_TYPE_PHONE_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_PHONE_INCOMING_CALL | `number` | <code>1</code> | 
| VSCP_TYPE_PHONE_OUTGOING_CALL | `number` | <code>2</code> | 
| VSCP_TYPE_PHONE_RING | `number` | <code>3</code> | 
| VSCP_TYPE_PHONE_ANSWER | `number` | <code>4</code> | 
| VSCP_TYPE_PHONE_HANGUP | `number` | <code>5</code> | 
| VSCP_TYPE_PHONE_GIVEUP | `number` | <code>6</code> | 
| VSCP_TYPE_PHONE_TRANSFER | `number` | <code>7</code> | 
| VSCP_TYPE_PHONE_DATABASE_INFO | `number` | <code>8</code> | 
| VSCP_TYPE_DISPLAY_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_DISPLAY_CLEAR_DISPLAY | `number` | <code>1</code> | 
| VSCP_TYPE_DISPLAY_POSITION_CURSOR | `number` | <code>2</code> | 
| VSCP_TYPE_DISPLAY_WRITE_DISPLAY | `number` | <code>3</code> | 
| VSCP_TYPE_DISPLAY_WRITE_DISPLAY_BUFFER | `number` | <code>4</code> | 
| VSCP_TYPE_DISPLAY_SHOW_DISPLAY_BUFFER | `number` | <code>5</code> | 
| VSCP_TYPE_DISPLAY_SET_DISPLAY_BUFFER_PARAM | `number` | <code>6</code> | 
| VSCP_TYPE_DISPLAY_SHOW_TEXT | `number` | <code>32</code> | 
| VSCP_TYPE_DISPLAY_SHOW_LED | `number` | <code>48</code> | 
| VSCP_TYPE_DISPLAY_SHOW_LED_COLOR | `number` | <code>49</code> | 
| VSCP_TYPE_REMOTE_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_REMOTE_RC5 | `number` | <code>1</code> | 
| VSCP_TYPE_REMOTE_SONY12 | `number` | <code>3</code> | 
| VSCP_TYPE_REMOTE_LIRC | `number` | <code>32</code> | 
| VSCP_TYPE_REMOTE_VSCP | `number` | <code>48</code> | 
| VSCP_TYPE_REMOTE_MAPITO | `number` | <code>49</code> | 
| VSCP_TYPE_GNSS_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_GNSS_POSITION | `number` | <code>1</code> | 
| VSCP_TYPE_GNSS_SATELLITES | `number` | <code>2</code> | 
| VSCP_TYPE_WIRELESS_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_WIRELESS_GSM_CELL | `number` | <code>1</code> | 
| VSCP_TYPE_DIAGNOSTIC_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_DIAGNOSTIC_OVERVOLTAGE | `number` | <code>1</code> | 
| VSCP_TYPE_DIAGNOSTIC_UNDERVOLTAGE | `number` | <code>2</code> | 
| VSCP_TYPE_DIAGNOSTIC_VBUS_LOW | `number` | <code>3</code> | 
| VSCP_TYPE_DIAGNOSTIC_BATTERY_LOW | `number` | <code>4</code> | 
| VSCP_TYPE_DIAGNOSTIC_BATTERY_FULL | `number` | <code>5</code> | 
| VSCP_TYPE_DIAGNOSTIC_BATTERY_ERROR | `number` | <code>6</code> | 
| VSCP_TYPE_DIAGNOSTIC_BATTERY_OK | `number` | <code>7</code> | 
| VSCP_TYPE_DIAGNOSTIC_OVERCURRENT | `number` | <code>8</code> | 
| VSCP_TYPE_DIAGNOSTIC_CIRCUIT_ERROR | `number` | <code>9</code> | 
| VSCP_TYPE_DIAGNOSTIC_SHORT_CIRCUIT | `number` | <code>10</code> | 
| VSCP_TYPE_DIAGNOSTIC_OPEN_CIRCUIT | `number` | <code>11</code> | 
| VSCP_TYPE_DIAGNOSTIC_MOIST | `number` | <code>12</code> | 
| VSCP_TYPE_DIAGNOSTIC_WIRE_FAIL | `number` | <code>13</code> | 
| VSCP_TYPE_DIAGNOSTIC_WIRELESS_FAIL | `number` | <code>14</code> | 
| VSCP_TYPE_DIAGNOSTIC_IR_FAIL | `number` | <code>15</code> | 
| VSCP_TYPE_DIAGNOSTIC_1WIRE_FAIL | `number` | <code>16</code> | 
| VSCP_TYPE_DIAGNOSTIC_RS222_FAIL | `number` | <code>17</code> | 
| VSCP_TYPE_DIAGNOSTIC_RS232_FAIL | `number` | <code>18</code> | 
| VSCP_TYPE_DIAGNOSTIC_RS423_FAIL | `number` | <code>19</code> | 
| VSCP_TYPE_DIAGNOSTIC_RS485_FAIL | `number` | <code>20</code> | 
| VSCP_TYPE_DIAGNOSTIC_CAN_FAIL | `number` | <code>21</code> | 
| VSCP_TYPE_DIAGNOSTIC_LAN_FAIL | `number` | <code>22</code> | 
| VSCP_TYPE_DIAGNOSTIC_USB_FAIL | `number` | <code>23</code> | 
| VSCP_TYPE_DIAGNOSTIC_WIFI_FAIL | `number` | <code>24</code> | 
| VSCP_TYPE_DIAGNOSTIC_NFC_RFID_FAIL | `number` | <code>25</code> | 
| VSCP_TYPE_DIAGNOSTIC_LOW_SIGNAL | `number` | <code>26</code> | 
| VSCP_TYPE_DIAGNOSTIC_HIGH_SIGNAL | `number` | <code>27</code> | 
| VSCP_TYPE_DIAGNOSTIC_ADC_FAIL | `number` | <code>28</code> | 
| VSCP_TYPE_DIAGNOSTIC_ALU_FAIL | `number` | <code>29</code> | 
| VSCP_TYPE_DIAGNOSTIC_ASSERT | `number` | <code>30</code> | 
| VSCP_TYPE_DIAGNOSTIC_DAC_FAIL | `number` | <code>31</code> | 
| VSCP_TYPE_DIAGNOSTIC_DMA_FAIL | `number` | <code>32</code> | 
| VSCP_TYPE_DIAGNOSTIC_ETH_FAIL | `number` | <code>33</code> | 
| VSCP_TYPE_DIAGNOSTIC_EXCEPTION | `number` | <code>34</code> | 
| VSCP_TYPE_DIAGNOSTIC_FPU_FAIL | `number` | <code>35</code> | 
| VSCP_TYPE_DIAGNOSTIC_GPIO_FAIL | `number` | <code>36</code> | 
| VSCP_TYPE_DIAGNOSTIC_I2C_FAIL | `number` | <code>37</code> | 
| VSCP_TYPE_DIAGNOSTIC_I2S_FAIL | `number` | <code>38</code> | 
| VSCP_TYPE_DIAGNOSTIC_INVALID_CONFIG | `number` | <code>39</code> | 
| VSCP_TYPE_DIAGNOSTIC_MMU_FAIL | `number` | <code>40</code> | 
| VSCP_TYPE_DIAGNOSTIC_NMI | `number` | <code>41</code> | 
| VSCP_TYPE_DIAGNOSTIC_OVERHEAT | `number` | <code>42</code> | 
| VSCP_TYPE_DIAGNOSTIC_PLL_FAIL | `number` | <code>43</code> | 
| VSCP_TYPE_DIAGNOSTIC_POR_FAIL | `number` | <code>44</code> | 
| VSCP_TYPE_DIAGNOSTIC_PWM_FAIL | `number` | <code>45</code> | 
| VSCP_TYPE_DIAGNOSTIC_RAM_FAIL | `number` | <code>46</code> | 
| VSCP_TYPE_DIAGNOSTIC_ROM_FAIL | `number` | <code>47</code> | 
| VSCP_TYPE_DIAGNOSTIC_SPI_FAIL | `number` | <code>48</code> | 
| VSCP_TYPE_DIAGNOSTIC_STACK_FAIL | `number` | <code>49</code> | 
| VSCP_TYPE_DIAGNOSTIC_LIN_FAIL | `number` | <code>50</code> | 
| VSCP_TYPE_DIAGNOSTIC_UART_FAIL | `number` | <code>51</code> | 
| VSCP_TYPE_DIAGNOSTIC_UNHANDLED_INT | `number` | <code>52</code> | 
| VSCP_TYPE_DIAGNOSTIC_MEMORY_FAIL | `number` | <code>53</code> | 
| VSCP_TYPE_DIAGNOSTIC_VARIABLE_RANGE | `number` | <code>54</code> | 
| VSCP_TYPE_DIAGNOSTIC_WDT | `number` | <code>55</code> | 
| VSCP_TYPE_DIAGNOSTIC_EEPROM_FAIL | `number` | <code>56</code> | 
| VSCP_TYPE_DIAGNOSTIC_ENCRYPTION_FAIL | `number` | <code>57</code> | 
| VSCP_TYPE_DIAGNOSTIC_BAD_USER_INPUT | `number` | <code>58</code> | 
| VSCP_TYPE_DIAGNOSTIC_DECRYPTION_FAIL | `number` | <code>59</code> | 
| VSCP_TYPE_DIAGNOSTIC_NOISE | `number` | <code>60</code> | 
| VSCP_TYPE_DIAGNOSTIC_BOOTLOADER_FAIL | `number` | <code>61</code> | 
| VSCP_TYPE_DIAGNOSTIC_PROGRAMFLOW_FAIL | `number` | <code>62</code> | 
| VSCP_TYPE_DIAGNOSTIC_RTC_FAIL | `number` | <code>63</code> | 
| VSCP_TYPE_DIAGNOSTIC_SYSTEM_TEST_FAIL | `number` | <code>64</code> | 
| VSCP_TYPE_DIAGNOSTIC_SENSOR_FAIL | `number` | <code>65</code> | 
| VSCP_TYPE_DIAGNOSTIC_SAFESTATE | `number` | <code>66</code> | 
| VSCP_TYPE_DIAGNOSTIC_SIGNAL_IMPLAUSIBLE | `number` | <code>67</code> | 
| VSCP_TYPE_DIAGNOSTIC_STORAGE_FAIL | `number` | <code>68</code> | 
| VSCP_TYPE_DIAGNOSTIC_SELFTEST_FAIL | `number` | <code>69</code> | 
| VSCP_TYPE_DIAGNOSTIC_ESD_EMC_EMI | `number` | <code>70</code> | 
| VSCP_TYPE_DIAGNOSTIC_TIMEOUT | `number` | <code>71</code> | 
| VSCP_TYPE_DIAGNOSTIC_LCD_FAIL | `number` | <code>72</code> | 
| VSCP_TYPE_DIAGNOSTIC_TOUCHPANEL_FAIL | `number` | <code>73</code> | 
| VSCP_TYPE_DIAGNOSTIC_NOLOAD | `number` | <code>74</code> | 
| VSCP_TYPE_DIAGNOSTIC_COOLING_FAIL | `number` | <code>75</code> | 
| VSCP_TYPE_DIAGNOSTIC_HEATING_FAIL | `number` | <code>76</code> | 
| VSCP_TYPE_DIAGNOSTIC_TX_FAIL | `number` | <code>77</code> | 
| VSCP_TYPE_DIAGNOSTIC_RX_FAIL | `number` | <code>78</code> | 
| VSCP_TYPE_DIAGNOSTIC_EXT_IC_FAIL | `number` | <code>79</code> | 
| VSCP_TYPE_ERROR_SUCCESS | `number` | <code>0</code> | 
| VSCP_TYPE_ERROR_ERROR | `number` | <code>1</code> | 
| VSCP_TYPE_ERROR_CHANNEL | `number` | <code>7</code> | 
| VSCP_TYPE_ERROR_FIFO_EMPTY | `number` | <code>8</code> | 
| VSCP_TYPE_ERROR_FIFO_FULL | `number` | <code>9</code> | 
| VSCP_TYPE_ERROR_FIFO_SIZE | `number` | <code>10</code> | 
| VSCP_TYPE_ERROR_FIFO_WAIT | `number` | <code>11</code> | 
| VSCP_TYPE_ERROR_GENERIC | `number` | <code>12</code> | 
| VSCP_TYPE_ERROR_HARDWARE | `number` | <code>13</code> | 
| VSCP_TYPE_ERROR_INIT_FAIL | `number` | <code>14</code> | 
| VSCP_TYPE_ERROR_INIT_MISSING | `number` | <code>15</code> | 
| VSCP_TYPE_ERROR_INIT_READY | `number` | <code>16</code> | 
| VSCP_TYPE_ERROR_NOT_SUPPORTED | `number` | <code>17</code> | 
| VSCP_TYPE_ERROR_OVERRUN | `number` | <code>18</code> | 
| VSCP_TYPE_ERROR_RCV_EMPTY | `number` | <code>19</code> | 
| VSCP_TYPE_ERROR_REGISTER | `number` | <code>20</code> | 
| VSCP_TYPE_ERROR_TRM_FULL | `number` | <code>21</code> | 
| VSCP_TYPE_ERROR_LIBRARY | `number` | <code>28</code> | 
| VSCP_TYPE_ERROR_PROCADDRESS | `number` | <code>29</code> | 
| VSCP_TYPE_ERROR_ONLY_ONE_INSTANCE | `number` | <code>30</code> | 
| VSCP_TYPE_ERROR_SUB_DRIVER | `number` | <code>31</code> | 
| VSCP_TYPE_ERROR_TIMEOUT | `number` | <code>32</code> | 
| VSCP_TYPE_ERROR_NOT_OPEN | `number` | <code>33</code> | 
| VSCP_TYPE_ERROR_PARAMETER | `number` | <code>34</code> | 
| VSCP_TYPE_ERROR_MEMORY | `number` | <code>35</code> | 
| VSCP_TYPE_ERROR_INTERNAL | `number` | <code>36</code> | 
| VSCP_TYPE_ERROR_COMMUNICATION | `number` | <code>37</code> | 
| VSCP_TYPE_ERROR_USER | `number` | <code>38</code> | 
| VSCP_TYPE_ERROR_PASSWORD | `number` | <code>39</code> | 
| VSCP_TYPE_ERROR_CONNECTION | `number` | <code>40</code> | 
| VSCP_TYPE_ERROR_INVALID_HANDLE | `number` | <code>41</code> | 
| VSCP_TYPE_ERROR_OPERATION_FAILED | `number` | <code>42</code> | 
| VSCP_TYPE_ERROR_BUFFER_SMALL | `number` | <code>43</code> | 
| VSCP_TYPE_ERROR_ITEM_UNKNOWN | `number` | <code>44</code> | 
| VSCP_TYPE_ERROR_NAME_USED | `number` | <code>45</code> | 
| VSCP_TYPE_LOG_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_LOG_MESSAGE | `number` | <code>1</code> | 
| VSCP_TYPE_LOG_START | `number` | <code>2</code> | 
| VSCP_TYPE_LOG_STOP | `number` | <code>3</code> | 
| VSCP_TYPE_LOG_LEVEL | `number` | <code>4</code> | 
| VSCP_TYPE_LABORATORY_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_LOCAL_GENERAL | `number` | <code>0</code> | 
| VSCP2_TYPE_PROTOCOL_GENERAL | `number` | <code>0</code> | 
| VSCP2_TYPE_PROTOCOL_READ_REGISTER | `number` | <code>1</code> | 
| VSCP2_TYPE_PROTOCOL_WRITE_REGISTER | `number` | <code>2</code> | 
| VSCP2_TYPE_PROTOCOL_READ_WRITE_RESPONSE | `number` | <code>3</code> | 
| VSCP2_TYPE_PROTOCOL_HIGH_END_SERVER_CAPS | `number` | <code>20</code> | 
| VSCP2_TYPE_PROTOCOL_WHO_IS_THERE_RESPONSE | `number` | <code>32</code> | 
| VSCP2_TYPE_CONTROL_GENERAL | `number` | <code>0</code> | 
| VSCP2_TYPE_INFORMATION_GENERAL | `number` | <code>0</code> | 
| VSCP2_TYPE_INFORMATION_TOKEN_ACTIVITY | `number` | <code>1</code> | 
| VSCP2_TYPE_INFORMATION_HEART_BEAT | `number` | <code>2</code> | 
| VSCP2_TYPE_INFORMATION_PROXY_HEART_BEAT | `number` | <code>3</code> | 
| VSCP2_TYPE_INFORMATION_CHANNEL_ANNOUNCE | `number` | <code>4</code> | 
| VSCP2_TYPE_TEXT2SPEECH_GENERAL | `number` | <code>0</code> | 
| VSCP2_TYPE_TEXT2SPEECH_TALK | `number` | <code>1</code> | 
| VSCP2_TYPE_CUSTOM_GENERAL | `number` | <code>0</code> | 
| VSCP2_TYPE_DISPLAY_GENERAL | `number` | <code>0</code> | 
| VSCP2_TYPE_VSCPD_GENERAL | `number` | <code>0</code> | 
| VSCP2_TYPE_VSCPD_LOOP | `number` | <code>1</code> | 
| VSCP2_TYPE_VSCPD_PAUSE | `number` | <code>3</code> | 
| VSCP2_TYPE_VSCPD_ACTIVATE | `number` | <code>4</code> | 
| VSCP2_TYPE_VSCPD_SECOND | `number` | <code>5</code> | 
| VSCP2_TYPE_VSCPD_MINUTE | `number` | <code>6</code> | 
| VSCP2_TYPE_VSCPD_HOUR | `number` | <code>7</code> | 
| VSCP2_TYPE_VSCPD_NOON | `number` | <code>8</code> | 
| VSCP2_TYPE_VSCPD_MIDNIGHT | `number` | <code>9</code> | 
| VSCP2_TYPE_VSCPD_WEEK | `number` | <code>11</code> | 
| VSCP2_TYPE_VSCPD_MONTH | `number` | <code>12</code> | 
| VSCP2_TYPE_VSCPD_QUARTER | `number` | <code>13</code> | 
| VSCP2_TYPE_VSCPD_YEAR | `number` | <code>14</code> | 
| VSCP2_TYPE_VSCPD_RANDOM_MINUTE | `number` | <code>15</code> | 
| VSCP2_TYPE_VSCPD_RANDOM_HOUR | `number` | <code>16</code> | 
| VSCP2_TYPE_VSCPD_RANDOM_DAY | `number` | <code>17</code> | 
| VSCP2_TYPE_VSCPD_RANDOM_WEEK | `number` | <code>18</code> | 
| VSCP2_TYPE_VSCPD_RANDOM_MONTH | `number` | <code>19</code> | 
| VSCP2_TYPE_VSCPD_RANDOM_YEAR | `number` | <code>20</code> | 
| VSCP2_TYPE_VSCPD_DUSK | `number` | <code>21</code> | 
| VSCP2_TYPE_VSCPD_DAWN | `number` | <code>22</code> | 
| VSCP2_TYPE_VSCPD_STARTING_UP | `number` | <code>23</code> | 
| VSCP2_TYPE_VSCPD_SHUTTING_DOWN | `number` | <code>24</code> | 
| VSCP2_TYPE_VSCPD_TIMER_STARTED | `number` | <code>25</code> | 
| VSCP2_TYPE_VSCPD_TIMER_PAUSED | `number` | <code>26</code> | 
| VSCP2_TYPE_VSCPD_TIMER_RESUMED | `number` | <code>27</code> | 
| VSCP2_TYPE_VSCPD_TIMER_STOPPED | `number` | <code>28</code> | 
| VSCP2_TYPE_VSCPD_TIMER_ELLAPSED | `number` | <code>29</code> | 
| VSCP2_TYPE_VSCPD_NEW_CALCULATION | `number` | <code>30</code> | 

<a id="vscp_dot_constants_dot_priorities"></a>

#### constants.priorities : `enum`
VSCP class priorities

**Kind**: static enum of [`constants`](#vscp.constants)  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| PRIORITY_0_HIGH | `number` | <code>0</code> | 
| PRIORITY_1 | `number` | <code>1</code> | 
| PRIORITY_2 | `number` | <code>2</code> | 
| PRIORITY_3_NORMAL | `number` | <code>3</code> | 
| PRIORITY_4 | `number` | <code>4</code> | 
| PRIORITY_5 | `number` | <code>5</code> | 
| PRIORITY_6 | `number` | <code>6</code> | 
| PRIORITY_7_LOW | `number` | <code>7</code> | 

<a id="vscp_dot_constants_dot_varTypes"></a>

#### constants.varTypes : `enum`
VSCP variable types

**Kind**: static enum of [`constants`](#vscp.constants)  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| UNASSIGNED | `number` | <code>0</code> | 
| STRING | `number` | <code>1</code> | 
| BOOLEAN | `number` | <code>2</code> | 
| INTEGER | `number` | <code>3</code> | 
| LONG | `number` | <code>4</code> | 
| DOUBLE | `number` | <code>5</code> | 
| MEASUREMENT | `number` | <code>6</code> | 
| EVENT | `number` | <code>7</code> | 
| GUID | `number` | <code>8</code> | 
| EVENT_DATA | `number` | <code>9</code> | 
| EVENT_CLASS | `number` | <code>10</code> | 
| EVENT_TYPE | `number` | <code>11</code> | 
| EVENT_TIMESTAMP | `number` | <code>12</code> | 
| DATE_TIME | `number` | <code>13</code> | 
| DATE | `number` | <code>14</code> | 
| TIME | `number` | <code>15</code> | 
| BLOB | `number` | <code>16</code> | 
| MIME | `number` | <code>100</code> | 
| HTML | `number` | <code>101</code> | 
| JAVASCIPT | `number` | <code>102</code> | 
| JSON | `number` | <code>103</code> | 
| XML | `number` | <code>104</code> | 
| SQL | `number` | <code>105</code> | 
| LUA | `number` | <code>201</code> | 
| LUARES | `number` | <code>202</code> | 
| UXTYPE1 | `number` | <code>300</code> | 
| DMROW | `number` | <code>500</code> | 
| DRIVER | `number` | <code>501</code> | 
| USER | `number` | <code>502</code> | 
| FILTER | `number` | <code>503</code> | 

<a id="vscp_dot_constants_dot_varTypeNames"></a>

#### constants.varTypeNames
VSCP variable type names as string. Use to fill drop down boxes and similar.

**Kind**: static constant of [`constants`](#vscp.constants)  
<a id="vscp_dot_utility"></a>

### vscp.utility : `object`
Utility functions

**Kind**: static namespace of [`vscp`](#vscp)  

* [.utility](#vscp_dot_utility) : `object`
    * [.readValue(input)](#vscp_dot_utility_dot_readValue) ⇒ `number`
    * [.getTime()](#vscp_dot_utility_dot_getTime) ⇒ `string`
    * [.guidToStr(guid)](#vscp_dot_utility_dot_guidToStr) ⇒ `string`
    * [.strToGuid(guid)](#vscp_dot_utility_dot_strToGuid) ⇒ `Array.&lt;number&gt;`
    * [.getNodeId(guid)](#vscp_dot_utility_dot_getNodeId) ⇒ `number`

<a id="vscp_dot_utility_dot_readValue"></a>

#### utility.readValue(input) ⇒ `number`
Read a hex or decimal value and return as an integer.

**Kind**: static method of [`utility`](#vscp.utility)  
**Returns**: `number` - Value  

| Param | Type | Description |
| --- | --- | --- |
| input | `string` | Hex or decimal value as string |

<a id="vscp_dot_utility_dot_getTime"></a>

#### utility.getTime() ⇒ `string`
Utility function which returns the current time in the following format: hh:mm:ss.us

**Kind**: static method of [`utility`](#vscp.utility)  
**Returns**: `string` - Current time in the format hh:mm:ss.us  
<a id="vscp_dot_utility_dot_guidToStr"></a>

#### utility.guidToStr(guid) ⇒ `string`
Converts a GUID number array to a GUID string.

**Kind**: static method of [`utility`](#vscp.utility)  
**Returns**: `string` - GUID string, e.g. 00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00  

| Param | Type | Description |
| --- | --- | --- |
| guid | `Array.&lt;number&gt;` | GUID number array |

<a id="vscp_dot_utility_dot_strToGuid"></a>

#### utility.strToGuid(guid) ⇒ `Array.&lt;number&gt;`
Converts a GUID string to a GUID number array.

**Kind**: static method of [`utility`](#vscp.utility)  
**Returns**: `Array.&lt;number&gt;` - GUID number array  

| Param | Type | Description |
| --- | --- | --- |
| guid | `string` | GUID string, e.g. 00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00 |

<a id="vscp_dot_utility_dot_getNodeId"></a>

#### utility.getNodeId(guid) ⇒ `number`
Get node id from a node GUID string.

**Kind**: static method of [`utility`](#vscp.utility)  
**Returns**: `number` - Node id  

| Param | Type | Description |
| --- | --- | --- |
| guid | `string` | GUID string, e.g. 00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00 |

<a id="vscp_dot_mdf"></a>

### vscp.mdf : `object`
VSCP module description file handling functionality

**Kind**: static namespace of [`vscp`](#vscp)  

* [.mdf](#vscp_dot_mdf) : `object`
    * [.Register](#vscp_dot_mdf_dot_Register)
        * [new vscp.mdf.Register()](#new_vscp_dot_mdf_dot_Register_new)
        * [.name](#vscp_dot_mdf_dot_Register_plus_name) : `string`
        * [.description](#vscp_dot_mdf_dot_Register_plus_description) : `string`
        * [.readAccess](#vscp_dot_mdf_dot_Register_plus_readAccess) : `boolean`
        * [.writeAccess](#vscp_dot_mdf_dot_Register_plus_writeAccess) : `boolean`
        * [.page](#vscp_dot_mdf_dot_Register_plus_page) : `number`
        * [.offset](#vscp_dot_mdf_dot_Register_plus_offset) : `number`
        * [.value](#vscp_dot_mdf_dot_Register_plus_value) : `number`
        * [.dirty](#vscp_dot_mdf_dot_Register_plus_dirty) : `number`
        * [.userData](#vscp_dot_mdf_dot_Register_plus_userData) : `object`
        * [.setValue(value)](#vscp_dot_mdf_dot_Register_plus_setValue)
    * [.Abstraction](#vscp_dot_mdf_dot_Abstraction)
        * [new vscp.mdf.Abstraction()](#new_vscp_dot_mdf_dot_Abstraction_new)
        * [.name](#vscp_dot_mdf_dot_Abstraction_plus_name) : `string`
        * [.description](#vscp_dot_mdf_dot_Abstraction_plus_description) : `string`
        * [.readAccess](#vscp_dot_mdf_dot_Abstraction_plus_readAccess) : `boolean`
        * [.writeAccess](#vscp_dot_mdf_dot_Abstraction_plus_writeAccess) : `boolean`
        * [.id](#vscp_dot_mdf_dot_Abstraction_plus_id) : `string`
        * [.page](#vscp_dot_mdf_dot_Abstraction_plus_page) : `number`
        * [.offset](#vscp_dot_mdf_dot_Abstraction_plus_offset) : `number`
        * [.value](#vscp_dot_mdf_dot_Abstraction_plus_value) : `number`
        * [.type](#vscp_dot_mdf_dot_Abstraction_plus_type) : `string`
        * [.defValue](#vscp_dot_mdf_dot_Abstraction_plus_defValue) : `number`
        * [.dirty](#vscp_dot_mdf_dot_Abstraction_plus_dirty) : `number`
        * [.userData](#vscp_dot_mdf_dot_Abstraction_plus_userData) : `object`
        * [.setValue(value)](#vscp_dot_mdf_dot_Abstraction_plus_setValue)
    * [.constants](#vscp_dot_mdf_dot_constants) : `object`
        * [.TYPE_SIZES](#vscp_dot_mdf_dot_constants_dot_TYPE_SIZES) : `enum`
        * [.CONVERSION_FROM_DECIMAL](#vscp_dot_mdf_dot_constants_dot_CONVERSION_FROM_DECIMAL)
        * [.CONVERSION_TO_DECIMAL](#vscp_dot_mdf_dot_constants_dot_CONVERSION_TO_DECIMAL)
        * [.RANGE](#vscp_dot_mdf_dot_constants_dot_RANGE)
    * [.timeout](#vscp_dot_mdf_dot_timeout) : `number`
    * [.load(options)](#vscp_dot_mdf_dot_load)
    * [.loadLocal(options)](#vscp_dot_mdf_dot_loadLocal)
    * [.readAbstractValue(options)](#vscp_dot_mdf_dot_readAbstractValue)
    * [.writeAbstractValue(options)](#vscp_dot_mdf_dot_writeAbstractValue)
    * [.writeAbstractBits(options)](#vscp_dot_mdf_dot_writeAbstractBits)
    * [.getRegisters(options)](#vscp_dot_mdf_dot_getRegisters) ⇒ [`Array.&lt;Register&gt;`](#vscp.mdf.Register)
    * [.getAbstractions(options)](#vscp_dot_mdf_dot_getAbstractions) ⇒ [`Array.&lt;Abstraction&gt;`](#vscp.mdf.Abstraction)

<a id="vscp_dot_mdf_dot_Register"></a>

#### mdf.Register
**Kind**: static class of [`mdf`](#vscp.mdf)  

* [.Register](#vscp_dot_mdf_dot_Register)
    * [new vscp.mdf.Register()](#new_vscp_dot_mdf_dot_Register_new)
    * [.name](#vscp_dot_mdf_dot_Register_plus_name) : `string`
    * [.description](#vscp_dot_mdf_dot_Register_plus_description) : `string`
    * [.readAccess](#vscp_dot_mdf_dot_Register_plus_readAccess) : `boolean`
    * [.writeAccess](#vscp_dot_mdf_dot_Register_plus_writeAccess) : `boolean`
    * [.page](#vscp_dot_mdf_dot_Register_plus_page) : `number`
    * [.offset](#vscp_dot_mdf_dot_Register_plus_offset) : `number`
    * [.value](#vscp_dot_mdf_dot_Register_plus_value) : `number`
    * [.dirty](#vscp_dot_mdf_dot_Register_plus_dirty) : `number`
    * [.userData](#vscp_dot_mdf_dot_Register_plus_userData) : `object`
    * [.setValue(value)](#vscp_dot_mdf_dot_Register_plus_setValue)

<a id="new_vscp_dot_mdf_dot_Register_new"></a>

##### new vscp.mdf.Register()
MDF register with all parameters.

<a id="vscp_dot_mdf_dot_Register_plus_name"></a>

##### register.name : `string`
Register name

**Kind**: instance property of [`Register`](#vscp.mdf.Register)  
<a id="vscp_dot_mdf_dot_Register_plus_description"></a>

##### register.description : `string`
Register description

**Kind**: instance property of [`Register`](#vscp.mdf.Register)  
<a id="vscp_dot_mdf_dot_Register_plus_readAccess"></a>

##### register.readAccess : `boolean`
Read access to the register allowed or not

**Kind**: instance property of [`Register`](#vscp.mdf.Register)  
<a id="vscp_dot_mdf_dot_Register_plus_writeAccess"></a>

##### register.writeAccess : `boolean`
Write access to the register allowed or not

**Kind**: instance property of [`Register`](#vscp.mdf.Register)  
<a id="vscp_dot_mdf_dot_Register_plus_page"></a>

##### register.page : `number`
Page where the register is located

**Kind**: instance property of [`Register`](#vscp.mdf.Register)  
<a id="vscp_dot_mdf_dot_Register_plus_offset"></a>

##### register.offset : `number`
Offset where the register is located on the page

**Kind**: instance property of [`Register`](#vscp.mdf.Register)  
<a id="vscp_dot_mdf_dot_Register_plus_value"></a>

##### register.value : `number`
Register value

**Kind**: instance property of [`Register`](#vscp.mdf.Register)  
<a id="vscp_dot_mdf_dot_Register_plus_dirty"></a>

##### register.dirty : `number`
Marks the register value dirty, which means the user changed it.
It can be used to detect which registers have to be written to the node.

**Kind**: instance property of [`Register`](#vscp.mdf.Register)  
<a id="vscp_dot_mdf_dot_Register_plus_userData"></a>

##### register.userData : `object`
User specific data

**Kind**: instance property of [`Register`](#vscp.mdf.Register)  
<a id="vscp_dot_mdf_dot_Register_plus_setValue"></a>

##### register.setValue(value)
This function set a register value and marks it dirty.

**Kind**: instance method of [`Register`](#vscp.mdf.Register)  

| Param | Type | Description |
| --- | --- | --- |
| value | `number` | New value |

<a id="vscp_dot_mdf_dot_Abstraction"></a>

#### mdf.Abstraction
**Kind**: static class of [`mdf`](#vscp.mdf)  

* [.Abstraction](#vscp_dot_mdf_dot_Abstraction)
    * [new vscp.mdf.Abstraction()](#new_vscp_dot_mdf_dot_Abstraction_new)
    * [.name](#vscp_dot_mdf_dot_Abstraction_plus_name) : `string`
    * [.description](#vscp_dot_mdf_dot_Abstraction_plus_description) : `string`
    * [.readAccess](#vscp_dot_mdf_dot_Abstraction_plus_readAccess) : `boolean`
    * [.writeAccess](#vscp_dot_mdf_dot_Abstraction_plus_writeAccess) : `boolean`
    * [.id](#vscp_dot_mdf_dot_Abstraction_plus_id) : `string`
    * [.page](#vscp_dot_mdf_dot_Abstraction_plus_page) : `number`
    * [.offset](#vscp_dot_mdf_dot_Abstraction_plus_offset) : `number`
    * [.value](#vscp_dot_mdf_dot_Abstraction_plus_value) : `number`
    * [.type](#vscp_dot_mdf_dot_Abstraction_plus_type) : `string`
    * [.defValue](#vscp_dot_mdf_dot_Abstraction_plus_defValue) : `number`
    * [.dirty](#vscp_dot_mdf_dot_Abstraction_plus_dirty) : `number`
    * [.userData](#vscp_dot_mdf_dot_Abstraction_plus_userData) : `object`
    * [.setValue(value)](#vscp_dot_mdf_dot_Abstraction_plus_setValue)

<a id="new_vscp_dot_mdf_dot_Abstraction_new"></a>

##### new vscp.mdf.Abstraction()
MDF abstraction with all parameters.

<a id="vscp_dot_mdf_dot_Abstraction_plus_name"></a>

##### abstraction.name : `string`
Abstraction name

**Kind**: instance property of [`Abstraction`](#vscp.mdf.Abstraction)  
<a id="vscp_dot_mdf_dot_Abstraction_plus_description"></a>

##### abstraction.description : `string`
Abstraction description

**Kind**: instance property of [`Abstraction`](#vscp.mdf.Abstraction)  
<a id="vscp_dot_mdf_dot_Abstraction_plus_readAccess"></a>

##### abstraction.readAccess : `boolean`
Read access to the abstraction allowed or not

**Kind**: instance property of [`Abstraction`](#vscp.mdf.Abstraction)  
<a id="vscp_dot_mdf_dot_Abstraction_plus_writeAccess"></a>

##### abstraction.writeAccess : `boolean`
Write access to the abstraction allowed or not

**Kind**: instance property of [`Abstraction`](#vscp.mdf.Abstraction)  
<a id="vscp_dot_mdf_dot_Abstraction_plus_id"></a>

##### abstraction.id : `string`
Abstraction id

**Kind**: instance property of [`Abstraction`](#vscp.mdf.Abstraction)  
<a id="vscp_dot_mdf_dot_Abstraction_plus_page"></a>

##### abstraction.page : `number`
Page where the abstraction is located

**Kind**: instance property of [`Abstraction`](#vscp.mdf.Abstraction)  
<a id="vscp_dot_mdf_dot_Abstraction_plus_offset"></a>

##### abstraction.offset : `number`
Offset where the abstraction is located

**Kind**: instance property of [`Abstraction`](#vscp.mdf.Abstraction)  
<a id="vscp_dot_mdf_dot_Abstraction_plus_value"></a>

##### abstraction.value : `number`
Abstraction value

**Kind**: instance property of [`Abstraction`](#vscp.mdf.Abstraction)  
<a id="vscp_dot_mdf_dot_Abstraction_plus_type"></a>

##### abstraction.type : `string`
Abstraction type

**Kind**: instance property of [`Abstraction`](#vscp.mdf.Abstraction)  
<a id="vscp_dot_mdf_dot_Abstraction_plus_defValue"></a>

##### abstraction.defValue : `number`
Abstraction default value

**Kind**: instance property of [`Abstraction`](#vscp.mdf.Abstraction)  
<a id="vscp_dot_mdf_dot_Abstraction_plus_dirty"></a>

##### abstraction.dirty : `number`
Marks the abstraction value dirty, which means the user changed it.
It can be used to detect which abstractions have to be written to the node.

**Kind**: instance property of [`Abstraction`](#vscp.mdf.Abstraction)  
<a id="vscp_dot_mdf_dot_Abstraction_plus_userData"></a>

##### abstraction.userData : `object`
User specific data

**Kind**: instance property of [`Abstraction`](#vscp.mdf.Abstraction)  
<a id="vscp_dot_mdf_dot_Abstraction_plus_setValue"></a>

##### abstraction.setValue(value)
This function set a abstraction value and marks it dirty.

**Kind**: instance method of [`Abstraction`](#vscp.mdf.Abstraction)  

| Param | Type | Description |
| --- | --- | --- |
| value | `number` | New value |

<a id="vscp_dot_mdf_dot_constants"></a>

#### mdf.constants : `object`
MDF specific constants

**Kind**: static namespace of [`mdf`](#vscp.mdf)  

* [.constants](#vscp_dot_mdf_dot_constants) : `object`
    * [.TYPE_SIZES](#vscp_dot_mdf_dot_constants_dot_TYPE_SIZES) : `enum`
    * [.CONVERSION_FROM_DECIMAL](#vscp_dot_mdf_dot_constants_dot_CONVERSION_FROM_DECIMAL)
    * [.CONVERSION_TO_DECIMAL](#vscp_dot_mdf_dot_constants_dot_CONVERSION_TO_DECIMAL)
    * [.RANGE](#vscp_dot_mdf_dot_constants_dot_RANGE)

<a id="vscp_dot_mdf_dot_constants_dot_TYPE_SIZES"></a>

##### constants.TYPE_SIZES : `enum`
MDF type sizes in bytes

**Kind**: static enum of [`constants`](#vscp.mdf.constants)  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| string | `number` | <code>0</code> | 
| bitfield | `number` | <code>1</code> | 
| bool | `number` | <code>1</code> | 
| int8_t | `number` | <code>1</code> | 
| uint8_t | `number` | <code>1</code> | 
| int16_t | `number` | <code>2</code> | 
| uint16_t | `number` | <code>2</code> | 
| int32_t | `number` | <code>4</code> | 
| uint32_t | `number` | <code>4</code> | 
| int64_t | `number` | <code>8</code> | 
| uint64_t | `number` | <code>8</code> | 
| float | `number` | <code>4</code> | 
| double | `number` | <code>8</code> | 
| date | `number` | <code>4</code> | 
| time | `number` | <code>4</code> | 
| guid | `number` | <code>16</code> | 
| char | `number` | <code>1</code> | 
| byte | `number` | <code>1</code> | 
| short | `number` | <code>2</code> | 
| integer | `number` | <code>2</code> | 
| long | `number` | <code>4</code> | 

<a id="vscp_dot_mdf_dot_constants_dot_CONVERSION_FROM_DECIMAL"></a>

##### constants.CONVERSION_FROM_DECIMAL
Conversion functions from decimal

**Kind**: static constant of [`constants`](#vscp.mdf.constants)  
<a id="vscp_dot_mdf_dot_constants_dot_CONVERSION_TO_DECIMAL"></a>

##### constants.CONVERSION_TO_DECIMAL
Conversion functions to decimal

**Kind**: static constant of [`constants`](#vscp.mdf.constants)  
<a id="vscp_dot_mdf_dot_constants_dot_RANGE"></a>

##### constants.RANGE
Type ranges

**Kind**: static constant of [`constants`](#vscp.mdf.constants)  
<a id="vscp_dot_mdf_dot_timeout"></a>

#### mdf.timeout : `number`
VSCP response timeout in ms

**Kind**: static constant of [`mdf`](#vscp.mdf)  
<a id="vscp_dot_mdf_dot_load"></a>

#### mdf.load(options)
Get the MDF as xml document from a URL.

**Kind**: static method of [`mdf`](#vscp.mdf)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.url | `function` | URL to MDF file |
| options.onSuccess | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_mdf_dot_loadLocal"></a>

#### mdf.loadLocal(options)
Get the MDF as xml document from local file system.

**Kind**: static method of [`mdf`](#vscp.mdf)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.fileRef | `function` | File reference to MDF file |
| options.onSuccess | `function` | If the xml file is successful loaded, this function will be called. |
| [options.onError] | `function` | If loading the xml file failed, this function will be called. |

<a id="vscp_dot_mdf_dot_readAbstractValue"></a>

#### mdf.readAbstractValue(options)
Read a abstract value.

**Kind**: static method of [`mdf`](#vscp.mdf)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.mdf | `object` | MDF as xml jquery object |
| options.id | `number` | Abstract value id |
| options.onSuccess | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_mdf_dot_writeAbstractValue"></a>

#### mdf.writeAbstractValue(options)
Write a abstract value.

**Kind**: static method of [`mdf`](#vscp.mdf)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.mdf | `object` | MDF as xml jquery object |
| options.id | `number` | Abstract value id |
| options.value | `string` | Abstract value |
| options.onSuccess | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_mdf_dot_writeAbstractBits"></a>

#### mdf.writeAbstractBits(options)
Change some bits in a abstract value.

**Kind**: static method of [`mdf`](#vscp.mdf)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.mdf | `object` | MDF as xml jquery object |
| options.id | `number` | Abstract value id |
| options.pos | `number` | Bit position |
| options.width | `number` | Bit width |
| options.value | `string` | Abstract value |
| options.onSuccess | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_mdf_dot_getRegisters"></a>

#### mdf.getRegisters(options) ⇒ [`Array.&lt;Register&gt;`](#vscp.mdf.Register)
This function retrieves all register informations from a mdf.

**Kind**: static method of [`mdf`](#vscp.mdf)  
**Returns**: [`Array.&lt;Register&gt;`](#vscp.mdf.Register) - Array of MDF registers  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.mdf | `object` | MDF as jquery object |

<a id="vscp_dot_mdf_dot_getAbstractions"></a>

#### mdf.getAbstractions(options) ⇒ [`Array.&lt;Abstraction&gt;`](#vscp.mdf.Abstraction)
This function retrieves all abstraction informations from a mdf.

**Kind**: static method of [`mdf`](#vscp.mdf)  
**Returns**: [`Array.&lt;Abstraction&gt;`](#vscp.mdf.Abstraction) - Array of MDF abstractions  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.mdf | `object` | MDF as jquery object |

<a id="vscp_dot_measurement"></a>

### vscp.measurement : `object`
VSCP measurement stuff

**Kind**: static namespace of [`vscp`](#vscp)  

* [.measurement](#vscp_dot_measurement) : `object`
    * [.Decoder](#vscp_dot_measurement_dot_Decoder)
        * [new vscp.measurement.Decoder(options)](#new_vscp_dot_measurement_dot_Decoder_new)
        * [.client](#vscp_dot_measurement_dot_Decoder_plus_client) : [`Client`](#vscp.ws.Client)
        * [.onValue](#vscp_dot_measurement_dot_Decoder_plus_onValue) : `function`
        * [.filter](#vscp_dot_measurement_dot_Decoder_plus_filter) : `object`
    * [.constants](#vscp_dot_measurement_dot_constants) : `object`
        * [.units](#vscp_dot_measurement_dot_constants_dot_units) : `Array.&lt;string&gt;`
    * [.timeout](#vscp_dot_measurement_dot_timeout) : `number`
    * [.toFixed(value, precision)](#vscp_dot_measurement_dot_toFixed) ⇒ `number`
    * [.varInteger2Float(data)](#vscp_dot_measurement_dot_varInteger2Float) ⇒ `number`
    * [.getDataCoding(data)](#vscp_dot_measurement_dot_getDataCoding) ⇒ `number`
    * [.getUnitFromDataCoding(data)](#vscp_dot_measurement_dot_getUnitFromDataCoding) ⇒ `number`
    * [.getSensorIndexFromDataCoding(data)](#vscp_dot_measurement_dot_getSensorIndexFromDataCoding) ⇒ `number`
    * [.decodeClass10(data)](#vscp_dot_measurement_dot_decodeClass10) ⇒ `number`
    * [.decodeClass60Number(data)](#vscp_dot_measurement_dot_decodeClass60Number) ⇒ `number`
    * [.decodeClass65Number(data)](#vscp_dot_measurement_dot_decodeClass65Number) ⇒ `number`
    * [.convertFahrenheitToKelvin(value)](#vscp_dot_measurement_dot_convertFahrenheitToKelvin) ⇒ `number`
    * [.convertFahrenheitToCelsius(value)](#vscp_dot_measurement_dot_convertFahrenheitToCelsius) ⇒ `number`
    * [.convertCelsiusToFahrenheit(value)](#vscp_dot_measurement_dot_convertCelsiusToFahrenheit) ⇒ `number`
    * [.convertKelvinToCelsius(value)](#vscp_dot_measurement_dot_convertKelvinToCelsius) ⇒ `number`
    * [.convertCelsiusToKelvin(value)](#vscp_dot_measurement_dot_convertCelsiusToKelvin) ⇒ `number`
    * [.convertKelvinToFahrenheit(value)](#vscp_dot_measurement_dot_convertKelvinToFahrenheit) ⇒ `number`
    * [.convertMeterToFeet(value)](#vscp_dot_measurement_dot_convertMeterToFeet) ⇒ `number`
    * [.convertFeetToMeter(value)](#vscp_dot_measurement_dot_convertFeetToMeter) ⇒ `number`
    * [.convertMeterToInch(value)](#vscp_dot_measurement_dot_convertMeterToInch) ⇒ `number`
    * [.convertInchToMeter(value)](#vscp_dot_measurement_dot_convertInchToMeter) ⇒ `number`

<a id="vscp_dot_measurement_dot_Decoder"></a>

#### measurement.Decoder
**Kind**: static class of [`measurement`](#vscp.measurement)  

* [.Decoder](#vscp_dot_measurement_dot_Decoder)
    * [new vscp.measurement.Decoder(options)](#new_vscp_dot_measurement_dot_Decoder_new)
    * [.client](#vscp_dot_measurement_dot_Decoder_plus_client) : [`Client`](#vscp.ws.Client)
    * [.onValue](#vscp_dot_measurement_dot_Decoder_plus_onValue) : `function`
    * [.filter](#vscp_dot_measurement_dot_Decoder_plus_filter) : `object`

<a id="new_vscp_dot_measurement_dot_Decoder_new"></a>

##### new vscp.measurement.Decoder(options)
Measurement decoder


| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.onValue | `function` | Function which will be called for every received measurement value. |
| options.filter | `object` | Filter |
| options.filter.vscpGuid | `string` | Node GUID string |
| options.filter.vscpClass | `number` | VSCP class |
| options.filter.vscpType | `number` | VSCP type |
| options.filter.sensorIndex | `number` | Sensor index |
| options.filter.zone | `number` | Zone |
| options.filter.subZone | `number` | Sub-zone |

<a id="vscp_dot_measurement_dot_Decoder_plus_client"></a>

##### decoder.client : [`Client`](#vscp.ws.Client)
VSCP websocket client

**Kind**: instance property of [`Decoder`](#vscp.measurement.Decoder)  
<a id="vscp_dot_measurement_dot_Decoder_plus_onValue"></a>

##### decoder.onValue : `function`
Callback which will be called for every received value.

**Kind**: instance property of [`Decoder`](#vscp.measurement.Decoder)  
<a id="vscp_dot_measurement_dot_Decoder_plus_filter"></a>

##### decoder.filter : `object`
Filter

**Kind**: instance property of [`Decoder`](#vscp.measurement.Decoder)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| vscpGuid | `string` | Node GUID string |
| vscpClass | `number` | VSCP class |
| vscpType | `number` | VSCP type |
| datetime | `date` | datetime |
| sensorIndex | `number` | Sensor index |
| zone | `number` | Zone |
| subZone | `number` | Sub-zone |

<a id="vscp_dot_measurement_dot_constants"></a>

#### measurement.constants : `object`
Measurement specific constants

**Kind**: static namespace of [`measurement`](#vscp.measurement)  
<a id="vscp_dot_measurement_dot_constants_dot_units"></a>

##### constants.units : `Array.&lt;string&gt;`
VSCP units

**Kind**: static property of [`constants`](#vscp.measurement.constants)  
<a id="vscp_dot_measurement_dot_timeout"></a>

#### measurement.timeout : `number`
VSCP response timeout in ms

**Kind**: static constant of [`measurement`](#vscp.measurement)  
<a id="vscp_dot_measurement_dot_toFixed"></a>

#### measurement.toFixed(value, precision) ⇒ `number`
Round value to a fixed precision.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Rounded value  

| Param | Type | Description |
| --- | --- | --- |
| value | `number` | Value |
| precision | `number` | Precision |

<a id="vscp_dot_measurement_dot_varInteger2Float"></a>

#### measurement.varInteger2Float(data) ⇒ `number`
Convert a integer value to float

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Float value  

| Param | Type | Description |
| --- | --- | --- |
| data | `Array.&lt;number&gt;` | Byte array |

<a id="vscp_dot_measurement_dot_getDataCoding"></a>

#### measurement.getDataCoding(data) ⇒ `number`
Get data coding.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Coding  

| Param | Type | Description |
| --- | --- | --- |
| data | `number` | Data |

<a id="vscp_dot_measurement_dot_getUnitFromDataCoding"></a>

#### measurement.getUnitFromDataCoding(data) ⇒ `number`
Get unit from data coding.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Unit  

| Param | Type | Description |
| --- | --- | --- |
| data | `number` | Data coding |

<a id="vscp_dot_measurement_dot_getSensorIndexFromDataCoding"></a>

#### measurement.getSensorIndexFromDataCoding(data) ⇒ `number`
Get sensor index from data coding.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Sensor index  

| Param | Type | Description |
| --- | --- | --- |
| data | `number` | Data coding |

<a id="vscp_dot_measurement_dot_decodeClass10"></a>

#### measurement.decodeClass10(data) ⇒ `number`
Decode a class 10 measurement.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Value as float  

| Param | Type | Description |
| --- | --- | --- |
| data | `Array.&lt;number&gt;` | Data (event data array where first data byte is the data coding) |

<a id="vscp_dot_measurement_dot_decodeClass60Number"></a>

#### measurement.decodeClass60Number(data) ⇒ `number`
Decode a class 60 measurement.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Value as float  

| Param | Type | Description |
| --- | --- | --- |
| data | `number` | Data |

<a id="vscp_dot_measurement_dot_decodeClass65Number"></a>

#### measurement.decodeClass65Number(data) ⇒ `number`
Decode a class 65 measurement.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Value as float  

| Param | Type | Description |
| --- | --- | --- |
| data | `number` | Data |

<a id="vscp_dot_measurement_dot_convertFahrenheitToKelvin"></a>

#### measurement.convertFahrenheitToKelvin(value) ⇒ `number`
Convert from unit fahrenheit to unit kelvin.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Converted value  

| Param | Type | Description |
| --- | --- | --- |
| value | `string` \| `number` | Value |

<a id="vscp_dot_measurement_dot_convertFahrenheitToCelsius"></a>

#### measurement.convertFahrenheitToCelsius(value) ⇒ `number`
Convert from unit fahrenheit to unit celsius.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Converted value  

| Param | Type | Description |
| --- | --- | --- |
| value | `string` \| `number` | Value |

<a id="vscp_dot_measurement_dot_convertCelsiusToFahrenheit"></a>

#### measurement.convertCelsiusToFahrenheit(value) ⇒ `number`
Convert from unit celsius to unit fahrenheit.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Converted value  

| Param | Type | Description |
| --- | --- | --- |
| value | `string` \| `number` | Value |

<a id="vscp_dot_measurement_dot_convertKelvinToCelsius"></a>

#### measurement.convertKelvinToCelsius(value) ⇒ `number`
Convert from unit kelvin to unit celsius.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Converted value  

| Param | Type | Description |
| --- | --- | --- |
| value | `string` \| `number` | Value |

<a id="vscp_dot_measurement_dot_convertCelsiusToKelvin"></a>

#### measurement.convertCelsiusToKelvin(value) ⇒ `number`
Convert from unit celsius to unit kelvin.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Converted value  

| Param | Type | Description |
| --- | --- | --- |
| value | `string` \| `number` | Value |

<a id="vscp_dot_measurement_dot_convertKelvinToFahrenheit"></a>

#### measurement.convertKelvinToFahrenheit(value) ⇒ `number`
Convert from unit kelvin to unit fahrenheit.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Converted value  

| Param | Type | Description |
| --- | --- | --- |
| value | `string` \| `number` | Value |

<a id="vscp_dot_measurement_dot_convertMeterToFeet"></a>

#### measurement.convertMeterToFeet(value) ⇒ `number`
Convert from unit meter to unit feet.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Converted value  

| Param | Type | Description |
| --- | --- | --- |
| value | `string` \| `number` | Value |

<a id="vscp_dot_measurement_dot_convertFeetToMeter"></a>

#### measurement.convertFeetToMeter(value) ⇒ `number`
Convert from unit feet to unit meter.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Converted value  

| Param | Type | Description |
| --- | --- | --- |
| value | `string` \| `number` | Value |

<a id="vscp_dot_measurement_dot_convertMeterToInch"></a>

#### measurement.convertMeterToInch(value) ⇒ `number`
Convert from unit meter to unit inch.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Converted value  

| Param | Type | Description |
| --- | --- | --- |
| value | `string` \| `number` | Value |

<a id="vscp_dot_measurement_dot_convertInchToMeter"></a>

#### measurement.convertInchToMeter(value) ⇒ `number`
Convert from unit inch to unit meter.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Converted value  

| Param | Type | Description |
| --- | --- | --- |
| value | `string` \| `number` | Value |

<a id="vscp_dot_register"></a>

### vscp.register : `object`
VSCP register access functions

**Kind**: static namespace of [`vscp`](#vscp)  

* [.register](#vscp_dot_register) : `object`
    * [.constants](#vscp_dot_register_dot_constants) : `enum`
    * [.timeout](#vscp_dot_register_dot_timeout) : `number`
    * [.read(options)](#vscp_dot_register_dot_read)
    * [.write(options)](#vscp_dot_register_dot_write)
    * [.writeBits(options)](#vscp_dot_register_dot_writeBits)
    * [.readAlarmStatus(options)](#vscp_dot_register_dot_readAlarmStatus)
    * [.readVscpVersion(options)](#vscp_dot_register_dot_readVscpVersion)
    * [.readNodeControlFlags(options)](#vscp_dot_register_dot_readNodeControlFlags)
    * [.readUserId(options)](#vscp_dot_register_dot_readUserId)
    * [.readManufacturerDevId(options)](#vscp_dot_register_dot_readManufacturerDevId)
    * [.readManufacturerSubDevId(options)](#vscp_dot_register_dot_readManufacturerSubDevId)
    * [.readNicknameId(options)](#vscp_dot_register_dot_readNicknameId)
    * [.readSelectedPage(options)](#vscp_dot_register_dot_readSelectedPage)
    * [.readFirmwareVersion(options)](#vscp_dot_register_dot_readFirmwareVersion)
    * [.readBootloaderAlgorithm(options)](#vscp_dot_register_dot_readBootloaderAlgorithm)
    * [.readUsedPages(options)](#vscp_dot_register_dot_readUsedPages)
    * [.readStdDevFamCode(options)](#vscp_dot_register_dot_readStdDevFamCode)
    * [.readStdDevType(options)](#vscp_dot_register_dot_readStdDevType)
    * [.readGUID(options)](#vscp_dot_register_dot_readGUID)
    * [.readMdfUrl(options)](#vscp_dot_register_dot_readMdfUrl)

<a id="vscp_dot_register_dot_constants"></a>

#### register.constants : `enum`
VSCP registers

**Kind**: static enum of [`register`](#vscp.register)  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| ALARM_STATUS | `number` | <code>128</code> | 
| VSCP_VERSION_MAJOR | `number` | <code>129</code> | 
| VSCP_VERSION_MINOR | `number` | <code>130</code> | 
| NODE_CONTROL_FLAGS | `number` | <code>131</code> | 
| USER_ID_0 | `number` | <code>132</code> | 
| USER_ID_1 | `number` | <code>133</code> | 
| USER_ID_2 | `number` | <code>134</code> | 
| USER_ID_3 | `number` | <code>135</code> | 
| USER_ID_4 | `number` | <code>136</code> | 
| MANUFACTURER_DEV_ID_0 | `number` | <code>137</code> | 
| MANUFACTURER_DEV_ID_1 | `number` | <code>138</code> | 
| MANUFACTURER_DEV_ID_2 | `number` | <code>139</code> | 
| MANUFACTURER_DEV_ID_3 | `number` | <code>140</code> | 
| MANUFACTURER_SUB_DEV_ID_0 | `number` | <code>141</code> | 
| MANUFACTURER_SUB_DEV_ID_1 | `number` | <code>142</code> | 
| MANUFACTURER_SUB_DEV_ID_2 | `number` | <code>143</code> | 
| MANUFACTURER_SUB_DEV_ID_3 | `number` | <code>144</code> | 
| NICKNAME_ID | `number` | <code>145</code> | 
| PAGE_SELECT_MSB | `number` | <code>146</code> | 
| PAGE_SELECT_LSB | `number` | <code>147</code> | 
| FIRMWARE_VERSION_MAJOR | `number` | <code>148</code> | 
| FIRMWARE_VERSION_MINOR | `number` | <code>149</code> | 
| FIRMWARE_VERSION_SUB_MINOR | `number` | <code>150</code> | 
| BOOT_LOADER_ALGORITHM | `number` | <code>151</code> | 
| BUFFER_SIZE | `number` | <code>152</code> | 
| PAGES_USED | `number` | <code>153</code> | 
| STD_DEV_FAMILY_CODE_3 | `number` | <code>154</code> | 
| STD_DEV_FAMILY_CODE_2 | `number` | <code>155</code> | 
| STD_DEV_FAMILY_CODE_1 | `number` | <code>156</code> | 
| STD_DEV_FAMILY_CODE_0 | `number` | <code>157</code> | 
| STD_DEV_TYPE_3 | `number` | <code>158</code> | 
| STD_DEV_TYPE_2 | `number` | <code>159</code> | 
| STD_DEV_TYPE_1 | `number` | <code>160</code> | 
| STD_DEV_TYPE_0 | `number` | <code>161</code> | 
| RESTORE_STD_CFG | `number` | <code>162</code> | 
| GUID | `number` | <code>208</code> | 
| MDF_URL | `number` | <code>224</code> | 

<a id="vscp_dot_register_dot_timeout"></a>

#### register.timeout : `number`
VSCP response timeout in ms

**Kind**: static constant of [`register`](#vscp.register)  
<a id="vscp_dot_register_dot_read"></a>

#### register.read(options)
Read one or more register values.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| [options.page] | `number` | Register page |
| options.offset | `number` | Register page offset |
| options.count | `number` | Number of registers to read |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_write"></a>

#### register.write(options)
Write one or more register values.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.page | `number` | Register page |
| options.offset | `number` | Register page offset |
| options.data | `Array.&lt;number&gt;` | Data array |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_writeBits"></a>

#### register.writeBits(options)
Change some bits of a register.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP connection |
| options.nodeId | `number` | Node id |
| options.page | `number` | Register page |
| options.offset | `number` | Register page offset |
| options.pos | `number` | Bit position |
| options.width | `number` | Bit width |
| options.data | `Array.&lt;number&gt;` | Data array |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_readAlarmStatus"></a>

#### register.readAlarmStatus(options)
Read the alarm status from a node.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_readVscpVersion"></a>

#### register.readVscpVersion(options)
Read the supported VSCP version from a node.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_readNodeControlFlags"></a>

#### register.readNodeControlFlags(options)
Read the node control flags from a node.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_readUserId"></a>

#### register.readUserId(options)
Read the user id from a node.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_readManufacturerDevId"></a>

#### register.readManufacturerDevId(options)
Read the manufacturer device id from a node.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_readManufacturerSubDevId"></a>

#### register.readManufacturerSubDevId(options)
Read the manufacturer sub device id from a node.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_readNicknameId"></a>

#### register.readNicknameId(options)
Read the nickname id from a node.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_readSelectedPage"></a>

#### register.readSelectedPage(options)
Read the current selected page from a node.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_readFirmwareVersion"></a>

#### register.readFirmwareVersion(options)
Read the firmware version from a node.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_readBootloaderAlgorithm"></a>

#### register.readBootloaderAlgorithm(options)
Read the bootloader algorithm from a node.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_readUsedPages"></a>

#### register.readUsedPages(options)
Read the number of used pages from a node.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_readStdDevFamCode"></a>

#### register.readStdDevFamCode(options)
Read the standard device family code from a node.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_readStdDevType"></a>

#### register.readStdDevType(options)
Read the standard device type from a node.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_readGUID"></a>

#### register.readGUID(options)
Read the GUID from a node.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_readMdfUrl"></a>

#### register.readMdfUrl(options)
Read the MDF URL from a node.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_rest"></a>

### vscp.rest : `object`
VSCP REST api functions

**Kind**: static namespace of [`vscp`](#vscp)  

* [.rest](#vscp_dot_rest) : `object`
    * [.Client](#vscp_dot_rest_dot_Client)
        * [new vscp.rest.Client(config)](#new_vscp_dot_rest_dot_Client_new)
        * [.baseUrl](#vscp_dot_rest_dot_Client_plus_baseUrl) : `string`
        * [.pathPrefix](#vscp_dot_rest_dot_Client_plus_pathPrefix) : `string`
        * [.apiVersion](#vscp_dot_rest_dot_Client_plus_apiVersion) : `string`
        * [.sessionKey](#vscp_dot_rest_dot_Client_plus_sessionKey) : `string`
        * [.openSession(options)](#vscp_dot_rest_dot_Client_plus_openSession) ⇒ `object`
        * [.closeSession([options])](#vscp_dot_rest_dot_Client_plus_closeSession) ⇒ `object`
        * [.getStatus([options])](#vscp_dot_rest_dot_Client_plus_getStatus) ⇒ `object`
        * [.sendEvent(options)](#vscp_dot_rest_dot_Client_plus_sendEvent) ⇒ `object`
        * [.readEvent([options])](#vscp_dot_rest_dot_Client_plus_readEvent) ⇒ `object`
        * [.setFilter(options)](#vscp_dot_rest_dot_Client_plus_setFilter) ⇒ `object`
        * [.clearQueue([options])](#vscp_dot_rest_dot_Client_plus_clearQueue) ⇒ `object`
        * [.createVar(options)](#vscp_dot_rest_dot_Client_plus_createVar) ⇒ `object`
        * [.readVar(options)](#vscp_dot_rest_dot_Client_plus_readVar) ⇒ `object`
        * [.writeVar(options)](#vscp_dot_rest_dot_Client_plus_writeVar) ⇒ `object`
        * [.removeVar(options)](#vscp_dot_rest_dot_Client_plus_removeVar) ⇒ `object`
        * [.listVar(options)](#vscp_dot_rest_dot_Client_plus_listVar) ⇒ `object`

<a id="vscp_dot_rest_dot_Client"></a>

#### rest.Client
**Kind**: static class of [`rest`](#vscp.rest)  

* [.Client](#vscp_dot_rest_dot_Client)
    * [new vscp.rest.Client(config)](#new_vscp_dot_rest_dot_Client_new)
    * [.baseUrl](#vscp_dot_rest_dot_Client_plus_baseUrl) : `string`
    * [.pathPrefix](#vscp_dot_rest_dot_Client_plus_pathPrefix) : `string`
    * [.apiVersion](#vscp_dot_rest_dot_Client_plus_apiVersion) : `string`
    * [.sessionKey](#vscp_dot_rest_dot_Client_plus_sessionKey) : `string`
    * [.openSession(options)](#vscp_dot_rest_dot_Client_plus_openSession) ⇒ `object`
    * [.closeSession([options])](#vscp_dot_rest_dot_Client_plus_closeSession) ⇒ `object`
    * [.getStatus([options])](#vscp_dot_rest_dot_Client_plus_getStatus) ⇒ `object`
    * [.sendEvent(options)](#vscp_dot_rest_dot_Client_plus_sendEvent) ⇒ `object`
    * [.readEvent([options])](#vscp_dot_rest_dot_Client_plus_readEvent) ⇒ `object`
    * [.setFilter(options)](#vscp_dot_rest_dot_Client_plus_setFilter) ⇒ `object`
    * [.clearQueue([options])](#vscp_dot_rest_dot_Client_plus_clearQueue) ⇒ `object`
    * [.createVar(options)](#vscp_dot_rest_dot_Client_plus_createVar) ⇒ `object`
    * [.readVar(options)](#vscp_dot_rest_dot_Client_plus_readVar) ⇒ `object`
    * [.writeVar(options)](#vscp_dot_rest_dot_Client_plus_writeVar) ⇒ `object`
    * [.removeVar(options)](#vscp_dot_rest_dot_Client_plus_removeVar) ⇒ `object`
    * [.listVar(options)](#vscp_dot_rest_dot_Client_plus_listVar) ⇒ `object`

<a id="new_vscp_dot_rest_dot_Client_new"></a>

##### new vscp.rest.Client(config)
The VSCP client class handles the basic REST api of the VSCP daemon.
The function interface uses jquery ajax call in the background and will
return a Promise.


| Param | Type | Description |
| --- | --- | --- |
| config | `string` | Configuration |
| [config.baseUrl] | `string` | VSCP daemon URL (protocol + hostname + port) |
| [options.pathPrefix] | `string` | Path prefix (default: '/vscp'), which comes right after the base url. |
| [options.apiVersion] | `string` | API version (for future use) |

<a id="vscp_dot_rest_dot_Client_plus_baseUrl"></a>

##### client.baseUrl : `string`
Base URL

**Kind**: instance property of [`Client`](#vscp.rest.Client)  
<a id="vscp_dot_rest_dot_Client_plus_pathPrefix"></a>

##### client.pathPrefix : `string`
Path prefix

**Kind**: instance property of [`Client`](#vscp.rest.Client)  
<a id="vscp_dot_rest_dot_Client_plus_apiVersion"></a>

##### client.apiVersion : `string`
REST API version (future use)

**Kind**: instance property of [`Client`](#vscp.rest.Client)  
<a id="vscp_dot_rest_dot_Client_plus_sessionKey"></a>

##### client.sessionKey : `string`
Session key

**Kind**: instance property of [`Client`](#vscp.rest.Client)  
<a id="vscp_dot_rest_dot_Client_plus_openSession"></a>

##### client.openSession(options) ⇒ `object`
Open a session.

**Kind**: instance method of [`Client`](#vscp.rest.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.user | `string` | User name |
| options.password | `string` | Password |
| [options.onSuccess] | `function` | Callback, which is called for successful request. |
| [options.onError] | `function` | Callback, which is called for failed request. |

<a id="vscp_dot_rest_dot_Client_plus_closeSession"></a>

##### client.closeSession([options]) ⇒ `object`
Close a session.

**Kind**: instance method of [`Client`](#vscp.rest.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| [options] | `object` | Options |
| [options.onSuccess] | `function` | Callback, which is called for successful request. |
| [options.onError] | `function` | Callback, which is called for failed request. |

<a id="vscp_dot_rest_dot_Client_plus_getStatus"></a>

##### client.getStatus([options]) ⇒ `object`
Get status and how many events are in the queue.

**Kind**: instance method of [`Client`](#vscp.rest.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| [options] | `object` | Options |
| [options.onSuccess] | `function` | Callback, which is called for successful request. |
| [options.onError] | `function` | Callback, which is called for failed request. |

<a id="vscp_dot_rest_dot_Client_plus_sendEvent"></a>

##### client.sendEvent(options) ⇒ `object`
Send a VSCP event.

**Kind**: instance method of [`Client`](#vscp.rest.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.event | `object` | VSCP event |
| [options.onSuccess] | `function` | Callback, which is called for successful request. |
| [options.onError] | `function` | Callback, which is called for failed request. |

<a id="vscp_dot_rest_dot_Client_plus_readEvent"></a>

##### client.readEvent([options]) ⇒ `object`
Read one or more VSCP events.

**Kind**: instance method of [`Client`](#vscp.rest.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| [options] | `object` | Options |
| [options.count] | `object` | Number of events to read |
| [options.onSuccess] | `function` | Callback, which is called for successful request. |
| [options.onError] | `function` | Callback, which is called for failed request. |

<a id="vscp_dot_rest_dot_Client_plus_setFilter"></a>

##### client.setFilter(options) ⇒ `object`
Set filter.

**Kind**: instance method of [`Client`](#vscp.rest.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| [options.filterPriority] | `number` | Priority filter |
| [options.filterClass] | `number` | Class filter |
| [options.filterType] | `number` | Type filter |
| [options.filterGuid] | `Array.&lt;number&gt;` \| `string` | GUID filter |
| [options.maskPriority] | `number` | Priority mask |
| [options.maskClass] | `number` | Class mask |
| [options.maskType] | `number` | Type mask |
| [options.maskGuid] | `Array.&lt;number&gt;` \| `string` | GUID mask |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_rest_dot_Client_plus_clearQueue"></a>

##### client.clearQueue([options]) ⇒ `object`
Clear the VSCP event queue on the server side.

**Kind**: instance method of [`Client`](#vscp.rest.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| [options] | `object` | Options |
| [options.onSuccess] | `function` | Callback, which is called for successful request. |
| [options.onError] | `function` | Callback, which is called for failed request. |

<a id="vscp_dot_rest_dot_Client_plus_createVar"></a>

##### client.createVar(options) ⇒ `object`
Create a a VSCP remote variable.

**Kind**: instance method of [`Client`](#vscp.rest.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.name | `string` | Variable name |
| [options.type] | `number` | Variable type (default: string) |
| [options.accessrights] | `number` | Variable value (default: 744) |
| options.persistency | `boolean` | Variable is persistent (true) or not (false) |
| options.value | `string` | Variable Value |
| [options.note] | `string` | Variable note (optional) |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_rest_dot_Client_plus_readVar"></a>

##### client.readVar(options) ⇒ `object`
Read a value from a VSCP server variable.

**Kind**: instance method of [`Client`](#vscp.rest.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.name | `string` | Variable name |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_rest_dot_Client_plus_writeVar"></a>

##### client.writeVar(options) ⇒ `object`
Write a value to a VSCP server variable.

**Kind**: instance method of [`Client`](#vscp.rest.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.name | `string` | Variable name |
| options.value | `string` | Variable value |
| options.type | `number` | Variable type |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_rest_dot_Client_plus_removeVar"></a>

##### client.removeVar(options) ⇒ `object`
Remove a VSCP server variable.

**Kind**: instance method of [`Client`](#vscp.rest.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.name | `string` | Variable name |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_rest_dot_Client_plus_listVar"></a>

##### client.listVar(options) ⇒ `object`
List all VSCP server variables.

**Kind**: instance method of [`Client`](#vscp.rest.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.listLong | `boolean` | When false the variable list dos not include value and note. If set to true value and note is included. |
| [options.regex] | `string` | Regular expression to filter variables |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_service"></a>

### vscp.service : `object`
VSCP service supporting functions

**Kind**: static namespace of [`vscp`](#vscp)  

* [.service](#vscp_dot_service) : `object`
    * [.Container](#vscp_dot_service_dot_Container)
        * [new vscp.service.Container(options)](#new_vscp_dot_service_dot_Container_new)
        * [.client](#vscp_dot_service_dot_Container_plus_client) : [`Client`](#vscp.ws.Client)
        * [.name](#vscp_dot_service_dot_Container_plus_name) : `string`
        * [.data](#vscp_dot_service_dot_Container_plus_data) : `Array.&lt;object&gt;`
        * [.separator](#vscp_dot_service_dot_Container_plus_separator) : `Array.&lt;object&gt;`
        * [.create(options)](#vscp_dot_service_dot_Container_plus_create)
        * [.write(options)](#vscp_dot_service_dot_Container_plus_write)
        * [.read(options)](#vscp_dot_service_dot_Container_plus_read)
    * [.timeout](#vscp_dot_service_dot_timeout) : `number`
    * [.whoIsThere(options)](#vscp_dot_service_dot_whoIsThere)
    * [.scan(options)](#vscp_dot_service_dot_scan)

<a id="vscp_dot_service_dot_Container"></a>

#### service.Container
**Kind**: static class of [`service`](#vscp.service)  

* [.Container](#vscp_dot_service_dot_Container)
    * [new vscp.service.Container(options)](#new_vscp_dot_service_dot_Container_new)
    * [.client](#vscp_dot_service_dot_Container_plus_client) : [`Client`](#vscp.ws.Client)
    * [.name](#vscp_dot_service_dot_Container_plus_name) : `string`
    * [.data](#vscp_dot_service_dot_Container_plus_data) : `Array.&lt;object&gt;`
    * [.separator](#vscp_dot_service_dot_Container_plus_separator) : `Array.&lt;object&gt;`
    * [.create(options)](#vscp_dot_service_dot_Container_plus_create)
    * [.write(options)](#vscp_dot_service_dot_Container_plus_write)
    * [.read(options)](#vscp_dot_service_dot_Container_plus_read)

<a id="new_vscp_dot_service_dot_Container_new"></a>

##### new vscp.service.Container(options)
The container is used to store javascript objects in a daemon variable as string.
It supports one or more objects in a single variable!


| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.name | `string` | Container name |

<a id="vscp_dot_service_dot_Container_plus_client"></a>

##### container.client : [`Client`](#vscp.ws.Client)
VSCP websocket client

**Kind**: instance property of [`Container`](#vscp.service.Container)  
<a id="vscp_dot_service_dot_Container_plus_name"></a>

##### container.name : `string`
Complete container name (prefix + user defined name)

**Kind**: instance property of [`Container`](#vscp.service.Container)  
<a id="vscp_dot_service_dot_Container_plus_data"></a>

##### container.data : `Array.&lt;object&gt;`
Data container itself

**Kind**: instance property of [`Container`](#vscp.service.Container)  
<a id="vscp_dot_service_dot_Container_plus_separator"></a>

##### container.separator : `Array.&lt;object&gt;`
Data element separator

**Kind**: instance property of [`Container`](#vscp.service.Container)  
<a id="vscp_dot_service_dot_Container_plus_create"></a>

##### container.create(options)
Create a container at the daemon.

**Kind**: instance method of [`Container`](#vscp.service.Container)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_service_dot_Container_plus_write"></a>

##### container.write(options)
Write the container to a daemon variable.
The container must exist at the daemon!

**Kind**: instance method of [`Container`](#vscp.service.Container)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_service_dot_Container_plus_read"></a>

##### container.read(options)
Read the container from the daemon variable.

**Kind**: instance method of [`Container`](#vscp.service.Container)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_service_dot_timeout"></a>

#### service.timeout : `number`
VSCP response timeout in ms

**Kind**: static constant of [`service`](#vscp.service)  
<a id="vscp_dot_service_dot_whoIsThere"></a>

#### service.whoIsThere(options)
Request a response from all nodes on the communication bus and returns
their GUID and MDF URL.

**Kind**: static method of [`service`](#vscp.service)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_service_dot_scan"></a>

#### service.scan(options)
Scan for nodes.

**Kind**: static method of [`service`](#vscp.service)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.begin | `number` | Node id where to start scanning |
| options.end | `number` | Node id where to stop scanning |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_widget"></a>

### vscp.widget : `object`
VSCP widgets

**Kind**: static namespace of [`vscp`](#vscp)  

* [.widget](#vscp_dot_widget) : `object`
    * [.Button](#vscp_dot_widget_dot_Button)
        * [new vscp.widget.Button(options)](#new_vscp_dot_widget_dot_Button_new)
        * [.draw()](#vscp_dot_widget_dot_Button_plus_draw)
        * [.setEnabled(value)](#vscp_dot_widget_dot_Button_plus_setEnabled)
    * [.Thermometer](#vscp_dot_widget_dot_Thermometer)
        * [new vscp.widget.Thermometer(options)](#new_vscp_dot_widget_dot_Thermometer_new)
        * [.draw()](#vscp_dot_widget_dot_Thermometer_plus_draw)
        * [.setEnabled(value)](#vscp_dot_widget_dot_Thermometer_plus_setEnabled)
    * [.generateUUID()](#vscp_dot_widget_dot_generateUUID) ⇒ `string`
    * [.Image(options)](#vscp_dot_widget_dot_Image)

<a id="vscp_dot_widget_dot_Button"></a>

#### widget.Button
**Kind**: static class of [`widget`](#vscp.widget)  

* [.Button](#vscp_dot_widget_dot_Button)
    * [new vscp.widget.Button(options)](#new_vscp_dot_widget_dot_Button_new)
    * [.draw()](#vscp_dot_widget_dot_Button_plus_draw)
    * [.setEnabled(value)](#vscp_dot_widget_dot_Button_plus_setEnabled)

<a id="new_vscp_dot_widget_dot_Button_new"></a>

##### new vscp.widget.Button(options)
A button widget.


| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.canvasName | `string` | Name of the canvas, normally the canvas id |
| options.offImageUrl | `number` | URL to button which is in off state |
| options.onImageUrl | `number` | URL to button which is in on state |
| options.x | `number` | x position of the image in the canvas |
| options.y | `number` | y position of the image in the canvas |
| [options.scale] | `number` | Scale factor applied to the button image (default: 1.0) |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client, used for event communication |
| [options.bindToRemoteState] | `boolean` | Bind the button state to the remote state or not (default: false) |
| [options.receiveZone] | `number` | Zone where state events will come from (default: 255) |
| [options.receiveSubZone] | `number` | Sub-zone where state events will come from (default: 255) |
| [options.transmitZone] | `number` | Zone where button event will be sent to (default: 255) |
| [options.transmitSubZone] | `number` | Sub-zone where button event will be sent to (default: 255) |
| [options.index] | `number` | Button index (instance number)  (default: 0) |
| [options.enable] | `boolean` | Enable or disable button  (default: false) |

<a id="vscp_dot_widget_dot_Button_plus_draw"></a>

##### button.draw()
Draw the button depended on its current state.

**Kind**: instance method of [`Button`](#vscp.widget.Button)  
<a id="vscp_dot_widget_dot_Button_plus_setEnabled"></a>

##### button.setEnabled(value)
Enable or disable the button.

**Kind**: instance method of [`Button`](#vscp.widget.Button)  

| Param | Type | Description |
| --- | --- | --- |
| value | `boolean` | Enable (true) or disable (false) it |

<a id="vscp_dot_widget_dot_Thermometer"></a>

#### widget.Thermometer
**Kind**: static class of [`widget`](#vscp.widget)  

* [.Thermometer](#vscp_dot_widget_dot_Thermometer)
    * [new vscp.widget.Thermometer(options)](#new_vscp_dot_widget_dot_Thermometer_new)
    * [.draw()](#vscp_dot_widget_dot_Thermometer_plus_draw)
    * [.setEnabled(value)](#vscp_dot_widget_dot_Thermometer_plus_setEnabled)

<a id="new_vscp_dot_widget_dot_Thermometer_new"></a>

##### new vscp.widget.Thermometer(options)
A thermometer widget.


| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.canvasName | `string` | Name of the canvas, normally the canvas id |
| options.imageUrl | `number` | URL to thermometer image |
| options.x | `number` | x position of the image in the canvas |
| options.y | `number` | y position of the image in the canvas |
| options.data | `object` | Thermometer data |
| options.data.maxT | `number` | Max. temperature in degree celsius |
| options.data.minT | `number` | Min. temperature in degree celsius |
| options.data.x | `number` | x position of the lower left begin of the thermometer column in image |
| options.data.y | `number` | y position of the lower left begin of the thermometer column in image |
| options.data.height | `number` | Thermometer column height (only between numbers) |
| options.data.width | `number` | Thermometer column width |
| options.data.yOffset | `number` | Thermometer column height offset from the begin to the first number |
| options.data.color | `string` | HTML color, e.g. '#8A0000' |
| [options.scale] | `number` | Scale factor applied to the thermometer image (default: 1.0) |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client, used for event communication |
| [options.receiveZone] | `number` | Zone where state events will come from (default: 255) |
| [options.receiveSubZone] | `number` | Sub-zone where state events will come from (default: 255) |
| [options.sensorIndex] | `number` | Sensor index (default: 0) |
| [options.vscpClass] | `number` | VSCP measurement class (default: CLASS1.MEASUREMENT) |
| [options.vscpType] | `number` | VSCP measurement type (default: CLASS1.MEASUREMENT.TERMPERATURE) |
| [options.enable] | `boolean` | Enable or disable thermometer (default: true) |

<a id="vscp_dot_widget_dot_Thermometer_plus_draw"></a>

##### thermometer.draw()
Draw the thermometer depended on its current state.

**Kind**: instance method of [`Thermometer`](#vscp.widget.Thermometer)  
<a id="vscp_dot_widget_dot_Thermometer_plus_setEnabled"></a>

##### thermometer.setEnabled(value)
Enable or disable the thermometer.

**Kind**: instance method of [`Thermometer`](#vscp.widget.Thermometer)  

| Param | Type | Description |
| --- | --- | --- |
| value | `boolean` | Enable (true) or disable (false) it |

<a id="vscp_dot_widget_dot_generateUUID"></a>

#### widget.generateUUID() ⇒ `string`
Generate a UUID.

**Kind**: static method of [`widget`](#vscp.widget)  
**Returns**: `string` - UUID  
<a id="vscp_dot_widget_dot_Image"></a>

#### widget.Image(options)
Add a image to the canvas.

**Kind**: static method of [`widget`](#vscp.widget)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.canvasName | `string` | Name of the canvas, normally the canvas id |
| options.url | `string` | Path to the image |
| options.x | `number` | x position of the image in the canvas |
| options.y | `number` | y position of the image in the canvas |

<a id="vscp_dot_wizard"></a>

### vscp.wizard : `object`
VSCP wizard functionality based on a MDF

**Kind**: static namespace of [`vscp`](#vscp)  

* [.wizard](#vscp_dot_wizard) : `object`
    * [.MessageBox](#vscp_dot_wizard_dot_MessageBox)
        * [new vscp.wizard.MessageBox(options)](#new_vscp_dot_wizard_dot_MessageBox_new)
        * [.func](#vscp_dot_wizard_dot_MessageBox_plus_func) : `string`
        * [.head](#vscp_dot_wizard_dot_MessageBox_plus_head) : `string`
        * [.description](#vscp_dot_wizard_dot_MessageBox_plus_description) : `string`
        * [.variableType](#vscp_dot_wizard_dot_MessageBox_plus_variableType) : `string`
        * [.variableName](#vscp_dot_wizard_dot_MessageBox_plus_variableName) : `string`
        * [.variableValue](#vscp_dot_wizard_dot_MessageBox_plus_variableValue) : `string`
        * [.parse($messageBox)](#vscp_dot_wizard_dot_MessageBox_plus_parse)
    * [.WriteBitInReg](#vscp_dot_wizard_dot_WriteBitInReg)
        * [new vscp.wizard.WriteBitInReg(options)](#new_vscp_dot_wizard_dot_WriteBitInReg_new)
        * [.pos](#vscp_dot_wizard_dot_WriteBitInReg_plus_pos) : `number`
        * [.page](#vscp_dot_wizard_dot_WriteBitInReg_plus_page) : `number`
        * [.offset](#vscp_dot_wizard_dot_WriteBitInReg_plus_offset) : `number`
        * [.width](#vscp_dot_wizard_dot_WriteBitInReg_plus_width) : `number`
        * [.value](#vscp_dot_wizard_dot_WriteBitInReg_plus_value) : `number`
        * [.variableName](#vscp_dot_wizard_dot_WriteBitInReg_plus_variableName) : `string`
        * [.parse(writeBitInReg)](#vscp_dot_wizard_dot_WriteBitInReg_plus_parse)
    * [.WriteBitInAbstraction](#vscp_dot_wizard_dot_WriteBitInAbstraction)
        * [new vscp.wizard.WriteBitInAbstraction(options)](#new_vscp_dot_wizard_dot_WriteBitInAbstraction_new)
        * [.id](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_id) : `string`
        * [.pos](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_pos) : `number`
        * [.width](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_width) : `number`
        * [.value](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_value) : `number`
        * [.variableName](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_variableName) : `string`
        * [.parse($writeBitInAbstraction)](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_parse)
    * [.WriteRegister](#vscp_dot_wizard_dot_WriteRegister)
        * [new vscp.wizard.WriteRegister(options)](#new_vscp_dot_wizard_dot_WriteRegister_new)
        * [.page](#vscp_dot_wizard_dot_WriteRegister_plus_page) : `number`
        * [.offset](#vscp_dot_wizard_dot_WriteRegister_plus_offset) : `number`
        * [.value](#vscp_dot_wizard_dot_WriteRegister_plus_value) : `number`
        * [.variableName](#vscp_dot_wizard_dot_WriteRegister_plus_variableName) : `string`
        * [.parse($writeRegister)](#vscp_dot_wizard_dot_WriteRegister_plus_parse)
    * [.WriteAbstraction](#vscp_dot_wizard_dot_WriteAbstraction)
        * [new vscp.wizard.WriteAbstraction(options)](#new_vscp_dot_wizard_dot_WriteAbstraction_new)
        * [.id](#vscp_dot_wizard_dot_WriteAbstraction_plus_id) : `string`
        * [.value](#vscp_dot_wizard_dot_WriteAbstraction_plus_value) : `number`
        * [.variableName](#vscp_dot_wizard_dot_WriteAbstraction_plus_variableName) : `number`
        * [.parse($writeAbstraction)](#vscp_dot_wizard_dot_WriteAbstraction_plus_parse)
    * [.Recipe](#vscp_dot_wizard_dot_Recipe)
        * [new vscp.wizard.Recipe(options)](#new_vscp_dot_wizard_dot_Recipe_new)
        * [.name](#vscp_dot_wizard_dot_Recipe_plus_name) : `string`
        * [.description](#vscp_dot_wizard_dot_Recipe_plus_description) : `string`
        * [.writeBitInRegs](#vscp_dot_wizard_dot_Recipe_plus_writeBitInRegs) : [`Array.&lt;WriteBitInReg&gt;`](#vscp.wizard.WriteBitInReg)
        * [.writeBitInAbstractions](#vscp_dot_wizard_dot_Recipe_plus_writeBitInAbstractions) : `Array.&lt;vscp.wizard.WriteBitAbstractions&gt;`
        * [.writeRegisters](#vscp_dot_wizard_dot_Recipe_plus_writeRegisters) : [`Array.&lt;WriteRegister&gt;`](#vscp.wizard.WriteRegister)
        * [.writeAbstractions](#vscp_dot_wizard_dot_Recipe_plus_writeAbstractions) : [`Array.&lt;WriteAbstraction&gt;`](#vscp.wizard.WriteAbstraction)
        * [.messageBoxes](#vscp_dot_wizard_dot_Recipe_plus_messageBoxes) : [`Array.&lt;MessageBox&gt;`](#vscp.wizard.MessageBox)
        * [.mdf](#vscp_dot_wizard_dot_Recipe_plus_mdf) : `object`
        * [.parse($recipe)](#vscp_dot_wizard_dot_Recipe_plus_parse)
        * [.write(options)](#vscp_dot_wizard_dot_Recipe_plus_write)
    * [.getRecipes(options)](#vscp_dot_wizard_dot_getRecipes) ⇒ [`Array.&lt;Recipe&gt;`](#vscp.wizard.Recipe)

<a id="vscp_dot_wizard_dot_MessageBox"></a>

#### wizard.MessageBox
**Kind**: static class of [`wizard`](#vscp.wizard)  

* [.MessageBox](#vscp_dot_wizard_dot_MessageBox)
    * [new vscp.wizard.MessageBox(options)](#new_vscp_dot_wizard_dot_MessageBox_new)
    * [.func](#vscp_dot_wizard_dot_MessageBox_plus_func) : `string`
    * [.head](#vscp_dot_wizard_dot_MessageBox_plus_head) : `string`
    * [.description](#vscp_dot_wizard_dot_MessageBox_plus_description) : `string`
    * [.variableType](#vscp_dot_wizard_dot_MessageBox_plus_variableType) : `string`
    * [.variableName](#vscp_dot_wizard_dot_MessageBox_plus_variableName) : `string`
    * [.variableValue](#vscp_dot_wizard_dot_MessageBox_plus_variableValue) : `string`
    * [.parse($messageBox)](#vscp_dot_wizard_dot_MessageBox_plus_parse)

<a id="new_vscp_dot_wizard_dot_MessageBox_new"></a>

##### new vscp.wizard.MessageBox(options)
A message box.


| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.messageBox | `object` | Messagebox as jquery xml object |

<a id="vscp_dot_wizard_dot_MessageBox_plus_func"></a>

##### messageBox.func : `string`
Function input or output

**Kind**: instance property of [`MessageBox`](#vscp.wizard.MessageBox)  
<a id="vscp_dot_wizard_dot_MessageBox_plus_head"></a>

##### messageBox.head : `string`
Head

**Kind**: instance property of [`MessageBox`](#vscp.wizard.MessageBox)  
<a id="vscp_dot_wizard_dot_MessageBox_plus_description"></a>

##### messageBox.description : `string`
Description

**Kind**: instance property of [`MessageBox`](#vscp.wizard.MessageBox)  
<a id="vscp_dot_wizard_dot_MessageBox_plus_variableType"></a>

##### messageBox.variableType : `string`
Variable type

**Kind**: instance property of [`MessageBox`](#vscp.wizard.MessageBox)  
<a id="vscp_dot_wizard_dot_MessageBox_plus_variableName"></a>

##### messageBox.variableName : `string`
Variable name

**Kind**: instance property of [`MessageBox`](#vscp.wizard.MessageBox)  
<a id="vscp_dot_wizard_dot_MessageBox_plus_variableValue"></a>

##### messageBox.variableValue : `string`
Variable value

**Kind**: instance property of [`MessageBox`](#vscp.wizard.MessageBox)  
<a id="vscp_dot_wizard_dot_MessageBox_plus_parse"></a>

##### messageBox.parse($messageBox)
Parse a messagebox object.

**Kind**: instance method of [`MessageBox`](#vscp.wizard.MessageBox)  

| Param | Type | Description |
| --- | --- | --- |
| $messageBox | `object` | Messagebox as jquery xml object |

<a id="vscp_dot_wizard_dot_WriteBitInReg"></a>

#### wizard.WriteBitInReg
**Kind**: static class of [`wizard`](#vscp.wizard)  

* [.WriteBitInReg](#vscp_dot_wizard_dot_WriteBitInReg)
    * [new vscp.wizard.WriteBitInReg(options)](#new_vscp_dot_wizard_dot_WriteBitInReg_new)
    * [.pos](#vscp_dot_wizard_dot_WriteBitInReg_plus_pos) : `number`
    * [.page](#vscp_dot_wizard_dot_WriteBitInReg_plus_page) : `number`
    * [.offset](#vscp_dot_wizard_dot_WriteBitInReg_plus_offset) : `number`
    * [.width](#vscp_dot_wizard_dot_WriteBitInReg_plus_width) : `number`
    * [.value](#vscp_dot_wizard_dot_WriteBitInReg_plus_value) : `number`
    * [.variableName](#vscp_dot_wizard_dot_WriteBitInReg_plus_variableName) : `string`
    * [.parse(writeBitInReg)](#vscp_dot_wizard_dot_WriteBitInReg_plus_parse)

<a id="new_vscp_dot_wizard_dot_WriteBitInReg_new"></a>

##### new vscp.wizard.WriteBitInReg(options)
Bit in register access method.


| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.writeBitInReg | `object` | write-bit-in-reg as jquery xml object |

<a id="vscp_dot_wizard_dot_WriteBitInReg_plus_pos"></a>

##### writeBitInReg.pos : `number`
Bit position

**Kind**: instance property of [`WriteBitInReg`](#vscp.wizard.WriteBitInReg)  
<a id="vscp_dot_wizard_dot_WriteBitInReg_plus_page"></a>

##### writeBitInReg.page : `number`
Register page

**Kind**: instance property of [`WriteBitInReg`](#vscp.wizard.WriteBitInReg)  
<a id="vscp_dot_wizard_dot_WriteBitInReg_plus_offset"></a>

##### writeBitInReg.offset : `number`
Register offset

**Kind**: instance property of [`WriteBitInReg`](#vscp.wizard.WriteBitInReg)  
<a id="vscp_dot_wizard_dot_WriteBitInReg_plus_width"></a>

##### writeBitInReg.width : `number`
Bit width

**Kind**: instance property of [`WriteBitInReg`](#vscp.wizard.WriteBitInReg)  
<a id="vscp_dot_wizard_dot_WriteBitInReg_plus_value"></a>

##### writeBitInReg.value : `number`
Value of bit width

**Kind**: instance property of [`WriteBitInReg`](#vscp.wizard.WriteBitInReg)  
<a id="vscp_dot_wizard_dot_WriteBitInReg_plus_variableName"></a>

##### writeBitInReg.variableName : `string`
Variable name

**Kind**: instance property of [`WriteBitInReg`](#vscp.wizard.WriteBitInReg)  
<a id="vscp_dot_wizard_dot_WriteBitInReg_plus_parse"></a>

##### writeBitInReg.parse(writeBitInReg)
Parse a bit in register access method object.

**Kind**: instance method of [`WriteBitInReg`](#vscp.wizard.WriteBitInReg)  

| Param | Type | Description |
| --- | --- | --- |
| writeBitInReg | `object` | write-bit-in-reg as jquery xml object |

<a id="vscp_dot_wizard_dot_WriteBitInAbstraction"></a>

#### wizard.WriteBitInAbstraction
**Kind**: static class of [`wizard`](#vscp.wizard)  

* [.WriteBitInAbstraction](#vscp_dot_wizard_dot_WriteBitInAbstraction)
    * [new vscp.wizard.WriteBitInAbstraction(options)](#new_vscp_dot_wizard_dot_WriteBitInAbstraction_new)
    * [.id](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_id) : `string`
    * [.pos](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_pos) : `number`
    * [.width](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_width) : `number`
    * [.value](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_value) : `number`
    * [.variableName](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_variableName) : `string`
    * [.parse($writeBitInAbstraction)](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_parse)

<a id="new_vscp_dot_wizard_dot_WriteBitInAbstraction_new"></a>

##### new vscp.wizard.WriteBitInAbstraction(options)
Bit in abstraction access method.


| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.writeBitInAbstraction | `object` | write-bit-in-abstraction as jquery xml object |

<a id="vscp_dot_wizard_dot_WriteBitInAbstraction_plus_id"></a>

##### writeBitInAbstraction.id : `string`
Abstract value id

**Kind**: instance property of [`WriteBitInAbstraction`](#vscp.wizard.WriteBitInAbstraction)  
<a id="vscp_dot_wizard_dot_WriteBitInAbstraction_plus_pos"></a>

##### writeBitInAbstraction.pos : `number`
Bit position

**Kind**: instance property of [`WriteBitInAbstraction`](#vscp.wizard.WriteBitInAbstraction)  
<a id="vscp_dot_wizard_dot_WriteBitInAbstraction_plus_width"></a>

##### writeBitInAbstraction.width : `number`
Bit width

**Kind**: instance property of [`WriteBitInAbstraction`](#vscp.wizard.WriteBitInAbstraction)  
<a id="vscp_dot_wizard_dot_WriteBitInAbstraction_plus_value"></a>

##### writeBitInAbstraction.value : `number`
Value of bit width

**Kind**: instance property of [`WriteBitInAbstraction`](#vscp.wizard.WriteBitInAbstraction)  
<a id="vscp_dot_wizard_dot_WriteBitInAbstraction_plus_variableName"></a>

##### writeBitInAbstraction.variableName : `string`
Variable name

**Kind**: instance property of [`WriteBitInAbstraction`](#vscp.wizard.WriteBitInAbstraction)  
<a id="vscp_dot_wizard_dot_WriteBitInAbstraction_plus_parse"></a>

##### writeBitInAbstraction.parse($writeBitInAbstraction)
Parse a bit in abstraction access method object.

**Kind**: instance method of [`WriteBitInAbstraction`](#vscp.wizard.WriteBitInAbstraction)  

| Param | Type | Description |
| --- | --- | --- |
| $writeBitInAbstraction | `object` | write-bit-in-abstraction as jquery xml object |

<a id="vscp_dot_wizard_dot_WriteRegister"></a>

#### wizard.WriteRegister
**Kind**: static class of [`wizard`](#vscp.wizard)  

* [.WriteRegister](#vscp_dot_wizard_dot_WriteRegister)
    * [new vscp.wizard.WriteRegister(options)](#new_vscp_dot_wizard_dot_WriteRegister_new)
    * [.page](#vscp_dot_wizard_dot_WriteRegister_plus_page) : `number`
    * [.offset](#vscp_dot_wizard_dot_WriteRegister_plus_offset) : `number`
    * [.value](#vscp_dot_wizard_dot_WriteRegister_plus_value) : `number`
    * [.variableName](#vscp_dot_wizard_dot_WriteRegister_plus_variableName) : `string`
    * [.parse($writeRegister)](#vscp_dot_wizard_dot_WriteRegister_plus_parse)

<a id="new_vscp_dot_wizard_dot_WriteRegister_new"></a>

##### new vscp.wizard.WriteRegister(options)
Register access method.


| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.writeRegister | `object` | write-register as jquery xml object |

<a id="vscp_dot_wizard_dot_WriteRegister_plus_page"></a>

##### writeRegister.page : `number`
Register page

**Kind**: instance property of [`WriteRegister`](#vscp.wizard.WriteRegister)  
<a id="vscp_dot_wizard_dot_WriteRegister_plus_offset"></a>

##### writeRegister.offset : `number`
Register offset

**Kind**: instance property of [`WriteRegister`](#vscp.wizard.WriteRegister)  
<a id="vscp_dot_wizard_dot_WriteRegister_plus_value"></a>

##### writeRegister.value : `number`
Register value

**Kind**: instance property of [`WriteRegister`](#vscp.wizard.WriteRegister)  
<a id="vscp_dot_wizard_dot_WriteRegister_plus_variableName"></a>

##### writeRegister.variableName : `string`
Variable name

**Kind**: instance property of [`WriteRegister`](#vscp.wizard.WriteRegister)  
<a id="vscp_dot_wizard_dot_WriteRegister_plus_parse"></a>

##### writeRegister.parse($writeRegister)
Parse a register access method object.

**Kind**: instance method of [`WriteRegister`](#vscp.wizard.WriteRegister)  

| Param | Type | Description |
| --- | --- | --- |
| $writeRegister | `object` | write-register as jquery xml object |

<a id="vscp_dot_wizard_dot_WriteAbstraction"></a>

#### wizard.WriteAbstraction
**Kind**: static class of [`wizard`](#vscp.wizard)  

* [.WriteAbstraction](#vscp_dot_wizard_dot_WriteAbstraction)
    * [new vscp.wizard.WriteAbstraction(options)](#new_vscp_dot_wizard_dot_WriteAbstraction_new)
    * [.id](#vscp_dot_wizard_dot_WriteAbstraction_plus_id) : `string`
    * [.value](#vscp_dot_wizard_dot_WriteAbstraction_plus_value) : `number`
    * [.variableName](#vscp_dot_wizard_dot_WriteAbstraction_plus_variableName) : `number`
    * [.parse($writeAbstraction)](#vscp_dot_wizard_dot_WriteAbstraction_plus_parse)

<a id="new_vscp_dot_wizard_dot_WriteAbstraction_new"></a>

##### new vscp.wizard.WriteAbstraction(options)
Abstraction access method.


| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.writeAbstraction | `object` | write-abstraction as jquery xml object |

<a id="vscp_dot_wizard_dot_WriteAbstraction_plus_id"></a>

##### writeAbstraction.id : `string`
Abstract value id

**Kind**: instance property of [`WriteAbstraction`](#vscp.wizard.WriteAbstraction)  
<a id="vscp_dot_wizard_dot_WriteAbstraction_plus_value"></a>

##### writeAbstraction.value : `number`
Abstract value

**Kind**: instance property of [`WriteAbstraction`](#vscp.wizard.WriteAbstraction)  
<a id="vscp_dot_wizard_dot_WriteAbstraction_plus_variableName"></a>

##### writeAbstraction.variableName : `number`
Variable name

**Kind**: instance property of [`WriteAbstraction`](#vscp.wizard.WriteAbstraction)  
<a id="vscp_dot_wizard_dot_WriteAbstraction_plus_parse"></a>

##### writeAbstraction.parse($writeAbstraction)
Parse a abstraction access method object.

**Kind**: instance method of [`WriteAbstraction`](#vscp.wizard.WriteAbstraction)  

| Param | Type | Description |
| --- | --- | --- |
| $writeAbstraction | `object` | write-abstraction as jquery xml object |

<a id="vscp_dot_wizard_dot_Recipe"></a>

#### wizard.Recipe
**Kind**: static class of [`wizard`](#vscp.wizard)  

* [.Recipe](#vscp_dot_wizard_dot_Recipe)
    * [new vscp.wizard.Recipe(options)](#new_vscp_dot_wizard_dot_Recipe_new)
    * [.name](#vscp_dot_wizard_dot_Recipe_plus_name) : `string`
    * [.description](#vscp_dot_wizard_dot_Recipe_plus_description) : `string`
    * [.writeBitInRegs](#vscp_dot_wizard_dot_Recipe_plus_writeBitInRegs) : [`Array.&lt;WriteBitInReg&gt;`](#vscp.wizard.WriteBitInReg)
    * [.writeBitInAbstractions](#vscp_dot_wizard_dot_Recipe_plus_writeBitInAbstractions) : `Array.&lt;vscp.wizard.WriteBitAbstractions&gt;`
    * [.writeRegisters](#vscp_dot_wizard_dot_Recipe_plus_writeRegisters) : [`Array.&lt;WriteRegister&gt;`](#vscp.wizard.WriteRegister)
    * [.writeAbstractions](#vscp_dot_wizard_dot_Recipe_plus_writeAbstractions) : [`Array.&lt;WriteAbstraction&gt;`](#vscp.wizard.WriteAbstraction)
    * [.messageBoxes](#vscp_dot_wizard_dot_Recipe_plus_messageBoxes) : [`Array.&lt;MessageBox&gt;`](#vscp.wizard.MessageBox)
    * [.mdf](#vscp_dot_wizard_dot_Recipe_plus_mdf) : `object`
    * [.parse($recipe)](#vscp_dot_wizard_dot_Recipe_plus_parse)
    * [.write(options)](#vscp_dot_wizard_dot_Recipe_plus_write)

<a id="new_vscp_dot_wizard_dot_Recipe_new"></a>

##### new vscp.wizard.Recipe(options)
A recipe.


| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.recipe | `object` | Recipe as jquery xml object |
| options.mdf | `object` | MDF as jquery xml object |

<a id="vscp_dot_wizard_dot_Recipe_plus_name"></a>

##### recipe.name : `string`
Recipe name

**Kind**: instance property of [`Recipe`](#vscp.wizard.Recipe)  
<a id="vscp_dot_wizard_dot_Recipe_plus_description"></a>

##### recipe.description : `string`
Recipe description

**Kind**: instance property of [`Recipe`](#vscp.wizard.Recipe)  
<a id="vscp_dot_wizard_dot_Recipe_plus_writeBitInRegs"></a>

##### recipe.writeBitInRegs : [`Array.&lt;WriteBitInReg&gt;`](#vscp.wizard.WriteBitInReg)
Bit access methods in registers

**Kind**: instance property of [`Recipe`](#vscp.wizard.Recipe)  
<a id="vscp_dot_wizard_dot_Recipe_plus_writeBitInAbstractions"></a>

##### recipe.writeBitInAbstractions : `Array.&lt;vscp.wizard.WriteBitAbstractions&gt;`
Bit access methods in abstract value

**Kind**: instance property of [`Recipe`](#vscp.wizard.Recipe)  
<a id="vscp_dot_wizard_dot_Recipe_plus_writeRegisters"></a>

##### recipe.writeRegisters : [`Array.&lt;WriteRegister&gt;`](#vscp.wizard.WriteRegister)
Register access methods

**Kind**: instance property of [`Recipe`](#vscp.wizard.Recipe)  
<a id="vscp_dot_wizard_dot_Recipe_plus_writeAbstractions"></a>

##### recipe.writeAbstractions : [`Array.&lt;WriteAbstraction&gt;`](#vscp.wizard.WriteAbstraction)
Abstract access methods

**Kind**: instance property of [`Recipe`](#vscp.wizard.Recipe)  
<a id="vscp_dot_wizard_dot_Recipe_plus_messageBoxes"></a>

##### recipe.messageBoxes : [`Array.&lt;MessageBox&gt;`](#vscp.wizard.MessageBox)
Messageboxes

**Kind**: instance property of [`Recipe`](#vscp.wizard.Recipe)  
<a id="vscp_dot_wizard_dot_Recipe_plus_mdf"></a>

##### recipe.mdf : `object`
MDF

**Kind**: instance property of [`Recipe`](#vscp.wizard.Recipe)  
<a id="vscp_dot_wizard_dot_Recipe_plus_parse"></a>

##### recipe.parse($recipe)
Parse a recipe object.

**Kind**: instance method of [`Recipe`](#vscp.wizard.Recipe)  

| Param | Type | Description |
| --- | --- | --- |
| $recipe | `object` | Recipe as jquery xml object |

<a id="vscp_dot_wizard_dot_Recipe_plus_write"></a>

##### recipe.write(options)
Write a recipe.

**Kind**: instance method of [`Recipe`](#vscp.wizard.Recipe)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |

<a id="vscp_dot_wizard_dot_getRecipes"></a>

#### wizard.getRecipes(options) ⇒ [`Array.&lt;Recipe&gt;`](#vscp.wizard.Recipe)
Get recipes from a MDF in JSON format.

**Kind**: static method of [`wizard`](#vscp.wizard)  
**Returns**: [`Array.&lt;Recipe&gt;`](#vscp.wizard.Recipe) - Recipe array  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.mdf | `object` | The mdf as jquery xml object |

<a id="vscp_dot_ws"></a>

### vscp.ws : `object`
VSCP websocket api functions

**Kind**: static namespace of [`vscp`](#vscp)  

* [.ws](#vscp_dot_ws) : `object`
    * [.Client](#vscp_dot_ws_dot_Client)
        * [new vscp.ws.Client()](#new_vscp_dot_ws_dot_Client_new)
        * [.socket](#vscp_dot_ws_dot_Client_plus_socket) : `object`
        * [.url](#vscp_dot_ws_dot_Client_plus_url) : `string`
        * [.userName](#vscp_dot_ws_dot_Client_plus_userName) : `string`
        * [.userId](#vscp_dot_ws_dot_Client_plus_userId) : `number`
        * [.userFullname](#vscp_dot_ws_dot_Client_plus_userFullname) : `string`
        * [.userRights](#vscp_dot_ws_dot_Client_plus_userRights) : `array`
        * [.userRemotes](#vscp_dot_ws_dot_Client_plus_userRemotes) : `array`
        * [.userEvents](#vscp_dot_ws_dot_Client_plus_userEvents) : `array`
        * [.userNote](#vscp_dot_ws_dot_Client_plus_userNote) : `string`
        * [.password](#vscp_dot_ws_dot_Client_plus_password) : `string`
        * [.vscpkey](#vscp_dot_ws_dot_Client_plus_vscpkey) : `string`
        * [.onConnError](#vscp_dot_ws_dot_Client_plus_onConnError) : `function`
        * [.onMessage](#vscp_dot_ws_dot_Client_plus_onMessage) : `function`
        * [.onEvent](#vscp_dot_ws_dot_Client_plus_onEvent) : `Array.&lt;function()&gt;`
        * [.onVariable](#vscp_dot_ws_dot_Client_plus_onVariable) : `function`
        * [.onTableRow](#vscp_dot_ws_dot_Client_plus_onTableRow) : `function`
        * [.state](#vscp_dot_ws_dot_Client_plus_state) : `number`
        * [.substate](#vscp_dot_ws_dot_Client_plus_substate) : `number`
        * [.states](#vscp_dot_ws_dot_Client_plus_states) : `enum`
        * [.substates](#vscp_dot_ws_dot_Client_plus_substates) : `enum`
        * [.addEventListener(eventListener)](#vscp_dot_ws_dot_Client_plus_addEventListener)
        * [.removeEventListener(eventListener)](#vscp_dot_ws_dot_Client_plus_removeEventListener)
        * [.getAuthHash(userName, password, str_iv)](#vscp_dot_ws_dot_Client_plus_getAuthHash) ⇒ `string`
        * [.onWebSocketOpen()](#vscp_dot_ws_dot_Client_plus_onWebSocketOpen)
        * [.onWebSocketClose()](#vscp_dot_ws_dot_Client_plus_onWebSocketClose)
        * [.onWebSocketMessage(msg)](#vscp_dot_ws_dot_Client_plus_onWebSocketMessage)
        * [.connect(options)](#vscp_dot_ws_dot_Client_plus_connect) ⇒ `object`
        * [.disconnect(options)](#vscp_dot_ws_dot_Client_plus_disconnect) ⇒ `object`
        * [.start(options)](#vscp_dot_ws_dot_Client_plus_start) ⇒ `object`
        * [.stop(options)](#vscp_dot_ws_dot_Client_plus_stop) ⇒ `object`
        * [.clearQueue(options)](#vscp_dot_ws_dot_Client_plus_clearQueue) ⇒ `object`
        * [.sendEvent(options)](#vscp_dot_ws_dot_Client_plus_sendEvent) ⇒ `object`
        * [.setFilter(options)](#vscp_dot_ws_dot_Client_plus_setFilter) ⇒ `object`
        * [.createVar(options)](#vscp_dot_ws_dot_Client_plus_createVar) ⇒ `object`
        * [.readVar(options)](#vscp_dot_ws_dot_Client_plus_readVar) ⇒ `object`
        * [.writeVar(options)](#vscp_dot_ws_dot_Client_plus_writeVar) ⇒ `object`
        * [.resetVar(options)](#vscp_dot_ws_dot_Client_plus_resetVar) ⇒ `object`
        * [.removeVar(options)](#vscp_dot_ws_dot_Client_plus_removeVar) ⇒ `object`
        * [.lengthVar(options)](#vscp_dot_ws_dot_Client_plus_lengthVar) ⇒ `object`
        * [.lastChangeVar(options)](#vscp_dot_ws_dot_Client_plus_lastChangeVar) ⇒ `object`
        * [.listVar(options)](#vscp_dot_ws_dot_Client_plus_listVar) ⇒ `object`
        * [.readTable(options)](#vscp_dot_ws_dot_Client_plus_readTable) ⇒ `object`

<a id="vscp_dot_ws_dot_Client"></a>

#### ws.Client
**Kind**: static class of [`ws`](#vscp.ws)  

* [.Client](#vscp_dot_ws_dot_Client)
    * [new vscp.ws.Client()](#new_vscp_dot_ws_dot_Client_new)
    * [.socket](#vscp_dot_ws_dot_Client_plus_socket) : `object`
    * [.url](#vscp_dot_ws_dot_Client_plus_url) : `string`
    * [.userName](#vscp_dot_ws_dot_Client_plus_userName) : `string`
    * [.userId](#vscp_dot_ws_dot_Client_plus_userId) : `number`
    * [.userFullname](#vscp_dot_ws_dot_Client_plus_userFullname) : `string`
    * [.userRights](#vscp_dot_ws_dot_Client_plus_userRights) : `array`
    * [.userRemotes](#vscp_dot_ws_dot_Client_plus_userRemotes) : `array`
    * [.userEvents](#vscp_dot_ws_dot_Client_plus_userEvents) : `array`
    * [.userNote](#vscp_dot_ws_dot_Client_plus_userNote) : `string`
    * [.password](#vscp_dot_ws_dot_Client_plus_password) : `string`
    * [.vscpkey](#vscp_dot_ws_dot_Client_plus_vscpkey) : `string`
    * [.onConnError](#vscp_dot_ws_dot_Client_plus_onConnError) : `function`
    * [.onMessage](#vscp_dot_ws_dot_Client_plus_onMessage) : `function`
    * [.onEvent](#vscp_dot_ws_dot_Client_plus_onEvent) : `Array.&lt;function()&gt;`
    * [.onVariable](#vscp_dot_ws_dot_Client_plus_onVariable) : `function`
    * [.onTableRow](#vscp_dot_ws_dot_Client_plus_onTableRow) : `function`
    * [.state](#vscp_dot_ws_dot_Client_plus_state) : `number`
    * [.substate](#vscp_dot_ws_dot_Client_plus_substate) : `number`
    * [.states](#vscp_dot_ws_dot_Client_plus_states) : `enum`
    * [.substates](#vscp_dot_ws_dot_Client_plus_substates) : `enum`
    * [.addEventListener(eventListener)](#vscp_dot_ws_dot_Client_plus_addEventListener)
    * [.removeEventListener(eventListener)](#vscp_dot_ws_dot_Client_plus_removeEventListener)
    * [.getAuthHash(userName, password, str_iv)](#vscp_dot_ws_dot_Client_plus_getAuthHash) ⇒ `string`
    * [.onWebSocketOpen()](#vscp_dot_ws_dot_Client_plus_onWebSocketOpen)
    * [.onWebSocketClose()](#vscp_dot_ws_dot_Client_plus_onWebSocketClose)
    * [.onWebSocketMessage(msg)](#vscp_dot_ws_dot_Client_plus_onWebSocketMessage)
    * [.connect(options)](#vscp_dot_ws_dot_Client_plus_connect) ⇒ `object`
    * [.disconnect(options)](#vscp_dot_ws_dot_Client_plus_disconnect) ⇒ `object`
    * [.start(options)](#vscp_dot_ws_dot_Client_plus_start) ⇒ `object`
    * [.stop(options)](#vscp_dot_ws_dot_Client_plus_stop) ⇒ `object`
    * [.clearQueue(options)](#vscp_dot_ws_dot_Client_plus_clearQueue) ⇒ `object`
    * [.sendEvent(options)](#vscp_dot_ws_dot_Client_plus_sendEvent) ⇒ `object`
    * [.setFilter(options)](#vscp_dot_ws_dot_Client_plus_setFilter) ⇒ `object`
    * [.createVar(options)](#vscp_dot_ws_dot_Client_plus_createVar) ⇒ `object`
    * [.readVar(options)](#vscp_dot_ws_dot_Client_plus_readVar) ⇒ `object`
    * [.writeVar(options)](#vscp_dot_ws_dot_Client_plus_writeVar) ⇒ `object`
    * [.resetVar(options)](#vscp_dot_ws_dot_Client_plus_resetVar) ⇒ `object`
    * [.removeVar(options)](#vscp_dot_ws_dot_Client_plus_removeVar) ⇒ `object`
    * [.lengthVar(options)](#vscp_dot_ws_dot_Client_plus_lengthVar) ⇒ `object`
    * [.lastChangeVar(options)](#vscp_dot_ws_dot_Client_plus_lastChangeVar) ⇒ `object`
    * [.listVar(options)](#vscp_dot_ws_dot_Client_plus_listVar) ⇒ `object`
    * [.readTable(options)](#vscp_dot_ws_dot_Client_plus_readTable) ⇒ `object`

<a id="new_vscp_dot_ws_dot_Client_new"></a>

##### new vscp.ws.Client()
VSCP websocket client, used for connection establishment to a VSCP server.

<a id="vscp_dot_ws_dot_Client_plus_socket"></a>

##### client.socket : `object`
Websocket

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_url"></a>

##### client.url : `string`
url used for connection establishment

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_userName"></a>

##### client.userName : `string`
User name used for connection establishment

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_userId"></a>

##### client.userId : `number`
User id from authentication AUTH1

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_userFullname"></a>

##### client.userFullname : `string`
User full name from authentication AUTH1

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_userRights"></a>

##### client.userRights : `array`
User rights from authentication AUTH1

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_userRemotes"></a>

##### client.userRemotes : `array`
User allowed remotes from authentication AUTH1

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_userEvents"></a>

##### client.userEvents : `array`
User allowed events from authentication AUTH1

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_userNote"></a>

##### client.userNote : `string`
User note from authentication AUTH1

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_password"></a>

##### client.password : `string`
Password used for connection establishment

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_vscpkey"></a>

##### client.vscpkey : `string`
Secret key used for connection establishment

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_onConnError"></a>

##### client.onConnError : `function`
Callback called on any connection error

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_onMessage"></a>

##### client.onMessage : `function`
Callback called on any received VSCP response message

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_onEvent"></a>

##### client.onEvent : `Array.&lt;function()&gt;`
Callbacks called on any received VSCP event message

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_onVariable"></a>

##### client.onVariable : `function`
Callback called on any received variable (see LSTVAR command)

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_onTableRow"></a>

##### client.onTableRow : `function`
Callback called on any received table row (see GT command)

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_state"></a>

##### client.state : `number`
VSCP websocket is not connected right now

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_substate"></a>

##### client.substate : `number`
VSCP event traffic is closed

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_states"></a>

##### client.states : `enum`
States of the VSCP websocket

**Kind**: instance enum of [`Client`](#vscp.ws.Client)  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| DISCONNECTED | `number` | <code>0</code> | Not connected |
| CONNECTED | `number` | <code>1</code> | Standard websocket connection established |
| AUTHENTICATED | `number` | <code>2</code> | Authentication with VSCP server successful |

<a id="vscp_dot_ws_dot_Client_plus_substates"></a>

##### client.substates : `enum`
Substates of the VSCP websocket

**Kind**: instance enum of [`Client`](#vscp.ws.Client)  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| CLOSED | `number` | <code>0</code> | No events sent from server |
| OPEN | `number` | <code>1</code> | Events sent from server |

<a id="vscp_dot_ws_dot_Client_plus_addEventListener"></a>

##### client.addEventListener(eventListener)
Add a event listener.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  

| Param | Type | Description |
| --- | --- | --- |
| eventListener | `function` | Event listener function |

<a id="vscp_dot_ws_dot_Client_plus_removeEventListener"></a>

##### client.removeEventListener(eventListener)
Remove a event listener.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  

| Param | Type | Description |
| --- | --- | --- |
| eventListener | `function` | Event listener function |

<a id="vscp_dot_ws_dot_Client_plus_getAuthHash"></a>

##### client.getAuthHash(userName, password, str_iv) ⇒ `string`
Calculates the VSCP server websocket authentication hash.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `string` - Authentication ("encrypted user:password")  

| Param | Type | Description |
| --- | --- | --- |
| userName | `string` | User name |
| password | `string` | Password |
| str_iv | `string` | 16 random byte iv in hex form |

<a id="vscp_dot_ws_dot_Client_plus_onWebSocketOpen"></a>

##### client.onWebSocketOpen()
This function is called by the websocket in case the connection is established.
It will initiate the authentication with the VSCP server.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_onWebSocketClose"></a>

##### client.onWebSocketClose()
This function is called by the websocket in case that the connection is closed.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_onWebSocketMessage"></a>

##### client.onWebSocketMessage(msg)
This function is called for any websocket message (VSCP server response message).

**Kind**: instance method of [`Client`](#vscp.ws.Client)  

| Param | Type | Description |
| --- | --- | --- |
| msg | `string` | VSCP server response message |

<a id="vscp_dot_ws_dot_Client_plus_connect"></a>

##### client.connect(options) ⇒ `object`
Connect to a VSCP server with the given URL.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.url | `string` | URL to the VSCP server, e.g. ws:// |
| options.userName | `string` | User name used for authentication |
| options.password | `string` | Password used for authentication |
| options.vscpkey | `string` | Secret key used for authentication |
| [options.onMessage] | `function` | Function which is called on any received VSCP response message. |
| [options.onSuccess] | `function` | Function which is called on a successful connection establishment. |
| [options.onError] | `function` | Function which is called on a failed connection establishment or in case the connection is lost during the session. |

<a id="vscp_dot_ws_dot_Client_plus_disconnect"></a>

##### client.disconnect(options) ⇒ `object`
Disconnect from a VSCP server.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| [options.onSuccess] | `function` | Function which is called on a successful disconnection. |

<a id="vscp_dot_ws_dot_Client_plus_start"></a>

##### client.start(options) ⇒ `object`
Start receiving events.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_ws_dot_Client_plus_stop"></a>

##### client.stop(options) ⇒ `object`
Stop receiving events.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_ws_dot_Client_plus_clearQueue"></a>

##### client.clearQueue(options) ⇒ `object`
Clear the VSCP event queue on the server side.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_ws_dot_Client_plus_sendEvent"></a>

##### client.sendEvent(options) ⇒ `object`
Send a VSCP event to the VSCP server.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.event | [`Event`](#vscp.Event) | VSCP event to send |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_ws_dot_Client_plus_setFilter"></a>

##### client.setFilter(options) ⇒ `object`
Set a filter in the VSCP server for VSCP events.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| [options.filterPriority] | `number` | Priority filter (default: 0) |
| [options.filterClass] | `number` | Class filter (default: 0) |
| [options.filterType] | `number` | Type filter (default: 0) |
| [options.filterGuid] | `Array.&lt;number&gt;` \| `string` | GUID filter (default: 0) |
| [options.maskPriority] | `number` | Priority mask (default: 0) |
| [options.maskClass] | `number` | Class mask (default: 0xffff) |
| [options.maskType] | `number` | Type mask (default: 0xffff) |
| [options.maskGuid] | `Array.&lt;number&gt;` \| `string` | GUID mask (default: 0) |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_ws_dot_Client_plus_createVar"></a>

##### client.createVar(options) ⇒ `object`
Create a a VSCP remote variable.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.name | `string` | Variable name |
| [options.type] | `number` | Variable type (default: string) |
| [options.accessrights] | `number` | Variable value (default: 744) |
| options.persistency | `boolean` | Variable is persistent (true) or not (false) |
| options.value | `string` | Variable Value |
| [options.note] | `string` | Variable note (optional) |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_ws_dot_Client_plus_readVar"></a>

##### client.readVar(options) ⇒ `object`
Read a value from a VSCP server variable.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.name | `string` | Variable name |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_ws_dot_Client_plus_writeVar"></a>

##### client.writeVar(options) ⇒ `object`
Write a value to a VSCP server variable.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.name | `string` | Variable name |
| options.value | `string` | Variable value |
| options.type | `number` | Variable type |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_ws_dot_Client_plus_resetVar"></a>

##### client.resetVar(options) ⇒ `object`
Reset a VSCP server variable.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.name | `string` | Variable name |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_ws_dot_Client_plus_removeVar"></a>

##### client.removeVar(options) ⇒ `object`
Remove a VSCP server variable.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.name | `string` | Variable name |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_ws_dot_Client_plus_lengthVar"></a>

##### client.lengthVar(options) ⇒ `object`
Get a VSCP server variable length.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.name | `string` | Variable name |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_ws_dot_Client_plus_lastChangeVar"></a>

##### client.lastChangeVar(options) ⇒ `object`
Get last change of a VSCP server variable.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.name | `string` | Variable name |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_ws_dot_Client_plus_listVar"></a>

##### client.listVar(options) ⇒ `object`
List all VSCP server variables.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| [options.regex] | `string` | Regular expression to filter variables |
| options.onVariable | `function` | Function which is called per variable |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_ws_dot_Client_plus_readTable"></a>

##### client.readTable(options) ⇒ `object`
Get data from a table.
If "begin" and "end" are omitted, the whole table is returned.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.name | `string` | Table name |
| options.begin | `string` | Date when to begin ( ISO form YY-MM-DD HH:MM:SS ) |
| options.end | `string` | Date when to end ( ISO form YY-MM-DD HH:MM:SS ) |
| options.onTableRow | `function` | Function which is called on every received table row |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_getVarTypeName"></a>

### vscp.getVarTypeName(n) ⇒ `string`
Get variable type name as string by numerical code.

**Kind**: static method of [`vscp`](#vscp)  
**Returns**: `string` - Variable type name  

| Param | Type | Description |
| --- | --- | --- |
| n | `number` | Numerical code |

<a id="vscp_dot_getVarTypeNumerical"></a>

### vscp.getVarTypeNumerical(str) ⇒ `number`
Get numerical code of variable type from string.

**Kind**: static method of [`vscp`](#vscp)  
**Returns**: `number` - Variable type numerical code  

| Param | Type | Description |
| --- | --- | --- |
| str | `string` | Variable type name |

<a id="vscp_dot_getEditorModeFromType"></a>

### vscp.getEditorModeFromType(n) ⇒ `string`
Get ace editor formation mode string from numerical variable type code.

**Kind**: static method of [`vscp`](#vscp)  
**Returns**: `string` - Ace editro formation mode string  

| Param | Type | Description |
| --- | --- | --- |
| n | `number` | Variable type numerical code |

<a id="vscp_dot_b64EncodeUnicode"></a>

### vscp.b64EncodeUnicode(str) ⇒ `string`
Encode base64 unicode safe.

**Kind**: static method of [`vscp`](#vscp)  
**Returns**: `string` - Base64  

| Param | Type | Description |
| --- | --- | --- |
| str | `string` | Unicode string |

<a id="vscp_dot_b64DecodeUnicode"></a>

### vscp.b64DecodeUnicode(str) ⇒ `string`
Decode base64 unicode safe.

**Kind**: static method of [`vscp`](#vscp)  
**Returns**: `string` - Unicode string  

| Param | Type | Description |
| --- | --- | --- |
| str | `string` | Base64 |

<a id="vscp_dot_isBase64Type"></a>

### vscp.isBase64Type(type) ⇒ `bool`
Determine whether the given variable type is a type stored base64 encoded or not.

**Kind**: static method of [`vscp`](#vscp)  
**Returns**: `bool` - Stored base64 encoded (true) or not (false).  

| Param | Type | Description |
| --- | --- | --- |
| type | `number` | Variable type numerical code |

<a id="vscp_dot_decodeValueIfBase64"></a>

### vscp.decodeValueIfBase64(type, value) ⇒ `string`
Decode the value if its base64 encoded.

**Kind**: static method of [`vscp`](#vscp)  
**Returns**: `string` - Decoded value if type is base64 encoded type otherwise original value.  

| Param | Type | Description |
| --- | --- | --- |
| type | `number` | Variable type numerical code |
| value | `string` | Value |

<a id="vscp_dot_encodeValueIfBase64"></a>

### vscp.encodeValueIfBase64(type, value) ⇒ `string`
Encode the value if its stored in base64.

**Kind**: static method of [`vscp`](#vscp)  
**Returns**: `string` - Encoded value if type is base64 encoded type otherwise original value.  

| Param | Type | Description |
| --- | --- | --- |
| type | `number` | Variable type numerical code |
| value | `string` | Value |

<a id="vscp"></a>

## vscp : `object`
Namespace for all functionality of the VSCP provided libraries.

**Kind**: global namespace  

* [vscp](#vscp) : `object`
    * [.Event](#vscp_dot_Event)
        * [new vscp.Event(options)](#new_vscp_dot_Event_new)
        * [.vscpHead](#vscp_dot_Event_plus_vscpHead) : `number`
        * [.vscpClass](#vscp_dot_Event_plus_vscpClass) : `number`
        * [.vscpType](#vscp_dot_Event_plus_vscpType) : `number`
        * [.vscpObId](#vscp_dot_Event_plus_vscpObId) : `number`
        * [.vscpTimeStamp](#vscp_dot_Event_plus_vscpTimeStamp) : `number`
        * [.vscpDateTime](#vscp_dot_Event_plus_vscpDateTime) : `date`
        * [.vscpGuid](#vscp_dot_Event_plus_vscpGuid) : `string`
        * [.vscpData](#vscp_dot_Event_plus_vscpData) : `Array.&lt;number&gt;` \| `string`
        * [.setIPV6Addr()](#vscp_dot_Event_plus_setIPV6Addr)
        * [.isIPV6Addr()](#vscp_dot_Event_plus_isIPV6Addr) ⇒ `boolean`
        * [.setDumbNode()](#vscp_dot_Event_plus_setDumbNode)
        * [.isDumbNode()](#vscp_dot_Event_plus_isDumbNode) ⇒ `boolean`
        * [.setPriority(priority)](#vscp_dot_Event_plus_setPriority)
        * [.getPriority()](#vscp_dot_Event_plus_getPriority) ⇒ `number`
        * [.setHardCodedAddr()](#vscp_dot_Event_plus_setHardCodedAddr)
        * [.isHardCodedAddr()](#vscp_dot_Event_plus_isHardCodedAddr) ⇒ `boolean`
        * [.setDoNotCalcCRC()](#vscp_dot_Event_plus_setDoNotCalcCRC)
        * [.isDoNotCalcCRC()](#vscp_dot_Event_plus_isDoNotCalcCRC) ⇒ `boolean`
        * [.getText()](#vscp_dot_Event_plus_getText) ⇒ `string`
    * [.version](#vscp_dot_version)
    * [.constants](#vscp_dot_constants) : `object`
        * [.classes](#vscp_dot_constants_dot_classes) : `enum`
        * [.types](#vscp_dot_constants_dot_types) : `enum`
        * [.priorities](#vscp_dot_constants_dot_priorities) : `enum`
        * [.varTypes](#vscp_dot_constants_dot_varTypes) : `enum`
        * [.varTypeNames](#vscp_dot_constants_dot_varTypeNames)
    * [.utility](#vscp_dot_utility) : `object`
        * [.readValue(input)](#vscp_dot_utility_dot_readValue) ⇒ `number`
        * [.getTime()](#vscp_dot_utility_dot_getTime) ⇒ `string`
        * [.guidToStr(guid)](#vscp_dot_utility_dot_guidToStr) ⇒ `string`
        * [.strToGuid(guid)](#vscp_dot_utility_dot_strToGuid) ⇒ `Array.&lt;number&gt;`
        * [.getNodeId(guid)](#vscp_dot_utility_dot_getNodeId) ⇒ `number`
    * [.mdf](#vscp_dot_mdf) : `object`
        * [.Register](#vscp_dot_mdf_dot_Register)
            * [new vscp.mdf.Register()](#new_vscp_dot_mdf_dot_Register_new)
            * [.name](#vscp_dot_mdf_dot_Register_plus_name) : `string`
            * [.description](#vscp_dot_mdf_dot_Register_plus_description) : `string`
            * [.readAccess](#vscp_dot_mdf_dot_Register_plus_readAccess) : `boolean`
            * [.writeAccess](#vscp_dot_mdf_dot_Register_plus_writeAccess) : `boolean`
            * [.page](#vscp_dot_mdf_dot_Register_plus_page) : `number`
            * [.offset](#vscp_dot_mdf_dot_Register_plus_offset) : `number`
            * [.value](#vscp_dot_mdf_dot_Register_plus_value) : `number`
            * [.dirty](#vscp_dot_mdf_dot_Register_plus_dirty) : `number`
            * [.userData](#vscp_dot_mdf_dot_Register_plus_userData) : `object`
            * [.setValue(value)](#vscp_dot_mdf_dot_Register_plus_setValue)
        * [.Abstraction](#vscp_dot_mdf_dot_Abstraction)
            * [new vscp.mdf.Abstraction()](#new_vscp_dot_mdf_dot_Abstraction_new)
            * [.name](#vscp_dot_mdf_dot_Abstraction_plus_name) : `string`
            * [.description](#vscp_dot_mdf_dot_Abstraction_plus_description) : `string`
            * [.readAccess](#vscp_dot_mdf_dot_Abstraction_plus_readAccess) : `boolean`
            * [.writeAccess](#vscp_dot_mdf_dot_Abstraction_plus_writeAccess) : `boolean`
            * [.id](#vscp_dot_mdf_dot_Abstraction_plus_id) : `string`
            * [.page](#vscp_dot_mdf_dot_Abstraction_plus_page) : `number`
            * [.offset](#vscp_dot_mdf_dot_Abstraction_plus_offset) : `number`
            * [.value](#vscp_dot_mdf_dot_Abstraction_plus_value) : `number`
            * [.type](#vscp_dot_mdf_dot_Abstraction_plus_type) : `string`
            * [.defValue](#vscp_dot_mdf_dot_Abstraction_plus_defValue) : `number`
            * [.dirty](#vscp_dot_mdf_dot_Abstraction_plus_dirty) : `number`
            * [.userData](#vscp_dot_mdf_dot_Abstraction_plus_userData) : `object`
            * [.setValue(value)](#vscp_dot_mdf_dot_Abstraction_plus_setValue)
        * [.constants](#vscp_dot_mdf_dot_constants) : `object`
            * [.TYPE_SIZES](#vscp_dot_mdf_dot_constants_dot_TYPE_SIZES) : `enum`
            * [.CONVERSION_FROM_DECIMAL](#vscp_dot_mdf_dot_constants_dot_CONVERSION_FROM_DECIMAL)
            * [.CONVERSION_TO_DECIMAL](#vscp_dot_mdf_dot_constants_dot_CONVERSION_TO_DECIMAL)
            * [.RANGE](#vscp_dot_mdf_dot_constants_dot_RANGE)
        * [.timeout](#vscp_dot_mdf_dot_timeout) : `number`
        * [.load(options)](#vscp_dot_mdf_dot_load)
        * [.loadLocal(options)](#vscp_dot_mdf_dot_loadLocal)
        * [.readAbstractValue(options)](#vscp_dot_mdf_dot_readAbstractValue)
        * [.writeAbstractValue(options)](#vscp_dot_mdf_dot_writeAbstractValue)
        * [.writeAbstractBits(options)](#vscp_dot_mdf_dot_writeAbstractBits)
        * [.getRegisters(options)](#vscp_dot_mdf_dot_getRegisters) ⇒ [`Array.&lt;Register&gt;`](#vscp.mdf.Register)
        * [.getAbstractions(options)](#vscp_dot_mdf_dot_getAbstractions) ⇒ [`Array.&lt;Abstraction&gt;`](#vscp.mdf.Abstraction)
    * [.measurement](#vscp_dot_measurement) : `object`
        * [.Decoder](#vscp_dot_measurement_dot_Decoder)
            * [new vscp.measurement.Decoder(options)](#new_vscp_dot_measurement_dot_Decoder_new)
            * [.client](#vscp_dot_measurement_dot_Decoder_plus_client) : [`Client`](#vscp.ws.Client)
            * [.onValue](#vscp_dot_measurement_dot_Decoder_plus_onValue) : `function`
            * [.filter](#vscp_dot_measurement_dot_Decoder_plus_filter) : `object`
        * [.constants](#vscp_dot_measurement_dot_constants) : `object`
            * [.units](#vscp_dot_measurement_dot_constants_dot_units) : `Array.&lt;string&gt;`
        * [.timeout](#vscp_dot_measurement_dot_timeout) : `number`
        * [.toFixed(value, precision)](#vscp_dot_measurement_dot_toFixed) ⇒ `number`
        * [.varInteger2Float(data)](#vscp_dot_measurement_dot_varInteger2Float) ⇒ `number`
        * [.getDataCoding(data)](#vscp_dot_measurement_dot_getDataCoding) ⇒ `number`
        * [.getUnitFromDataCoding(data)](#vscp_dot_measurement_dot_getUnitFromDataCoding) ⇒ `number`
        * [.getSensorIndexFromDataCoding(data)](#vscp_dot_measurement_dot_getSensorIndexFromDataCoding) ⇒ `number`
        * [.decodeClass10(data)](#vscp_dot_measurement_dot_decodeClass10) ⇒ `number`
        * [.decodeClass60Number(data)](#vscp_dot_measurement_dot_decodeClass60Number) ⇒ `number`
        * [.decodeClass65Number(data)](#vscp_dot_measurement_dot_decodeClass65Number) ⇒ `number`
        * [.convertFahrenheitToKelvin(value)](#vscp_dot_measurement_dot_convertFahrenheitToKelvin) ⇒ `number`
        * [.convertFahrenheitToCelsius(value)](#vscp_dot_measurement_dot_convertFahrenheitToCelsius) ⇒ `number`
        * [.convertCelsiusToFahrenheit(value)](#vscp_dot_measurement_dot_convertCelsiusToFahrenheit) ⇒ `number`
        * [.convertKelvinToCelsius(value)](#vscp_dot_measurement_dot_convertKelvinToCelsius) ⇒ `number`
        * [.convertCelsiusToKelvin(value)](#vscp_dot_measurement_dot_convertCelsiusToKelvin) ⇒ `number`
        * [.convertKelvinToFahrenheit(value)](#vscp_dot_measurement_dot_convertKelvinToFahrenheit) ⇒ `number`
        * [.convertMeterToFeet(value)](#vscp_dot_measurement_dot_convertMeterToFeet) ⇒ `number`
        * [.convertFeetToMeter(value)](#vscp_dot_measurement_dot_convertFeetToMeter) ⇒ `number`
        * [.convertMeterToInch(value)](#vscp_dot_measurement_dot_convertMeterToInch) ⇒ `number`
        * [.convertInchToMeter(value)](#vscp_dot_measurement_dot_convertInchToMeter) ⇒ `number`
    * [.register](#vscp_dot_register) : `object`
        * [.constants](#vscp_dot_register_dot_constants) : `enum`
        * [.timeout](#vscp_dot_register_dot_timeout) : `number`
        * [.read(options)](#vscp_dot_register_dot_read)
        * [.write(options)](#vscp_dot_register_dot_write)
        * [.writeBits(options)](#vscp_dot_register_dot_writeBits)
        * [.readAlarmStatus(options)](#vscp_dot_register_dot_readAlarmStatus)
        * [.readVscpVersion(options)](#vscp_dot_register_dot_readVscpVersion)
        * [.readNodeControlFlags(options)](#vscp_dot_register_dot_readNodeControlFlags)
        * [.readUserId(options)](#vscp_dot_register_dot_readUserId)
        * [.readManufacturerDevId(options)](#vscp_dot_register_dot_readManufacturerDevId)
        * [.readManufacturerSubDevId(options)](#vscp_dot_register_dot_readManufacturerSubDevId)
        * [.readNicknameId(options)](#vscp_dot_register_dot_readNicknameId)
        * [.readSelectedPage(options)](#vscp_dot_register_dot_readSelectedPage)
        * [.readFirmwareVersion(options)](#vscp_dot_register_dot_readFirmwareVersion)
        * [.readBootloaderAlgorithm(options)](#vscp_dot_register_dot_readBootloaderAlgorithm)
        * [.readUsedPages(options)](#vscp_dot_register_dot_readUsedPages)
        * [.readStdDevFamCode(options)](#vscp_dot_register_dot_readStdDevFamCode)
        * [.readStdDevType(options)](#vscp_dot_register_dot_readStdDevType)
        * [.readGUID(options)](#vscp_dot_register_dot_readGUID)
        * [.readMdfUrl(options)](#vscp_dot_register_dot_readMdfUrl)
    * [.rest](#vscp_dot_rest) : `object`
        * [.Client](#vscp_dot_rest_dot_Client)
            * [new vscp.rest.Client(config)](#new_vscp_dot_rest_dot_Client_new)
            * [.baseUrl](#vscp_dot_rest_dot_Client_plus_baseUrl) : `string`
            * [.pathPrefix](#vscp_dot_rest_dot_Client_plus_pathPrefix) : `string`
            * [.apiVersion](#vscp_dot_rest_dot_Client_plus_apiVersion) : `string`
            * [.sessionKey](#vscp_dot_rest_dot_Client_plus_sessionKey) : `string`
            * [.openSession(options)](#vscp_dot_rest_dot_Client_plus_openSession) ⇒ `object`
            * [.closeSession([options])](#vscp_dot_rest_dot_Client_plus_closeSession) ⇒ `object`
            * [.getStatus([options])](#vscp_dot_rest_dot_Client_plus_getStatus) ⇒ `object`
            * [.sendEvent(options)](#vscp_dot_rest_dot_Client_plus_sendEvent) ⇒ `object`
            * [.readEvent([options])](#vscp_dot_rest_dot_Client_plus_readEvent) ⇒ `object`
            * [.setFilter(options)](#vscp_dot_rest_dot_Client_plus_setFilter) ⇒ `object`
            * [.clearQueue([options])](#vscp_dot_rest_dot_Client_plus_clearQueue) ⇒ `object`
            * [.createVar(options)](#vscp_dot_rest_dot_Client_plus_createVar) ⇒ `object`
            * [.readVar(options)](#vscp_dot_rest_dot_Client_plus_readVar) ⇒ `object`
            * [.writeVar(options)](#vscp_dot_rest_dot_Client_plus_writeVar) ⇒ `object`
            * [.removeVar(options)](#vscp_dot_rest_dot_Client_plus_removeVar) ⇒ `object`
            * [.listVar(options)](#vscp_dot_rest_dot_Client_plus_listVar) ⇒ `object`
    * [.service](#vscp_dot_service) : `object`
        * [.Container](#vscp_dot_service_dot_Container)
            * [new vscp.service.Container(options)](#new_vscp_dot_service_dot_Container_new)
            * [.client](#vscp_dot_service_dot_Container_plus_client) : [`Client`](#vscp.ws.Client)
            * [.name](#vscp_dot_service_dot_Container_plus_name) : `string`
            * [.data](#vscp_dot_service_dot_Container_plus_data) : `Array.&lt;object&gt;`
            * [.separator](#vscp_dot_service_dot_Container_plus_separator) : `Array.&lt;object&gt;`
            * [.create(options)](#vscp_dot_service_dot_Container_plus_create)
            * [.write(options)](#vscp_dot_service_dot_Container_plus_write)
            * [.read(options)](#vscp_dot_service_dot_Container_plus_read)
        * [.timeout](#vscp_dot_service_dot_timeout) : `number`
        * [.whoIsThere(options)](#vscp_dot_service_dot_whoIsThere)
        * [.scan(options)](#vscp_dot_service_dot_scan)
    * [.widget](#vscp_dot_widget) : `object`
        * [.Button](#vscp_dot_widget_dot_Button)
            * [new vscp.widget.Button(options)](#new_vscp_dot_widget_dot_Button_new)
            * [.draw()](#vscp_dot_widget_dot_Button_plus_draw)
            * [.setEnabled(value)](#vscp_dot_widget_dot_Button_plus_setEnabled)
        * [.Thermometer](#vscp_dot_widget_dot_Thermometer)
            * [new vscp.widget.Thermometer(options)](#new_vscp_dot_widget_dot_Thermometer_new)
            * [.draw()](#vscp_dot_widget_dot_Thermometer_plus_draw)
            * [.setEnabled(value)](#vscp_dot_widget_dot_Thermometer_plus_setEnabled)
        * [.generateUUID()](#vscp_dot_widget_dot_generateUUID) ⇒ `string`
        * [.Image(options)](#vscp_dot_widget_dot_Image)
    * [.wizard](#vscp_dot_wizard) : `object`
        * [.MessageBox](#vscp_dot_wizard_dot_MessageBox)
            * [new vscp.wizard.MessageBox(options)](#new_vscp_dot_wizard_dot_MessageBox_new)
            * [.func](#vscp_dot_wizard_dot_MessageBox_plus_func) : `string`
            * [.head](#vscp_dot_wizard_dot_MessageBox_plus_head) : `string`
            * [.description](#vscp_dot_wizard_dot_MessageBox_plus_description) : `string`
            * [.variableType](#vscp_dot_wizard_dot_MessageBox_plus_variableType) : `string`
            * [.variableName](#vscp_dot_wizard_dot_MessageBox_plus_variableName) : `string`
            * [.variableValue](#vscp_dot_wizard_dot_MessageBox_plus_variableValue) : `string`
            * [.parse($messageBox)](#vscp_dot_wizard_dot_MessageBox_plus_parse)
        * [.WriteBitInReg](#vscp_dot_wizard_dot_WriteBitInReg)
            * [new vscp.wizard.WriteBitInReg(options)](#new_vscp_dot_wizard_dot_WriteBitInReg_new)
            * [.pos](#vscp_dot_wizard_dot_WriteBitInReg_plus_pos) : `number`
            * [.page](#vscp_dot_wizard_dot_WriteBitInReg_plus_page) : `number`
            * [.offset](#vscp_dot_wizard_dot_WriteBitInReg_plus_offset) : `number`
            * [.width](#vscp_dot_wizard_dot_WriteBitInReg_plus_width) : `number`
            * [.value](#vscp_dot_wizard_dot_WriteBitInReg_plus_value) : `number`
            * [.variableName](#vscp_dot_wizard_dot_WriteBitInReg_plus_variableName) : `string`
            * [.parse(writeBitInReg)](#vscp_dot_wizard_dot_WriteBitInReg_plus_parse)
        * [.WriteBitInAbstraction](#vscp_dot_wizard_dot_WriteBitInAbstraction)
            * [new vscp.wizard.WriteBitInAbstraction(options)](#new_vscp_dot_wizard_dot_WriteBitInAbstraction_new)
            * [.id](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_id) : `string`
            * [.pos](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_pos) : `number`
            * [.width](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_width) : `number`
            * [.value](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_value) : `number`
            * [.variableName](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_variableName) : `string`
            * [.parse($writeBitInAbstraction)](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_parse)
        * [.WriteRegister](#vscp_dot_wizard_dot_WriteRegister)
            * [new vscp.wizard.WriteRegister(options)](#new_vscp_dot_wizard_dot_WriteRegister_new)
            * [.page](#vscp_dot_wizard_dot_WriteRegister_plus_page) : `number`
            * [.offset](#vscp_dot_wizard_dot_WriteRegister_plus_offset) : `number`
            * [.value](#vscp_dot_wizard_dot_WriteRegister_plus_value) : `number`
            * [.variableName](#vscp_dot_wizard_dot_WriteRegister_plus_variableName) : `string`
            * [.parse($writeRegister)](#vscp_dot_wizard_dot_WriteRegister_plus_parse)
        * [.WriteAbstraction](#vscp_dot_wizard_dot_WriteAbstraction)
            * [new vscp.wizard.WriteAbstraction(options)](#new_vscp_dot_wizard_dot_WriteAbstraction_new)
            * [.id](#vscp_dot_wizard_dot_WriteAbstraction_plus_id) : `string`
            * [.value](#vscp_dot_wizard_dot_WriteAbstraction_plus_value) : `number`
            * [.variableName](#vscp_dot_wizard_dot_WriteAbstraction_plus_variableName) : `number`
            * [.parse($writeAbstraction)](#vscp_dot_wizard_dot_WriteAbstraction_plus_parse)
        * [.Recipe](#vscp_dot_wizard_dot_Recipe)
            * [new vscp.wizard.Recipe(options)](#new_vscp_dot_wizard_dot_Recipe_new)
            * [.name](#vscp_dot_wizard_dot_Recipe_plus_name) : `string`
            * [.description](#vscp_dot_wizard_dot_Recipe_plus_description) : `string`
            * [.writeBitInRegs](#vscp_dot_wizard_dot_Recipe_plus_writeBitInRegs) : [`Array.&lt;WriteBitInReg&gt;`](#vscp.wizard.WriteBitInReg)
            * [.writeBitInAbstractions](#vscp_dot_wizard_dot_Recipe_plus_writeBitInAbstractions) : `Array.&lt;vscp.wizard.WriteBitAbstractions&gt;`
            * [.writeRegisters](#vscp_dot_wizard_dot_Recipe_plus_writeRegisters) : [`Array.&lt;WriteRegister&gt;`](#vscp.wizard.WriteRegister)
            * [.writeAbstractions](#vscp_dot_wizard_dot_Recipe_plus_writeAbstractions) : [`Array.&lt;WriteAbstraction&gt;`](#vscp.wizard.WriteAbstraction)
            * [.messageBoxes](#vscp_dot_wizard_dot_Recipe_plus_messageBoxes) : [`Array.&lt;MessageBox&gt;`](#vscp.wizard.MessageBox)
            * [.mdf](#vscp_dot_wizard_dot_Recipe_plus_mdf) : `object`
            * [.parse($recipe)](#vscp_dot_wizard_dot_Recipe_plus_parse)
            * [.write(options)](#vscp_dot_wizard_dot_Recipe_plus_write)
        * [.getRecipes(options)](#vscp_dot_wizard_dot_getRecipes) ⇒ [`Array.&lt;Recipe&gt;`](#vscp.wizard.Recipe)
    * [.ws](#vscp_dot_ws) : `object`
        * [.Client](#vscp_dot_ws_dot_Client)
            * [new vscp.ws.Client()](#new_vscp_dot_ws_dot_Client_new)
            * [.socket](#vscp_dot_ws_dot_Client_plus_socket) : `object`
            * [.url](#vscp_dot_ws_dot_Client_plus_url) : `string`
            * [.userName](#vscp_dot_ws_dot_Client_plus_userName) : `string`
            * [.userId](#vscp_dot_ws_dot_Client_plus_userId) : `number`
            * [.userFullname](#vscp_dot_ws_dot_Client_plus_userFullname) : `string`
            * [.userRights](#vscp_dot_ws_dot_Client_plus_userRights) : `array`
            * [.userRemotes](#vscp_dot_ws_dot_Client_plus_userRemotes) : `array`
            * [.userEvents](#vscp_dot_ws_dot_Client_plus_userEvents) : `array`
            * [.userNote](#vscp_dot_ws_dot_Client_plus_userNote) : `string`
            * [.password](#vscp_dot_ws_dot_Client_plus_password) : `string`
            * [.vscpkey](#vscp_dot_ws_dot_Client_plus_vscpkey) : `string`
            * [.onConnError](#vscp_dot_ws_dot_Client_plus_onConnError) : `function`
            * [.onMessage](#vscp_dot_ws_dot_Client_plus_onMessage) : `function`
            * [.onEvent](#vscp_dot_ws_dot_Client_plus_onEvent) : `Array.&lt;function()&gt;`
            * [.onVariable](#vscp_dot_ws_dot_Client_plus_onVariable) : `function`
            * [.onTableRow](#vscp_dot_ws_dot_Client_plus_onTableRow) : `function`
            * [.state](#vscp_dot_ws_dot_Client_plus_state) : `number`
            * [.substate](#vscp_dot_ws_dot_Client_plus_substate) : `number`
            * [.states](#vscp_dot_ws_dot_Client_plus_states) : `enum`
            * [.substates](#vscp_dot_ws_dot_Client_plus_substates) : `enum`
            * [.addEventListener(eventListener)](#vscp_dot_ws_dot_Client_plus_addEventListener)
            * [.removeEventListener(eventListener)](#vscp_dot_ws_dot_Client_plus_removeEventListener)
            * [.getAuthHash(userName, password, str_iv)](#vscp_dot_ws_dot_Client_plus_getAuthHash) ⇒ `string`
            * [.onWebSocketOpen()](#vscp_dot_ws_dot_Client_plus_onWebSocketOpen)
            * [.onWebSocketClose()](#vscp_dot_ws_dot_Client_plus_onWebSocketClose)
            * [.onWebSocketMessage(msg)](#vscp_dot_ws_dot_Client_plus_onWebSocketMessage)
            * [.connect(options)](#vscp_dot_ws_dot_Client_plus_connect) ⇒ `object`
            * [.disconnect(options)](#vscp_dot_ws_dot_Client_plus_disconnect) ⇒ `object`
            * [.start(options)](#vscp_dot_ws_dot_Client_plus_start) ⇒ `object`
            * [.stop(options)](#vscp_dot_ws_dot_Client_plus_stop) ⇒ `object`
            * [.clearQueue(options)](#vscp_dot_ws_dot_Client_plus_clearQueue) ⇒ `object`
            * [.sendEvent(options)](#vscp_dot_ws_dot_Client_plus_sendEvent) ⇒ `object`
            * [.setFilter(options)](#vscp_dot_ws_dot_Client_plus_setFilter) ⇒ `object`
            * [.createVar(options)](#vscp_dot_ws_dot_Client_plus_createVar) ⇒ `object`
            * [.readVar(options)](#vscp_dot_ws_dot_Client_plus_readVar) ⇒ `object`
            * [.writeVar(options)](#vscp_dot_ws_dot_Client_plus_writeVar) ⇒ `object`
            * [.resetVar(options)](#vscp_dot_ws_dot_Client_plus_resetVar) ⇒ `object`
            * [.removeVar(options)](#vscp_dot_ws_dot_Client_plus_removeVar) ⇒ `object`
            * [.lengthVar(options)](#vscp_dot_ws_dot_Client_plus_lengthVar) ⇒ `object`
            * [.lastChangeVar(options)](#vscp_dot_ws_dot_Client_plus_lastChangeVar) ⇒ `object`
            * [.listVar(options)](#vscp_dot_ws_dot_Client_plus_listVar) ⇒ `object`
            * [.readTable(options)](#vscp_dot_ws_dot_Client_plus_readTable) ⇒ `object`
    * [.getVarTypeName(n)](#vscp_dot_getVarTypeName) ⇒ `string`
    * [.getVarTypeNumerical(str)](#vscp_dot_getVarTypeNumerical) ⇒ `number`
    * [.getEditorModeFromType(n)](#vscp_dot_getEditorModeFromType) ⇒ `string`
    * [.b64EncodeUnicode(str)](#vscp_dot_b64EncodeUnicode) ⇒ `string`
    * [.b64DecodeUnicode(str)](#vscp_dot_b64DecodeUnicode) ⇒ `string`
    * [.isBase64Type(type)](#vscp_dot_isBase64Type) ⇒ `bool`
    * [.decodeValueIfBase64(type, value)](#vscp_dot_decodeValueIfBase64) ⇒ `string`
    * [.encodeValueIfBase64(type, value)](#vscp_dot_encodeValueIfBase64) ⇒ `string`

<a id="vscp_dot_Event"></a>

### vscp.Event
**Kind**: static class of [`vscp`](#vscp)  

* [.Event](#vscp_dot_Event)
    * [new vscp.Event(options)](#new_vscp_dot_Event_new)
    * [.vscpHead](#vscp_dot_Event_plus_vscpHead) : `number`
    * [.vscpClass](#vscp_dot_Event_plus_vscpClass) : `number`
    * [.vscpType](#vscp_dot_Event_plus_vscpType) : `number`
    * [.vscpObId](#vscp_dot_Event_plus_vscpObId) : `number`
    * [.vscpTimeStamp](#vscp_dot_Event_plus_vscpTimeStamp) : `number`
    * [.vscpDateTime](#vscp_dot_Event_plus_vscpDateTime) : `date`
    * [.vscpGuid](#vscp_dot_Event_plus_vscpGuid) : `string`
    * [.vscpData](#vscp_dot_Event_plus_vscpData) : `Array.&lt;number&gt;` \| `string`
    * [.setIPV6Addr()](#vscp_dot_Event_plus_setIPV6Addr)
    * [.isIPV6Addr()](#vscp_dot_Event_plus_isIPV6Addr) ⇒ `boolean`
    * [.setDumbNode()](#vscp_dot_Event_plus_setDumbNode)
    * [.isDumbNode()](#vscp_dot_Event_plus_isDumbNode) ⇒ `boolean`
    * [.setPriority(priority)](#vscp_dot_Event_plus_setPriority)
    * [.getPriority()](#vscp_dot_Event_plus_getPriority) ⇒ `number`
    * [.setHardCodedAddr()](#vscp_dot_Event_plus_setHardCodedAddr)
    * [.isHardCodedAddr()](#vscp_dot_Event_plus_isHardCodedAddr) ⇒ `boolean`
    * [.setDoNotCalcCRC()](#vscp_dot_Event_plus_setDoNotCalcCRC)
    * [.isDoNotCalcCRC()](#vscp_dot_Event_plus_isDoNotCalcCRC) ⇒ `boolean`
    * [.getText()](#vscp_dot_Event_plus_getText) ⇒ `string`

<a id="new_vscp_dot_Event_new"></a>

#### new vscp.Event(options)
VSCP event.


| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.vscpHead | `number` | Event head |
| options.guidIsIpV6Addr | `boolean` | GUID is a IPv6 address |
| options.dumpNode | `boolean` | Node is a dump node |
| options.vscpPriority | `number` | Priority |
| options.vscpHardCoded | `boolean` | Hard coded node id |
| options.vscpCalcCRC | `boolean` | Calculate CRC |
| options.vscpClass | `number` | VSCP class |
| options.vscpType | `number` | VSCP type |
| options.vscpObId | `number` | Object id |
| options.vscpTimeStamp | `number` | Timestamp |
| options.vscpGuid | `string` | GUID string |
| options.vscpData | `Array.&lt;number&gt;` \| `string` | Event data |

<a id="vscp_dot_Event_plus_vscpHead"></a>

#### event.vscpHead : `number`
VSCP event head

**Kind**: instance property of [`Event`](#vscp.Event)  
<a id="vscp_dot_Event_plus_vscpClass"></a>

#### event.vscpClass : `number`
VSCP class

**Kind**: instance property of [`Event`](#vscp.Event)  
<a id="vscp_dot_Event_plus_vscpType"></a>

#### event.vscpType : `number`
VSCP type

**Kind**: instance property of [`Event`](#vscp.Event)  
<a id="vscp_dot_Event_plus_vscpObId"></a>

#### event.vscpObId : `number`
VSCP object id used by driver for channel info and etc.

**Kind**: instance property of [`Event`](#vscp.Event)  
<a id="vscp_dot_Event_plus_vscpTimeStamp"></a>

#### event.vscpTimeStamp : `number`
Relative timestamp for package in us

**Kind**: instance property of [`Event`](#vscp.Event)  
<a id="vscp_dot_Event_plus_vscpDateTime"></a>

#### event.vscpDateTime : `date`
Date/Time for package

**Kind**: instance property of [`Event`](#vscp.Event)  
<a id="vscp_dot_Event_plus_vscpGuid"></a>

#### event.vscpGuid : `string`
Node global unique id LSB(15) -> MSB(0)

**Kind**: instance property of [`Event`](#vscp.Event)  
<a id="vscp_dot_Event_plus_vscpData"></a>

#### event.vscpData : `Array.&lt;number&gt;` \| `string`
Data array or string

**Kind**: instance property of [`Event`](#vscp.Event)  
<a id="vscp_dot_Event_plus_setIPV6Addr"></a>

#### event.setIPV6Addr()
Set GUID as IP v6 address

**Kind**: instance method of [`Event`](#vscp.Event)  
<a id="vscp_dot_Event_plus_isIPV6Addr"></a>

#### event.isIPV6Addr() ⇒ `boolean`
Is GUID a IP v6 address or not?

**Kind**: instance method of [`Event`](#vscp.Event)  
**Returns**: `boolean` - If the GUID is a IP v6 address, it will return true, otherwise false.  
<a id="vscp_dot_Event_plus_setDumbNode"></a>

#### event.setDumbNode()
Set dumb node. No MDF, registers, nothing.

**Kind**: instance method of [`Event`](#vscp.Event)  
<a id="vscp_dot_Event_plus_isDumbNode"></a>

#### event.isDumbNode() ⇒ `boolean`
Is node a dump node or not?
Dumb node means no MDF, registers, nothing.

**Kind**: instance method of [`Event`](#vscp.Event)  
**Returns**: `boolean` - If the node is a dumb node, it will return true, otherwise false.  
<a id="vscp_dot_Event_plus_setPriority"></a>

#### event.setPriority(priority)
Set the VSCP event priority.

**Kind**: instance method of [`Event`](#vscp.Event)  

| Param | Type | Description |
| --- | --- | --- |
| priority | `number` | Priority |

<a id="vscp_dot_Event_plus_getPriority"></a>

#### event.getPriority() ⇒ `number`
Get the VSCP event priority.

**Kind**: instance method of [`Event`](#vscp.Event)  
**Returns**: `number` - Priority of the event.  
<a id="vscp_dot_Event_plus_setHardCodedAddr"></a>

#### event.setHardCodedAddr()
Set the node id of the event sender as hard coded?

**Kind**: instance method of [`Event`](#vscp.Event)  
<a id="vscp_dot_Event_plus_isHardCodedAddr"></a>

#### event.isHardCodedAddr() ⇒ `boolean`
Is the node id of the event sender hard coded or not?

**Kind**: instance method of [`Event`](#vscp.Event)  
**Returns**: `boolean` - If the node id is hard coded, it will return true, otherwise false.  
<a id="vscp_dot_Event_plus_setDoNotCalcCRC"></a>

#### event.setDoNotCalcCRC()
Set flag for no CRC calculation?

**Kind**: instance method of [`Event`](#vscp.Event)  
<a id="vscp_dot_Event_plus_isDoNotCalcCRC"></a>

#### event.isDoNotCalcCRC() ⇒ `boolean`
Is CRC calculated or not?

**Kind**: instance method of [`Event`](#vscp.Event)  
**Returns**: `boolean` - If nor CRC should be calculated true is returned.  
<a id="vscp_dot_Event_plus_getText"></a>

#### event.getText() ⇒ `string`
Get event as string.

**Kind**: instance method of [`Event`](#vscp.Event)  
**Returns**: `string` - Event as string  
<a id="vscp_dot_version"></a>

### vscp.version
VSCP core javascript library version

**Kind**: static property of [`vscp`](#vscp)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| major | `number` | Major version number |
| minor | `number` | Minor version number |
| patch | `number` | Sub-minor version number |

<a id="vscp_dot_constants"></a>

### vscp.constants : `object`
VSCP constants

**Kind**: static namespace of [`vscp`](#vscp)  

* [.constants](#vscp_dot_constants) : `object`
    * [.classes](#vscp_dot_constants_dot_classes) : `enum`
    * [.types](#vscp_dot_constants_dot_types) : `enum`
    * [.priorities](#vscp_dot_constants_dot_priorities) : `enum`
    * [.varTypes](#vscp_dot_constants_dot_varTypes) : `enum`
    * [.varTypeNames](#vscp_dot_constants_dot_varTypeNames)

<a id="vscp_dot_constants_dot_classes"></a>

#### constants.classes : `enum`
VSCP classes

**Kind**: static enum of [`constants`](#vscp.constants)  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| CLASS1_PROTOCOL | `number` | <code>0</code> | 
| CLASS1_ALARM | `number` | <code>1</code> | 
| CLASS1_SECURITY | `number` | <code>2</code> | 
| CLASS1_MEASUREMENT | `number` | <code>10</code> | 
| CLASS1_DATA | `number` | <code>15</code> | 
| CLASS1_INFORMATION | `number` | <code>20</code> | 
| CLASS1_CONTROL | `number` | <code>30</code> | 
| CLASS1_MULTIMEDIA | `number` | <code>40</code> | 
| CLASS1_AOL | `number` | <code>50</code> | 
| CLASS1_MEASUREMENT64 | `number` | <code>60</code> | 
| CLASS1_MEASUREZONE | `number` | <code>65</code> | 
| CLASS1_MEASUREMENT32 | `number` | <code>70</code> | 
| CLASS1_SETVALUEZONE | `number` | <code>85</code> | 
| CLASS1_WEATHER | `number` | <code>90</code> | 
| CLASS1_WEATHER_FORECAST | `number` | <code>95</code> | 
| CLASS1_PHONE | `number` | <code>100</code> | 
| CLASS1_DISPLAY | `number` | <code>102</code> | 
| CLASS1_IR | `number` | <code>110</code> | 
| CLASS1_GNSS | `number` | <code>206</code> | 
| CLASS1_WIRELESS | `number` | <code>212</code> | 
| CLASS1_DIAGNOSTIC | `number` | <code>506</code> | 
| CLASS1_ERROR | `number` | <code>508</code> | 
| CLASS1_LOG | `number` | <code>509</code> | 
| CLASS1_LABORATORY | `number` | <code>510</code> | 
| CLASS1_LOCAL | `number` | <code>511</code> | 
| CLASS2_LEVEL1_PROTOCOL | `number` | <code>512</code> | 
| CLASS2_LEVEL1_ALARM | `number` | <code>513</code> | 
| CLASS2_LEVEL1_SECURITY | `number` | <code>514</code> | 
| CLASS2_LEVEL1_MEASUREMENT | `number` | <code>522</code> | 
| CLASS2_LEVEL1_DATA | `number` | <code>527</code> | 
| CLASS2_LEVEL1_INFORMATION1 | `number` | <code>532</code> | 
| CLASS2_LEVEL1_CONTROL | `number` | <code>542</code> | 
| CLASS2_LEVEL1_MULTIMEDIA | `number` | <code>552</code> | 
| CLASS2_LEVEL1_AOL | `number` | <code>562</code> | 
| CLASS2_LEVEL1_MEASUREMENT64 | `number` | <code>572</code> | 
| CLASS2_LEVEL1_MEASUREZONE | `number` | <code>577</code> | 
| CLASS2_LEVEL1_MEASUREMENT32 | `number` | <code>582</code> | 
| CLASS2_LEVEL1_SETVALUEZONE | `number` | <code>597</code> | 
| CLASS2_LEVEL1_WEATHER | `number` | <code>602</code> | 
| CLASS2_LEVEL1_WEATHERFORECAST | `number` | <code>607</code> | 
| CLASS2_LEVEL1_PHONE | `number` | <code>612</code> | 
| CLASS2_LEVEL1_DISPLAY | `number` | <code>614</code> | 
| CLASS2_LEVEL1_IR | `number` | <code>622</code> | 
| CLASS2_LEVEL1_GNSS | `number` | <code>718</code> | 
| CLASS2_LEVEL1_WIRELESS | `number` | <code>724</code> | 
| CLASS2_LEVEL1_DIAGNOSTIC | `number` | <code>1018</code> | 
| CLASS2_LEVEL1_ERROR | `number` | <code>1020</code> | 
| CLASS2_LEVEL1_LOG | `number` | <code>1021</code> | 
| CLASS2_LEVEL1_LABORATORY | `number` | <code>1022</code> | 
| CLASS2_LEVEL1_LOCAL | `number` | <code>1023</code> | 
| CLASS2_PROTOCOL | `number` | <code>1024</code> | 
| CLASS2_CONTROL | `number` | <code>1025</code> | 
| CLASS2_INFORMATION | `number` | <code>1026</code> | 
| CLASS2_TEXT2SPEECH | `number` | <code>1027</code> | 
| CLASS2_CUSTOM | `number` | <code>1029</code> | 
| CLASS2_DISPLAY | `number` | <code>1030</code> | 
| CLASS2_MEASUREMENT_STR | `number` | <code>1040</code> | 
| CLASS2_MEASUREMENT_FLOAT | `number` | <code>1060</code> | 
| CLASS2_VSCPD | `number` | <code>65535</code> | 

<a id="vscp_dot_constants_dot_types"></a>

#### constants.types : `enum`
VSCP class types

**Kind**: static enum of [`constants`](#vscp.constants)  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| VSCP_TYPE_UNDEFINED | `number` | <code>0</code> | 
| VSCP_TYPE_PROTOCOL_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_PROTOCOL_SEGCTRL_HEARTBEAT | `number` | <code>1</code> | 
| VSCP_TYPE_PROTOCOL_NEW_NODE_ONLINE | `number` | <code>2</code> | 
| VSCP_TYPE_PROTOCOL_PROBE_ACK | `number` | <code>3</code> | 
| VSCP_TYPE_PROTOCOL_RESERVED4 | `number` | <code>4</code> | 
| VSCP_TYPE_PROTOCOL_RESERVED5 | `number` | <code>5</code> | 
| VSCP_TYPE_PROTOCOL_SET_NICKNAME | `number` | <code>6</code> | 
| VSCP_TYPE_PROTOCOL_NICKNAME_ACCEPTED | `number` | <code>7</code> | 
| VSCP_TYPE_PROTOCOL_DROP_NICKNAME | `number` | <code>8</code> | 
| VSCP_TYPE_PROTOCOL_READ_REGISTER | `number` | <code>9</code> | 
| VSCP_TYPE_PROTOCOL_RW_RESPONSE | `number` | <code>10</code> | 
| VSCP_TYPE_PROTOCOL_WRITE_REGISTER | `number` | <code>11</code> | 
| VSCP_TYPE_PROTOCOL_ENTER_BOOT_LOADER | `number` | <code>12</code> | 
| VSCP_TYPE_PROTOCOL_ACK_BOOT_LOADER | `number` | <code>13</code> | 
| VSCP_TYPE_PROTOCOL_NACK_BOOT_LOADER | `number` | <code>14</code> | 
| VSCP_TYPE_PROTOCOL_START_BLOCK | `number` | <code>15</code> | 
| VSCP_TYPE_PROTOCOL_BLOCK_DATA | `number` | <code>16</code> | 
| VSCP_TYPE_PROTOCOL_BLOCK_DATA_ACK | `number` | <code>17</code> | 
| VSCP_TYPE_PROTOCOL_BLOCK_DATA_NACK | `number` | <code>18</code> | 
| VSCP_TYPE_PROTOCOL_PROGRAM_BLOCK_DATA | `number` | <code>19</code> | 
| VSCP_TYPE_PROTOCOL_PROGRAM_BLOCK_DATA_ACK | `number` | <code>20</code> | 
| VSCP_TYPE_PROTOCOL_PROGRAM_BLOCK_DATA_NACK | `number` | <code>21</code> | 
| VSCP_TYPE_PROTOCOL_ACTIVATE_NEW_IMAGE | `number` | <code>22</code> | 
| VSCP_TYPE_PROTOCOL_RESET_DEVICE | `number` | <code>23</code> | 
| VSCP_TYPE_PROTOCOL_PAGE_READ | `number` | <code>24</code> | 
| VSCP_TYPE_PROTOCOL_PAGE_WRITE | `number` | <code>25</code> | 
| VSCP_TYPE_PROTOCOL_RW_PAGE_RESPONSE | `number` | <code>26</code> | 
| VSCP_TYPE_PROTOCOL_HIGH_END_SERVER_PROBE | `number` | <code>27</code> | 
| VSCP_TYPE_PROTOCOL_HIGH_END_SERVER_RESPONSE | `number` | <code>28</code> | 
| VSCP_TYPE_PROTOCOL_INCREMENT_REGISTER | `number` | <code>29</code> | 
| VSCP_TYPE_PROTOCOL_DECREMENT_REGISTER | `number` | <code>30</code> | 
| VSCP_TYPE_PROTOCOL_WHO_IS_THERE | `number` | <code>31</code> | 
| VSCP_TYPE_PROTOCOL_WHO_IS_THERE_RESPONSE | `number` | <code>32</code> | 
| VSCP_TYPE_PROTOCOL_GET_MATRIX_INFO | `number` | <code>33</code> | 
| VSCP_TYPE_PROTOCOL_GET_MATRIX_INFO_RESPONSE | `number` | <code>34</code> | 
| VSCP_TYPE_PROTOCOL_GET_EMBEDDED_MDF | `number` | <code>35</code> | 
| VSCP_TYPE_PROTOCOL_GET_EMBEDDED_MDF_RESPONSE | `number` | <code>36</code> | 
| VSCP_TYPE_PROTOCOL_EXTENDED_PAGE_READ | `number` | <code>37</code> | 
| VSCP_TYPE_PROTOCOL_EXTENDED_PAGE_WRITE | `number` | <code>38</code> | 
| VSCP_TYPE_PROTOCOL_EXTENDED_PAGE_RESPONSE | `number` | <code>39</code> | 
| VSCP_TYPE_PROTOCOL_GET_EVENT_INTEREST | `number` | <code>40</code> | 
| VSCP_TYPE_PROTOCOL_GET_EVENT_INTEREST_RESPONSE | `number` | <code>41</code> | 
| VSCP_TYPE_PROTOCOL_ACTIVATE_NEW_IMAGE_ACK | `number` | <code>48</code> | 
| VSCP_TYPE_PROTOCOL_ACTIVATE_NEW_IMAGE_NACK | `number` | <code>49</code> | 
| VSCP_TYPE_PROTOCOL_START_BLOCK_ACK | `number` | <code>50</code> | 
| VSCP_TYPE_PROTOCOL_START_BLOCK_NACK | `number` | <code>51</code> | 
| VSCP_TYPE_ALARM_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_ALARM_WARNING | `number` | <code>1</code> | 
| VSCP_TYPE_ALARM_ALARM | `number` | <code>2</code> | 
| VSCP_TYPE_ALARM_SOUND | `number` | <code>3</code> | 
| VSCP_TYPE_ALARM_LIGHT | `number` | <code>4</code> | 
| VSCP_TYPE_ALARM_POWER | `number` | <code>5</code> | 
| VSCP_TYPE_ALARM_EMERGENCY_STOP | `number` | <code>6</code> | 
| VSCP_TYPE_ALARM_EMERGENCY_PAUSE | `number` | <code>7</code> | 
| VSCP_TYPE_ALARM_EMERGENCY_RESET | `number` | <code>8</code> | 
| VSCP_TYPE_ALARM_EMERGENCY_RESUME | `number` | <code>9</code> | 
| VSCP_TYPE_ALARM_ARM | `number` | <code>10</code> | 
| VSCP_TYPE_ALARM_DISARM | `number` | <code>11</code> | 
| VSCP_TYPE_SECURITY_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_SECURITY_MOTION | `number` | <code>1</code> | 
| VSCP_TYPE_SECURITY_GLASS_BREAK | `number` | <code>2</code> | 
| VSCP_TYPE_SECURITY_BEAM_BREAK | `number` | <code>3</code> | 
| VSCP_TYPE_SECURITY_SENSOR_TAMPER | `number` | <code>4</code> | 
| VSCP_TYPE_SECURITY_SHOCK_SENSOR | `number` | <code>5</code> | 
| VSCP_TYPE_SECURITY_SMOKE_SENSOR | `number` | <code>6</code> | 
| VSCP_TYPE_SECURITY_HEAT_SENSOR | `number` | <code>7</code> | 
| VSCP_TYPE_SECURITY_PANIC_SWITCH | `number` | <code>8</code> | 
| VSCP_TYPE_SECURITY_DOOR_OPEN | `number` | <code>9</code> | 
| VSCP_TYPE_SECURITY_WINDOW_OPEN | `number` | <code>10</code> | 
| VSCP_TYPE_SECURITY_CO_SENSOR | `number` | <code>11</code> | 
| VSCP_TYPE_SECURITY_FROST_DETECTED | `number` | <code>12</code> | 
| VSCP_TYPE_SECURITY_FLAME_DETECTED | `number` | <code>13</code> | 
| VSCP_TYPE_SECURITY_OXYGEN_LOW | `number` | <code>14</code> | 
| VSCP_TYPE_SECURITY_WEIGHT_DETECTED | `number` | <code>15</code> | 
| VSCP_TYPE_SECURITY_WATER_DETECTED | `number` | <code>16</code> | 
| VSCP_TYPE_SECURITY_CONDENSATION_DETECTED | `number` | <code>17</code> | 
| VSCP_TYPE_SECURITY_SOUND_DETECTED | `number` | <code>18</code> | 
| VSCP_TYPE_SECURITY_HARMFUL_SOUND_LEVEL | `number` | <code>19</code> | 
| VSCP_TYPE_SECURITY_TAMPER | `number` | <code>20</code> | 
| VSCP_TYPE_MEASUREMENT_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_MEASUREMENT_COUNT | `number` | <code>1</code> | 
| VSCP_TYPE_MEASUREMENT_LENGTH | `number` | <code>2</code> | 
| VSCP_TYPE_MEASUREMENT_MASS | `number` | <code>3</code> | 
| VSCP_TYPE_MEASUREMENT_TIME | `number` | <code>4</code> | 
| VSCP_TYPE_MEASUREMENT_ELECTRIC_CURRENT | `number` | <code>5</code> | 
| VSCP_TYPE_MEASUREMENT_TEMPERATURE | `number` | <code>6</code> | 
| VSCP_TYPE_MEASUREMENT_AMOUNT_OF_SUBSTANCE | `number` | <code>7</code> | 
| VSCP_TYPE_MEASUREMENT_INTENSITY_OF_LIGHT | `number` | <code>8</code> | 
| VSCP_TYPE_MEASUREMENT_FREQUENCY | `number` | <code>9</code> | 
| VSCP_TYPE_MEASUREMENT_RADIOACTIVITY | `number` | <code>10</code> | 
| VSCP_TYPE_MEASUREMENT_FORCE | `number` | <code>11</code> | 
| VSCP_TYPE_MEASUREMENT_PRESSURE | `number` | <code>12</code> | 
| VSCP_TYPE_MEASUREMENT_ENERGY | `number` | <code>13</code> | 
| VSCP_TYPE_MEASUREMENT_POWER | `number` | <code>14</code> | 
| VSCP_TYPE_MEASUREMENT_ELECTRICAL_CHARGE | `number` | <code>15</code> | 
| VSCP_TYPE_MEASUREMENT_ELECTRICAL_POTENTIAL | `number` | <code>16</code> | 
| VSCP_TYPE_MEASUREMENT_ELECTRICAL_CAPACITANCE | `number` | <code>17</code> | 
| VSCP_TYPE_MEASUREMENT_ELECTRICAL_RESISTANCE | `number` | <code>18</code> | 
| VSCP_TYPE_MEASUREMENT_ELECTRICAL_CONDUCTANCE | `number` | <code>19</code> | 
| VSCP_TYPE_MEASUREMENT_MAGNETIC_FIELD_STRENGTH | `number` | <code>20</code> | 
| VSCP_TYPE_MEASUREMENT_MAGNETIC_FLUX | `number` | <code>21</code> | 
| VSCP_TYPE_MEASUREMENT_MAGNETIC_FLUX_DENSITY | `number` | <code>22</code> | 
| VSCP_TYPE_MEASUREMENT_INDUCTANCE | `number` | <code>23</code> | 
| VSCP_TYPE_MEASUREMENT_FLUX_OF_LIGHT | `number` | <code>24</code> | 
| VSCP_TYPE_MEASUREMENT_ILLUMINANCE | `number` | <code>25</code> | 
| VSCP_TYPE_MEASUREMENT_RADIATION_DOSE | `number` | <code>26</code> | 
| VSCP_TYPE_MEASUREMENT_CATALYTIC_ACITIVITY | `number` | <code>27</code> | 
| VSCP_TYPE_MEASUREMENT_VOLUME | `number` | <code>28</code> | 
| VSCP_TYPE_MEASUREMENT_SOUND_INTENSITY | `number` | <code>29</code> | 
| VSCP_TYPE_MEASUREMENT_ANGLE | `number` | <code>30</code> | 
| VSCP_TYPE_MEASUREMENT_POSITION | `number` | <code>31</code> | 
| VSCP_TYPE_MEASUREMENT_SPEED | `number` | <code>32</code> | 
| VSCP_TYPE_MEASUREMENT_ACCELERATION | `number` | <code>33</code> | 
| VSCP_TYPE_MEASUREMENT_TENSION | `number` | <code>34</code> | 
| VSCP_TYPE_MEASUREMENT_HUMIDITY | `number` | <code>35</code> | 
| VSCP_TYPE_MEASUREMENT_FLOW | `number` | <code>36</code> | 
| VSCP_TYPE_MEASUREMENT_THERMAL_RESISTANCE | `number` | <code>37</code> | 
| VSCP_TYPE_MEASUREMENT_REFRACTIVE_POWER | `number` | <code>38</code> | 
| VSCP_TYPE_MEASUREMENT_DYNAMIC_VISCOSITY | `number` | <code>39</code> | 
| VSCP_TYPE_MEASUREMENT_SOUND_IMPEDANCE | `number` | <code>40</code> | 
| VSCP_TYPE_MEASUREMENT_SOUND_RESISTANCE | `number` | <code>41</code> | 
| VSCP_TYPE_MEASUREMENT_ELECTRIC_ELASTANCE | `number` | <code>42</code> | 
| VSCP_TYPE_MEASUREMENT_LUMINOUS_ENERGY | `number` | <code>43</code> | 
| VSCP_TYPE_MEASUREMENT_LUMINANCE | `number` | <code>44</code> | 
| VSCP_TYPE_MEASUREMENT_CHEMICAL_CONCENTRATION | `number` | <code>45</code> | 
| VSCP_TYPE_MEASUREMENT_RESERVED46 | `number` | <code>46</code> | 
| VSCP_TYPE_MEASUREMENT_DOSE_EQVIVALENT | `number` | <code>47</code> | 
| VSCP_TYPE_MEASUREMENT_RESERVED48 | `number` | <code>48</code> | 
| VSCP_TYPE_MEASUREMENT_DEWPOINT | `number` | <code>49</code> | 
| VSCP_TYPE_MEASUREMENT_RELATIVE_LEVEL | `number` | <code>50</code> | 
| VSCP_TYPE_MEASUREMENT_ALTITUDE | `number` | <code>51</code> | 
| VSCP_TYPE_MEASUREMENT_AREA | `number` | <code>52</code> | 
| VSCP_TYPE_MEASUREMENT_RADIANT_INTENSITY | `number` | <code>53</code> | 
| VSCP_TYPE_MEASUREMENT_RADIANCE | `number` | <code>54</code> | 
| VSCP_TYPE_MEASUREMENT_IRRADIANCE | `number` | <code>55</code> | 
| VSCP_TYPE_MEASUREMENT_SPECTRAL_RADIANCE | `number` | <code>56</code> | 
| VSCP_TYPE_MEASUREMENT_SPECTRAL_IRRADIANCE | `number` | <code>57</code> | 
| VSCP_TYPE_MEASUREMENT_SOUND_PRESSURE | `number` | <code>58</code> | 
| VSCP_TYPE_MEASUREMENT_SOUND_DENSITY | `number` | <code>59</code> | 
| VSCP_TYPE_MEASUREMENT_SOUND_LEVEL | `number` | <code>60</code> | 
| VSCP_TYPE_DATA_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_DATA_IO | `number` | <code>1</code> | 
| VSCP_TYPE_DATA_AD | `number` | <code>2</code> | 
| VSCP_TYPE_DATA_DA | `number` | <code>3</code> | 
| VSCP_TYPE_DATA_RELATIVE_STRENGTH | `number` | <code>4</code> | 
| VSCP_TYPE_DATA_SIGNAL_LEVEL | `number` | <code>5</code> | 
| VSCP_TYPE_DATA_SIGNAL_QUALITY | `number` | <code>6</code> | 
| VSCP_TYPE_DATA_COUNT | `number` | <code>7</code> | 
| VSCP_TYPE_INFORMATION_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_INFORMATION_BUTTON | `number` | <code>1</code> | 
| VSCP_TYPE_INFORMATION_MOUSE | `number` | <code>2</code> | 
| VSCP_TYPE_INFORMATION_ON | `number` | <code>3</code> | 
| VSCP_TYPE_INFORMATION_OFF | `number` | <code>4</code> | 
| VSCP_TYPE_INFORMATION_ALIVE | `number` | <code>5</code> | 
| VSCP_TYPE_INFORMATION_TERMINATING | `number` | <code>6</code> | 
| VSCP_TYPE_INFORMATION_OPENED | `number` | <code>7</code> | 
| VSCP_TYPE_INFORMATION_CLOSED | `number` | <code>8</code> | 
| VSCP_TYPE_INFORMATION_NODE_HEARTBEAT | `number` | <code>9</code> | 
| VSCP_TYPE_INFORMATION_BELOW_LIMIT | `number` | <code>10</code> | 
| VSCP_TYPE_INFORMATION_ABOVE_LIMIT | `number` | <code>11</code> | 
| VSCP_TYPE_INFORMATION_PULSE | `number` | <code>12</code> | 
| VSCP_TYPE_INFORMATION_ERROR | `number` | <code>13</code> | 
| VSCP_TYPE_INFORMATION_RESUMED | `number` | <code>14</code> | 
| VSCP_TYPE_INFORMATION_PAUSED | `number` | <code>15</code> | 
| VSCP_TYPE_INFORMATION_SLEEP | `number` | <code>16</code> | 
| VSCP_TYPE_INFORMATION_GOOD_MORNING | `number` | <code>17</code> | 
| VSCP_TYPE_INFORMATION_GOOD_DAY | `number` | <code>18</code> | 
| VSCP_TYPE_INFORMATION_GOOD_AFTERNOON | `number` | <code>19</code> | 
| VSCP_TYPE_INFORMATION_GOOD_EVENING | `number` | <code>20</code> | 
| VSCP_TYPE_INFORMATION_GOOD_NIGHT | `number` | <code>21</code> | 
| VSCP_TYPE_INFORMATION_SEE_YOU_SOON | `number` | <code>22</code> | 
| VSCP_TYPE_INFORMATION_GOODBYE | `number` | <code>23</code> | 
| VSCP_TYPE_INFORMATION_STOP | `number` | <code>24</code> | 
| VSCP_TYPE_INFORMATION_START | `number` | <code>25</code> | 
| VSCP_TYPE_INFORMATION_RESET_COMPLETED | `number` | <code>26</code> | 
| VSCP_TYPE_INFORMATION_INTERRUPTED | `number` | <code>27</code> | 
| VSCP_TYPE_INFORMATION_PREPARING_TO_SLEEP | `number` | <code>28</code> | 
| VSCP_TYPE_INFORMATION_WOKEN_UP | `number` | <code>29</code> | 
| VSCP_TYPE_INFORMATION_DUSK | `number` | <code>30</code> | 
| VSCP_TYPE_INFORMATION_DAWN | `number` | <code>31</code> | 
| VSCP_TYPE_INFORMATION_ACTIVE | `number` | <code>32</code> | 
| VSCP_TYPE_INFORMATION_INACTIVE | `number` | <code>33</code> | 
| VSCP_TYPE_INFORMATION_BUSY | `number` | <code>34</code> | 
| VSCP_TYPE_INFORMATION_IDLE | `number` | <code>35</code> | 
| VSCP_TYPE_INFORMATION_STREAM_DATA | `number` | <code>36</code> | 
| VSCP_TYPE_INFORMATION_TOKEN_ACTIVITY | `number` | <code>37</code> | 
| VSCP_TYPE_INFORMATION_STREAM_DATA_WITH_ZONE | `number` | <code>38</code> | 
| VSCP_TYPE_INFORMATION_CONFIRM | `number` | <code>39</code> | 
| VSCP_TYPE_INFORMATION_LEVEL_CHANGED | `number` | <code>40</code> | 
| VSCP_TYPE_INFORMATION_WARNING | `number` | <code>41</code> | 
| VSCP_TYPE_INFORMATION_STATE | `number` | <code>42</code> | 
| VSCP_TYPE_INFORMATION_ACTION_TRIGGER | `number` | <code>43</code> | 
| VSCP_TYPE_INFORMATION_SUNRISE | `number` | <code>44</code> | 
| VSCP_TYPE_INFORMATION_SUNSET | `number` | <code>45</code> | 
| VSCP_TYPE_INFORMATION_START_OF_RECORD | `number` | <code>46</code> | 
| VSCP_TYPE_INFORMATION_END_OF_RECORD | `number` | <code>47</code> | 
| VSCP_TYPE_INFORMATION_PRESET_ACTIVE | `number` | <code>48</code> | 
| VSCP_TYPE_INFORMATION_DETECT | `number` | <code>49</code> | 
| VSCP_TYPE_INFORMATION_OVERFLOW | `number` | <code>50</code> | 
| VSCP_TYPE_INFORMATION_BIG_LEVEL_CHANGED | `number` | <code>51</code> | 
| VSCP_TYPE_INFORMATION_SUNRISE_TWILIGHT_START | `number` | <code>52</code> | 
| VSCP_TYPE_INFORMATION_SUNSET_TWILIGHT_START | `number` | <code>53</code> | 
| VSCP_TYPE_INFORMATION_NAUTICAL_SUNRISE_TWILIGHT_START | `number` | <code>54</code> | 
| VSCP_TYPE_INFORMATION_NAUTICAL_SUNSET_TWILIGHT_START | `number` | <code>55</code> | 
| VSCP_TYPE_INFORMATION_ASTRONOMICAL_SUNRISE_TWILIGHT_START | `number` | <code>56</code> | 
| VSCP_TYPE_INFORMATION_ASTRONOMICAL_SUNSET_TWILIGHT_START | `number` | <code>57</code> | 
| VSCP_TYPE_INFORMATION_CALCULATED_NOON | `number` | <code>58</code> | 
| VSCP_TYPE_INFORMATION_SHUTTER_UP | `number` | <code>59</code> | 
| VSCP_TYPE_INFORMATION_SHUTTER_DOWN | `number` | <code>60</code> | 
| VSCP_TYPE_INFORMATION_SHUTTER_LEFT | `number` | <code>61</code> | 
| VSCP_TYPE_INFORMATION_SHUTTER_RIGHT | `number` | <code>62</code> | 
| VSCP_TYPE_INFORMATION_SHUTTER_END_TOP | `number` | <code>63</code> | 
| VSCP_TYPE_INFORMATION_SHUTTER_END_BOTTOM | `number` | <code>64</code> | 
| VSCP_TYPE_INFORMATION_SHUTTER_END_MIDDLE | `number` | <code>65</code> | 
| VSCP_TYPE_INFORMATION_SHUTTER_END_PRESET | `number` | <code>66</code> | 
| VSCP_TYPE_INFORMATION_SHUTTER_END_LEFT | `number` | <code>67</code> | 
| VSCP_TYPE_INFORMATION_SHUTTER_END_RIGHT | `number` | <code>68</code> | 
| VSCP_TYPE_INFORMATION_LONG_CLICK | `number` | <code>69</code> | 
| VSCP_TYPE_INFORMATION_SINGLE_CLICK | `number` | <code>70</code> | 
| VSCP_TYPE_INFORMATION_DOUBLE_CLICK | `number` | <code>71</code> | 
| VSCP_TYPE_INFORMATION_DATE | `number` | <code>72</code> | 
| VSCP_TYPE_INFORMATION_TIME | `number` | <code>73</code> | 
| VSCP_TYPE_INFORMATION_WEEKDAY | `number` | <code>74</code> | 
| VSCP_TYPE_INFORMATION_LOCK | `number` | <code>75</code> | 
| VSCP_TYPE_INFORMATION_UNLOCK | `number` | <code>76</code> | 
| VSCP_TYPE_INFORMATION_DATETIME | `number` | <code>77</code> | 
| VSCP_TYPE_CONTROL_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_CONTROL_MUTE | `number` | <code>1</code> | 
| VSCP_TYPE_CONTROL_ALL_LAMPS | `number` | <code>2</code> | 
| VSCP_TYPE_CONTROL_OPEN | `number` | <code>3</code> | 
| VSCP_TYPE_CONTROL_CLOSE | `number` | <code>4</code> | 
| VSCP_TYPE_CONTROL_TURNON | `number` | <code>5</code> | 
| VSCP_TYPE_CONTROL_TURNOFF | `number` | <code>6</code> | 
| VSCP_TYPE_CONTROL_START | `number` | <code>7</code> | 
| VSCP_TYPE_CONTROL_STOP | `number` | <code>8</code> | 
| VSCP_TYPE_CONTROL_RESET | `number` | <code>9</code> | 
| VSCP_TYPE_CONTROL_INTERRUPT | `number` | <code>10</code> | 
| VSCP_TYPE_CONTROL_SLEEP | `number` | <code>11</code> | 
| VSCP_TYPE_CONTROL_WAKEUP | `number` | <code>12</code> | 
| VSCP_TYPE_CONTROL_RESUME | `number` | <code>13</code> | 
| VSCP_TYPE_CONTROL_PAUSE | `number` | <code>14</code> | 
| VSCP_TYPE_CONTROL_ACTIVATE | `number` | <code>15</code> | 
| VSCP_TYPE_CONTROL_DEACTIVATE | `number` | <code>16</code> | 
| VSCP_TYPE_CONTROL_RESERVED17 | `number` | <code>17</code> | 
| VSCP_TYPE_CONTROL_RESERVED18 | `number` | <code>18</code> | 
| VSCP_TYPE_CONTROL_RESERVED19 | `number` | <code>19</code> | 
| VSCP_TYPE_CONTROL_DIM_LAMPS | `number` | <code>20</code> | 
| VSCP_TYPE_CONTROL_CHANGE_CHANNEL | `number` | <code>21</code> | 
| VSCP_TYPE_CONTROL_CHANGE_LEVEL | `number` | <code>22</code> | 
| VSCP_TYPE_CONTROL_RELATIVE_CHANGE_LEVEL | `number` | <code>23</code> | 
| VSCP_TYPE_CONTROL_MEASUREMENT_REQUEST | `number` | <code>24</code> | 
| VSCP_TYPE_CONTROL_STREAM_DATA | `number` | <code>25</code> | 
| VSCP_TYPE_CONTROL_SYNC | `number` | <code>26</code> | 
| VSCP_TYPE_CONTROL_ZONED_STREAM_DATA | `number` | <code>27</code> | 
| VSCP_TYPE_CONTROL_SET_PRESET | `number` | <code>28</code> | 
| VSCP_TYPE_CONTROL_TOGGLE_STATE | `number` | <code>29</code> | 
| VSCP_TYPE_CONTROL_TIMED_PULSE_ON | `number` | <code>30</code> | 
| VSCP_TYPE_CONTROL_TIMED_PULSE_OFF | `number` | <code>31</code> | 
| VSCP_TYPE_CONTROL_SET_COUNTRY_LANGUAGE | `number` | <code>32</code> | 
| VSCP_TYPE_CONTROL_BIG_CHANGE_LEVEL | `number` | <code>33</code> | 
| VSCP_TYPE_CONTROL_SHUTTER_UP | `number` | <code>34</code> | 
| VSCP_TYPE_CONTROL_SHUTTER_DOWN | `number` | <code>35</code> | 
| VSCP_TYPE_CONTROL_SHUTTER_LEFT | `number` | <code>36</code> | 
| VSCP_TYPE_CONTROL_SHUTTER_RIGHT | `number` | <code>37</code> | 
| VSCP_TYPE_CONTROL_SHUTTER_MIDDLE | `number` | <code>38</code> | 
| VSCP_TYPE_CONTROL_SHUTTER_PRESET | `number` | <code>39</code> | 
| VSCP_TYPE_CONTROL_ALL_LAMPS_ON | `number` | <code>40</code> | 
| VSCP_TYPE_CONTROL_ALL_LAMPS_OFF | `number` | <code>41</code> | 
| VSCP_TYPE_CONTROL_LOCK | `number` | <code>42</code> | 
| VSCP_TYPE_CONTROL_UNLOCK | `number` | <code>43</code> | 
| VSCP_TYPE_MULTIMEDIA_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_MULTIMEDIA_PLAYBACK | `number` | <code>1</code> | 
| VSCP_TYPE_MULTIMEDIA_NAVIGATOR_KEY_ENG | `number` | <code>2</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_CONTRAST | `number` | <code>3</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_FOCUS | `number` | <code>4</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_TINT | `number` | <code>5</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_COLOUR_BALANCE | `number` | <code>6</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_BRIGHTNESS | `number` | <code>7</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_HUE | `number` | <code>8</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_BASS | `number` | <code>9</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_TREBLE | `number` | <code>10</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_MASTER_VOLUME | `number` | <code>11</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_FRONT_VOLUME | `number` | <code>12</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_CENTRE_VOLUME | `number` | <code>13</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_REAR_VOLUME | `number` | <code>14</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_SIDE_VOLUME | `number` | <code>15</code> | 
| VSCP_TYPE_MULTIMEDIA_RESERVED16 | `number` | <code>16</code> | 
| VSCP_TYPE_MULTIMEDIA_RESERVED17 | `number` | <code>17</code> | 
| VSCP_TYPE_MULTIMEDIA_RESERVED18 | `number` | <code>18</code> | 
| VSCP_TYPE_MULTIMEDIA_RESERVED19 | `number` | <code>19</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_DISK | `number` | <code>20</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_TRACK | `number` | <code>21</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_ALBUM | `number` | <code>22</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_CHANNEL | `number` | <code>23</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_PAGE | `number` | <code>24</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_CHAPTER | `number` | <code>25</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_SCREEN_FORMAT | `number` | <code>26</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_INPUT_SOURCE | `number` | <code>27</code> | 
| VSCP_TYPE_MULTIMEDIA_ADJUST_SELECT_OUTPUT | `number` | <code>28</code> | 
| VSCP_TYPE_MULTIMEDIA_RECORD | `number` | <code>29</code> | 
| VSCP_TYPE_MULTIMEDIA_SET_RECORDING_VOLUME | `number` | <code>30</code> | 
| VSCP_TYPE_MULTIMEDIA_TIVO_FUNCTION | `number` | <code>40</code> | 
| VSCP_TYPE_MULTIMEDIA_GET_CURRENT_TITLE | `number` | <code>50</code> | 
| VSCP_TYPE_MULTIMEDIA_SET_POSITION | `number` | <code>51</code> | 
| VSCP_TYPE_MULTIMEDIA_GET_MEDIA_INFO | `number` | <code>52</code> | 
| VSCP_TYPE_MULTIMEDIA_REMOVE_ITEM | `number` | <code>53</code> | 
| VSCP_TYPE_MULTIMEDIA_REMOVE_ALL_ITEMS | `number` | <code>54</code> | 
| VSCP_TYPE_MULTIMEDIA_SAVE_ALBUM | `number` | <code>55</code> | 
| VSCP_TYPE_MULTIMEDIA_CONTROL | `number` | <code>60</code> | 
| VSCP_TYPE_MULTIMEDIA_CONTROL_RESPONSE | `number` | <code>61</code> | 
| VSCP_TYPE_AOL_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_AOL_UNPLUGGED_POWER | `number` | <code>1</code> | 
| VSCP_TYPE_AOL_UNPLUGGED_LAN | `number` | <code>2</code> | 
| VSCP_TYPE_AOL_CHASSIS_INTRUSION | `number` | <code>3</code> | 
| VSCP_TYPE_AOL_PROCESSOR_REMOVAL | `number` | <code>4</code> | 
| VSCP_TYPE_AOL_ENVIRONMENT_ERROR | `number` | <code>5</code> | 
| VSCP_TYPE_AOL_HIGH_TEMPERATURE | `number` | <code>6</code> | 
| VSCP_TYPE_AOL_FAN_SPEED | `number` | <code>7</code> | 
| VSCP_TYPE_AOL_VOLTAGE_FLUCTUATIONS | `number` | <code>8</code> | 
| VSCP_TYPE_AOL_OS_ERROR | `number` | <code>9</code> | 
| VSCP_TYPE_AOL_POWER_ON_ERROR | `number` | <code>10</code> | 
| VSCP_TYPE_AOL_SYSTEM_HUNG | `number` | <code>11</code> | 
| VSCP_TYPE_AOL_COMPONENT_FAILURE | `number` | <code>12</code> | 
| VSCP_TYPE_AOL_REBOOT_UPON_FAILURE | `number` | <code>13</code> | 
| VSCP_TYPE_AOL_REPAIR_OPERATING_SYSTEM | `number` | <code>14</code> | 
| VSCP_TYPE_AOL_UPDATE_BIOS_IMAGE | `number` | <code>15</code> | 
| VSCP_TYPE_AOL_UPDATE_DIAGNOSTIC_PROCEDURE | `number` | <code>16</code> | 
| VSCP_TYPE_WEATHER_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_WEATHER_SEASONS_WINTER | `number` | <code>1</code> | 
| VSCP_TYPE_WEATHER_SEASONS_SPRING | `number` | <code>2</code> | 
| VSCP_TYPE_WEATHER_SEASONS_SUMMER | `number` | <code>3</code> | 
| VSCP_TYPE_WEATHER_SEASONS_AUTUMN | `number` | <code>4</code> | 
| VSCP_TYPE_WEATHER_WIND_NONE | `number` | <code>5</code> | 
| VSCP_TYPE_WEATHER_WIND_LOW | `number` | <code>6</code> | 
| VSCP_TYPE_WEATHER_WIND_MEDIUM | `number` | <code>7</code> | 
| VSCP_TYPE_WEATHER_WIND_HIGH | `number` | <code>8</code> | 
| VSCP_TYPE_WEATHER_WIND_VERY_HIGH | `number` | <code>9</code> | 
| VSCP_TYPE_WEATHER_AIR_FOGGY | `number` | <code>10</code> | 
| VSCP_TYPE_WEATHER_AIR_FREEZING | `number` | <code>11</code> | 
| VSCP_TYPE_WEATHER_AIR_VERY_COLD | `number` | <code>12</code> | 
| VSCP_TYPE_WEATHER_AIR_COLD | `number` | <code>13</code> | 
| VSCP_TYPE_WEATHER_AIR_NORMAL | `number` | <code>14</code> | 
| VSCP_TYPE_WEATHER_AIR_HOT | `number` | <code>15</code> | 
| VSCP_TYPE_WEATHER_AIR_VERY_HOT | `number` | <code>16</code> | 
| VSCP_TYPE_WEATHER_AIR_POLLUTION_LOW | `number` | <code>17</code> | 
| VSCP_TYPE_WEATHER_AIR_POLLUTION_MEDIUM | `number` | <code>18</code> | 
| VSCP_TYPE_WEATHER_AIR_POLLUTION_HIGH | `number` | <code>19</code> | 
| VSCP_TYPE_WEATHER_AIR_HUMID | `number` | <code>20</code> | 
| VSCP_TYPE_WEATHER_AIR_DRY | `number` | <code>21</code> | 
| VSCP_TYPE_WEATHER_SOIL_HUMID | `number` | <code>22</code> | 
| VSCP_TYPE_WEATHER_SOIL_DRY | `number` | <code>23</code> | 
| VSCP_TYPE_WEATHER_RAIN_NONE | `number` | <code>24</code> | 
| VSCP_TYPE_WEATHER_RAIN_LIGHT | `number` | <code>25</code> | 
| VSCP_TYPE_WEATHER_RAIN_HEAVY | `number` | <code>26</code> | 
| VSCP_TYPE_WEATHER_RAIN_VERY_HEAVY | `number` | <code>27</code> | 
| VSCP_TYPE_WEATHER_SUN_NONE | `number` | <code>28</code> | 
| VSCP_TYPE_WEATHER_SUN_LIGHT | `number` | <code>29</code> | 
| VSCP_TYPE_WEATHER_SUN_HEAVY | `number` | <code>30</code> | 
| VSCP_TYPE_WEATHER_SNOW_NONE | `number` | <code>31</code> | 
| VSCP_TYPE_WEATHER_SNOW_LIGHT | `number` | <code>32</code> | 
| VSCP_TYPE_WEATHER_SNOW_HEAVY | `number` | <code>33</code> | 
| VSCP_TYPE_WEATHER_DEW_POINT | `number` | <code>34</code> | 
| VSCP_TYPE_WEATHER_STORM | `number` | <code>35</code> | 
| VSCP_TYPE_WEATHER_FLOOD | `number` | <code>36</code> | 
| VSCP_TYPE_WEATHER_EARTHQUAKE | `number` | <code>37</code> | 
| VSCP_TYPE_WEATHER_NUCLEAR_DISASTER | `number` | <code>38</code> | 
| VSCP_TYPE_WEATHER_FIRE | `number` | <code>39</code> | 
| VSCP_TYPE_WEATHER_LIGHTNING | `number` | <code>40</code> | 
| VSCP_TYPE_WEATHER_UV_RADIATION_LOW | `number` | <code>41</code> | 
| VSCP_TYPE_WEATHER_UV_RADIATION_MEDIUM | `number` | <code>42</code> | 
| VSCP_TYPE_WEATHER_UV_RADIATION_NORMAL | `number` | <code>43</code> | 
| VSCP_TYPE_WEATHER_UV_RADIATION_HIGH | `number` | <code>44</code> | 
| VSCP_TYPE_WEATHER_UV_RADIATION_VERY_HIGH | `number` | <code>45</code> | 
| VSCP_TYPE_WEATHER_WARNING_LEVEL1 | `number` | <code>46</code> | 
| VSCP_TYPE_WEATHER_WARNING_LEVEL2 | `number` | <code>47</code> | 
| VSCP_TYPE_WEATHER_WARNING_LEVEL3 | `number` | <code>48</code> | 
| VSCP_TYPE_WEATHER_WARNING_LEVEL4 | `number` | <code>49</code> | 
| VSCP_TYPE_WEATHER_WARNING_LEVEL5 | `number` | <code>50</code> | 
| VSCP_TYPE_WEATHER_ARMAGEDON | `number` | <code>51</code> | 
| VSCP_TYPE_PHONE_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_PHONE_INCOMING_CALL | `number` | <code>1</code> | 
| VSCP_TYPE_PHONE_OUTGOING_CALL | `number` | <code>2</code> | 
| VSCP_TYPE_PHONE_RING | `number` | <code>3</code> | 
| VSCP_TYPE_PHONE_ANSWER | `number` | <code>4</code> | 
| VSCP_TYPE_PHONE_HANGUP | `number` | <code>5</code> | 
| VSCP_TYPE_PHONE_GIVEUP | `number` | <code>6</code> | 
| VSCP_TYPE_PHONE_TRANSFER | `number` | <code>7</code> | 
| VSCP_TYPE_PHONE_DATABASE_INFO | `number` | <code>8</code> | 
| VSCP_TYPE_DISPLAY_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_DISPLAY_CLEAR_DISPLAY | `number` | <code>1</code> | 
| VSCP_TYPE_DISPLAY_POSITION_CURSOR | `number` | <code>2</code> | 
| VSCP_TYPE_DISPLAY_WRITE_DISPLAY | `number` | <code>3</code> | 
| VSCP_TYPE_DISPLAY_WRITE_DISPLAY_BUFFER | `number` | <code>4</code> | 
| VSCP_TYPE_DISPLAY_SHOW_DISPLAY_BUFFER | `number` | <code>5</code> | 
| VSCP_TYPE_DISPLAY_SET_DISPLAY_BUFFER_PARAM | `number` | <code>6</code> | 
| VSCP_TYPE_DISPLAY_SHOW_TEXT | `number` | <code>32</code> | 
| VSCP_TYPE_DISPLAY_SHOW_LED | `number` | <code>48</code> | 
| VSCP_TYPE_DISPLAY_SHOW_LED_COLOR | `number` | <code>49</code> | 
| VSCP_TYPE_REMOTE_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_REMOTE_RC5 | `number` | <code>1</code> | 
| VSCP_TYPE_REMOTE_SONY12 | `number` | <code>3</code> | 
| VSCP_TYPE_REMOTE_LIRC | `number` | <code>32</code> | 
| VSCP_TYPE_REMOTE_VSCP | `number` | <code>48</code> | 
| VSCP_TYPE_REMOTE_MAPITO | `number` | <code>49</code> | 
| VSCP_TYPE_GNSS_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_GNSS_POSITION | `number` | <code>1</code> | 
| VSCP_TYPE_GNSS_SATELLITES | `number` | <code>2</code> | 
| VSCP_TYPE_WIRELESS_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_WIRELESS_GSM_CELL | `number` | <code>1</code> | 
| VSCP_TYPE_DIAGNOSTIC_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_DIAGNOSTIC_OVERVOLTAGE | `number` | <code>1</code> | 
| VSCP_TYPE_DIAGNOSTIC_UNDERVOLTAGE | `number` | <code>2</code> | 
| VSCP_TYPE_DIAGNOSTIC_VBUS_LOW | `number` | <code>3</code> | 
| VSCP_TYPE_DIAGNOSTIC_BATTERY_LOW | `number` | <code>4</code> | 
| VSCP_TYPE_DIAGNOSTIC_BATTERY_FULL | `number` | <code>5</code> | 
| VSCP_TYPE_DIAGNOSTIC_BATTERY_ERROR | `number` | <code>6</code> | 
| VSCP_TYPE_DIAGNOSTIC_BATTERY_OK | `number` | <code>7</code> | 
| VSCP_TYPE_DIAGNOSTIC_OVERCURRENT | `number` | <code>8</code> | 
| VSCP_TYPE_DIAGNOSTIC_CIRCUIT_ERROR | `number` | <code>9</code> | 
| VSCP_TYPE_DIAGNOSTIC_SHORT_CIRCUIT | `number` | <code>10</code> | 
| VSCP_TYPE_DIAGNOSTIC_OPEN_CIRCUIT | `number` | <code>11</code> | 
| VSCP_TYPE_DIAGNOSTIC_MOIST | `number` | <code>12</code> | 
| VSCP_TYPE_DIAGNOSTIC_WIRE_FAIL | `number` | <code>13</code> | 
| VSCP_TYPE_DIAGNOSTIC_WIRELESS_FAIL | `number` | <code>14</code> | 
| VSCP_TYPE_DIAGNOSTIC_IR_FAIL | `number` | <code>15</code> | 
| VSCP_TYPE_DIAGNOSTIC_1WIRE_FAIL | `number` | <code>16</code> | 
| VSCP_TYPE_DIAGNOSTIC_RS222_FAIL | `number` | <code>17</code> | 
| VSCP_TYPE_DIAGNOSTIC_RS232_FAIL | `number` | <code>18</code> | 
| VSCP_TYPE_DIAGNOSTIC_RS423_FAIL | `number` | <code>19</code> | 
| VSCP_TYPE_DIAGNOSTIC_RS485_FAIL | `number` | <code>20</code> | 
| VSCP_TYPE_DIAGNOSTIC_CAN_FAIL | `number` | <code>21</code> | 
| VSCP_TYPE_DIAGNOSTIC_LAN_FAIL | `number` | <code>22</code> | 
| VSCP_TYPE_DIAGNOSTIC_USB_FAIL | `number` | <code>23</code> | 
| VSCP_TYPE_DIAGNOSTIC_WIFI_FAIL | `number` | <code>24</code> | 
| VSCP_TYPE_DIAGNOSTIC_NFC_RFID_FAIL | `number` | <code>25</code> | 
| VSCP_TYPE_DIAGNOSTIC_LOW_SIGNAL | `number` | <code>26</code> | 
| VSCP_TYPE_DIAGNOSTIC_HIGH_SIGNAL | `number` | <code>27</code> | 
| VSCP_TYPE_DIAGNOSTIC_ADC_FAIL | `number` | <code>28</code> | 
| VSCP_TYPE_DIAGNOSTIC_ALU_FAIL | `number` | <code>29</code> | 
| VSCP_TYPE_DIAGNOSTIC_ASSERT | `number` | <code>30</code> | 
| VSCP_TYPE_DIAGNOSTIC_DAC_FAIL | `number` | <code>31</code> | 
| VSCP_TYPE_DIAGNOSTIC_DMA_FAIL | `number` | <code>32</code> | 
| VSCP_TYPE_DIAGNOSTIC_ETH_FAIL | `number` | <code>33</code> | 
| VSCP_TYPE_DIAGNOSTIC_EXCEPTION | `number` | <code>34</code> | 
| VSCP_TYPE_DIAGNOSTIC_FPU_FAIL | `number` | <code>35</code> | 
| VSCP_TYPE_DIAGNOSTIC_GPIO_FAIL | `number` | <code>36</code> | 
| VSCP_TYPE_DIAGNOSTIC_I2C_FAIL | `number` | <code>37</code> | 
| VSCP_TYPE_DIAGNOSTIC_I2S_FAIL | `number` | <code>38</code> | 
| VSCP_TYPE_DIAGNOSTIC_INVALID_CONFIG | `number` | <code>39</code> | 
| VSCP_TYPE_DIAGNOSTIC_MMU_FAIL | `number` | <code>40</code> | 
| VSCP_TYPE_DIAGNOSTIC_NMI | `number` | <code>41</code> | 
| VSCP_TYPE_DIAGNOSTIC_OVERHEAT | `number` | <code>42</code> | 
| VSCP_TYPE_DIAGNOSTIC_PLL_FAIL | `number` | <code>43</code> | 
| VSCP_TYPE_DIAGNOSTIC_POR_FAIL | `number` | <code>44</code> | 
| VSCP_TYPE_DIAGNOSTIC_PWM_FAIL | `number` | <code>45</code> | 
| VSCP_TYPE_DIAGNOSTIC_RAM_FAIL | `number` | <code>46</code> | 
| VSCP_TYPE_DIAGNOSTIC_ROM_FAIL | `number` | <code>47</code> | 
| VSCP_TYPE_DIAGNOSTIC_SPI_FAIL | `number` | <code>48</code> | 
| VSCP_TYPE_DIAGNOSTIC_STACK_FAIL | `number` | <code>49</code> | 
| VSCP_TYPE_DIAGNOSTIC_LIN_FAIL | `number` | <code>50</code> | 
| VSCP_TYPE_DIAGNOSTIC_UART_FAIL | `number` | <code>51</code> | 
| VSCP_TYPE_DIAGNOSTIC_UNHANDLED_INT | `number` | <code>52</code> | 
| VSCP_TYPE_DIAGNOSTIC_MEMORY_FAIL | `number` | <code>53</code> | 
| VSCP_TYPE_DIAGNOSTIC_VARIABLE_RANGE | `number` | <code>54</code> | 
| VSCP_TYPE_DIAGNOSTIC_WDT | `number` | <code>55</code> | 
| VSCP_TYPE_DIAGNOSTIC_EEPROM_FAIL | `number` | <code>56</code> | 
| VSCP_TYPE_DIAGNOSTIC_ENCRYPTION_FAIL | `number` | <code>57</code> | 
| VSCP_TYPE_DIAGNOSTIC_BAD_USER_INPUT | `number` | <code>58</code> | 
| VSCP_TYPE_DIAGNOSTIC_DECRYPTION_FAIL | `number` | <code>59</code> | 
| VSCP_TYPE_DIAGNOSTIC_NOISE | `number` | <code>60</code> | 
| VSCP_TYPE_DIAGNOSTIC_BOOTLOADER_FAIL | `number` | <code>61</code> | 
| VSCP_TYPE_DIAGNOSTIC_PROGRAMFLOW_FAIL | `number` | <code>62</code> | 
| VSCP_TYPE_DIAGNOSTIC_RTC_FAIL | `number` | <code>63</code> | 
| VSCP_TYPE_DIAGNOSTIC_SYSTEM_TEST_FAIL | `number` | <code>64</code> | 
| VSCP_TYPE_DIAGNOSTIC_SENSOR_FAIL | `number` | <code>65</code> | 
| VSCP_TYPE_DIAGNOSTIC_SAFESTATE | `number` | <code>66</code> | 
| VSCP_TYPE_DIAGNOSTIC_SIGNAL_IMPLAUSIBLE | `number` | <code>67</code> | 
| VSCP_TYPE_DIAGNOSTIC_STORAGE_FAIL | `number` | <code>68</code> | 
| VSCP_TYPE_DIAGNOSTIC_SELFTEST_FAIL | `number` | <code>69</code> | 
| VSCP_TYPE_DIAGNOSTIC_ESD_EMC_EMI | `number` | <code>70</code> | 
| VSCP_TYPE_DIAGNOSTIC_TIMEOUT | `number` | <code>71</code> | 
| VSCP_TYPE_DIAGNOSTIC_LCD_FAIL | `number` | <code>72</code> | 
| VSCP_TYPE_DIAGNOSTIC_TOUCHPANEL_FAIL | `number` | <code>73</code> | 
| VSCP_TYPE_DIAGNOSTIC_NOLOAD | `number` | <code>74</code> | 
| VSCP_TYPE_DIAGNOSTIC_COOLING_FAIL | `number` | <code>75</code> | 
| VSCP_TYPE_DIAGNOSTIC_HEATING_FAIL | `number` | <code>76</code> | 
| VSCP_TYPE_DIAGNOSTIC_TX_FAIL | `number` | <code>77</code> | 
| VSCP_TYPE_DIAGNOSTIC_RX_FAIL | `number` | <code>78</code> | 
| VSCP_TYPE_DIAGNOSTIC_EXT_IC_FAIL | `number` | <code>79</code> | 
| VSCP_TYPE_ERROR_SUCCESS | `number` | <code>0</code> | 
| VSCP_TYPE_ERROR_ERROR | `number` | <code>1</code> | 
| VSCP_TYPE_ERROR_CHANNEL | `number` | <code>7</code> | 
| VSCP_TYPE_ERROR_FIFO_EMPTY | `number` | <code>8</code> | 
| VSCP_TYPE_ERROR_FIFO_FULL | `number` | <code>9</code> | 
| VSCP_TYPE_ERROR_FIFO_SIZE | `number` | <code>10</code> | 
| VSCP_TYPE_ERROR_FIFO_WAIT | `number` | <code>11</code> | 
| VSCP_TYPE_ERROR_GENERIC | `number` | <code>12</code> | 
| VSCP_TYPE_ERROR_HARDWARE | `number` | <code>13</code> | 
| VSCP_TYPE_ERROR_INIT_FAIL | `number` | <code>14</code> | 
| VSCP_TYPE_ERROR_INIT_MISSING | `number` | <code>15</code> | 
| VSCP_TYPE_ERROR_INIT_READY | `number` | <code>16</code> | 
| VSCP_TYPE_ERROR_NOT_SUPPORTED | `number` | <code>17</code> | 
| VSCP_TYPE_ERROR_OVERRUN | `number` | <code>18</code> | 
| VSCP_TYPE_ERROR_RCV_EMPTY | `number` | <code>19</code> | 
| VSCP_TYPE_ERROR_REGISTER | `number` | <code>20</code> | 
| VSCP_TYPE_ERROR_TRM_FULL | `number` | <code>21</code> | 
| VSCP_TYPE_ERROR_LIBRARY | `number` | <code>28</code> | 
| VSCP_TYPE_ERROR_PROCADDRESS | `number` | <code>29</code> | 
| VSCP_TYPE_ERROR_ONLY_ONE_INSTANCE | `number` | <code>30</code> | 
| VSCP_TYPE_ERROR_SUB_DRIVER | `number` | <code>31</code> | 
| VSCP_TYPE_ERROR_TIMEOUT | `number` | <code>32</code> | 
| VSCP_TYPE_ERROR_NOT_OPEN | `number` | <code>33</code> | 
| VSCP_TYPE_ERROR_PARAMETER | `number` | <code>34</code> | 
| VSCP_TYPE_ERROR_MEMORY | `number` | <code>35</code> | 
| VSCP_TYPE_ERROR_INTERNAL | `number` | <code>36</code> | 
| VSCP_TYPE_ERROR_COMMUNICATION | `number` | <code>37</code> | 
| VSCP_TYPE_ERROR_USER | `number` | <code>38</code> | 
| VSCP_TYPE_ERROR_PASSWORD | `number` | <code>39</code> | 
| VSCP_TYPE_ERROR_CONNECTION | `number` | <code>40</code> | 
| VSCP_TYPE_ERROR_INVALID_HANDLE | `number` | <code>41</code> | 
| VSCP_TYPE_ERROR_OPERATION_FAILED | `number` | <code>42</code> | 
| VSCP_TYPE_ERROR_BUFFER_SMALL | `number` | <code>43</code> | 
| VSCP_TYPE_ERROR_ITEM_UNKNOWN | `number` | <code>44</code> | 
| VSCP_TYPE_ERROR_NAME_USED | `number` | <code>45</code> | 
| VSCP_TYPE_LOG_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_LOG_MESSAGE | `number` | <code>1</code> | 
| VSCP_TYPE_LOG_START | `number` | <code>2</code> | 
| VSCP_TYPE_LOG_STOP | `number` | <code>3</code> | 
| VSCP_TYPE_LOG_LEVEL | `number` | <code>4</code> | 
| VSCP_TYPE_LABORATORY_GENERAL | `number` | <code>0</code> | 
| VSCP_TYPE_LOCAL_GENERAL | `number` | <code>0</code> | 
| VSCP2_TYPE_PROTOCOL_GENERAL | `number` | <code>0</code> | 
| VSCP2_TYPE_PROTOCOL_READ_REGISTER | `number` | <code>1</code> | 
| VSCP2_TYPE_PROTOCOL_WRITE_REGISTER | `number` | <code>2</code> | 
| VSCP2_TYPE_PROTOCOL_READ_WRITE_RESPONSE | `number` | <code>3</code> | 
| VSCP2_TYPE_PROTOCOL_HIGH_END_SERVER_CAPS | `number` | <code>20</code> | 
| VSCP2_TYPE_PROTOCOL_WHO_IS_THERE_RESPONSE | `number` | <code>32</code> | 
| VSCP2_TYPE_CONTROL_GENERAL | `number` | <code>0</code> | 
| VSCP2_TYPE_INFORMATION_GENERAL | `number` | <code>0</code> | 
| VSCP2_TYPE_INFORMATION_TOKEN_ACTIVITY | `number` | <code>1</code> | 
| VSCP2_TYPE_INFORMATION_HEART_BEAT | `number` | <code>2</code> | 
| VSCP2_TYPE_INFORMATION_PROXY_HEART_BEAT | `number` | <code>3</code> | 
| VSCP2_TYPE_INFORMATION_CHANNEL_ANNOUNCE | `number` | <code>4</code> | 
| VSCP2_TYPE_TEXT2SPEECH_GENERAL | `number` | <code>0</code> | 
| VSCP2_TYPE_TEXT2SPEECH_TALK | `number` | <code>1</code> | 
| VSCP2_TYPE_CUSTOM_GENERAL | `number` | <code>0</code> | 
| VSCP2_TYPE_DISPLAY_GENERAL | `number` | <code>0</code> | 
| VSCP2_TYPE_VSCPD_GENERAL | `number` | <code>0</code> | 
| VSCP2_TYPE_VSCPD_LOOP | `number` | <code>1</code> | 
| VSCP2_TYPE_VSCPD_PAUSE | `number` | <code>3</code> | 
| VSCP2_TYPE_VSCPD_ACTIVATE | `number` | <code>4</code> | 
| VSCP2_TYPE_VSCPD_SECOND | `number` | <code>5</code> | 
| VSCP2_TYPE_VSCPD_MINUTE | `number` | <code>6</code> | 
| VSCP2_TYPE_VSCPD_HOUR | `number` | <code>7</code> | 
| VSCP2_TYPE_VSCPD_NOON | `number` | <code>8</code> | 
| VSCP2_TYPE_VSCPD_MIDNIGHT | `number` | <code>9</code> | 
| VSCP2_TYPE_VSCPD_WEEK | `number` | <code>11</code> | 
| VSCP2_TYPE_VSCPD_MONTH | `number` | <code>12</code> | 
| VSCP2_TYPE_VSCPD_QUARTER | `number` | <code>13</code> | 
| VSCP2_TYPE_VSCPD_YEAR | `number` | <code>14</code> | 
| VSCP2_TYPE_VSCPD_RANDOM_MINUTE | `number` | <code>15</code> | 
| VSCP2_TYPE_VSCPD_RANDOM_HOUR | `number` | <code>16</code> | 
| VSCP2_TYPE_VSCPD_RANDOM_DAY | `number` | <code>17</code> | 
| VSCP2_TYPE_VSCPD_RANDOM_WEEK | `number` | <code>18</code> | 
| VSCP2_TYPE_VSCPD_RANDOM_MONTH | `number` | <code>19</code> | 
| VSCP2_TYPE_VSCPD_RANDOM_YEAR | `number` | <code>20</code> | 
| VSCP2_TYPE_VSCPD_DUSK | `number` | <code>21</code> | 
| VSCP2_TYPE_VSCPD_DAWN | `number` | <code>22</code> | 
| VSCP2_TYPE_VSCPD_STARTING_UP | `number` | <code>23</code> | 
| VSCP2_TYPE_VSCPD_SHUTTING_DOWN | `number` | <code>24</code> | 
| VSCP2_TYPE_VSCPD_TIMER_STARTED | `number` | <code>25</code> | 
| VSCP2_TYPE_VSCPD_TIMER_PAUSED | `number` | <code>26</code> | 
| VSCP2_TYPE_VSCPD_TIMER_RESUMED | `number` | <code>27</code> | 
| VSCP2_TYPE_VSCPD_TIMER_STOPPED | `number` | <code>28</code> | 
| VSCP2_TYPE_VSCPD_TIMER_ELLAPSED | `number` | <code>29</code> | 
| VSCP2_TYPE_VSCPD_NEW_CALCULATION | `number` | <code>30</code> | 

<a id="vscp_dot_constants_dot_priorities"></a>

#### constants.priorities : `enum`
VSCP class priorities

**Kind**: static enum of [`constants`](#vscp.constants)  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| PRIORITY_0_HIGH | `number` | <code>0</code> | 
| PRIORITY_1 | `number` | <code>1</code> | 
| PRIORITY_2 | `number` | <code>2</code> | 
| PRIORITY_3_NORMAL | `number` | <code>3</code> | 
| PRIORITY_4 | `number` | <code>4</code> | 
| PRIORITY_5 | `number` | <code>5</code> | 
| PRIORITY_6 | `number` | <code>6</code> | 
| PRIORITY_7_LOW | `number` | <code>7</code> | 

<a id="vscp_dot_constants_dot_varTypes"></a>

#### constants.varTypes : `enum`
VSCP variable types

**Kind**: static enum of [`constants`](#vscp.constants)  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| UNASSIGNED | `number` | <code>0</code> | 
| STRING | `number` | <code>1</code> | 
| BOOLEAN | `number` | <code>2</code> | 
| INTEGER | `number` | <code>3</code> | 
| LONG | `number` | <code>4</code> | 
| DOUBLE | `number` | <code>5</code> | 
| MEASUREMENT | `number` | <code>6</code> | 
| EVENT | `number` | <code>7</code> | 
| GUID | `number` | <code>8</code> | 
| EVENT_DATA | `number` | <code>9</code> | 
| EVENT_CLASS | `number` | <code>10</code> | 
| EVENT_TYPE | `number` | <code>11</code> | 
| EVENT_TIMESTAMP | `number` | <code>12</code> | 
| DATE_TIME | `number` | <code>13</code> | 
| DATE | `number` | <code>14</code> | 
| TIME | `number` | <code>15</code> | 
| BLOB | `number` | <code>16</code> | 
| MIME | `number` | <code>100</code> | 
| HTML | `number` | <code>101</code> | 
| JAVASCIPT | `number` | <code>102</code> | 
| JSON | `number` | <code>103</code> | 
| XML | `number` | <code>104</code> | 
| SQL | `number` | <code>105</code> | 
| LUA | `number` | <code>201</code> | 
| LUARES | `number` | <code>202</code> | 
| UXTYPE1 | `number` | <code>300</code> | 
| DMROW | `number` | <code>500</code> | 
| DRIVER | `number` | <code>501</code> | 
| USER | `number` | <code>502</code> | 
| FILTER | `number` | <code>503</code> | 

<a id="vscp_dot_constants_dot_varTypeNames"></a>

#### constants.varTypeNames
VSCP variable type names as string. Use to fill drop down boxes and similar.

**Kind**: static constant of [`constants`](#vscp.constants)  
<a id="vscp_dot_utility"></a>

### vscp.utility : `object`
Utility functions

**Kind**: static namespace of [`vscp`](#vscp)  

* [.utility](#vscp_dot_utility) : `object`
    * [.readValue(input)](#vscp_dot_utility_dot_readValue) ⇒ `number`
    * [.getTime()](#vscp_dot_utility_dot_getTime) ⇒ `string`
    * [.guidToStr(guid)](#vscp_dot_utility_dot_guidToStr) ⇒ `string`
    * [.strToGuid(guid)](#vscp_dot_utility_dot_strToGuid) ⇒ `Array.&lt;number&gt;`
    * [.getNodeId(guid)](#vscp_dot_utility_dot_getNodeId) ⇒ `number`

<a id="vscp_dot_utility_dot_readValue"></a>

#### utility.readValue(input) ⇒ `number`
Read a hex or decimal value and return as an integer.

**Kind**: static method of [`utility`](#vscp.utility)  
**Returns**: `number` - Value  

| Param | Type | Description |
| --- | --- | --- |
| input | `string` | Hex or decimal value as string |

<a id="vscp_dot_utility_dot_getTime"></a>

#### utility.getTime() ⇒ `string`
Utility function which returns the current time in the following format: hh:mm:ss.us

**Kind**: static method of [`utility`](#vscp.utility)  
**Returns**: `string` - Current time in the format hh:mm:ss.us  
<a id="vscp_dot_utility_dot_guidToStr"></a>

#### utility.guidToStr(guid) ⇒ `string`
Converts a GUID number array to a GUID string.

**Kind**: static method of [`utility`](#vscp.utility)  
**Returns**: `string` - GUID string, e.g. 00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00  

| Param | Type | Description |
| --- | --- | --- |
| guid | `Array.&lt;number&gt;` | GUID number array |

<a id="vscp_dot_utility_dot_strToGuid"></a>

#### utility.strToGuid(guid) ⇒ `Array.&lt;number&gt;`
Converts a GUID string to a GUID number array.

**Kind**: static method of [`utility`](#vscp.utility)  
**Returns**: `Array.&lt;number&gt;` - GUID number array  

| Param | Type | Description |
| --- | --- | --- |
| guid | `string` | GUID string, e.g. 00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00 |

<a id="vscp_dot_utility_dot_getNodeId"></a>

#### utility.getNodeId(guid) ⇒ `number`
Get node id from a node GUID string.

**Kind**: static method of [`utility`](#vscp.utility)  
**Returns**: `number` - Node id  

| Param | Type | Description |
| --- | --- | --- |
| guid | `string` | GUID string, e.g. 00:00:00:00:00:00:00:00:00:00:00:00:00:00:00:00 |

<a id="vscp_dot_mdf"></a>

### vscp.mdf : `object`
VSCP module description file handling functionality

**Kind**: static namespace of [`vscp`](#vscp)  

* [.mdf](#vscp_dot_mdf) : `object`
    * [.Register](#vscp_dot_mdf_dot_Register)
        * [new vscp.mdf.Register()](#new_vscp_dot_mdf_dot_Register_new)
        * [.name](#vscp_dot_mdf_dot_Register_plus_name) : `string`
        * [.description](#vscp_dot_mdf_dot_Register_plus_description) : `string`
        * [.readAccess](#vscp_dot_mdf_dot_Register_plus_readAccess) : `boolean`
        * [.writeAccess](#vscp_dot_mdf_dot_Register_plus_writeAccess) : `boolean`
        * [.page](#vscp_dot_mdf_dot_Register_plus_page) : `number`
        * [.offset](#vscp_dot_mdf_dot_Register_plus_offset) : `number`
        * [.value](#vscp_dot_mdf_dot_Register_plus_value) : `number`
        * [.dirty](#vscp_dot_mdf_dot_Register_plus_dirty) : `number`
        * [.userData](#vscp_dot_mdf_dot_Register_plus_userData) : `object`
        * [.setValue(value)](#vscp_dot_mdf_dot_Register_plus_setValue)
    * [.Abstraction](#vscp_dot_mdf_dot_Abstraction)
        * [new vscp.mdf.Abstraction()](#new_vscp_dot_mdf_dot_Abstraction_new)
        * [.name](#vscp_dot_mdf_dot_Abstraction_plus_name) : `string`
        * [.description](#vscp_dot_mdf_dot_Abstraction_plus_description) : `string`
        * [.readAccess](#vscp_dot_mdf_dot_Abstraction_plus_readAccess) : `boolean`
        * [.writeAccess](#vscp_dot_mdf_dot_Abstraction_plus_writeAccess) : `boolean`
        * [.id](#vscp_dot_mdf_dot_Abstraction_plus_id) : `string`
        * [.page](#vscp_dot_mdf_dot_Abstraction_plus_page) : `number`
        * [.offset](#vscp_dot_mdf_dot_Abstraction_plus_offset) : `number`
        * [.value](#vscp_dot_mdf_dot_Abstraction_plus_value) : `number`
        * [.type](#vscp_dot_mdf_dot_Abstraction_plus_type) : `string`
        * [.defValue](#vscp_dot_mdf_dot_Abstraction_plus_defValue) : `number`
        * [.dirty](#vscp_dot_mdf_dot_Abstraction_plus_dirty) : `number`
        * [.userData](#vscp_dot_mdf_dot_Abstraction_plus_userData) : `object`
        * [.setValue(value)](#vscp_dot_mdf_dot_Abstraction_plus_setValue)
    * [.constants](#vscp_dot_mdf_dot_constants) : `object`
        * [.TYPE_SIZES](#vscp_dot_mdf_dot_constants_dot_TYPE_SIZES) : `enum`
        * [.CONVERSION_FROM_DECIMAL](#vscp_dot_mdf_dot_constants_dot_CONVERSION_FROM_DECIMAL)
        * [.CONVERSION_TO_DECIMAL](#vscp_dot_mdf_dot_constants_dot_CONVERSION_TO_DECIMAL)
        * [.RANGE](#vscp_dot_mdf_dot_constants_dot_RANGE)
    * [.timeout](#vscp_dot_mdf_dot_timeout) : `number`
    * [.load(options)](#vscp_dot_mdf_dot_load)
    * [.loadLocal(options)](#vscp_dot_mdf_dot_loadLocal)
    * [.readAbstractValue(options)](#vscp_dot_mdf_dot_readAbstractValue)
    * [.writeAbstractValue(options)](#vscp_dot_mdf_dot_writeAbstractValue)
    * [.writeAbstractBits(options)](#vscp_dot_mdf_dot_writeAbstractBits)
    * [.getRegisters(options)](#vscp_dot_mdf_dot_getRegisters) ⇒ [`Array.&lt;Register&gt;`](#vscp.mdf.Register)
    * [.getAbstractions(options)](#vscp_dot_mdf_dot_getAbstractions) ⇒ [`Array.&lt;Abstraction&gt;`](#vscp.mdf.Abstraction)

<a id="vscp_dot_mdf_dot_Register"></a>

#### mdf.Register
**Kind**: static class of [`mdf`](#vscp.mdf)  

* [.Register](#vscp_dot_mdf_dot_Register)
    * [new vscp.mdf.Register()](#new_vscp_dot_mdf_dot_Register_new)
    * [.name](#vscp_dot_mdf_dot_Register_plus_name) : `string`
    * [.description](#vscp_dot_mdf_dot_Register_plus_description) : `string`
    * [.readAccess](#vscp_dot_mdf_dot_Register_plus_readAccess) : `boolean`
    * [.writeAccess](#vscp_dot_mdf_dot_Register_plus_writeAccess) : `boolean`
    * [.page](#vscp_dot_mdf_dot_Register_plus_page) : `number`
    * [.offset](#vscp_dot_mdf_dot_Register_plus_offset) : `number`
    * [.value](#vscp_dot_mdf_dot_Register_plus_value) : `number`
    * [.dirty](#vscp_dot_mdf_dot_Register_plus_dirty) : `number`
    * [.userData](#vscp_dot_mdf_dot_Register_plus_userData) : `object`
    * [.setValue(value)](#vscp_dot_mdf_dot_Register_plus_setValue)

<a id="new_vscp_dot_mdf_dot_Register_new"></a>

##### new vscp.mdf.Register()
MDF register with all parameters.

<a id="vscp_dot_mdf_dot_Register_plus_name"></a>

##### register.name : `string`
Register name

**Kind**: instance property of [`Register`](#vscp.mdf.Register)  
<a id="vscp_dot_mdf_dot_Register_plus_description"></a>

##### register.description : `string`
Register description

**Kind**: instance property of [`Register`](#vscp.mdf.Register)  
<a id="vscp_dot_mdf_dot_Register_plus_readAccess"></a>

##### register.readAccess : `boolean`
Read access to the register allowed or not

**Kind**: instance property of [`Register`](#vscp.mdf.Register)  
<a id="vscp_dot_mdf_dot_Register_plus_writeAccess"></a>

##### register.writeAccess : `boolean`
Write access to the register allowed or not

**Kind**: instance property of [`Register`](#vscp.mdf.Register)  
<a id="vscp_dot_mdf_dot_Register_plus_page"></a>

##### register.page : `number`
Page where the register is located

**Kind**: instance property of [`Register`](#vscp.mdf.Register)  
<a id="vscp_dot_mdf_dot_Register_plus_offset"></a>

##### register.offset : `number`
Offset where the register is located on the page

**Kind**: instance property of [`Register`](#vscp.mdf.Register)  
<a id="vscp_dot_mdf_dot_Register_plus_value"></a>

##### register.value : `number`
Register value

**Kind**: instance property of [`Register`](#vscp.mdf.Register)  
<a id="vscp_dot_mdf_dot_Register_plus_dirty"></a>

##### register.dirty : `number`
Marks the register value dirty, which means the user changed it.
It can be used to detect which registers have to be written to the node.

**Kind**: instance property of [`Register`](#vscp.mdf.Register)  
<a id="vscp_dot_mdf_dot_Register_plus_userData"></a>

##### register.userData : `object`
User specific data

**Kind**: instance property of [`Register`](#vscp.mdf.Register)  
<a id="vscp_dot_mdf_dot_Register_plus_setValue"></a>

##### register.setValue(value)
This function set a register value and marks it dirty.

**Kind**: instance method of [`Register`](#vscp.mdf.Register)  

| Param | Type | Description |
| --- | --- | --- |
| value | `number` | New value |

<a id="vscp_dot_mdf_dot_Abstraction"></a>

#### mdf.Abstraction
**Kind**: static class of [`mdf`](#vscp.mdf)  

* [.Abstraction](#vscp_dot_mdf_dot_Abstraction)
    * [new vscp.mdf.Abstraction()](#new_vscp_dot_mdf_dot_Abstraction_new)
    * [.name](#vscp_dot_mdf_dot_Abstraction_plus_name) : `string`
    * [.description](#vscp_dot_mdf_dot_Abstraction_plus_description) : `string`
    * [.readAccess](#vscp_dot_mdf_dot_Abstraction_plus_readAccess) : `boolean`
    * [.writeAccess](#vscp_dot_mdf_dot_Abstraction_plus_writeAccess) : `boolean`
    * [.id](#vscp_dot_mdf_dot_Abstraction_plus_id) : `string`
    * [.page](#vscp_dot_mdf_dot_Abstraction_plus_page) : `number`
    * [.offset](#vscp_dot_mdf_dot_Abstraction_plus_offset) : `number`
    * [.value](#vscp_dot_mdf_dot_Abstraction_plus_value) : `number`
    * [.type](#vscp_dot_mdf_dot_Abstraction_plus_type) : `string`
    * [.defValue](#vscp_dot_mdf_dot_Abstraction_plus_defValue) : `number`
    * [.dirty](#vscp_dot_mdf_dot_Abstraction_plus_dirty) : `number`
    * [.userData](#vscp_dot_mdf_dot_Abstraction_plus_userData) : `object`
    * [.setValue(value)](#vscp_dot_mdf_dot_Abstraction_plus_setValue)

<a id="new_vscp_dot_mdf_dot_Abstraction_new"></a>

##### new vscp.mdf.Abstraction()
MDF abstraction with all parameters.

<a id="vscp_dot_mdf_dot_Abstraction_plus_name"></a>

##### abstraction.name : `string`
Abstraction name

**Kind**: instance property of [`Abstraction`](#vscp.mdf.Abstraction)  
<a id="vscp_dot_mdf_dot_Abstraction_plus_description"></a>

##### abstraction.description : `string`
Abstraction description

**Kind**: instance property of [`Abstraction`](#vscp.mdf.Abstraction)  
<a id="vscp_dot_mdf_dot_Abstraction_plus_readAccess"></a>

##### abstraction.readAccess : `boolean`
Read access to the abstraction allowed or not

**Kind**: instance property of [`Abstraction`](#vscp.mdf.Abstraction)  
<a id="vscp_dot_mdf_dot_Abstraction_plus_writeAccess"></a>

##### abstraction.writeAccess : `boolean`
Write access to the abstraction allowed or not

**Kind**: instance property of [`Abstraction`](#vscp.mdf.Abstraction)  
<a id="vscp_dot_mdf_dot_Abstraction_plus_id"></a>

##### abstraction.id : `string`
Abstraction id

**Kind**: instance property of [`Abstraction`](#vscp.mdf.Abstraction)  
<a id="vscp_dot_mdf_dot_Abstraction_plus_page"></a>

##### abstraction.page : `number`
Page where the abstraction is located

**Kind**: instance property of [`Abstraction`](#vscp.mdf.Abstraction)  
<a id="vscp_dot_mdf_dot_Abstraction_plus_offset"></a>

##### abstraction.offset : `number`
Offset where the abstraction is located

**Kind**: instance property of [`Abstraction`](#vscp.mdf.Abstraction)  
<a id="vscp_dot_mdf_dot_Abstraction_plus_value"></a>

##### abstraction.value : `number`
Abstraction value

**Kind**: instance property of [`Abstraction`](#vscp.mdf.Abstraction)  
<a id="vscp_dot_mdf_dot_Abstraction_plus_type"></a>

##### abstraction.type : `string`
Abstraction type

**Kind**: instance property of [`Abstraction`](#vscp.mdf.Abstraction)  
<a id="vscp_dot_mdf_dot_Abstraction_plus_defValue"></a>

##### abstraction.defValue : `number`
Abstraction default value

**Kind**: instance property of [`Abstraction`](#vscp.mdf.Abstraction)  
<a id="vscp_dot_mdf_dot_Abstraction_plus_dirty"></a>

##### abstraction.dirty : `number`
Marks the abstraction value dirty, which means the user changed it.
It can be used to detect which abstractions have to be written to the node.

**Kind**: instance property of [`Abstraction`](#vscp.mdf.Abstraction)  
<a id="vscp_dot_mdf_dot_Abstraction_plus_userData"></a>

##### abstraction.userData : `object`
User specific data

**Kind**: instance property of [`Abstraction`](#vscp.mdf.Abstraction)  
<a id="vscp_dot_mdf_dot_Abstraction_plus_setValue"></a>

##### abstraction.setValue(value)
This function set a abstraction value and marks it dirty.

**Kind**: instance method of [`Abstraction`](#vscp.mdf.Abstraction)  

| Param | Type | Description |
| --- | --- | --- |
| value | `number` | New value |

<a id="vscp_dot_mdf_dot_constants"></a>

#### mdf.constants : `object`
MDF specific constants

**Kind**: static namespace of [`mdf`](#vscp.mdf)  

* [.constants](#vscp_dot_mdf_dot_constants) : `object`
    * [.TYPE_SIZES](#vscp_dot_mdf_dot_constants_dot_TYPE_SIZES) : `enum`
    * [.CONVERSION_FROM_DECIMAL](#vscp_dot_mdf_dot_constants_dot_CONVERSION_FROM_DECIMAL)
    * [.CONVERSION_TO_DECIMAL](#vscp_dot_mdf_dot_constants_dot_CONVERSION_TO_DECIMAL)
    * [.RANGE](#vscp_dot_mdf_dot_constants_dot_RANGE)

<a id="vscp_dot_mdf_dot_constants_dot_TYPE_SIZES"></a>

##### constants.TYPE_SIZES : `enum`
MDF type sizes in bytes

**Kind**: static enum of [`constants`](#vscp.mdf.constants)  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| string | `number` | <code>0</code> | 
| bitfield | `number` | <code>1</code> | 
| bool | `number` | <code>1</code> | 
| int8_t | `number` | <code>1</code> | 
| uint8_t | `number` | <code>1</code> | 
| int16_t | `number` | <code>2</code> | 
| uint16_t | `number` | <code>2</code> | 
| int32_t | `number` | <code>4</code> | 
| uint32_t | `number` | <code>4</code> | 
| int64_t | `number` | <code>8</code> | 
| uint64_t | `number` | <code>8</code> | 
| float | `number` | <code>4</code> | 
| double | `number` | <code>8</code> | 
| date | `number` | <code>4</code> | 
| time | `number` | <code>4</code> | 
| guid | `number` | <code>16</code> | 
| char | `number` | <code>1</code> | 
| byte | `number` | <code>1</code> | 
| short | `number` | <code>2</code> | 
| integer | `number` | <code>2</code> | 
| long | `number` | <code>4</code> | 

<a id="vscp_dot_mdf_dot_constants_dot_CONVERSION_FROM_DECIMAL"></a>

##### constants.CONVERSION_FROM_DECIMAL
Conversion functions from decimal

**Kind**: static constant of [`constants`](#vscp.mdf.constants)  
<a id="vscp_dot_mdf_dot_constants_dot_CONVERSION_TO_DECIMAL"></a>

##### constants.CONVERSION_TO_DECIMAL
Conversion functions to decimal

**Kind**: static constant of [`constants`](#vscp.mdf.constants)  
<a id="vscp_dot_mdf_dot_constants_dot_RANGE"></a>

##### constants.RANGE
Type ranges

**Kind**: static constant of [`constants`](#vscp.mdf.constants)  
<a id="vscp_dot_mdf_dot_timeout"></a>

#### mdf.timeout : `number`
VSCP response timeout in ms

**Kind**: static constant of [`mdf`](#vscp.mdf)  
<a id="vscp_dot_mdf_dot_load"></a>

#### mdf.load(options)
Get the MDF as xml document from a URL.

**Kind**: static method of [`mdf`](#vscp.mdf)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.url | `function` | URL to MDF file |
| options.onSuccess | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_mdf_dot_loadLocal"></a>

#### mdf.loadLocal(options)
Get the MDF as xml document from local file system.

**Kind**: static method of [`mdf`](#vscp.mdf)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.fileRef | `function` | File reference to MDF file |
| options.onSuccess | `function` | If the xml file is successful loaded, this function will be called. |
| [options.onError] | `function` | If loading the xml file failed, this function will be called. |

<a id="vscp_dot_mdf_dot_readAbstractValue"></a>

#### mdf.readAbstractValue(options)
Read a abstract value.

**Kind**: static method of [`mdf`](#vscp.mdf)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.mdf | `object` | MDF as xml jquery object |
| options.id | `number` | Abstract value id |
| options.onSuccess | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_mdf_dot_writeAbstractValue"></a>

#### mdf.writeAbstractValue(options)
Write a abstract value.

**Kind**: static method of [`mdf`](#vscp.mdf)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.mdf | `object` | MDF as xml jquery object |
| options.id | `number` | Abstract value id |
| options.value | `string` | Abstract value |
| options.onSuccess | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_mdf_dot_writeAbstractBits"></a>

#### mdf.writeAbstractBits(options)
Change some bits in a abstract value.

**Kind**: static method of [`mdf`](#vscp.mdf)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.mdf | `object` | MDF as xml jquery object |
| options.id | `number` | Abstract value id |
| options.pos | `number` | Bit position |
| options.width | `number` | Bit width |
| options.value | `string` | Abstract value |
| options.onSuccess | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_mdf_dot_getRegisters"></a>

#### mdf.getRegisters(options) ⇒ [`Array.&lt;Register&gt;`](#vscp.mdf.Register)
This function retrieves all register informations from a mdf.

**Kind**: static method of [`mdf`](#vscp.mdf)  
**Returns**: [`Array.&lt;Register&gt;`](#vscp.mdf.Register) - Array of MDF registers  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.mdf | `object` | MDF as jquery object |

<a id="vscp_dot_mdf_dot_getAbstractions"></a>

#### mdf.getAbstractions(options) ⇒ [`Array.&lt;Abstraction&gt;`](#vscp.mdf.Abstraction)
This function retrieves all abstraction informations from a mdf.

**Kind**: static method of [`mdf`](#vscp.mdf)  
**Returns**: [`Array.&lt;Abstraction&gt;`](#vscp.mdf.Abstraction) - Array of MDF abstractions  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.mdf | `object` | MDF as jquery object |

<a id="vscp_dot_measurement"></a>

### vscp.measurement : `object`
VSCP measurement stuff

**Kind**: static namespace of [`vscp`](#vscp)  

* [.measurement](#vscp_dot_measurement) : `object`
    * [.Decoder](#vscp_dot_measurement_dot_Decoder)
        * [new vscp.measurement.Decoder(options)](#new_vscp_dot_measurement_dot_Decoder_new)
        * [.client](#vscp_dot_measurement_dot_Decoder_plus_client) : [`Client`](#vscp.ws.Client)
        * [.onValue](#vscp_dot_measurement_dot_Decoder_plus_onValue) : `function`
        * [.filter](#vscp_dot_measurement_dot_Decoder_plus_filter) : `object`
    * [.constants](#vscp_dot_measurement_dot_constants) : `object`
        * [.units](#vscp_dot_measurement_dot_constants_dot_units) : `Array.&lt;string&gt;`
    * [.timeout](#vscp_dot_measurement_dot_timeout) : `number`
    * [.toFixed(value, precision)](#vscp_dot_measurement_dot_toFixed) ⇒ `number`
    * [.varInteger2Float(data)](#vscp_dot_measurement_dot_varInteger2Float) ⇒ `number`
    * [.getDataCoding(data)](#vscp_dot_measurement_dot_getDataCoding) ⇒ `number`
    * [.getUnitFromDataCoding(data)](#vscp_dot_measurement_dot_getUnitFromDataCoding) ⇒ `number`
    * [.getSensorIndexFromDataCoding(data)](#vscp_dot_measurement_dot_getSensorIndexFromDataCoding) ⇒ `number`
    * [.decodeClass10(data)](#vscp_dot_measurement_dot_decodeClass10) ⇒ `number`
    * [.decodeClass60Number(data)](#vscp_dot_measurement_dot_decodeClass60Number) ⇒ `number`
    * [.decodeClass65Number(data)](#vscp_dot_measurement_dot_decodeClass65Number) ⇒ `number`
    * [.convertFahrenheitToKelvin(value)](#vscp_dot_measurement_dot_convertFahrenheitToKelvin) ⇒ `number`
    * [.convertFahrenheitToCelsius(value)](#vscp_dot_measurement_dot_convertFahrenheitToCelsius) ⇒ `number`
    * [.convertCelsiusToFahrenheit(value)](#vscp_dot_measurement_dot_convertCelsiusToFahrenheit) ⇒ `number`
    * [.convertKelvinToCelsius(value)](#vscp_dot_measurement_dot_convertKelvinToCelsius) ⇒ `number`
    * [.convertCelsiusToKelvin(value)](#vscp_dot_measurement_dot_convertCelsiusToKelvin) ⇒ `number`
    * [.convertKelvinToFahrenheit(value)](#vscp_dot_measurement_dot_convertKelvinToFahrenheit) ⇒ `number`
    * [.convertMeterToFeet(value)](#vscp_dot_measurement_dot_convertMeterToFeet) ⇒ `number`
    * [.convertFeetToMeter(value)](#vscp_dot_measurement_dot_convertFeetToMeter) ⇒ `number`
    * [.convertMeterToInch(value)](#vscp_dot_measurement_dot_convertMeterToInch) ⇒ `number`
    * [.convertInchToMeter(value)](#vscp_dot_measurement_dot_convertInchToMeter) ⇒ `number`

<a id="vscp_dot_measurement_dot_Decoder"></a>

#### measurement.Decoder
**Kind**: static class of [`measurement`](#vscp.measurement)  

* [.Decoder](#vscp_dot_measurement_dot_Decoder)
    * [new vscp.measurement.Decoder(options)](#new_vscp_dot_measurement_dot_Decoder_new)
    * [.client](#vscp_dot_measurement_dot_Decoder_plus_client) : [`Client`](#vscp.ws.Client)
    * [.onValue](#vscp_dot_measurement_dot_Decoder_plus_onValue) : `function`
    * [.filter](#vscp_dot_measurement_dot_Decoder_plus_filter) : `object`

<a id="new_vscp_dot_measurement_dot_Decoder_new"></a>

##### new vscp.measurement.Decoder(options)
Measurement decoder


| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.onValue | `function` | Function which will be called for every received measurement value. |
| options.filter | `object` | Filter |
| options.filter.vscpGuid | `string` | Node GUID string |
| options.filter.vscpClass | `number` | VSCP class |
| options.filter.vscpType | `number` | VSCP type |
| options.filter.sensorIndex | `number` | Sensor index |
| options.filter.zone | `number` | Zone |
| options.filter.subZone | `number` | Sub-zone |

<a id="vscp_dot_measurement_dot_Decoder_plus_client"></a>

##### decoder.client : [`Client`](#vscp.ws.Client)
VSCP websocket client

**Kind**: instance property of [`Decoder`](#vscp.measurement.Decoder)  
<a id="vscp_dot_measurement_dot_Decoder_plus_onValue"></a>

##### decoder.onValue : `function`
Callback which will be called for every received value.

**Kind**: instance property of [`Decoder`](#vscp.measurement.Decoder)  
<a id="vscp_dot_measurement_dot_Decoder_plus_filter"></a>

##### decoder.filter : `object`
Filter

**Kind**: instance property of [`Decoder`](#vscp.measurement.Decoder)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| vscpGuid | `string` | Node GUID string |
| vscpClass | `number` | VSCP class |
| vscpType | `number` | VSCP type |
| datetime | `date` | datetime |
| sensorIndex | `number` | Sensor index |
| zone | `number` | Zone |
| subZone | `number` | Sub-zone |

<a id="vscp_dot_measurement_dot_constants"></a>

#### measurement.constants : `object`
Measurement specific constants

**Kind**: static namespace of [`measurement`](#vscp.measurement)  
<a id="vscp_dot_measurement_dot_constants_dot_units"></a>

##### constants.units : `Array.&lt;string&gt;`
VSCP units

**Kind**: static property of [`constants`](#vscp.measurement.constants)  
<a id="vscp_dot_measurement_dot_timeout"></a>

#### measurement.timeout : `number`
VSCP response timeout in ms

**Kind**: static constant of [`measurement`](#vscp.measurement)  
<a id="vscp_dot_measurement_dot_toFixed"></a>

#### measurement.toFixed(value, precision) ⇒ `number`
Round value to a fixed precision.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Rounded value  

| Param | Type | Description |
| --- | --- | --- |
| value | `number` | Value |
| precision | `number` | Precision |

<a id="vscp_dot_measurement_dot_varInteger2Float"></a>

#### measurement.varInteger2Float(data) ⇒ `number`
Convert a integer value to float

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Float value  

| Param | Type | Description |
| --- | --- | --- |
| data | `Array.&lt;number&gt;` | Byte array |

<a id="vscp_dot_measurement_dot_getDataCoding"></a>

#### measurement.getDataCoding(data) ⇒ `number`
Get data coding.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Coding  

| Param | Type | Description |
| --- | --- | --- |
| data | `number` | Data |

<a id="vscp_dot_measurement_dot_getUnitFromDataCoding"></a>

#### measurement.getUnitFromDataCoding(data) ⇒ `number`
Get unit from data coding.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Unit  

| Param | Type | Description |
| --- | --- | --- |
| data | `number` | Data coding |

<a id="vscp_dot_measurement_dot_getSensorIndexFromDataCoding"></a>

#### measurement.getSensorIndexFromDataCoding(data) ⇒ `number`
Get sensor index from data coding.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Sensor index  

| Param | Type | Description |
| --- | --- | --- |
| data | `number` | Data coding |

<a id="vscp_dot_measurement_dot_decodeClass10"></a>

#### measurement.decodeClass10(data) ⇒ `number`
Decode a class 10 measurement.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Value as float  

| Param | Type | Description |
| --- | --- | --- |
| data | `Array.&lt;number&gt;` | Data (event data array where first data byte is the data coding) |

<a id="vscp_dot_measurement_dot_decodeClass60Number"></a>

#### measurement.decodeClass60Number(data) ⇒ `number`
Decode a class 60 measurement.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Value as float  

| Param | Type | Description |
| --- | --- | --- |
| data | `number` | Data |

<a id="vscp_dot_measurement_dot_decodeClass65Number"></a>

#### measurement.decodeClass65Number(data) ⇒ `number`
Decode a class 65 measurement.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Value as float  

| Param | Type | Description |
| --- | --- | --- |
| data | `number` | Data |

<a id="vscp_dot_measurement_dot_convertFahrenheitToKelvin"></a>

#### measurement.convertFahrenheitToKelvin(value) ⇒ `number`
Convert from unit fahrenheit to unit kelvin.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Converted value  

| Param | Type | Description |
| --- | --- | --- |
| value | `string` \| `number` | Value |

<a id="vscp_dot_measurement_dot_convertFahrenheitToCelsius"></a>

#### measurement.convertFahrenheitToCelsius(value) ⇒ `number`
Convert from unit fahrenheit to unit celsius.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Converted value  

| Param | Type | Description |
| --- | --- | --- |
| value | `string` \| `number` | Value |

<a id="vscp_dot_measurement_dot_convertCelsiusToFahrenheit"></a>

#### measurement.convertCelsiusToFahrenheit(value) ⇒ `number`
Convert from unit celsius to unit fahrenheit.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Converted value  

| Param | Type | Description |
| --- | --- | --- |
| value | `string` \| `number` | Value |

<a id="vscp_dot_measurement_dot_convertKelvinToCelsius"></a>

#### measurement.convertKelvinToCelsius(value) ⇒ `number`
Convert from unit kelvin to unit celsius.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Converted value  

| Param | Type | Description |
| --- | --- | --- |
| value | `string` \| `number` | Value |

<a id="vscp_dot_measurement_dot_convertCelsiusToKelvin"></a>

#### measurement.convertCelsiusToKelvin(value) ⇒ `number`
Convert from unit celsius to unit kelvin.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Converted value  

| Param | Type | Description |
| --- | --- | --- |
| value | `string` \| `number` | Value |

<a id="vscp_dot_measurement_dot_convertKelvinToFahrenheit"></a>

#### measurement.convertKelvinToFahrenheit(value) ⇒ `number`
Convert from unit kelvin to unit fahrenheit.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Converted value  

| Param | Type | Description |
| --- | --- | --- |
| value | `string` \| `number` | Value |

<a id="vscp_dot_measurement_dot_convertMeterToFeet"></a>

#### measurement.convertMeterToFeet(value) ⇒ `number`
Convert from unit meter to unit feet.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Converted value  

| Param | Type | Description |
| --- | --- | --- |
| value | `string` \| `number` | Value |

<a id="vscp_dot_measurement_dot_convertFeetToMeter"></a>

#### measurement.convertFeetToMeter(value) ⇒ `number`
Convert from unit feet to unit meter.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Converted value  

| Param | Type | Description |
| --- | --- | --- |
| value | `string` \| `number` | Value |

<a id="vscp_dot_measurement_dot_convertMeterToInch"></a>

#### measurement.convertMeterToInch(value) ⇒ `number`
Convert from unit meter to unit inch.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Converted value  

| Param | Type | Description |
| --- | --- | --- |
| value | `string` \| `number` | Value |

<a id="vscp_dot_measurement_dot_convertInchToMeter"></a>

#### measurement.convertInchToMeter(value) ⇒ `number`
Convert from unit inch to unit meter.

**Kind**: static method of [`measurement`](#vscp.measurement)  
**Returns**: `number` - Converted value  

| Param | Type | Description |
| --- | --- | --- |
| value | `string` \| `number` | Value |

<a id="vscp_dot_register"></a>

### vscp.register : `object`
VSCP register access functions

**Kind**: static namespace of [`vscp`](#vscp)  

* [.register](#vscp_dot_register) : `object`
    * [.constants](#vscp_dot_register_dot_constants) : `enum`
    * [.timeout](#vscp_dot_register_dot_timeout) : `number`
    * [.read(options)](#vscp_dot_register_dot_read)
    * [.write(options)](#vscp_dot_register_dot_write)
    * [.writeBits(options)](#vscp_dot_register_dot_writeBits)
    * [.readAlarmStatus(options)](#vscp_dot_register_dot_readAlarmStatus)
    * [.readVscpVersion(options)](#vscp_dot_register_dot_readVscpVersion)
    * [.readNodeControlFlags(options)](#vscp_dot_register_dot_readNodeControlFlags)
    * [.readUserId(options)](#vscp_dot_register_dot_readUserId)
    * [.readManufacturerDevId(options)](#vscp_dot_register_dot_readManufacturerDevId)
    * [.readManufacturerSubDevId(options)](#vscp_dot_register_dot_readManufacturerSubDevId)
    * [.readNicknameId(options)](#vscp_dot_register_dot_readNicknameId)
    * [.readSelectedPage(options)](#vscp_dot_register_dot_readSelectedPage)
    * [.readFirmwareVersion(options)](#vscp_dot_register_dot_readFirmwareVersion)
    * [.readBootloaderAlgorithm(options)](#vscp_dot_register_dot_readBootloaderAlgorithm)
    * [.readUsedPages(options)](#vscp_dot_register_dot_readUsedPages)
    * [.readStdDevFamCode(options)](#vscp_dot_register_dot_readStdDevFamCode)
    * [.readStdDevType(options)](#vscp_dot_register_dot_readStdDevType)
    * [.readGUID(options)](#vscp_dot_register_dot_readGUID)
    * [.readMdfUrl(options)](#vscp_dot_register_dot_readMdfUrl)

<a id="vscp_dot_register_dot_constants"></a>

#### register.constants : `enum`
VSCP registers

**Kind**: static enum of [`register`](#vscp.register)  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| ALARM_STATUS | `number` | <code>128</code> | 
| VSCP_VERSION_MAJOR | `number` | <code>129</code> | 
| VSCP_VERSION_MINOR | `number` | <code>130</code> | 
| NODE_CONTROL_FLAGS | `number` | <code>131</code> | 
| USER_ID_0 | `number` | <code>132</code> | 
| USER_ID_1 | `number` | <code>133</code> | 
| USER_ID_2 | `number` | <code>134</code> | 
| USER_ID_3 | `number` | <code>135</code> | 
| USER_ID_4 | `number` | <code>136</code> | 
| MANUFACTURER_DEV_ID_0 | `number` | <code>137</code> | 
| MANUFACTURER_DEV_ID_1 | `number` | <code>138</code> | 
| MANUFACTURER_DEV_ID_2 | `number` | <code>139</code> | 
| MANUFACTURER_DEV_ID_3 | `number` | <code>140</code> | 
| MANUFACTURER_SUB_DEV_ID_0 | `number` | <code>141</code> | 
| MANUFACTURER_SUB_DEV_ID_1 | `number` | <code>142</code> | 
| MANUFACTURER_SUB_DEV_ID_2 | `number` | <code>143</code> | 
| MANUFACTURER_SUB_DEV_ID_3 | `number` | <code>144</code> | 
| NICKNAME_ID | `number` | <code>145</code> | 
| PAGE_SELECT_MSB | `number` | <code>146</code> | 
| PAGE_SELECT_LSB | `number` | <code>147</code> | 
| FIRMWARE_VERSION_MAJOR | `number` | <code>148</code> | 
| FIRMWARE_VERSION_MINOR | `number` | <code>149</code> | 
| FIRMWARE_VERSION_SUB_MINOR | `number` | <code>150</code> | 
| BOOT_LOADER_ALGORITHM | `number` | <code>151</code> | 
| BUFFER_SIZE | `number` | <code>152</code> | 
| PAGES_USED | `number` | <code>153</code> | 
| STD_DEV_FAMILY_CODE_3 | `number` | <code>154</code> | 
| STD_DEV_FAMILY_CODE_2 | `number` | <code>155</code> | 
| STD_DEV_FAMILY_CODE_1 | `number` | <code>156</code> | 
| STD_DEV_FAMILY_CODE_0 | `number` | <code>157</code> | 
| STD_DEV_TYPE_3 | `number` | <code>158</code> | 
| STD_DEV_TYPE_2 | `number` | <code>159</code> | 
| STD_DEV_TYPE_1 | `number` | <code>160</code> | 
| STD_DEV_TYPE_0 | `number` | <code>161</code> | 
| RESTORE_STD_CFG | `number` | <code>162</code> | 
| GUID | `number` | <code>208</code> | 
| MDF_URL | `number` | <code>224</code> | 

<a id="vscp_dot_register_dot_timeout"></a>

#### register.timeout : `number`
VSCP response timeout in ms

**Kind**: static constant of [`register`](#vscp.register)  
<a id="vscp_dot_register_dot_read"></a>

#### register.read(options)
Read one or more register values.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| [options.page] | `number` | Register page |
| options.offset | `number` | Register page offset |
| options.count | `number` | Number of registers to read |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_write"></a>

#### register.write(options)
Write one or more register values.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.page | `number` | Register page |
| options.offset | `number` | Register page offset |
| options.data | `Array.&lt;number&gt;` | Data array |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_writeBits"></a>

#### register.writeBits(options)
Change some bits of a register.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP connection |
| options.nodeId | `number` | Node id |
| options.page | `number` | Register page |
| options.offset | `number` | Register page offset |
| options.pos | `number` | Bit position |
| options.width | `number` | Bit width |
| options.data | `Array.&lt;number&gt;` | Data array |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_readAlarmStatus"></a>

#### register.readAlarmStatus(options)
Read the alarm status from a node.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_readVscpVersion"></a>

#### register.readVscpVersion(options)
Read the supported VSCP version from a node.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_readNodeControlFlags"></a>

#### register.readNodeControlFlags(options)
Read the node control flags from a node.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_readUserId"></a>

#### register.readUserId(options)
Read the user id from a node.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_readManufacturerDevId"></a>

#### register.readManufacturerDevId(options)
Read the manufacturer device id from a node.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_readManufacturerSubDevId"></a>

#### register.readManufacturerSubDevId(options)
Read the manufacturer sub device id from a node.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_readNicknameId"></a>

#### register.readNicknameId(options)
Read the nickname id from a node.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_readSelectedPage"></a>

#### register.readSelectedPage(options)
Read the current selected page from a node.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_readFirmwareVersion"></a>

#### register.readFirmwareVersion(options)
Read the firmware version from a node.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_readBootloaderAlgorithm"></a>

#### register.readBootloaderAlgorithm(options)
Read the bootloader algorithm from a node.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_readUsedPages"></a>

#### register.readUsedPages(options)
Read the number of used pages from a node.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_readStdDevFamCode"></a>

#### register.readStdDevFamCode(options)
Read the standard device family code from a node.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_readStdDevType"></a>

#### register.readStdDevType(options)
Read the standard device type from a node.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_readGUID"></a>

#### register.readGUID(options)
Read the GUID from a node.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_register_dot_readMdfUrl"></a>

#### register.readMdfUrl(options)
Read the MDF URL from a node.

**Kind**: static method of [`register`](#vscp.register)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_rest"></a>

### vscp.rest : `object`
VSCP REST api functions

**Kind**: static namespace of [`vscp`](#vscp)  

* [.rest](#vscp_dot_rest) : `object`
    * [.Client](#vscp_dot_rest_dot_Client)
        * [new vscp.rest.Client(config)](#new_vscp_dot_rest_dot_Client_new)
        * [.baseUrl](#vscp_dot_rest_dot_Client_plus_baseUrl) : `string`
        * [.pathPrefix](#vscp_dot_rest_dot_Client_plus_pathPrefix) : `string`
        * [.apiVersion](#vscp_dot_rest_dot_Client_plus_apiVersion) : `string`
        * [.sessionKey](#vscp_dot_rest_dot_Client_plus_sessionKey) : `string`
        * [.openSession(options)](#vscp_dot_rest_dot_Client_plus_openSession) ⇒ `object`
        * [.closeSession([options])](#vscp_dot_rest_dot_Client_plus_closeSession) ⇒ `object`
        * [.getStatus([options])](#vscp_dot_rest_dot_Client_plus_getStatus) ⇒ `object`
        * [.sendEvent(options)](#vscp_dot_rest_dot_Client_plus_sendEvent) ⇒ `object`
        * [.readEvent([options])](#vscp_dot_rest_dot_Client_plus_readEvent) ⇒ `object`
        * [.setFilter(options)](#vscp_dot_rest_dot_Client_plus_setFilter) ⇒ `object`
        * [.clearQueue([options])](#vscp_dot_rest_dot_Client_plus_clearQueue) ⇒ `object`
        * [.createVar(options)](#vscp_dot_rest_dot_Client_plus_createVar) ⇒ `object`
        * [.readVar(options)](#vscp_dot_rest_dot_Client_plus_readVar) ⇒ `object`
        * [.writeVar(options)](#vscp_dot_rest_dot_Client_plus_writeVar) ⇒ `object`
        * [.removeVar(options)](#vscp_dot_rest_dot_Client_plus_removeVar) ⇒ `object`
        * [.listVar(options)](#vscp_dot_rest_dot_Client_plus_listVar) ⇒ `object`

<a id="vscp_dot_rest_dot_Client"></a>

#### rest.Client
**Kind**: static class of [`rest`](#vscp.rest)  

* [.Client](#vscp_dot_rest_dot_Client)
    * [new vscp.rest.Client(config)](#new_vscp_dot_rest_dot_Client_new)
    * [.baseUrl](#vscp_dot_rest_dot_Client_plus_baseUrl) : `string`
    * [.pathPrefix](#vscp_dot_rest_dot_Client_plus_pathPrefix) : `string`
    * [.apiVersion](#vscp_dot_rest_dot_Client_plus_apiVersion) : `string`
    * [.sessionKey](#vscp_dot_rest_dot_Client_plus_sessionKey) : `string`
    * [.openSession(options)](#vscp_dot_rest_dot_Client_plus_openSession) ⇒ `object`
    * [.closeSession([options])](#vscp_dot_rest_dot_Client_plus_closeSession) ⇒ `object`
    * [.getStatus([options])](#vscp_dot_rest_dot_Client_plus_getStatus) ⇒ `object`
    * [.sendEvent(options)](#vscp_dot_rest_dot_Client_plus_sendEvent) ⇒ `object`
    * [.readEvent([options])](#vscp_dot_rest_dot_Client_plus_readEvent) ⇒ `object`
    * [.setFilter(options)](#vscp_dot_rest_dot_Client_plus_setFilter) ⇒ `object`
    * [.clearQueue([options])](#vscp_dot_rest_dot_Client_plus_clearQueue) ⇒ `object`
    * [.createVar(options)](#vscp_dot_rest_dot_Client_plus_createVar) ⇒ `object`
    * [.readVar(options)](#vscp_dot_rest_dot_Client_plus_readVar) ⇒ `object`
    * [.writeVar(options)](#vscp_dot_rest_dot_Client_plus_writeVar) ⇒ `object`
    * [.removeVar(options)](#vscp_dot_rest_dot_Client_plus_removeVar) ⇒ `object`
    * [.listVar(options)](#vscp_dot_rest_dot_Client_plus_listVar) ⇒ `object`

<a id="new_vscp_dot_rest_dot_Client_new"></a>

##### new vscp.rest.Client(config)
The VSCP client class handles the basic REST api of the VSCP daemon.
The function interface uses jquery ajax call in the background and will
return a Promise.


| Param | Type | Description |
| --- | --- | --- |
| config | `string` | Configuration |
| [config.baseUrl] | `string` | VSCP daemon URL (protocol + hostname + port) |
| [options.pathPrefix] | `string` | Path prefix (default: '/vscp'), which comes right after the base url. |
| [options.apiVersion] | `string` | API version (for future use) |

<a id="vscp_dot_rest_dot_Client_plus_baseUrl"></a>

##### client.baseUrl : `string`
Base URL

**Kind**: instance property of [`Client`](#vscp.rest.Client)  
<a id="vscp_dot_rest_dot_Client_plus_pathPrefix"></a>

##### client.pathPrefix : `string`
Path prefix

**Kind**: instance property of [`Client`](#vscp.rest.Client)  
<a id="vscp_dot_rest_dot_Client_plus_apiVersion"></a>

##### client.apiVersion : `string`
REST API version (future use)

**Kind**: instance property of [`Client`](#vscp.rest.Client)  
<a id="vscp_dot_rest_dot_Client_plus_sessionKey"></a>

##### client.sessionKey : `string`
Session key

**Kind**: instance property of [`Client`](#vscp.rest.Client)  
<a id="vscp_dot_rest_dot_Client_plus_openSession"></a>

##### client.openSession(options) ⇒ `object`
Open a session.

**Kind**: instance method of [`Client`](#vscp.rest.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.user | `string` | User name |
| options.password | `string` | Password |
| [options.onSuccess] | `function` | Callback, which is called for successful request. |
| [options.onError] | `function` | Callback, which is called for failed request. |

<a id="vscp_dot_rest_dot_Client_plus_closeSession"></a>

##### client.closeSession([options]) ⇒ `object`
Close a session.

**Kind**: instance method of [`Client`](#vscp.rest.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| [options] | `object` | Options |
| [options.onSuccess] | `function` | Callback, which is called for successful request. |
| [options.onError] | `function` | Callback, which is called for failed request. |

<a id="vscp_dot_rest_dot_Client_plus_getStatus"></a>

##### client.getStatus([options]) ⇒ `object`
Get status and how many events are in the queue.

**Kind**: instance method of [`Client`](#vscp.rest.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| [options] | `object` | Options |
| [options.onSuccess] | `function` | Callback, which is called for successful request. |
| [options.onError] | `function` | Callback, which is called for failed request. |

<a id="vscp_dot_rest_dot_Client_plus_sendEvent"></a>

##### client.sendEvent(options) ⇒ `object`
Send a VSCP event.

**Kind**: instance method of [`Client`](#vscp.rest.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.event | `object` | VSCP event |
| [options.onSuccess] | `function` | Callback, which is called for successful request. |
| [options.onError] | `function` | Callback, which is called for failed request. |

<a id="vscp_dot_rest_dot_Client_plus_readEvent"></a>

##### client.readEvent([options]) ⇒ `object`
Read one or more VSCP events.

**Kind**: instance method of [`Client`](#vscp.rest.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| [options] | `object` | Options |
| [options.count] | `object` | Number of events to read |
| [options.onSuccess] | `function` | Callback, which is called for successful request. |
| [options.onError] | `function` | Callback, which is called for failed request. |

<a id="vscp_dot_rest_dot_Client_plus_setFilter"></a>

##### client.setFilter(options) ⇒ `object`
Set filter.

**Kind**: instance method of [`Client`](#vscp.rest.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| [options.filterPriority] | `number` | Priority filter |
| [options.filterClass] | `number` | Class filter |
| [options.filterType] | `number` | Type filter |
| [options.filterGuid] | `Array.&lt;number&gt;` \| `string` | GUID filter |
| [options.maskPriority] | `number` | Priority mask |
| [options.maskClass] | `number` | Class mask |
| [options.maskType] | `number` | Type mask |
| [options.maskGuid] | `Array.&lt;number&gt;` \| `string` | GUID mask |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_rest_dot_Client_plus_clearQueue"></a>

##### client.clearQueue([options]) ⇒ `object`
Clear the VSCP event queue on the server side.

**Kind**: instance method of [`Client`](#vscp.rest.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| [options] | `object` | Options |
| [options.onSuccess] | `function` | Callback, which is called for successful request. |
| [options.onError] | `function` | Callback, which is called for failed request. |

<a id="vscp_dot_rest_dot_Client_plus_createVar"></a>

##### client.createVar(options) ⇒ `object`
Create a a VSCP remote variable.

**Kind**: instance method of [`Client`](#vscp.rest.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.name | `string` | Variable name |
| [options.type] | `number` | Variable type (default: string) |
| [options.accessrights] | `number` | Variable value (default: 744) |
| options.persistency | `boolean` | Variable is persistent (true) or not (false) |
| options.value | `string` | Variable Value |
| [options.note] | `string` | Variable note (optional) |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_rest_dot_Client_plus_readVar"></a>

##### client.readVar(options) ⇒ `object`
Read a value from a VSCP server variable.

**Kind**: instance method of [`Client`](#vscp.rest.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.name | `string` | Variable name |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_rest_dot_Client_plus_writeVar"></a>

##### client.writeVar(options) ⇒ `object`
Write a value to a VSCP server variable.

**Kind**: instance method of [`Client`](#vscp.rest.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.name | `string` | Variable name |
| options.value | `string` | Variable value |
| options.type | `number` | Variable type |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_rest_dot_Client_plus_removeVar"></a>

##### client.removeVar(options) ⇒ `object`
Remove a VSCP server variable.

**Kind**: instance method of [`Client`](#vscp.rest.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.name | `string` | Variable name |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_rest_dot_Client_plus_listVar"></a>

##### client.listVar(options) ⇒ `object`
List all VSCP server variables.

**Kind**: instance method of [`Client`](#vscp.rest.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.listLong | `boolean` | When false the variable list dos not include value and note. If set to true value and note is included. |
| [options.regex] | `string` | Regular expression to filter variables |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_service"></a>

### vscp.service : `object`
VSCP service supporting functions

**Kind**: static namespace of [`vscp`](#vscp)  

* [.service](#vscp_dot_service) : `object`
    * [.Container](#vscp_dot_service_dot_Container)
        * [new vscp.service.Container(options)](#new_vscp_dot_service_dot_Container_new)
        * [.client](#vscp_dot_service_dot_Container_plus_client) : [`Client`](#vscp.ws.Client)
        * [.name](#vscp_dot_service_dot_Container_plus_name) : `string`
        * [.data](#vscp_dot_service_dot_Container_plus_data) : `Array.&lt;object&gt;`
        * [.separator](#vscp_dot_service_dot_Container_plus_separator) : `Array.&lt;object&gt;`
        * [.create(options)](#vscp_dot_service_dot_Container_plus_create)
        * [.write(options)](#vscp_dot_service_dot_Container_plus_write)
        * [.read(options)](#vscp_dot_service_dot_Container_plus_read)
    * [.timeout](#vscp_dot_service_dot_timeout) : `number`
    * [.whoIsThere(options)](#vscp_dot_service_dot_whoIsThere)
    * [.scan(options)](#vscp_dot_service_dot_scan)

<a id="vscp_dot_service_dot_Container"></a>

#### service.Container
**Kind**: static class of [`service`](#vscp.service)  

* [.Container](#vscp_dot_service_dot_Container)
    * [new vscp.service.Container(options)](#new_vscp_dot_service_dot_Container_new)
    * [.client](#vscp_dot_service_dot_Container_plus_client) : [`Client`](#vscp.ws.Client)
    * [.name](#vscp_dot_service_dot_Container_plus_name) : `string`
    * [.data](#vscp_dot_service_dot_Container_plus_data) : `Array.&lt;object&gt;`
    * [.separator](#vscp_dot_service_dot_Container_plus_separator) : `Array.&lt;object&gt;`
    * [.create(options)](#vscp_dot_service_dot_Container_plus_create)
    * [.write(options)](#vscp_dot_service_dot_Container_plus_write)
    * [.read(options)](#vscp_dot_service_dot_Container_plus_read)

<a id="new_vscp_dot_service_dot_Container_new"></a>

##### new vscp.service.Container(options)
The container is used to store javascript objects in a daemon variable as string.
It supports one or more objects in a single variable!


| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.name | `string` | Container name |

<a id="vscp_dot_service_dot_Container_plus_client"></a>

##### container.client : [`Client`](#vscp.ws.Client)
VSCP websocket client

**Kind**: instance property of [`Container`](#vscp.service.Container)  
<a id="vscp_dot_service_dot_Container_plus_name"></a>

##### container.name : `string`
Complete container name (prefix + user defined name)

**Kind**: instance property of [`Container`](#vscp.service.Container)  
<a id="vscp_dot_service_dot_Container_plus_data"></a>

##### container.data : `Array.&lt;object&gt;`
Data container itself

**Kind**: instance property of [`Container`](#vscp.service.Container)  
<a id="vscp_dot_service_dot_Container_plus_separator"></a>

##### container.separator : `Array.&lt;object&gt;`
Data element separator

**Kind**: instance property of [`Container`](#vscp.service.Container)  
<a id="vscp_dot_service_dot_Container_plus_create"></a>

##### container.create(options)
Create a container at the daemon.

**Kind**: instance method of [`Container`](#vscp.service.Container)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_service_dot_Container_plus_write"></a>

##### container.write(options)
Write the container to a daemon variable.
The container must exist at the daemon!

**Kind**: instance method of [`Container`](#vscp.service.Container)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_service_dot_Container_plus_read"></a>

##### container.read(options)
Read the container from the daemon variable.

**Kind**: instance method of [`Container`](#vscp.service.Container)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_service_dot_timeout"></a>

#### service.timeout : `number`
VSCP response timeout in ms

**Kind**: static constant of [`service`](#vscp.service)  
<a id="vscp_dot_service_dot_whoIsThere"></a>

#### service.whoIsThere(options)
Request a response from all nodes on the communication bus and returns
their GUID and MDF URL.

**Kind**: static method of [`service`](#vscp.service)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_service_dot_scan"></a>

#### service.scan(options)
Scan for nodes.

**Kind**: static method of [`service`](#vscp.service)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.begin | `number` | Node id where to start scanning |
| options.end | `number` | Node id where to stop scanning |
| options.onSuccess | `function` | Callback which is called on successful operation |
| [options.onError] | `function` | Callback which is called on failed operation |

<a id="vscp_dot_widget"></a>

### vscp.widget : `object`
VSCP widgets

**Kind**: static namespace of [`vscp`](#vscp)  

* [.widget](#vscp_dot_widget) : `object`
    * [.Button](#vscp_dot_widget_dot_Button)
        * [new vscp.widget.Button(options)](#new_vscp_dot_widget_dot_Button_new)
        * [.draw()](#vscp_dot_widget_dot_Button_plus_draw)
        * [.setEnabled(value)](#vscp_dot_widget_dot_Button_plus_setEnabled)
    * [.Thermometer](#vscp_dot_widget_dot_Thermometer)
        * [new vscp.widget.Thermometer(options)](#new_vscp_dot_widget_dot_Thermometer_new)
        * [.draw()](#vscp_dot_widget_dot_Thermometer_plus_draw)
        * [.setEnabled(value)](#vscp_dot_widget_dot_Thermometer_plus_setEnabled)
    * [.generateUUID()](#vscp_dot_widget_dot_generateUUID) ⇒ `string`
    * [.Image(options)](#vscp_dot_widget_dot_Image)

<a id="vscp_dot_widget_dot_Button"></a>

#### widget.Button
**Kind**: static class of [`widget`](#vscp.widget)  

* [.Button](#vscp_dot_widget_dot_Button)
    * [new vscp.widget.Button(options)](#new_vscp_dot_widget_dot_Button_new)
    * [.draw()](#vscp_dot_widget_dot_Button_plus_draw)
    * [.setEnabled(value)](#vscp_dot_widget_dot_Button_plus_setEnabled)

<a id="new_vscp_dot_widget_dot_Button_new"></a>

##### new vscp.widget.Button(options)
A button widget.


| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.canvasName | `string` | Name of the canvas, normally the canvas id |
| options.offImageUrl | `number` | URL to button which is in off state |
| options.onImageUrl | `number` | URL to button which is in on state |
| options.x | `number` | x position of the image in the canvas |
| options.y | `number` | y position of the image in the canvas |
| [options.scale] | `number` | Scale factor applied to the button image (default: 1.0) |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client, used for event communication |
| [options.bindToRemoteState] | `boolean` | Bind the button state to the remote state or not (default: false) |
| [options.receiveZone] | `number` | Zone where state events will come from (default: 255) |
| [options.receiveSubZone] | `number` | Sub-zone where state events will come from (default: 255) |
| [options.transmitZone] | `number` | Zone where button event will be sent to (default: 255) |
| [options.transmitSubZone] | `number` | Sub-zone where button event will be sent to (default: 255) |
| [options.index] | `number` | Button index (instance number)  (default: 0) |
| [options.enable] | `boolean` | Enable or disable button  (default: false) |

<a id="vscp_dot_widget_dot_Button_plus_draw"></a>

##### button.draw()
Draw the button depended on its current state.

**Kind**: instance method of [`Button`](#vscp.widget.Button)  
<a id="vscp_dot_widget_dot_Button_plus_setEnabled"></a>

##### button.setEnabled(value)
Enable or disable the button.

**Kind**: instance method of [`Button`](#vscp.widget.Button)  

| Param | Type | Description |
| --- | --- | --- |
| value | `boolean` | Enable (true) or disable (false) it |

<a id="vscp_dot_widget_dot_Thermometer"></a>

#### widget.Thermometer
**Kind**: static class of [`widget`](#vscp.widget)  

* [.Thermometer](#vscp_dot_widget_dot_Thermometer)
    * [new vscp.widget.Thermometer(options)](#new_vscp_dot_widget_dot_Thermometer_new)
    * [.draw()](#vscp_dot_widget_dot_Thermometer_plus_draw)
    * [.setEnabled(value)](#vscp_dot_widget_dot_Thermometer_plus_setEnabled)

<a id="new_vscp_dot_widget_dot_Thermometer_new"></a>

##### new vscp.widget.Thermometer(options)
A thermometer widget.


| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.canvasName | `string` | Name of the canvas, normally the canvas id |
| options.imageUrl | `number` | URL to thermometer image |
| options.x | `number` | x position of the image in the canvas |
| options.y | `number` | y position of the image in the canvas |
| options.data | `object` | Thermometer data |
| options.data.maxT | `number` | Max. temperature in degree celsius |
| options.data.minT | `number` | Min. temperature in degree celsius |
| options.data.x | `number` | x position of the lower left begin of the thermometer column in image |
| options.data.y | `number` | y position of the lower left begin of the thermometer column in image |
| options.data.height | `number` | Thermometer column height (only between numbers) |
| options.data.width | `number` | Thermometer column width |
| options.data.yOffset | `number` | Thermometer column height offset from the begin to the first number |
| options.data.color | `string` | HTML color, e.g. '#8A0000' |
| [options.scale] | `number` | Scale factor applied to the thermometer image (default: 1.0) |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client, used for event communication |
| [options.receiveZone] | `number` | Zone where state events will come from (default: 255) |
| [options.receiveSubZone] | `number` | Sub-zone where state events will come from (default: 255) |
| [options.sensorIndex] | `number` | Sensor index (default: 0) |
| [options.vscpClass] | `number` | VSCP measurement class (default: CLASS1.MEASUREMENT) |
| [options.vscpType] | `number` | VSCP measurement type (default: CLASS1.MEASUREMENT.TERMPERATURE) |
| [options.enable] | `boolean` | Enable or disable thermometer (default: true) |

<a id="vscp_dot_widget_dot_Thermometer_plus_draw"></a>

##### thermometer.draw()
Draw the thermometer depended on its current state.

**Kind**: instance method of [`Thermometer`](#vscp.widget.Thermometer)  
<a id="vscp_dot_widget_dot_Thermometer_plus_setEnabled"></a>

##### thermometer.setEnabled(value)
Enable or disable the thermometer.

**Kind**: instance method of [`Thermometer`](#vscp.widget.Thermometer)  

| Param | Type | Description |
| --- | --- | --- |
| value | `boolean` | Enable (true) or disable (false) it |

<a id="vscp_dot_widget_dot_generateUUID"></a>

#### widget.generateUUID() ⇒ `string`
Generate a UUID.

**Kind**: static method of [`widget`](#vscp.widget)  
**Returns**: `string` - UUID  
<a id="vscp_dot_widget_dot_Image"></a>

#### widget.Image(options)
Add a image to the canvas.

**Kind**: static method of [`widget`](#vscp.widget)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.canvasName | `string` | Name of the canvas, normally the canvas id |
| options.url | `string` | Path to the image |
| options.x | `number` | x position of the image in the canvas |
| options.y | `number` | y position of the image in the canvas |

<a id="vscp_dot_wizard"></a>

### vscp.wizard : `object`
VSCP wizard functionality based on a MDF

**Kind**: static namespace of [`vscp`](#vscp)  

* [.wizard](#vscp_dot_wizard) : `object`
    * [.MessageBox](#vscp_dot_wizard_dot_MessageBox)
        * [new vscp.wizard.MessageBox(options)](#new_vscp_dot_wizard_dot_MessageBox_new)
        * [.func](#vscp_dot_wizard_dot_MessageBox_plus_func) : `string`
        * [.head](#vscp_dot_wizard_dot_MessageBox_plus_head) : `string`
        * [.description](#vscp_dot_wizard_dot_MessageBox_plus_description) : `string`
        * [.variableType](#vscp_dot_wizard_dot_MessageBox_plus_variableType) : `string`
        * [.variableName](#vscp_dot_wizard_dot_MessageBox_plus_variableName) : `string`
        * [.variableValue](#vscp_dot_wizard_dot_MessageBox_plus_variableValue) : `string`
        * [.parse($messageBox)](#vscp_dot_wizard_dot_MessageBox_plus_parse)
    * [.WriteBitInReg](#vscp_dot_wizard_dot_WriteBitInReg)
        * [new vscp.wizard.WriteBitInReg(options)](#new_vscp_dot_wizard_dot_WriteBitInReg_new)
        * [.pos](#vscp_dot_wizard_dot_WriteBitInReg_plus_pos) : `number`
        * [.page](#vscp_dot_wizard_dot_WriteBitInReg_plus_page) : `number`
        * [.offset](#vscp_dot_wizard_dot_WriteBitInReg_plus_offset) : `number`
        * [.width](#vscp_dot_wizard_dot_WriteBitInReg_plus_width) : `number`
        * [.value](#vscp_dot_wizard_dot_WriteBitInReg_plus_value) : `number`
        * [.variableName](#vscp_dot_wizard_dot_WriteBitInReg_plus_variableName) : `string`
        * [.parse(writeBitInReg)](#vscp_dot_wizard_dot_WriteBitInReg_plus_parse)
    * [.WriteBitInAbstraction](#vscp_dot_wizard_dot_WriteBitInAbstraction)
        * [new vscp.wizard.WriteBitInAbstraction(options)](#new_vscp_dot_wizard_dot_WriteBitInAbstraction_new)
        * [.id](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_id) : `string`
        * [.pos](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_pos) : `number`
        * [.width](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_width) : `number`
        * [.value](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_value) : `number`
        * [.variableName](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_variableName) : `string`
        * [.parse($writeBitInAbstraction)](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_parse)
    * [.WriteRegister](#vscp_dot_wizard_dot_WriteRegister)
        * [new vscp.wizard.WriteRegister(options)](#new_vscp_dot_wizard_dot_WriteRegister_new)
        * [.page](#vscp_dot_wizard_dot_WriteRegister_plus_page) : `number`
        * [.offset](#vscp_dot_wizard_dot_WriteRegister_plus_offset) : `number`
        * [.value](#vscp_dot_wizard_dot_WriteRegister_plus_value) : `number`
        * [.variableName](#vscp_dot_wizard_dot_WriteRegister_plus_variableName) : `string`
        * [.parse($writeRegister)](#vscp_dot_wizard_dot_WriteRegister_plus_parse)
    * [.WriteAbstraction](#vscp_dot_wizard_dot_WriteAbstraction)
        * [new vscp.wizard.WriteAbstraction(options)](#new_vscp_dot_wizard_dot_WriteAbstraction_new)
        * [.id](#vscp_dot_wizard_dot_WriteAbstraction_plus_id) : `string`
        * [.value](#vscp_dot_wizard_dot_WriteAbstraction_plus_value) : `number`
        * [.variableName](#vscp_dot_wizard_dot_WriteAbstraction_plus_variableName) : `number`
        * [.parse($writeAbstraction)](#vscp_dot_wizard_dot_WriteAbstraction_plus_parse)
    * [.Recipe](#vscp_dot_wizard_dot_Recipe)
        * [new vscp.wizard.Recipe(options)](#new_vscp_dot_wizard_dot_Recipe_new)
        * [.name](#vscp_dot_wizard_dot_Recipe_plus_name) : `string`
        * [.description](#vscp_dot_wizard_dot_Recipe_plus_description) : `string`
        * [.writeBitInRegs](#vscp_dot_wizard_dot_Recipe_plus_writeBitInRegs) : [`Array.&lt;WriteBitInReg&gt;`](#vscp.wizard.WriteBitInReg)
        * [.writeBitInAbstractions](#vscp_dot_wizard_dot_Recipe_plus_writeBitInAbstractions) : `Array.&lt;vscp.wizard.WriteBitAbstractions&gt;`
        * [.writeRegisters](#vscp_dot_wizard_dot_Recipe_plus_writeRegisters) : [`Array.&lt;WriteRegister&gt;`](#vscp.wizard.WriteRegister)
        * [.writeAbstractions](#vscp_dot_wizard_dot_Recipe_plus_writeAbstractions) : [`Array.&lt;WriteAbstraction&gt;`](#vscp.wizard.WriteAbstraction)
        * [.messageBoxes](#vscp_dot_wizard_dot_Recipe_plus_messageBoxes) : [`Array.&lt;MessageBox&gt;`](#vscp.wizard.MessageBox)
        * [.mdf](#vscp_dot_wizard_dot_Recipe_plus_mdf) : `object`
        * [.parse($recipe)](#vscp_dot_wizard_dot_Recipe_plus_parse)
        * [.write(options)](#vscp_dot_wizard_dot_Recipe_plus_write)
    * [.getRecipes(options)](#vscp_dot_wizard_dot_getRecipes) ⇒ [`Array.&lt;Recipe&gt;`](#vscp.wizard.Recipe)

<a id="vscp_dot_wizard_dot_MessageBox"></a>

#### wizard.MessageBox
**Kind**: static class of [`wizard`](#vscp.wizard)  

* [.MessageBox](#vscp_dot_wizard_dot_MessageBox)
    * [new vscp.wizard.MessageBox(options)](#new_vscp_dot_wizard_dot_MessageBox_new)
    * [.func](#vscp_dot_wizard_dot_MessageBox_plus_func) : `string`
    * [.head](#vscp_dot_wizard_dot_MessageBox_plus_head) : `string`
    * [.description](#vscp_dot_wizard_dot_MessageBox_plus_description) : `string`
    * [.variableType](#vscp_dot_wizard_dot_MessageBox_plus_variableType) : `string`
    * [.variableName](#vscp_dot_wizard_dot_MessageBox_plus_variableName) : `string`
    * [.variableValue](#vscp_dot_wizard_dot_MessageBox_plus_variableValue) : `string`
    * [.parse($messageBox)](#vscp_dot_wizard_dot_MessageBox_plus_parse)

<a id="new_vscp_dot_wizard_dot_MessageBox_new"></a>

##### new vscp.wizard.MessageBox(options)
A message box.


| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.messageBox | `object` | Messagebox as jquery xml object |

<a id="vscp_dot_wizard_dot_MessageBox_plus_func"></a>

##### messageBox.func : `string`
Function input or output

**Kind**: instance property of [`MessageBox`](#vscp.wizard.MessageBox)  
<a id="vscp_dot_wizard_dot_MessageBox_plus_head"></a>

##### messageBox.head : `string`
Head

**Kind**: instance property of [`MessageBox`](#vscp.wizard.MessageBox)  
<a id="vscp_dot_wizard_dot_MessageBox_plus_description"></a>

##### messageBox.description : `string`
Description

**Kind**: instance property of [`MessageBox`](#vscp.wizard.MessageBox)  
<a id="vscp_dot_wizard_dot_MessageBox_plus_variableType"></a>

##### messageBox.variableType : `string`
Variable type

**Kind**: instance property of [`MessageBox`](#vscp.wizard.MessageBox)  
<a id="vscp_dot_wizard_dot_MessageBox_plus_variableName"></a>

##### messageBox.variableName : `string`
Variable name

**Kind**: instance property of [`MessageBox`](#vscp.wizard.MessageBox)  
<a id="vscp_dot_wizard_dot_MessageBox_plus_variableValue"></a>

##### messageBox.variableValue : `string`
Variable value

**Kind**: instance property of [`MessageBox`](#vscp.wizard.MessageBox)  
<a id="vscp_dot_wizard_dot_MessageBox_plus_parse"></a>

##### messageBox.parse($messageBox)
Parse a messagebox object.

**Kind**: instance method of [`MessageBox`](#vscp.wizard.MessageBox)  

| Param | Type | Description |
| --- | --- | --- |
| $messageBox | `object` | Messagebox as jquery xml object |

<a id="vscp_dot_wizard_dot_WriteBitInReg"></a>

#### wizard.WriteBitInReg
**Kind**: static class of [`wizard`](#vscp.wizard)  

* [.WriteBitInReg](#vscp_dot_wizard_dot_WriteBitInReg)
    * [new vscp.wizard.WriteBitInReg(options)](#new_vscp_dot_wizard_dot_WriteBitInReg_new)
    * [.pos](#vscp_dot_wizard_dot_WriteBitInReg_plus_pos) : `number`
    * [.page](#vscp_dot_wizard_dot_WriteBitInReg_plus_page) : `number`
    * [.offset](#vscp_dot_wizard_dot_WriteBitInReg_plus_offset) : `number`
    * [.width](#vscp_dot_wizard_dot_WriteBitInReg_plus_width) : `number`
    * [.value](#vscp_dot_wizard_dot_WriteBitInReg_plus_value) : `number`
    * [.variableName](#vscp_dot_wizard_dot_WriteBitInReg_plus_variableName) : `string`
    * [.parse(writeBitInReg)](#vscp_dot_wizard_dot_WriteBitInReg_plus_parse)

<a id="new_vscp_dot_wizard_dot_WriteBitInReg_new"></a>

##### new vscp.wizard.WriteBitInReg(options)
Bit in register access method.


| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.writeBitInReg | `object` | write-bit-in-reg as jquery xml object |

<a id="vscp_dot_wizard_dot_WriteBitInReg_plus_pos"></a>

##### writeBitInReg.pos : `number`
Bit position

**Kind**: instance property of [`WriteBitInReg`](#vscp.wizard.WriteBitInReg)  
<a id="vscp_dot_wizard_dot_WriteBitInReg_plus_page"></a>

##### writeBitInReg.page : `number`
Register page

**Kind**: instance property of [`WriteBitInReg`](#vscp.wizard.WriteBitInReg)  
<a id="vscp_dot_wizard_dot_WriteBitInReg_plus_offset"></a>

##### writeBitInReg.offset : `number`
Register offset

**Kind**: instance property of [`WriteBitInReg`](#vscp.wizard.WriteBitInReg)  
<a id="vscp_dot_wizard_dot_WriteBitInReg_plus_width"></a>

##### writeBitInReg.width : `number`
Bit width

**Kind**: instance property of [`WriteBitInReg`](#vscp.wizard.WriteBitInReg)  
<a id="vscp_dot_wizard_dot_WriteBitInReg_plus_value"></a>

##### writeBitInReg.value : `number`
Value of bit width

**Kind**: instance property of [`WriteBitInReg`](#vscp.wizard.WriteBitInReg)  
<a id="vscp_dot_wizard_dot_WriteBitInReg_plus_variableName"></a>

##### writeBitInReg.variableName : `string`
Variable name

**Kind**: instance property of [`WriteBitInReg`](#vscp.wizard.WriteBitInReg)  
<a id="vscp_dot_wizard_dot_WriteBitInReg_plus_parse"></a>

##### writeBitInReg.parse(writeBitInReg)
Parse a bit in register access method object.

**Kind**: instance method of [`WriteBitInReg`](#vscp.wizard.WriteBitInReg)  

| Param | Type | Description |
| --- | --- | --- |
| writeBitInReg | `object` | write-bit-in-reg as jquery xml object |

<a id="vscp_dot_wizard_dot_WriteBitInAbstraction"></a>

#### wizard.WriteBitInAbstraction
**Kind**: static class of [`wizard`](#vscp.wizard)  

* [.WriteBitInAbstraction](#vscp_dot_wizard_dot_WriteBitInAbstraction)
    * [new vscp.wizard.WriteBitInAbstraction(options)](#new_vscp_dot_wizard_dot_WriteBitInAbstraction_new)
    * [.id](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_id) : `string`
    * [.pos](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_pos) : `number`
    * [.width](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_width) : `number`
    * [.value](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_value) : `number`
    * [.variableName](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_variableName) : `string`
    * [.parse($writeBitInAbstraction)](#vscp_dot_wizard_dot_WriteBitInAbstraction_plus_parse)

<a id="new_vscp_dot_wizard_dot_WriteBitInAbstraction_new"></a>

##### new vscp.wizard.WriteBitInAbstraction(options)
Bit in abstraction access method.


| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.writeBitInAbstraction | `object` | write-bit-in-abstraction as jquery xml object |

<a id="vscp_dot_wizard_dot_WriteBitInAbstraction_plus_id"></a>

##### writeBitInAbstraction.id : `string`
Abstract value id

**Kind**: instance property of [`WriteBitInAbstraction`](#vscp.wizard.WriteBitInAbstraction)  
<a id="vscp_dot_wizard_dot_WriteBitInAbstraction_plus_pos"></a>

##### writeBitInAbstraction.pos : `number`
Bit position

**Kind**: instance property of [`WriteBitInAbstraction`](#vscp.wizard.WriteBitInAbstraction)  
<a id="vscp_dot_wizard_dot_WriteBitInAbstraction_plus_width"></a>

##### writeBitInAbstraction.width : `number`
Bit width

**Kind**: instance property of [`WriteBitInAbstraction`](#vscp.wizard.WriteBitInAbstraction)  
<a id="vscp_dot_wizard_dot_WriteBitInAbstraction_plus_value"></a>

##### writeBitInAbstraction.value : `number`
Value of bit width

**Kind**: instance property of [`WriteBitInAbstraction`](#vscp.wizard.WriteBitInAbstraction)  
<a id="vscp_dot_wizard_dot_WriteBitInAbstraction_plus_variableName"></a>

##### writeBitInAbstraction.variableName : `string`
Variable name

**Kind**: instance property of [`WriteBitInAbstraction`](#vscp.wizard.WriteBitInAbstraction)  
<a id="vscp_dot_wizard_dot_WriteBitInAbstraction_plus_parse"></a>

##### writeBitInAbstraction.parse($writeBitInAbstraction)
Parse a bit in abstraction access method object.

**Kind**: instance method of [`WriteBitInAbstraction`](#vscp.wizard.WriteBitInAbstraction)  

| Param | Type | Description |
| --- | --- | --- |
| $writeBitInAbstraction | `object` | write-bit-in-abstraction as jquery xml object |

<a id="vscp_dot_wizard_dot_WriteRegister"></a>

#### wizard.WriteRegister
**Kind**: static class of [`wizard`](#vscp.wizard)  

* [.WriteRegister](#vscp_dot_wizard_dot_WriteRegister)
    * [new vscp.wizard.WriteRegister(options)](#new_vscp_dot_wizard_dot_WriteRegister_new)
    * [.page](#vscp_dot_wizard_dot_WriteRegister_plus_page) : `number`
    * [.offset](#vscp_dot_wizard_dot_WriteRegister_plus_offset) : `number`
    * [.value](#vscp_dot_wizard_dot_WriteRegister_plus_value) : `number`
    * [.variableName](#vscp_dot_wizard_dot_WriteRegister_plus_variableName) : `string`
    * [.parse($writeRegister)](#vscp_dot_wizard_dot_WriteRegister_plus_parse)

<a id="new_vscp_dot_wizard_dot_WriteRegister_new"></a>

##### new vscp.wizard.WriteRegister(options)
Register access method.


| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.writeRegister | `object` | write-register as jquery xml object |

<a id="vscp_dot_wizard_dot_WriteRegister_plus_page"></a>

##### writeRegister.page : `number`
Register page

**Kind**: instance property of [`WriteRegister`](#vscp.wizard.WriteRegister)  
<a id="vscp_dot_wizard_dot_WriteRegister_plus_offset"></a>

##### writeRegister.offset : `number`
Register offset

**Kind**: instance property of [`WriteRegister`](#vscp.wizard.WriteRegister)  
<a id="vscp_dot_wizard_dot_WriteRegister_plus_value"></a>

##### writeRegister.value : `number`
Register value

**Kind**: instance property of [`WriteRegister`](#vscp.wizard.WriteRegister)  
<a id="vscp_dot_wizard_dot_WriteRegister_plus_variableName"></a>

##### writeRegister.variableName : `string`
Variable name

**Kind**: instance property of [`WriteRegister`](#vscp.wizard.WriteRegister)  
<a id="vscp_dot_wizard_dot_WriteRegister_plus_parse"></a>

##### writeRegister.parse($writeRegister)
Parse a register access method object.

**Kind**: instance method of [`WriteRegister`](#vscp.wizard.WriteRegister)  

| Param | Type | Description |
| --- | --- | --- |
| $writeRegister | `object` | write-register as jquery xml object |

<a id="vscp_dot_wizard_dot_WriteAbstraction"></a>

#### wizard.WriteAbstraction
**Kind**: static class of [`wizard`](#vscp.wizard)  

* [.WriteAbstraction](#vscp_dot_wizard_dot_WriteAbstraction)
    * [new vscp.wizard.WriteAbstraction(options)](#new_vscp_dot_wizard_dot_WriteAbstraction_new)
    * [.id](#vscp_dot_wizard_dot_WriteAbstraction_plus_id) : `string`
    * [.value](#vscp_dot_wizard_dot_WriteAbstraction_plus_value) : `number`
    * [.variableName](#vscp_dot_wizard_dot_WriteAbstraction_plus_variableName) : `number`
    * [.parse($writeAbstraction)](#vscp_dot_wizard_dot_WriteAbstraction_plus_parse)

<a id="new_vscp_dot_wizard_dot_WriteAbstraction_new"></a>

##### new vscp.wizard.WriteAbstraction(options)
Abstraction access method.


| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.writeAbstraction | `object` | write-abstraction as jquery xml object |

<a id="vscp_dot_wizard_dot_WriteAbstraction_plus_id"></a>

##### writeAbstraction.id : `string`
Abstract value id

**Kind**: instance property of [`WriteAbstraction`](#vscp.wizard.WriteAbstraction)  
<a id="vscp_dot_wizard_dot_WriteAbstraction_plus_value"></a>

##### writeAbstraction.value : `number`
Abstract value

**Kind**: instance property of [`WriteAbstraction`](#vscp.wizard.WriteAbstraction)  
<a id="vscp_dot_wizard_dot_WriteAbstraction_plus_variableName"></a>

##### writeAbstraction.variableName : `number`
Variable name

**Kind**: instance property of [`WriteAbstraction`](#vscp.wizard.WriteAbstraction)  
<a id="vscp_dot_wizard_dot_WriteAbstraction_plus_parse"></a>

##### writeAbstraction.parse($writeAbstraction)
Parse a abstraction access method object.

**Kind**: instance method of [`WriteAbstraction`](#vscp.wizard.WriteAbstraction)  

| Param | Type | Description |
| --- | --- | --- |
| $writeAbstraction | `object` | write-abstraction as jquery xml object |

<a id="vscp_dot_wizard_dot_Recipe"></a>

#### wizard.Recipe
**Kind**: static class of [`wizard`](#vscp.wizard)  

* [.Recipe](#vscp_dot_wizard_dot_Recipe)
    * [new vscp.wizard.Recipe(options)](#new_vscp_dot_wizard_dot_Recipe_new)
    * [.name](#vscp_dot_wizard_dot_Recipe_plus_name) : `string`
    * [.description](#vscp_dot_wizard_dot_Recipe_plus_description) : `string`
    * [.writeBitInRegs](#vscp_dot_wizard_dot_Recipe_plus_writeBitInRegs) : [`Array.&lt;WriteBitInReg&gt;`](#vscp.wizard.WriteBitInReg)
    * [.writeBitInAbstractions](#vscp_dot_wizard_dot_Recipe_plus_writeBitInAbstractions) : `Array.&lt;vscp.wizard.WriteBitAbstractions&gt;`
    * [.writeRegisters](#vscp_dot_wizard_dot_Recipe_plus_writeRegisters) : [`Array.&lt;WriteRegister&gt;`](#vscp.wizard.WriteRegister)
    * [.writeAbstractions](#vscp_dot_wizard_dot_Recipe_plus_writeAbstractions) : [`Array.&lt;WriteAbstraction&gt;`](#vscp.wizard.WriteAbstraction)
    * [.messageBoxes](#vscp_dot_wizard_dot_Recipe_plus_messageBoxes) : [`Array.&lt;MessageBox&gt;`](#vscp.wizard.MessageBox)
    * [.mdf](#vscp_dot_wizard_dot_Recipe_plus_mdf) : `object`
    * [.parse($recipe)](#vscp_dot_wizard_dot_Recipe_plus_parse)
    * [.write(options)](#vscp_dot_wizard_dot_Recipe_plus_write)

<a id="new_vscp_dot_wizard_dot_Recipe_new"></a>

##### new vscp.wizard.Recipe(options)
A recipe.


| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.recipe | `object` | Recipe as jquery xml object |
| options.mdf | `object` | MDF as jquery xml object |

<a id="vscp_dot_wizard_dot_Recipe_plus_name"></a>

##### recipe.name : `string`
Recipe name

**Kind**: instance property of [`Recipe`](#vscp.wizard.Recipe)  
<a id="vscp_dot_wizard_dot_Recipe_plus_description"></a>

##### recipe.description : `string`
Recipe description

**Kind**: instance property of [`Recipe`](#vscp.wizard.Recipe)  
<a id="vscp_dot_wizard_dot_Recipe_plus_writeBitInRegs"></a>

##### recipe.writeBitInRegs : [`Array.&lt;WriteBitInReg&gt;`](#vscp.wizard.WriteBitInReg)
Bit access methods in registers

**Kind**: instance property of [`Recipe`](#vscp.wizard.Recipe)  
<a id="vscp_dot_wizard_dot_Recipe_plus_writeBitInAbstractions"></a>

##### recipe.writeBitInAbstractions : `Array.&lt;vscp.wizard.WriteBitAbstractions&gt;`
Bit access methods in abstract value

**Kind**: instance property of [`Recipe`](#vscp.wizard.Recipe)  
<a id="vscp_dot_wizard_dot_Recipe_plus_writeRegisters"></a>

##### recipe.writeRegisters : [`Array.&lt;WriteRegister&gt;`](#vscp.wizard.WriteRegister)
Register access methods

**Kind**: instance property of [`Recipe`](#vscp.wizard.Recipe)  
<a id="vscp_dot_wizard_dot_Recipe_plus_writeAbstractions"></a>

##### recipe.writeAbstractions : [`Array.&lt;WriteAbstraction&gt;`](#vscp.wizard.WriteAbstraction)
Abstract access methods

**Kind**: instance property of [`Recipe`](#vscp.wizard.Recipe)  
<a id="vscp_dot_wizard_dot_Recipe_plus_messageBoxes"></a>

##### recipe.messageBoxes : [`Array.&lt;MessageBox&gt;`](#vscp.wizard.MessageBox)
Messageboxes

**Kind**: instance property of [`Recipe`](#vscp.wizard.Recipe)  
<a id="vscp_dot_wizard_dot_Recipe_plus_mdf"></a>

##### recipe.mdf : `object`
MDF

**Kind**: instance property of [`Recipe`](#vscp.wizard.Recipe)  
<a id="vscp_dot_wizard_dot_Recipe_plus_parse"></a>

##### recipe.parse($recipe)
Parse a recipe object.

**Kind**: instance method of [`Recipe`](#vscp.wizard.Recipe)  

| Param | Type | Description |
| --- | --- | --- |
| $recipe | `object` | Recipe as jquery xml object |

<a id="vscp_dot_wizard_dot_Recipe_plus_write"></a>

##### recipe.write(options)
Write a recipe.

**Kind**: instance method of [`Recipe`](#vscp.wizard.Recipe)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.client | [`Client`](#vscp.ws.Client) | VSCP websocket client |
| options.nodeId | `number` | Node id |

<a id="vscp_dot_wizard_dot_getRecipes"></a>

#### wizard.getRecipes(options) ⇒ [`Array.&lt;Recipe&gt;`](#vscp.wizard.Recipe)
Get recipes from a MDF in JSON format.

**Kind**: static method of [`wizard`](#vscp.wizard)  
**Returns**: [`Array.&lt;Recipe&gt;`](#vscp.wizard.Recipe) - Recipe array  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.mdf | `object` | The mdf as jquery xml object |

<a id="vscp_dot_ws"></a>

### vscp.ws : `object`
VSCP websocket api functions

**Kind**: static namespace of [`vscp`](#vscp)  

* [.ws](#vscp_dot_ws) : `object`
    * [.Client](#vscp_dot_ws_dot_Client)
        * [new vscp.ws.Client()](#new_vscp_dot_ws_dot_Client_new)
        * [.socket](#vscp_dot_ws_dot_Client_plus_socket) : `object`
        * [.url](#vscp_dot_ws_dot_Client_plus_url) : `string`
        * [.userName](#vscp_dot_ws_dot_Client_plus_userName) : `string`
        * [.userId](#vscp_dot_ws_dot_Client_plus_userId) : `number`
        * [.userFullname](#vscp_dot_ws_dot_Client_plus_userFullname) : `string`
        * [.userRights](#vscp_dot_ws_dot_Client_plus_userRights) : `array`
        * [.userRemotes](#vscp_dot_ws_dot_Client_plus_userRemotes) : `array`
        * [.userEvents](#vscp_dot_ws_dot_Client_plus_userEvents) : `array`
        * [.userNote](#vscp_dot_ws_dot_Client_plus_userNote) : `string`
        * [.password](#vscp_dot_ws_dot_Client_plus_password) : `string`
        * [.vscpkey](#vscp_dot_ws_dot_Client_plus_vscpkey) : `string`
        * [.onConnError](#vscp_dot_ws_dot_Client_plus_onConnError) : `function`
        * [.onMessage](#vscp_dot_ws_dot_Client_plus_onMessage) : `function`
        * [.onEvent](#vscp_dot_ws_dot_Client_plus_onEvent) : `Array.&lt;function()&gt;`
        * [.onVariable](#vscp_dot_ws_dot_Client_plus_onVariable) : `function`
        * [.onTableRow](#vscp_dot_ws_dot_Client_plus_onTableRow) : `function`
        * [.state](#vscp_dot_ws_dot_Client_plus_state) : `number`
        * [.substate](#vscp_dot_ws_dot_Client_plus_substate) : `number`
        * [.states](#vscp_dot_ws_dot_Client_plus_states) : `enum`
        * [.substates](#vscp_dot_ws_dot_Client_plus_substates) : `enum`
        * [.addEventListener(eventListener)](#vscp_dot_ws_dot_Client_plus_addEventListener)
        * [.removeEventListener(eventListener)](#vscp_dot_ws_dot_Client_plus_removeEventListener)
        * [.getAuthHash(userName, password, str_iv)](#vscp_dot_ws_dot_Client_plus_getAuthHash) ⇒ `string`
        * [.onWebSocketOpen()](#vscp_dot_ws_dot_Client_plus_onWebSocketOpen)
        * [.onWebSocketClose()](#vscp_dot_ws_dot_Client_plus_onWebSocketClose)
        * [.onWebSocketMessage(msg)](#vscp_dot_ws_dot_Client_plus_onWebSocketMessage)
        * [.connect(options)](#vscp_dot_ws_dot_Client_plus_connect) ⇒ `object`
        * [.disconnect(options)](#vscp_dot_ws_dot_Client_plus_disconnect) ⇒ `object`
        * [.start(options)](#vscp_dot_ws_dot_Client_plus_start) ⇒ `object`
        * [.stop(options)](#vscp_dot_ws_dot_Client_plus_stop) ⇒ `object`
        * [.clearQueue(options)](#vscp_dot_ws_dot_Client_plus_clearQueue) ⇒ `object`
        * [.sendEvent(options)](#vscp_dot_ws_dot_Client_plus_sendEvent) ⇒ `object`
        * [.setFilter(options)](#vscp_dot_ws_dot_Client_plus_setFilter) ⇒ `object`
        * [.createVar(options)](#vscp_dot_ws_dot_Client_plus_createVar) ⇒ `object`
        * [.readVar(options)](#vscp_dot_ws_dot_Client_plus_readVar) ⇒ `object`
        * [.writeVar(options)](#vscp_dot_ws_dot_Client_plus_writeVar) ⇒ `object`
        * [.resetVar(options)](#vscp_dot_ws_dot_Client_plus_resetVar) ⇒ `object`
        * [.removeVar(options)](#vscp_dot_ws_dot_Client_plus_removeVar) ⇒ `object`
        * [.lengthVar(options)](#vscp_dot_ws_dot_Client_plus_lengthVar) ⇒ `object`
        * [.lastChangeVar(options)](#vscp_dot_ws_dot_Client_plus_lastChangeVar) ⇒ `object`
        * [.listVar(options)](#vscp_dot_ws_dot_Client_plus_listVar) ⇒ `object`
        * [.readTable(options)](#vscp_dot_ws_dot_Client_plus_readTable) ⇒ `object`

<a id="vscp_dot_ws_dot_Client"></a>

#### ws.Client
**Kind**: static class of [`ws`](#vscp.ws)  

* [.Client](#vscp_dot_ws_dot_Client)
    * [new vscp.ws.Client()](#new_vscp_dot_ws_dot_Client_new)
    * [.socket](#vscp_dot_ws_dot_Client_plus_socket) : `object`
    * [.url](#vscp_dot_ws_dot_Client_plus_url) : `string`
    * [.userName](#vscp_dot_ws_dot_Client_plus_userName) : `string`
    * [.userId](#vscp_dot_ws_dot_Client_plus_userId) : `number`
    * [.userFullname](#vscp_dot_ws_dot_Client_plus_userFullname) : `string`
    * [.userRights](#vscp_dot_ws_dot_Client_plus_userRights) : `array`
    * [.userRemotes](#vscp_dot_ws_dot_Client_plus_userRemotes) : `array`
    * [.userEvents](#vscp_dot_ws_dot_Client_plus_userEvents) : `array`
    * [.userNote](#vscp_dot_ws_dot_Client_plus_userNote) : `string`
    * [.password](#vscp_dot_ws_dot_Client_plus_password) : `string`
    * [.vscpkey](#vscp_dot_ws_dot_Client_plus_vscpkey) : `string`
    * [.onConnError](#vscp_dot_ws_dot_Client_plus_onConnError) : `function`
    * [.onMessage](#vscp_dot_ws_dot_Client_plus_onMessage) : `function`
    * [.onEvent](#vscp_dot_ws_dot_Client_plus_onEvent) : `Array.&lt;function()&gt;`
    * [.onVariable](#vscp_dot_ws_dot_Client_plus_onVariable) : `function`
    * [.onTableRow](#vscp_dot_ws_dot_Client_plus_onTableRow) : `function`
    * [.state](#vscp_dot_ws_dot_Client_plus_state) : `number`
    * [.substate](#vscp_dot_ws_dot_Client_plus_substate) : `number`
    * [.states](#vscp_dot_ws_dot_Client_plus_states) : `enum`
    * [.substates](#vscp_dot_ws_dot_Client_plus_substates) : `enum`
    * [.addEventListener(eventListener)](#vscp_dot_ws_dot_Client_plus_addEventListener)
    * [.removeEventListener(eventListener)](#vscp_dot_ws_dot_Client_plus_removeEventListener)
    * [.getAuthHash(userName, password, str_iv)](#vscp_dot_ws_dot_Client_plus_getAuthHash) ⇒ `string`
    * [.onWebSocketOpen()](#vscp_dot_ws_dot_Client_plus_onWebSocketOpen)
    * [.onWebSocketClose()](#vscp_dot_ws_dot_Client_plus_onWebSocketClose)
    * [.onWebSocketMessage(msg)](#vscp_dot_ws_dot_Client_plus_onWebSocketMessage)
    * [.connect(options)](#vscp_dot_ws_dot_Client_plus_connect) ⇒ `object`
    * [.disconnect(options)](#vscp_dot_ws_dot_Client_plus_disconnect) ⇒ `object`
    * [.start(options)](#vscp_dot_ws_dot_Client_plus_start) ⇒ `object`
    * [.stop(options)](#vscp_dot_ws_dot_Client_plus_stop) ⇒ `object`
    * [.clearQueue(options)](#vscp_dot_ws_dot_Client_plus_clearQueue) ⇒ `object`
    * [.sendEvent(options)](#vscp_dot_ws_dot_Client_plus_sendEvent) ⇒ `object`
    * [.setFilter(options)](#vscp_dot_ws_dot_Client_plus_setFilter) ⇒ `object`
    * [.createVar(options)](#vscp_dot_ws_dot_Client_plus_createVar) ⇒ `object`
    * [.readVar(options)](#vscp_dot_ws_dot_Client_plus_readVar) ⇒ `object`
    * [.writeVar(options)](#vscp_dot_ws_dot_Client_plus_writeVar) ⇒ `object`
    * [.resetVar(options)](#vscp_dot_ws_dot_Client_plus_resetVar) ⇒ `object`
    * [.removeVar(options)](#vscp_dot_ws_dot_Client_plus_removeVar) ⇒ `object`
    * [.lengthVar(options)](#vscp_dot_ws_dot_Client_plus_lengthVar) ⇒ `object`
    * [.lastChangeVar(options)](#vscp_dot_ws_dot_Client_plus_lastChangeVar) ⇒ `object`
    * [.listVar(options)](#vscp_dot_ws_dot_Client_plus_listVar) ⇒ `object`
    * [.readTable(options)](#vscp_dot_ws_dot_Client_plus_readTable) ⇒ `object`

<a id="new_vscp_dot_ws_dot_Client_new"></a>

##### new vscp.ws.Client()
VSCP websocket client, used for connection establishment to a VSCP server.

<a id="vscp_dot_ws_dot_Client_plus_socket"></a>

##### client.socket : `object`
Websocket

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_url"></a>

##### client.url : `string`
url used for connection establishment

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_userName"></a>

##### client.userName : `string`
User name used for connection establishment

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_userId"></a>

##### client.userId : `number`
User id from authentication AUTH1

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_userFullname"></a>

##### client.userFullname : `string`
User full name from authentication AUTH1

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_userRights"></a>

##### client.userRights : `array`
User rights from authentication AUTH1

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_userRemotes"></a>

##### client.userRemotes : `array`
User allowed remotes from authentication AUTH1

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_userEvents"></a>

##### client.userEvents : `array`
User allowed events from authentication AUTH1

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_userNote"></a>

##### client.userNote : `string`
User note from authentication AUTH1

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_password"></a>

##### client.password : `string`
Password used for connection establishment

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_vscpkey"></a>

##### client.vscpkey : `string`
Secret key used for connection establishment

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_onConnError"></a>

##### client.onConnError : `function`
Callback called on any connection error

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_onMessage"></a>

##### client.onMessage : `function`
Callback called on any received VSCP response message

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_onEvent"></a>

##### client.onEvent : `Array.&lt;function()&gt;`
Callbacks called on any received VSCP event message

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_onVariable"></a>

##### client.onVariable : `function`
Callback called on any received variable (see LSTVAR command)

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_onTableRow"></a>

##### client.onTableRow : `function`
Callback called on any received table row (see GT command)

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_state"></a>

##### client.state : `number`
VSCP websocket is not connected right now

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_substate"></a>

##### client.substate : `number`
VSCP event traffic is closed

**Kind**: instance property of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_states"></a>

##### client.states : `enum`
States of the VSCP websocket

**Kind**: instance enum of [`Client`](#vscp.ws.Client)  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| DISCONNECTED | `number` | <code>0</code> | Not connected |
| CONNECTED | `number` | <code>1</code> | Standard websocket connection established |
| AUTHENTICATED | `number` | <code>2</code> | Authentication with VSCP server successful |

<a id="vscp_dot_ws_dot_Client_plus_substates"></a>

##### client.substates : `enum`
Substates of the VSCP websocket

**Kind**: instance enum of [`Client`](#vscp.ws.Client)  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| CLOSED | `number` | <code>0</code> | No events sent from server |
| OPEN | `number` | <code>1</code> | Events sent from server |

<a id="vscp_dot_ws_dot_Client_plus_addEventListener"></a>

##### client.addEventListener(eventListener)
Add a event listener.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  

| Param | Type | Description |
| --- | --- | --- |
| eventListener | `function` | Event listener function |

<a id="vscp_dot_ws_dot_Client_plus_removeEventListener"></a>

##### client.removeEventListener(eventListener)
Remove a event listener.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  

| Param | Type | Description |
| --- | --- | --- |
| eventListener | `function` | Event listener function |

<a id="vscp_dot_ws_dot_Client_plus_getAuthHash"></a>

##### client.getAuthHash(userName, password, str_iv) ⇒ `string`
Calculates the VSCP server websocket authentication hash.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `string` - Authentication ("encrypted user:password")  

| Param | Type | Description |
| --- | --- | --- |
| userName | `string` | User name |
| password | `string` | Password |
| str_iv | `string` | 16 random byte iv in hex form |

<a id="vscp_dot_ws_dot_Client_plus_onWebSocketOpen"></a>

##### client.onWebSocketOpen()
This function is called by the websocket in case the connection is established.
It will initiate the authentication with the VSCP server.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_onWebSocketClose"></a>

##### client.onWebSocketClose()
This function is called by the websocket in case that the connection is closed.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
<a id="vscp_dot_ws_dot_Client_plus_onWebSocketMessage"></a>

##### client.onWebSocketMessage(msg)
This function is called for any websocket message (VSCP server response message).

**Kind**: instance method of [`Client`](#vscp.ws.Client)  

| Param | Type | Description |
| --- | --- | --- |
| msg | `string` | VSCP server response message |

<a id="vscp_dot_ws_dot_Client_plus_connect"></a>

##### client.connect(options) ⇒ `object`
Connect to a VSCP server with the given URL.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.url | `string` | URL to the VSCP server, e.g. ws:// |
| options.userName | `string` | User name used for authentication |
| options.password | `string` | Password used for authentication |
| options.vscpkey | `string` | Secret key used for authentication |
| [options.onMessage] | `function` | Function which is called on any received VSCP response message. |
| [options.onSuccess] | `function` | Function which is called on a successful connection establishment. |
| [options.onError] | `function` | Function which is called on a failed connection establishment or in case the connection is lost during the session. |

<a id="vscp_dot_ws_dot_Client_plus_disconnect"></a>

##### client.disconnect(options) ⇒ `object`
Disconnect from a VSCP server.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| [options.onSuccess] | `function` | Function which is called on a successful disconnection. |

<a id="vscp_dot_ws_dot_Client_plus_start"></a>

##### client.start(options) ⇒ `object`
Start receiving events.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_ws_dot_Client_plus_stop"></a>

##### client.stop(options) ⇒ `object`
Stop receiving events.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_ws_dot_Client_plus_clearQueue"></a>

##### client.clearQueue(options) ⇒ `object`
Clear the VSCP event queue on the server side.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_ws_dot_Client_plus_sendEvent"></a>

##### client.sendEvent(options) ⇒ `object`
Send a VSCP event to the VSCP server.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.event | [`Event`](#vscp.Event) | VSCP event to send |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_ws_dot_Client_plus_setFilter"></a>

##### client.setFilter(options) ⇒ `object`
Set a filter in the VSCP server for VSCP events.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| [options.filterPriority] | `number` | Priority filter (default: 0) |
| [options.filterClass] | `number` | Class filter (default: 0) |
| [options.filterType] | `number` | Type filter (default: 0) |
| [options.filterGuid] | `Array.&lt;number&gt;` \| `string` | GUID filter (default: 0) |
| [options.maskPriority] | `number` | Priority mask (default: 0) |
| [options.maskClass] | `number` | Class mask (default: 0xffff) |
| [options.maskType] | `number` | Type mask (default: 0xffff) |
| [options.maskGuid] | `Array.&lt;number&gt;` \| `string` | GUID mask (default: 0) |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_ws_dot_Client_plus_createVar"></a>

##### client.createVar(options) ⇒ `object`
Create a a VSCP remote variable.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.name | `string` | Variable name |
| [options.type] | `number` | Variable type (default: string) |
| [options.accessrights] | `number` | Variable value (default: 744) |
| options.persistency | `boolean` | Variable is persistent (true) or not (false) |
| options.value | `string` | Variable Value |
| [options.note] | `string` | Variable note (optional) |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_ws_dot_Client_plus_readVar"></a>

##### client.readVar(options) ⇒ `object`
Read a value from a VSCP server variable.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.name | `string` | Variable name |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_ws_dot_Client_plus_writeVar"></a>

##### client.writeVar(options) ⇒ `object`
Write a value to a VSCP server variable.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.name | `string` | Variable name |
| options.value | `string` | Variable value |
| options.type | `number` | Variable type |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_ws_dot_Client_plus_resetVar"></a>

##### client.resetVar(options) ⇒ `object`
Reset a VSCP server variable.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.name | `string` | Variable name |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_ws_dot_Client_plus_removeVar"></a>

##### client.removeVar(options) ⇒ `object`
Remove a VSCP server variable.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.name | `string` | Variable name |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_ws_dot_Client_plus_lengthVar"></a>

##### client.lengthVar(options) ⇒ `object`
Get a VSCP server variable length.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.name | `string` | Variable name |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_ws_dot_Client_plus_lastChangeVar"></a>

##### client.lastChangeVar(options) ⇒ `object`
Get last change of a VSCP server variable.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.name | `string` | Variable name |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_ws_dot_Client_plus_listVar"></a>

##### client.listVar(options) ⇒ `object`
List all VSCP server variables.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| [options.regex] | `string` | Regular expression to filter variables |
| options.onVariable | `function` | Function which is called per variable |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_ws_dot_Client_plus_readTable"></a>

##### client.readTable(options) ⇒ `object`
Get data from a table.
If "begin" and "end" are omitted, the whole table is returned.

**Kind**: instance method of [`Client`](#vscp.ws.Client)  
**Returns**: `object` - Promise  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options |
| options.name | `string` | Table name |
| options.begin | `string` | Date when to begin ( ISO form YY-MM-DD HH:MM:SS ) |
| options.end | `string` | Date when to end ( ISO form YY-MM-DD HH:MM:SS ) |
| options.onTableRow | `function` | Function which is called on every received table row |
| [options.onSuccess] | `function` | Function which is called on a successful operation |
| [options.onError] | `function` | Function which is called on a failed operation |

<a id="vscp_dot_getVarTypeName"></a>

### vscp.getVarTypeName(n) ⇒ `string`
Get variable type name as string by numerical code.

**Kind**: static method of [`vscp`](#vscp)  
**Returns**: `string` - Variable type name  

| Param | Type | Description |
| --- | --- | --- |
| n | `number` | Numerical code |

<a id="vscp_dot_getVarTypeNumerical"></a>

### vscp.getVarTypeNumerical(str) ⇒ `number`
Get numerical code of variable type from string.

**Kind**: static method of [`vscp`](#vscp)  
**Returns**: `number` - Variable type numerical code  

| Param | Type | Description |
| --- | --- | --- |
| str | `string` | Variable type name |

<a id="vscp_dot_getEditorModeFromType"></a>

### vscp.getEditorModeFromType(n) ⇒ `string`
Get ace editor formation mode string from numerical variable type code.

**Kind**: static method of [`vscp`](#vscp)  
**Returns**: `string` - Ace editro formation mode string  

| Param | Type | Description |
| --- | --- | --- |
| n | `number` | Variable type numerical code |

<a id="vscp_dot_b64EncodeUnicode"></a>

### vscp.b64EncodeUnicode(str) ⇒ `string`
Encode base64 unicode safe.

**Kind**: static method of [`vscp`](#vscp)  
**Returns**: `string` - Base64  

| Param | Type | Description |
| --- | --- | --- |
| str | `string` | Unicode string |

<a id="vscp_dot_b64DecodeUnicode"></a>

### vscp.b64DecodeUnicode(str) ⇒ `string`
Decode base64 unicode safe.

**Kind**: static method of [`vscp`](#vscp)  
**Returns**: `string` - Unicode string  

| Param | Type | Description |
| --- | --- | --- |
| str | `string` | Base64 |

<a id="vscp_dot_isBase64Type"></a>

### vscp.isBase64Type(type) ⇒ `bool`
Determine whether the given variable type is a type stored base64 encoded or not.

**Kind**: static method of [`vscp`](#vscp)  
**Returns**: `bool` - Stored base64 encoded (true) or not (false).  

| Param | Type | Description |
| --- | --- | --- |
| type | `number` | Variable type numerical code |

<a id="vscp_dot_decodeValueIfBase64"></a>

### vscp.decodeValueIfBase64(type, value) ⇒ `string`
Decode the value if its base64 encoded.

**Kind**: static method of [`vscp`](#vscp)  
**Returns**: `string` - Decoded value if type is base64 encoded type otherwise original value.  

| Param | Type | Description |
| --- | --- | --- |
| type | `number` | Variable type numerical code |
| value | `string` | Value |

<a id="vscp_dot_encodeValueIfBase64"></a>

### vscp.encodeValueIfBase64(type, value) ⇒ `string`
Encode the value if its stored in base64.

**Kind**: static method of [`vscp`](#vscp)  
**Returns**: `string` - Encoded value if type is base64 encoded type otherwise original value.  

| Param | Type | Description |
| --- | --- | --- |
| type | `number` | Variable type numerical code |
| value | `string` | Value |

[filename](./bottom_copyright.md ':include')