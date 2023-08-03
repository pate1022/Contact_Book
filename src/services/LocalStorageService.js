

const CONTACTS_KEY = 'contacts';

export function getContacts() {
  return JSON.parse(localStorage.getItem(CONTACTS_KEY) || '[]');
}

export function saveContacts(contacts) {
  localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
}
