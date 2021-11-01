import express from "express";
import { direct } from "../controllers";

const router = express.Router(); 

/**
 * @swagger
 * components:
 *  schemas:
 *    Notes:
 *      type: object
 *      properties:
 *        title:
 *          type: string
 *          minLength: 3
 *        id:
 *          type: integer
 *          format: int32
 *        content:
 *          type: string
 *          minLength: 3
 *          maxLength: 500
 *        isDeleted:
 *          type: boolean
 *          default: false
 *        description:
 *          type: string
 *        releaseDate:
 *          type: string
 *          format: date-time
 *      example:
 *            id: 2
 *            title: sunny
 *            content: bla-bla-bla-bla
 *            description: blacklisted
 *            releaseDate: 2021-02-12
 *
 */

/**
 * @swagger
 * tags:
 *  name: Notes
 *  description: The notes with BD
 */

/**
 * @swagger
 * /api/notes:
 *   get:
 *     summary: Get notes
 *     tags: [Notes]
 *     responses:
 *       200:
 *        description: Get notes
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Notes'
 */
router.get("/", direct.getListNotes);

/**
 * @swagger
 * /api/notes:
 *  post:
 *    summary: Add a new note
 *    tags: [Notes]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Notes'
 *    responses:
 *      200:
 *        description: Create note
 *        content:
 *             application/json:
 *                schema:
 *                    $ref: '#/components/schemas/Notes'
 *      500:
 *         description: Some server error
 */

router.post("/", direct.createOneNote);

/**
 * @swagger
 * /api/notes/{id}:
 *   put:
 *     summary: Update note by ID
 *     tags: [Notes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: 
 *           type: string
 *         required: true
 *         description: The note ID
 *     requestBody:
 *       required: true
 *       content: 
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Notes'
 *     responses:
 *       200: 
 *         description: The note was update 
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Notes'
 *       404: 
 *         description: The note was not found
 *       500:
 *         description: Some error happend
 *      
 */

router.put("/:id", direct.updateOneNote);

/**
 * @swagger
 * /api/notes/{id}:
 *   delete:
 *     summary: Delete note by ID
 *     tags: [Notes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: 
 *           type: string
 *         required: true
 *         description: The note ID
 *     responses:
 *       200: 
 *         description: The note was delete 
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Notes'
 *       404: 
 *         description: The note was not found
 *       500:
 *         description: Some error happend
 *      
 */

router.delete("/:id", direct.deleteOneNote);

export default router;
