import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

type props = {
  title: string;
  description: string;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export function SmallDialog(props: props) {
  const { title, description, open, onClose, children } = props;
  return (
    <Dialog maxWidth="md" fullWidth open={open} onClose={onClose}>
      <DialogTitle className="text-center">{title}</DialogTitle>
      <DialogContent className="space-y-3">
        <DialogContentText>{description}</DialogContentText>
        {children}
      </DialogContent>
    </Dialog>
  );
}
