import { FaCheckCircle } from "react-icons/fa";

interface FormSuccessProps {
  message?: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;
  return (
    <div className="rounded flex items-center border-s-4 border-green-500 bg-green-50 p-4 dark:border-green-600 dark:bg-green-900">
      <FaCheckCircle className="inline size-5 mr-2" />
      <p className="text-sm text-green-700 dark:text-green-200">{message}</p>
    </div>
  );
};
