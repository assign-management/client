export interface DialogFormProps {
  handleDialogClose: () => void;
}

export interface DialogFormPropsWithInitialData<P = any> {
  handleDialogClose: () => void;
  initialData: P;
}
