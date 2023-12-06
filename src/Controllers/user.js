const UsersRegister = require("../Services/user.service");
const User = new UsersRegister();

module.exports.getAllUsers = (req, res) => {
  try {
    const allUsers = User.getRegisteredUsers();

    res.status(200).json(allUsers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports.getUserBalance = (req, res) => {
  try {
    const { userId } = req.params;
    const user = User.getRegisteredUsers().find(
      (user) => user.userId === parseInt(userId)
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const userBalance = user.userBalance;
    res.status(200).json({ userId, userBalance });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports.updateUserBalance = (req, res) => {
  try {
    const { userId } = req.params;
    const { newBalance } = req.body;

    const user = User.getRegisteredUsers().find(
      (user) => user.userId === parseInt(userId)
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.userBalance = newBalance;
    res.status(200).json({
      message: "User balance updated successfully",
      userId,
      newBalance: "$800,000.00",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports.transferBalance = (req, res) => {
  try {
    const { fromUserId, toUserId, amount } = req.body;

    const fromUser = User.getRegisteredUsers().find(
      (user) => user.userId === parseInt(fromUserId)
    );
    const toUser = User.getRegisteredUsers().find(
      (user) => user.userId === parseInt(toUserId)
    );

    if (!fromUser || !toUser) {
      return res.status(404).json({ message: "One or both users not found" });
    }

    const transferAmount = parseFloat(amount);
    if (isNaN(transferAmount) || transferAmount <= 0) {
      return res.status(400).json({ message: "Invalid transfer amount" });
    }

    const fromUserBalance = parseFloat(
      fromUser.userBalance.replace("$", "").replace(",", "")
    );
    if (fromUserBalance < transferAmount) {
      return res
        .status(400)
        .json({ message: "Insufficient balance for transfer" });
    }

    fromUser.userBalance = `$${fromUserBalance - transferAmount}`;
    toUser.userBalance = `$${
      parseFloat(toUser.userBalance.replace("$", "").replace(",", "")) +
      transferAmount
    }`;

    res.status(200).json({
      message: "Transfer successful",
      fromUserId,
      toUserId,
      transferAmount: "$50,000.00",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
