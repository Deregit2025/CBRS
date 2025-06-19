export const exchangeRateTestData = {
  editExchangeRateData: [
    { currencyToSearch: "USD", newRate: "150", valid: true },
    { currencyToSearch: "USD", newRate: "1234567890", valid: true },
    { currencyToSearch: "USD", newRate: "45.6789", valid: true },
  ],

  addExchangeRateData: [
    { from: "Saudi Riyal", to: "Ethiopian Birr", rate: "45", valid: true },
    { from: "Saudi Riyal", to: "Ethiopian Birr", rate: "9999999999", valid: true },
    { from: "Saudi Riyal", to: "Ethiopian Birr", rate: "12.345", valid: true },
  ],
};



