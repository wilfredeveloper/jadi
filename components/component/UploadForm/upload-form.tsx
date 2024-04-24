/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/qgLUHYRmDKx
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

"use client";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import styles from "./styles.module.css";
import { uploadNote } from "@/src/app/actions/uploadActions";
import { useToast } from "@/components/ui/use-toast";
import { SpinnerRoundFilled } from "spinners-react";
import { useFormState, useFormStatus } from "react-dom";
import { useRouter } from 'next/navigation'

const initialState = {
  message: "",
};

function SubmitButton() {
  
  const { pending } = useFormStatus();
  const { toast } = useToast();

  // const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
  //   event.preventDefault();
  //   toast({
  //     title: "🎉 Uploading Note",
  //     description: "Your note will be uploaded in a jiffy buddy",
  //   });
  // };

  return (
    <Button type="submit" size={"sm"}>
      Upload Note {pending && <SpinnerRoundFilled size={20} />}
    </Button>
  );
}

export function UploadForm() {
  const [state, formAction] = useFormState(uploadNote, initialState);

  return (
    <form action={formAction}>
      <Card className={`${styles.form_card}`}>
        <CardHeader>
          {<h1>{state?.message}</h1> || <h1>Message will appear here</h1>}
          <CardTitle>Upload Note</CardTitle>
          <CardDescription className="mb-4">
            Add your note by uploading a file.
          </CardDescription>
          <div className="grid gap-4">
            <Label className="text-sm" htmlFor="file">
              <span className="flex items-center">
                <ArrowUpIcon className="mr-1.5 w-4 h-4" />
                Upload File
              </span>
            </Label>
            <Input
              className={`w-full text-sm h-16 ${styles.file_input}`}
              id="file"
              placeholder="Select a file"
              type="file"
              name="file"
            />
          </div>
        </CardHeader>
        <CardContent className={`${styles.card_content}`}>
          <div className={`space-y-6`}>
            <div className="grid gap-4">
              <Label className="text-sm" htmlFor="title">
                <span className="flex items-center">
                  <PencilIcon className="mr-1.5 w-4 h-4" />
                  Title
                </span>
              </Label>
              <Input
                className="text-sm w-full h-16"
                id="title"
                name="title"
                placeholder="Enter a title"
              />
            </div>
            <div className="grid gap-4">
              <Label className="text-sm" htmlFor="title">
                <span className="flex items-center">
                  <PencilIcon className="mr-1.5 w-4 h-4" />
                  Description
                </span>
              </Label>
              <Input
                className="text-sm w-full h-16"
                id="description"
                name="description"
                type="textarea"
                placeholder="What's the note about?"
              />
            </div>
            <div className="grid gap-4">
              <Label className="text-sm" htmlFor="tags">
                <span className="flex items-center">
                  <TagIcon className="mr-1.5 w-4 h-4" />
                  Tags
                </span>
              </Label>
              <div className="text-xs text-slate-500">Comma-separated list of tags.</div>
              <Input
                className="text-sm w-full h-16"
                id="tags"
                name="tags"
                placeholder="Example: Computer Science, Math, etc."
              />
            </div>
            <div className="grid gap-4">
              <Label className="text-sm" htmlFor="tags">
                <span className="flex items-center">
                  <TagIcon className="mr-1.5 w-4 h-4" />
                  Category
                </span>
              </Label>
              <div className="text-xs text-slate-500">
                This is like a row in a Library where your note will be placed
              </div>
              <Input
                className="text-sm w-full h-16"
                id="tags"
                name="category"
                placeholder="Enter Category"
              />
            </div>
            <SubmitButton />
          </div>
        </CardContent>
      </Card>
    </form>
  );
}

function ArrowUpIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  );
}

function PencilIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="yellow"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  );
}

function TagIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="yellow"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
      <path d="M7 7h.01" />
    </svg>
  );
}
