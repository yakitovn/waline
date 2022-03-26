import mitt, { Emitter } from 'mitt';

export type WalineEvents = {
  render: AbortSignal;
};

export type WalineEvent = Emitter<WalineEvents>;

export const getEvent = (): WalineEvent => mitt<WalineEvents>();
