export function forPersistence(applications){
  return applications.map(withoutPrivateNotes);
}

export function forExport(applications){
  return applications.map(withoutPrivateNotes);
}

function withoutPrivateNotes({notes: _privateNotes,...shareable}){
  return shareable;
}
