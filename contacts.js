const fs = require('fs').promises;
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const contactsPath = path.resolve('./db/contacts.json');

const listContacts = async () => {
  try {
    const contactsList = JSON.parse(await fs.readFile(contactsPath, 'utf8'));

    return contactsList;
  } catch (error) {
    console.error(error);
  }
};

const getContactById = async contactId => {
  try {
    const contactsList = await listContacts();

    const contactsItem = contactsList.find(({ id }) => id === contactId);

    return contactsItem;
  } catch (error) {
    console.error(error);
  }
};

const addContact = async (name, email, phone) => {
  try {
    const completedContactsList = await listContacts();
    const addedContactsItem = {
      id: uuidv4(),
      name,
      email,
      phone,
    };
    completedContactsList.push(addedContactsItem);

    await fs.writeFile(
      contactsPath,
      JSON.stringify(completedContactsList),
      'utf8'
    );

    return completedContactsList;
  } catch (error) {
    console.error(error);
  }
};

const removeContact = async contactId => {
  try {
    const contactsList = await listContacts();

    const updatedContactsList = contactsList.filter(
      ({ id }) => id !== contactId
    );

    await fs.writeFile(
      contactsPath,
      JSON.stringify(updatedContactsList),
      'utf8'
    );

    return updatedContactsList;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
