import { List, ListItem, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import React from 'react';
import { GoX } from 'react-icons/go';
import { FetchTask_fetchTask } from '../__generated__/FetchTask';
import { useDeleteTask } from './delete-task.hook';
import { TaskDueDate } from './task-due-date';
import { TaskPanelContent } from './task-panel-content.styled';
import { TaskPanelHeader } from './task-panel-header/task-panel-header';
import { TaskPanelWrapper } from './task-panel-wrapper.styled';

interface TaskPanelProps {
  task: FetchTask_fetchTask;
  handleClose: () => void;
}

export const TaskPanel: React.FC<TaskPanelProps> = ({ task, handleClose }) => {
  const { deleteTask } = useDeleteTask(task?.id as string);
  const handleDeleteTask = async () => {
    await deleteTask();
    handleClose();
  };

  return (
    <TaskPanelWrapper>
      <TaskPanelHeader handleClose={handleClose} task={task} />
      <TaskPanelContent>
        <div>
          <TaskDueDate task={task} />
        </div>
        <div>
          <List
            component="nav"
            subheader={<ListSubheader id="Task Actions">Task Actions</ListSubheader>}
          >
            <ListItem button onClick={handleDeleteTask}>
              <ListItemIcon>
                <GoX />
              </ListItemIcon>
              <ListItemText primary="Delete" />
            </ListItem>
          </List>
        </div>
      </TaskPanelContent>
    </TaskPanelWrapper>
  );
};
