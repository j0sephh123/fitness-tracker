import { useRouter } from "next/router";
import { Endpoints } from "../types";

export default function useNavigate(endpoint: Endpoints) {
  const router = useRouter();

  return () => router.push(endpoint);
}
