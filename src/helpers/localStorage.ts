type LocalStorageItems = 'userToken';

export default function getItem (itemName: LocalStorageItems): string | null {
	return localStorage.getItem(itemName);
}
