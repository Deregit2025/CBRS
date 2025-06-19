export const usersTestData = {
  searchByName: [
    { input: "Dereje", expected: "Dereje", isValid: true },
    { input: "Abebe", expected: "Abebe", isValid: true },
    { input: "NonExistentName", expected: "", isValid: false },
    { input: "Ghost", expected: "", isValid: false },
    { input: "1234", expected: "", isValid: false },
    { input: "@@#-+", expected: "", isValid: false },
  ],

  searchByPhone: [
    { input: "+251918422026", expected: "+251918422026", isValid: true },
    { input: "+251910101010", expected: "+251910101010", isValid: true },
    { input: "+251000000000", expected: "", isValid: false },
    { input: "+251999999999", expected: "", isValid: false },
    { input: "@*$#", expected: "", isValid: false },
  ],

  searchByEmail: [
    {
      input: "dereje.derib@eaglelionsystems.com",
      expected: "dereje.derib@eaglelionsystems.com",
      isValid: true,
    },
    { input: "invalid@nomail.com", expected: "", isValid: false },
    { input: "fake@email.test", expected: "", isValid: false },
    { input: "missingatsymbol.com", expected: "", isValid: false },
  ],

  createUser: {
    input: {
      firstName: "Selam",
      middleName: "Semay",
      lastName: "Endetneh",
      email: "semay@gmail.com",
      phone: "918422026",
      address: "Lideta",
      realm: "Maker",
    },
  },

  editUser: {
    userRowName: "325756 Dereje Checker Checker",
    updatedUser: {
      merchant: "Queens Supermarket - new",
      firstName: "Hello",
      middleName: "Merchant",
      lastName: "Name",
      email: "hellmerchant@gmail.com",
      phone: "+25191010101010",
      address: "Hayat",
      realm: "Maker",
    },
  },

  // Invalid Name Inputs
  invalidNameUsers: [
    {
      firstName: "Selam123",
      middleName: "Semay",
      lastName: "Endetneh",
      email: "semay@gmail.com",
      phone: "918422026",
      address: "Lideta",
      realm: "Maker",
    },
    {
      firstName: "Selam",
      middleName: "Se9may",
      lastName: "Endetneh",
      email: "semay@gmail.com",
      phone: "918422026",
      address: "Lideta",
      realm: "Maker",
    },
    {
      firstName: "Selam",
      middleName: "Semay",
      lastName: "Endet6neh",
      email: "semay@gmail.com",
      phone: "918422026",
      address: "Lideta",
      realm: "Maker",
    },
    {
      firstName: "1234",
      middleName: "4567",
      lastName: "Endetneh",
      email: "semay@gmail.com",
      phone: "918422026",
      address: "Lideta",
      realm: "Maker",
    },
  ],

  // Invalid Email Inputs
  invalidEmailUsers: [
    {
      firstName: "Selam",
      middleName: "Semay",
      lastName: "Endetneh",
      email: "invalidemail.com",
      phone: "918422026",
      address: "Lideta",
      realm: "Maker",
    },
    {
      firstName: "Selam",
      middleName: "Semay",
      lastName: "Endetneh",
      email: "email@invalid",
      phone: "918422026",
      address: "Lideta",
      realm: "Maker",
    },
    {
      firstName: "Selam",
      middleName: "Semay",
      lastName: "Endetneh",
      email: "@gmail.com",
      phone: "918422026",
      address: "Lideta",
      realm: "Maker",
    },
    {
      firstName: "Selam",
      middleName: "Semay",
      lastName: "Endetneh",
      email: "",
      phone: "918422026",
      address: "Lideta",
      realm: "Maker",
    },
  ],

  // Invalid Phone Inputs
  invalidPhoneUsers: [
    {
      firstName: "Selam",
      middleName: "Semay",
      lastName: "Endetneh",
      email: "semay@gmail.com",
      phone: "922026",
      address: "Lideta",
      realm: "Maker",
    },
    {
      firstName: "Selam",
      middleName: "Semay",
      lastName: "Endetneh",
      email: "semay@gmail.com",
      phone: "",
      address: "Lideta",
      realm: "Maker",
    },
  ],
};
