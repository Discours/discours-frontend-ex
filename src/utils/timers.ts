// tslint:disable-next-line no-string-based-set-timeout
export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
