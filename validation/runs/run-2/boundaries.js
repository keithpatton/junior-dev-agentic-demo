const omitNotes = ({notes: _sessionOnly,...record}) => record;
export const persistentRecords = records => records.map(omitNotes);
export const exportableRecords = records => records.map(omitNotes);
