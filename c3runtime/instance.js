"use strict";

{
  // Porting BY EMI INDO with c3addon-ide-plus
  globalThis.C3.Plugins.Massive_Cube_Rex_CSV2Array.Instance = class Rex_CSV2ArrayInstance extends (
    globalThis.ISDKInstanceBase
  ) {
    constructor() {
      super();

            const properties = this._getInitProperties();

      // Inicializa las propiedades del Objeto

      this.strDelimiter = ",";

      if (properties) {
        // tenga en cuenta que las propiedades
        // pueden ser nulas en algunos casos
        this.strDelimiter = properties[0];
        this.isEvalMode = properties[1];
      }

      this.exp_CurX = 0;
      this.exp_CurY = 0;
      this.exp_CurValue = "";
      this.exp_Width = 0;
      this.exp_Height = 0;

      this.fake_ret = {
        value: 0,
        set_any: function (value) {
          this.value = value;
        },
        set_int: function (value) {
          this.value = value;
        },
        set_float: function (value) {
          this.value = value;
        },
        set_string: function (value) {
          this.value = value;
        },
      };
    }

    value_get(v) {
      if (v == null) v = 0;
      else if (this.isEvalMode) v = eval("(" + v + ")");

      return v;
    }

    _release() {
      super._release();
    }

    _saveToJson() {
      return { delimiter: this.strDelimiter };
    }

    _loadFromJson(o) {
      this.strDelimiter = o["delimiter"];
    }
  };
}
