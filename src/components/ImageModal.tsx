import { Dialog, DialogContent } from "./ui/dialog";
import { X } from "lucide-react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

export const ImageModal = ({ isOpen, onClose, imageSrc, imageAlt }: ImageModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl p-0 bg-transparent border-none">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 rounded-full bg-card/80 backdrop-blur-sm hover:bg-card transition-colors z-50"
          aria-label="Close"
        >
          <X className="h-6 w-6 text-foreground" />
        </button>
        <div className="relative">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-auto rounded-lg shadow-2xl"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
