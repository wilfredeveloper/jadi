import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./button";
import styles from "./filePreviewDialog.module.css";

interface FileData {
  id: string;
  saves: string[];
  views: number;
  upvotes: string[];
  popularity: number;
  category: string;
  size: number;
  noteTitle: string;
  extension: string;
  url: string;
  createdAt: string;
  updatedAt: string;
  description: string;
  mimeType: string;
  name: string;
  cms_id: string;
  Tags: string[];
  likes: string[];
  updatedAtTime?: number | undefined;
}

interface DialogProps {
  fileData: FileData;
}

export default function PreviewButton({ fileData }: DialogProps) {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant={"default"} size={"sm"}>
          Preview <ArrowIcon />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{fileData.noteTitle}</DialogTitle>
          <DialogDescription className={`text-slate-500`}>
            This is a preview
          </DialogDescription>
        </DialogHeader>
        <div className={`${styles.info_wrapper} mt-4`}>
          <div className={`${styles.info} flex items-center`}>
            <h3>Category</h3>
            <p className={`text-sm ms-3 text-green-200`}>{fileData.category}</p>
          </div>
        </div>
        <DialogFooter>
          <p className={`text-slate-500 text-sm capitalize`}>
            Designed at pxum studios
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function ArrowIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-arrow-right"
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );
}
