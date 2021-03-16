/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        user_uuid:
 *          type: string
 *          description: The auto-generated id of the user.
 *        role_uuid:
 *          type: string
 *          description: FK role of user.
 *        name:
 *          type: string
 *          description: Name User.
 *        email:
 *          type: string
 *          description: Email address user
 *        password:
 *          type: string
 *          description: the secret string of user
 *        status:
 *          type: smallint
 *          description: Have you activate users?
 *        createdAt:
 *          type: string
 *          format: date
 *          description: The date of the record creation.
 *        updatedAt:
 *          type: string
 *          format: date
 *          description: The date of the record updated.
 *        deletedAt:
 *          type: string
 *          format: date
 *          description: The date of the record deleted.
 *      example:
 *        role_uuid: 7f47ac0e-21ab-11eb-9b25-0242ac120002
 *        name: Admin Bangtelindo
 *        email: adminBangtel@bangtelindo.com
 *        password: P@SSword1234
 *        status: 1
 */