export interface BitcoinResponse {
  time: {
    updated: string;
  };
  bpi: {
    USD: {
      code: string;
      rate: string;
    };
    BRL: {
      code: string;
      rate: string;
    };
  };
}
