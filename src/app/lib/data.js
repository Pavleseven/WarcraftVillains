export const getVillains = async function () {
  const res = await fetch(
    "https://6581820f3dfdd1b11c437433.mockapi.io/api/v1/villains/Characters",
    {
      next: { revalidate: 5 },
    }
  );

  return await res.json();
};

export const getSingleVillain = async function (id) {
  const res = await fetch(
    `https://6581820f3dfdd1b11c437433.mockapi.io/api/v1/villains/Characters/${id}`
  );

  return await res.json();
};
