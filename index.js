const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} = require('./contacts');
const { Command } = require('commander');

const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      const contactsList = await listContacts();
      console.table(contactsList);
      break;

    case 'get':
      const contactsItem = await getContactById(id);
      console.log(contactsItem);
      break;

    case 'add':
      const completedContactsList = await addContact(name, email, phone);
      console.table(completedContactsList);
      break;

    case 'remove':
      const updatedContactsList = await removeContact(id);
      console.table(updatedContactsList);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
};

invokeAction(argv);