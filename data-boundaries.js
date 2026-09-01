const withoutNotes = ({ notes: _sessionOnly, ...safe }) => safe;

export const durable = (applications) => applications.map(withoutNotes);
export const downloadable = (applications) => applications.map(withoutNotes);
