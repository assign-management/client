import React, { useRef } from 'react';
import DateAdapter from '@mui/lab/AdapterDateFns';
import { DateTimePicker, LocalizationProvider } from '@mui/lab';
import { TaskDueDateWrapper } from './task-due-date-wrapper.styled';
import { TaskFieldLabel, TaskFieldWrapper } from '../common';
import { ImClock } from 'react-icons/im';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useUpdateTask } from '../update-task.hook';
import { FetchTask_fetchTask } from '../../__generated__/FetchTask';
import { yupResolver } from '@hookform/resolvers/yup';
import { taskDueDateSchema } from './task-due-date-schema';
import { TextField } from '@mui/material';
import { getErrorProps } from '../../../../common/react-hook-form/get-error-props';

const getMinDate = () => {
  const date = new Date();
  date.setFullYear(date.getFullYear() - 40);
  return date;
};

const getMaxDate = () => {
  const date = new Date();
  date.setFullYear(date.getFullYear() + 40);
  return date;
};

export const MIN_DATE = getMinDate();
export const MAX_DATE = getMaxDate();

interface TaskDueDateProps {
  task: FetchTask_fetchTask;
}

interface UpdateDueDateVariables {
  dueDate?: Date;
}

const name = 'dueDate';

export const TaskDueDate: React.FC<TaskDueDateProps> = ({ task }) => {
  const { updateTask } = useUpdateTask(task.id);
  const formRef = useRef<HTMLFormElement>(null);

  const handleDueDateSubmit: SubmitHandler<UpdateDueDateVariables> = async ({ dueDate }) => {
    await updateTask({ variables: { id: task.id, data: { dueDate } } });
  };
  const { control, handleSubmit } = useForm<UpdateDueDateVariables>({
    defaultValues: { dueDate: task.dueDate },
    resolver: yupResolver(taskDueDateSchema),
    mode: 'all',
  });

  return (
    <TaskDueDateWrapper
      ref={formRef}
      autoComplete="off"
      noValidate
      onSubmit={handleSubmit(handleDueDateSubmit)}
    >
      <TaskFieldLabel label="due date" icon={ImClock} name="dueDate" />
      <TaskFieldWrapper>
        <Controller
          name="dueDate"
          control={control}
          render={({ field, fieldState }) => {
            const errorProps = getErrorProps(fieldState);
            const handleBlur = () => formRef.current?.requestSubmit();

            return (
              <LocalizationProvider dateAdapter={DateAdapter}>
                <DateTimePicker
                  {...field}
                  {...errorProps}
                  ampm={false}
                  openTo="day"
                  mask="__/__/____ __:__"
                  inputFormat="dd/MM/yyyy hh:mm"
                  minDate={MIN_DATE}
                  maxDate={MAX_DATE}
                  onClose={handleBlur}
                  renderInput={(params) => {
                    return (
                      <TextField
                        {...field}
                        {...params}
                        {...errorProps}
                        onBlur={handleBlur}
                        id={name}
                        fullWidth
                        hidden={true}
                        variant="outlined"
                        size="medium"
                      />
                    );
                  }}
                />
              </LocalizationProvider>
            );
          }}
        />
      </TaskFieldWrapper>
    </TaskDueDateWrapper>
  );
};
