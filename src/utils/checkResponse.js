export const checkResponse = async (res) => {
  const data = await res.json();
  return res.ok
    ? data
    : Promise.reject(data);
};