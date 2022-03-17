import type { GetServerSideProps, NextPage } from 'next';
import { Board } from '../../src/board';

interface BoardPanelProps {
  projectId: string;
  taskId: string;
}

const BoardPanel: NextPage<BoardPanelProps> = ({ projectId, taskId }) => {
  return <>{<Board projectId={projectId} />}</>;
};

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const [projectId, taskId = ''] = query.slug as string[];

  return { props: { projectId, taskId } };
};

export default BoardPanel;
