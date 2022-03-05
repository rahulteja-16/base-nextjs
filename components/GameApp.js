import { useRef, useEffect } from 'react';
import { useRouter } from 'next/router'
import { mount } from 'game/Game';


export default ({ }) => {
    const ref = useRef(null);
    const routerDetails = useRouter();

    useEffect(() => {
        const { onParentNavigate } =  mount(ref.current, {
            onNavigate: ({ location: {pathname: nextPathname} }) => {
                const { asPath } = routerDetails;
                if (asPath !== nextPathname) {
                    routerDetails.push(nextPathname);
                }
            },
            initialPath: routerDetails.asPath
        });

        // onParentNavigate(routerDetails.asPath) F
        // routerDetails.events.on('routeChangeComplete', onParentNavigate);
    }, []);

    return <>Game-<div ref={ref} /></>;
};