import { useQuery ,useMutation } from "convex/react";
import { useEffect } from "react";
import { toast } from "sonner";
import { useState } from "react";


export const useConvexQuery = (query, ...args) => {
  const result = useQuery(query, ...args);
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (result) {
      try {
        setData(result);
        setError(null);
      } catch (error) {
        setError(error);
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    } else {
      setIsLoading(true);
    }
  }, [result]);

  return { data, isLoading, error };
};

export const useConvexMutations = (mutation) => {
  const mutationFn = useMutation(mutation);
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const mutate = async (...args) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await mutationFn(...args);
      setData(response);
      return response;
    } catch (error) {
      setError(error);
      toast.error(error.message);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };
  return { data, isLoading, error, mutate };

};
