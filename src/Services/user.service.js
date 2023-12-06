class UsersRegister {
  getRegisteredUsers() {
    return [
      {
        userId: 1,
        userName: "Adams Godwin",
        userBalance: "$565,550.00",
      },
      {
        userId: 2,
        userName: "Kendricks Johnson",
        userBalance: "$102,230.00",
      },
      {
        userId: 3,
        userName: "Karen Docker",
        userBalance: "$310,010.00",
      },
      {
        userId: 4,
        userName: "Eric Carlson",
        userBalance: "$865,450.00",
      },
      {
        userId: 5,
        userName: "Megan Gray",
        userBalance: "$735,106.00",
      },
    ];
  }

  getUserBalance() {
    return [
      {
        userId: 1,
        userName: "Adams Godwin",
        userBalance: "$565,550.00",
      },
    ];
  }

  updateUserBalance() {
    return [
      {
        userId: 1,
        userName: "Adams Godwin",
        userBalance: "$920,875.00",
      },
    ];
  }

  transferBalance() {
    return "Balance transferred to another user";
  }
}

module.exports = UsersRegister;
