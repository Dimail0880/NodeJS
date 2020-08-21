const ContactsController = require("../controllers/contactsControl");
const express = require("express");
const router = express.Router();

const contactsController = new ContactsControler();

router.get("/", contactsController.listContacts);

router.get("/:contactId", contactsController.getContact);

router.post("/", contactsController.addContact);

router.put("/:contactId", contactsController.updateContact);

router.delete("/:contactId", contactsController.deleteContact);

module.exports = router;
