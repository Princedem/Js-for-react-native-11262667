function createUserProfiles(names, modifiedNames) {
  if (names.length !== modifiedNames.length) {
    throw new Error('The length of both arrays must be the same.');
  }

  return names.map((name, index) => ({
    id: index + 1,
    originalName: name,
    modifiedName: modifiedNames[index]
  }));
}

module.exports = { createUserProfiles };