'use strict';
import { Injectable } from '@nestjs/common';
import ccxt from 'ccxt';
import _ from "lodash";

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!!';
  }

  async getPrices(): Promise<any> {
    let binance = new ccxt.binance();
    let data = await binance.fetchTickers();
    let response = []
    _.forEach(data, (value, key) => {
      response.push(_.pick(value, ["symbol", "high", "low", "last", "baseVolume", "percentage"]));
    })
    return response;
    // return await ccxt.binance.loadMarkets();
    // return await exchangeClass.loadMarkets();
  }
}
