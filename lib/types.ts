export interface VolumeTransactionValueCount {
  date: string; // Format: "YYYY-MM"
  volume: number;
  ca: number;
}

export interface Totals {
  totalVolume: number;
  totalCA: number;
  totalAccount: number
};

export interface VolumeTransactionResponse {
  data: VolumeTransactionValueCount[];
  totals: Totals;
}


export interface TransactionType {
  type: number;
  proportion: number;
}

export interface TransactionOperation {
  operation: number;
  proportion: number;
}

export interface DominantTransactionCountProps {
  district: number;
  proportion: number;
}
export interface DominantAccountCountProps {
  account: number;
  proportion: number;
}

export interface TypeTransLoan {
  type: "transactions" | "prêts"
}