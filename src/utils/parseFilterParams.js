const parseType = (type) => {
  const isString = typeof type === 'string';
  if (!isString) return;
  const isType = (type) => ['work', 'home', 'personal'].includes(type);

  if (isType(type)) return type;
};

const parseName = (name) => {
  const isString = typeof name === 'string';
  if (!isString) return;
  return name.trim();
};

const parseBoolean = (value) => {
  if (typeof value !== 'string') return;
  return value === 'true' ? 'true' : 'false';
};

export const parseFilterParams = (query) => {
  const { contactType, isFavourite, name } = query;

  const parsedType = parseType(contactType);
  const parsedBoolean = parseBoolean(isFavourite);
  const parsedName = parseName(name);

  return {
    contactType: parsedType,
    isFavourite: parsedBoolean,
    name: parsedName,
  };
};
