"use strict";

{
  // callMap path/SDK/instance.js
  const SDK = globalThis.SDK;
    const PLUGIN_CLASS = SDK.Plugins.Massive_Cube_Rex_CSV2Array;

  PLUGIN_CLASS.Instance = class Rex_CSV2ArrayInstance extends (
    SDK.IInstanceBase
  ) {
    constructor(sdkType, inst) {
      super(sdkType, inst);
    }

    Release() {}

    OnCreate() {}

    OnPropertyChanged(id, value) {}

    LoadC2Property(name, valueString) {
      return false; // not handled
    }
  };
}
