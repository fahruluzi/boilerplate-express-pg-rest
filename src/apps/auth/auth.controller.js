class AuthController {
  constructor() {
    this.loginUser = this.loginUser.bind(this);
  }

  async loginUser(req, res) {
    res.sendSuccess("MASUK SINI");
  }
}

module.exports = AuthController;
