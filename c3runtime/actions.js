"use strict";

{
  const C3 = globalThis.C3;
  globalThis.C3.Plugins.Massive_Cube_Rex_CSV2Array.Acts = {
    CSV2Array(csv_string, array_objs, map_mode, zIndex) {
      //assert2(globalThis.C3.Plugins.Arr, "[CSV2Array] Error:No Array object found.");
      if (typeof globalThis.C3.Plugins.Arr != "function") {
        console.log(
          "[CSV2Array] Error:No Array object found." + typeof globalThis.C3.Plugins.Arr
        );
      }

      //console.log(globalThis.C3.Plugins.Arr);

      //var array_obj = array_objs.GetFirstPicked();
      var array_obj = array_objs.GetInstances()[0].GetSdkInstance();
      console.log(array_obj);
      //var is_array_inst = (array_obj instanceof globalThis.C3.Plugins.Arr.prototype.Instance);
      //assert2(is_array_inst, "[CSV2Array] Error:Need an array object.");

      var table = globalThis.rexObjs.CSVToArray(csv_string, this.strDelimiter);
      var xCnt = table.length;
      var yCnt = table[0].length;

      if (zIndex == null) {
        zIndex = 0;
        if (map_mode == 0) {
          array_obj.SetSize(xCnt, yCnt, zIndex + 1);
          //globalThis.C3.Plugins.Arr.prototype.acts.SetSize.apply(array_obj, [xCnt, yCnt, zIndex+1]);
        } else {
          array_obj.SetSize(yCnt, xCnt, zIndex + 1);
          //globalThis.C3.Plugins.Arr.prototype.acts.(array_obj, [yCnt, xCnt, zIndex+1]);
        }
      } else {
        if (zIndex < 0) zIndex = 0;
        //globalThis.C3.Plugins.Arr.prototype.exps.Depth.call(array_obj, fake_ret);
        //var z_cnt = Math.max(fake_ret.value, zIndex+1);
        var z_cnt = Math.max(array_obj.GetDepth(), zIndex + 1);
        if (map_mode == 0) {
          array_obj.SetSize(xCnt, yCnt, z_cnt);
          //globalThis.C3.Plugins.Arr.prototype.acts.SetSize.apply(array_obj, [xCnt, yCnt, z_cnt]);
        } else {
          array_obj.SetSize(yCnt, xCnt, z_cnt);
          //globalThis.C3.Plugins.Arr.prototype.acts.SetSize.apply(array_obj, [yCnt, xCnt, z_cnt]);
        }
      }

      var i, j, v;
      //var setArrayFn = globalThis.C3.Plugins.Arr.prototype.acts.SetXYZ;

      if (map_mode == 0) {
        for (j = 0; j < yCnt; j++) {
          for (i = 0; i < xCnt; i++) {
            v = this.value_get(table[i][j]);
            //setArrayFn.apply(array_obj, [i,j,zIndex, v]);
            array_obj.Set(i, j, zIndex, v);
          }
        }
      } else {
        for (j = 0; j < yCnt; j++) {
          for (i = 0; i < xCnt; i++) {
            v = this.value_get(table[i][j]);
            //setArrayFn.apply(array_obj, [j,i,zIndex, v]);
            array_obj.Set(j, i, zIndex, v);
          }
        }
      }
    },
    SetDelimiter(sDelimiter) {
      this.strDelimiter = sDelimiter;
    },
  };
}
