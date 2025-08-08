'use client'

import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const LoginContainer = () => {
    const { data: session, status } = useSession();
    const params = useSearchParams();
    const isPopup = params.get("popup") === "true";
    const router = useRouter();

    useEffect(() => {
        if (session) {
            if (isPopup) {
                window.close();
            };
            router.push('/');
            return;
        }
        if (status !== "loading") signIn("google");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [session, status]);

    return <></>;
}

export default LoginContainer