import { Component, OnInit, OnDestroy } from '@angular/core';
import debug from 'debug';
import { BdbMonitorService } from '../bdb-monitor.service';
import { BdbService } from '../bdb.service';
import { Message } from '../message';

@Component({
  selector: 'app-bdb-monitor',
  templateUrl: './bdb-monitor.component.html',
  styleUrls: ['./bdb-monitor.component.css']
})
export class BdbMonitorComponent implements OnInit, OnDestroy {


  constructor(
    private bdb: BdbService,
    private bdbMonitor: BdbMonitorService
  ) {
    this.JSON = JSON;
  }

  public JSON: any;
  public messages: any[];

  debug = (msg) => {
    debug('bdb-monitor')(msg);
  }

  showTransaction = (txId) => {
    this.bdb.getTransaction(txId)
      .then(this.debug);
  }

  showAsset = (assetId) => {
    this.bdb.getFullAssetAndMetadata(assetId)
      .then(this.debug);
  }

  ngOnInit() {
    this.messages = this.bdbMonitor.messages;
    this.bdbMonitor.openWebSocket();
  }

  ngOnDestroy = () => {
    this.bdbMonitor.closeWebSocket();
  }
}
