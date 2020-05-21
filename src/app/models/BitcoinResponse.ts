export interface BitcoinResponse {
  time: {
    updated: string;
  };
  bpi: {
    [key in "USD" | "BRL"]: {
      code: string;
      rate: string;
      rate_float: number;
    };   
  };
}
