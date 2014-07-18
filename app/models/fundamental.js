import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  query: DS.attr(),
  symbol: attr(),
  ask: attr(),
  averageDailyVolume: attr(),
  bid: attr(),
  askRealtime: attr(),
  bidRealtime: attr(),
  bookValue: attr(),
  bhange_PercentChange: attr(),
  change: attr(),
  commission: attr(),
  currency: attr(),
  changeRealtime: attr(),
  afterHoursChangeRealtime: attr(),
  dividendShare: attr(),
  lastTradeDate: attr(),
  tradeDate: attr(),
  earningsShare: attr(),
  errorIndicationreturnedforsymbolchangedinvalid: attr(),
  epsEstimateCurrentYear: attr(),
  epsEstimateNextYear: attr(),
  epsEstimateNextQuarter: attr(),
  daysLow: attr(),
  daysHigh: attr(),
  yearLow: attr(),
  yearHigh: attr(),
  holdingsGainPercent: attr(),
  annualizedGain: attr(),
  holdingsGain: attr(),
  holdingsGainPercentRealtime: attr(),
  holdingsGainRealtime: attr(),
  moreInfo: attr(),
  orderBookRealtime: attr(),
  marketCapitalization: attr(),
  marketCapRealtime: attr(),
  ebitda: attr(),
  changeFromYearLow: attr(),
  percentChangeFromYearLow: attr(),
  lastTradeRealtimeWithTime: attr(),
  changePercentRealtime: attr(),
  changeFromYearHigh: attr(),
  percebtChangeFromYearHigh: attr(),
  lastTradeWithTime: attr(),
  lastTradePriceOnly: attr(),
  highLimit: attr(),
  lowLimit: attr(),
  daysRange: attr(),
  daysRangeRealtime: attr(),
  fiftydayMovingAverage: attr(),
  twoHundreddayMovingAverage: attr(),
  changeFromTwoHundreddayMovingAverage: attr(),
  percentChangeFromTwoHundreddayMovingAverage: attr(),
  changeFromFiftydayMovingAverage: attr(),
  percentChangeFromFiftydayMovingAverage: attr(),
  name: attr(),
  notes: attr(),
  open: attr(),
  previousClose: attr(),
  pricePaid: attr(),
  changeinPercent: attr(),
  priceSale: attr(),
  priceBook: attr(),
  exDividendDate: attr(),
  peRatio: attr(),
  dividendPayDate: attr(),
  peRatioRealtime: attr(),
  pegRatio: attr(),
  priceEPSEstimateCurrentYear: attr(),
  priceEPSEstimateNextYear: attr(),
  sharesOwned: attr(),
  shortRatio: attr(),
  lastTradeTime: attr(),
  tickerTrend: attr(),
  oneyrTargetPrice: attr(),
  volume: attr(),
  holdingsValue: attr(),
  holdingsValueRealtime: attr(),
  yearRange: attr(),
  daysValueChange: attr(),
  daysValueChangeRealtime: attr(),
  stockExchange: attr(),
  dividendYield: attr(),
  percentChange: attr()
});