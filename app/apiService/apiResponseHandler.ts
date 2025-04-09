import { toast } from 'sonner';

interface ApiResponse {
  data?: {
    description?: string;
  };
  response?: {
    data?: {
      description?: string;
    };
  };
}

export const HandleApiSuccess = (data?: ApiResponse, message?: string) => {
  toast('Successful!', {
    description: data?.data?.description || message,
    style: { color: 'black', backgroundColor: 'white' }
  });
};

export const HandleApiError = (error?: ApiResponse, refetchApi?: () => void) => {
  toast('Uh oh! Something went wrong.', {
    description: error?.response?.data?.description || 'An error occurred, please try again.',
    style: { color: 'white', backgroundColor: 'red' },
    action: {
      label: 'Retry',
      onClick: () => refetchApi!()
    }
  });
};
