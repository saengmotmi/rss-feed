import { Dispatch, SetStateAction } from "react";

export type SetStateType<T> = Dispatch<SetStateAction<T>>;

export const isRejected = (
  input: PromiseSettledResult<unknown>
): input is PromiseRejectedResult => input.status === "rejected";

export const isFulfilled = <T>(
  input: PromiseSettledResult<T>
): input is PromiseFulfilledResult<T> => input.status === "fulfilled";
