// The shared login page returns to the preview root in the same tab.
if (location.pathname === '/_pages-preview/' && /^#studio(?:\?|$)/.test(location.hash)) {
  const target = new URL('/_pages-preview/studio/', location.origin);
  const query = new URLSearchParams(location.hash.split('?')[1]);
  for (const key of ['invite', 'order']) {
    const value = query.get(key);
    if (value && /^[\w-]{8,96}$/.test(value)) target.searchParams.set(key, value);
  }
  location.replace(target);
}
