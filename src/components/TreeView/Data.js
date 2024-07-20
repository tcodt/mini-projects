const treeData = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Account",
    to: "/account",
    children: [
      {
        label: "Cart",
        to: "cart",
      },
      {
        label: "Total",
        to: "total",
        children: [
          {
            label: "Spent",
            to: "spent",
          },
        ],
      },
    ],
  },
  {
    label: "Category",
    to: "category",
    children: [
      {
        label: "Digital",
        to: "digital",
      },
      {
        label: "Sport",
        to: "sport",
      },
      {
        label: "Clothes",
        to: "clothes",
      },
    ],
  },
  {
    label: "Security",
    to: "/security",
    children: [
      {
        label: "Login",
        to: "login",
      },
      {
        label: "Register",
        to: "register",
      },
    ],
  },
];

export default treeData;
