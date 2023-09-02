const User = require('/../models/User');

class UserService {
  async registerUser(userData) {
    try {
      const newUser = new User(userData);
      await newUser.save();
      return newUser;
    } catch (error) {
      throw error;
    }
  }

  async loginUser(email, password) {
    try {
      const user = await User.findOne({ email });

      if (!user || !user.comparePassword(password)) {
        throw new Error('Invalid credentials');
      }

      return user;
    } catch (error) {
      throw error;
    }
  }

  async updateUserProfile(userId, updates) {
    try {
      const updatedUser = await User.findByIdAndUpdate(userId, updates, { new: true });
      return updatedUser;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new UserService();
