import { useMutation } from '@apollo/client';
import { FetchSections, FetchSections_fetchSections } from '../../__generated__/FetchSections';
import { DELETE_SECTION } from './delete-section.gql';
import { DeleteSection, DeleteSectionVariables } from './__generated__/DeleteSection';

export const useDeleteSection = (id: string) => {
  const [deleteSection] = useMutation<DeleteSection, DeleteSectionVariables>(DELETE_SECTION, {
    variables: { id },
    update(cache, { data }) {
      const section = data?.deleteSection?.section;

      if (section) {
        const { __typename } = section;
        const normalizedId = cache.identify({ __typename, id: id });
        cache.evict({ id: normalizedId });
        cache.gc();
      }
    },
  });

  return { deleteSection };
};
