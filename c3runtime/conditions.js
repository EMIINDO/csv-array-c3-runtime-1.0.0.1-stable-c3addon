"use strict";

{
  // callMap push globalThis.
  globalThis.C3.Plugins.Massive_Cube_Rex_CSV2Array.Cnds = {
    ForEachCell(csv_string) {
      var table = globalThis.rexObjs.CSVToArray(csv_string, this.strDelimiter);
      var yCnt = table.length;
      var xCnt = table[0].length;
      var i, j;

      // Get necessary references
      const runtime = this._runtime;
      const eventSheetManager = runtime.GetEventSheetManager();
      const currentEvent = runtime.GetCurrentEvent();
      const solModifiers = currentEvent.GetSolModifiers();
      const eventStack = runtime.GetEventStack();

      // Get current stack frame and push new one
      const oldFrame = eventStack.GetCurrentStackFrame();
      const newFrame = eventStack.Push(currentEvent);

      this.exp_Width = xCnt;
      this.exp_Height = yCnt;

      for (j = 0; j < yCnt; j++) {
        this.exp_CurY = j;
        for (i = 0; i < xCnt; i++) {
          // ... optionally update state here ...
          this.exp_CurX = i;
          this.exp_CurValue = this.value_get(table[j][i]);

          // Push a copy of the current SOL
          eventSheetManager.PushCopySol(solModifiers);

          // Retrigger the current event, running a single loop iteration
          currentEvent.Retrigger(oldFrame, newFrame);

          // Pop the current SOL
          eventSheetManager.PopSol(solModifiers);
        }
      }

      // Pop the event stack frame
      eventStack.Pop();

      // Return false since event already executed
      return false;
    },
  };
}
