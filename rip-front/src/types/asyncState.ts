export enum FetchStatus {
    IDLE = "IDLE",
    PENDING = "PENDING",
    FULFILLED = "FULFILLED",
    REJECTED = "REJECTED",
}

export type AsyncState = {
    status: FetchStatus;
    error?: unknown;
};
