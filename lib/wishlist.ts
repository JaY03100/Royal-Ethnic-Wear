const WISHLIST_KEY = 'rajvansh_wishlist';

export function getWishlist(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const data = localStorage.getItem(WISHLIST_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function addToWishlist(id: string): void {
  const list = getWishlist();
  if (!list.includes(id)) {
    list.push(id);
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(list));
  }
}

export function removeFromWishlist(id: string): void {
  const list = getWishlist().filter(i => i !== id);
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(list));
}

export function toggleWishlist(id: string): boolean {
  const list = getWishlist();
  if (list.includes(id)) {
    removeFromWishlist(id);
    return false;
  } else {
    addToWishlist(id);
    return true;
  }
}

export function isInWishlist(id: string): boolean {
  return getWishlist().includes(id);
}
