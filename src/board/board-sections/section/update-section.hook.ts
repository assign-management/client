import { ApolloCache, DefaultContext, MutationUpdaterFunction, useMutation } from '@apollo/client';
import { UpdateSectionData } from '../../../../__generated__/globalTypes';
import { UPDATE_SECTION } from './update-section.gql';
import { UpdateSection, UpdateSectionVariables } from './__generated__/UpdateSection';

interface UseUpdateSectionArgument {
  id: string;
  data?: UpdateSectionData;
  update?: MutationUpdaterFunction<
    UpdateSection,
    UpdateSectionVariables,
    DefaultContext,
    ApolloCache<any>
  >;
}

export const useUpdateSection = ({ id, data = {}, update }: UseUpdateSectionArgument) => {
  const [updateSection] = useMutation<UpdateSection, UpdateSectionVariables>(UPDATE_SECTION, {
    variables: { id, data },
    update,
  });

  return { updateSection };
};
