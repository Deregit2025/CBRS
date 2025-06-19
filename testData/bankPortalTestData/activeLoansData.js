export const activeLoanTestData = {
  searchByName: [
    { input: 'Dereje', expected: 'Dereje Getie', isValid: true },
    {input: 'Edil', expected: 'Edil tadesse', isValid:true},
    {input: '1234',expected:'',isvalid:false},
    {input: '@$#-', expected: '' , isvalid:false},
    { input: 'Walta', expected: '', isValid: false },
    { input: 'Nigus', expected: '', isValid: false },
    { input: '0912345678', expected: '', isValid: false },  
  ],
 searchByLoanType: [
  { type: 'Car', expected: 'Car'},
  { type: 'Mortgage', expected: 'Mortgage'}
],

  searchByDate: {
    option: 'Choose Friday, April 11th,',
    expected: '2025, April 11, 04:39 PM',
  }
};
