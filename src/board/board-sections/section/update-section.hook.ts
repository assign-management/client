import { useMutation } from '@apollo/client';
import { UpdateSectionArgs } from '../../../../__generated__/globalTypes';
import { UPDATE_SECTION } from './update-section.gql';
import { UpdateSection, UpdateSectionVariables } from './__generated__/UpdateSection';

export const useUpdateSection = (id: string, data?: UpdateSectionArgs) => {
  const [updateSection] = useMutation<UpdateSection, UpdateSectionVariables>(UPDATE_SECTION, {
    variables: { id, data },
  });

  return { updateSection };
};
