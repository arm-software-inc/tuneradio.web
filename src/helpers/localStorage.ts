type LocalStorageItems = 'token' | 'lastStation';

export function getItem (itemName: LocalStorageItems): string | null {
	return localStorage.getItem(itemName);
}

export function setitem(itemName: LocalStorageItems, value: string): void {
	localStorage.setItem(itemName, value);
}
