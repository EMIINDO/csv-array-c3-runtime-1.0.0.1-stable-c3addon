"use strict";

{
  globalThis.C3.Plugins.Massive_Cube_Rex_CSV2Array.Cnds = {
    ForEachCell(csv_string) {
      var table = globalThis.rexObjs.CSVToArray(csv_string, this.strDelimiter);
      var yCnt = table.length;
      var xCnt = table[0].length;
      
      this.exp_Width = xCnt;
      this.exp_Height = yCnt;

      // Create a new loop context using API v2
      const loopCtx = this.runtime.sdk.createLoopingConditionContext();

      for (let j = 0; j < yCnt; j++) {
        this.exp_CurY = j;
        for (let i = 0; i < xCnt; i++) {
          this.exp_CurX = i;
          this.exp_CurValue = this.value_get(table[j][i]);

          loopCtx.retrigger();
          
          if (loopCtx.isStopped)
            break;
        }
        if (loopCtx.isStopped)
          break;
      }

      loopCtx.release();

      return false;
    },
  };
}
