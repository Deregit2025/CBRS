export const loanAppTestData = {
  search: {
    valid: ['Dereje', 'Naz rawit'],
    invalid: ['Getahun', 'Mekdes', 'Binyam'],
  },

  loanTypes: ['Car', 'Mortgage'],

  statuses: ['Active', 'Pending', 'Approved', 'Rejected', 'Preparing'],

  dateFilters: [
    {
      option: 'Choose Thursday, June 7th',
      expectedInTable: '6/5/2025, 3:53:37 AM',
    },
    {
      option: 'Choose Wednesday, June 6th',
      expectedInTable: '6/4/2025, 1:22:00 PM',
    },
  ],

  loanRows: [
    {
      rowText: 'LA250605155337 Dereje Getie +',
      detailName: 'Dereje Getie',
    },
    {
      rowText: 'LA250606132200 Naz rawit +',
      detailName: 'Naz rawit',
    },
  ],
};
