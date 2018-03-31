import { Injectable } from '@angular/core';
import debug from 'debug';

import * as bdb from '../libs/bdb';

@Injectable()
export class BdbService {

  constructor() { }

  getTransaction = bdb.getTransaction.bind(bdb);
  getFullAssetAndMetadata = bdb.getFullAssetAndMetadata.bind(bdb);

}
