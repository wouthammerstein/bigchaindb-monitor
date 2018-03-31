export class Message {
  content: string;
  type: string;
  transaction?: {
    block_id: string,
    asset_id: string,
    transaction_id: string
  };
  asset?: any;
  transactionDetails?: any;
  transactionDetailsStr?: string;

  constructor(message, type) {
    this.content = message;
    this.type = type;
    this.transaction = (type === 'transaction' && JSON.parse(message));
  }
}
