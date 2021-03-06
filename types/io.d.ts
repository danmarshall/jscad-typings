
export declare namespace io {
    interface Status {
        progress?: number;
    }
    interface Options {
        statusCallback: (status: Status) => void;
    }
}
