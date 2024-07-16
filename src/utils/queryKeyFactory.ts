/**
 *  Factory function to generate consistent and scalable query keys for
 * each resource
 *
 * @param scope - cache key where the resource will be saved
 * @returns  Object of generated query keys
 */
export const queryKeyFactory = (scope: string) => {
  const keys = {
    all: [{ scope }] as const,
    lists: () => [{ ...keys.all[0], entity: "list" }] as const,
    list: (filters: Record<string, any> = {}) =>
      [{ ...keys.lists()[0], filters }] as const,
    details: () => [{ ...keys.all[0], entity: "detail" }] as const,
    detail: (id: string) => [{ ...keys.details()[0], id }] as const,
  };

  return keys;
};
