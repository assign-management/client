import { useMutation } from '@apollo/client';
import { DELETE_SECTION } from './delete-section.gql';
import { DeleteSection, DeleteSectionVariables } from './__generated__/DeleteSection';

export const useDeleteSection = (id: string) => {
  const [deleteSection] = useMutation<DeleteSection, DeleteSectionVariables>(DELETE_SECTION, {
    variables: { id },
    update(cache, { data }) {
      const __typename = data?.deleteSection.section.__typename;
      if (__typename) cache.evict({ id: cache.identify({ __typename, id }) });
      cache.gc();
    },
  });

  return { deleteSection };
};
