// similer products
const similerItems = (currentItem: any, allItems: any, slug: string) => {
  let servicos: string[] = [];
  let tags: string[] = [];

  // set servicos
  if (currentItem.data.servicos.length > 0) {
    servicos = currentItem.data.servicos;
  }

  // set tags
  if (currentItem.data.tags.length > 0) {
    tags = currentItem.data.tags;
  }

  // filter by servicos
  const filterByservicos = allItems.filter((item: any) =>
    servicos.find((category) => item.data.servicos.includes(category)),
  );

  // filter by tags
  const filterByTags = allItems.filter((item: any) =>
    tags.find((tag) => item.data.tags.includes(tag)),
  );

  // merged after filter
  const mergedItems = [...new Set([...filterByservicos, ...filterByTags])];

  // filter by slug
  const filterBySlug = mergedItems.filter((product) => product.slug !== slug);

  return filterBySlug;
};

export default similerItems;
