import { DateTimePicker, LocalizationProvider } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterDateFns';
import { Control, Controller } from 'react-hook-form';
import { TextareaAutosize, TextField, useTheme } from '@mui/material';
import React from 'react';
import { getErrorProps } from '../../../../common/react-hook-form/get-error-props';
import { UpdateDescriptionFieldValues } from './update-description-field-values.interface';

interface DateTimeFieldProps {
  control: Control<UpdateDescriptionFieldValues, any>;
  handleBlur: () => void;
  name: string;
  placeholder: string;
}

export const TaskDescriptionField: React.FC<DateTimeFieldProps> = ({
  control,
  handleBlur,
  name,
  placeholder,
}) => {
  const theme = useTheme();
  return (
    <Controller
      name={name as any}
      control={control}
      render={({ field, fieldState }) => {
        const errorProps = getErrorProps(fieldState);
        return (
          <TextField
            size="small"
            autoFocus
            inputProps={{
              sx: {
                fontFamily: 'Lato, sans-serif',
                fontSize: '1.5rem',
                lineHeight: 1.5,
                fontWeight: 400,
                verticalAlign: 'middle',
                minHeight: '5rem',
                wordBreak: 'break-word',
                letterSpacing: 'normal',
              },
            }}
            fullWidth
            multiline
            {...field}
            placeholder={placeholder}
            onBlur={handleBlur}
            id={name}
            hidden={true}
          />
        );
      }}
    />
  );
};
