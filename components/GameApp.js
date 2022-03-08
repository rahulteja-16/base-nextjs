import { useRef, useEffect } from 'react';
import { useRouter } from 'next/router'
import { mount } from 'game/Game';


export default ({ }) => {
    const ref = useRef(null);
    const router = useRouter();

    useEffect(() => {
        if(!router.isReady) return;
        const { onParentNavigate } =  mount(ref.current, {
            onNavigate: ({ location: {pathname: nextPathname} }) => {
                const { asPath } = router;
                if (asPath !== nextPathname) {
                    router.push(nextPathname);
                }
            },
            initialPath: router.asPath
        });

        onParentNavigate({pathname: router.asPath});
        router.events.on('routeChangeStart', (newPath) => onParentNavigate({ pathname: newPath }));
    }, [router]);

    return <div ref={ref} />;
};