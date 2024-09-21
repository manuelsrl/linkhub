import { IoWarningSharp } from "react-icons/io5";

interface FormErrorProps {
  message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;
  return (
    <div className="rounded flex items-center border-s-4 border-red-500 bg-red-50 p-4 dark:border-red-600 dark:bg-red-900">
      <IoWarningSharp className="inline size-5 mr-2" />
      <p className="text-sm text-red-700 dark:text-red-200">{message}</p>
    </div>
  );
};
