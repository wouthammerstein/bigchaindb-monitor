import { Injectable } from '@angular/core';
import debug from 'debug';
import { Message } from './message';
import { BdbService } from './bdb.service';

@Injectable()
export class BdbMonitorService {

  private websocket: WebSocket;
  private wsUri = 'ws://localhost:9985/api/v1/streams/valid_transactions';
  public messages: Message[] = [];

  constructor(private bdb: BdbService) { }

  debug = (...args) => {
    debug('bdb-monitor')(...args);
  }

  openWebSocket() {
    this.websocket = new WebSocket(this.wsUri);
    this.websocket.onopen = this.onOpen;
    this.websocket.onclose = this.onClose;
    this.websocket.onmessage = this.onMessage;
    this.websocket.onerror = this.onError;
  }

  closeWebSocket() {
    this.websocket.close();
  }

  onOpen = (evt: Event) => {
    this.debug('websocket connected');
    this.messages.push(new Message('Websocket connected', 'debug'));
  }

  onClose = (evt: CloseEvent) => {
    this.debug('websocket disconnected');
    this.messages.push(new Message('Websocket disconnected', 'debug'));
  }

  onMessage = (evt: MessageEvent) => {
    // this.debug('Message:', evt.data);
    const msg = new Message(evt.data, 'transaction');
    this.bdb.getTransaction(msg.transaction.transaction_id)
      .then(transaction => {
        msg.transactionDetails = transaction;
        msg.transactionDetailsStr = JSON.stringify(transaction);
      });
    this.messages.push(msg);
  }

  onError = (evt: MessageEvent) => {
    this.debug('Error:', evt.data);
    this.messages.push(new Message(evt.data, 'error'));
  }

}
