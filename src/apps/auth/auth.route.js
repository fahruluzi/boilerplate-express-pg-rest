/**
 *  @swagger
 *  tags:
 *    name: Auth
 *    description: API to manage Authentication.
 */

const AuthController = require("./auth.controller");

module.exports = (app) => {
  const authController = new AuthController();

  /**
   * @swagger
   * /auth/login:
   *   post:
   *     summary: Login to the application
   *     tags: [Auth]
   *     security:
   *      - api_key: []
   *     requestBody:
   *      description: Request Body for Login
   *      content:
   *        application/json:
   *          schema:
   *            type: object
   *            required:
   *              - email
   *              - password
   *            properties:
   *              email:
   *                type: string
   *                example : "adminBangtel@bangtelindo.com"
   *              password:
   *                type: string
   *                example : "P@SSword1234"
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: login
   */
  app.route("/auth/login").post(authController.loginUser);
};
