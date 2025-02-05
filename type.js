"use strict";

{
  const SDK = globalThis.SDK;
  const PLUGIN_CLASS = SDK.Plugins.Massive_Cube_Rex_CSV2Array;

  PLUGIN_CLASS.Type = class Rex_CSV2ArrayType extends SDK.ITypeBase {
    constructor(sdkPlugin, iObjectType) {
      super(sdkPlugin, iObjectType);
    }
  };
}
