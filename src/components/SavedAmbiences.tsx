'use client'

import { getSavedAmbiences } from '@/actions/getSavedAmbiences';
import { useSavedAmbiencesStore } from '@/stores/savedAmbiencesStore';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

const SavedAmbiences = () => {
    const { data: session, status } = useSession();
    const { updateLocalSavedAmbiences, setLoading } = useSavedAmbiencesStore()

    useEffect(() => {
        setLoading(true);
        if (status === "unauthenticated") {
            updateLocalSavedAmbiences([]);
            setLoading(false);
            return;
        }

        if (status === "authenticated") {
            (async () => {
                try {
                    const ambiences = await getSavedAmbiences();
                    setLoading(false);
                    updateLocalSavedAmbiences(ambiences);
                } catch (error) {
                    console.error('Error fetching ambiences: ', error);
                }
            }
            )();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [status]);

    return <></>
}

export default SavedAmbiences