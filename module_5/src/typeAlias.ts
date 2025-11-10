// Without type alias

const user1: {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  gender: "male" | "female";
  contactNo: string;
} = {
  id: 1235,
  name: {
    firstName: "MD",
    lastName: "Ekhlasur Rahman",
  },
  gender: "male",
  contactNo: "01518750416",
};

const user2: {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  gender: "male" | "female";
  contactNo: string;
} = {
  id: 1235,
  name: {
    firstName: "MD",
    lastName: "Ekhlasur Rahman",
  },
  gender: "male",
  contactNo: "01518750416",
};

//!  with type alais

type User = {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  gender: "male" | "female";
  contactNo: string;
};

const user5: User = {
  id: 1235,
  name: {
    firstName: "MD",
    lastName: "Ekhlasur Rahman",
  },
  gender: "male",
  contactNo: "01518750416",
};

const user6: User = {
  id: 1235,
  name: {
    firstName: "MD",
    lastName: "Ekhlasur Rahman",
  },
  gender: "male",
  contactNo: "01518750416",
};
