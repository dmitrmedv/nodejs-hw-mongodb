const parseType = (type) => {
  const isString = typeof type === 'string';
  if (!isString) return;
  const isType = (type) => ['work', 'home', 'personal'].includes(type);

  if (isType(type)) return type;
};

const parseBoolean = (value) => {
  if (typeof value !== 'string') return;
  return value === 'true' ? 'true' : 'false';
};

export const parseFilterParams = (query) => {
  const { type, isFavourite } = query;

  const parsedType = parseType(type);
  const parsedBoolean = parseBoolean(isFavourite);

  return {
    type: parsedType,
    isFavourite: parsedBoolean,
  };
};
