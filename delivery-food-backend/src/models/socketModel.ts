export default interface ServerToClientEvents {
    noArg: () => void;
    basicEmit: (a: number, b: string, c: Buffer) => void;
    withAck: (d: string, callback: (e: number) => void) => void;
  }
  
export default  interface ClientToServerEvents {
    hello: () => void;
  }
  
  export default interface InterServerEvents {
    ping: () => void;
  }
  
  export default  interface SocketData {
    position: Array<number>;
  }