import { adminState } from "../atom/admin.js";
import {selector} from "recoil";

export const isLoading = selector({
  key: 'LoadingState',
  get: ({get}) => {
    const state = get(adminState);

    return state.isloading;
  },
});
