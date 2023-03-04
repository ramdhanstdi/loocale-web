import Button from "@components/design/Button";
import Dialog from "@components/design/Dialog";
import React from "react";

interface ClosePostDialogProps {
  open: boolean;
  onSaveAsDraft: () => void;
  onDiscard: () => void;
}
const ClosePostDialog: React.FC<ClosePostDialogProps> = ({ open, onSaveAsDraft, onDiscard }) => {
  return (
    <Dialog open={open} maxWidth="xs">
      <div className="p-4">
        <h1 className="text-center font-bold text-[16px] mb-6 ">Mau menyimpan tulisan ini?</h1>
        <div className="flex w-full gap-6 justify-center">
          <button
            onClick={onDiscard}
            className="w-[120px] rounded-lg font-bold text-xs text-secondary-500 border border-secondary-500 hover:text-secondary-800 hover:border-secondary-800"
          >
            Tidak
          </button>
          <Button
            variant="contained"
            onClick={onSaveAsDraft}
            className="py-2 px-4 rounded-lg font-bold w-[120px] text-xs"
          >
            Ya
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

export default ClosePostDialog;
