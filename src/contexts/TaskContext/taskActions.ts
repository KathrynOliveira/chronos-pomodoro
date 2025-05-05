import { TaskModel } from "../../models/TaskModel";
import { TaskStateModel } from "../../models/TaskStateModel";

export enum TaskActionTypes {
  START_TASK = "START_TASK",
  INTERRUPT_TASK = "INTERRUPT_TASK",
  RESET_STATE = "RESET_STATE",
  COUNT_DOWN = "COUNT_DOWN",
  COMPLETE_TASK = "COMPLETE_TASK",
  CHANCE_SETTINGS = "CHANCE_SETTINGS",
}

export type TaskActionsWithPayload =
  | {
      type: TaskActionTypes.START_TASK;
      payload: TaskModel;
    }
  | {
      type: TaskActionTypes.START_TASK;
      payload: TaskModel;
    }
  | {
      type: TaskActionTypes.CHANCE_SETTINGS;
      payload: TaskStateModel['config'];
    };

export type TaskActionsWithoutPayload =
   | {
       type: TaskActionTypes.RESET_STATE;
     }
   | {
       type: TaskActionTypes.INTERRUPT_TASK;
     }
   | {
       type: TaskActionTypes.COMPLETE_TASK;
     };
 
export type TaskActionModel = TaskActionsWithPayload | TaskActionsWithoutPayload;