export const getImage = async (key, imageName) => {
  switch (key) {
    case "users":
      const data = await fetch(`/images/users/${imageName}`);
      return data.url;
      break;
    default:
      break;
  }
};
